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
  R as l,
  c as u,
  g as d,
  h as f,
  j as p,
  l as ee,
  o as m,
  v as h,
} from "./react.C1Oj3OU0.mjs";
import { S as g, T as _, V as v, a as y, r as b, t as x } from "./motion.BtOE26Nw.mjs";
import {
  A as S,
  Dt as C,
  N as w,
  Ot as T,
  S as E,
  X as D,
  _t as O,
  ft as k,
  k as te,
  kt as A,
  o as j,
  p as M,
  xt as N,
  yt as ne,
} from "./framer.BpPKSFgL.mjs";
var P,
  F,
  I,
  L = e(() => {
    (D(),
      (P = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (F = {
        ...P,
        borderRadius: 6,
        background: `rgba(136, 85, 255, 0.3)`,
        color: `#85F`,
        border: `1px dashed #85F`,
        flexDirection: `column`,
      }),
      (I = {
        onClick: { type: j.EventHandler },
        onMouseEnter: { type: j.EventHandler },
        onMouseLeave: { type: j.EventHandler },
      }),
      j.Number,
      j.Boolean,
      j.String,
      j.Enum);
  });
function re(e, t) {
  return R(!0, e, t);
}
function ie(e, t) {
  return R(!1, e, t);
}
function R(e, t, n = !0) {
  let r = O();
  o(() => {
    n && r === e && t();
  }, [r]);
}
var ae = e(() => {
    (D(), n());
  }),
  z = e(() => {
    n();
  }),
  B = e(() => {
    D();
  }),
  V = e(() => {
    D();
  }),
  H = e(() => {
    n();
  }),
  U = e(() => {
    D();
  }),
  W,
  oe,
  G = e(() => {
    (i(),
      n(),
      (W = () => {
        if (l !== void 0) {
          let e = l.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      (oe = () => p(() => W(), [])));
  }),
  K = e(() => {
    (n(), V());
  }),
  se = e(() => {
    (n(), D(), V(), z());
  }),
  ce = e(() => {
    (D(), n(), L());
  });
function le() {
  return p(() => E.current(), []);
}
function ue() {
  return p(() => E.current() === E.canvas, []);
}
var de = e(() => {
    (n(), D());
  }),
  fe = e(() => {
    n();
  });
function pe(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: r,
    topRightRadius: i,
    bottomRightRadius: a,
    bottomLeftRadius: o,
  } = e;
  return p(() => (n ? `${r}px ${i}px ${a}px ${o}px` : `${t}px`), [t, n, r, i, a, o]);
}
var q,
  me = e(() => {
    (n(),
      D(),
      (q = {
        borderRadius: {
          title: `Radius`,
          type: j.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      j.FusedNumber);
  }),
  he = e(() => {
    (L(), ae(), z(), B(), V(), H(), U(), G(), K(), se(), ce(), de(), fe(), me());
  });
function ge(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function J(e) {
  let t = ge(e);
  return u(we, { ...t });
}
function _e(e) {
  let t = O(),
    n = s(!1),
    r = s(!1),
    i = a((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: a(() => {
      let i = e.current;
      i &&
        ((i.preload = `auto`),
        !(
          i.currentTime > 0 &&
          i.onplaying &&
          !i.paused &&
          !i.ended &&
          i.readyState >= i.HAVE_CURRENT_DATA
        ) &&
          i &&
          !n.current &&
          t &&
          ((n.current = !0),
          (r.current = !0),
          i
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: a(() => {
      !e.current || n.current || (e.current.pause(), (r.current = !1));
    }, []),
    setProgress: i,
    isPlaying: r,
  };
}
function ve({ playingProp: e, muted: t, loop: n, playsinline: i, controls: a }) {
  let [o] = r(e),
    [s, c] = r(!1);
  e !== o && !s && c(!0);
  let l = o && t && n && i && !a && !s,
    u;
  return ((u = l ? `on-viewport` : o ? `on-mount` : `no-autoplay`), u);
}
function ye(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function be(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(ye).join(` `);
}
var xe,
  Se,
  Ce,
  we,
  Y,
  Te = e(() => {
    (m(),
      D(),
      x(),
      he(),
      n(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((xe ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((Se ||= {})),
      (Ce = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (we = f(function (e) {
        let {
            srcType: t = `URL`,
            srcUrl: n,
            srcFile: r = ``,
            posterEnabled: i = !1,
            controls: a = !1,
            playing: c = !0,
            loop: l = !0,
            muted: d = !0,
            playsinline: f = !0,
            restartOnEnter: ee = !1,
            objectFit: m = `cover`,
            backgroundColor: h = `rgba(0,0,0,0)`,
            radius: _ = 0,
            volume: y = 25,
            startTime: b = 0,
            poster: x,
            playing: S,
            progress: C,
            onSeeked: w,
            onPause: T,
            onPlay: D,
            onEnd: O,
            onClick: k,
            onMouseEnter: te,
            onMouseLeave: A,
            onMouseDown: j,
            onMouseUp: M,
          } = e,
          N = s(),
          ne = oe(),
          P = s(null),
          F = s(null),
          I = ue(),
          L = le(),
          R = I || L === E.export,
          ae = pe(e),
          z = R
            ? `no-autoplay`
            : ve({ playingProp: S, muted: d, loop: l, playsinline: f, controls: a }),
          B = R ? !0 : v(N),
          V = !R && v(N, { margin: `10%`, once: !0 }),
          H = b === 100 ? 99.9 : b,
          { play: U, pause: W, setProgress: G, isPlaying: K } = _e(N);
        (o(() => {
          R || (z !== `on-viewport` && (S ? U() : W()));
        }, [z, S]),
          o(() => {
            R || (B && S && z !== `no-autoplay` && U(), z === `on-viewport` && W());
          }, [z, B, S]),
          o(() => {
            !I || x || i || H || !N.current || (N.current.currentTime = 0.01);
          }, [i, x, H]));
        let se = s(!1);
        (o(() => {
          if (!se.current) {
            se.current = !0;
            return;
          }
          let e = g(C) ? C.get() : (C ?? 0) * 0.01;
          G((e ?? 0) || (H ?? 0) / 100);
        }, [H, r, n, C]),
          o(() => {
            if (g(C)) return C.on(`change`, (e) => G(e));
          }, [C]),
          re(() => {
            P.current !== null && N.current && ((!F && l) || !P.current) && U();
          }),
          ie(() => {
            N.current && ((F.current = N.current.ended), (P.current = N.current.paused), W());
          }));
        let ce = p(() => {
          if (t === `URL`) return n + ``;
          if (t === `Upload`) return r + ``;
        }, [t, r, n, H]);
        return (
          o(() => {
            ne && N.current && z === `on-mount` && setTimeout(() => U(), 50);
          }, []),
          o(() => {
            N.current && !d && (N.current.volume = (y ?? 0) / 100);
          }, [y]),
          u(`video`, {
            onClick: k,
            onMouseEnter: te,
            onMouseLeave: A,
            onMouseDown: j,
            onMouseUp: M,
            src: ce,
            loop: l,
            ref: N,
            onSeeked: (e) => w?.(e),
            onPause: (e) => T?.(e),
            onPlay: (e) => D?.(e),
            onEnded: (e) => O?.(e),
            autoPlay: K.current || z === `on-mount` || (S && z === `on-viewport` && B),
            preload: K.current
              ? `auto`
              : R && !x
                ? `metadata`
                : z !== `on-mount` && !V
                  ? `none`
                  : `metadata`,
            poster:
              i && !r && n === Ce
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : i && x
                  ? x
                  : void 0,
            onLoadedData: () => {
              let e = N.current;
              e &&
                (e.currentTime < 0.3 && H > 0 && G((H ?? 0) * 0.01),
                (K.current || z === `on-mount` || (S && z === `on-viewport` && B)) && U());
            },
            controls: a,
            muted: R ? !0 : d,
            playsInline: f,
            style: {
              cursor: k ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: ae,
              display: `block`,
              objectFit: m,
              backgroundColor: h,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (J.displayName = `Video`),
      (Y = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      S(J, {
        srcType: {
          type: j.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: j.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: j.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          description: `Only MP4 and WebM`,
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: j.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        ...q,
        posterEnabled: {
          type: j.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: j.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: { type: j.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: { title: `Start Time`, type: j.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: j.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: j.Enum, title: `Fit`, options: Y, optionTitles: Y.map(be) },
        controls: {
          type: j.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: { type: j.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: {
          type: j.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: j.EventHandler },
        onSeeked: { type: j.EventHandler },
        onPause: { type: j.EventHandler },
        onPlay: { type: j.EventHandler },
        ...I,
      }));
  }),
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  X,
  Me = e(() => {
    (m(),
      D(),
      n(),
      (Ee = `var(--framer-icon-mask)`),
      (De = d(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Oe = _.create(De)),
      (ke = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(Oe, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (Ae = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 15.75 C 5.25 16.164 4.914 16.5 4.5 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="bjzv2vyiE" transform="translate(14.25 3.75)" width="5.25px"/><path d="M 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 15.75 C 5.25 16.164 4.914 16.5 4.5 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="bil1FrzZp" transform="translate(4.5 3.75)" width="5.25px"/><path d="M 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 15.75 C 5.25 16.164 4.914 16.5 4.5 16.5 Z" fill="transparent" height="16.5px" id="huwkPkncM" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(14.25 3.75)" width="5.25px"/><path d="M 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 15.75 C 5.25 16.164 4.914 16.5 4.5 16.5 Z" fill="transparent" height="16.5px" id="vRiS9o8hW" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 3.75)" width="5.25px"/></svg>`),
      (je = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (X = A(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = je(e),
            d = C(`1411738543`, Ae);
          return u(ke, {
            ...l,
            className: w(`framer-gRrkJ`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: u(`use`, { href: d }),
          });
        }),
        [
          `.framer-gRrkJ { -webkit-mask: ${Ee}; aspect-ratio: 1; display: block; mask: ${Ee}; width: 24px; }`,
        ],
        `framer-gRrkJ`
      )),
      (X.displayName = `Pause`),
      S(X, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: j.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: j.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: j.Number,
        },
      }));
  }),
  Z,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Q,
  Re = e(() => {
    (m(),
      D(),
      n(),
      (Z = `var(--framer-icon-mask)`),
      (Ne = d(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Pe = _.create(Ne)),
      (Fe = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(Pe, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (Ie = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0.736 L 0 17.259 C 0.005 17.527 0.153 17.772 0.388 17.902 C 0.623 18.031 0.91 18.025 1.139 17.886 L 14.647 9.625 C 14.866 9.492 15 9.254 15 8.997 C 15 8.741 14.866 8.503 14.647 8.37 L 1.139 0.109 C 0.91 -0.03 0.623 -0.036 0.388 0.093 C 0.153 0.222 0.005 0.468 0 0.736 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="17.99464343330372px" id="aA4uwAbk9" transform="translate(6.75 3.003)" width="15.000071766041629px"/><path d="M 0 0.736 L 0 17.259 C 0.005 17.527 0.153 17.772 0.388 17.902 C 0.623 18.031 0.91 18.025 1.139 17.886 L 14.647 9.625 C 14.866 9.492 15 9.254 15 8.997 C 15 8.741 14.866 8.503 14.647 8.37 L 1.139 0.109 C 0.91 -0.03 0.623 -0.036 0.388 0.093 C 0.153 0.222 0.005 0.468 0 0.736 Z" fill="transparent" height="17.99464343330372px" id="dfZTdlcyH" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6.75 3.003)" width="15.000071766041629px"/></svg>`),
      (Le = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (Q = A(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = Le(e),
            d = C(`3492944464`, Ie);
          return u(Fe, {
            ...l,
            className: w(`framer-Lyd6D`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: u(`use`, { href: d }),
          });
        }),
        [
          `.framer-Lyd6D { -webkit-mask: ${Z}; aspect-ratio: 1; display: block; mask: ${Z}; width: 24px; }`,
        ],
        `framer-Lyd6D`
      )),
      (Q.displayName = `Play`),
      S(Q, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: j.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: j.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: j.Number,
        },
      }));
  });
function ze(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  $,
  Ye = e(() => {
    (m(),
      D(),
      x(),
      n(),
      Me(),
      Re(),
      (Be = [`qVpDFd__L`, `FYLhsC0x3`, `TFuPYIsuB`, `UeDhBGhcP`]),
      (Ve = `framer-hXw2Y`),
      (He = {
        FYLhsC0x3: `framer-v-5p6z1q`,
        qVpDFd__L: `framer-v-tbytlc`,
        TFuPYIsuB: `framer-v-z69b8i`,
        UeDhBGhcP: `framer-v-1rnqt6`,
      }),
      (Ue = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (We = ({ value: e, children: n }) => {
        let r = t(y),
          i = e ?? r.transition,
          a = p(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(y.Provider, { value: a, children: n });
      }),
      (Ge = {
        "Pause Small": `TFuPYIsuB`,
        "Play Small": `FYLhsC0x3`,
        Pause: `UeDhBGhcP`,
        Play: `qVpDFd__L`,
      }),
      (Ke = _.create(c)),
      (qe = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ge[r.variant] ?? r.variant ?? `qVpDFd__L`,
      })),
      (Je = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = A(
        d(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = h(),
            { activeLocale: a, setLocale: o } = N();
          k();
          let { style: c, className: l, layoutId: d, variant: f, ...p } = qe(e),
            {
              baseVariant: ee,
              classNames: m,
              clearLoadingGesture: g,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: x,
              setGestureState: S,
              setVariant: C,
              variants: E,
            } = T({
              cycleOrder: Be,
              defaultVariant: `qVpDFd__L`,
              ref: r,
              variant: f,
              variantClassNames: He,
            }),
            D = Je(e, E),
            O = w(Ve);
          return u(b, {
            id: d ?? i,
            children: u(Ke, {
              animate: E,
              initial: !1,
              children: u(We, {
                value: Ue,
                children: u(_.div, {
                  ...p,
                  ...v,
                  className: w(O, `framer-tbytlc`, l, m),
                  "data-framer-name": `Play`,
                  layoutDependency: D,
                  layoutId: `qVpDFd__L`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 80.45,
                    borderBottomRightRadius: 80.45,
                    borderTopLeftRadius: 80.45,
                    borderTopRightRadius: 80.45,
                    ...c,
                  },
                  ...ze(
                    {
                      FYLhsC0x3: { "data-framer-name": `Play Small` },
                      TFuPYIsuB: { "data-framer-name": `Pause Small` },
                      UeDhBGhcP: { "data-framer-name": `Pause` },
                    },
                    ee,
                    y
                  ),
                  children: u(M, {
                    animated: !0,
                    className: `framer-4oq45s`,
                    Component: Q,
                    layoutDependency: D,
                    layoutId: `ByByoumXs`,
                    style: {
                      "--1m6trwb": 1,
                      "--21h8s6": `var(--token-385efb18-273b-4274-97fe-e0c9e9a7b6b4, rgb(0, 0, 0))`,
                      "--pgex8v": 1.5,
                    },
                    ...ze({ TFuPYIsuB: { Component: X }, UeDhBGhcP: { Component: X } }, ee, y),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-hXw2Y.framer-396sio, .framer-hXw2Y .framer-396sio { display: block; }`,
          `.framer-hXw2Y.framer-tbytlc { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20.11px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20.11px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-hXw2Y .framer-4oq45s { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 49px); position: relative; width: 48px; }`,
          `.framer-hXw2Y.framer-v-5p6z1q.framer-tbytlc, .framer-hXw2Y.framer-v-z69b8i.framer-tbytlc { padding: 10px; }`,
          `.framer-hXw2Y.framer-v-5p6z1q .framer-4oq45s, .framer-hXw2Y.framer-v-z69b8i .framer-4oq45s { height: var(--framer-aspect-ratio-supported, 35px); width: 35px; }`,
        ],
        `framer-hXw2Y`
      )),
      ($.displayName = `Play + Pause Cursor`),
      ($.defaultProps = { height: 88.5, width: 88.5 }),
      S($, {
        variant: {
          options: [`qVpDFd__L`, `FYLhsC0x3`, `TFuPYIsuB`, `UeDhBGhcP`],
          optionTitles: [`Play`, `Play Small`, `Pause Small`, `Pause`],
          title: `Variant`,
          type: j.Enum,
        },
      }),
      te($, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function Xe(e, t) {
  return e.toLocaleString(void 0, { minimumFractionDigits: t, maximumFractionDigits: t });
}
function Ze(e) {
  let {
      start: t = 0,
      end: n = 100,
      duration: i = 1.5,
      delay: c = 0,
      decimals: l = 0,
      easing: u = `easeOut`,
      font: d,
      color: f,
      align: m,
      autoStart: h,
      loop: g,
      resetOnReentry: _,
      suffix: y,
      style: b,
    } = e,
    x = ne(),
    S = s(null),
    C = v(S, { once: !g && !_ }),
    [w, T] = r(t),
    [D, O] = r(!1),
    [k, te] = r(0),
    A = s(null),
    j = s(null),
    M = a(() => {
      if (x || E.current() === E.thumbnail) {
        T(n);
        return;
      }
      let e = null,
        r = null;
      function a(o) {
        e ||= o;
        let s = (o - e) / 1e3,
          c = Math.min(1, Math.max(0, s / i)),
          l = Qe[u] || Qe.easeOut,
          d = t + (n - t) * l(c);
        (T(c < 1 ? d : n),
          c < 1
            ? ((r = requestAnimationFrame(a)), (j.current = r))
            : g &&
              (A.current = setTimeout(() => {
                (T(t), te((e) => e + 1));
              }, 300)));
      }
      c > 0
        ? (A.current = setTimeout(() => {
            (T(t), (r = requestAnimationFrame(a)), (j.current = r));
          }, c * 1e3))
        : (T(t), (r = requestAnimationFrame(a)), (j.current = r));
    }, [t, n, i, c, u, g, x]);
  return (
    o(() => {
      h && (C ? O(!0) : _ && (O(!1), T(t)));
    }, [C, h, _, t]),
    o(() => {
      if (D)
        return (
          M(),
          () => {
            (j.current && cancelAnimationFrame(j.current), A.current && clearTimeout(A.current));
          }
        );
    }, [D, k, M]),
    ee(`span`, {
      ref: S,
      style: p(
        () => ({
          ...b,
          display: `inline-block`,
          width: b && b.width === `100%` ? `100%` : `max-content`,
          height: b && b.height === `100%` ? `100%` : `max-content`,
          textAlign: m,
          color: f,
          ...d,
          cursor: h ? `default` : `pointer`,
          userSelect: `none`,
        }),
        [b, m, f, d, h]
      ),
      "aria-live": `polite`,
      tabIndex: 0,
      onClick: () => {
        h || O(!0);
      },
      children: [Xe(w, l), y],
    })
  );
}
var Qe,
  $e = e(() => {
    (m(),
      n(),
      D(),
      (Qe = {
        linear: (e) => e,
        easeIn: (e) => e * e,
        easeOut: (e) => e * (2 - e),
        easeInOut: (e) => (e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e),
      }),
      S(Ze, {
        start: { type: j.Number, title: `Start`, defaultValue: 0 },
        end: { type: j.Number, title: `End`, defaultValue: 100 },
        duration: {
          type: j.Number,
          title: `Duration`,
          defaultValue: 1.5,
          min: 0.1,
          max: 10,
          step: 0.1,
          unit: `s`,
        },
        delay: {
          type: j.Number,
          title: `Delay`,
          defaultValue: 0,
          min: 0,
          max: 5,
          step: 0.1,
          unit: `s`,
        },
        decimals: {
          type: j.Number,
          title: `Decimals`,
          defaultValue: 0,
          min: 0,
          max: 6,
          step: 1,
          displayStepper: !0,
        },
        easing: {
          type: j.Enum,
          title: `Easing`,
          options: [`linear`, `easeIn`, `easeOut`, `easeInOut`],
          optionTitles: [`Linear`, `Ease In`, `Ease Out`, `Ease In Out`],
          defaultValue: `easeOut`,
          displaySegmentedControl: !0,
        },
        font: {
          type: j.Font,
          title: `Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: {
            fontSize: `40px`,
            variant: `Bold`,
            letterSpacing: `-0.04em`,
            lineHeight: `1em`,
          },
        },
        color: { type: j.Color, title: `Color`, defaultValue: `#000000` },
        align: {
          type: j.Enum,
          title: `Align`,
          options: [`left`, `center`, `right`],
          optionTitles: [`Left`, `Center`, `Right`],
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        suffix: { type: j.String, title: `Suffix`, defaultValue: ``, placeholder: `%` },
        autoStart: {
          type: j.Boolean,
          title: `Auto Start`,
          defaultValue: !0,
          enabledTitle: `Auto`,
          disabledTitle: `Manual`,
        },
        loop: {
          type: j.Boolean,
          title: `Loop`,
          defaultValue: !1,
          enabledTitle: `Loop`,
          disabledTitle: `Once`,
        },
        resetOnReentry: {
          type: j.Boolean,
          title: `Reset on Re-entry`,
          defaultValue: !1,
          enabledTitle: `Reset`,
          disabledTitle: `No Reset`,
        },
      }));
  });
export {
  F as C,
  I as S,
  oe as _,
  Q as a,
  ie as b,
  Te as c,
  me as d,
  pe as f,
  G as g,
  le as h,
  Ye as i,
  he as l,
  ue as m,
  $e as n,
  Re as o,
  de as p,
  $ as r,
  J as s,
  Ze as t,
  q as u,
  ae as v,
  L as w,
  P as x,
  re as y,
};
//# sourceMappingURL=NumberCounter_2.DhDl5oFi.mjs.map
