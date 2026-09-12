import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  F as i,
  I as a,
  L as o,
  M as s,
  N as c,
  O as l,
  P as u,
  R as d,
  S as f,
  _ as p,
  a as m,
  b as h,
  c as g,
  d as _,
  f as v,
  g as y,
  h as b,
  i as x,
  j as S,
  k as C,
  l as w,
  m as T,
  o as E,
  s as D,
  u as O,
  v as k,
  w as A,
  x as j,
  y as M,
  z as N,
} from "./react.C1Oj3OU0.mjs";
import {
  $ as ee,
  A as P,
  B as F,
  C as te,
  D as ne,
  E as I,
  F as re,
  G as L,
  H as ie,
  I as ae,
  J as oe,
  K as se,
  L as ce,
  M as le,
  N as ue,
  O as de,
  P as fe,
  Q as pe,
  R,
  S as me,
  T as he,
  U as ge,
  V as _e,
  W as ve,
  X as z,
  Y as ye,
  Z as be,
  _ as xe,
  a as Se,
  at as Ce,
  b as we,
  c as Te,
  ct as Ee,
  d as De,
  dt as Oe,
  et as ke,
  f as Ae,
  ft as je,
  g as Me,
  h as Ne,
  i as Pe,
  it as Fe,
  j as Ie,
  k as Le,
  l as Re,
  lt as ze,
  m as Be,
  n as Ve,
  nt as He,
  o as Ue,
  ot as We,
  p as Ge,
  pt as Ke,
  q as qe,
  r as Je,
  rt as Ye,
  s as Xe,
  st as Ze,
  tt as Qe,
  u as $e,
  ut as et,
  v as tt,
  x as nt,
  y as rt,
  z as it,
} from "./motion.BtOE26Nw.mjs";
function at(e) {
  return typeof e == `function`;
}
function ot(e) {
  return typeof e == `boolean`;
}
function B(e) {
  return typeof e == `string`;
}
function V(e) {
  return Number.isFinite(e);
}
function st(e) {
  return Array.isArray(e);
}
function H(e) {
  return typeof e == `object` && !!e && !st(e);
}
function ct(e) {
  for (let t in e) return !1;
  return !0;
}
function lt(e) {
  return e === void 0;
}
function ut(e) {
  return e === null;
}
function dt(e) {
  return e == null;
}
function ft(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function pt(e) {
  return H(e) && at(e.return);
}
function mt(e) {
  return H(e) && at(e.then);
}
function ht(e) {
  return e instanceof Promise;
}
function gt(e) {
  return `url('${_t(e)}')`;
}
function _t(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function vt(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function yt(e, t, n) {
  if (Wy.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (Wy.set(e, t), t))
    .catch((t) => {
      throw (Wy.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(Iy), Wy.set(e, r));
}
function bt(e, t) {
  Ly && (Gy.set(e, t), Ky.has(e) && yt(e, t, `registered loader ${e}`));
}
function xt() {
  if (!Ly) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(qy),
      i = r ? e.slice(qy.length) : e;
    if (!i) continue;
    Ky.add(i);
    let a = Gy.get(i);
    a ? yt(i, a, `registered loader ${i}`) : r && yt(i, () => import(n), n);
  }
}
function St(e) {
  return typeof e == `object` && !!e && !v(e) && Yy in e;
}
function Ct(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function wt(e, t = `default`, n) {
  n && bt(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !Wy.has(n)) return;
      let e = Wy.get(n);
      ht(e) ? s(() => e) : (i = Ct(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = Ct(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    l = !1,
    u = y(function (t, r) {
      if (
        (c(() => {
          l = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && Jy !== void 0 && Jy.add(n), !i)) throw s(e);
      return g(i, { ref: r, ...t });
    });
  return (
    (u.preload = () => (o(), s(e))),
    (u.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: l })),
    u
  );
}
function Tt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Et(e) {
  return e === null || !(Zy in e) ? !1 : typeof e.equals == `function`;
}
function Dt(e, t) {
  return e === t || (e !== e && t !== t);
}
function Ot(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Dt(e[r], t[r])) return !1;
  return !0;
}
function kt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Ft(e[r], t[r], !0)) return !1;
  return !0;
}
function At(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Dt(r, t.get(n))) return !1;
  return !0;
}
function jt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Ft(r, t.get(n), !0)) return !1;
  return !0;
}
function Mt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function Nt(e, t) {
  let n = Xy(e);
  if (n.length !== Xy(t).length) return !1;
  for (let r of n)
    if (!Tt(t, r) || (!(r === `_owner` && Tt(e, `$$typeof`) && e.$$typeof) && !Dt(e[r], t[r])))
      return !1;
  return !0;
}
function Pt(e, t) {
  let n = Xy(e);
  if (n.length !== Xy(t).length) return !1;
  for (let r of n)
    if (!Tt(t, r) || (!(r === `_owner` && Tt(e, `$$typeof`) && e.$$typeof) && !Ft(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Ft(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? kt(e, t) : Ot(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? jt(e, t) : At(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return Mt(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? Et(e) && Et(t)
        ? e.equals(t)
        : n
          ? Pt(e, t)
          : Nt(e, t)
      : !1;
}
function It(e, t, n = !0) {
  try {
    return Ft(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Lt(e) {
  return h.useCallback((t) => e[t], [e]);
}
function Rt({ api: e, children: t }) {
  return g(Qy.Provider, { value: e, children: t });
}
function zt() {
  return h.useContext(Qy);
}
function Bt({ routes: e, children: t }) {
  let n = Lt(e),
    r = S(() => ({ getRoute: n }), [n]);
  return g(Qy.Provider, { value: r, children: t });
}
function Vt() {
  let e = zt(),
    n = t($y),
    r = n?.routeId ?? e.currentRouteId,
    i = n?.routeId ? n.pathVariables : e.currentPathVariables,
    a = n?.routeId ? void 0 : e.currentCanonicalPathVariables,
    o = r ? e.getRoute?.(r) : void 0;
  return S(() => {
    if (!(!r || !o)) return { ...o, id: r, pathVariables: i, canonicalPathVariables: a };
  }, [a, r, i, o]);
}
function Ht() {
  let e = Vt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Ut(e) {
  let t = Vt(),
    n = h.useRef(t);
  It(n.current, t) || !t || ((n.current = t), e(t));
}
function Wt(e) {
  let t = zt();
  if (e) return t.getRoute?.(e);
}
function Gt(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Kt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function qt(e, t) {
  let n = Vt(),
    r = Wt(t) ?? n;
  return h.useMemo(() => (r ? Gt(r, e) : e), [e, r]);
}
function Jt() {
  return Vt()?.pathVariables;
}
function U(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function W(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function Yt(e) {
  return e === null || (typeof e != `object` && typeof e != `function`);
}
function Xt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === mb
  );
}
function Zt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Qt(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function $t(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Qt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function en(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function tn(e) {
  return hb.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function nn(e) {
  return !(!Number.isInteger(e) || e < 0 || e > fb);
}
function rn(e) {
  return !(!Number.isInteger(e) || e < 0 || e > db);
}
function an(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return nn(+e);
}
function on(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !an(t[n]); n--);
  return ((t.length = n + 1), t);
}
function sn(e) {
  return new Uint8Array(e).toBase64();
}
function cn(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function ln(e) {
  return Buffer.from(e).toString(`base64`);
}
function un(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function dn(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function fn(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function pn(e, t) {
  return mn(JSON.parse(e), t);
}
function mn(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === ib) return;
    if (e === ob) return NaN;
    if (e === sb) return 1 / 0;
    if (e === cb) return -1 / 0;
    if (e === lb) return -0;
    if (o || typeof e != `number`) throw Error(`Invalid input`);
    if (e in r) return r[e];
    let s = n[e];
    if (!s || typeof s != `object`) r[e] = s;
    else if (Array.isArray(s))
      if (typeof s[0] == `string`) {
        let o = s[0],
          c = t && Object.hasOwn(t, o) ? t[o] : void 0;
        if (c) {
          let t = s[1];
          if ((typeof t != `number` && (t = n.push(s[1]) - 1), (i ??= new Set()), i.has(t)))
            throw Error(`Invalid circular reference`);
          return (i.add(t), (r[e] = c(a(t))), i.delete(t), r[e]);
        }
        switch (o) {
          case `Date`:
            r[e] = new Date(s[1]);
            break;
          case `Set`:
            let t = new Set();
            r[e] = t;
            for (let e = 1; e < s.length; e += 1) t.add(a(s[e]));
            break;
          case `Map`:
            let i = new Map();
            r[e] = i;
            for (let e = 1; e < s.length; e += 2) i.set(a(s[e]), a(s[e + 1]));
            break;
          case `RegExp`:
            r[e] = new RegExp(s[1], s[2]);
            break;
          case `Object`: {
            let t = s[1];
            if (typeof n[t] == `object` && n[t][0] !== `BigInt`) throw Error(`Invalid input`);
            r[e] = Object(a(t));
            break;
          }
          case `BigInt`:
            r[e] = BigInt(s[1]);
            break;
          case `null`:
            let c = Object.create(null);
            r[e] = c;
            for (let e = 1; e < s.length; e += 2) {
              if (s[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              c[s[e]] = a(s[e + 1]);
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (n[s[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = globalThis[o],
              i = a(s[1]);
            r[e] = s[2] === void 0 ? new t(i) : new t(i, s[2], s[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = s[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            let n = yb(t);
            r[e] = n;
            break;
          }
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`: {
            let t = o.slice(9);
            r[e] = Temporal[t].from(s[1]);
            break;
          }
          case `URL`: {
            let t = new URL(s[1]);
            r[e] = t;
            break;
          }
          case `URLSearchParams`: {
            let t = new URLSearchParams(s[1]);
            r[e] = t;
            break;
          }
          default:
            throw Error(`Unknown type ${o}`);
        }
      } else if (s[0] === ub) {
        let t = s[1];
        if (!rn(t)) throw Error(`Invalid input`);
        let n = [];
        ((r[e] = n), (n[fb] = void 0), delete n[fb]);
        for (let e = 2; e < s.length; e += 2) {
          let r = s[e];
          if (!nn(r) || r >= t) throw Error(`Invalid input`);
          n[r] = a(s[e + 1]);
        }
        n.length = t;
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== ab && (t[e] = a(n));
        }
      }
    else {
      let t = {};
      r[e] = t;
      for (let e of Object.keys(s)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        let n = s[e];
        t[e] = a(n);
      }
    }
    return r[e];
  }
  return a(0);
}
function hn(e, t) {
  let n = gn(!1, e, t);
  return typeof n == `string` ? n : `[${n.join(`,`)}]`;
}
function gn(e, t, n) {
  let r = [],
    i = new Map(),
    a = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) a.push({ key: e, fn: n[e] });
  let o = [],
    s = 0;
  function c(n, l) {
    if (n === void 0) return ib;
    if (Number.isNaN(n)) return ob;
    if (n === 1 / 0) return sb;
    if (n === -1 / 0) return cb;
    if (n === 0 && 1 / n < 0) return lb;
    if (i.has(n)) return i.get(n);
    ((l ??= s++), i.set(n, l));
    for (let { key: e, fn: t } of a) {
      let i = t(n);
      if (i) return ((r[l] = `["${e}",${c(i)}]`), l);
    }
    if (typeof n == `function`) throw new pb(`Cannot stringify a function`, o, n, t);
    if (typeof n == `symbol`) throw new pb(`Cannot stringify a Symbol primitive`, o, n, t);
    let u = ``;
    if (Yt(n)) u = _n(n);
    else if (typeof n.then == `function`) {
      if (!e)
        throw new pb(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          o,
          n,
          t
        );
      u = Promise.resolve(n).then((e) => {
        let t = c(e, l);
        t < 0 && (r[l] = t);
      });
    } else {
      let e = Zt(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          u = `["Object",${c(n.valueOf())}]`;
          break;
        case `Date`:
          u = `["Date","${isNaN(n.getDate()) ? `` : n.toISOString()}"]`;
          break;
        case `URL`:
          u = `["URL",${$t(n.toString())}]`;
          break;
        case `URLSearchParams`:
          u = `["URLSearchParams",${$t(n.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = n;
          u = i ? `["RegExp",${$t(r)},"${i}"]` : `["RegExp",${$t(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          u = `[`;
          for (let t = 0; t < n.length; t += 1)
            if ((t > 0 && (u += `,`), Object.hasOwn(n, t)))
              (o.push(`[${t}]`), (u += c(n[t])), o.pop());
            else if (e) u += ab;
            else {
              let t = on(n),
                r = t.length,
                i = String(n.length).length;
              if ((n.length - r) * 3 > 4 + i + r * (i + 1)) {
                u = `[` + ub + `,` + n.length;
                for (let e = 0; e < t.length; e++) {
                  let r = t[e];
                  (o.push(`[${r}]`), (u += `,` + r + `,` + c(n[r])), o.pop());
                }
                break;
              } else ((e = !0), (u += ab));
            }
          u += `]`;
          break;
        }
        case `Set`:
          u = `["Set"`;
          for (let e of n) u += `,${c(e)}`;
          u += `]`;
          break;
        case `Map`:
          u = `["Map"`;
          for (let [e, t] of n)
            (o.push(`.get(${Yt(e) ? _n(e) : `...`})`), (u += `,${c(e)},${c(t)}`), o.pop());
          u += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`:
        case `DataView`: {
          let t = n;
          ((u = `["` + e + `",` + c(t.buffer)),
            t.byteLength !== t.buffer.byteLength && (u += `,${t.byteOffset},${t.length}`),
            (u += `]`));
          break;
        }
        case `ArrayBuffer`:
          u = `["ArrayBuffer","${vb(n)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          u = `["${e}",${$t(n.toString())}]`;
          break;
        default:
          if (!Xt(n)) throw new pb(`Cannot stringify arbitrary non-POJOs`, o, n, t);
          if (en(n).length > 0) throw new pb(`Cannot stringify POJOs with symbolic keys`, o, n, t);
          if (Object.getPrototypeOf(n) === null) {
            u = `["null"`;
            for (let e of Object.keys(n)) {
              if (e === `__proto__`)
                throw new pb(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (o.push(tn(e)), (u += `,${$t(e)},${c(n[e])}`), o.pop());
            }
            u += `]`;
          } else {
            u = `{`;
            let e = !1;
            for (let r of Object.keys(n)) {
              if (r === `__proto__`)
                throw new pb(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (e && (u += `,`), (e = !0), o.push(tn(r)), (u += `${$t(r)}:${c(n[r])}`), o.pop());
            }
            u += `}`;
          }
      }
    }
    return ((r[l] = u), l);
  }
  let l = c(t);
  return l < 0 ? `${l}` : r;
}
function _n(e) {
  let t = typeof e;
  return t === `string`
    ? $t(e)
    : e === void 0
      ? ib.toString()
      : e === 0 && 1 / e < 0
        ? lb.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function vn(e, t, n = `lazy`) {
  switch ((bb.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function yn(e) {
  return B(e) && (e === `` || Sb.test(e));
}
function bn() {
  return { [Cb.QueryCache]: new Map(), [Cb.CollectionUtilsCache]: new Map() };
}
function xn() {
  if (!Ly) return;
  if (wb !== void 0) return wb;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      wb = pn(e.text) ?? bn();
    } catch (e) {
      ((wb = bn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      By(() => {
        (e?.remove(), (e = null));
      }),
      wb
    );
  }
}
function Sn(e, t) {
  if (
    (console.warn(
      vt(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    vn(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function Cn(e, t) {
  let n = xn();
  return n ? n[e].has(t) : !1;
}
function wn(e, t) {
  let n = xn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function Tn(e) {
  return e?.id ?? tb;
}
function En(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function Dn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (Ob.has(n)) return Ob.get(n);
    let r = new Ab(n, t);
    return (Ob.set(n, r), r);
  };
}
function On({ children: e, collectionUtils: t }) {
  let n = S(() => ({ get: Dn(t) }), [t]);
  return g(kb.Provider, { value: n, children: e });
}
function kn() {
  return t(kb);
}
function An(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function jn() {
  return d === void 0 ? void 0 : d;
}
function Mn() {
  let e = jn();
  return e ? jb.test(e.platform) : !1;
}
function Nn() {
  let e = jn();
  return e
    ? Mb.test(e.platform)
      ? !0
      : Nb.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function Pn() {
  return Mn() || Nn();
}
function Fn() {
  let e = jn();
  return e ? Pb.test(e.userAgent) : !1;
}
function In() {
  let e = jn();
  return e ? Fb.test(e.userAgent) && Ib.test(e.vendor) && !Fn() : !1;
}
function Ln() {
  let e = jn();
  return e ? Lb.test(e.userAgent) && Rb.test(e.vendor) : !1;
}
function Rn() {
  let e = jn();
  return e ? zb.test(e.userAgent) : !1;
}
function zn() {
  return typeof document == `object`;
}
function Bn() {
  let e = jn();
  if (!e) return -1;
  let t = Bb.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Vn() {
  let e = jn();
  return e ? Vb.test(e.userAgent) : !1;
}
function Hn() {
  return !1;
}
function Un() {
  let e = jn();
  return e && Hb.test(e.userAgent) ? `tablet` : e && Ub.test(e.userAgent) ? `phone` : `desktop`;
}
function Wn() {
  return Un() === `desktop`;
}
function Gn(e) {
  return Pn() ? e.metaKey : e.ctrlKey;
}
function Kn() {}
async function qn() {}
function Jn(e) {
  return typeof e == `function` ? e() : e;
}
function Yn(e, t) {
  return qb[e] > qb[t];
}
function Xn() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function Zn(e, t) {
  let n = e?.priority,
    r = Xn();
  return n === `background`
    ? (t?.() ?? An(1))
    : r?.yield
      ? r.yield(e).catch(Kn)
      : r?.postTask
        ? r.postTask(Kn, e).catch(Kn)
        : t
          ? t()
          : n === `user-blocking`
            ? Jb
            : An(0);
}
function Qn(e, t, n) {
  let r = -1 / 0,
    i,
    a = new Set();
  function o() {
    for (let e of a) e();
    a.clear();
  }
  function s() {
    return document.hidden ? (o(), !0) : !1;
  }
  function c() {
    zn() && (document.addEventListener(`visibilitychange`, s), N.addEventListener(`pagehide`, o));
  }
  function l(n) {
    return new Promise((r) => {
      (setTimeout(r, Yb),
        e(() => {
          Zn(n, t).then(r);
        }));
    });
  }
  function u(e) {
    return zn()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), s() || c(), e.then(r, r));
        })
      : e;
  }
  function d(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? l(a) : Zn(a, t);
    return i ? u(o) : o;
  }
  function f(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = d(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (r = performance.now()),
          n && e.pendingPaintYieldCount--,
          i === e && e.pendingPaintYieldCount === 0 && (i = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      a.then(
        () => c(!0),
        () => c(!0)
      ),
      a
    );
  }
  function p(e, t) {
    let a = i;
    if (!a) {
      let n = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? Wb : Gb),
        s = zn() && document.hidden ? Kb : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return f(a, e, o);
  }
  function m(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !zn() && !t ? (n ? void 0 : Jb) : n ? p(i, r) : d(i);
  }
  return m;
}
function $n(e, t = !1) {
  let n = ``;
  if (N !== void 0)
    if (t) n = N.location.search;
    else {
      let e = N.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? N.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? er(n, e) : e;
}
function er(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== Qb && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function tr(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll($b)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !B(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = ht(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = ht(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = ht(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function nr(e, t) {
  return t ? `/${t}${e}` : e;
}
async function rr({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await tr(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = nr(u.path, t.slug)),
    o && u.path && (u.path = $n(u.path, !0)),
    u
  );
}
async function ir({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll($b)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (B(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function ar({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === tb) return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await ir({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function or({
  activeLocale: e,
  defaultLocale: t,
  collectionUtilsCache: n,
  locales: r,
  pathVariables: i,
  route: a,
  routeId: o,
}) {
  if (!e || !a) return {};
  let s =
      (await ar({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await rr({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return It(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
function sr() {
  return h.useContext(nx);
}
function cr() {
  return sr().activeLocale?.code ?? `en-US`;
}
function lr() {
  return h.useContext(rx);
}
function ur() {
  let e = kn(),
    { getRoute: t } = zt(),
    { activeLocale: n, locales: r } = sr();
  return s(
    (i, a, o) => {
      if (!i || !t) return;
      let s = t(i),
        { pathVariables: c } = a;
      return fr(
        s,
        {
          routeId: i,
          pathVariables: c,
          locale: a.locale ?? n ?? void 0,
          locales: r,
          collectionUtils: e,
        },
        o
      );
    },
    [t, e, n, r]
  );
}
function dr(e, t = !0) {
  let n = ur();
  c(() => {
    if (!(!t || !ix)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function fr(e, t, n = {}) {
  if (!ix || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !St(o)) return;
  let s = a && !!t;
  if (!(o.getStatus().hasLoaded && !s)) {
    i && (await Zb({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await pr(n, e, t, r));
    } catch {}
  }
}
async function pr(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await or({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === tb),
      collectionUtilsCache: n.collectionUtils,
      locales: n.locales ?? [],
      pathVariables: n.pathVariables,
      route: t,
      routeId: n.routeId,
    }),
    o = {
      signal: n.signal ?? new AbortController().signal,
      pathVariables: n.pathVariables ?? {},
      canonicalPathVariables: a,
      routeId: n.routeId,
      locale: n.locale,
      priority: r,
      collectionUtils: n.collectionUtils,
    };
  try {
    await i.load({}, o);
  } catch {}
}
function mr(e, t) {
  return e.replace($b, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function hr() {
  if (ax) return;
  ax = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (N.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((N.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), vn(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function gr({ children: e, value: t }) {
  return g(ox.Provider, { value: t, children: e });
}
function _r() {
  return h.useContext(ox);
}
function vr(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function yr(e) {
  let t = sx,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < cx;) ((n = e.next(t)), r.push(n.value), (t += sx));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - sx }
  );
}
function br(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function xr(e) {
  let { innerWidth: t, innerHeight: n } = N,
    [r, i] = br(e.x),
    [a, o] = br(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function Sr(e) {
  let [t, n] = br(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function Cr(e) {
  let { x: t, y: n } = xr(e);
  return Math.hypot(Math.max(t, N.innerWidth - t), Math.max(n, N.innerHeight - n));
}
function wr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function Tr(e) {
  return e ? dx[e] : void 0;
}
function Er(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (Dr(t)) {
    let { easing: e, duration: n } = yr(
      ue({ keyframes: [0, 1], ...Or(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = Tr(n?.mask?.type),
    o = wr(n, `start`, e, a),
    s = wr({ ...fx, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function Dr(e) {
  return e.type === `spring`;
}
function Or(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function kr({ exit: e = mx, enter: t }) {
  let n = document.createElement(`style`);
  n.id = px;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += Er(`exit`, e)),
    (r += Er(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function Ar() {
  By(() => {
    Me.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(px);
      e && document.head.removeChild(e);
    });
  });
}
function jr() {
  return !!document.startViewTransition;
}
function Mr(e) {
  return new Promise((t) => {
    Me.render(() => {
      (performance.mark(`framer-vt-style`), kr(e), t());
    });
  });
}
async function Nr(e, t, n) {
  if (!jr()) {
    e();
    return;
  }
  if ((await Mr(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(hx),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), Ar());
      })
      .catch(hx),
    r
  );
}
function Pr() {
  let e = _r(),
    t = l(void 0);
  return (
    c(() => {
      t.current &&= (t.current(), void 0);
    }),
    s(
      (n, r, i, a) => {
        let o = vr(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return Nr(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function Fr(e, t) {
  By(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function Ir(e, t) {
  By(() => {
    let n = document.querySelector(`link[rel='canonical'][data-framer-generated-canonical]`);
    if (
      !e ||
      document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function Lr(e) {
  By(() => {
    let t = Array.from(
      document.querySelectorAll(`link[rel='alternate'][hreflang][data-framer-generated-hreflang]`)
    );
    if (document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)) {
      for (let e of t) e.remove();
      return;
    }
    let n = new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
function Rr(e, t, n, r = j) {
  r(() => {
    let t = async (e) => (await Zb({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function zr(e) {
  let t = l(new Set());
  return (
    Rr(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    s(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function Br(e) {
  return H(e) && `routeId` in e;
}
function Vr(e = N.history.state) {
  return Br(e) ? e : void 0;
}
function Hr(e) {
  return e?.entryId;
}
function Ur(e) {
  vx = e;
}
function Wr() {
  return vx;
}
function Gr() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Kr(e, t) {
  return qr(e, Hr(e) ?? Hr(t));
}
function qr(e, t = Gr()) {
  return { ...e, entryId: t };
}
function Jr(e, t) {
  (performance.mark(`framer-history-replace`), Ur(Kr(e, Vr())), t && Fr(t, N.location.href));
  let n =
    !t || t === N.location.href
      ? N.History.prototype.replaceState.bind(N.history)
      : N.history.replaceState.bind(N.history);
  try {
    n(vx, ``, t);
  } catch {}
}
function Yr(e) {
  (performance.mark(`framer-history-replace`),
    Ur(qr(e)),
    History.prototype.replaceState.call(N.history, vx, ``, void 0));
}
function Xr(e, t) {
  (performance.mark(`framer-history-push`), Ur(qr(e)), Fr(t, N.location.href), hr());
  try {
    N.history.pushState(vx, ``, t);
  } catch {}
}
function Zr({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
  initialContentLocaleId: i,
  initialCanonicalPathVariables: a,
}) {
  j(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let o = N.location.hash ? N.location.hash.slice(1) : void 0;
    Jr({
      ...Vr(),
      routeId: t,
      hash: o,
      pathVariables: n,
      localeId: r,
      contentLocaleId: i,
      canonicalPathVariables: a,
    });
  }, []);
}
function Qr(e, t, n) {
  let r = Pr(),
    i = zr(`framer-route-change`),
    { onHistoryTraversal: a, usesCustomScrollRestoration: o } = e,
    u = o ? `manual` : `after-transition`,
    d = l(void 0),
    f = s(() => {
      (d.current?.resolve(), (d.current = void 0));
    }, []),
    p = s(
      async ({ state: e }) => {
        if (!Br(e)) return;
        let o = i({ popstate: !0 }),
          s = Kt();
        (o.promise.finally(s), Hr(Wr()) !== (Hr(e) ?? Hr(Vr())) && a(), Ur(e));
        let {
            routeId: c,
            hash: l,
            pathVariables: d,
            localeId: p,
            contentLocaleId: m,
            canonicalPathVariables: h,
          } = e,
          g = B(l) ? l : N.location.hash ? N.location.hash.slice(1) : void 0,
          _ = !1,
          v = () => {
            _ ||=
              (n(
                c,
                B(p) ? p : void 0,
                g,
                N.location.pathname + N.location.search + N.location.hash,
                H(d) ? d : void 0,
                m,
                h,
                !0,
                o,
                !1
              ),
              !0);
          },
          y = u === `after-transition`;
        (await Promise.resolve(r(t.current, c, v))
          .then((e) => e?.updateCallbackDone)
          .catch(v)
          .finally(() => {
            y || f();
          }),
          await o.promise,
          y && f(),
          await N.navigation?.transition?.finished.catch(Iy),
          _x(),
          Fr(N.location.href));
      },
      [t, i, a, f, n, r, u]
    ),
    m = s(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        Br(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                d.current = { resolve: e, reject: t };
              }),
                (d.current = void 0));
            },
            scroll: u,
          });
      },
      [u]
    );
  c(
    () => (
      N.addEventListener(`popstate`, p),
      yx && N.navigation.addEventListener(`navigate`, m),
      () => {
        (N.removeEventListener(`popstate`, p),
          yx && N.navigation.removeEventListener(`navigate`, m));
      }
    ),
    [p, m]
  );
}
async function $r(e, t, n, r) {
  if (!e.path || !t) return !1;
  let i = r + nr(mr(e.path, t), n.slug);
  return (await fetch(i, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((N.location.href = N.location.origin + i), !0)
    : !1;
}
function ei() {
  let e = kn();
  return s((t) => ti({ ...t, collectionUtils: e }), [e]);
}
async function ti({ sitePrefix: e, ...t }) {
  let n = await rr(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!B(n.path)) throw Error(`Expected result.path to be a string`);
      if (n.isMissingInLocale && (await $r(t.route, n.pathVariables, t.nextLocale, e))) return;
    } catch {}
    return n;
  }
}
function ni(e) {
  let t = l(Promise.resolve()),
    n = l(),
    r = s(
      (r) => {
        if (r.navigationType === `traverse` || !r.canIntercept) return;
        let i = n.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          r.intercept({ handler: () => t.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return s(
    (e, i, a) => {
      if (!yx) {
        a?.();
        return;
      }
      ((t.current = e),
        (n.current = i),
        N.navigation.addEventListener(`navigate`, r),
        a?.(),
        e.finally(() => {
          t.current === e &&
            ((n.current = void 0), N.navigation.removeEventListener(`navigate`, r));
        }));
    },
    [r]
  );
}
function ri(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function ii(e) {
  return ri(e.trim().toLowerCase().replace(bx, `-`));
}
function ai({ children: e, value: t }) {
  return g(Sx.Provider, { value: t, children: e });
}
function oi() {
  return t(Sx);
}
function si(e, t) {
  let n = i(() => ({ inputs: t, result: e() }))[0],
    r = l(!0),
    a = l(n),
    o =
      r.current || (t && a.current.inputs && It(t, a.current.inputs, !1))
        ? a.current
        : { inputs: t, result: e() };
  return (
    c(() => {
      ((r.current = !1), (a.current = o));
    }, [o]),
    o.result
  );
}
function ci(e, t) {
  return si(() => e, t);
}
function li() {
  return N.location.search;
}
function ui() {
  return ``;
}
function di(e) {
  return (
    wx.add(e),
    N.addEventListener(`popstate`, e),
    () => {
      (wx.delete(e), N.removeEventListener(`popstate`, e));
    }
  );
}
function fi() {
  for (let e of wx) e();
}
function pi({ children: e, routerRenderKey: t, isNavigationCommitPending: n }) {
  let a = oi() === `preview`,
    [o, c] = i(``),
    u = l(t);
  Cx(() => {
    u.current = t;
  }, [t]);
  let d = M(di, li, ui),
    f = r(d),
    m = t !== r(t),
    h = a ? o : m ? d : f,
    _ = s(
      async (e) => {
        if (a) {
          p(() => {
            c((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let r = n(),
          i = t;
        if ((await Zb({ continueAfter: `paint` }), r || n() || u.current !== i)) return;
        let o = Vr();
        if (!o) return;
        let s = new URL(N.location.href),
          l = e(s.searchParams).toString();
        s.search = l;
        let d = o.queryParamBackAnchorSearch,
          f = N.location.search.slice(1),
          m = d === void 0 && l !== f,
          h = d !== void 0 && l === d,
          g = { ...o, queryParamBackAnchorSearch: h ? void 0 : (d ?? (m ? f : void 0)) },
          _ = s.toString();
        (m || h ? Xr(g, _) : Jr(g, _), fi());
      },
      [n, a, t]
    ),
    v = si(() => ({ urlSearchParams: new URLSearchParams(h), replaceSearchParams: _ }), [h, _]);
  return g(Tx.Provider, { value: v, children: e });
}
function mi(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = hi(e),
    [r, i] = hi(t),
    a = gi(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function hi(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function gi(e, t) {
  if (e === t || ((e = `/` + _i(e)), (t = `/` + _i(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Ox(e, 1 + s);
    if (n !== Ox(t, 1 + s)) break;
    n === Dx && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Ox(t, 1 + s) === Dx) return Ax(t, 1 + s + 1);
      if (s === 0) return Ax(t, 1 + s);
    } else r > a && (Ox(e, 1 + s) === Dx ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Ox(e, s) === Dx) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${Ax(t, 1 + o)}`;
}
function _i(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Ox(e, o);
    else if (Nx(a)) break;
    else a = Dx;
    if (Nx(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Ox(t, t.length - 1) !== Ex || Ox(t, t.length - 2) !== Ex) {
            if (t.length > 2) {
              let e = kx(t, Mx);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = Ax(t, 0, e)), (n = t.length - 1 - kx(t, Mx))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          jx && ((t += t.length > 0 ? `${Mx}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${Mx}${Ax(e, r + 1, o)}`) : (t = Ax(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === Ex && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function vi(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || N.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function yi(e, t) {
  let n = e.replace($b, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function bi(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return yi(i, r);
  }
  if (e.includes(`:`)) return yi(e, r);
  let i = t.elements?.[e];
  return i ? yi(i, r) : e;
}
function xi(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
    localeSlug: f,
  }
) {
  let p;
  if ((i && e && (p = bi(i, e, o)), l)) return p ?? ``;
  let m = t ?? `/`;
  (n && d && (m = n[d] ?? m), r && (m = m.replace($b, (e, t) => String(r[t] || e))));
  let h = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (h = h.replace($b, (e, t) => String(a[t] || e)));
  let g = !!(m === h && p),
    _ = !g && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && m !== h;
  if (s)
    if (Px.has(m) && N !== void 0) {
      let e = vi(u);
      h = mi(N.location.pathname, e + h);
    } else h = mi(m, h);
  else h = nr(h, f);
  let v = g || _;
  return ((c || v) && (h = $n(h, v)), p && (h = `${h}#${p}`), h);
}
function Si() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[Fx] = 1), e);
}
function Ci() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[Fx] = 1), e);
}
function wi(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function Ti(e) {
  return Fx in e && e[Fx] === 1;
}
function Ei(e) {
  return Ix in e.nativeEvent && e.nativeEvent[Ix] === 1;
}
function Di(e) {
  let t = l(!1),
    n = l(null),
    r = M(Vy, Uy, Lx);
  return (
    c(() => {
      if (!r) return;
      let i = n.current;
      if (t.current || !i) return;
      t.current = !0;
      let a = wi(i),
        o = i[a];
      if (o === e) return;
      if (i.type === `radio` && o === !0) {
        ((i.checked = !1), i.dispatchEvent(Ci()));
        return;
      }
      if (a === `checked`) {
        let e = Ci();
        ((e[Ix] = 1), i.dispatchEvent(e), i.dispatchEvent(Ci()));
        return;
      }
      if (i.nodeName === `SELECT`) {
        i.dispatchEvent(Si());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(i), a)?.set;
      if (!s) return;
      s.call(i, ``);
      let c = Si();
      ((c[Ix] = 1),
        i.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(i, o), i.dispatchEvent(Si()));
        }));
    }, [r]),
    n
  );
}
function Oi() {
  if (!Rx) return;
  ((Bx = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Rx.forEach((n) => t.addEventListener(n, zx, e));
}
function ki() {
  return (
    c(() => {
      if (!Bx || !Rx) return;
      let e = { capture: !0 },
        t = document.body;
      (Rx.forEach((n) => t.removeEventListener(n, zx, e)),
        (Rx = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function Ai(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function ji(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function Mi() {
  ((oS = new aS()), oS.render.markStart());
}
function Ni() {
  (f(() => {
    oS?.useInsertionEffects.markRouterStart();
  }, []),
    j(() => {
      oS?.useLayoutEffects.markRouterStart();
    }, []),
    c(() => {
      oS?.useEffects.markRouterStart();
    }, []));
}
function Pi() {
  (f(() => {
    (oS?.render.markEnd(), oS?.useInsertionEffects.markStart());
  }, []),
    j(() => {
      if ((oS?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        sS = !0;
        return;
      }
      Me.read(() => {
        (oS?.browserRendering.requestAnimationFrame.markStart(),
          oS?.unattributedHydrationOverhead.measure());
      });
    }, []),
    c(() => {
      (oS?.useEffects.markStart(),
        oS?.browserRendering.hasStarted ||
          (oS?.mutationEffects.measure(), oS?.useEffects.markAreSynchronous()));
    }, []));
}
function Fi() {
  (f(() => {
    oS?.useInsertionEffects.markEnd();
  }, []),
    j(() => {
      (oS?.useLayoutEffects.markEnd(),
        !(sS || document.visibilityState !== `visible`) &&
          Me.read(() => {
            (oS?.browserRendering.requestAnimationFrame.markEnd(),
              Zb().then(() => {
                oS?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    c(() => {
      oS?.useEffects.markEnd();
    }, []));
}
function Ii() {
  return (Pi(), null);
}
function Li() {
  return (Fi(), null);
}
function Ri(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return h.isValidElement(e) ? h.cloneElement(e, n) : g(e, { ...n });
}
function zi() {
  return dS;
}
function Bi(e) {
  if (fS?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      U(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: Ui(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          U(t, `localizedPath must be defined`);
          let i = Ui(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    fS = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: fS.pathRoutes,
    paths: fS.paths,
    pathRoutesLocalized: fS.pathRoutesLocalized,
    pathsLocalized: fS.pathsLocalized,
  };
}
function Vi(e, t, n = !0, r = zi()) {
  return Hi(e, t, r, n);
}
function Hi(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Bi(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = Wi(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = Wi(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Wi(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Wi(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function Ui(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Wi(e, t) {
  let n = [],
    r = Gi(t).replace($b, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function Gi(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Ki(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function qi(e) {
  let t = new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = Ki(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function Ji(e, t) {
  let n = e.toLowerCase(),
    r = qi(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function Yi(e) {
  if (N === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in N)) return;
  let t = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!t || t.length === 0) return;
  let n = t.find((t) => t.name === e);
  if (n) return { name: n.name, description: n.description };
}
function Xi() {
  let e = Yi(`abtests`);
  return new URLSearchParams(e?.description);
}
function Zi(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function Qi(e, t) {
  for (let [n, r] of t) Zi(e, n, r);
}
function $i(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function ea(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function ta(e, t) {
  if (N === void 0) return t;
  let n = t;
  if (t) {
    ea(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Qi(e, Xi()), $i(e), n);
}
function na(e) {
  (c(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    f(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function ra(e, ...t) {
  pS.has(e) || (pS.add(e), console.warn(e, ...t));
}
function ia(e, t, n) {
  ra(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function aa(e) {
  return (
    typeof e == `object` &&
    !!e &&
    gS in e &&
    e[gS] instanceof Function &&
    _S in e &&
    e[_S] instanceof Function
  );
}
function oa(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = hS(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function sa(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function ca(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function la(e) {
  return Math.round(e * 2) / 2;
}
function ua(e, t) {
  return { x: e, y: t };
}
function da(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function fa(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function pa(e) {
  let t = ma(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function ma(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function ha(e, t, n) {
  return (
    (xS.rgb_r = e / 255),
    (xS.rgb_g = t / 255),
    (xS.rgb_b = n / 255),
    xS.rgbToHsluv(),
    { h: xS.hsluv_h, s: xS.hsluv_s, l: xS.hsluv_l }
  );
}
function ga(e, t, n, r = 1) {
  return (
    (xS.hsluv_h = e),
    (xS.hsluv_s = t),
    (xS.hsluv_l = n),
    xS.hsluvToRgb(),
    { r: xS.rgb_r * 255, g: xS.rgb_g * 255, b: xS.rgb_b * 255, a: r }
  );
}
function _a(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function va(e, t, n) {
  return {
    r: fa(e) ? Ta(e, 255) * 255 : 0,
    g: fa(t) ? Ta(t, 255) * 255 : 0,
    b: fa(n) ? Ta(n, 255) * 255 : 0,
  };
}
function ya(e, t, n, r) {
  let i = [
    Oa(Math.round(e).toString(16)),
    Oa(Math.round(t).toString(16)),
    Oa(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function ba(e, t, n) {
  let r,
    i,
    a = Ta(e, 255),
    o = Ta(t, 255),
    s = Ta(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function xa(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Sa(e, t, n) {
  let r, i, a;
  if (((e = Ta(e, 360)), (t = Ta(t * 100, 100)), (n = Ta(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = xa(s, o, e + 1 / 3)), (i = xa(s, o, e)), (a = xa(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function Ca(e, t, n) {
  ((e = Ta(e, 255)), (t = Ta(t, 255)), (n = Ta(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function wa(e, t, n) {
  ((e = Ta(e, 360) * 6), (t = Ta(t * 100, 100)), (n = Ta(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function Ta(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    Ea(e) && (e = `100%`);
    let t = Da(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function Ea(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function Da(e) {
  return typeof e == `string` && e.includes(`%`);
}
function Oa(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function ka(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = yS[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = SS.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = SS.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = SS.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: pa(r[2] ?? ``), l: pa(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = SS.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: pa(r[2] ?? ``),
              l: pa(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = SS.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: pa(r[2] ?? ``), v: pa(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = SS.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: pa(r[2] ?? ``),
                  v: pa(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = SS.hex8.exec(t))
                ? {
                    r: Aa(r[1] ?? ``),
                    g: Aa(r[2] ?? ``),
                    b: Aa(r[3] ?? ``),
                    a: ja(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = SS.hex6.exec(t))
                  ? {
                      r: Aa(r[1] ?? ``),
                      g: Aa(r[2] ?? ``),
                      b: Aa(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = SS.hex4.exec(t))
                    ? {
                        r: Aa(`${r[1]}${r[1]}`),
                        g: Aa(`${r[2]}${r[2]}`),
                        b: Aa(`${r[3]}${r[3]}`),
                        a: ja(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = SS.hex3.exec(t))
                      ? {
                          r: Aa(`${r[1]}${r[1]}`),
                          g: Aa(`${r[2]}${r[2]}`),
                          b: Aa(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function Aa(e) {
  return parseInt(e, 16);
}
function ja(e) {
  return Aa(e) / 255;
}
function Ma(e) {
  let t = CS.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function Na(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Pa({ r: e, g: t, b: n, a: r }) {
  return { r: Na(e), g: Na(t), b: Na(n), a: r };
}
function Fa(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Ia({ r: e, g: t, b: n, a: r }) {
  return { r: Fa(e), g: Fa(t), b: Fa(n), a: r };
}
function La({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function Ra(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function za({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Ra(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function Ba(e) {
  return DS(ES(e));
}
function Va(e) {
  return TS(wS(e));
}
function Ha(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Ga({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Ua(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Ga(e)
              : Ka(e)),
    i
  );
}
function Ua(e) {
  let t = ka(e);
  if (t) return t.format === `hsl` ? Ka(t) : t.format === `hsv` ? Wa(t) : Ga(t);
}
function Wa(e) {
  let t = wa(e.h, e.s, e.v);
  return { ...ba(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : qa(e.a) };
}
function Ga(e) {
  let t = va(e.r, e.g, e.b);
  return { ...ba(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : qa(e.a) };
}
function Ka(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = fa(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = fa(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = ma(e.s)),
    (r = fa(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = ma(e.l)),
    (i = Sa(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function qa(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Ja() {
  return bb.location.origin === `https://screenshot.framer.invalid`;
}
function Ya({ children: e }) {
  if (t(VS).top) return g(D, { children: e });
  let n = l({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = l({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = l(new Set()).current,
    a = l({
      getLayoutId: s(({ id: e, name: t, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = t ? `byName` : `byId`,
          s = n.current[o][e];
        if (s) return s;
        let c = t || e;
        if (!a && !i.has(c) && (!n.current.byLayoutId[c] || n.current.byLayoutId[c] === c))
          return (
            n.current.count[o][c] === void 0 &&
              ((n.current.count[o][c] = 0), (n.current.byLayoutId[c] = c), (r.current[o][e] = c)),
            i.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            U(!!c, `duplicatedId must be defined`);
            let u = n.current[o][c],
              d = n.current.byLastId[c];
            if (d && !l) {
              let e = n.current.byLayoutId[d],
                r = !e || e === t;
              d && !i.has(d) && (!t || r) && (l = [d, c]);
            }
            let f = u ? n.current.byLayoutId[u] : void 0,
              p = !f || f === t;
            if (u && !i.has(u) && (!t || p))
              return ((r.current[o][e] = u), (r.current.byLastId[c] = u), i.add(u), u);
          }
        let u = n.current.byLastId[e];
        if (u && !i.has(u)) return (i.add(u), (r.current.byId[e] = u), u);
        if (l) {
          let [t, n] = l;
          return ((r.current[o][e] = t), (r.current.byLastId[n] = t), i.add(t), t);
        }
        let d = n.current.byPossibleId[e];
        if (d && !i.has(d)) return (i.add(d), (r.current.byId[e] = d), d);
        let f = a?.[0],
          p = t || f || e,
          { layoutId: m, value: h } = Xa(p, (n.current.count[o][p] ?? -1) + 1, i);
        if (((n.current.count[o][p] = h), (r.current[o][e] = m), a?.length && !t)) {
          let e = a[a.length - 1];
          if ((e && (r.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (r.current.byPossibleId[t] || (r.current.byPossibleId[t] = m));
            }
        }
        return ((r.current.byLayoutId[m] = c), i.add(m), m);
      }, []),
      persistLayoutIdCache: s(() => {
        ((n.current = {
          byId: { ...n.current.byId, ...r.current.byId },
          byLastId: { ...n.current.byLastId, ...r.current.byLastId },
          byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
          byName: { ...n.current.byName, ...r.current.byName },
          byLastName: { ...n.current.byLastName, ...r.current.byLastName },
          byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
          count: { ...n.current.count, byName: {} },
        }),
          (r.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          i.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return g(VS.Provider, { value: a, children: e });
}
function Xa(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Za({ enabled: e = !0, ...n }) {
  let r = t(VS),
    i = S(() => ({ ...r, enabled: e }), [e]);
  return g(VS.Provider, { ...n, value: i });
}
function Qa(e) {
  let t = l(null);
  return (t.current === null && (t.current = e()), t.current);
}
function $a(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${eo(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return w(`div`, {
    style: US,
    children: [
      g(`div`, { className: `text`, style: GS, children: r }),
      i && g(`div`, { className: `text`, style: KS, children: i }),
    ],
  });
}
function eo(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function to() {
  let e = Y.current();
  return e === Y.canvas || e === Y.export;
}
function no() {
  let [e] = i(() => to());
  return e;
}
function ro(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function io(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of rC) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function ao(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function oo(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < iC) continue;
    let n = ao(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${ao(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function so(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of nC) {
    let n = ao(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function co(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = so(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: oo(n, t, io(t.pixelWidth, t.pixelHeight)) };
}
function lo() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: gt(eC.imagePlaceholderSvg),
  };
}
function uo(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function fo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function po(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...tC,
    objectPosition: fo(e.positionX, e.positionY),
    objectFit: uo(e.fit),
  };
}
function mo(e) {
  let t = h.useRef(e ? `auto` : `async`),
    n = s((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = s(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = s(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function ho({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = eC.useImageSource(e, t, n),
    s = po(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = mo(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : co(e.nodeFixedSize, e, o);
  return g(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function go({ image: e, containerSize: t, nodeId: n }) {
  let r = h.useRef(null),
    i = eC.useImageElement(e, t, n),
    a = po(e);
  return (
    h.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    g(`div`, { ref: r, style: { display: `contents`, ...tC } })
  );
}
function _o({ nodeId: e, image: t, containerSize: n }) {
  let r = h.useRef(null),
    i = eC.useImageSource(t, n, e);
  return (
    h.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = po(t);
      eC.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    g(`div`, { ref: r, style: { display: `contents`, ...tC } })
  );
}
function vo({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (B(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = V(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = la(e * (t.pixelWidth / 2)),
        s = eC.useImageSource(t, n);
      ((r = {
        ...aC,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: fo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        Y.current() === Y.canvas
          ? eC.canRenderOptimizedCanvasImage(eC.useImageSource(t))
            ? g(_o, { image: t, ...n })
            : g(go, { image: t, ...n })
          : g(ho, { image: t, avoidAsyncDecoding: Y.current() === Y.export, ...n });
  let o = a ? aC : (r ?? { ...aC, ...lo() });
  return i
    ? g(he.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : g(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function yo(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function bo(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...tC,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), g(he.div, { style: n }))
    : (yo(e, n, !1), g(he.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function xo(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function So(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !sC.isImageObject(t)) return;
  let r = null;
  if (((r = B(n) ? { alt: ``, src: n } : hS.get(t, null)), sC.isImageObject(r))) return xo(r, e);
}
function Co(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function wo(e) {
  return typeof e != `string` && typeof e != `number`;
}
function To(e) {
  return e != null && typeof e != `boolean` && !Co(e);
}
function G(e) {
  return Number.isFinite(e);
}
function Eo(e) {
  return (Math.PI / 180) * e;
}
function Do(e) {
  return lt(e) ? !1 : e === 2 || e === 5;
}
function Oo(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function ko(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return Ao(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function Ao(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      W(e, `unknown constraint key`);
  }
}
function jo(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(ko(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(ko(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function Mo(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(ko(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(ko(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function No(e, t, n, r, i) {
  let a = Mo(G(e) ? e : fC, n, r, i),
    o = jo(G(t) ? t : pC, n, r, i);
  return (
    G(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (G(n.left) && G(n.right)
        ? (o = a / n.aspectRatio)
        : (G(n.top) && G(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function Po(e, t) {
  return !G(e) || !G(t) ? null : e + t;
}
function Fo(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Io(e) {
  return !e._constraints || Fo(e) ? !1 : e._constraints.enabled;
}
function Lo(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    G(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    G(n) && G(r) ? { width: n, height: r } : null
  );
}
function Ro(e) {
  let t = Lo(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return G(n) && G(r) ? { x: n, y: r, ...t } : null;
}
function zo(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Io(e) || r) return Ro(e);
  let i = Bo(e),
    a = Vo(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return dC.toRect(i, o, null, n, null);
}
function Bo(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = uC.quickfix({
      left: G(t),
      right: G(n),
      top: G(r),
      bottom: G(i),
      widthType: Oo(c),
      heightType: Oo(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function Vo(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Ho() {
  return h.useContext(mC).parentSize;
}
function Uo(e) {
  return typeof e == `object`;
}
function Wo(e) {
  return Uo(e) ? e.width : e;
}
function Go(e) {
  return Uo(e) ? e.height : e;
}
function Ko(e, t) {
  return g(hC, { parentSize: t, children: e });
}
function qo(e) {
  return zo(e, Ho(), !0);
}
function Jo({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Yo(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Xo(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? he[e] : he.div;
}
function Zo(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function Qo(e, t, n = _C) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!vC) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) vC = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = vC;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function $o() {
  return Ja() ? Y.preview : Y.current();
}
function es(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? Z.variable(e) : e === `` ? `""` : e;
}
function ts(e) {
  return e !== IC && e !== LC;
}
function ns(e) {
  for (let t in e) if (ts(t) && e?.[t] === !0) return !0;
  return !1;
}
function rs(e, t, n, r, i) {
  let a = h.useRef(null),
    o = h.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t]
    ),
    s = h.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !ns(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    c = h.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        if (ns(n)) {
          o(e);
          return;
        }
        r?.(e);
      },
      [o, r, t]
    );
  return h.useMemo(() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }), [o, s, c, i]);
}
function is(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return as(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return os(r);
    case `lower-roman`:
    case `upper-roman`:
      return cs(r);
    default:
      return as(r);
  }
}
function as(e) {
  return String(e).length;
}
function os(e) {
  let t = 1;
  for (; ss(t) < e;) t++;
  return t;
}
function ss(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function cs(e) {
  let t = 0;
  for (let n of GC) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function ls(e, t) {
  return Z.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function us(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function ds() {
  return Y.current() === Y.preview ? uw.value : lw.value;
}
function fs(e) {
  return SC(e, ds, `framer-lib-combinedCSSRules`);
}
function ps(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0));
}
function ms(e) {
  let t = {};
  return (!e || !dw || Y.current() !== Y.canvas || ps(t, e), t);
}
function hs(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function gs(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = h.Children.map(t, (e) =>
        h.isValidElement(e) ? h.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function _s(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function vs(e, { specificLayoutId: n, postfix: r } = {}) {
  let { name: i, layoutIdKey: a, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = t(VS);
  return S(() => {
    if (!u) return e.layoutId;
    let t = n || e.layoutId;
    if (!t && (c || !a || s)) return;
    let d = t || l({ id: a, name: i, duplicatedFrom: o });
    if (d) return r ? `${d}-${r}` : d;
  }, [u]);
}
function ys() {
  let [e, t] = h.useState(0);
  return h.useCallback(() => t((e) => e + 1), []);
}
function bs(e) {
  let t = ys();
  c(() => {
    let n = e?.current;
    if (n)
      return (
        mw?.observeElementWithCallback(e.current, t),
        () => {
          mw?.unobserve(n);
        }
      );
  }, [e, t]);
}
function xs(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(hw)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Ss)
    .map(Cs);
}
function Ss(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Cs(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(Ss);
  return t ? Cs(t) : e;
}
function ws(e, n, r = () => [], i = {}) {
  let { id: a, visible: o, _needsMeasure: s } = e,
    { skipHook: c = !1 } = i,
    l = t(fw),
    u = Y.current() === Y.canvas;
  Cx(() => {
    !u ||
      l ||
      c ||
      (n.current && a && o && s && eC.queueMeasureRequest(hs(a), n.current, r(n.current)));
  });
}
function Ts(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && eC.queueMeasureRequest(hs(t.id), t, xs(t));
}
function Es(e) {
  e.willChange = `transform`;
  let t = Y.current() === Y.canvas;
  vw && t && (e.translateZ = gw);
}
function Ds(e) {
  ((e.willChange = `transform`), Os(e, !0));
}
function Os(e, t) {
  let n = Y.current() === Y.canvas;
  if (!vw || !n) return;
  let r = (B(e.transform) && e.transform) || ``;
  t ? r.includes(_w) || (e.transform = r + _w) : (e.transform = r.replace(_w, ``));
}
function ks(e, t, n, r = !0) {
  if (!e) return;
  let i = qS(e.style),
    a = n || i[t],
    o = () => {
      As(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function As(e) {
  return B(e) || V(e) || ut(e);
}
function js(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function Ms(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  js(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function Ns(e, t) {
  let n = [e, t];
  return Sw.test(e) ? e : Ms(1e3, Cw, n, () => xw.multiplyAlpha(e, t));
}
function Ps(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: Ns(e.value, t) }))
  );
}
function Fs(e, t) {
  let n = 0;
  return (
    Ps(e, t).forEach((e) => {
      n ^= bw(e.value) ^ e.position;
    }),
    n
  );
}
function Is(e) {
  return e && ww.every((t) => t in e);
}
function Ls(e) {
  return e && Tw.every((t) => t in e);
}
function Rs({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || AS(t)
      ? (n.backgroundColor = t)
      : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e))
    : e &&
      ((e = hS.get(e, null)),
      typeof e == `string` || AS(e)
        ? (n.background = e)
        : Dw.isLinearGradient(e)
          ? (n.background = Dw.toCSS(e))
          : kw.isRadialGradient(e)
            ? (n.background = kw.toCSS(e))
            : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e)));
}
function K(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function zs(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Bs(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Vs(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    me(n)
      ? (t.cornerShape = ae(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    K(e, `size`, t),
    K(e, `width`, t),
    K(e, `height`, t),
    K(e, `minWidth`, t),
    K(e, `minHeight`, t),
    K(e, `top`, t),
    K(e, `right`, t),
    K(e, `bottom`, t),
    K(e, `left`, t),
    K(e, `position`, t),
    K(e, `overflow`, t),
    K(e, `opacity`, t),
    e._border?.borderWidth || K(e, `border`, t),
    K(e, `borderRadius`, t),
    K(e, `radius`, t, `borderRadius`),
    K(e, `color`, t),
    K(e, `shadow`, t, `boxShadow`),
    K(e, `x`, t),
    K(e, `y`, t),
    K(e, `z`, t),
    K(e, `rotate`, t),
    K(e, `rotateX`, t),
    K(e, `rotateY`, t),
    K(e, `rotateZ`, t),
    K(e, `scale`, t),
    K(e, `scaleX`, t),
    K(e, `scaleY`, t),
    K(e, `skew`, t),
    K(e, `skewX`, t),
    K(e, `skewY`, t),
    K(e, `originX`, t),
    K(e, `originY`, t),
    K(e, `originZ`, t),
    Rs(e, t),
    t
  );
}
function Hs(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof qS(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Us(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (jw.has(t)) return `pointer`;
}
function Ws(e) {
  return Gs(e) ? !0 : e.style ? !!Gs(e.style) : !1;
}
function Gs(e) {
  return Mw in e && (e[Mw] === `scroll` || e[Mw] === `auto`);
}
function Ks(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = Ie(e.minWidth),
    h = Ie(e.minHeight),
    g = Ie(e.maxWidth),
    _ = Ie(e.maxHeight);
  return {
    top: Ie(n),
    left: Ie(t),
    bottom: Ie(r),
    right: Ie(i),
    width: Ie(a),
    height: Ie(o),
    size: Ie(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function qs(e) {
  let n = t(fw),
    { style: r, _initialStyle: i, __fromCanvasComponent: a, size: o } = e,
    s = Ks(e),
    c = qo(s),
    l = {
      display: `block`,
      flex: r?.flex ?? `0 0 auto`,
      userSelect: Y.current() === Y.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !Hs(e) && !e.__fromCanvasComponent && !Ws(e),
    d = !e.style || !(`pointerEvents` in e.style);
  u && d && (l.pointerEvents = `none`);
  let f = h.Children.count(e.children) > 0 &&
      h.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    p = Vs(e);
  (o === void 0 && !a && (zs(p) || (l.width = Nw.width), Bs(p) || (l.height = Nw.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight));
  let m = {};
  (Io(s) &&
    c &&
    !Jo(e) &&
    (m = { left: c.x, top: c.y, width: c.width, height: c.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, i, p, m, r),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    yw.applyWillChange(e, l, !0));
  let g = l;
  l.transform || (g = { x: 0, y: 0, ...l });
  let _ = to();
  return (
    e.positionSticky
      ? (!_ || eC.isOnPageCanvas || n) &&
        ((g.position = `sticky`),
        (g.willChange = `transform`),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : _ &&
        (e.positionFixed
          ? (g.position = eC.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (g.position = `absolute`)),
    `rotate` in g && g.rotate === void 0 && delete g.rotate,
    [g, c]
  );
}
function Js(e) {
  let t = {};
  for (let n in e)
    (te(n) || YS(n)) && !Pw.has(n)
      ? (t[n] = qS(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof qS(e)[n] != `boolean` && !e.transition && (t.transition = qS(e)[n]));
  return t;
}
function Ys(e) {
  return `data-framer-name` in e;
}
function Xs(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function Zs(e) {
  return g(he.div, { layoutId: Lw, style: Bw, children: e.children });
}
function Qs(e, t) {
  at(e) ? e(t) : $s(e) && (e.current = t);
}
function $s(e) {
  return H(e) && `current` in e;
}
function ec() {
  let e = Qa(() => new Set()),
    t = Qa(() => new Map());
  return Qa(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function tc(e) {
  let t = l(null),
    n = ec();
  return Qa(() => ($s(e) ? n(e) : at(e) ? n(t, e) : n(t)));
}
function nc(e, t, n) {
  let r = l(),
    i = l();
  (si(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function rc(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new Vw({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function ic(e, n, r) {
  let i = Qa(() => `${r.rootMargin}`),
    a = t(Hw),
    { enabled: o, root: s, rootMargin: c, threshold: l } = r;
  nc(
    e,
    (e) => {
      if (o && e !== null) return rc(a, i, e, s, n, c, l);
    },
    [o, n, s, c, l]
  );
}
function ac(e, t, n) {
  let r = h.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  Uw(
    e,
    h.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = sc(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t]
    ),
    { threshold: Ww, rootMargin: s, enabled: i ?? !0 }
  );
}
function oc(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, bb.innerHeight);
}
function sc({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && oc(t, e) >= r;
}
function cc() {
  return t(Jw);
}
function lc() {
  return new Map();
}
function uc() {
  return Qa(lc);
}
function dc(e, n = []) {
  let { register: r, deregister: i } = t(Yw);
  c(() => {
    if (e) return (r(e), () => i(e));
  }, [r, i, ...n]);
}
function fc(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function pc(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (G(t.originX) && (r.originX = t.originX),
      G(t.originY) && (r.originY = t.originY),
      G(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (G(n.originX) && (r.originX = n.originX),
      G(n.originY) && (r.originY = n.originY),
      G(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function mc(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function hc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return tT.PushLeft;
    case `left`:
      return tT.PushRight;
    case `bottom`:
      return tT.PushUp;
    case `top`:
      return tT.PushDown;
  }
}
function gc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return tT.OverlayLeft;
    case `left`:
      return tT.OverlayRight;
    case `bottom`:
      return tT.OverlayUp;
    case `top`:
      return tT.OverlayDown;
  }
}
function _c(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return tT.FlipLeft;
    case `left`:
      return tT.FlipRight;
    case `bottom`:
      return tT.FlipUp;
    case `top`:
      return tT.FlipDown;
  }
}
function vc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return bc(e, t.transition, t.component);
    case `removeOverlay`:
      return xc(e);
    case `add`:
      return Sc(e, t.key, t.transition, t.component);
    case `remove`:
      return Tc(e);
    case `update`:
      return yc(e, t.key, t.component);
    case `back`:
      return Cc(e);
    case `forward`:
      return wc(e);
    default:
      return;
  }
}
function yc(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function bc(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function xc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function Sc(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? Ac(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = Oc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = Ec(e, t, c),
    p = kc(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function Cc(e) {
  let t = { ...e.containers },
    n = Tc(e);
  if (n) return ((n.containers = t), n);
}
function wc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = Sc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function Tc(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (U(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = Dc(e, r, n),
    u = kc(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function Ec(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function Dc(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function Oc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function kc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = jc(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function Ac(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function jc(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Mc(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Mc(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Mc(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Mc(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Mc(e, t, n) {
  let r = {},
    i = {};
  return (
    rT.forEach((e) => {
      ((r[e] = Qw[e]), (i[e] = { ...n, from: Qw[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${qS(Qw)[a]}%` : qS(Qw)[a];
        ((qS(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function Nc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Pc({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function Fc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : sT;
}
function Ic({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function Lc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Rc(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  } else if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  } else {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function zc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Bc(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function Vc(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
}
function Hc(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return sT;
}
function Uc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Wc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Gc(e) {
  return h.Children.map(e.component, (t) => {
    if (!To(t) || !wo(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? H(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      h.cloneElement(t, n)
    );
  });
}
function Kc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function qc(e, t) {
  let n = be(),
    r = ie();
  return g(oT, {
    ref: (e) => {
      if (t) {
        if (typeof t == `function`) {
          t(e);
          return;
        }
        t.current = e;
      }
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
function Jc(e) {
  return H(e) || at(e);
}
function Yc(e) {
  return !!e && uT in e && e[uT] === !0;
}
function Xc(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return ot(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return lt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return st(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return st(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = H(e.defaultValue) ? e.defaultValue : {};
        return (H(e.controls) && Zc(t, e.controls), t);
      }
      case `array`:
        return st(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function Zc(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!lt(i) || Yc(r)) continue;
    let a = Xc(r);
    lt(a) || (e[n] = a);
  }
}
function Qc(e) {
  if (H(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function $c(e, t) {
  Jc(e) && Zc(Qc(e), t);
}
function el(e, t) {
  (Object.assign(e, { propertyControls: t }), $c(e, t));
}
function tl(e) {
  return e.propertyControls;
}
function nl(e) {
  return gT in e;
}
function rl(e, t) {
  if (!nl(e)) return;
  let n = hS.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function il(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function al(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function ol(e, t) {
  let n = [];
  (G(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    G(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    G(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    G(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    G(e.invert) && n.push(`invert(${e.invert / 100})`),
    G(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    G(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    G(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...il(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function sl(e, t) {
  G(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function cl(e, t) {
  (sl(e, t), ol(e, t));
}
function ll(e, t) {
  let n,
    r = (...r) => {
      (bb.clearTimeout(n), (n = bb.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      bb.clearTimeout(n);
    }),
    r
  );
}
function ul(e, t = 2) {
  let n = 0;
  if (typeof e == `number`) n = e;
  else if (typeof e == `string`) n = parseFloat(e);
  else return;
  if (Number.isInteger(n)) return n;
  let r = 1;
  for (; t-- > 0;) r *= 10;
  return (n < 0 && (r *= -1), Math.round(n * r) / r);
}
function dl(e) {
  if (e === `none`) return null;
  let t = e
      .trim()
      .split(/\s+/u)
      .map((e) => ul(e)),
    [n, r, i, a] = t;
  switch (t.length) {
    case 1:
      return G(n) ? { top: n, right: n, bottom: n, left: n } : null;
    case 2:
      return !G(n) || !G(r) ? null : { top: n, right: r, bottom: n, left: r };
    case 3:
      return !G(n) || !G(r) || !G(i) ? null : { top: n, right: r, bottom: i, left: r };
    case 4:
      return !G(n) || !G(r) || !G(i) || !G(a) ? null : { top: n, right: r, bottom: i, left: a };
    default:
      return null;
  }
}
function fl(...e) {
  return e.filter(Boolean).join(` `);
}
function pl(e) {
  if (e.startsWith(xT)) return e.substr(ST);
}
function ml(e, t, n) {
  let r = A.map(e, (e) => (v(e) ? C(e, t) : e));
  return n ? r : g(D, { children: r });
}
function hl(e) {
  let t = Qa(() => gl(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function gl(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = _l(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = _l(t)));
    },
    r = !1;
  function i(i, a) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      A.count(i) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      A.map(i, (e) => {
        if (v(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = at(a) ? a(e.props) : a;
          return C(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let a = function (e, t) {
    return g(D, { children: i(e, t) });
  };
  return (
    (a.cloneAsArray = i),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: a,
    }
  );
}
function _l(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Qs(n, e), Qs(t, e));
  };
}
function vl(e, t, n, r, i, a, o, s) {
  let c = h.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !h.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !Sl(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = xl([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = xl([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = g(
        wT.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = bl(e, a, r);
    (f.length
      ? (U(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = g(
          `div`,
          { className: `${TT} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : U(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    U(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, g(`div`, { className: ET }, `property-overrides-separator`)]
  );
}
function yl(e) {
  return e.split(`-`)[2];
}
function bl(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${yl(a)}`);
  }
  return r;
}
function xl(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function Sl(e, t) {
  for (let n of Object.keys(t)) if (!It(e[n], t[n], !0)) return !0;
  return !1;
}
function Cl(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function wl(e) {
  return h.forwardRef(({ optimized: t, ...n }, r) => {
    let i = h.useContext(CT),
      a = h.useContext(wT)?.variants,
      o = n[PT];
    o && !zn() && MT.setAll(o, a, t ? n : null, i);
    let s = IT(n);
    return g(e, { ref: r, ...n, ...s });
  });
}
function Tl(e) {
  return B(e) || Array.isArray(e);
}
function El(e) {
  return e in zT;
}
function Dl(e, t) {
  let n = Qa(() => ({ values: RT(t ? e : void 0) }));
  return (
    h.useEffect(() => {
      if (!t)
        for (let e of LT) {
          let t = zT[e];
          lt(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function Ol(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: a,
    loopPauseOffscreen: o,
  },
  u
) {
  let d = z(),
    f = Qa(RT),
    m = l(!1),
    h = UT(),
    g = l(null),
    _ = s(async () => {
      if (!a) return;
      let e = n || void 0,
        t = m.current && r === `mirror`,
        i = t ? zT : a,
        o = t ? a : zT;
      return (
        (m.current = !m.current),
        (g.current = Promise.all(
          LT.map((t) => {
            if (!(d && t !== `opacity`))
              return (
                f[t].jump(o[t] ?? zT[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    a = i[t] ?? o[t];
                  typeof a == `number` && Ae(f[t], a, r);
                })
              );
          })
        )),
        g.current
      );
    }, [a, r, n, d]),
    [v, y] = i(!1),
    b = l(!1),
    x = s(async () => {
      !e || !b.current || (await _(), await h(t ?? 0), x());
    }, [_, h, e, t]),
    C = s(() => {
      b.current || ((b.current = !0), p(() => y(!0)), x());
    }, [x]),
    w = s((e = !0) => {
      (LT.forEach((e) => {
        f[e].stop();
      }),
        LT.forEach((e) => {
          f[e].set(zT[e]);
        }),
        (m.current = !1),
        e && ((b.current = !1), p(() => y(!1))));
    }, []),
    T = e && a,
    E = s(() => {
      document.hidden ? w(!1) : b.current && ((b.current = !1), C());
    }, [C, w]);
  (c(() => {
    if (T)
      return (
        document.addEventListener(`visibilitychange`, E),
        () => {
          document.removeEventListener(`visibilitychange`, E);
        }
      );
  }, [T, E]),
    c(() => {
      (T && o) || (T ? C() : w());
    }, [C, w, o, T]),
    c(() => () => w(), [w]));
  let D = l(!1),
    O = s(async () => {
      g.current && (await g.current, !D.current && w());
    }, [w]);
  Uw(
    u,
    s(
      (e) => {
        e.isIntersecting ? ((D.current = !0), C()) : ((D.current = !1), O());
      },
      [C, O]
    ),
    { enabled: T && o }
  );
  let k = v || !o;
  return S(() => ({ values: f, style: T && k ? BT : VT }), [T, k]);
}
function kl(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function Al(e, n, r) {
  let { speed: i = 100, offset: a = 0, adjustPosition: o = !1, parallaxTransformEnabled: s } = e,
    c = h.useRef(null),
    l = z(),
    u = h.useCallback(
      (e) => (c.current === null || i === 100 ? 0 : kl(e, c.current, i, a, o)),
      [i, a, o]
    ),
    { scrollY: d } = pe(),
    f = ke(d, u),
    p = L(o && c.current === null ? `hidden` : r),
    m = L(0),
    g = t(Hw);
  return (
    nc(
      n,
      (e) => {
        if (e === null || !s) return;
        let t = rc(g, `undefined`, e, null, (e) => {
          ((c.current = e.boundingClientRect.top),
            Me.update(() => {
              (f.set(u(d.get())), o && p.set(r ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [o, s]
    ),
    Ut(() => {
      s && f.set(0);
    }),
    { values: { y: l || !s ? m : f }, style: s ? { ...BT, visibility: p } : VT }
  );
}
function jl(e) {
  return typeof e == `object` && !!e;
}
function Ml(e) {
  if (jl(e)) return e?.transition;
}
function Nl(e, t, n, r, i, a) {
  let o = Ml(e);
  return Promise.all(
    LT.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = jl(e) ? (e?.[s] ?? zT[s]) : zT[s];
          if ((me(u) && (u = u.get()), !V(u))) return c();
          let d = He.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (B(i) && !l?.hasAnimated && bb.MotionHandoffAnimation) {
            let e = bb.MotionHandoffAnimation(i, s, Me);
            e && (f = e);
          }
          a ? l.set(u) : Ae(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function Pl(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  c,
  u
) {
  let d = r ?? e,
    f = i ?? t,
    p = a ?? n,
    [m, h] = oe(),
    g = l({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    _ = Qa(() => {
      let e = d ?? c;
      if (!H(e)) return { values: RT() };
      let t = {};
      for (let n in e) {
        let r = H(e) ? e[n] : void 0;
        V(r) && (t[n] = r);
      }
      return { values: RT(t) };
    });
  nc(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && f) return;
      let n = He.get(e);
      if (n) {
        Object.assign(g.current, { hasMounted: !0 });
        for (let e in _.values) {
          if (!El(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, V(t) ? t : zT[e]);
        }
      }
    },
    [f]
  );
  let v = z();
  nc(o, (e) => {
    if (!s) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== g.current.lastPresence) {
      (Object.assign(g.current, { lastPresence: m }),
        m
          ? d &&
            f &&
            (Object.assign(g.current, { running: !0 }),
            Nl(f, _, v, o, u).then(() => Object.assign(g.current, { running: !1 })))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              Nl(p, _, v, o, u)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    It(f, t) ||
      !f ||
      (Object.assign(g.current, { lastAnimate: f }),
      Nl(f, _, v, o, u, !n).then(() => Object.assign(g.current, { running: !1 })));
  });
  let y = s && f;
  return S(() => ({ values: _.values, style: y ? BT : VT }), [y]);
}
function Fl(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function Il(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = Fl(o.current, document.documentElement) - KT - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function Ll(e, t = 0) {
  return e < t ? `up` : `down`;
}
function Rl(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Ht();
  h.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return le((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = Ll(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < qT) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function zl(e, t, n) {
  let r = Il(e, t),
    i = [...YT],
    a = r[0];
  if (!V(a)) return XT;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!V(e)) return XT;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function Bl(e) {
  return {
    x: e?.x ?? zT.x,
    y: e?.y ?? zT.y,
    scale: e?.scale ?? zT.scale,
    opacity: e?.opacity ?? zT.opacity,
    transformPerspective: e?.transformPerspective ?? zT.transformPerspective,
    rotate: e?.rotate ?? zT.rotate,
    rotateX: e?.rotateX ?? zT.rotateX,
    rotateY: e?.rotateY ?? zT.rotateY,
    skewX: e?.skewX ?? zT.skewX,
    skewY: e?.skewY ?? zT.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Vl({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return h.useMemo(
    () => ({
      initial: r ?? Bl({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? Bl({ opacity: t }),
      exit: i ?? Bl(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function Hl(e, t) {
  let n = z(),
    r = Vl(e),
    i = e.styleAppearEffectEnabled,
    a = Dl(i ? r.initial : r.animate, i),
    o = h.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = Ht(),
    c = h.useRef(),
    l = h.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = He.get(t.current);
      c.current = Promise.all(
        LT.map((e) => {
          s && a.values[e].set(r.initial[e] ?? zT[e]);
          let t = o[e] ?? zT[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (V(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...l, onComplete: () => r() };
                typeof t == `number` && Ae(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    u = e.animateOnce && o.current.lastAppearState === !0;
  ac(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      ((o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && l(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !u,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let d = e.targets && i && !e.scrollDirection;
  return (
    h.useEffect(() => {
      if (!d) return;
      let t = { initial: !0 },
        n = `initial`;
      return le((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = zl(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let u = re(a.current, s, c);
        if ((e.animateOnce && t[u]) || ((t[u] = !0), n === u)) return;
        n = u;
        let d = qS(r)[u];
        d && l(d);
      });
    }, [s, d]),
    Rl(e.scrollDirection, (e) => void l(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Ut(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of LT) a.values[e].set(r.initial?.[e] ?? zT[e]);
    }),
    S(() => ({ values: a.values, style: i ? BT : VT }), [i])
  );
}
function Ul(e, t) {
  let n = h.useRef({});
  h.useEffect(() => {
    if (t !== void 0)
      for (let r of Xy(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Ge({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), Me.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Wl(e, t) {
  let n = $T();
  return {
    inputRange: Il(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of LT) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function Gl(e) {
  let t = $T();
  for (let { target: n } of e) for (let e of LT) t[e]?.push(n[e]);
  return t;
}
function Kl(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  a
) {
  let o = z(),
    s = Dl(QT(n, o), t),
    c = !t || !n,
    l = e === `onScrollTarget`,
    u = Ht();
  return (
    j(() => {
      if (!(c || !l))
        return le((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: a } = Wl(n, i * t.containerLength);
          if (r.length !== 0)
            for (let e of LT)
              (o && e !== `opacity`) ||
                (r.length === a[e].length &&
                  a[e][0] !== void 0 &&
                  s.values[e].set(re(t.current, r, a[e])));
        });
    }, [o, l, i, n, c]),
    nc(
      a,
      (t) => {
        if (c || l || t === null) return;
        let r = Gl(n);
        return le(
          (e, { y: t }) => {
            for (let e of LT)
              (o && e !== `opacity`) ||
                (eE.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  s.values[e].set(re(t.progress, eE, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [u, o, e, l, n, c]
    ),
    Ul(s.values, r),
    Ut(() => {
      if (c) return;
      let e = QT(n, o);
      for (let t of LT) s.values[t].set(e?.[t] ?? zT[t]);
    }),
    h.useMemo(() => ({ values: s.values, style: t ? BT : VT }), [t])
  );
}
function ql(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Jl(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = pl(n);
    if (r) {
      for (let i of nE)
        if (tE[i]?.has(r)) {
          t[i][r] = qS(e)[n];
          break;
        }
    } else t.forwardedProps[n] = qS(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = ql(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = ql(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Yl(e) {
  return H(e) && aE in e;
}
function Xl(e, t) {
  if (!e || !H(e)) return t;
  for (let n in e) {
    let r = e[n];
    !me(r) || !El(n) || (V(r.get()) && t[n].push(r));
  }
}
function Zl(e) {
  return B(e) || Array.isArray(e);
}
function Ql({ componentIdentifier: e, children: n }) {
  return n(t(sE)[e] ?? {});
}
function $l() {
  return h.useContext(cE);
}
function eu(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function tu() {
  if (N === void 0 || mE)
    return g(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw gE;
}
function nu({ children: e }) {
  return t(vE) ? g(D, { children: e }) : g(T, { fallback: _E, children: e });
}
function ru() {
  return g(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function iu(e, t) {
  if (!Ly || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  vn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function au(...e) {
  console.error(...e);
}
function ou() {
  return Y.current() !== Y.canvas;
}
function su({ getErrorMessage: e, fallback: t, children: n }) {
  return ou()
    ? g(cu, { fallback: t, children: g(bE, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function cu({ children: e, fallback: t = yE }) {
  return N === void 0 ? g(T, { fallback: t, children: e }) : g(nu, { children: e });
}
function lu() {
  return h.useContext(SE);
}
function uu() {
  let e = lu();
  return h.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function du({ children: e, scopeId: t, nodeId: n }) {
  let r = lu(),
    i = h.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return g(SE.Provider, { value: i, children: e });
}
function fu(e, t) {
  return `${CE}${e}:${t}`;
}
function pu(e, t) {
  return hu(`component`, e, t);
}
function mu(e, t) {
  return hu(`override`, e, t);
}
function hu(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${fu(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function gu(e, t, n, r, i, a) {
  let o = vu(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function _u(e, t, n, r) {
  return vu(e, t, n, r);
}
function vu(e, t, n, r) {
  return !!(lt(n) || (n === 1 && r && e === t));
}
function yu(e, t, n, r, i, a) {
  let o = lu();
  if (lt(t) || lt(n)) return g(xE, { children: e });
  let { disableCustomCode: s } = fE();
  return s && r
    ? g(`div`, {
        style: {
          padding: `12px 16px`,
          borderWidth: 1,
          borderRadius: 6,
          borderStyle: `solid`,
          borderColor: `rgba(149, 149, 149, 0.15)`,
          backgroundColor: `rgba(149, 149, 149, 0.1)`,
          fontSize: 12,
          color: `#a5a5a5`,
        },
        children: `Code component disabled`,
      })
    : (gu(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = g(su, { getErrorMessage: pu.bind(null, t, n), fallback: null, children: e })),
      i && (e = g(du, { scopeId: t, nodeId: n, children: e })),
      e);
}
function bu(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function xu(e) {
  return !(!e || e.placement || e.alignment);
}
function Su(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      W(e);
  }
}
function Cu(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${Su(t)}, -100%`;
    case `right`:
      return `0%, ${Su(t)}`;
    case `bottom`:
      return `${Su(t)}, 0%`;
    case `left`:
      return `-100%, ${Su(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function wu(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(ME)) {
      let e = n.getAttribute(ME);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function Tu(e) {
  let { registerCursors: n } = t(EE),
    r = Qa(() => e),
    i = k();
  j(() => n(r, i), [n, i]);
}
function Eu(e) {
  return !!(e && typeof e == `object` && PE in e);
}
function Du(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function Ou() {
  return Y.current() === Y.canvas;
}
function ku(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function Au(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function ju(e, t, n, r) {
  if (B(e)) {
    let i = ku(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = Vi(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function Mu(e) {
  return B(e) && e.startsWith(`data:${VE}`);
}
function Nu(e) {
  if (Mu(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(VE.length),
        r = t.searchParams,
        i = r.has(LE) ? r.get(LE) : void 0,
        a,
        o = r.get(RE),
        s = r.get(zE),
        c = r.get(BE);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function Pu(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = Nu(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function Fu(e) {
  if (!Mu(e)) return e;
  let t = Nu(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: Iu(i) };
}
function Iu(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Lu(e, n, r, i, a, o) {
  let c = t(HE),
    l = uu(),
    u = S(() => ({ scopeId: n, nodeId: r, furthestExternalComponent: l }), [n, r, l]),
    d = zt(),
    f = Vt(),
    { locales: p } = sr(),
    m = S(() => {
      let e = Eu(i) ? i : Fu(i);
      if (e) return ju(e, d, f, p);
    }, [f, i, d, p]),
    h = !!(!Ou() && c?.nodeId && u.nodeId),
    _ = s(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), Gn(e))) {
            Bu(a.href, ``, `_blank`);
            return;
          }
          m ? a.navigate?.() : Bu(a.href, a.rel, a.target);
        }
      },
      [a, m]
    ),
    v = s(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), Bu(a.href, ``, `_blank`));
      },
      [a]
    ),
    y = s(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          m ? a.navigate?.() : Bu(a.href, a.rel, a.target));
      },
      [a, m]
    );
  nc(
    o,
    (e) => {
      e !== null && h && (e.dataset.hydrated = `true`);
    },
    [h]
  );
  let b = e;
  return (
    h &&
      (A.forEach(e, (e) => {
        zu(e) &&
          (U(
            Ru(c),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          U(
            Ru(u),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          IE.collectNestedLink(c, u));
      }),
      (b = A.map(e, (e) => {
        if (!zu(e)) return e;
        let t = Vu(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: _,
            onAuxClick: v,
            onKeyDown: y,
            as: r.as && Vu(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return O(t, { ...i, ref: a }, n);
      }))),
    g(HE.Provider, { value: u, children: b })
  );
}
function Ru(e) {
  return !lt(e?.nodeId);
}
function zu(e) {
  return v(e) && (Vu(e.type) !== e.type || Vu(e.props.as) !== e.props.as);
}
function Bu(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Vu(e) {
  return e === `a` ? `span` : nt(e) && ce(e) === `a` ? he.span : e;
}
function Hu({ component: e, props: n }) {
  let r = t(CT),
    i = O(e, n);
  if ((`variant` in n && n.variant != null) || !r) return i;
  let { activeVariantId: a, humanReadableVariantMap: o } = r;
  if (!a || !o) return i;
  let s = {};
  for (let [e, t] of Object.entries(o)) s[t] = { variant: e };
  return g(OT, { overrides: s, breakpoint: a, children: i });
}
function Uu(e) {
  qE = e;
}
function Wu() {
  return qE;
}
function Gu(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Gu(e.parentElement, t)
      : null;
}
function Ku({ children: e }) {
  return g(nu, { children: e });
}
function qu(e) {
  return y(function (t, n) {
    return g(Ku, { children: g(e, { ...t, ref: n }) });
  });
}
function Ju(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Xu(e, t, o, s, a, c, l, i, r);
}
function Yu(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && ku(t))
    try {
      let [i, a] = t.split(`#`, 2);
      U(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      U(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = Vi(e.routes, o, s, r),
        d = e.getRoute(c);
      if (d)
        return {
          routeId: c,
          route: d,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, l),
          locale: u ? r?.find(({ id: e }) => e === u) : void 0,
        };
    } catch {}
}
function Xu(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = xi(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function Zu() {
  let e = t(YE),
    n = Vt()?.pathVariables;
  return e || n;
}
function Qu(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(JE)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function $u() {
  return !!Yi(`ss-only-routes`);
}
function ed(e) {
  if (N === void 0) return;
  let t = N.location.href,
    n;
  try {
    n = new URL(e, t);
  } catch {
    return;
  }
  return ((n.hash = ``), n);
}
function td(e) {
  return Ji(`rewrite`, e)?.description === `external`;
}
function nd() {
  if (!fE().checkServerSideRouter) return !1;
  if ($E === void 0) {
    let e = $u();
    ((eD = !e && Ln() && Bn() < 16.4), ($E = e || eD));
  }
  return $E;
}
function rd(e, t) {
  if (e.type === `opaqueredirect` || !e.ok) return { decision: `server` };
  let n = e.headers.get(`Framer-Location`);
  if (n)
    try {
      return { decision: `server`, redirectUrl: new URL(n, t).href };
    } catch {
      return { decision: `server` };
    }
  let r = e.headers.get(`Framer-Site-Id`);
  return r === null
    ? { decision: td(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === Wu() ? `client` : `server` };
}
async function id(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    (eD &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((eD = !1), Ji(`ss-only-routes`, t.headers.get(`server-timing`)) || ($E = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return rd(t, e);
}
function ad(e, t) {
  XE.has(e) && XE.set(e, t);
}
async function od(e) {
  await An(ZE);
  try {
    ad(e, await id(e));
  } catch {
    XE.delete(e);
  }
}
async function sd(e) {
  try {
    let t = await id(e);
    return (ad(e, t), t);
  } catch {
    return (od(e), { decision: `server` });
  }
}
function cd(e) {
  if (!nd()) return;
  let t = ed(e);
  if (!t || t.origin !== N.location.origin) return;
  let n = t.href;
  XE.has(n) || XE.set(n, sd(n));
}
function ld(e) {
  let t = ed(e);
  if (!t) return;
  let n = XE.get(t.href);
  return n && !ht(n) ? n : void 0;
}
async function ud(e) {
  let t = ed(e);
  if (!t) return;
  let n = XE.get(t.href);
  if (n) return ht(n) ? Promise.race([n, An(QE).then(() => void 0)]) : n;
}
function dd(e) {
  !(e instanceof HTMLAnchorElement) || !e.href || cd(e.href);
}
function fd() {
  let e = d.connection || d.mozConnection || d.webkitConnection || {},
    t = d.deviceMemory && d.deviceMemory > rD,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? iD : aD));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: nD }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    dd(t);
    let { id: n, preload: i } = e,
      a = cD.get(n);
    if (!a?.size || sD.has(n)) return;
    (++s, sD.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), oD.delete(t));
    for (let e of a) (o.unobserve(e), oD.delete(e));
    (a.clear(), cD.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = oD.get(e);
      if (!n || sD.has(n.id)) {
        (o.unobserve(e), oD.delete(e));
        continue;
      }
      let r = n.id,
        a = cD.get(r),
        l = cD.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : cD.set(r, new Set([e])), setTimeout(c, tD, n, e));
      } else (a && a.delete(e), l <= 1 && cD.delete(r));
    }
  }
  return (e, t, n) => {
    if (!sD.has(n))
      return (
        oD.set(e, { id: n, preload: t }),
        o.observe(e),
        () => {
          (oD.delete(e), o.unobserve(e));
        }
      );
  };
}
function pd(e, t) {
  let n = ku(e),
    r = {
      href: e === `` || Au(e, n) ? e : `https://${e}`,
      target: md(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = $n(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function md(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function hd(e, t) {
  console.warn(
    vt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function gd(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return hd(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return ht(i) ? i.catch(hd) : i;
  } catch (e) {
    hd(e);
  }
}
async function _d(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      U(a, `unresolvedSlug should be defined`);
      let o = gd(a, r, n),
        s = ht(o) ? await o : o;
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function vd(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = gd(o, r, n);
      ht(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function yd() {
  let e = kn();
  return s((t, n, r, i = []) => vd(t, n, r, e, i), [e]);
}
function bd({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = kn();
  return s(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = Eu(r) ? r : Fu(r);
      if (!Eu(c))
        return vn(
          `published_site_click`,
          {
            ...s,
            href: o ? xd(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (B(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (ht(n) ? await n : n) ?? null;
        }
      }
      return vn(
        `published_site_click`,
        {
          ...s,
          href: o ? xd(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function xd(e) {
  try {
    let t = new URL(e, bb.document.baseURI);
    return t.origin === bb.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function Sd(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function Cd(e, t, n) {
  return async (r) => {
    let i = Gn(r),
      a = Gu(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await Zb({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function wd(e, t, n) {
  return async (r) => {
    let i = await Td(t);
    if (i.decision === `client`) {
      n(r);
      return;
    }
    Ed(e, r, i.redirectUrl);
  };
}
async function Td(e) {
  return !e || !nd()
    ? { decision: `client` }
    : ld(e) || (cd(e), (await ud(e)) ?? { decision: `server` });
}
async function Ed(e, t, n) {
  (await Zb({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    t?.(),
    N.location.assign(Dd(e, n)));
}
function Dd(e, t) {
  if (!t) return e;
  try {
    let n = new URL(e, N.location.href),
      r = new URL(t);
    return (n.hash && !r.hash && (r.hash = n.hash), r.href);
  } catch {
    return t;
  }
}
function Od(e, t) {
  if (t || N === void 0) return;
  let n = N.location.href,
    r;
  try {
    r = new URL(e, n);
  } catch {
    return;
  }
  let i = new URL(n);
  if (r.origin === i.origin && !(r.pathname === i.pathname && r.search === i.search)) return r.href;
}
function kd(e, t, n, r, i, a, o, s) {
  if (!n) return pd(e, r);
  let c = Yu(t, e, s, o);
  if (!c) return pd(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return pd(e, r);
  let m = xi(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !Ry,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = md(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = Od(m, g),
    v = { pathVariables: f, locale: p },
    y = wd(m, _, (e) =>
      Sd(
        t,
        l,
        () =>
          i(l, v, { priority: `user-blocking`, yieldBeforePreload: !1, shouldLoadRouteData: !g }),
        d,
        f,
        r.smoothScroll,
        e
      )
    );
  return {
    href: m,
    target: h,
    onClick: Cd(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && Qu(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function Ad(e, t, n) {
  let r = jd(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (at(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (at(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function jd(e, t) {
  let n = H(e) ? e : void 0,
    r = n && !ct(n),
    i = t && !ct(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function Md(e, t, n) {
  if (!(t && Nn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: Nd } : { ...i, onTap: r }) : e;
}
function Nd(e) {
  let t = Gu(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function Pd(e, t, n, r, i, a) {
  let o = Eu(e) ? e : Fu(e);
  if (!Eu(o)) return B(e) ? pd(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (ht(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return xi(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function Fd() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
          Math.floor(Math.random() * 62)
        );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l;) {
        if (performance.now() - c > o) {
          ((l = !1), postMessage({ success: !1 }));
          return;
        }
        let n = t(a),
          i = `${Date.now()}:${n}`,
          u = await e(r + i);
        if (u.startsWith(s)) {
          postMessage({ success: !0, secret: i, hash: u });
          return;
        }
      }
    });
  }.toString();
}
async function Id() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, Fd(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: dD, difficulty: fD, tokenLength: pD, maxTime: mD }));
  });
}
function Ld(e) {
  let t = new Set();
  for (let n of e.elements)
    !Rd(n) || n.disabled || !n.name || n.name.startsWith(hD) || t.add(n.name);
  return Array.from(t);
}
function Rd(e) {
  return (
    e instanceof HTMLSelectElement ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLInputElement &&
      ![`file`, `submit`, `reset`, `button`, `image`].includes(e.type))
  );
}
function zd(e, t) {
  let n = Array.from(t.keys()).filter((t) => !e.includes(t));
  return [...e, ...n].map(encodeURIComponent).join(`,`);
}
function Bd(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`].forEach(
        (n) => {
          typeof t[n] == `string` && e.append(n, t[n]);
        }
      );
    }
  } catch {}
}
function Vd() {
  let e = h.useContext(OD),
    t = h.useMemo(
      () =>
        _D.map((e) => ({
          inputRef: h.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      []
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: h.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${hD}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: h.useCallback(
      (n) => {
        let r = t.length,
          i = 0,
          a = [];
        (t.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let r = t.name,
              o = t.value;
            if (o) {
              i++;
              let t = {
                [yD.name]: e.originalName,
                [yD.value]: o,
                [yD.setAttribute]: e.methodsUsed.setAttribute,
                [yD.valueProperty]: e.methodsUsed.valueProperty,
                [yD.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [yD.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [yD.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${hD}_${bD.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${hD}_${bD.fieldCount}`, r.toString()),
          n.append(`${hD}_${bD.fieldFilledCount}`, i.toString()),
          n.append(`${hD}_${bD.hpVersion}`, gD),
          n.append(`${hD}_${bD.siteId}`, e || ``),
          n.append(`${hD}_${bD.timeToSubmissionSinceModuleLoad}`, xD()));
      },
      [t, e]
    ),
  };
}
function Hd({ states: e }) {
  return g(D, { children: e.map((e) => g(SD, { inputStateRef: e }, `hp_${e.originalName}`)) });
}
function Ud({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          Wd(e, t, n);
        })
      : Wd(e.pageviewEventData.current, t, n));
}
function Wd(e, t, n) {
  return vn(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function Gd({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? DD : ED;
    case `incomplete`:
      return e === `error` ? DD : TD;
    case `submit`:
      return CD;
    case `success`:
      return wD;
    case `error`:
      return DD;
    default:
      W(t);
  }
}
function Kd({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function qd(e) {
  e.preventDefault();
}
function Jd(e, t) {
  let n = Au(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    `current` in t && t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function Yd(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (Yd(t)) return !0;
  return !1;
}
async function Xd(e, t, n, r) {
  let i = await Id();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = { "Framer-Site-Id": r, "Framer-POW": i.secret, "Framer-Form-Fields": zd(n, t) },
    o = await fetch(e, { body: t, method: `POST`, headers: a });
  if (o.ok) return o;
  {
    let e = await o.json(),
      t = `Failed to submit form`;
    throw Zd(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function Zd(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    H(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function Qd({ EditorBar: e, fast: n = !1 }) {
  let r = t(OD),
    i = M(Vy, n ? MD : ND, Uy),
    a = fE(),
    o = S(() => {
      let e = {},
        t;
      for (t in a)
        a.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = a[t]);
      return e;
    }, [a]);
  return !e || !r || !i
    ? null
    : g(jD, { children: g(T, { children: g(e, { framerSiteId: r, features: o }) }) });
}
function $d({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = l(),
    a = l(),
    o = l(t),
    s = l(null);
  ((o.current = t),
    c(() => {
      e && ((r.current ??= new Set()), r.current.add(e), a.current?.(e));
    }, [e]));
  let [u] = i(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        o.current ? tf(o.current, o.current.currentRouteId, o.current.currentPathVariables) : ``,
      resolveRoute: (e) => (o.current ? tf(o.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        a.current = e;
      },
      sendTrackingEvent: async (e) => {
        o.current && ef(o.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: s,
  }));
  return g(PD.Provider, { value: u, children: n });
}
async function ef(e, t) {
  if (!yn(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    vn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function tf(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? mr(r.path, n) : r.path) : ``;
}
function nf(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function rf() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((FD = e.timeZone), (ID = e.locale));
}
function af({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  Xr(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: Vr()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t
  );
}
function of(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let {
      historyPath: i,
      hash: a,
      pathVariables: o,
      localeId: s,
      currentRoutePath: c,
      contentLocaleId: l,
      canonicalPathVariables: u,
    } = n,
    d = c !== void 0 && c === r,
    f = Vr();
  Xr(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      contentLocaleId: l,
      canonicalPathVariables: u,
      localeId: s,
      queryParamBackAnchorSearch: d ? f?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function sf(e, t, n, r) {
  let i = Vr();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Xr(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
        contentLocaleId: i?.contentLocaleId,
        canonicalPathVariables: i?.canonicalPathVariables,
      },
      xi(t, n)
    ));
}
function cf() {
  return Bn() >= 17 ? BD : zD;
}
function lf(e = hf) {
  let t = (e) => {
    e.persisted && vf();
  };
  Ln() && (N.addEventListener(`pageshow`, t), (RD = Date.now() - cf()));
  let n = uf(),
    r = gf(e);
  return function () {
    (N.removeEventListener(`pageshow`, t), n(), r());
  };
}
function uf() {
  let e = N.history.scrollRestoration;
  return (
    (N.history.scrollRestoration = `manual`),
    function () {
      N.history.scrollRestoration = e;
    }
  );
}
function df(e) {
  return H(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function ff() {
  return { x: N.scrollX, y: N.scrollY };
}
function pf() {
  let e = Vr();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (df(t)) return t;
}
function mf(e) {
  let t = Vr();
  t && (Jr({ ...t, scrollPosition: e }), Ln() && (RD = Date.now()));
}
function hf(e, t = !1) {
  let n = pf();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (Ln() && !t) {
      let e = cf();
      if (Date.now() - RD < e) return;
    }
    mf(e);
  }
}
function gf(e) {
  let t = () => {
      e(ff());
    },
    n = () => {
      e(ff(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), N.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), N.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in N)) {
    let e = _f(t);
    return function () {
      (i(), e());
    };
  }
  return (
    N.addEventListener(`scrollend`, t),
    function () {
      (i(), N.removeEventListener(`scrollend`, t));
    }
  );
}
function _f(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), !(t === void 0 || Hr(Vr()) !== t) && e());
    },
    a = () => {
      let e = Hr(Vr());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = Ln() ? cf() : 100;
      t = N.setTimeout(i, a);
    };
  return (
    N.addEventListener(`scroll`, a),
    function () {
      (N.removeEventListener(`scroll`, a), r());
    }
  );
}
function vf() {
  let e = pf();
  return e ? (N.scrollTo(e.x, e.y), !0) : !1;
}
function yf(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function bf(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (yf(n, t), !0);
}
function xf(e, t, n) {
  n !== `preserve-scroll-position` &&
    Me.render(
      () => {
        (n === `restore-scroll-position` && vf()) || bf(e, t) || N.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function Sf(e, t) {
  Me.read(() => {
    N.scrollY !== 0 ||
      N.scrollX !== 0 ||
      Me.render(
        () => {
          vf() || bf(e, t);
        },
        !1,
        !0
      );
  });
}
function Cf(e) {
  let t = fE().scrollRestoration,
    n = l(void 0),
    r = l(!1),
    i = !!(t && !e),
    a = s(
      (e) => {
        ((n.current = e), i && (r.current = !0));
      },
      [i]
    ),
    o = s((e, t = !1) => {
      r.current || hf(e, t);
    }, []),
    c = s(() => {
      i && (r.current = !0);
    }, [i]),
    u = s(() => n.current !== void 0 || r.current, []),
    d = s((e, t) => {
      let i = n.current;
      !i ||
        i.routeId !== e ||
        i.remountKey !== t ||
        ((n.current = void 0), (r.current = !1), xf(i.hash, i.shouldSmoothScroll, i.behavior));
    }, []);
  return (
    j(() => {
      if (i) return lf(o);
    }, [i, o]),
    {
      usesCustomScrollRestoration: i,
      isNavigationCommitPending: u,
      onHistoryTraversal: c,
      scheduleScroll: a,
      commitNavigationScroll: d,
    }
  );
}
function wf({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { commitNavigationScroll: r, usesCustomScrollRestoration: i } = n;
  return (
    j(() => {
      r(e, t);
    }),
    c(() => {
      i && Sf(N.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function Tf() {
  let [e, t] = h.useState(0);
  return [e, h.useCallback(() => t((e) => e + 1), [])];
}
function Ef({ children: e, loadSnippetsModule: t }) {
  return g(ZD.Provider, { value: t, children: e });
}
function Df() {
  return h.useContext(ZD);
}
function Of(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function kf(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (U(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (U(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      W(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await Af(a.createContextualFragment(e), r, i));
}
async function Af(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = jf(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await Af(r, e, null)));
  }
}
function jf(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return Mf(r, t, n);
}
function Mf(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function Nf(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = qD), (n = JD));
      break;
    case `bodyEnd`:
      ((t = YD), (n = XD));
      break;
    case `headStart`:
      ((t = UD), (n = WD));
      break;
    case `headEnd`:
      ((t = GD), (n = KD));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function Pf(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Of(e),
    s = t.nextSibling;
  for (; s && s !== n;) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function Ff(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = Nf(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Pf(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((If(t, o), s)) {
      await kf(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Of(e.id),
      u = `${c}
${e.code}
${l}`,
      d = Rf(e.id, n, r, i);
    d ? await kf(u, d, `afterend`) : await kf(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function If(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (Lf(n) && n.remove(), (n = e));
  }
}
function Lf(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function Rf(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Pf(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function zf() {
  let e = Df();
  return s(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(VD)?.dataset[HD] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await Ff(t, n, r);
      }
    },
    [e]
  );
}
function Bf(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function Vf({
  siteCanonicalURL: e,
  activeLocale: t,
  contentLocale: n,
  currentRoute: r,
  currentRouteId: i,
  currentPathVariables: a,
  locales: o,
  collectionUtils: s,
}) {
  if (!e || !t || !n || !r) return;
  let c,
    l = [],
    u = o.find((e) => e.id === tb),
    { path: d } = await rr({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
  d && (c = Bf(d, e));
  let f;
  for (let n of o) {
    if (r.includedLocales && !r.includedLocales.includes(n.id)) continue;
    let { path: o } = await rr({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
    if (!o) continue;
    let c = Bf(o, e);
    (l.push({ href: c, hrefLang: n.code }), n.id === tb && (f = c));
  }
  return (
    f && l.push({ href: f, hrefLang: `x-default` }),
    () => {
      (Ir(c, N.location.href), Lr(l));
    }
  );
}
function Hf({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let l = kn(),
    u = zf();
  c(() => {
    let c = !0,
      d = () => void (c = !1);
    return !e || !t
      ? (u(i, n ?? {}, e, a).catch((e) => {
          c && iu(e);
        }),
        d)
      : ((e.id === t.id
          ? qn()
          : rr({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === tb),
              route: r,
              routeId: i,
              pathVariables: n,
              collectionUtils: l,
              preserveQueryParams: !1,
            })
        )
          .then(async (d) => {
            if (!c) return;
            let f = d ? d.pathVariables : n;
            if ((await u(i, f ?? {}, t, a), !c)) return;
            let p = await Vf({
              siteCanonicalURL: s,
              activeLocale: e,
              contentLocale: t,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: o,
              collectionUtils: l,
            });
            c && p?.();
          })
          .catch((e) => {
            c && iu(e);
          }),
        d);
  }, [e, l, t, n, r, i, a, u, o, s]);
}
function Uf(e) {
  if (!e) return Iy;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function Wf(e) {
  let t = ni(e),
    n = l(void 0),
    r = s(() => {
      (n.current?.abort(), (n.current = void 0));
    }, []);
  return {
    startNavigation: s(
      async (e, i, a, o = !0) => {
        r();
        let s = o ? new AbortController() : void 0;
        n.current = s;
        let c = s?.signal,
          l = Kt(c);
        if ((i.promise.finally(l), a === void 0)) return (e(c), i.promise);
        let u,
          d = new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(Iy);
        if ((t(d, s, a), e(c), await i.promise, c?.aborted)) return;
        let f = N.navigation?.transition;
        u();
        try {
          await f?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        c?.aborted || _x();
      },
      [r, t]
    ),
    cancelPendingNavigation: r,
  };
}
function Gf({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: a,
  routes: o,
  initialLocaleId: d,
  initialCollectionItemId: f,
  initialContentLocaleIdOverride: m,
  locales: h = eb,
  initialCanonicalPathVariables: _,
  preserveQueryParams: v = !1,
  LayoutTemplate: y,
  EditorBar: b,
  siteCanonicalURL: x,
  adaptLayoutToTextDirection: C,
}) {
  (Ni(),
    Zr({
      disabled: t,
      routeId: r,
      initialPathVariables: n,
      initialLocaleId: d,
      initialContentLocaleId: m,
      initialCanonicalPathVariables: _,
    }));
  let T = Pr(),
    [E, D] = Tf(),
    O = zr(`framer-route-change`),
    k = S(() => (!fE().synchronousNavigationOnDesktop || !Wn() ? p : (e) => e()), []),
    A = l(!0),
    M = l(),
    ee = l(0),
    P = l(r),
    F = l(n),
    te = l(),
    ne = l(d),
    I = Cf(t),
    { isNavigationCommitPending: re, usesCustomScrollRestoration: L } = I,
    { startNavigation: ie, cancelPendingNavigation: ae } = Wf(L),
    oe = kn(),
    se = I.scheduleScroll,
    ce = ne.current,
    le = P.current,
    ue = F.current,
    de = o[le],
    fe = de?.path;
  if (!de) throw Error(`Router cannot find route for ${le}`);
  let pe = S(() => h.find(({ id: e }) => e === tb), [h]),
    R = S(() => h.find(({ id: e }) => (ce ? e === ce : e === tb)) ?? null, [ce, h]),
    {
      contentLocale: me,
      currentCanonicalPathVariables: he,
      pageExistsInCurrentLocale: ge,
      setRouteContentState: _e,
    } = qf({
      activeLocale: R,
      currentRoute: de,
      initialCanonicalPathVariables: _,
      initialContentLocaleIdOverride: m,
      locales: h,
      routes: o,
    }),
    ve = R?.textDirection ?? `ltr`,
    z = C ? ve : `ltr`;
  j(() => {
    C && document.documentElement.setAttribute(`dir`, ve);
  }, [ve, C]);
  let ye = ei(),
    be = S(
      () => ({
        activeLocale: R,
        contentLocale: me,
        locales: h,
        setLocale: async (e) => {
          let n = ++ee.current,
            r = O({ localized: !0 });
          if ((await Zb({ priority: `user-blocking`, continueAfter: `paint` }), n !== ee.current)) {
            r.ignore?.();
            return;
          }
          let i;
          B(e) ? (i = e) : H(e) && (i = e.id);
          let a = h.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let s = P.current,
            c = o[s];
          if (!c) {
            r.ignore?.();
            return;
          }
          let l = vi(x);
          try {
            let e = await ye({
              currentLocale: R,
              nextLocale: a,
              route: c,
              routeId: s,
              defaultLocale: pe,
              pathVariables: F.current,
              preserveQueryParams: v,
              sitePrefix: l,
            });
            if (!e || n !== ee.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && l + e.path,
              { contentLocaleId: o, canonicalPathVariables: u } = await or({
                activeLocale: a,
                defaultLocale: pe,
                collectionUtilsCache: oe,
                locales: h,
                pathVariables: e.pathVariables,
                route: c,
                routeId: s,
              });
            if (n !== ee.current) {
              r.ignore?.();
              return;
            }
            ((A.current = !1),
              (ne.current = a.id),
              (M.current = i),
              (F.current = e.pathVariables),
              _e(o, u));
            let d = c.path && e.pathVariables ? mr(c.path, e.pathVariables) : c.path;
            (se({
              routeId: s,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              ie(
                () => {
                  T(s, s, () => k(D));
                },
                r,
                t
                  ? void 0
                  : i
                    ? () => {
                        af({
                          routeId: s,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: o,
                          canonicalPathVariables: u,
                        });
                      }
                    : void 0,
                !1
              ));
          } catch {
            r.ignore?.();
          }
        },
      }),
      [R, pe, me, t, D, h, v, _e, o, se, ie, T, O, k, ye, oe, x]
    ),
    xe = s(
      (e, t, n, r, i, a, s, c, l, u, d) => {
        A.current = !1;
        let f = P.current,
          p = o[e],
          m = Gt(p, n),
          h = p?.path && i ? mr(p.path, i) : p?.path;
        if (
          ((P.current = e),
          (ne.current = t),
          (F.current = i),
          (te.current = void 0),
          _e(a, s),
          (M.current = r),
          se({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: u ?? !1,
            behavior: c
              ? L
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          c)
        ) {
          (ae(), k(D));
          return;
        }
        ie(
          (t) => {
            T(f, e, () => k(D), t);
          },
          l,
          d,
          !0
        );
      },
      [D, _e, o, L, se, ie, T, k, ae]
    );
  (Qr(I, P, xe),
    c(() => {
      if (t) return;
      let e = () => {
        let e = Vr(),
          t = N.location.hash === `` ? void 0 : N.location.hash.slice(1);
        (e && Gt(o[e.routeId], e.hash) === t) ||
          Yr({
            ...(e ||
              (Wr() ?? { routeId: P.current, pathVariables: F.current, localeId: ne.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (N.addEventListener(`hashchange`, e), () => N.removeEventListener(`hashchange`, e));
    }, [t, o]));
  let Se = s(
      async (e, n, r, i, a) => {
        let s = o[e],
          c = St(s?.page) ? s.page.getStatus() : void 0,
          l = c?.hasRendered,
          u = O({ cached: l, preloaded: l ? void 0 : c?.hasLoaded }),
          d = Uf(a);
        if (
          (Zb({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await Zb({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = s?.path ?? `/`;
          for (let n of t.matchAll($b)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = Gt(s, n),
          p = F.current,
          m = ne.current;
        if (
          te.current === void 0 &&
          nf({ routeId: P.current, pathVariables: p }, { routeId: e, pathVariables: r })
        ) {
          let a = re();
          if (a) {
            let t = s?.path && r ? mr(s.path, r) : s?.path;
            se({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else ae();
          (u.ignore?.(), !a && L && xf(f, i, `scroll-to-hash-or-top`));
          let c = o[e];
          (!t &&
            c &&
            sf(
              e,
              c,
              {
                currentRoutePath: c.path,
                currentRoutePathLocalized: c.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: n,
                localeId: m,
                preserveQueryParams: v,
                siteCanonicalURL: x,
              },
              d
            ),
            !a && !L && xf(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!s) return;
        let g = o[P.current],
          _ =
            vi(x) +
            xi(s, {
              currentRoutePath: g?.path,
              currentRoutePathLocalized: g?.pathLocalized,
              currentPathVariables: p,
              hash: n,
              pathVariables: r,
              localeId: m,
              localeSlug: h.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: v,
              relative: !1,
              siteCanonicalURL: x,
            }),
          y = {};
        te.current = y;
        let { contentLocaleId: b, canonicalPathVariables: S } = await or({
          activeLocale: R,
          defaultLocale: pe,
          collectionUtilsCache: oe,
          locales: h,
          pathVariables: r,
          route: s,
          routeId: e,
        });
        te.current === y &&
          xe(
            e,
            m,
            n,
            _,
            r,
            b,
            S,
            !1,
            u,
            i,
            t
              ? void 0
              : () => {
                  (d(),
                    of(e, s, {
                      historyPath: _,
                      currentRoutePath: g?.path,
                      hash: n,
                      pathVariables: r,
                      contentLocaleId: b,
                      canonicalPathVariables: S,
                      localeId: m,
                    }));
                }
          );
      },
      [ae, o, h, xe, t, v, x, O, L, re, se, oe, pe, R]
    ),
    Ce = Lt(o),
    we = M.current,
    Te = LD(de, le, we, ue, R, f),
    Ee = A.current;
  Hf({
    activeLocale: R,
    contentLocale: me,
    currentPathVariables: ue,
    currentRoute: de,
    currentRouteId: le,
    isInitialNavigation: Ee,
    locales: h,
    siteCanonicalURL: x,
  });
  let De = S(
      () => ({
        navigate: Se,
        getRoute: Ce,
        currentRouteId: le,
        currentPathVariables: ue,
        currentCanonicalPathVariables: he,
        routes: o,
        collectionUtils: a,
        preserveQueryParams: v,
        pageviewEventData: Te,
        siteCanonicalURL: x,
        isInitialNavigation: Ee,
      }),
      [Se, Ce, le, ue, he, o, a, v, x, Te, Ee]
    ),
    Oe = fe && ue ? mr(fe, ue) : fe,
    ke = `${ce}${Oe}`,
    Ae = Qa(() => ({ ...e, display: `contents` }));
  return g(Rt, {
    api: De,
    children: g(nx.Provider, {
      value: be,
      children: g(rx.Provider, {
        value: z,
        children: g(AE, {
          children: g(pi, {
            routerRenderKey: E,
            isNavigationCommitPending: I.isNavigationCommitPending,
            children: w($d, {
              currentRoutePath: Oe,
              routerAPI: De,
              children: [
                b && g(Qd, { EditorBar: b, fast: !0 }),
                g(hE, {
                  children: w(nu, {
                    children: [
                      g(cS.Start, {}),
                      g(wf, { currentRouteId: le, remountKey: ke, scrollRestoration: I }),
                      g(uS, {
                        notFoundPage: i,
                        defaultPageStyle: e,
                        routerRenderKey: E,
                        children: g(Kf, {
                          LayoutTemplate: y,
                          webPageId: de?.abTestingVariantId ?? le,
                          style: e,
                          children: (t) =>
                            g(u, { children: ge ? Ri(de.page, t ? Ae : e) : i && Ri(i, e) }, ke),
                        }),
                      }),
                      b && g(Qd, { EditorBar: b }),
                      g(ki, {}),
                      g(cS.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function Kf({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? g(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function qf({
  activeLocale: e,
  currentRoute: t,
  initialCanonicalPathVariables: n,
  initialContentLocaleIdOverride: r,
  locales: i,
  routes: a,
}) {
  let o = l(n),
    c = l(r),
    u = c.current,
    d = !e || !t.includedLocales || t.includedLocales.includes(e.id),
    f = S(() => {
      if (!e) return null;
      let n;
      return (
        (n = d
          ? (u ?? t?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(a).find((e) => e.path && Px.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              e.id
            ]),
        n ? (i.find(({ id: e }) => e === n) ?? e) : e
      );
    }, [e, t, i, u, d, a]),
    p = s((e, t) => {
      ((c.current = e), (o.current = t));
    }, []);
  return {
    contentLocale: f,
    currentCanonicalPathVariables: o.current,
    pageExistsInCurrentLocale: d,
    setRouteContentState: p,
  };
}
function Jf(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function Yf(e) {
  return typeof e == `object` && !!e;
}
function Xf(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Yf(r)) return;
    r = r[e];
  }
  return r;
}
function Zf(e) {
  return `${e.credentials}:${e.url}`;
}
function Qf(e) {
  return B(e) && !Number.isNaN(Number(e));
}
function $f(e, t) {
  switch (e) {
    case `string`:
      return B(t) || V(t);
    case `color`:
      return B(t);
    case `boolean`:
      return ot(t);
    case `number`:
      return V(t) || Qf(t);
    case `link`:
    case `image`:
      return B(t) && Au(t, !1);
    default:
      return !1;
  }
}
function ep(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = Xf(e.data, t.resultKeyPath);
  if (lt(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!$f(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function tp(e, t) {
  if (Y.current() === Y.canvas) return !1;
  let n = Math.max(t * 1e3, $D);
  return Date.now() >= e + n;
}
function np(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    canonicalPathVariables: s,
    routes: c,
    collectionUtils: l,
    notFoundPage: u,
    isReducedMotion: d = !1,
    skipAnimations: f = !1,
    includeDataObserver: p = !1,
    localeId: m,
    locales: _,
    preserveQueryParams: v,
    EditorBar: y,
    defaultPageStyle: b,
    disableHistory: x,
    LayoutTemplate: S,
    siteCanonicalURL: C,
    adaptLayoutToTextDirection: w,
    loadSnippetsModule: T,
    initialCollectionItemId: E,
    initialContentLocaleIdOverride: D,
  } = e;
  return (
    h.useEffect(() => {
      n || RS.start();
    }, []),
    n
      ? g(ai, {
          value: r ?? `preview`,
          children: g(Pe, {
            reducedMotion: f ? `always` : d ? `user` : `never`,
            skipAnimations: f,
            children: g(On, {
              collectionUtils: l,
              children: g(iO, {
                children: g(OD.Provider, {
                  value: a,
                  children: g(Ef, {
                    loadSnippetsModule: T,
                    children: g(Gf, {
                      initialRoute: i,
                      initialPathVariables: o,
                      initialCanonicalPathVariables: s,
                      initialLocaleId: m,
                      initialCollectionItemId: E,
                      initialContentLocaleIdOverride: D,
                      routes: c,
                      collectionUtils: l,
                      notFoundPage: u,
                      locales: _,
                      defaultPageStyle: b ?? { minHeight: `100vh`, width: `auto` },
                      preserveQueryParams: v,
                      EditorBar: y,
                      disableHistory: x,
                      LayoutTemplate: S,
                      siteCanonicalURL: C,
                      adaptLayoutToTextDirection: w,
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : g(p ? bT : h.Fragment, {
          children: g(Bt, {
            routes: c,
            children: g(cT, { children: h.isValidElement(t) ? t : h.createElement(t, { key: i }) }),
          }),
        })
  );
}
function rp(e, t) {
  let n = zt(),
    { activeLocale: r } = sr(),
    i = yd();
  return si(() => {
    let t = [],
      a = (e) => {
        if (e)
          return B(e) || Eu(e)
            ? Pd(e, n, void 0, void 0, r, o)
            : Pd(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function ip(e) {
  return {
    trace(...t) {
      return eC.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return eC.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return eC.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return eC.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return eC.getLogger(e)?.error(...t);
    },
    get enabled() {
      return eC.getLogger(e) !== void 0;
    },
  };
}
function ap() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function op() {
  return oO.priority;
}
function sp(e) {
  let t = oO;
  return (
    (oO = e),
    {
      [ap()]() {
        oO = t;
      },
    }
  );
}
function cp(e = oO.priority, t = oO.canYield) {
  if (!(!t || e === void 0)) return Zb({ batch: !0, priority: Jn(e) });
}
function lp(e) {
  var t = [];
  try {
    je(t, sp({ priority: oO.priority, canYield: !1 }));
    let n = e.next();
    return (U(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    Fe(t, n, r);
  }
}
async function up(e, t, n = oO.priority, r = oO.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (je(o, sp(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      Fe(o, s, c);
    }
  }
  for (; !a.done;) {
    var l = [];
    try {
      let t = await a.value,
        o = cp(n, r);
      (o && (await o), je(l, sp(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      Fe(l, u, d);
    }
  }
  return a.value;
}
function dp(e, t = oO.priority, n = oO.canYield) {
  var r = [];
  try {
    je(r, sp({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : up(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    Fe(r, i, a);
  }
}
function* fp(e, t = oO.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (pt(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            up(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* pp(e, t = oO.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = cp(t);
    r && (yield r);
    let o = e[a];
    if (pt(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            up(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function mp(e) {
  return _p(e) || bp(e);
}
function hp(e) {
  return st(e) && e.every(H);
}
function gp(e) {
  return H(e) && at(e.read) && at(e.preload);
}
function _p(e) {
  return hp(e) || gp(e);
}
function vp(e) {
  return H(e) && H(e.schema);
}
function yp(e) {
  return H(e) && H(e.collectionByLocaleId);
}
function bp(e) {
  return vp(e) || yp(e);
}
function xp(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = Xp(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Sp(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => sO.cast(e, t.definition)) };
  }
  return null;
}
function Cp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function wp(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Tp(e) {
  return wp(e)?.value ?? !1;
}
function Ep(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Dp(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Op(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function kp(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return ft(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function Ap(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function jp(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Mp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Np(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function Pp(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Fp(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function Ip(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Lp(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Rp(e) {
  return Lp(e)?.value ?? null;
}
function zp(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = Xp(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function Bp(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = sO.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function Vp(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Hp(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function Up(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Wp(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function Gp(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Kp(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function qp(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Jp(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function Yp(e) {
  return Jp(e)?.value ?? null;
}
function Xp(e, t, n) {
  if (ut(e) || ut(t)) return (U(e === t), 0);
  switch (e.type) {
    case `array`:
      return (U(e.type === t.type), xp(e, t, n));
    case `boolean`:
      return (U(e.type === t.type), Cp(e, t));
    case `color`:
      return (U(e.type === t.type), Ep(e, t));
    case `date`:
      return (U(e.type === t.type), Op(e, t));
    case `enum`:
      return (U(e.type === t.type), Ap(e, t));
    case `file`:
      return (U(e.type === t.type), Mp(e, t));
    case `link`:
      return (U(e.type === t.type), Pp(e, t));
    case `number`:
      return (U(e.type === t.type), Ip(e, t));
    case `object`:
      return (U(e.type === t.type), zp(e, t, n));
    case `responsiveimage`:
      return (U(e.type === t.type), Vp(e, t));
    case `richtext`:
      return (U(e.type === t.type), Up(e, t));
    case `vectorsetitem`:
      return (U(e.type === t.type), Gp(e, t));
    case `string`:
      return (U(e.type === t.type), qp(e, t, n));
    default:
      W(e);
  }
}
async function Zp(e, t) {
  return gp(e) ? (await e.preload(t), e.read(t)) : e;
}
function Qp(e) {
  return e.includes(fO);
}
function $p(e) {
  if (!bp(e) || !e.id) return;
  let t = uO.get(e.id);
  if (!t) return (uO.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function em(e) {
  let t = $p(e);
  if (t) return t;
  let n = dO.get(e);
  if (n) return n;
  let r = `${fO}${Math.random().toString(16).slice(2)}`;
  return (dO.set(e, r), r);
}
function tm(e, t) {
  if (_p(e)) {
    let n = em(e) + (t?.id ?? tb),
      r = pO.get(n);
    if (r) return r;
    let i = new lO(e, t);
    return (pO.set(n, i), i);
  }
  if (vp(e)) return e;
  if (yp(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  W(e, `Unsupported collection type`);
}
function nm(e) {
  return e;
}
function rm(e) {
  return at(e.getHash);
}
function q(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (H(r) && rm(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return nm(`${n})`);
}
function im(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function am(e) {
  if (e !== void 0) return Jn(e);
}
function om(e, t) {
  return { collectionId: em(e), pointer: t };
}
function sm(e) {
  return H(e) && B(e.collectionId);
}
function cm(e, t) {
  return { collectionId: em(e), pointer: t };
}
function lm(e) {
  return H(e) && B(e.collectionId);
}
function um(e, t) {
  let n = new Map();
  function r(e) {
    if (H(e))
      if (e.type === `Collection` && mp(e.data)) {
        let r = tm(e.data, t),
          i = em(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (st(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function dm(e) {
  return e;
}
function fm(e) {
  return e;
}
function pm(e) {
  return e;
}
function mm() {
  return 25;
}
function hm() {
  return 12500;
}
function gm(e) {
  return Array(e).fill({ type: `All` });
}
function _m(e) {
  return e;
}
function vm(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new bk(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function ym(e) {
  let t = new Set();
  if (!e) return t;
  vm(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (vm(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function bm(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) bm(n, t);
      return;
    case `object`:
      for (let n in e.value) bm(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function xm(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Sm(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Cm(e) {
  return `${e.functionName}(${e.arguments.map((e) => Om(e)).join(`, `)})`;
}
function wm(e) {
  let t = `CASE`;
  e.value && (t += ` ${Om(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Om(n.when)} THEN ${Om(n.then)}`;
  return (e.else && (t += ` ELSE ${Om(e.else)}`), (t += ` END`), t);
}
function Tm(e) {
  let t = Om(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function Em(e) {
  let t = Om(e.left),
    n = Om(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Dm(e) {
  return `CAST(${Om(e.value)} as ${e.dataType})`;
}
function Om(e) {
  switch (e.type) {
    case `Identifier`:
      return xm(e);
    case `LiteralValue`:
      return Sm(e);
    case `FunctionCall`:
      return Cm(e);
    case `Case`:
      return wm(e);
    case `UnaryOperation`:
      return Tm(e);
    case `BinaryOperation`:
      return Em(e);
    case `TypeCast`:
      return Dm(e);
    case `Select`:
      return `${Nm(e)}`;
    default:
      W(e);
  }
}
function km(e) {
  return vp(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Am(e) {
  let t = `${jm(e.left)} LEFT JOIN ${jm(e.right)}`;
  return (e.constraint && (t += ` ON ${Om(e.constraint)}`), t);
}
function jm(e) {
  switch (e.type) {
    case `Collection`:
      return km(e);
    case `LeftJoin`:
      return Am(e);
    default:
      W(e);
  }
}
function Mm(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function Nm(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Om(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${jm(e.from)}`),
    e.where && (t += ` WHERE ${Om(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Om(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Om(e.limit)}`),
    e.offset && (t += ` OFFSET ${Om(e.offset)}`),
    Mm(t)
  );
}
function Pm(e) {
  return H(e) && e.type === `Collection`;
}
function Fm(e, t) {
  return Pm(t) && mp(t.data) ? em(t.data) : t;
}
function Im(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, Fm) + n;
}
function Lm(e) {
  let { activeLocale: t } = sr();
  return Lk.get(e, t).use();
}
function Rm(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(lt(e) || H(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function zm(e) {
  let t = l(e);
  return (
    f(() => {
      t.current = e;
    }, [e]),
    ci((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function Bm(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function Vm() {
  return new Set();
}
function Hm(e) {
  let t = Qa(Vm),
    n = Qa(Vm);
  return (
    dc(() => () => Bm(n, t)),
    c(() => () => Bm(n, t), []),
    c(() => {
      Bm(n, t);
    }, [e]),
    l({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function Um(e, t, n) {
  return h.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function Wm(e) {
  for (let [t, n] of Object.entries(e)) if (bb.matchMedia(n).matches) return t;
}
function Gm(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && bb.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function Km(e, n, r = !0) {
  let i = t(aT),
    a = no(),
    o = Ja(),
    u = zn() && (!a || o),
    d = l(u ? (Wm(n) ?? e) : e),
    f = l(r && i ? e : d.current),
    m = ys(),
    h = ge(),
    g = s(
      (e) => {
        if (e !== d.current || e !== f.current) {
          let t = function () {
            ((d.current = f.current = e),
              p(() => {
                m();
              }));
          };
          a
            ? t()
            : h(() => {
                t();
              });
        }
      },
      [h, m, a]
    );
  return (
    Cx(() => {
      if (a) {
        if (o) {
          g(Wm(n) ?? e);
          return;
        }
        g(e);
      }
    }, [e, o, a, n, g]),
    Cx(() => {
      !r || i !== !0 || g(d.current);
    }, []),
    c(() => {
      if (!u || o) return;
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = bb.matchMedia(r),
          i = (e) => {
            e.matches && g(t);
          };
        (qm(n, i), e.push([n, i]));
      }
      return () => e.forEach(([e, t]) => Jm(e, t));
    }, [o, n, g, u]),
    [d.current, f.current]
  );
}
function qm(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Jm(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function Ym(e) {
  setTimeout(e, 1);
}
function Xm(e) {
  let t = new Set(),
    n = Gm(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Zm(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (zy ? bb.requestIdleCallback : Ym)(() => {
    document.querySelector(Rk)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Zm(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Qm(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Zm(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Qm(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function $m(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function eh(e, t) {
  if (to()) return;
  let n = h.useRef(!0),
    r = h.useRef(t);
  (dc((t, i) => {
    let a = t && !i;
    if (!n.current && a) {
      let t = $m(r.current, e);
      t && t();
    }
    n.current = a;
  }, []),
    h.useEffect(() => {
      if (n.current) {
        let t = $m(r.current, e);
        t && t();
      }
    }, [e]));
}
function th(e) {
  return H(e) && zk in e && e.page !== void 0;
}
function nh(e, t) {
  return `${e}-${t}`;
}
function rh(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (U(r !== void 0, `nextVariant should be defined`), r);
}
function ih(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function ah(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function oh(e, t) {
  return t[e] || `framer-v-${e}`;
}
function sh(e, t, n) {
  return e && n.has(e) ? e : t;
}
function ch() {
  let e = l(),
    t = l(),
    n = s(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    c(
      () => () => {
        n();
      },
      [n]
    ),
    s(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function lh() {
  let e = l(),
    n = l(!1),
    r = l(),
    i = t(Hw);
  return (
    c(
      () => () => {
        (e.current?.(), (r.current = void 0), (e.current = void 0));
      },
      []
    ),
    s(
      (t, a) => {
        if (!a?.current || n.current) {
          t();
          return;
        }
        if (((r.current = t), e.current)) return;
        let o = !1;
        e.current = rc(i, `undefined`, a.current, null, (e) => {
          ((n.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), n.current && r.current?.());
              })));
        });
      },
      [i]
    )
  );
}
function uh(e) {
  let t = ch(),
    n = lh();
  return s(
    (r, i = !1) => {
      if (Ry) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function dh() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (Hk = () => {
        (e(), (t = void 0));
      }));
  });
}
function fh(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (Vk = dh()));
}
function ph() {
  (performance.mark(`click-received-listener`), (Vk = void 0), Hk?.(), (Hk = void 0));
}
function mh(e = !1) {
  c(() => {
    e &&
      (document.addEventListener(`pointerup`, fh, !0),
      document.__proto__.addEventListener.call(document, `click`, ph, !0));
  }, [e]);
}
function hh({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: c,
}) {
  let u = ys(),
    d = Ou(),
    f = Qa(() => new Set(i));
  mh(fE().yieldOnTap);
  let m = uh(c),
    h = l({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: sh(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    g = s((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = h.current,
        o = sh(e, a, f),
        s = ah(i?.[o], t, n, !1, r);
      return [o, s ? nh(o, s) : void 0];
    }, []),
    _ = s(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = g(r);
        if (o === e && s === t) return;
        (a && (h.current.isError = !1),
          (h.current.baseVariant = o || n),
          (h.current.gestureVariant = s));
        let c = fE().yieldOnTap && h.current.isPressedHasUpdated;
        (c &&
          Vk &&
          (performance.mark(`wait-for-tap-start`),
          await Vk,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await Zb({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: l,
          isPressed: d,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: _,
        } = h.current;
        if (l || f || d || _) {
          p(u);
          return;
        }
        m(() => p(u), i);
      },
      [g, u, m]
    ),
    v = s(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        let r = t !== h.current.isPressed,
          i = e !== h.current.isHovered;
        (e !== void 0 && (h.current.isHovered = e),
          t !== void 0 && (h.current.isPressed = t),
          n !== void 0 && (h.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = h.current;
        ((h.current.isPressedHasUpdated = r),
          (h.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1));
      },
      [_]
    ),
    y = s(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = h.current,
          o = e === Bk ? rh(r || [], i || n) : e;
        _(i, a, n, o, t, !0);
      },
      [_]
    ),
    b = s(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), m(() => p(u), !0));
    }, [u, m]);
  if (e !== h.current.lastVariant) {
    let [t, n] = g(e);
    ((h.current.lastVariant = t),
      (t !== h.current.baseVariant || n !== h.current.gestureVariant) &&
        ((h.current.baseVariant = t), (h.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: C,
      defaultVariant: w,
      enabledGestures: T,
      isHovered: E,
      isPressed: D,
      isError: O,
      loadedBaseVariant: k,
    } = h.current,
    A = Um(h.current.baseVariant, h.current.gestureVariant, a);
  return S(() => {
    let e = [];
    x !== w && e.push(x);
    let t = T?.[x]?.loading,
      n = !O && !d && !!t && !k[x],
      r = n ? nh(x, `loading`) : C;
    r && e.push(r);
    let i = T?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: ih(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: A,
        gestureHandlers: a,
        classNames: fl(oh(x, o), ah(i, E, D, n, O)),
      }
    );
  }, [x, C, E, D, k, A, y, w, T, v, b, o]);
}
function gh(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!ou()) return r(e);
  let a = _h(e, r),
    o = !1;
  function s(r, s) {
    let c = lu(),
      { disableCustomCode: l } = fE();
    if (l) return g(e, { ...r, ref: s });
    if (_u(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? g(xx.Provider, {
            value: n,
            children: g(su, {
              getErrorMessage: mu.bind(null, t, n),
              fallback: g(e, { ...r, ref: s }),
              children: g(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (au(a.error), au(mu(t, n)), iu(a.error), !0)), g(e, { ...r, ref: s }));
    if (a.status === `success`)
      return g(xx.Provider, { value: n, children: g(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return h.forwardRef(s);
}
function _h(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function vh(e) {
  let t = [];
  return (
    A.forEach(e, (e) => {
      v(e) && e.type === u ? t.push(...vh(e.props.children)) : e && t.push(e);
    }),
    t
  );
}
function yh(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function bh(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = yh(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[Ye(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function xh(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = yh(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[Ye(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c === e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function Sh() {
  let e = t(Uk);
  return (Ih(!!e, `useTicker must be used within a Ticker component`), e);
}
function Ch() {
  let e = t(Wk);
  return (Ih(!!e, `useTickerItem must be used within a TickerItem`), e);
}
function wh(e, t) {
  return (t?.offsetWidth ?? N.innerWidth) - (e.offsetLeft + e.offsetWidth);
}
function Th(e, t) {
  return e === `y` ? qk : t === `ltr` ? Kk : Jk;
}
function Eh({
  children: e,
  offset: t,
  axis: n,
  listSize: r = 0,
  numItems: i = 0,
  itemIndex: a,
  cloneIndex: o,
  bounds: s,
  alignItems: c,
  reproject: l = !0,
  size: u = `auto`,
  safeMargin: d,
}) {
  let { start: f, end: p } = s,
    { visibleLength: m, direction: h, inset: _ } = Sh(),
    { sign: v } = Th(n, h),
    y = ke(() => {
      if (!l) return 0;
      let e = t.get();
      if ((!f && !p) || !r) return 0;
      if (e * v + s.end <= -_ - d) return r * v;
      if (d > 0) {
        let t = m - d - _;
        if (e * v + s.start >= t) return -r * v;
      }
      return 0;
    }),
    b = ke(() => {
      let e = t.get(),
        n = y.get();
      return (!f && !p) || !r ? 0 : e * v + f + n * v;
    }),
    x =
      o === void 0
        ? { "aria-hidden": !1, "aria-posinset": a + 1, "aria-setsize": i }
        : { "aria-hidden": !0 },
    S = u === `fill`,
    C = c === `stretch` ? `100%` : `fit-content`,
    w = {
      className: o === void 0 ? `ticker-item` : `clone-item`,
      style: {
        flexGrow: 0,
        flexShrink: 0,
        position: `relative`,
        flexBasis: u === `fill` ? `100%` : void 0,
        display: S ? `grid` : void 0,
        gridTemplateColumns: S ? `1fr` : void 0,
        gridTemplateRows: S ? `1fr` : void 0,
        minWidth: S ? 0 : void 0,
        minHeight: S ? 0 : void 0,
        height: n === `x` ? C : void 0,
        width: n === `y` ? C : void 0,
        x: n === `x` ? y : 0,
        y: n === `y` ? y : 0,
      },
      ...x,
    };
  return g(Wk.Provider, {
    value: { start: f, end: p, offset: b, projection: y, itemIndex: a, cloneIndex: o, props: w },
    children: u === `manual` ? e : g(Dh, { children: e }),
  });
}
function Dh({ children: e }) {
  let { props: t } = Ch();
  return g(he.li, { ...t, children: e });
}
function Oh(e, t, n, r, i) {
  let a = l(!1);
  c(() => {
    let o = e.current;
    if (!o) return;
    let s = !1,
      c = new AbortController(),
      l = { signal: c.signal },
      u = { ...l, capture: !0 },
      d = t === `x` ? `scrollLeft` : `scrollTop`,
      f = t === `x` ? `offsetLeft` : `offsetTop`,
      p = t === `x` ? `ArrowLeft` : `ArrowUp`,
      m = t === `x` ? `ArrowRight` : `ArrowDown`,
      h = [],
      g = 0,
      _ = () => {
        let e = h[g];
        e &&
          (e.focus({ preventScroll: !0 }),
          n.set(-e[f]),
          (o[d] = 0),
          Me.render(() => {
            o[d] = 0;
          }));
      },
      v = (e) => {
        if (e.key === `Tab`) {
          (e.preventDefault(), x());
          let t = Array.from(
            document.querySelectorAll(
              `a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`
            )
          ).filter(Ah);
          t.sort(kh);
          let n = t[e.shiftKey ? 0 : t.length - 1],
            r = e.shiftKey ? t.length - 1 : 0;
          if (o.contains(n)) {
            t[r].focus();
            return;
          } else {
            let n = t.indexOf(h[g]),
              r = e.shiftKey ? -1 : 1;
            for (let e = n; e < t.length && e >= 0; e += r) {
              let n = t[e];
              if (!o.contains(n)) {
                n.focus();
                return;
              }
            }
          }
          return;
        } else e.key === p ? g-- : e.key === m && g++;
        ((g = Ye(0, h.length, g)), _());
      },
      y = () => {
        a.current ||
          ((h = Array.from(
            o.querySelectorAll(
              `.ticker-item a, .ticker-item button, .ticker-item input, .ticker-item textarea, .ticker-item select, .ticker-item [tabindex]:not([tabindex="-1"]), .ticker-item [contenteditable="true"]`
            )
          ).filter(Ah)),
          (g = 0),
          h.length &&
            (i(!0),
            (a.current = !0),
            _(),
            N.addEventListener(`focus`, b, u),
            N.addEventListener(`blur`, b, u),
            o.addEventListener(`keydown`, v, l)));
      },
      b = (e) => {
        (!e.target || !(e.target instanceof HTMLElement) || !o.contains(e.target)) && x();
      },
      x = () => {
        a.current &&
          ((a.current = !1),
          i(!1),
          r.set(n.get()),
          N.removeEventListener(`focus`, b),
          N.removeEventListener(`blur`, b),
          o.removeEventListener(`keydown`, v));
      },
      S = (e) => {
        let { target: t } = e;
        Ah(t) && (a.current || y());
      },
      C = () => {
        s || ((s = !0), o.addEventListener(`focus`, S, u), N.addEventListener(`pointermove`, w, l));
      },
      w = () => {
        s &&
          ((s = !1),
          o.removeEventListener(`focus`, S, !0),
          N.removeEventListener(`pointermove`, w, l));
      };
    return (
      N.addEventListener(`keydown`, C, l),
      o.addEventListener(
        `pointerdown`,
        (e) => {
          let t = e.target.closest(`[aria-hidden="true"]`);
          t && t.removeAttribute(`aria-hidden`);
        },
        l
      ),
      o.addEventListener(
        `scroll`,
        () => {
          ((o.scrollLeft = 0), (o.scrollTop = 0));
        },
        l
      ),
      () => {
        (c.abort(), x());
      }
    );
  }, []);
}
function kh(e, t) {
  return e.tabIndex >= 1 && t.tabIndex >= 1
    ? e.tabIndex - t.tabIndex
    : e.tabIndex >= 1 && t.tabIndex <= 0
      ? -1
      : +(t.tabIndex >= 1 && e.tabIndex <= 0);
}
function Ah(e) {
  return e instanceof HTMLElement;
}
function jh(e) {
  return e.end - e.start;
}
function Mh(e) {
  return e[e.length - 1].end - e[0].start;
}
function Nh(e, t, n) {
  let r = Mh(t),
    i = Math.max(...t.map(jh)),
    a = 0,
    o = 0;
  for (; o < e;) ((o = (r + n) * (a + 1) - i), a++);
  return Math.max(a - 1, 0);
}
function Ph(
  {
    items: e,
    velocity: t = 50,
    hoverFactor: n = 1,
    gap: r = 10,
    axis: a = `x`,
    align: o = `center`,
    offset: c,
    isStatic: u = !1,
    itemSize: d = `auto`,
    overflow: f = !1,
    loop: p = !0,
    children: m,
    as: h = `div`,
    snap: _,
    safeMargin: v = 0,
    fade: y = 0,
    fadeTransition: b,
    pageTransition: x,
    ...C
  },
  w
) {
  let T = l(null),
    E = F(w, T),
    D = l(null),
    [O, k] = i({
      direction: `ltr`,
      visibleLength: 0,
      inset: 0,
      totalItemLength: 0,
      containerLength: 0,
      itemPositions: [],
      isMeasured: !1,
      maxInset: null,
    }),
    A = Yk[o] || o,
    { sign: j } = Th(a, O.direction);
  if (u) {
    let t = L(0);
    return g(Uk.Provider, {
      value: { ...O, gap: r, clampOffset: ne, offset: t, renderedOffset: t },
      children: g(Fh, {
        containerProps: C,
        containerRef: E,
        children: m,
        gap: r,
        axis: a,
        alignItems: A,
        offset: t,
        renderedOffset: t,
        items: e,
        itemSize: d,
        state: O,
        overflow: f,
        safeMargin: v,
        isStatic: !0,
        as: h,
        fade: y,
        sign: j,
      }),
    });
  }
  let [M, ee] = i(!1),
    te = L(1),
    I = L(0);
  c ??= I;
  let re = ke(() =>
      O.direction === `rtl` && a === `x`
        ? Ye(O.totalItemLength + r + O.inset, O.inset, c.get())
        : Ye(-O.totalItemLength - r - O.inset, -O.inset, c.get())
    ),
    ie = L(0),
    ae = M ? ie : p ? re : c,
    oe = _e(T, { margin: `100px` }),
    se = qe(),
    ce = oe && se,
    le = ye(),
    ue = () => {
      if (!T.current || !D.current) return;
      let e = N.getComputedStyle(T.current).direction,
        { measureItem: t, lengthProp: n, viewportLengthProp: r, getCumulativeInset: i } = Th(a, e),
        o = a === `x` ? `paddingLeft` : `paddingTop`,
        s = a === `x` ? `paddingRight` : `paddingBottom`,
        c = T.current,
        l = D.current.querySelectorAll(`.ticker-item`);
      if (!l.length) return;
      let u = !1,
        d = [];
      for (let e = 0; e < l.length; e++) {
        let n = t(l[e], c);
        d.push(n);
        let r = O.itemPositions[e];
        (!r || n.start !== r.start || n.end !== r.end) && (u = !0);
      }
      let m = Math.min(c[n], N[r]),
        h = f ? N[r] : m;
      v > 0 && (h += v * 2);
      let g = Mh(d),
        _ = N.getComputedStyle(c),
        y = parseInt(_[o] ?? 0),
        b = parseInt(_[s] ?? 0),
        x = f ? i(l[0]) : y,
        S = p === !1 ? Math.max(0, g - m + y + b) : null;
      (h !== O.visibleLength ||
        g !== O.totalItemLength ||
        x !== O.inset ||
        O.itemPositions.length !== d.length ||
        u) &&
        k({
          direction: e,
          visibleLength: h,
          itemPositions: d,
          totalItemLength: g,
          inset: x,
          containerLength: m,
          maxInset: S,
          isMeasured: !0,
        });
    };
  ve(() => {
    if (!ce || !T.current) return;
    ue();
    let e = f ? P(ue) : void 0,
      t = P(T.current, ue);
    return () => {
      (e?.(), t());
    };
  }, [e, ce, f]);
  let de = O.totalItemLength > 0;
  it(
    de && ce && c === I && !le
      ? (e, n) => {
          let r = (n / 1e3) * (t * j * te.get());
          c.set(c.get() - r);
        }
      : ne
  );
  let fe = S(
      () => (!de || !O.visibleLength ? 0 : Nh(O.visibleLength, O.itemPositions, r)),
      [de, O]
    ),
    pe = O.totalItemLength === 0 ? 0 : (O.totalItemLength + r) * (fe + 1),
    R = [];
  if (p)
    for (let t = 0; t < fe; t++) {
      let n = [];
      e.forEach((i, o) => {
        let s = O.itemPositions[o],
          c = (O.totalItemLength + r) * (t + 1),
          l = s ? { start: s.start + c, end: s.end + c } : Zk;
        n.push(
          g(
            Eh,
            {
              offset: ae,
              axis: a,
              listSize: pe,
              itemIndex: o,
              cloneIndex: o,
              bounds: l,
              alignItems: A,
              size: d,
              safeMargin: v,
              numItems: e.length,
              children: i,
            },
            `clone-${t}-${o}`
          )
        );
      });
      let i = `ticker-group-${t}`;
      R.push(g(Je, { id: i, children: n }, i));
    }
  Oh(T, a, ie, c, ee);
  let me = s((e) => (O.maxInset === null ? e : Ne(-O.maxInset, 0, e)), [O.maxInset]);
  return g(Uk.Provider, {
    value: { ...O, gap: r, clampOffset: me, offset: c, renderedOffset: ae },
    children: g(Fh, {
      containerProps: C,
      children: m,
      containerRef: E,
      listRef: D,
      gap: r,
      axis: a,
      alignItems: A,
      isMeasured: de,
      isInView: ce,
      offset: c,
      renderedOffset: ae,
      items: e,
      itemSize: d,
      clonedItems: R,
      clampOffset: me,
      snap: _,
      safeMargin: v,
      onPointerEnter: () => {
        Ae(te, n);
      },
      onPointerLeave: () => {
        Ae(te, 1);
      },
      totalListSize: pe,
      state: O,
      overflow: f,
      loop: p,
      as: h,
      fade: y,
      sign: j,
      fadeTransition: b,
      pageTransition: x,
    }),
  });
}
function Fh({
  children: e,
  containerProps: t,
  containerRef: n,
  listRef: r,
  gap: i,
  axis: a,
  alignItems: o,
  isMeasured: s,
  isInView: c,
  isStatic: u,
  items: d,
  offset: f,
  clonedItems: p,
  clampOffset: m,
  renderedOffset: h,
  onPointerEnter: _,
  onPointerLeave: v,
  totalListSize: y,
  itemSize: b,
  overflow: x,
  state: C,
  safeMargin: T,
  snap: E,
  loop: O,
  as: k,
  fade: A,
  sign: j,
  fadeTransition: M = eA,
  pageTransition: N,
}) {
  let ee = S(() => he.create(k), [k]),
    P = {},
    { maxInset: F } = C;
  F !== null &&
    (P =
      a === `x`
        ? j > 0
          ? { left: F * -1, right: 0 }
          : { right: F, left: 0 }
        : { top: F * -1, bottom: 0 });
  let {
      drag: te,
      _dragX: ne,
      _dragY: I,
      dragMomentum: re = !1,
      onDragEnd: ie,
      onPointerDown: ae,
      ...oe
    } = t,
    ce = a === `x` ? ne : I,
    le = l(null),
    ue = () => {
      le.current &&= (le.current.stop(), null);
    };
  !ie &&
    te &&
    ce &&
    ((ae = () => {
      (ce.jump(f.get()), ue());
    }),
    (ie = (e, { velocity: t }) => {
      let n = f.get();
      (ue(),
        Me.postRender(() => {
          let e = n + t[a] * (E ? 0.3 : 0.8);
          if (E)
            if (t[a] < 0) e = -bh(-n, C.itemPositions, i, -e);
            else if (t[a] > 0) e = -xh(-n, C.itemPositions, i, -e, C.containerLength);
            else {
              let t = -bh(-n, C.itemPositions, i, -n),
                r = -xh(-n, C.itemPositions, i, -n, C.containerLength);
              e = Math.abs(n - t) < Math.abs(n - r) ? t : r;
            }
          let r = O
            ? {}
            : j > 0
              ? { max: 0, min: P[a === `x` ? `left` : `top`] }
              : { min: 0, max: P.right };
          le.current = Ae(
            ce,
            m(e * j) * j,
            E
              ? N
              : {
                  type: `inertia`,
                  velocity: t[a],
                  modifyTarget: () => e,
                  bounceDamping: 40,
                  bounceStiffness: 400,
                  ...r,
                }
          );
        }));
    }));
  let de = L(+!O),
    fe = L(0),
    pe = Th(a, C.direction),
    R = typeof A == `number` ? `px` : ``,
    me = ke(
      () =>
        `linear-gradient(to ${pe.direction}, rgba(0,0,0,${de.get()}) 0px, black ${A}${R}, black calc(100% - ${A}${R}), rgba(0,0,0,${fe.get()}) 100%)`
    ),
    ge = A ? { maskImage: me, WebkitMaskImage: me } : {},
    _e = l({ start: !0, end: !1 });
  return (
    se(h, `change`, (e) => {
      if (F === null) return;
      let t = F * -1;
      ((e *= j),
        e < 0
          ? _e.current.start && (Ae(de, 0, M), (_e.current.start = !1))
          : _e.current.start || (Ae(de, 1, M), (_e.current.start = !0)),
        e > t
          ? _e.current.end && (Ae(fe, 0, M), (_e.current.end = !1))
          : _e.current.end || (Ae(fe, 1, M), (_e.current.end = !0)));
    }),
    w(D, {
      children: [
        g(ee, {
          ...oe,
          ref: n,
          style: {
            overflowX: !x && a === `x` ? `clip` : void 0,
            overflowY: !x && a === `y` ? `clip` : void 0,
            ...Qk,
            ...t.style,
            ...ge,
          },
          onPointerEnter: _,
          onPointerLeave: v,
          drag: te,
          _dragX: ne,
          _dragY: I,
          dragConstraints: P,
          dragMomentum: re,
          onPointerDown: ae,
          onDragEnd: ie,
          children: w(he.ul, {
            ref: r,
            style: {
              ...$k,
              flexDirection: a === `x` ? `row` : `column`,
              gap: `${i}px`,
              x: a === `x` ? h : 0,
              y: a === `y` ? h : 0,
              opacity: s || u ? 1 : 0,
              alignItems: o,
              willChange: s && c ? `transform` : void 0,
              width: `100%`,
              height: `100%`,
              maxHeight: `100%`,
              maxWidth: `100%`,
            },
            children: [
              d.map((e, t) =>
                g(
                  Eh,
                  {
                    axis: a,
                    offset: h,
                    listSize: y,
                    itemIndex: t,
                    bounds: C.itemPositions[t] ?? Zk,
                    alignItems: o,
                    size: b,
                    reproject: O,
                    safeMargin: T,
                    numItems: d.length,
                    children: e,
                  },
                  `original-` + t
                )
              ),
              p || null,
            ],
          }),
        }),
        ` `,
        e,
      ],
    })
  );
}
function Ih(e, t) {
  if (!e) throw Error(t);
}
function Lh(e, t) {
  if (G(e)) return e;
  if (!B(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0];
  if (t === `x` && i) return Rh(parseInt(i));
  if (t === `y` && r) return Rh(parseInt(r));
}
function Rh(e) {
  return Number.isNaN(e) ? void 0 : e;
}
function zh(e) {
  return typeof HTMLVideoElement < `u` && e instanceof HTMLVideoElement;
}
function Bh(e) {
  if (typeof ImageBitmap < `u` && e instanceof ImageBitmap) {
    e.close();
    return;
  }
  zh(e) && (e.pause(), e.removeAttribute(`src`), e.load());
}
function Vh(e) {
  for (let t of Object.values(e)) t.type === `sampler2D` && Bh(t.value);
}
function Hh(e, t) {
  return new Promise((n, r) => {
    let i = document.createElement(`video`);
    ((i.crossOrigin = `anonymous`),
      (i.muted = !0),
      (i.loop = !0),
      i.setAttribute(`playsinline`, ``),
      (i.preload = `auto`));
    let a = `Video texture load aborted`;
    if (t?.aborted) {
      (Bh(i), r(Error(a)));
      return;
    }
    let o = () => u(a),
      s = () => u(`Failed to load video texture from "${e}"`),
      c = N.setTimeout(() => u(`Timed out loading video texture from "${e}"`), cA);
    function l() {
      (N.clearTimeout(c), t?.removeEventListener(`abort`, o), i.removeEventListener(`error`, s));
    }
    function u(e) {
      (l(), Bh(i), r(Error(e)));
    }
    (t?.addEventListener(`abort`, o, { once: !0 }),
      i.addEventListener(
        `loadeddata`,
        () => {
          (l(), n(i));
        },
        { once: !0 }
      ),
      i.addEventListener(`error`, s, { once: !0 }),
      (i.src = e));
  });
}
function Uh(e, t) {
  let n = e.createBuffer();
  if (!n) throw Error(`Failed to create buffer`);
  return (e.bindBuffer(e.ARRAY_BUFFER, n), e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), n);
}
function Wh(e, t, n, r) {
  let i = e.getAttribLocation(t, `a_position`);
  i >= 0 &&
    (e.bindBuffer(e.ARRAY_BUFFER, n),
    e.enableVertexAttribArray(i),
    e.vertexAttribPointer(i, 2, e.FLOAT, !1, 0, 0));
  let a = e.getAttribLocation(t, `a_texCoord`);
  a >= 0 &&
    (e.bindBuffer(e.ARRAY_BUFFER, r),
    e.enableVertexAttribArray(a),
    e.vertexAttribPointer(a, 2, e.FLOAT, !1, 0, 0));
}
function Gh(e, t) {
  return {
    [dA.time.name]: e.getUniformLocation(t, dA.time.name),
    [dA.resolution.name]: e.getUniformLocation(t, dA.resolution.name),
    [dA.deltaTime.name]: e.getUniformLocation(t, dA.deltaTime.name),
    [dA.pixelRatio.name]: e.getUniformLocation(t, dA.pixelRatio.name),
    [dA.mousePosition.name]: e.getUniformLocation(t, dA.mousePosition.name),
    [dA.mousePointerDown.name]: e.getUniformLocation(t, dA.mousePointerDown.name),
    [dA.mouseHover.name]: e.getUniformLocation(t, dA.mouseHover.name),
  };
}
function Kh(e, t) {
  let n = e.createTexture();
  if (!n) throw Error(`Failed to create buffer texture`);
  return (
    e.bindTexture(e.TEXTURE_2D, n),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
    n
  );
}
function qh(e, t) {
  let n = e.createFramebuffer();
  if (!n) throw Error(`Failed to create buffer framebuffer`);
  return (
    e.bindFramebuffer(e.FRAMEBUFFER, n),
    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0),
    n
  );
}
function Jh(e, t, n) {
  let r = e.checkFramebufferStatus(e.FRAMEBUFFER);
  if (r !== e.FRAMEBUFFER_COMPLETE)
    throw Error(
      `Shader buffer "${t}" framebuffer is incomplete (format: "${n}", status: 0x${r.toString(16)}).`
    );
}
function Yh(e, t) {
  switch (t) {
    case `rgba8`:
      return { internalFormat: e.RGBA8, uploadFormat: e.RGBA, pixelType: e.UNSIGNED_BYTE };
    case `r8`:
      return { internalFormat: e.R8, uploadFormat: e.RED, pixelType: e.UNSIGNED_BYTE };
    case `rg16f`:
      return { internalFormat: e.RG16F, uploadFormat: e.RG, pixelType: e.HALF_FLOAT };
    case `rgba16f`:
      return { internalFormat: e.RGBA16F, uploadFormat: e.RGBA, pixelType: e.HALF_FLOAT };
    case `rgba32f`:
      return { internalFormat: e.RGBA32F, uploadFormat: e.RGBA, pixelType: e.FLOAT };
  }
}
function Xh(e) {
  return e === `rg16f` || e === `rgba16f` || e === `rgba32f`;
}
function Zh(e) {
  return e.startsWith(lA) && e.length > lA.length;
}
function Qh(e) {
  return Zh(e) && e.endsWith(hA);
}
function $h(e) {
  return Zh(e) && e.endsWith(gA);
}
function eg(e) {
  return Zh(e) && e.endsWith(_A);
}
function tg(e) {
  return e.replace(vA, `_`);
}
function ng(e) {
  return `${lA}${tg(e)}`;
}
function rg(e) {
  return `${e}${gA}`;
}
function ig(e) {
  return `${lA}${tg(e)}${hA}`;
}
function ag(e) {
  return `${lA}${tg(e)}${_A}`;
}
function og(e) {
  return `NUM_${tg(e)
    .replace(/[a-z0-9](?=[A-Z])/gu, `$&_`)
    .toUpperCase()}`;
}
function sg(e) {
  switch (e) {
    case `number`:
    case `enum`:
      return `float`;
    case `boolean`:
      return `float`;
    case `color`:
      return `vec4`;
    case `responsiveimage`:
    case `file`:
      return `sampler2D`;
    default:
      W(e);
  }
}
function cg(e = {}) {
  let { propertyControls: t, heightmapSource: n, bufferNames: r } = e,
    i = [yA, bA, ``, xA, SA],
    a = t ? Object.values(t) : [];
  if (a.length > 0) {
    if (a.some((e) => e?.type === `array`)) {
      i.push(``);
      for (let e in t) {
        let n = t[e];
        if (!(!n || n.type !== `array`)) {
          if (n.control?.type !== `color`)
            throw Error(
              `Shader array control "${e}" is not supported. Only color arrays may be defined.`
            );
          if (!V(n.maxCount)) throw Error(`Shader array control "${e}" must have a maxCount.`);
          i.push(`#define ${og(e)} ${n.maxCount}`);
        }
      }
    }
    i.push(``);
    for (let e in t) {
      let n = t[e];
      if (n)
        if (n.type === `array`) {
          let t = ng(e);
          (i.push(`uniform vec4 ${t}[${og(e)}];`), i.push(`uniform int ${rg(t)};`));
        } else {
          let t = sg(n.type);
          i.push(`uniform ${t} ${ng(e)};`);
        }
    }
  }
  if ((n && i.push(`uniform sampler2D ${ig(n)};`), r && r.length > 0)) {
    i.push(``);
    for (let e of r) i.push(`uniform sampler2D ${ag(e)};`);
  }
  i.push(``);
  for (let e of Object.values(dA)) i.push(`uniform ${e.glslType} ${e.name};`);
  return (
    i.push(``),
    i.join(`
`)
  );
}
function lg(e, t, n = {}) {
  let r = cg(n);
  return t
    ? `${r}${t}
${e}`
    : r + e;
}
function ug(e, t, n) {
  if (e)
    return e.map((e) => ({
      uniformName: ag(e.name),
      fragment: lg(e.fragment, t, n),
      resolutionScale: e.resolutionScale ?? CA,
      format: e.format ?? wA,
    }));
}
function dg(e) {
  fg(e);
  let t = e.buffers ? e.buffers.map((e) => e.name) : void 0,
    n = lg(e.fragment, e.common, {
      propertyControls: e.propertyControls,
      heightmapSource: e.heightmapSource,
      bufferNames: t,
    }),
    r = ug(e.buffers, e.common, {
      propertyControls: e.propertyControls,
      heightmapSource: e.heightmapSource,
      bufferNames: t,
    });
  return { ...e, fragment: n, buffers: r, [TA]: !0 };
}
function fg(e) {
  let t = new Map();
  if (e.propertyControls)
    for (let n in e.propertyControls) {
      if (Zh(n) || n === lA)
        throw Error(`Property control key "${n}" must not start with "${lA}".`);
      let e = ng(n);
      if (Qh(e)) throw Error(`Property control key "${n}" must not end with "_heightmap".`);
      if ($h(e)) throw Error(`Property control key "${n}" must not end with "_length".`);
      if (eg(e)) throw Error(`Property control key "${n}" must not end with "_buffer".`);
      let r = t.get(e);
      if (r !== void 0)
        throw Error(
          `Property control keys "${r}" and "${n}" both resolve to the same uniform "${e}".`
        );
      t.set(e, n);
    }
  if (e.heightmapSource) {
    let t = e.propertyControls?.[e.heightmapSource];
    if (!t || t.type !== `responsiveimage`)
      throw Error(
        `heightmapSource "${e.heightmapSource}" must reference a ResponsiveImage property control.`
      );
  }
  if (e.buffers)
    for (let n of e.buffers) {
      if (Zh(n.name)) throw Error(`Shader buffer name "${n.name}" must not start with "${lA}".`);
      let e = ag(n.name),
        r = t.get(e);
      if (r !== void 0)
        throw Error(
          r === n.name
            ? `Duplicate shader buffer name "${n.name}".`
            : `Shader buffer names "${r}" and "${n.name}" both resolve to the same uniform "${e}".`
        );
      if (
        (t.set(e, n.name),
        n.resolutionScale !== void 0 &&
          (!V(n.resolutionScale) || n.resolutionScale <= 0 || n.resolutionScale > 1))
      )
        throw Error(
          `Shader buffer "${n.name}" has invalid resolutionScale ${n.resolutionScale}. Must be in the range (0, 1].`
        );
      if (n.format !== void 0 && !uA.has(n.format))
        throw Error(
          `Shader buffer "${n.name}" has invalid format "${n.format}". Must be one of: ${[...uA].join(`, `)}.`
        );
    }
}
function pg(e, t = 0) {
  let n = e.indexOf(`var(`, t);
  if (n === -1) return null;
  let r = n + 4,
    i = 1,
    a;
  for (let t = r; t < e.length; t++)
    if (e[t] === `(`) i++;
    else if (e[t] === `)`) {
      if ((i--, i === 0)) return { start: n, end: t + 1, commaIndex: a };
    } else a === void 0 && e[t] === `,` && (a = t);
  return null;
}
function mg(e, t) {
  if (!t) return {};
  let { start: n, end: r, commaIndex: i } = t,
    a = e.substring(r).trim();
  return i
    ? {
        customProperty: e.substring(n + 4, i),
        fallback: e.substring(i + 1, r - 1).trim(),
        metadata: a,
      }
    : { customProperty: e.substring(n + 4, r - 1), metadata: a };
}
function hg(e) {
  return mg(e, pg(e));
}
function gg(e, t) {
  if (e.size < t) return;
  let n = e.keys().next().value;
  n !== void 0 && e.delete(n);
}
function _g(e, t) {
  if (!Sg(e)) return;
  let n = t?.();
  if (!n) return vg(e);
  let r = AA.generate(n, () => vg(e));
  if (r instanceof HTMLCanvasElement) return r;
}
function vg(e) {
  let t = xg(e);
  if (!t) return;
  let n = jA / Math.min(t.width, t.height),
    r = jA * jA,
    i = t.width * n * (t.height * n);
  i > r && (n *= Math.sqrt(r / i));
  let a = Math.max(1, Math.round(t.width * n)),
    o = Math.max(1, Math.round(t.height * n)),
    s = document.createElement(`canvas`);
  ((s.width = a), (s.height = o));
  let c = s.getContext(`2d`);
  if (!c) return;
  c.drawImage(t.source, 0, 0, a, o);
  let l = c.getImageData(0, 0, a, o).data,
    u = a * o,
    d = new Uint8Array(u);
  for (let e = 0; e < u; e++) d[e] = +((l[e * 4 + 3] ?? 0) > 0);
  let f = new Uint8Array(u);
  for (let e = 0; e < u; e++) {
    if (d[e] === 0) continue;
    let t = e % a,
      n = Math.floor(e / a);
    if (t === 0 || t === a - 1 || n === 0 || n === o - 1) continue;
    let r = !1;
    for (let e = -1; e <= 1 && !r; e++)
      for (let i = -1; i <= 1 && !r; i++)
        (i === 0 && e === 0) || (d[(n + e) * a + (t + i)] === 0 && (r = !0));
    r || (f[e] = 1);
  }
  let p = yg(f, a, o),
    m = 0;
  for (let e = 0; e < u; e++) {
    let t = p[e] ?? 0;
    t > m && (m = t);
  }
  let h = document.createElement(`canvas`);
  ((h.width = a), (h.height = o));
  let g = h.getContext(`2d`);
  if (!g) return;
  let _ = g.createImageData(a, o);
  for (let e = 0; e < u; e++) {
    let t = m > 0 ? (p[e] ?? 0) / m : 0;
    ((_.data[e * 4] = Math.round(t * 255)),
      (_.data[e * 4 + 1] = 255 - (l[e * 4 + 3] ?? 0)),
      (_.data[e * 4 + 2] = d[e] ? 255 : 0),
      (_.data[e * 4 + 3] = 255));
  }
  g.putImageData(_, 0, 0);
  let v = document.createElement(`canvas`);
  ((v.width = t.width), (v.height = t.height));
  let y = v.getContext(`2d`);
  if (y) return ((y.imageSmoothingEnabled = !0), y.drawImage(h, 0, 0, t.width, t.height), v);
}
function yg(e, t, n) {
  let r = t * n,
    i = new Float32Array(r),
    a = 1.95,
    o = 0.01,
    s = [],
    c = [];
  for (let i = 0; i < r; i++) {
    if (e[i] === 0) continue;
    let r = i % t,
      a = Math.floor(i / t);
    ((r + a) % 2 == 0 ? s : c).push(
      i,
      a > 0 ? i - t : -1,
      a < n - 1 ? i + t : -1,
      r > 0 ? i - 1 : -1,
      r < t - 1 ? i + 1 : -1
    );
  }
  let l = new Int32Array(s),
    u = new Int32Array(c),
    d = 1 - a,
    f = a / 4;
  for (let e = 0; e < 50; e++) (bg(l, i, d, f, o), bg(u, i, d, f, o));
  return i;
}
function bg(e, t, n, r, i) {
  for (let a = 0; a < e.length; a += 5) {
    let o = e[a] ?? 0,
      s = e[a + 1] ?? -1,
      c = e[a + 2] ?? -1,
      l = e[a + 3] ?? -1,
      u = e[a + 4] ?? -1,
      d = s >= 0 ? (t[s] ?? 0) : 0,
      f = c >= 0 ? (t[c] ?? 0) : 0,
      p = l >= 0 ? (t[l] ?? 0) : 0,
      m = u >= 0 ? (t[u] ?? 0) : 0;
    t[o] = n * (t[o] ?? 0) + r * (i + d + f + p + m);
  }
}
function xg(e) {
  if (e instanceof HTMLImageElement) {
    let t = e.naturalWidth,
      n = e.naturalHeight;
    return t > 0 && n > 0 ? { source: e, width: t, height: n } : void 0;
  }
  if (e instanceof HTMLCanvasElement)
    return e.width > 0 && e.height > 0 ? { source: e, width: e.width, height: e.height } : void 0;
}
function Sg(e) {
  return e instanceof HTMLImageElement || e instanceof HTMLCanvasElement;
}
function Cg(e) {
  (e.controller.abort(), e.promise.then(Bh, () => {}));
}
function wg(e, t) {
  let n = hg(e);
  if (!n.customProperty) return e;
  if (t) {
    let e = getComputedStyle(t).getPropertyValue(n.customProperty).trim();
    if (e) return OS.srgbFromValue(e);
  }
  return OS.srgbFromValue(n.fallback ?? e);
}
function Tg(e, t) {
  let n = wg(e, t),
    r = J.toRgb(J(n));
  return [r.r / 255, r.g / 255, r.b / 255, r.a];
}
function Eg(e, t, n) {
  return Og(e)
    ? n
      ? t?.aborted
        ? Promise.reject(Error(`Texture load aborted`))
        : Dg(PA.acquire(n, e), t)
      : Hh(e, t)
    : Dg(
        AA.load(e, () => jg(e)),
        t
      );
}
function Dg(e, t) {
  return t
    ? new Promise((n, r) => {
        let i = () => r(Error(`Texture load aborted`));
        if (t.aborted) {
          i();
          return;
        }
        (t.addEventListener(`abort`, i, { once: !0 }),
          e.then(
            (e) => {
              (t.removeEventListener(`abort`, i), n(e));
            },
            (e) => {
              (t.removeEventListener(`abort`, i), r(e));
            }
          ));
      })
    : e;
}
function Og(e) {
  return Pg(e, zA);
}
function kg(e) {
  let { value: t } = e;
  if (B(t)) return t;
  if (H(t) && `src` in t) return t.src;
}
function Ag(e) {
  let t = new Set();
  for (let n of Object.values(e)) n.type === `file` && Og(n.value) && t.add(n.value);
  return t;
}
function jg(e) {
  return new Promise((t, n) => {
    let r = new Image();
    ((r.crossOrigin = `anonymous`),
      (r.onload = () => t(Ng(r) ?? r)),
      (r.onerror = (t) => {
        let r =
          t instanceof ErrorEvent && t.message
            ? `Failed to load texture from "${e}": ${t.message}`
            : `Failed to load texture from "${e}"`;
        n(Error(r));
      }),
      (r.src = e));
  });
}
function Mg(e) {
  if (e instanceof HTMLImageElement) return e.src || void 0;
  if (e instanceof HTMLCanvasElement) return e.dataset.src || void 0;
}
function Ng(e) {
  if (!Fg(e.src)) return;
  let t = e.naturalWidth,
    n = e.naturalHeight;
  if (t <= 0 || n <= 0) return;
  let r = VA / Math.max(t, n),
    i = Math.max(1, Math.round(t * r)),
    a = Math.max(1, Math.round(n * r)),
    o = document.createElement(`canvas`);
  ((o.width = i), (o.height = a));
  let s = o.getContext(`2d`);
  if (s) return (s.drawImage(e, 0, 0, i, a), (o.dataset.src = e.src), o);
}
function Pg(e, t) {
  try {
    let n = new URL(e, `https://placeholder`).pathname.toLowerCase();
    return t.some((e) => n.endsWith(e));
  } catch {
    let n = e.toLowerCase();
    return t.some((e) => n.includes(e));
  }
}
function Fg(e) {
  return Pg(e, [BA]);
}
async function Ig(e, t, n, r) {
  switch (e.type) {
    case `number`:
    case `enum`:
      return { type: `float`, value: e.value };
    case `boolean`:
      return { type: `boolean`, value: e.value };
    case `color`:
      return { type: `vec4`, value: Tg(e.value, t) };
    case `responsiveimage`:
    case `file`: {
      let t = kg(e);
      return t ? { type: `sampler2D`, value: await Eg(t, n, r) } : void 0;
    }
    case `array`:
      return { type: `vec4[]`, value: e.value.map((e) => Tg(e, t)) };
    default:
      W(e);
  }
}
async function Lg(e, t, n, r) {
  let i = {},
    a = n ? ng(n) : void 0,
    o = t?.current ?? null;
  try {
    for (let [s, c] of Object.entries(e)) {
      let e = await Ig(c, o, r, t);
      if (
        e &&
        ((i[s] = e),
        c.type === `array` && (i[rg(s)] = { type: `int`, value: c.value.length }),
        n && a && s === a && e.type === `sampler2D`)
      ) {
        let t = _g(e.value, () => Mg(e.value));
        t && (i[ig(n)] = { type: `sampler2D`, value: t });
      }
    }
  } catch (e) {
    throw (t || Vh(i), e);
  }
  return i;
}
function Rg(e) {
  return typeof e == `number` ? e : e === `performance` ? 0.75 : e === `consistent` ? 0 : 1;
}
function zg(e, t, n) {
  let r = e * IA;
  return { currentTime: r, elapsedTime: r - t, deltaTime: n === t ? 1 / 60 : r - n };
}
function Bg() {
  return t(JA);
}
function Vg(e) {
  let t = l(e);
  return (It(t.current, e) || (t.current = e), t.current);
}
function Hg(e, t, n, r, a) {
  let [o, s] = i({}),
    [l, u] = i(e === void 0),
    d = Vg(e);
  return (
    c(() => () => PA.releaseAll(t), [t]),
    c(() => {
      if (!d) {
        (PA.releaseAll(t),
          p(() => {
            (s({}), u(!0));
          }));
        return;
      }
      let e = new AbortController();
      return (
        Lg(d, t, n, e.signal)
          .then((n) => {
            e.signal.aborted ||
              (PA.keepOnly(t, Ag(d)),
              p(() => {
                (s(n), u(!0));
              }),
              r?.());
          })
          .catch(() => {
            e.signal.aborted || (PA.releaseAll(t), a?.());
          }),
        () => e.abort()
      );
    }, [d, t, n, r, a]),
    { resolvedUniforms: o, haveUniformsResolved: l }
  );
}
function Ug(e, t) {
  (c(() => {
    let n = e.current;
    if (!n) return;
    let r = new ResizeObserver(t);
    return (
      r.observe(n),
      () => {
        r.disconnect();
      }
    );
  }, [e, t]),
    Wg(t));
}
function Wg(e) {
  c(() => {
    let t = matchMedia(`(resolution: ${N.devicePixelRatio}dppx)`),
      n = () => {
        (e(),
          t.removeEventListener(`change`, n),
          (t = matchMedia(`(resolution: ${N.devicePixelRatio}dppx)`)),
          t.addEventListener(`change`, n));
      };
    return (
      t.addEventListener(`change`, n),
      () => {
        t.removeEventListener(`change`, n);
      }
    );
  }, [e]);
}
function Gg(e, t, n, r, a, o, c, u) {
  let d = z() === !0 || Y.current() === Y.export,
    f = c || d,
    m,
    h,
    g,
    _;
  if (e !== null) {
    let r = e !== qA.noSlot;
    ((m = !r), (h = (o ?? !0) && t && !n && !d && !u), (g = r && !h), (_ = `instant`));
  } else ((m = a === `fallback` || !r), (h = (o ?? !0) && !d && !u), (g = !h), (_ = a));
  let [v, y] = i(!1),
    b = s(() => {
      p(() => y(!0));
    }, []);
  (j(() => {
    v && t && p(() => y(!1));
  }, [v, t]),
    v && (m = !0));
  let [x, S] = i(!1),
    C = s(() => {
      p(() => S(!0));
    }, []),
    w = s(() => {
      p(() => S(!1));
    }, []),
    T = l(t);
  return (
    j(() => {
      let e = !T.current && t;
      ((T.current = t), e && x && w());
    }, [x, t, w]),
    x && (m = !0),
    a !== `fallback` && c && !v && !x && r && e !== qA.noSlot && (m = !1),
    {
      isFallbackOnly: m,
      effectiveAnimated: h,
      effectiveSingleFrame: g,
      effectiveMode: _,
      shouldSkipFallbackOverlay: f,
      onContextLost: b,
      onUniformResolutionSucceeded: w,
      onUniformResolutionFailed: C,
    }
  );
}
function Kg(e = !0) {
  let [t, n] = i(!e);
  return (
    Cx(() => {
      if (!e) {
        p(() => n(!0));
        return;
      }
      p(() => n(!1));
      let t = N.setTimeout(() => {
        p(() => n(!0));
      }, YA);
      return () => {
        clearTimeout(t);
      };
    }, [e]),
    t
  );
}
function qg(e, t) {
  for (let n of Object.values(e)) n.type === `sampler2D` && zh(n.value) && t(n.value);
}
function Jg(e, t, n) {
  let r = l(!1);
  j(() => {
    let i = t && !r.current;
    r.current = t;
    let a = !1;
    (qg(e, (e) => {
      if (t) {
        (i && (e.currentTime = 0), e.play().catch(() => {}));
        return;
      }
      (e.pause(),
        e.currentTime !== 0 &&
          (e.addEventListener(`seeked`, () => n(), { once: !0 }), (e.currentTime = 0), (a = !0)));
    }),
      a && n());
  }, [e, t, n]);
}
function Yg({
  vertexShader: e = GA,
  fragmentShader: t = KA,
  animated: n = !0,
  resolutionScale: r,
  uniforms: a,
  onError: o,
  onReady: u,
  onContextLost: d,
  onUniformResolutionSucceeded: f,
  onUniformResolutionFailed: m,
  singleFrame: h = !1,
  heightmapSource: _,
  mouseDataRef: v,
  buffers: y,
}) {
  let b = l(null),
    x = l(null),
    S = l(0),
    C = l(0),
    w = l(0),
    T = l(null),
    [E, D] = i(!1),
    O = l(u);
  j(() => {
    O.current = u;
  }, [u]);
  let k = l(d);
  j(() => {
    k.current = d;
  }, [d]);
  let { resolvedUniforms: A, haveUniformsResolved: M } = Hg(a, b, _, f, m),
    ee = l(A),
    P = l(n);
  j(() => {
    P.current = n;
  }, [n]);
  let F = l(h);
  j(() => {
    F.current = h;
  }, [h]);
  let te = l(!1),
    ne = s(() => {
      te.current ||
        !M ||
        ((te.current = !0),
        O.current?.(),
        (T.current = requestAnimationFrame(() => {
          ((T.current = null), performance.mark?.(`shader_rendered`));
        })));
    }, [M]),
    I = l({ width: 0, height: 0, dpr: 0 }),
    re = l({ width: 0, height: 0, dpr: 0 }),
    L = s(() => {
      let e = b.current;
      e && (I.current = { width: e.offsetWidth, height: e.offsetHeight, dpr: N.devicePixelRatio });
    }, []),
    ie = s(() => {
      let e = x.current;
      if (!e) return;
      let t = I.current,
        n = re.current;
      (t.width === n.width && t.height === n.height && t.dpr === n.dpr) ||
        (e.resize(), (re.current = { ...t }));
    }, []),
    ae = s(
      (e) => {
        let t = x.current;
        if (!t) return;
        if (F.current) {
          if (!M) return;
          (ie(), t.render(0, 0, ee.current, v?.current ?? RA), ne());
          return;
        }
        if (!M) {
          S.current = requestAnimationFrame(ae);
          return;
        }
        (te.current || ((C.current = e * IA), (w.current = C.current)), ie());
        let { currentTime: n, elapsedTime: r, deltaTime: i } = zg(e, C.current, w.current);
        ((w.current = n),
          t.render(r, i, ee.current, v?.current ?? RA),
          ne(),
          !F.current && P.current && (S.current = requestAnimationFrame(ae)));
      },
      [M, ne, v, ie]
    ),
    oe = s(() => {
      let e = x.current;
      !e || !M || (ie(), e.render(0, 0, ee.current, v?.current ?? RA), ne());
    }, [M, v, ne, ie]);
  (j(() => {
    ((ee.current = A), F.current && x.current && oe());
  }, [A, oe]),
    Jg(A, n && !h && M && E, oe),
    c(() => {
      let n = b.current;
      if (!(!n || !M)) {
        te.current = !1;
        try {
          let i = new mA(n, e, t, Rg(r), k.current, y);
          ((x.current = i),
            (re.current = { width: 0, height: 0, dpr: 0 }),
            L(),
            ie(),
            (C.current = performance.now() * IA),
            (w.current = C.current),
            F.current ? oe() : (S.current = requestAnimationFrame(ae)),
            p(() => D(!0)));
        } catch (e) {
          (p(() => D(!1)), o && e instanceof Error && o(e));
        }
        return () => {
          (cancelAnimationFrame(S.current),
            T.current !== null && cancelAnimationFrame(T.current),
            x.current?.dispose(),
            (x.current = null));
        };
      }
    }, [e, t, r, ae, oe, o, y, M, L, ie]));
  let se = l(n),
    ce = l(h);
  return (
    c(() => {
      let e = n && !se.current,
        t = !h && ce.current;
      ((e || t) &&
        x.current &&
        ((C.current = performance.now() * IA),
        (w.current = C.current),
        (S.current = requestAnimationFrame(ae))),
        (se.current = n),
        (ce.current = h));
    }, [n, h, ae]),
    Ug(
      b,
      s(() => {
        let e = x.current;
        if (!e || !M) return;
        if ((L(), F.current)) {
          oe();
          return;
        }
        ie();
        let {
          currentTime: t,
          elapsedTime: n,
          deltaTime: r,
        } = zg(performance.now(), C.current, w.current);
        ((w.current = t), e.render(n, r, ee.current, v?.current ?? RA));
      }, [M, v, oe, L, ie])
    ),
    g(`canvas`, { ref: b, style: XA, draggable: !1 })
  );
}
function Xg() {
  (($A = I(0)), (ej = I(0)));
  let e = 0,
    t = 0;
  function n() {
    !$A || !ej || ($A.set(e), ej.set(t));
  }
  N !== void 0 &&
    (N.addEventListener(
      `pointermove`,
      Qg((r) => {
        ((e = r.clientX), (t = r.clientY), Me.update(n));
      })
    ),
    N.addEventListener(`dragover`, (r) => {
      ((e = r.clientX), (t = r.clientY), Me.update(n));
    }));
}
function Zg(e = !0) {
  return (e && !$A && Xg(), { x: $A, y: ej });
}
function Qg(e) {
  return (t) => {
    t.pointerType === `mouse` && e(t);
  };
}
function $g(e) {
  let t = e ?? tj;
  return t.duration === void 0 ? t : { ...t, duration: t.duration * 1e3 };
}
function e_(e, t, n) {
  return !e || e.width <= 0 || e.height <= 0
    ? [LA, LA]
    : [(t - e.left) / e.width, 1 - (n - e.top) / e.height];
}
function t_(e, t) {
  let n = l(RA),
    r = t?.enabled ?? !1,
    i = $g(t?.springOptions),
    a = l(null),
    o = s(() => {
      let t = e.current;
      t && (a.current = t.getBoundingClientRect());
    }, [e]),
    { x: u, y: d } = Zg(r),
    f = L(0),
    p = L(0),
    m = u ?? f,
    h = d ?? p,
    g = ke(m, (e) => e_(a.current, e, h.get())[0]),
    _ = ke(h, (e) => e_(a.current, m.get(), e)[1]),
    v = L(0),
    y = L(0),
    b = ee(g, i),
    x = ee(_, i),
    S = ee(v, i),
    C = ee(y, i),
    w = Qe(b),
    T = Qe(x);
  return (
    c(() => {
      if (!r) return;
      let t = e.current;
      if (!t) return;
      o();
      let i = !1;
      N.addEventListener(`scroll`, o, { passive: !0, capture: !0 });
      let a = P(o),
        s = P(t, o),
        c = xe(
          t,
          () => (
            o(),
            i || ((i = !0), b.jump(g.get()), x.jump(_.get())),
            Me.update(() => y.set(1)),
            () => Me.update(() => y.set(0))
          )
        ),
        l = Le(t, () => (Me.update(() => v.set(1)), () => Me.update(() => v.set(0))));
      return () => {
        (N.removeEventListener(`scroll`, o, { capture: !0 }), a(), s(), c(), l(), (n.current = RA));
      };
    }, [r, e, g, _, v, y, b, x, o]),
    n_(
      r,
      s(() => {
        n.current = {
          position: [b.get(), x.get(), w.get(), T.get()],
          pointerDown: S.get(),
          hover: C.get(),
        };
      }, [b, x, S, C, w, T])
    ),
    n
  );
}
function n_(e, t) {
  c(() => {
    if (!e) return;
    let n = 0,
      r = performance.now();
    function i(e) {
      (t(e, e - r), (r = e), (n = requestAnimationFrame(i)));
    }
    return ((n = requestAnimationFrame(i)), () => cancelAnimationFrame(n));
  }, [e, t]);
}
function r_(e, t, n) {
  let r = Bg(),
    [a, o] = i(qA.noSlot);
  return (
    c(() => {
      if (!r || !e) return;
      (r.register(e, t, n), p(() => o(r.getSlotStatus(e))));
      let i = r.subscribe(e, () => {
        p(() => o(r.getSlotStatus(e)));
      });
      return () => {
        i();
      };
    }, [r, e, t, n]),
    c(() => {
      if (!(!r || !e))
        return () => {
          r.deregister(e);
        };
    }, [r, e]),
    r ? a : null
  );
}
function i_(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function a_(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${dj[e]}` : `${dj[e]} ${n}`;
}
function o_() {
  return N === void 0 ? (pj ?? {}) : pj || ((pj = s_()), pj);
}
function s_() {
  let e = N.location,
    t = N?.bootstrap?.services;
  if (t) return t;
  let n;
  try {
    if (((n = N.top.location.origin), (t = N.top?.bootstrap?.services), t)) return t;
  } catch {}
  if (n && n !== e.origin) throw Error(`Unexpectedly embedded by ${n} (expected ${e.origin})`);
  if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
    throw Error(`ServiceMap data was not provided in document`);
  try {
    let n =
      new URLSearchParams(e.search).get(`services`) ||
      new URLSearchParams(e.hash.substring(1)).get(`services`);
    n && (t = JSON.parse(n));
  } catch {}
  if (t && typeof t == `object` && t.api) return t;
  throw Error(`ServiceMap requested but not available`);
}
function c_(e) {
  return e.key + e.extension;
}
function l_(e) {
  return `${o_().userContent}/assets/${e}`;
}
function u_(e) {
  return l_(c_(e));
}
function d_(e, t) {
  return t ? `${e} ${mj}` : e;
}
function f_(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return d_(e.name, e.isVariable);
  }
}
function p_(e) {
  return !!(e && Array.isArray(e));
}
function m_(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    g_(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function h_(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function g_(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`name` in e && typeof e.name != `string`) ||
    !(`minValue` in e) ||
    typeof e.minValue != `number` ||
    !(`maxValue` in e) ||
    typeof e.maxValue != `number` ||
    !(`defaultValue` in e) ||
    typeof e.defaultValue != `number`
  );
}
function __(e) {
  return _j[y_(e)];
}
function v_(e, t) {
  let n = e?.find((e) => e.tag === `wght`)?.defaultValue;
  return n !== void 0 && n >= 1 && n <= 1e3 ? n : (t ?? __(`variable`) ?? 500);
}
function y_(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function b_(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function x_(e, t) {
  return { ...S_(e, t), ...C_(e, t) };
}
function S_(e, t) {
  if (t.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: n, style: r } = e,
    i = new Map(),
    a = new Map();
  for (let r of t)
    r.isVariable === e.isVariable &&
      (i.set(`${r.weight}-${r.style}`, r),
      !(r.weight <= n) && (a.has(r.style) || a.set(r.style, r)));
  let o = a.get(r),
    s = a.get(`italic`),
    c = e.weight;
  c <= 300
    ? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
    : c <= 500
      ? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
      : ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
  let l = i.get(`${n}-italic`);
  return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function C_(e, t) {
  if (t.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n, r, i, a;
  for (let o of t) {
    if (!o.isVariable) continue;
    let t = o.weight === e.weight,
      s = o.weight === 400;
    o.style === `normal`
      ? t
        ? (n = o)
        : s
          ? (i = o)
          : (i ||= o)
      : o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
  }
  return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function w_(e) {
  return !!e.variationAxes;
}
function T_(e) {
  return E_(e) || D_(e);
}
function E_(e) {
  return e.startsWith(bj);
}
function D_(e) {
  return e.startsWith(yj);
}
function O_(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r) {
      if (r.owner !== t.owner && r.file === t.file)
        return { existingFont: r, index: n, projectDuplicate: !0 };
      if (r && r.selector === t.selector)
        return { existingFont: r, index: n, projectDuplicate: !1 };
    }
  }
}
function k_(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? mj : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function A_({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = m_(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function j_(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: w_(e), selector: e.selector };
}
function M_(e) {
  let t = e.fonts.map((e) => j_(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = j_(n);
    if (!e) continue;
    let r = x_(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function N_(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
function P_(e, t, n) {
  let r = e.get(t);
  r || ((r = new Map()), e.set(t, r));
  let i = r.get(n);
  return (i || ((i = { fonts: [] }), r.set(n, i)), i);
}
function F_(e, t) {
  return Array.from(e.entries())
    .sort(([e], [t]) => e.localeCompare(t))
    .map(([e, n]) => ({
      family: e,
      variants: Array.from(n.entries())
        .sort(([e], [t]) => e.localeCompare(t))
        .map(([, e]) => ({
          fonts: e.fonts.map((e) => ({
            ...e,
            selected:
              e.font.assetKey && e.font.owner ? t.has(`${e.font.assetKey}:${e.font.owner}`) : !1,
          })),
        })),
    }));
}
async function I_(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-YSYBFRE6.BZ57zP5h.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-TIA7QUPT.CjCmvCKY.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function L_(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-H6SFY4F5.5HW9yzMR.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-PZLWRK4B.CuFl42Lb.mjs`)).default;
    case `framer`:
      return (await import(`./framer-font-RD2SUPQH.BV4yRwNx.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function R_(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(z_);
}
function z_(e) {
  return Sj.includes(e);
}
function B_(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = R_(e)[0];
  return n && t[n];
}
function V_(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function H_(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
function U_(e, t, n, r) {
  return `${e}-${t}-${n}-${r}`;
}
function W_(e, t, n) {
  return `${e}-${t}-${n}`;
}
async function G_(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = U_(r, c, s, i);
  if (!Rj.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: B(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), Bj.set(l, { fontFace: u, doc: t }), K_(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < Ij) return G_(e, t, n + 1);
          throw new Lj(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    Rj.set(l, d);
  }
  await Rj.get(l);
}
async function K_(e, t, n) {
  let r = W_(e, t, n);
  if (!zj.has(r)) {
    let i = new Pj.default(e, { style: t, weight: n }).load(null, Fj);
    zj.set(r, i);
  }
  try {
    await zj.get(r);
  } catch {
    throw new Lj(
      `Failed to check if font is ready (${Fj}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function q_(e) {
  let t = e.style || `normal`,
    { family: n, url: r, weight: i } = e,
    a = U_(n, t, i, r),
    o = Bj.get(a);
  (o && (o.doc.fonts.delete(o.fontFace), Bj.delete(a)), Rj.delete(a), zj.delete(W_(n, t, i)));
}
function J_(e) {
  try {
    if (e === `framer`) return Y_(Hj) ? Hj : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import(`./google-EGNT223R.4Zga1324.mjs`)).default;
          case `fontshare`:
            return (await import(`./fontshare-SXU5BGFE.DwUZJPwH.mjs`)).default;
          default:
            W(e);
        }
      })();
      return Y_(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function Y_(e) {
  return H(e) && Object.values(e).every(Z_);
}
function X_(e) {
  return H(e) && B(e.tag);
}
function Z_(e) {
  return Array.isArray(e) && e.every(X_);
}
function Q_(e, t, n, r = Gj) {
  let [i, a] = h.useState(e),
    [o, s] = h.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      h.useCallback(
        (e) => {
          Ei(e) ||
            (t && a(r(e)),
            n &&
              h.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t]
      ),
    ]
  );
}
function $_(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function ev() {
  return g(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: g(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function tv(e, t) {
  c(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (N.addEventListener(`keyup`, n), () => N.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function nv(e, t, n, r) {
  let i = N.innerHeight - r,
    a = Math.min(N.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function rv(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new N.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function iv() {
  return document.getElementById(WE) ?? document.getElementById(UE) ?? document.body;
}
function av(e, t) {
  return V(e) ? e : (t ?? 0);
}
function ov(e) {
  return av(e?.paddingTop, e?.padding) + av(e?.paddingBottom, e?.padding);
}
function sv(e) {
  return av(e?.paddingLeft, e?.padding) + av(e?.paddingRight, e?.padding);
}
function cv(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - sv(e)}px)`,
      srcSet: co(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function lv(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in rM)) continue;
    let n = rM[t],
      r = e[t];
    if (!(!V(n) || !V(r)) && n !== r) return !0;
  }
  return !1;
}
function uv(e) {
  let t = He.get(e.current);
  if (!t) return !1;
  if (lv(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (lv(e.latestValues)) return !0;
  return !1;
}
function dv(e) {
  return y(function ({ lightbox: n, lightboxClassName: r, onClick: a, ...o }, d) {
    let f = t(Se),
      m = t(rA),
      h = !!m,
      _ = l(null),
      v = d ?? _,
      y = l(),
      b = S(() => cv(n, o.background), [n, o.background]),
      [C, T] = i(!1),
      [E, O] = i(),
      A = s(() => {
        if (n) {
          if (C) {
            p(() => {
              T(!0);
            });
            return;
          }
          Me.read(() => {
            if (!v.current) return;
            let e = getComputedStyle(v.current),
              t =
                v.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(v.current, `::after`)
                  : void 0,
              r = v.current.offsetWidth ?? 1,
              i = v.current.offsetHeight ?? 1,
              a = uv(v) || h ? { duration: 0 } : n.transition;
            p(() => {
              (O({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: t?.borderTopWidth,
                borderRight: t?.borderRightWidth,
                borderBottom: t?.borderBottomWidth,
                borderLeft: t?.borderLeftWidth,
                borderStyle: t?.borderStyle,
                borderColor: t?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                T(!0),
                m?.stop());
            });
          });
        }
      }, [n, C, v, m?.stop, h]),
      j = E?.aspectRatio ?? 1,
      M = zm(() => {
        if (!n || !b?.src) return;
        let e = y.current?.[b.src];
        if (e) return e;
        let t = nv(j, n.maxWidth, sv(n), ov(n)),
          r = rv(b, { width: t, height: t * j });
        return ((y.current = { [b.src]: r }), r);
      }),
      N = s(
        async (e) => {
          (a?.(e), !(C || !n || !b) && (await M(), A()));
        },
        [a, A, C, b, n, M]
      ),
      ee = s((e) => {
        (e?.stopPropagation(),
          p(() => {
            T(!1);
          }));
      }, []);
    (tv(C, ee),
      c(() => {
        if (!n) return;
        let e;
        function t() {
          e = setTimeout(() => {
            M();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = v.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, M),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, M));
          }
        );
      }, [M, v, n]));
    let P = k(),
      F = E?.transition ?? o.transition ?? f.transition,
      te = E?.borderRadius,
      ne = E?.imageRendering,
      I = E?.filter,
      re = E?.borderTop,
      L = E?.borderRight,
      ie = E?.borderBottom,
      ae = E?.borderLeft,
      oe = E?.borderStyle,
      se = E?.borderColor,
      ce = !!(re || L || ie || ae || oe || se),
      le = ce
        ? {
            "--border-top-width": re,
            "--border-right-width": L,
            "--border-bottom-width": ie,
            "--border-left-width": ae,
            "--border-style": oe,
            "--border-color": se,
          }
        : void 0,
      ue = { [ME]: o.id },
      de = av(n?.paddingTop, n?.padding),
      fe = av(n?.paddingBottom, n?.padding),
      pe = av(n?.paddingLeft, n?.padding),
      R = av(n?.paddingRight, n?.padding),
      me = E?.borderRadius ? { ...o.style, borderRadius: E.borderRadius } : o.style,
      ge = C ? (o.layoutDependency ? `${o.layoutDependency}-open` : `open`) : o.layoutDependency,
      _e = h && C ? void 0 : (o.layoutId ?? (n ? P : void 0));
    return w(D, {
      children: [
        g(e, {
          ...o,
          style: me,
          onClick: N,
          layoutId: _e,
          ref: v,
          layoutDependency: ge,
          transition: F,
        }),
        g(Ve, {
          onExitComplete: () => {
            p(() => {
              (O(void 0), m?.start());
            });
          },
          children:
            C &&
            n &&
            b &&
            g(
              u,
              {
                children: x(
                  w(D, {
                    children: [
                      g(he.div, {
                        ...ue,
                        className: r,
                        onClick: ee,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: F,
                        initial: iM,
                        animate: aM,
                        exit: iM,
                      }),
                      g(he.div, {
                        ...ue,
                        className: r,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${de}px ${R}px ${fe}px ${pe}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: n.zIndex,
                        },
                        children: g(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: j,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: n.maxWidth,
                          },
                          children: g(he.div, {
                            layoutId: _e,
                            transition: F,
                            onClick: A,
                            className: `framer-lightbox-container`,
                            "data-border": ce,
                            style: {
                              aspectRatio: j,
                              borderRadius: te,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: ne,
                              filter: I,
                              ...le,
                            },
                            children: g(vo, { image: b, alt: b.alt, draggable: o.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  iv()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function fv(e) {
  return h.isValidElement(e) ? e.props[`data-framer-order-id`] : void 0;
}
function pv(e, t) {
  let n = new Map(),
    r = [],
    i = new Set(t);
  for (let t of e) {
    let e = fv(t);
    e && i.has(e) ? n.set(e, t) : r.push(t);
  }
  let a = [];
  for (let e of t) {
    let t = n.get(e);
    t && a.push(t);
  }
  return [...a, ...r];
}
function mv(e, t) {
  let n = h.Children.toArray(e);
  return t
    ? n.flatMap((e) =>
        h.isValidElement(e) && e.type === h.Fragment ? h.Children.toArray(e.props.children) : e
      )
    : n;
}
function hv(e, t) {
  let n = Array.from({ length: e }, () => []);
  return (
    t.forEach((t, r) => {
      let i = vv(e, r);
      n[i]?.push(t);
    }),
    n
  );
}
function gv(e) {
  return { display: `flex`, flexDirection: `column`, rowGap: e, width: `100%` };
}
function _v(e) {
  return `masonry-stack-${e}`;
}
function vv(e, t) {
  return e <= 0 ? 0 : t % e;
}
function yv(e, t) {
  return uM && !t
    ? Document.parseHTMLUnsafe(e)
    : ((lM ??= new DOMParser()), lM.parseFromString(e, t ?? `text/html`));
}
function bv(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function xv(e, t, n, r) {
  return e.replace(dM, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = Nu(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!th(f) || !th(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Gt(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = Fu(u);
    if (!_ || B(_)) return e;
    Qu(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(JE, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = mi(m, v)), i + o + `"${bv(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function Sv(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Cv(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function wv(e, t, n) {
  let r = l([]);
  Sv(r.current, e) ||
    ((r.current = e),
    Wj.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || Y.current() !== Y.canvas || (e > 0 && Ts(n.current));
    }));
}
function Tv() {
  return { current: null };
}
async function Ev(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function Dv(e) {
  return e in hM;
}
function Ov(e, t) {
  let n = {};
  for (let r in e) {
    if (!Dv(r)) continue;
    let i = e[r],
      a = hM[r];
    lt(i) || lt(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function kv(e, t = `character`, n, r, i) {
  if (r) {
    let t = Tv();
    return (n.add(t), g(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return w(
          u,
          {
            children: [
              g(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(gM)?.map((e, t) => {
                  let r = Tv();
                  return (n.add(r), g(`span`, { ref: r, style: i, children: e }, e + t));
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = Tv();
        return (
          n.add(o),
          w(
            u,
            { children: [g(`span`, { ref: o, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    default:
      return e;
  }
}
function Av(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      W(t);
  }
}
function jv(e) {
  let t = [];
  return (
    V(e.x) && t.push(`translateX(${e.x}px)`),
    V(e.y) && t.push(`translateY(${e.y}px)`),
    V(e.scale) && t.push(`scale(${e.scale})`),
    V(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    V(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    V(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    V(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    V(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function Mv(e, t, n, r) {
  if (!n?.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : jv(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : jv(n.effect),
              };
      }
    default:
      W(i);
  }
}
function Nv(e, t, n) {
  let r = Qa(() => new Set()),
    i = to(),
    a = n || !i,
    o = z(),
    s = l({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let u = e?.trigger ?? `onMount`,
    d = e?.target,
    f = e?.threshold;
  c(() => {
    if (!a || n) return;
    s.current.hasMounted = !0;
    function e() {
      let { effect: e } = s.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (e?.type === `appear` && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            c = { current: void 0 };
          return (
            Fv(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(s.current, { isAnimating: !1 });
              },
              c
            ),
            () => c.current?.()
          );
        }
        default:
          W(t);
      }
    }
    switch (u) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? tt(n, e, { amount: f ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = d?.ref?.current;
        return t
          ? tt(t, e, {
              amount: f ?? 0,
              root: document,
              margin: d?.offset ? `${d.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        W(u);
    }
  }, [a, r, n, t, d, f, u]);
  let p = !!e,
    m = e ? Av(e) : void 0;
  return S(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !p)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = Mv(a, n || Pv(e, t, i), s.current.effect, o);
        return {
          text: (e) => kv(e, m, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = Tv();
            return (r.add(t), { ref: t, style: { ...e, ...c } });
          },
        };
      },
      play: () => {
        let { effect: e } = s.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            Fv(m, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            W(t);
        }
      },
    }),
    [a, p, r, n, m]
  );
}
function Pv(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function Fv(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = Ov(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await Iv(n, u);
      if (
        e === null ||
        (Ae(e, l, { ...r, restDelta: 0.001, delay: fe(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Ae(e, n, { ...r, restDelta: 0.001, delay: fe(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Ev(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (Me.read(() => {
          ((e = Lv(n)),
            e.length !== 0 &&
              Me.update(() => {
                let t = e.map((e, t) =>
                  Ae(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Ae(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      W(e);
  }
}
async function Iv(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Ev(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function Lv(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function Rv(e) {
  let t = {};
  for (let n in e) (te(n) || YS(n)) && (t[n] = e[n]);
  return t;
}
function zv(e) {
  return e.type === u;
}
function Bv(e) {
  return e.type === `br`;
}
function Vv(e, t, n, r, i = {}, a, o = zv(e) ? -1 : 0) {
  let s = A.toArray(e.props.children);
  lt(n) || (s = s.slice(0, 1));
  let c = !0;
  s = s.map((e) => {
    if (((!v(e) || !Bv(e)) && (c = !1), v(e))) return Vv(e, t, n, r, i, a, o + 1);
    let s = lt(n) ? e : n;
    return B(s) && a ? a.text(s) : s;
  });
  let { "data-preset-tag": l, ...u } = e.props;
  if (B(e.type) || nt(e.type)) {
    let n = ce(e.type) || e.type,
      d = l || n,
      f = B(d) ? t?.[d] : void 0;
    ((u.className = fl(`framer-text`, u.className, f)),
      a && o === 0 && !c && Object.assign(u, a.props(u.style)));
    let p = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      m = t?.anchor;
    if (p && m) {
      let e = Hv(s, i);
      u.id = e;
      let t = fl(`framer-text`, m),
        n = g(`a`, { href: `#${e}`, className: t, children: s });
      ((u.style = { ...u.style, scrollMarginTop: r }), (s = [n]));
    }
    d === `ol` &&
      (u.style = { ...u.style, [WC]: Wv(u.start ?? 1, A.count(u.children), u.style?.[UC] ?? ``) });
  }
  return C(e, u, ...s);
}
function Hv(e, t) {
  let n = ii(e.map(Uv).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function Uv(e) {
  return B(e) || V(e)
    ? e.toString()
    : v(e)
      ? Uv(e.props.children)
      : Array.isArray(e)
        ? e.map(Uv).join(``)
        : ``;
}
function Wv(e, t, n) {
  return is(Number(e) || 1, t, n);
}
function Gv(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = ua(n.x, n.y),
    i = cC(ua(0.5, 0.5), r),
    a = X.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: ua.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  U(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !ua.isEqual(e, s) && !ua.isEqual(e, c));
  U(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = cC.intersection(i, cC(s, c)),
    f = cC.intersection(i, cC(l, u));
  return (U(d && f, `linearGradientLine: Must have a start and end point.`), cC(d, f));
}
function Kv(e, t) {
  let n = Gv(e.angle),
    r = Ps(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = cC.pointAtPercentDistance(n, i),
    s = cC.pointAtPercentDistance(n, a),
    c = we([i, a], [0, 1]);
  return {
    id: `id${t}g${Dw.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: xw.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function qv(e, t) {
  return {
    id: `id${t}g${kw.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Ps(e).map((t) => ({
      color: t.value,
      alpha: xw.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function Jv(e) {
  if (!B(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return V(parseFloat(t));
}
function Yv(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return V(n) ? n : 50;
}
function Xv(e) {
  return Jv(e) ? Yv(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function Zv(e) {
  return Jv(e) ? Yv(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function Qv(e, t, n, r) {
  if (((e = hS.get(e, `#09F`)), !sC.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * Xv(e.positionX) + f),
        (d = (t.height - l) * Zv(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * Zv(e.positionY)))
        : ((n = g), (u = (1 - g) * Xv(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function $v(e) {
  return e.startsWith(`data:${wM}`);
}
function ey(e, t) {
  if (/^\w+:/u.test(e) && !$v(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = Y.current() === Y.export;
  return eC.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function ty(e, t) {
  return (c(() => AM.subscribeToTemplate(e), [e]), AM.template(e, t));
}
function ny(e) {
  try {
    let t = yv(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function ry(e, t) {
  ay(e, iy(t));
}
function iy(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function ay(e, t) {
  (oy(e, t),
    Array.from(e.children).forEach((e) => {
      ay(e, t);
    }));
}
function oy(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function sy(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (jM[t[2]] || 1));
}
function cy(e) {
  let t = sy(e.getAttribute(`width`)),
    n = sy(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function ly(e) {
  return e.indexOf(`image`) >= 0;
}
function uy(e) {
  return e.indexOf(`var(--`) >= 0;
}
function dy(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function fy(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? bb,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = AM.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && Io(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    G(s) &&
    G(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l?.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function py({ height: e, width: t, children: n }) {
  let r = my();
  if (!r || !n) return n;
  let { props: i } = r;
  return g(he.li, {
    ...i,
    style: { ...i.style, width: t ?? `fit-content`, height: e ?? `fit-content` },
    children: n,
  });
}
function my() {
  try {
    return Ch();
  } catch {
    return;
  }
}
function hy(e) {
  return e > IM ? `lazy` : void 0;
}
function gy(e, t, n) {
  let r = yy(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function _y(e) {
  return e ? (e.fonts ?? zi()) : zi();
}
function vy(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : yy(e);
}
function yy(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    by(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(xy) })
      : t.fonts.push(xy(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function by(e) {
  return LM in e;
}
function xy(e) {
  let t = Sy(e) || Cy(e) ? e : wy(e);
  return Cy(t) ? t : Ty(t);
}
function Sy(e) {
  return `source` in e;
}
function Cy(e) {
  return `cssFamilyName` in e;
}
function wy(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function Ty(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${mj}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function Ey(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function Dy(e, t) {
  let n = Zb({ batch: !0, priority: t.priority, signal: t.signal });
  return n ? n.then(e) : e();
}
async function Oy(e, t) {
  let n = [],
    r = !0;
  for (let i of e) {
    if (!r) {
      let e = Zb({ batch: !0, priority: t.priority, signal: t.signal });
      e && (await e);
    }
    r = !1;
    try {
      let e = i();
      n.push(
        Promise.resolve(e).then(
          (e) => ({ status: `fulfilled`, value: e }),
          (e) => ({ status: `rejected`, reason: e })
        )
      );
    } catch (e) {
      n.push(Promise.resolve({ status: `rejected`, reason: e }));
    }
  }
  return Promise.all(n);
}
function ky(e) {
  return e.loader;
}
function Ay(e, t, n) {
  let r = ky(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  J,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  Y,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  X,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  Z,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD,
  TD,
  ED,
  DD,
  OD,
  kD,
  AD,
  jD,
  MD,
  ND,
  PD,
  FD,
  ID,
  LD,
  RD,
  zD,
  BD,
  VD,
  HD,
  UD,
  WD,
  GD,
  KD,
  qD,
  JD,
  YD,
  XD,
  ZD,
  QD,
  $D,
  eO,
  tO,
  nO,
  rO,
  iO,
  aO,
  oO,
  sO,
  cO,
  lO,
  uO,
  dO,
  fO,
  pO,
  mO,
  hO,
  gO,
  _O,
  vO,
  yO,
  bO,
  Q,
  xO,
  SO,
  CO,
  wO,
  TO,
  $,
  EO,
  DO,
  OO,
  kO,
  AO,
  jO,
  MO,
  NO,
  PO,
  FO,
  IO,
  LO,
  RO,
  zO,
  BO,
  VO,
  HO,
  UO,
  WO,
  GO,
  KO,
  qO,
  JO,
  YO,
  XO,
  ZO,
  QO,
  $O,
  ek,
  tk,
  nk,
  rk,
  ik,
  ak,
  ok,
  sk,
  ck,
  lk,
  uk,
  dk,
  fk,
  pk,
  mk,
  hk,
  gk,
  _k,
  vk,
  yk,
  bk,
  xk,
  Sk,
  Ck,
  wk,
  Tk,
  Ek,
  Dk,
  Ok,
  kk,
  Ak,
  jk,
  Mk,
  Nk,
  Pk,
  Fk,
  Ik,
  Lk,
  Rk,
  zk,
  Bk,
  Vk,
  Hk,
  Uk,
  Wk,
  Gk,
  Kk,
  qk,
  Jk,
  Yk,
  Xk,
  Zk,
  Qk,
  $k,
  eA,
  tA,
  nA,
  rA,
  iA,
  aA,
  oA,
  sA,
  cA,
  lA,
  uA,
  dA,
  fA,
  pA,
  mA,
  hA,
  gA,
  _A,
  vA,
  yA,
  bA,
  xA,
  SA,
  CA,
  wA,
  TA,
  EA,
  DA,
  OA,
  kA,
  AA,
  jA,
  MA,
  NA,
  PA,
  FA,
  IA,
  LA,
  RA,
  zA,
  BA,
  VA,
  HA,
  UA,
  WA,
  GA,
  KA,
  qA,
  JA,
  YA,
  XA,
  ZA,
  QA,
  $A,
  ej,
  tj,
  nj,
  rj,
  ij,
  aj,
  oj,
  sj,
  cj,
  lj,
  uj,
  dj,
  fj,
  pj,
  mj,
  hj,
  gj,
  _j,
  vj,
  yj,
  bj,
  xj,
  Sj,
  Cj,
  wj,
  Tj,
  Ej,
  Dj,
  Oj,
  kj,
  Aj,
  jj,
  Mj,
  Nj,
  Pj,
  Fj,
  Ij,
  Lj,
  Rj,
  zj,
  Bj,
  Vj,
  Hj,
  Uj,
  Wj,
  Gj,
  Kj,
  qj,
  Jj,
  Yj,
  Xj,
  Zj,
  Qj,
  $j,
  eM,
  tM,
  nM,
  rM,
  iM,
  aM,
  oM,
  sM,
  cM,
  lM,
  uM,
  dM,
  fM,
  pM,
  mM,
  hM,
  gM,
  _M,
  vM,
  yM,
  bM,
  xM,
  SM,
  CM,
  wM,
  TM,
  EM,
  DM,
  OM,
  kM,
  AM,
  jM,
  MM,
  NM,
  PM,
  FM,
  IM,
  LM,
  RM = e(() => {
    (o(),
      rt(),
      Ke(),
      n(),
      E(),
      m(),
      (jy = Ce({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (My = Ce({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (Ny = Ce({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = My();
        },
      })),
      (Py = Ce({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = Ny(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (Fy = Ce({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function r(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function o(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), a(t));
            }
            function s(e, t, n) {
              ((t ||= {}),
                (n ||= N),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var c = null,
              l = null,
              u = null,
              d = null;
            function f(e) {
              return (
                l === null &&
                  (p(e) && /Apple/.test(N.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        N.navigator.userAgent
                      )),
                      (l = !!e && 603 > parseInt(e[1], 10)))
                    : (l = !1)),
                l
              );
            }
            function p(e) {
              return (d === null && (d = !!e.document.fonts), d);
            }
            function m(e, t) {
              var n = e.style,
                r = e.weight;
              if (u === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                u = i.style.font !== ``;
              }
              return [n, r, u ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((s.prototype.load = function (e, t) {
              var a = this,
                s = e || `BESbswy`,
                l = 0,
                u = t || 3e3,
                d = new Date().getTime();
              return new Promise(function (e, t) {
                if (p(a.context) && !f(a.context)) {
                  var h = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - d >= u
                          ? t(Error(`` + u + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(m(a, `"` + a.family + `"`), s)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    g = new Promise(function (e, t) {
                      l = setTimeout(function () {
                        t(Error(`` + u + `ms timeout exceeded`));
                      }, u);
                    });
                  Promise.race([g, h]).then(function () {
                    (clearTimeout(l), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (_ != -1 && v != -1) || (_ != -1 && y != -1) || (v != -1 && y != -1)) &&
                        ((t = _ != v && _ != y && v != y) ||
                          (c === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              N.navigator.userAgent
                            )),
                            (c =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            c &&
                            ((_ == b && v == b && y == b) ||
                              (_ == x && v == x && y == x) ||
                              (_ == S && v == S && y == S)))),
                        (t = !t)),
                        t &&
                          (C.parentNode !== null && C.parentNode.removeChild(C),
                          clearTimeout(l),
                          e(a)));
                    }
                    function f() {
                      if (new Date().getTime() - d >= u)
                        (C.parentNode !== null && C.parentNode.removeChild(C),
                          t(Error(`` + u + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((_ = p.g.offsetWidth),
                          (v = h.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          n()),
                          (l = setTimeout(f, 50)));
                      }
                    }
                    var p = new r(s),
                      h = new r(s),
                      g = new r(s),
                      _ = -1,
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = document.createElement(`div`);
                    ((C.dir = `ltr`),
                      i(p, m(a, `sans-serif`)),
                      i(h, m(a, `serif`)),
                      i(g, m(a, `monospace`)),
                      C.appendChild(p.g),
                      C.appendChild(h.g),
                      C.appendChild(g.g),
                      a.context.document.body.appendChild(C),
                      (b = p.g.offsetWidth),
                      (x = h.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      f(),
                      o(p, function (e) {
                        ((_ = e), n());
                      }),
                      i(p, m(a, `"` + a.family + `",sans-serif`)),
                      o(h, function (e) {
                        ((v = e), n());
                      }),
                      i(h, m(a, `"` + a.family + `",serif`)),
                      o(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, m(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = s)
                : ((N.FontFaceObserver = s),
                  (N.FontFaceObserver.prototype.load = s.prototype.load)));
          })();
        },
      })),
      (Iy = () => {}),
      (Ly = N !== void 0),
      (Ry =
        Ly &&
        (d.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(d.userAgent))),
      (zy = Ly && typeof N.requestIdleCallback == `function`),
      (By = zy ? N.requestIdleCallback : setTimeout),
      (Vy = () => Iy),
      (Hy = () => !0),
      (Uy = () => !1),
      (Wy = new Map()),
      (Gy = new Map()),
      (Ky = new Set()),
      (qy = `:`),
      (Jy = Ly ? void 0 : new Set()),
      (Yy = `preload`),
      (Xy = Object.keys),
      (Zy = `equals`),
      (Qy = h.createContext({})),
      ($y = h.createContext({})),
      (eb = []),
      (tb = `default`),
      (nb = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (rb = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && bt(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = nb.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === nb.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === nb.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== nb.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && Jy !== void 0 && Jy.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = nb.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = nb.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && Wy.has(this.cacheHash) ? Wy.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!ht(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === nb.Fulfilled) return this.value;
          throw this.promiseState === nb.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (ib = -1),
      (ab = -2),
      (ob = -3),
      (sb = -4),
      (cb = -5),
      (lb = -6),
      (ub = -7),
      (db = 2 ** 32 - 1),
      (fb = db - 1),
      (pb = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (mb = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (hb = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (gb = typeof Uint8Array.fromBase64 == `function`),
      (_b = typeof process == `object` && process.versions?.node !== void 0),
      (vb = gb ? sn : _b ? ln : dn),
      (yb = gb ? cn : _b ? un : fn),
      (bb = Ly
        ? N
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (xb = 2),
      (Sb = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (Cb = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (Tb = class {
        payload = bn();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return hn(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (Eb = Ly ? void 0 : new Tb()),
      (Db = Cb.CollectionUtilsCache),
      (Ob = new WeakMap()),
      (kb = a(void 0)),
      (Ab = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new rb(async () => {
              try {
                let t = await e();
                return (U(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(vt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = Tn(n),
            i = En(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (Eb !== void 0) {
              if (ht(e)) return e.then((e) => (Eb.set(Db, i, e), e));
              Eb.set(Db, i, e);
            }
            return e;
          }
          if (Cn(Db, i)) {
            let e = wn(Db, i);
            return (this.cacheMap.set(i, new rb(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = ht(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(vt(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (Eb !== void 0 && Eb.set(Db, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new rb(async () => {
            try {
              let e = ht(s) ? await s : s;
              return (Eb !== void 0 && Eb.set(Db, i, e), e);
            } catch (e) {
              console.error(vt(`Failed to call CollectionUtils method.`, e));
              return;
            }
          });
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
        getContentLocaleIdByRecordId(e, t) {
          return this.callUtilsMethod(`getContentLocaleIdByRecordId`, e, t);
        }
      }),
      (jb = /Mac/u),
      (Mb = /iPhone|iPod|iPad/iu),
      (Nb = /MacIntel/iu),
      (Pb = /Edg\//u),
      (Fb = /Chrome/u),
      (Ib = /Google Inc/u),
      (Lb = /Safari/u),
      (Rb = /Apple Computer/u),
      (zb = /Firefox\/\d+\.\d+$/u),
      (Bb = /Version\/([\d.]+)/u),
      (Vb = /FramerX/u),
      (Hb = /tablet|iPad|Nexus 9/iu),
      (Ub = /mobi/iu),
      (Wb = 1e3 / 60),
      (Gb = 1e3 / 25),
      (Kb = 500),
      (qb = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (Jb = Promise.resolve()),
      (Yb = 100),
      (Xb = (e) => {
        Me.read(e, !1, !0);
      }),
      (Zb = Qn(Xb)),
      (Qb = `framer_variant`),
      ($b = RegExp(`:([a-z]\\w*)`, `gi`)),
      (ex = async () => {}),
      (tx = { contentLocale: null, activeLocale: null, locales: [], setLocale: ex }),
      (nx = (() => {
        let e = h.createContext(tx);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (rx = (() => {
        let e = h.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (ix = !Ry),
      (ax = !1),
      (ox = h.createContext({ global: void 0, routes: {} })),
      (sx = 10),
      (cx = 1e4),
      (lx = (e) => `--view-transition-${e}`),
      (ux = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${lx(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${lx(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${lx(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (dx = {
        circle: {
          makeKeyframe: (e, t) => `${lx(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${lx(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${Cr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${lx(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: ux,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${Sr(e.x)} ${Sr(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = br(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${lx(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${lx(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${lx(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${lx(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${lx(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${lx(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (fx = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (px = `view-transition-styles`),
      (mx = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (hx = () => {}),
      (_x = () => {
        let e = document.title;
        if (e) {
          if (document.ariaNotify) {
            document.ariaNotify(e, { priority: `high` });
            return;
          }
          (gx ||
            ((gx = document.createElement(`div`)),
            gx.setAttribute(`aria-live`, `assertive`),
            gx.setAttribute(`aria-atomic`, `true`),
            (gx.style.position = `absolute`),
            (gx.style.transform = `scale(0)`),
            document.body.append(gx)),
            setTimeout(() => {
              gx.textContent = e;
            }, 60));
        }
      }),
      (yx =
        Ly &&
        typeof N.navigation?.back == `function` &&
        !(() => {
          if (d === void 0) return !1;
          let e = d.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !Ln()),
      (bx = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (xx = h.createContext(null)),
      (Sx = (() => {
        let e = a(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (Cx = typeof document < `u` ? j : c),
      (wx = new Set()),
      (Tx = (() => {
        let e = a({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Ex = 46),
      (Dx = 47),
      (Ox = (e, t) => e.charCodeAt(t)),
      (kx = (e, t) => e.lastIndexOf(t)),
      (Ax = (e, t, n) => e.slice(t, n)),
      (jx = !1),
      (Mx = `/`),
      (Nx = (e) => e === Dx),
      (Px = new Set([`/404.html`, `/404`, `/404/`])),
      (Fx = `__f_replay`),
      (Ix = `__f_replay_ignore`),
      (Lx = () => Ly),
      (Rx =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (zx = (e) => {
        e.target?.closest?.(`#main`) &&
          (Ti(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Bx = !1),
      (rS = [Ai]),
      (nS = [Ai]),
      (tS = [Ai]),
      (eS = [Ai]),
      ($x = [Ai]),
      (Qx = [Ai]),
      (Zx = [Ai]),
      (Xx = [Ai]),
      (Yx = [Ai]),
      (Jx = [Ai]),
      (qx = [Ai]),
      (Kx = [Ai]),
      (Gx = [Ai]),
      (Wx = [Ai]),
      (Ux = [Ai]),
      (Hx = [Ai]),
      (Vx = [Ai]),
      (aS = class {
        constructor() {
          (et(iS, 5, this),
            ze(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            ze(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            ze(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            ze(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            ze(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            ze(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            ze(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            ji(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            ji(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          (performance.mark(`framer-hydration-layout-effects-end`),
            ji(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          (performance.mark(`framer-hydration-effects-end`),
            ji(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        }
        markRafStart() {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        }
        markRafEnd() {
          (performance.mark(`framer-hydration-browser-raf-end`),
            ji(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            ji(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            ji(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          ji(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          ji(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (iS = Ee(null)),
      We(iS, 1, `markRenderStart`, rS, aS),
      We(iS, 1, `markRenderEnd`, nS, aS),
      We(iS, 1, `markUseInsertionEffectsStart`, tS, aS),
      We(iS, 1, `markUseInsertionEffectRouterStart`, eS, aS),
      We(iS, 1, `markUseInsertionEffectsEnd`, $x, aS),
      We(iS, 1, `markUseLayoutEffectsStart`, Qx, aS),
      We(iS, 1, `markRouterUseLayoutEffectStart`, Zx, aS),
      We(iS, 1, `markUseLayoutEffectsEnd`, Xx, aS),
      We(iS, 1, `markUseEffectsStart`, Yx, aS),
      We(iS, 1, `markUseEffectsRouterStart`, Jx, aS),
      We(iS, 1, `markUseEffectsAreSynchronous`, qx, aS),
      We(iS, 1, `markUseEffectsEnd`, Kx, aS),
      We(iS, 1, `markRafStart`, Gx, aS),
      We(iS, 1, `markRafEnd`, Wx, aS),
      We(iS, 1, `markLayoutStylePaintEnd`, Ux, aS),
      We(iS, 1, `measureMutationEffects`, Hx, aS),
      We(iS, 1, `measureUnattributedHydrationOverhead`, Vx, aS),
      Ze(iS, aS),
      (sS = !1),
      (cS = { Start: Ii, End: Li }),
      (lS = class extends Error {}),
      (uS = class extends _ {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof lS)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Ri(e, t);
        }
      }),
      (dS = Object.freeze([])),
      (pS = new Set()),
      (mS = class {
        observers = new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (hS = (() => {
        function e(e) {
          return (
            ia(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            aa(e) ? e : new vS(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : aa(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              aa(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (gS = `onUpdate`),
      (_S = `finishTransaction`),
      (vS = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new mS();
        static interpolationFor(e, t) {
          if (aa(e)) return oa(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (aa(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: ca(e.x, t.x), y: ca(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((ua ||= {})),
      (yS = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (bS = class e {
        constructor() {
          ((this.hex = `#000000`),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0));
        }
        static fromLinear(e) {
          return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
        }
        static toLinear(e) {
          return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
        }
        static yToL(t) {
          return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
        }
        static lToY(t) {
          return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
        }
        static rgbChannelToHex(t) {
          let n = Math.round(t * 255),
            r = n % 16,
            i = ((n - r) / 16) | 0;
          return e.hexChars.charAt(i) + e.hexChars.charAt(r);
        }
        static hexToRgbChannel(t, n) {
          let r = e.hexChars.indexOf(t.charAt(n)),
            i = e.hexChars.indexOf(t.charAt(n + 1));
          return (r * 16 + i) / 255;
        }
        static distanceFromOriginAngle(e, t, n) {
          let r = t / (Math.sin(n) - e * Math.cos(n));
          return r < 0 ? 1 / 0 : r;
        }
        static distanceFromOrigin(e, t) {
          return Math.abs(t) / Math.sqrt(e ** 2 + 1);
        }
        static min6(e, t, n, r, i, a) {
          return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
        }
        rgbToHex() {
          ((this.hex = `#`),
            (this.hex += e.rgbChannelToHex(this.rgb_r)),
            (this.hex += e.rgbChannelToHex(this.rgb_g)),
            (this.hex += e.rgbChannelToHex(this.rgb_b)));
        }
        hexToRgb() {
          ((this.hex = this.hex.toLowerCase()),
            (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
        }
        xyzToRgb() {
          ((this.rgb_r = e.fromLinear(
            e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
          )),
            (this.rgb_g = e.fromLinear(
              e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
            )),
            (this.rgb_b = e.fromLinear(
              e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
            )));
        }
        rgbToXyz() {
          let t = e.toLinear(this.rgb_r),
            n = e.toLinear(this.rgb_g),
            r = e.toLinear(this.rgb_b);
          ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
            (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
            (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
        }
        xyzToLuv() {
          let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            n = 4 * this.xyz_x,
            r = 9 * this.xyz_y;
          (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
            (this.luv_l = e.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                (this.luv_v = 13 * this.luv_l * (r - e.refV))));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
            return;
          }
          let t = this.luv_u / (13 * this.luv_l) + e.refU,
            n = this.luv_v / (13 * this.luv_l) + e.refV;
          ((this.xyz_y = e.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
            (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let e = Math.atan2(this.luv_v, this.luv_u);
            ((this.lch_h = (e * 180) / Math.PI), this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
          }
        }
        lchToLuv() {
          let e = (this.lch_h / 180) * Math.PI;
          ((this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(e) * this.lch_c),
            (this.luv_v = Math.sin(e) * this.lch_c));
        }
        calculateBoundingLines(t) {
          let n = (t + 16) ** 3 / 1560896,
            r = n > e.epsilon ? n : t / e.kappa,
            i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
            a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
            o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
            s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
            c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
            l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
            u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
            d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
            f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
          ((this.r0s = i / o),
            (this.r0i = (a * t) / o),
            (this.r1s = i / (o + 126452)),
            (this.r1i = ((a - 769860) * t) / (o + 126452)),
            (this.g0s = s / l),
            (this.g0i = (c * t) / l),
            (this.g1s = s / (l + 126452)),
            (this.g1i = ((c - 769860) * t) / (l + 126452)),
            (this.b0s = u / f),
            (this.b0i = (d * t) / f),
            (this.b1s = u / (f + 126452)),
            (this.b1i = ((d - 769860) * t) / (f + 126452)));
        }
        calcMaxChromaHpluv() {
          let t = e.distanceFromOrigin(this.r0s, this.r0i),
            n = e.distanceFromOrigin(this.r1s, this.r1i),
            r = e.distanceFromOrigin(this.g0s, this.g0i),
            i = e.distanceFromOrigin(this.g1s, this.g1i),
            a = e.distanceFromOrigin(this.b0s, this.b0i),
            o = e.distanceFromOrigin(this.b1s, this.b1i);
          return e.min6(t, n, r, i, a, o);
        }
        calcMaxChromaHsluv(t) {
          let n = (t / 360) * Math.PI * 2,
            r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
            i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
            a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
            o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
            s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
            c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
          return e.min6(r, i, a, o, s, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
            let e = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (e / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHsluv(this.lch_h);
            ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
            let e = this.calcMaxChromaHpluv();
            this.lch_c = (e / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHpluv();
            ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hpluvToRgb() {
          (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hsluvToHex() {
          (this.hsluvToRgb(), this.rgbToHex());
        }
        hpluvToHex() {
          (this.hpluvToRgb(), this.rgbToHex());
        }
        rgbToHsluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv());
        }
        rgbToHpluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv());
        }
        hexToHsluv() {
          (this.hexToRgb(), this.rgbToHsluv());
        }
        hexToHpluv() {
          (this.hexToRgb(), this.rgbToHpluv());
        }
      }),
      (bS.hexChars = `0123456789abcdef`),
      (bS.refY = 1),
      (bS.refU = 0.19783000664283),
      (bS.refV = 0.46831999493879),
      (bS.kappa = 903.2962962),
      (bS.epsilon = 0.0088564516),
      (bS.m_r0 = 3.240969941904521),
      (bS.m_r1 = -1.537383177570093),
      (bS.m_r2 = -0.498610760293),
      (bS.m_g0 = -0.96924363628087),
      (bS.m_g1 = 1.87596750150772),
      (bS.m_g2 = 0.041555057407175),
      (bS.m_b0 = 0.055630079696993),
      (bS.m_b1 = -0.20397695888897),
      (bS.m_b2 = 1.056971514242878),
      (xS = new bS()),
      (SS = {
        rgb: RegExp(
          `rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        rgba: RegExp(
          `rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsl: RegExp(
          `hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsla: RegExp(
          `hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsv: RegExp(
          `hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsva: RegExp(
          `hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
      }),
      (CS =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (wS = (e) => {
        let { r: t, g: n, b: r, a: i } = Pa(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (TS = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Ia({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (ES = (e) => {
        let { r: t, g: n, b: r, a: i } = Pa(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (DS = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Ia({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (OS = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return La(this);
        }
        rgb() {
          return Va(this);
        }
        hsl() {
          return ba(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(za(t));
            case `srgb`:
              return new e(Ba(za(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Ba({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = J(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = Ma(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!B(t) || !J.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (kS = new Map()),
      (J = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = kS.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (kS.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Ha(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && ka(e) !== !1),
          (e.isColorObject = (e) =>
            H(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => ya(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && OS.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...ha(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = Ca(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = Ca(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = ya(e.r, e.g, e.b, !0);
            for (let e of Object.keys(yS)) if (yS[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: da(i, [0, 1], [t.r, r.r], a),
                g: da(i, [0, 1], [t.g, r.g], a),
                b: da(i, [0, 1], [t.b, r.b], a),
                a: da(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: da(i, [0, 1], [u, u + f], a),
                s: da(i, [0, 1], [c.s, l.s], a),
                l: da(i, [0, 1], [c.l, l.l], a),
                a: da(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(ga(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => ba(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (AS = (e) => e instanceof Xe),
      (jS = jy().EventEmitter),
      (MS = class {
        _emitter = new jS();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (NS = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (PS = bb.requestAnimationFrame || NS),
      (FS = (e) => PS(e)),
      (IS = 1 / 60),
      (LS = class extends MS {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          IS = e;
        }
        static get TimeStep() {
          return IS;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), FS(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * IS;
        }
        tick = () => {
          this._started &&
            (FS(this.tick),
            this.emit(`update`, this._frame, IS),
            this.emit(`render`, this._frame, IS),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (RS = new LS()),
      (zS = { target: Ja() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (Y = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => zS.target,
        hasRestrictions: () => {
          let e = zS.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (BS = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      De({
        borderTopWidth: BS(`y`),
        borderLeftWidth: BS(`x`),
        borderRightWidth: BS(`x`),
        borderBottomWidth: BS(`y`),
      }),
      (VS = h.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (HS = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (US = {
        ...HS,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (WS = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (GS = { ...WS, fontWeight: 500 }),
      (KS = {
        ...WS,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (qS = (e) => e),
      (JS =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (YS = ro(
        (e) =>
          JS.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (XS = (e) => () => {
        ra(e);
      }),
      (ZS = () => () => {}),
      (QS = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = eC.useImageSource(e, t, n);
          return S(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      ($S = !1),
      (eC = new Proxy(QS, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? ZS()
              : XS(
                  $S
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (tC = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (nC = [1, 2, 2.2]),
      (rC = [512, 1024, 2048, 4096]),
      (iC = 512),
      (aC = { position: `absolute`, ...tC, top: 0, right: 0, bottom: 0, left: 0 }),
      (oC = `src`),
      (sC = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && oC in e;
        },
      }),
      (cC = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = Eo(ua.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(ua(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => ua.distance(e.a, e.b)),
          e
        );
      })()),
      (X = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => X.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: sa(e.x, t),
          y: sa(e.y, t),
          width: sa(e.width, t),
          height: sa(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: X.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: X.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: ua.distance(t, n), height: ua.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(X.minX)), y: Math.min(...e.map(X.minY)) },
            n = { x: Math.max(...e.map(X.maxX)), y: Math.max(...e.map(X.maxY)) };
          return X.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: X.minX(e), y: X.minY(e) },
          { x: X.minX(e), y: X.maxY(e) },
          { x: X.maxX(e), y: X.minY(e) },
          { x: X.maxX(e), y: X.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < X.minX(e) ||
            t.x > X.maxX(e) ||
            t.y < X.minY(e) ||
            t.y > X.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of X.points(t)) if (!X.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= X.maxX(e) || X.maxX(t) <= e.x || t.y >= X.maxY(e) || X.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = X.maxX(e),
            r = X.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = X.maxY(e),
            r = X.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => X.intersects(t, e)) === void 0,
        isEqual: (e, t) => X.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > X.maxX(e) && (n = t.x - X.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > X.maxY(e) && (r = t.y - X.maxY(e)),
            ua.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: X.minX(e), y: X.minY(e) },
            r = { x: X.minX(t), y: X.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = X.minX(e),
            r = X.minY(e),
            i = X.maxX(e),
            a = X.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = X.cornerPoints(e);
          return [cC(t, n), cC(n, r), cC(r, i), cC(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  W(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              W(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  W(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              W(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = cC(t, X.center(e)),
            r = X.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && cC.intersection(n, t, !0)) {
              let n = lC[e];
              return (U(n, () => `Invalid edge name: ${JSON.stringify(lC)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          U(r, `Rect array is empty`);
          let i = X.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            U(o);
            let s = X.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (lC = [`top`, `right`, `bottom`, `left`]),
      (uC = {
        quickfix: (e) => (
          (Do(e.widthType) || Do(e.heightType)) && (e.aspectRatio = null),
          G(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || Do(e.widthType) || G(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || Do(e.heightType) || G(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (dC = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = uC.quickfix({
              left: G(t) || aa(t),
              right: G(n) || aa(n),
              top: G(r) || aa(r),
              bottom: G(i) || aa(i),
              widthType: Oo(a),
              heightType: Oo(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = hS.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = hS.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? hS.getNumber(t) : null,
              right: d.right ? hS.getNumber(n) : null,
              top: d.top ? hS.getNumber(r) : null,
              bottom: d.bottom ? hS.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? hS.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? hS.getNumber(t?.sizing.height) : null,
            c = Po(e.left, e.right);
          if (o && G(c)) i = o - c;
          else if (n && Do(e.widthType)) i = n.width;
          else if (G(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                W(e.widthType);
            }
          let l = Po(e.top, e.bottom);
          if (s && G(l)) a = s - l;
          else if (n && Do(e.heightType)) a = n.height;
          else if (G(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                W(e.heightType);
            }
          return No(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = dC.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? hS.getNumber(l.width) : null,
            d = l ? hS.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? X.pixelAligned(f) : f;
        },
      }),
      (fC = 200),
      (pC = 200),
      (mC = h.createContext({ parentSize: 0 })),
      (hC = (e) => {
        let t = Ho(),
          { parentSize: n, children: r } = e,
          i = h.useMemo(() => ({ parentSize: n }), [Wo(n), Go(n)]);
        return t === 1
          ? r
            ? g(D, { children: r })
            : null
          : g(mC.Provider, { value: i, children: r });
      }),
      (gC = h.createContext(void 0)),
      (_C = new Set()),
      (yC = `style[data-framer-css-ssr-minified]`),
      (bC = (() => {
        if (!zn()) return new Set();
        let e = document.querySelector(yC)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (xC = `data-framer-css-ssr`),
      (SC = (e, t, n) =>
        h.forwardRef((r, i) => {
          let { sheet: a, cache: o } = h.useContext(gC) ?? {},
            s = n;
          if (!zn()) {
            at(t) && (t = t($o(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            wC.add(e, s);
          }
          return (
            f(() => {
              (s && bC.has(s)) ||
                (at(t)
                  ? t($o(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && Qo(e, a, o));
            }, []),
            g(e, { ...r, ref: i })
          );
        })),
      (CC = class {
        styles = new Set();
        componentIds = new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (wC = new CC()),
      (TC = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (EC = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(EC || {})),
      (DC = EC),
      (OC = `framer-form-input`),
      (kC = `framer-form-input-wrapper`),
      (AC = `framer-form-input-empty`),
      (jC = `framer-form-input-forced-focus`),
      (Z = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (U(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${es(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            U(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (MC = [
        Z(`.${OC}`, {
          padding: Z.variable(DC.Padding),
          background: `transparent`,
          fontFamily: Z.variable(DC.FontFamily),
          fontWeight: Z.variable(DC.FontWeight),
          fontSize: Z.variable(DC.FontSize),
          fontStyle: Z.variable(DC.FontStyle),
          color: Z.variable(DC.FontColor),
          fontFeatureSettings: Z.variable(DC.FontOpenType),
          fontVariationSettings: Z.variable(DC.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: Z.variable(DC.WrapperHeight, `100%`),
          letterSpacing: Z.variable(DC.FontLetterSpacing),
          textAlign: Z.variable(DC.FontTextAlignment),
          lineHeight: Z.variable(DC.FontLineHeight),
        }),
        Z(`.${OC}:focus-visible`, { outline: `none` }),
      ]),
      (NC = [Z(`.${kC}`, { overflow: `hidden` })]),
      (PC = `var(${DC.BorderTopWidth}) var(${DC.BorderRightWidth}) var(${DC.BorderBottomWidth}) var(${DC.BorderLeftWidth})`),
      (FC = [
        `.${kC}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${DC.BorderRadiusTopLeft});
        border-top-right-radius: var(${DC.BorderRadiusTopRight});
        border-bottom-right-radius: var(${DC.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${DC.BorderRadiusBottomLeft});
        corner-shape: var(${DC.CornerShape});
        border-color: var(${DC.BorderColor});
        border-top-width: var(${DC.BorderTopWidth});
        border-right-width: var(${DC.BorderRightWidth});
        border-bottom-width: var(${DC.BorderBottomWidth});
        border-left-width: var(${DC.BorderLeftWidth});
        border-style: var(${DC.BorderStyle});
        transition: var(${DC.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ]),
      (IC = `customError`),
      (LC = `valid`),
      (RC = 10),
      (zC = 8),
      (BC = 16),
      (VC = {
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${BC}px`,
        maskRepeat: `no-repeat`,
        maskSize: `${BC}px`,
        backgroundColor: Z.variable(DC.IconColor),
      }),
      (HC = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${BC}px`,
        boxSizing: `content-box`,
        padding: Z.variable(DC.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...VC,
      }),
      (UC = `--list-style-type`),
      (WC = `--max-list-digits`),
      (GC = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (KC = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (qC = { display: `inline-block` }),
      (JC = { display: `block` }),
      (YC = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${KC.display};
            flex-direction: ${KC.flexDirection};
            justify-content: ${KC.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${ls([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${ls([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${ls([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${qC.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${ls([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${ls([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ls([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${ls([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${ls([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${ls([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${ls([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${ls([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${ls([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${ls([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ls([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${ls([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${ls([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ls([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${ls([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ls([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${ls([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${ls([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ls([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${JC.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${WC}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${us(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (XC = `--text-truncation-display-inline-for-safari-16`),
      (ZC = `--text-truncation-display-none-for-safari-16`),
      (QC = `--text-truncation-line-break-for-safari-16`),
      ($C = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (ew = `(background: -webkit-named-image(i))`),
      (tw = `(contain-intrinsic-size: inherit)`),
      (nw = [
        `@supports ${ew} and (not ${tw}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${$C.join(`, `)} { display: var(${XC}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${$C.map((e) => `${e}::after`).join(`, `)} { content: var(${QC}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${ZC}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${XC}, ${qC.display}) }
    }`,
      ]),
      (rw = `--framer-will-change-override`),
      (iw = `--framer-will-change-effect-override`),
      (aw = `--framer-will-change-filter-override`),
      (ow = `--overflow-clip-fallback`),
      (sw = `--one-if-corner-shape-supported`),
      (cw = (e) => {
        let t = [
            `[data-framer-component-type="Text"] { cursor: inherit; }`,
            `[data-framer-component-text-autosized] * { white-space: pre; }`,
            `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
            `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
            `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
            `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
            `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
            `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
          ],
          n = [
            `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
            `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
          ],
          r = [
            `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
            `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
            `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
          ],
          i = [
            `[data-framer-cursor="pointer"] { cursor: pointer; }`,
            `[data-framer-cursor="grab"] { cursor: grab; }`,
            `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
          ],
          a = [
            `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
            `[data-framer-generated] * { pointer-events: unset }`,
          ],
          o = [
            `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
            `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
            `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          ],
          s = `(background: -webkit-named-image(i))`,
          c = (e) =>
            e
              ? [
                  `body { ${rw}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${rw}: transform; } }`,
                ]
              : [`body { ${rw}: none; ${iw}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${aw}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${aw}: filter; } }`,
                ]
              : [`body { ${aw}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${ow}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${sw}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...YC,
          ...TC,
          `
[data-framer-component-type="Stack"]:not([data-framer-generated]) > *,
[data-framer-component-type="Stack"]:not([data-framer-generated]) > [data-framer-component-type] {
    position: relative;
}`,
          `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
          ...n,
          ...r,
          `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
          `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
          `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
          ...i,
          ...u(e),
          `.svgContainer svg { display: block; }`,
          `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
          ...o,
          d,
          `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
          ...nw,
          f,
        ];
      }),
      (lw = Zo(() => cw(!1))),
      (uw = Zo(() => cw(!0))),
      (dw = In()),
      (fw = h.createContext(!1)),
      (pw = class {
        sharedResizeObserver;
        callbacks = new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (mw = zn() ? new pw() : void 0),
      (hw = `data-framer-size-compatibility-wrapper`),
      (gw = `0.000001px`),
      (_w = ` translateZ(${gw})`),
      (vw = Vn() || Ln() || Hn()),
      (yw = (() => {
        class e extends _ {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? Es(t) : Ds(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !It(this.props, e);
          }
          componentDidUpdate(e) {
            qS(this.props).clip &&
              qS(this.props).radius === 0 &&
              qS(e).radius !== 0 &&
              ks(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (bw = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (xw = {
        hueRotate: (e, t) => J.toHslString(J.hueRotate(J(e), t)),
        setAlpha: (e, t) => J.toRgbString(J.alpha(J(e), t)),
        getAlpha: (e) => {
          let t = ka(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => J.toRgbString(J.multiplyAlpha(J(e), t)),
        toHexValue: (e) => J.toHex(J(e)).toUpperCase(),
        toHex: (e) => J.toHexString(J(e)).toUpperCase(),
        toRgb: (e) => J.toRgb(J(e)),
        toRgbString: (e) => J.toRgbString(J(e)),
        toHSV: (e) => J.toHsv(J(e)),
        toHSL: (e) => J.toHsl(J(e)),
        toHslString: (e) => J.toHslString(J(e)),
        toHsvString: (e) => J.toHsvString(J(e)),
        hsvToHSLString: (e) => J.toHslString(J(_a(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => J.toHex(J(_a(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => J.toHexString(J(_a(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => J.toRgbString(J(_a(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => _a(e.h, e.s, e.v),
        rgbaToString: (e) => J.toRgbString(J(e)),
        rgbToHexValue: (e) => J.toHex(J(e)),
        rgbToHexString: (e) => J.toHexString(J(e)),
        hslToString: (e) => J.toHslString(J(e)),
        hslToRgbString: (e) => J.toRgbString(J(e)),
        toColorPickerSquare: (e) => J.toRgbString(J({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => J(e).isValid !== !1,
        equals: (e, t) =>
          J.isP3String(e) || J.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = J(e)),
              typeof t == `string` && (t = J(t)),
              J.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = J(e);
          return t.a === 1 ? J.toHexString(t) : J.toRgbString(t);
        },
        toFormatString: (e) => (J.isP3String(e) ? e : J.toRgbString(J(e))),
      }),
      (Sw = /var\(.+\)/u),
      (Cw = new Map()),
      (ww = [`stops`]),
      (Tw = [`start`, `end`]),
      (Ew = [`angle`, `alpha`]),
      (Dw = {
        isLinearGradient: (e) => H(e) && Ew.every((t) => t in e) && (Ls(e) || Is(e)),
        hash: (e) => e.angle ^ Fs(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Ps(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (Ow = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (kw = {
        isRadialGradient: (e) => H(e) && Ow.every((t) => t in e) && (Ls(e) || Is(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Fs(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = Ps(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (Aw = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (jw = new Set([...Aw, ...Aw.map((e) => `${e}Capture`)])),
      (Mw = `overflow`),
      (Nw = { x: 0, y: 0, width: 200, height: 200 }),
      (Pw = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (Fw = y(function (e, n) {
        let { name: r, center: i, border: a, _border: o, __portal: s } = e,
          { props: c, children: u } = gs(e),
          d = Js(c),
          f = vs(e),
          p = Us(e),
          m = l(null),
          h = n ?? m,
          _ = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": p,
            "data-framer-highlight": p === `pointer` || void 0,
            "data-layoutid": f,
            "data-framer-offset-parent-id": qS(e)[`data-framer-offset-parent-id`],
          };
        !Ys(e) && r && (qS(_)[`data-framer-name`] = r);
        let [v, y] = qs(c),
          b = Ks(c),
          x = Jo(b);
        (i && !(y && !x && Io(b))
          ? ((d.transformTemplate ||= _s(i)), Object.assign(_, ms(i)))
          : (d.transformTemplate ||= void 0),
          ws(e, h));
        let S = So(e),
          C = Xs(c, b, y, t(fw)),
          T = Ko(
            w(D, {
              children: [
                S
                  ? g(vo, {
                      alt: e.alt ?? ``,
                      image: S,
                      containerSize: y ?? void 0,
                      nodeId: e.id && hs(e.id),
                      layoutId: f,
                    })
                  : null,
                u,
                g(bo, { ...o, border: a, layoutId: f }),
              ],
            }),
            C
          ),
          E = Xo(e.as),
          O = Yo(S);
        return (
          e.fitImageDimension &&
            O &&
            ((v[e.fitImageDimension] = `auto`), (v.aspectRatio = O.width / O.height)),
          w(E, { ..._, ...d, layoutId: f, style: v, ref: h, children: [T, s] })
        );
      })),
      (Iw = fs(
        y(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? g(Fw, { ...e, ref: t }) : null;
        })
      )),
      (Lw = `__LAYOUT_TREE_ROOT`),
      (Rw = h.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (zw = class extends _ {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === Lw && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return g(Rw.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (Bw = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (Vw = class {
        sharedIntersectionObserver;
        callbacks = new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (Hw = a(new Map())),
      (Uw = typeof IntersectionObserver > `u` ? Iy : ic),
      (Ww = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (Gw = h.createContext(null)),
      (Kw = class extends _ {
        layoutMaybeMutated = !1;
        projectionNodes = new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === Lw && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return g(Re.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (qw = (e) => {
        let t = h.useContext(Rw);
        return g(Kw, { ...e, sharedLayoutContext: t });
      }),
      (Jw = h.createContext(!0)),
      (Yw = a({ register: () => {}, deregister: () => {} })),
      (Xw = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = uc(),
          i = l({
            register: s(
              (e) => {
                if (r.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                r.set(e, void 0);
              },
              [r]
            ),
            deregister: s(
              (e) => {
                (r.get(e)?.(), r.delete(e));
              },
              [r]
            ),
          }).current;
        return (
          c(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, at(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          g(Yw.Provider, { value: i, children: n })
        );
      }),
      (Zw = h.memo(function ({
        isLayeredContainer: e,
        isCurrent: n,
        isPrevious: r,
        isOverlayed: i = !1,
        visible: a,
        transitionProps: o,
        children: s,
        backdropColor: u,
        onTapBackdrop: d,
        backfaceVisible: f,
        exitBackfaceVisible: p,
        animation: m,
        exitAnimation: h,
        instant: _,
        initialProps: v,
        exitProps: y,
        position: b = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: x,
        index: S,
        areMagicMotionLayersPresent: C,
        id: T,
        isInitial: E,
      }) {
        let D = R(),
          O = t(Te),
          { persistLayoutIdCache: k } = t(VS),
          A = l({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: pc({}, v, o),
          }),
          j = l(null),
          M = O !== null && !O.isPresent;
        (n && A.current.wasCurrent === void 0 && k(),
          c(() => {
            if (e || !D) return;
            if (M) {
              A.current = { ...A.current, wasBeingRemoved: M };
              return;
            }
            let { wasPrevious: t, wasCurrent: i } = A.current,
              a = (n && !i) || (!M && A.current.wasBeingRemoved && n),
              s = r && !t,
              c = pc(A.current.origins, v, o),
              l = A.current.wasReset;
            (a || s
              ? (D.stop(), D.start({ zIndex: S, ...c, ...o }), (l = !1))
              : l === !1 && (D.stop(), D.set({ zIndex: S, ...Qw, opacity: 0 }), (l = !0)),
              (A.current = {
                wasCurrent: !!n,
                wasPrevious: !!r,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [n, r, M]));
        let N = _ ? { type: !1 } : `velocity` in m ? { ...m, velocity: 0 } : m,
          ee = _ ? { type: !1 } : h || m,
          P = { ...b };
        ((P.left === void 0 || P.right === void 0) && (P.width = `auto`),
          (P.top === void 0 || P.bottom === void 0) && (P.height = `auto`));
        let F = (mc(o) || mc(v)) && (e || n || r) ? 1200 : void 0,
          te = { ...Qw, ...A.current.origins },
          ne = e
            ? {
                initial: { ...te, ...v },
                animate: { ...te, ...o, transition: N },
                exit: { ...te, ...y, transition: m },
              }
            : { animate: D, exit: { ...te, ...y, transition: ee } },
          I = !(M || C === !1),
          re = !!n && I,
          L = n && E;
        return w(Iw, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || M || (n && x) ? S : void 0,
            pointerEvents: void 0,
            visibility: a ? `visible` : `hidden`,
            perspective: F,
          },
          children: [
            e &&
              g(Iw, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: m,
                initial: { opacity: _ && a ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: u || `transparent`,
                onTap: M ? void 0 : d,
              }),
            g(Iw, {
              ...P,
              ...ne,
              transition: {
                default: N,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: M ? p : f,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!n,
              style: { pointerEvents: void 0, opacity: L || e || (n && x) ? 1 : 0 },
              "data-is-present": I ? void 0 : !1,
              ref: j,
              children: g(Gw.Provider, {
                value: j,
                children: g(Jw.Provider, {
                  value: re,
                  children: g(Xw, {
                    isCurrent: re,
                    isOverlayed: i,
                    children: g(qw, {
                      isLead: n,
                      animatesLayout: !!x,
                      transition: N,
                      isExiting: !I,
                      isOverlayed: i,
                      id: T,
                      children: s,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, fc)),
      (Qw = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      ($w = class {
        warning = () => {
          ra(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (eT = a(new $w())),
      (tT = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (nT = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (rT = Xy(Qw)),
      (iT = h.createContext(void 0)),
      (aT = h.createContext(void 0)),
      (oT = (() => {
        class e extends _ {
          #e = null;
          state = nT();
          static defaultProps = { enabled: !0 };
          static contextType = iT;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !To(t) || !wo(t)) return;
            let n = { ...tT.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = vc(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!To(t) || !wo(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, tT.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = vc(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !To(e) || !wo(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, tT.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, tT.Fade, t);
          }
          push(e, t) {
            this.#i(e, hc(t), t);
          }
          modal(e, t) {
            this.#i(e, tT.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, gc(t), t);
          }
          flip(e, t) {
            this.#i(e, _c(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, tT.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = Nc(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              U(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              U(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                g(
                  Zw,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: Uc(o, e),
                    transitionProps: u,
                    animation: Hc(o, e),
                    backfaceVisible: Bc(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: g(Zs, { children: Gc({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              g(
                Zw,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: zc(n, t),
                  transitionProps: Vc(n, t),
                  instant: Uc(n, t, !0),
                  animation: Hc(n, t),
                  exitProps: e.transition.enter,
                  visible: Wc(n, t),
                  backdropColor: Lc(e.transition),
                  backfaceVisible: Rc(n, t),
                  onTapBackdrop: Kc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: Gc({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return g(Iw, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: g(eT.Provider, {
                value: this,
                children: w(aT.Provider, {
                  value: i,
                  children: [
                    g(Zw, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: Pc(n),
                      animation: Fc(n),
                      backfaceVisible: Ic(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: g(Ya, {
                        children: g(zw, {
                          children: g(Ve, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    g(Ve, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (sT = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (cT = fs(h.forwardRef(qc))),
      Oe(Py(), 1),
      (lT = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(lT || {})),
      (uT = `optional`),
      Oe(Py(), 1),
      Oe(Py(), 1),
      (dT = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (fT = Symbol(`private`)),
      (pT = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [fT]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new mS(),
                reset() {
                  for (let t in i)
                    if (dT(i, t)) {
                      let n = dT(e, t) ? qS(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, hT);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[fT].reset()),
          (e.addObserver = (e, t) => e[fT].observers.add(t)),
          e
        );
      })()),
      (mT = class {
        set = (e, t, n, r) => {
          if (t === fT) return !1;
          let i = e[fT],
            a,
            o;
          if (
            (aa(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = hS(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = qS(e)[t];
          if (l !== void 0) {
            aa(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (qS(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === fT) return qS(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[fT].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(fT);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== fT) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (hT = new mT()),
      (gT = `opacity`),
      (_T = (() => {
        function e(t = {}) {
          let n = pT(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => pT.resetObject(e));
          }),
          (e.addObserver = (e, t) => pT.addObserver(e, t)),
          e
        );
      })()),
      (vT = { update: 0 }),
      (yT = h.createContext({ update: NaN })),
      (bT = class extends _ {
        observers = [];
        state = vT;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), RS.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), _T.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            _T._stores.forEach((e) => {
              let t = _T.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            g(yT.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      Oe(Py(), 1),
      (xT = `__framer__`),
      (ST = xT.length),
      (CT = h.createContext(void 0)),
      (wT = h.createContext(void 0)),
      (TT = `ssr-variant`),
      (ET = `ssr-variant-group-separator`),
      (DT = h.forwardRef(function (e, t) {
        let n = hl(t),
          r = h.useContext(wT),
          i = h.useSyncExternalStore(Vy, Uy, Hy),
          a = Qa(() => (i ? (zn() ? 1 : 2) : 0)),
          o = h.useContext(CT);
        return si(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, Cl(t, c, i));
            case 1:
              return vl(i, s, c, u, l, d, n, t);
            case 2:
              return vl(i, s, c, u, l, d, ml, void 0);
            default:
              W(a);
          }
        }, [o, r, n, e]);
      })),
      (OT = SC(DT, `.${TT} { display: contents }`, `PropertyOverrides`)),
      (kT = `default`),
      (AT = new Set([kT])),
      (jT = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (U(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (U(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = kT, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return kT;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = yl(r)) : kT;
        }
        setAll(e, t = AT, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = at(n.transformTemplate) ? n.transformTemplate?.({}, NT) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: H(a) ? a : void 0,
              animate: H(o) ? o : void 0,
              transformTemplate: B(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (MT = new jT()),
      (NT = `__Appear_Animation_Transform__`),
      (PT = `data-framer-appear-id`),
      (FT = `data-framer-appear-animation`),
      (IT = (e) => {
        if (to())
          return {
            animate: Tl(e.animate) ? e.animate : void 0,
            initial: Tl(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (LT = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (RT = (e) => ({
        x: I(e?.x ?? 0),
        y: I(e?.y ?? 0),
        opacity: I(e?.opacity ?? 1),
        scale: I(e?.scale ?? 1),
        rotate: I(e?.rotate ?? 0),
        rotateX: I(e?.rotateX ?? 0),
        rotateY: I(e?.rotateY ?? 0),
        skewX: I(e?.skewX ?? 0),
        skewY: I(e?.skewY ?? 0),
        transformPerspective: I(e?.transformPerspective ?? 0),
      })),
      (zT = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (BT = { willChange: `transform` }),
      Object.freeze(BT),
      (VT = {}),
      Object.freeze(VT),
      (HT = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (UT = () => {
        let e = l();
        return (
          c(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (WT = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (GT = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (KT = 1),
      (qT = 4),
      (JT = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (YT = [`animate`, `animate`]),
      (XT = { inputRange: [], outputRange: [] }),
      (ZT = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (QT = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      ($T = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (eE = [0, 1]),
      (tE = { parallax: WT, styleAppear: JT, styleTransform: ZT, loop: HT, presence: GT }),
      (nE = Xy(tE)),
      (rE = (e) => e.reduce((e, t) => (e += t), 0)),
      (iE = (e) => e.reduce((e, t) => (e *= t), 1)),
      (aE = `current`),
      (oE = (e) =>
        h.forwardRef((t, n) => {
          if (t.__withFX)
            return g(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = IT(t);
          if (r) return g(e, { ...t, ...r, ref: n });
          let {
              parallax: i = {},
              styleAppear: a = {},
              styleTransform: o = {},
              presence: s = {},
              loop: c = {},
              forwardedProps: l,
              targetOpacityValue: u,
              withPerspective: d,
              inSmartComponent: f = !1,
            } = Jl(t),
            p = tc(n),
            { values: m, style: _ } = Pl(s, p, f, t.style, t[de]),
            { values: v, style: y } = Al(i, p, t.style?.visibility),
            { values: b, style: x } = Kl(o, p),
            { values: S, style: C } = Hl(a, p),
            { values: w, style: T } = Ol(c, p),
            E = h.useMemo(() => {
              let e = new Xe(u ?? 1);
              return {
                scale: [S.scale, w.scale, m.scale, b.scale],
                opacity: [S.opacity, w.opacity, m.opacity, e, b.opacity],
                x: [S.x, w.x, m.x, b.x],
                y: [S.y, w.y, v.y, m.y, b.y],
                rotate: [S.rotate, w.rotate, m.rotate, b.rotate],
                rotateX: [S.rotateX, w.rotateX, m.rotateX, b.rotateX],
                rotateY: [S.rotateY, w.rotateY, m.rotateY, b.rotateY],
                skewX: [S.skewX, w.skewX, m.skewX, b.skewX],
                skewY: [S.skewY, w.skewY, m.skewY, b.skewY],
                transformPerspective: [b.transformPerspective, S.transformPerspective],
              };
            }, [u, b, v, S, w, m]);
          Xl(t.style, E);
          let D = ke(E.scale, iE),
            O = ke(E.opacity, iE),
            k = ke(E.x, rE),
            A = ke(E.y, rE),
            j = ke(E.rotate, rE),
            M = ke(E.rotateX, rE),
            N = ke(E.rotateY, rE),
            ee = ke(E.skewX, rE),
            P = ke(E.skewY, rE),
            F = ke(E.transformPerspective, rE),
            { drag: te, dragConstraints: ne } = l;
          bs(te && Yl(ne) ? ne : void 0);
          let I = {
            opacity: O,
            scale: D,
            x: k,
            y: A,
            rotate: j,
            rotateX: M,
            rotateY: N,
            skewX: ee,
            skewY: P,
          };
          lt(d) && (I.transformPerspective = F);
          let re = Zl(t.animate) ? t.animate : void 0,
            L = Zl(t.initial) ? t.initial : void 0,
            ie = Zl(t.exit) ? t.exit : void 0,
            ae = f && !s.presenceInitial ? { initial: L, animate: re, exit: ie } : {};
          return g(e, {
            ...l,
            ...ae,
            __withFX: !0,
            style: { ...t.style, ...y, ...x, ...T, ...I, ...C, ..._ },
            values: m,
            ref: p,
          });
        })),
      (sE = a({})),
      (cE = h.createContext({})),
      (lE = h.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = h.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = hl(a);
        return g(cE.Provider, { value: o, children: s(r, i) });
      })),
      (uE = (e) =>
        h.forwardRef((t, n) =>
          g(e, { layoutId: vs(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (dE = {}),
      (fE = () => dE),
      (pE = (e) => {
        dE = e;
      }),
      (mE = !1),
      (hE = class extends _ {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!eu(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              vt(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          vn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!eu(e)) throw e;
          return ((mE = !0), this.props.children);
        }
      }),
      (gE = N === void 0 ? null : new Promise(() => {})),
      (_E = g(tu, {})),
      (vE = a(!1)),
      (vE.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (yE = g(ru, {})),
      (bE = class extends _ {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (au(this.props.getErrorMessage(), t?.componentStack), iu(e, t));
        }
        render() {
          let { children: e, fallback: t = yE } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (xE = class extends _ {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            iu(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (SE = h.createContext(void 0)),
      (CE = `code-crash:`),
      (wE = uE(
        h.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l
        ) {
          let u = Qa(() => (t ? `${t}-container` : void 0)),
            d = Xo(n),
            f = yu(
              h.Children.map(e, (e) =>
                h.isValidElement(e) ? h.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return g(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: g(fw.Provider, {
              value: !0,
              children: g(xx.Provider, {
                value: i ?? null,
                children: g(Za, {
                  enabled: !1,
                  children: g(Je, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (TE = h.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = yu(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Xo(f);
          return g(xx.Provider, {
            value: a ?? null,
            children: g(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return g(xx.Provider, {
            value: a ?? null,
            children: g(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (EE = a({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (DE = `framer-cursor-none`),
      (OE = `framer-pointer-events-none`),
      (kE = b(function ({ children: e }) {
        let t = Qa(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = bu(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = z();
        return w(EE.Provider, { value: t, children: [e, !n && g(NE, {})] });
      })),
      (AE = SC(
        kE,
        [
          `.${DE}, .${DE} * { cursor: none !important; }`,
          `.${OE}, .${OE} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (jE = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (ME = `data-framer-portal-id`),
      (NE = b(function () {
        let { onRegisterCursors: e } = t(EE),
          [n, r] = i(!1),
          a = L(0),
          o = L(0),
          u = L(0),
          d = l(null),
          f = l({ cursors: {}, cursorHash: void 0 }),
          m = ys();
        (j(() => {
          let e = bb.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? p(() => r(!1)) : r(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || r(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          c(() => {
            if (!n) return;
            let e = 0,
              t = 0;
            function r() {
              (a.set(e), o.set(t), Ae(u, 1, { type: `tween`, duration: 0.2 }));
            }
            let i = () => {
              if (ct(f.current.cursors)) return;
              let n = wu(e, t);
              n !== f.current.cursorHash && ((f.current.cursorHash = n), Me.update(() => m()));
            };
            function s(n) {
              if (n.pointerType === `touch`) {
                Be(i);
                return;
              }
              (Me.read(i, !0), (e = n.clientX), (t = n.clientY), Me.update(r));
            }
            function c(e) {
              if (e.target === d.current || !d.current) return;
              let t = new PointerEvent(e.type, {
                bubbles: !0,
                cancelable: e.cancelable,
                pointerType: e.pointerType,
                pointerId: e.pointerId,
                composed: e.composed,
                isPrimary: e.isPrimary,
                buttons: e.buttons,
                button: e.button,
              });
              Me.update(() => {
                d.current?.dispatchEvent(t);
              });
            }
            return (
              bb.addEventListener(`pointermove`, s),
              document.addEventListener(`pointerdown`, c),
              document.addEventListener(`pointerup`, c),
              Me.read(i, !0),
              () => {
                (bb.removeEventListener(`pointermove`, s),
                  document.removeEventListener(`pointerdown`, c),
                  document.removeEventListener(`pointerup`, c),
                  Be(i));
              }
            );
          }, [u, a, o, m, n]),
          c(() => {
            if (!n) return;
            function e() {
              Ae(u, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              bb.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), bb.removeEventListener(`blur`, e));
              }
            );
          }, [u, n]),
          j(() => {
            function t(e) {
              ((f.current.cursors = e),
                (f.current.cursorHash = ct(e) ? null : wu(a.get(), o.get())),
                m());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(DE, !1));
            };
          }, [a, o, e, m]));
        let { cursors: h, cursorHash: _ } = f.current,
          v = _ ? h[_] : null,
          y = xu(v);
        j(() => {
          n && document.body.classList.toggle(DE, y);
        }, [y, n]);
        let b = v?.component,
          x = v?.transition ?? { duration: 0 },
          S = x.duration === void 0 ? x : { ...x, duration: x.duration * 1e3 },
          C = ee(a, S),
          w = ee(o, S),
          E = ke(() => C.get() + (v?.offset?.x ?? 0)),
          D = ke(() => w.get() + (v?.offset?.y ?? 0)),
          O = v?.alignment,
          k = v?.placement,
          A = s((e, t) => `translate(${Cu(k, O)}) ${t}`, [O, k]);
        return !n || !v || !b
          ? null
          : g(T, {
              children: g(b, {
                transformTemplate: A,
                style: { ...jE, x: E, y: D, opacity: u },
                globalTapTarget: !0,
                variant: v?.variant,
                ref: d,
                className: OE,
              }),
            });
      })),
      (PE = `webPageId`),
      (FE = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            U(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (U(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((Ly && !Hn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(Du(e), e), this.collectedLinks.set(Du(t), t));
          let n = this.nestingInfo.get(Du(e)) ?? new Set();
          (n.add(Du(t)), this.nestingInfo.set(Du(e), n));
        }
      }),
      (IE = new FE()),
      (LE = `element`),
      (RE = `collection`),
      (zE = `collectionItemId`),
      (BE = `pathVariables`),
      (VE = `framer/page-link,`),
      (HE = a(void 0)),
      (UE = `overlay`),
      (WE = `template-overlay`),
      (GE = h.forwardRef(function ({ Component: e, ...t }, n) {
        return e ? g(e, { ...t, ref: n }) : null;
      })),
      (KE = class extends _ {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((N.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(vt(Ry ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          vn(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (Ry && document.getElementById(`main`)?.innerHTML) || ``;
          return g(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${vt()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (JE = /:([a-z]\w*)/gi),
      (YE = a(void 0)),
      (XE = new Map()),
      (ZE = 500),
      (QE = 500),
      (eD = !1),
      (tD = 500),
      (nD = 0.9),
      (rD = 1.7),
      (iD = 4),
      (aD = 1 / 0),
      (oD = new WeakMap()),
      (sD = new Set()),
      (cD = new Map()),
      (lD = !ix || typeof IntersectionObserver > `u` ? null : fd()),
      (uD = qu(
        y(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: s,
            scopeId: c,
            motionChild: l,
            ...u
          },
          d
        ) {
          let f = zt(),
            p = Vt(),
            m = Zu(),
            { activeLocale: h, locales: g } = sr(),
            _ = yd(),
            y = ur(),
            b = Ou(),
            x = bd({ nodeId: s, clickTrackingId: i, router: f, href: t, activeLocale: h }),
            C = S(() => {
              if (!t) return {};
              let e = Eu(t) ? t : Fu(t);
              if (!e) return {};
              if (B(e))
                return kd(
                  e,
                  f,
                  p,
                  {
                    openInNewTab: n,
                    trackLinkClick: x,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  y,
                  h?.id,
                  g,
                  m
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = _(i, s, h);
              if (ht(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: v,
                  locale: b,
                } = Ju(f, p, e, h, c, m),
                S = md(n, !0),
                C = S === `_blank`,
                w = Od(u, C),
                T = { pathVariables: v, locale: b },
                E = wd(u, w, (e) =>
                  Sd(
                    f,
                    l,
                    () =>
                      y(l, T, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    v,
                    r,
                    e
                  )
                );
              return {
                href: u,
                target: S,
                onClick: Cd(u, x, E),
                "data-framer-page-link-current": (p && Qu(p, e, m)) || void 0,
                navigate: E,
                preload: () =>
                  y(l, T, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: v,
                _locale: b,
                _navigationUrl: w,
              };
            }, [t, f, h, m, n, p, r, x, a, g, o, _, y]),
            w = tc(v(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: T,
              preload: E,
              _routeId: D,
              _pathVariables: O,
              _locale: k,
              _navigationUrl: A,
              ...j
            } = C;
          nc(
            w,
            (e) => {
              if (!(e === null || !D || !E || !A || b))
                return lD?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`);
            },
            [E, D, O, k, A, b]
          );
          let M = !!T;
          return Lu(
            hl(d).cloneAsArray(e, (e) => Ad(e, { ...u, ...Md(j, l, M) }, w)),
            c,
            s,
            t,
            C,
            w
          );
        })
      )),
      (dD = `framer`),
      (fD = 3),
      (pD = 30),
      (mD = 1e4),
      (hD = `__framer`),
      (gD = `3`),
      (_D = [
        `website`,
        `company`,
        `message`,
        `subject`,
        `title`,
        `description`,
        `feedback`,
        `notes`,
        `details`,
        `remarks`,
        `comments`,
      ]),
      (vD = Date.now()),
      (yD = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (bD = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (xD = () => ((Date.now() - vD) / 1e3).toFixed(2)),
      (SD = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          h.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          h.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = xD())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`);
            o &&
              Object.defineProperty(n, "value", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = xD()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = xD()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, "value", o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          g(`input`, {
            ref: t,
            type: `text`,
            name: n,
            suppressHydrationWarning: !0,
            tabIndex: -1,
            autoComplete: `one-time-code`,
            "aria-hidden": `true`,
            style: { position: `absolute`, transform: `scale(0)` },
            defaultValue: ``,
            "data-1p-ignore": !0,
            "data-lpignore": `true`,
            "data-form-type": `other`,
            "data-bwignore": !0,
          })
        );
      }),
      (CD = { state: `pending` }),
      (wD = { state: `success` }),
      (TD = { state: `incomplete` }),
      (ED = { state: `complete` }),
      (DD = { state: `error` }),
      (OD = h.createContext(void 0)),
      (kD = h.forwardRef(function (
        {
          action: e,
          children: n,
          redirectUrl: r,
          onSuccess: i,
          onError: a,
          onLoading: o,
          submitTrackingId: s,
          nodeId: c,
          ...l
        },
        u
      ) {
        let d = h.useRef(null),
          f = u ?? d,
          {
            states: m,
            convertHoneypotFieldsForSubmission: _,
            replaceHoneypotWithMetadata: v,
          } = Vd(),
          y = zt(),
          b = Vt(),
          x = Zu(),
          S = kn(),
          [C, T] = h.useReducer(Gd, TD),
          { activeLocale: E, locales: D } = sr(),
          O = t(OD),
          k = h.useRef({ onSuccess: i, onError: a, onLoading: o });
        k.current = { onSuccess: i, onError: a, onLoading: o };
        let A = h.useRef(!1);
        async function j(e) {
          if (B(e)) {
            let t = Yu(y, e, x, D);
            if (!t) {
              Jd(e, f);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            y.navigate?.(n, r, i);
            return;
          }
          U(
            Eu(e),
            () => `Expected link to be either a LinkToWebPage or a string: ${JSON.stringify(e)}`
          );
          let t = await _d(e.unresolvedPathSlugs, e.unresolvedHashSlugs, E, S),
            { routeId: n, elementId: r, pathVariables: i } = Ju(y, b, e, E, t, x);
          y.navigate?.(n, r, i);
        }
        let M = async (t) => {
            if ((t.preventDefault(), !e || !O || A.current)) return;
            ((A.current = !0), _());
            let n = new FormData(t.currentTarget),
              i = Ld(t.currentTarget);
            (await Zb({ priority: `user-visible`, continueAfter: `paint` }),
              v(n),
              p(() => T({ type: `submit` })),
              Bd(n, bb.document));
            for (let [e, t] of n) t instanceof File && n.delete(e);
            try {
              (k.current.onLoading?.(),
                Ud({ router: y, nodeId: c, submitTrackingId: s, activeLocale: E }),
                await Xd(e, n, i, O),
                p(() => T({ type: `success` })),
                k.current.onSuccess?.(),
                r && (await j(r)));
            } catch (e) {
              (p(() => T({ type: `error` })), k.current.onError?.(), console.error(e));
            }
            A.current = !1;
          },
          N = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), M(e)));
          },
          ee = async (e) => {
            let t = e.currentTarget;
            (await Zb({ priority: `background`, continueAfter: `paint` }),
              p(() => T({ type: Yd(t) ? `incomplete` : `complete` })));
          };
        return w(he.form, {
          ...l,
          onSubmit: Kd(C) ? M : qd,
          onKeyDown: N,
          onChange: ee,
          ref: f,
          children: [n(C), g(Hd, { states: m })],
        });
      })),
      (AD = `__framer_force_showing_editorbar_since`),
      (jD = class extends _ {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (MD = () => {
        try {
          return !!localStorage[AD];
        } catch {
          return !1;
        }
      }),
      (ND = () => !MD()),
      (PD = (() => {
        let e = a(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (FD = null),
      (ID = null),
      By(rf),
      (LD = (e, n, r, i, a, o) => {
        let s = t(OD),
          u = l(),
          d = kn(),
          f = l(!0);
        return (
          c(() => {
            function t() {
              (!FD || !ID) && rf();
              let t = r ? new URL(r, bb.location.href) : bb.location,
                c = {
                  version: xb,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? n,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: t.href,
                  hostname: t.hostname,
                  pathname: t.pathname,
                  search: t.search || null,
                  hash: t.hash || null,
                  timezone: FD,
                  locale: ID,
                },
                l = f.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = l ?? null;
                    if (l === void 0) {
                      let n = e.collectionId && d?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && B(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (ht(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (u.current = t()),
                n = e instanceof Promise ? await e : e;
              ((u.current = n),
                f.current ? (f.current = !1) : vn(`published_site_pageview`, n, `eager`));
            })();
            let c = async (e) => {
              if (e.persisted) {
                let e = (u.current = t()),
                  n = e instanceof Promise ? await e : e;
                ((u.current = n), vn(`published_site_pageview`, n, `eager`));
              }
            };
            return (
              N.addEventListener(`pageshow`, c),
              () => {
                N.removeEventListener(`pageshow`, c);
              }
            );
          }, [e, n, r, i, a, s, d, o]),
          u
        );
      }),
      (RD = 0),
      (zD = 500),
      (BD = 200),
      (VD = `main`),
      (HD = `framerGeneratedPage`),
      (UD = `<!-- Start of headStart -->`),
      (WD = `<!-- End of headStart -->`),
      (GD = `<!-- Start of headEnd -->`),
      (KD = `<!-- End of headEnd -->`),
      (qD = `<!-- Start of bodyStart -->`),
      (JD = `<!-- End of bodyStart -->`),
      (YD = `<!-- Start of bodyEnd -->`),
      (XD = `<!-- End of bodyEnd -->`),
      (ZD = h.createContext(void 0)),
      (QD = { status: `loading`, data: void 0 }),
      ($D = 5e3),
      (eO = () => {}),
      (tO = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = new Map();
        #e = new Map();
        #t = new Set();
        #n = new Map();
        #r = new Map();
        #i = new Map();
        #a = new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = Zf(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = Zf(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = bb.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = this.#r.get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          this.#a.set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              tp(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = ll(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && tp(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!zn() || !Au(e.url, !1)) return;
          let t = Zf(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = ep(n, e);
          return (e.resultOutputType === `image` && B(i) && (await Jf(i).catch(eO)), i);
        }
        async fetchWithCache(e) {
          if (!zn()) return;
          let t = Zf(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && tp(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, QD);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !this.#t.has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!Au(r, !1)) return eO;
          let a = Zf(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n &&
                (n.delete(t),
                n.size === 0 && this.#e.delete(a),
                this.#e.size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (nO = a(void 0)),
      (rO = a(!0)),
      (iO = ({ children: e, client: t }) => {
        let [n] = i(() => t ?? new tO()),
          [r, a] = i(!0);
        return (
          c(
            () => (
              n.hydrateCache(),
              p(() => {
                a(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          g(rO.Provider, { value: r, children: g(nO.Provider, { value: n, children: e }) })
        );
      }),
      (Ue.WillChange = $e),
      (aO = qu(
        y(function ({ links: e, children: t, ...n }, r) {
          return hl(r)(t(rp((t) => e.map(t), [e])), n);
        })
      )),
      (oO = { priority: void 0, canYield: !0 }),
      (sO = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Sp(e, t);
            case `boolean`:
              return wp(e);
            case `color`:
              return Dp(e);
            case `date`:
              return kp(e);
            case `enum`:
              return jp(e);
            case `file`:
              return Np(e);
            case `link`:
              return Fp(e);
            case `number`:
              return Lp(e);
            case `object`:
              return Bp(e, t);
            case `responsiveimage`:
              return Hp(e);
            case `richtext`:
              return Wp(e);
            case `string`:
              return Jp(e);
            case `vectorsetitem`:
              return Kp(e);
            case `unknown`:
              return e;
            default:
              W(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return ot(e)
            ? { type: `boolean`, value: e }
            : ft(e)
              ? { type: `date`, value: e.toISOString() }
              : V(e)
                ? { type: `number`, value: e }
                : B(e)
                  ? { type: `string`, value: e }
                  : st(e)
                    ? { type: `array`, value: e.map(sO.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && Xp(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && Xp(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && Xp(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && Xp(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && Xp(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => sO.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => sO.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = Yp(e),
            i = Yp(t);
          return ut(r) || ut(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = Yp(e),
            i = Yp(t);
          return ut(r) || ut(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = Yp(e),
            i = Yp(t);
          return ut(r) || ut(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(sO.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return B(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              W(e);
          }
        },
      }),
      (cO = { type: `unknown`, isNullable: !0 }),
      (lO = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = tl(e);
          U(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (U(n !== `array`, `Array properties are not supported`),
              U(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        collection;
        locale;
        schema;
        indexes = [];
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (dt(i)) continue;
            let a = this.schema[t];
            if (!lt(a)) {
              if ((U(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await Zp(this.collection, this.locale))[t]?.[n];
          return rb.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await Zp(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = cp(e);
            i && (await i);
            let a = t[r];
            U(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await Zp(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = cp(t);
            e && (await e);
            let a = n[Number(i)];
            (U(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (uO = new Map()),
      (dO = new WeakMap()),
      (fO = `$r_`),
      (pO = new Map()),
      (mO = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = um(e, t)), (this.priority = im(n)));
        }
        *resolveArrayValue(e) {
          return yield* pp(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* fp(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          U(sm(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          U(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return mt(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          U(lm(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (U(n, `Can't find collection for vector set item pointer`),
            U(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return mt(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (hO = `index`),
      (gO = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), q(this.name, ...e));
        }
      }),
      (_O = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new yO();
        fields = new Q();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (vO = class {
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Q();
      }),
      (yO = class extends gO {
        name = `Indexes`;
      }),
      (bO = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          U(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                U(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: om(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                U(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: cm(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Q = class extends gO {
        name = `Fields`;
      }),
      (xO = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return q(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (SO = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return q(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== hO) return !1;
          return !0;
        }
      }),
      (CO = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return q(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (wO = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (U(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (U(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = new Map();
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new SO();
        }
        getRequiredResolvedFields() {
          let e = new Q();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new CO(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          U(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (U(e, `Field must exist`), e.field);
        }
      }),
      (TO = 1e3),
      ($ = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = mm(),
            i = hm(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (EO = class {
        pointers = new Map();
        values = new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (DO = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        fields;
        tuples;
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (OO = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (kO = class extends OO {
        group;
        getGroup() {
          return (U(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (U(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return lp(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return up(this.evaluate(void 0), void 0, e);
        }
      }),
      (AO = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return q(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (jO = class e extends kO {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        projections;
        passthrough;
        inputGroup;
        getHash() {
          return q(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Q();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Q();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new CO(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new $(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = $.max(i, n);
          }
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new AO(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* pp(
              n.tuples.map((t) =>
                pp(
                  this.projections.map((n) => fp({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new EO();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            U(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (MO = { type: 0 }),
      (NO = class extends OO {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        evaluateSync() {
          return lp(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return up(this.evaluate(void 0, void 0));
        }
      }),
      (PO = { type: 0 }),
      (FO = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return q(`CaseCondition`, this.when, this.then);
        }
      }),
      (IO = class e extends NO {
        constructor(e, t, n) {
          let r = new Q(),
            i = new Q(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        getHash() {
          return q(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new $(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new FO(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* fp({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: pp(
              this.conditions.map((n) =>
                fp({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (sO.equal(n, e, PO)) return t;
          } else for (let { when: e, then: t } of r) if (Tp(e)) return t;
          return i;
        }
      }),
      (LO = class {
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        build() {
          let e = new wO();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Q(),
            o;
          if (t.orderBy) {
            o = new SO();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (lt(t)) continue;
                a.add(t.field);
                let r = new xO(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new bO(pm(this.fieldId++), void 0, t.definition, void 0),
                  a = new AO(t, r);
                i.push(a);
                let s = new xO(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Q(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (lt(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              U(n.alias, `Subqueries should have an alias`);
              let r = pm(this.fieldId++),
                a = n.alias,
                s = new bO(r, a, t.definition, void 0),
                c = new AO(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              W(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = tm(t.data, this.locale),
            i = t.alias,
            a = new _O(dm(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new bO(pm(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new bO(pm(this.fieldId++), hO, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: hO, collectionName: i });
            let t = new SO(),
              r = new xO(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new SO(),
              o = new vO(fm(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new SO(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              W(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              W(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(cO, null);
        }
        buildLiteralValue(e) {
          let t = sO.parse(e.value);
          return this.normalizer.newScalarConstant(cO, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (U(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                U(n, `Missing argument`),
                U(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                U(n, `Missing argument`),
                U(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              W(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new RO(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new RO(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new FO(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              W(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              W(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (RO = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Q();
        referencedOuterFields = new Q();
      }),
      (zO = class e extends kO {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        predicate;
        inputGroup;
        getHash() {
          return q(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new CO(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* pp(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Tp(n[t] ?? null));
        }
      }),
      (BO = class e extends kO {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return q(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return $.estimate(1, e ? 100 * TO : 50 * TO);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, op()),
            i = op(),
            a = [];
          for (let n of r) {
            let r = cp(i);
            r && (yield r);
            let o = new EO();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new DO(n, a);
        }
      }),
      (VO = class e extends kO {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return q(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new CO(new SO(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* fp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (HO = class e extends kO {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return q(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return $.estimate(1, 200 * TO);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(op()),
            r = op(),
            i = [];
          for (let a of n) {
            let n = cp(r);
            n && (yield n);
            let o = new EO();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new DO(t, i);
        }
      }),
      (UO = class e extends kO {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return q(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new CO(new SO(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* fp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (WO = class e extends NO {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* fp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Tp(n) && Tp(r) };
        }
      }),
      (GO = class extends NO {
        constructor(e, t) {
          let n = new Q(),
            r = new Q();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return q(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (KO = { type: 0 }),
      (qO = class e extends NO {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* fp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: sO.contains(n, r, KO) };
        }
      }),
      (JO = { type: 0 }),
      (YO = class e extends NO {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* fp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: sO.endsWith(n, r, JO) };
        }
      }),
      (XO = class e extends NO {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* fp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: sO.equal(n, r, MO) };
        }
      }),
      (ZO = class e extends NO {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* fp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: sO.greaterThan(n, r, MO) };
        }
      }),
      (QO = class e extends NO {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* fp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: sO.greaterThanOrEqual(n, r, MO) };
        }
      }),
      ($O = class e extends NO {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* fp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: sO.lessThan(n, r, MO) };
        }
      }),
      (ek = class e extends NO {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* fp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: sO.lessThanOrEqual(n, r, MO) };
        }
      }),
      (tk = class e extends NO {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* fp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !sO.equal(n, r, MO) };
        }
      }),
      (nk = class e extends NO {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* fp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Tp(n) || Tp(r) };
        }
      }),
      (rk = { type: 0 }),
      (ik = class e extends NO {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* fp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: sO.startsWith(n, r, rk) };
        }
      }),
      (ak = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof zO) {
            if (e.predicate instanceof WO) {
              let n = new VO(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof nk) {
              let n = new UO(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof HO)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new BO(n, gm(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof zO) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof HO)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof XO &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GO &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = gm(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new BO(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof tk &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GO &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = gm(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new BO(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof $O &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GO &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = gm(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new BO(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ek &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GO &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = gm(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new BO(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ZO &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GO &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = gm(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new BO(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof QO &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GO &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = gm(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new BO(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof qO &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof GO &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = gm(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new BO(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ik &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof GO &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = gm(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new BO(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof YO &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof GO &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = gm(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new BO(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (ok = class {
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        id;
        relational;
        nodes = [];
        winners = new Map();
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new sk();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          U(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (sk = class {
        node;
        cost = new $(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), $.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (ck = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (lk = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new ok(_m(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new ck(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            U(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (uk = class e extends kO {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        getHash() {
          return q(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Q();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Q(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new CO(new SO(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return $.max($.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new DO(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new EO();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* fp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof XO) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new DO(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new EO();
              (n.merge(i),
                n.merge(a),
                Tp(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (dk = class e extends kO {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        limit;
        ordering;
        inputGroup;
        getHash() {
          return q(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new CO(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* fp({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = Rp(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (fk = class e extends kO {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        offset;
        ordering;
        inputGroup;
        getHash() {
          return q(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new CO(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* fp({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = Rp(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (pk = class e extends NO {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return q(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q(),
            t = Object.values(this.namedFields);
          for (let n of t) lt(n.collection) || e.add(n);
          return new CO(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new EO();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (mk = class e extends NO {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            U(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return q(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return sO.cast(n, this.definition);
        }
      }),
      (hk = class e extends NO {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          return q(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q();
          return (lt(this.field.collection) || e.add(this.field), new CO(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new EO();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (gk = { type: 0 }),
      (_k = class e extends NO {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* fp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: sO.in(n, r, gk) };
        }
      }),
      (vk = { type: 1 }),
      (yk = class e extends NO {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return q(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* fp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: sO.indexOf(n, r, vk) };
        }
      }),
      (bk = class extends Error {}),
      (xk = class e extends NO {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        getHash() {
          return q(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* fp({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = ym(n),
            a = ym(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (Sk = class e extends NO {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return q(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: sO.length(n) };
        }
      }),
      (Ck = class e extends NO {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Tp(yield* this.input.evaluate(e, t)) };
        }
      }),
      (wk = { type: 0 }),
      (Tk = class e extends NO {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return q(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* fp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !sO.in(n, r, wk) };
        }
      }),
      (Ek = class extends NO {
        constructor(e, t) {
          U(e.name !== hO, `Invalid field name`);
          let n = new Q(),
            r = new Q();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        field;
        isOuterField;
        definition;
        getHash() {
          return q(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (U(e, `Context must exist`), e.getValue(this.field))
            : (U(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (Dk = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new HO(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new BO(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new uk(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof GO && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof uk && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new zO(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new jO(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof jO &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new dk(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new fk(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof GO) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new Ek(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new GO(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof Ck)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof XO) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof tk) return this.newScalarEquals(e.left, e.right);
          if (e instanceof $O) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof ek) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof ZO) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof QO) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof WO) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof nk) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new Ck(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof GO && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof GO && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof GO && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof GO && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new WO(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof GO && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof GO && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof GO && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof GO && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new nk(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof Ek;
          if (t instanceof Ek && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new XO(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof Ek;
          if (t instanceof Ek && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new tk(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof Ek;
          if (t instanceof Ek && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new $O(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof Ek;
          if (t instanceof Ek && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new ek(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof Ek;
          if (t instanceof Ek && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new ZO(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof Ek;
          if (t instanceof Ek && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new QO(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new _k(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new Tk(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new FO(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new IO(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new qO(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new ik(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new YO(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new Sk(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new yk(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new pk(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new hk(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new xk(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new mk(e, t);
          return this.finishScalar(n);
        }
      }),
      (Ok = class extends kO {}),
      (kk = class e extends Ok {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        fields;
        resolver;
        inputGroup;
        getHash() {
          return q(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Q();
          return new CO(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return $.estimate(0, 100 * TO).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          U(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            U(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Q()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) bm(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                U(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new EO();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (U(s, `Item not found`), U(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (Ak = { type: 0 }),
      (jk = class e extends Ok {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        ordering;
        inputGroup;
        getHash() {
          return q(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== hO && (lt(e.collection) || t.add(e));
          return new CO(new SO(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new $(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === hO) {
                let r = n.collection;
                U(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                U(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                U(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!sO.equal(a, o, Ak)) {
                if (ut(a) || sO.lessThan(a, o, Ak)) return i ? -1 : 1;
                if (ut(o) || sO.greaterThan(a, o, Ak)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (Mk = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new lk();
        normalizer = new Dk(this.memo);
        explorer = new ak(this.normalizer);
        optimize(e) {
          let t = new LO(this.normalizer, this.query, this.locale).build(),
            n = cp(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (U(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new kk(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new jk(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (Nk = ip(`query-engine`)),
      (Pk = class {
        async evalQuery(e, t, n, r) {
          Nk.enabled &&
            Nk.debug(`Query:
${Nm(e)}`);
          let i = new mO(e, t, r),
            a = new Mk(e, t, i),
            o = cp(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = ht(s) ? await s : s,
            u = cp(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = cp(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(fp(a, r)));
          }
          let h = dp(pp(m, r), r);
          return n ? [ht(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new mO(t, n, r);
          return dp(
            pp(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return fp(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (Fk = Cb.QueryCache),
      (Ik = class {
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e), (this.maxSize = t));
        }
        queryEngine;
        maxSize;
        cache = new Map();
        serializedCache = Eb === void 0 ? void 0 : new Map();
        clear() {
          (this.cache.clear(), this.serializedCache?.clear());
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.value.state !== `pending` &&
                (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t, n) {
          let r = Im(e, t),
            i = this.cache.get(r);
          if (i) {
            let a = am(n) ?? `user-visible`,
              o = am(i.priority);
            if (o === void 0 && n !== void 0 && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, n));
            if (o !== void 0 && Yn(a, o) && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, a));
            if (
              (this.cache.delete(r),
              this.cache.set(r, i),
              Eb !== void 0 &&
                this.serializedCache !== void 0 &&
                !Qp(r) &&
                i.value.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(r);
              e !== void 0 && Eb.set(Fk, r, e);
            }
            return i.value;
          }
          let a = new rb(() => {
            let i = Qp(r),
              a = i ? void 0 : wn(Fk, r);
            if (a)
              try {
                return this.queryEngine.resolveSerializableQueryResult(a, e, t);
              } catch (e) {
                Sn(e, r);
              }
            return Eb !== void 0 && !i
              ? this.queryEngine
                  .serializeableQuery(e, t, n)
                  .then(([e, t]) => (this.serializedCache?.set(r, t), Eb.set(Fk, r, t), e))
              : this.queryEngine.query(e, t, n);
          });
          return (this.cache.set(r, { value: a, priority: n }), this.prune(), a);
        }
      }),
      (Lk = new Ik(new Pk())),
      (Rk = `style[data-framer-breakpoint-css]`),
      (zk = `page`),
      (Bk = Symbol(`cycle`)),
      (Uk = (() => {
        let e = a(null);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (Wk = (() => {
        let e = a(void 0);
        return ((e.displayName = `TickerItemContext`), e);
      })()),
      (Gk = (e, t, n, r, i) => ({
        sign: 1,
        direction: i,
        lengthProp: t,
        viewportLengthProp: n,
        paddingStartProp: r,
        measureItem: (n) => ({ start: n[e], end: n[e] + n[t] }),
        getCumulativeInset: (t) => {
          let n = 0,
            r = t;
          for (; r;) ((n += r[e]), (r = r.offsetParent));
          return n;
        },
      })),
      (Kk = Gk(`offsetLeft`, `offsetWidth`, `innerWidth`, `paddingLeft`, `right`)),
      (qk = Gk(`offsetTop`, `offsetHeight`, `innerHeight`, `paddingTop`, `bottom`)),
      (Jk = {
        ...Kk,
        sign: -1,
        direction: `left`,
        paddingStartProp: `paddingRight`,
        measureItem: (e, t) => {
          let n = e.offsetWidth,
            r = wh(e, t);
          return { start: r, end: r + n };
        },
        getCumulativeInset: (e) => {
          let t = 0,
            n = e;
          for (; n;) ((t += wh(n, n.offsetParent)), (n = n.offsetParent));
          return t;
        },
      }),
      (Yk = { start: `flex-start`, end: `flex-end` }),
      (Xk = y(Ph)),
      (Zk = { start: 0, end: 0 }),
      (Qk = { display: `flex`, position: `relative` }),
      ($k = {
        display: `flex`,
        position: `relative`,
        willChange: `transform`,
        listStyleType: `none`,
        padding: 0,
        margin: 0,
        justifyContent: `flex-start`,
      }),
      (eA = { duration: 0.2, ease: `linear` }),
      (tA = y(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? he.div,
          m = no(),
          h = (d === `paused` ? 0 : (i ?? 100)) * s;
        return g(Xk, {
          ref: t,
          as: p,
          ...f,
          gap: l,
          axis: o,
          align: a ?? `center`,
          isStatic: m,
          velocity: h,
          hoverFactor: c,
          itemSize: `manual`,
          overflow: u,
        });
      })),
      (nA = y(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: u,
            gap: d,
            overflow: f,
            playState: p,
            ...m
          } = e,
          h = r ?? he.div,
          _ = lr() === `rtl` && o === `x` ? -1 : 1,
          v = (p === `paused` ? 0 : (i ?? 100)) * s * _,
          y = L(0),
          b = l(0),
          x = l(!1),
          S = l(!1),
          C = l(!1),
          w = (e) => {
            C.current &&
              e.target &&
              e.target !== e.currentTarget &&
              (e.preventDefault(), e.stopPropagation());
          };
        return (
          it((e, t) => {
            let n = Math.abs(y.getVelocity()),
              r = S.current ? v * u : v;
            if (performance.now() > b.current && (!x.current || n < Math.abs(r))) {
              let e = (t / 1e3) * r,
                n = y.get() - e;
              ((x.current &&= (y.stop(), !1)), y.set(n));
            }
          }),
          c(() => {
            p === `paused` && y.stop();
          }, [p, y]),
          g(Xk, {
            ref: t,
            as: h,
            ...m,
            gap: d,
            axis: o,
            align: a ?? `center`,
            itemSize: `manual`,
            overflow: f,
            _dragX: o === `x` ? y : void 0,
            _dragY: o === `y` ? y : void 0,
            offset: y,
            drag: o,
            dragMomentum: !0,
            onClickCapture: w,
            onDragStart: () => {
              C.current = !0;
            },
            onDragEnd: () => {
              ((b.current = performance.now()),
                (x.current = !0),
                setTimeout(() => {
                  C.current = !1;
                }, 5));
            },
            onMouseEnter: () => {
              S.current = !0;
            },
            onMouseLeave: () => {
              S.current = !1;
            },
          })
        );
      })),
      (rA = (() => {
        let e = a(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (iA = ({ onPlayStateChange: e, children: t }) => {
        let n = S(
          () => ({ start: () => p(() => e(`running`)), stop: () => p(() => e(`paused`)) }),
          [e]
        );
        return g(rA.Provider, { value: n, children: t });
      }),
      (aA = y(function (e, t) {
        let {
            children: n,
            tickerEffectDraggable: r,
            tickerEffectStackDirection: a,
            tickerEffectXOverflow: o,
            tickerEffectYOverflow: s,
            tickerEffectOverflow: c,
            tickerEffectGap: l,
            tickerEffectDirectionModifier: u,
            tickerEffectHoverModifier: d,
            tickerEffectPosition: f,
            tickerEffectIsDataRepeater: p,
            style: m,
            ...h
          } = e,
          _ = no(),
          [v, y] = i(`running`),
          b = a?.startsWith(`column`) ? `y` : `x`,
          x = u === `reverse` ? -1 : 1,
          S = G(d) ? d / 100 : 1,
          C = (b === `x` ? (o ?? c ?? `visible`) : (s ?? c ?? `visible`)) === `visible`,
          w = Lh(l, b),
          T = vh(n),
          E = { ...m, "--ticker-cms-total-children": p ? T.length : void 0, position: f };
        return _ || !r
          ? g(iA, {
              onPlayStateChange: y,
              children: g(tA, {
                ...h,
                style: E,
                ref: t,
                axis: b,
                gap: w,
                overflow: C,
                directionModifier: x,
                hoverModifier: S,
                items: T,
                playState: v,
              }),
            })
          : g(iA, {
              onPlayStateChange: y,
              children: g(nA, {
                ...h,
                style: E,
                ref: t,
                axis: b,
                gap: w,
                overflow: C,
                directionModifier: x,
                hoverModifier: S,
                items: T,
                playState: v,
              }),
            });
      })),
      (oA = (e) => (t) => (t.tickerEffectEnabled ? g(aA, { ...t, as: e }) : g(e, { ...t }))),
      (sA = (e) =>
        h.forwardRef((t, n) => {
          let {
              flowEffectEnabled: r,
              flowEffectTransition: i,
              isNestedFlowEffect: a,
              transition: o,
              ...s
            } = t,
            c = S(() => (i ? { default: o, layout: i } : o), [o, i]);
          if (!r) return g(e, { ...s, ref: n, transition: o });
          let l = g(e, { ...s, ref: n });
          return (
            i && (l = g(Pe, { transition: c, children: l })),
            a || (l = g(Je, { children: l })),
            l
          );
        })),
      (cA = 1e4),
      (lA = `u_`),
      (uA = new Set([`rgba8`, `r8`, `rg16f`, `rgba16f`, `rgba32f`])),
      (dA = {
        time: { name: `u_time`, glslType: `float` },
        resolution: { name: `u_resolution`, glslType: `vec2` },
        deltaTime: { name: `u_deltaTime`, glslType: `float` },
        pixelRatio: { name: `u_pixelRatio`, glslType: `float` },
        mousePosition: { name: `u_mousePosition`, glslType: `vec4` },
        mousePointerDown: { name: `u_mousePointerDown`, glslType: `float` },
        mouseHover: { name: `u_mouseHover`, glslType: `float` },
      }),
      (fA = `webglcontextlost`),
      (pA = () => {}),
      (mA = class {
        gl;
        canvas;
        contextLostHandler;
        disposed = !1;
        pixelRatio = N === void 0 ? 1 : N.devicePixelRatio;
        resolutionScale;
        lastBufferWidth = 0;
        lastBufferHeight = 0;
        onContextLost;
        resources;
        textures = new Map();
        get customTextureUnitBase() {
          return this.resources.bufferPasses.length;
        }
        constructor(e, t, n, r, i = pA, a = []) {
          ((this.resolutionScale = r), (this.canvas = e), (this.onContextLost = i));
          let o = e.getContext(`webgl2`, {
            alpha: !0,
            premultipliedAlpha: !1,
            antialias: !1,
            powerPreference: `default`,
            preserveDrawingBuffer: e instanceof OffscreenCanvas,
          });
          if (!o) throw Error(`WebGL2 not supported`);
          ((this.gl = o),
            (this.contextLostHandler = (e) => {
              (e.preventDefault(), this.dispose(), this.onContextLost?.());
            }),
            e.addEventListener(fA, this.contextLostHandler));
          try {
            this.resources = this.buildResources(t, n, a);
          } catch (t) {
            throw (e.removeEventListener(fA, this.contextLostHandler), t);
          }
          let { mainPass: s, bufferPasses: c } = this.resources;
          (o.clearColor(0, 0, 0, 0),
            c.length === 0 && (o.useProgram(s.program), o.bindVertexArray(s.vao)));
        }
        buildResources(e, t, n) {
          let { gl: r, canvas: i } = this,
            a = n.find((e) => Xh(e.format));
          if (a && !r.getExtension(`EXT_color_buffer_float`))
            throw Error(
              `Shader buffer "${a.uniformName}" requested format "${a.format}" but the EXT_color_buffer_float extension is not available.`
            );
          let o = !a || !!r.getExtension(`OES_texture_float_linear`),
            s = this.compileShader(r.VERTEX_SHADER, e),
            c,
            l = [],
            u,
            d,
            f,
            p = [];
          try {
            c = this.linkFragmentProgram(s, t);
            for (let e of n) l.push([this.linkFragmentProgram(s, e.fragment), e]);
            ((u = Uh(r, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]))),
              (d = Uh(r, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]))),
              (f = this.buildPassState(c, n, u, d)));
            for (let e = 0; e < l.length; e++) {
              let t = l[e];
              if (!t) continue;
              let [r, i] = t;
              p.push(this.buildBufferPass(r, i, n, o, e, u, d));
            }
            return (
              this.allocateBufferPassStorages(p, i.width, i.height),
              this.bindStaticSamplerUnits(f, p),
              { positionBuffer: u, texCoordBuffer: d, mainPass: f, bufferPasses: p }
            );
          } catch (e) {
            for (let e of p) this.disposeBufferPass(e);
            for (let e = p.length; e < l.length; e++) {
              let t = l[e];
              t && r.deleteProgram(t[0]);
            }
            throw (
              f ? this.disposePass(f) : c && r.deleteProgram(c),
              d && r.deleteBuffer(d),
              u && r.deleteBuffer(u),
              e
            );
          } finally {
            r.deleteShader(s);
          }
        }
        render(e, t, n, r) {
          if (!this.disposed) {
            if (this.resources.bufferPasses.length === 0) {
              this.renderSinglePass(e, t, n, r);
              return;
            }
            this.renderMultiPass(e, t, n, r);
          }
        }
        renderSinglePass(e, t, n, r) {
          let {
            gl: i,
            canvas: a,
            resources: { mainPass: o },
          } = this;
          (this.updatePassBuiltIns(o, e, t, r, a.width, a.height),
            this.applyCustomUniforms(o, n, this.customTextureUnitBase),
            i.clear(i.COLOR_BUFFER_BIT),
            i.drawArrays(i.TRIANGLES, 0, 6));
        }
        renderMultiPass(e, t, n, r) {
          let {
            gl: i,
            canvas: a,
            resources: { mainPass: o, bufferPasses: s },
            customTextureUnitBase: c,
          } = this;
          for (let e of s)
            (i.activeTexture(i.TEXTURE0 + e.textureUnit),
              i.bindTexture(i.TEXTURE_2D, e.textures[+(e.writeIdx === 0)]));
          for (let a of s)
            (i.useProgram(a.program),
              i.bindVertexArray(a.vao),
              this.updatePassBuiltIns(a, e, t, r, a.width, a.height),
              this.applyCustomUniforms(a, n, c),
              i.bindFramebuffer(i.FRAMEBUFFER, a.fbos[a.writeIdx]),
              i.viewport(0, 0, a.width, a.height),
              i.clear(i.COLOR_BUFFER_BIT),
              i.drawArrays(i.TRIANGLES, 0, 6),
              i.activeTexture(i.TEXTURE0 + a.textureUnit),
              i.bindTexture(i.TEXTURE_2D, a.textures[a.writeIdx]),
              (a.writeIdx = +(a.writeIdx === 0)));
          (i.useProgram(o.program),
            i.bindVertexArray(o.vao),
            this.updatePassBuiltIns(o, e, t, r, a.width, a.height),
            this.applyCustomUniforms(o, n, c),
            i.bindFramebuffer(i.FRAMEBUFFER, null),
            i.viewport(0, 0, a.width, a.height),
            i.clear(i.COLOR_BUFFER_BIT),
            i.drawArrays(i.TRIANGLES, 0, 6));
        }
        resize() {
          if (this.disposed) return;
          let { canvas: e } = this;
          if (e instanceof OffscreenCanvas)
            throw Error(`resize() is not supported for OffscreenCanvas.`);
          let t = e.offsetWidth,
            n = e.offsetHeight,
            r = N.devicePixelRatio,
            i = Math.max(r * this.resolutionScale, 1);
          this.pixelRatio = i;
          let a = t * i,
            o = n * i;
          if (!(a === this.lastBufferWidth && o === this.lastBufferHeight)) {
            ((this.lastBufferWidth = a),
              (this.lastBufferHeight = o),
              (e.width = a),
              (e.height = o),
              this.gl.viewport(0, 0, a, o));
            try {
              this.allocateBufferPassStorages(this.resources.bufferPasses, a, o);
            } catch (e) {
              throw (this.dispose(), e);
            }
          }
        }
        resizeOffscreenCanvas(e, t, n) {
          if (!this.disposed) {
            (n !== void 0 && (this.pixelRatio = n), this.gl.viewport(0, 0, e, t));
            try {
              this.allocateBufferPassStorages(this.resources.bufferPasses, e, t);
            } catch (e) {
              throw (this.dispose(), e);
            }
          }
        }
        finish() {
          this.disposed || this.gl.finish();
        }
        dispose() {
          if (this.disposed) return;
          ((this.disposed = !0), this.canvas.removeEventListener(fA, this.contextLostHandler));
          for (let [, e] of this.textures) e.source && !zh(e.source) && Bh(e.source);
          if (this.gl.isContextLost()) return;
          let { gl: e, resources: t } = this;
          for (let e of t.bufferPasses) this.disposeBufferPass(e);
          (this.disposePass(t.mainPass),
            e.deleteBuffer(t.positionBuffer),
            e.deleteBuffer(t.texCoordBuffer));
          for (let [, t] of this.textures) e.deleteTexture(t.texture);
          this.textures.clear();
        }
        disposePass(e) {
          let { gl: t } = this;
          (t.deleteVertexArray(e.vao), t.deleteProgram(e.program));
        }
        disposeBufferPass(e) {
          let { gl: t } = this;
          this.disposePass(e);
          for (let n of e.textures) t.deleteTexture(n);
          for (let n of e.fbos) t.deleteFramebuffer(n);
        }
        buildPassState(e, t, n, r) {
          let { gl: i } = this,
            a = i.createVertexArray();
          if (!a) throw Error(`Failed to create vertex array object`);
          (i.bindVertexArray(a), Wh(i, e, n, r), i.bindVertexArray(null));
          let o = Gh(i, e),
            s = new Map();
          for (let n of t) s.set(n.uniformName, i.getUniformLocation(e, n.uniformName));
          return {
            program: e,
            vao: a,
            builtInLocations: o,
            customLocations: new Map(),
            bufferSamplerLocations: s,
          };
        }
        buildBufferPass(e, t, n, r, i, a, o) {
          let s = this.buildPassState(e, n, a, o),
            { gl: c } = this,
            l = Yh(c, t.format),
            u = Xh(t.format) && !r ? c.NEAREST : c.LINEAR,
            d = Kh(c, u),
            f = Kh(c, u),
            p = qh(c, d),
            m = qh(c, f);
          return (
            c.bindFramebuffer(c.FRAMEBUFFER, null),
            c.bindTexture(c.TEXTURE_2D, null),
            {
              ...s,
              uniformName: t.uniformName,
              resolutionScale: t.resolutionScale,
              format: t.format,
              internalFormat: l.internalFormat,
              uploadFormat: l.uploadFormat,
              pixelType: l.pixelType,
              width: 0,
              height: 0,
              textures: [d, f],
              fbos: [p, m],
              writeIdx: 0,
              textureUnit: i,
            }
          );
        }
        bindStaticSamplerUnits(e, t) {
          let { gl: n } = this,
            r = [e, ...t];
          for (let e of r) {
            n.useProgram(e.program);
            for (let r of t) {
              let t = e.bufferSamplerLocations.get(r.uniformName);
              t && n.uniform1i(t, r.textureUnit);
            }
          }
        }
        allocateBufferPassStorages(e, t, n) {
          for (let r of e) this.allocateBufferPassStorage(r, t, n);
        }
        allocateBufferPassStorage(e, t, n) {
          let { gl: r } = this,
            i = Math.max(1, Math.floor(t * e.resolutionScale)),
            a = Math.max(1, Math.floor(n * e.resolutionScale));
          if (i === e.width && a === e.height) return;
          ((e.width = i), (e.height = a));
          for (let t of e.textures)
            (r.bindTexture(r.TEXTURE_2D, t),
              r.texImage2D(
                r.TEXTURE_2D,
                0,
                e.internalFormat,
                i,
                a,
                0,
                e.uploadFormat,
                e.pixelType,
                null
              ));
          r.bindTexture(r.TEXTURE_2D, null);
          let [o, s, c, l] = r.getParameter(r.VIEWPORT);
          for (let t of e.fbos)
            (r.bindFramebuffer(r.FRAMEBUFFER, t),
              Jh(r, e.uniformName, e.format),
              r.viewport(0, 0, i, a),
              r.clear(r.COLOR_BUFFER_BIT));
          (r.bindFramebuffer(r.FRAMEBUFFER, null), r.viewport(o, s, c, l));
        }
        compileShader(e, t) {
          let { gl: n } = this,
            r = n.createShader(e);
          if (!r) throw Error(`Failed to create shader`);
          if (
            (n.shaderSource(r, t), n.compileShader(r), !n.getShaderParameter(r, n.COMPILE_STATUS))
          ) {
            let t = n.getShaderInfoLog(r);
            n.deleteShader(r);
            let i = e === n.VERTEX_SHADER ? `Vertex` : `Fragment`;
            throw Error(`${i} shader compilation failed: ${t}`);
          }
          return r;
        }
        linkFragmentProgram(e, t) {
          let { gl: n } = this,
            r = this.compileShader(n.FRAGMENT_SHADER, t);
          try {
            let t = n.createProgram();
            if (!t) throw Error(`Failed to create program`);
            if (
              (n.attachShader(t, e),
              n.attachShader(t, r),
              n.linkProgram(t),
              !n.getProgramParameter(t, n.LINK_STATUS))
            ) {
              let e = n.getProgramInfoLog(t);
              throw (n.deleteProgram(t), Error(`Program linking failed: ${e}`));
            }
            return t;
          } finally {
            n.deleteShader(r);
          }
        }
        setUniform(e, t) {
          if (e !== null)
            switch (t.type) {
              case `boolean`:
                this.gl.uniform1f(e, +!!t.value);
                break;
              case `float`:
                this.gl.uniform1f(e, t.value);
                break;
              case `int`:
                this.gl.uniform1i(e, t.value);
                break;
              case `vec2`:
                this.gl.uniform2fv(e, t.value);
                break;
              case `vec4`:
                this.gl.uniform4fv(e, t.value);
                break;
              case `vec4[]`:
                this.gl.uniform4fv(e, t.value.flat());
                break;
            }
        }
        bindTexture(e, t, n) {
          let { gl: r, textures: i } = this,
            a = i.get(e),
            o = !a;
          if (o) {
            let t = r.createTexture();
            if (!t) return;
            ((a = { texture: t, source: null }), i.set(e, a));
          }
          if (a) {
            if ((r.activeTexture(r.TEXTURE0 + n), r.bindTexture(r.TEXTURE_2D, a.texture), zh(t))) {
              this.uploadVideoFrame(a, t, o);
              return;
            }
            (o || a.source !== t) &&
              (a.source && !zh(a.source) && Bh(a.source),
              (a.source = t),
              r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
              r.generateMipmap(r.TEXTURE_2D),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR));
          }
        }
        uploadVideoFrame(e, t, n) {
          let { gl: r } = this;
          if (t.readyState < t.HAVE_CURRENT_DATA || t.seeking) return;
          let { videoWidth: i, videoHeight: a, currentTime: o } = t;
          if (!(i === 0 || a === 0)) {
            if (
              (e.source && e.source !== t && !zh(e.source) && Bh(e.source),
              n || e.source !== t || e.videoWidth !== i || e.videoHeight !== a)
            ) {
              (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR),
                r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t),
                (e.source = t),
                (e.videoWidth = i),
                (e.videoHeight = a),
                (e.videoTime = o));
              return;
            }
            e.videoTime !== o &&
              (r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, r.RGBA, r.UNSIGNED_BYTE, t),
              (e.videoTime = o));
          }
        }
        applyCustomUniforms(e, t, n) {
          if (!t) return;
          let { gl: r } = this,
            i = n;
          for (let n in t) {
            let a = t[n];
            if (!a) continue;
            let o = e.customLocations.get(n);
            (o === void 0 &&
              ((o = r.getUniformLocation(e.program, n)), e.customLocations.set(n, o)),
              a.type === `sampler2D`
                ? (this.bindTexture(n, a.value, i), o !== null && r.uniform1i(o, i), i++)
                : this.setUniform(o, a));
          }
        }
        updatePassBuiltIns(e, t, n, r, i, a) {
          let { gl: o, pixelRatio: s } = this,
            c = e.builtInLocations;
          (c[dA.time.name] !== null && o.uniform1f(c[dA.time.name], t),
            c[dA.resolution.name] !== null && o.uniform2f(c[dA.resolution.name], i, a),
            c[dA.deltaTime.name] !== null && o.uniform1f(c[dA.deltaTime.name], n),
            c[dA.pixelRatio.name] !== null && o.uniform1f(c[dA.pixelRatio.name], s),
            c[dA.mousePosition.name] !== null && o.uniform4fv(c[dA.mousePosition.name], r.position),
            c[dA.mousePointerDown.name] !== null &&
              o.uniform1f(c[dA.mousePointerDown.name], r.pointerDown),
            c[dA.mouseHover.name] !== null && o.uniform1f(c[dA.mouseHover.name], r.hover));
        }
      }),
      (hA = `_heightmap`),
      (gA = `_length`),
      (_A = `_buffer`),
      (vA = /\W/gu),
      (yA = `#version 300 es`),
      (bA = `precision highp float;`),
      (xA = `in vec2 v_uv;`),
      (SA = `out vec4 fragColor;`),
      (CA = 0.5),
      (wA = `rgba8`),
      (TA = `__framer_shaderConfig__`),
      (EA = b(function ({ src: e }) {
        return e
          ? g(vo, { image: { src: e, fit: `fill`, loading: `lazy` }, draggable: !1, alt: `` })
          : null;
      })),
      (DA = 30),
      (OA = 20),
      (kA = class {
        loaders = new Map();
        generated = new Map();
        load(e, t) {
          let n = this.loaders.get(e);
          if (n) return n;
          let r = t();
          return (
            r.catch(() => {
              this.loaders.get(e) === r && this.loaders.delete(e);
            }),
            gg(this.loaders, DA),
            this.loaders.set(e, r),
            r
          );
        }
        generate(e, t) {
          let n = this.generated.get(e);
          if (n) return n;
          let r = t();
          if (r) return (gg(this.generated, OA), this.generated.set(e, r), r);
        }
        clear() {
          (this.loaders.clear(), this.generated.clear());
        }
        get loadedSize() {
          return this.loaders.size;
        }
        get generatedSize() {
          return this.generated.size;
        }
      }),
      (AA = new kA()),
      (jA = 1024),
      (MA = 24),
      (NA = class {
        byOwner = new Map();
        acquire(e, t) {
          let n = this.byOwner.get(e);
          n || ((n = new Map()), this.byOwner.set(e, n));
          let r = n.get(t);
          if (r) return r.promise;
          if (this.size >= MA)
            return Promise.reject(
              Error(`Video decoder pool is full (max ${MA}); "${t}" falls back.`)
            );
          let i = new AbortController(),
            a = Hh(t, i.signal);
          return (
            a.catch(() => {
              n.get(t)?.promise === a && n.delete(t);
            }),
            n.set(t, { promise: a, controller: i }),
            a
          );
        }
        keepOnly(e, t) {
          let n = this.byOwner.get(e);
          if (n) {
            for (let [e, r] of n) t.has(e) || (n.delete(e), Cg(r));
            n.size === 0 && this.byOwner.delete(e);
          }
        }
        releaseAll(e) {
          let t = this.byOwner.get(e);
          if (t) {
            for (let e of t.values()) Cg(e);
            this.byOwner.delete(e);
          }
        }
        get size() {
          let e = 0;
          for (let t of this.byOwner.values()) e += t.size;
          return e;
        }
      }),
      (PA = new NA()),
      (FA = { position: `absolute`, inset: 0, width: `100%`, height: `100%` }),
      (IA = 0.001),
      (LA = -999),
      (RA = { position: [LA, LA, 0, 0], pointerDown: 0, hover: 0 }),
      (zA = [`.mp4`, `.m4v`]),
      (BA = `.svg`),
      (VA = 4096),
      (HA = {
        display: `block`,
        width: `100%`,
        height: `100%`,
        objectFit: `cover`,
        position: `absolute`,
        inset: 0,
      }),
      (UA = { position: `absolute`, inset: 0 }),
      (WA = b(function ({ src: e, hidden: t = !1, onDisplaySrcChange: n }) {
        let [r, a] = i(e),
          [o, s] = i(void 0),
          [u, d] = i(r),
          f = l(null);
        r !== u && (s(u), d(r));
        let m = l(n);
        j(() => {
          m.current = n;
        }, [n]);
        let h = l(!0);
        return (
          j(() => {
            if (h.current) {
              h.current = !1;
              return;
            }
            o || m.current?.();
          }, [r]),
          c(() => {
            if (e === r) return;
            let t = !0;
            if (e) {
              let n = new Image();
              n.src = e;
              let r = () => (t ? p(() => a(e)) : void 0);
              typeof n.decode == `function` ? n.decode().then(r).catch(r) : (n.onload = r);
            } else p(() => a(void 0));
            return () => {
              t = !1;
            };
          }, [e, r]),
          c(() => {
            let e = f.current;
            if (!e || !o) return;
            let t = !1,
              n = e.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 300,
                easing: `ease-in-out`,
                fill: `forwards`,
              });
            return (
              (n.onfinish = () => {
                t || (p(() => s(void 0)), m.current?.());
              }),
              () => {
                ((t = !0), n.cancel());
              }
            );
          }, [o]),
          r
            ? w(`div`, {
                style: { ...FA, opacity: +!t, pointerEvents: t ? `none` : void 0 },
                children: [
                  o &&
                    g(
                      `img`,
                      { src: o, decoding: `async`, style: HA, draggable: !1, alt: `` },
                      `prev-${o}`
                    ),
                  g(
                    `div`,
                    {
                      ref: o ? f : void 0,
                      style: UA,
                      children: g(`img`, {
                        src: r,
                        style: HA,
                        decoding: `async`,
                        draggable: !1,
                        alt: ``,
                      }),
                    },
                    r
                  ),
                ],
              })
            : null
        );
      })),
      (GA = `#version 300 es
precision highp float;

in vec2 a_position;
in vec2 a_texCoord;

out vec2 v_uv;

void main() {
    v_uv = a_texCoord;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`),
      (KA = `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 fragColor;

void main() {
    fragColor = vec4(0.0);
}
`),
      (qA = { noSlot: 0, singleFrame: 1, animate: 2 }),
      (JA = a(null)),
      (YA = 300),
      (XA = { display: `block`, width: `100%`, height: `100%` }),
      (ZA = 250),
      (QA = b(function ({
        mode: e,
        fallbackImage: t,
        skipInitialFallback: n,
        vertexShader: r,
        fragmentShader: a,
        animated: o,
        resolutionScale: u,
        uniforms: d,
        onError: f,
        onReady: m,
        singleFrame: h,
        onContextLost: _,
        onUniformResolutionSucceeded: v,
        onUniformResolutionFailed: y,
        heightmapSource: b,
        mouseDataRef: x,
        buffers: S,
      }) {
        let [C, T] = i(!1),
          [E, O] = i(!1),
          k = e === `progressive`,
          A = !!t,
          M = !!(n && A),
          ee = k && A && !M,
          P = Kg(ee),
          F = l(m);
        j(() => {
          F.current = m;
        }, [m]);
        let te = s(() => {
          (p(() => T(!0)), F.current?.());
        }, []);
        c(() => {
          if (!k || !C || !P) return;
          let e = N.setTimeout(() => {
            p(() => O(!0));
          }, ZA);
          return () => {
            clearTimeout(e);
          };
        }, [k, P, C]);
        let ne = ee && !P,
          I = h || ne || (k && !M && !E),
          re = A && !M && (!P || !C);
        return w(D, {
          children: [
            g(`div`, {
              style: { ...FA, opacity: +!ne },
              children: g(Yg, {
                vertexShader: r,
                fragmentShader: a,
                animated: o,
                resolutionScale: u,
                singleFrame: I,
                uniforms: d,
                onError: f,
                onReady: te,
                onContextLost: _,
                onUniformResolutionSucceeded: v,
                onUniformResolutionFailed: y,
                heightmapSource: b,
                mouseDataRef: x,
                buffers: S,
              }),
            }),
            t &&
              !M &&
              g(`div`, {
                style: {
                  ...FA,
                  opacity: +!!re,
                  transition: `opacity 200ms ease-in-out`,
                  pointerEvents: `none`,
                },
                children: g(EA, { src: t }),
              }),
          ],
        });
      })),
      (tj = { duration: 0 }),
      (nj = y(function (
        {
          mode: e = `instant`,
          fallbackImage: t,
          skipInitialFallback: n,
          placeholder: r,
          style: a,
          width: o,
          height: l,
          vertexShader: u,
          fragmentShader: d,
          animated: f,
          uniforms: m,
          onError: h,
          onReady: _,
          resolutionScale: v,
          poolId: y,
          isSelected: b = !1,
          isMultiSelected: x = !1,
          isPreviewActive: S = !1,
          heightmapSource: C,
          mouse: T,
          buffers: E,
          ...D
        },
        O
      ) {
        let A = tc(O),
          M = oi(),
          N = Y.current() === Y.preview && M === `preview`,
          ee = !!(t && (n || N)),
          P = Ou(),
          F = t_(A, P ? void 0 : T),
          [te, ne] = i(ee);
        Uw(
          A,
          s((e) => {
            p(() => ne(e.isIntersecting));
          }, []),
          { threshold: 0, enabled: !0 }
        );
        let I = k(),
          re = r_(y ?? I, b, te);
        c(() => {
          performance.mark?.(`shader_register`);
        }, []);
        let {
            isFallbackOnly: L,
            effectiveAnimated: ie,
            effectiveSingleFrame: ae,
            effectiveMode: oe,
            shouldSkipFallbackOverlay: se,
            onContextLost: ce,
            onUniformResolutionSucceeded: le,
            onUniformResolutionFailed: ue,
          } = Gg(re, b, x, te, e, f, ee, S),
          [de, fe] = i(!1);
        j(() => {
          L && p(() => fe(!1));
        }, [L]);
        let pe = s(() => {
            (p(() => fe(!0)), _?.());
          }, [_]),
          R = {
            vertexShader: u,
            fragmentShader: d,
            uniforms: m,
            resolutionScale: v,
            onError: h,
            onContextLost: ce,
            onUniformResolutionSucceeded: le,
            onUniformResolutionFailed: ue,
            heightmapSource: C,
            buffers: E,
          },
          me = { style: a, width: o, height: l, ...D };
        if (P) {
          let e = !L && (ee || de);
          return w(rj, {
            ref: A,
            ...me,
            children: [
              !L &&
                g(QA, {
                  mode: oe,
                  skipInitialFallback: se,
                  onReady: pe,
                  ...R,
                  animated: ie,
                  singleFrame: ae,
                  mouseDataRef: F,
                }),
              g(WA, { src: t, hidden: e }),
              L && !t && r,
            ],
          });
        }
        return L
          ? g(rj, { ref: A, ...me, children: se && !te ? null : g(EA, { src: t }) })
          : g(rj, {
              ref: A,
              ...me,
              children: g(QA, {
                mode: oe,
                fallbackImage: t,
                skipInitialFallback: se,
                onReady: _,
                ...R,
                animated: ie,
                singleFrame: ae,
                mouseDataRef: F,
              }),
            });
      })),
      (rj = y(function ({ children: e, style: t, ...n }, r) {
        return g(Iw, {
          ref: r,
          __fromCanvasComponent: !0,
          style: { borderRadius: `inherit`, cornerShape: `inherit`, ...t, overflow: `hidden` },
          ...n,
          componentType: `Shader`,
          children: e,
        });
      })),
      (ij = h.createContext(void 0)),
      (aj = () => h.useContext(ij)),
      (oj = {
        Arial: {
          Regular: { selector: `Arial`, weight: void 0 },
          Black: { selector: `Arial-Black`, weight: void 0 },
          Narrow: { selector: `Arial Narrow`, weight: void 0 },
          "Rounded Bold": { selector: `Arial Rounded MT Bold`, weight: void 0 },
        },
        Avenir: {
          Book: { selector: `Avenir`, weight: void 0 },
          Light: { selector: `Avenir-Light`, weight: void 0 },
          Medium: { selector: `Avenir-Medium`, weight: void 0 },
          Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
          Black: { selector: `Avenir-Black`, weight: void 0 },
        },
        "Avenir Next": {
          Regular: { selector: `Avenir Next`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNext-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNext-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
        },
        "Avenir Next Condensed": {
          Regular: { selector: `Avenir Next Condensed`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNextCondensed-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNextCondensed-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 },
        },
        Baskerville: {
          Regular: { selector: `Baskerville`, weight: void 0 },
          "Semi Bold": { selector: `Baskerville-SemiBold`, weight: void 0 },
        },
        "Bodoni 72": {
          Book: { selector: `Bodoni 72`, weight: void 0 },
          Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 },
          Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 },
        },
        Courier: { Regular: { selector: `Courier`, weight: void 0 } },
        "Courier New": { Regular: { selector: `Courier New`, weight: void 0 } },
        Futura: {
          Medium: { selector: `Futura`, weight: void 0 },
          Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 },
          "Condensed ExtraBold": { selector: `Futura-CondensedExtraBold`, weight: void 0 },
        },
        Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
        "Gill Sans": {
          Regular: { selector: `Gill Sans`, weight: void 0 },
          Light: { selector: `GillSans-Light`, weight: void 0 },
          SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
          UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 },
        },
        Helvetica: {
          Regular: { selector: `Helvetica`, weight: void 0 },
          Light: { selector: `Helvetica-Light`, weight: void 0 },
          Bold: { selector: `Helvetica-Bold`, weight: void 0 },
          Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
          "Light Oblique": { selector: `Helvetica-LightOblique`, weight: void 0 },
          "Bold Oblique": { selector: `Helvetica-BoldOblique`, weight: void 0 },
        },
        "Helvetica Neue": {
          Regular: { selector: `Helvetica Neue`, weight: void 0 },
          UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 },
          Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
          Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
          Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 },
          Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
          Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 },
          "UltraLight Italic": { selector: `HelveticaNeue-UltraLightItalic`, weight: void 0 },
          "Thin Italic": { selector: `HelveticaNeue-ThinItalic`, weight: void 0 },
          "Light Italic": { selector: `HelveticaNeue-LightItalic`, weight: void 0 },
          "Medium Italic": { selector: `HelveticaNeue-MediumItalic`, weight: void 0 },
          "Bold Italic": { selector: `HelveticaNeue-BoldItalic`, weight: void 0 },
          "Condensed Bold": { selector: `HelveticaNeue-CondensedBold`, weight: void 0 },
          "Condensed Black": { selector: `HelveticaNeue-CondensedBlack`, weight: void 0 },
        },
        "Hoefler Text": { Regular: { selector: `Hoefler Text`, weight: void 0 } },
        Impact: { Regular: { selector: `Impact`, weight: void 0 } },
        "Lucida Grande": { Regular: { selector: `Lucida Grande`, weight: void 0 } },
        Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
        Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
        Optima: {
          Regular: { selector: `Optima`, weight: void 0 },
          ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 },
        },
        Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
        "SF Pro Display": {
          Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
          Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 },
          "Ultralight Italic": { selector: `__SF-UI-Display-Ultralight-Italic__`, weight: 100 },
          "Thin Italic": { selector: `__SF-UI-Display-Thin-Italic__`, weight: 200 },
          "Light Italic": { selector: `__SF-UI-Display-Light-Italic__`, weight: 300 },
          "Medium Italic": { selector: `__SF-UI-Display-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Display-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Display-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Display-Heavy-Italic__`, weight: 800 },
          "Black Italic": { selector: `__SF-UI-Display-Black-Italic__`, weight: 900 },
        },
        "SF Pro Display Condensed": {
          Regular: { selector: `__SF-UI-Display-Condensed-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Condensed-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 },
        },
        "SF Pro Text": {
          Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
          Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
          "Light Italic": { selector: `__SF-UI-Text-Light-Italic__`, weight: 200 },
          "Medium Italic": { selector: `__SF-UI-Text-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Text-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Text-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Text-Heavy-Italic__`, weight: 800 },
        },
        "SF Pro Text Condensed": {
          Regular: { selector: `__SF-UI-Text-Condensed-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 },
        },
        Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
        Times: { Regular: { selector: `Times`, weight: void 0 } },
        "Times New Roman": { Regular: { selector: `Times New Roman`, weight: void 0 } },
        Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } },
        Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
      }),
      (sj = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`,
      }),
      (cj = oj),
      (lj = `System Default`),
      (uj = class {
        name = `local`;
        fontFamilies = [];
        byFamilyName = new Map();
        fontAliasBySelector = new Map();
        fontAliases = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.addFontFamily(t), t);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        importFonts() {
          let e = [];
          for (let t of Object.keys(cj)) {
            let n = cj[t];
            if (!n) continue;
            let r = this.createFontFamily(t);
            for (let e of Object.keys(n)) {
              let t = n[e];
              if (!t) continue;
              let { selector: i, weight: a } = t,
                o = { variant: e, selector: i, weight: a, family: r, cssFamilyName: r.name };
              r.fonts.push(o);
            }
            e.push(...r.fonts);
          }
          for (let [e, t] of Object.entries(sj)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: lj, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = a_(i, r),
                a = `__SystemDefault-${i}-${r}__`,
                o = {
                  variant: n,
                  selector: a,
                  style: r,
                  weight: i,
                  family: e,
                  cssFamilyName: e.name,
                };
              (e.fonts.push(o),
                t.set(
                  a,
                  `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`
                ));
            }
          return { fontFamily: e, aliases: t };
        }
        getFontAliasBySelector(e) {
          return this.fontAliasBySelector.get(e) || null;
        }
        getFontSelectorByAlias(e) {
          return this.fontAliases.get(e) || null;
        }
        isFontFamilyAlias(e) {
          return !!(e && /^__.*__$/u.exec(e));
        }
      }),
      (dj = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`,
      }),
      (fj = class extends Map {
        _hash = 0;
        get hash() {
          return this._hash;
        }
        set(e, t) {
          return (this._hash++, super.set(e, t));
        }
        delete(e) {
          return (this._hash++, super.delete(e));
        }
        clear() {
          return (this._hash++, super.clear());
        }
      }),
      (mj = `Variable`),
      (hj = `BI;`),
      (gj = class {
        name = `builtIn`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetByKey = new Map();
        importFonts(e) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
          let t = [];
          for (let n of e) {
            if (!this.isValidBuiltInFont(n)) continue;
            let { properties: e } = n,
              r = e.font.fontFamily,
              i = this.createFontFamily(r, e.font.foundryName, e.font.fontVersion),
              a = e.font.openTypeData,
              o = e.font.variationAxes,
              s = Array.isArray(o),
              c = s ? `variable` : e.font.fontSubFamily || `regular`,
              l = u_(n),
              u = m_(o),
              d = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: p_(a),
                variationAxes: u,
                category: e.font.fontCategory,
                weight: s ? v_(u, e.font.faceDescriptors?.weight) : __(c),
                style: b_(c),
                cssFamilyName: d_(r, s),
              };
            (i.fonts.push(d), this.assetByKey.set(n.key, n), t.push(d));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = __(e.variant),
                r = __(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          let t = y_(e);
          return {
            weight: t === `variable` || t === `variable-italic` ? 400 : _j[t],
            style: b_(e),
          };
        }
        getFontBySelector(e) {
          let t = this.parseSelector(e);
          if (!t) return;
          let n = this.getFontFamilyByName(t.name);
          if (n) return n.fonts.find((t) => t.selector === e);
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e, t, n) {
          let r = this.byFamilyName.get(e);
          if (r && r.version === n) return r;
          let i = { source: this.name, name: e, fonts: [], foundryName: t, version: n };
          return (this.addFontFamily(i), i);
        }
        getOpenTypeFeatures(e) {
          U(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return p_(t)
            ? t?.map((e) => {
                if (h_(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        isValidBuiltInFont(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font ||
            !e.properties.font.fontVersion ||
            !e.properties.font.fontFamily
            ? !1
            : `fontFamily` in e.properties.font;
        }
        createSelector(e, t, n) {
          return `${hj}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(hj)) return null;
          let [t, n] = e.split(hj);
          if (n === void 0) return null;
          let [r, i, a] = n.split(`/`);
          return !r || !i || !a
            ? null
            : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`),
              };
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
      }),
      (_j = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        "narrow-regular": 350,
        "narrow-black": 850,
        variable: 1e3,
        "variable-italic": 1e3,
      }),
      (vj = ip(`custom-font-source`)),
      (yj = `CUSTOM;`),
      (bj = `CUSTOMV2;`),
      (xj = class e {
        name = `custom`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetsByKey = new Map();
        debugByFamily = new Map();
        debugFamilies;
        importFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = {},
            r = new Map();
          for (let i of t) {
            if (!this.isValidCustomFontAsset(i)) continue;
            let { family: t, variant: a, weight: o, style: s } = A_(i.properties.font),
              c = i.properties.font.variationAxes,
              l = Array.isArray(c),
              u = i.properties.font.openTypeData,
              d = u_(i),
              f = N_(i),
              p = k_(i.properties),
              m = e.createLegacySelector(p),
              h = this.createFontFamily(t),
              g = e.createSelector(h.name, a),
              _ = {
                assetKey: i.key,
                family: h,
                selector: g,
                variant: a,
                weight: o,
                style: s,
                file: d,
                hasOpenTypeFeatures: p_(u),
                variationAxes: m_(c),
                owner: f,
                alternativeSelectors: {
                  [m]: {
                    variant: l ? `variable` : this.inferVariantName(p),
                    cssFamilyName: e.cssFontFamilyFromSelector(m),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(g),
              },
              v = O_(h.fonts, _);
            if (v?.projectDuplicate) _.owner === `team` && ((h.fonts[v.index] = _), (n[g] = _));
            else if (v) {
              vj.debug(`Duplicate font found for:`, _, `with existing font:`, v.existingFont);
              let e = v.existingFont,
                t = _.file?.endsWith(`.woff2`) ?? !1,
                r = e.file?.endsWith(`.woff2`) ?? !1,
                i = t && !r,
                a = t === r,
                o = _.owner === `team` || e.owner !== `team`;
              (i || (a && o)) && ((h.fonts[v.index] = _), (n[g] = _));
            } else (h.fonts.push(_), (n[g] = _));
            (this.assetsByKey.set(i.key, i),
              P_(r, t, a).fonts.push({ font: _, asset: i, selected: !1 }));
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && M_(e);
          return ((this.debugByFamily = r), (this.debugFamilies = void 0), Object.values(n));
        }
        getDebugFamilies() {
          if (this.debugFamilies) return this.debugFamilies;
          let e = new Set();
          for (let t of this.fontFamilies)
            for (let n of t.fonts) n.assetKey && n.owner && e.add(`${n.assetKey}:${n.owner}`);
          return ((this.debugFamilies = F_(this.debugByFamily, e)), this.debugFamilies);
        }
        static createSelector(e, t) {
          return `${bj}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${yj}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            U(T_(e), `Selector must be a custom font selector`),
            D_(e) ? e.slice(yj.length) : e.slice(bj.length)
          );
        }
        isValidCustomFontAsset(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font
            ? !1
            : `fontFamily` in e.properties.font;
        }
        getOpenTypeFeatures(e) {
          U(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return p_(t)
            ? t?.map((e) => {
                if (h_(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        inferVariantName(e) {
          let t = [
              `thin`,
              `ultra light`,
              `extra light`,
              `light`,
              `normal`,
              `medium`,
              `semi bold`,
              `bold`,
              `extra bold`,
              `black`,
            ],
            n = [...t.map((e) => `${e} italic`), ...t],
            r = e.toLowerCase(),
            i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
            a = n.find((e) => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)));
          return a ? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase()) : `Regular`;
        }
        createFontFamily(e) {
          let t = this.byFamilyName.get(e);
          if (t) return t;
          let n = { source: this.name, name: e, fonts: [] };
          return (this.addFontFamily(n), n);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) || null;
        }
      }),
      (Sj = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (Cj = `FS;`),
      (wj = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900,
      }),
      (Tj = Object.keys(wj)),
      (Ej = RegExp(`^(?:${[...Tj, `italic`, `variable`].join(`|`)})`, `u`)),
      (Dj = class e {
        name = `fontshare`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = Tj.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && wj[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(Cj)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(Cj, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${Cj}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${Cj}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await I_(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!Ej.exec(t) || t.split(` `).includes(`wide`));
                })
                .map((t) => ({
                  ...e.parseVariant(t.name),
                  selector: e.createSelector(a.name, t.name),
                  isVariable: t.is_variable,
                  fontshareVariantName: t.name,
                  file: t.file,
                })),
              o = e.createMetadataSelector(a.name),
              s = n?.[o],
              c = a.name,
              l = this.getFontFamilyByName(c);
            l || ((l = { name: c, fonts: [], source: this.name }), this.addFontFamily(l));
            let u = r[e.createMetadataSelector(a.name)];
            for (let e of t) {
              let {
                  variantBold: n,
                  variantBoldItalic: r,
                  variantItalic: o,
                  variantVariable: c,
                  variantVariableItalic: d,
                } = x_(e, t),
                f = {
                  family: l,
                  variant: e.fontshareVariantName.toLowerCase(),
                  selector: e.selector,
                  selectorBold: n?.selector,
                  selectorBoldItalic: r?.selector,
                  selectorItalic: o?.selector,
                  selectorVariable: c?.selector,
                  selectorVariableItalic: d?.selector,
                  weight: e.weight,
                  style: e.style,
                  file: e.file,
                  category: B_(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: d_(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await L_(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (Oj = `Inter`),
      (kj = `FR;`),
      (Aj = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
      }),
      (jj = class e {
        name = `framer`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(kj) && !e.startsWith(Oj)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && Aj[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${kj}${e}`;
        }
        importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = [];
          return (
            t.forEach((t) => {
              let { uiFamilyName: i, ...a } = t,
                o = e.createMetadataSelector(t.uiFamilyName),
                s = n?.[o],
                c = this.getFontFamilyByName(i);
              c ||= this.addFontFamily(i);
              let l = t.selector === t.selectorVariable || t.selector === t.selectorVariableItalic,
                u = { ...a, family: c, variationAxes: l ? s : void 0 };
              (c.fonts.push(u), r.push(u));
            }),
            r
          );
        }
        async getOpenTypeFeatures(t) {
          return (await L_(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (Mj = `GF;`),
      (Nj = class e {
        name = `google`;
        fontFamilies = [];
        byFamilyName = new Map();
        supportedSubsetsByFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        getSupportedSubsetsByFamilyName(e) {
          return this.supportedSubsetsByFamilyName.get(e) ?? [];
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          return t
            ? { weight: parseInt(t[1] || `400`), style: t[2] === `italic` ? `italic` : `normal` }
            : {};
        }
        parseSelector(e) {
          if (!e.startsWith(Mj)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(Mj, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${Mj}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${Mj}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0),
            this.byFamilyName.clear(),
            this.supportedSubsetsByFamilyName.clear());
          let i = await I_(`google`),
            a = [],
            o = H_(t, (e) => e.family),
            s = H_(n, (e) => e.family);
          for (let t in o) {
            let n = o[t];
            if (!n) continue;
            this.supportedSubsetsByFamilyName.set(n.family, n.subsets ?? []);
            let c = this.getFontFamilyByName(n.family);
            c ||= this.addFontFamily(n.family);
            let l = n.variants.map((r) => ({
                ...e.parseVariant(r),
                googleFontsVariantName: r,
                selector: e.createSelector(t, r, !1),
                isVariable: !1,
                file: n.files[r],
              })),
              u = s[t],
              d = u?.axes
                ? u.variants.map((n) => ({
                    ...e.parseVariant(n),
                    googleFontsVariantName: n,
                    selector: e.createSelector(t, n, !0),
                    isVariable: !0,
                    file: u.files[n],
                  }))
                : [],
              f = e.createMetadataSelector(n.family),
              p = r?.[f],
              m = [...l, ...d],
              h = m.filter(i_),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (i_(e) ? x_(e, h) : void 0) ?? {},
                m = {
                  family: c,
                  variant: o,
                  selector: i,
                  selectorBold: s?.selector,
                  selectorBoldItalic: u?.selector,
                  selectorItalic: l?.selector,
                  selectorVariable: d?.selector,
                  selectorVariableItalic: f?.selector,
                  weight: t,
                  style: r,
                  category: V_(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: d_(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await L_(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (Pj = Oe(Fy(), 1)),
      (Fj = 5e3),
      (Ij = 3),
      (Lj = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (Rj = new Map()),
      (zj = new Map()),
      (Bj = new Map()),
      (Vj = (e, t) => G_(e, t)),
      (Hj = {
        "FR;Inter": [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (Uj = class {
        enabled = !1;
        bySelector = new fj();
        loadedSelectors = new Set();
        getGoogleFontsListPromise;
        getFontshareFontsListPromise;
        getBuiltInFontsListPromise;
        customFontsImportPromise = new Promise((e) => {
          this.resolveCustomFontsImportPromise = e;
        });
        constructor() {
          ((this.local = new uj()),
            (this.google = new Nj()),
            (this.fontshare = new Dj()),
            (this.framer = new jj()),
            (this.custom = new xj()),
            (this.builtIn = new gj()),
            this.importLocalFonts());
        }
        local;
        google;
        fontshare;
        builtIn;
        framer;
        custom;
        get hash() {
          return this.bySelector.hash;
        }
        addFont(e) {
          if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
            for (let t of Object.keys(e.alternativeSelectors)) this.bySelector.set(t, e);
        }
        bySelectorValuesCache;
        getAvailableFonts() {
          if (
            !this.bySelectorValuesCache ||
            this.bySelectorValuesCache.hash !== this.bySelector.hash
          ) {
            let e = new Map();
            for (let t of this.bySelector.values()) e.set(t, !0);
            this.bySelectorValuesCache = {
              result: Array.from(e.keys()),
              hash: this.bySelector.hash,
            };
          }
          return this.bySelectorValuesCache.result;
        }
        importLocalFonts() {
          for (let e of this.local.importFonts()) (this.addFont(e), this.loadFont(e.selector));
        }
        async importGoogleFonts() {
          return (
            (this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
              let { staticFonts: e, variableFonts: t } = await eC.fetchGoogleFontsList(),
                n = await J_(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = eC.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await J_(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importAllWebFonts() {
          await Promise.all([
            this.importGoogleFonts(),
            this.importFontshareFonts(),
            this.importBuiltInFonts(),
          ]);
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = eC.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = J_(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e) {
          let t = new Map();
          for (let e of this.loadedSelectors) {
            if (!T_(e)) continue;
            let n = this.getFontBySelector(e);
            n && t.set(e, n);
          }
          this.bySelector.forEach((e, t) => {
            T_(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e);
          for (let e of n) this.addFont(e);
          for (let [e, n] of t) {
            let t = this.getFontBySelector(e);
            (t && t.file === n.file) ||
              (this.loadedSelectors.delete(e),
              n.file &&
                q_({ family: n.cssFamilyName, url: n.file, weight: n.weight, style: n.style }));
          }
          this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getCustomFontDebugFamilies() {
          return this.custom.getDebugFamilies();
        }
        getFontFamily(e) {
          return this[e.source].getFontFamilyByName(e.name);
        }
        getFontBySelector(e) {
          if (!e) return;
          let t;
          if (((t = this.bySelector.get(e)), t))
            return t.alternativeSelectors && e in t.alternativeSelectors
              ? { ...t, ...t.alternativeSelectors[e] }
              : t;
        }
        getDraftPropertiesBySelector(e) {
          let t = this.getFontBySelector(e);
          if (t)
            return {
              style: t.style,
              weight: t.weight,
              variant: t.variant,
              cssFamilyName: t.cssFamilyName,
              source: t.family.source,
              category: t.category,
            };
          let n = this.google.parseSelector(e);
          if (n) {
            let e = Nj.parseVariant(n.variant);
            if (i_(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: f_(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = Dj.parseVariant(r.variant);
            if (i_(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: f_(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = gj.parseVariant(i.variant);
            if (i_(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: f_(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return jj.getDraftFontPropertiesBySelector(e) || null;
        }
        isSelectorLoaded(e) {
          return this.loadedSelectors.has(e);
        }
        async loadFont(e) {
          let t = this.getFontBySelector(e);
          if (!t) return 2;
          if (this.loadedSelectors.has(e)) return 0;
          let n = t.cssFamilyName,
            r = t.family.source,
            i = w_(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((Hn() || (await K_(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await Vj({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`: {
              if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
              let r = t.file;
              await Vj({ family: n, url: r, weight: t.weight, style: t.style }, document);
              let i = this.getFontBySelector(e);
              return !i || i.file !== r
                ? (q_({ family: n, url: r, weight: t.weight, style: t.style }), 2)
                : (this.loadedSelectors.add(e), 1);
            }
            default:
              W(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(Cj)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                ra(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(Mj)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  ra(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(hj)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  ra(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some(T_) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  ra(`Failed to load custom fonts:`, e);
                })
              ),
            t.length > 0 && (await Promise.all(t)));
          let n = [];
          for (let t of e) n.push(this.loadFont(t));
          return Promise.allSettled(n);
        }
        async loadFonts(e) {
          return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
              (e) => e.status === `fulfilled` && e.value === 1
            ).length,
          };
        }
        async loadMissingFonts(e, t) {
          let n = e.filter((e) => !Wj.loadedSelectors.has(e));
          n.length !== 0 &&
            (await Wj.loadWebFontsFromSelectors(n),
            n.every((e) => Wj.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (U(e, `Can’t find Inter font`), e);
        }
        testing = { addFont: this.addFont.bind(this) };
      }),
      (Wj = new Uj()),
      (Gj = (e) => e.target.value),
      (Kj = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (qj = y(function (e, t) {
        let {
            autoFocus: n,
            className: r,
            inputName: i,
            max: a,
            min: o,
            placeholder: c,
            required: l,
            step: u,
            style: d,
            type: f,
            maxLength: m,
            value: h,
            defaultValue: _,
            autofillEnabled: v,
            onChange: y,
            onBlur: b,
            onInvalid: x,
            onFocus: S,
            onValid: C,
            onClear: T,
            ...E
          } = e,
          D = $_(h ?? _, f),
          [O, k, A] = Q_(D ?? ``, !0, y),
          j = Di(D),
          M = s(() => {
            (k(``), T && p(() => T()));
          }, [T, k]),
          N = rs(C, x, A, b, S),
          ee = s(
            (e) => {
              e.target === e.currentTarget && j.current?.focus();
            },
            [j]
          );
        if (f === `hidden`) return g(he.input, { type: `hidden`, name: i, defaultValue: _ });
        let P = v === !1 ? Kj : void 0,
          F = !!O,
          te = !!T && F,
          ne = fl(Jj, kC, r, f === `text` && Yj, f === `textarea` && Xj);
        return w(he.div, {
          ref: t,
          onClick: ee,
          style: d,
          className: ne,
          ...E,
          children: [
            f === `textarea`
              ? g(he.textarea, {
                  ref: j,
                  ...P,
                  ...N,
                  required: l,
                  autoFocus: n,
                  name: i,
                  placeholder: c,
                  className: OC,
                  value: O,
                  maxLength: m,
                })
              : g(he.input, {
                  ref: j,
                  ...P,
                  ...N,
                  type: f,
                  required: l,
                  autoFocus: n,
                  name: i,
                  placeholder: c,
                  className: fl(OC, !F && AC),
                  value: O,
                  min: o,
                  max: a,
                  step: u,
                  maxLength: m,
                }),
            te &&
              g(`button`, {
                type: `button`,
                className: Zj,
                onClick: M,
                "aria-label": `Clear`,
                children: g(ev, {}),
              }),
          ],
        });
      })),
      (Jj = `framer-form-text-input`),
      (Yj = `framer-form-text-input-type`),
      (Xj = `framer-form-textarea-input-type`),
      (Zj = `framer-form-text-input-clear`),
      (Qj = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      ($j = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (eM = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (tM = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (nM = SC(
        qj,
        [
          ...MC,
          ...FC,
          ...NC,
          Z(`.${kC}`, {
            boxShadow: Z.variable(`--framer-input-box-shadow`),
            borderTopLeftRadius: Z.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: Z.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: Z.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: Z.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: Z.variable(`--framer-input-corner-shape`),
            background: Z.variable(`--framer-input-background`),
            transition: Z.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          Z(`.${Jj} .${OC}::placeholder`, {
            color: Z.variable(`--framer-input-placeholder-color`),
          }),
          Z(`.${Jj}`, {
            display: `flex`,
            alignItems: `center`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${Jj} .${OC}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          Z(`.${Jj}.${Xj}`, { padding: 0 }),
          Z(`.${Jj}.${Xj} textarea.${OC}`, {
            width: `100%`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${Jj} .${OC}[type="date"], .${Jj} .${OC}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          Z(`.${Jj} .${OC}::-webkit-date-and-time-value`, { textAlign: `start` }),
          Z(`.${Jj} textarea`, {
            display: `flex`,
            resize: Z.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          Z(`.${Jj} textarea::-webkit-resizer`, { background: `no-repeat ${gt(Qj)}` }),
          Z(`.${Jj}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${gt($j)}` }),
          Z(`.${Jj} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          Z(`.${Jj} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          Z(`.${Jj} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          Z(`.${Jj} .${OC}::-webkit-datetime-edit`, {
            height: Z.variable(`--framer-input-font-line-height`),
          }),
          Z(`.${Jj} .${OC}.${AC}::-webkit-datetime-edit`, {
            color: Z.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": Z.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          Z(`.${Jj}.${Yj}::before`, {
            content: Z.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `${BC}px`,
            height: `${BC}px`,
            marginRight: `${zC}px`,
            ...VC,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: Z.variable(`--framer-input-icon-mask-image`),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${Jj} .${OC}[type="date"]::before, .${Jj} .${OC}[type="time"]::before`, {
            ...HC,
            paddingLeft: `${RC}px`,
            maskPosition: `${RC}px center`,
            backgroundPosition: `${RC}px center`,
          }),
          Z(`.${Jj} .${OC}[type="date"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, gt(eM)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${Jj} .${OC}[type="time"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, gt(tM)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${Jj} .${OC}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: Z.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `${BC}px`,
            height: `100%`,
          }),
          Z(`.${Jj}:focus-within, .${Jj}.${jC}`, {
            boxShadow: Z.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: Z.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
          }),
          Z(`.${Jj}:focus-within::after, .${Jj}.${jC}::after`, {
            borderColor: Z.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: Z.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: Z.variable(`--framer-input-focused-border-width`, PC),
          }),
          Z(`.${Zj}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `${BC}px`,
            height: `${BC}px`,
            marginLeft: `${zC}px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: Z.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          Z(`.${Zj}:hover, .${Zj}:focus-visible`, {
            color: Z.variable(`--framer-input-font-color`),
          }),
        ],
        `framer-lib-form-plain-text-input`
      )),
      (rM = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (iM = { opacity: 0 }),
      (aM = { opacity: 1 }),
      (oM = dv(
        h.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: a,
              draggable: o,
              fitImageDimension: s,
              style: c,
              ...l
            } = e,
            u = { ...c },
            d = S(() => Yo(n), [n]),
            [f, m] = i();
          h.useEffect(() => {
            if (!n?.src || !s || d) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                p(() => m({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, s, d]);
          let _ = d ?? f;
          return (
            s && _ && ((u[s] = `auto`), (u.aspectRatio = _.width / _.height)),
            n && delete u.background,
            w(Xo(e.as), {
              ...l,
              style: u,
              ref: t,
              draggable: o,
              children: [n && g(vo, { image: n, alt: a, draggable: o }), r],
            })
          );
        })
      )),
      (sM = h.memo(function ({
        trackCount: e,
        rowGap: t,
        parentIsDataRepeater: n = !1,
        itemsOrder: r,
        children: i,
      }) {
        let a = mv(i, n);
        r?.length && (a = pv(a, r));
        let o = hv(e, a),
          s = gv(t);
        return o.map((e, t) => g(`div`, { style: s, children: e }, _v(t)));
      })),
      (cM = (e) =>
        y(function (
          {
            columnMasonryLayoutEnabled: t,
            trackCount: n = 1,
            rowGap: r,
            parentIsDataRepeater: i,
            itemsOrder: a,
            children: o,
            style: s,
            ...c
          },
          l
        ) {
          return t
            ? g(e, {
                ref: l,
                style: { ...s, gridTemplateColumns: `repeat(${n}, 1fr)` },
                ...c,
                children: g(sM, {
                  trackCount: n,
                  rowGap: r,
                  parentIsDataRepeater: i,
                  itemsOrder: a,
                  children: o,
                }),
              })
            : g(e, { ref: l, style: s, ...c, children: o });
        })),
      (uM = !Rn() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (dM =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (fM = `{{ text-placeholder }}`),
      (pM = `rich-text-wrapper`),
      (mM = fs(
        y(function (e, n) {
          let {
              id: r,
              name: i,
              html: a,
              htmlFromDesign: o,
              text: s,
              textFromDesign: u,
              fonts: d = [],
              width: f,
              height: p,
              left: m,
              right: h,
              top: _,
              bottom: v,
              center: y,
              className: b,
              stylesPresetsClassName: x,
              visible: C = !0,
              opacity: w,
              rotation: T = 0,
              verticalAlignment: E = `top`,
              isEditable: D = !1,
              environment: O = Y.current,
              withExternalLayout: k = !1,
              positionSticky: A,
              positionStickyTop: j,
              positionStickyRight: M,
              positionStickyBottom: N,
              positionStickyLeft: ee,
              __htmlStructure: P,
              __fromCanvasComponent: F = !1,
              _forwardedOverrideId: te,
              _forwardedOverrides: ne,
              _usesDOMRect: I,
              children: re,
              ...L
            } = e,
            ie = Ho(),
            ae = vs(e),
            oe = l(null),
            se = n ?? oe,
            { navigate: ce, getRoute: le } = zt(),
            ue = Vt();
          (dr(e.preload ?? []), ws(e, se));
          let de = t(fw),
            fe = Ou(),
            pe = s,
            R = te ?? r;
          if (R && ne) {
            let e = ne[R];
            typeof e == `string` && (pe = e);
          }
          let me = ``;
          if (pe) {
            let e = bv(pe);
            me = P ? P.replace(fM, e) : `<p>${e}</p>`;
          } else if (a) me = a;
          else if (u) {
            let e = bv(u);
            me = P ? P.replace(fM, e) : `<p>${e}</p>`;
          } else o && (me = o);
          let ge = Zu(),
            _e = S(() => (fe || !le || !ue ? me : xv(me, le, ue, ge)), [me, le, ue, ge]);
          if (
            (c(() => {
              let e = se.current;
              if (e === null) return;
              function t(e) {
                let t = Gu(e.target, se.current);
                Gn(e) ||
                  !ce ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (Pu(ce, t, ge) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [ce, ge]),
            wv(d, F, se),
            !C)
          )
            return null;
          let ve = D && O() === Y.canvas,
            z = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Cv(E),
              opacity: ve ? 0 : w,
              flexShrink: 0,
            },
            ye = Y.hasRestrictions(),
            be = zo(e, ie || 0, !1),
            xe = I && (f === `auto` || p === `auto`),
            Se =
              e.transformTemplate || !be || !ye || F || xe
                ? (e.transformTemplate ?? _s(y))
                : void 0;
          if (!k) {
            if (be && ye && !xe) {
              let e = hS.getNumber(T).toFixed(4);
              ((z.transform = `translate(${be.x}px, ${be.y}px) rotate(${e}deg)`),
                (z.width = be.width),
                (z.minWidth = be.width),
                (z.height = be.height));
            } else
              ((z.left = m),
                (z.right = h),
                (z.top = _),
                (z.bottom = v),
                (z.width = f),
                (z.height = p),
                (z.rotate = T));
            A
              ? (!fe || de) &&
                ((z.position = `sticky`),
                (z.willChange = `transform`),
                (z.top = j),
                (z.right = M),
                (z.bottom = N),
                (z.left = ee))
              : fe && (e.positionFixed || e.positionAbsolute) && (z.position = `absolute`);
          }
          return (
            cl(e, z),
            al(e, z),
            Object.assign(z, e.style),
            g(he.div, {
              id: r,
              ref: se,
              ...L,
              style: z,
              layoutId: ae,
              "data-framer-name": i,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": y,
              className: fl(b, x, pM),
              transformTemplate: Se,
              dangerouslySetInnerHTML: { __html: _e },
            })
          );
        })
      )),
      (hM = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (gM = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (_M = y(function (e, t) {
        return g(`svg`, { ...e, ref: t, children: e.children });
      })),
      (vM = he.create(_M)),
      (yM = y(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return g(vM, {
          ...r,
          ref: i,
          viewBox: t,
          children: g(he.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (bM = []),
      (xM = `RichTextContainer`),
      (SM = y(function (e, n) {
        let {
            __fromCanvasComponent: r = !1,
            _forwardedOverrideId: i,
            _forwardedOverrides: a,
            _usesDOMRect: o,
            anchorLinkOffsetY: s,
            as: c,
            bottom: u,
            center: d,
            children: f,
            environment: p = Y.current,
            fonts: m = bM,
            height: h,
            isEditable: _ = !1,
            left: v,
            name: y,
            opacity: b,
            positionSticky: x,
            positionStickyBottom: C,
            positionStickyLeft: w,
            positionStickyRight: T,
            positionStickyTop: E,
            right: D,
            rotation: O = 0,
            style: k,
            _initialStyle: A,
            stylesPresetsClassNames: j,
            text: M,
            top: N,
            verticalAlignment: ee = `top`,
            visible: P = !0,
            width: F,
            withExternalLayout: te = !1,
            viewBox: ne,
            viewBoxScale: I = 1,
            effect: re,
            ...L
          } = e,
          ie = Ho(),
          ae = p(),
          oe = ae === Y.canvas,
          se = oe || ae === Y.export,
          ce = t(fw),
          le = vs(e),
          ue = l(null),
          de = n ?? ue;
        (ws(e, de), wv(m, r, de));
        let fe = Nv(re, de),
          pe = S(() => {
            if (f) return Vv(f, j, M, s, void 0, fe.getTokenizer());
          }, [f, j, M, s, fe]);
        if (!P) return null;
        let R = { opacity: _ && oe ? 0 : b },
          me = Cv(ee);
        me !== KC.justifyContent && (R.justifyContent = me);
        let he = {},
          ge = Y.hasRestrictions(),
          _e = zo(e, ie || 0, !1),
          ve = o && (F === `auto` || h === `auto`),
          z =
            e.transformTemplate || !_e || !ge || r || ve ? (e.transformTemplate ?? _s(d)) : void 0;
        (te ||
          (_e && ge && !ve
            ? ((he.x = _e.x + (V(k?.x) ? k.x : 0)),
              (he.y = _e.y + (V(k?.y) ? k.y : 0)),
              (he.left = 0),
              (he.top = 0),
              (R.rotate = hS.getNumber(O)),
              (R.width = _e.width),
              (R.minWidth = _e.width),
              (R.height = _e.height))
            : ((R.left = v),
              (R.right = D),
              (R.top = N),
              (R.bottom = u),
              (R.width = F),
              (R.height = h),
              (R.rotate = O)),
          x
            ? (!se || ce) &&
              ((R.position = `sticky`),
              (R.willChange = `transform`),
              (R.top = E),
              (R.right = T),
              (R.bottom = C),
              (R.left = w))
            : oe && (e.positionFixed || e.positionAbsolute) && (R.position = `absolute`)),
          cl(e, R),
          al(e, R),
          Object.assign(R, A, k, he),
          le && (L.layout = `preserve-aspect`));
        let ye = Xo(e.as),
          be = L[`data-framer-name`] ?? y,
          xe = oe ? Rv(qS(L)) : L;
        return B(e.viewBox)
          ? e.as === void 0
            ? g(yM, {
                ...xe,
                ref: de,
                style: R,
                layoutId: le,
                viewBox: ne,
                viewBoxScale: I,
                transformTemplate: z,
                "data-framer-name": be,
                "data-framer-component-type": xM,
                children: pe,
              })
            : g(ye, {
                ...xe,
                ref: de,
                style: R,
                layoutId: le,
                transformTemplate: z,
                "data-framer-name": be,
                "data-framer-component-type": xM,
                children: g(yM, {
                  viewBox: ne,
                  viewBoxScale: I,
                  style: { width: `100%`, height: `100%` },
                  children: pe,
                }),
              })
          : g(ye, {
              ...xe,
              ref: de,
              style: R,
              layoutId: le,
              transformTemplate: z,
              "data-framer-name": be,
              "data-framer-component-type": xM,
              children: pe,
            });
      })),
      (CM = fs(
        y(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (B(a)) {
            !r.stylesPresetsClassName &&
              H(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [B(t) ? `html` : `htmlFromDesign`]: a };
            return g(mM, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && B(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return g(SM, { ...r, ref: i, children: v(a) ? a : void 0 });
        })
      )),
      (wM = `framer/asset-reference,`),
      (TM = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = ey(t);
        return g(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: g(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (EM = zn()),
      (DM = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
        id;
        svg;
        innerHTML;
        viewBox;
        count;
      }),
      (OM = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (kM = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(bw(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = ny(e);
            (s &&
              (t && ry(s, n),
              (s.id = n),
              (o = cy(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          EM && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = OM),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          EM && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new DM(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !EM) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        EM && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${OM}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/u, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (AM = new kM()),
      (jM = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (MM = y(function (e, t) {
        let n = Ho(),
          r = vs(e),
          i = h.useRef(null),
          a = t ?? i,
          o = aj();
        return (
          ws(e, i),
          g(PM, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (NM = 5e4),
      (PM = class e extends yw {
        static supportsConstraints = !0;
        static defaultSVGProps = {
          left: void 0,
          right: void 0,
          top: void 0,
          bottom: void 0,
          style: void 0,
          _constraints: { enabled: !0, aspectRatio: null },
          parentSize: 0,
          rotation: 0,
          visible: !0,
          svg: ``,
          shadows: [],
        };
        static defaultProps = { ...yw.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return zo(e, e.parentSize || 0);
        }
        container = h.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return zo(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (AM.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || fy(this.container, this.props);
        }
        componentWillUnmount() {
          (AM.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (sC.isImageObject(t) &&
            sC.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            ks(this.svgElement, `fill`, null, !1),
            fy(this.container, this.props));
        }
        collectLayout(e, t) {
          if (this.props.withExternalLayout) {
            ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
            return;
          }
          let n = this.frame,
            {
              rotation: r,
              intrinsicWidth: i,
              intrinsicHeight: a,
              width: o,
              height: s,
            } = this.props,
            c = hS.getNumber(r);
          if (
            ((e.opacity = G(this.props.opacity) ? this.props.opacity : 1), Y.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              Io(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = zS;
            if (l === Y.export) {
              let e = s > 1 ? s : 1;
              ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
            } else t.transform = `scale(${r}, ${o})`;
            i && a && ((t.width = i), (t.height = a));
            return;
          }
          let { left: l, right: u, top: d, bottom: f } = this.props;
          (Object.assign(e, {
            left: l,
            right: u,
            top: d,
            bottom: f,
            width: o,
            height: s,
            rotate: c,
          }),
            Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
        }
        render() {
          let {
            id: e,
            visible: t,
            style: n,
            fill: r,
            svg: i,
            intrinsicHeight: a,
            intrinsicWidth: o,
            title: s,
            description: c,
            layoutId: l,
            className: u,
            variants: d,
            withExternalLayout: f,
            innerRef: p,
            svgContentId: m,
            height: h,
            opacity: _,
            width: v,
            requiresOverflowVisible: y,
            ...b
          } = this.props;
          if (!f && (!t || !e)) return null;
          let x = e ?? l ?? `svg`,
            S = this.frame,
            C = S || { width: o || 100, height: a || 100 },
            T = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
            E = {};
          (this.collectLayout(T, E),
            rl(this.props, T),
            cl(this.props, T),
            yw.applyWillChange(this.props, T, !1));
          let O = null;
          if (typeof r == `string` || J.isColorObject(r)) {
            let e = J.isColorObject(r) ? r.initialValue || J.toRgbString(r) : r;
            ((T.fill = e), (T.color = e));
          } else if (Dw.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${Dw.hash(t)}`;
            T.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = Kv(t, x);
            O = g(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: g(`linearGradient`, {
                id: n,
                x1: a,
                x2: o,
                y1: s,
                y2: c,
                children: i.map((e, t) =>
                  g(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (kw.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${kw.hash(t)}`;
            T.fill = `url(#${n})`;
            let i = qv(t, x);
            O = g(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: g(`radialGradient`, {
                id: n,
                cy: t.centerAnchorY,
                cx: t.centerAnchorX,
                r: t.widthFactor,
                children: i.stops.map((e, t) =>
                  g(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (sC.isImageObject(r)) {
            let e = Qv(r, C, x);
            e &&
              ((T.fill = `url(#${e.id})`),
              (O = g(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: g(`defs`, { children: g(TM, { ...e }) }),
              })));
          }
          let k = { "data-framer-component-type": `SVG` },
            A = !S;
          A && Object.assign(k, ms(this.props.center));
          let j =
              !y &&
              !O &&
              !T.fill &&
              !T.background &&
              !T.backgroundImage &&
              i.length < NM &&
              !ly(i) &&
              !uy(i),
            M = null;
          if (j)
            ((T.backgroundSize = `100% 100%`),
              (T.backgroundImage = gt(i)),
              AM.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = AM.subscribe(i, !m, e, y);
            (AM.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              dy(T) && (T.overflow = `hidden`),
              (M = w(D, {
                children: [
                  O,
                  g(
                    `div`,
                    {
                      className: `svgContainer`,
                      style: E,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: t },
                    },
                    sC.isImageObject(r) ? r.src : ``
                  ),
                ],
              })));
          }
          let N = Xo(this.props.as),
            { href: ee, target: P, rel: F, onClick: te, onTap: ne } = this.props,
            I = s || c;
          return g(N, {
            ...k,
            ...b,
            layoutId: l,
            transformTemplate: A ? _s(this.props.center) : void 0,
            id: e,
            ref: p,
            style: T,
            className: u,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: I ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": I ? void 0 : `true`,
            onTap: ne,
            onClick: te,
            href: ee,
            target: P,
            rel: F,
            children: M,
          });
        }
      }),
      (FM = fs(MM)),
      (IM = 1e3),
      (LM = `explicitInter`),
      (Xe.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = I(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
//! Credit to Astro | MIT License
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
export {
  Mi as $,
  el as A,
  gh as At,
  NT as B,
  aO as C,
  eh as Ct,
  TE as D,
  ty as Dt,
  nj as E,
  zt as Et,
  Wj as F,
  Ey as Ft,
  tl as G,
  _y as H,
  Ay as I,
  oA as It,
  Vi as J,
  Rm as K,
  FT as L,
  Zb as Lt,
  wC as M,
  oE as Mt,
  fl as N,
  sA as Nt,
  py as O,
  hh as Ot,
  dg as P,
  wl as Pt,
  Jy as Q,
  MT as R,
  Y as S,
  na as St,
  FM as T,
  qt as Tt,
  vy as U,
  xC as V,
  hy as W,
  RM as X,
  xt as Y,
  wt as Z,
  gr as _,
  cc as _t,
  wE as a,
  Oy as at,
  OT as b,
  cr as bt,
  kD as c,
  pE as ct,
  KE as d,
  Hm as dt,
  IE as et,
  oM as f,
  $l as ft,
  lS as g,
  Km as gt,
  uD as h,
  Tu as ht,
  lE as i,
  Xm as it,
  uw as j,
  cM as jt,
  gy as k,
  SC as kt,
  nM as l,
  AM as lt,
  rb as m,
  Vt as mt,
  Ku as n,
  ta as nt,
  lT as o,
  Dy as ot,
  GE as p,
  Jt as pt,
  Eb as q,
  Ql as r,
  Lk as rt,
  $a as s,
  Uu as st,
  Hu as t,
  dl as tt,
  CT as u,
  Oi as ut,
  np as v,
  Ou as vt,
  CM as w,
  Lm as wt,
  Pk as x,
  sr as xt,
  YE as y,
  no as yt,
  PT as z,
};
//# sourceMappingURL=framer.BpPKSFgL.mjs.map
