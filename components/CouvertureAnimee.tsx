"use client";

import { useEffect, useRef, useState } from "react";

/* Couverture animée (ordinateur seulement) : les capes ondulent comme un drapeau au vent, les mèches
   des cheveux balancent sous une brise de face. Rien n'est redessiné : la couverture validée est
   découpée en calques (décor, capes, corps, cheveux) par marque/scripts/calques-animation.py et
   marque/scripts/meches.py (dépôt jean-claude-code), puis chaque pixel des capes et des cheveux est
   déplacé dans un shader WebGL. Au repos, les calques redonnent l'image fixe, qui reste dessous :
   téléphone, mouvement réduit, WebGL absent ou calques pas encore chargés, on voit l'image fixe. */

const DOSSIER = "/couverture";
const VERSION = "20261120"; // à changer quand les calques sont régénérés (sinon le cache mélange les versions)
const L = 1536;
const H = 1024;

type Piece = { boite: [number, number, number, number]; pivot: [number, number] } & Record<string, unknown>;

/* Capes : la vague part de l'épaule (pivot) vers chaque bout libre ; amplitude nulle à l'attache et
   tenue là où la cape touche son personnage (carte liberte-<nom>.png) ; elle se soulève moitié
   moins qu'elle ne retombe ; la pente de la vague éclaire ou assombrit le tissu. */
const CAPES: Record<string, Piece> = {
  lunettes: { boite: [825, 134, 1005, 233], pivot: [973, 155], longueur: 134, amplitude: 7, portee: 1.0, onde: 120, periode: 0.8, dephasage: 0.0 },
  brune: { boite: [710, 312, 887, 422], pivot: [862, 350], longueur: 138, amplitude: 7, portee: 1.0, onde: 125, periode: 0.85, dephasage: 1.7 },
  cravate: { boite: [725, 436, 913, 552], pivot: [893, 468], longueur: 154, amplitude: 7.5, portee: 1.0, onde: 135, periode: 0.82, dephasage: 3.1 },
  blonde: { boite: [939, 466, 1123, 619], pivot: [1068, 492], longueur: 115, amplitude: 8.5, portee: 1.7, onde: 110, periode: 0.78, dephasage: 4.4 },
  jc: { boite: [1016, 175, 1342, 370], pivot: [1232, 204], longueur: 202, amplitude: 10, portee: 1.6, onde: 180, periode: 0.95, dephasage: 2.3 },
};

/* Cheveux : chaque mèche (carte meches-<nom>.png : racine, position le long de la mèche, rythme)
   balance autour de sa racine, la pointe en retard ; même vitesse et même brise que la cape du
   personnage ; mouvement lissé sur 7 px pour que les traits se courbent sans se casser ; le vent
   de face les plaque (montée réduite au quart). Jean-Claude a son béret : ses cheveux ne bougent pas. */
const CHEVEUX: Record<string, Piece> = {
  lunettes: { boite: [962, 99, 1032, 175], pivot: [1005, 125], angle: 6 },
  brune: { boite: [848, 267, 937, 350], pivot: [905, 283], angle: 4.5 },
  cravate: { boite: [876, 395, 946, 471], pivot: [935, 412], angle: 5 },
  blonde: { boite: [1081, 421, 1166, 505], pivot: [1140, 452], angle: 7 },
};
for (const n of Object.keys(CHEVEUX)) {
  CHEVEUX[n].periode = CAPES[n].periode;
  CHEVEUX[n].dephasage = CAPES[n].dephasage;
}

const VS = `attribute vec2 a; varying vec2 p;
  void main() { p = (a * 0.5 + 0.5) * vec2(1536.0, 1024.0); p.y = 1024.0 - p.y; gl_Position = vec4(a, 0.0, 1.0); }`;

