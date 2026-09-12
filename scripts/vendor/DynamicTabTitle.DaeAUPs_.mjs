import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { C as t, L as n, N as r, c as i, o as a, z as o } from "./react.C1Oj3OU0.mjs";
import { A as s, X as c, o as l } from "./framer.BpPKSFgL.mjs";
function u(e) {
  let {
    inactiveTitles:
      t = `Come Back 👀 | Your next viral edit is waiting | Still planning your content?`,
    intervalMs: n = 2500,
  } = e;
  return (
    r(() => {
      let e = document.title,
        r = t
          .split(`|`)
          .map((e) => e.trim())
          .filter(Boolean),
        i = null,
        a = 0,
        s = () => {
          if (document.hidden) {
            if (r.length === 0) {
              document.title = `Come Back 👀`;
              return;
            }
            ((document.title = r[a]),
              (i = o.setInterval(() => {
                ((a = (a + 1) % r.length), (document.title = r[a]));
              }, n)));
          } else ((i &&= (clearInterval(i), null)), (a = 0), (document.title = e));
        };
      return (
        document.addEventListener(`visibilitychange`, s),
        () => {
          (document.removeEventListener(`visibilitychange`, s),
            i && clearInterval(i),
            (document.title = e));
        }
      );
    }, [t, n]),
    i(`div`, { style: { width: 0, height: 0 } })
  );
}
var d = e(() => {
  (n(),
    a(),
    t(),
    c(),
    s(u, {
      inactiveTitles: {
        type: l.String,
        title: `Messages`,
        defaultValue: `Come Back 👀 | Your next viral edit is waiting | Still planning your content?`,
      },
      intervalMs: {
        type: l.Number,
        title: `Interval`,
        defaultValue: 2500,
        min: 1e3,
        max: 1e4,
        step: 500,
      },
    }));
});
export { d as n, u as t };
//# sourceMappingURL=DynamicTabTitle.DaeAUPs_.mjs.map
