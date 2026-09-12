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
  v as ee,
} from "./react.C1Oj3OU0.mjs";
import { T as u, a as d, r as f, t as p } from "./motion.BtOE26Nw.mjs";
import {
  A as m,
  Mt as h,
  N as g,
  Ot as _,
  U as v,
  X as y,
  dt as b,
  ft as te,
  h as ne,
  k as x,
  kt as S,
  o as C,
  w,
  xt as T,
} from "./framer.BpPKSFgL.mjs";
import { i as E, n as D, r as O, t as k } from "./DJ_jb3woG.DiWJITiJ.mjs";
function A(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y = e(() => {
    (l(),
      y(),
      p(),
      n(),
      E(),
      (j = h(u.div)),
      (M = { NPcMhI0aR: { hover: !0 }, WbG8Rb16u: { hover: !0 }, Z9KBZRf_p: { hover: !0 } }),
      (N = [`NPcMhI0aR`, `Z9KBZRf_p`, `WbG8Rb16u`, `y674jXdOH`, `FHv7_ay7p`, `QxvVmZpIs`]),
      (P = `framer-zxsTj`),
      (F = {
        FHv7_ay7p: `framer-v-1k93j3h`,
        NPcMhI0aR: `framer-v-y78rqe`,
        QxvVmZpIs: `framer-v-1txi2qd`,
        WbG8Rb16u: `framer-v-x12m6t`,
        y674jXdOH: `framer-v-nxf638`,
        Z9KBZRf_p: `framer-v-2px6wh`,
      }),
      (I = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (L = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (R = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (z = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (B = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: z,
        x: 0,
        y: 0,
      }),
      (V = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (H = {
        opacity: 0,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (U = ({ value: e, children: n }) => {
        let r = t(d),
          i = e ?? r.transition,
          o = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(d.Provider, { value: o, children: n });
      }),
      (W = {
        "Mobile Black": `y674jXdOH`,
        "Mobile White Border": `QxvVmZpIs`,
        "Mobile White": `FHv7_ay7p`,
        "White Border": `WbG8Rb16u`,
        Main: `NPcMhI0aR`,
        White: `Z9KBZRf_p`,
      }),
      (G = u.create(i)),
      (K = ({ click: e, height: t, id: n, link: r, radius: i, title: a, width: o, ...s }) => ({
        ...s,
        arrAKCynS: r ?? s.arrAKCynS,
        iFMm5vzrn: e ?? s.iFMm5vzrn,
        leLsKUYDS: a ?? s.leLsKUYDS ?? `Get in touch`,
        Llv8Wzb_B: i ?? s.Llv8Wzb_B ?? `40px`,
        variant: W[s.variant] ?? s.variant ?? `NPcMhI0aR`,
      })),
      (q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = S(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = ee(),
            { activeLocale: l, setLocale: d } = T();
          te();
          let {
              style: p,
              className: m,
              layoutId: h,
              variant: v,
              leLsKUYDS: y,
              arrAKCynS: x,
              Llv8Wzb_B: S,
              iFMm5vzrn: C,
              ...E
            } = K(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: W,
              gestureHandlers: J,
              gestureVariant: Y,
              isLoading: re,
              setGestureState: X,
              setVariant: ie,
              variants: Z,
            } = _({
              cycleOrder: N,
              defaultVariant: `NPcMhI0aR`,
              enabledGestures: M,
              ref: o,
              variant: v,
              variantClassNames: F,
            }),
            Q = q(e, Z),
            { activeVariantCallback: $, delay: ae } = b(D),
            oe = $(async (...e) => {
              if ((X({ isPressed: !1 }), C && (await C(...e)) === !1)) return !1;
            }),
            se = g(P, k),
            ce = () => !![`NPcMhI0aR-hover`, `Z9KBZRf_p-hover`, `WbG8Rb16u-hover`].includes(Y);
          return a(f, {
            id: h ?? s,
            children: a(G, {
              animate: Z,
              initial: !1,
              children: a(U, {
                value: L,
                children: a(ne, {
                  href: x,
                  motionChild: !0,
                  nodeId: `NPcMhI0aR`,
                  openInNewTab: !1,
                  scopeId: `XZ2Inc0W0`,
                  smoothScroll: !0,
                  children: a(u.a, {
                    ...E,
                    ...J,
                    className: `${g(se, `framer-y78rqe`, m, O)} framer-bjh383`,
                    "data-framer-name": `Main`,
                    "data-highlight": !0,
                    layoutDependency: Q,
                    layoutId: `NPcMhI0aR`,
                    onTap: oe,
                    ref: o,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backgroundColor: `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                      borderBottomLeftRadius: I(S, 3),
                      borderBottomRightRadius: I(S, 2),
                      borderTopLeftRadius: I(S, 0),
                      borderTopRightRadius: I(S, 1),
                      ...p,
                    },
                    variants: {
                      "NPcMhI0aR-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                      },
                      "WbG8Rb16u-hover": {
                        "--border-color": `var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, rgb(219, 219, 219))`,
                      },
                      "Z9KBZRf_p-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                      },
                      FHv7_ay7p: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                      },
                      QxvVmZpIs: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, rgb(230, 230, 230))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      WbG8Rb16u: {
                        "--border-bottom-width": `2px`,
                        "--border-color": `var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, rgb(230, 230, 230))`,
                        "--border-left-width": `2px`,
                        "--border-right-width": `2px`,
                        "--border-style": `solid`,
                        "--border-top-width": `2px`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      y674jXdOH: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                      },
                      Z9KBZRf_p: {
                        backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                      },
                    },
                    ...A(
                      {
                        "NPcMhI0aR-hover": { "data-framer-name": void 0 },
                        "WbG8Rb16u-hover": { "data-framer-name": void 0 },
                        "Z9KBZRf_p-hover": { "data-framer-name": void 0 },
                        FHv7_ay7p: { "data-framer-name": `Mobile White` },
                        QxvVmZpIs: { "data-border": !0, "data-framer-name": `Mobile White Border` },
                        WbG8Rb16u: { "data-border": !0, "data-framer-name": `White Border` },
                        y674jXdOH: { "data-framer-name": `Mobile Black` },
                        Z9KBZRf_p: { "data-framer-name": `White` },
                      },
                      D,
                      Y
                    ),
                    children: c(u.div, {
                      className: `framer-fy7tw`,
                      layoutDependency: Q,
                      layoutId: `IR14eS08_`,
                      children: [
                        ce() &&
                          a(u.div, {
                            className: `framer-129gpck`,
                            layoutDependency: Q,
                            layoutId: `A97wg6Lxt`,
                            children: a(j, {
                              className: `framer-19db7fj`,
                              layoutDependency: Q,
                              layoutId: `adnCVeddT`,
                              style: {
                                backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                borderBottomLeftRadius: 30,
                                borderBottomRightRadius: 30,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30,
                              },
                              variants: {
                                "NPcMhI0aR-hover": { backgroundColor: `rgb(255, 255, 255)` },
                                "WbG8Rb16u-hover": {
                                  backgroundColor: `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                },
                                "Z9KBZRf_p-hover": {
                                  backgroundColor: `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                },
                              },
                              ...A(
                                {
                                  "NPcMhI0aR-hover": {
                                    __framer__animate: { transition: z },
                                    __framer__animateOnce: !1,
                                    __framer__enter: R,
                                    __framer__exit: B,
                                    __framer__loop: H,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopPauseOffscreen: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: `mirror`,
                                    __framer__loopTransition: V,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                  },
                                  "WbG8Rb16u-hover": {
                                    __framer__animate: { transition: z },
                                    __framer__animateOnce: !1,
                                    __framer__enter: R,
                                    __framer__exit: B,
                                    __framer__loop: H,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopPauseOffscreen: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: `mirror`,
                                    __framer__loopTransition: V,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                  },
                                  "Z9KBZRf_p-hover": {
                                    __framer__animate: { transition: z },
                                    __framer__animateOnce: !1,
                                    __framer__enter: R,
                                    __framer__exit: B,
                                    __framer__loop: H,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopPauseOffscreen: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: `mirror`,
                                    __framer__loopTransition: V,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                  },
                                },
                                D,
                                Y
                              ),
                            }),
                          }),
                        a(w, {
                          __fromCanvasComponent: !0,
                          children: a(i, {
                            children: a(u.p, {
                              className: `framer-styles-preset-1rt8l9`,
                              "data-styles-preset": `DJ_jb3woG`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                              },
                              children: `Get in touch`,
                            }),
                          }),
                          className: `framer-i4wbch`,
                          fonts: [`Inter`],
                          layoutDependency: Q,
                          layoutId: `PNX3Rr3ox`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: y,
                          variants: {
                            FHv7_ay7p: {
                              "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                            },
                            QxvVmZpIs: {
                              "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                            },
                            WbG8Rb16u: {
                              "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                            },
                            Z9KBZRf_p: {
                              "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...A(
                            {
                              FHv7_ay7p: {
                                children: a(i, {
                                  children: a(u.p, {
                                    className: `framer-styles-preset-1rt8l9`,
                                    "data-styles-preset": `DJ_jb3woG`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                    },
                                    children: `Get in touch`,
                                  }),
                                }),
                              },
                              QxvVmZpIs: {
                                children: a(i, {
                                  children: a(u.p, {
                                    className: `framer-styles-preset-1rt8l9`,
                                    "data-styles-preset": `DJ_jb3woG`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                    },
                                    children: `Get in touch`,
                                  }),
                                }),
                              },
                              WbG8Rb16u: {
                                children: a(i, {
                                  children: a(u.p, {
                                    className: `framer-styles-preset-1rt8l9`,
                                    "data-styles-preset": `DJ_jb3woG`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                    },
                                    children: `Get in touch`,
                                  }),
                                }),
                              },
                              Z9KBZRf_p: {
                                children: a(i, {
                                  children: a(u.p, {
                                    className: `framer-styles-preset-1rt8l9`,
                                    "data-styles-preset": `DJ_jb3woG`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                    },
                                    children: `Get in touch`,
                                  }),
                                }),
                              },
                            },
                            D,
                            Y
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-zxsTj.framer-bjh383, .framer-zxsTj .framer-bjh383 { display: block; }`,
          `.framer-zxsTj.framer-y78rqe { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 15px 20px 15px 20px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-zxsTj .framer-fy7tw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
          `.framer-zxsTj .framer-129gpck { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 2px 0px 0px 0px; position: relative; width: min-content; }`,
          `.framer-zxsTj .framer-19db7fj { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 5px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-zxsTj .framer-i4wbch { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...D,
          `.framer-zxsTj[data-border="true"]::after, .framer-zxsTj [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-zxsTj`
      )),
      (J.displayName = `Button`),
      (J.defaultProps = { height: 44, width: 139 }),
      m(J, {
        variant: {
          options: [`NPcMhI0aR`, `Z9KBZRf_p`, `WbG8Rb16u`, `y674jXdOH`, `FHv7_ay7p`, `QxvVmZpIs`],
          optionTitles: [
            `Main`,
            `White`,
            `White Border`,
            `Mobile Black`,
            `Mobile White`,
            `Mobile White Border`,
          ],
          title: `Variant`,
          type: C.Enum,
        },
        leLsKUYDS: {
          defaultValue: `Get in touch`,
          displayTextArea: !1,
          title: `Title`,
          type: C.String,
        },
        onleLsKUYDSChange: { changes: `leLsKUYDS`, type: C.ChangeHandler },
        arrAKCynS: { title: `Link`, type: C.Link },
        Llv8Wzb_B: { defaultValue: `40px`, title: `Radius`, type: C.BorderRadius },
        iFMm5vzrn: { title: `Click`, type: C.EventHandler },
      }),
      x(
        J,
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
          ...v(O),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Y as n, J as t };
//# sourceMappingURL=XZ2Inc0W0.Clvcqdla.mjs.map
