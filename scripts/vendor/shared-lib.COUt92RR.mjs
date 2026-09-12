import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  F as r,
  L as i,
  M as a,
  N as o,
  O as s,
  P as c,
  _ as l,
  b as u,
  c as d,
  g as f,
  h as p,
  j as m,
  k as h,
  l as g,
  o as _,
  v,
  w as y,
  x as ee,
  z as b,
} from "./react.C1Oj3OU0.mjs";
import {
  G as te,
  T as x,
  V as S,
  a as C,
  et as w,
  f as ne,
  g as T,
  q as E,
  r as re,
  rt as ie,
  t as D,
  w as O,
} from "./motion.BtOE26Nw.mjs";
import {
  A as ae,
  D as k,
  Dt as oe,
  F as se,
  H as ce,
  I as le,
  Mt as ue,
  N as A,
  Ot as de,
  P as fe,
  S as pe,
  U as me,
  W as he,
  X as j,
  f as ge,
  ft as _e,
  i as ve,
  k as ye,
  kt as be,
  o as M,
  w as N,
  xt as xe,
} from "./framer.BpPKSFgL.mjs";
var Se,
  Ce = e(() => {
    (j(),
      (Se = fe({
        title: `Wave Gradient`,
        fragment: `
#define S(a,b,t) smoothstep(a,b,t)

mat2 Rot(float a) {
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
}

vec2 hash(vec2 p) {
    float s = u_seed;
    vec2 k1 = vec2(2127.1 + s * 13.37, 81.17 + s * 7.31);
    vec2 k2 = vec2(1269.5 + s * 11.13, 283.37 + s * 5.79);
    p = vec2(dot(p, k1), dot(p, k2));
    return fract(sin(p) * (43758.5453 + s * 1.618));
}

float noise(in vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float n = mix(
        mix(dot(-1.0 + 2.0 * hash(i), f),
            dot(-1.0 + 2.0 * hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
        mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
            dot(-1.0 + 2.0 * hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
        u.y
    );
    return 0.5 + 0.5 * n;
}

vec3 getColor(int idx) {
    if (u_colors_length < 1) return vec3(0.0);
    int safeIdx = clamp(idx, 0, u_colors_length - 1);
    return u_colors[safeIdx].rgb;
}

float seedF(float base) {
    return base * (1.0 + 0.5 * sin(u_seed * 3.17 + base));
}

vec2 warpUV(vec2 uv) {
    float t = u_time * u_waveSpeed;

    float angleOffset = sin(u_seed * 2.73) * 30.0;
    mat2 dirRot = Rot(radians(u_waveAngle + angleOffset));
    vec2 ruv = dirRot * uv;

    float fxMod = seedF(u_waveFreqX);
    float fyMod = seedF(u_waveFreqY);

    float phaseX = fract(sin(u_seed * 7.19) * 437.58) * 6.2832;
    float phaseY = fract(cos(u_seed * 3.41) * 291.37) * 6.2832;

    // Core wave with seed-dependent harmonics
    float harmonic = sin(u_seed * 1.23) * 0.5;
    float a = fyMod * ruv.y - sin(ruv.x * fxMod + ruv.y - t + phaseX);
    a += harmonic * sin(ruv.x * fxMod * 2.0 + ruv.y * 0.5 + t * 0.7 + phaseY);

    // Smoothstep mask (unchanged)
    a = smoothstep(
        cos(a) * u_maskSoftness,
        sin(a) * u_maskSoftness + 3.,
        cos(a - fyMod * ruv.y) - sin(a - fxMod * ruv.x)
    );

    a *= u_waveAmplitude;

    uv = cos(a) * uv + sin(a) * vec2(-uv.y, uv.x);
    return uv;
}

void main() {
    vec2 fragCoord = v_uv * u_resolution;
    vec2 uv = fragCoord / u_resolution.xy;
    float ratio = u_resolution.x / u_resolution.y;
    float t = u_time * u_waveSpeed;

    vec2 tuv = uv - 0.5;

    vec2 seedShift = vec2(sin(u_seed * 4.37), cos(u_seed * 5.91)) * 100.0;
    float degree = noise(vec2(t * 0.1, tuv.x * tuv.y) + seedShift);
    tuv.y *= 1.0 / ratio;
    tuv *= Rot(radians((degree - 0.5) * 720.0 + 180.0));
    tuv.y *= ratio;

    // Seed-rotate uv2 before warping
    vec2 uv2 = (fragCoord * 2.0 - u_resolution.xy) / (u_resolution.x + u_resolution.y) * 2.0;
    float preRotAngle = fract(sin(u_seed * 5.63) * 173.29) * 6.2832;
    uv2 *= Rot(preRotAngle);
    vec2 warped = warpUV(uv2) * 0.5 + 0.5;

    vec2 blendUV = mix(tuv, warped - 0.5, u_blendAmount);

    float layerRot1 = -5.0 + sin(u_seed * 1.83) * 20.0;
    float layerRot2 = 10.0 + cos(u_seed * 2.47) * 20.0;

    vec3 c0 = getColor(0);
    vec3 c1 = getColor(1);
    vec3 c2 = getColor(2);
    vec3 c3 = getColor(3);

    vec3 layer1 = mix(c0, c2, S(-0.3, 0.3, (blendUV * Rot(radians(layerRot1))).x));
    vec3 layer2 = mix(c3, c1, S(-0.3, 0.3, (blendUV * Rot(radians(layerRot2))).x));
    vec3 col = mix(layer1, layer2, S(0.3, -0.3, blendUV.y));

    col = mix(col, col * col + 0.5 * sqrt(col), 0.3);

    fragColor = vec4(col, 1.0);
}
`,
        propertyControls: {
          colors: {
            type: M.Array,
            title: `Colors`,
            control: { type: M.Color },
            maxCount: 4,
            defaultValue: [`#FF3624`, `#9EABFF`, `#FFAE00`, `#E29EFF`],
          },
          seed: { type: M.Number, title: `Seed`, defaultValue: 32, min: 0, max: 100, step: 1 },
          waveSpeed: {
            type: M.Number,
            title: `Speed`,
            defaultValue: 1.5,
            min: 0,
            max: 3,
            step: 0.01,
          },
          waveFreqX: {
            type: M.Number,
            title: `Freq X`,
            defaultValue: 0.9,
            min: 0.1,
            max: 6,
            step: 0.1,
          },
          waveFreqY: {
            type: M.Number,
            title: `Freq Y`,
            defaultValue: 6,
            min: 0.1,
            max: 6,
            step: 0.1,
          },
          waveAngle: {
            type: M.Number,
            title: `Angle`,
            defaultValue: 105,
            min: -180,
            max: 180,
            step: 1,
          },
          waveAmplitude: {
            type: M.Number,
            title: `Amplitude`,
            defaultValue: 2.1,
            min: 0.5,
            max: 3,
            step: 0.01,
          },
          maskSoftness: {
            type: M.Number,
            title: `Softness`,
            defaultValue: 0.74,
            min: 0.01,
            max: 2,
            step: 0.01,
          },
          blendAmount: {
            type: M.Number,
            title: `Blend`,
            defaultValue: 0.54,
            min: 0,
            max: 1,
            step: 0.01,
          },
        },
      })));
  }),
  we,
  P,
  Te,
  F,
  I,
  Ee,
  L,
  De = e(() => {
    (_(),
      j(),
      n(),
      (we = `var(--framer-icon-mask)`),
      (P = f(function (e, t) {
        return d(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Te = x.create(P)),
      (F = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? d(Te, { ...a, layoutId: r, ref: t, children: i })
          : d(`svg`, { ...a, ref: t, children: i });
      })),
      (I = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 12.731 12.731 L 10.449 19.007 C 10.34 19.3 10.059 19.496 9.746 19.496 C 9.432 19.496 9.152 19.3 9.043 19.007 L 6.765 12.731 L 0.489 10.449 C 0.195 10.34 0 10.059 0 9.746 C 0 9.432 0.195 9.152 0.489 9.043 L 6.765 6.765 L 9.047 0.489 C 9.156 0.195 9.436 0 9.75 0 C 10.063 0 10.344 0.195 10.453 0.489 L 12.735 6.765 L 19.01 9.047 C 19.304 9.156 19.499 9.436 19.499 9.75 C 19.499 10.063 19.304 10.344 19.01 10.453 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="19.495522090984686px" id="XWY4XiNtR" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.252 2.252)" width="19.499272090984686px"/></svg>`),
      (Ee = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (L = be(
        f(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = Ee(e),
            u = oe(`2663420067`, I);
          return d(F, {
            ...l,
            className: A(`framer-yInj6`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: d(`use`, { href: u }),
          });
        }),
        [
          `.framer-yInj6 { -webkit-mask: ${we}; aspect-ratio: 1; display: block; mask: ${we}; width: 24px; }`,
        ],
        `framer-yInj6`
      )),
      (L.displayName = `Star Four`),
      ae(L, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: M.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: M.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: M.Number,
        },
      }));
  }),
  Oe,
  ke,
  Ae,
  je = e(() => {
    (j(),
      se.loadFonts([`FS;Manrope-bold`, `FS;Manrope-extrabold`]),
      (Oe = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/7EWHG4AMROQSXDCQTDPGBVASATB7CED2/TJSQTK5FHJ2MYKML5IXF2G6YTGFJLTYL/K4ZMLVLHYIFVTTTWGVOTVGOFUUX7NVGI.woff2`,
              weight: `800`,
            },
          ],
        },
      ]),
      (ke = [
        `.framer-Cn7BO .framer-styles-preset-1q787c3:not(.rich-text-wrapper), .framer-Cn7BO .framer-styles-preset-1q787c3.rich-text-wrapper h1 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 70px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 800; --framer-letter-spacing: -0.05em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-Cn7BO .framer-styles-preset-1q787c3:not(.rich-text-wrapper), .framer-Cn7BO .framer-styles-preset-1q787c3.rich-text-wrapper h1 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 58px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 800; --framer-letter-spacing: -0.05em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-Cn7BO .framer-styles-preset-1q787c3:not(.rich-text-wrapper), .framer-Cn7BO .framer-styles-preset-1q787c3.rich-text-wrapper h1 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 800; --framer-letter-spacing: -0.05em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Ae = `framer-Cn7BO`));
  }),
  Me,
  Ne,
  Pe,
  Fe = e(() => {
    (j(),
      se.loadFonts([`FS;Manrope-medium`, `FS;Manrope-bold`]),
      (Me = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/CIM4KQCLZSMMLWPVH25IDDSTY4ENPHEY.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Ne = [
        `.framer-p3A9N .framer-styles-preset-oeqwx2:not(.rich-text-wrapper), .framer-p3A9N .framer-styles-preset-oeqwx2.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-p3A9N .framer-styles-preset-oeqwx2:not(.rich-text-wrapper), .framer-p3A9N .framer-styles-preset-oeqwx2.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-p3A9N .framer-styles-preset-oeqwx2:not(.rich-text-wrapper), .framer-p3A9N .framer-styles-preset-oeqwx2.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Pe = `framer-p3A9N`));
  }),
  Ie,
  Le,
  Re,
  ze = e(() => {
    (j(),
      se.loadFonts([`FS;Manrope-regular`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (Ie = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/UXO4O7K2G3HI3D2VKD7UXVJVJD26P4BQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Le = [
        `.framer-frOR7 .framer-styles-preset-19454e5:not(.rich-text-wrapper), .framer-frOR7 .framer-styles-preset-19454e5.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Re = `framer-frOR7`));
  }),
  Be,
  Ve,
  R,
  z = e(() => {
    (j(),
      se.loadFonts([`FS;Manrope-medium`, `FS;Manrope-bold`]),
      (Be = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/CIM4KQCLZSMMLWPVH25IDDSTY4ENPHEY.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Ve = [
        `.framer-lZHYM .framer-styles-preset-nkt4ib:not(.rich-text-wrapper), .framer-lZHYM .framer-styles-preset-nkt4ib.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-lZHYM .framer-styles-preset-nkt4ib:not(.rich-text-wrapper), .framer-lZHYM .framer-styles-preset-nkt4ib.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-lZHYM .framer-styles-preset-nkt4ib:not(.rich-text-wrapper), .framer-lZHYM .framer-styles-preset-nkt4ib.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (R = `framer-lZHYM`));
  }),
  B,
  He,
  Ue,
  We = e(() => {
    (j(),
      se.loadFonts([`FS;Manrope-regular`, `FS;Manrope-bold`]),
      (B = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/UXO4O7K2G3HI3D2VKD7UXVJVJD26P4BQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (He = [
        `.framer-qWwkz .framer-styles-preset-1t2hdh2:not(.rich-text-wrapper), .framer-qWwkz .framer-styles-preset-1t2hdh2.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Ue = `framer-qWwkz`));
  }),
  V,
  Ge = e(() => {
    V = (e) => e;
  }),
  H = e(() => {
    Ge();
  }),
  U = e(() => {
    H();
  });
function W(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var Ke = e(() => {}),
  G,
  qe = e(() => {
    ((G = {}),
      Object.defineProperty(G, "__esModule", { value: !0 }),
      (G.warning = function () {}),
      (G.invariant = function () {}),
      G.__esModule,
      G.warning,
      G.invariant);
  }),
  Je = e(() => {
    Ge();
  });
function Ye(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function Xe(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = Ye(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : gt[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function K(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function Ze({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = _t.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return K(e, n);
        },
      });
    });
}
function Qe(e) {
  e.forEach(Ze);
}
function $e() {
  typeof ResizeObserver < `u` && (vt = new ResizeObserver(Qe));
}
function et(e, t) {
  vt || $e();
  let n = Ye(e);
  return (
    n.forEach((e) => {
      let n = _t.get(e);
      (n || ((n = new Set()), _t.set(e, n)), n.add(t), vt?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = _t.get(e);
        (n?.delete(t), (n != null && n.size) || vt == null || vt.unobserve(e));
      });
    }
  );
}
function tt() {
  ((yt = () => {
    let e = { width: b.innerWidth, height: b.innerHeight },
      t = { target: b, size: e, contentSize: e };
    J.forEach((e) => e(t));
  }),
    b.addEventListener(`resize`, yt));
}
function nt(e) {
  return (
    J.add(e),
    yt || tt(),
    () => {
      (J.delete(e), !J.size && yt && (yt = void 0));
    }
  );
}
function rt(e, t) {
  return typeof e == `function` ? nt(e) : et(e, t);
}
function it(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function at(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  q,
  mt,
  ht,
  gt,
  _t,
  vt,
  J,
  yt,
  bt,
  xt,
  St,
  Ct = e(() => {
    (i(),
      Ge(),
      U(),
      Ke(),
      qe(),
      Je(),
      (ot = [``, `X`, `Y`, `Z`]),
      (st = [`translate`, `scale`, `rotate`, `skew`]),
      (ct = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
      (lt = {
        translate: {
          syntax: `<length-percentage>`,
          initialValue: `0px`,
          toDefaultUnit: (e) => e + `px`,
        },
        rotate: ct,
        scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: V },
        skew: ct,
      }),
      (ut = new Map()),
      (dt = (e) => `--motion-${e}`),
      (ft = [`x`, `y`, `z`]),
      st.forEach((e) => {
        ot.forEach((t) => {
          (ft.push(e + t), ut.set(dt(e + t), lt[e]));
        });
      }),
      new Set(ft),
      (pt = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
      (q = {
        cssRegisterProperty: () =>
          typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
        partialKeyframes: () => {
          try {
            pt({ opacity: [1] });
          } catch {
            return !1;
          }
          return !0;
        },
        finished: () => !!pt({ opacity: [0, 1] }).finished,
      }),
      (mt = {}),
      (ht = {}));
    for (let e in q) ht[e] = () => (mt[e] === void 0 && (mt[e] = q[e]()), mt[e]);
    ((gt = { any: 0, all: 1 }),
      (_t = new WeakMap()),
      (J = new Set()),
      (bt = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return Xe(
            e,
            (r) => {
              if ((t(), at(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), at(e, `viewleave`, t));
                };
            },
            W(r, [`once`])
          );
        },
      }),
      (xt = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), it(e, t, r));
      }),
      (St = {
        inView: bt,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = xt(e, `hoverstart`, t),
              i = xt(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = (t) => {
                (n(), it(e, `pressend`, t), b.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(), it(e, `pressstart`, n), b.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i), b.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(St)]);
  });
function wt() {
  throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);
}
function Tt(e) {
  let t = u.useRef(wt);
  return (
    u.useInsertionEffect(() => {
      t.current = e;
    }, [e]),
    (...e) => {
      Dt() && wt();
      let n = t.current;
      return n(...e);
    }
  );
}
var Et,
  Dt,
  Ot = e(() => {
    (n(),
      (Et = u.createContext(!0)),
      (Dt =
        `use` in u
          ? () => {
              try {
                return u.use(Et);
              } catch {
                return !1;
              }
            }
          : () => !1));
  });
function kt(e) {
  let {
      slots: t = [],
      startFrom: n,
      direction: i,
      effectsOptions: c,
      autoPlayControl: u,
      dragControl: f,
      alignment: p,
      gap: m,
      padding: h,
      paddingPerSide: _,
      paddingTop: v,
      paddingRight: C,
      paddingBottom: re,
      paddingLeft: D,
      itemAmount: O,
      fadeOptions: ae,
      intervalControl: k,
      transitionControl: oe,
      arrowOptions: se,
      borderRadius: ce,
      progressOptions: le,
      style: ue,
    } = e,
    {
      effectsOpacity: A,
      effectsScale: de,
      effectsRotate: fe,
      effectsPerspective: me,
      effectsHover: he,
      playOffscreen: j,
    } = c,
    { fadeContent: ge, overflow: _e, fadeWidth: ve, fadeInset: ye, fadeAlpha: be } = ae,
    {
      showMouseControls: M,
      arrowSize: N,
      arrowRadius: xe,
      arrowFill: Se,
      leftArrow: Ce,
      rightArrow: we,
      arrowShouldSpace: P = !0,
      arrowShouldFadeIn: Te = !1,
      arrowPosition: F,
      arrowPadding: I,
      arrowGap: Ee,
      arrowPaddingTop: L,
      arrowPaddingRight: De,
      arrowPaddingBottom: Oe,
      arrowPaddingLeft: ke,
    } = se,
    {
      showProgressDots: Ae,
      dotSize: je,
      dotsInset: Me,
      dotsRadius: Ne,
      dotsPadding: Pe,
      dotsGap: Fe,
      dotsFill: Ie,
      dotsBackground: Le,
      dotsActiveOpacity: Re,
      dotsOpacity: ze,
      dotsBlur: Be,
    } = le,
    Ve = _ ? `${v}px ${C}px ${re}px ${D}px` : `${h}px`,
    R = pe.current() === pe.canvas,
    z = t.filter(Boolean),
    B = y.count(z);
  if (!(B > 0))
    return g(`section`, {
      style: zt,
      children: [
        d(`div`, { style: Bt, children: `⭐️` }),
        d(`p`, { style: Vt, children: `Connect to Content` }),
        d(`p`, {
          style: Ht,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  let He = s(null),
    Ue = s(null),
    We = a((e) => {
      ((He.current = e), He.current && it());
    }, []),
    [V, Ge] = r({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    H = i === `left` || i === `right`,
    U = jt(),
    W = H && U === `rtl` ? -1 : 1,
    [Ke, G] = r(!1),
    [qe, Je] = r(u),
    [Ye, Xe] = r(!1),
    K = V?.item !== null && V?.parent !== null && U !== null,
    Ze = Math.ceil((n + O) / B),
    Qe = [],
    $e = Ze * 4;
  (R || !K) && ($e = Ze);
  let [et, tt] = r(n + B);
  o(() => {
    if (!V.item || !U) return;
    let e = -1 * et * ((V.item ?? 0) + m) * (U === `rtl` ? -1 : 1);
    dt.get() !== e && ne(dt, e, oe);
  }, [et, V.item, m, U]);
  let nt = () => {
      let e = Ue.current;
      if (!e) return;
      let t = e.width,
        n = e.height,
        r = H ? t : n,
        i = Math.max(1, O),
        a = Math.max(0, (r - m * (i - 1)) / i),
        o = B * (a + m),
        s = H ? a : t,
        c = H ? n : a,
        l = H
          ? Math.max(document.documentElement.clientWidth || 0, b.innerWidth || 0, t)
          : Math.max(document.documentElement.clientHeight || 0, b.innerHeight || 0, n);
      Ge({ parent: r, children: o, item: a, itemWidth: s, itemHeight: c, viewportLength: l });
    },
    it = Tt(() => {
      T.read(nt, !1, !0);
    });
  (ee(() => {
    it();
  }, [z.length, O, m, i, h, _, v, C, re, D]),
    o(() => {
      let e = He.current;
      if (e)
        return rt(e, ({ size: e }) => {
          ((Ue.current = e), !(!e.width || !e.height) && it());
        });
    }, []));
  let at = R ? 0 : V?.children,
    [ot, st] = r(!1),
    ct = s(null),
    lt = S(ct),
    ut = E() && lt,
    dt = te(at),
    ft = R
      ? te(0)
      : w(dt, (e) => {
          let t = at ?? 0,
            n = e ?? 0,
            r = ie(-t * W, -t * W * 2, n);
          return Number.isNaN(r) ? 0 : r;
        }),
    pt = ie(0, B, et),
    q = (e) => {
      l(() => tt((t) => t + e));
    },
    mt = (e) => {
      let t = e - ie(0, B, et);
      l(() => tt((e) => e + t));
    },
    ht = (i === `right` || i === `bottom` ? -1 : 1) * W,
    gt = u && qe && (j || ut) && !R && B > 1 && !ot && K;
  o(() => {
    if (!gt) return;
    let e = setTimeout(() => {
      q(ht);
    }, k * 1e3);
    return () => clearTimeout(e);
  }, [gt, ht, k, et]);
  let _t = () => {
      l(() => st(!0));
    },
    vt = (e, { offset: t, velocity: n }) => {
      l(() => st(!1));
      let r = H ? t.x : t.y,
        i = H ? n.x : n.y,
        a = r < -V.item / 2,
        o = r > V.item / 2,
        s = Math.round(Math.abs(r) / V.item),
        c = s === 0 ? 1 : s;
      i > 200 ? q(-c * W) : i < -200 ? q(c * W) : (a && q(s * W), o && q(-s * W));
    },
    J = Math.max(0, Math.min(n ?? 0, Math.max(0, B - 1))),
    yt = (J * 100) / O,
    bt = (J * m) / O,
    xt = 0,
    St = `calc(${100 / O}% - ${m}px + ${m / O}px)`;
  for (let e = 0; e < $e; e++)
    Qe = Qe.concat(
      y.map(z, (t, n) =>
        d(
          Kt,
          {
            slideKey: e + n + `lg`,
            index: e,
            width: H && O > 1 ? St : `100%`,
            height: H ? `100%` : O > 1 ? St : `100%`,
            size: V,
            child: t,
            numChildren: z?.length,
            wrappedXOrY: ft,
            childCounter: xt++,
            gap: m,
            isCanvas: R,
            isInitialized: K,
            isHorizontal: H,
            effectsOpacity: A,
            effectsScale: de,
            effectsRotate: fe,
            writingDirection: U,
            rtlDirectionModifier: W,
            children: e + n,
          },
          e + n + `lg`
        )
      )
    );
  let Ct = H ? `to right` : `to bottom`,
    wt = ve / 2,
    Et = 100 - ve / 2,
    Dt = `linear-gradient(${Ct}, rgba(0, 0, 0, ${be}) ${Gt(ye, 0, wt)}%, rgba(0, 0, 0, 1) ${wt}%, rgba(0, 0, 0, 1) ${Et}%, rgba(0, 0, 0, ${be}) ${100 - ye}%)`,
    Ot = [],
    kt = {};
  if (Ae) {
    for (let e = 0; e < z?.length; e++)
      Ot.push(
        d(
          qt,
          {
            dotStyle: { ...Yt, width: je, height: je, backgroundColor: Ie },
            buttonStyle: Ut,
            selectedOpacity: Re,
            opacity: ze,
            disabled: !R && !K,
            onClick: () => mt(e),
            wrappedIndex: R || !K ? J : pt,
            total: B,
            index: e,
            gap: Fe,
            padding: Pe,
            isHorizontal: H,
          },
          e
        )
      );
    Be > 0 && (kt.backdropFilter = kt.WebkitBackdropFilter = `blur(${Be}px)`);
  }
  let At =
      K && f
        ? {
            drag: H ? `x` : `y`,
            onDragStart: _t,
            onDragEnd: vt,
            dragDirectionLock: !0,
            values: { x: dt, y: dt },
            dragMomentum: !1,
          }
        : {},
    Mt = F === `top-left` || F === `top-mid` || F === `top-right`,
    It = F === `bottom-left` || F === `bottom-mid` || F === `bottom-right`,
    Y = F === `top-left` || F === `bottom-left`,
    Xt = F === `top-right` || F === `bottom-right`,
    X = F === `top-mid` || F === `bottom-mid` || F === `auto`,
    Zt = Ce || `../../assets/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`,
    Qt = we || `../../assets/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg`;
  return g(`section`, {
    className: `${Nt} ${H ? Pt : Ft}`,
    style: {
      ...Rt,
      padding: Ve,
      WebkitMaskImage: ge ? Dt : void 0,
      maskImage: ge ? Dt : void 0,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      (G(!0), he || Je(!1));
    },
    onMouseLeave: () => {
      (G(!1), he || Je(!0));
    },
    onMouseDown: (e) => {
      (e.preventDefault(), l(() => Xe(!0)));
    },
    onMouseUp: () => l(() => Xe(!1)),
    ref: ct,
    children: [
      d(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: _e ? `visible` : `hidden`,
          borderRadius: ce,
          userSelect: `none`,
          perspective: R ? `none` : me,
        },
        children: d(x.ul, {
          ref: We,
          ...At,
          style: {
            ...Rt,
            gap: m,
            placeItems: p,
            ...(R || !K
              ? {
                  transform: H
                    ? `translateX(calc(${Lt} * (${yt}% + ${bt}px)))`
                    : `translateY(calc(${Lt} * (${yt}% + ${bt}px)))`,
                }
              : { x: H ? ft : 0, y: H ? 0 : ft }),
            flexDirection: H ? `row` : `column`,
            transformStyle: fe !== 0 && !R ? `preserve-3d` : void 0,
            cursor: (R || K) && f ? (Ye ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...ue,
          },
          children: Qe,
        }),
      }),
      g(`fieldset`, {
        style: { ...Wt },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          g(x.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexDirection: H ? `row` : `column`,
              justifyContent: P ? `space-between` : `center`,
              gap: P ? `unset` : Ee,
              opacity: Te || (!R && !K) ? 0 : 1,
              alignItems: `center`,
              inset: I,
              top: P ? I : Mt ? L : `unset`,
              left: P ? I : Y ? ke : X ? 0 : `unset`,
              right: P ? I : Xt ? De : X ? 0 : `unset`,
              bottom: P ? I : It ? Oe : `unset`,
            },
            animate: R || K ? (Te ? { opacity: +!!Ke } : { opacity: 1 }) : { opacity: 0 },
            transition: oe,
            children: [
              d(x.button, {
                type: `button`,
                style: {
                  ...Ut,
                  backgroundColor: Se,
                  width: N,
                  height: N,
                  borderRadius: xe,
                  rotate: H ? 0 : 90,
                  display: M ? `block` : `none`,
                  pointerEvents: R || K ? `auto` : `none`,
                  cursor: R || K ? `pointer` : `default`,
                },
                disabled: !(R || K),
                onClick: () => q(-1),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: d(`img`, {
                  decoding: `async`,
                  width: N,
                  height: N,
                  src: H && U === `rtl` ? Qt : Zt,
                  alt: `Back Arrow`,
                }),
              }),
              d(x.button, {
                type: `button`,
                style: {
                  ...Ut,
                  backgroundColor: Se,
                  width: N,
                  height: N,
                  borderRadius: xe,
                  rotate: H ? 0 : 90,
                  display: M ? `block` : `none`,
                  pointerEvents: R || K ? `auto` : `none`,
                  cursor: R || K ? `pointer` : `default`,
                },
                disabled: !(R || K),
                onClick: () => q(1),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: d(`img`, {
                  decoding: `async`,
                  width: N,
                  height: N,
                  src: H && U === `rtl` ? Zt : Qt,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          Ot.length > 1
            ? d(x.div, {
                style: {
                  ...Jt,
                  left: H ? `50%` : Me,
                  top: H ? `unset` : `50%`,
                  transform: H ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: H ? `row` : `column`,
                  bottom: H ? Me : `unset`,
                  borderRadius: Ne,
                  backgroundColor: Le,
                  userSelect: `none`,
                  ...kt,
                  opacity: +!!R,
                  pointerEvents: R || K ? `auto` : `none`,
                },
                animate: { opacity: +!!K },
                transition: { duration: 0.35, ease: `easeOut` },
                children: Ot,
              })
            : null,
        ],
      }),
    ],
  });
}
function At() {
  return b?.document?.documentElement?.dir === `rtl` ? `rtl` : `ltr`;
}
function jt() {
  let [e, t] = r(null);
  return (
    o(
      () => (
        t(At()),
        Mt(() => {
          t(At());
        })
      ),
      []
    ),
    e
  );
}
function Mt(e) {
  return (
    X.push(e),
    Xt ||
      ((Xt = new MutationObserver(() => X.forEach((e) => e()))),
      Xt.observe(document.documentElement, { attributeFilter: [`dir`] })),
    () => {
      (X.splice(X.indexOf(e), 1), X.length === 0 && (Xt?.disconnect(), (Xt = null)));
    }
  );
}
var Nt,
  Pt,
  Ft,
  It,
  Lt,
  Y,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  X,
  Zt = e(() => {
    (i(),
      _(),
      Ct(),
      j(),
      D(),
      n(),
      Ot(),
      (Nt = `framer-slideshow`),
      (Pt = `framer-slideshow-axis-x`),
      (Ft = `framer-slideshow-axis-y`),
      (It = `--framer-dir-multiplier`),
      (Lt = `var(${It}, -1)`),
      (Y = be(
        kt,
        [`.${Pt} { ${It}: -1; }`, `html[dir="rtl"] .${Pt} { ${It}: 1; }`, `.${Ft} { ${It}: -1; }`],
        `framer-slideshow-component`
      )),
      (Y.defaultProps = {
        direction: `left`,
        dragControl: !1,
        startFrom: 0,
        itemAmount: 1,
        infinity: !0,
        gap: 10,
        padding: 10,
        autoPlayControl: !0,
        effectsOptions: {
          effectsOpacity: 1,
          effectsScale: 1,
          effectsRotate: 0,
          effectsPerspective: 1200,
          effectsHover: !0,
          playOffscreen: !1,
        },
        transitionControl: { type: `spring`, stiffness: 200, damping: 40 },
        fadeOptions: { fadeContent: !1, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        arrowOptions: {
          showMouseControls: !0,
          arrowShouldFadeIn: !1,
          arrowShouldSpace: !0,
          arrowFill: `rgba(0,0,0,0.2)`,
          arrowSize: 40,
        },
        progressOptions: { showProgressDots: !0 },
      }),
      ae(Y, {
        slots: { type: M.Array, title: `Content`, control: { type: M.ComponentInstance } },
        direction: {
          type: M.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: Y.defaultProps.direction,
        },
        autoPlayControl: { type: M.Boolean, title: `Auto Play`, defaultValue: !0 },
        intervalControl: {
          type: M.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: M.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: M.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: Y.defaultProps.startFrom,
        },
        effectsOptions: {
          type: M.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: M.Number,
              title: `Opacity`,
              defaultValue: Y.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: M.Number,
              title: `Scale`,
              defaultValue: Y.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: M.Number,
              title: `Perspective`,
              defaultValue: Y.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: M.Number,
              title: `Rotate`,
              defaultValue: Y.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: M.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: Y.defaultProps.effectsOptions.effectsHover,
            },
            playOffscreen: {
              type: M.Boolean,
              title: `Offscreen`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: Y.defaultProps.effectsOptions.playOffscreen,
            },
          },
        },
        alignment: {
          type: M.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        itemAmount: {
          type: M.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: Y.defaultProps.itemAmount,
        },
        gap: { type: M.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: M.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: M.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: M.Transition,
          defaultValue: Y.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: M.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: M.Boolean, title: `Fade`, defaultValue: !1 },
            overflow: {
              type: M.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: M.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: M.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: M.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        arrowOptions: {
          type: M.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: M.Boolean,
              title: `Show`,
              defaultValue: Y.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: M.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: Y.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: { type: M.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: M.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: M.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: Y.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: M.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: M.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: M.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: Y.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: M.Enum,
              title: `Position`,
              options: [
                `auto`,
                `top-left`,
                `top-mid`,
                `top-right`,
                `bottom-left`,
                `bottom-mid`,
                `bottom-right`,
              ],
              optionTitles: [
                `Center`,
                `Top Left`,
                `Top Middle`,
                `Top Right`,
                `Bottom Left`,
                `Bottom Middle`,
                `Bottom Right`,
              ],
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
            arrowPadding: {
              type: M.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: M.Number,
              title: `Top`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `bottom-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-right`,
            },
            arrowPaddingBottom: {
              type: M.Number,
              title: `Bottom`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-right`,
            },
            arrowPaddingRight: {
              type: M.Number,
              title: `Right`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowPaddingLeft: {
              type: M.Number,
              title: `Left`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-right` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-right` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowGap: {
              type: M.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
          },
        },
        progressOptions: {
          type: M.Object,
          title: `Dots`,
          controls: {
            showProgressDots: { type: M.Boolean, title: `Show`, defaultValue: !1 },
            dotSize: {
              type: M.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: M.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: M.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: M.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: M.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: M.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: M.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: M.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: M.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: M.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 0,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
      }),
      (Rt = {
        display: `flex`,
        flexDirection: `row`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (zt = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Bt = { fontSize: 32, marginBottom: 10 }),
      (Vt = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Ht = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: `center` }),
      (Ut = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0,
      }),
      (Wt = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        pointerEvents: `none`,
        userSelect: `none`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (Gt = (e, t, n) => Math.min(Math.max(e, t), n)),
      (Kt = p(function (e) {
        let {
            slideKey: t,
            width: n,
            height: r,
            child: i,
            size: a,
            gap: c,
            wrappedXOrY: l,
            numChildren: u,
            childCounter: f,
            isCanvas: p,
            isInitialized: m,
            effectsOpacity: g,
            effectsScale: _,
            effectsRotate: v,
            isHorizontal: y,
            index: ee,
            writingDirection: b,
            rtlDirectionModifier: te,
          } = e,
          x = s(null),
          S = a?.item ?? 0,
          C = a?.parent ?? 0,
          ne = (S + c) * f,
          T = (y && b === `rtl` ? [S - c, 0, -C + S - c, -C - c] : [-S, 0, C - S + c, C]).map(
            (e) => e - ne * te
          ),
          E = !p && w(l, T, y && b === `rtl` ? [v, 0, 0, -v] : [-v, 0, 0, v]),
          ie = !p && w(l, T, [v, 0, 0, -v]),
          D = !p && w(l, T, [g, 1, 1, g]),
          ae = !p && w(l, T, [_, 1, 1, _]),
          k = !p && w(l, T, y && b === `rtl` ? [0, 0, 1, 1] : [1, 1, 0, 0]),
          oe =
            !p &&
            w(l, (e) => {
              let t = Math.min(T[1], T[2]),
                n = Math.max(T[1], T[2]);
              return e >= t && e <= n;
            });
        o(() => {
          if (!oe || !m) return;
          function e(e) {
            let t = x?.current;
            t &&
              (e
                ? t.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = Number(t)) : e.removeAttribute(`tabIndex`);
                  })
                : t.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  }),
              t.setAttribute(`aria-hidden`, String(!e)));
          }
          return (
            e(oe.get()),
            oe.on(`change`, (t) => {
              e(t);
            })
          );
        }, [m]);
        let se = p
            ? `visible`
            : w(
                l,
                [T[0] - a.viewportLength * te, O(T[1], T[2], 0.5), T[3] + a.viewportLength * te],
                [`hidden`, `visible`, `hidden`]
              ),
          ce = t + `child`;
        return d(re, {
          inherit: `id`,
          id: ce,
          children: d(`li`, {
            style: { display: `contents` },
            children: h(i, {
              ref: x,
              key: ce,
              style: {
                ...i.props?.style,
                flexShrink: 0,
                userSelect: `none`,
                width: n,
                height: r,
                ...(m
                  ? {
                      opacity: D,
                      scale: ae,
                      originX: y ? k : 0.5,
                      originY: y ? 0.5 : k,
                      rotateY: y ? E : 0,
                      rotateX: y ? 0 : ie,
                      visibility: se,
                    }
                  : {}),
              },
              layoutId: i.props.layoutId ? i.props.layoutId + `-original-` + ee : void 0,
            }),
          }),
        });
      })),
      (qt = p(function ({
        selectedOpacity: e,
        opacity: t,
        total: n,
        index: r,
        wrappedIndex: i,
        dotStyle: a,
        buttonStyle: o,
        gap: s,
        padding: c,
        isHorizontal: l,
        ...u
      }) {
        let f = i === r,
          p = s / 2,
          m = !l && r !== 0 ? p : c,
          h = !l && r !== n - 1 ? p : c,
          g = l ? (r === 0 ? c : p) : c,
          _ = l ? (r === n - 1 ? c : p) : c;
        return d(`button`, {
          "aria-label": `Scroll to page ${r + 1}`,
          type: `button`,
          ...u,
          style: {
            ...o,
            paddingTop: m,
            paddingBottom: h,
            paddingInlineStart: g,
            paddingInlineEnd: _,
          },
          children: d(x.div, {
            style: { ...a },
            initial: !1,
            animate: { opacity: f ? e : t },
            transition: { duration: 0.3 },
          }),
        });
      })),
      (Jt = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (Yt = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }),
      (Xt = null),
      (X = []));
  });
function Qt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  Z,
  ln = e(() => {
    (_(),
      j(),
      D(),
      n(),
      ($t = [`phXoCky6J`, `HJNEk7ZM4`, `i_M98yChn`]),
      (en = `framer-tCcp1`),
      (tn = {
        HJNEk7ZM4: `framer-v-oowwpo`,
        i_M98yChn: `framer-v-xj9gan`,
        phXoCky6J: `framer-v-mduv0n`,
      }),
      (nn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (rn = ({ value: e, children: n }) => {
        let r = t(C),
          i = e ?? r.transition,
          a = m(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(C.Provider, { value: a, children: n });
      }),
      (an = { Insta: `HJNEk7ZM4`, Tiktok: `i_M98yChn`, Youtube: `phXoCky6J` }),
      (on = x.create(c)),
      (sn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: an[r.variant] ?? r.variant ?? `phXoCky6J`,
      })),
      (cn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = be(
        f(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = v(),
            { activeLocale: a, setLocale: o } = xe(),
            c = _e(),
            { style: l, className: u, layoutId: f, variant: p, ...m } = sn(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: ee,
              isLoading: b,
              setGestureState: te,
              setVariant: S,
              variants: C,
            } = de({
              cycleOrder: $t,
              defaultVariant: `phXoCky6J`,
              ref: r,
              variant: p,
              variantClassNames: tn,
            }),
            w = cn(e, C),
            ne = A(en);
          return d(re, {
            id: f ?? i,
            children: d(on, {
              animate: C,
              initial: !1,
              children: d(rn, {
                value: nn,
                children: d(x.div, {
                  ...m,
                  ...y,
                  className: A(ne, `framer-mduv0n`, u, g),
                  "data-framer-name": `Youtube`,
                  layoutDependency: w,
                  layoutId: `phXoCky6J`,
                  ref: r,
                  style: {
                    background: `linear-gradient(165deg, rgb(255, 33, 33) 0%, rgb(255, 33, 33) 33%, rgb(255, 33, 33) 67%, rgb(255, 33, 33) 100%)`,
                    backgroundColor: `rgb(255, 33, 33)`,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    ...l,
                  },
                  variants: {
                    HJNEk7ZM4: {
                      background: `linear-gradient(165deg, rgb(122, 145, 255) 0%, rgb(255, 99, 201) 35.27942004504504%, rgb(246, 128, 49) 60.54511542792793%, rgb(248, 198, 108) 88%)`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                    },
                    i_M98yChn: {
                      background: `linear-gradient(165deg, rgb(31, 31, 31) 0%, rgb(31, 31, 31) 33%, rgb(31, 31, 31) 67%, rgb(31, 31, 31) 100%)`,
                      backgroundColor: `rgb(31, 31, 31)`,
                    },
                  },
                  ...Qt(
                    {
                      HJNEk7ZM4: { "data-framer-name": `Insta` },
                      i_M98yChn: { "data-framer-name": `Tiktok` },
                    },
                    h,
                    ee
                  ),
                  children: d(ge, {
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 207.5,
                      intrinsicWidth: 294,
                      loading: he((c?.y || 0) + 5 + (((c?.height || 40) - 10 - 22) / 2 + 0 + 0)),
                      pixelHeight: 415,
                      pixelWidth: 588,
                      sizes: `20px`,
                      src: `../../assets/images/JaFNoTnWHoyc16BklhqD9kzUOJE.png?width=588&height=415`,
                      srcSet: `../../assets/images/JaFNoTnWHoyc16BklhqD9kzUOJE.png 512w,../../assets/images/JaFNoTnWHoyc16BklhqD9kzUOJE.png?width=588&height=415 588w`,
                    },
                    className: `framer-1ayqib8`,
                    "data-framer-name": `Image`,
                    layoutDependency: w,
                    layoutId: `dhEgQGhki`,
                    style: {
                      filter: `drop-shadow(0px 1px 1px rgba(0,0,0,0.25))`,
                      WebkitFilter: `drop-shadow(0px 1px 1px rgba(0,0,0,0.25))`,
                    },
                    variants: {
                      i_M98yChn: {
                        filter: `contrast(1) drop-shadow(0px 1px 1px rgba(0,0,0,0.25))`,
                        WebkitFilter: `contrast(1) drop-shadow(0px 1px 1px rgba(0,0,0,0.25))`,
                      },
                    },
                    ...Qt(
                      {
                        HJNEk7ZM4: {
                          background: {
                            alt: ``,
                            fit: `fit`,
                            intrinsicHeight: 207.5,
                            intrinsicWidth: 294,
                            loading: he(
                              (c?.y || 0) + 5 + (((c?.height || 40) - 10 - 19) / 2 + 0 + 0)
                            ),
                            pixelHeight: 590,
                            pixelWidth: 590,
                            positionX: `center`,
                            positionY: `center`,
                            sizes: `18px`,
                            src: `../../assets/images/K59cauZP4M05I3A7oYDXP4Nsndk.png?width=590&height=590`,
                            srcSet: `../../assets/images/K59cauZP4M05I3A7oYDXP4Nsndk.png 512w,../../assets/images/K59cauZP4M05I3A7oYDXP4Nsndk.png?width=590&height=590 590w`,
                          },
                        },
                        i_M98yChn: {
                          background: {
                            alt: ``,
                            fit: `fit`,
                            intrinsicHeight: 404,
                            intrinsicWidth: 355,
                            loading: he(
                              (c?.y || 0) + 5 + (((c?.height || 40) - 10 - 19) / 2 + 0 + 0)
                            ),
                            pixelHeight: 404,
                            pixelWidth: 355,
                            positionX: `center`,
                            positionY: `center`,
                            sizes: `18px`,
                            src: `../../assets/images/7EfuA3fCHUCrsRay6eKnzUsx9U.png`,
                          },
                        },
                      },
                      h,
                      ee
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-tCcp1.framer-9g52tn, .framer-tCcp1 .framer-9g52tn { display: block; }`,
          `.framer-tCcp1.framer-mduv0n { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 5px; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-tCcp1 .framer-1ayqib8 { aspect-ratio: 1.416867469879518 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 14px); overflow: visible; position: relative; width: 20px; }`,
          `.framer-tCcp1.framer-v-oowwpo .framer-1ayqib8, .framer-tCcp1.framer-v-xj9gan .framer-1ayqib8 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 18px); width: 18px; }`,
        ],
        `framer-tCcp1`
      )),
      (Z.displayName = `Platform`),
      (Z.defaultProps = { height: 40, width: 40 }),
      ae(Z, {
        variant: {
          options: [`phXoCky6J`, `HJNEk7ZM4`, `i_M98yChn`],
          optionTitles: [`Youtube`, `Insta`, `Tiktok`],
          title: `Variant`,
          type: M.Enum,
        },
      }),
      ye(Z, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  Q,
  bn = e(() => {
    (_(),
      j(),
      D(),
      n(),
      Zt(),
      ln(),
      (un = ce(Z)),
      (dn = ce(Y)),
      (fn = `framer-C0YHA`),
      (pn = { EPMPYhEYs: `framer-v-129vhqm` }),
      (mn = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (hn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (gn = ({ value: e, children: n }) => {
        let r = t(C),
          i = e ?? r.transition,
          a = m(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(C.Provider, { value: a, children: n });
      }),
      (_n = x.create(c)),
      (vn = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (yn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = be(
        f(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = v(),
            { activeLocale: a, setLocale: o } = xe();
          _e();
          let { style: c, className: l, layoutId: u, variant: f, ...p } = vn(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: y,
              isLoading: ee,
              setGestureState: b,
              setVariant: te,
              variants: S,
            } = de({ defaultVariant: `EPMPYhEYs`, ref: r, variant: f, variantClassNames: pn }),
            C = yn(e, S),
            w = A(fn);
          return d(re, {
            id: u ?? i,
            children: d(_n, {
              animate: S,
              initial: !1,
              children: d(gn, {
                value: mn,
                children: d(x.div, {
                  ...p,
                  ..._,
                  className: A(w, `framer-129vhqm`, l, h),
                  "data-framer-name": `Slider`,
                  layoutDependency: C,
                  layoutId: `EPMPYhEYs`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 80,
                    borderBottomRightRadius: 80,
                    borderTopLeftRadius: 80,
                    borderTopRightRadius: 80,
                    ...c,
                  },
                  children: d(ve, {
                    children: d(k, {
                      className: `framer-19nicx7-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: C,
                      layoutId: `siQDg047J-container`,
                      nodeId: `siQDg047J`,
                      rendersWithMotion: !0,
                      scopeId: `cmEC8YfMc`,
                      children: d(Y, {
                        alignment: `center`,
                        arrowOptions: {
                          arrowFill: `rgba(0, 0, 0, 0.2)`,
                          arrowGap: 10,
                          arrowPadding: 20,
                          arrowPaddingBottom: 0,
                          arrowPaddingLeft: 0,
                          arrowPaddingRight: 0,
                          arrowPaddingTop: 0,
                          arrowPosition: `auto`,
                          arrowRadius: 40,
                          arrowShouldFadeIn: !1,
                          arrowShouldSpace: !0,
                          arrowSize: 40,
                          showMouseControls: !1,
                        },
                        autoPlayControl: !0,
                        borderRadius: 0,
                        direction: `bottom`,
                        dragControl: !1,
                        effectsOptions: {
                          effectsHover: !0,
                          effectsOpacity: 1,
                          effectsPerspective: 1200,
                          effectsRotate: 0,
                          effectsScale: 1,
                          playOffscreen: !1,
                        },
                        fadeOptions: {
                          fadeAlpha: 0,
                          fadeContent: !1,
                          fadeInset: 0,
                          fadeWidth: 25,
                          overflow: !1,
                        },
                        gap: 10,
                        height: `100%`,
                        id: `siQDg047J`,
                        intervalControl: 1,
                        itemAmount: 1,
                        layoutId: `siQDg047J`,
                        padding: 0,
                        paddingBottom: 0,
                        paddingLeft: 0,
                        paddingPerSide: !1,
                        paddingRight: 0,
                        paddingTop: 0,
                        progressOptions: {
                          dotsActiveOpacity: 1,
                          dotsBackground: `rgba(0, 0, 0, 0.2)`,
                          dotsBlur: 0,
                          dotsFill: `rgb(255, 255, 255)`,
                          dotsGap: 10,
                          dotsInset: 10,
                          dotSize: 10,
                          dotsOpacity: 0.5,
                          dotsPadding: 10,
                          dotsRadius: 50,
                          showProgressDots: !1,
                        },
                        slots: [
                          d(x.div, {
                            className: `framer-13fs6yl`,
                            layoutDependency: C,
                            layoutId: `IYQagp0xC`,
                            style: {
                              borderBottomLeftRadius: 80,
                              borderBottomRightRadius: 80,
                              borderTopLeftRadius: 80,
                              borderTopRightRadius: 80,
                            },
                            children: d(ve, {
                              height: 30,
                              width: `30px`,
                              children: d(k, {
                                className: `framer-sam4pt-container`,
                                inComponentSlot: !0,
                                layoutDependency: C,
                                layoutId: `CD6ArRMXH-container`,
                                nodeId: `CD6ArRMXH`,
                                rendersWithMotion: !0,
                                scopeId: `cmEC8YfMc`,
                                children: d(Z, {
                                  height: `100%`,
                                  id: `CD6ArRMXH`,
                                  layoutId: `CD6ArRMXH`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: hn(`phXoCky6J`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          d(x.div, {
                            className: `framer-18ktlgs`,
                            layoutDependency: C,
                            layoutId: `DD654RaiZ`,
                            style: {
                              borderBottomLeftRadius: 80,
                              borderBottomRightRadius: 80,
                              borderTopLeftRadius: 80,
                              borderTopRightRadius: 80,
                            },
                            children: d(ve, {
                              height: 30,
                              width: `30px`,
                              children: d(k, {
                                className: `framer-136uyrv-container`,
                                inComponentSlot: !0,
                                layoutDependency: C,
                                layoutId: `zawOVaYff-container`,
                                nodeId: `zawOVaYff`,
                                rendersWithMotion: !0,
                                scopeId: `cmEC8YfMc`,
                                children: d(Z, {
                                  height: `100%`,
                                  id: `zawOVaYff`,
                                  layoutId: `zawOVaYff`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: hn(`HJNEk7ZM4`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          d(x.div, {
                            className: `framer-ukwt66`,
                            layoutDependency: C,
                            layoutId: `alBuCXo6G`,
                            style: {
                              borderBottomLeftRadius: 80,
                              borderBottomRightRadius: 80,
                              borderTopLeftRadius: 80,
                              borderTopRightRadius: 80,
                            },
                            children: d(ve, {
                              height: 30,
                              width: `30px`,
                              children: d(k, {
                                className: `framer-vf8nh3-container`,
                                inComponentSlot: !0,
                                layoutDependency: C,
                                layoutId: `l_0J5iOuj-container`,
                                nodeId: `l_0J5iOuj`,
                                rendersWithMotion: !0,
                                scopeId: `cmEC8YfMc`,
                                children: d(Z, {
                                  height: `100%`,
                                  id: `l_0J5iOuj`,
                                  layoutId: `l_0J5iOuj`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: hn(`i_M98yChn`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ],
                        startFrom: 0,
                        style: { height: `100%`, width: `100%` },
                        transitionControl: {
                          damping: 40,
                          delay: 0,
                          mass: 1,
                          stiffness: 200,
                          type: `spring`,
                        },
                        width: `100%`,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-C0YHA.framer-grv0gy, .framer-C0YHA .framer-grv0gy { display: block; }`,
          `.framer-C0YHA.framer-129vhqm { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 1px; height: 30px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 30px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-C0YHA .framer-19nicx7-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-C0YHA .framer-13fs6yl, .framer-C0YHA .framer-18ktlgs, .framer-C0YHA .framer-ukwt66 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-C0YHA .framer-sam4pt-container { flex: none; height: 30px; position: relative; width: 30px; z-index: 2; }`,
          `.framer-C0YHA .framer-136uyrv-container, .framer-C0YHA .framer-vf8nh3-container { flex: none; height: 30px; position: relative; width: 30px; z-index: 1; }`,
        ],
        `framer-C0YHA`
      )),
      (Q.displayName = `Slider Platform`),
      (Q.defaultProps = { height: 30, width: 30 }),
      ye(Q, [{ explicitInter: !0, fonts: [] }, ...un, ...dn], { supportsExplicitInterCodegen: !0 }),
      (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([le(Z, {}, t)])) }));
  });
function xn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  $,
  Ln = e(() => {
    (_(),
      j(),
      D(),
      n(),
      De(),
      z(),
      ze(),
      We(),
      bn(),
      (Sn = ce(Q)),
      (Cn = ce(L)),
      (wn = ue(L)),
      (Tn = [`hAr4H0J_f`, `WgYBRr9mM`, `RobTiRcba`]),
      (En = `framer-ETVbk`),
      (Dn = {
        hAr4H0J_f: `framer-v-n5ljra`,
        RobTiRcba: `framer-v-12v1f1q`,
        WgYBRr9mM: `framer-v-1qluh5j`,
      }),
      (On = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (kn = { delay: 0, duration: 0.6, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (An = { delay: 0, duration: 20, ease: [0, 0, 1, 1], type: `tween` }),
      (jn = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Mn = ({ value: e, children: n }) => {
        let r = t(C),
          i = e ?? r.transition,
          a = m(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(C.Provider, { value: a, children: n });
      }),
      (Nn = {
        "Homepage Tag Card": `hAr4H0J_f`,
        "Mobile Tag Card": `RobTiRcba`,
        "Section Tag Card": `WgYBRr9mM`,
      }),
      (Pn = x.create(c)),
      (Fn = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        gJ8H561ZB: n ?? i.gJ8H561ZB ?? `Short Content Agency`,
        variant: Nn[i.variant] ?? i.variant ?? `hAr4H0J_f`,
      })),
      (In = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = be(
        f(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = v(),
            { activeLocale: a, setLocale: o } = xe(),
            l = _e(),
            { style: u, className: f, layoutId: p, variant: m, gJ8H561ZB: h, ..._ } = Fn(e),
            {
              baseVariant: y,
              classNames: ee,
              clearLoadingGesture: b,
              gestureHandlers: te,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: ne,
              variants: T,
            } = de({
              cycleOrder: Tn,
              defaultVariant: `hAr4H0J_f`,
              ref: r,
              variant: m,
              variantClassNames: Dn,
            }),
            E = In(e, T),
            ie = A(En, Ue, R, Re),
            D = () => ![`WgYBRr9mM`, `RobTiRcba`].includes(y),
            O = () => !![`WgYBRr9mM`, `RobTiRcba`].includes(y);
          return d(re, {
            id: p ?? i,
            children: d(Pn, {
              animate: T,
              initial: !1,
              children: d(Mn, {
                value: On,
                ...xn({ RobTiRcba: { value: kn }, WgYBRr9mM: { value: kn } }, y, S),
                children: g(x.div, {
                  ..._,
                  ...te,
                  className: A(ie, `framer-n5ljra`, f, ee),
                  "data-border": !0,
                  "data-framer-name": `Homepage Tag Card`,
                  layoutDependency: E,
                  layoutId: `hAr4H0J_f`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, rgb(217, 217, 217))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    ...u,
                  },
                  ...xn(
                    {
                      RobTiRcba: { "data-framer-name": `Mobile Tag Card` },
                      WgYBRr9mM: { "data-framer-name": `Section Tag Card` },
                    },
                    y,
                    S
                  ),
                  children: [
                    D() &&
                      d(ve, {
                        height: 30,
                        y: (l?.y || 0) + (5 + ((l?.height || 40) - 10 - 30) / 2),
                        children: d(k, {
                          className: `framer-zeeb3z-container`,
                          layoutDependency: E,
                          layoutId: `HCb4xTVC3-container`,
                          nodeId: `HCb4xTVC3`,
                          rendersWithMotion: !0,
                          scopeId: `Pr3VPQsst`,
                          children: d(Q, {
                            height: `100%`,
                            id: `HCb4xTVC3`,
                            layoutId: `HCb4xTVC3`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    O() &&
                      d(x.div, {
                        className: `framer-1sqenrv`,
                        layoutDependency: E,
                        layoutId: `VrcZFOEGz`,
                        children:
                          O() &&
                          d(wn, {
                            __framer__loop: jn,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopPauseOffscreen: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: `loop`,
                            __framer__loopTransition: An,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animated: !0,
                            className: `framer-jmcz93`,
                            layoutDependency: E,
                            layoutId: `KXgph8ZZt`,
                            style: { "--1m6trwb": 1, "--21h8s6": `rgb(0, 0, 0)`, "--pgex8v": 1.5 },
                          }),
                      }),
                    d(N, {
                      __fromCanvasComponent: !0,
                      children: d(c, {
                        children: d(x.p, {
                          className: `framer-styles-preset-1t2hdh2`,
                          "data-styles-preset": `XwHPbJEPQ`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                          },
                          children: `Short Content Agency`,
                        }),
                      }),
                      className: `framer-1jjl849`,
                      fonts: [`Inter`],
                      layoutDependency: E,
                      layoutId: `utIngx6GH`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      variants: {
                        RobTiRcba: {
                          "--extracted-r6o4lv": `var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, rgb(51, 51, 51))`,
                        },
                        WgYBRr9mM: {
                          "--extracted-r6o4lv": `var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, rgb(51, 51, 51))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...xn(
                        {
                          RobTiRcba: {
                            children: d(c, {
                              children: d(x.p, {
                                className: `framer-styles-preset-19454e5`,
                                "data-styles-preset": `WNsU_e1Xl`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, rgb(51, 51, 51)))`,
                                },
                                children: `Short Content Agency`,
                              }),
                            }),
                            text: h,
                          },
                          WgYBRr9mM: {
                            children: d(c, {
                              children: d(x.p, {
                                className: `framer-styles-preset-nkt4ib`,
                                "data-styles-preset": `qofApnVkv`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, rgb(51, 51, 51)))`,
                                },
                                children: `Short Content Agency`,
                              }),
                            }),
                            text: h,
                          },
                        },
                        y,
                        S
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-ETVbk.framer-182qser, .framer-ETVbk .framer-182qser { display: block; }`,
          `.framer-ETVbk.framer-n5ljra { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 5px 20px 5px 5px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-ETVbk .framer-zeeb3z-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-ETVbk .framer-1sqenrv { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; min-width: 1px; overflow: visible; padding: 2px 0px 0px 0px; position: relative; width: min-content; }`,
          `.framer-ETVbk .framer-jmcz93 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
          `.framer-ETVbk .framer-1jjl849 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-ETVbk.framer-v-1qluh5j.framer-n5ljra, .framer-ETVbk.framer-v-12v1f1q.framer-n5ljra { gap: 8px; padding: 8px 15px 8px 15px; }`,
          `.framer-ETVbk.framer-v-1qluh5j .framer-1sqenrv, .framer-ETVbk.framer-v-12v1f1q .framer-1sqenrv { min-width: unset; }`,
          `.framer-ETVbk.framer-v-12v1f1q .framer-jmcz93 { height: var(--framer-aspect-ratio-supported, 10px); width: 10px; }`,
          ...He,
          ...Ve,
          ...Le,
          `.framer-ETVbk[data-border="true"]::after, .framer-ETVbk [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-ETVbk`
      )),
      ($.displayName = `Hero Section Tag`),
      ($.defaultProps = { height: 40, width: 219 }),
      ae($, {
        variant: {
          options: [`hAr4H0J_f`, `WgYBRr9mM`, `RobTiRcba`],
          optionTitles: [`Homepage Tag Card`, `Section Tag Card`, `Mobile Tag Card`],
          title: `Variant`,
          type: M.Enum,
        },
        gJ8H561ZB: {
          defaultValue: `Short Content Agency`,
          displayTextArea: !1,
          title: `Title`,
          type: M.String,
        },
        ongJ8H561ZBChange: { changes: `gJ8H561ZB`, type: M.ChangeHandler },
      }),
      ye(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Sn,
          ...Cn,
          ...me(B),
          ...me(Be),
          ...me(Ie),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([le(Q, {}, t)])) }));
  });
export {
  L as C,
  Ce as E,
  je as S,
  Se as T,
  Me as _,
  B as a,
  ke as b,
  Ve as c,
  Re as d,
  Le as f,
  Ne as g,
  Pe as h,
  He as i,
  Be as l,
  ze as m,
  Ln as n,
  We as o,
  Ie as p,
  Ue as r,
  R as s,
  $ as t,
  z as u,
  Fe as v,
  De as w,
  Oe as x,
  Ae as y,
};
//# sourceMappingURL=shared-lib.COUt92RR.mjs.map
