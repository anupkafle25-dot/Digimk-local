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
import { T as d, a as f, r as p, t as m } from "./motion.BtOE26Nw.mjs";
import {
  A as h,
  Mt as g,
  N as _,
  Ot as v,
  U as y,
  X as b,
  dt as x,
  ft as S,
  k as C,
  kt as w,
  o as T,
  w as E,
  xt as D,
} from "./framer.BpPKSFgL.mjs";
import { i as O, n as k, r as A, t as j } from "./DJ_jb3woG.DiWJITiJ.mjs";
function M(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var N,
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
      b(),
      m(),
      n(),
      O(),
      (N = g(d.div)),
      (P = { XBxq31m7w: { hover: !0 } }),
      (F = [`XBxq31m7w`, `Tcddd1rdd`, `mrIaR8L4l`, `mNV4aQKo_`, `gAjaZJJ9j`]),
      (I = `framer-ttVCP`),
      (L = {
        gAjaZJJ9j: `framer-v-1xcxigq`,
        mNV4aQKo_: `framer-v-p5rva6`,
        mrIaR8L4l: `framer-v-1abchw0`,
        Tcddd1rdd: `framer-v-1uzh18d`,
        XBxq31m7w: `framer-v-iu8gx2`,
      }),
      (R = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (z = {
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
      (B = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (V = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: B,
        x: 0,
        y: 0,
      }),
      (H = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (U = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          o = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (W = {
        Default: `XBxq31m7w`,
        Disabled: `mrIaR8L4l`,
        Error: `gAjaZJJ9j`,
        Loading: `Tcddd1rdd`,
        Success: `mNV4aQKo_`,
      }),
      (G = d.create(i)),
      (K = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        variant: W[i.variant] ?? i.variant ?? `XBxq31m7w`,
        XkqcHLIT8: e ?? i.XkqcHLIT8,
      })),
      (q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = w(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = D();
          S();
          let { style: m, className: h, layoutId: g, variant: y, XkqcHLIT8: b, ...C } = K(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: O,
              gestureHandlers: k,
              gestureVariant: A,
              isLoading: W,
              setGestureState: J,
              setVariant: Y,
              variants: X,
            } = v({
              cycleOrder: F,
              defaultVariant: `XBxq31m7w`,
              enabledGestures: P,
              ref: o,
              variant: y,
              variantClassNames: L,
            }),
            Z = q(e, X),
            { activeVariantCallback: Q, delay: ee } = x(w),
            $ = Q(async (...e) => {
              if ((J({ isPressed: !1 }), b && (await b(...e)) === !1)) return !1;
            }),
            te = _(I, j),
            ne = () => A === `XBxq31m7w-hover`;
          return a(p, {
            id: g ?? s,
            children: a(G, {
              animate: X,
              initial: !1,
              children: a(U, {
                value: R,
                children: a(d.button, {
                  ...C,
                  ...k,
                  className: _(te, `framer-iu8gx2`, h, T),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  "data-reset": `button`,
                  layoutDependency: Z,
                  layoutId: `XBxq31m7w`,
                  onTap: $,
                  ref: o,
                  style: {
                    backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    opacity: 1,
                    ...m,
                  },
                  variants: {
                    "XBxq31m7w-hover": { opacity: 1 },
                    gAjaZJJ9j: { backgroundColor: `rgba(255, 34, 68, 0.15)`, opacity: 1 },
                    mNV4aQKo_: { opacity: 1 },
                    mrIaR8L4l: { opacity: 0.5 },
                  },
                  ...M(
                    {
                      "XBxq31m7w-hover": { "data-framer-name": void 0 },
                      gAjaZJJ9j: { "data-framer-name": `Error` },
                      mNV4aQKo_: { "data-framer-name": `Success` },
                      mrIaR8L4l: { "data-framer-name": `Disabled` },
                      Tcddd1rdd: { "data-framer-name": `Loading` },
                    },
                    w,
                    A
                  ),
                  children: c(d.div, {
                    className: `framer-1d1xi5w`,
                    layoutDependency: Z,
                    layoutId: `ijFnmrTg5`,
                    children: [
                      ne() &&
                        a(d.div, {
                          className: `framer-hhnxj9`,
                          layoutDependency: Z,
                          layoutId: `N9CrpeKbN`,
                          children: a(N, {
                            __framer__animate: { transition: B },
                            __framer__animateOnce: !1,
                            __framer__enter: z,
                            __framer__exit: V,
                            __framer__loop: z,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopPauseOffscreen: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: `loop`,
                            __framer__loopTransition: H,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-yiafzf`,
                            layoutDependency: Z,
                            layoutId: `R2OBP36mU`,
                            style: {
                              backgroundColor: `var(--token-4f650eff-568d-45ee-b0f2-21d9c022e3ce, rgb(255, 66, 66))`,
                              borderBottomLeftRadius: 30,
                              borderBottomRightRadius: 30,
                              borderTopLeftRadius: 30,
                              borderTopRightRadius: 30,
                            },
                            variants: {
                              "XBxq31m7w-hover": {
                                backgroundColor: `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                              },
                            },
                          }),
                        }),
                      a(E, {
                        __fromCanvasComponent: !0,
                        children: a(i, {
                          children: a(d.p, {
                            className: `framer-styles-preset-1rt8l9`,
                            "data-styles-preset": `DJ_jb3woG`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                            },
                            children: `Submit`,
                          }),
                        }),
                        className: `framer-1l4eo2f`,
                        fonts: [`Inter`],
                        layoutDependency: Z,
                        layoutId: `AKt7DzO2c`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          gAjaZJJ9j: {
                            "--extracted-r6o4lv": `var(--token-6027fb09-b6d7-4a35-be6b-ee5163abd9d5, rgb(255, 79, 79))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...M(
                          {
                            gAjaZJJ9j: {
                              children: a(i, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-1rt8l9`,
                                  "data-styles-preset": `DJ_jb3woG`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6027fb09-b6d7-4a35-be6b-ee5163abd9d5, rgb(255, 79, 79)))`,
                                  },
                                  children: `Something went wrong`,
                                }),
                              }),
                            },
                            mNV4aQKo_: {
                              children: a(i, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-1rt8l9`,
                                  "data-styles-preset": `DJ_jb3woG`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                  },
                                  children: `Thank you.`,
                                }),
                              }),
                            },
                            Tcddd1rdd: {
                              children: a(i, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-1rt8l9`,
                                  "data-styles-preset": `DJ_jb3woG`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                  },
                                  children: `Loading`,
                                }),
                              }),
                            },
                          },
                          w,
                          A
                        ),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-ttVCP.framer-1l6bxqw, .framer-ttVCP .framer-1l6bxqw { display: block; }`,
          `.framer-ttVCP.framer-iu8gx2 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 15px 20px 15px 20px; position: relative; width: 240px; }`,
          `.framer-ttVCP .framer-1d1xi5w { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-ttVCP .framer-hhnxj9 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 2px 0px 0px 0px; position: relative; width: min-content; }`,
          `.framer-ttVCP .framer-yiafzf { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 5px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 5px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-ttVCP .framer-1l4eo2f { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          ...k,
        ],
        `framer-ttVCP`
      )),
      (J.displayName = `Form Button`),
      (J.defaultProps = { height: 44.5, width: 240 }),
      h(J, {
        variant: {
          options: [`XBxq31m7w`, `Tcddd1rdd`, `mrIaR8L4l`, `mNV4aQKo_`, `gAjaZJJ9j`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: T.Enum,
        },
        XkqcHLIT8: { title: `Click`, type: T.EventHandler },
      }),
      C(
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
          ...y(A),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Y as n, J as t };
//# sourceMappingURL=sa9XtqcAk.B3TdgI4q.mjs.map
