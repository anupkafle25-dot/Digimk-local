import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  O as r,
  P as i,
  c as a,
  g as o,
  j as s,
  l as c,
  o as l,
  v as u,
} from "./react.C1Oj3OU0.mjs";
import { T as d, a as f, r as ee, t as te } from "./motion.BtOE26Nw.mjs";
import {
  A as p,
  Ct as ne,
  Dt as m,
  F as h,
  N as g,
  Ot as re,
  U as _,
  X as v,
  dt as ie,
  ft as ae,
  k as y,
  kt as b,
  o as x,
  p as oe,
  w as se,
  xt as ce,
} from "./framer.BpPKSFgL.mjs";
import {
  a as S,
  c as le,
  i as C,
  l as w,
  o as ue,
  r as de,
  s as fe,
  u as pe,
} from "./shared-lib.COUt92RR.mjs";
var T,
  E,
  D,
  O,
  k,
  A,
  j,
  M = e(() => {
    (l(),
      v(),
      n(),
      (T = `var(--framer-icon-mask)`),
      (E = o(function (e, t) {
        return a(`svg`, { ...e, ref: t, children: e.children });
      })),
      (D = d.create(E)),
      (O = o((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n
          ? a(D, { ...o, layoutId: r, ref: t, children: i })
          : a(`svg`, { ...o, ref: t, children: i });
      })),
      (k = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 9.75 16.5 C 9.75 16.5 0 11.25 0 5.063 C 0 2.267 2.267 0 5.063 0 C 7.18 0 8.994 1.154 9.75 3 C 10.506 1.154 12.32 0 14.438 0 C 17.233 0 19.5 2.267 19.5 5.063 C 19.5 11.25 9.75 16.5 9.75 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="wiQQwX4vy" transform="translate(2.25 4.5)" width="19.5px"/><path d="M 9.75 16.5 C 9.75 16.5 0 11.25 0 5.063 C 0 2.267 2.267 0 5.063 0 C 7.18 0 8.994 1.154 9.75 3 C 10.506 1.154 12.32 0 14.438 0 C 17.233 0 19.5 2.267 19.5 5.063 C 19.5 11.25 9.75 16.5 9.75 16.5 Z" fill="transparent" height="16.5px" id="vRuguQC0z" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.25 4.5)" width="19.5px"/></svg>`),
      (A = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (j = b(
        o(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: o,
              ezTt3ayMo: s,
              lschgej4H: c,
              qxTvv_EBh: l,
              ...u
            } = A(e),
            d = m(`4282185190`, k);
          return a(O, {
            ...u,
            className: g(`framer-lqwHZ`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": l, "--21h8s6": s, "--pgex8v": c, ...n },
            viewBox: `0 0 24 24`,
            children: a(`use`, { href: d }),
          });
        }),
        [
          `.framer-lqwHZ { -webkit-mask: ${T}; aspect-ratio: 1; display: block; mask: ${T}; width: 24px; }`,
        ],
        `framer-lqwHZ`
      )),
      (j.displayName = `Heart`),
      p(j, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: x.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: x.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: x.Number,
        },
      }));
  }),
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  me = e(() => {
    (l(),
      v(),
      n(),
      (N = `var(--framer-icon-mask)`),
      (P = o(function (e, t) {
        return a(`svg`, { ...e, ref: t, children: e.children });
      })),
      (F = d.create(P)),
      (I = o((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n
          ? a(F, { ...o, layoutId: r, ref: t, children: i })
          : a(`svg`, { ...o, ref: t, children: i });
      })),
      (L = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 10.5 0 L 9 7.5 L 15 9.75 L 4.5 21 L 6 13.5 L 0 11.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="21px" id="C0XRUgMsp" transform="translate(4.5 1.5)" width="15px"/><path d="M 10.5 0 L 9 7.5 L 15 9.75 L 4.5 21 L 6 13.5 L 0 11.25 Z" fill="transparent" height="21px" id="z9XZNqukS" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 1.5)" width="15px"/></svg>`),
      (R = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (z = b(
        o(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: o,
              ezTt3ayMo: s,
              lschgej4H: c,
              qxTvv_EBh: l,
              ...u
            } = R(e),
            d = m(`1028000027`, L);
          return a(I, {
            ...u,
            className: g(`framer-JrhtI`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": l, "--21h8s6": s, "--pgex8v": c, ...n },
            viewBox: `0 0 24 24`,
            children: a(`use`, { href: d }),
          });
        }),
        [
          `.framer-JrhtI { -webkit-mask: ${N}; aspect-ratio: 1; display: block; mask: ${N}; width: 24px; }`,
        ],
        `framer-JrhtI`
      )),
      (z.displayName = `Lightning`),
      p(z, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: x.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: x.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: x.Number,
        },
      }));
  }),
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  he = e(() => {
    (l(),
      v(),
      n(),
      (B = `var(--framer-icon-mask)`),
      (V = o(function (e, t) {
        return a(`svg`, { ...e, ref: t, children: e.children });
      })),
      (H = d.create(V)),
      (U = o((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n
          ? a(H, { ...o, layoutId: r, ref: t, children: i })
          : a(`svg`, { ...o, ref: t, children: i });
      })),
      (W = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="18px" id="M2umBpORv" transform="translate(3 3)" width="18px"/><path d="M 0 3 L 2.25 5.25 L 7.5 0" fill="transparent" height="5.25px" id="SKKzYtdWd" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(8.25 9.75)" width="7.5px"/><path d="M 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 Z" fill="transparent" height="18px" id="Ub0giwiXO" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 3)" width="18px"/></svg>`),
      (G = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (K = b(
        o(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: o,
              ezTt3ayMo: s,
              lschgej4H: c,
              qxTvv_EBh: l,
              ...u
            } = G(e),
            d = m(`2883338743`, W);
          return a(U, {
            ...u,
            className: g(`framer-30Bgq`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": l, "--21h8s6": s, "--pgex8v": c, ...n },
            viewBox: `0 0 24 24`,
            children: a(`use`, { href: d }),
          });
        }),
        [
          `.framer-30Bgq { -webkit-mask: ${B}; aspect-ratio: 1; display: block; mask: ${B}; width: 24px; }`,
        ],
        `framer-30Bgq`
      )),
      (K.displayName = `Check Circle`),
      p(K, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: x.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: x.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: x.Number,
        },
      }));
  }),
  q,
  J,
  Y,
  ge = e(() => {
    (v(),
      h.loadFonts([`FS;Manrope-medium`, `FS;Manrope-bold`]),
      (q = [
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
      (J = [
        `.framer-0LgzV .framer-styles-preset-7kjxd0:not(.rich-text-wrapper), .framer-0LgzV .framer-styles-preset-7kjxd0.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, #333333); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-0LgzV .framer-styles-preset-7kjxd0:not(.rich-text-wrapper), .framer-0LgzV .framer-styles-preset-7kjxd0.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, #333333); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-0LgzV .framer-styles-preset-7kjxd0:not(.rich-text-wrapper), .framer-0LgzV .framer-styles-preset-7kjxd0.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, #333333); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Y = `framer-0LgzV`));
  });
function X(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Z,
  Q,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  $,
  we = e(() => {
    (l(),
      v(),
      te(),
      n(),
      M(),
      me(),
      he(),
      pe(),
      ge(),
      ue(),
      (Z = [`i_yBB2i2v`, `Ej1ZD7ZyL`, `GBYPdzICv`, `W2ji09FGe`, `a2LPBleFs`]),
      (Q = `framer-vCakc`),
      (_e = {
        a2LPBleFs: `framer-v-yn9xc9`,
        Ej1ZD7ZyL: `framer-v-1jiqesu`,
        GBYPdzICv: `framer-v-11wvw7u`,
        i_yBB2i2v: `framer-v-1xhdhc7`,
        W2ji09FGe: `framer-v-c0m7m2`,
      }),
      (ve = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ye = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          o = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (be = {
        "Icon + Text Pill": `i_yBB2i2v`,
        "No Icon Pill": `GBYPdzICv`,
        "Process Pill": `a2LPBleFs`,
        "Project Pill": `W2ji09FGe`,
        Extra: `Ej1ZD7ZyL`,
      }),
      (xe = d.create(i)),
      (Se = ({ fill: e, fontColor: t, height: n, id: r, number: i, width: a, ...o }) => ({
        ...o,
        EUBO2osZo:
          t ?? o.EUBO2osZo ?? `var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, rgb(51, 51, 51))`,
        Mn4MWxttI:
          e ??
          o.Mn4MWxttI ??
          `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
        QhARj87DK: i ?? o.QhARj87DK ?? `+2.4M Views Generated`,
        variant: be[o.variant] ?? o.variant ?? `i_yBB2i2v`,
      })),
      (Ce = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = b(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = ce();
          ae();
          let {
              style: te,
              className: p,
              layoutId: m,
              variant: h,
              QhARj87DK: _,
              Mn4MWxttI: v,
              EUBO2osZo: y,
              ...b
            } = Se(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: le,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: ue,
              setGestureState: pe,
              setVariant: T,
              variants: E,
            } = re({
              cycleOrder: Z,
              defaultVariant: `i_yBB2i2v`,
              ref: o,
              variant: h,
              variantClassNames: _e,
            }),
            D = Ce(e, E),
            { activeVariantCallback: O, delay: k } = ie(x);
          ne(x, {
            a2LPBleFs: void 0,
            default: O(async (...e) => {
              await k(() => T(`kReQ6IqKK`, !0), 1e3);
            }),
            Ej1ZD7ZyL: void 0,
            GBYPdzICv: void 0,
            W2ji09FGe: void 0,
          });
          let A = g(Q, Y, fe, de),
            M = () => x !== `GBYPdzICv`;
          return a(ee, {
            id: m ?? s,
            children: a(xe, {
              animate: E,
              initial: !1,
              children: a(ye, {
                value: ve,
                children: c(d.div, {
                  ...b,
                  ...C,
                  className: g(A, `framer-1xhdhc7`, p, S),
                  "data-border": !0,
                  "data-framer-name": `Icon + Text Pill`,
                  "data-highlight": !0,
                  layoutDependency: D,
                  layoutId: `i_yBB2i2v`,
                  ref: o,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, rgb(219, 219, 219))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    ...te,
                  },
                  variants: {
                    a2LPBleFs: {
                      backgroundColor: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                    },
                    GBYPdzICv: { backgroundColor: v },
                  },
                  ...X(
                    {
                      a2LPBleFs: { "data-framer-name": `Process Pill`, "data-highlight": void 0 },
                      Ej1ZD7ZyL: { "data-framer-name": `Extra`, "data-highlight": void 0 },
                      GBYPdzICv: { "data-framer-name": `No Icon Pill`, "data-highlight": void 0 },
                      W2ji09FGe: { "data-framer-name": `Project Pill`, "data-highlight": void 0 },
                    },
                    x,
                    w
                  ),
                  children: [
                    M() &&
                      a(oe, {
                        animated: !0,
                        className: `framer-8568pl`,
                        Component: K,
                        layoutDependency: D,
                        layoutId: `bLed7_PS7`,
                        style: {
                          "--1m6trwb": 0,
                          "--21h8s6": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                          "--pgex8v": 1.5,
                        },
                        variants: {
                          a2LPBleFs: { "--1m6trwb": 1 },
                          W2ji09FGe: {
                            "--1m6trwb": 1,
                            "--21h8s6": `var(--token-6027fb09-b6d7-4a35-be6b-ee5163abd9d5, rgb(255, 79, 79))`,
                          },
                        },
                        ...X({ a2LPBleFs: { Component: z }, W2ji09FGe: { Component: j } }, x, w),
                      }),
                    a(d.div, {
                      className: `framer-idpxl0`,
                      layoutDependency: D,
                      layoutId: `pUPWNkywb`,
                      children: a(se, {
                        __fromCanvasComponent: !0,
                        children: a(i, {
                          children: a(d.p, {
                            className: `framer-styles-preset-7kjxd0`,
                            "data-styles-preset": `u5Kt11ghU`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                            },
                            children: `+2.4M Views Generated`,
                          }),
                        }),
                        className: `framer-unws5w`,
                        fonts: [`Inter`],
                        layoutDependency: D,
                        layoutId: `PWm_mJNNl`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          "--variable-reference-EUBO2osZo-C707vaXbi": y,
                        },
                        text: _,
                        variants: {
                          GBYPdzICv: {
                            "--extracted-r6o4lv": `var(--variable-reference-EUBO2osZo-C707vaXbi)`,
                            "--variable-reference-EUBO2osZo-C707vaXbi": y,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...X(
                          {
                            a2LPBleFs: {
                              children: a(i, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-1t2hdh2`,
                                  "data-styles-preset": `XwHPbJEPQ`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                  },
                                  children: `+2.4M Views Generated`,
                                }),
                              }),
                            },
                            GBYPdzICv: {
                              children: a(i, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-7kjxd0`,
                                  "data-styles-preset": `u5Kt11ghU`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-EUBO2osZo-C707vaXbi))`,
                                  },
                                  children: `+2.4M Views Generated`,
                                }),
                              }),
                            },
                            W2ji09FGe: {
                              children: a(i, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-nkt4ib`,
                                  "data-styles-preset": `qofApnVkv`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                  },
                                  children: `+2.4M Views Generated`,
                                }),
                              }),
                            },
                          },
                          x,
                          w
                        ),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-vCakc.framer-804fyg, .framer-vCakc .framer-804fyg { display: block; }`,
          `.framer-vCakc.framer-1xhdhc7 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px 20px 10px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-vCakc .framer-8568pl { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 27px); position: relative; width: 27px; }`,
          `.framer-vCakc .framer-idpxl0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-vCakc .framer-unws5w { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-vCakc.framer-v-1jiqesu.framer-1xhdhc7 { padding: 20px; }`,
          `.framer-vCakc.framer-v-11wvw7u.framer-1xhdhc7 { padding: 10px 20px 10px 20px; }`,
          `.framer-vCakc.framer-v-c0m7m2.framer-1xhdhc7 { padding: 5px 20px 5px 10px; }`,
          `.framer-vCakc.framer-v-c0m7m2 .framer-8568pl { height: var(--framer-aspect-ratio-supported, 20px); width: 20px; }`,
          `.framer-vCakc.framer-v-yn9xc9.framer-1xhdhc7 { gap: 5px; padding: 8px 15px 8px 12px; }`,
          `.framer-vCakc.framer-v-yn9xc9 .framer-8568pl { height: var(--framer-aspect-ratio-supported, 15px); width: 15px; }`,
          ...J,
          ...le,
          ...C,
          `.framer-vCakc[data-border="true"]::after, .framer-vCakc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-vCakc`
      )),
      ($.displayName = `Pill Card`),
      ($.defaultProps = { height: 47, width: 256 }),
      p($, {
        variant: {
          options: [`i_yBB2i2v`, `Ej1ZD7ZyL`, `GBYPdzICv`, `W2ji09FGe`, `a2LPBleFs`],
          optionTitles: [
            `Icon + Text Pill`,
            `Extra`,
            `No Icon Pill`,
            `Project Pill`,
            `Process Pill`,
          ],
          title: `Variant`,
          type: x.Enum,
        },
        QhARj87DK: {
          defaultValue: `+2.4M Views Generated`,
          displayTextArea: !1,
          title: `Number`,
          type: x.String,
        },
        onQhARj87DKChange: { changes: `QhARj87DK`, type: x.ChangeHandler },
        Mn4MWxttI: {
          defaultValue: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
          title: `Fill`,
          type: x.Color,
        },
        EUBO2osZo: {
          defaultValue: `var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, rgb(51, 51, 51))`,
          title: `Font Color`,
          type: x.Color,
        },
      }),
      y(
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
          ..._(q),
          ..._(w),
          ..._(S),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { we as n, $ as t };
//# sourceMappingURL=C707vaXbi.Bz2Zvr0r.mjs.map