const FS = `precision highp float; varying vec2 p;
  uniform sampler2D piece, liberte, meches; uniform vec2 pivot;
  uniform float t, amplitude, onde, periode, dephasage, longueur, portee, angle, force, souleve, ombre, mode;
  const float PI2 = 6.2831853;
  const vec2 TAILLE = vec2(1536.0, 1024.0);
  // une mèche : décalage du pixel quand la mèche pivote autour de sa racine en se courbant
  vec2 meche(vec2 q) {
    vec4 m = texture2D(meches, q / TAILLE) * 255.0;
    if (m.a < 128.0) return vec2(0.0);
    vec2 racine = q + vec2(m.r - 128.0, m.g - 128.0);
    float rel = floor(m.b / 16.0) / 15.0;
    float phi = mod(m.b, 16.0) / 16.0 * PI2;
    float w = PI2 / periode * (0.85 + 0.3 * fract(phi * 0.73));
    float brise = 0.8 + 0.2 * sin(PI2 * t / 3.7 + dephasage);
    float th = radians(angle) * pow(rel, 1.5) * brise * force
             * (sin(w * t + phi - 1.2 * rel) + 0.35 * sin(2.1 * w * t + 1.7 * phi - 2.0 * rel));
    vec2 v = q - racine;
    return vec2(cos(th) * v.x - sin(th) * v.y, sin(th) * v.x + cos(th) * v.y) - v;
  }
  void main() {
    vec2 d; float s = 0.0;
    if (mode < 0.5) {
      vec2 r = p - pivot;
      float u = length(r);
      vec2 dir = r / max(u, 1.0);
      vec2 travers = vec2(-dir.y, dir.x);
      float libre = clamp(texture2D(liberte, p / TAILLE).r * portee, 0.0, 1.0);
      float w = PI2 / periode;
      float risee = 0.8 + 0.2 * sin(PI2 * t / 3.7 + dephasage);
      float e = libre * pow(clamp(u / longueur, 0.0, 1.0), 1.4) * risee * force;
      float p1 = PI2 * u / onde - w * t + dephasage;
      float p2 = PI2 * u / (onde / 2.3) - 1.8 * w * t + 2.0 * dephasage;
      d = travers * 0.85 * amplitude * e * (sin(p1) + 0.3 * sin(p2));
      s = e * cos(p1) * ombre;
    } else {
      vec2 somme = 2.0 * meche(p); float n = 2.0;
      for (int k = 0; k < 16; k++) {
        float a = PI2 * mod(float(k), 8.0) / 8.0 + (k < 8 ? 0.0 : 0.39);
        float r = k < 8 ? 3.5 : 7.0;
        float poids = k < 8 ? 1.0 : 0.7;
        vec2 o = r * vec2(cos(a), sin(a));
        if (texture2D(meches, (p + o) / TAILLE).a > 0.5) { somme += poids * meche(p + o); n += poids; }
      }
      d = somme / n;
    }
    if (d.y < 0.0) d.y *= souleve;
    vec4 c = texture2D(piece, (p - d) / TAILLE);
    c.rgb *= 1.0 - 0.16 * max(-s, 0.0);
    c.rgb += vec3(0.07 * max(s, 0.0)) * c.a;
    gl_FragColor = c;
  }`;

const url = (fichier: string) => `${DOSSIER}/${fichier}?v=${VERSION}`;
const charge = (fichier: string) =>
  new Promise<HTMLImageElement>((ok, ko) => {
    const i = new Image();
    i.onload = () => ok(i);
    i.onerror = ko;
    i.src = url(fichier);
  });

type Reglages = { prefixe: string; carte: string; mode: number; souleve: number; ombre: number };

