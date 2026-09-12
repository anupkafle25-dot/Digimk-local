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
  _ as u,
  a as d,
  c as f,
  g as p,
  h as m,
  i as h,
  j as g,
  l as _,
  m as v,
  n as ee,
  o as y,
  p as b,
  r as x,
  s as te,
  t as ne,
  u as S,
  v as re,
  x as C,
  z as w,
} from "./react.C1Oj3OU0.mjs";
import { T, a as E, r as ie, t as ae } from "./motion.BtOE26Nw.mjs";
import {
  $ as oe,
  A as D,
  C as O,
  D as k,
  E as se,
  Et as ce,
  F as le,
  Ft as A,
  H as j,
  I as M,
  It as ue,
  J as de,
  Lt as fe,
  Mt as pe,
  N,
  Nt as me,
  O as he,
  Ot as ge,
  Pt as _e,
  S as ve,
  U as P,
  W as ye,
  X as F,
  Y as be,
  Z as I,
  _ as xe,
  a as Se,
  b as Ce,
  c as we,
  ct as Te,
  d as Ee,
  dt as De,
  f as Oe,
  ft as ke,
  gt as Ae,
  h as L,
  ht as je,
  i as R,
  it as Me,
  k as Ne,
  kt as Pe,
  l as Fe,
  m as Ie,
  mt as Le,
  nt as Re,
  o as z,
  s as ze,
  st as Be,
  u as Ve,
  ut as He,
  v as Ue,
  vt as We,
  w as B,
  xt as V,
} from "./framer.BpPKSFgL.mjs";
import {
  C as Ge,
  E as Ke,
  S as qe,
  T as H,
  b as Je,
  w as Ye,
  x as Xe,
  y as Ze,
} from "./shared-lib.COUt92RR.mjs";
import { i as Qe, n as $e, r as et, t as tt } from "./b1FQusCg6.kwN3SKKr.mjs";
import { i as nt, n as rt, r as it, t as at } from "./F2j_sq2oH.CZMOpWe4.mjs";
import { i as ot, n as st, r as ct, t as lt } from "./I8nYi38vp.7DcFJoue.mjs";
import { i as ut, n as dt, r as ft, t as pt } from "./JIvkOqTK6.CPpItXgN.mjs";
import { i as mt, n as ht, r as gt, t as _t } from "./DJ_jb3woG.DiWJITiJ.mjs";
import { n as vt, t as yt } from "./XZ2Inc0W0.Clvcqdla.mjs";
function bt(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
var xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt = e(() => {
    (i(),
      (xt = class {
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.lerp)
            ((this.value = (function (e, t, n, r) {
              return (function (e, t, n) {
                return (1 - n) * e + n * t;
              })(e, t, 1 - Math.exp(-n * r));
            })(this.value, this.to, 60 * this.lerp, e)),
              Math.round(this.value) === this.to && ((this.value = this.to), (t = !0)));
          else {
            this.currentTime += e;
            let n = bt(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r;
          }
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          e,
          t,
          { lerp: n = 0.1, duration: r = 1, easing: i = (e) => e, onStart: a, onUpdate: o }
        ) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (St = class {
        constructor({ wrapper: e, content: t, autoResize: n = !0, debounce: r = 250 } = {}) {
          ((this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = (function (e, t) {
                let n;
                return function () {
                  let r = arguments,
                    i = this;
                  (clearTimeout(n),
                    (n = setTimeout(function () {
                      e.apply(i, r);
                    }, t)));
                };
              })(this.resize, r)),
              this.wrapper === w
                ? w.addEventListener(`resize`, this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            w.removeEventListener(`resize`, this.debouncedResize, !1));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper === w
            ? ((this.width = w.innerWidth), (this.height = w.innerHeight))
            : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper === w
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      }),
      (Ct = class {
        constructor() {
          this.events = {};
        }
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e](...t);
        }
        on(e, t) {
          return (
            this.events[e]?.push(t) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (wt = 100 / 6),
      (Tt = class {
        constructor(e, { wheelMultiplier: t = 1, touchMultiplier: n = 1 }) {
          ((this.element = e),
            (this.wheelMultiplier = t),
            (this.touchMultiplier = n),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new Ct()),
            w.addEventListener(`resize`, this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, { passive: !1 }),
            this.element.addEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
            this.element.addEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
            this.element.addEventListener(`touchend`, this.onTouchEnd, { passive: !1 }));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            w.removeEventListener(`resize`, this.onWindowResize, !1),
            this.element.removeEventListener(`wheel`, this.onWheel, { passive: !1 }),
            this.element.removeEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, { passive: !1 }));
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
            r = -(t - this.touchStart.x) * this.touchMultiplier,
            i = -(n - this.touchStart.y) * this.touchMultiplier;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
        };
        onTouchEnd = (e) => {
          this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e;
          ((t *= r === 1 ? wt : r === 2 ? this.windowWidth : 1),
            (n *= r === 1 ? wt : r === 2 ? this.windowHeight : 1),
            (t *= this.wheelMultiplier),
            (n *= this.wheelMultiplier),
            this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
        };
        onWindowResize = () => {
          ((this.windowWidth = w.innerWidth), (this.windowHeight = w.innerHeight));
        };
      }),
      (Et = class {
        constructor({
          wrapper: e = w,
          content: t = document.documentElement,
          wheelEventsTarget: n = e,
          eventsTarget: r = n,
          smoothWheel: i = !0,
          syncTouch: a = !1,
          syncTouchLerp: o = 0.075,
          touchInertiaMultiplier: s = 35,
          duration: c,
          easing: l = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
          lerp: u = !c && 0.1,
          infinite: d = !1,
          orientation: f = `vertical`,
          gestureOrientation: p = `vertical`,
          touchMultiplier: m = 1,
          wheelMultiplier: h = 1,
          autoResize: g = !0,
          prevent: _ = !1,
          __experimental__naiveDimensions: v = !1,
        } = {}) {
          ((this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.onVirtualScroll = ({ deltaX: e, deltaY: t, event: n }) => {
              if (n.ctrlKey) return;
              let r = n.type.includes(`touch`),
                i = n.type.includes(`wheel`);
              if (
                ((this.isTouching = n.type === `touchstart` || n.type === `touchmove`),
                this.options.syncTouch &&
                  r &&
                  n.type === `touchstart` &&
                  !this.isStopped &&
                  !this.isLocked)
              )
                return void this.reset();
              let a = e === 0 && t === 0,
                o =
                  (this.options.gestureOrientation === `vertical` && t === 0) ||
                  (this.options.gestureOrientation === `horizontal` && e === 0);
              if (a || o) return;
              let s = n.composedPath();
              s = s.slice(0, s.indexOf(this.rootElement));
              let c = this.options.prevent;
              if (
                s.find(
                  (e) =>
                    (typeof c == `function` ? c?.(e) : c) ||
                    e.hasAttribute?.call(e, `data-lenis-prevent`) ||
                    (r && e.hasAttribute?.call(e, `data-lenis-prevent-touch`)) ||
                    (i && e.hasAttribute?.call(e, `data-lenis-prevent-wheel`)) ||
                    (e.classList?.contains(`lenis`) && !e.classList?.contains(`lenis-stopped`))
                )
              )
                return;
              if (this.isStopped || this.isLocked) return void n.preventDefault();
              if (!((this.options.syncTouch && r) || (this.options.smoothWheel && i)))
                return ((this.isScrolling = `native`), void this.animate.stop());
              n.preventDefault();
              let l = t;
              this.options.gestureOrientation === `both`
                ? (l = Math.abs(t) > Math.abs(e) ? t : e)
                : this.options.gestureOrientation === `horizontal` && (l = e);
              let u = r && this.options.syncTouch,
                d = r && n.type === `touchend` && Math.abs(l) > 5;
              (d && (l = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + l,
                  Object.assign(
                    { programmatic: !1 },
                    u
                      ? { lerp: d ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        }
                  )
                ));
            }),
            (this.onNativeScroll = () => {
              if (
                (clearTimeout(this.__resetVelocityTimeout),
                delete this.__resetVelocityTimeout,
                this.__preventNextNativeScrollEvent)
              )
                delete this.__preventNextNativeScrollEvent;
              else if (!1 === this.isScrolling || this.isScrolling === `native`) {
                let e = this.animatedScroll;
                ((this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - e),
                  (this.direction = Math.sign(this.animatedScroll - e)),
                  (this.isScrolling = `native`),
                  this.emit(),
                  this.velocity !== 0 &&
                    (this.__resetVelocityTimeout = setTimeout(() => {
                      ((this.lastVelocity = this.velocity),
                        (this.velocity = 0),
                        (this.isScrolling = !1),
                        this.emit());
                    }, 400)));
              }
            }),
            (w.lenisVersion = `1.1.2`),
            (e !== document.documentElement && e !== document.body) || (e = w),
            (this.options = {
              wrapper: e,
              content: t,
              wheelEventsTarget: n,
              eventsTarget: r,
              smoothWheel: i,
              syncTouch: a,
              syncTouchLerp: o,
              touchInertiaMultiplier: s,
              duration: c,
              easing: l,
              lerp: u,
              infinite: d,
              gestureOrientation: p,
              orientation: f,
              touchMultiplier: m,
              wheelMultiplier: h,
              autoResize: g,
              prevent: _,
              __experimental__naiveDimensions: v,
            }),
            (this.animate = new xt()),
            (this.emitter = new Ct()),
            (this.dimensions = new St({ wrapper: e, content: t, autoResize: g })),
            this.updateClassName(),
            (this.userData = {}),
            (this.time = 0),
            (this.velocity = this.lastVelocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, !1),
            (this.virtualScroll = new Tt(r, { touchMultiplier: m, wheelMultiplier: h })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, !1),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName());
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        setScroll(e) {
          this.isHorizontal ? (this.rootElement.scrollLeft = e) : (this.rootElement.scrollTop = e);
        }
        resize() {
          this.dimensions.resize();
        }
        emit({ userData: e = {} } = {}) {
          ((this.userData = e), this.emitter.emit(`scroll`, this), (this.userData = {}));
        }
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped || ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(e) {
          let t = e - (this.time || e);
          ((this.time = e), this.animate.advance(0.001 * t));
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            duration: i = this.options.duration,
            easing: a = this.options.easing,
            lerp: o = !i && this.options.lerp,
            onStart: s,
            onComplete: c,
            force: l = !1,
            programmatic: u = !0,
            userData: d = {},
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || l) {
            if ([`top`, `left`, `start`].includes(e)) e = 0;
            else if ([`bottom`, `right`, `end`].includes(e)) e = this.limit;
            else {
              let n;
              if (
                (typeof e == `string`
                  ? (n = document.querySelector(e))
                  : e != null && e.nodeType && (n = e),
                n)
              ) {
                if (this.options.wrapper !== w) {
                  let e = this.options.wrapper.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let r = n.getBoundingClientRect();
                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
              }
            }
            if (typeof e == `number`) {
              if (
                ((e += t),
                (e = Math.round(e)),
                this.options.infinite
                  ? u && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (e = bt(0, e, this.limit)),
                n)
              )
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  void (c == null || c(this))
                );
              e !== this.targetScroll &&
                (u || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: i,
                  easing: a,
                  lerp: o,
                  onStart: () => {
                    (r && (this.isLocked = !0), (this.isScrolling = `smooth`), s?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      u && (this.targetScroll = e),
                      t || this.emit({ userData: d }),
                      t &&
                        (this.reset(),
                        this.emit({ userData: d }),
                        c?.(this),
                        (this.__preventNextNativeScrollEvent = !0)));
                  },
                }));
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === w ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? (function (e, t) {
                return ((e % t) + t) % t;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(e) {
          this.__isScrolling !== e && ((this.__isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(e) {
          this.__isStopped !== e && ((this.__isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(e) {
          this.__isLocked !== e && ((this.__isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, ``)
            .trim();
        }
      }));
  });
function Ot(e) {
  let { intensity: t } = e,
    n = s(null);
  return (
    o(() => {
      if (n.current)
        try {
          n.current.scrollTo(0, { immediate: !0 });
        } catch (e) {
          console.error(`Error scrolling to top:`, e);
        }
    }, [n]),
    o(() => {
      let e = () => {
        try {
          let e = document.querySelector(`[data-frameruni-stop-scroll]`),
            t = document.documentElement,
            r = t && t.style && t.style.overflow === `hidden`;
          n.current && (e || r ? n.current.stop() : n.current.start());
        } catch (e) {
          console.error(`Error in checkForStopScroll:`, e);
        }
      };
      e();
      let t, r;
      try {
        ((t = new MutationObserver(e)),
          (r = new MutationObserver(e)),
          document &&
            document.documentElement &&
            (t.observe(document.documentElement, {
              childList: !0,
              subtree: !0,
              attributes: !0,
              attributeFilter: [`data-frameruni-stop-scroll`],
            }),
            r.observe(document.documentElement, { attributes: !0, attributeFilter: [`style`] })));
      } catch (e) {
        console.error(`Error setting up observers:`, e);
      }
      return () => {
        try {
          (t && t.disconnect(), r && r.disconnect());
        } catch (e) {
          console.error(`Error disconnecting observers:`, e);
        }
      };
    }, []),
    o(() => {
      try {
        if (!document) return;
        let e = document.getElementsByTagName(`*`);
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (n)
            try {
              let e = w.getComputedStyle(n);
              e &&
                e.getPropertyValue(`overflow`) === `auto` &&
                n.setAttribute(`data-lenis-prevent`, `true`);
            } catch (e) {
              console.error(`Error getting computed style:`, e);
            }
        }
      } catch (e) {
        console.error(`Error in overflow detection:`, e);
      }
    }, []),
    o(() => {
      try {
        if (typeof Et != `function`) {
          console.error(`Lenis is not available`);
          return;
        }
        n.current = new Et({ duration: (t || 10) / 10 });
        let e = (t) => {
            if (n.current)
              try {
                (n.current.raf(t), requestAnimationFrame(e));
              } catch (e) {
                console.error(`Error in animation frame:`, e);
              }
          },
          r = requestAnimationFrame(e);
        return () => {
          if ((cancelAnimationFrame(r), n.current))
            try {
              (n.current.destroy(), (n.current = null));
            } catch (e) {
              console.error(`Error destroying Lenis:`, e);
            }
        };
      } catch (e) {
        return (console.error(`Error initializing Lenis:`, e), () => {});
      }
    }, [t]),
    o(() => {
      try {
        if (!document || !n.current) return;
        let e = Array.from(document.querySelectorAll(`a[href]`) || [])
            .filter((e) => {
              if (!e) return !1;
              let t = e;
              if (!t.href) return !1;
              let n =
                  t.href.startsWith(w.location.origin) ||
                  t.href.startsWith(`./`) ||
                  t.href.startsWith(`/`),
                r = t.href.includes(`#`);
              return n && r;
            })
            .map((e) => {
              try {
                let t = e,
                  n = t.href.includes(`#`) ? `#${t.href.split(`#`).pop()}` : ``,
                  r = n ? decodeURIComponent(n) : ``,
                  i = 0;
                try {
                  if (r) {
                    let e = document.querySelector(r);
                    if (e) {
                      let t = w.getComputedStyle(e).scrollMarginTop;
                      i = (t && parseInt(t)) || 0;
                    }
                  }
                } catch (e) {
                  console.error(`Error finding target element:`, e);
                }
                return { href: n, scrollMargin: i, anchorElement: t };
              } catch (e) {
                return (console.error(`Error processing anchor:`, e), null);
              }
            })
            .filter(Boolean),
          t = (e, t, r) => {
            try {
              (e && e.preventDefault && e.preventDefault(),
                n.current && t && n.current.scrollTo(t, { offset: -(r || 0) }));
            } catch (e) {
              console.error(`Error in anchor click handler:`, e);
            }
          },
          r = e.map(
            ({ href: e, scrollMargin: n }) =>
              (r) =>
                t(r, e, n)
          );
        return (
          e.forEach(({ anchorElement: e }, t) => {
            e && r[t] && e.addEventListener(`click`, r[t]);
          }),
          () => {
            e.forEach(({ anchorElement: e }, t) => {
              e && r[t] && e.removeEventListener(`click`, r[t]);
            });
          }
        );
      } catch (e) {
        return (console.error(`Error setting up anchor links:`, e), () => {});
      }
    }, [n]),
    f(`div`, { style: e.style })
  );
}
var kt,
  At = e(() => {
    (i(),
      y(),
      F(),
      Dt(),
      n(),
      (kt = Pe(
        Ot,
        [
          `html.lenis { height: auto; }`,
          `.lenis.lenis-smooth { scroll-behavior: auto !important; }`,
          `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`,
          `.lenis.lenis-stopped { overflow: hidden; }`,
          `.lenis.lenis-scrolling iframe { pointer-events: none; }`,
        ],
        ``
      )),
      (kt.displayName = `Smooth Scroll`),
      D(kt, {
        intensity: {
          title: `Intensity`,
          type: z.Number,
          defaultValue: 10,
          min: 0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  U,
  Rt = e(() => {
    (y(),
      F(),
      ae(),
      n(),
      Qe(),
      ot(),
      (jt = `framer-LYjEk`),
      (Mt = { S7Fxo8jKE: `framer-v-julqjb` }),
      (Nt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Pt = ({ value: e, children: n }) => {
        let r = t(E),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(E.Provider, { value: a, children: n });
      }),
      (Ft = T.create(c)),
      (It = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        R46GlcUaM: n ?? a.R46GlcUaM,
        sbNmroH_d: r ?? a.sbNmroH_d ?? `Home`,
      })),
      (Lt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (U = Pe(
        p(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = re(),
            { activeLocale: a, setLocale: o } = V();
          ke();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              sbNmroH_d: m,
              R46GlcUaM: h,
              ...g
            } = It(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: ee,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: te,
              setVariant: ne,
              variants: S,
            } = ge({ defaultVariant: `S7Fxo8jKE`, ref: r, variant: p, variantClassNames: Mt }),
            C = Lt(e, S),
            w = N(jt, lt, tt);
          return f(ie, {
            id: d ?? i,
            children: f(Ft, {
              animate: S,
              initial: !1,
              children: f(Pt, {
                value: Nt,
                children: f(T.div, {
                  ...g,
                  ...y,
                  className: N(w, `framer-julqjb`, u, v),
                  "data-framer-name": `Desktop`,
                  layoutDependency: C,
                  layoutId: `S7Fxo8jKE`,
                  ref: r,
                  style: { ...l },
                  children: f(B, {
                    __fromCanvasComponent: !0,
                    children: f(c, {
                      children: f(T.p, {
                        className: `framer-styles-preset-ayx75q`,
                        "data-styles-preset": `I8nYi38vp`,
                        dir: `auto`,
                        style: {
                          "--framer-text-alignment": `left`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                        },
                        children: f(L, {
                          href: h,
                          motionChild: !0,
                          nodeId: `CwL7jWaK_`,
                          openInNewTab: !1,
                          relValues: [],
                          scopeId: `eHXNYIVHK`,
                          smoothScroll: !0,
                          children: f(T.a, {
                            className: `framer-styles-preset-6ovftn`,
                            "data-styles-preset": `b1FQusCg6`,
                            children: `Home`,
                          }),
                        }),
                      }),
                    }),
                    className: `framer-dr23ki`,
                    fonts: [`Inter`],
                    layoutDependency: C,
                    layoutId: `CwL7jWaK_`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                    },
                    text: m,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-LYjEk.framer-ulmhwc, .framer-LYjEk .framer-ulmhwc { display: block; }`,
          `.framer-LYjEk.framer-julqjb { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 55px; }`,
          `.framer-LYjEk .framer-dr23ki { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          ...st,
          ...$e,
        ],
        `framer-LYjEk`
      )),
      (U.displayName = `Menu Item`),
      (U.defaultProps = { height: 24, width: 55 }),
      D(U, {
        sbNmroH_d: { defaultValue: `Home`, displayTextArea: !1, title: `Title`, type: z.String },
        onsbNmroH_dChange: { changes: `sbNmroH_d`, type: z.ChangeHandler },
        R46GlcUaM: { title: `Link`, type: z.Link },
      }),
      Ne(
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
          ...P(ct),
          ...P(et),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function zt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Bt,
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
  Zt,
  Qt,
  $t,
  en,
  tn,
  W,
  nn = e(() => {
    (y(),
      F(),
      ae(),
      n(),
      mt(),
      (Bt = pe(T.div)),
      (Vt = { MDnO3RGuD: { hover: !0 } }),
      (Ht = [`MDnO3RGuD`, `vfm15FG6f`, `Q_F069Nmj`, `P_TINRc5S`, `HlI5h7SAO`]),
      (Ut = `framer-mDF6B`),
      (Wt = {
        HlI5h7SAO: `framer-v-v3t2b3`,
        MDnO3RGuD: `framer-v-c1ynmq`,
        P_TINRc5S: `framer-v-qwe9b3`,
        Q_F069Nmj: `framer-v-c157ru`,
        vfm15FG6f: `framer-v-1dlq1z5`,
      }),
      (Gt = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Kt = {
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
      (qt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Jt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: qt,
        x: 0,
        y: 0,
      }),
      (Yt = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Xt = {
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
      (Zt = ({ value: e, children: n }) => {
        let r = t(E),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(E.Provider, { value: a, children: n });
      }),
      (Qt = {
        Default: `MDnO3RGuD`,
        Disabled: `Q_F069Nmj`,
        Error: `HlI5h7SAO`,
        Loading: `vfm15FG6f`,
        Success: `P_TINRc5S`,
      }),
      ($t = T.create(c)),
      (en = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Qt[r.variant] ?? r.variant ?? `MDnO3RGuD`,
      })),
      (tn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = Pe(
        p(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = re(),
            { activeLocale: a, setLocale: o } = V();
          ke();
          let { style: l, className: u, layoutId: d, variant: p, ...m } = en(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: v,
              gestureHandlers: ee,
              gestureVariant: y,
              isLoading: b,
              setGestureState: x,
              setVariant: te,
              variants: ne,
            } = ge({
              cycleOrder: Ht,
              defaultVariant: `MDnO3RGuD`,
              enabledGestures: Vt,
              ref: r,
              variant: p,
              variantClassNames: Wt,
            }),
            S = tn(e, ne),
            C = N(Ut, _t),
            w = () => y === `MDnO3RGuD-hover`;
          return f(ie, {
            id: d ?? i,
            children: f($t, {
              animate: ne,
              initial: !1,
              children: f(Zt, {
                value: Gt,
                children: f(T.button, {
                  ...m,
                  ...ee,
                  className: N(C, `framer-c1ynmq`, u, g),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: S,
                  layoutId: `MDnO3RGuD`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, rgb(51, 51, 51))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    opacity: 1,
                    ...l,
                  },
                  variants: {
                    "MDnO3RGuD-hover": { opacity: 1 },
                    HlI5h7SAO: { backgroundColor: `rgba(255, 34, 68, 0.15)`, opacity: 1 },
                    P_TINRc5S: { opacity: 1 },
                    Q_F069Nmj: { opacity: 0.5 },
                  },
                  ...zt(
                    {
                      "MDnO3RGuD-hover": { "data-framer-name": void 0 },
                      HlI5h7SAO: { "data-framer-name": `Error` },
                      P_TINRc5S: { "data-framer-name": `Success` },
                      Q_F069Nmj: { "data-framer-name": `Disabled` },
                      vfm15FG6f: { "data-framer-name": `Loading` },
                    },
                    h,
                    y
                  ),
                  children: _(T.div, {
                    className: `framer-1kr4wmn`,
                    layoutDependency: S,
                    layoutId: `OscYexcFo`,
                    children: [
                      w() &&
                        f(T.div, {
                          className: `framer-ciajwq`,
                          layoutDependency: S,
                          layoutId: `dtaEJccCP`,
                          children: f(Bt, {
                            __framer__animate: { transition: qt },
                            __framer__animateOnce: !1,
                            __framer__enter: Kt,
                            __framer__exit: Jt,
                            __framer__loop: Xt,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopPauseOffscreen: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: `mirror`,
                            __framer__loopTransition: Yt,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-1eqdydd`,
                            layoutDependency: S,
                            layoutId: `ghaOY2oN7`,
                            style: {
                              backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                              borderBottomLeftRadius: 30,
                              borderBottomRightRadius: 30,
                              borderTopLeftRadius: 30,
                              borderTopRightRadius: 30,
                            },
                          }),
                        }),
                      f(B, {
                        __fromCanvasComponent: !0,
                        children: f(c, {
                          children: f(T.p, {
                            className: `framer-styles-preset-1rt8l9`,
                            "data-styles-preset": `DJ_jb3woG`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                            },
                            children: `Submit`,
                          }),
                        }),
                        className: `framer-n0ppm5`,
                        fonts: [`Inter`],
                        layoutDependency: S,
                        layoutId: `bjD6O9PdJ`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          opacity: 1,
                        },
                        variants: {
                          "MDnO3RGuD-hover": { opacity: 0.8 },
                          HlI5h7SAO: {
                            "--extracted-r6o4lv": `var(--token-6027fb09-b6d7-4a35-be6b-ee5163abd9d5, rgb(255, 79, 79))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...zt(
                          {
                            HlI5h7SAO: {
                              children: f(c, {
                                children: f(T.p, {
                                  className: `framer-styles-preset-1rt8l9`,
                                  "data-styles-preset": `DJ_jb3woG`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6027fb09-b6d7-4a35-be6b-ee5163abd9d5, rgb(255, 79, 79)))`,
                                  },
                                  children: `Error`,
                                }),
                              }),
                            },
                            P_TINRc5S: {
                              children: f(c, {
                                children: f(T.p, {
                                  className: `framer-styles-preset-1rt8l9`,
                                  "data-styles-preset": `DJ_jb3woG`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                                  },
                                  children: `Thank you`,
                                }),
                              }),
                            },
                            vfm15FG6f: {
                              children: f(c, {
                                children: f(T.p, {
                                  className: `framer-styles-preset-1rt8l9`,
                                  "data-styles-preset": `DJ_jb3woG`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                                  },
                                  children: `Loading`,
                                }),
                              }),
                            },
                          },
                          h,
                          y
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
          `.framer-mDF6B.framer-2d69m2, .framer-mDF6B .framer-2d69m2 { display: block; }`,
          `.framer-mDF6B.framer-c1ynmq { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 15px 20px 15px 20px; position: relative; width: 140px; }`,
          `.framer-mDF6B .framer-1kr4wmn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-mDF6B .framer-ciajwq { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 2px 0px 0px 0px; position: relative; width: min-content; }`,
          `.framer-mDF6B .framer-1eqdydd { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 5px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-mDF6B .framer-n0ppm5 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-mDF6B.framer-v-1dlq1z5.framer-c1ynmq, .framer-mDF6B.framer-v-c157ru.framer-c1ynmq, .framer-mDF6B.framer-v-qwe9b3.framer-c1ynmq, .framer-mDF6B.framer-v-v3t2b3.framer-c1ynmq { cursor: unset; }`,
          `.framer-mDF6B.framer-v-c1ynmq.hover.framer-c1ynmq { width: 114px; }`,
          ...ht,
          `.framer-mDF6B[data-border="true"]::after, .framer-mDF6B [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-mDF6B`
      )),
      (W.displayName = `Footer Form Button`),
      (W.defaultProps = { height: 44, width: 140 }),
      D(W, {
        variant: {
          options: [`MDnO3RGuD`, `vfm15FG6f`, `Q_F069Nmj`, `P_TINRc5S`, `HlI5h7SAO`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: z.Enum,
        },
      }),
      Ne(
        W,
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
          ...P(gt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function G(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rn,
  K,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  q,
  J,
  Y,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  X,
  Cn = e(() => {
    (y(),
      F(),
      ae(),
      n(),
      Ke(),
      Ye(),
      Qe(),
      nt(),
      ot(),
      ut(),
      qe(),
      Rt(),
      nn(),
      vt(),
      (rn = j(yt)),
      (K = pe(T.div)),
      (an = j(U)),
      (on = j(W)),
      (sn = j(Ge)),
      (cn = ue(T.div)),
      (ln = _e(pe(k))),
      (un = [`MzmrI7HKa`, `c9mmVCYFm`, `ENEJMQb5q`]),
      (dn = `framer-lJEZS`),
      (fn = {
        c9mmVCYFm: `framer-v-seysat`,
        ENEJMQb5q: `framer-v-pb2zng`,
        MzmrI7HKa: `framer-v-17fbv7s`,
      }),
      (pn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (q = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (J = { bounce: 0.2, delay: 0.1, duration: 0.4, type: `spring` }),
      (Y = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: J,
        x: 0,
        y: 20,
      }),
      (mn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (hn = (e, t, n) => {
        switch (e.state) {
          case `success`:
            return t.success ?? n;
          case `pending`:
            return t.pending ?? n;
          case `error`:
            return t.error ?? n;
          case `incomplete`:
            return t.incomplete ?? n;
          default:
            return n;
        }
      }),
      (gn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.1, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (_n = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (vn = ({ value: e, children: n }) => {
        let r = t(E),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(E.Provider, { value: a, children: n });
      }),
      (yn = { Desktop: `MzmrI7HKa`, Mobile: `ENEJMQb5q`, Tablet: `c9mmVCYFm` }),
      (bn = T.create(c)),
      (xn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: yn[r.variant] ?? r.variant ?? `MzmrI7HKa`,
      })),
      (Sn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = Pe(
        p(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = re(),
            { activeLocale: a, setLocale: o } = V(),
            l = ke(),
            { style: u, className: d, layoutId: p, variant: m, ...h } = xn(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: ee,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: ne,
              setVariant: S,
              variants: C,
            } = ge({
              cycleOrder: un,
              defaultVariant: `MzmrI7HKa`,
              ref: r,
              variant: m,
              variantClassNames: fn,
            }),
            w = Sn(e, C),
            E = N(dn, at, lt, pt, tt, Ze);
          return (
            ce(),
            f(ie, {
              id: p ?? i,
              children: f(bn, {
                animate: C,
                initial: !1,
                children: f(vn, {
                  value: pn,
                  children: _(T.footer, {
                    ...h,
                    ...y,
                    className: N(E, `framer-17fbv7s`, d, v),
                    "data-framer-name": `Desktop`,
                    layoutDependency: w,
                    layoutId: `MzmrI7HKa`,
                    ref: r,
                    style: {
                      backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                      ...u,
                    },
                    ...G(
                      {
                        c9mmVCYFm: { "data-framer-name": `Tablet` },
                        ENEJMQb5q: { "data-framer-name": `Mobile` },
                      },
                      g,
                      b
                    ),
                    children: [
                      _(T.div, {
                        className: `framer-1s89gi3`,
                        "data-framer-name": `Wrap`,
                        layoutDependency: w,
                        layoutId: `b3OkP9zio`,
                        children: [
                          _(K, {
                            __framer__animate: { transition: J },
                            __framer__animateOnce: !0,
                            __framer__enter: q,
                            __framer__exit: Y,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-gbd2m1`,
                            layoutDependency: w,
                            layoutId: `awGiSR7tT`,
                            children: [
                              _(T.div, {
                                className: `framer-1lc1rf1`,
                                "data-framer-name": `h1`,
                                layoutDependency: w,
                                layoutId: `rJxCw0hN8`,
                                children: [
                                  f(B, {
                                    __fromCanvasComponent: !0,
                                    children: f(c, {
                                      children: f(T.h2, {
                                        className: `framer-styles-preset-151rane`,
                                        "data-styles-preset": `F2j_sq2oH`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-1of0zx5, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                        },
                                        children: `Ready to scale your brand reach?`,
                                      }),
                                    }),
                                    className: `framer-1pfwh0k`,
                                    fonts: [`Inter`],
                                    layoutDependency: w,
                                    layoutId: `QyC4JlsGv`,
                                    style: {
                                      "--extracted-1of0zx5": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...G(
                                      {
                                        c9mmVCYFm: {
                                          children: f(c, {
                                            children: f(T.h2, {
                                              className: `framer-styles-preset-151rane`,
                                              "data-styles-preset": `F2j_sq2oH`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--extracted-1of0zx5, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                              },
                                              children: `Ready to scale your brand reach?`,
                                            }),
                                          }),
                                        },
                                        ENEJMQb5q: {
                                          children: f(c, {
                                            children: f(T.h2, {
                                              className: `framer-styles-preset-151rane`,
                                              "data-styles-preset": `F2j_sq2oH`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--extracted-1of0zx5, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                              },
                                              children: `Ready to scale your brand reach?`,
                                            }),
                                          }),
                                        },
                                      },
                                      g,
                                      b
                                    ),
                                  }),
                                  f(B, {
                                    __fromCanvasComponent: !0,
                                    children: f(c, {
                                      children: f(T.p, {
                                        className: `framer-styles-preset-ayx75q`,
                                        "data-styles-preset": `I8nYi38vp`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                        },
                                        children: `Let’s build a system that consistently drives views, engagement, and results.`,
                                      }),
                                    }),
                                    className: `framer-9iwbs0`,
                                    fonts: [`Inter`],
                                    layoutDependency: w,
                                    layoutId: `X2kQS19cQ`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...G(
                                      {
                                        c9mmVCYFm: {
                                          children: f(c, {
                                            children: f(T.p, {
                                              className: `framer-styles-preset-ayx75q`,
                                              "data-styles-preset": `I8nYi38vp`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                              },
                                              children: `Let’s build a system that consistently drives views, engagement, and results.`,
                                            }),
                                          }),
                                        },
                                        ENEJMQb5q: {
                                          children: f(c, {
                                            children: f(T.p, {
                                              className: `framer-styles-preset-ayx75q`,
                                              "data-styles-preset": `I8nYi38vp`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                              },
                                              children: `Let’s build a system that consistently drives views, engagement, and results.`,
                                            }),
                                          }),
                                        },
                                      },
                                      g,
                                      b
                                    ),
                                  }),
                                ],
                              }),
                              f(R, {
                                height: 44,
                                children: f(k, {
                                  className: `framer-dpemh2-container`,
                                  layoutDependency: w,
                                  layoutId: `OO9v5_XGg-container`,
                                  nodeId: `OO9v5_XGg`,
                                  rendersWithMotion: !0,
                                  scopeId: `iH646AyHe`,
                                  children: f(yt, {
                                    arrAKCynS: `https://calendar.app.google/LNk2WtSjjwQDDLYD9`,
                                    height: `100%`,
                                    id: `OO9v5_XGg`,
                                    layoutId: `OO9v5_XGg`,
                                    leLsKUYDS: `Book a Call`,
                                    Llv8Wzb_B: `40px`,
                                    variant: mn(`NPcMhI0aR`),
                                    width: `100%`,
                                    ...G({ ENEJMQb5q: { variant: mn(`y674jXdOH`) } }, g, b),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          _(K, {
                            __framer__animate: { transition: J },
                            __framer__animateOnce: !0,
                            __framer__enter: q,
                            __framer__exit: Y,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-x6xa1`,
                            "data-framer-name": `All Links`,
                            layoutDependency: w,
                            layoutId: `u_J6VGkBq`,
                            ...G(
                              { ENEJMQb5q: { __framer__styleAppearEffectEnabled: void 0 } },
                              g,
                              b
                            ),
                            children: [
                              _(K, {
                                __framer__animate: { transition: J },
                                __framer__animateOnce: !0,
                                __framer__enter: q,
                                __framer__exit: Y,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                className: `framer-1xbxnmm`,
                                "data-framer-name": `Link 01`,
                                layoutDependency: w,
                                layoutId: `yI6AliYot`,
                                children: [
                                  f(B, {
                                    __fromCanvasComponent: !0,
                                    children: f(c, {
                                      children: f(T.h3, {
                                        className: `framer-styles-preset-mcct0z`,
                                        "data-styles-preset": `JIvkOqTK6`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                        },
                                        children: `Company `,
                                      }),
                                    }),
                                    className: `framer-xdgcv9`,
                                    fonts: [`Inter`],
                                    layoutDependency: w,
                                    layoutId: `NME_40xby`,
                                    style: {
                                      "--extracted-a0htzi": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  _(T.ul, {
                                    className: `framer-1bk4zsg`,
                                    "data-framer-name": `All Items`,
                                    layoutDependency: w,
                                    layoutId: `RUUdGd3Mm`,
                                    children: [
                                      f(O, {
                                        links: [
                                          {
                                            href: { webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          f(R, {
                                            height: 24,
                                            ...G(
                                              {
                                                c9mmVCYFm: {
                                                  width: `max((min(${l?.width || `100vw`}, 1050px) - 50px) / 2, 50px)`,
                                                },
                                              },
                                              g,
                                              b
                                            ),
                                            children: f(k, {
                                              as: `li`,
                                              className: `framer-1um5xcu-container`,
                                              layoutDependency: w,
                                              layoutId: `aZmGjvKft-container`,
                                              nodeId: `aZmGjvKft`,
                                              rendersWithMotion: !0,
                                              scopeId: `iH646AyHe`,
                                              children: f(U, {
                                                height: `100%`,
                                                id: `aZmGjvKft`,
                                                layoutId: `aZmGjvKft`,
                                                R46GlcUaM: e[0],
                                                sbNmroH_d: `Home`,
                                                style: { width: `100%` },
                                                width: `100%`,
                                                ...G(
                                                  {
                                                    c9mmVCYFm: { R46GlcUaM: e[1] },
                                                    ENEJMQb5q: { R46GlcUaM: e[2] },
                                                  },
                                                  g,
                                                  b
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                      f(O, {
                                        links: [
                                          {
                                            href: { hash: `:wCrl5EG3s`, webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:wCrl5EG3s`, webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:wCrl5EG3s`, webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          f(R, {
                                            height: 24,
                                            ...G(
                                              {
                                                c9mmVCYFm: {
                                                  width: `max((min(${l?.width || `100vw`}, 1050px) - 50px) / 2, 50px)`,
                                                },
                                              },
                                              g,
                                              b
                                            ),
                                            children: f(k, {
                                              as: `li`,
                                              className: `framer-leax83-container`,
                                              layoutDependency: w,
                                              layoutId: `yGD2Relxd-container`,
                                              nodeId: `yGD2Relxd`,
                                              rendersWithMotion: !0,
                                              scopeId: `iH646AyHe`,
                                              children: f(U, {
                                                height: `100%`,
                                                id: `yGD2Relxd`,
                                                layoutId: `yGD2Relxd`,
                                                R46GlcUaM: e[0],
                                                sbNmroH_d: `Services`,
                                                style: { width: `100%` },
                                                width: `100%`,
                                                ...G(
                                                  {
                                                    c9mmVCYFm: { R46GlcUaM: e[1] },
                                                    ENEJMQb5q: { R46GlcUaM: e[2] },
                                                  },
                                                  g,
                                                  b
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                      f(O, {
                                        links: [
                                          {
                                            href: { hash: `:e2_bywhGS`, webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:e2_bywhGS`, webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:e2_bywhGS`, webPageId: `augiA20Il` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          f(R, {
                                            height: 24,
                                            ...G(
                                              {
                                                c9mmVCYFm: {
                                                  width: `max((min(${l?.width || `100vw`}, 1050px) - 50px) / 2, 50px)`,
                                                },
                                              },
                                              g,
                                              b
                                            ),
                                            children: f(k, {
                                              as: `li`,
                                              className: `framer-1aw9ju9-container`,
                                              layoutDependency: w,
                                              layoutId: `x_iLwdB4T-container`,
                                              nodeId: `x_iLwdB4T`,
                                              rendersWithMotion: !0,
                                              scopeId: `iH646AyHe`,
                                              children: f(U, {
                                                height: `100%`,
                                                id: `x_iLwdB4T`,
                                                layoutId: `x_iLwdB4T`,
                                                R46GlcUaM: e[0],
                                                sbNmroH_d: `Projects`,
                                                style: { width: `100%` },
                                                width: `100%`,
                                                ...G(
                                                  {
                                                    c9mmVCYFm: { R46GlcUaM: e[1] },
                                                    ENEJMQb5q: { R46GlcUaM: e[2] },
                                                  },
                                                  g,
                                                  b
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                      f(R, {
                                        height: 24,
                                        ...G(
                                          {
                                            c9mmVCYFm: {
                                              width: `max((min(${l?.width || `100vw`}, 1050px) - 50px) / 2, 50px)`,
                                            },
                                          },
                                          g,
                                          b
                                        ),
                                        children: f(k, {
                                          as: `li`,
                                          className: `framer-g5mk0d-container`,
                                          layoutDependency: w,
                                          layoutId: `CZjteSdl4-container`,
                                          nodeId: `CZjteSdl4`,
                                          rendersWithMotion: !0,
                                          scopeId: `iH646AyHe`,
                                          children: f(U, {
                                            height: `100%`,
                                            id: `CZjteSdl4`,
                                            layoutId: `CZjteSdl4`,
                                            R46GlcUaM: `https://wa.me/9779767267448`,
                                            sbNmroH_d: `Contact`,
                                            style: { width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              _(K, {
                                __framer__animate: { transition: J },
                                __framer__animateOnce: !0,
                                __framer__enter: q,
                                __framer__exit: Y,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                className: `framer-5uc8jp`,
                                "data-framer-name": `Link 01`,
                                layoutDependency: w,
                                layoutId: `LTaZk0jD0`,
                                children: [
                                  f(B, {
                                    __fromCanvasComponent: !0,
                                    children: f(c, {
                                      children: f(T.h3, {
                                        className: `framer-styles-preset-mcct0z`,
                                        "data-styles-preset": `JIvkOqTK6`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                        },
                                        children: `Legal`,
                                      }),
                                    }),
                                    className: `framer-sg57t0`,
                                    fonts: [`Inter`],
                                    layoutDependency: w,
                                    layoutId: `ZlchNpNZa`,
                                    style: {
                                      "--extracted-a0htzi": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  _(T.ul, {
                                    className: `framer-13ddsd1`,
                                    "data-framer-name": `All Items`,
                                    layoutDependency: w,
                                    layoutId: `VAGHcjnOK`,
                                    children: [
                                      f(O, {
                                        links: [
                                          {
                                            href: {
                                              pathVariables: { xsOQkQirM: `privacy-policy` },
                                              unresolvedPathSlugs: {
                                                xsOQkQirM: {
                                                  collectionId: `NvVsF9Krs`,
                                                  collectionItemId: `oK5m5DBt3`,
                                                },
                                              },
                                              webPageId: `T_zVflsz4`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: {
                                              pathVariables: { xsOQkQirM: `privacy-policy` },
                                              unresolvedPathSlugs: {
                                                xsOQkQirM: {
                                                  collectionId: `NvVsF9Krs`,
                                                  collectionItemId: `oK5m5DBt3`,
                                                },
                                              },
                                              webPageId: `T_zVflsz4`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: {
                                              pathVariables: { xsOQkQirM: `privacy-policy` },
                                              unresolvedPathSlugs: {
                                                xsOQkQirM: {
                                                  collectionId: `NvVsF9Krs`,
                                                  collectionItemId: `oK5m5DBt3`,
                                                },
                                              },
                                              webPageId: `T_zVflsz4`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          f(R, {
                                            height: 24,
                                            ...G(
                                              {
                                                c9mmVCYFm: {
                                                  width: `min(max((min(${l?.width || `100vw`}, 1050px) - 50px) / 2, 50px), 165px)`,
                                                },
                                                ENEJMQb5q: {
                                                  width: `calc(min(${l?.width || `100vw`}, 1050px) - 40px)`,
                                                },
                                              },
                                              g,
                                              b
                                            ),
                                            children: f(k, {
                                              as: `li`,
                                              className: `framer-qcyzig-container`,
                                              layoutDependency: w,
                                              layoutId: `MzEKUggia-container`,
                                              nodeId: `MzEKUggia`,
                                              rendersWithMotion: !0,
                                              scopeId: `iH646AyHe`,
                                              children: f(U, {
                                                height: `100%`,
                                                id: `MzEKUggia`,
                                                layoutId: `MzEKUggia`,
                                                R46GlcUaM: e[0],
                                                sbNmroH_d: `Privacy Policy`,
                                                style: { width: `100%` },
                                                width: `100%`,
                                                ...G(
                                                  {
                                                    c9mmVCYFm: { R46GlcUaM: e[1] },
                                                    ENEJMQb5q: { R46GlcUaM: e[2] },
                                                  },
                                                  g,
                                                  b
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                      f(O, {
                                        links: [
                                          {
                                            href: {
                                              pathVariables: { xsOQkQirM: `terms-conditions` },
                                              unresolvedPathSlugs: {
                                                xsOQkQirM: {
                                                  collectionId: `NvVsF9Krs`,
                                                  collectionItemId: `YinQT1c6i`,
                                                },
                                              },
                                              webPageId: `T_zVflsz4`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: {
                                              pathVariables: { xsOQkQirM: `terms-conditions` },
                                              unresolvedPathSlugs: {
                                                xsOQkQirM: {
                                                  collectionId: `NvVsF9Krs`,
                                                  collectionItemId: `YinQT1c6i`,
                                                },
                                              },
                                              webPageId: `T_zVflsz4`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: {
                                              pathVariables: { xsOQkQirM: `terms-conditions` },
                                              unresolvedPathSlugs: {
                                                xsOQkQirM: {
                                                  collectionId: `NvVsF9Krs`,
                                                  collectionItemId: `YinQT1c6i`,
                                                },
                                              },
                                              webPageId: `T_zVflsz4`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          f(R, {
                                            height: 24,
                                            ...G(
                                              {
                                                c9mmVCYFm: {
                                                  width: `min(max((min(${l?.width || `100vw`}, 1050px) - 50px) / 2, 50px), 165px)`,
                                                },
                                                ENEJMQb5q: {
                                                  width: `calc(min(${l?.width || `100vw`}, 1050px) - 40px)`,
                                                },
                                              },
                                              g,
                                              b
                                            ),
                                            children: f(k, {
                                              as: `li`,
                                              className: `framer-pcjz3n-container`,
                                              layoutDependency: w,
                                              layoutId: `IV346ObAr-container`,
                                              nodeId: `IV346ObAr`,
                                              rendersWithMotion: !0,
                                              scopeId: `iH646AyHe`,
                                              children: f(U, {
                                                height: `100%`,
                                                id: `IV346ObAr`,
                                                layoutId: `IV346ObAr`,
                                                R46GlcUaM: e[0],
                                                sbNmroH_d: `Terms & Condition`,
                                                style: { width: `100%` },
                                                width: `100%`,
                                                ...G(
                                                  {
                                                    c9mmVCYFm: { R46GlcUaM: e[1] },
                                                    ENEJMQb5q: { R46GlcUaM: e[2] },
                                                  },
                                                  g,
                                                  b
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                      f(O, {
                                        links: [
                                          {
                                            href: {
                                              pathVariables: { xsOQkQirM: `refund-policy` },
                                              unresolvedPathSlugs: {
                                                xsOQkQirM: {
                                                  collectionId: `NvVsF9Krs`,
                                                  collectionItemId: `eWmj9eNSW`,
                                                },
                                              },
                                              webPageId: `T_zVflsz4`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: {
                                              pathVariables: { xsOQkQirM: `refund-policy` },
                                              unresolvedPathSlugs: {
                                                xsOQkQirM: {
                                                  collectionId: `NvVsF9Krs`,
                                                  collectionItemId: `eWmj9eNSW`,
                                                },
                                              },
                                              webPageId: `T_zVflsz4`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: {
                                              pathVariables: { xsOQkQirM: `refund-policy` },
                                              unresolvedPathSlugs: {
                                                xsOQkQirM: {
                                                  collectionId: `NvVsF9Krs`,
                                                  collectionItemId: `eWmj9eNSW`,
                                                },
                                              },
                                              webPageId: `T_zVflsz4`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          f(R, {
                                            height: 24,
                                            ...G(
                                              {
                                                c9mmVCYFm: {
                                                  width: `min(max((min(${l?.width || `100vw`}, 1050px) - 50px) / 2, 50px), 165px)`,
                                                },
                                                ENEJMQb5q: {
                                                  width: `calc(min(${l?.width || `100vw`}, 1050px) - 40px)`,
                                                },
                                              },
                                              g,
                                              b
                                            ),
                                            children: f(k, {
                                              as: `li`,
                                              className: `framer-1dyq2vy-container`,
                                              layoutDependency: w,
                                              layoutId: `cqbuQ6lqL-container`,
                                              nodeId: `cqbuQ6lqL`,
                                              rendersWithMotion: !0,
                                              scopeId: `iH646AyHe`,
                                              children: f(U, {
                                                height: `100%`,
                                                id: `cqbuQ6lqL`,
                                                layoutId: `cqbuQ6lqL`,
                                                R46GlcUaM: e[0],
                                                sbNmroH_d: `Refund Policy`,
                                                style: { width: `100%` },
                                                width: `100%`,
                                                ...G(
                                                  {
                                                    c9mmVCYFm: { R46GlcUaM: e[1] },
                                                    ENEJMQb5q: { R46GlcUaM: e[2] },
                                                  },
                                                  g,
                                                  b
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              _(K, {
                                __framer__animate: { transition: J },
                                __framer__animateOnce: !0,
                                __framer__enter: q,
                                __framer__exit: Y,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                className: `framer-1h3lk4y`,
                                "data-framer-name": `Link 01`,
                                layoutDependency: w,
                                layoutId: `uU0jX8IG_`,
                                children: [
                                  f(B, {
                                    __fromCanvasComponent: !0,
                                    children: f(c, {
                                      children: f(T.h3, {
                                        className: `framer-styles-preset-mcct0z`,
                                        "data-styles-preset": `JIvkOqTK6`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                        },
                                        children: `Address`,
                                      }),
                                    }),
                                    className: `framer-172yper`,
                                    fonts: [`Inter`],
                                    layoutDependency: w,
                                    layoutId: `jpaYWH1ol`,
                                    style: {
                                      "--extracted-a0htzi": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  _(T.ul, {
                                    className: `framer-k6rwzb`,
                                    "data-framer-name": `All Items`,
                                    layoutDependency: w,
                                    layoutId: `ZYv4HidEp`,
                                    children: [
                                      f(B, {
                                        __fromCanvasComponent: !0,
                                        as: `li`,
                                        children: f(c, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-ayx75q`,
                                            "data-styles-preset": `I8nYi38vp`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: f(L, {
                                              href: `https://www.google.com/maps`,
                                              motionChild: !0,
                                              nodeId: `fVYpage5e`,
                                              openInNewTab: !0,
                                              relValues: [],
                                              scopeId: `iH646AyHe`,
                                              smoothScroll: !1,
                                              children: f(T.a, {
                                                className: `framer-styles-preset-6ovftn`,
                                                "data-styles-preset": `b1FQusCg6`,
                                                children: `Banglore, India`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-1jikqzp`,
                                        fonts: [`Inter`],
                                        layoutDependency: w,
                                        layoutId: `fVYpage5e`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      f(B, {
                                        __fromCanvasComponent: !0,
                                        as: `li`,
                                        children: f(c, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-ayx75q`,
                                            "data-styles-preset": `I8nYi38vp`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: f(L, {
                                              href: `mailto:officialdigimk@gmail.com`,
                                              motionChild: !0,
                                              nodeId: `GyYMEzFsv`,
                                              openInNewTab: !0,
                                              relValues: [],
                                              scopeId: `iH646AyHe`,
                                              smoothScroll: !1,
                                              children: f(T.a, {
                                                className: `framer-styles-preset-6ovftn`,
                                                "data-styles-preset": `b1FQusCg6`,
                                                children: `officialdigimk@gmail.com`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-7t5d9p`,
                                        fonts: [`Inter`],
                                        layoutDependency: w,
                                        layoutId: `GyYMEzFsv`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      f(B, {
                                        __fromCanvasComponent: !0,
                                        as: `li`,
                                        children: f(c, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-ayx75q`,
                                            "data-styles-preset": `I8nYi38vp`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: f(L, {
                                              href: `https://www.instagram.com/digimk.co/`,
                                              motionChild: !0,
                                              nodeId: `be75SMms2`,
                                              openInNewTab: !0,
                                              relValues: [],
                                              scopeId: `iH646AyHe`,
                                              smoothScroll: !1,
                                              children: f(T.a, {
                                                className: `framer-styles-preset-6ovftn`,
                                                "data-styles-preset": `b1FQusCg6`,
                                                children: `@digimk.co`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-fjcte5`,
                                        fonts: [`Inter`],
                                        layoutDependency: w,
                                        layoutId: `be75SMms2`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              _(K, {
                                __framer__animate: { transition: J },
                                __framer__animateOnce: !0,
                                __framer__enter: q,
                                __framer__exit: Y,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                className: `framer-65wbah`,
                                "data-framer-name": `Form Links`,
                                layoutDependency: w,
                                layoutId: `mpJ027gqb`,
                                children: [
                                  f(B, {
                                    __fromCanvasComponent: !0,
                                    children: f(c, {
                                      children: f(T.h3, {
                                        className: `framer-styles-preset-mcct0z`,
                                        "data-styles-preset": `JIvkOqTK6`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-a0htzi, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                        },
                                        children: `Newsletter`,
                                      }),
                                    }),
                                    className: `framer-nhr2k7`,
                                    fonts: [`Inter`],
                                    layoutDependency: w,
                                    layoutId: `ol80Nw17b`,
                                    style: {
                                      "--extracted-a0htzi": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  _(T.div, {
                                    className: `framer-1lxbqts`,
                                    "data-framer-name": `Content`,
                                    layoutDependency: w,
                                    layoutId: `XT7yh6xFf`,
                                    children: [
                                      f(B, {
                                        __fromCanvasComponent: !0,
                                        children: f(c, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-ayx75q`,
                                            "data-styles-preset": `I8nYi38vp`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: `Get the latest updates in your inbox`,
                                          }),
                                        }),
                                        className: `framer-369u1r`,
                                        fonts: [`Inter`],
                                        layoutDependency: w,
                                        layoutId: `hJp4jLEGU`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...G(
                                          {
                                            ENEJMQb5q: {
                                              children: f(c, {
                                                children: f(T.p, {
                                                  className: `framer-styles-preset-ayx75q`,
                                                  "data-styles-preset": `I8nYi38vp`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                                  },
                                                  children: `Get the latest updates in your inbox`,
                                                }),
                                              }),
                                            },
                                          },
                                          g,
                                          b
                                        ),
                                      }),
                                      f(we, {
                                        action: `https://api.framer.com/forms/v1/forms/4c802196-a217-4106-accc-b7dffe59e7d1/submit`,
                                        className: `framer-4vmf9n`,
                                        layoutDependency: w,
                                        layoutId: `ws_oA4nxZ`,
                                        nodeId: `ws_oA4nxZ`,
                                        redirectUrl: { webPageId: `augiA20Il` },
                                        children: (e) =>
                                          _(te, {
                                            children: [
                                              f(T.label, {
                                                className: `framer-iy8141`,
                                                layoutDependency: w,
                                                layoutId: `vh1uDgqWR`,
                                                children: f(Fe, {
                                                  className: `framer-thpmm8`,
                                                  inputName: `Email`,
                                                  layoutDependency: w,
                                                  layoutId: `BBG5uIB4t`,
                                                  placeholder: `Enter your email`,
                                                  required: !0,
                                                  style: {
                                                    "--framer-input-background": `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                                                    "--framer-input-border-bottom-width": `1px`,
                                                    "--framer-input-border-color": `var(--token-acded813-a79e-4616-ad2c-8f627c954dde, rgb(194, 194, 194))`,
                                                    "--framer-input-border-left-width": `1px`,
                                                    "--framer-input-border-radius-bottom-left": `45px`,
                                                    "--framer-input-border-radius-bottom-right": `45px`,
                                                    "--framer-input-border-radius-top-left": `45px`,
                                                    "--framer-input-border-radius-top-right": `45px`,
                                                    "--framer-input-border-right-width": `1px`,
                                                    "--framer-input-border-style": `solid`,
                                                    "--framer-input-border-top-width": `1px`,
                                                    "--framer-input-font-color": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                                    "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                                    "--framer-input-placeholder-color": `rgba(51, 51, 51, 0.5)`,
                                                  },
                                                  type: `email`,
                                                }),
                                              }),
                                              f(R, {
                                                height: 44,
                                                ...G(
                                                  {
                                                    c9mmVCYFm: {
                                                      width: `min(max((min(${l?.width || `100vw`}, 1050px) - 50px) / 2, 50px), 267px)`,
                                                    },
                                                    ENEJMQb5q: {
                                                      width: `calc(min(${l?.width || `100vw`}, 1050px) - 40px)`,
                                                    },
                                                  },
                                                  g,
                                                  b
                                                ),
                                                children: f(k, {
                                                  className: `framer-1kfcciq-container`,
                                                  layoutDependency: w,
                                                  layoutId: `oA8CkkfmH-container`,
                                                  nodeId: `oA8CkkfmH`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `iH646AyHe`,
                                                  children: f(W, {
                                                    height: `100%`,
                                                    id: `oA8CkkfmH`,
                                                    layoutId: `oA8CkkfmH`,
                                                    style: { width: `100%` },
                                                    type: `submit`,
                                                    variant: hn(
                                                      e,
                                                      {
                                                        error: `HlI5h7SAO`,
                                                        pending: `vfm15FG6f`,
                                                        success: `P_TINRc5S`,
                                                      },
                                                      mn(`MDnO3RGuD`)
                                                    ),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      f(T.div, {
                        className: `framer-1u3qpcx`,
                        "data-framer-name": `Stripe`,
                        layoutDependency: w,
                        layoutId: `dsrp6sbRj`,
                        style: {
                          backgroundColor: `var(--token-4f650eff-568d-45ee-b0f2-21d9c022e3ce, rgb(255, 66, 66))`,
                        },
                        children: f(T.div, {
                          className: `framer-18v4mwb`,
                          "data-framer-name": `Wrap`,
                          layoutDependency: w,
                          layoutId: `SgElx1CPb`,
                          children: _(cn, {
                            className: `framer-m21qa4`,
                            layoutDependency: w,
                            layoutId: `WxC7Htxpu`,
                            style: {
                              borderBottomLeftRadius: 10,
                              borderBottomRightRadius: 10,
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                              mask: `linear-gradient(270deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 22%, rgba(0, 0, 0, 1) 84%, rgba(0, 0, 0, 0) 100%) add`,
                              WebkitMask: `linear-gradient(270deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 22%, rgba(0, 0, 0, 1) 84%, rgba(0, 0, 0, 0) 100%) add`,
                            },
                            tickerEffectAlign: `center`,
                            tickerEffectDirectionModifier: `default`,
                            tickerEffectDraggable: !1,
                            tickerEffectEnabled: !0,
                            tickerEffectGap: `30px`,
                            tickerEffectHoverModifier: 100,
                            tickerEffectOverflow: `visible`,
                            tickerEffectPosition: `relative`,
                            tickerEffectStackDirection: `row`,
                            tickerEffectVelocity: 30,
                            children: [
                              f(he, {
                                children: f(B, {
                                  __fromCanvasComponent: !0,
                                  children: f(c, {
                                    children: f(T.h1, {
                                      className: `framer-styles-preset-1q787c3`,
                                      "data-styles-preset": `y8eR9t98C`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-gdpscs, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                                      },
                                      children: `Digimk`,
                                    }),
                                  }),
                                  className: `framer-19wh5fi`,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `QRbXHT_e3`,
                                  style: {
                                    "--extracted-gdpscs": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              f(he, {
                                children: f(Ge, {
                                  animated: !0,
                                  className: `framer-1035m8b`,
                                  layoutDependency: w,
                                  layoutId: `czsGbU4Bp`,
                                  style: {
                                    "--1m6trwb": 1,
                                    "--21h8s6": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                    "--pgex8v": 0,
                                    rotate: 45,
                                  },
                                }),
                              }),
                              f(he, {
                                children: f(B, {
                                  __fromCanvasComponent: !0,
                                  children: f(c, {
                                    children: f(T.h1, {
                                      className: `framer-styles-preset-1q787c3`,
                                      "data-styles-preset": `y8eR9t98C`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-gdpscs, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                                      },
                                      children: `Creative`,
                                    }),
                                  }),
                                  className: `framer-10p565k`,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `Bk1kbpJ6i`,
                                  style: {
                                    "--extracted-gdpscs": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              f(he, {
                                children: f(Ge, {
                                  animated: !0,
                                  className: `framer-157ica9`,
                                  layoutDependency: w,
                                  layoutId: `UfqDUEaxS`,
                                  style: {
                                    "--1m6trwb": 1,
                                    "--21h8s6": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                    "--pgex8v": 0,
                                    rotate: 45,
                                  },
                                }),
                              }),
                              f(he, {
                                children: f(B, {
                                  __fromCanvasComponent: !0,
                                  children: f(c, {
                                    children: f(T.h1, {
                                      className: `framer-styles-preset-1q787c3`,
                                      "data-styles-preset": `y8eR9t98C`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-gdpscs, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                                      },
                                      children: `Agency`,
                                    }),
                                  }),
                                  className: `framer-1101szy`,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `BPLoLbu80`,
                                  style: {
                                    "--extracted-gdpscs": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              f(he, {
                                children: f(Ge, {
                                  animated: !0,
                                  className: `framer-13tjm99`,
                                  layoutDependency: w,
                                  layoutId: `R732cXoYO`,
                                  style: {
                                    "--1m6trwb": 1,
                                    "--21h8s6": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                    "--pgex8v": 1.5,
                                    rotate: 45,
                                  },
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      f(ln, {
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animate: gn,
                        className: `framer-3ozn8m-container`,
                        "data-framer-appear-id": `3ozn8m`,
                        initial: _n,
                        layoutDependency: w,
                        layoutId: `tDk4tbCBq-container`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        style: {
                          mask: `linear-gradient(0deg, rgba(0,0,0,0) 3%, rgb(0, 0, 0) 30.96846846846847%, rgba(0,0,0,1) 74.07446509009009%, rgba(0, 0, 0, 0) 100%) add`,
                          WebkitMask: `linear-gradient(0deg, rgba(0,0,0,0) 3%, rgb(0, 0, 0) 30.96846846846847%, rgba(0,0,0,1) 74.07446509009009%, rgba(0, 0, 0, 0) 100%) add`,
                        },
                        children: f(se, {
                          __fromCanvasComponent: !0,
                          animated: H.animated,
                          buffers: H.buffers,
                          fragmentShader: H.fragment,
                          height: `100%`,
                          heightmapSource: H.heightmapSource,
                          mouse: H.mouse && { enabled: H.mouse === `enabledByDefault` },
                          resolutionScale: H.resolutionScale,
                          uniforms: {
                            u_blendAmount: { type: `number`, value: 0.54 },
                            u_colors: {
                              type: `array`,
                              value: [
                                `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                                `rgb(207, 207, 207)`,
                                `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                                `rgb(227, 227, 227)`,
                              ],
                            },
                            u_maskSoftness: { type: `number`, value: 1.89 },
                            u_seed: { type: `number`, value: 32 },
                            u_waveAmplitude: { type: `number`, value: 2.5 },
                            u_waveAngle: { type: `number`, value: 105 },
                            u_waveFreqX: { type: `number`, value: 0.9 },
                            u_waveFreqY: { type: `number`, value: 6 },
                            u_waveSpeed: { type: `number`, value: 0.61 },
                          },
                          vertexShader: H.vertex,
                          width: `100%`,
                          ...G(
                            {
                              c9mmVCYFm: {
                                fallbackImage: `https://framerusercontent.com/images/yetKOpbsYVFvmSps13VFuqpDBY.png?scale-down-to=1228&width=1620&height=2456`,
                                mode: `progressive`,
                                skipInitialFallback: !0,
                              },
                              ENEJMQb5q: {
                                fallbackImage: `https://framerusercontent.com/images/uihVf6EcW2wTcsYPtkOKQNHxDc.png?scale-down-to=390&width=780&height=400`,
                                mode: `progressive`,
                                skipInitialFallback: !0,
                              },
                            },
                            g,
                            b
                          ),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-lJEZS.framer-ukb9ok, .framer-lJEZS .framer-ukb9ok { display: block; }`,
          `.framer-lJEZS.framer-17fbv7s { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 100px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
          `.framer-lJEZS .framer-1s89gi3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1050px; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 100px 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-lJEZS .framer-gbd2m1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-lJEZS .framer-1lc1rf1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 700px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-lJEZS .framer-1pfwh0k, .framer-lJEZS .framer-172yper, .framer-lJEZS .framer-1jikqzp, .framer-lJEZS .framer-7t5d9p, .framer-lJEZS .framer-fjcte5, .framer-lJEZS .framer-nhr2k7, .framer-lJEZS .framer-369u1r { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-lJEZS .framer-9iwbs0 { flex: none; height: auto; max-width: 420px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-lJEZS .framer-dpemh2-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-lJEZS .framer-x6xa1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-lJEZS .framer-1xbxnmm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-lJEZS .framer-xdgcv9, .framer-lJEZS .framer-sg57t0, .framer-lJEZS .framer-19wh5fi, .framer-lJEZS .framer-10p565k, .framer-lJEZS .framer-1101szy { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-lJEZS .framer-1bk4zsg { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; list-style: none; margin: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
          `.framer-lJEZS .framer-1um5xcu-container, .framer-lJEZS .framer-leax83-container, .framer-lJEZS .framer-1aw9ju9-container, .framer-lJEZS .framer-g5mk0d-container, .framer-lJEZS .framer-qcyzig-container, .framer-lJEZS .framer-pcjz3n-container, .framer-lJEZS .framer-1dyq2vy-container, .framer-lJEZS .framer-1kfcciq-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-lJEZS .framer-5uc8jp { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; max-width: 165px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-lJEZS .framer-13ddsd1, .framer-lJEZS .framer-k6rwzb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; list-style: none; margin: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-lJEZS .framer-1h3lk4y { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; max-width: 198px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-lJEZS .framer-65wbah { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; max-width: 267px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-lJEZS .framer-1lxbqts { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-lJEZS .framer-4vmf9n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-lJEZS .framer-iy8141 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
          `.framer-lJEZS .framer-thpmm8 { --framer-input-focused-border-color: var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, #333333); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Manrope"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1em; --framer-input-font-size: 16px; --framer-input-font-weight: 500; --framer-input-padding: 10px 10px 10px 20px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-lJEZS .framer-1u3qpcx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-lJEZS .framer-18v4mwb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 50px 0px; position: relative; width: 100%; }`,
          `.framer-lJEZS .framer-m21qa4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-lJEZS .framer-1035m8b, .framer-lJEZS .framer-157ica9 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 28px; }`,
          `.framer-lJEZS .framer-13tjm99 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 25px; }`,
          `.framer-lJEZS .framer-3ozn8m-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
          `.framer-lJEZS.framer-v-seysat.framer-17fbv7s { width: 810px; }`,
          `.framer-lJEZS.framer-v-seysat .framer-1s89gi3 { align-content: flex-start; align-items: flex-start; padding: 100px 20px 100px 20px; }`,
          `.framer-lJEZS.framer-v-seysat .framer-gbd2m1 { align-content: flex-start; align-items: flex-start; justify-content: flex-start; max-width: 560px; }`,
          `.framer-lJEZS.framer-v-seysat .framer-1lc1rf1, .framer-lJEZS.framer-v-pb2zng .framer-gbd2m1, .framer-lJEZS.framer-v-pb2zng .framer-1lc1rf1 { align-content: flex-start; align-items: flex-start; }`,
          `.framer-lJEZS.framer-v-seysat .framer-x6xa1 { align-content: unset; align-items: unset; display: grid; gap: 60px 10px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); justify-content: center; }`,
          `.framer-lJEZS.framer-v-seysat .framer-1xbxnmm { align-self: start; justify-self: start; width: 100%; }`,
          `.framer-lJEZS.framer-v-seysat .framer-5uc8jp, .framer-lJEZS.framer-v-seysat .framer-1h3lk4y, .framer-lJEZS.framer-v-seysat .framer-65wbah { align-self: start; flex: none; justify-self: start; width: 100%; }`,
          `.framer-lJEZS.framer-v-pb2zng.framer-17fbv7s { width: 390px; }`,
          `.framer-lJEZS.framer-v-pb2zng .framer-1s89gi3 { gap: 50px; padding: 60px 20px 60px 20px; }`,
          `.framer-lJEZS.framer-v-pb2zng .framer-x6xa1 { flex-direction: column; gap: 30px 10px; justify-content: flex-start; }`,
          `.framer-lJEZS.framer-v-pb2zng .framer-5uc8jp, .framer-lJEZS.framer-v-pb2zng .framer-1h3lk4y, .framer-lJEZS.framer-v-pb2zng .framer-65wbah { flex: none; max-width: unset; width: 100%; }`,
          ...rt,
          ...st,
          ...dt,
          ...$e,
          ...Je,
        ],
        `framer-lJEZS`
      )),
      (X.displayName = `Footer`),
      (X.defaultProps = { height: 963, width: 1200 }),
      D(X, {
        variant: {
          options: [`MzmrI7HKa`, `c9mmVCYFm`, `ENEJMQb5q`],
          optionTitles: [`Desktop`, `Tablet`, `Mobile`],
          title: `Variant`,
          type: z.Enum,
        },
      }),
      Ne(
        X,
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
              {
                cssFamilyName: `Manrope`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Manrope`,
                url: `../../assets/misc/CIM4KQCLZSMMLWPVH25IDDSTY4ENPHEY.woff2`,
                weight: `500`,
              },
            ],
          },
          ...rn,
          ...an,
          ...on,
          ...sn,
          ...P(it),
          ...P(ct),
          ...P(ft),
          ...P(et),
          ...P(Xe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (X.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([M(yt, {}, t), M(U, {}, t), M(W, {}, t)])),
      }));
  }),
  wn,
  Tn,
  En,
  Dn = e(() => {
    (F(),
      le.loadFonts([`FS;Manrope-semibold`, `FS;Manrope-bold`]),
      (wn = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/JNU3GNMUBPWW6V6JTED3S27XL5HN7NM5.woff2`,
              weight: `600`,
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
      (Tn = [
        `.framer-FLJLL .framer-styles-preset-itgzhy:not(.rich-text-wrapper), .framer-FLJLL .framer-styles-preset-itgzhy.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (En = `framer-FLJLL`));
  });
function On(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  Z,
  zn = e(() => {
    (y(),
      F(),
      ae(),
      n(),
      (kn = [`EGftLxJji`, `UWpUbEUIu`, `eXN6q1QUg`]),
      (An = `framer-Mp3pe`),
      (jn = {
        EGftLxJji: `framer-v-1096zlf`,
        eXN6q1QUg: `framer-v-174a4ty`,
        UWpUbEUIu: `framer-v-xkv3ya`,
      }),
      (Mn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Nn = (e, t) => `translateX(-50%) ${t}`),
      (Pn = ({ value: e, children: n }) => {
        let r = t(E),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(E.Provider, { value: a, children: n });
      }),
      (Fn = { Large: `eXN6q1QUg`, Logo: `EGftLxJji`, Smaller: `UWpUbEUIu` }),
      (In = T.create(c)),
      (Ln = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        hEmiqlBhb: e ?? i.hEmiqlBhb,
        variant: Fn[i.variant] ?? i.variant ?? `EGftLxJji`,
      })),
      (Rn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = Pe(
        p(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = re(),
            { activeLocale: a, setLocale: o } = V(),
            l = ke(),
            { style: u, className: d, layoutId: p, variant: m, hEmiqlBhb: h, ...g } = Ln(e),
            {
              baseVariant: v,
              classNames: ee,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: te,
              setGestureState: ne,
              setVariant: S,
              variants: C,
            } = ge({
              cycleOrder: kn,
              defaultVariant: `EGftLxJji`,
              ref: r,
              variant: m,
              variantClassNames: jn,
            }),
            w = Rn(e, C),
            { activeVariantCallback: E, delay: ae } = De(v),
            oe = E(async (...e) => {
              if ((ne({ isPressed: !1 }), h && (await h(...e)) === !1)) return !1;
            }),
            D = N(An);
          return f(ie, {
            id: p ?? i,
            children: f(In, {
              animate: C,
              initial: !1,
              children: f(Pn, {
                value: Mn,
                children: f(L, {
                  href: { webPageId: `augiA20Il` },
                  motionChild: !0,
                  nodeId: `EGftLxJji`,
                  openInNewTab: !1,
                  scopeId: `Rh642ldhj`,
                  children: _(T.a, {
                    ...g,
                    ...b,
                    className: `${N(D, `framer-1096zlf`, d, ee)} framer-kozmt3`,
                    "data-framer-name": `Logo`,
                    "data-highlight": !0,
                    layoutDependency: w,
                    layoutId: `EGftLxJji`,
                    onTap: oe,
                    ref: r,
                    style: { ...u },
                    ...On(
                      {
                        eXN6q1QUg: { "data-framer-name": `Large` },
                        UWpUbEUIu: { "data-framer-name": `Smaller` },
                      },
                      v,
                      x
                    ),
                    children: [
                      f(Oe, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 245.6,
                          intrinsicWidth: 200,
                          loading: ye((l?.y || 0) + -14),
                          pixelHeight: 307,
                          pixelWidth: 250,
                          sizes: `calc(${(l?.height || 34) - -14} / 1.228)`,
                          src: `../../assets/images/7lGp25Y8XbRYc5klHnCcyPhAl8Q.png`,
                        },
                        className: `framer-eowooh`,
                        "data-framer-name": `Saas practice_SaaS_Practice_2026-08-04_01.12.06-removebg-preview`,
                        layoutDependency: w,
                        layoutId: `vdNlkvGtu`,
                      }),
                      f(B, {
                        __fromCanvasComponent: !0,
                        children: f(c, {
                          children: f(T.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7Q2xhc2ggR3JvdGVzay1tZWRpdW0=`,
                              "--framer-font-family": `"Clash Grotesk", "Clash Grotesk Placeholder", sans-serif`,
                              "--framer-font-size": `28px`,
                              "--framer-font-weight": `500`,
                              "--framer-line-height": `1em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(54, 168, 255))`,
                            },
                            children: `Digimk`,
                          }),
                        }),
                        className: `framer-5rt5yp`,
                        fonts: [`FS;Clash Grotesk-medium`],
                        layoutDependency: w,
                        layoutId: `AAZWhA4LS`,
                        style: {
                          "--extracted-r6o4lv": `rgb(54, 168, 255)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        transformTemplate: Nn,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...On(
                          {
                            UWpUbEUIu: {
                              children: f(c, {
                                children: f(T.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7Q2xhc2ggR3JvdGVzay1tZWRpdW0=`,
                                    "--framer-font-family": `"Clash Grotesk", "Clash Grotesk Placeholder", sans-serif`,
                                    "--framer-font-size": `20px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(54, 168, 255))`,
                                  },
                                  children: `Digimk`,
                                }),
                              }),
                            },
                          },
                          v,
                          x
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
          `.framer-Mp3pe.framer-kozmt3, .framer-Mp3pe .framer-kozmt3 { display: block; }`,
          `.framer-Mp3pe.framer-1096zlf { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 34px; min-width: 168px; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-Mp3pe .framer-eowooh { aspect-ratio: 0.8143322475570033 / 1; bottom: 0px; flex: none; left: -5px; overflow: visible; position: absolute; top: -14px; width: auto; z-index: 1; }`,
          `.framer-Mp3pe .framer-5rt5yp { bottom: 0px; flex: none; height: auto; left: 50%; position: absolute; white-space: pre; width: auto; z-index: 1; }`,
        ],
        `framer-Mp3pe`
      )),
      (Z.displayName = `Logo`),
      (Z.defaultProps = { height: 34, width: 168 }),
      D(Z, {
        variant: {
          options: [`EGftLxJji`, `UWpUbEUIu`, `eXN6q1QUg`],
          optionTitles: [`Logo`, `Smaller`, `Large`],
          title: `Variant`,
          type: z.Enum,
        },
        hEmiqlBhb: { title: `Click`, type: z.EventHandler },
      }),
      Ne(
        Z,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Clash Grotesk`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Clash Grotesk`,
                url: `../../assets/misc/DJS4RYGIUYUXJQOHY5VCZPKSTXUSHTSP.woff2`,
                weight: `500`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  $,
  nr = e(() => {
    (y(),
      F(),
      ae(),
      n(),
      Qe(),
      Dn(),
      zn(),
      vt(),
      (Bn = j(Z)),
      (Vn = j(yt)),
      (Hn = _e(pe(T.div))),
      (Un = [`QdL3QXxj0`, `xqiGo3xlH`, `JQUPDSygQ`, `vT3vaGDRl`]),
      (Wn = `framer-yNwN9`),
      (Gn = {
        JQUPDSygQ: `framer-v-1xloo1b`,
        QdL3QXxj0: `framer-v-1d1kab1`,
        vT3vaGDRl: `framer-v-1a54wf1`,
        xqiGo3xlH: `framer-v-1ghghep`,
      }),
      (Kn = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (qn = (e, t) => `translateY(-50%) ${t}`),
      (Jn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Yn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.2, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (Xn = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Zn = ({ value: e, children: n }) => {
        let r = t(E),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(E.Provider, { value: a, children: n });
      }),
      (Qn = {
        "Desktop - Open": `vT3vaGDRl`,
        "Phone Closed": `xqiGo3xlH`,
        "Phone Opened": `JQUPDSygQ`,
        Desktop: `QdL3QXxj0`,
      }),
      ($n = T.create(c)),
      (er = ({ border: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        Ly5GoFpct: e ??
          i.Ly5GoFpct ?? {
            borderColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)) /* {"name":"White"} */`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
        variant: Qn[i.variant] ?? i.variant ?? `QdL3QXxj0`,
      })),
      (tr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = Pe(
        p(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = re(),
            { activeLocale: a, setLocale: o } = V(),
            l = ke(),
            { style: u, className: d, layoutId: p, variant: m, Ly5GoFpct: h, ...g } = er(e),
            {
              baseVariant: v,
              classNames: ee,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: te,
              setGestureState: ne,
              setVariant: S,
              variants: C,
            } = ge({
              cycleOrder: Un,
              defaultVariant: `QdL3QXxj0`,
              ref: r,
              variant: m,
              variantClassNames: Gn,
            }),
            w = tr(e, C),
            { activeVariantCallback: E, delay: ae } = De(v),
            oe = E(async (...e) => {
              S(`QdL3QXxj0`);
            }),
            D = E(async (...e) => {
              S(`xqiGo3xlH`);
            }),
            se = E(async (...e) => {
              S(`vT3vaGDRl`);
            }),
            le = E(async (...e) => {
              S(`JQUPDSygQ`);
            }),
            A = E(async (...e) => {
              S(`xqiGo3xlH`);
            }),
            j = E(async (...e) => {
              S(`QdL3QXxj0`);
            }),
            M = E(async (...e) => {
              S(`xqiGo3xlH`);
            }),
            ue = E(async (...e) => {
              S(`QdL3QXxj0`);
            }),
            de = N(Wn, En, tt),
            fe = () => !![`JQUPDSygQ`, `vT3vaGDRl`].includes(v);
          return (
            ce(),
            f(ie, {
              id: p ?? i,
              children: f($n, {
                animate: C,
                initial: !1,
                children: f(Zn, {
                  value: Kn,
                  children: _(T.nav, {
                    ...g,
                    ...b,
                    className: N(de, `framer-1d1kab1`, d, ee),
                    "data-border": !0,
                    "data-framer-name": `Desktop`,
                    layoutDependency: w,
                    layoutId: `QdL3QXxj0`,
                    ref: r,
                    style: {
                      "--border-bottom-width": (h?.borderBottomWidth ?? h?.borderWidth) + `px`,
                      "--border-color": h?.borderColor,
                      "--border-left-width": (h?.borderLeftWidth ?? h?.borderWidth) + `px`,
                      "--border-right-width": (h?.borderRightWidth ?? h?.borderWidth) + `px`,
                      "--border-style": h?.borderStyle,
                      "--border-top-width": (h?.borderTopWidth ?? h?.borderWidth) + `px`,
                      backdropFilter: `blur(12px)`,
                      backgroundColor: `rgba(255, 255, 255, 0.6)`,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      WebkitBackdropFilter: `blur(12px)`,
                      ...u,
                    },
                    ...Q(
                      {
                        JQUPDSygQ: { "data-framer-name": `Phone Opened` },
                        vT3vaGDRl: { "data-framer-name": `Desktop - Open` },
                        xqiGo3xlH: { "data-framer-name": `Phone Closed` },
                      },
                      v,
                      x
                    ),
                    children: [
                      _(T.div, {
                        className: `framer-17h505s`,
                        "data-framer-name": `Wrapper`,
                        layoutDependency: w,
                        layoutId: `FC4YaAyvg`,
                        ...Q({ xqiGo3xlH: { transformTemplate: qn } }, v, x),
                        children: [
                          f(R, {
                            height: 34,
                            y: (l?.y || 0) + 15 + (((l?.height || 70) - 30 - 40) / 2 + 0 + 0) + 3,
                            ...Q(
                              {
                                JQUPDSygQ: { y: (l?.y || 0) + 12 + 0 + 3 },
                                vT3vaGDRl: {
                                  y:
                                    (l?.y || 0) +
                                    15 +
                                    (((l?.height || 349) - 30 - 318.4) / 2 + 0 + 0) +
                                    3,
                                },
                                xqiGo3xlH: {
                                  y:
                                    (l?.y || 0) + ((l?.height || 64) * 0.5000000000000002 - 20) + 3,
                                },
                              },
                              v,
                              x
                            ),
                            children: f(k, {
                              className: `framer-1uh957s-container`,
                              layoutDependency: w,
                              layoutId: `pjFhMTbGO-container`,
                              nodeId: `pjFhMTbGO`,
                              rendersWithMotion: !0,
                              scopeId: `PzXZl9mMB`,
                              children: f(Z, {
                                height: `100%`,
                                hEmiqlBhb: oe,
                                id: `pjFhMTbGO`,
                                layoutId: `pjFhMTbGO`,
                                variant: Jn(`EGftLxJji`),
                                width: `100%`,
                                ...Q(
                                  { JQUPDSygQ: { hEmiqlBhb: D }, xqiGo3xlH: { hEmiqlBhb: D } },
                                  v,
                                  x
                                ),
                              }),
                            }),
                          }),
                          _(T.div, {
                            className: `framer-1jqh4hi`,
                            "data-framer-name": `Icon`,
                            "data-highlight": !0,
                            layoutDependency: w,
                            layoutId: `DdRYriKoB`,
                            onTap: se,
                            style: {
                              backgroundColor: `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                              borderBottomLeftRadius: 10,
                              borderBottomRightRadius: 10,
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                            },
                            variants: {
                              JQUPDSygQ: { backgroundColor: `rgb(0, 0, 0)` },
                              xqiGo3xlH: { backgroundColor: `rgb(0, 0, 0)` },
                            },
                            ...Q(
                              {
                                JQUPDSygQ: { onTap: A },
                                vT3vaGDRl: { onTap: j },
                                xqiGo3xlH: { onTap: le },
                              },
                              v,
                              x
                            ),
                            children: [
                              f(T.div, {
                                className: `framer-1676kmb`,
                                "data-framer-name": `Bottom`,
                                layoutDependency: w,
                                layoutId: `jbIBe7Btc`,
                                style: {
                                  backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                  rotate: 0,
                                },
                                variants: {
                                  JQUPDSygQ: { backgroundColor: `rgb(255, 255, 255)`, rotate: -45 },
                                  vT3vaGDRl: { rotate: -45 },
                                  xqiGo3xlH: { backgroundColor: `rgb(255, 255, 255)` },
                                },
                              }),
                              f(T.div, {
                                className: `framer-r21me7`,
                                "data-framer-name": `Top`,
                                layoutDependency: w,
                                layoutId: `HLZ3ttNxG`,
                                style: {
                                  backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                  rotate: 0,
                                },
                                variants: {
                                  JQUPDSygQ: { backgroundColor: `rgb(255, 255, 255)`, rotate: 45 },
                                  vT3vaGDRl: { rotate: 45 },
                                  xqiGo3xlH: { backgroundColor: `rgb(255, 255, 255)` },
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      fe() &&
                        _(Hn, {
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          animate: Yn,
                          className: `framer-1ruf8ey`,
                          "data-framer-appear-id": `1ruf8ey`,
                          "data-framer-name": `Menu`,
                          "data-highlight": !0,
                          initial: Xn,
                          layoutDependency: w,
                          layoutId: `JPY5SQPm2`,
                          onTap: A,
                          optimized: !0,
                          ...Q(
                            {
                              JQUPDSygQ: { "data-highlight": void 0, onTap: void 0 },
                              vT3vaGDRl: { onTap: j },
                            },
                            v,
                            x
                          ),
                          children: [
                            _(T.div, {
                              className: `framer-1otylbd`,
                              layoutDependency: w,
                              layoutId: `wPF6aOsbM`,
                              ...Q({ vT3vaGDRl: { "data-highlight": !0, onTap: j } }, v, x),
                              children: [
                                f(B, {
                                  __fromCanvasComponent: !0,
                                  children: f(c, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-itgzhy`,
                                      "data-styles-preset": `oRnXSo0jn`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                      },
                                      children: f(L, {
                                        href: { webPageId: `augiA20Il` },
                                        motionChild: !0,
                                        nodeId: `kSN4EUYwr`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `PzXZl9mMB`,
                                        smoothScroll: !1,
                                        children: f(T.a, {
                                          className: `framer-styles-preset-6ovftn`,
                                          "data-styles-preset": `b1FQusCg6`,
                                          children: `Home`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-z504u4`,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `kSN4EUYwr`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Q(
                                    {
                                      JQUPDSygQ: {
                                        "data-highlight": !0,
                                        children: f(c, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-itgzhy`,
                                            "data-styles-preset": `oRnXSo0jn`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: f(L, {
                                              href: { webPageId: `augiA20Il` },
                                              motionChild: !0,
                                              nodeId: `kSN4EUYwr`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `PzXZl9mMB`,
                                              smoothScroll: !1,
                                              children: f(T.a, {
                                                className: `framer-styles-preset-6ovftn`,
                                                "data-styles-preset": `b1FQusCg6`,
                                                children: `Home`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        onTap: A,
                                      },
                                      vT3vaGDRl: { "data-highlight": !0, onTap: j },
                                    },
                                    v,
                                    x
                                  ),
                                }),
                                f(B, {
                                  __fromCanvasComponent: !0,
                                  children: f(c, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-itgzhy`,
                                      "data-styles-preset": `oRnXSo0jn`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                      },
                                      children: f(L, {
                                        href: { webPageId: `augiA20Il` },
                                        motionChild: !0,
                                        nodeId: `QQHGLU6tw`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `PzXZl9mMB`,
                                        smoothScroll: !0,
                                        children: f(T.a, {
                                          className: `framer-styles-preset-6ovftn`,
                                          "data-styles-preset": `b1FQusCg6`,
                                          children: `Services`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-v7y9tx`,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `QQHGLU6tw`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Q(
                                    {
                                      JQUPDSygQ: {
                                        "data-highlight": !0,
                                        children: f(c, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-itgzhy`,
                                            "data-styles-preset": `oRnXSo0jn`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: f(L, {
                                              href: { hash: `:wCrl5EG3s`, webPageId: `augiA20Il` },
                                              motionChild: !0,
                                              nodeId: `QQHGLU6tw`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `PzXZl9mMB`,
                                              smoothScroll: !0,
                                              children: f(T.a, {
                                                className: `framer-styles-preset-6ovftn`,
                                                "data-styles-preset": `b1FQusCg6`,
                                                children: `Services`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        onTap: A,
                                      },
                                      vT3vaGDRl: {
                                        "data-highlight": !0,
                                        children: f(c, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-itgzhy`,
                                            "data-styles-preset": `oRnXSo0jn`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: f(L, {
                                              href: { hash: `:wCrl5EG3s`, webPageId: `augiA20Il` },
                                              motionChild: !0,
                                              nodeId: `QQHGLU6tw`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `PzXZl9mMB`,
                                              smoothScroll: !0,
                                              children: f(T.a, {
                                                className: `framer-styles-preset-6ovftn`,
                                                "data-styles-preset": `b1FQusCg6`,
                                                children: `Services`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        onTap: j,
                                      },
                                    },
                                    v,
                                    x
                                  ),
                                }),
                                f(B, {
                                  __fromCanvasComponent: !0,
                                  children: f(c, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-itgzhy`,
                                      "data-styles-preset": `oRnXSo0jn`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                      },
                                      children: f(L, {
                                        href: { webPageId: `augiA20Il` },
                                        motionChild: !0,
                                        nodeId: `XBeJ0aVm9`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `PzXZl9mMB`,
                                        smoothScroll: !0,
                                        children: f(T.a, {
                                          className: `framer-styles-preset-6ovftn`,
                                          "data-styles-preset": `b1FQusCg6`,
                                          children: `Process`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-19o6xln`,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `XBeJ0aVm9`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Q(
                                    {
                                      JQUPDSygQ: {
                                        "data-highlight": !0,
                                        children: f(c, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-itgzhy`,
                                            "data-styles-preset": `oRnXSo0jn`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: f(L, {
                                              href: { hash: `:VnW5NTYc5`, webPageId: `augiA20Il` },
                                              motionChild: !0,
                                              nodeId: `XBeJ0aVm9`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `PzXZl9mMB`,
                                              smoothScroll: !0,
                                              children: f(T.a, {
                                                className: `framer-styles-preset-6ovftn`,
                                                "data-styles-preset": `b1FQusCg6`,
                                                children: `Why Us`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        onTap: A,
                                      },
                                      vT3vaGDRl: {
                                        "data-highlight": !0,
                                        children: f(c, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-itgzhy`,
                                            "data-styles-preset": `oRnXSo0jn`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: f(L, {
                                              href: { hash: `:VnW5NTYc5`, webPageId: `augiA20Il` },
                                              motionChild: !0,
                                              nodeId: `XBeJ0aVm9`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `PzXZl9mMB`,
                                              smoothScroll: !0,
                                              children: f(T.a, {
                                                className: `framer-styles-preset-6ovftn`,
                                                "data-styles-preset": `b1FQusCg6`,
                                                children: `Why Us`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        onTap: j,
                                      },
                                    },
                                    v,
                                    x
                                  ),
                                }),
                                f(B, {
                                  __fromCanvasComponent: !0,
                                  children: f(c, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-itgzhy`,
                                      "data-styles-preset": `oRnXSo0jn`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                      },
                                      children: f(L, {
                                        href: { webPageId: `augiA20Il` },
                                        motionChild: !0,
                                        nodeId: `Pfme7xm7J`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `PzXZl9mMB`,
                                        smoothScroll: !0,
                                        children: f(T.a, {
                                          className: `framer-styles-preset-6ovftn`,
                                          "data-styles-preset": `b1FQusCg6`,
                                          children: `Pricing`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-efz81s`,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `Pfme7xm7J`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Q(
                                    {
                                      JQUPDSygQ: {
                                        "data-highlight": !0,
                                        children: f(c, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-itgzhy`,
                                            "data-styles-preset": `oRnXSo0jn`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: f(L, {
                                              href: { hash: `:oXLUVASEz`, webPageId: `augiA20Il` },
                                              motionChild: !0,
                                              nodeId: `Pfme7xm7J`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `PzXZl9mMB`,
                                              smoothScroll: !0,
                                              children: f(T.a, {
                                                className: `framer-styles-preset-6ovftn`,
                                                "data-styles-preset": `b1FQusCg6`,
                                                children: `Pricing`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        onTap: A,
                                      },
                                      vT3vaGDRl: {
                                        "data-highlight": !0,
                                        children: f(c, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-itgzhy`,
                                            "data-styles-preset": `oRnXSo0jn`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: f(L, {
                                              href: { hash: `:oXLUVASEz`, webPageId: `augiA20Il` },
                                              motionChild: !0,
                                              nodeId: `Pfme7xm7J`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `PzXZl9mMB`,
                                              smoothScroll: !0,
                                              children: f(T.a, {
                                                className: `framer-styles-preset-6ovftn`,
                                                "data-styles-preset": `b1FQusCg6`,
                                                children: `Pricing`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        onTap: j,
                                      },
                                    },
                                    v,
                                    x
                                  ),
                                }),
                                f(B, {
                                  __fromCanvasComponent: !0,
                                  children: f(c, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-itgzhy`,
                                      "data-styles-preset": `oRnXSo0jn`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                      },
                                      children: f(L, {
                                        href: { webPageId: `ZOlVkUVZl` },
                                        motionChild: !0,
                                        nodeId: `brM0dweuQ`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `PzXZl9mMB`,
                                        smoothScroll: !1,
                                        children: f(T.a, {
                                          className: `framer-styles-preset-6ovftn`,
                                          "data-styles-preset": `b1FQusCg6`,
                                          children: `Team`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-1phzb8y`,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `brM0dweuQ`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Q(
                                    {
                                      JQUPDSygQ: {
                                        "data-highlight": !0,
                                        children: f(c, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-itgzhy`,
                                            "data-styles-preset": `oRnXSo0jn`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: f(L, {
                                              href: { webPageId: `oZjhJQFrN` },
                                              motionChild: !0,
                                              nodeId: `brM0dweuQ`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `PzXZl9mMB`,
                                              smoothScroll: !1,
                                              children: f(T.a, {
                                                className: `framer-styles-preset-6ovftn`,
                                                "data-styles-preset": `b1FQusCg6`,
                                                children: `Case Study`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        onTap: A,
                                      },
                                      vT3vaGDRl: {
                                        "data-highlight": !0,
                                        children: f(c, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-itgzhy`,
                                            "data-styles-preset": `oRnXSo0jn`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: f(L, {
                                              href: { webPageId: `oZjhJQFrN` },
                                              motionChild: !0,
                                              nodeId: `brM0dweuQ`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `PzXZl9mMB`,
                                              smoothScroll: !1,
                                              children: f(T.a, {
                                                className: `framer-styles-preset-6ovftn`,
                                                "data-styles-preset": `b1FQusCg6`,
                                                children: `Case Study`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        onTap: j,
                                      },
                                    },
                                    v,
                                    x
                                  ),
                                }),
                                f(B, {
                                  __fromCanvasComponent: !0,
                                  children: f(c, {
                                    children: f(T.p, {
                                      className: `framer-styles-preset-itgzhy`,
                                      "data-styles-preset": `oRnXSo0jn`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                      },
                                      children: f(L, {
                                        href: { webPageId: `eFcSzAoqz` },
                                        motionChild: !0,
                                        nodeId: `P0YcbMbjs`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `PzXZl9mMB`,
                                        smoothScroll: !1,
                                        children: f(T.a, {
                                          className: `framer-styles-preset-6ovftn`,
                                          "data-styles-preset": `b1FQusCg6`,
                                          children: `Blogs`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-1moamhg`,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `P0YcbMbjs`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Q(
                                    {
                                      JQUPDSygQ: {
                                        "data-highlight": !0,
                                        children: f(c, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-itgzhy`,
                                            "data-styles-preset": `oRnXSo0jn`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: f(L, {
                                              href: { webPageId: `G7CG60dlp` },
                                              motionChild: !0,
                                              nodeId: `P0YcbMbjs`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `PzXZl9mMB`,
                                              smoothScroll: !1,
                                              children: f(T.a, {
                                                className: `framer-styles-preset-6ovftn`,
                                                "data-styles-preset": `b1FQusCg6`,
                                                children: `Blogs`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        onTap: A,
                                      },
                                      vT3vaGDRl: {
                                        "data-highlight": !0,
                                        children: f(c, {
                                          children: f(T.p, {
                                            className: `framer-styles-preset-itgzhy`,
                                            "data-styles-preset": `oRnXSo0jn`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: f(L, {
                                              href: { webPageId: `G7CG60dlp` },
                                              motionChild: !0,
                                              nodeId: `P0YcbMbjs`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `PzXZl9mMB`,
                                              smoothScroll: !1,
                                              children: f(T.a, {
                                                className: `framer-styles-preset-6ovftn`,
                                                "data-styles-preset": `b1FQusCg6`,
                                                children: `Blog`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        onTap: j,
                                      },
                                    },
                                    v,
                                    x
                                  ),
                                }),
                              ],
                            }),
                            f(O, {
                              links: [
                                { href: { webPageId: `pS1Xfqls7` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `pS1Xfqls7` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(R, {
                                  height: 44,
                                  ...Q(
                                    {
                                      JQUPDSygQ: {
                                        width: `calc(${l?.width || `100vw`} - 30px)`,
                                        y: (l?.y || 0) + 12 + 100 + 0 + 478.8,
                                      },
                                      vT3vaGDRl: {
                                        width: `calc(${l?.width || `100vw`} - 50px)`,
                                        y:
                                          (l?.y || 0) +
                                          15 +
                                          (((l?.height || 349) - 30 - 318.4) / 2 + 40 + 30) +
                                          0 +
                                          204.4,
                                      },
                                    },
                                    v,
                                    x
                                  ),
                                  children: f(k, {
                                    className: `framer-19j2r9l-container`,
                                    layoutDependency: w,
                                    layoutId: `hiv7WKodE-container`,
                                    nodeId: `hiv7WKodE`,
                                    rendersWithMotion: !0,
                                    scopeId: `PzXZl9mMB`,
                                    children: f(yt, {
                                      height: `100%`,
                                      id: `hiv7WKodE`,
                                      layoutId: `hiv7WKodE`,
                                      leLsKUYDS: `Get in touch`,
                                      Llv8Wzb_B: `40px`,
                                      variant: Jn(`NPcMhI0aR`),
                                      width: `100%`,
                                      ...Q(
                                        {
                                          JQUPDSygQ: {
                                            arrAKCynS: e[0],
                                            iFMm5vzrn: M,
                                            Llv8Wzb_B: `15px`,
                                            style: { width: `100%` },
                                          },
                                          vT3vaGDRl: {
                                            arrAKCynS: e[1],
                                            iFMm5vzrn: ue,
                                            Llv8Wzb_B: `15px`,
                                            style: { width: `100%` },
                                          },
                                        },
                                        v,
                                        x
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-yNwN9.framer-1n8k12x, .framer-yNwN9 .framer-1n8k12x { display: block; }`,
          `.framer-yNwN9.framer-1d1kab1 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 15px; position: relative; width: 513px; }`,
          `.framer-yNwN9 .framer-17h505s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-yNwN9 .framer-1uh957s-container, .framer-yNwN9 .framer-19j2r9l-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-yNwN9 .framer-1jqh4hi { cursor: pointer; flex: none; height: 40px; overflow: hidden; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-yNwN9 .framer-1676kmb { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(62.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-yNwN9 .framer-r21me7 { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(37.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-yNwN9 .framer-1ruf8ey { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-yNwN9 .framer-1otylbd { display: grid; flex: none; gap: 20px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-yNwN9 .framer-z504u4, .framer-yNwN9 .framer-v7y9tx, .framer-yNwN9 .framer-19o6xln, .framer-yNwN9 .framer-efz81s, .framer-yNwN9 .framer-1phzb8y, .framer-yNwN9 .framer-1moamhg { align-self: start; flex: none; height: auto; justify-self: start; position: relative; white-space: pre; width: 100%; }`,
          `.framer-yNwN9.framer-v-1ghghep.framer-1d1kab1 { display: block; gap: 0px; height: 64px; padding: unset; width: 390px; }`,
          `.framer-yNwN9.framer-v-1ghghep .framer-17h505s { left: 15px; position: absolute; right: 15px; top: 50%; width: unset; }`,
          `.framer-yNwN9.framer-v-1xloo1b.framer-1d1kab1 { gap: 60px; justify-content: flex-start; padding: 12px 15px 15px 15px; width: 390px; }`,
          `.framer-yNwN9.framer-v-1xloo1b .framer-17h505s { order: 0; }`,
          `.framer-yNwN9.framer-v-1xloo1b .framer-1676kmb, .framer-yNwN9.framer-v-1xloo1b .framer-r21me7, .framer-yNwN9.framer-v-1a54wf1 .framer-1676kmb, .framer-yNwN9.framer-v-1a54wf1 .framer-r21me7 { top: calc(50.00000000000002% - 2px / 2); }`,
          `.framer-yNwN9.framer-v-1xloo1b .framer-1ruf8ey { cursor: unset; gap: 60px; order: 1; }`,
          `.framer-yNwN9.framer-v-1xloo1b .framer-1otylbd { gap: 30px 20px; grid-template-columns: repeat(1, minmax(50px, 1fr)); }`,
          `.framer-yNwN9.framer-v-1xloo1b .framer-z504u4, .framer-yNwN9.framer-v-1xloo1b .framer-v7y9tx, .framer-yNwN9.framer-v-1xloo1b .framer-19o6xln, .framer-yNwN9.framer-v-1xloo1b .framer-efz81s, .framer-yNwN9.framer-v-1xloo1b .framer-1phzb8y, .framer-yNwN9.framer-v-1xloo1b .framer-1moamhg, .framer-yNwN9.framer-v-1a54wf1 .framer-1otylbd, .framer-yNwN9.framer-v-1a54wf1 .framer-z504u4, .framer-yNwN9.framer-v-1a54wf1 .framer-v7y9tx, .framer-yNwN9.framer-v-1a54wf1 .framer-19o6xln, .framer-yNwN9.framer-v-1a54wf1 .framer-efz81s, .framer-yNwN9.framer-v-1a54wf1 .framer-1phzb8y, .framer-yNwN9.framer-v-1a54wf1 .framer-1moamhg { cursor: pointer; }`,
          `.framer-yNwN9.framer-v-1xloo1b .framer-19j2r9l-container, .framer-yNwN9.framer-v-1a54wf1 .framer-19j2r9l-container { width: 100%; }`,
          `.framer-yNwN9.framer-v-1a54wf1 .framer-1ruf8ey { padding: 0px 20px 0px 0px; }`,
          ...Tn,
          ...$e,
          `.framer-yNwN9[data-border="true"]::after, .framer-yNwN9 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-yNwN9`
      )),
      ($.displayName = `Navigation`),
      ($.defaultProps = { height: 70, width: 513 }),
      D($, {
        variant: {
          options: [`QdL3QXxj0`, `xqiGo3xlH`, `JQUPDSygQ`, `vT3vaGDRl`],
          optionTitles: [`Desktop`, `Phone Closed`, `Phone Opened`, `Desktop - Open`],
          title: `Variant`,
          type: z.Enum,
        },
        Ly5GoFpct: {
          defaultValue: {
            borderColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)) /* {"name":"White"} */`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
          title: `Border`,
          type: z.Border,
        },
      }),
      Ne(
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
          ...Bn,
          ...Vn,
          ...P(wn),
          ...P(et),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([M(Z, {}, t), M(yt, {}, t)])) }));
  }),
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr = e(() => {
    (y(),
      F(),
      ae(),
      n(),
      At(),
      Cn(),
      nr(),
      (rr = j($)),
      (ir = _e(T.div)),
      (ar = j(kt)),
      (or = j(X)),
      (sr = me(T.div)),
      (cr = {
        cksXyybG0: `(max-width: 809.98px)`,
        eUNCoGOdT: `(min-width: 810px) and (max-width: 1199.98px)`,
        IqkuZjtQY: `(min-width: 1200px)`,
      }),
      (lr = `framer-pcsMn`),
      (ur = {
        cksXyybG0: `framer-v-1be9rcj`,
        eUNCoGOdT: `framer-v-116qdhc`,
        IqkuZjtQY: `framer-v-dgcwv5`,
      }),
      (dr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (fr = (e, t) => `translateX(-50%) ${t}`),
      (pr = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (mr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.1, duration: 0.6, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (hr = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (gr = {
        cksXyybG0: [
          `.framer-pcsMn .framer-197ddwn-container { left: 20px; right: 20px; width: unset; }`,
        ],
        eUNCoGOdT: [`.framer-pcsMn .framer-1ck1gcc { will-change: unset; }`],
      }),
      (_r = Object.keys(gr)),
      (vr = { cksXyybG0: `.framer-1be9rcj-override`, eUNCoGOdT: `.framer-116qdhc-override` }),
      (yr = [
        `.framer-pcsMn.framer-ehv5sl, .framer-pcsMn .framer-ehv5sl { display: block; }`,
        `.framer-pcsMn.framer-dgcwv5 { align-content: center; align-items: center; background-color: var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, #f2f2f2); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-pcsMn .framer-197ddwn-container { flex: none; height: auto; left: 50%; order: -1000; position: var(--framer-canvas-fixed-position, fixed); top: 20px; width: 650px; z-index: 10; }`,
        `.framer-pcsMn .framer-1tgpkr4 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-pcsMn .framer-1ck1gcc { -webkit-backdrop-filter: blur(10px); -webkit-mask: linear-gradient(180deg, rgba(0, 0, 0, 0) 19.05792511261261%, rgba(0, 0, 0, 0.65) 100%) add; backdrop-filter: blur(10px); background-color: rgba(255, 255, 255, 0.2); bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 0px); flex: none; height: 150px; left: 0px; mask: linear-gradient(180deg, rgba(0,0,0,0) 19.05792511261261%, rgba(0, 0, 0, 0.65) 100%) add; order: 1002; overflow: var(--overflow-clip-fallback, clip); position: var(--framer-canvas-fixed-position, fixed); right: 0px; will-change: var(--framer-will-change-effect-override, transform); z-index: 5; }`,
        `.framer-pcsMn .framer-14ls5bn-container { flex: none; height: auto; order: 1003; position: relative; width: auto; }`,
        `.framer-pcsMn .framer-1nh0s0e-container { flex: none; height: auto; order: 1004; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (br = {
        cksXyybG0: `(max-width: 809.98px)`,
        eUNCoGOdT: `(min-width: 810px) and (max-width: 1199.98px)`,
        IqkuZjtQY: `(min-width: 1200px)`,
      }),
      (xr = { Desktop: `IqkuZjtQY`, Phone: `cksXyybG0`, Tablet: `eUNCoGOdT` }),
      (Sr = ({ value: e }) =>
        We()
          ? null
          : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Cr = ({ height: e, id: t, navBorder: n, width: r, ...i }) => ({
        ...i,
        pgJwkoDWo: n ??
          i.pgJwkoDWo ?? {
            borderColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)) /* {"name":"White"} */`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
        variant: xr[i.variant] ?? i.variant ?? `IqkuZjtQY`,
      })),
      (wr = p(function (e, t) {
        let n = s(null),
          r = t ?? n,
          i = re(),
          { activeLocale: a, setLocale: o } = V(),
          {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            pgJwkoDWo: p,
            children: m,
            ...h
          } = Cr(e),
          [g, v] = Ae(d, cr, !1),
          ee = N(lr);
        return (
          je({}),
          f(Ve.Provider, {
            value: {
              activeVariantId: g,
              humanReadableVariantMap: xr,
              isLayoutTemplate: !0,
              primaryVariantId: `IqkuZjtQY`,
              variantClassNames: ur,
            },
            children: _(ie, {
              id: u ?? i,
              children: [
                f(Sr, {
                  value: `:root body { background: var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242)); }`,
                }),
                _(sr, {
                  ...h,
                  className: N(ee, `framer-dgcwv5`, l),
                  "data-layout-template": !0,
                  flowEffectEnabled: !0,
                  flowEffectTransition: dr,
                  isNestedFlowEffect: !1,
                  ref: r,
                  style: { ...c },
                  children: [
                    f(Ce, {
                      breakpoint: g,
                      overrides: { cksXyybG0: { width: `calc(100vw - 40px)` } },
                      children: f(R, {
                        height: 70,
                        width: `650px`,
                        y: 20,
                        children: f(Ce, {
                          breakpoint: g,
                          overrides: {
                            cksXyybG0: {
                              "data-framer-layout-hint-center-x": void 0,
                              transformTemplate: void 0,
                            },
                          },
                          children: f(Se, {
                            className: `framer-197ddwn-container`,
                            "data-framer-layout-hint-center-x": !0,
                            layout: `position`,
                            layoutScroll: !0,
                            nodeId: `I0kse7O5_`,
                            rendersWithMotion: !0,
                            scopeId: `uJLWmEfJU`,
                            transformTemplate: fr,
                            children: f(Ce, {
                              breakpoint: g,
                              overrides: {
                                cksXyybG0: { variant: pr(`xqiGo3xlH`) },
                                eUNCoGOdT: { variant: pr(`xqiGo3xlH`) },
                              },
                              children: f($, {
                                height: `100%`,
                                id: `I0kse7O5_`,
                                layoutId: `I0kse7O5_`,
                                Ly5GoFpct: p,
                                style: { width: `100%` },
                                variant: pr(`QdL3QXxj0`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    m,
                    f(`div`, { className: `framer-1tgpkr4` }),
                    f(Ce, {
                      breakpoint: g,
                      overrides: {
                        eUNCoGOdT: { animate: void 0, initial: void 0, optimized: void 0 },
                      },
                      children: f(ir, {
                        animate: mr,
                        className: `framer-1ck1gcc`,
                        "data-framer-appear-id": `1ck1gcc`,
                        initial: hr,
                        layout: `position`,
                        optimized: !0,
                      }),
                    }),
                    f(R, {
                      children: f(Se, {
                        className: `framer-14ls5bn-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: `position`,
                        nodeId: `tzQVNWm5f`,
                        rendersWithMotion: !0,
                        scopeId: `uJLWmEfJU`,
                        children: f(kt, {
                          height: `100%`,
                          id: `tzQVNWm5f`,
                          intensity: 6,
                          layoutId: `tzQVNWm5f`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    f(R, {
                      height: 963,
                      width: `100vw`,
                      y: 1200,
                      children: f(Se, {
                        className: `framer-1nh0s0e-container`,
                        layout: `position`,
                        nodeId: `RmInjaJY6`,
                        rendersWithMotion: !0,
                        scopeId: `uJLWmEfJU`,
                        children: f(Ce, {
                          breakpoint: g,
                          overrides: {
                            cksXyybG0: { variant: pr(`ENEJMQb5q`) },
                            eUNCoGOdT: { variant: pr(`c9mmVCYFm`) },
                          },
                          children: f(X, {
                            height: `100%`,
                            id: `RmInjaJY6`,
                            layoutId: `RmInjaJY6`,
                            style: { width: `100%` },
                            variant: pr(`MzmrI7HKa`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                f(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Tr = (e) =>
        e === ve.canvas || e === ve.export
          ? [
              ...yr,
              ..._r.flatMap((e) => {
                let t = vr[e];
                return gr[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...yr, ..._r.map((e) => `@media ${br[e]} { ${gr[e].join(` `)} }`)]),
      (Er = Pe(wr, Tr, `framer-pcsMn`)),
      (Er.displayName = `Template`),
      (Er.defaultProps = { height: 1e3, width: 1200 }),
      D(Er, {
        pgJwkoDWo: {
          defaultValue: {
            borderColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)) /* {"name":"White"} */`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
          title: `Nav Border`,
          type: z.Border,
        },
      }),
      Ne(Er, [{ explicitInter: !0, fonts: [] }, ...rr, ...ar, ...or], {
        supportsExplicitInterCodegen: !0,
      }),
      (Er.loader = { load: (e, t) => (t.locale, Promise.allSettled([M($, {}, t), M(X, {}, t)])) }));
  });
function Or({ webPageId: e, children: t, style: n, ...r }) {
  let i = {
      pgJwkoDWo: {
        borderColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
        borderStyle: `solid`,
        borderWidth: 1,
      },
    },
    a = {
      ...i,
      pgJwkoDWo: {
        borderColor: `var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, rgb(230, 230, 230))`,
        borderStyle: `solid`,
        borderWidth: 1,
      },
    },
    o = {
      ...i,
      pgJwkoDWo: {
        borderColor: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
        borderStyle: `solid`,
        borderWidth: 1,
      },
    },
    s =
      {
        augiA20Il: i,
        DeSByTurf: i,
        G7CG60dlp: a,
        H3B8pYtQG: a,
        IF3lVCAg9: o,
        oZjhJQFrN: o,
        pS1Xfqls7: a,
        T_zVflsz4: a,
      }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `DeSByTurf`:
    case `G7CG60dlp`:
    case `pS1Xfqls7`:
    case `oZjhJQFrN`:
    case `H3B8pYtQG`:
    case `T_zVflsz4`:
    case `IF3lVCAg9`:
      return S(Er, { ...s, key: `Template1`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function kr(e) {
  switch (e) {
    case `augiA20Il`:
    case `DeSByTurf`:
    case `G7CG60dlp`:
    case `pS1Xfqls7`:
    case `oZjhJQFrN`:
    case `H3B8pYtQG`:
    case `T_zVflsz4`:
    case `IF3lVCAg9`:
      return [
        { hash: `dgcwv5`, mediaQuery: `(min-width: 1200px)` },
        { hash: `116qdhc`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `1be9rcj`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function Ar({
  routeId: e,
  pathVariables: t,
  canonicalPathVariables: n,
  localeId: i,
  collectionItemId: l,
  contentLocaleId: u,
  shouldResolveInitialRouteContentState: d = !1,
}) {
  let f = Nr[e].page.preload();
  (Te({
    checkServerSideRouter: !1,
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    Be(Ir));
  let p = S(xe, {
    children: S(Ee, {
      children: S(Ue, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        canonicalPathVariables: n,
        routes: Nr,
        collectionUtils: Fr,
        framerSiteId: Ir,
        notFoundPage: I(() => import(`./YE-V-ze2afimkEz3PlphlIMdyxuXK5NcVWSoTW5ULuI.BLRH_e0z.mjs`)),
        isReducedMotion: void 0,
        localeId: i,
        locales: Pr,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://digimk.framer.website`,
        EditorBar:
          w === void 0
            ? void 0
            : (() => {
                if (Rr) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return I(async () => {
                  w.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: Le, useLocaleInfo: V, useRouter: ce },
                    react: {
                      createElement: S,
                      Fragment: c,
                      memo: m,
                      useCallback: a,
                      useEffect: o,
                      useRef: s,
                      useState: r,
                      useLayoutEffect: C,
                    },
                    "react-dom": { createPortal: h },
                  };
                  let { createEditorBar: e } = await import(`init.mjs`);
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        LayoutTemplate: Or,
        loadSnippetsModule: new Ie(
          () => import(`./BtFBXlpZfjwF0fXCJYHl7sHCpunOoHgdbsHYq5MZEac.dObCGW41.mjs`)
        ),
        initialCollectionItemId: l,
        initialContentLocaleIdOverride: u,
      }),
    }),
    value: {
      global: {
        enter: {
          opacity: 0,
          rotate: 0,
          rotate3d: !1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          transition: {
            damping: 30,
            delay: 0,
            duration: 0.2,
            ease: [0.27, 0, 0.51, 1],
            mass: 1,
            stiffness: 400,
            type: `tween`,
          },
          x: `0px`,
          y: `0px`,
        },
      },
      routes: {},
    },
  });
  return (await f, p);
}
function jr() {
  Lr && w.__framer_events.push(arguments);
}
async function Mr(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || w.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    jr(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s, c, l;
    if (e)
      ((l = JSON.parse(t.dataset.framerHydrateV2)),
        (r = l.routeId),
        (i = l.localeId),
        (a = l.contentLocaleId),
        (o = l.pathVariables),
        (s = l.canonicalPathVariables),
        (c = l.breakpoints),
        (r = Re(Nr, r)));
    else {
      Re(Nr, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((o ??= {}), (o[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = de(Nr, decodeURIComponent(location.pathname), !0, Pr);
        ((r = e.routeId), (i = e.localeId), (o = e.pathVariables));
      }
    }
    let d = Ar({
      routeId: r,
      localeId: i,
      contentLocaleId: a,
      pathVariables: o,
      canonicalPathVariables: s,
      collectionItemId: e ? l?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    w !== void 0 &&
      (async () => {
        let e = Nr[r],
          t = Pr.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = l?.collectionItemId ?? null;
        if (n === null && e?.collectionId && Fr) {
          let r = await Fr[e.collectionId]?.(),
            [i] = Object.values(o);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let a = Intl.DateTimeFormat().resolvedOptions(),
          s = a.timeZone,
          c = a.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          w.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Ir,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: w.location.href,
              hostname: w.location.hostname || null,
              pathname: w.location.pathname || null,
              hash: w.location.hash || null,
              search: w.location.search || null,
              timezone: s,
              locale: c,
            },
            `eager`,
          ]),
          await fe({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let f = await d;
    e
      ? (A(`framer-rewrite-breakpoints`, () => {
          (Me(c), w.__framer_onRewriteBreakpoints?.(c));
        }),
        (Rr ? (e) => e() : u)(() => {
          (oe(), He(), ne(t, f, { onRecoverableError: n }));
        }))
      : x(t, { onRecoverableError: n }).render(f);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var Nr, Pr, Fr, Ir, Lr, Rr;
e(() => {
  if (
    (i(),
    F(),
    n(),
    d(),
    ee(),
    Dr(),
    (Nr = {
      augiA20Il: {
        elements: {
          CZ86fk2uN: `contact`,
          JhphQE3lp: `process`,
          oXLUVASEz: `pricing`,
          VnW5NTYc5: `why-us`,
          wCrl5EG3s: `services`,
        },
        page: I(() => import(`./-KlnURMvs5BMxTmatFqr3xSVqNbWKqoEYXGyZbaVVkY.D4vX_yJk.mjs`)),
        path: `/`,
      },
      DeSByTurf: {
        elements: {},
        page: I(() => import(`./YE-V-ze2afimkEz3PlphlIMdyxuXK5NcVWSoTW5ULuI.BLRH_e0z.mjs`)),
        path: `/404`,
      },
      G7CG60dlp: {
        elements: { URpi1EodE: `contact` },
        page: I(() => import(`./q12_8aR5WerDotdVQwIj_NnDuoUGW-O-wG4qlwp7_iQ.Ldo17CSg.mjs`)),
        path: `/blog`,
      },
      pS1Xfqls7: {
        elements: {},
        page: I(() => import(`./mLi0Yy6aSLtxhQoNohFsGTZCaPyfkEQTmYBRiRtIm6o.Cw7zA4n_.mjs`)),
        path: `/contact`,
      },
      oZjhJQFrN: {
        elements: {},
        page: I(() => import(`./f0YvFaa0MDGCLZcMYUFXCoENlPGDqNeVn83ObGcO7Bo.Me4qJeuv.mjs`)),
        path: `/case-studies`,
      },
      H3B8pYtQG: {
        collectionId: `GOOfSxABL`,
        elements: { tjzIyd5Jo: `contact` },
        page: I(() => import(`./-AEVOMebNl3SiJmY3uxzIc3b5551bLC9Yy1dl8S0PyE.BXrYwEE-.mjs`)),
        path: `/blog/:iL9ZpSkZM`,
      },
      T_zVflsz4: {
        collectionId: `NvVsF9Krs`,
        elements: {},
        page: I(() => import(`./K7heJTOqGv4WOiHY-meZmzEy078msD2c6dptTiLvtAY.Bgybabp3.mjs`)),
        path: `/legal/:xsOQkQirM`,
      },
      IF3lVCAg9: {
        collectionId: `wt7eQU6AQ`,
        elements: { Nq5sulIsH: `contact` },
        page: I(() => import(`./lFFLTblqdFWalIhglrcrfAzNXvndoZMwc5a3wHIuDjw._rje_hUp.mjs`)),
        path: `/case-studies/:WUOYxBUlT`,
      },
    }),
    (Pr = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (Fr = {
      GOOfSxABL: async () =>
        (await import(`./WMW_S_ggcqIxT_LO0jmSMTNLAvebS-Ptd_OsbWpI_9c.o3IQXMjv.mjs`))?.utils,
      NvVsF9Krs: async () =>
        (await import(`./wsoa94MnhpEchxWQ5Kk50U2yj3XUI1YtuLG5mDTumKc.8bR5rN65.mjs`))?.utils,
      wt7eQU6AQ: async () =>
        (await import(`./hS2js0Z1gdxgtLGeTUR9mNOjzZMZNlltCP0K9X6thGY.D5QgWot4.mjs`))?.utils,
    }),
    (Ir = `8865d1b567667d2fc89345c91f0a4f1f90ce4acfe8ef97764209d1e3c7f0599a`),
    (Lr = typeof document < `u`),
    (Rr = Lr && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(l.userAgent)),
    Lr)
  ) {
    ((w.__framer_importFromPackage = (e, t) => () =>
      S(ze, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (w.__framer_events = w.__framer_events || []),
      be());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? Mr(!0, e) : Mr(!1, e);
  }
  (function () {
    Lr &&
      u(() => {
        ne(
          document.getElementById(`__framer-badge-container`),
          S(v, {}, S(b(() => import(`./PX9hIOIVM.B7yKn3VS.mjs`))))
        );
      });
  })();
})();
export { kr as getLayoutTemplateBreakpoints, Ar as getPageRoot };
//# sourceMappingURL=script_main.Cfmrlgp1.mjs.map
