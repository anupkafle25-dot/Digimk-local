import { r as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as n,
  C as r,
  F as i,
  I as a,
  L as o,
  M as s,
  N as c,
  O as l,
  P as u,
  R as d,
  S as f,
  c as p,
  d as m,
  f as h,
  g,
  j as _,
  k as v,
  l as y,
  o as b,
  s as x,
  u as S,
  v as C,
  w as ee,
  x as te,
  z as w,
} from "./react.C1Oj3OU0.mjs";
var ne,
  T,
  re,
  ie,
  ae,
  oe,
  se,
  ce,
  le,
  ue,
  de,
  fe,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je = t(() => {
    ((ne = Object.create),
      (T = Object.defineProperty),
      (re = Object.getOwnPropertyDescriptor),
      (ie = Object.getOwnPropertyNames),
      (ae = Object.getPrototypeOf),
      (oe = Object.prototype.hasOwnProperty),
      (se = (e, t) => ((t = Symbol[e]) ? t : Symbol.for(`Symbol.` + e))),
      (ce = (e) => {
        throw TypeError(e);
      }),
      (le = (e, t, n) =>
        t in e
          ? T(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n)),
      (ue = (e, t) => T(e, `name`, { value: t, configurable: !0 })),
      (de = ((t) =>
        e === void 0
          ? typeof Proxy < `u`
            ? new Proxy(t, { get: (t, n) => (e === void 0 ? t : e)[n] })
            : t
          : e)(function (t) {
        if (e !== void 0) return e.apply(this, arguments);
        throw Error(`Dynamic require of "` + t + `" is not supported`);
      })),
      (fe = (e, t) =>
        function () {
          try {
            return (t || (0, e[ie(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (pe = (e, t) => {
        for (var n in t) T(e, n, { get: t[n], enumerable: !0 });
      }),
      (me = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of ie(t))
            !oe.call(e, i) &&
              i !== n &&
              T(e, i, { get: () => t[i], enumerable: !(r = re(t, i)) || r.enumerable });
        return e;
      }),
      (he = (e, t, n) => (
        (n = e == null ? {} : ne(ae(e))),
        me(t || !e || !e.__esModule ? T(n, `default`, { value: e, enumerable: !0 }) : n, e)
      )),
      (ge = (e) => [, , , ne(e?.[se(`metadata`)] ?? null)]),
      (_e = [`class`, `method`, `getter`, `setter`, `accessor`, `field`, `value`, `get`, `set`]),
      (ve = (e) => (e !== void 0 && typeof e != `function` ? ce(`Function expected`) : e)),
      (ye = (e, t, n, r, i) => ({
        kind: _e[e],
        name: t,
        metadata: r,
        addInitializer: (e) => (n._ ? ce(`Already initialized`) : i.push(ve(e || null))),
      })),
      (be = (e, t) => le(t, se(`metadata`), e[3])),
      (xe = (e, t, n, r) => {
        for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++)
          t & 1 ? a[i].call(n) : (r = a[i].call(n, r));
        return r;
      }),
      (Se = (e, t, n, r, i, a) => {
        var o,
          s,
          c,
          l,
          u,
          d = t & 7,
          f = !!(t & 8),
          p = !!(t & 16),
          m = d > 3 ? e.length + 1 : d ? (f ? 1 : 2) : 0,
          h = _e[d + 5],
          g = d > 3 && (e[m - 1] = []),
          _ = e[m] || (e[m] = []),
          v =
            d &&
            (!p && !f && (i = i.prototype),
            d < 5 &&
              (d > 3 || !p) &&
              re(
                d < 4
                  ? i
                  : {
                      get [n]() {
                        return Ee(this, a);
                      },
                      set [n](e) {
                        return De(this, a, e);
                      },
                    },
                n
              ));
        d ? p && d < 4 && ue(a, (d > 2 ? `set ` : d > 1 ? `get ` : ``) + n) : ue(i, n);
        for (var y = r.length - 1; y >= 0; y--)
          ((l = ye(d, n, (c = {}), e[3], _)),
            d &&
              ((l.static = f),
              (l.private = p),
              (u = l.access = { has: p ? (e) => Te(i, e) : (e) => n in e }),
              d ^ 3 &&
                (u.get = p ? (e) => (d ^ 1 ? Ee : Oe)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]),
              d > 2 &&
                (u.set = p ? (e, t) => De(e, i, t, d ^ 4 ? a : v.set) : (e, t) => (e[n] = t))),
            (s = (0, r[y])(
              d ? (d < 4 ? (p ? a : v[h]) : d > 4 ? void 0 : { get: v.get, set: v.set }) : i,
              l
            )),
            (c._ = 1),
            d ^ 4 || s === void 0
              ? ve(s) && (d > 4 ? g.unshift(s) : d ? (p ? (a = s) : (v[h] = s)) : (i = s))
              : typeof s != `object` || !s
                ? ce(`Object expected`)
                : (ve((o = s.get)) && (v.get = o),
                  ve((o = s.set)) && (v.set = o),
                  ve((o = s.init)) && g.unshift(o)));
        return (d || be(e, i), v && T(i, n, v), p ? (d ^ 4 ? a : v) : i);
      }),
      (Ce = (e, t, n) => le(e, typeof t == `symbol` ? t : t + ``, n)),
      (we = (e, t, n) => t.has(e) || ce(`Cannot ` + n)),
      (Te = (e, t) =>
        Object(t) === t ? e.has(t) : ce(`Cannot use the "in" operator on this value`)),
      (Ee = (e, t, n) => (we(e, t, `read from private field`), n ? n.call(e) : t.get(e))),
      (De = (e, t, n, r) => (
        we(e, t, `write to private field`),
        r ? r.call(e, n) : t.set(e, n),
        n
      )),
      (Oe = (e, t, n) => (we(e, t, `access private method`), n)),
      (ke = (e, t, n) => {
        if (t != null) {
          typeof t != `object` && typeof t != `function` && ce(`Object expected`);
          var r, i;
          (n && (r = t[se(`asyncDispose`)]),
            r === void 0 && ((r = t[se(`dispose`)]), n && (i = r)),
            typeof r != `function` && ce(`Object not disposable`),
            i &&
              (r = function () {
                try {
                  i.call(this);
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
            e.push([n, r, t]));
        } else n && e.push([n]);
        return t;
      }),
      (Ae = (e, t, n) => {
        var r =
            typeof SuppressedError == `function`
              ? SuppressedError
              : function (e, t, n, r) {
                  return (
                    (r = Error(n)),
                    (r.name = `SuppressedError`),
                    (r.error = e),
                    (r.suppressed = t),
                    r
                  );
                },
          i = (e) =>
            (t = n ? new r(e, t, `An error was suppressed during disposal`) : ((n = !0), e)),
          a = (r) => {
            for (; (r = e.pop());)
              try {
                var o = r[1] && r[1].call(r[2]);
                if (r[0]) return Promise.resolve(o).then(a, (e) => (i(e), a()));
              } catch (e) {
                i(e);
              }
            if (n) throw t;
          };
        return a();
      }));
  });
function Me(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ne(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function Pe([...e], t, n) {
  let r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    let r = n < 0 ? e.length + n : n,
      [i] = e.splice(t, 1);
    e.splice(r, 0, i);
  }
  return e;
}
function Fe(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
function Ie(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = Ks(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > qs && ++s < Js);
  return o;
}
function Le(e, t, n, r) {
  if (e === t && n === r) return F;
  let i = (t) => Ie(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : Ks(i(e), t, r));
}
function Re(e, t) {
  return sc(e) ? e[Gs(0, e.length, t)] : e;
}
function ze(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    a = new WeakSet(),
    o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(t) {
    (a.has(t) && (c.schedule(t), e()), t(o));
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n;
      return (i && a.add(e), s.add(e), e);
    },
    cancel: (e) => {
      (n.delete(e), a.delete(e));
    },
    process: (e) => {
      if (((o = e), r)) {
        i = !0;
        return;
      }
      r = !0;
      let a = t;
      ((t = n), (n = a), t.forEach(s), t.clear(), (r = !1), i && ((i = !1), c.process(e)));
    },
  };
  return c;
}
function Be(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = fc.reduce((e, t) => ((e[t] = ze(a)), e), {}),
    {
      setup: s,
      read: c,
      resolveKeyframes: l,
      preUpdate: u,
      update: d,
      preRender: f,
      render: p,
      postRender: m,
    } = o,
    h = () => {
      let a = P.useManualTiming,
        o = a ? i.timestamp : performance.now();
      ((n = !1),
        a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, pc), 1)),
        (i.timestamp = o),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        p.process(i),
        m.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(h)));
    },
    g = () => {
      ((n = !0), (r = !0), i.isProcessing || e(h));
    };
  return {
    schedule: fc.reduce((e, t) => {
      let r = o[t];
      return ((e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i))), e);
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < fc.length; t++) o[fc[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
function Ve() {
  hc = void 0;
}
function He(e) {
  return typeof e == `string` && e.split(`/*`)[0].includes(`var(--`);
}
function Ue(e) {
  return e == null;
}
function We(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
function Ge(e) {
  return (
    isNaN(e) && typeof e == `string` && (e.match(Tc)?.length || 0) + (e.match(Rc)?.length || 0) > 0
  );
}
function Ke(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        Wc,
        (e) => (
          G.test(e)
            ? (r.color.push(a), i.push(Bc), n.push(G.parse(e)))
            : e.startsWith(Hc)
              ? (r.var.push(a), i.push(Vc), n.push(e))
              : (r.number.push(a), i.push(zc), n.push(parseFloat(e))),
          ++a,
          Uc
        )
      )
      .split(Uc),
    indexes: r,
    types: i,
  };
}
function qe(e) {
  return Ke(e).values;
}
function Je({ split: e, types: t }) {
  let n = e.length;
  return (r) => {
    let i = ``;
    for (let a = 0; a < n; a++)
      if (((i += e[a]), r[a] !== void 0)) {
        let e = t[a];
        e === zc ? (i += wc(r[a])) : e === Bc ? (i += G.transform(r[a])) : (i += r[a]);
      }
    return i;
  };
}
function Ye(e) {
  return Je(Ke(e));
}
function Xe(e) {
  let t = Ke(e);
  return Je(t)(t.values.map((e, n) => Kc(e, t.split[n])));
}
function Ze(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Qe({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = Ze(s, r, e + 1 / 3)), (a = Ze(s, r, e)), (o = Ze(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function $e(e, t) {
  return (n) => (n > 0 ? t : e);
}
function et(e) {
  let t = Yc(e);
  if ((`${e}`, !t)) return !1;
  let n = t.parse(e);
  return (t === Lc && (n = Qe(n)), n);
}
function tt(e, t) {
  return Zc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function nt(e, t) {
  return (n) => q(e, t, n);
}
function rt(e) {
  return typeof e == `number`
    ? nt
    : typeof e == `string`
      ? yc(e)
        ? $e
        : G.test(e)
          ? Xc
          : Qc
      : Array.isArray(e)
        ? it
        : typeof e == `object`
          ? G.test(e)
            ? Xc
            : at
          : $e;
}
function it(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => rt(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function at(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = rt(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function ot(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]];
    ((n[i] = e.values[o] ?? 0), r[a]++);
  }
  return n;
}
function st(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number`
    ? q(e, t, n)
    : rt(e)(e, t);
}
function ct(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < 2e4;) ((t += 50), (n = e.next(t)));
  return t >= 2e4 ? 1 / 0 : t;
}
function lt(e, t = 100, n) {
  let r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(ct(r), el);
  return { type: `keyframes`, ease: (e) => r.next(i * e).value / t, duration: L(i) };
}
function ut(e, t) {
  return e * Math.sqrt(1 - t * t);
}
function dt(e, t, n) {
  let r = n;
  for (let n = 1; n < tl; n++) r -= e(r) / t(r);
  return r;
}
function ft({
  duration: e = J.duration,
  bounce: t = J.bounce,
  velocity: n = J.velocity,
  mass: r = J.mass,
}) {
  let i, a;
  J.maxDuration;
  let o = 1 - t;
  ((o = N(J.minDamping, J.maxDamping, o)),
    (e = N(J.minDuration, J.maxDuration, L(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = ut(t, o),
            c = Math.exp(-i);
          return nl - (a / s) * c;
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = ut(t ** 2, o);
          return ((-i(t) + nl > 0 ? -1 : 1) * ((a - s) * c)) / l;
        }))
      : ((i = (t) => {
          let r = Math.exp(-t * e),
            i = (t - n) * e + 1;
          return -nl + r * i;
        }),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)))));
  let s = 5 / e,
    c = dt(i, a, s);
  if (((e = I(e)), isNaN(c))) return { stiffness: J.stiffness, damping: J.damping, duration: e };
  {
    let t = c ** 2 * r;
    return { stiffness: t, damping: o * 2 * Math.sqrt(r * t), duration: e };
  }
}
function pt(e, t) {
  return t.some((t) => e[t] !== void 0);
}
function mt(e) {
  let t = {
    velocity: J.velocity,
    stiffness: J.stiffness,
    damping: J.damping,
    mass: J.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!pt(e, il) && pt(e, rl))
    if (((t.velocity = 0), e.visualDuration)) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * N(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: J.mass, stiffness: i, damping: a };
    } else {
      let n = ft({ ...e, velocity: 0 });
      ((t = { ...t, ...n, mass: J.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function ht(e = J.visualDuration, t = J.bounce) {
  let n = typeof e == `object` ? e : { visualDuration: e, keyframes: [0, 1], bounce: t },
    { restSpeed: r, restDelta: i } = n,
    a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = { done: !1, value: a },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = mt({ ...n, velocity: -L(n.velocity || 0) }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    _ = L(Math.sqrt(c / u)),
    v = Math.abs(g) < 5;
  ((r ||= v ? J.restSpeed.granular : J.restSpeed.default),
    (i ||= v ? J.restDelta.granular : J.restDelta.default));
  let y, b, x, S, C, ee;
  if (h < 1)
    ((x = ut(_, h)),
      (S = (m + h * _ * g) / x),
      (y = (e) => {
        let t = Math.exp(-h * _ * e);
        return o - t * (S * Math.sin(x * e) + g * Math.cos(x * e));
      }),
      (C = h * _ * S + g * x),
      (ee = h * _ * g - S * x),
      (b = (e) => Math.exp(-h * _ * e) * (C * Math.sin(x * e) + ee * Math.cos(x * e))));
  else if (h === 1) {
    y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
    let e = m + _ * g;
    b = (t) => Math.exp(-_ * t) * (_ * e * t - m);
  } else {
    let e = _ * Math.sqrt(h * h - 1);
    y = (t) => {
      let n = Math.exp(-h * _ * t),
        r = Math.min(e * t, 300);
      return o - (n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e;
    };
    let t = (m + h * _ * g) / e,
      n = h * _ * t - g * e,
      r = h * _ * g - t * e;
    b = (t) => {
      let i = Math.exp(-h * _ * t),
        a = Math.min(e * t, 300);
      return i * (n * Math.sinh(a) + r * Math.cosh(a));
    };
  }
  let te = {
    calculatedDuration: (p && d) || null,
    velocity: (e) => I(b(e)),
    next: (e) => {
      if (!p && h < 1) {
        let t = Math.exp(-h * _ * e),
          n = Math.sin(x * e),
          a = Math.cos(x * e),
          c = o - t * (S * n + g * a),
          l = I(t * (C * n + ee * a));
        return ((s.done = Math.abs(l) <= r && Math.abs(o - c) <= i), (s.value = s.done ? o : c), s);
      }
      let t = y(e);
      if (p) s.done = e >= d;
      else {
        let n = I(b(e));
        s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
      }
      return ((s.value = s.done ? o : t), s);
    },
    toString: () => {
      let e = Math.min(ct(te), el),
        t = $c((t) => te.next(e * t).value, e, 30);
      return e + `ms ` + t;
    },
    toTransition: () => {},
  };
  return te;
}
function gt(e, t, n) {
  let r = Math.max(t - al, 0);
  return Ws(n - e(r), t - r);
}
function _t({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
    m = (e) => (s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c),
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => _ + v(e),
    b = (e) => {
      let t = v(e),
        n = y(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : n));
    },
    x,
    S,
    C = (e) => {
      p(f.value) &&
        ((x = e),
        (S = ht({
          keyframes: [f.value, m(f.value)],
          velocity: gt(y, e, f.value),
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !S && x === void 0 && ((t = !0), b(e), C(e)),
          x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        );
      },
    }
  );
}
function vt(e, t, n) {
  let r = [],
    i = n || P.mix || st,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    (t && (a = Vs(Array.isArray(t) ? t[n] || F : t, a)), r.push(a));
  }
  return r;
}
function yt(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if ((t.length, a === 1)) return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = vt(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = Hs(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(N(e[0], e[a - 1], t)) : l;
}
function bt(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = Hs(0, t, r);
    e.push(q(n, 1, i));
  }
}
function xt(e) {
  let t = [0];
  return (bt(t, e.length - 1), t);
}
function St(e, t) {
  return e.map((e) => e * t);
}
function Ct(e, t) {
  return e.map(() => t || oc).splice(0, e.length - 1);
}
function wt({ duration: e = 300, keyframes: t, times: n, ease: r = `easeInOut` }) {
  let i = sc(r) ? r.map(dc) : dc(r),
    a = { done: !1, value: t[0] },
    o = yt(St(n && n.length === t.length ? n : xt(t), e), t, {
      ease: Array.isArray(i) ? i : Ct(t, i),
    });
  return { calculatedDuration: e, next: (t) => ((a.value = o(t)), (a.done = t >= e), a) };
}
function Tt(e, { repeat: t, repeatType: n = `loop` }, r, i = 1) {
  let a = e.filter(ol),
    o = i < 0 || (t && n !== `loop` && t % 2 == 1) ? 0 : a.length - 1;
  return !o || r === void 0 ? a[o] : r;
}
function Et(e) {
  typeof e.type == `string` && (e.type = cl[e.type]);
}
function Dt(e) {
  return new dl(e);
}
function Ot(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
function kt(e) {
  return +!!e.includes(`scale`);
}
function At(e, t) {
  if (!e || e === `none`) return kt(t);
  let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
    r,
    i;
  if (n) ((r = yl), (i = n));
  else {
    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = ml), (i = t));
  }
  if (!i) return kt(t);
  let a = r[t],
    o = i[1].split(`,`).map(jt);
  return typeof a == `function` ? a(o) : o[a];
}
function jt(e) {
  return parseFloat(e.trim());
}
function Mt(e) {
  let t = [];
  return (
    Tl.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)));
    }),
    t
  );
}
function Nt() {
  if (Ol) {
    let e = Array.from(El).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map();
    (t.forEach((e) => {
      let t = Mt(e);
      t.length && (n.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = n.get(e);
        t &&
          t.forEach(([t, n]) => {
            e.getValue(t)?.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && w.scrollTo(0, e.suspendedScrollY);
      }));
  }
  ((Ol = !1), (Dl = !1), El.forEach((e) => e.complete(kl)), El.clear());
}
function Pt() {
  El.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Ol = !0));
  });
}
function Ft() {
  ((kl = !0), Pt(), Nt(), (kl = !1));
}
function It(e, t, n) {
  jl(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
function Lt(e, t) {
  let n = Fe(e);
  return () => Ml[t] ?? n();
}
function Rt(e, t) {
  if (e)
    return typeof e == `function`
      ? Fl()
        ? $c(e, t)
        : `ease-out`
      : cc(e)
        ? Il(e)
        : Array.isArray(e)
          ? e.map((e) => Rt(e, t) || Ll.easeOut)
          : Ll[e];
}
function zt(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeOut`,
    times: c,
  } = {},
  l = void 0
) {
  let u = { [t]: n };
  c && (u.offset = c);
  let d = Rt(s, i);
  Array.isArray(d) && (u.easing = d);
  let f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? `linear` : d,
    fill: `both`,
    iterations: a + 1,
    direction: o === `reverse` ? `alternate` : `normal`,
  };
  return (l && (f.pseudoElement = l), e.animate(u, f));
}
function Bt(e) {
  return typeof e == `function` && `applyToOptions` in e;
}
function Vt({ type: e, ...t }) {
  return Bt(e) && Fl() ? e.applyToOptions(t) : ((t.duration ??= 300), (t.ease ??= `easeOut`), t);
}
function Ht(e) {
  return e in zl;
}
function Ut(e) {
  typeof e.ease == `string` && Ht(e.ease) && (e.ease = zl[e.ease]);
}
function Wt(e) {
  ((e.duration = 0), (e.type = `keyframes`));
}
function Gt(e) {
  for (let t = 0; t < e.length; t++) if (typeof e[t] == `string` && Ul.test(e[t])) return !0;
  return !1;
}
function Kt(e) {
  let {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: a,
    type: o,
    keyframes: s,
  } = e;
  if (!(t?.owner?.current instanceof HTMLElement)) return !1;
  let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
  return (
    Gl() &&
    n &&
    (Hl.has(n) || (Wl.has(n) && Gt(s))) &&
    (n !== `transform` || !l) &&
    !c &&
    !r &&
    i !== `mirror` &&
    a !== 0 &&
    o !== `inertia`
  );
}
function qt(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Jt(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = Kl(i, t),
    s = Kl(a, t);
  return (`${t}${i}${a}${o ? a : i}`, !o || !s ? !1 : qt(e) || ((n === `spring` || Bt(n)) && r));
}
function Yt(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r][t];
    i !== null && i > n && (n = i);
  }
  return n;
}
function Xt(e, t, n, r = 0, i = 1) {
  let a = Array.from(e)
      .sort((e, t) => e.sortNodePosition(t))
      .indexOf(t),
    o = e.size,
    s = (o - 1) * r;
  return typeof n == `function` ? n(a, o) : i === 1 ? a * r : s - a * r;
}
function E(e, t) {
  return new eu(e, t);
}
function Zt(e, t) {
  if (e?.inherit && t) {
    let { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function Qt(e, t) {
  let n = e?.[t] ?? e?.default ?? e;
  return n === e ? n : Zt(n, e);
}
function $t(e) {
  for (let t in e) if (!ou.has(t)) return !0;
  return !1;
}
function en(e) {
  let t = cu.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function tn(e, t, n = 1) {
  `${e}`;
  let [r, i] = en(e);
  if (!r) return;
  let a = w.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return Rs(e) ? parseFloat(e) : e;
  }
  return yc(i) ? tn(i, t, n + 1) : i;
}
function nn(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function rn(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = nn(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if ((typeof t == `string` && (t = e.variants && e.variants[t]), typeof t == `function`)) {
    let [i, a] = nn(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
function an(e, t, n) {
  let r = e.getProps();
  return rn(r, t, n === void 0 ? r.custom : n, e);
}
function on(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, E(n));
}
function sn(e) {
  return uu(e) ? e[e.length - 1] || 0 : e;
}
function cn(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = an(e, t) || {};
  i = { ...i, ...n };
  for (let t in i) on(e, t, sn(i[t]));
}
function ln(e) {
  return !!(X(e) && e.add);
}
function un(e, t) {
  let n = e.getValue(`willChange`);
  if (ln(n)) return n.add(t);
  if (!n && P.WillChange) {
    let n = new P.WillChange(`auto`);
    (e.addValue(`willChange`, n), n.add(t));
  }
}
function dn(e) {
  return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
function fn(e) {
  return e.props[fu];
}
function pn({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function mn(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a, transitionEnd: o, ...s } = t,
    c = e.getDefaultTransition();
  a = a ? Zt(a, c) : c;
  let l = a?.reduceMotion,
    u = a?.skipAnimations;
  r && (a = r);
  let d = [],
    f = i && e.animationState && e.animationState.getState()[i],
    p = a?.path;
  p && p.animateVisualElement(e, s, a, n, d);
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || (f && pn(f, t))) continue;
    let o = { delay: n, ...Qt(a || {}, t) };
    u && (o.skipAnimations = !0);
    let c = r.get();
    if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
      R.update(() => r.set(i));
      continue;
    }
    let p = !1;
    if (w.MotionHandoffAnimation) {
      let n = fn(e);
      if (n) {
        let e = w.MotionHandoffAnimation(n, t, R);
        e !== null && ((o.startTime = e), (p = !0));
      }
    }
    un(e, t);
    let m = l ?? e.shouldReduceMotion;
    r.start(su(t, r, i, m && lu.has(t) ? { type: !1 } : o, e, p));
    let h = r.animation;
    h && d.push(h);
  }
  if (o) {
    let t = () =>
      R.update(() => {
        o && cn(e, o);
      });
    d.length ? Promise.all(d).then(t) : t();
  }
  return d;
}
function hn(e, t, n = {}) {
  let r = an(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let a = r ? () => Promise.all(mn(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
            return gn(e, t, r, a, o, s, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
    return e().then(() => t());
  } else return Promise.all([a(), o(n.delay)]);
}
function gn(e, t, n = 0, r = 0, i = 0, a = 1, o) {
  let s = [];
  for (let c of e.variantChildren)
    (c.notify(`AnimationStart`, t),
      s.push(
        hn(c, t, {
          ...o,
          delay: n + (typeof r == `function` ? 0 : r) + Xt(e.variantChildren, c, r, i, a),
        }).then(() => c.notify(`AnimationComplete`, t))
      ));
  return Promise.all(s);
}
function _n(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((t) => hn(e, t, n));
    r = Promise.all(i);
  } else if (typeof t == `string`) r = hn(e, t, n);
  else {
    let i = typeof t == `function` ? an(e, t, n.custom) : t;
    r = Promise.all(mn(e, i, n));
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
function vn(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(Tc) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!yu.has(t);
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
function yn(e, t) {
  let n = wu(e);
  return (Tu.has(n) || (n = K), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0);
}
function bn(e) {
  return typeof e == `number` ? e === 0 : e === null || e === `none` || e === `0` || Bs(e);
}
function xn(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i;) {
    let t = e[r];
    (typeof t == `string` && !Eu.has(t) && Ke(t).values.length && (i = e[r]), r++);
  }
  if (i && n) for (let r of t) e[r] = yn(n, i);
}
function Sn(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((e) => e != null);
}
function Cn(e) {
  return zs(e) && `offsetHeight` in e && !(`ownerSVGElement` in e);
}
function wn() {
  return Z.x || Z.y;
}
function Tn(e) {
  return e === `x` || e === `y`
    ? Z[e]
      ? null
      : ((Z[e] = !0),
        () => {
          Z[e] = !1;
        })
    : Z.x || Z.y
      ? null
      : ((Z.x = Z.y = !0),
        () => {
          Z.x = Z.y = !1;
        });
}
function En(e, t) {
  let n = Sn(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function Dn(e) {
  return !(e.pointerType === `touch` || wn());
}
function On(e, t, n = {}) {
  let [r, i, a] = En(e, n);
  return (
    r.forEach((e) => {
      let n = !1,
        r = !1,
        a,
        o = () => {
          e.removeEventListener(`pointerleave`, u);
        },
        s = (e) => {
          ((a &&= (a(e), void 0)), o());
        },
        c = (e) => {
          ((n = !1),
            w.removeEventListener(`pointerup`, c),
            w.removeEventListener(`pointercancel`, c),
            r && ((r = !1), s(e)));
        },
        l = () => {
          ((n = !0),
            w.addEventListener(`pointerup`, c, i),
            w.addEventListener(`pointercancel`, c, i));
        },
        u = (e) => {
          if (e.pointerType !== `touch`) {
            if (n) {
              r = !0;
              return;
            }
            s(e);
          }
        };
      (e.addEventListener(
        `pointerenter`,
        (n) => {
          if (!Dn(n)) return;
          r = !1;
          let o = t(e, n);
          typeof o == `function` && ((a = o), e.addEventListener(`pointerleave`, u, i));
        },
        i
      ),
        e.addEventListener(`pointerdown`, l, i));
    }),
    a
  );
}
function kn(e) {
  return Pu.has(e.tagName) || e.isContentEditable === !0;
}
function An(e) {
  return Fu.has(e.tagName) || e.isContentEditable === !0;
}
function jn(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function Mn(e, t) {
  e.dispatchEvent(new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }));
}
function Nn(e) {
  return Nu(e) && !wn();
}
function Pn(e, t, n = {}) {
  let [r, i, a] = En(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!Nn(e) || Ru.has(e)) return;
      (Iu.add(r), n.stopPropagation && Ru.add(e));
      let a = t(r, e),
        o = { ...i, capture: !0 },
        s = (e, t) => {
          (w.removeEventListener(`pointerup`, c, o),
            w.removeEventListener(`pointercancel`, l, o),
            Iu.has(r) && Iu.delete(r),
            Nn(e) && typeof a == `function` && a(e, { success: t }));
        },
        c = (e) => {
          s(e, r === w || r === document || n.useGlobalTarget || Mu(r, e.target));
        },
        l = (e) => {
          s(e, !1);
        };
      (w.addEventListener(`pointerup`, c, o), w.addEventListener(`pointercancel`, l, o));
    };
  return (
    r.forEach((e) => {
      ((n.useGlobalTarget ? w : e).addEventListener(`pointerdown`, o, i),
        Cn(e) &&
          (e.addEventListener(`focus`, (e) => Lu(e, i)),
          !kn(e) && !e.hasAttribute(`tabindex`) && (e.tabIndex = 0)));
    }),
    a
  );
}
function Fn(e) {
  return zs(e) && `ownerSVGElement` in e;
}
function In({ target: e, borderBoxSize: t }) {
  zu.get(e)?.forEach((n) => {
    n(e, {
      get width() {
        return Hu(e, t);
      },
      get height() {
        return Uu(e, t);
      },
    });
  });
}
function Ln(e) {
  e.forEach(In);
}
function Rn() {
  typeof ResizeObserver > `u` || (Bu = new ResizeObserver(Ln));
}
function zn(e, t) {
  Bu || Rn();
  let n = Sn(e);
  return (
    n.forEach((e) => {
      let n = zu.get(e);
      (n || ((n = new Set()), zu.set(e, n)), n.add(t), Bu?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = zu.get(e);
        (n?.delete(t), n?.size || Bu?.unobserve(e));
      });
    }
  );
}
function Bn() {
  ((Gu = () => {
    let e = {
      get width() {
        return w.innerWidth;
      },
      get height() {
        return w.innerHeight;
      },
    };
    Wu.forEach((t) => t(e));
  }),
    w.addEventListener(`resize`, Gu));
}
function Vn(e) {
  return (
    Wu.add(e),
    Gu || Bn(),
    () => {
      (Wu.delete(e),
        !Wu.size &&
          typeof Gu == `function` &&
          (w.removeEventListener(`resize`, Gu), (Gu = void 0)));
    }
  );
}
function Hn(e, t) {
  return typeof e == `function` ? Vn(e) : zn(e, t);
}
function Un(e, t) {
  let n,
    r = () => {
      let { currentTime: r } = t,
        i = (r === null ? 0 : r.value) / 100;
      (n !== i && e(i), (n = i));
    };
  return (R.preUpdate(r, !0), () => z(r));
}
function Wn(e) {
  return Fn(e) && e.tagName === `svg`;
}
function Gn(e, t) {
  if (e === `first`) return 0;
  {
    let n = t - 1;
    return e === `last` ? n : n / 2;
  }
}
function Kn(e = 0.1, { startDelay: t = 0, from: n = 0, ease: r } = {}) {
  return (i, a) => {
    let o = typeof n == `number` ? n : Gn(n, a),
      s = e * Math.abs(o - i);
    if (r) {
      let t = a * e;
      s = dc(r)(s / t) * t;
    }
    return t + s;
  };
}
function qn(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    a = e[2 + n],
    o = e[3 + n],
    s = yt(i, a, o);
  return t ? s(r) : s;
}
function Jn(e, t, n = {}) {
  let r = e.get(),
    i = null,
    a = r,
    o,
    s = typeof r == `string` ? r.replace(/[\d.-]/g, ``) : void 0,
    c = () => {
      ((i &&= (i.stop(), null)), (e.animation = void 0));
    },
    l = () => {
      let t = Xn(e.get()),
        r = Xn(a);
      if (t === r) {
        c();
        return;
      }
      let s = i ? i.getGeneratorVelocity() : e.getVelocity();
      (c(),
        (i = new dl({
          keyframes: [t, r],
          velocity: s,
          type: `spring`,
          restDelta: 0.001,
          restSpeed: 0.01,
          ...n,
          onUpdate: o,
        })));
    },
    u = () => {
      (l(),
        (e.animation = i ?? void 0),
        e.events.animationStart?.notify(),
        i?.then(() => {
          ((e.animation = void 0), e.events.animationComplete?.notify());
        }));
    };
  if (
    (e.attach((e, t) => {
      ((a = e), (o = (e) => t(Yn(e, s))), R.postRender(u));
    }, c),
    X(t))
  ) {
    let r = n.skipInitialAnimation === !0,
      i = t.on(`change`, (t) => {
        r ? ((r = !1), e.jump(Yn(t, s), !1)) : e.set(Yn(t, s));
      }),
      a = e.on(`destroy`, i);
    return () => {
      (i(), a());
    };
  }
  return c;
}
function Yn(e, t) {
  return t ? e + t : e;
}
function Xn(e) {
  return typeof e == `number` ? e : parseFloat(e);
}
function Zn(e, t, n) {
  let r = () => t.set(n()),
    i = () => R.preRender(r, !1, !0),
    a = e.map((e) => e.on(`change`, i));
  t.on(`destroy`, () => {
    (a.forEach((e) => e()), z(r));
  });
}
function Qn(e) {
  let t = [];
  $l.current = t;
  let n = e();
  $l.current = void 0;
  let r = E(n);
  return (Zn(t, r, e), r);
}
function $n(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
function er(e) {
  return typeof e == `string` || Array.isArray(e);
}
function tr(e) {
  return $n(e.animate) || ed.some((t) => er(e[t]));
}
function nr(e) {
  return !!(tr(e) || e.variants);
}
function rr(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (X(i)) e.addValue(r, i);
    else if (X(a)) e.addValue(r, E(i, { owner: e }));
    else if (a !== i)
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, E(t === void 0 ? i : t, { owner: e }));
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
function ir() {
  if (((nd.current = !0), rd))
    if (w.matchMedia) {
      let e = w.matchMedia(`(prefers-reduced-motion)`),
        t = () => (td.current = e.matches);
      (e.addEventListener(`change`, t), t());
    } else td.current = !1;
}
function ar(e) {
  ad = e;
}
function or() {
  return ad;
}
function sr({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function cr({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function lr(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function ur(e) {
  return e === void 0 || e === 1;
}
function dr({ scale: e, scaleX: t, scaleY: n }) {
  return !ur(e) || !ur(t) || !ur(n);
}
function fr(e) {
  return dr(e) || pr(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function pr(e) {
  return mr(e.x) || mr(e.y);
}
function mr(e) {
  return e && e !== `0%`;
}
function hr(e, t, n) {
  return n + t * (e - n);
}
function gr(e, t, n, r, i) {
  return (i !== void 0 && (e = hr(e, i, r)), hr(e, n, r) + t);
}
function _r(e, t = 0, n = 1, r, i) {
  ((e.min = gr(e.min, t, n, r, i)), (e.max = gr(e.max, t, n, r, i)));
}
function vr(e, { x: t, y: n }) {
  (_r(e.x, t.translate, t.scale, t.originPoint), _r(e.y, n.translate, n.scale, n.originPoint));
}
function yr(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    ((a = n[s]), (o = a.projectionDelta));
    let { visualElement: i } = a.options;
    (i && i.props.style && i.props.style.display === `contents`) ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        (D(e.x, -a.scroll.offset.x), D(e.y, -a.scroll.offset.y)),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), vr(e, o)),
      r && fr(a.latestValues) && Sr(e, a.latestValues, a.layout?.layoutBox));
  }
  (t.x < ud && t.x > ld && (t.x = 1), t.y < ud && t.y > ld && (t.y = 1));
}
function D(e, t) {
  ((e.min += t), (e.max += t));
}
function br(e, t, n, r, i = 0.5) {
  _r(e, t, n, q(e.min, e.max, i), r);
}
function xr(e, t) {
  return typeof e == `string` ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function Sr(e, t, n) {
  let r = n ?? e;
  (br(e.x, xr(t.x, r.x), t.scaleX, t.scale, t.originX),
    br(e.y, xr(t.y, r.y), t.scaleY, t.scale, t.originY));
}
function Cr(e, t) {
  return sr(lr(e.getBoundingClientRect(), t));
}
function wr(e, t, n) {
  let r = Cr(e, n),
    { scroll: i } = t;
  return (i && (D(r.x, i.offset.x), D(r.y, i.offset.y)), r);
}
function Tr(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < fd; a++) {
    let o = xl[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (typeof s == `number`) c = s === +!!o.startsWith(`scale`);
    else {
      let e = parseFloat(s);
      c = o.startsWith(`scale`) ? e === 1 : e === 0;
    }
    if (!c || n) {
      let e = ku(s, vu[o]);
      if (!c) {
        i = !1;
        let t = dd[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  let a = e.pathRotation;
  return (
    a && ((i = !1), (r += `rotate(${ku(a, vu.pathRotation)}) `)),
    (r = r.trim()),
    n ? (r = n(t, i ? `` : r)) : i && (r = `none`),
    r
  );
}
function Er(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (Sl.has(e)) {
      o = !0;
      continue;
    } else if (_c(e)) {
      i[e] = n;
      continue;
    } else {
      let t = ku(n, vu[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform || (o || n ? (r.transform = Tr(t, e.transform, n)) : (r.transform &&= `none`)), s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
function Dr(e, { style: t, vars: n }, r, i) {
  let a = e.style,
    o;
  for (o in t) a[o] = t[o];
  for (o in (i?.applyProjectionStyles(a, r), n)) a.setProperty(o, n[o]);
}
function Or(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
function kr(e) {
  for (let t in e) ((hd[t] = e[t]), _c(t) && (hd[t].isCSSVariable = !0));
}
function Ar(e, { layout: t, layoutId: n }) {
  return (
    Sl.has(e) || e.startsWith(`origin`) || ((t || n !== void 0) && (!!hd[e] || e === `opacity`))
  );
}
function jr(e, t, n) {
  let r = e.style,
    i = t?.style,
    a = {};
  if (!r) return a;
  for (let t in r)
    (X(r[t]) || (i && X(i[t])) || Ar(t, e) || n?.getValue(t)?.liveStyle !== void 0) &&
      (a[t] = r[t]);
  return a;
}
function Mr(e) {
  return w.getComputedStyle(e);
}
function Nr(e, t) {
  return e in t;
}
function Pr(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? vd : yd;
  ((e[a.offset] = `${-r}`), (e[a.array] = `${t} ${n}`));
}
function Fr(
  e,
  { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s },
  c,
  l,
  u
) {
  if ((Er(e, s, l), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: d, style: f } = e;
  (d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? `50% 50%`), delete d.transformOrigin),
    f.transform && ((f.transformBox = u?.transformBox ?? `fill-box`), delete d.transformBox));
  for (let e of bd) d[e] !== void 0 && ((f[e] = d[e]), delete d[e]);
  (t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && Pr(d, i, a, o, !1));
}
function Ir(e, t, n, r) {
  Dr(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(xd.has(n) ? n : dn(n), t.attrs[n]);
}
function Lr(e, t, n) {
  let r = jr(e, t, n);
  for (let n in e)
    if (X(e[n]) || X(t[n])) {
      let t = xl.indexOf(n) === -1 ? n : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
function Rr(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = (e.parent && Rr(e.parent)) || {};
    return (e.props.initial !== void 0 && (t.initial = e.props.initial), t);
  }
  let t = {};
  for (let n = 0; n < wd; n++) {
    let r = ed[n],
      i = e.props[r];
    (er(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function zr(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Br(e) {
  return (t) => Promise.all(t.map(({ animation: t, options: n }) => _n(e, t, n)));
}
function Vr(e) {
  let t = Br(e),
    n = Wr(),
    r = !0,
    i = !1,
    a = (t) => (n, r) => {
      let i = an(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
      if (i) {
        let { transition: e, transitionEnd: t, ...r } = i;
        n = { ...n, ...r, ...t };
      }
      return n;
    };
  function o(n) {
    t = n(e);
  }
  function s(o) {
    let { props: s } = e,
      c = Rr(e.parent) || {},
      l = [],
      u = new Set(),
      d = {},
      f = 1 / 0;
    for (let t = 0; t < Ed; t++) {
      let p = Td[t],
        m = n[p],
        h = s[p] === void 0 ? c[p] : s[p],
        g = er(h),
        _ = p === o ? m.isActive : null;
      _ === !1 && (f = t);
      let v = h === c[p] && h !== s[p] && g;
      if (
        (v && (r || i) && e.manuallyAnimateOnMount && (v = !1),
        (m.protectedKeys = { ...d }),
        (!m.isActive && _ === null) || (!h && !m.prevProp) || $n(h) || typeof h == `boolean`)
      )
        continue;
      if (p === `exit` && m.isActive && _ !== !0) {
        m.prevResolvedValues && (d = { ...d, ...m.prevResolvedValues });
        continue;
      }
      let y = Hr(m.prevProp, h),
        b = y || (p === o && m.isActive && !v && g) || (t > f && g),
        x = !1,
        S = Array.isArray(h) ? h : [h],
        C = S.reduce(a(p), {});
      _ === !1 && (C = {});
      let { prevResolvedValues: ee = {} } = m,
        te = { ...ee, ...C },
        w = (t) => {
          ((b = !0), u.has(t) && ((x = !0), u.delete(t)), (m.needsAnimating[t] = !0));
          let n = e.getValue(t);
          n && (n.liveStyle = !1);
        };
      for (let e in te) {
        let t = C[e],
          n = ee[e];
        if (d.hasOwnProperty(e)) continue;
        let r = !1;
        ((r = uu(t) && uu(n) ? !zr(t, n) || y : t !== n),
          r
            ? t == null
              ? u.add(e)
              : w(e)
            : t !== void 0 && u.has(e)
              ? w(e)
              : (m.protectedKeys[e] = !0));
      }
      ((m.prevProp = h),
        (m.prevResolvedValues = C),
        m.isActive && (d = { ...d, ...C }),
        (r || i) && e.blockInitialAnimation && (b = !1));
      let ne = v && y;
      b &&
        (!ne || x) &&
        l.push(
          ...S.map((t) => {
            let n = { type: p };
            if (typeof t == `string` && (r || i) && !ne && e.manuallyAnimateOnMount && e.parent) {
              let { parent: r } = e,
                i = an(r, t);
              if (r.enteringChildren && i) {
                let { delayChildren: t } = i.transition || {};
                n.delay = Xt(r.enteringChildren, e, t);
              }
            }
            return { animation: t, options: n };
          })
        );
    }
    if (u.size) {
      let t = {};
      if (typeof s.initial != `boolean`) {
        let n = an(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
        n && n.transition && (t.transition = n.transition);
      }
      (u.forEach((n) => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n);
        (i && (i.liveStyle = !0), (t[n] = r ?? null));
      }),
        l.push({ animation: t }));
    }
    let p = !!l.length;
    return (
      r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1),
      (r = !1),
      (i = !1),
      p ? t(l) : Promise.resolve()
    );
  }
  function c(t, r) {
    if (n[t].isActive === r) return Promise.resolve();
    (e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), (n[t].isActive = r));
    let i = s(t);
    for (let e in n) n[e].protectedKeys = {};
    return i;
  }
  return {
    animateChanges: s,
    setActive: c,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ((n = Wr()), (i = !0));
    },
  };
}
function Hr(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !zr(t, e) : !1;
}
function Ur(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Wr() {
  return {
    animate: Ur(!0),
    whileInView: Ur(),
    whileHover: Ur(),
    whileTap: Ur(),
    whileDrag: Ur(),
    whileFocus: Ur(),
    exit: Ur(),
  };
}
function Gr(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function O(e, t) {
  (Gr(e.x, t.x), Gr(e.y, t.y));
}
function Kr(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function k(e) {
  return e.max - e.min;
}
function qr(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Jr(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = q(t.min, t.max, e.origin)),
    (e.scale = k(n) / k(t)),
    (e.translate = q(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Od && e.scale <= kd) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= jd && e.translate <= Md) || isNaN(e.translate)) && (e.translate = 0));
}
function Yr(e, t, n, r) {
  (Jr(e.x, t.x, n.x, r ? r.originX : void 0), Jr(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Xr(e, t, n, r = 0) {
  ((e.min = (r ? q(n.min, n.max, r) : n.min) + t.min), (e.max = e.min + k(t)));
}
function Zr(e, t, n, r) {
  (Xr(e.x, t.x, n.x, r?.x), Xr(e.y, t.y, n.y, r?.y));
}
function Qr(e, t, n, r = 0) {
  let i = r ? q(n.min, n.max, r) : n.min;
  ((e.min = t.min - i), (e.max = e.min + k(t)));
}
function $r(e, t, n, r) {
  (Qr(e.x, t.x, n.x, r?.x), Qr(e.y, t.y, n.y, r?.y));
}
function ei(e, t, n, r, i) {
  return ((e -= t), (e = hr(e, 1 / n, r)), i !== void 0 && (e = hr(e, 1 / i, r)), e);
}
function ti(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (U.test(t) && ((t = parseFloat(t)), (t = q(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = q(a.min, a.max, r);
  (e === a && (s -= t), (e.min = ei(e.min, t, n, s, i)), (e.max = ei(e.max, t, n, s, i)));
}
function ni(e, t, [n, r, i], a, o) {
  ti(e, t[n], t[r], t[i], t.scale, a, o);
}
function ri(e, t, n, r) {
  (ni(e.x, t, Nd, n ? n.x : void 0, r ? r.x : void 0),
    ni(e.y, t, Pd, n ? n.y : void 0, r ? r.y : void 0));
}
function ii(e) {
  return e.translate === 0 && e.scale === 1;
}
function ai(e) {
  return ii(e.x) && ii(e.y);
}
function oi(e, t) {
  return e.min === t.min && e.max === t.max;
}
function si(e, t) {
  return oi(e.x, t.x) && oi(e.y, t.y);
}
function ci(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function li(e, t) {
  return ci(e.x, t.x) && ci(e.y, t.y);
}
function ui(e) {
  return k(e.x) / k(e.y);
}
function di(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function A(e) {
  return [e(`x`), e(`y`)];
}
function fi(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: e,
      rotate: t,
      pathRotation: i,
      rotateX: a,
      rotateY: o,
      skewX: s,
      skewY: c,
    } = n;
    (e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotate(${i}deg) `),
      a && (r += `rotateX(${a}deg) `),
      o && (r += `rotateY(${o}deg) `),
      s && (r += `skewX(${s}deg) `),
      c && (r += `skewY(${c}deg) `));
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`);
}
function pi(e, t, n, r, i, a) {
  i
    ? ((e.opacity = q(0, n.opacity ?? 1, Rd(r))), (e.opacityExit = q(t.opacity ?? 1, 0, zd(r))))
    : a && (e.opacity = q(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let i = 0; i < Fd; i++) {
    let a = Ou[i],
      o = mi(t, a),
      s = mi(n, a);
    (o === void 0 && s === void 0) ||
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || Ld(o) === Ld(s)
        ? ((e[a] = Math.max(q(Id(o), Id(s), r), 0)), (U.test(s) || U.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = q(t.rotate || 0, n.rotate || 0, r));
}
function mi(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
function hi(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Hs(e, t, r)));
}
function gi(e, t, n) {
  let r = X(e) ? e : E(e);
  return (r.start(su(``, r, t, n)), r.animation);
}
function _i(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r));
}
function vi(e, t) {
  let n = V.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (z(r), e(a - t));
    };
  return (R.setup(r, !0), () => z(r));
}
function yi(e) {
  return X(e) ? e.get() : e;
}
function bi(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function xi(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = fn(t);
  if (w.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    w.MotionCancelOptimisedAnimation(n, `transform`, R, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && xi(r);
}
function Si({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ((this.id = qd++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            Ku.value && (Wd.nodes = Wd.calculatedTargetDeltas = Wd.calculatedProjections = 0),
            this.nodes.forEach(Ti),
            this.nodes.forEach(Pi),
            this.nodes.forEach(Fi),
            this.nodes.forEach(Ei),
            Ku.addProjectionMetrics && Ku.addProjectionMetrics(Wd));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0));
      for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Vd());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new Us()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t) {
      if (this.instance) return;
      ((this.isSVG = Fn(t) && !Wn(t)), (this.instance = t));
      let { layoutId: n, layout: r, visualElement: i } = this.options;
      if (
        (i && !i.current && i.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = 0,
          i = () => (this.root.updateBlockedByResize = !1);
        (R.read(() => {
          r = w.innerWidth;
        }),
          e(t, () => {
            let e = w.innerWidth;
            e !== r &&
              ((r = e),
              (this.root.updateBlockedByResize = !0),
              n && n(),
              (n = vi(i, 250)),
              Ud.hasAnimatedSinceResize &&
                ((Ud.hasAnimatedSinceResize = !1), this.nodes.forEach(Ni)));
          }));
      }
      (n && this.root.registerSharedNode(n, this),
        this.options.animate !== !1 &&
          i &&
          (n || r) &&
          this.addEventListener(
            `didUpdate`,
            ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let a = this.options.transition || i.getDefaultTransition() || Jd,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(),
                c = !this.targetLayout || !li(this.targetLayout, r),
                l = !t && n;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                let t = { ...Qt(a, `layout`), onPlay: o, onComplete: s };
                ((i.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t),
                  this.setAnimationOrigin(e, l, t.path));
              } else
                (t || Ni(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = r;
            }
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      let e = this.getStack();
      (e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        z(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(Ii), this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (w.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && xi(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        ((t.shouldResetTransform = !0),
          (typeof t.latestValues.x == `string` || typeof t.latestValues.y == `string`) &&
            (t.isLayoutDirty = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1));
      }
      let { layoutId: t, layout: n } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = r ? r(this.latestValues, ``) : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        let e = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          e && this.nodes.forEach(ki),
          this.nodes.forEach(Oi));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Ai);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(ji),
            this.nodes.forEach(Mi),
            this.nodes.forEach(Ci),
            this.nodes.forEach(wi))
          : this.nodes.forEach(Ai),
        this.clearAllSnapshots());
      let e = V.now();
      ((B.delta = N(0, 1e3 / 60, e - B.timestamp)),
        (B.timestamp = e),
        (B.isProcessing = !0),
        mc.update.process(B),
        mc.preRender.process(B),
        mc.render.process(B),
        (B.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Au.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Di), this.sharedNodes.forEach(Li));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), R.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      R.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !k(this.snapshot.measuredBox.x) &&
          !k(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected ||= Q()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox));
      let { visualElement: t } = this.options;
      t && t.notify(`LayoutMeasure`, this.layout.layoutBox, e ? e.layoutBox : void 0);
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t && this.instance)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !ai(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        this.instance &&
        (t || fr(this.latestValues) || a) &&
        (i(this.instance, r), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        Ui(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: e } = this.options;
      if (!e) return Q();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Gi))) {
        let { scroll: e } = this.root;
        e && (D(t.x, e.offset.x), D(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = Q();
      if ((O(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && O(t, e), D(t.x, i.offset.x), D(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1, n) {
      let r = n || Q();
      O(r, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        (!t &&
          n.options.layoutScroll &&
          n.scroll &&
          n !== n.root &&
          (D(r.x, -n.scroll.offset.x), D(r.y, -n.scroll.offset.y)),
          fr(n.latestValues) && Sr(r, n.latestValues, n.layout?.layoutBox));
      }
      return (fr(this.latestValues) && Sr(r, this.latestValues, this.layout?.layoutBox), r);
    }
    removeTransform(e) {
      let t = Q();
      O(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!fr(n.latestValues)) continue;
        let r;
        (n.instance &&
          (dr(n.latestValues) && n.updateSnapshot(), (r = Q()), O(r, n.measurePageBox())),
          ri(t, n.latestValues, n.snapshot?.layoutBox, r));
      }
      return (fr(this.latestValues) && ri(t, this.latestValues), t);
    }
    setTargetDelta(e) {
      ((this.targetDelta = e), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
    }
    setOptions(e) {
      this.options = { ...this.options, ...e, crossfade: e.crossfade === void 0 || e.crossfade };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== B.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      ((this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty));
      let n = !!this.resumingFrom || this !== t;
      if (!(
        e ||
        (n && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        this.parent?.isProjectionDirty ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      let { layout: r, layoutId: i } = this.options;
      if (!this.layout || !(r || i)) return;
      this.resolvedRelativeTargetAt = B.timestamp;
      let a = this.getClosestProjectingParent();
      (a &&
        this.linkedParentVersion !== a.layoutVersion &&
        !a.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && a && a.layout
            ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox)
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = Q()), (this.targetWithTransforms = Q())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Zr(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : O(this.target, this.layout.layoutBox),
                vr(this.target, this.targetDelta))
              : O(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            a &&
            !!a.resumingFrom == !!this.resumingFrom &&
            !a.options.layoutScroll &&
            a.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(a, this.target, a.target)
              : (this.relativeParent = this.relativeTarget = void 0)),
          Ku.value && Wd.calculatedTargetDeltas++));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || dr(this.parent.latestValues) || pr(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(e, t, n) {
      ((this.relativeParent = e),
        (this.linkedParentVersion = e.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Q()),
        (this.relativeTargetOrigin = Q()),
        $r(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0),
        O(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
        this.resolvedRelativeTargetAt === B.timestamp && (n = !1),
        n)
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return;
      O(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      (yr(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = Q())));
      let { target: s } = e;
      if (!s) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Kr(this.prevProjectionDelta.x, this.projectionDelta.x),
          Kr(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Yr(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== o ||
          !di(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !di(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners(`projectionUpdate`, s)),
        Ku.value && Wd.calculatedProjections++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      if ((this.options.visualElement?.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Xu()),
        (this.projectionDelta = Xu()),
        (this.projectionDeltaWithTransform = Xu()));
    }
    setAnimationOrigin(e, t = !1, n) {
      let r = this.snapshot,
        i = r ? r.latestValues : {},
        a = { ...this.latestValues },
        o = Xu();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let s = Q(),
        c = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0),
        l = this.getStack(),
        u = !l || l.members.length <= 1,
        d = !!(c && !u && this.options.crossfade === !0 && !this.path.some(Vi));
      this.animationProgress = 0;
      let f,
        p = n?.interpolateProjection(e);
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3,
          r = p?.(n);
        (r
          ? ((o.x.translate = r.x),
            (o.x.scale = q(e.x.scale, 1, n)),
            (o.x.origin = e.x.origin),
            (o.x.originPoint = e.x.originPoint),
            (o.y.translate = r.y),
            (o.y.scale = q(e.y.scale, 1, n)),
            (o.y.origin = e.y.origin),
            (o.y.originPoint = e.y.originPoint))
          : (Ri(o.x, e.x, n), Ri(o.y, e.y, n)),
          this.setTargetDelta(o),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            ($r(
              s,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0
            ),
            Bi(this.relativeTarget, this.relativeTargetOrigin, s, n),
            f && si(this.relativeTarget, f) && (this.isProjectionDirty = !1),
            (f ||= Q()),
            O(f, this.relativeTarget)),
          c && ((this.animationValues = a), pi(a, i, this.latestValues, n, d, u)),
          r &&
            r.rotate !== void 0 &&
            ((this.animationValues ||= a), (this.animationValues.pathRotation = r.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(e) {
      (this.notifyListeners(`animationStart`),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        (this.pendingAnimation &&= (z(this.pendingAnimation), void 0)),
        (this.pendingAnimation = R.update(() => {
          ((Ud.hasAnimatedSinceResize = !0),
            (this.motionValue ||= E(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = gi(this.motionValue, [0, 1e3], {
              ...e,
              velocity: 0,
              isSync: !0,
              onUpdate: (t) => {
                (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
              },
              onComplete: () => {
                (e.onComplete && e.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      (e && e.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners(`animationComplete`));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Kd), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
      if (!(!t || !n || !r)) {
        if (
          this !== e &&
          this.layout &&
          r &&
          Wi(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || Q();
          let t = k(this.layout.layoutBox.x);
          ((n.x.min = e.target.x.min), (n.x.max = n.x.min + t));
          let r = k(this.layout.layoutBox.y);
          ((n.y.min = e.target.y.min), (n.y.max = n.y.min + r));
        }
        (O(t, n), Sr(t, i), Yr(this.projectionDeltaWithTransform, this.layoutCorrected, t, i));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new Hd()),
        this.sharedNodes.get(e).add(t));
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return !e || e.lead === this;
    }
    getLead() {
      let { layoutId: e } = this.options;
      return (e && this.getStack()?.lead) || this;
    }
    getPrevLead() {
      let { layoutId: e } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      (r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t }));
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && bi(`z`, e, r, this.animationValues);
      for (let t = 0; t < Gd.length; t++)
        (bi(`rotate${Gd[t]}`, e, r, this.animationValues),
          bi(`skew${Gd[t]}`, e, r, this.animationValues));
      e.render();
      for (let t in r)
        (e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]));
      e.scheduleRender();
    }
    applyProjectionStyles(e, t) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        e.visibility = `hidden`;
        return;
      }
      let n = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (e.visibility = ``),
          (e.opacity = ``),
          (e.pointerEvents = yi(t?.pointerEvents) || ``),
          (e.transform = n ? n(this.latestValues, ``) : `none`));
        return;
      }
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        (this.options.layoutId &&
          ((e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity),
          (e.pointerEvents = yi(t?.pointerEvents) || ``)),
          this.hasProjected &&
            !fr(this.latestValues) &&
            ((e.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)));
        return;
      }
      e.visibility = ``;
      let i = r.animationValues || r.latestValues;
      this.applyTransformsToTarget();
      let a = fi(this.projectionDeltaWithTransform, this.treeScale, i);
      (n && (a = n(i, a)), (e.transform = a));
      let { x: o, y: s } = this.projectionDelta;
      ((e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`),
        r.animationValues
          ? (e.opacity =
              r === this
                ? (i.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : i.opacityExit)
          : (e.opacity =
              r === this
                ? i.opacity === void 0
                  ? ``
                  : i.opacity
                : i.opacityExit === void 0
                  ? 0
                  : i.opacityExit));
      for (let t in hd) {
        if (i[t] === void 0) continue;
        let { correct: n, applyTo: o, isCSSVariable: s } = hd[t],
          c = a === `none` ? i[t] : n(i[t], r);
        if (o) {
          let t = o.length;
          for (let n = 0; n < t; n++) e[o[n]] = c;
        } else s ? (this.options.visualElement.renderState.vars[t] = c) : (e[t] = c);
      }
      this.options.layoutId && (e.pointerEvents = r === this ? yi(t?.pointerEvents) || `` : `none`);
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(Oi),
        this.root.sharedNodes.clear());
    }
  };
}
function Ci(e) {
  e.updateLayout();
}
function wi(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    if (i === `size`)
      A((e) => {
        let r = a ? t.measuredBox[e] : t.layoutBox[e],
          i = k(r);
        ((r.min = n[e].min), (r.max = r.min + i));
      });
    else if (i === `x` || i === `y`) {
      let e = i === `x` ? `y` : `x`;
      Gr(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
    } else
      Wi(i, t.layoutBox, n) &&
        A((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = k(n[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = Xu();
    Yr(o, n, t.layoutBox);
    let s = Xu();
    a ? Yr(s, e.applyTransform(r, !0), t.measuredBox) : Yr(s, n, t.layoutBox);
    let c = !ai(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = e.options.layoutAnchor || void 0,
            s = Q();
          $r(s, t.layoutBox, i.layoutBox, o);
          let c = Q();
          ($r(c, n, a.layoutBox, o),
            li(s, c) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = c), (e.relativeTargetOrigin = s), (e.relativeParent = r)));
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: l,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function Ti(e) {
  (Ku.value && Wd.nodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)));
}
function Ei(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Di(e) {
  e.clearSnapshot();
}
function Oi(e) {
  e.clearMeasurements();
}
function ki(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function Ai(e) {
  e.isLayoutDirty = !1;
}
function ji(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function Mi(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`), e.resetTransform());
}
function Ni(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function Pi(e) {
  e.resolveTargetDelta();
}
function Fi(e) {
  e.calcProjection();
}
function Ii(e) {
  e.resetSkewAndRotation();
}
function Li(e) {
  e.removeLeadSnapshot();
}
function Ri(e, t, n) {
  ((e.translate = q(t.translate, 0, n)),
    (e.scale = q(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function zi(e, t, n, r) {
  ((e.min = q(t.min, n.min, r)), (e.max = q(t.max, n.max, r)));
}
function Bi(e, t, n, r) {
  (zi(e.x, t.x, n.x, r), zi(e.y, t.y, n.y, r));
}
function Vi(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
function Hi(e) {
  ((e.min = Xd(e.min)), (e.max = Xd(e.max)));
}
function Ui(e) {
  (Hi(e.x), Hi(e.y));
}
function Wi(e, t, n) {
  return e === `position` || (e === `preserve-aspect` && !qr(ui(t), ui(n), 0.2));
}
function Gi(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
function Ki() {
  let e = new Set(),
    t = new WeakMap(),
    n = () => e.forEach(Qd);
  return {
    add: (r) => {
      (e.add(r), t.set(r, r.addEventListener(`willUpdate`, n)));
    },
    remove: (r) => {
      e.delete(r);
      let i = t.get(r);
      (i && (i(), t.delete(r)), n());
    },
    dirty: n,
  };
}
function qi(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function Ji(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = qi(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : qi(e[t], null);
        }
      };
  };
}
function Yi(...e) {
  return s(Ji(...e), e);
}
function Xi({ children: e, isPresent: t, anchorX: r, anchorY: i, root: a, pop: o }) {
  let s = C(),
    c = l(null),
    u = l({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, direction: `ltr` }),
    { nonce: d } = n($),
    m = Yi(c, e.props?.ref ?? e?.ref);
  return (
    f(() => {
      let { width: e, height: n, top: l, left: f, right: p, bottom: m, direction: h } = u.current;
      if (t || o === !1 || !c.current || !e || !n) return;
      let g = h === `rtl`,
        _ = r === `left` ? (g ? `right: ${p}` : `left: ${f}`) : g ? `left: ${f}` : `right: ${p}`,
        v = i === `bottom` ? `bottom: ${m}` : `top: ${l}`;
      c.current.dataset.motionPopId = s;
      let y = document.createElement(`style`);
      d && (y.nonce = d);
      let b = a ?? document.head;
      return (
        b.appendChild(y),
        y.sheet &&
          y.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),
        () => {
          (c.current?.removeAttribute(`data-motion-pop-id`), b.contains(y) && b.removeChild(y));
        }
      );
    }, [t]),
    p(tf, {
      isPresent: t,
      childRef: c,
      sizeRef: u,
      pop: o,
      children: o === !1 ? e : v(e, { ref: m }),
    })
  );
}
function j(e) {
  let t = l(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Zi() {
  return new Map();
}
function Qi(e = !0) {
  let t = n(Ls);
  if (t === null) return [!0, null];
  let { isPresent: r, onExitComplete: i, register: a } = t,
    o = C();
  c(() => {
    if (e) return a(o);
  }, [e]);
  let l = s(() => e && i && i(o), [o, i, e]);
  return !r && i ? [!1, l] : [!0];
}
function $i(e) {
  let t = [];
  return (
    ee.forEach(e, (e) => {
      h(e) && t.push(e);
    }),
    t
  );
}
function ea() {
  let e = l(!1);
  return (
    M(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function ta() {
  let e = ea(),
    [t, n] = i(0),
    r = s(() => {
      e.current && n(t + 1);
    }, [t]);
  return [s(() => R.postRender(r), [r]), t];
}
function na() {
  if (ff) return;
  let e = {};
  for (let t in df) e[t] = { isEnabled: (e) => df[t].some((t) => !!e[t]) };
  (ar(e), (ff = !0));
}
function ra() {
  return (na(), or());
}
function ia(e) {
  let t = ra();
  for (let n in e) t[n] = { ...t[n], ...e[n] };
  ar(t);
}
function aa(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    pf.has(e)
  );
}
function oa(e) {
  typeof e == `function` && (mf = (t) => (t.startsWith(`on`) ? !aa(t) : e(t)));
}
function sa(e, t, n) {
  let r = {};
  for (let i in e)
    (i === `values` && typeof e.values == `object`) ||
      X(e[i]) ||
      ((mf(i) ||
        (n === !0 && aa(i)) ||
        (!t && !aa(i)) ||
        (e.draggable && i.startsWith(`onDrag`))) &&
        (r[i] = e[i]));
  return r;
}
function ca({ children: e, isValidProp: t, ...r }) {
  t && oa(t);
  let i = n($);
  ((r = { ...i, ...r }),
    (r.transition = Zt(r.transition, i.transition)),
    (r.isStatic = j(() => r.isStatic)));
  let a = _(
    () => r,
    [JSON.stringify(r.transition), r.transformPagePoint, r.reducedMotion, r.skipAnimations]
  );
  return p($.Provider, { value: a, children: e });
}
function la({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: ua(n, r, i, e), renderState: t() };
}
function ua(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = yi(a[e]);
  let { initial: o, animate: s } = e,
    c = tr(e),
    l = nr(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !$n(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = rn(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
function da(e, t) {
  if (tr(e)) {
    let { initial: t, animate: n } = e;
    return { initial: t === !1 || er(t) ? t : void 0, animate: er(n) ? n : void 0 };
  }
  return e.inherit === !1 ? {} : t;
}
function fa(e) {
  let { initial: t, animate: r } = da(e, n(hf));
  return _(() => ({ initial: t, animate: r }), [pa(t), pa(r)]);
}
function pa(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
function ma(e, t, n) {
  for (let r in t) !X(t[r]) && !Ar(r, n) && (e[r] = t[r]);
}
function ha({ transformTemplate: e }, t) {
  return _(() => {
    let n = vf();
    return (Er(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function ga(e, t) {
  let n = e.style || {},
    r = {};
  return (ma(r, n, e), Object.assign(r, ha(e, t)), r);
}
function _a(e, t) {
  let n = {},
    r = ga(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction = e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function va(e, t, n, r) {
  let i = _(() => {
    let n = yf();
    return (Fr(n, t, Sd(r), e.transformTemplate, e.style), { ...n.attrs, style: { ...n.style } });
  }, [t]);
  if (e.style) {
    let t = {};
    (ma(t, e.style, e), (i.style = { ...t, ...i.style }));
  }
  return i;
}
function ya(e) {
  return typeof e != `string` || e.includes(`-`) ? !1 : !!(bf.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function ba(e, t, n, { latestValues: r }, i, a = !1, o) {
  let s = ((o ?? ya(e)) ? va : _a)(t, r, i, e),
    c = sa(t, typeof e == `string`, a),
    l = e === u ? {} : { ...c, ...s, ref: n },
    { children: d } = t,
    f = _(() => (X(d) ? d.get() : d), [d]);
  return S(e, { ...l, children: f });
}
function xa(e, t, n) {
  let r = l(n);
  f(() => {
    r.current = n;
  });
  let i = l(null);
  return s(
    (n) => {
      (n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount()));
      let a = r.current;
      if (typeof a == `function`)
        if (n) {
          let e = a(n);
          typeof e == `function` && (i.current = e);
        } else i.current ? (i.current(), (i.current = null)) : a(n);
      else a && (a.current = n);
    },
    [t]
  );
}
function Sa(e) {
  return e && typeof e == `object` && Object.prototype.hasOwnProperty.call(e, `current`);
}
function Ca(e, t, r, i, a, o) {
  let { visualElement: s } = n(hf),
    u = n(uf),
    d = n(Ls),
    p = n($),
    m = p.reducedMotion,
    h = p.skipAnimations,
    g = l(null),
    _ = l(!1);
  ((i ||= u.renderer),
    !g.current &&
      i &&
      ((g.current = i(e, {
        visualState: t,
        parent: s,
        props: r,
        presenceContext: d,
        blockInitialAnimation: d ? d.initial === !1 : !1,
        reducedMotionConfig: m,
        skipAnimations: h,
        isSVG: o,
      })),
      _.current && g.current && (g.current.manuallyAnimateOnMount = !0)));
  let v = g.current,
    y = n(_f);
  v && !v.projection && a && (v.type === `html` || v.type === `svg`) && wa(g.current, r, a, y);
  let b = l(!1);
  f(() => {
    v && b.current && v.update(r, d);
  });
  let x = r[fu],
    S = l(
      !!x && w !== void 0 && !w.MotionHandoffIsComplete?.(x) && w.MotionHasOptimisedAnimation?.(x)
    );
  return (
    M(() => {
      ((_.current = !0),
        v &&
          ((b.current = !0),
          (w.MotionIsMounted = !0),
          v.updateFeatures(),
          v.scheduleRenderMicrotask(),
          S.current && v.animationState && v.animationState.animateChanges()));
    }),
    c(() => {
      v &&
        (!S.current && v.animationState && v.animationState.animateChanges(),
        (S.current &&=
          (queueMicrotask(() => {
            w.MotionHandoffMarkAsComplete?.(x);
          }),
          !1)),
        (v.enteringChildren = void 0));
    }),
    v
  );
}
function wa(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
    layoutAnchor: u,
    layoutCrossfade: d,
  } = t;
  ((e.projection = new n(e.latestValues, t[`data-framer-portal-id`] ? void 0 : Ta(e.parent))),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && Sa(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: c,
      layoutRoot: l,
      layoutAnchor: u,
    }));
}
function Ta(e) {
  if (e) return e.options.allowProjection === !1 ? Ta(e.parent) : e.projection;
}
function Ea(e, { forwardMotionProps: t = !1, type: r } = {}, i, a) {
  i && ia(i);
  let o = r ? r === `svg` : ya(e),
    s = o ? Sf : xf;
  function c(r, c) {
    let l,
      u = { ...n($), ...r, layoutId: Da(r) },
      { isStatic: d } = u,
      f = fa(r),
      m = s(r, d);
    if (!d && w !== void 0) {
      Oa(u, i);
      let t = ka(u);
      ((l = t.MeasureLayout), (f.visualElement = Ca(e, m, u, a, t.ProjectionNode, o)));
    }
    return y(hf.Provider, {
      value: f,
      children: [
        l && f.visualElement ? p(l, { visualElement: f.visualElement, ...u }) : null,
        ba(e, r, xa(m, f.visualElement, c), m, d, t, o),
      ],
    });
  }
  c.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`;
  let l = g(c);
  return ((l[Cf] = e), l);
}
function Da({ layoutId: e }) {
  let t = n(Fs).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function Oa(e, t) {
  n(uf).strict;
}
function ka(e) {
  let { drag: t, layout: n } = ra();
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function Aa(e, t) {
  if (typeof Proxy > `u`) return Ea;
  let n = new Map(),
    r = (n, r) => Ea(n, r, e, t);
  return new Proxy((e, t) => r(e, t), {
    get: (i, a) => (a === `create` ? r : (n.has(a) || n.set(a, Ea(a, void 0, e, t)), n.get(a))),
  });
}
function ja(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
function Ma(e, t, n, r) {
  return _i(e, t, Of(n), r);
}
function Na(e, t) {
  let n = kf(e.x, t.x),
    r = kf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
function Pa(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Fa(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ia({ point: e }, t) {
  return { point: e, delta: Fa(e, Ra(t)), offset: Fa(e, La(t)), velocity: za(t, 0.1) };
}
function La(e) {
  return e[0];
}
function Ra(e) {
  return e[e.length - 1];
}
function za(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = Ra(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > I(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] && e.length > 2 && i.timestamp - r.timestamp > I(t) * 2 && (r = e[1]);
  let a = L(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function Ba(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? q(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? q(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Va(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function Ha(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Va(e.x, n, i), y: Va(e.y, t, r) };
}
function Ua(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r });
}
function Wa(e, t) {
  return { x: Ua(e.x, t.x), y: Ua(e.y, t.y) };
}
function Ga(e, t) {
  let n = 0.5,
    r = k(e),
    i = k(t);
  return (
    i > r ? (n = Hs(t.min, t.max - r, e.min)) : r > i && (n = Hs(e.min, e.max - i, t.min)),
    N(0, 1, n)
  );
}
function Ka(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
function qa(e = Pf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Pf),
    { x: Ja(e, `left`, `right`), y: Ja(e, `top`, `bottom`) }
  );
}
function Ja(e, t, n) {
  return { min: Ya(e, t), max: Ya(e, n) };
}
function Ya(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
function Xa(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function Za(e, t, n) {
  let r = Hn(e, Xa(n)),
    i = Hn(t, Xa(n));
  return () => {
    (r(), i());
  };
}
function Qa(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function $a(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
function eo(e) {
  let [t, r] = Qi(),
    i = n(Fs);
  return p(Vf, { ...e, layoutGroup: i, switchLayoutGroup: n(_f), isPresent: t, safeToRemove: r });
}
function to(e, t, n) {
  let { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && R.postRender(() => i(t, ja(t)));
}
function no(e, t, n) {
  let { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState && r.whileTap && e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && R.postRender(() => i(t, ja(t)));
}
function ro({ root: e, ...t }) {
  let n = e || document;
  qf.has(n) || qf.set(n, {});
  let r = qf.get(n),
    i = JSON.stringify(t);
  return (r[i] || (r[i] = new IntersectionObserver(Yf, { root: e, ...t })), r[i]);
}
function io(e, t, n) {
  let r = ro(t);
  return (
    Kf.set(e, n),
    r.observe(e),
    () => {
      (Kf.delete(e), r.unobserve(e));
    }
  );
}
function ao({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
function oo(e, t, n) {
  f(() => e.on(t, n), [e, t, n]);
}
function so(e, t, n, r) {
  let i = n[t],
    { length: a, position: o } = ap[t],
    s = i.current,
    c = n.time;
  ((i.current = Math.abs(e[`scroll${o}`])),
    (i.scrollLength = e[`scroll${a}`] - e[`client${a}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = Hs(0, i.scrollLength, i.current)));
  let l = r - c;
  i.velocity = l > np ? 0 : Ws(i.current - s, l);
}
function co(e, t, n) {
  (so(e, `x`, t, n), so(e, `y`, t, n), (t.time = n));
}
function lo(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t;)
    if (Cn(r)) ((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
    else if (r.tagName === `svg`) {
      let e = r.getBoundingClientRect();
      r = r.parentElement;
      let t = r.getBoundingClientRect();
      ((n.x += e.left - t.left), (n.y += e.top - t.top));
    } else if (r instanceof SVGGraphicsElement) {
      let { x: e, y: t } = r.getBBox();
      ((n.x += e), (n.y += t));
      let i = null,
        a = r.parentNode;
      for (; !i;) (a.tagName === `svg` && (i = a), (a = r.parentNode));
      r = i;
    } else break;
  return n;
}
function uo(e, t, n = 0) {
  let r = 0;
  if ((e in op && (e = op[e]), typeof e == `string`)) {
    let t = parseFloat(e);
    e.endsWith(`px`)
      ? (r = t)
      : e.endsWith(`%`)
        ? (e = t / 100)
        : e.endsWith(`vw`)
          ? (r = (t / 100) * document.documentElement.clientWidth)
          : e.endsWith(`vh`)
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
  }
  return (typeof e == `number` && (r = t * e), n + r);
}
function fo(e, t, n, r) {
  let i = Array.isArray(e) ? e : sp,
    a = 0,
    o = 0;
  return (
    typeof e == `number`
      ? (i = [e, e])
      : typeof e == `string` &&
        ((e = e.trim()), (i = e.includes(` `) ? e.split(` `) : [e, op[e] ? e : `0`])),
    (a = uo(i[0], n, r)),
    (o = uo(i[1], t)),
    a - o
  );
}
function po(e) {
  return `getBBox` in e && e.tagName !== `svg`
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function mo(e, t, n) {
  let { offset: r = cp.All } = n,
    { target: i = e, axis: a = `y` } = n,
    o = a === `y` ? `height` : `width`,
    s = i === e ? lp : lo(i, e),
    c = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : po(i),
    l = { width: e.clientWidth, height: e.clientHeight };
  t[a].offset.length = 0;
  let u = !t[a].interpolate,
    d = r.length;
  for (let e = 0; e < d; e++) {
    let n = fo(r[e], l[o], c[o], s[a]);
    (!u && n !== t[a].interpolatorOffsets[e] && (u = !0), (t[a].offset[e] = n));
  }
  (u &&
    ((t[a].interpolate = yt(t[a].offset, xt(r), { clamp: !1 })),
    (t[a].interpolatorOffsets = [...t[a].offset])),
    (t[a].progress = N(0, 1, t[a].interpolate(t[a].current))));
}
function ho(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e;)
      ((n.x.targetOffset += r.offsetLeft), (n.y.targetOffset += r.offsetTop), (r = r.offsetParent));
  }
  ((n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight));
}
function go(e, t, n, r = {}) {
  return {
    measure: (t) => {
      (ho(e, r.target, n), co(e, n, t), (r.offset || r.target) && mo(e, n, r));
    },
    notify: () => t(n),
  };
}
function _o(e, { container: t = document.scrollingElement, trackContentSize: n = !1, ...r } = {}) {
  if (!t) return F;
  let i = fp.get(t);
  i || ((i = new Set()), fp.set(t, i));
  let a = go(t, e, ip(), r);
  if ((i.add(a), !up.has(t))) {
    let e = () => {
        for (let e of i) e.measure(B.timestamp);
        R.preUpdate(n);
      },
      n = () => {
        for (let e of i) e.notify();
      },
      r = () => R.read(e);
    up.set(t, r);
    let a = hp(t);
    (w.addEventListener(`resize`, r),
      t !== document.documentElement && dp.set(t, Hn(t, r)),
      a.addEventListener(`scroll`, r),
      r());
  }
  if (n && !mp.has(t)) {
    let e = up.get(t),
      n = { width: t.scrollWidth, height: t.scrollHeight };
    pp.set(t, n);
    let r = R.read(() => {
      let r = t.scrollWidth,
        i = t.scrollHeight;
      (n.width !== r || n.height !== i) && (e(), (n.width = r), (n.height = i));
    }, !0);
    mp.set(t, r);
  }
  let o = up.get(t);
  return (
    R.read(o, !1, !0),
    () => {
      z(o);
      let e = fp.get(t);
      if (!e || (e.delete(a), e.size)) return;
      let n = up.get(t);
      (up.delete(t),
        n &&
          (hp(t).removeEventListener(`scroll`, n),
          dp.get(t)?.(),
          w.removeEventListener(`resize`, n)));
      let r = mp.get(t);
      (r && (z(r), mp.delete(t)), pp.delete(t));
    }
  );
}
function vo(e) {
  return w === void 0 ? !1 : e ? Pl() : Nl();
}
function yo(e) {
  let t = e.trim().split(/\s+/);
  if (t.length !== 2) return;
  let n = _p[t[0]],
    r = _p[t[1]];
  if (!(n === void 0 || r === void 0)) return [n, r];
}
function bo(e) {
  if (e.length !== 2) return;
  let t = [];
  for (let n of e)
    if (Array.isArray(n)) t.push(n);
    else if (typeof n == `string`) {
      let e = yo(n);
      if (!e) return;
      t.push(e);
    } else return;
  return t;
}
function xo(e, t) {
  let n = bo(e);
  if (!n) return !1;
  for (let e = 0; e < 2; e++) {
    let r = n[e],
      i = t[e];
    if (r[0] !== i[0] || r[1] !== i[1]) return !1;
  }
  return !0;
}
function So(e) {
  if (!e) return { rangeStart: `contain 0%`, rangeEnd: `contain 100%` };
  for (let [t, n] of gp) if (xo(e, t)) return { rangeStart: `${n} 0%`, rangeEnd: `${n} 100%` };
}
function Co(e) {
  let t = { value: 0 };
  return {
    currentTime: t,
    cancel: _o((n) => {
      t.value = n[e.axis].progress * 100;
    }, e),
  };
}
function wo({ source: e, container: t, ...n }) {
  let { axis: r } = n;
  e && (t = e);
  let i = vp.get(t);
  i || ((i = new Map()), vp.set(t, i));
  let a = n.target ?? `self`,
    o = i.get(a);
  o || ((o = {}), i.set(a, o));
  let s = r + (n.offset ?? []).join(`,`);
  return (
    o[s] ||
      (n.target && vo(n.target)
        ? So(n.offset)
          ? (o[s] = new ViewTimeline({ subject: n.target, axis: r }))
          : (o[s] = Co({ container: t, ...n }))
        : vo()
          ? (o[s] = new ScrollTimeline({ source: t, axis: r }))
          : (o[s] = Co({ container: t, ...n }))),
    o[s]
  );
}
function To(e, t) {
  let n = wo(t),
    r = t.target ? So(t.offset) : void 0,
    i = t.target ? vo(t.target) && !!r : vo();
  return e.attachTimeline({
    timeline: i ? n : void 0,
    ...(r && i && { rangeStart: r.rangeStart, rangeEnd: r.rangeEnd }),
    observe: (e) => (
      e.pause(),
      Un((t) => {
        e.time = e.iterationDuration * t;
      }, n)
    ),
  });
}
function Eo(e) {
  return e && (e.target || e.offset);
}
function Do(e) {
  return e.length === 2;
}
function Oo(e, t) {
  return Do(e) || Eo(t)
    ? _o((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : Un(e, wo(t));
}
function ko(e, { axis: t = `y`, container: n = document.scrollingElement, ...r } = {}) {
  if (!n) return F;
  let i = { axis: t, container: n, ...r };
  return typeof e == `function` ? Oo(e, i) : To(e, i);
}
function Ao(e, t, n, r) {
  return {
    factory: (i) => {
      let a,
        o = () => {
          if (bp(n) || bp(r)) {
            Au.read(o);
            return;
          }
          a = ko(i, {
            ...t,
            axis: e,
            container: n?.current || void 0,
            target: r?.current || void 0,
          });
        };
      return (
        Au.read(o),
        () => {
          (ju(o), a?.());
        }
      );
    },
    times: [0, 1],
    keyframes: [0, 1],
    ease: (e) => e,
    duration: 1,
  };
}
function jo(e, t) {
  return w === void 0 ? !1 : e ? Pl() && !!So(t) : Nl();
}
function Mo({ container: e, target: t, ...n } = {}) {
  let r = j(yp);
  jo(t, n.offset) &&
    ((r.scrollXProgress.accelerate = Ao(`x`, n, e, t)),
    (r.scrollYProgress.accelerate = Ao(`y`, n, e, t)));
  let i = l(null),
    a = l(!1),
    o = s(
      () => (
        (i.current = ko(
          (e, { x: t, y: n }) => {
            (r.scrollX.set(t.current),
              r.scrollXProgress.set(t.progress),
              r.scrollY.set(n.current),
              r.scrollYProgress.set(n.progress));
          },
          { ...n, container: e?.current || void 0, target: t?.current || void 0 }
        )),
        () => {
          i.current?.();
        }
      ),
      [e, t, JSON.stringify(n.offset)]
    );
  return (
    M(() => {
      if (((a.current = !1), bp(e) || bp(t))) {
        a.current = !0;
        return;
      } else return o();
    }, [o]),
    c(() => {
      if (!a.current) return;
      let n,
        r = () => {
          let r = bp(e),
            i = bp(t);
          !r && !i && (n = o());
        };
      return (
        Au.read(r),
        () => {
          (ju(r), n?.());
        }
      );
    }, [o]),
    r
  );
}
function No(e) {
  let t = j(() => E(e)),
    { isStatic: r } = n($);
  if (r) {
    let [, n] = i(e);
    c(() => t.on(`change`, n), []);
  }
  return t;
}
function Po(e, t) {
  let n = No(t()),
    r = () => n.set(t());
  return (
    r(),
    M(() => {
      let t = () => R.preRender(r, !1, !0),
        n = e.map((e) => e.on(`change`, t));
      return () => {
        (n.forEach((e) => e()), z(r));
      };
    }),
    n
  );
}
function Fo(e) {
  (($l.current = []), e());
  let t = Po($l.current, e);
  return (($l.current = void 0), t);
}
function Io(e, t, n, r) {
  if (typeof e == `function`) return Fo(e);
  if (n !== void 0 && !Array.isArray(n) && typeof t != `function`) return Ro(e, t, n, r);
  let i = typeof t == `function` ? t : qn(t, n, r),
    a = Array.isArray(e) ? Lo(e, i) : Lo([e], ([e]) => i(e)),
    o = Array.isArray(e) ? void 0 : e.accelerate;
  return (
    o &&
      !o.isTransformed &&
      typeof t != `function` &&
      Array.isArray(n) &&
      r?.clamp !== !1 &&
      (a.accelerate = {
        ...o,
        times: t,
        keyframes: n,
        isTransformed: !0,
        ...(r?.ease ? { ease: r.ease } : {}),
      }),
    a
  );
}
function Lo(e, t) {
  let n = j(() => []);
  return Po(e, () => {
    n.length = 0;
    let r = e.length;
    for (let t = 0; t < r; t++) n[t] = e[t].get();
    return t(n);
  });
}
function Ro(e, t, n, r) {
  let i = j(() => Object.keys(n)),
    a = j(() => ({}));
  for (let o of i) a[o] = Io(e, t, n[o], r);
  return a;
}
function zo(e, t = {}) {
  let { isStatic: r } = n($),
    i = () => (X(e) ? e.get() : e);
  if (r) return Io(i);
  let a = No(i());
  return (f(() => Jn(a, e, t), [a, JSON.stringify(t)]), a);
}
function Bo(e, t = {}) {
  return zo(e, { type: `spring`, ...t });
}
function Vo(e) {
  let t = l(0),
    { isStatic: r } = n($);
  c(() => {
    if (r) return;
    let n = ({ timestamp: n, delta: r }) => {
      ((t.current ||= n), e(n - t.current, r));
    };
    return (R.update(n, !0), () => z(n));
  }, [e]);
}
function Ho(e) {
  let t = No(e.getVelocity()),
    n = () => {
      let r = e.getVelocity();
      (t.set(r), r && R.update(n));
    };
  return (
    oo(e, `change`, () => {
      R.update(n, !1, !0);
    }),
    t
  );
}
function Uo() {
  !nd.current && ir();
  let [e] = i(td.current);
  return e;
}
function Wo() {
  let e = Uo(),
    { reducedMotion: t } = n($);
  return t === `never` ? !1 : t === `always` || e;
}
function Go(e) {
  e.values.forEach((e) => e.stop());
}
function Ko(e, t) {
  [...t].reverse().forEach((n) => {
    let r = e.getVariant(n);
    (r && cn(e, r),
      e.variantChildren &&
        e.variantChildren.forEach((e) => {
          Ko(e, t);
        }));
  });
}
function qo(e, t) {
  if (Array.isArray(t)) return Ko(e, t);
  if (typeof t == `string`) return Ko(e, [t]);
  cn(e, t);
}
function Jo() {
  let e = new Set(),
    t = {
      subscribe(t) {
        return (e.add(t), () => void e.delete(t));
      },
      start(t, n) {
        let r = [];
        return (
          e.forEach((e) => {
            r.push(_n(e, t, { transitionOverride: n }));
          }),
          Promise.all(r)
        );
      },
      set(t) {
        return e.forEach((e) => {
          qo(e, t);
        });
      },
      stop() {
        e.forEach((e) => {
          Go(e);
        });
      },
      mount() {
        return () => {
          t.stop();
        };
      },
    };
  return t;
}
function Yo(e) {
  return typeof e == `object` && !Array.isArray(e);
}
function Xo(e, t, n, r) {
  return e == null
    ? []
    : typeof e == `string` && Yo(t)
      ? Sn(e, n, r)
      : e instanceof NodeList
        ? Array.from(e)
        : Array.isArray(e)
          ? e.filter((e) => e != null)
          : [e];
}
function Zo(e, t, n) {
  return e * (t + 1) + n * t;
}
function Qo(e, t, n, r) {
  return typeof t == `number`
    ? t
    : t.startsWith(`-`) || t.startsWith(`+`)
      ? Math.max(0, e + parseFloat(t))
      : t === `<`
        ? n
        : t.startsWith(`<`)
          ? Math.max(0, n + parseFloat(t.slice(1)))
          : (r.get(t) ?? e);
}
function $o(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (Ne(e, i), r--);
  }
}
function es(e, t, n, r, i, a) {
  $o(e, i, a);
  for (let o = 0; o < t.length; o++) e.push({ value: t[o], at: q(i, a, r[o]), easing: Re(n, o) });
}
function ts(e, t, n = 0) {
  let r = t + 1 + t * n;
  for (let t = 0; t < e.length; t++) e[t] = e[t] / r;
}
function ns(e, t) {
  return e.at === t.at ? (e.value === null ? 1 : t.value === null ? -1 : 0) : e.at - t.at;
}
function rs(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
  let a = t.duration || 0.3,
    o = new Map(),
    s = new Map(),
    c = {},
    l = new Map(),
    u = 0,
    d = 0,
    f = 0;
  for (let n = 0; n < e.length; n++) {
    let o = e[n];
    if (typeof o == `string`) {
      l.set(o, d);
      continue;
    } else if (!Array.isArray(o)) {
      l.set(o.name, Qo(d, o.at, u, l));
      continue;
    }
    let [p, m, h = {}] = o;
    h.at !== void 0 && (d = Qo(d, h.at, u, l));
    let g = 0,
      _ = (e, n, r, o = 0, s = 0) => {
        let c = os(e),
          {
            delay: l = 0,
            times: u = xt(c),
            type: p = t.type || `keyframes`,
            repeat: m,
            repeatType: h,
            repeatDelay: _ = 0,
            ...v
          } = n,
          { ease: y = t.ease || `easeOut`, duration: b } = n,
          x = typeof l == `function` ? l(o, s) : l,
          S = c.length,
          C = Bt(p) ? p : i?.[p || `keyframes`];
        if (S <= 2 && C) {
          let e = 100;
          if (S === 2 && Tp(c)) {
            let t = c[1] - c[0];
            e = Math.abs(t);
          }
          let n = { ...t, ...v };
          b !== void 0 && (n.duration = I(b));
          let r = lt(n, e, C);
          ((y = r.ease), (b = r.duration));
        }
        b ??= a;
        let ee = d + x;
        u.length === 1 && u[0] === 0 && (u[1] = 1);
        let te = u.length - c.length;
        if (
          (te > 0 && bt(u, te), c.length === 1 && c.unshift(null), m && `${m}${Cp}`, m && m < Cp)
        ) {
          let e = b > 0 ? _ / b : 0;
          b = Zo(b, m, _);
          let t = [...c],
            n = [...u];
          y = Array.isArray(y) ? [...y] : [y];
          let r = [...y],
            i = h === `reverse` || h === `mirror`,
            a = t,
            o = r;
          i &&
            ((a = [...t].reverse()),
            h === `reverse` &&
              (o = [...r].reverse().map((e) => (typeof e == `function` ? Xs(e) : e))));
          for (let s = 0; s < m; s++) {
            let l = i && s % 2 == 0,
              d = l ? a : t,
              f = l ? o : r,
              p = (s + 1) * (1 + e);
            (e > 0 && (c.push(c[c.length - 1]), u.push(p), y.push(`linear`)), c.push(...d));
            for (let e = 0; e < d.length; e++)
              (u.push(n[e] + p), y.push(e === 0 ? `linear` : Re(f, e - 1)));
          }
          ts(u, m, e);
        }
        let w = ee + b;
        (es(r, c, y, u, ee, w), (g = Math.max(x + b, g)), (f = Math.max(w, f)));
      };
    if (X(p)) {
      let e = is(p, s);
      _(m, h, as(`default`, e));
    } else {
      let e = Xo(p, m, r, c),
        t = e.length;
      for (let n = 0; n < t; n++) {
        ((m = m), (h = h));
        let r = e[n],
          i = is(r, s);
        for (let e in m) _(m[e], ss(h, e), as(e, i), n, t);
      }
    }
    ((u = d), (d += g));
  }
  return (
    s.forEach((e, r) => {
      for (let i in e) {
        let a = e[i];
        a.sort(ns);
        let s = [],
          c = [],
          l = [];
        for (let e = 0; e < a.length; e++) {
          let { at: t, value: n, easing: r } = a[e];
          (s.push(n), c.push(Hs(0, f, t)), l.push(r || `easeOut`));
        }
        (c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(Sp)),
          c[c.length - 1] !== 1 && (c.push(1), s.push(null)),
          o.has(r) || o.set(r, { keyframes: {}, transition: {} }));
        let u = o.get(r);
        u.keyframes[i] = s;
        let { type: d, ...p } = t;
        u.transition[i] = { ...p, duration: f, ease: l, times: c, ...n };
      }
    }),
    o
  );
}
function is(e, t) {
  return (!t.has(e) && t.set(e, {}), t.get(e));
}
function as(e, t) {
  return (t[e] || (t[e] = []), t[e]);
}
function os(e) {
  return Array.isArray(e) ? e : [e];
}
function ss(e, t) {
  return e && e[t] ? { ...e, ...e[t] } : { ...e };
}
function cs(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {} },
        latestValues: {},
      },
    },
    n = Fn(e) && !Wn(e) ? new Cd(t) : new gd(t);
  (n.mount(e), Qu.set(e, n));
}
function ls(e) {
  let t = new _d({
    presenceContext: null,
    props: {},
    visualState: { renderState: { output: {} }, latestValues: {} },
  });
  (t.mount(e), Qu.set(e, t));
}
function us(e, t) {
  return X(e) || typeof e == `number` || (typeof e == `string` && !Yo(t));
}
function ds(e, t, n, r) {
  let i = [];
  if (us(e, t)) i.push(gi(e, (Yo(t) && t.default) || t, n && (n.default || n)));
  else {
    if (e == null) return i;
    let a = Xo(e, t, r),
      o = a.length;
    for (let e = 0; e < o; e++) {
      let r = a[e],
        s = r instanceof Element ? cs : ls;
      Qu.has(r) || s(r);
      let c = Qu.get(r),
        l = { ...n };
      (`delay` in l && typeof l.delay == `function` && (l.delay = l.delay(e, o)),
        i.push(...mn(c, { ...t, transition: l }, {})));
    }
  }
  return i;
}
function fs(e, t, n) {
  let r = [];
  return (
    rs(
      e.map((e) => {
        if (Array.isArray(e) && typeof e[0] == `function`) {
          let t = e[0],
            n = E(0);
          return (
            n.on(`change`, t),
            e.length === 1 ? [n, [0, 1]] : e.length === 2 ? [n, [0, 1], e[1]] : [n, e[1], e[2]]
          );
        }
        return e;
      }),
      t,
      n,
      { spring: ht }
    ).forEach(({ keyframes: e, transition: t }, n) => {
      r.push(...ds(n, e, t));
    }),
    r
  );
}
function ps(e) {
  return Array.isArray(e) && e.some(Array.isArray);
}
function ms(e = {}) {
  let { scope: t, reduceMotion: n, skipAnimations: r } = e;
  function i(e, i, a) {
    let o = [],
      s,
      c = {};
    if ((n !== void 0 && (c.reduceMotion = n), r !== void 0 && (c.skipAnimations = r), ps(e))) {
      let { onComplete: n, ...r } = i || {};
      (typeof n == `function` && (s = n), (o = fs(e, { ...c, ...r }, t)));
    } else {
      let { onComplete: n, ...r } = a || {};
      (typeof n == `function` && (s = n), (o = ds(e, i, { ...c, ...r }, t)));
    }
    let l = new Xl(o);
    return (
      s && l.finished.then(s),
      t &&
        (t.animations.push(l),
        l.finished.then(() => {
          Ne(t.animations, l);
        })),
      l
    );
  }
  return i;
}
function hs() {
  let e = j(Jo);
  return (M(e.mount, []), e);
}
function gs(e) {
  return typeof e == `object` && !!e && Cf in e;
}
function _s(e) {
  if (gs(e)) return e[Cf];
}
function vs() {
  return ys;
}
function ys(e) {
  $d.current && (($d.current.isUpdating = !1), $d.current.blockUpdate(), e && e());
}
function bs() {
  return s(() => {
    let e = $d.current;
    e && e.resetTree();
  }, []);
}
function xs(e, t, { root: n, margin: r, amount: i = `some` } = {}) {
  let a = Sn(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e.target, e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else typeof n == `function` && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : Op[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function Ss(e, { root: t, margin: n, amount: r, once: a = !1, initial: o = !1 } = {}) {
  let [s, l] = i(o);
  return (
    c(() => {
      if (!e.current || (a && s)) return;
      let i = () => (l(!0), a ? void 0 : () => l(!1)),
        o = { root: (t && t.current) || void 0, margin: n, amount: r };
      return xs(e.current, i, o);
    }, [t, e, n, a, r]),
    s
  );
}
function Cs() {
  let [e, t] = ta(),
    n = vs(),
    r = l(-1);
  return (
    c(() => {
      R.postRender(() =>
        R.postRender(() => {
          t === r.current && (P.instantAnimations = !1);
        })
      );
    }, [t]),
    (i) => {
      n(() => {
        ((P.instantAnimations = !0), e(), i(), (r.current = t + 1));
      });
    }
  );
}
function ws() {
  let [e, t] = i(!0);
  return (
    c(() => {
      let e = () => t(!document.hidden);
      return (
        document.hidden && e(),
        document.addEventListener(`visibilitychange`, e),
        () => {
          document.removeEventListener(`visibilitychange`, e);
        }
      );
    }, []),
    e
  );
}
function Ts(e, t, n, r) {
  if (!r) return e;
  let i = e.findIndex((e) => e.value === t);
  if (i === -1) return e;
  let a = r > 0 ? 1 : -1,
    o = e[i + a];
  if (!o) return e;
  let s = e[i],
    c = o.layout,
    l = q(c.min, c.max, 0.5);
  return (a === 1 && s.layout.max + n > l) || (a === -1 && s.layout.min + n < l)
    ? Pe(e, i, i + a)
    : e;
}
function Es({ children: e, as: t = `ul`, axis: n = `y`, onReorder: r, values: i, ...a }, o) {
  let s = j(() => ep[t]),
    u = [],
    d = l(!1),
    f = l(null),
    m = {
      axis: n,
      groupRef: f,
      registerItem: (e, t) => {
        let r = u.findIndex((t) => e === t.value);
        (r === -1 ? u.push({ value: e, layout: t[n] }) : (u[r].layout = t[n]), u.sort(Ds));
      },
      updateOrder: (e, t, n) => {
        if (d.current) return;
        let a = Ts(u, e, t, n);
        if (u !== a) {
          d.current = !0;
          let e = [...i];
          for (let t = 0; t < a.length; t++)
            if (u[t].value !== a[t].value) {
              let n = i.indexOf(u[t].value),
                r = i.indexOf(a[t].value);
              n !== -1 && r !== -1 && ([e[n], e[r]] = [e[r], e[n]]);
              break;
            }
          r(e);
        }
      },
    };
  c(() => {
    d.current = !1;
  });
  let h = (e) => {
      ((f.current = e), typeof o == `function` ? o(e) : o && (o.current = e));
    },
    g = { overflowAnchor: `none`, ...a.style };
  return p(s, {
    ...a,
    style: g,
    ref: h,
    ignoreStrict: !0,
    children: p(jp.Provider, { value: m, children: e }),
  });
}
function Ds(e, t) {
  return e.layout.min - t.layout.min;
}
function Os() {
  if (Rp) {
    let e = As(Rp, `y`);
    e && (Lp.delete(e), Ip.delete(e));
    let t = As(Rp, `x`);
    (t && t !== e && (Lp.delete(t), Ip.delete(t)), (Rp = null));
  }
}
function ks(e, t) {
  let n = getComputedStyle(e),
    r = t === `x` ? n.overflowX : n.overflowY,
    i = e === document.body || e === document.documentElement;
  return Fp.has(r) || i;
}
function As(e, t) {
  let n = e?.parentElement;
  for (; n;) {
    if (ks(n, t)) return n;
    n = n.parentElement;
  }
  return null;
}
function js(e, t, n) {
  let r = t.getBoundingClientRect(),
    i = n === `x` ? Math.max(0, r.left) : Math.max(0, r.top),
    a = n === `x` ? Math.min(w.innerWidth, r.right) : Math.min(w.innerHeight, r.bottom),
    o = e - i,
    s = a - e;
  if (o < Np) {
    let e = 1 - o / Np;
    return { amount: -Pp * e * e, edge: `start` };
  } else if (s < Np) {
    let e = 1 - s / Np;
    return { amount: Pp * e * e, edge: `end` };
  }
  return { amount: 0, edge: null };
}
function Ms(e, t, n, r) {
  if (!e) return;
  Rp = e;
  let i = As(e, n);
  if (!i) return;
  let { amount: a, edge: o } = js(t - (n === `x` ? w.scrollX : w.scrollY), i, n);
  if (o === null) {
    (Lp.delete(i), Ip.delete(i));
    return;
  }
  let s = Lp.get(i),
    c = i === document.body || i === document.documentElement;
  if (s !== o) {
    if (!((o === `start` && r < 0) || (o === `end` && r > 0))) return;
    Lp.set(i, o);
    let e =
      n === `x`
        ? i.scrollWidth - (c ? w.innerWidth : i.clientWidth)
        : i.scrollHeight - (c ? w.innerHeight : i.clientHeight);
    Ip.set(i, e);
  }
  if (a > 0) {
    let e = Ip.get(i);
    if ((n === `x` ? (c ? w.scrollX : i.scrollLeft) : c ? w.scrollY : i.scrollTop) >= e) return;
  }
  n === `x`
    ? c
      ? w.scrollBy({ left: a })
      : (i.scrollLeft += a)
    : c
      ? w.scrollBy({ top: a })
      : (i.scrollTop += a);
}
function Ns(e, t = 0) {
  return X(e) ? e : No(t);
}
function Ps(
  {
    children: e,
    style: t = {},
    value: r,
    as: i = `li`,
    onDrag: a,
    onDragEnd: o,
    layout: s = !0,
    ...c
  },
  l
) {
  let u = j(() => ep[i]),
    d = n(jp),
    f = { x: Ns(t.x), y: Ns(t.y) },
    m = Io([f.x, f.y], ([e, t]) => (e || t ? 1 : `unset`)),
    { axis: h, registerItem: g, updateOrder: _, groupRef: v } = d;
  return p(u, {
    drag: h,
    ...c,
    dragSnapToOrigin: !0,
    style: { ...t, x: f.x, y: f.y, zIndex: m },
    layout: s,
    onDrag: (e, t) => {
      let { velocity: n, point: i } = t,
        o = f[h].get();
      (_(r, o, n[h]), Ms(v.current, i[h], h, n[h]), a && a(e, t));
    },
    onDragEnd: (e, t) => {
      (Os(), o && o(e, t));
    },
    onLayoutMeasure: (e) => {
      g(r, e);
    },
    ref: l,
    ignoreStrict: !0,
    children: e,
  });
}
var Fs,
  Is,
  M,
  Ls,
  N,
  P,
  Rs,
  zs,
  Bs,
  F,
  Vs,
  Hs,
  Us,
  I,
  L,
  Ws,
  Gs,
  Ks,
  qs,
  Js,
  Ys,
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  tc,
  nc,
  rc,
  ic,
  ac,
  oc,
  sc,
  cc,
  lc,
  uc,
  dc,
  fc,
  pc,
  R,
  z,
  B,
  mc,
  hc,
  V,
  gc,
  _c,
  vc,
  yc,
  bc,
  xc,
  Sc,
  Cc,
  wc,
  Tc,
  Ec,
  Dc,
  Oc,
  kc,
  Ac,
  jc,
  Mc,
  Nc,
  H,
  U,
  W,
  Pc,
  Fc,
  Ic,
  Lc,
  G,
  Rc,
  zc,
  Bc,
  Vc,
  Hc,
  Uc,
  Wc,
  Gc,
  Kc,
  K,
  q,
  qc,
  Jc,
  Yc,
  Xc,
  Zc,
  Qc,
  $c,
  el,
  J,
  tl,
  nl,
  rl,
  il,
  al,
  ol,
  sl,
  cl,
  ll,
  ul,
  dl,
  fl,
  pl,
  ml,
  hl,
  gl,
  _l,
  vl,
  yl,
  bl,
  xl,
  Sl,
  Cl,
  wl,
  Tl,
  Y,
  El,
  Dl,
  Ol,
  kl,
  Al,
  jl,
  Ml,
  Nl,
  Pl,
  Fl,
  Il,
  Ll,
  Rl,
  zl,
  Bl,
  Vl,
  Hl,
  Ul,
  Wl,
  Gl,
  Kl,
  ql,
  Jl,
  Yl,
  Xl,
  Zl,
  Ql,
  $l,
  eu,
  tu,
  nu,
  ru,
  iu,
  au,
  ou,
  su,
  cu,
  lu,
  uu,
  X,
  du,
  fu,
  pu,
  mu,
  hu,
  gu,
  _u,
  vu,
  yu,
  bu,
  xu,
  Su,
  Cu,
  wu,
  Tu,
  Eu,
  Du,
  Ou,
  ku,
  Au,
  ju,
  Z,
  Mu,
  Nu,
  Pu,
  Fu,
  Iu,
  Lu,
  Ru,
  zu,
  Bu,
  Vu,
  Hu,
  Uu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju,
  Yu,
  Xu,
  Zu,
  Q,
  Qu,
  $u,
  ed,
  td,
  nd,
  rd,
  id,
  ad,
  od,
  sd,
  cd,
  ld,
  ud,
  dd,
  fd,
  pd,
  md,
  hd,
  gd,
  _d,
  vd,
  yd,
  bd,
  xd,
  Sd,
  Cd,
  wd,
  Td,
  Ed,
  Dd,
  Od,
  kd,
  Ad,
  jd,
  Md,
  Nd,
  Pd,
  Fd,
  Id,
  Ld,
  Rd,
  zd,
  Bd,
  Vd,
  Hd,
  Ud,
  Wd,
  Gd,
  Kd,
  qd,
  Jd,
  Yd,
  Xd,
  Zd,
  Qd,
  $d,
  ef,
  $,
  tf,
  nf,
  rf,
  af,
  of,
  sf,
  cf,
  lf,
  uf,
  df,
  ff,
  pf,
  mf,
  hf,
  gf,
  _f,
  vf,
  yf,
  bf,
  xf,
  Sf,
  Cf,
  wf,
  Tf,
  Ef,
  Df,
  Of,
  kf,
  Af,
  jf,
  Mf,
  Nf,
  Pf,
  Ff,
  If,
  Lf,
  Rf,
  zf,
  Bf,
  Vf,
  Hf,
  Uf,
  Wf,
  Gf,
  Kf,
  qf,
  Jf,
  Yf,
  Xf,
  Zf,
  Qf,
  $f,
  ep,
  tp,
  np,
  rp,
  ip,
  ap,
  op,
  sp,
  cp,
  lp,
  up,
  dp,
  fp,
  pp,
  mp,
  hp,
  gp,
  _p,
  vp,
  yp,
  bp,
  xp,
  Sp,
  Cp,
  wp,
  Tp,
  Ep,
  Dp,
  Op,
  kp,
  Ap,
  jp,
  Mp,
  Np,
  Pp,
  Fp,
  Ip,
  Lp,
  Rp,
  zp,
  Bp = t(() => {
    (o(),
      je(),
      r(),
      b(),
      (Fs = a({})),
      (Is = w !== void 0),
      (M = Is ? te : c),
      (Ls = a(null)),
      (N = (e, t, n) => (n > t ? t : n < e ? e : n)),
      (P = {}),
      (Rs = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)),
      (zs = (e) => typeof e == `object` && !!e),
      (Bs = (e) => /^0[^.\s]+$/u.test(e)),
      (F = (e) => e),
      (Vs = (...e) => e.reduce((e, t) => (n) => t(e(n)))),
      (Hs = (e, t, n) => {
        let r = t - e;
        return r ? (n - e) / r : 1;
      }),
      (Us = class {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (Me(this.subscriptions, e), () => Ne(this.subscriptions, e));
        }
        notify(e, t, n) {
          let r = this.subscriptions.length;
          if (r)
            if (r === 1) this.subscriptions[0](e, t, n);
            else
              for (let i = 0; i < r; i++) {
                let r = this.subscriptions[i];
                r && r(e, t, n);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }),
      (I = (e) => e * 1e3),
      (L = (e) => e / 1e3),
      (Ws = (e, t) => (t ? (1e3 / t) * e : 0)),
      (Gs = (e, t, n) => {
        let r = t - e;
        return ((((n - e) % r) + r) % r) + e;
      }),
      (Ks = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e),
      (qs = 1e-7),
      (Js = 12),
      (Ys = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2)),
      (Xs = (e) => (t) => 1 - e(1 - t)),
      (Zs = Le(0.33, 1.53, 0.69, 0.99)),
      (Qs = Xs(Zs)),
      ($s = Ys(Qs)),
      (ec = (e) => (e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * Qs(e) : 0.5 * (2 - 2 ** (-10 * (e - 1))))),
      (tc = (e) => 1 - Math.sin(Math.acos(e))),
      (nc = Xs(tc)),
      (rc = Ys(tc)),
      (ic = Le(0.42, 0, 1, 1)),
      (ac = Le(0, 0, 0.58, 1)),
      (oc = Le(0.42, 0, 0.58, 1)),
      (sc = (e) => Array.isArray(e) && typeof e[0] != `number`),
      (cc = (e) => Array.isArray(e) && typeof e[0] == `number`),
      (lc = {
        linear: F,
        easeIn: ic,
        easeInOut: oc,
        easeOut: ac,
        circIn: tc,
        circInOut: rc,
        circOut: nc,
        backIn: Qs,
        backInOut: $s,
        backOut: Zs,
        anticipate: ec,
      }),
      (uc = (e) => typeof e == `string`),
      (dc = (e) => {
        if (cc(e)) {
          e.length;
          let [t, n, r, i] = e;
          return Le(t, n, r, i);
        } else if (uc(e)) return (lc[e], `${e}`, lc[e]);
        return e;
      }),
      (fc = [
        `setup`,
        `read`,
        `resolveKeyframes`,
        `preUpdate`,
        `update`,
        `preRender`,
        `render`,
        `postRender`,
      ]),
      (pc = 40),
      ({
        schedule: R,
        cancel: z,
        state: B,
        steps: mc,
      } = Be(typeof requestAnimationFrame < `u` ? requestAnimationFrame : F, !0)),
      (V = {
        now: () => (
          hc === void 0 &&
            V.set(B.isProcessing || P.useManualTiming ? B.timestamp : performance.now()),
          hc
        ),
        set: (e) => {
          ((hc = e), queueMicrotask(Ve));
        },
      }),
      (gc = (e) => (t) => typeof t == `string` && t.startsWith(e)),
      (_c = gc(`--`)),
      (vc = gc(`var(--`)),
      (yc = (e) => (vc(e) ? bc.test(e.split(`/*`)[0].trim()) : !1)),
      (bc = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu),
      (xc = { test: (e) => typeof e == `number`, parse: parseFloat, transform: (e) => e }),
      (Sc = { ...xc, transform: (e) => N(0, 1, e) }),
      (Cc = { ...xc, default: 1 }),
      (wc = (e) => Math.round(e * 1e5) / 1e5),
      (Tc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu),
      (Ec =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu),
      (Dc = (e, t) => (n) =>
        !!(
          (typeof n == `string` && Ec.test(n) && n.startsWith(e)) ||
          (t && !Ue(n) && Object.prototype.hasOwnProperty.call(n, t))
        )),
      (Oc = (e, t, n) => (r) => {
        if (typeof r != `string`) return r;
        let [i, a, o, s] = r.match(Tc);
        return {
          [e]: parseFloat(i),
          [t]: parseFloat(a),
          [n]: parseFloat(o),
          alpha: s === void 0 ? 1 : parseFloat(s),
        };
      }),
      (kc = (e) => N(0, 255, e)),
      (Ac = { ...xc, transform: (e) => Math.round(kc(e)) }),
      (jc = {
        test: Dc(`rgb`, `red`),
        parse: Oc(`red`, `green`, `blue`),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
          `rgba(` +
          Ac.transform(e) +
          `, ` +
          Ac.transform(t) +
          `, ` +
          Ac.transform(n) +
          `, ` +
          wc(Sc.transform(r)) +
          `)`,
      }),
      (Mc = { test: Dc(`#`), parse: We, transform: jc.transform }),
      (Nc = (e) => ({
        test: (t) => typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
        parse: parseFloat,
        transform: (t) => `${t}${e}`,
      })),
      (H = Nc(`deg`)),
      (U = Nc(`%`)),
      (W = Nc(`px`)),
      (Pc = Nc(`vh`)),
      (Fc = Nc(`vw`)),
      (Ic = { ...U, parse: (e) => U.parse(e) / 100, transform: (e) => U.transform(e * 100) }),
      (Lc = {
        test: Dc(`hsl`, `hue`),
        parse: Oc(`hue`, `saturation`, `lightness`),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
          `hsla(` +
          Math.round(e) +
          `, ` +
          U.transform(wc(t)) +
          `, ` +
          U.transform(wc(n)) +
          `, ` +
          wc(Sc.transform(r)) +
          `)`,
      }),
      (G = {
        test: (e) => jc.test(e) || Mc.test(e) || Lc.test(e),
        parse: (e) => (jc.test(e) ? jc.parse(e) : Lc.test(e) ? Lc.parse(e) : Mc.parse(e)),
        transform: (e) =>
          typeof e == `string` ? e : e.hasOwnProperty(`red`) ? jc.transform(e) : Lc.transform(e),
        getAnimatableNone: (e) => {
          let t = G.parse(e);
          return ((t.alpha = 0), G.transform(t));
        },
      }),
      (Rc =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu),
      (zc = `number`),
      (Bc = `color`),
      (Vc = `var`),
      (Hc = `var(`),
      (Uc = "${}"),
      (Wc =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu),
      (Gc = (e) => (typeof e == `number` ? 0 : G.test(e) ? G.getAnimatableNone(e) : e)),
      (Kc = (e, t) => (typeof e == `number` ? (t?.trim().endsWith(`/`) ? e : 0) : Gc(e))),
      (K = { test: Ge, parse: qe, createTransformer: Ye, getAnimatableNone: Xe }),
      (q = (e, t, n) => e + (t - e) * n),
      (qc = (e, t, n) => {
        let r = e * e,
          i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i);
      }),
      (Jc = [Mc, jc, Lc]),
      (Yc = (e) => Jc.find((t) => t.test(e))),
      (Xc = (e, t) => {
        let n = et(e),
          r = et(t);
        if (!n || !r) return $e(e, t);
        let i = { ...n };
        return (e) => (
          (i.red = qc(n.red, r.red, e)),
          (i.green = qc(n.green, r.green, e)),
          (i.blue = qc(n.blue, r.blue, e)),
          (i.alpha = q(n.alpha, r.alpha, e)),
          jc.transform(i)
        );
      }),
      (Zc = new Set([`none`, `hidden`])),
      (Qc = (e, t) => {
        let n = K.createTransformer(t),
          r = Ke(e),
          i = Ke(t);
        return r.indexes.var.length === i.indexes.var.length &&
          r.indexes.color.length === i.indexes.color.length &&
          r.indexes.number.length >= i.indexes.number.length
          ? (Zc.has(e) && !i.values.length) || (Zc.has(t) && !r.values.length)
            ? tt(e, t)
            : Vs(it(ot(r, i), i.values), n)
          : (`${e}${t}`, $e(e, t));
      }),
      ($c = (e, t, n = 10) => {
        let r = ``,
          i = Math.max(Math.round(t / n), 2);
        for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `;
        return `linear(${r.substring(0, r.length - 2)})`;
      }),
      (el = 2e4),
      (J = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      }),
      (tl = 12),
      (nl = 0.001),
      (rl = [`duration`, `bounce`]),
      (il = [`stiffness`, `damping`, `mass`]),
      (ht.applyToOptions = (e) => {
        let t = lt(e, 100, ht);
        return ((e.ease = t.ease), (e.duration = I(t.duration)), (e.type = `keyframes`), e);
      }),
      (al = 5),
      (ol = (e) => e !== null),
      (sl = (e) => {
        let t = ({ timestamp: t }) => e(t);
        return {
          start: (e = !0) => R.update(t, e),
          stop: () => z(t),
          now: () => (B.isProcessing ? B.timestamp : V.now()),
        };
      }),
      (cl = { decay: _t, inertia: _t, tween: wt, keyframes: wt, spring: ht }),
      (ll = class {
        constructor() {
          this.updateFinished();
        }
        get finished() {
          return this._finished;
        }
        updateFinished() {
          this._finished = new Promise((e) => {
            this.resolve = e;
          });
        }
        notifyFinished() {
          this.resolve();
        }
        then(e, t) {
          return this.finished.then(e, t);
        }
      }),
      (ul = (e) => e / 100),
      (dl = class extends ll {
        constructor(e) {
          (super(),
            (this.state = `idle`),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.delayState = { done: !1, value: void 0 }),
            (this.stop = () => {
              let { motionValue: e } = this.options;
              (e && e.updatedAt !== V.now() && this.tick(V.now()),
                (this.isStopped = !0),
                this.state !== `idle` && (this.teardown(), this.options.onStop?.()));
            }),
            (this.options = e),
            this.initAnimation(),
            this.play(),
            e.autoplay === !1 && this.pause());
        }
        initAnimation() {
          let { options: e } = this;
          Et(e);
          let {
              type: t = wt,
              repeat: n = 0,
              repeatDelay: r = 0,
              repeatType: i,
              velocity: a = 0,
            } = e,
            { keyframes: o } = e,
            s = t || wt;
          s !== wt &&
            typeof o[0] != `number` &&
            ((this.mixKeyframes = Vs(ul, st(o[0], o[1]))), (o = [0, 100]));
          let c = s({ ...e, keyframes: o });
          (i === `mirror` &&
            (this.mirroredGenerator = s({ ...e, keyframes: [...o].reverse(), velocity: -a })),
            c.calculatedDuration === null && (c.calculatedDuration = ct(c)));
          let { calculatedDuration: l } = c;
          ((this.calculatedDuration = l),
            (this.resolvedDuration = l + r),
            (this.totalDuration = this.resolvedDuration * (n + 1) - r),
            (this.generator = c));
        }
        updateTime(e) {
          let t = Math.round(e - this.startTime) * this.playbackSpeed;
          this.holdTime === null ? (this.currentTime = t) : (this.currentTime = this.holdTime);
        }
        tick(e, t = !1) {
          let {
            generator: n,
            totalDuration: r,
            mixKeyframes: i,
            mirroredGenerator: a,
            resolvedDuration: o,
            calculatedDuration: s,
          } = this;
          if (this.startTime === null) return n.next(0);
          let {
            delay: c = 0,
            keyframes: l,
            repeat: u,
            repeatType: d,
            repeatDelay: f,
            type: p,
            onUpdate: m,
            finalKeyframe: h,
          } = this.options;
          (this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)),
            t ? (this.currentTime = e) : this.updateTime(e));
          let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
            _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
          ((this.currentTime = Math.max(g, 0)),
            this.state === `finished` && this.holdTime === null && (this.currentTime = r));
          let v = this.currentTime,
            y = n;
          if (u) {
            let e = Math.min(this.currentTime, r) / o,
              t = Math.floor(e),
              n = e % 1;
            (!n && e >= 1 && (n = 1),
              n === 1 && t--,
              (t = Math.min(t, u + 1)),
              t % 2 &&
                (d === `reverse` ? ((n = 1 - n), f && (n -= f / o)) : d === `mirror` && (y = a)),
              (v = N(0, 1, n) * o));
          }
          let b;
          (_ ? ((this.delayState.value = l[0]), (b = this.delayState)) : (b = y.next(v)),
            i && !_ && (b.value = i(b.value)));
          let { done: x } = b;
          !_ &&
            s !== null &&
            (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
          let S =
            this.holdTime === null &&
            (this.state === `finished` || (this.state === `running` && x));
          return (
            S && p !== _t && (b.value = Tt(l, this.options, h, this.speed)),
            m && m(b.value),
            S && this.finish(),
            b
          );
        }
        then(e, t) {
          return this.finished.then(e, t);
        }
        get duration() {
          return L(this.calculatedDuration);
        }
        get iterationDuration() {
          let { delay: e = 0 } = this.options || {};
          return this.duration + L(e);
        }
        get time() {
          return L(this.currentTime);
        }
        set time(e) {
          ((e = I(e)),
            (this.currentTime = e),
            this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
              ? (this.holdTime = e)
              : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
            this.driver
              ? this.driver.start(!1)
              : ((this.startTime = 0), (this.state = `paused`), (this.holdTime = e), this.tick(e)));
        }
        getGeneratorVelocity() {
          let e = this.currentTime;
          if (e <= 0) return this.options.velocity || 0;
          if (this.generator.velocity) return this.generator.velocity(e);
          let t = this.generator.next(e).value;
          return gt((e) => this.generator.next(e).value, e, t);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (t && this.driver && this.updateTime(V.now()),
            (this.playbackSpeed = e),
            t && this.driver && (this.time = L(this.currentTime)));
        }
        play() {
          if (this.isStopped) return;
          let { driver: e = sl, startTime: t } = this.options;
          ((this.driver ||= e((e) => this.tick(e))), this.options.onPlay?.());
          let n = this.driver.now();
          (this.state === `finished`
            ? (this.updateFinished(), (this.startTime = n))
            : this.holdTime === null
              ? (this.startTime ||= t ?? n)
              : (this.startTime = n - this.holdTime),
            this.state === `finished` &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = `running`),
            this.driver.start());
        }
        pause() {
          ((this.state = `paused`), this.updateTime(V.now()), (this.holdTime = this.currentTime));
        }
        complete() {
          (this.state !== `running` && this.play(),
            (this.state = `finished`),
            (this.holdTime = null));
        }
        finish() {
          (this.notifyFinished(),
            this.teardown(),
            (this.state = `finished`),
            this.options.onComplete?.());
        }
        cancel() {
          ((this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.());
        }
        teardown() {
          ((this.state = `idle`), this.stopDriver(), (this.startTime = this.holdTime = null));
        }
        stopDriver() {
          this.driver &&= (this.driver.stop(), void 0);
        }
        sample(e) {
          return ((this.startTime = 0), this.tick(e, !0));
        }
        attachTimeline(e) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = `keyframes`),
              (this.options.ease = `linear`),
              this.initAnimation()),
            this.driver?.stop(),
            e.observe(this)
          );
        }
      }),
      (fl = (e) => (e * 180) / Math.PI),
      (pl = (e) => hl(fl(Math.atan2(e[1], e[0])))),
      (ml = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: pl,
        rotateZ: pl,
        skewX: (e) => fl(Math.atan(e[1])),
        skewY: (e) => fl(Math.atan(e[2])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
      }),
      (hl = (e) => ((e %= 360), e < 0 && (e += 360), e)),
      (gl = pl),
      (_l = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1])),
      (vl = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5])),
      (yl = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: _l,
        scaleY: vl,
        scale: (e) => (_l(e) + vl(e)) / 2,
        rotateX: (e) => hl(fl(Math.atan2(e[6], e[5]))),
        rotateY: (e) => hl(fl(Math.atan2(-e[2], e[0]))),
        rotateZ: gl,
        rotate: gl,
        skewX: (e) => fl(Math.atan(e[4])),
        skewY: (e) => fl(Math.atan(e[1])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
      }),
      (bl = (e, t) => {
        let { transform: n = `none` } = getComputedStyle(e);
        return At(n, t);
      }),
      (xl = [
        `transformPerspective`,
        `x`,
        `y`,
        `z`,
        `translateX`,
        `translateY`,
        `translateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `skew`,
        `skewX`,
        `skewY`,
      ]),
      (Sl = new Set([...xl, `pathRotation`])),
      (Cl = (e) => e === xc || e === W),
      (wl = new Set([`x`, `y`, `z`])),
      (Tl = xl.filter((e) => !wl.has(e))),
      (Y = {
        width: ({ x: e }, { paddingLeft: t = `0`, paddingRight: n = `0`, boxSizing: r }) => {
          let i = e.max - e.min;
          return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
        },
        height: ({ y: e }, { paddingTop: t = `0`, paddingBottom: n = `0`, boxSizing: r }) => {
          let i = e.max - e.min;
          return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
        },
        top: (e, { top: t }) => parseFloat(t),
        left: (e, { left: t }) => parseFloat(t),
        bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
        right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
        x: (e, { transform: t }) => At(t, `x`),
        y: (e, { transform: t }) => At(t, `y`),
      }),
      (Y.translateX = Y.x),
      (Y.translateY = Y.y),
      (El = new Set()),
      (Dl = !1),
      (Ol = !1),
      (kl = !1),
      (Al = class {
        constructor(e, t, n, r, i, a = !1) {
          ((this.state = `pending`),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = n),
            (this.motionValue = r),
            (this.element = i),
            (this.isAsync = a));
        }
        scheduleResolve() {
          ((this.state = `scheduled`),
            this.isAsync
              ? (El.add(this), Dl || ((Dl = !0), R.read(Pt), R.resolveKeyframes(Nt)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
          if (e[0] === null) {
            let i = r?.get(),
              a = e[e.length - 1];
            if (i !== void 0) e[0] = i;
            else if (n && t) {
              let r = n.readValue(t, a);
              r != null && (e[0] = r);
            }
            (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
          }
          Ot(e);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(e = !1) {
          ((this.state = `complete`),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
            El.delete(this));
        }
        cancel() {
          this.state === `scheduled` && (El.delete(this), (this.state = `pending`));
        }
        resume() {
          this.state === `pending` && this.scheduleResolve();
        }
      }),
      (jl = (e) => e.startsWith(`--`)),
      (Ml = {}),
      (Nl = Lt(() => w.ScrollTimeline !== void 0, `scrollTimeline`)),
      (Pl = Lt(() => w.ViewTimeline !== void 0, `viewTimeline`)),
      (Fl = Lt(() => {
        try {
          document.createElement(`div`).animate({ opacity: 0 }, { easing: `linear(0, 1)` });
        } catch {
          return !1;
        }
        return !0;
      }, `linearEasing`)),
      (Il = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`),
      (Ll = {
        linear: `linear`,
        ease: `ease`,
        easeIn: `ease-in`,
        easeOut: `ease-out`,
        easeInOut: `ease-in-out`,
        circIn: Il([0, 0.65, 0.55, 1]),
        circOut: Il([0.55, 0, 1, 0.45]),
        backIn: Il([0.31, 0.01, 0.66, -0.59]),
        backOut: Il([0.33, 1.53, 0.69, 0.99]),
      }),
      (Rl = class extends ll {
        constructor(e) {
          if (
            (super(),
            (this.finishedTime = null),
            (this.isStopped = !1),
            (this.manualStartTime = null),
            !e)
          )
            return;
          let {
            element: t,
            name: n,
            keyframes: r,
            pseudoElement: i,
            allowFlatten: a = !1,
            finalKeyframe: o,
            onComplete: s,
          } = e;
          ((this.isPseudoElement = !!i), (this.allowFlatten = a), (this.options = e), e.type);
          let c = Vt(e);
          ((this.animation = zt(t, n, r, c, i)),
            c.autoplay === !1 && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !i)) {
                let e = Tt(r, this.options, o, this.speed);
                (this.updateMotionValue && this.updateMotionValue(e),
                  It(t, n, e),
                  this.animation.cancel());
              }
              (s?.(), this.notifyFinished());
            }));
        }
        play() {
          this.isStopped ||
            ((this.manualStartTime = null),
            this.animation.play(),
            this.state === `finished` && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: e } = this;
          e === `idle` ||
            e === `finished` ||
            (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          let e = this.options?.element;
          !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
        }
        get duration() {
          let e = this.animation.effect?.getComputedTiming?.().duration || 0;
          return L(Number(e));
        }
        get iterationDuration() {
          let { delay: e = 0 } = this.options || {};
          return this.duration + L(e);
        }
        get time() {
          return L(Number(this.animation.currentTime) || 0);
        }
        set time(e) {
          let t = this.finishedTime !== null;
          ((this.manualStartTime = null),
            (this.finishedTime = null),
            (this.animation.currentTime = I(e)),
            t && this.animation.pause());
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(e) {
          (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
        }
        get state() {
          return this.finishedTime === null ? this.animation.playState : `finished`;
        }
        get startTime() {
          return this.manualStartTime ?? Number(this.animation.startTime);
        }
        set startTime(e) {
          this.manualStartTime = this.animation.startTime = e;
        }
        attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
          return (
            this.allowFlatten && this.animation.effect?.updateTiming({ easing: `linear` }),
            (this.animation.onfinish = null),
            e && Nl()
              ? ((this.animation.timeline = e),
                t && (this.animation.rangeStart = t),
                n && (this.animation.rangeEnd = n),
                F)
              : r(this)
          );
        }
      }),
      (zl = { anticipate: ec, backInOut: $s, circInOut: rc }),
      (Bl = 10),
      (Vl = class extends Rl {
        constructor(e) {
          (Ut(e),
            Et(e),
            super(e),
            e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime),
            (this.options = e));
        }
        updateMotionValue(e) {
          let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
          if (!t) return;
          if (e !== void 0) {
            t.set(e);
            return;
          }
          let o = new dl({ ...a, autoplay: !1 }),
            s = Math.max(Bl, V.now() - this.startTime),
            c = N(0, Bl, s - Bl),
            l = o.sample(s).value,
            { name: u } = this.options;
          (i && u && It(i, u, l),
            t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c),
            o.stop());
        }
      }),
      (Hl = new Set([`opacity`, `clipPath`, `filter`, `transform`])),
      (Ul = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/),
      (Wl = new Set([
        `color`,
        `backgroundColor`,
        `outlineColor`,
        `fill`,
        `stroke`,
        `borderColor`,
        `borderTopColor`,
        `borderRightColor`,
        `borderBottomColor`,
        `borderLeftColor`,
      ])),
      (Gl = Fe(() => Object.hasOwnProperty.call(Element.prototype, `animate`))),
      (Kl = (e, t) =>
        t !== `zIndex` &&
        !!(
          typeof e == `number` ||
          Array.isArray(e) ||
          (typeof e == `string` && (K.test(e) || e === `0`) && !e.startsWith(`url(`))
        )),
      (ql = 40),
      (Jl = class extends ll {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: n = `keyframes`,
          repeat: r = 0,
          repeatDelay: i = 0,
          repeatType: a = `loop`,
          keyframes: o,
          name: s,
          motionValue: c,
          element: l,
          ...u
        }) {
          (super(),
            (this.stop = () => {
              (this._animation && (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel());
            }),
            (this.createdAt = V.now()));
          let d = {
              autoplay: e,
              delay: t,
              type: n,
              repeat: r,
              repeatDelay: i,
              repeatType: a,
              name: s,
              motionValue: c,
              element: l,
              ...u,
            },
            f = l?.KeyframeResolver || Al;
          ((this.keyframeResolver = new f(
            o,
            (e, t, n) => this.onKeyframesResolved(e, t, d, !n),
            s,
            c,
            l
          )),
            this.keyframeResolver?.scheduleResolve());
        }
        onKeyframesResolved(e, t, n, r) {
          this.keyframeResolver = void 0;
          let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
          this.resolvedAt = V.now();
          let u = !0;
          Jt(e, i, a, o) ||
            ((u = !1),
            (P.instantAnimations || !s) && l?.(Tt(e, n, t)),
            (e[0] = e[e.length - 1]),
            Wt(n),
            (n.repeat = 0));
          let d = {
              startTime: r
                ? this.resolvedAt && this.resolvedAt - this.createdAt > ql
                  ? this.resolvedAt
                  : this.createdAt
                : void 0,
              finalKeyframe: t,
              ...n,
              keyframes: e,
            },
            f = u && !c && Kt(d),
            p = d.motionValue?.owner?.current,
            m;
          if (f)
            try {
              m = new Vl({ ...d, element: p });
            } catch {
              m = new dl(d);
            }
          else m = new dl(d);
          (m.finished
            .then(() => {
              this.notifyFinished();
            })
            .catch(F),
            (this.pendingTimeline &&=
              ((this.stopTimeline = m.attachTimeline(this.pendingTimeline)), void 0)),
            (this._animation = m));
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished;
        }
        then(e, t) {
          return this.finished.finally(e).then(() => {});
        }
        get animation() {
          return (this._animation || (this.keyframeResolver?.resume(), Ft()), this._animation);
        }
        get duration() {
          return this.animation.duration;
        }
        get iterationDuration() {
          return this.animation.iterationDuration;
        }
        get time() {
          return this.animation.time;
        }
        set time(e) {
          this.animation.time = e;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(e) {
          this.animation.speed = e;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(e) {
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(e))
              : (this.pendingTimeline = e),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          (this._animation && this.animation.cancel(), this.keyframeResolver?.cancel());
        }
      }),
      (Yl = class {
        constructor(e) {
          ((this.stop = () => this.runAll(`stop`)), (this.animations = e.filter(Boolean)));
        }
        get finished() {
          return Promise.all(this.animations.map((e) => e.finished));
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t;
        }
        attachTimeline(e) {
          let t = this.animations.map((t) => t.attachTimeline(e));
          return () => {
            t.forEach((e, t) => {
              (e && e(), this.animations[t].stop());
            });
          };
        }
        get time() {
          return this.getAll(`time`);
        }
        set time(e) {
          this.setAll(`time`, e);
        }
        get speed() {
          return this.getAll(`speed`);
        }
        set speed(e) {
          this.setAll(`speed`, e);
        }
        get state() {
          return this.getAll(`state`);
        }
        get startTime() {
          return this.getAll(`startTime`);
        }
        get duration() {
          return Yt(this.animations, `duration`);
        }
        get iterationDuration() {
          return Yt(this.animations, `iterationDuration`);
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        play() {
          this.runAll(`play`);
        }
        pause() {
          this.runAll(`pause`);
        }
        cancel() {
          this.runAll(`cancel`);
        }
        complete() {
          this.runAll(`complete`);
        }
      }),
      (Xl = class extends Yl {
        then(e, t) {
          return this.finished.finally(e).then(() => {});
        }
      }),
      (Zl = 30),
      (Ql = (e) => !isNaN(parseFloat(e))),
      ($l = { current: void 0 }),
      (eu = class {
        constructor(e, t = {}) {
          ((this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e) => {
              let t = V.now();
              if (
                (this.updatedAt !== t && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  (this.events.change?.notify(this.current), this.dependents))
              )
                for (let e of this.dependents) e.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner));
        }
        setCurrent(e) {
          ((this.current = e),
            (this.updatedAt = V.now()),
            this.canTrackVelocity === null &&
              e !== void 0 &&
              (this.canTrackVelocity = Ql(this.current)));
        }
        setPrevFrameValue(e = this.current) {
          ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(e) {
          return this.on(`change`, e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new Us());
          let n = this.events[e].add(t);
          return e === `change`
            ? () => {
                (n(),
                  R.read(() => {
                    this.events.change.getSize() || this.stop();
                  }));
              }
            : n;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          ((this.passiveEffect = e), (this.stopPassiveEffect = t));
        }
        set(e) {
          this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e);
        }
        setWithVelocity(e, t, n) {
          (this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - n));
        }
        jump(e, t = !0) {
          (this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
        dirty() {
          this.events.change?.notify(this.current);
        }
        addDependent(e) {
          ((this.dependents ||= new Set()), this.dependents.add(e));
        }
        removeDependent(e) {
          this.dependents && this.dependents.delete(e);
        }
        get() {
          return ($l.current && $l.current.push(this), this.current);
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let e = V.now();
          if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Zl)
            return 0;
          let t = Math.min(this.updatedAt - this.prevUpdatedAt, Zl);
          return Ws(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              ((this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart && this.events.animationStart.notify());
            }).then(() => {
              (this.events.animationComplete && this.events.animationComplete.notify(),
                this.clearAnimation());
            })
          );
        }
        stop() {
          (this.animation &&
            (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation());
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          (this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
      }),
      (tu = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 }),
      (nu = (e) => ({
        type: `spring`,
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10,
      })),
      (ru = { type: `keyframes`, duration: 0.8 }),
      (iu = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }),
      (au = (e, { keyframes: t }) =>
        t.length > 2 ? ru : Sl.has(e) ? (e.startsWith(`scale`) ? nu(t[1]) : tu) : iu),
      (ou = new Set([
        `when`,
        `delay`,
        `delayChildren`,
        `staggerChildren`,
        `staggerDirection`,
        `repeat`,
        `repeatType`,
        `repeatDelay`,
        `from`,
        `elapsed`,
      ])),
      (su =
        (e, t, n, r = {}, i, a) =>
        (o) => {
          let s = Qt(r, e) || {},
            c = s.delay || r.delay || 0,
            { elapsed: l = 0 } = r;
          l -= I(c);
          let u = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: `easeOut`,
            velocity: t.getVelocity(),
            ...s,
            delay: -l,
            onUpdate: (e) => {
              (t.set(e), s.onUpdate && s.onUpdate(e));
            },
            onComplete: () => {
              (o(), s.onComplete && s.onComplete());
            },
            name: e,
            motionValue: t,
            element: a ? void 0 : i,
          };
          ($t(s) || Object.assign(u, au(e, u)),
            (u.duration &&= I(u.duration)),
            (u.repeatDelay &&= I(u.repeatDelay)),
            u.from !== void 0 && (u.keyframes[0] = u.from));
          let d = !1;
          if (
            ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
              (Wt(u), u.delay === 0 && (d = !0)),
            (P.instantAnimations ||
              P.skipAnimations ||
              i?.shouldSkipAnimations ||
              s.skipAnimations) &&
              ((d = !0), Wt(u), (u.delay = 0)),
            (u.allowFlatten = !s.type && !s.ease),
            d && !a && t.get() !== void 0)
          ) {
            let e = Tt(u.keyframes, s);
            if (e !== void 0) {
              R.update(() => {
                (u.onUpdate(e), u.onComplete());
              });
              return;
            }
          }
          return s.isSync ? new dl(u) : new Jl(u);
        }),
      (cu = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u),
      (lu = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...xl])),
      (uu = (e) => Array.isArray(e)),
      (X = (e) => !!(e && e.getVelocity)),
      (du = `framerAppearId`),
      (fu = `data-` + dn(du)),
      (pu = (e) => (t) => t.test(e)),
      (mu = [xc, W, U, H, Fc, Pc, { test: (e) => e === `auto`, parse: (e) => e }]),
      (hu = (e) => mu.find(pu(e))),
      (gu = {
        rotate: H,
        pathRotation: H,
        rotateX: H,
        rotateY: H,
        rotateZ: H,
        scale: Cc,
        scaleX: Cc,
        scaleY: Cc,
        scaleZ: Cc,
        skew: H,
        skewX: H,
        skewY: H,
        distance: W,
        translateX: W,
        translateY: W,
        translateZ: W,
        x: W,
        y: W,
        z: W,
        perspective: W,
        transformPerspective: W,
        opacity: Sc,
        originX: Ic,
        originY: Ic,
        originZ: W,
      }),
      (_u = { ...xc, transform: Math.round }),
      (vu = {
        borderWidth: W,
        borderTopWidth: W,
        borderRightWidth: W,
        borderBottomWidth: W,
        borderLeftWidth: W,
        borderRadius: W,
        borderTopLeftRadius: W,
        borderTopRightRadius: W,
        borderBottomRightRadius: W,
        borderBottomLeftRadius: W,
        width: W,
        maxWidth: W,
        height: W,
        maxHeight: W,
        top: W,
        right: W,
        bottom: W,
        left: W,
        inset: W,
        insetBlock: W,
        insetBlockStart: W,
        insetBlockEnd: W,
        insetInline: W,
        insetInlineStart: W,
        insetInlineEnd: W,
        padding: W,
        paddingTop: W,
        paddingRight: W,
        paddingBottom: W,
        paddingLeft: W,
        paddingBlock: W,
        paddingBlockStart: W,
        paddingBlockEnd: W,
        paddingInline: W,
        paddingInlineStart: W,
        paddingInlineEnd: W,
        margin: W,
        marginTop: W,
        marginRight: W,
        marginBottom: W,
        marginLeft: W,
        marginBlock: W,
        marginBlockStart: W,
        marginBlockEnd: W,
        marginInline: W,
        marginInlineStart: W,
        marginInlineEnd: W,
        fontSize: W,
        backgroundPositionX: W,
        backgroundPositionY: W,
        ...gu,
        zIndex: _u,
        fillOpacity: Sc,
        strokeOpacity: Sc,
        numOctaves: _u,
      }),
      (yu = new Set([`brightness`, `contrast`, `saturate`, `opacity`])),
      (bu = /\b([a-z-]*)\(.*?\)/gu),
      (xu = {
        ...K,
        getAnimatableNone: (e) => {
          let t = e.match(bu);
          return t ? t.map(vn).join(` `) : e;
        },
      }),
      (Su = {
        ...K,
        getAnimatableNone: (e) => {
          let t = K.parse(e);
          return K.createTransformer(e)(
            t.map((e) => (typeof e == `number` ? 0 : typeof e == `object` ? { ...e, alpha: 1 } : e))
          );
        },
      }),
      (Cu = {
        ...vu,
        color: G,
        backgroundColor: G,
        outlineColor: G,
        fill: G,
        stroke: G,
        borderColor: G,
        borderTopColor: G,
        borderRightColor: G,
        borderBottomColor: G,
        borderLeftColor: G,
        filter: xu,
        WebkitFilter: xu,
        mask: Su,
        WebkitMask: Su,
      }),
      (wu = (e) => Cu[e]),
      (Tu = new Set([xu, Su])),
      (Eu = new Set([`auto`, `none`, `0`])),
      (Du = class extends Al {
        constructor(e, t, n, r, i) {
          super(e, t, n, r, i, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: n } = this;
          if (!t || !t.current) return;
          super.readKeyframes();
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if (typeof r == `string` && ((r = r.trim()), yc(r))) {
              let i = tn(r, t.current);
              (i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r));
            }
          }
          if ((this.resolveNoneKeyframes(), !lu.has(n) || e.length !== 2)) return;
          let [r, i] = e,
            a = hu(r),
            o = hu(i);
          if (He(r) !== He(i) && Y[n]) {
            this.needsMeasurement = !0;
            return;
          }
          if (a !== o)
            if (Cl(a) && Cl(o))
              for (let t = 0; t < e.length; t++) {
                let n = e[t];
                typeof n == `string` && (e[t] = parseFloat(n));
              }
            else Y[n] && (this.needsMeasurement = !0);
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            n = [];
          for (let t = 0; t < e.length; t++) (e[t] === null || bn(e[t])) && n.push(t);
          n.length && xn(e, n, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: n } = this;
          if (!e || !e.current) return;
          (n === `height` && (this.suspendedScrollY = w.pageYOffset),
            (this.measuredOrigin = Y[n](e.measureViewportBox(), w.getComputedStyle(e.current))),
            (t[0] = this.measuredOrigin));
          let r = t[t.length - 1];
          r !== void 0 && e.getValue(n, r).jump(r, !1);
        }
        measureEndState() {
          let { element: e, name: t, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let r = e.getValue(t);
          r && r.jump(this.measuredOrigin, !1);
          let i = n.length - 1,
            a = n[i];
          ((n[i] = Y[t](e.measureViewportBox(), w.getComputedStyle(e.current))),
            a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([t, n]) => {
                e.getValue(t).set(n);
              }),
            this.resolveNoneKeyframes());
        }
      }),
      (Ou = [
        `borderTopLeftRadius`,
        `borderTopRightRadius`,
        `borderBottomRightRadius`,
        `borderBottomLeftRadius`,
      ]),
      [...Ou],
      (ku = (e, t) => (t && typeof e == `number` ? t.transform(e) : e)),
      ({ schedule: Au, cancel: ju } = Be(queueMicrotask, !1)),
      (Z = { x: !1, y: !1 }),
      (Mu = (e, t) => (t ? e === t || Mu(e, t.parentElement) : !1)),
      (Nu = (e) =>
        e.pointerType === `mouse`
          ? typeof e.button != `number` || e.button <= 0
          : e.isPrimary !== !1),
      (Pu = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`])),
      (Fu = new Set([`INPUT`, `SELECT`, `TEXTAREA`])),
      (Iu = new WeakSet()),
      (Lu = (e, t) => {
        let n = e.currentTarget;
        if (!n) return;
        let r = jn(() => {
          if (Iu.has(n)) return;
          Mn(n, `down`);
          let e = jn(() => {
            Mn(n, `up`);
          });
          (n.addEventListener(`keyup`, e, t), n.addEventListener(`blur`, () => Mn(n, `cancel`), t));
        });
        (n.addEventListener(`keydown`, r, t),
          n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t));
      }),
      (Ru = new WeakSet()),
      (zu = new WeakMap()),
      (Vu = (e, t, n) => (r, i) =>
        i && i[0] ? i[0][e + `Size`] : Fn(r) && `getBBox` in r ? r.getBBox()[t] : r[n]),
      (Hu = Vu(`inline`, `width`, `offsetWidth`)),
      (Uu = Vu(`block`, `height`, `offsetHeight`)),
      (Wu = new Set()),
      (Ku = { value: null, addProjectionMetrics: null }),
      (qu = [...mu, G, K]),
      (Ju = (e) => qu.find(pu(e))),
      (Yu = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 })),
      (Xu = () => ({ x: Yu(), y: Yu() })),
      (Zu = () => ({ min: 0, max: 0 })),
      (Q = () => ({ x: Zu(), y: Zu() })),
      (Qu = new WeakMap()),
      ($u = [
        `animate`,
        `whileInView`,
        `whileFocus`,
        `whileHover`,
        `whileTap`,
        `whileDrag`,
        `exit`,
      ]),
      (ed = [`initial`, ...$u]),
      (td = { current: null }),
      (nd = { current: !1 }),
      (rd = w !== void 0),
      (id = [
        `AnimationStart`,
        `AnimationComplete`,
        `Update`,
        `BeforeLayoutMeasure`,
        `LayoutMeasure`,
        `LayoutAnimationStart`,
        `LayoutAnimationComplete`,
      ]),
      (ad = {}),
      (od = class {
        scrapeMotionValuesFromProps(e, t, n) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: n,
            reducedMotionConfig: r,
            skipAnimations: i,
            blockInitialAnimation: a,
            visualState: o,
          },
          s = {}
        ) {
          ((this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.shouldSkipAnimations = !1),
            (this.values = new Map()),
            (this.KeyframeResolver = Al),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.hasBeenMounted = !1),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let e = V.now();
              this.renderScheduledAt < e &&
                ((this.renderScheduledAt = e), R.render(this.render, !1, !0));
            }));
          let { latestValues: c, renderState: l } = o;
          ((this.latestValues = c),
            (this.baseTarget = { ...c }),
            (this.initialValues = t.initial ? { ...c } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = n),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.skipAnimationsConfig = i),
            (this.options = s),
            (this.blockInitialAnimation = !!a),
            (this.isControllingVariants = tr(t)),
            (this.isVariantNode = nr(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current)));
          let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
          for (let e in d) {
            let t = d[e];
            c[e] !== void 0 && X(t) && t.set(c[e]);
          }
        }
        mount(e) {
          if (this.hasBeenMounted)
            for (let e in this.initialValues)
              (this.values.get(e)?.jump(this.initialValues[e]),
                (this.latestValues[e] = this.initialValues[e]));
          ((this.current = e),
            Qu.set(e, this),
            this.projection && !this.projection.instance && this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            this.reducedMotionConfig === `never`
              ? (this.shouldReduceMotion = !1)
              : this.reducedMotionConfig === `always`
                ? (this.shouldReduceMotion = !0)
                : (nd.current || ir(), (this.shouldReduceMotion = td.current)),
            (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext),
            (this.hasBeenMounted = !0));
        }
        unmount() {
          (this.projection && this.projection.unmount(),
            z(this.notifyUpdate),
            z(this.render),
            this.valueSubscriptions.forEach((e) => e()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent?.removeChild(this));
          for (let e in this.events) this.events[e].clear();
          for (let e in this.features) {
            let t = this.features[e];
            t && (t.unmount(), (t.isMounted = !1));
          }
          this.current = null;
        }
        addChild(e) {
          (this.children.add(e),
            (this.enteringChildren ??= new Set()),
            this.enteringChildren.add(e));
        }
        removeChild(e) {
          (this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e));
        }
        bindToMotionValue(e, t) {
          if (
            (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
            t.accelerate && Hl.has(e) && this.current instanceof HTMLElement)
          ) {
            let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate,
              s = new Rl({
                element: this.current,
                name: e,
                keyframes: r,
                times: i,
                ease: a,
                duration: I(o),
              }),
              c = n(s);
            this.valueSubscriptions.set(e, () => {
              (c(), s.cancel());
            });
            return;
          }
          let n = Sl.has(e);
          n && this.onBindTransform && this.onBindTransform();
          let r = t.on(`change`, (t) => {
              ((this.latestValues[e] = t),
                this.props.onUpdate && R.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0),
                this.scheduleRender());
            }),
            i;
          (w !== void 0 && w.MotionCheckAppearSync && (i = w.MotionCheckAppearSync(this, e, t)),
            this.valueSubscriptions.set(e, () => {
              (r(), i && i());
            }));
        }
        sortNodePosition(e) {
          return !this.current || !this.sortInstanceNodePosition || this.type !== e.type
            ? 0
            : this.sortInstanceNodePosition(this.current, e.current);
        }
        updateFeatures() {
          let e = `animation`;
          for (e in ad) {
            let t = ad[e];
            if (!t) continue;
            let { isEnabled: n, Feature: r } = t;
            if (
              (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)),
              this.features[e])
            ) {
              let t = this.features[e];
              t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Q();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          ((e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t));
          for (let t = 0; t < id.length; t++) {
            let n = id[t];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            let r = e[`on` + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r));
          }
          ((this.prevMotionValues = rr(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue());
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          let n = this.values.get(e);
          t !== n &&
            (n && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          (t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState));
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e]) return this.props.values[e];
          let n = this.values.get(e);
          return (
            n === void 0 &&
              t !== void 0 &&
              ((n = E(t === null ? void 0 : t, { owner: this })), this.addValue(e, n)),
            n
          );
        }
        readValue(e, t) {
          let n =
            this.latestValues[e] !== void 0 || !this.current
              ? this.latestValues[e]
              : (this.getBaseTargetFromProps(this.props, e) ??
                this.readValueFromInstance(this.current, e, this.options));
          return (
            n != null &&
              (typeof n == `string` && (Rs(n) || Bs(n))
                ? (n = parseFloat(n))
                : !Ju(n) && K.test(t) && (n = yn(e, t)),
              this.setBaseTarget(e, X(n) ? n.get() : n)),
            X(n) ? n.get() : n
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          let { initial: t } = this.props,
            n;
          if (typeof t == `string` || typeof t == `object`) {
            let r = rn(this.props, t, this.presenceContext?.custom);
            r && (n = r[e]);
          }
          if (t && n !== void 0) return n;
          let r = this.getBaseTargetFromProps(this.props, e);
          return r !== void 0 && !X(r)
            ? r
            : this.initialValues[e] !== void 0 && n === void 0
              ? void 0
              : this.baseTarget[e];
        }
        on(e, t) {
          return (this.events[e] || (this.events[e] = new Us()), this.events[e].add(t));
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
        scheduleRenderMicrotask() {
          Au.render(this.render);
        }
      }),
      (sd = class extends od {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = Du));
        }
        sortInstanceNodePosition(e, t) {
          return e.compareDocumentPosition(t) & 2 ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          let n = e.style;
          return n ? n[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: n }) {
          (delete t[e], delete n[e]);
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          X(e) &&
            (this.childSubscription = e.on(`change`, (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
      }),
      (cd = class {
        constructor(e) {
          ((this.isMounted = !1), (this.node = e));
        }
        update() {}
      }),
      (ld = 0.999999999999),
      (ud = 1.0000000000001),
      (dd = {
        x: `translateX`,
        y: `translateY`,
        z: `translateZ`,
        transformPerspective: `perspective`,
      }),
      (fd = xl.length),
      (pd = {
        correct: (e, t) => {
          if (!t.target) return e;
          if (typeof e == `string`)
            if (W.test(e)) e = parseFloat(e);
            else return e;
          return `${Or(e, t.target.x)}% ${Or(e, t.target.y)}%`;
        },
      }),
      (md = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
          let r = e,
            i = K.parse(e);
          if (i.length > 5) return r;
          let a = K.createTransformer(e),
            o = typeof i[0] == `number` ? 0 : 1,
            s = n.x.scale * t.x,
            c = n.y.scale * t.y;
          ((i[0 + o] /= s), (i[1 + o] /= c));
          let l = q(s, c, 0.5);
          return (
            typeof i[2 + o] == `number` && (i[2 + o] /= l),
            typeof i[3 + o] == `number` && (i[3 + o] /= l),
            a(i)
          );
        },
      }),
      (hd = {
        borderRadius: { ...pd, applyTo: [...Ou] },
        borderTopLeftRadius: pd,
        borderTopRightRadius: pd,
        borderBottomLeftRadius: pd,
        borderBottomRightRadius: pd,
        boxShadow: md,
      }),
      (gd = class extends sd {
        constructor() {
          (super(...arguments), (this.type = `html`), (this.renderInstance = Dr));
        }
        readValueFromInstance(e, t) {
          if (Sl.has(t)) return this.projection?.isProjecting ? kt(t) : bl(e, t);
          {
            let n = Mr(e),
              r = (_c(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return typeof r == `string` ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return Cr(e, t);
        }
        build(e, t, n) {
          Er(e, t, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return jr(e, t, n);
        }
      }),
      (_d = class extends od {
        constructor() {
          (super(...arguments), (this.type = `object`));
        }
        readValueFromInstance(e, t) {
          if (Nr(t, e)) {
            let n = e[t];
            if (typeof n == `string` || typeof n == `number`) return n;
          }
        }
        getBaseTargetFromProps() {}
        removeValueFromRenderState(e, t) {
          delete t.output[e];
        }
        measureInstanceViewportBox() {
          return Q();
        }
        build(e, t) {
          Object.assign(e.output, t);
        }
        renderInstance(e, { output: t }) {
          Object.assign(e, t);
        }
        sortInstanceNodePosition() {
          return 0;
        }
      }),
      (vd = { offset: `stroke-dashoffset`, array: `stroke-dasharray` }),
      (yd = { offset: `strokeDashoffset`, array: `strokeDasharray` }),
      (bd = [`offsetDistance`, `offsetPath`, `offsetRotate`, `offsetAnchor`]),
      (xd = new Set([
        `baseFrequency`,
        `diffuseConstant`,
        `kernelMatrix`,
        `kernelUnitLength`,
        `keySplines`,
        `keyTimes`,
        `limitingConeAngle`,
        `markerHeight`,
        `markerWidth`,
        `numOctaves`,
        `targetX`,
        `targetY`,
        `surfaceScale`,
        `specularConstant`,
        `specularExponent`,
        `stdDeviation`,
        `tableValues`,
        `viewBox`,
        `gradientTransform`,
        `pathLength`,
        `startOffset`,
        `textLength`,
        `lengthAdjust`,
      ])),
      (Sd = (e) => typeof e == `string` && e.toLowerCase() === `svg`),
      (Cd = class extends sd {
        constructor() {
          (super(...arguments),
            (this.type = `svg`),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = Q));
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (Sl.has(t)) {
            let e = wu(t);
            return (e && e.default) || 0;
          }
          return ((t = xd.has(t) ? t : dn(t)), e.getAttribute(t));
        }
        scrapeMotionValuesFromProps(e, t, n) {
          return Lr(e, t, n);
        }
        build(e, t, n) {
          Fr(e, t, this.isSVGTag, n.transformTemplate, n.style);
        }
        renderInstance(e, t, n, r) {
          Ir(e, t, n, r);
        }
        mount(e) {
          ((this.isSVGTag = Sd(e.tagName)), super.mount(e));
        }
      }),
      (wd = ed.length),
      (Td = [...$u].reverse()),
      (Ed = $u.length),
      (Dd = 1e-4),
      (Od = 1 - Dd),
      (kd = 1 + Dd),
      (Ad = 0.01),
      (jd = 0 - Ad),
      (Md = 0 + Ad),
      (Nd = [`x`, `scaleX`, `originX`]),
      (Pd = [`y`, `scaleY`, `originY`]),
      (Fd = Ou.length),
      (Id = (e) => (typeof e == `string` ? parseFloat(e) : e)),
      (Ld = (e) => typeof e == `number` || W.test(e)),
      (Rd = hi(0, 0.5, nc)),
      (zd = hi(0.5, 0.95, F)),
      (Bd = (e, t) => e.depth - t.depth),
      (Vd = class {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(e) {
          (Me(this.children, e), (this.isDirty = !0));
        }
        remove(e) {
          (Ne(this.children, e), (this.isDirty = !0));
        }
        forEach(e) {
          (this.isDirty && this.children.sort(Bd), (this.isDirty = !1), this.children.forEach(e));
        }
      }),
      (Hd = class {
        constructor() {
          this.members = [];
        }
        add(e) {
          Me(this.members, e);
          for (let t = this.members.length - 1; t >= 0; t--) {
            let n = this.members[t];
            if (n === e || n === this.lead || n === this.prevLead) continue;
            let r = n.instance;
            (!r || r.isConnected === !1) && !n.snapshot && (Ne(this.members, n), n.unmount());
          }
          e.scheduleRender();
        }
        remove(e) {
          if (
            (Ne(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
            let e = this.members[t];
            if (e.isPresent !== !1 && e.instance?.isConnected !== !1) return (this.promote(e), !0);
          }
          return !1;
        }
        promote(e, t) {
          let n = this.lead;
          if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
            (n.updateSnapshot(), e.scheduleRender());
            let { layoutDependency: r } = n.options,
              { layoutDependency: i } = e.options;
            ((r === void 0 || r !== i) &&
              ((e.resumeFrom = n),
              t && (n.preserveOpacity = !0),
              n.snapshot &&
                ((e.snapshot = n.snapshot),
                (e.snapshot.latestValues = n.animationValues || n.latestValues)),
              e.root?.isUpdating && (e.isLayoutDirty = !0)),
              e.options.crossfade === !1 && n.hide());
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            (e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.());
          });
        }
        scheduleRender() {
          this.members.forEach((e) => e.instance && e.scheduleRender(!1));
        }
        removeLeadSnapshot() {
          this.lead?.snapshot && (this.lead.snapshot = void 0);
        }
      }),
      (Ud = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }),
      (Wd = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 }),
      (Gd = [``, `X`, `Y`, `Z`]),
      (Kd = 1e3),
      (qd = 0),
      (Jd = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }),
      (Yd = (e) => d !== void 0 && d.userAgent && d.userAgent.toLowerCase().includes(e)),
      (Xd = Yd(`applewebkit/`) && !Yd(`chrome/`) ? Math.round : F),
      (Zd = Si({
        attachResizeListener: (e, t) => _i(e, `resize`, t),
        measureScroll: () => ({
          x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
          y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
        }),
        checkIsScrollRoot: () => !0,
      })),
      (Qd = (e) => !e.isLayoutDirty && e.willUpdate(!1)),
      ($d = { current: void 0 }),
      (ef = Si({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
          if (!$d.current) {
            let e = new Zd({});
            (e.mount(w), e.setOptions({ layoutScroll: !0 }), ($d.current = e));
          }
          return $d.current;
        },
        resetTransform: (e, t) => {
          e.style.transform = t === void 0 ? `none` : t;
        },
        checkIsScrollRoot: (e) => w.getComputedStyle(e).position === `fixed`,
      })),
      fc.reduce((e, t) => ((e[t] = (e) => z(e)), e), {}),
      ($ = a({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: `never` })),
      (tf = class extends m {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (Cn(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            let e = t.offsetParent,
              n = (Cn(e) && e.offsetWidth) || 0,
              r = (Cn(e) && e.offsetHeight) || 0,
              i = getComputedStyle(t),
              a = this.props.sizeRef.current;
            ((a.height = parseFloat(i.height)),
              (a.width = parseFloat(i.width)),
              (a.top = t.offsetTop),
              (a.left = t.offsetLeft),
              (a.right = n - a.width - a.left),
              (a.bottom = r - a.height - a.top),
              (a.direction = i.direction));
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }),
      (nf = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: r,
        custom: i,
        presenceAffectsLayout: a,
        mode: o,
        anchorX: s,
        anchorY: u,
        root: d,
      }) => {
        let f = j(Zi),
          m = C(),
          h = l(n),
          g = l(r);
        M(() => {
          ((h.current = n), (g.current = r));
        });
        let v = !0,
          y = _(
            () => (
              (v = !1),
              {
                id: m,
                initial: t,
                isPresent: n,
                custom: i,
                onExitComplete: (e) => {
                  f.set(e, !0);
                  for (let e of f.values()) if (!e) return;
                  r && r();
                },
                register: (e) => (
                  f.set(e, !1),
                  () => {
                    (f.delete(e), !h.current && !f.size && g.current?.());
                  }
                ),
              }
            ),
            [n, f, r]
          );
        return (
          a && v && (y = { ...y }),
          _(() => {
            f.forEach((e, t) => f.set(t, !1));
          }, [n]),
          c(() => {
            !n && !f.size && r && r();
          }, [n]),
          (e = p(Xi, {
            pop: o === `popLayout`,
            isPresent: n,
            anchorX: s,
            anchorY: u,
            root: d,
            children: e,
          })),
          p(Ls.Provider, { value: y, children: e })
        );
      }),
      (rf = (e) => e.key || ``),
      (af = ({
        children: e,
        custom: t,
        initial: r = !0,
        onExitComplete: a,
        presenceAffectsLayout: o = !0,
        mode: s = `sync`,
        propagate: c = !1,
        anchorX: u = `left`,
        anchorY: d = `top`,
        root: f,
      }) => {
        let [m, h] = Qi(c),
          g = _(() => $i(e), [e]),
          v = c && !m ? [] : g.map(rf),
          y = l(!0),
          b = l(g),
          S = j(() => new Map()),
          C = l(new Set()),
          [ee, te] = i(g),
          [w, ne] = i(g);
        M(() => {
          ((y.current = !1), (b.current = g));
          for (let e = 0; e < w.length; e++) {
            let t = rf(w[e]);
            v.includes(t) ? (S.delete(t), C.current.delete(t)) : S.get(t) !== !0 && S.set(t, !1);
          }
        }, [w, v.length, v.join(`-`)]);
        let T = [];
        if (g !== ee) {
          let e = [...g];
          for (let t = 0; t < w.length; t++) {
            let n = w[t],
              r = rf(n);
            v.includes(r) || (e.splice(t, 0, n), T.push(n));
          }
          return (s === `wait` && T.length && (e = T), ne($i(e)), te(g), null);
        }
        let { forceRender: re } = n(Fs);
        return p(x, {
          children: w.map((e) => {
            let n = rf(e),
              i = c && !m ? !1 : g === w || v.includes(n);
            return p(
              nf,
              {
                isPresent: i,
                initial: !y.current || r ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: o,
                mode: s,
                root: f,
                onExitComplete: i
                  ? void 0
                  : () => {
                      if (C.current.has(n)) return;
                      if (S.has(n)) (C.current.add(n), S.set(n, !0));
                      else return;
                      let e = !0;
                      (S.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (re?.(), ne(b.current), c && h?.(), a && a()));
                    },
                anchorX: u,
                anchorY: d,
                children: e,
              },
              n
            );
          }),
        });
      }),
      (of = a(null)),
      (sf = (e) => e === !0),
      (cf = (e) => sf(e === !0) || e === `id`),
      (lf = ({ children: e, id: t, inherit: r = !0 }) => {
        let i = n(Fs),
          a = n(of),
          [o, s] = ta(),
          c = l(null),
          u = i.id || a;
        c.current === null &&
          (cf(r) && u && (t = t ? u + `-` + t : u),
          (c.current = { id: t, group: (sf(r) && i.group) || Ki() }));
        let d = _(() => ({ ...c.current, forceRender: o }), [s]);
        return p(Fs.Provider, { value: d, children: e });
      }),
      (uf = a({ strict: !1 })),
      (df = {
        animation: [
          `animate`,
          `variants`,
          `whileHover`,
          `whileTap`,
          `exit`,
          `whileInView`,
          `whileFocus`,
          `whileDrag`,
        ],
        exit: [`exit`],
        drag: [`drag`, `dragControls`],
        focus: [`whileFocus`],
        hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
        tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
        pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
        inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
        layout: [`layout`, `layoutId`],
      }),
      (ff = !1),
      (pf = new Set(
        `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(
          `.`
        )
      )),
      (mf = (e) => !aa(e)));
    try {
      oa(de(`@emotion/is-prop-valid`).default);
    } catch {}
    ((hf = a({})),
      (gf = (e) => (t, r) => {
        let i = n(hf),
          a = n(Ls),
          o = () => la(e, t, i, a);
        return r ? o() : j(o);
      }),
      (_f = a({})),
      (vf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })),
      (yf = () => ({ ...vf(), attrs: {} })),
      (bf = [
        `animate`,
        `circle`,
        `defs`,
        `desc`,
        `ellipse`,
        `g`,
        `image`,
        `line`,
        `filter`,
        `marker`,
        `mask`,
        `metadata`,
        `path`,
        `pattern`,
        `polygon`,
        `polyline`,
        `rect`,
        `stop`,
        `switch`,
        `symbol`,
        `svg`,
        `text`,
        `tspan`,
        `use`,
        `view`,
      ]),
      (xf = gf({ scrapeMotionValuesFromProps: jr, createRenderState: vf })),
      (Sf = gf({ scrapeMotionValuesFromProps: Lr, createRenderState: yf })),
      (Cf = Symbol.for(`motionComponentSymbol`)),
      (wf = class extends cd {
        constructor(e) {
          (super(e), (e.animationState ||= Vr(e)));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          $n(e) && (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {
          (this.node.animationState.reset(), this.unmountControls?.());
        }
      }),
      (Tf = 0),
      (Ef = class extends cd {
        constructor() {
          (super(...arguments), (this.id = Tf++), (this.isExitComplete = !1));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          if (e && n === !1) {
            if (this.isExitComplete) {
              let { initial: e, custom: t } = this.node.getProps();
              if (typeof e == `string` || (typeof e == `object` && e && !Array.isArray(e))) {
                let n = an(this.node, e, t);
                if (n) {
                  let { transition: e, transitionEnd: t, ...r } = n;
                  for (let e in r) this.node.getValue(e)?.jump(r[e]);
                }
              }
              (this.node.animationState.reset(), this.node.animationState.animateChanges());
            } else this.node.animationState.setActive(`exit`, !1);
            this.isExitComplete = !1;
            return;
          }
          let r = this.node.animationState.setActive(`exit`, !e);
          t &&
            !e &&
            r.then(() => {
              ((this.isExitComplete = !0), t(this.id));
            });
        }
        mount() {
          let { register: e, onExitComplete: t } = this.node.presenceContext || {};
          (t && t(this.id), e && (this.unmount = e(this.id)));
        }
        unmount() {}
      }),
      (Df = { animation: { Feature: wf }, exit: { Feature: Ef } }),
      (Of = (e) => (t) => Nu(t) && e(t, ja(t))),
      (kf = (e, t) => Math.abs(e - t)),
      (Af = (e, t) => ((t.isSVG ?? ya(e)) ? new Cd(t) : new gd(t, { allowProjection: e !== u }))),
      (jf = ({ current: e }) => (e ? e.ownerDocument.defaultView : null)),
      (Mf = new Set([`auto`, `scroll`])),
      (Nf = class {
        constructor(
          e,
          t,
          {
            transformPagePoint: n,
            contextWindow: r = w,
            dragSnapToOrigin: i = !1,
            distanceThreshold: a = 3,
            element: o,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.lastRawMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = w),
            (this.scrollPositions = new Map()),
            (this.removeScrollListeners = null),
            (this.onElementScroll = (e) => {
              this.handleScroll(e.target);
            }),
            (this.onWindowScroll = () => {
              this.handleScroll(w);
            }),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              this.lastRawMoveEventInfo &&
                (this.lastMoveEventInfo = Pa(this.lastRawMoveEventInfo, this.transformPagePoint));
              let e = Ia(this.lastMoveEventInfo, this.history),
                t = this.startEvent !== null,
                n = Na(e.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
              if (!t && !n) return;
              let { point: r } = e,
                { timestamp: i } = B;
              this.history.push({ ...r, timestamp: i });
              let { onStart: a, onMove: o } = this.handlers;
              (t || (a && a(this.lastMoveEvent, e), (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, e));
            }),
            (this.handlePointerMove = (e, t) => {
              ((this.lastMoveEvent = e),
                (this.lastRawMoveEventInfo = t),
                (this.lastMoveEventInfo = Pa(t, this.transformPagePoint)),
                R.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
              if (
                ((this.dragSnapToOrigin || !this.startEvent) && i && i(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let a = Ia(
                e.type === `pointercancel`
                  ? this.lastMoveEventInfo
                  : Pa(t, this.transformPagePoint),
                this.history
              );
              (this.startEvent && n && n(e, a), r && r(e, a));
            }),
            !Nu(e))
          )
            return;
          ((this.dragSnapToOrigin = i),
            (this.handlers = t),
            (this.transformPagePoint = n),
            (this.distanceThreshold = a),
            (this.contextWindow = r || w));
          let s = Pa(ja(e), this.transformPagePoint),
            { point: c } = s,
            { timestamp: l } = B;
          this.history = [{ ...c, timestamp: l }];
          let { onSessionStart: u } = t;
          u && u(e, Ia(s, this.history));
          let d = { passive: !0, capture: !0 };
          ((this.removeListeners = Vs(
            Ma(this.contextWindow, `pointermove`, this.handlePointerMove, d),
            Ma(this.contextWindow, `pointerup`, this.handlePointerUp, d),
            Ma(this.contextWindow, `pointercancel`, this.handlePointerUp, d)
          )),
            o && this.startScrollTracking(o));
        }
        startScrollTracking(e) {
          let t = e.parentElement;
          for (; t;) {
            let e = getComputedStyle(t);
            ((Mf.has(e.overflowX) || Mf.has(e.overflowY)) &&
              this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
              (t = t.parentElement));
          }
          (this.scrollPositions.set(w, { x: w.scrollX, y: w.scrollY }),
            w.addEventListener(`scroll`, this.onElementScroll, { capture: !0 }),
            w.addEventListener(`scroll`, this.onWindowScroll),
            (this.removeScrollListeners = () => {
              (w.removeEventListener(`scroll`, this.onElementScroll, { capture: !0 }),
                w.removeEventListener(`scroll`, this.onWindowScroll));
            }));
        }
        handleScroll(e) {
          let t = this.scrollPositions.get(e);
          if (!t) return;
          let n = e === w,
            r = n ? { x: w.scrollX, y: w.scrollY } : { x: e.scrollLeft, y: e.scrollTop },
            i = { x: r.x - t.x, y: r.y - t.y };
          (i.x === 0 && i.y === 0) ||
            (n
              ? this.lastMoveEventInfo &&
                ((this.lastMoveEventInfo.point.x += i.x), (this.lastMoveEventInfo.point.y += i.y))
              : this.history.length > 0 && ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
            this.scrollPositions.set(e, r),
            R.update(this.updatePoint, !0));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          (this.removeListeners && this.removeListeners(),
            this.removeScrollListeners && this.removeScrollListeners(),
            this.scrollPositions.clear(),
            z(this.updatePoint));
        }
      }),
      (Pf = 0.35),
      (Ff = new WeakMap()),
      (If = class {
        constructor(e) {
          ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = Q()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = e));
        }
        start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && r.isPresent === !1) return;
          let i = (e) => {
              (t && this.snapToCursor(ja(e).point), this.stopAnimation());
            },
            a = (e, t) => {
              let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
              if (
                n &&
                !r &&
                (this.openDragLock && this.openDragLock(),
                (this.openDragLock = Tn(n)),
                !this.openDragLock)
              )
                return;
              ((this.latestPointerEvent = e),
                (this.latestPanInfo = t),
                (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                A((e) => {
                  let t = this.getAxisMotionValue(e).get() || 0;
                  if (U.test(t)) {
                    let { projection: n } = this.visualElement;
                    if (n && n.layout) {
                      let r = n.layout.layoutBox[e];
                      r && (t = k(r) * (parseFloat(t) / 100));
                    }
                  }
                  this.originPoint[e] = t;
                }),
                i && R.update(() => i(e, t), !1, !0),
                un(this.visualElement, `transform`));
              let { animationState: a } = this.visualElement;
              a && a.setActive(`whileDrag`, !0);
            },
            o = (e, t) => {
              ((this.latestPointerEvent = e), (this.latestPanInfo = t));
              let {
                dragPropagation: n,
                dragDirectionLock: r,
                onDirectionLock: i,
                onDrag: a,
              } = this.getProps();
              if (!n && !this.openDragLock) return;
              let { offset: o } = t;
              if (r && this.currentDirection === null) {
                ((this.currentDirection = $a(o)),
                  this.currentDirection !== null && i && i(this.currentDirection));
                return;
              }
              (this.updateAxis(`x`, t.point, o),
                this.updateAxis(`y`, t.point, o),
                this.visualElement.render(),
                a && R.update(() => a(e, t), !1, !0));
            },
            s = (e, t) => {
              ((this.latestPointerEvent = e),
                (this.latestPanInfo = t),
                this.stop(e, t),
                (this.latestPointerEvent = null),
                (this.latestPanInfo = null));
            },
            c = () => {
              let { dragSnapToOrigin: e } = this.getProps();
              (e || this.constraints) && this.startAnimation({ x: 0, y: 0 });
            },
            { dragSnapToOrigin: l } = this.getProps();
          this.panSession = new Nf(
            e,
            { onSessionStart: i, onStart: a, onMove: o, onSessionEnd: s, resumeAnimation: c },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: l,
              distanceThreshold: n,
              contextWindow: jf(this.visualElement),
              element: this.visualElement.current,
            }
          );
        }
        stop(e, t) {
          let n = e || this.latestPointerEvent,
            r = t || this.latestPanInfo,
            i = this.isDragging;
          if ((this.cancel(), !i || !r || !n)) return;
          let { velocity: a } = r;
          this.startAnimation(a);
          let { onDragEnd: o } = this.getProps();
          o && R.postRender(() => o(n, r));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          (e && (e.isAnimationBlocked = !1), this.endPanSession());
          let { dragPropagation: n } = this.getProps();
          (!n && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
            t && t.setActive(`whileDrag`, !1));
        }
        endPanSession() {
          (this.panSession && this.panSession.end(), (this.panSession = void 0));
        }
        updateAxis(e, t, n) {
          let { drag: r } = this.getProps();
          if (!n || !Qa(e, r, this.currentDirection)) return;
          let i = this.getAxisMotionValue(e),
            a = this.originPoint[e] + n[e];
          (this.constraints &&
            this.constraints[e] &&
            (a = Ba(a, this.constraints[e], this.elastic[e])),
            i.set(a));
        }
        resolveConstraints() {
          let { dragConstraints: e, dragElastic: t } = this.getProps(),
            n =
              this.visualElement.projection && !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            r = this.constraints;
          (e && Sa(e)
            ? (this.constraints ||= this.resolveRefConstraints())
            : e && n
              ? (this.constraints = Ha(n.layoutBox, e))
              : (this.constraints = !1),
            (this.elastic = qa(t)),
            r !== this.constraints &&
              !Sa(e) &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              A((e) => {
                this.constraints !== !1 &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = Ka(n.layoutBox[e], this.constraints[e]));
              }));
        }
        resolveRefConstraints() {
          let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
          if (!e || !Sa(e)) return !1;
          let n = e.current,
            { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          r.root && ((r.root.scroll = void 0), r.root.updateScroll());
          let i = wr(n, r.root, this.visualElement.getTransformPagePoint()),
            a = Wa(r.layout.layoutBox, i);
          if (t) {
            let e = t(cr(a));
            ((this.hasMutatedConstraints = !!e), e && (a = sr(e)));
          }
          return a;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: n,
              dragElastic: r,
              dragTransition: i,
              dragSnapToOrigin: a,
              onDragTransitionEnd: o,
            } = this.getProps(),
            s = this.constraints || {},
            c = A((o) => {
              if (!Qa(o, t, this.currentDirection)) return;
              let c = (s && s[o]) || {};
              (a === !0 || a === o) && (c = { min: 0, max: 0 });
              let l = r ? 200 : 1e6,
                u = r ? 40 : 1e7,
                d = {
                  type: `inertia`,
                  velocity: n ? e[o] : 0,
                  bounceStiffness: l,
                  bounceDamping: u,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                  ...i,
                  ...c,
                };
              return this.startAxisValueAnimation(o, d);
            });
          return Promise.all(c).then(o);
        }
        startAxisValueAnimation(e, t) {
          let n = this.getAxisMotionValue(e);
          return (un(this.visualElement, e), n.start(su(e, n, 0, t, this.visualElement, !1)));
        }
        stopAnimation() {
          A((e) => this.getAxisMotionValue(e).stop());
        }
        getAxisMotionValue(e) {
          let t = `_drag${e.toUpperCase()}`;
          return (
            this.visualElement.getProps()[t] ||
            this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0)
          );
        }
        snapToCursor(e) {
          A((t) => {
            let { drag: n } = this.getProps();
            if (!Qa(t, n, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              i = this.getAxisMotionValue(t);
            if (r && r.layout) {
              let { min: n, max: a } = r.layout.layoutBox[t],
                o = i.get() || 0;
              i.set(e[t] - q(n, a, 0.5) + o);
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!Sa(t) || !n || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          A((e) => {
            let t = this.getAxisMotionValue(e);
            if (t && this.constraints !== !1) {
              let n = t.get();
              r[e] = Ga({ min: n, max: n }, this.constraints[e]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = i ? i({}, ``) : `none`),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            (this.constraints = !1),
            this.resolveConstraints(),
            A((t) => {
              if (!Qa(t, e, null)) return;
              let n = this.getAxisMotionValue(t),
                { min: i, max: a } = this.constraints[t];
              n.set(q(i, a, r[t]));
            }),
            this.visualElement.render());
        }
        addListeners() {
          if (!this.visualElement.current) return;
          Ff.set(this.visualElement, this);
          let e = this.visualElement.current,
            t = Ma(e, `pointerdown`, (t) => {
              let { drag: n, dragListener: r = !0 } = this.getProps(),
                i = t.target,
                a = i !== e && An(i);
              n && r && !a && this.start(t);
            }),
            n,
            r = () => {
              let { dragConstraints: t } = this.getProps();
              Sa(t) &&
                t.current &&
                ((this.constraints = this.resolveRefConstraints()),
                (n ||= Za(e, t.current, () => this.scalePositionWithinConstraints())));
            },
            { projection: i } = this.visualElement,
            a = i.addEventListener(`measure`, r);
          (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), R.read(r));
          let o = _i(w, `resize`, () => this.scalePositionWithinConstraints()),
            s = i.addEventListener(`didUpdate`, ({ delta: e, hasLayoutChanged: t }) => {
              this.isDragging &&
                t &&
                (A((t) => {
                  let n = this.getAxisMotionValue(t);
                  n && ((this.originPoint[t] += e[t].translate), n.set(n.get() + e[t].translate));
                }),
                this.visualElement.render());
            });
          return () => {
            (o(), t(), a(), s && s(), n && n());
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: a = Pf,
              dragMomentum: o = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: a,
            dragMomentum: o,
          };
        }
      }),
      (Lf = class extends cd {
        constructor(e) {
          (super(e),
            (this.removeGroupControls = F),
            (this.removeListeners = F),
            (this.controls = new If(e)));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          (e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || F));
        }
        update() {
          let { dragControls: e } = this.node.getProps(),
            { dragControls: t } = this.node.prevProps || {};
          e !== t &&
            (this.removeGroupControls(),
            e && (this.removeGroupControls = e.subscribe(this.controls)));
        }
        unmount() {
          (this.removeGroupControls(),
            this.removeListeners(),
            this.controls.isDragging || this.controls.endPanSession());
        }
      }),
      (Rf = (e) => (t, n) => {
        e && R.update(() => e(t, n), !1, !0);
      }),
      (zf = class extends cd {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = F));
        }
        onPointerDown(e) {
          this.session = new Nf(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: jf(this.node),
          });
        }
        createPanHandlers() {
          let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
          return {
            onSessionStart: Rf(e),
            onStart: Rf(t),
            onMove: Rf(n),
            onEnd: (e, t) => {
              (delete this.session, r && R.postRender(() => r(e, t)));
            },
          };
        }
        mount() {
          this.removePointerDownListener = Ma(this.node.current, `pointerdown`, (e) =>
            this.onPointerDown(e)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          (this.removePointerDownListener(), this.session && this.session.end());
        }
      }),
      (Bf = !1),
      (Vf = class extends m {
        componentDidMount() {
          let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props,
            { projection: i } = e;
          (i &&
            (t.group && t.group.add(i),
            n && n.register && r && n.register(i),
            Bf && i.root.didUpdate(),
            i.addEventListener(`animationComplete`, () => {
              this.safeToRemove();
            }),
            i.setOptions({
              ...i.options,
              layoutDependency: this.props.layoutDependency,
              onExitComplete: () => this.safeToRemove(),
            })),
            (Ud.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(e) {
          let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props,
            { projection: a } = n;
          return a
            ? ((a.isPresent = i),
              e.layoutDependency !== t && a.setOptions({ ...a.options, layoutDependency: t }),
              (Bf = !0),
              r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i
                ? a.willUpdate()
                : this.safeToRemove(),
              e.isPresent !== i &&
                (i
                  ? a.promote()
                  : a.relegate() ||
                    R.postRender(() => {
                      let e = a.getStack();
                      (!e || !e.members.length) && this.safeToRemove();
                    })),
              null)
            : null;
        }
        componentDidUpdate() {
          let { visualElement: e, layoutAnchor: t } = this.props,
            { projection: n } = e;
          n &&
            ((n.options.layoutAnchor = t),
            n.root.didUpdate(),
            Au.postRender(() => {
              !n.currentAnimation && n.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props,
            { projection: r } = e;
          ((Bf = !0),
            r &&
              (r.scheduleCheckAfterUnmount(),
              t && t.group && t.group.remove(r),
              n && n.deregister && n.deregister(r)));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }),
      (Hf = { pan: { Feature: zf }, drag: { Feature: Lf, ProjectionNode: ef, MeasureLayout: eo } }),
      (Uf = class extends cd {
        mount() {
          let { current: e } = this.node;
          e &&
            (this.unmount = On(
              e,
              (e, t) => (to(this.node, t, `Start`), (e) => to(this.node, e, `End`))
            ));
        }
        unmount() {}
      }),
      (Wf = class extends cd {
        constructor() {
          (super(...arguments), (this.isActive = !1));
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(`:focus-visible`);
          } catch {
            e = !0;
          }
          !e ||
            !this.node.animationState ||
            (this.node.animationState.setActive(`whileFocus`, !0), (this.isActive = !0));
        }
        onBlur() {
          !this.isActive ||
            !this.node.animationState ||
            (this.node.animationState.setActive(`whileFocus`, !1), (this.isActive = !1));
        }
        mount() {
          this.unmount = Vs(
            _i(this.node.current, `focus`, () => this.onFocus()),
            _i(this.node.current, `blur`, () => this.onBlur())
          );
        }
        unmount() {}
      }),
      (Gf = class extends cd {
        mount() {
          let { current: e } = this.node;
          if (!e) return;
          let { globalTapTarget: t, propagate: n } = this.node.props;
          this.unmount = Pn(
            e,
            (e, t) => (
              no(this.node, t, `Start`),
              (e, { success: t }) => no(this.node, e, t ? `End` : `Cancel`)
            ),
            { useGlobalTarget: t, stopPropagation: n?.tap === !1 }
          );
        }
        unmount() {}
      }),
      (Kf = new WeakMap()),
      (qf = new WeakMap()),
      (Jf = (e) => {
        let t = Kf.get(e.target);
        t && t(e);
      }),
      (Yf = (e) => {
        e.forEach(Jf);
      }),
      (Xf = { some: 0, all: 1 }),
      (Zf = class extends cd {
        constructor() {
          (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
        }
        startObserver() {
          this.stopObserver?.();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: n, amount: r = `some`, once: i } = e,
            a = {
              root: t ? t.current : void 0,
              rootMargin: n,
              threshold: typeof r == `number` ? r : Xf[r],
            },
            o = (e) => {
              let { isIntersecting: t } = e;
              if (this.isInView === t || ((this.isInView = t), i && !t && this.hasEnteredView))
                return;
              (t && (this.hasEnteredView = !0),
                this.node.animationState && this.node.animationState.setActive(`whileInView`, t));
              let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
                a = t ? n : r;
              a && a(e);
            };
          this.stopObserver = io(this.node.current, a, o);
        }
        mount() {
          this.startObserver();
        }
        update() {
          if (typeof IntersectionObserver > `u`) return;
          let { props: e, prevProps: t } = this.node;
          [`amount`, `margin`, `root`].some(ao(e, t)) && this.startObserver();
        }
        unmount() {
          (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
        }
      }),
      (Qf = {
        inView: { Feature: Zf },
        tap: { Feature: Gf },
        focus: { Feature: Wf },
        hover: { Feature: Uf },
      }),
      ($f = { layout: { ProjectionNode: ef, MeasureLayout: eo } }),
      (ep = Aa({ ...Df, ...Qf, ...Hf, ...$f }, Af)),
      (tp = { renderer: Af, ...Df, ...Qf }),
      { ...tp, ...Hf, ...$f },
      { ...Df },
      (np = 50),
      (rp = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
      })),
      (ip = () => ({ time: 0, x: rp(), y: rp() })),
      (ap = { x: { length: `Width`, position: `Left` }, y: { length: `Height`, position: `Top` } }),
      (op = { start: 0, center: 0.5, end: 1 }),
      (sp = [0, 0]),
      (cp = {
        Enter: [
          [0, 1],
          [1, 1],
        ],
        Exit: [
          [0, 0],
          [1, 0],
        ],
        Any: [
          [1, 0],
          [0, 1],
        ],
        All: [
          [0, 0],
          [1, 1],
        ],
      }),
      (lp = { x: 0, y: 0 }),
      (up = new WeakMap()),
      (dp = new WeakMap()),
      (fp = new WeakMap()),
      (pp = new WeakMap()),
      (mp = new WeakMap()),
      (hp = (e) => (e === document.scrollingElement ? w : e)),
      (gp = [
        [cp.Enter, `entry`],
        [cp.Exit, `exit`],
        [cp.Any, `cover`],
        [cp.All, `contain`],
      ]),
      (_p = { start: 0, end: 1 }),
      (vp = new Map()),
      (yp = () => ({ scrollX: E(0), scrollY: E(0), scrollXProgress: E(0), scrollYProgress: E(0) })),
      (bp = (e) => (e ? !e.current : !1)),
      (xp = class extends eu {
        constructor() {
          (super(...arguments), (this.isEnabled = !1));
        }
        add(e) {
          (Sl.has(e) || Hl.has(e)) && ((this.isEnabled = !0), this.update());
        }
        update() {
          this.set(this.isEnabled ? `transform` : `auto`);
        }
      }),
      (Sp = `easeInOut`),
      (Cp = 20),
      (wp = (e) => typeof e == `number`),
      (Tp = (e) => e.every(wp)),
      (Ep = ms()),
      (Dp = hs),
      (Op = { some: 0, all: 1 }),
      (kp = () => ({})),
      gf({ scrapeMotionValuesFromProps: kp, createRenderState: kp }),
      (Ap = {}),
      pe(Ap, { Group: () => Mp, Item: () => zp }),
      (jp = a(null)),
      (Mp = g(Es)),
      (Np = 50),
      (Pp = 25),
      (Fp = new Set([`auto`, `scroll`])),
      (Ip = new WeakMap()),
      (Lp = new WeakMap()),
      (Rp = null),
      (zp = g(Ps)));
  }),
  Vp = t(() => {
    Bp();
  });
export {
  Bo as $,
  Hn as A,
  Yi as B,
  aa as C,
  F as D,
  E,
  qn as F,
  No as G,
  vs as H,
  Qn as I,
  Qi as J,
  oo as K,
  _s as L,
  ko as M,
  ht as N,
  fu as O,
  Kn as P,
  Mo as Q,
  Dp as R,
  X as S,
  ep as T,
  Cs as U,
  Ss as V,
  M as W,
  Wo as X,
  Uo as Y,
  bs as Z,
  On as _,
  $ as a,
  fe as at,
  yt as b,
  Ls as c,
  ge as ct,
  kr as d,
  he as dt,
  Io as et,
  Ep as f,
  ke as ft,
  R as g,
  N as h,
  ca as i,
  Ae as it,
  yi as j,
  Pn as k,
  _f as l,
  Ce as lt,
  z as m,
  af as n,
  Qu as nt,
  P as o,
  Se as ot,
  Dt as p,
  je as pt,
  ws as q,
  lf as r,
  Gs as rt,
  eu as s,
  be as st,
  Vp as t,
  Ho as tt,
  xp as u,
  xe as ut,
  xs as v,
  st as w,
  gs as x,
  Bp as y,
  Vo as z,
};
//# sourceMappingURL=motion.BtOE26Nw.mjs.map