/* Une toile WebGL qui anime une série de pièces ; renvoie la fonction qui dessine l'instant t. */
async function toile(canvas: HTMLCanvasElement, pieces: Record<string, Piece>, r: Reglages) {
  const gl = canvas.getContext("webgl", { premultipliedAlpha: true, alpha: true, antialias: false });
  if (!gl) throw new Error("WebGL indisponible");
  const pr = gl.createProgram()!;
  for (const [type, src] of [[gl.VERTEX_SHADER, VS], [gl.FRAGMENT_SHADER, FS]] as const) {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) ?? "shader");
    gl.attachShader(pr, s);
  }
  gl.linkProgram(pr);
  gl.useProgram(pr);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const att = gl.getAttribLocation(pr, "a");
  gl.enableVertexAttribArray(att);
  gl.vertexAttribPointer(att, 2, gl.FLOAT, false, 0, 0);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  const U = (n: string) => gl.getUniformLocation(pr, n);
  const texture = (img: HTMLImageElement, brute: boolean) => {
    // brute : image de données (carte des mèches), ni prémultipliée ni lissée
    const tx = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tx);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !brute);
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, brute ? gl.NONE : gl.BROWSER_DEFAULT_WEBGL);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    const f = brute ? gl.NEAREST : gl.LINEAR;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, f);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, f);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return tx;
  };
  const noms = Object.keys(pieces);
  const images = await Promise.all(noms.map((n) => Promise.all([charge(`${r.prefixe}-${n}.png`), charge(`${r.carte}-${n}.png`)])));
  const tex = noms.map((n, k) => {
    gl.activeTexture(gl.TEXTURE0);
    const t0 = texture(images[k][0], false);
    gl.activeTexture(gl.TEXTURE1);
    const t1 = texture(images[k][1], r.mode === 1);
    return [t0, t1] as const;
  });
  gl.uniform1i(U("piece"), 0);
  gl.uniform1i(U(r.mode === 1 ? "meches" : "liberte"), 1);
  gl.uniform1i(U(r.mode === 1 ? "liberte" : "meches"), 1);
  gl.uniform1f(U("souleve"), r.souleve);
  gl.uniform1f(U("ombre"), r.ombre);
  gl.uniform1f(U("mode"), r.mode);
  return (t: number, force: number) => {
    gl.viewport(0, 0, L, H);
    gl.disable(gl.SCISSOR_TEST);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.SCISSOR_TEST); // chaque pièce n'est calculée que dans son emprise
    gl.uniform1f(U("t"), t);
    gl.uniform1f(U("force"), force);
    noms.forEach((n, k) => {
      const c = pieces[n];
      const [x0, y0, x1, y1] = c.boite;
      gl.scissor(x0, H - y1, x1 - x0, y1 - y0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, tex[k][0]);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, tex[k][1]);
      gl.uniform2f(U("pivot"), c.pivot[0], c.pivot[1]);
      for (const cle of ["amplitude", "onde", "periode", "dephasage", "longueur", "portee", "angle"]) {
        gl.uniform1f(U(cle), (c[cle] as number | undefined) ?? 1);
      }
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    });
  };
}

export function CouvertureAnimee() {
  const zone = useRef<HTMLDivElement>(null);
  const toileCapes = useRef<HTMLCanvasElement>(null);
  const toileCheveux = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(false);
  const [prete, setPrete] = useState(false);

  // téléphone et mouvement réduit : l'image fixe suffit, rien n'est chargé
  useEffect(() => {
    const ecran = matchMedia("(min-width: 900px)");
    const calme = matchMedia("(prefers-reduced-motion: reduce)");
    const decide = () => setActive(ecran.matches && !calme.matches);
    decide();
    ecran.addEventListener("change", decide);
    calme.addEventListener("change", decide);
    return () => {
      ecran.removeEventListener("change", decide);
      calme.removeEventListener("change", decide);
    };
  }, []);

  useEffect(() => {
    if (!active || !toileCapes.current || !toileCheveux.current || !zone.current) return;
    let fini = false;
    let image = 0;
    let visible = true;
    const vue = new IntersectionObserver(([e]) => (visible = e.isIntersecting)); // hors écran : pause
    vue.observe(zone.current);
    Promise.all([
      toile(toileCapes.current, CAPES, { prefixe: "cape", carte: "liberte", mode: 0, souleve: 0.5, ombre: 1 }),
      toile(toileCheveux.current, CHEVEUX, { prefixe: "cheveux", carte: "meches", mode: 1, souleve: 0.25, ombre: 0 }),
      charge("decor.jpg"),
      charge("corps.png"),
    ])
      .then(([capes, cheveux]) => {
        if (fini) return;
        const boucle = (ms: number) => {
          if (fini) return;
          if (visible) {
            capes(ms / 1000, 1);
            cheveux(ms / 1000, 1);
          }
          image = requestAnimationFrame(boucle);
        };
        image = requestAnimationFrame((ms) => {
          boucle(ms);
          setPrete(true); // la première image est dessinée : on peut recouvrir l'image fixe
        });
      })
      .catch((e) => {
        // WebGL absent ou calque manquant : l'image fixe reste ; la raison va dans la console
        console.warn("Couverture animée désactivée :", e);
      });
    return () => {
      fini = true;
      cancelAnimationFrame(image);
      vue.disconnect();
    };
  }, [active]);

  if (!active) return null;
  return (
    <div ref={zone} className={`hero-anime${prete ? " prete" : ""}`} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element -- calque servi tel quel, déjà dimensionné */}
      <img src={url("decor.jpg")} alt="" />
      <canvas ref={toileCapes} width={L} height={H} />
      {/* eslint-disable-next-line @next/next/no-img-element -- calque servi tel quel, déjà dimensionné */}
      <img src={url("corps.png")} alt="" />
      <canvas ref={toileCheveux} width={L} height={H} />
    </div>
  );
}
