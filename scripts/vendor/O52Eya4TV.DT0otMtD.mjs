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
  N as g,
  Ot as _,
  U as v,
  W as y,
  X as b,
  f as x,
  ft as S,
  k as C,
  kt as w,
  o as T,
  w as E,
  xt as D,
} from "./framer.BpPKSFgL.mjs";
import { c as O, l as k, s as A, u as j } from "./shared-lib.COUt92RR.mjs";
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
  W = e(() => {
    (l(),
      b(),
      m(),
      n(),
      j(),
      (N = [`xFGTrIgwt`, `U6Q6u9e_Y`]),
      (P = `framer-0YFiO`),
      (F = { U6Q6u9e_Y: `framer-v-13ge6ue`, xFGTrIgwt: `framer-v-y0breu` }),
      (I = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (L = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (R = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          o = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (z = { Compact: `U6Q6u9e_Y`, General: `xFGTrIgwt` }),
      (B = d.create(i)),
      (V = ({ authorName: e, authorProfilePicture: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        EJzgCp6hy: t ??
          a.EJzgCp6hy ?? {
            alt: `men's gray crew-neck shirt`,
            pixelHeight: 3264,
            pixelWidth: 4928,
            src: `https://framerusercontent.com/images/IQKddGGUVKfESbTRhHhxUrBqwQ.jpg?width=4928&height=3264`,
            srcSet: `https://framerusercontent.com/images/IQKddGGUVKfESbTRhHhxUrBqwQ.jpg?scale-down-to=512&width=4928&height=3264 512w,https://framerusercontent.com/images/IQKddGGUVKfESbTRhHhxUrBqwQ.jpg?scale-down-to=1024&width=4928&height=3264 1024w,https://framerusercontent.com/images/IQKddGGUVKfESbTRhHhxUrBqwQ.jpg?scale-down-to=2048&width=4928&height=3264 2048w,https://framerusercontent.com/images/IQKddGGUVKfESbTRhHhxUrBqwQ.jpg?scale-down-to=4096&width=4928&height=3264 4096w,https://framerusercontent.com/images/IQKddGGUVKfESbTRhHhxUrBqwQ.jpg?width=4928&height=3264 4928w`,
          },
        variant: z[a.variant] ?? a.variant ?? `xFGTrIgwt`,
        WK1YlvJuW: e ?? a.WK1YlvJuW ?? `Orin`,
      })),
      (H = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (U = w(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = D(),
            m = S(),
            {
              style: h,
              className: v,
              layoutId: b,
              variant: C,
              EJzgCp6hy: w,
              WK1YlvJuW: T,
              ...O
            } = V(e),
            {
              baseVariant: k,
              classNames: j,
              clearLoadingGesture: z,
              gestureHandlers: U,
              gestureVariant: W,
              isLoading: G,
              setGestureState: K,
              setVariant: q,
              variants: J,
            } = _({
              cycleOrder: N,
              defaultVariant: `xFGTrIgwt`,
              ref: o,
              variant: C,
              variantClassNames: F,
            }),
            Y = H(e, J),
            X = g(P, A);
          return a(p, {
            id: b ?? s,
            children: a(B, {
              animate: J,
              initial: !1,
              children: a(R, {
                value: I,
                children: c(d.div, {
                  ...O,
                  ...U,
                  className: g(X, `framer-y0breu`, v, j),
                  "data-border": !0,
                  "data-framer-name": `General`,
                  layoutDependency: Y,
                  layoutId: `xFGTrIgwt`,
                  ref: o,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, rgb(219, 219, 219))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    ...h,
                  },
                  ...M({ U6Q6u9e_Y: { "data-framer-name": `Compact` } }, k, W),
                  children: [
                    a(x, {
                      background: {
                        alt: `men's gray crew-neck shirt`,
                        fit: `fill`,
                        intrinsicHeight: 3264,
                        intrinsicWidth: 4928,
                        loading: y((m?.y || 0) + (5 + ((m?.height || 39) - 10 - 29) / 2)),
                        pixelHeight: 3264,
                        pixelWidth: 4928,
                        sizes: `29px`,
                        ...L(w),
                      },
                      className: `framer-180da3c`,
                      layoutDependency: Y,
                      layoutId: `iyGbvn_fy`,
                      style: {
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                      ...M(
                        {
                          U6Q6u9e_Y: {
                            background: {
                              alt: `men's gray crew-neck shirt`,
                              fit: `fill`,
                              intrinsicHeight: 3264,
                              intrinsicWidth: 4928,
                              loading: y((m?.y || 0) + (3 + ((m?.height || 30) - 6 - 20) / 2)),
                              pixelHeight: 3264,
                              pixelWidth: 4928,
                              sizes: `20px`,
                              ...L(w),
                            },
                          },
                        },
                        k,
                        W
                      ),
                    }),
                    a(E, {
                      __fromCanvasComponent: !0,
                      children: a(i, {
                        children: a(d.p, {
                          className: `framer-styles-preset-nkt4ib`,
                          "data-styles-preset": `qofApnVkv`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                          },
                          children: `Orin`,
                        }),
                      }),
                      className: `framer-12u3xhb`,
                      fonts: [`Inter`],
                      layoutDependency: Y,
                      layoutId: `V1eRrWfnW`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: T,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-0YFiO.framer-ko5zuo, .framer-0YFiO .framer-ko5zuo { display: block; }`,
          `.framer-0YFiO.framer-y0breu { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: visible; padding: 5px 15px 5px 5px; position: relative; width: min-content; }`,
          `.framer-0YFiO .framer-180da3c { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 29px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 29px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-0YFiO .framer-12u3xhb { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-0YFiO.framer-v-13ge6ue.framer-y0breu { gap: 10px; padding: 3px 15px 3px 5px; }`,
          `.framer-0YFiO.framer-v-13ge6ue .framer-180da3c { height: var(--framer-aspect-ratio-supported, 20px); width: 20px; }`,
          ...O,
          `.framer-0YFiO[data-border="true"]::after, .framer-0YFiO [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-0YFiO`
      )),
      (U.displayName = `Profile Username Card`),
      (U.defaultProps = { height: 39, width: 88.5 }),
      h(U, {
        variant: {
          options: [`xFGTrIgwt`, `U6Q6u9e_Y`],
          optionTitles: [`General`, `Compact`],
          title: `Variant`,
          type: T.Enum,
        },
        EJzgCp6hy: {
          __defaultAssetReference: `data:framer/asset-reference,IQKddGGUVKfESbTRhHhxUrBqwQ.jpg?originalFilename=photo-1564564321837-a57b7070ac4f%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHw0fHxtYW58ZW58MHx8fHwxNzc1Mjg3NzEwfDA%26ixlib%3Drb-4.1.jpg&width=4928&height=3264`,
          __vekterDefault: {
            alt: `men's gray crew-neck shirt`,
            assetReference: `data:framer/asset-reference,IQKddGGUVKfESbTRhHhxUrBqwQ.jpg?originalFilename=photo-1564564321837-a57b7070ac4f%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHw0fHxtYW58ZW58MHx8fHwxNzc1Mjg3NzEwfDA%26ixlib%3Drb-4.1.jpg&width=4928&height=3264`,
          },
          title: `Author Profile Picture`,
          type: T.ResponsiveImage,
        },
        WK1YlvJuW: {
          defaultValue: `Orin`,
          displayTextArea: !1,
          title: `Author Name`,
          type: T.String,
        },
        onWK1YlvJuWChange: { changes: `WK1YlvJuW`, type: T.ChangeHandler },
      }),
      C(
        U,
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
          ...v(k),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { W as n, U as t };
//# sourceMappingURL=O52Eya4TV.DT0otMtD.mjs.map
