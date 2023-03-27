import kg, { useRef as zI, useEffect as $I } from "react";
var fg = {}, AB = {
  get exports() {
    return fg;
  },
  set exports(A) {
    fg = A;
  }
}, UA = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _g;
function gB() {
  if (_g)
    return UA;
  _g = 1;
  var A = kg, g = Symbol.for("react.element"), I = Symbol.for("react.fragment"), B = Object.prototype.hasOwnProperty, Q = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function e(i, t, n) {
    var o, a = {}, c = null, w = null;
    n !== void 0 && (c = "" + n), t.key !== void 0 && (c = "" + t.key), t.ref !== void 0 && (w = t.ref);
    for (o in t)
      B.call(t, o) && !C.hasOwnProperty(o) && (a[o] = t[o]);
    if (i && i.defaultProps)
      for (o in t = i.defaultProps, t)
        a[o] === void 0 && (a[o] = t[o]);
    return { $$typeof: g, type: i, key: c, ref: w, props: a, _owner: Q.current };
  }
  return UA.Fragment = I, UA.jsx = e, UA.jsxs = e, UA;
}
var pA = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pg;
function IB() {
  return Pg || (Pg = 1, process.env.NODE_ENV !== "production" && function() {
    var A = kg, g = Symbol.for("react.element"), I = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), e = Symbol.for("react.provider"), i = Symbol.for("react.context"), t = Symbol.for("react.forward_ref"), n = Symbol.for("react.suspense"), o = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), D = Symbol.iterator, M = "@@iterator";
    function N(E) {
      if (E === null || typeof E != "object")
        return null;
      var s = D && E[D] || E[M];
      return typeof s == "function" ? s : null;
    }
    var F = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(E) {
      {
        for (var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++)
          r[u - 1] = arguments[u];
        S("error", E, r);
      }
    }
    function S(E, s, r) {
      {
        var u = F.ReactDebugCurrentFrame, k = u.getStackAddendum();
        k !== "" && (s += "%s", r = r.concat([k]));
        var Y = r.map(function(R) {
          return String(R);
        });
        Y.unshift("Warning: " + s), Function.prototype.apply.call(console[E], console, Y);
      }
    }
    var h = !1, x = !1, $ = !1, fA = !1, lA = !1, uA;
    uA = Symbol.for("react.module.reference");
    function hA(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === B || E === C || lA || E === Q || E === n || E === o || fA || E === w || h || x || $ || typeof E == "object" && E !== null && (E.$$typeof === c || E.$$typeof === a || E.$$typeof === e || E.$$typeof === i || E.$$typeof === t || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === uA || E.getModuleId !== void 0));
    }
    function CA(E, s, r) {
      var u = E.displayName;
      if (u)
        return u;
      var k = s.displayName || s.name || "";
      return k !== "" ? r + "(" + k + ")" : r;
    }
    function AA(E) {
      return E.displayName || "Context";
    }
    function O(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case B:
          return "Fragment";
        case I:
          return "Portal";
        case C:
          return "Profiler";
        case Q:
          return "StrictMode";
        case n:
          return "Suspense";
        case o:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case i:
            var s = E;
            return AA(s) + ".Consumer";
          case e:
            var r = E;
            return AA(r._context) + ".Provider";
          case t:
            return CA(E, E.render, "ForwardRef");
          case a:
            var u = E.displayName || null;
            return u !== null ? u : O(E.type) || "Memo";
          case c: {
            var k = E, Y = k._payload, R = k._init;
            try {
              return O(R(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, f = 0, m, K, v, q, l, d, J;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function H() {
      {
        if (f === 0) {
          m = console.log, K = console.info, v = console.warn, q = console.error, l = console.group, d = console.groupCollapsed, J = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: X,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        f++;
      }
    }
    function BA() {
      {
        if (f--, f === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, E, {
              value: m
            }),
            info: _({}, E, {
              value: K
            }),
            warn: _({}, E, {
              value: v
            }),
            error: _({}, E, {
              value: q
            }),
            group: _({}, E, {
              value: l
            }),
            groupCollapsed: _({}, E, {
              value: d
            }),
            groupEnd: _({}, E, {
              value: J
            })
          });
        }
        f < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yA = F.ReactCurrentDispatcher, JA;
    function xA(E, s, r) {
      {
        if (JA === void 0)
          try {
            throw Error();
          } catch (k) {
            var u = k.stack.trim().match(/\n( *(at )?)/);
            JA = u && u[1] || "";
          }
        return `
` + JA + E;
      }
    }
    var rg = !1, TA;
    {
      var MI = typeof WeakMap == "function" ? WeakMap : Map;
      TA = new MI();
    }
    function mg(E, s) {
      if (!E || rg)
        return "";
      {
        var r = TA.get(E);
        if (r !== void 0)
          return r;
      }
      var u;
      rg = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = yA.current, yA.current = null, H();
      try {
        if (s) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (EA) {
              u = EA;
            }
            Reflect.construct(E, [], R);
          } else {
            try {
              R.call();
            } catch (EA) {
              u = EA;
            }
            E.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (EA) {
            u = EA;
          }
          E();
        }
      } catch (EA) {
        if (EA && u && typeof EA.stack == "string") {
          for (var G = EA.stack.split(`
`), Z = u.stack.split(`
`), L = G.length - 1, b = Z.length - 1; L >= 1 && b >= 0 && G[L] !== Z[b]; )
            b--;
          for (; L >= 1 && b >= 0; L--, b--)
            if (G[L] !== Z[b]) {
              if (L !== 1 || b !== 1)
                do
                  if (L--, b--, b < 0 || G[L] !== Z[b]) {
                    var P = `
` + G[L].replace(" at new ", " at ");
                    return E.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", E.displayName)), typeof E == "function" && TA.set(E, P), P;
                  }
                while (L >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        rg = !1, yA.current = Y, BA(), Error.prepareStackTrace = k;
      }
      var dA = E ? E.displayName || E.name : "", Vg = dA ? xA(dA) : "";
      return typeof E == "function" && TA.set(E, Vg), Vg;
    }
    function SI(E, s, r) {
      return mg(E, !1);
    }
    function YI(E) {
      var s = E.prototype;
      return !!(s && s.isReactComponent);
    }
    function WA(E, s, r) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return mg(E, YI(E));
      if (typeof E == "string")
        return xA(E);
      switch (E) {
        case n:
          return xA("Suspense");
        case o:
          return xA("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case t:
            return SI(E.render);
          case a:
            return WA(E.type, s, r);
          case c: {
            var u = E, k = u._payload, Y = u._init;
            try {
              return WA(Y(k), s, r);
            } catch {
            }
          }
        }
      return "";
    }
    var ZA = Object.prototype.hasOwnProperty, bg = {}, Kg = F.ReactDebugCurrentFrame;
    function OA(E) {
      if (E) {
        var s = E._owner, r = WA(E.type, E._source, s ? s.type : null);
        Kg.setExtraStackFrame(r);
      } else
        Kg.setExtraStackFrame(null);
    }
    function JI(E, s, r, u, k) {
      {
        var Y = Function.call.bind(ZA);
        for (var R in E)
          if (Y(E, R)) {
            var G = void 0;
            try {
              if (typeof E[R] != "function") {
                var Z = Error((u || "React class") + ": " + r + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Z.name = "Invariant Violation", Z;
              }
              G = E[R](s, R, u, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              G = L;
            }
            G && !(G instanceof Error) && (OA(k), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", r, R, typeof G), OA(null)), G instanceof Error && !(G.message in bg) && (bg[G.message] = !0, OA(k), y("Failed %s type: %s", r, G.message), OA(null));
          }
      }
    }
    var LI = Array.isArray;
    function ag(E) {
      return LI(E);
    }
    function UI(E) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, r = s && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return r;
      }
    }
    function pI(E) {
      try {
        return vg(E), !1;
      } catch {
        return !0;
      }
    }
    function vg(E) {
      return "" + E;
    }
    function Hg(E) {
      if (pI(E))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", UI(E)), vg(E);
    }
    var LA = F.ReactCurrentOwner, mI = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, qg, jg, cg;
    cg = {};
    function bI(E) {
      if (ZA.call(E, "ref")) {
        var s = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function KI(E) {
      if (ZA.call(E, "key")) {
        var s = Object.getOwnPropertyDescriptor(E, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function vI(E, s) {
      if (typeof E.ref == "string" && LA.current && s && LA.current.stateNode !== s) {
        var r = O(LA.current.type);
        cg[r] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(LA.current.type), E.ref), cg[r] = !0);
      }
    }
    function HI(E, s) {
      {
        var r = function() {
          qg || (qg = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        r.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function qI(E, s) {
      {
        var r = function() {
          jg || (jg = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        r.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var jI = function(E, s, r, u, k, Y, R) {
      var G = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: E,
        key: s,
        ref: r,
        props: R,
        // Record the component responsible for creating this element.
        _owner: Y
      };
      return G._store = {}, Object.defineProperty(G._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(G, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(G, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(G.props), Object.freeze(G)), G;
    };
    function xI(E, s, r, u, k) {
      {
        var Y, R = {}, G = null, Z = null;
        r !== void 0 && (Hg(r), G = "" + r), KI(s) && (Hg(s.key), G = "" + s.key), bI(s) && (Z = s.ref, vI(s, k));
        for (Y in s)
          ZA.call(s, Y) && !mI.hasOwnProperty(Y) && (R[Y] = s[Y]);
        if (E && E.defaultProps) {
          var L = E.defaultProps;
          for (Y in L)
            R[Y] === void 0 && (R[Y] = L[Y]);
        }
        if (G || Z) {
          var b = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          G && HI(R, b), Z && qI(R, b);
        }
        return jI(E, G, Z, k, u, LA.current, R);
      }
    }
    var lg = F.ReactCurrentOwner, xg = F.ReactDebugCurrentFrame;
    function GA(E) {
      if (E) {
        var s = E._owner, r = WA(E.type, E._source, s ? s.type : null);
        xg.setExtraStackFrame(r);
      } else
        xg.setExtraStackFrame(null);
    }
    var wg;
    wg = !1;
    function Dg(E) {
      return typeof E == "object" && E !== null && E.$$typeof === g;
    }
    function Tg() {
      {
        if (lg.current) {
          var E = O(lg.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function TI(E) {
      {
        if (E !== void 0) {
          var s = E.fileName.replace(/^.*[\\\/]/, ""), r = E.lineNumber;
          return `

Check your code at ` + s + ":" + r + ".";
        }
        return "";
      }
    }
    var Wg = {};
    function WI(E) {
      {
        var s = Tg();
        if (!s) {
          var r = typeof E == "string" ? E : E.displayName || E.name;
          r && (s = `

Check the top-level render call using <` + r + ">.");
        }
        return s;
      }
    }
    function Zg(E, s) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var r = WI(s);
        if (Wg[r])
          return;
        Wg[r] = !0;
        var u = "";
        E && E._owner && E._owner !== lg.current && (u = " It was passed a child from " + O(E._owner.type) + "."), GA(E), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, u), GA(null);
      }
    }
    function Og(E, s) {
      {
        if (typeof E != "object")
          return;
        if (ag(E))
          for (var r = 0; r < E.length; r++) {
            var u = E[r];
            Dg(u) && Zg(u, s);
          }
        else if (Dg(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var k = N(E);
          if (typeof k == "function" && k !== E.entries)
            for (var Y = k.call(E), R; !(R = Y.next()).done; )
              Dg(R.value) && Zg(R.value, s);
        }
      }
    }
    function ZI(E) {
      {
        var s = E.type;
        if (s == null || typeof s == "string")
          return;
        var r;
        if (typeof s == "function")
          r = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === t || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === a))
          r = s.propTypes;
        else
          return;
        if (r) {
          var u = O(s);
          JI(r, E.props, "prop", u, E);
        } else if (s.PropTypes !== void 0 && !wg) {
          wg = !0;
          var k = O(s);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function OI(E) {
      {
        for (var s = Object.keys(E.props), r = 0; r < s.length; r++) {
          var u = s[r];
          if (u !== "children" && u !== "key") {
            GA(E), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), GA(null);
            break;
          }
        }
        E.ref !== null && (GA(E), y("Invalid attribute `ref` supplied to `React.Fragment`."), GA(null));
      }
    }
    function Xg(E, s, r, u, k, Y) {
      {
        var R = hA(E);
        if (!R) {
          var G = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Z = TI(k);
          Z ? G += Z : G += Tg();
          var L;
          E === null ? L = "null" : ag(E) ? L = "array" : E !== void 0 && E.$$typeof === g ? (L = "<" + (O(E.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : L = typeof E, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, G);
        }
        var b = xI(E, s, r, k, Y);
        if (b == null)
          return b;
        if (R) {
          var P = s.children;
          if (P !== void 0)
            if (u)
              if (ag(P)) {
                for (var dA = 0; dA < P.length; dA++)
                  Og(P[dA], E);
                Object.freeze && Object.freeze(P);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Og(P, E);
        }
        return E === B ? OI(b) : ZI(b), b;
      }
    }
    function XI(E, s, r) {
      return Xg(E, s, r, !0);
    }
    function VI(E, s, r) {
      return Xg(E, s, r, !1);
    }
    var _I = VI, PI = XI;
    pA.Fragment = B, pA.jsx = _I, pA.jsxs = PI;
  }()), pA;
}
(function(A) {
  process.env.NODE_ENV === "production" ? A.exports = gB() : A.exports = IB();
})(AB);
const BB = fg.jsx;
const QA = {};
function QB(A) {
  QA.context = A;
}
const CB = (A, g) => A === g, DA = Symbol("solid-proxy"), $A = Symbol("solid-track"), Ag = {
  equals: CB
};
let EI = rI;
const cA = 1, gg = 2, eI = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var T = null;
let wA = null, p = null, W = null, iA = null, Mg = 0;
function MA(A, g) {
  const I = p, B = T, Q = A.length === 0, C = Q ? eI : {
    owned: null,
    cleanups: null,
    context: null,
    owner: g === void 0 ? B : g
  }, e = Q ? A : () => A(() => nA(() => ng(C)));
  T = C, p = null;
  try {
    return YA(e, !0);
  } finally {
    p = I, T = B;
  }
}
function Sg(A, g) {
  g = g ? Object.assign({}, Ag, g) : Ag;
  const I = {
    value: A,
    observers: null,
    observerSlots: null,
    comparator: g.equals || void 0
  }, B = (Q) => (typeof Q == "function" && (Q = Q(I.value)), sI(I, Q));
  return [oI.bind(I), B];
}
function tA(A, g, I) {
  const B = Yg(A, g, !1, cA);
  jA(B);
}
function iI(A, g, I) {
  EI = nB;
  const B = Yg(A, g, !1, cA);
  B.user = !0, iA ? iA.push(B) : jA(B);
}
function gA(A, g, I) {
  I = I ? Object.assign({}, Ag, I) : Ag;
  const B = Yg(A, g, !0, 0);
  return B.observers = null, B.observerSlots = null, B.comparator = I.equals || void 0, jA(B), oI.bind(B);
}
function EB(A) {
  return YA(A, !1);
}
function nA(A) {
  if (p === null)
    return A();
  const g = p;
  p = null;
  try {
    return A();
  } finally {
    p = g;
  }
}
function tI(A) {
  iI(() => nA(A));
}
function tg(A) {
  return T === null || (T.cleanups === null ? T.cleanups = [A] : T.cleanups.push(A)), A;
}
function nI() {
  return p;
}
function eB(A) {
  const g = gA(A), I = gA(() => ug(g()));
  return I.toArray = () => {
    const B = I();
    return Array.isArray(B) ? B : B != null ? [B] : [];
  }, I;
}
function oI() {
  const A = wA;
  if (this.sources && (this.state || A))
    if (this.state === cA || A)
      jA(this);
    else {
      const g = W;
      W = null, YA(() => Bg(this), !1), W = g;
    }
  if (p) {
    const g = this.observers ? this.observers.length : 0;
    p.sources ? (p.sources.push(this), p.sourceSlots.push(g)) : (p.sources = [this], p.sourceSlots = [g]), this.observers ? (this.observers.push(p), this.observerSlots.push(p.sources.length - 1)) : (this.observers = [p], this.observerSlots = [p.sources.length - 1]);
  }
  return this.value;
}
function sI(A, g, I) {
  let B = A.value;
  return (!A.comparator || !A.comparator(B, g)) && (A.value = g, A.observers && A.observers.length && YA(() => {
    for (let Q = 0; Q < A.observers.length; Q += 1) {
      const C = A.observers[Q], e = wA && wA.running;
      e && wA.disposed.has(C), (e && !C.tState || !e && !C.state) && (C.pure ? W.push(C) : iA.push(C), C.observers && aI(C)), e || (C.state = cA);
    }
    if (W.length > 1e6)
      throw W = [], new Error();
  }, !1)), g;
}
function jA(A) {
  if (!A.fn)
    return;
  ng(A);
  const g = T, I = p, B = Mg;
  p = T = A, iB(A, A.value, B), p = I, T = g;
}
function iB(A, g, I) {
  let B;
  try {
    B = A.fn(g);
  } catch (Q) {
    A.pure && (A.state = cA, A.owned && A.owned.forEach(ng), A.owned = null), cI(Q);
  }
  (!A.updatedAt || A.updatedAt <= I) && (A.updatedAt != null && "observers" in A ? sI(A, B) : A.value = B, A.updatedAt = I);
}
function Yg(A, g, I, B = cA, Q) {
  const C = {
    fn: A,
    state: B,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: g,
    owner: T,
    context: null,
    pure: I
  };
  return T === null || T !== eI && (T.owned ? T.owned.push(C) : T.owned = [C]), C;
}
function Ig(A) {
  const g = wA;
  if (A.state === 0 || g)
    return;
  if (A.state === gg || g)
    return Bg(A);
  if (A.suspense && nA(A.suspense.inFallback))
    return A.suspense.effects.push(A);
  const I = [A];
  for (; (A = A.owner) && (!A.updatedAt || A.updatedAt < Mg); )
    (A.state || g) && I.push(A);
  for (let B = I.length - 1; B >= 0; B--)
    if (A = I[B], A.state === cA || g)
      jA(A);
    else if (A.state === gg || g) {
      const Q = W;
      W = null, YA(() => Bg(A, I[0]), !1), W = Q;
    }
}
function YA(A, g) {
  if (W)
    return A();
  let I = !1;
  g || (W = []), iA ? I = !0 : iA = [], Mg++;
  try {
    const B = A();
    return tB(I), B;
  } catch (B) {
    I || (iA = null), W = null, cI(B);
  }
}
function tB(A) {
  if (W && (rI(W), W = null), A)
    return;
  const g = iA;
  iA = null, g.length && YA(() => EI(g), !1);
}
function rI(A) {
  for (let g = 0; g < A.length; g++)
    Ig(A[g]);
}
function nB(A) {
  let g, I = 0;
  for (g = 0; g < A.length; g++) {
    const B = A[g];
    B.user ? A[I++] = B : Ig(B);
  }
  for (QA.context && QB(), g = 0; g < I; g++)
    Ig(A[g]);
}
function Bg(A, g) {
  const I = wA;
  A.state = 0;
  for (let B = 0; B < A.sources.length; B += 1) {
    const Q = A.sources[B];
    Q.sources && (Q.state === cA || I ? Q !== g && Ig(Q) : (Q.state === gg || I) && Bg(Q, g));
  }
}
function aI(A) {
  const g = wA;
  for (let I = 0; I < A.observers.length; I += 1) {
    const B = A.observers[I];
    (!B.state || g) && (B.state = gg, B.pure ? W.push(B) : iA.push(B), B.observers && aI(B));
  }
}
function ng(A) {
  let g;
  if (A.sources)
    for (; A.sources.length; ) {
      const I = A.sources.pop(), B = A.sourceSlots.pop(), Q = I.observers;
      if (Q && Q.length) {
        const C = Q.pop(), e = I.observerSlots.pop();
        B < Q.length && (C.sourceSlots[e] = B, Q[B] = C, I.observerSlots[B] = e);
      }
    }
  if (A.owned) {
    for (g = 0; g < A.owned.length; g++)
      ng(A.owned[g]);
    A.owned = null;
  }
  if (A.cleanups) {
    for (g = 0; g < A.cleanups.length; g++)
      A.cleanups[g]();
    A.cleanups = null;
  }
  A.state = 0, A.context = null;
}
function oB(A) {
  return A instanceof Error || typeof A == "string" ? A : new Error("Unknown error");
}
function cI(A) {
  throw A = oB(A), A;
}
function ug(A) {
  if (typeof A == "function" && !A.length)
    return ug(A());
  if (Array.isArray(A)) {
    const g = [];
    for (let I = 0; I < A.length; I++) {
      const B = ug(A[I]);
      Array.isArray(B) ? g.push.apply(g, B) : g.push(B);
    }
    return g;
  }
  return A;
}
const hg = Symbol("fallback");
function Qg(A) {
  for (let g = 0; g < A.length; g++)
    A[g]();
}
function sB(A, g, I = {}) {
  let B = [], Q = [], C = [], e = 0, i = g.length > 1 ? [] : null;
  return tg(() => Qg(C)), () => {
    let t = A() || [], n, o;
    return t[$A], nA(() => {
      let c = t.length, w, D, M, N, F, y, S, h, x;
      if (c === 0)
        e !== 0 && (Qg(C), C = [], B = [], Q = [], e = 0, i && (i = [])), I.fallback && (B = [hg], Q[0] = MA(($) => (C[0] = $, I.fallback())), e = 1);
      else if (e === 0) {
        for (Q = new Array(c), o = 0; o < c; o++)
          B[o] = t[o], Q[o] = MA(a);
        e = c;
      } else {
        for (M = new Array(c), N = new Array(c), i && (F = new Array(c)), y = 0, S = Math.min(e, c); y < S && B[y] === t[y]; y++)
          ;
        for (S = e - 1, h = c - 1; S >= y && h >= y && B[S] === t[h]; S--, h--)
          M[h] = Q[S], N[h] = C[S], i && (F[h] = i[S]);
        for (w = /* @__PURE__ */ new Map(), D = new Array(h + 1), o = h; o >= y; o--)
          x = t[o], n = w.get(x), D[o] = n === void 0 ? -1 : n, w.set(x, o);
        for (n = y; n <= S; n++)
          x = B[n], o = w.get(x), o !== void 0 && o !== -1 ? (M[o] = Q[n], N[o] = C[n], i && (F[o] = i[n]), o = D[o], w.set(x, o)) : C[n]();
        for (o = y; o < c; o++)
          o in M ? (Q[o] = M[o], C[o] = N[o], i && (i[o] = F[o], i[o](o))) : Q[o] = MA(a);
        Q = Q.slice(0, e = c), B = t.slice(0);
      }
      return Q;
    });
    function a(c) {
      if (C[o] = c, i) {
        const [w, D] = Sg(o);
        return i[o] = D, g(t[o], w);
      }
      return g(t[o]);
    }
  };
}
function rB(A, g, I = {}) {
  let B = [], Q = [], C = [], e = [], i = 0, t;
  return tg(() => Qg(C)), () => {
    const n = A() || [];
    return n[$A], nA(() => {
      if (n.length === 0)
        return i !== 0 && (Qg(C), C = [], B = [], Q = [], i = 0, e = []), I.fallback && (B = [hg], Q[0] = MA((a) => (C[0] = a, I.fallback())), i = 1), Q;
      for (B[0] === hg && (C[0](), C = [], B = [], Q = [], i = 0), t = 0; t < n.length; t++)
        t < B.length && B[t] !== n[t] ? e[t](() => n[t]) : t >= B.length && (Q[t] = MA(o));
      for (; t < B.length; t++)
        C[t]();
      return i = e.length = C.length = n.length, B = n.slice(0), Q = Q.slice(0, i);
    });
    function o(a) {
      C[t] = a;
      const [c, w] = Sg(n[t]);
      return e[t] = w, g(c, t);
    }
  };
}
function j(A, g) {
  return nA(() => A(g || {}));
}
function aB(A) {
  const g = "fallback" in A && {
    fallback: () => A.fallback
  };
  return gA(sB(() => A.each, A.children, g || void 0));
}
function cB(A) {
  const g = "fallback" in A && {
    fallback: () => A.fallback
  };
  return gA(rB(() => A.each, A.children, g || void 0));
}
function zg(A) {
  let g = !1;
  const I = A.keyed, B = gA(() => A.when, void 0, {
    equals: (Q, C) => g ? Q === C : !Q == !C
  });
  return gA(() => {
    const Q = B();
    if (Q) {
      const C = A.children, e = typeof C == "function" && C.length > 0;
      return g = I || e, e ? nA(() => C(Q)) : C;
    }
    return A.fallback;
  }, void 0, void 0);
}
function lI(A) {
  let g = !1, I = !1;
  const B = (e, i) => e[0] === i[0] && (g ? e[1] === i[1] : !e[1] == !i[1]) && e[2] === i[2], Q = eB(() => A.children), C = gA(() => {
    let e = Q();
    Array.isArray(e) || (e = [e]);
    for (let i = 0; i < e.length; i++) {
      const t = e[i].when;
      if (t)
        return I = !!e[i].keyed, [i, t, e[i]];
    }
    return [-1];
  }, void 0, {
    equals: B
  });
  return gA(() => {
    const [e, i, t] = C();
    if (e < 0)
      return A.fallback;
    const n = t.children, o = typeof n == "function" && n.length > 0;
    return g = I || o, o ? nA(() => n(i)) : n;
  }, void 0, void 0);
}
function Cg(A) {
  return A;
}
function lB(A, g, I) {
  let B = I.length, Q = g.length, C = B, e = 0, i = 0, t = g[Q - 1].nextSibling, n = null;
  for (; e < Q || i < C; ) {
    if (g[e] === I[i]) {
      e++, i++;
      continue;
    }
    for (; g[Q - 1] === I[C - 1]; )
      Q--, C--;
    if (Q === e) {
      const o = C < B ? i ? I[i - 1].nextSibling : I[C - i] : t;
      for (; i < C; )
        A.insertBefore(I[i++], o);
    } else if (C === i)
      for (; e < Q; )
        (!n || !n.has(g[e])) && g[e].remove(), e++;
    else if (g[e] === I[C - 1] && I[i] === g[Q - 1]) {
      const o = g[--Q].nextSibling;
      A.insertBefore(I[i++], g[e++].nextSibling), A.insertBefore(I[--C], o), g[Q] = I[C];
    } else {
      if (!n) {
        n = /* @__PURE__ */ new Map();
        let a = i;
        for (; a < C; )
          n.set(I[a], a++);
      }
      const o = n.get(g[e]);
      if (o != null)
        if (i < o && o < C) {
          let a = e, c = 1, w;
          for (; ++a < Q && a < C && !((w = n.get(g[a])) == null || w !== o + c); )
            c++;
          if (c > o - i) {
            const D = g[e];
            for (; i < o; )
              A.insertBefore(I[i++], D);
          } else
            A.replaceChild(I[i++], g[e++]);
        } else
          e++;
      else
        g[e++].remove();
    }
  }
}
const $g = "_$DX_DELEGATE";
function wB(A, g, I, B = {}) {
  let Q;
  return MA((C) => {
    Q = C, g === document ? A() : V(g, A(), g.firstChild ? null : void 0, I);
  }, B.owner), () => {
    Q(), g.textContent = "";
  };
}
function IA(A, g, I) {
  const B = document.createElement("template");
  B.innerHTML = A;
  let Q = B.content.firstChild;
  return I && (Q = Q.firstChild), Q;
}
function Jg(A, g = window.document) {
  const I = g[$g] || (g[$g] = /* @__PURE__ */ new Set());
  for (let B = 0, Q = A.length; B < Q; B++) {
    const C = A[B];
    I.has(C) || (I.add(C), g.addEventListener(C, fB));
  }
}
function DB(A, g, I) {
  I == null ? A.removeAttribute(g) : A.setAttribute(g, I);
}
function wI(A, g) {
  g == null ? A.removeAttribute("class") : A.className = g;
}
function yg(A, g, I, B) {
  if (B)
    Array.isArray(I) ? (A[`$$${g}`] = I[0], A[`$$${g}Data`] = I[1]) : A[`$$${g}`] = I;
  else if (Array.isArray(I)) {
    const Q = I[0];
    A.addEventListener(g, I[0] = (C) => Q.call(A, I[1], C));
  } else
    A.addEventListener(g, I);
}
function og(A, g, I) {
  if (!g)
    return I ? DB(A, "style") : g;
  const B = A.style;
  if (typeof g == "string")
    return B.cssText = g;
  typeof I == "string" && (B.cssText = I = void 0), I || (I = {}), g || (g = {});
  let Q, C;
  for (C in I)
    g[C] == null && B.removeProperty(C), delete I[C];
  for (C in g)
    Q = g[C], Q !== I[C] && (B.setProperty(C, Q), I[C] = Q);
  return I;
}
function Eg(A, g, I) {
  return nA(() => A(g, I));
}
function V(A, g, I, B) {
  if (I !== void 0 && !B && (B = []), typeof g != "function")
    return eg(A, g, B, I);
  tA((Q) => eg(A, g(), Q, I), B);
}
function fB(A) {
  const g = `$$${A.type}`;
  let I = A.composedPath && A.composedPath()[0] || A.target;
  for (A.target !== I && Object.defineProperty(A, "target", {
    configurable: !0,
    value: I
  }), Object.defineProperty(A, "currentTarget", {
    configurable: !0,
    get() {
      return I || document;
    }
  }), QA.registry && !QA.done && (QA.done = !0, document.querySelectorAll("[id^=pl-]").forEach((B) => {
    for (; B && B.nodeType !== 8 && B.nodeValue !== "pl-" + A; ) {
      let Q = B.nextSibling;
      B.remove(), B = Q;
    }
    B && B.remove();
  })); I; ) {
    const B = I[g];
    if (B && !I.disabled) {
      const Q = I[`${g}Data`];
      if (Q !== void 0 ? B.call(I, Q, A) : B.call(I, A), A.cancelBubble)
        return;
    }
    I = I._$host || I.parentNode || I.host;
  }
}
function eg(A, g, I, B, Q) {
  for (QA.context && !I && (I = [...A.childNodes]); typeof I == "function"; )
    I = I();
  if (g === I)
    return I;
  const C = typeof g, e = B !== void 0;
  if (A = e && I[0] && I[0].parentNode || A, C === "string" || C === "number") {
    if (QA.context)
      return I;
    if (C === "number" && (g = g.toString()), e) {
      let i = I[0];
      i && i.nodeType === 3 ? i.data = g : i = document.createTextNode(g), I = NA(A, I, B, i);
    } else
      I !== "" && typeof I == "string" ? I = A.firstChild.data = g : I = A.textContent = g;
  } else if (g == null || C === "boolean") {
    if (QA.context)
      return I;
    I = NA(A, I, B);
  } else {
    if (C === "function")
      return tA(() => {
        let i = g();
        for (; typeof i == "function"; )
          i = i();
        I = eg(A, i, I, B);
      }), () => I;
    if (Array.isArray(g)) {
      const i = [], t = I && Array.isArray(I);
      if (Gg(i, g, I, Q))
        return tA(() => I = eg(A, i, I, B, !0)), () => I;
      if (QA.context) {
        if (!i.length)
          return I;
        for (let n = 0; n < i.length; n++)
          if (i[n].parentNode)
            return I = i;
      }
      if (i.length === 0) {
        if (I = NA(A, I, B), e)
          return I;
      } else
        t ? I.length === 0 ? AI(A, i, B) : lB(A, I, i) : (I && NA(A), AI(A, i));
      I = i;
    } else if (g instanceof Node) {
      if (QA.context && g.parentNode)
        return I = e ? [g] : g;
      if (Array.isArray(I)) {
        if (e)
          return I = NA(A, I, B, g);
        NA(A, I, null, g);
      } else
        I == null || I === "" || !A.firstChild ? A.appendChild(g) : A.replaceChild(g, A.firstChild);
      I = g;
    }
  }
  return I;
}
function Gg(A, g, I, B) {
  let Q = !1;
  for (let C = 0, e = g.length; C < e; C++) {
    let i = g[C], t = I && I[C];
    if (i instanceof Node)
      A.push(i);
    else if (!(i == null || i === !0 || i === !1))
      if (Array.isArray(i))
        Q = Gg(A, i, t) || Q;
      else if (typeof i == "function")
        if (B) {
          for (; typeof i == "function"; )
            i = i();
          Q = Gg(A, Array.isArray(i) ? i : [i], Array.isArray(t) ? t : [t]) || Q;
        } else
          A.push(i), Q = !0;
      else {
        const n = String(i);
        t && t.nodeType === 3 && t.data === n ? A.push(t) : A.push(document.createTextNode(n));
      }
  }
  return Q;
}
function AI(A, g, I = null) {
  for (let B = 0, Q = g.length; B < Q; B++)
    A.insertBefore(g[B], I);
}
function NA(A, g, I, B) {
  if (I === void 0)
    return A.textContent = "";
  const Q = B || document.createTextNode("");
  if (g.length) {
    let C = !1;
    for (let e = g.length - 1; e >= 0; e--) {
      const i = g[e];
      if (Q !== i) {
        const t = i.parentNode === A;
        !C && !e ? t ? A.replaceChild(Q, i) : A.insertBefore(Q, I) : t && i.remove();
      } else
        C = !0;
    }
  } else
    A.insertBefore(Q, I);
  return [Q];
}
let U;
const DI = new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0
});
DI.decode();
let mA = null;
function _A() {
  return (mA === null || mA.byteLength === 0) && (mA = new Uint8Array(U.memory.buffer)), mA;
}
function PA(A, g) {
  return DI.decode(_A().subarray(A, A + g));
}
const eA = new Array(128).fill(void 0);
eA.push(void 0, null, !0, !1);
let HA = eA.length;
function oA(A) {
  HA === eA.length && eA.push(eA.length + 1);
  const g = HA;
  return HA = eA[g], eA[g] = A, g;
}
function sA(A) {
  return eA[A];
}
function uB(A) {
  A < 132 || (eA[A] = HA, HA = A);
}
function FA(A) {
  const g = sA(A);
  return uB(A), g;
}
function dg(A) {
  const g = typeof A;
  if (g == "number" || g == "boolean" || A == null)
    return `${A}`;
  if (g == "string")
    return `"${A}"`;
  if (g == "symbol") {
    const Q = A.description;
    return Q == null ? "Symbol" : `Symbol(${Q})`;
  }
  if (g == "function") {
    const Q = A.name;
    return typeof Q == "string" && Q.length > 0 ? `Function(${Q})` : "Function";
  }
  if (Array.isArray(A)) {
    const Q = A.length;
    let C = "[";
    Q > 0 && (C += dg(A[0]));
    for (let e = 1; e < Q; e++)
      C += ", " + dg(A[e]);
    return C += "]", C;
  }
  const I = /\[object ([^\]]+)\]/.exec(toString.call(A));
  let B;
  if (I.length > 1)
    B = I[1];
  else
    return toString.call(A);
  if (B == "Object")
    try {
      return "Object(" + JSON.stringify(A) + ")";
    } catch {
      return "Object";
    }
  return A instanceof Error ? `${A.name}: ${A.message}
${A.stack}` : B;
}
let ig = 0;
const zA = new TextEncoder("utf-8"), hB = typeof zA.encodeInto == "function" ? function(A, g) {
  return zA.encodeInto(A, g);
} : function(A, g) {
  const I = zA.encode(A);
  return g.set(I), {
    read: A.length,
    written: I.length
  };
};
function fI(A, g, I) {
  if (I === void 0) {
    const i = zA.encode(A), t = g(i.length);
    return _A().subarray(t, t + i.length).set(i), ig = i.length, t;
  }
  let B = A.length, Q = g(B);
  const C = _A();
  let e = 0;
  for (; e < B; e++) {
    const i = A.charCodeAt(e);
    if (i > 127)
      break;
    C[Q + e] = i;
  }
  if (e !== B) {
    e !== 0 && (A = A.slice(e)), Q = I(Q, B, B = e + A.length * 3);
    const i = _A().subarray(Q + e, Q + B), t = hB(A, i);
    e += t.written;
  }
  return ig = e, Q;
}
let bA = null;
function kA() {
  return (bA === null || bA.byteLength === 0) && (bA = new Int32Array(U.memory.buffer)), bA;
}
function yB(A, g) {
  const I = U.create(A, g);
  return sg.__wrap(I);
}
let KA = null;
function GB() {
  return (KA === null || KA.byteLength === 0) && (KA = new Uint32Array(U.memory.buffer)), KA;
}
function dB(A, g) {
  return GB().subarray(A / 4, A / 4 + g);
}
class sg {
  static __wrap(g) {
    const I = Object.create(sg.prototype);
    return I.ptr = g, I;
  }
  __destroy_into_raw() {
    const g = this.ptr;
    return this.ptr = 0, g;
  }
  free() {
    const g = this.__destroy_into_raw();
    U.__wbg_vtwrapper_free(g);
  }
  /**
  * @param {string} s
  * @returns {Uint32Array}
  */
  feed(g) {
    try {
      const C = U.__wbindgen_add_to_stack_pointer(-16), e = fI(g, U.__wbindgen_malloc, U.__wbindgen_realloc), i = ig;
      U.vtwrapper_feed(C, this.ptr, e, i);
      var I = kA()[C / 4 + 0], B = kA()[C / 4 + 1], Q = dB(I, B).slice();
      return U.__wbindgen_free(I, B * 4), Q;
    } finally {
      U.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @returns {string}
  */
  inspect() {
    try {
      const B = U.__wbindgen_add_to_stack_pointer(-16);
      U.vtwrapper_inspect(B, this.ptr);
      var g = kA()[B / 4 + 0], I = kA()[B / 4 + 1];
      return PA(g, I);
    } finally {
      U.__wbindgen_add_to_stack_pointer(16), U.__wbindgen_free(g, I);
    }
  }
  /**
  * @param {number} l
  * @returns {any}
  */
  get_line(g) {
    const I = U.vtwrapper_get_line(this.ptr, g);
    return FA(I);
  }
  /**
  * @returns {any}
  */
  get_cursor() {
    const g = U.vtwrapper_get_cursor(this.ptr);
    return FA(g);
  }
}
async function NB(A, g) {
  if (typeof Response == "function" && A instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function")
      try {
        return await WebAssembly.instantiateStreaming(A, g);
      } catch (B) {
        if (A.headers.get("Content-Type") != "application/wasm")
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", B);
        else
          throw B;
      }
    const I = await A.arrayBuffer();
    return await WebAssembly.instantiate(I, g);
  } else {
    const I = await WebAssembly.instantiate(A, g);
    return I instanceof WebAssembly.Instance ? {
      instance: I,
      module: A
    } : I;
  }
}
function uI() {
  const A = {};
  return A.wbg = {}, A.wbg.__wbindgen_error_new = function(g, I) {
    const B = new Error(PA(g, I));
    return oA(B);
  }, A.wbg.__wbindgen_object_drop_ref = function(g) {
    FA(g);
  }, A.wbg.__wbindgen_number_new = function(g) {
    return oA(g);
  }, A.wbg.__wbindgen_bigint_from_u64 = function(g) {
    const I = BigInt.asUintN(64, g);
    return oA(I);
  }, A.wbg.__wbindgen_string_new = function(g, I) {
    const B = PA(g, I);
    return oA(B);
  }, A.wbg.__wbg_set_20cbc34131e76824 = function(g, I, B) {
    sA(g)[FA(I)] = FA(B);
  }, A.wbg.__wbg_new_b525de17f44a8943 = function() {
    const g = new Array();
    return oA(g);
  }, A.wbg.__wbg_new_f841cc6f2098f4b5 = function() {
    return oA(/* @__PURE__ */ new Map());
  }, A.wbg.__wbg_new_f9876326328f45ed = function() {
    const g = new Object();
    return oA(g);
  }, A.wbg.__wbindgen_is_string = function(g) {
    return typeof sA(g) == "string";
  }, A.wbg.__wbg_set_17224bc548dd1d7b = function(g, I, B) {
    sA(g)[I >>> 0] = FA(B);
  }, A.wbg.__wbg_set_388c4c6422704173 = function(g, I, B) {
    const Q = sA(g).set(sA(I), sA(B));
    return oA(Q);
  }, A.wbg.__wbindgen_debug_string = function(g, I) {
    const B = dg(sA(I)), Q = fI(B, U.__wbindgen_malloc, U.__wbindgen_realloc), C = ig;
    kA()[g / 4 + 1] = C, kA()[g / 4 + 0] = Q;
  }, A.wbg.__wbindgen_throw = function(g, I) {
    throw new Error(PA(g, I));
  }, A;
}
function hI(A, g) {
  return U = A.exports, Lg.__wbindgen_wasm_module = g, bA = null, KA = null, mA = null, U;
}
function RB(A) {
  const g = uI();
  A instanceof WebAssembly.Module || (A = new WebAssembly.Module(A));
  const I = new WebAssembly.Instance(A, g);
  return hI(I, A);
}
async function Lg(A) {
  const g = uI();
  (typeof A == "string" || typeof Request == "function" && A instanceof Request || typeof URL == "function" && A instanceof URL) && (A = fetch(A));
  const {
    instance: I,
    module: B
  } = await NB(await A, g);
  return hI(I, B);
}
var FB = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  VtWrapper: sg,
  create: yB,
  default: Lg,
  initSync: RB
});
const kB = [62, 0, 0, 0, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 0, 0, 0, 0, 0, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
function XA(A) {
  return kB[A - 43];
}
function MB(A) {
  let g = A.endsWith("==") ? 2 : A.endsWith("=") ? 1 : 0, I = A.length, B = new Uint8Array(3 * (I / 4)), Q;
  for (let C = 0, e = 0; C < I; C += 4, e += 3)
    Q = XA(A.charCodeAt(C)) << 18 | XA(A.charCodeAt(C + 1)) << 12 | XA(A.charCodeAt(C + 2)) << 6 | XA(A.charCodeAt(C + 3)), B[e] = Q >> 16, B[e + 1] = Q >> 8 & 255, B[e + 2] = Q & 255;
  return B.subarray(0, B.length - g);
}
const SB = MB("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KAIAIAMoAggiAmtLBEAgAyACIAAQMSADKAIIIQILIAMoAgQgAmogBEEMaiAAELwBGiADIAAgAmo2AggLIARBEGokAEEAC7wCAAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAFBCGsOCAECAwQFDwYHAAsgAUGEAWsOCgcICwsJCwsLCwoLCyAAQQA6AKsBIABBACAAKAI4QQFrIgEgACgCMCIAQQFrIAAgAUsbIAFBAEgbNgI4DwsgAEEBECgPCyAAEF0gAC0AqgFFDQgMCwsgABBdIAAtAKoBRQ0HDAoLIAAQXSAALQCqAUUNBgwJCyAAQQE2AkAPCyAAQQA2AkAPCyAAEF0gAC0AqgFFDQMMBgsgABBdDAULIAAQVA8LIAAoAjwiASAAKAJERg0BIAENAgsPCyAAQQEQRg8LIABBADoAqwEgACABQQFrNgI8IAAgACgCOCIBIAAoAjBBAWsiACAAIAFLGzYCOA8LIABBADoAqwEgAEEANgI4C8ACAgV/AX4jAEEwayIEJABBJyECAkAgAEKQzgBUBEAgACEHDAELA0AgBEEJaiACaiIDQQRrIAAgAEKQzgCAIgdCkM4Afn2nIgVB//8DcUHkAG4iBkEBdEHKpMAAai8AADsAACADQQJrIAUgBkHkAGxrQf//A3FBAXRByqTAAGovAAA7AAAgAkEEayECIABC/8HXL1YgByEADQALCyAHpyIDQeMASwRAIAenIgVB//8DcUHkAG4hAyACQQJrIgIgBEEJamogBSADQeQAbGtB//8DcUEBdEHKpMAAai8AADsAAAsCQCADQQpPBEAgAkECayICIARBCWpqIANBAXRByqTAAGovAAA7AAAMAQsgAkEBayICIARBCWpqIANBMGo6AAALIAFBzKHAAEEAIARBCWogAmpBJyACaxAUIARBMGokAAuwAgEDfyMAQUBqIgMkACADQRBqIAAoAjAiBBBEIANBADYCICADIAMpAxA3AxggA0EyaiAAQZoBaikBADcBACADQSA2AiggAyAAKQKUATcCLCADQRhqIAQgA0EoahAwAkAgASACTQRAIABB7ABqKAIAIgQgAkkNASABIAJHBEAgAEHoAGooAgAgAUEMbGoiACACIAFrQQxsaiECA0AgAygCHCEEIANBCGogAygCICIBEEQgAygCCCEFIAMoAgwg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MCAEKAI0EC0gA0EwaiACEDUgBEEAOgCkASAEQcwAaiAEKAJMBEAgBEHQAGooAgAQEAsgBEKAgICAIDcCTCAEQdQAaiICQQA2AgBBABBmIARB0ABqKAIAIAIoAgBBAXRqQQA7AQAgAiACKAIAQQFqNgIAIAQoAlgEQCAEKAJcEBALIARBADYCYCAEQoCAgIDAADcCWCADQRBqIgUgA0EoaigCADYCACADIAMpAyA3AwggBEHkAGoiAhBgIAQoAmQEQCAEQegAaigCABAQCyACIAMpAwg3AgAgAkEIaiAFKAIANgIAIARB8ABqIgIQYCAEKAJwBEAgBEH0AGooAgAQEAsgAiADKQMwNwIAIARBADoApQEgAkEIaiADQThqKAIANgIAIANBCGogBCgCMBA/IARB/ABqIQIgBCgCfARAIARBgAFqKAIAEBALIAIgAykDCDcCACACQQhqIANBCGoiCkEIaiICKAIANgIAIARBAToApgEgBEIANwI4IANBD2oiBUEAOwAAIARBmAFqQQI6AAAgBEECOgCUASADQQA2AAsgBEGZAWogAykACDcAACAEQaEBaiACLQAAOgAAIARBADoAqwEgBEGAgAQ2AKcBIARBADsBogEgBEIANwJAIAQgBCgCNCIGQQFrNgJIIAVBADsAACADQQA2AAsgBCADKQAINwANIARBFWogAi0AADoAACAEQYACOwEWIARBAjoADCAEQQI6AAggBEIANwIAIAVBADsAACADQQA2AAsgBEElaiADKQAINwAAIARBLWogAi0AADoAACAEQS5qQYACOwEAIARBJGpBAjoAACAEQSBqQQI6AAAgBEIANwIYIAMgBhBZIAJBADYCACADIAMpAwA3AwggCiAGEEkgA0HIAGogAigCADYCACADIAMpAwg3A0AgBEGIAWohAiAEKAKIAQRAIARBjAFqKAIAEBALIAIgAykDQDcCACACQQhqIANByABqKAIANgIADAILIAIgAkGwjsAAEEoACwJAAkAgBUEoaw4CAAECCyAEQQA6AKIBDAELIAJBMEYEQCAEQQE6AKMBDAELIARBADoAowELIANB0ABqJAALIAggFEcNAAsLIAQoApABIQMgBCgCjAEhAiANQQA2AgggDSACNgIEIA0gAiADajYCACMAQTBrIgUkACANKAIEIQIgDSgCACEGAkACQANA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DQAgAUEMbCICQQBIDQAgAUGr1arVAElBAnQhAyACRQ0BIAIgAxCWAQwCCxBuAAsgAwsiBA0AIAIgA0GEvMAAKAIAIgBBwgAgABsRAgAACyAAIAQ2AgQgACABNgIAC4ABAQN/AkAgACgCSEEBaiIDIAAoAkQiAk8EQCAAQewAaigCACIEIANJDQEgASADIAJrIgQgASAESRshASAAQegAaigCACACQQxsaiAEIAEQdyAAIAIgASACahAhIAAgAiADEFUPCyACIANBgI7AABCjAQALIAMgBEGAjsAAEKIBAAuAAQEDfwJAIAAoAkhBAWoiAiAAKAJEIgNPBEAgAEHsAGooAgAiBCACSQ0BIAEgAiADayIEIAEgBEkbIQEgAEHoAGooAgAgA0EMbGogBCABEHogACACIAFrIAIQISAAIAMgAhBVDwsgAyACQfCNwAAQowEACyACIARB8I3AABCiAQALgQEBAX8CQCACIABB7ABqKAIAIgRJBEAgAEHoAGooAgAgAkEMbGoiACgCCCICIAFNDQEgACgCBCABQRRsaiIAIAMpAgA3AgAgAEEQaiADQRBqKAIANgIAIABBCGogA0EIaikCADcCAA8LIAIgBEGsjcAAEEoACyABIAJBrI3AABBKAAt2AQN/IAEgACgCACAAKAIIIgJrSwRAIAAgAiABEGcgACgCCCECCyAAKAIEIgQgAmohAwJAAkAgAUECTwRAIANBASABQQFrIgEQvQEgBCABIAJqIgJqIQMMAQsgAUUNAQsgA0EBOgAAIAJBAWohAgsgACACNgIIC3wBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQQhqIgBBDGpBAjYCACADQRxqQQI2AgAgA0EgaiIBQQxqQcEANgIAIANBrKLAADYCECADQQA2AgggA0HBADYCJCADIAE2AhggAyADNgIoIAMgA0EEajYCICAAIAIQcgALtQEBAn8jAEGwAWsiASQAIwBBsAFrIgIkAAJAAkAgAARAIAAoAgANASAAQQA2AgAgASACIABBsAEQvAEiAkEEckGsARC8ARogABAQIAJBsAFqJAAMAgsQtgEACxC3AQALIAFBzABqIgAoAgAEQCAAKAIEEBALIAFB2ABqEIUBIAFB5ABqIgAQYCAAEIUBIAFB8ABqIgAQYCAAEIUBIAFB/ABqEIUBIAFBiAFqEIUBIAFBsAFqJAALdQECfyMAQRBrIgQkACAEQQhqIAEoAhAgAiADEIsBIAQoAgwhAiAEKAIIIgNFBEACQCABKAIIRQ0AIAFBDGooAgAiBUGEAUkNACAFEAELIAFBATYCCCABQQxqIAI2AgALIAAgAzYCACAAIAI2AgQgBEEQaiQAC3IAIwBBMGsiASQAQeC7wAAtAAAEQCABQRRqQQI2AgAgAUEcakEBNgIAIAFBgJ3AADYCECABQQA2AgggAUHBADYCJCABIAA2AiwgASABQSBqNgIYIAEgAUEsajYCICABQQhqQaidwAAQcgALIAFBMGokAAtbAQF/IwBBIGsiAiQAIAIgACgCADYCBCACQQhqIgBBEGogAUEQaikCADcDACAAQQhqIAFBCGopAgA3AwAgAiABKQIANwMIIAJBBGpB2JnAACAAEBYgAkEgaiQAC1sBAX8jAEEgayICJAAgAiAAKAIANgIEIAJBCGoiAEEQaiABQRBqKQIANwMAIABBCGogAUEIaikCADcDACACIAEpAgA3AwggAkEEakH4msAAIAAQFiACQSBqJAALWwEBfyMAQSBrIgIkACACIAAoAgA2AgQgAkEIaiIAQRBqIAFBEGopAgA3AwAgAEEIaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqQZicwAAgABAWIAJBIGokAAtbAQF/IwBBIGsiAiQAIAIgACgCADYCBCACQQhqIgBBEGogAUEQaikCADcDACAAQQhqIAFBCGopAgA3AwAgAiABKQIANwMIIAJBBGpBzJ7AACAAEBYgAkEgaiQAC1UBA38jAEEgayICJAAgASgCBCEDIAEoAgAgAkEIaiIBQRBqIABBEGopAgA3AwAgAUEIaiAAQQhqKQIANwMAIAIgACkCADcDCCADIAEQFiACQSBqJAALWwEBfyMAQSBrIgIkACACIAAoAgA2AgQgAkEIaiIAQRBqIAFBEGopAgA3AwAgAEEIaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqQZSmwAAgABAWIAJBIGokAAuzAgEFfyMAQRBrIgMkAAJAIAAoAjgiBEUNACAEIAAoAjBPDQAgA0EIaiAAQYABaigCACAAQYQBaigCACAAQThqED0gAygCCEUNACADKAIMIQIgAEH8AGoiACgCCCEBIAEgACgCAEYEQCAAIAEQ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aiEGIABBBGoiAkHsAGooAgAiAyABTQRAIAEgA0GQjsAAEEoACyACQegAaigCACABQQxsaiECIwBB0ABrIgEkAAJAAkACQCACKAIIIgNFBEAgBkEANgIIIAZCgICAgMAANwIADAELAkACQAJAQQRBBBCWASIHBEAgByACKAIEIgkoAgA2AgAgASAJQQpqKQAANwE2IAEgCSkABDcDMCABQRJqIAEpATY3AQAgAUEBNgIAIAFBATYCCCABIAc2AgQgASABKQMwNwIMIAFBADYCKCABQoCAgIDAADcDICADQQFGBEAgAUEwaiICQRhqIAFBGGooAgA2AgAgAkEQaiABQRBqKQMANwMAIAJBCGogAUEIaikDADcDACABIAEpAwA3AzBBACECDAMLIAFBDGohByADQRRsQRRrIQ5BASECA0AgAS0ADCEIAkACQAJAAkACQCAEIAlqIgNBGGoiDC0AACIFQQJGDQAgCEECRg0AIAUgCEcNAiAFRQRAIANBGWotAAAgAS0ADUYNAgwDCyADQRlqLQAAIAEtAA1HDQIgA0Eaai0AACABLQAORw0CIANBG2otAAAgAS0AD0YNAQwCCyAFQQJHDQEgCEECRw0BCyABLQAQIQgCQAJAIANBHGotAAAiBUECRg0AIAhBAkYNACAFIAhHDQIgBUUEQCADQR1qLQAAIAEtABFGDQIMAwsgA0Edai0AACABLQARRw0CIANBHmotAAAgAS0AEkcNAiADQR9qLQAAIAEtABNGDQEMAgsgBUECRw0BIAhBAkcNAQsgA0Egai0AACABLQAURw0AIANBIWotAABFIAEtABVBAEdGDQAgA0Eiai0AAEUgAS0AFkEAR0YNACADQSNqLQAARSABLQAXQQBHRg0AIANBJGotAABFIAEtABhBAEdGDQAgA0Elai0AAEUgAS0AGUEAR3MNAQsgAUEwaiICQRhqIgUgAUEYaigCADYCACACQRBqIg0gAUEQaikDADcDACACQQhqIgogAUEIaikDADcDACABIAEpAwA3AzAgASgCKCICIAEoAiBGBEAgAUEgaiACEGQgASgCKCECCyABKAIkIAJBHGxqIgggASkDMDcCACAIQQhqIAopAwA3AgAgCEEQaiANKQMANwIAIAhBGGogBSgCADYCACABIAJBAWo2AihBBEEEEJYBIghFDQggCCADQRRq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AhBFDQAgASgCFCECDAELAkAgFkUNACABQQhqIAFB0ABqQa+EwABBBxBbIAEoAghFDQAgASgCDCECDAELIAFB6ABqIgJBEGogAUHQAGoiBUEQaigCADYCACACQQhqIAVBCGopAwA3AwAgASABKQNQNwNoIAIoAgQhBQJAIAIoAghFDQAgAkEMaigCACICQYQBSQ0AIAIQAQsgASAFNgIEIAFBADYCACABKAIEIQIgASgCAAwCCyABKAJUIgVBhAFPBEAgBRABCyABKAJYRQ0AIAFB3ABqKAIAIgVBhAFJDQAgBRABC0EBCyEFIBIgAjYCBCASIAU2AgAgAUGAAWokACAGKAIMIQEgBigCCCICRQRAIAcgFSABEJ0BIAcgBygCBEEBajYCBAsgCiACNgIAIAogATYCBCAGQRBqJAAgAygCEEUNAiADKAIUCyEBIANBMGoQhQEgAygCICICQYQBSQ0AIAIQAQtBASECDAELIANBQGsiAUEIaiADQShqKAIANgIAIAMgAykDIDcDQCADQQhqIgIgASgCADYCBCACQQA2AgAgAygCDCEBIAMoAgghAiADQTBqEIUBCyAQIAE2AgQgECACNgIAIANB0ABqJAAgCCgCDCEBIAgoAggiAkUEQCAMIBQgARCdASAMIAwoAgRBAWo2AgQLIA8gAjYCACAPIAE2AgQgCEEQaiQAIAQoAghFDQALIAQoAgwhCSAEKAIQIgFBhAFJDQEgARABDAELIAQoAiAhCQtBAQwBCyAEQSBqIgFBCGogBEEYaigCADYCACAEIAQpAxA3AyAgBCABKAIANgIEIARBADYCACAEKAIEIQkgBCgCAAshASALIAk2AgQgCyABNgIAIARBMGokACALKAIEIQEgCygCAARAIAsgATYCGEHUgcAAQSsgC0EYakGAgsAAQaSCwAAQQAALIAtBCGoiAygCCCICBEAgAygCBCEJIAJBHGwhAgNAIAkoAgAEQCAJQQRqKAIAEBALIAlBHGohCSACQRxrIgINAAsLIAMoAgAEQCADKAIEEBALIAtBIGokAAwBC0EEQQRBhLzAACgCACIAQcIAIAAbEQIAAAsgACAAKAIAQQFrNgIAIAEPCxC2AQALELcBAAuhBAEHfwJAIAAEQCAAKAIAIgJBf0YNASAAIAJBAWo2AgAjAEEgayIEJAAgBEEQaiICIABB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IAJB4AJqJAAgAAvgAgECfyMAQSBrIgIkACACQQE6ABggAiABNgIUIAIgADYCECACQbyiwAA2AgwgAkHMocAANgIIIwBBEGsiASQAAkAgAkEIaiIAKAIMIgIEQCAAKAIIIgNFDQEgASACNgIIIAEgADYCBCABIAM2AgAjAEEQayIAJAAgAEEIaiABQQhqKAIANgIAIAAgASkCADcDACMAQRBrIgEkACAAKAIAIgJBFGooAgAhAwJAAn8CQAJAIAJBDGooAgAOAgABAwsgAw0CQQAhAkGwnMAADAELIAMNASACKAIIIgMoAgQhAiADKAIACyEDIAEgAjYCBCABIAM2AgAgAUGonsAAIAAoAgQiASgCCCAAKAIIIAEtABAQMwALIAFBADYCBCABIAI2AgwgAUGUnsAAIAAoAgQiASgCCCAAKAIIIAEtABAQMwALQbCcwABBK0HkncAAEGIAC0GwnMAAQStB1J3AABBiAAszAAJAIABB/P///wdLDQAgAEUEQEEEDwsgACAAQf3///8HSUECdBCWASIARQ0AIAAPCwALMAEBfyMAQRBrIgIkACACIAA2AgwgAUHUhsAAQQUgAkEMakHchsAAEDggAkEQaiQACy0AIAEgAk8EQCABIAJrIgEgACABQRRsaiACEBUPC0GoicAAQSFBzInAABBiAAvFAgEDfyAAKAIAIQIgAS0AGEEQcUEEdkUEQCABLQAYQSBxQQV2RQRAIAIgARCkAQ8LQQAhACMAQYABayIDJAAgAigCACECA0AgACADakH/AGpBMEE3IAJBD3EiBEEKSRsgBGo6AAAgAEEBayEAIAJBD0sgAkEEdiECDQALIABBgAFqIgJBgQFPBEAgAkGAAUG4pMAAEKEBAAsgAUHIpMAAQQIgACADakGAAWpBACAAaxAUIANBgAFqJAAPC0EAIQAjAEGAAWsiAyQAIAIoAgAhAgNAIAAgA2pB/wBqQTBB1wAgAkEPcSIEQQpJGyAEajoAACAAQQFrIQAgAkEPSyACQQR2IQINAAsgAEGAAWoiAkGBAU8EQCACQYABQbikwAAQoQEACyABQcikwABBAiAAIANqQYABakEAIABrEBQgA0GAAWokAAstACABIAJPBEAgASACayIBIAAgAUEMbGogAhASDwtBtJjAAEEhQdiYwAAQYgAL0QIBA38gACgCACEAIAEt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akHBADYCACADQdinwAA2AhAgA0EANgIIIANBwQA2AiQgAyABNgIYIAMgA0EEajYCKCADIAM2AiAgACACEHIAC3wBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQQhqIgBBDGpBAjYCACADQRxqQQI2AgAgA0EgaiIBQQxqQcEANgIAIANB+KfAADYCECADQQA2AgggA0HBADYCJCADIAE2AhggAyADQQRqNgIoIAMgAzYCICAAIAIQcgALfAEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBCGoiAEEMakECNgIAIANBHGpBAjYCACADQSBqIgFBDGpBwQA2AgAgA0GsqMAANgIQIANBADYCCCADQcEANgIkIAMgATYCGCADIANBBGo2AiggAyADNgIgIAAgAhByAAsLACAANQIAIAEQIAvJAgIEfwJ+IwBBQGoiAyQAQQEhBQJAIAAtAAQNACAALQAFIQUCQAJAAkAgACgCACIEKAIYIgZBBHFFBEAgBQ0BDAMLIAUNAUEBIQUgBCgCAEGZpMAAQQEgBCgCBCgCDBEAAA0DIAQoAhghBgwBC0EBIQUgBCgCAEGNpMAAQQIgBCgCBCgCDBEAAEUNAQwCC0EBIQUgA0EBOgAXIANB7KPAADYCHCADIAQpAgA3AwggAyADQRdqNgIQIAQpAgghByAEKQIQIQggAyAELQAgOgA4IAMgBCgCHDYCNCADIAY2AjAgAyAINwMoIAMgBzcDICADIANBCGo2AhggASADQRhqIAIoAgwRAQANASADKAIYQYukwABBAiADKAIcKAIMEQAAIQUMAQsgASAEIAIoAgwRAQAhBQsgAEEBOgAFIAAgBToABCADQUBrJAALDQAgACgCACABIAIQGgsLACAAMQAAIAEQIAsLACAAKQMAIAEQIAsLACAAIwBqJAAjAAsHACAAEIUBC+gBAQV/IAAoAgAhAiMAQUBqIgAkACAAQgA3AzggAEE4aiACKAIAEAwgAEEUakECNgIAIABBHGpBATYCACAAIAAoAjwiAjYCMCAAIAAoAjg2AiwgACACNgIoIABBPDYCJCAAQfyZwAA2AhAgAEEANgIIIAAgAEEoaiIENgIgIAAgAEEgajYCGCMAQSBrIgIkACABKAIEIQUgASgCACACQQhqIgFBEGogAEEIaiIDQRBqKQIANwMAIAFB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gMAAC907AQAAAAwAAAAEAAAAAgAAAAMAAAAEAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQAFAAAAAAAAAAEAAAAGAAAAL3J1c3RjL2Q1YTgyYmJkMjZlMWFkOGI3NDAxZjZhNzE4YTljNTdjOTY5MDU0ODMvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGAAEABLAAAA6AkAAAkAAABgdW53cmFwX3Rocm93YCBmYWlsZWQAAABjYWxsZWQgYFJlc3VsdDo6dW53cmFwKClgIG9uIGFuIGBFcnJgIHZhbHVlAAgAAAAEAAAABAAAAAkAAADUABAAAAAAAHNyYy9saWIucnMAABgBEAAKAAAAIwAAAC0AAAAYARAACgAAACgAAAAvAAAATWFwIGtleSBpcyBub3QgYSBzdHJpbmcgYW5kIGNhbm5vdCBiZSBhbiBvYmplY3Qga2V5AFRyaWVkIHRvIHNocmluayB0byBhIGxhcmdlciBjYXBhY2l0eXgBEAAkAAAAL3J1c3RjL2Q1YTgyYmJkMjZlMWFkOGI3NDAxZjZhNzE4YTljNTdjOTY5MDU0ODMvbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6QBEABMAAAAqgEAAAkAAABmZ2JnZmFpbnQBYm9sZGl0YWxpY3VuZGVybGluZXN0cmlrZXRocm91Z2hibGlua2ludmVyc2VyZ2IoLCk2AhAABAAAADoCEAABAAAAOgIQAAEAAAA7AhAAAQAAACBjYW4ndCBiZSByZXByZXNlbnRlZCBhcyBhIEphdmFTY3JpcHQgbnVtYmVyXAIQAAAAAABcAhAALAAAAAwAAAAMAAAABAAAAA0AAAAOAAAADwAAAGEgRGlzcGxheSBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCBhbiBlcnJvciB1bmV4cGVjdGVkbHkAEAAAAAAAAAABAAAABgAAAC9ydXN0Yy9kNWE4MmJiZDI2ZTFhZDhiNzQwMWY2YTcxOGE5YzU3Yzk2OTA1NDgzL2xpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5ycwD4AhAASwAAAOgJAAAJAAAARXJyb3IAAAAQAAAABAAAAAQAAAARAAAAVHJpZWQgdG8gc2hyaW5rIHRvIGEgbGFyZ2VyIGNhcGFjaXR5bAMQACQAAAAvcnVzdGMvZDVhODJiYmQyNmUxYWQ4Yjc0MDFmNmE3MThhOWM1N2M5NjkwNTQ4My9saWJyYXJ5L2FsbG9jL3NyYy9yYXdfdmVjLnJzmAMQAEwAAACqAQAACQAAAGNsb3N1cmUgaW52b2tlZCByZWN1cnNpdmVseSBvciBhZnRlciBiZWluZyBkcm9wcGVkYXNzZXJ0aW9uIGZhaWxlZDogbWlkIDw9IHNlbGYubGVuKCkvcnVzdGMvZDVhODJiYmQyNmUxYWQ4Yjc0MDFmNmE3MThhOWM1N2M5NjkwNTQ4My9saWJyYXJ5L2NvcmUvc3JjL3NsaWNlL21vZC5ycwAASQQQAE0AAADsCwAACQAAAGFzc2VydGlvbiBmYWlsZWQ6IGsgPD0gc2VsZi5sZW4oKQAAAEkEEABNAAAAFwwAAAkAAABmJgAAkiUAAAkkAAAMJAAADSQAAAokAACwAAAAsQAAACQkAAALJAAAGCUAABAlAAAMJQAAFCUAADwlAAC6IwAAuyMAAAAlAAC8IwAAvSMAABwlAAAkJQAANCUAACwlAAACJQAAZCIAAGUiAADAAwAAYCIAAKMAAADFIgAAL2hvbWUvcnVubmVyLy5jYXJnby9naXQvY2hlY2tvdXRzL2F2dC02ODMzOTc4OGJhN2Q2NzNlLzkxN2EzYjgvc3JjL2xpYi5yc2Fzc2VydGlvbiBmYWlsZWQ6IGNvbHVtbnMgPiAwAABYBRAASQAAADgBAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogcm93cyA+IDAAAFgFEABJAAAAOQEAAAkAAABYBRAASQAAANoCAAARAAAAWAUQAEkAAADoAgAAEQAAAFgFEABJAAAADQMAABoAAABYBRAASQAAAJUDAAAaAAAAWAUQAEkAAACYAwAAGgAAAFgFEABJAAAA/QMAAA0AAABYBRAASQAAAAIEAAANAAAAWAUQAEkAAAAOBAAADQAAAFgFEABJAAAAEwQAAA0AAABYBRAASQAAACAEAAAJAAAAWAUQAEkAAABABAAAGAAAAFgFEABJAAAAWQUAAAkAAABYBRAASQAAAGcFAAAkAAAAWAUQAEkAAABzBQAAGgAAAFgFEABJAAAAewUAABoAAAAAAAAAWAUQAEkAAAASBgAACQAAAFgFEABJAAAAGgYAAAkAAABYBRAASQAAAI4HAAAaAAAAWAUQAEkAAACxBwAAFwAAAFgFEABJAAAAtwcAAAkAAABTb3NQbUFwY1N0cmluZ09zY1N0cmluZ0Rjc0lnbm9yZURjc1Bhc3N0aHJvdWdoRGNzSW50ZXJtZWRpYXRlRGNzUGFyYW1EY3NFbnRyeUNzaUlnbm9yZUNzaUludGVybWVkaWF0ZUNzaVBhcmFtQ3NpRW50cnlFc2NhcGVJbnRlcm1lZGlhdGVFc2NhcGVHcm91bmRSR0IAAB4AAAAEAAAABAAAAB8AAABJbmRleGVkAB4AAAAEAAAABAAAACAAAABGYWludEJvbGROb3JtYWxmb3JlZ3JvdW5kYmFja2dyb3VuZGludGVuc2l0eWl0YWxpY3VuZGVybGluZXN0cmlrZXRocm91Z2hibGlua2ludmVyc2UPCBAACgAAABkIEAAKAAAAIwgQAAkAAAAsCBAABgAAADIIEAAJAAAAOwgQAA0AAABICBAABQAAAE0IEAAHAAAAHgAAAAQAAAAEAAAAIQAAAB4AAAAEAAAABAAAACIAAAAeAAAABAAAAAQAAAAjAAAAUGVuQ2VsbAAeAAAABAAAAAQAAAAkAAAAHgAAAAQAAAAEAAAAJQAAAB4AAAAEAAAABAAAACYAAABEcmF3aW5nQXNjaWlBbHRlcm5hdGVQcmltYXJ5U2F2ZWRDdHhjdXJzb3JfeB4AAAAEAAAABAAAACcAAABjdXJzb3JfeXBlbm9yaWdpbl9tb2RlYXV0b193cmFwX21vZGVzdGF0ZXBhcmFtc2ludGVybWVkaWF0ZXNjb2x1bW5zcm93c2J1ZmZlcmFsdGVybmF0ZV9idWZmZXJhY3RpdmVfYnVmZmVyX3R5cGVjdXJzb3JfdmlzaWJsZWNoYXJzZXRzYWN0aXZlX2NoYXJzZXR0YWJzaW5zZXJ0X21vZGVuZXdfbGluZV9tb2RlbmV4dF9wcmludF93cmFwc3RvcF9tYXJnaW5ib3R0b21fbWFyZ2luc2F2ZWRfY3R4YWx0ZXJuYXRlX3NhdmVkX2N0eGFmZmVjdGVkX2xpbmVzXAkQAAUAAABhCRAABgAAAGcJEAANAAAAdAkQAAcAAAB7CRAABAAAAH8JEAAGAAAAhQkQABAAAACVCRAAEgAAACAJEAAIAAAAOAkQAAgA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");
var YB = async () => (await Lg(SB), FB);
function gI(A) {
  return typeof A == "number" ? A : typeof A == "string" ? A.split(":").reverse().map(parseFloat).reduce((g, I, B) => g + I * Math.pow(60, B)) : void 0;
}
function JB(A, g) {
  let I;
  return function() {
    for (var B = arguments.length, Q = new Array(B), C = 0; C < B; C++)
      Q[C] = arguments[C];
    clearTimeout(I), I = setTimeout(() => A.apply(this, Q), g);
  };
}
class Ug {
  constructor() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    this.speed = g, this.startTime = performance.now();
  }
  getTime() {
    return this.speed * (performance.now() - this.startTime) / 1e3;
  }
  setTime(g) {
    this.startTime = performance.now() - g / this.speed * 1e3;
  }
}
const LB = YB();
class UB {
  // public
  constructor(g, I) {
    this.logger = I.logger, this.state = "initial", this.driver = null, this.driverFn = g, this.changedLines = /* @__PURE__ */ new Set(), this.cursor = void 0, this.duration = null, this.cols = I.cols, this.rows = I.rows, this.speed = I.speed ?? 1, this.clock = void 0, this.loop = I.loop, this.idleTimeLimit = I.idleTimeLimit, this.preload = I.preload, this.startAt = gI(I.startAt), this.poster = I.poster, this.eventHandlers = /* @__PURE__ */ new Map([["starting", []], ["loading", []], ["reset", []], ["play", []], ["pause", []], ["terminalUpdate", []], ["seeked", []], ["ended", []]]);
  }
  addEventListener(g, I) {
    this.eventHandlers.get(g).push(I);
  }
  dispatchEvent(g) {
    let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    for (const B of this.eventHandlers.get(g))
      B(I);
  }
  async init() {
    const g = this.feed.bind(this), I = this.now.bind(this), B = (n, o) => window.setTimeout(n, o / this.speed), Q = (n, o) => window.setInterval(n, o / this.speed), C = this.resetVt.bind(this), e = () => {
      this.state = "ended", this.dispatchEvent("ended");
    };
    let i = !1;
    const t = (n) => {
      n && !i ? (i = !0, this.dispatchEvent("loading")) : !n && i && (i = !1, this.dispatchEvent("play"));
    };
    return this.wasm = await LB, this.driver = this.driverFn({
      feed: g,
      now: I,
      setTimeout: B,
      setInterval: Q,
      onFinish: e,
      reset: C,
      setLoading: t,
      logger: this.logger
    }, {
      cols: this.cols,
      rows: this.rows,
      idleTimeLimit: this.idleTimeLimit,
      startAt: this.startAt,
      loop: this.loop
    }), typeof this.driver == "function" && (this.driver = {
      start: this.driver
    }), this.duration = this.driver.duration, this.cols = this.cols ?? this.driver.cols, this.rows = this.rows ?? this.driver.rows, this.preload && this.initializeDriver(), {
      isPausable: !!this.driver.pauseOrResume,
      isSeekable: !!this.driver.seek,
      poster: await this.renderPoster()
    };
  }
  async play() {
    this.state == "initial" ? await this.start() : this.state == "paused" ? this.resume() : this.state == "ended" && await this.restart();
  }
  pause() {
    this.state == "playing" && this.doPause();
  }
  async pauseOrResume() {
    this.state == "initial" ? await this.start() : this.state == "playing" ? this.doPause() : this.state == "paused" ? this.resume() : this.state == "ended" && await this.restart();
  }
  stop() {
    typeof this.driver.stop == "function" && this.driver.stop();
  }
  async seek(g) {
    if (this.state == "initial" || typeof this.driver.seek != "function")
      return !1;
    const I = this.driver.seek(g);
    return I && (this.state == "ended" && (this.state = "paused"), this.dispatchEvent("seeked")), I;
  }
  step() {
    this.state == "paused" && typeof this.driver.step == "function" && this.driver.step();
  }
  getChangedLines() {
    if (this.changedLines.size > 0) {
      const g = /* @__PURE__ */ new Map();
      for (const I of this.changedLines)
        g.set(I, {
          id: I,
          segments: this.vt.get_line(I)
        });
      return this.changedLines.clear(), g;
    }
  }
  getCursor() {
    return this.cursor === void 0 && this.vt && (this.cursor = this.vt.get_cursor() ?? !1), this.cursor;
  }
  getCurrentTime() {
    if (typeof this.driver.getCurrentTime == "function")
      return this.driver.getCurrentTime();
    if (this.clock !== void 0)
      return this.clock.getTime();
  }
  getRemainingTime() {
    if (typeof this.duration == "number")
      return this.duration - Math.min(this.getCurrentTime(), this.duration);
  }
  getProgress() {
    if (typeof this.duration == "number")
      return Math.min(this.getCurrentTime(), this.duration) / this.duration;
  }
  getDuration() {
    return this.duration;
  }
  // private
  async start() {
    this.dispatchEvent("starting");
    const g = setTimeout(() => {
      this.dispatchEvent("loading");
    }, 2e3);
    await this.initializeDriver(), this.dispatchEvent("terminalUpdate");
    const I = await this.driver.start();
    clearTimeout(g), typeof I == "function" && (this.driver.stop = I), this.clock = new Ug(this.speed), this.state = "playing", this.dispatchEvent("play");
  }
  doPause() {
    typeof this.driver.pauseOrResume == "function" && (this.driver.pauseOrResume(), this.state = "paused", this.dispatchEvent("pause"));
  }
  resume() {
    typeof this.driver.pauseOrResume == "function" && (this.state = "playing", this.driver.pauseOrResume(), this.dispatchEvent("play"));
  }
  async restart() {
    typeof this.driver.restart == "function" && await this.driver.restart() && (this.state = "playing", this.dispatchEvent("play"));
  }
  feed(g) {
    this.doFeed(g), this.dispatchEvent("terminalUpdate");
  }
  doFeed(g) {
    this.vt.feed(g).forEach((B) => this.changedLines.add(B)), this.cursor = void 0;
  }
  now() {
    return performance.now() * this.speed;
  }
  initializeDriver() {
    return this.initializeDriverPromise === void 0 && (this.initializeDriverPromise = this.doInitializeDriver()), this.initializeDriverPromise;
  }
  async doInitializeDriver() {
    if (typeof this.driver.init == "function") {
      const g = await this.driver.init();
      this.duration = this.duration ?? g.duration, this.cols = this.cols ?? g.cols, this.rows = this.rows ?? g.rows;
    }
    this.ensureVt();
  }
  ensureVt() {
    const g = this.cols ?? 80, I = this.rows ?? 24;
    this.vt !== void 0 && this.vt.cols === g && this.vt.rows === I || (this.initializeVt(g, I), this.dispatchEvent("reset", {
      cols: g,
      rows: I
    }));
  }
  resetVt(g, I) {
    let B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    this.cols = g, this.rows = I, this.cursor = void 0, this.initializeVt(g, I), B !== void 0 && B !== "" && this.doFeed(B), this.dispatchEvent("reset", {
      cols: g,
      rows: I
    });
  }
  initializeVt(g, I) {
    this.vt = this.wasm.create(g, I), this.vt.cols = g, this.vt.rows = I, this.changedLines.clear();
    for (let B = 0; B < I; B++)
      this.changedLines.add(B);
  }
  async renderPoster() {
    if (!this.poster)
      return;
    this.ensureVt();
    let g = [];
    this.poster.substring(0, 16) == "data:text/plain," ? g = [this.poster.substring(16)] : this.poster.substring(0, 4) == "npt:" && typeof this.driver.getPoster == "function" && (await this.initializeDriver(), g = this.driver.getPoster(this.parseNptPoster(this.poster))), g.forEach((Q) => this.vt.feed(Q));
    const I = this.vt.get_cursor() ?? !1, B = [];
    for (let Q = 0; Q < this.vt.rows; Q++)
      B.push({
        id: Q,
        segments: this.vt.get_line(Q)
      });
    return this.doFeed("\x1Bc"), {
      cursor: I,
      lines: B
    };
  }
  parseNptPoster(g) {
    return gI(g.substring(4));
  }
}
const Ng = Symbol("store-raw"), qA = Symbol("store-node"), pB = Symbol("store-name");
function yI(A, g) {
  let I = A[DA];
  if (!I && (Object.defineProperty(A, DA, {
    value: I = new Proxy(A, KB)
  }), !Array.isArray(A))) {
    const B = Object.keys(A), Q = Object.getOwnPropertyDescriptors(A);
    for (let C = 0, e = B.length; C < e; C++) {
      const i = B[C];
      Q[i].get && Object.defineProperty(A, i, {
        enumerable: Q[i].enumerable,
        get: Q[i].get.bind(I)
      });
    }
  }
  return I;
}
function rA(A) {
  let g;
  return A != null && typeof A == "object" && (A[DA] || !(g = Object.getPrototypeOf(A)) || g === Object.prototype || Array.isArray(A));
}
function SA(A, g = /* @__PURE__ */ new Set()) {
  let I, B, Q, C;
  if (I = A != null && A[Ng])
    return I;
  if (!rA(A) || g.has(A))
    return A;
  if (Array.isArray(A)) {
    Object.isFrozen(A) ? A = A.slice(0) : g.add(A);
    for (let e = 0, i = A.length; e < i; e++)
      Q = A[e], (B = SA(Q, g)) !== Q && (A[e] = B);
  } else {
    Object.isFrozen(A) ? A = Object.assign({}, A) : g.add(A);
    const e = Object.keys(A), i = Object.getOwnPropertyDescriptors(A);
    for (let t = 0, n = e.length; t < n; t++)
      C = e[t], !i[C].get && (Q = A[C], (B = SA(Q, g)) !== Q && (A[C] = B));
  }
  return A;
}
function pg(A) {
  let g = A[qA];
  return g || Object.defineProperty(A, qA, {
    value: g = {}
  }), g;
}
function Rg(A, g, I) {
  return A[g] || (A[g] = dI(I));
}
function mB(A, g) {
  const I = Reflect.getOwnPropertyDescriptor(A, g);
  return !I || I.get || !I.configurable || g === DA || g === qA || g === pB || (delete I.value, delete I.writable, I.get = () => A[DA][g]), I;
}
function GI(A) {
  if (nI()) {
    const g = pg(A);
    (g._ || (g._ = dI()))();
  }
}
function bB(A) {
  return GI(A), Reflect.ownKeys(A);
}
function dI(A) {
  const [g, I] = Sg(A, {
    equals: !1,
    internal: !0
  });
  return g.$ = I, g;
}
const KB = {
  get(A, g, I) {
    if (g === Ng)
      return A;
    if (g === DA)
      return I;
    if (g === $A)
      return GI(A), I;
    const B = pg(A), Q = B.hasOwnProperty(g);
    let C = Q ? B[g]() : A[g];
    if (g === qA || g === "__proto__")
      return C;
    if (!Q) {
      const e = Object.getOwnPropertyDescriptor(A, g);
      nI() && (typeof C != "function" || A.hasOwnProperty(g)) && !(e && e.get) && (C = Rg(B, g, C)());
    }
    return rA(C) ? yI(C) : C;
  },
  has(A, g) {
    return g === Ng || g === DA || g === $A || g === qA || g === "__proto__" ? !0 : (this.get(A, g, A), g in A);
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: bB,
  getOwnPropertyDescriptor: mB
};
function z(A, g, I, B = !1) {
  if (!B && A[g] === I)
    return;
  const Q = A[g], C = A.length;
  I === void 0 ? delete A[g] : A[g] = I;
  let e = pg(A), i;
  (i = Rg(e, g, Q)) && i.$(() => I), Array.isArray(A) && A.length !== C && (i = Rg(e, "length", C)) && i.$(A.length), (i = e._) && i.$();
}
function NI(A, g) {
  const I = Object.keys(g);
  for (let B = 0; B < I.length; B += 1) {
    const Q = I[B];
    z(A, Q, g[Q]);
  }
}
function vB(A, g) {
  if (typeof g == "function" && (g = g(A)), g = SA(g), Array.isArray(g)) {
    if (A === g)
      return;
    let I = 0, B = g.length;
    for (; I < B; I++) {
      const Q = g[I];
      A[I] !== Q && z(A, I, Q);
    }
    z(A, "length", B);
  } else
    NI(A, g);
}
function vA(A, g, I = []) {
  let B, Q = A;
  if (g.length > 1) {
    B = g.shift();
    const e = typeof B, i = Array.isArray(A);
    if (Array.isArray(B)) {
      for (let t = 0; t < B.length; t++)
        vA(A, [B[t]].concat(g), I);
      return;
    } else if (i && e === "function") {
      for (let t = 0; t < A.length; t++)
        B(A[t], t) && vA(A, [t].concat(g), I);
      return;
    } else if (i && e === "object") {
      const {
        from: t = 0,
        to: n = A.length - 1,
        by: o = 1
      } = B;
      for (let a = t; a <= n; a += o)
        vA(A, [a].concat(g), I);
      return;
    } else if (g.length > 1) {
      vA(A[B], g, [B].concat(I));
      return;
    }
    Q = A[B], I = [B].concat(I);
  }
  let C = g[0];
  typeof C == "function" && (C = C(Q, I), C === Q) || B === void 0 && C == null || (C = SA(C), B === void 0 || rA(Q) && rA(C) && !Array.isArray(C) ? NI(Q, C) : z(A, B, C));
}
function RI(...[A, g]) {
  const I = SA(A || {}), B = Array.isArray(I), Q = yI(I);
  function C(...e) {
    EB(() => {
      B && e.length === 1 ? vB(I, e[0]) : vA(I, e);
    });
  }
  return [Q, C];
}
const Fg = Symbol("store-root");
function RA(A, g, I, B, Q) {
  const C = g[I];
  if (A === C)
    return;
  if (!rA(A) || !rA(C) || Q && A[Q] !== C[Q]) {
    if (A !== C) {
      if (I === Fg)
        return A;
      z(g, I, A);
    }
    return;
  }
  if (Array.isArray(A)) {
    if (A.length && C.length && (!B || Q && A[0] && A[0][Q] != null)) {
      let t, n, o, a, c, w, D, M;
      for (o = 0, a = Math.min(C.length, A.length); o < a && (C[o] === A[o] || Q && C[o] && A[o] && C[o][Q] === A[o][Q]); o++)
        RA(A[o], C, o, B, Q);
      const N = new Array(A.length), F = /* @__PURE__ */ new Map();
      for (a = C.length - 1, c = A.length - 1; a >= o && c >= o && (C[a] === A[c] || Q && C[o] && A[o] && C[a][Q] === A[c][Q]); a--, c--)
        N[c] = C[a];
      if (o > c || o > a) {
        for (n = o; n <= c; n++)
          z(C, n, A[n]);
        for (; n < A.length; n++)
          z(C, n, N[n]), RA(A[n], C, n, B, Q);
        C.length > A.length && z(C, "length", A.length);
        return;
      }
      for (D = new Array(c + 1), n = c; n >= o; n--)
        w = A[n], M = Q && w ? w[Q] : w, t = F.get(M), D[n] = t === void 0 ? -1 : t, F.set(M, n);
      for (t = o; t <= a; t++)
        w = C[t], M = Q && w ? w[Q] : w, n = F.get(M), n !== void 0 && n !== -1 && (N[n] = C[t], n = D[n], F.set(M, n));
      for (n = o; n < A.length; n++)
        n in N ? (z(C, n, N[n]), RA(A[n], C, n, B, Q)) : z(C, n, A[n]);
    } else
      for (let t = 0, n = A.length; t < n; t++)
        RA(A[t], C, t, B, Q);
    C.length > A.length && z(C, "length", A.length);
    return;
  }
  const e = Object.keys(A);
  for (let t = 0, n = e.length; t < n; t++)
    RA(A[e[t]], C, e[t], B, Q);
  const i = Object.keys(C);
  for (let t = 0, n = i.length; t < n; t++)
    A[i[t]] === void 0 && z(C, i[t], void 0);
}
function II(A, g = {}) {
  const {
    merge: I,
    key: B = "id"
  } = g, Q = SA(A);
  return (C) => {
    if (!rA(C) || !rA(Q))
      return Q;
    const e = RA(Q, {
      [Fg]: C
    }, Fg, I, B);
    return e === void 0 ? C : e;
  };
}
const HB = /* @__PURE__ */ IA("<span></span>");
var qB = (A) => (() => {
  const g = HB.cloneNode(!0);
  return V(g, () => A.text), tA((I) => {
    const B = jB(A.attrs, A.extraClass), Q = xB(A.attrs);
    return B !== I._v$ && wI(g, I._v$ = B), I._v$2 = og(g, Q, I._v$2), I;
  }, {
    _v$: void 0,
    _v$2: void 0
  }), g;
})();
function jB(A, g) {
  const I = A.get("inverse") ? A.has("bg") ? A.get("bg") : "bg" : A.get("fg"), B = A.get("inverse") ? A.has("fg") ? A.get("fg") : "fg" : A.get("bg"), Q = BI(I, A.get("bold"), "fg-"), C = BI(B, A.get("blink"), "bg-");
  let e = g ?? "";
  return Q && (e += " " + Q), C && (e += " " + C), A.has("bold") && (e += " bright"), A.has("faint") && (e += " faint"), A.has("italic") && (e += " italic"), A.has("underline") && (e += " underline"), A.has("blink") && (e += " blink"), e;
}
function BI(A, g, I) {
  if (typeof A == "number")
    return g && A < 8 && (A += 8), `${I}${A}`;
  if (A == "fg" || A == "bg")
    return `${I}${A}`;
}
function xB(A) {
  const g = A.get("inverse") ? A.get("bg") : A.get("fg"), I = A.get("inverse") ? A.get("fg") : A.get("bg");
  let B = {};
  return typeof g == "string" && (B.color = g), typeof I == "string" && (B["background-color"] = I), B;
}
const TB = /* @__PURE__ */ IA('<span class="line"></span>');
var WB = (A) => {
  const g = () => {
    if (typeof A.cursor == "number") {
      const I = [];
      let B = 0, Q = 0;
      for (; Q < A.segments.length && B + A.segments[Q][0].length - 1 < A.cursor; ) {
        const C = A.segments[Q];
        I.push(C), B += C[0].length, Q++;
      }
      if (Q < A.segments.length) {
        const C = A.segments[Q], e = C[1], i = new Map(e);
        i.set("inverse", !i.get("inverse"));
        const t = A.cursor - B;
        for (t > 0 && I.push([C[0].substring(0, t), C[1]]), I.push([C[0][t], e, " cursor-a"]), I.push([C[0][t], i, " cursor-b"]), t < C[0].length - 1 && I.push([C[0].substring(t + 1), C[1]]), Q++; Q < A.segments.length; ) {
          const n = A.segments[Q];
          I.push(n), Q++;
        }
      }
      return I;
    } else
      return A.segments;
  };
  return (() => {
    const I = TB.cloneNode(!0);
    return V(I, j(cB, {
      get each() {
        return g();
      },
      children: (B) => j(qB, {
        get text() {
          return B()[0];
        },
        get attrs() {
          return B()[1];
        },
        get extraClass() {
          return B()[2];
        }
      })
    })), tA(() => I.style.setProperty("height", A.height)), I;
  })();
};
const ZB = /* @__PURE__ */ IA('<pre class="asciinema-terminal"></pre>');
var FI = (A) => {
  const g = () => A.lineHeight ?? 1.3333333333, I = gA(() => ({
    width: `${A.cols}ch`,
    height: `${g() * A.rows}em`,
    "font-size": `${(A.scale || 1) * 100}%`,
    "font-family": A.fontFamily,
    "line-height": `${g()}em`
  })), B = () => {
    var C;
    return (C = A.cursor) == null ? void 0 : C[0];
  }, Q = () => {
    var C;
    return (C = A.cursor) == null ? void 0 : C[1];
  };
  return (() => {
    const C = ZB.cloneNode(!0), e = A.ref;
    return typeof e == "function" ? Eg(e, C) : A.ref = C, V(C, j(aB, {
      get each() {
        return A.lines;
      },
      children: (i, t) => j(WB, {
        get segments() {
          return i.segments;
        },
        get cursor() {
          return gA(() => t() === Q())() ? B() : null;
        },
        get height() {
          return `${g()}em`;
        }
      })
    })), tA((i) => {
      const t = !!(A.blink || A.cursorHold), n = !!A.blink, o = I();
      return t !== i._v$ && C.classList.toggle("cursor", i._v$ = t), n !== i._v$2 && C.classList.toggle("blink", i._v$2 = n), i._v$3 = og(C, o, i._v$3), i;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), C;
  })();
};
const OB = /* @__PURE__ */ IA('<svg version="1.1" viewBox="0 0 12 12" class="icon"><path d="M1,0 L4,0 L4,12 L1,12 Z"></path><path d="M8,0 L11,0 L11,12 L8,12 Z"></path></svg>'), XB = /* @__PURE__ */ IA('<svg version="1.1" viewBox="0 0 12 12" class="icon"><path d="M1,0 L11,6 L1,12 Z"></path></svg>'), VB = /* @__PURE__ */ IA('<span class="playback-button"></span>'), _B = /* @__PURE__ */ IA('<span class="progressbar"><span class="bar"><span class="gutter"><span></span></span></span></span>'), PB = /* @__PURE__ */ IA('<div class="control-bar"><span class="timer"><span class="time-elapsed"></span><span class="time-remaining"></span></span><span class="fullscreen-button" title="Toggle fullscreen mode"><svg version="1.1" viewBox="0 0 12 12" class="icon"><path d="M12,0 L7,0 L9,2 L7,4 L8,5 L10,3 L12,5 Z"></path><path d="M0,12 L0,7 L2,9 L4,7 L5,8 L3,10 L5,12 Z"></path></svg><svg version="1.1" viewBox="0 0 12 12" class="icon"><path d="M7,5 L7,0 L9,2 L11,0 L12,1 L10,3 L12,5 Z"></path><path d="M5,7 L0,7 L2,9 L0,11 L1,12 L3,10 L5,12 Z"></path></svg></span></div>');
function QI(A) {
  A = Math.floor(A);
  const g = Math.floor(A / 60), I = A % 60;
  let B = "";
  return g < 10 && (B += "0"), B += `${g}:`, I < 10 && (B += "0"), B += `${I}`, B;
}
var zB = (A) => {
  const g = (e) => (i) => {
    i.preventDefault(), e(i);
  }, I = () => typeof A.currentTime == "number" ? QI(A.currentTime) : "--:--", B = () => typeof A.remainingTime == "number" ? "-" + QI(A.remainingTime) : I(), Q = () => ({
    width: "100%",
    transform: `scaleX(${A.progress || 0}`,
    "transform-origin": "left center"
  }), C = (e) => {
    if (e.altKey || e.shiftKey || e.metaKey || e.ctrlKey)
      return;
    const i = e.currentTarget.offsetWidth, t = e.currentTarget.getBoundingClientRect(), o = (e.clientX - t.left) / i;
    return A.onSeekClick(`${o * 100}%`);
  };
  return (() => {
    const e = PB.cloneNode(!0), i = e.firstChild, t = i.firstChild, n = t.nextSibling, o = i.nextSibling, a = A.ref;
    return typeof a == "function" ? Eg(a, e) : A.ref = e, V(e, j(zg, {
      get when() {
        return A.isPausable;
      },
      get children() {
        const c = VB.cloneNode(!0);
        return yg(c, "click", g(A.onPlayClick), !0), V(c, j(lI, {
          get children() {
            return [j(Cg, {
              get when() {
                return A.isPlaying;
              },
              get children() {
                return OB.cloneNode(!0);
              }
            }), j(Cg, {
              get when() {
                return !A.isPlaying;
              },
              get children() {
                return XB.cloneNode(!0);
              }
            })];
          }
        })), c;
      }
    }), i), V(t, I), V(n, B), yg(o, "click", g(A.onFullscreenClick), !0), V(e, j(zg, {
      get when() {
        return typeof A.progress == "number" || A.isSeekable;
      },
      get children() {
        const c = _B.cloneNode(!0), w = c.firstChild, D = w.firstChild, M = D.firstChild;
        return w.$$mousedown = C, tA((N) => og(M, Q(), N)), c;
      }
    }), null), tA(() => e.classList.toggle("seekable", !!A.isSeekable)), e;
  })();
};
Jg(["click", "mousedown"]);
const $B = /* @__PURE__ */ IA('<div class="loading"></div>');
var AQ = (A) => {
  const g = ["▓", "▒", "░", "▒"];
  let I, B = 1, Q = "";
  for (let o = 0; o < A.cols - 1; o++)
    Q = Q.concat(" ");
  const C = [Q, /* @__PURE__ */ new Map()], e = /* @__PURE__ */ new Map([["inverse", !0]]), i = {
    segments: [C, [g[0], e]]
  }, [t, n] = RI({
    lines: [i]
  });
  return tI(() => {
    I = setInterval(() => {
      const o = g[B % g.length];
      n("lines", 0, {
        segments: [C, [o, e]]
      }), B++;
    }, 250);
  }), tg(() => {
    clearInterval(I);
  }), (() => {
    const o = $B.cloneNode(!0);
    return V(o, j(FI, {
      get cols() {
        return A.cols;
      },
      get rows() {
        return A.rows;
      },
      get scale() {
        return A.scale;
      },
      get lines() {
        return t.lines;
      },
      get fontFamily() {
        return A.terminalFontFamily;
      },
      get lineHeight() {
        return A.terminalLineHeight;
      }
    })), o;
  })();
};
const gQ = /* @__PURE__ */ IA('<div class="start-prompt"><div class="play-button"><div><span><svg version="1.1" viewBox="0 0 866.0254037844387 866.0254037844387" class="icon"><defs><mask id="small-triangle-mask"><rect width="100%" height="100%" fill="white"></rect><polygon points="508.01270189221935 433.01270189221935, 208.0127018922194 259.8076211353316, 208.01270189221927 606.217782649107" fill="black"></polygon></mask></defs><polygon points="808.0127018922194 433.01270189221935, 58.01270189221947 -1.1368683772161603e-13, 58.01270189221913 866.0254037844386" mask="url(#small-triangle-mask)" fill="white" class="play-btn-fill"></polygon><polyline points="481.2177826491071 333.0127018922194, 134.80762113533166 533.0127018922194" stroke="white" stroke-width="90" class="play-btn-stroke"></polyline></svg></span></div></div></div>');
var IQ = (A) => {
  const g = (I) => (B) => {
    B.preventDefault(), I(B);
  };
  return (() => {
    const I = gQ.cloneNode(!0);
    return yg(I, "click", g(A.onClick), !0), I;
  })();
};
Jg(["click"]);
const BQ = /* @__PURE__ */ IA('<div class="asciinema-player-wrapper" tabindex="-1"><div></div></div>');
var QQ = (A) => {
  const g = A.logger, I = A.core, B = A.autoPlay, [Q, C] = RI({
    coreState: "initial",
    cols: A.cols,
    rows: A.rows,
    lines: [],
    cursor: void 0,
    charW: null,
    charH: null,
    bordersW: null,
    bordersH: null,
    controlBarH: null,
    containerW: null,
    containerH: null,
    showControls: !1,
    showStartOverlay: !B,
    isPausable: !0,
    isSeekable: !0,
    isFullscreen: !1,
    currentTime: null,
    remainingTime: null,
    progress: null,
    blink: !0,
    cursorHold: !1
  }), e = () => Q.cols || 80, i = () => Q.rows || 24;
  let t, n, o, a, c, w, D, M, N;
  I.addEventListener("starting", () => {
    C("showStartOverlay", !1);
  }), I.addEventListener("loading", () => {
    C("coreState", "loading");
  }), I.addEventListener("reset", (l) => {
    let {
      cols: d,
      rows: J
    } = l;
    J < Q.rows && C("lines", Q.lines.slice(0, J)), C({
      cols: d,
      rows: J
    }), S();
  }), I.addEventListener("play", () => {
    C({
      coreState: "playing",
      showStartOverlay: !1
    });
  }), I.addEventListener("pause", () => {
    C("coreState", "paused");
  }), I.addEventListener("seeked", () => {
    AA();
  }), I.addEventListener("ended", () => {
    C("coreState", "paused");
  }), I.addEventListener("terminalUpdate", () => {
    t === void 0 && (t = requestAnimationFrame(S));
  });
  const F = () => {
    C({
      charW: D.clientWidth / e(),
      charH: D.clientHeight / i(),
      bordersW: D.offsetWidth - D.clientWidth,
      bordersH: D.offsetHeight - D.clientHeight,
      controlBarH: M.offsetHeight,
      containerW: c.offsetWidth,
      containerH: c.offsetHeight
    });
  }, y = () => {
    N = new ResizeObserver(JB((l) => {
      C({
        containerW: c.offsetWidth,
        containerH: c.offsetHeight
      }), c.dispatchEvent(new CustomEvent("resize", {
        detail: {
          el: w
        }
      }));
    }, 10)), N.observe(c);
  };
  tI(async () => {
    g.info("player mounted"), F(), y();
    const {
      isPausable: l,
      isSeekable: d,
      poster: J
    } = await I.init();
    C({
      isPausable: l,
      isSeekable: d
    }), J !== void 0 && !B && C({
      lines: J.lines,
      cursor: J.cursor
    }), B && I.play();
  }), tg(() => {
    I.stop(), _(), CA(), N.disconnect();
  }), iI(() => {
    const l = Q.coreState;
    l === "playing" ? (O(), hA()) : l !== "initial" && (_(), CA(), AA());
  });
  const S = () => {
    const l = I.getChangedLines();
    l && l.forEach((d, J) => {
      C("lines", J, II(d));
    }), C("cursor", II(I.getCursor())), C("cursorHold", !0), t = void 0;
  }, h = gA(() => {
    if (!Q.charW)
      return;
    g.debug(`containerW = ${Q.containerW}`);
    const l = Q.charW * e() + Q.bordersW, d = Q.charH * i() + Q.bordersH;
    let J = A.fit ?? "width";
    if (J === "both" || Q.isFullscreen) {
      const X = Q.containerW / (Q.containerH - Q.controlBarH), H = l / d;
      X > H ? J = "height" : J = "width";
    }
    if (J === !1 || J === "none")
      return {};
    if (J === "width") {
      const X = Q.containerW / l;
      return {
        scale: X,
        width: Q.containerW,
        height: d * X + Q.controlBarH
      };
    } else if (J === "height") {
      const X = (Q.containerH - Q.controlBarH) / d;
      return {
        scale: X,
        width: l * X,
        height: Q.containerH
      };
    } else
      throw `unsupported fit mode: ${J}`;
  }), x = () => {
    C("isFullscreen", document.fullscreenElement ?? document.webkitFullscreenElement);
  }, $ = () => {
    Q.isFullscreen ? (document.exitFullscreen ?? document.webkitExitFullscreen ?? (() => {
    })).apply(document) : (c.requestFullscreen ?? c.webkitRequestFullscreen ?? (() => {
    })).apply(c);
  }, fA = (l) => {
    if (!(l.altKey || l.metaKey || l.ctrlKey)) {
      if (l.shiftKey) {
        if (l.key == "ArrowLeft")
          I.seek("<<<");
        else if (l.key == "ArrowRight")
          I.seek(">>>");
        else
          return;
        l.preventDefault();
        return;
      }
      if (l.key == " ")
        I.pauseOrResume();
      else if (l.key == ".")
        I.step(), AA();
      else if (l.key == "f")
        $();
      else if (l.key == "ArrowLeft")
        I.seek("<<");
      else if (l.key == "ArrowRight")
        I.seek(">>");
      else if (l.key.charCodeAt(0) >= 48 && l.key.charCodeAt(0) <= 57) {
        const d = (l.key.charCodeAt(0) - 48) / 10;
        I.seek(`${d * 100}%`);
      } else
        return;
      l.preventDefault();
    }
  }, lA = () => {
    Q.isFullscreen && f(!0);
  }, uA = () => {
    Q.isFullscreen || f(!1);
  }, hA = () => {
    o = setInterval(AA, 100);
  }, CA = () => {
    clearInterval(o);
  }, AA = () => {
    const l = I.getCurrentTime(), d = I.getRemainingTime(), J = I.getProgress();
    C({
      currentTime: l,
      remainingTime: d,
      progress: J
    });
  }, O = () => {
    a = setInterval(() => {
      C((l) => {
        const d = {
          blink: !l.blink
        };
        return d.blink && (d.cursorHold = !1), d;
      });
    }, 500);
  }, _ = () => {
    clearInterval(a), C("blink", !0);
  }, f = (l) => {
    clearTimeout(n), l && (n = setTimeout(() => f(!1), 2e3)), C("showControls", l);
  }, m = () => {
    const l = {};
    (A.fit === !1 || A.fit === "none") && A.terminalFontSize !== void 0 && (A.terminalFontSize === "small" ? l["font-size"] = "12px" : A.terminalFontSize === "medium" ? l["font-size"] = "18px" : A.terminalFontSize === "big" ? l["font-size"] = "24px" : l["font-size"] = A.terminalFontSize);
    const d = h();
    return d === void 0 ? (l.height = 0, l) : (d.width !== void 0 && (l.width = `${d.width}px`, l.height = `${d.height}px`), l);
  }, K = () => `asciinema-player asciinema-theme-${A.theme ?? "asciinema"}`, v = () => {
    var l;
    return (l = h()) == null ? void 0 : l.scale;
  };
  return (() => {
    const l = BQ.cloneNode(!0), d = l.firstChild, J = c;
    typeof J == "function" ? Eg(J, l) : c = l, l.addEventListener("webkitfullscreenchange", x), l.addEventListener("fullscreenchange", x), l.$$mousemove = lA, l.$$keydown = fA, l.addEventListener("keypress", fA);
    const X = w;
    return typeof X == "function" ? Eg(X, d) : w = d, d.$$mousemove = () => f(!0), d.addEventListener("mouseleave", uA), V(d, j(FI, {
      get cols() {
        return e();
      },
      get rows() {
        return i();
      },
      get scale() {
        return v();
      },
      get blink() {
        return Q.blink;
      },
      get lines() {
        return Q.lines;
      },
      get cursor() {
        return Q.cursor;
      },
      get cursorHold() {
        return Q.cursorHold;
      },
      get fontFamily() {
        return A.terminalFontFamily;
      },
      get lineHeight() {
        return A.terminalLineHeight;
      },
      ref(H) {
        const BA = D;
        typeof BA == "function" ? BA(H) : D = H;
      }
    }), null), V(d, j(zB, {
      get currentTime() {
        return Q.currentTime;
      },
      get remainingTime() {
        return Q.remainingTime;
      },
      get progress() {
        return Q.progress;
      },
      get isPlaying() {
        return Q.coreState == "playing";
      },
      get isPausable() {
        return Q.isPausable;
      },
      get isSeekable() {
        return Q.isSeekable;
      },
      onPlayClick: () => I.pauseOrResume(),
      onFullscreenClick: $,
      onSeekClick: (H) => I.seek(H),
      ref(H) {
        const BA = M;
        typeof BA == "function" ? BA(H) : M = H;
      }
    }), null), V(d, j(lI, {
      get children() {
        return [j(Cg, {
          get when() {
            return Q.showStartOverlay;
          },
          get children() {
            return j(IQ, {
              onClick: () => I.play()
            });
          }
        }), j(Cg, {
          get when() {
            return Q.coreState == "loading";
          },
          get children() {
            return j(AQ, {
              get cols() {
                return e();
              },
              get rows() {
                return i();
              },
              get scale() {
                return v();
              },
              get terminalFontFamily() {
                return A.terminalFontFamily;
              },
              get terminalLineHeight() {
                return A.terminalLineHeight;
              }
            });
          }
        })];
      }
    }), null), tA((H) => {
      const BA = !!Q.showControls, yA = K(), JA = m();
      return BA !== H._v$ && l.classList.toggle("hud", H._v$ = BA), yA !== H._v$2 && wI(d, H._v$2 = yA), H._v$3 = og(d, JA, H._v$3), H;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), l;
  })();
};
Jg(["keydown", "mousemove"]);
class CQ {
  log() {
  }
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
}
class aA {
  constructor(g, I) {
    this.input = typeof g.next == "function" ? g : g[Symbol.iterator](), this.xfs = I ?? [];
  }
  map(g) {
    return this.transform(EQ(g));
  }
  flatMap(g) {
    return this.transform(eQ(g));
  }
  filter(g) {
    return this.transform(iQ(g));
  }
  take(g) {
    return this.transform(tQ(g));
  }
  drop(g) {
    return this.transform(nQ(g));
  }
  transform(g) {
    return new aA(this.input, this.xfs.concat([g]));
  }
  toArray() {
    return Array.from(this);
  }
  [Symbol.iterator]() {
    let g = 0, I = [], B = !1;
    const Q = oQ(this.xfs, (C) => I.push(C));
    return {
      next: () => {
        for (g === I.length && (I = [], g = 0); I.length === 0; ) {
          const C = this.input.next();
          if (C.done)
            break;
          Q.step(C.value);
        }
        return I.length === 0 && !B && (Q.flush(), B = !0), I.length > 0 ? {
          done: !1,
          value: I[g++]
        } : {
          done: !0
        };
      }
    };
  }
}
function EQ(A) {
  return (g) => (I) => {
    g(A(I));
  };
}
function eQ(A) {
  return (g) => (I) => {
    A(I).forEach(g);
  };
}
function iQ(A) {
  return (g) => (I) => {
    A(I) && g(I);
  };
}
function tQ(A) {
  let g = 0;
  return (I) => (B) => {
    g < A && I(B), g += 1;
  };
}
function nQ(A) {
  let g = 0;
  return (I) => (B) => {
    g += 1, g > A && I(B);
  };
}
function oQ(A, g) {
  return A.reverse().reduce((I, B) => {
    const Q = CI(B(I.step));
    return {
      step: Q.step,
      flush: () => {
        Q.flush(), I.flush();
      }
    };
  }, CI(g));
}
function CI(A) {
  return typeof A == "function" ? {
    step: A,
    flush: () => {
    }
  } : A;
}
function sQ(A, g, I) {
  let {
    feed: B,
    now: Q,
    setTimeout: C,
    onFinish: e,
    logger: i
  } = g, {
    idleTimeLimit: t,
    startAt: n,
    loop: o
  } = I, a, c, w, D, M, N, F = 0, y = 0, S, h, x = 0;
  async function $() {
    if (w)
      return;
    const f = A.parser(await fA(A));
    a = f.cols, c = f.rows, t = t ?? f.idleTimeLimit;
    const m = aQ(f.frames, i, t, n);
    if (w = m.frames, w.length === 0)
      throw "recording is missing events";
    M = m.effectiveStartAt, D = w[w.length - 1][0];
  }
  async function fA(f) {
    let {
      url: m,
      data: K,
      fetchOpts: v = {}
    } = f;
    if (m !== void 0) {
      const q = await fetch(m, v);
      if (!q.ok)
        throw `failed fetching recording file: ${q.statusText} (${q.status})`;
      return await q.text();
    } else {
      if (K !== void 0)
        return typeof K == "function" && (K = K()), await K;
      throw "failed fetching recording file: url/data missing in src";
    }
  }
  function lA() {
    const f = w[F];
    if (f) {
      const m = f[0] * 1e3, K = Q() - S;
      let v = m - K;
      v < 0 && (v = 0), N = C(uA, v);
    } else
      x++, o === !0 || typeof o == "number" && x < o ? (F = 0, S = Q(), B("\x1Bc"), lA()) : (N = null, h = D * 1e3, e());
  }
  function uA() {
    let f = w[F], m;
    do
      B(f[1]), y = f[0] * 1e3, f = w[++F], m = Q() - S;
    while (f && m > f[0] * 1e3);
    lA();
  }
  function hA() {
    clearTimeout(N), N = null, h = Q() - S;
  }
  function CA() {
    S = Q() - h, h = null, lA();
  }
  function AA(f) {
    const m = !!N;
    if (m && hA(), typeof f == "string") {
      const q = (h ?? 0) / 1e3;
      f === "<<" ? f = q - 5 : f === ">>" ? f = q + 5 : f === "<<<" ? f = q - 0.1 * D : f === ">>>" ? f = q + 0.1 * D : f[f.length - 1] === "%" && (f = parseFloat(f.substring(0, f.length - 1)) / 100 * D);
    }
    const K = Math.min(Math.max(f, 0), D) * 1e3;
    K < y && (B("\x1Bc"), F = 0, y = 0);
    let v = w[F];
    for (; v && v[0] * 1e3 < K; )
      B(v[1]), y = v[0] * 1e3, v = w[++F];
    return h = K, m && CA(), !0;
  }
  function O() {
    let f = w[F];
    f !== void 0 ? (B(f[1]), y = f[0] * 1e3, h = y, F++) : (h = D * 1e3, e());
  }
  function _(f) {
    const m = f * 1e3, K = [];
    let v = 0, q = w[0];
    for (; q && q[0] * 1e3 < m; )
      K.push(q[1]), q = w[++v];
    return K;
  }
  return {
    init: async () => (await $(), {
      cols: a,
      rows: c,
      duration: D
    }),
    start: async () => {
      AA(M), CA();
    },
    stop: () => {
      clearTimeout(N);
    },
    restart: () => N ? !1 : (AA(0), CA(), !0),
    pauseOrResume: () => N ? (hA(), !1) : (CA(), !0),
    seek: AA,
    step: O,
    getPoster: (f) => _(f),
    getCurrentTime: () => N ? (Q() - S) / 1e3 : (h ?? 0) / 1e3
  };
}
function rQ(A, g) {
  const I = 0.016666666666666666;
  let B;
  return A.transform((Q) => {
    let C = 0, e = 0;
    return {
      step: (i) => {
        if (C++, B === void 0) {
          B = i;
          return;
        }
        i[0] - B[0] < I ? B[1] += i[1] : (Q(B), B = i, e++);
      },
      flush: () => {
        B !== void 0 && (Q(B), e++), g.debug(`batched ${C} frames to ${e} frames`);
      }
    };
  });
}
function aQ(A, g) {
  let I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1 / 0, B = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, Q = 0, C = 0, e = B;
  return A instanceof aA || (A = new aA(A)), {
    frames: Array.from(rQ(A, g).map((t) => {
      const o = t[0] - Q - I;
      return Q = t[0], o > 0 && (C += o, t[0] < B && (e -= o)), [t[0] - C, t[1]];
    })),
    effectiveStartAt: e
  };
}
function cQ(A, g, I) {
  let {
    kind: B
  } = A;
  if (B == "random")
    return lQ(g);
  if (B == "clock")
    return wQ(g, I);
}
function lQ(A) {
  let {
    feed: g,
    setTimeout: I
  } = A;
  const B = " ".charCodeAt(0), Q = "~".charCodeAt(0) - B;
  let C;
  const e = () => {
    const t = Math.pow(5, Math.random() * 4);
    C = I(i, t);
  }, i = () => {
    e();
    const t = String.fromCharCode(B + Math.floor(Math.random() * Q));
    g(t);
  };
  return () => (e(), () => clearInterval(C));
}
function wQ(A, g) {
  let {
    feed: I
  } = A, {
    cols: B = 5,
    rows: Q = 1
  } = g;
  const C = Math.floor(Q / 2), e = Math.floor(B / 2) - 2;
  let i;
  return {
    cols: B,
    rows: Q,
    duration: 24 * 60,
    start: () => {
      setTimeout(() => {
        I(`\x1B[?25l\x1B[1m\x1B[${C}B`);
      }, 0), i = setInterval(() => {
        const t = /* @__PURE__ */ new Date(), n = t.getHours(), o = t.getMinutes();
        I("\r");
        for (let a = 0; a < e; a++)
          I(" ");
        I("\x1B[32m"), n < 10 && I("0"), I(`${n}`), I("\x1B[39;5m:\x1B[25;35m"), o < 10 && I("0"), I(`${o}`);
      }, 1e3);
    },
    stop: () => {
      clearInterval(i);
    },
    getCurrentTime: () => {
      const t = /* @__PURE__ */ new Date();
      return t.getHours() * 60 + t.getMinutes();
    }
  };
}
class DQ {
  constructor() {
    this.items = [], this.onPush = void 0;
  }
  push(g) {
    this.items.push(g), this.onPush !== void 0 && (this.onPush(this.popAll()), this.onPush = void 0);
  }
  popAll() {
    if (this.items.length > 0) {
      const g = this.items;
      return this.items = [], g;
    } else {
      const g = this;
      return new Promise((I) => {
        g.onPush = I;
      });
    }
  }
}
function kI(A, g) {
  return g > 0 ? uQ(A, g) : fQ(A);
}
function fQ(A) {
  return {
    pushEvent(g) {
      g[1] === "o" && A(g[2]);
    },
    pushText(g) {
      A(g);
    },
    stop() {
    }
  };
}
function uQ(A, g) {
  const I = new DQ(), B = 1e3 / 60;
  let Q, C, e = !1, i = -B;
  return setTimeout(async () => {
    for (; !e; ) {
      const t = await I.popAll();
      if (e)
        return;
      for (const n of t) {
        const o = (n[0] - C + g) * 1e3;
        if (o - i < B) {
          A(n[2]);
          continue;
        }
        const a = VA() - Q;
        if (o > a && (await hQ(o - a), e))
          return;
        A(n[2]), i = o;
      }
    }
  }, 0), {
    pushEvent(t) {
      Q === void 0 && (Q = VA(), C = t[0]), t[1] == "o" && I.push(t);
    },
    pushText(t) {
      Q === void 0 && (Q = VA(), C = 0);
      const n = (VA() - Q) / 1e3;
      I.push([n, "o", t]);
    },
    stop() {
      e = !0, I.push(void 0);
    }
  };
}
function VA() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function hQ(A) {
  return new Promise((g) => {
    setTimeout(g, A);
  });
}
function yQ(A) {
  return Math.min(500 * Math.pow(2, A), 5e3);
}
function GQ(A, g) {
  let {
    url: I,
    bufferTime: B = 0,
    reconnectDelay: Q = yQ
  } = A, {
    feed: C,
    reset: e,
    setLoading: i,
    onFinish: t,
    logger: n
  } = g;
  const o = new TextDecoder();
  let a, c, w, D = 0, M, N = !1;
  function F() {
    c !== void 0 && c.stop(), c = kI(C, B);
  }
  function y() {
    a = new WebSocket(I), a.binaryType = "arraybuffer", a.onopen = () => {
      n.info("websocket: opened"), i(!1), F(), M = setTimeout(() => {
        D = 0;
      }, 1e3);
    }, a.onmessage = (S) => {
      if (typeof S.data == "string") {
        const h = JSON.parse(S.data);
        if (Array.isArray(h))
          c.pushEvent(h), w !== void 0 && w.setTime(h[0]);
        else if (h.cols !== void 0 || h.width !== void 0) {
          const x = h.cols ?? h.width, $ = h.rows ?? h.height;
          n.debug(`websocket: vt reset (${x}x${$})`), F(), e(x, $, h.init ?? void 0), w = new Ug(), typeof h.time == "number" && w.setTime(h.time);
        } else
          h.state === "offline" && (n.info("websocket: stream offline"), w = void 0);
      } else
        c.pushText(o.decode(S.data));
    }, a.onclose = (S) => {
      if (N || S.code === 1e3 || S.code === 1005)
        n.info("websocket: closed"), t();
      else {
        clearTimeout(M);
        const h = Q(D++);
        n.info(`websocket: unclean close, reconnecting in ${h}...`), i(!0), setTimeout(y, h);
      }
    };
  }
  return {
    start: () => {
      y();
    },
    stop: () => {
      N = !0, c !== void 0 && c.stop(), a !== void 0 && a.close();
    },
    getCurrentTime: () => {
      if (w !== void 0)
        return w.getTime();
    }
  };
}
function dQ(A, g) {
  let {
    url: I,
    bufferTime: B = 0
  } = A, {
    feed: Q,
    reset: C,
    setLoading: e,
    onFinish: i,
    logger: t
  } = g, n, o, a;
  function c() {
    o !== void 0 && o.stop(), o = kI(Q, B);
  }
  return {
    start: () => {
      n = new EventSource(I), n.addEventListener("open", () => {
        t.info("eventsource: opened"), e(!1), c();
      }), n.addEventListener("error", (w) => {
        t.info("eventsource: errored"), t.debug({
          e: w
        }), e(!0);
      }), n.addEventListener("message", (w) => {
        const D = JSON.parse(w.data);
        if (Array.isArray(D))
          o.pushEvent(D), a !== void 0 && a.setTime(D[0]);
        else if (D.cols !== void 0 || D.width !== void 0) {
          const M = D.cols ?? D.width, N = D.rows ?? D.height;
          t.debug(`eventsource: vt reset (${M}x${N})`), c(), C(M, N, D.init ?? void 0), a = new Ug(), typeof D.time == "number" && a.setTime(D.time);
        } else
          D.state === "offline" && (t.info("eventsource: stream offline"), a = void 0);
      }), n.addEventListener("done", () => {
        t.info("eventsource: closed"), n.close(), i();
      });
    },
    stop: () => {
      o !== void 0 && o.stop(), n !== void 0 && n.close();
    },
    getCurrentTime: () => {
      if (a !== void 0)
        return a.getTime();
    }
  };
}
function NQ(A) {
  let g, I = new aA([]);
  if (typeof A == "string") {
    const B = RQ(A);
    B !== void 0 ? (g = B.header, I = B.events) : g = JSON.parse(A);
  } else if (typeof A == "object" && typeof A.version == "number")
    g = A;
  else if (Array.isArray(A))
    g = A[0], I = new aA(A).drop(1);
  else
    throw "invalid data";
  if (g.version === 1)
    return FQ(g);
  if (g.version === 2)
    return kQ(g, I);
  throw `asciicast v${g.version} format not supported`;
}
function RQ(A) {
  const g = A.split(`
`);
  let I;
  try {
    I = JSON.parse(g[0]);
  } catch {
    return;
  }
  const B = new aA(g).drop(1).filter((Q) => Q[0] === "[").map((Q) => JSON.parse(Q));
  return {
    header: I,
    events: B
  };
}
function FQ(A) {
  let g = 0;
  const I = new aA(A.stdout).map((B) => (g += B[0], [g, B[1]]));
  return {
    cols: A.width,
    rows: A.height,
    frames: I
  };
}
function kQ(A, g) {
  const I = g.filter((B) => B[1] === "o").map((B) => [B[0], B[2]]);
  return {
    cols: A.width,
    rows: A.height,
    idleTimeLimit: A.idle_time_limit,
    frames: I
  };
}
function MQ(A, g) {
  let I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const B = I.logger ?? new CQ(), Q = new UB(SQ(A), {
    logger: B,
    cols: I.cols,
    rows: I.rows,
    loop: I.loop,
    speed: I.speed,
    preload: I.preload,
    startAt: I.startAt,
    poster: I.poster,
    idleTimeLimit: I.idleTimeLimit
  }), C = {
    logger: B,
    core: Q,
    cols: I.cols,
    rows: I.rows,
    fit: I.fit,
    autoPlay: I.autoPlay ?? I.autoplay,
    terminalFontSize: I.terminalFontSize,
    terminalFontFamily: I.terminalFontFamily,
    terminalLineHeight: I.terminalLineHeight,
    theme: I.theme
  };
  let e;
  const i = wB(() => (e = j(QQ, C), e), g), t = {
    el: e,
    dispose: i,
    getCurrentTime: () => Q.getCurrentTime(),
    getDuration: () => Q.getDuration(),
    play: () => Q.play(),
    pause: () => Q.pause(),
    seek: (n) => Q.seek(n)
  };
  return t.addEventListener = (n, o) => Q.addEventListener(n, o.bind(t)), t;
}
function SQ(A) {
  if (typeof A == "function")
    return A;
  typeof A == "string" && (A.substring(0, 5) == "ws://" || A.substring(0, 6) == "wss://" ? A = {
    driver: "websocket",
    url: A
  } : A.substring(0, 7) == "test://" ? A = {
    driver: "test",
    kind: A.substring(7)
  } : A = {
    driver: "recording",
    url: A
  }), A.driver === void 0 && (A.driver = "recording"), A.driver == "recording" && A.parser === void 0 && (A.parser = NQ);
  const g = /* @__PURE__ */ new Map([["recording", sQ], ["websocket", GQ], ["eventsource", dQ], ["test", cQ]]);
  if (g.has(A.driver)) {
    const I = g.get(A.driver);
    return (B, Q) => I(A, B, Q);
  } else
    throw `unsupported driver: ${JSON.stringify(A)}`;
}
const YQ = (...A) => (g) => {
  A.forEach((I) => {
    typeof I == "function" ? I(g) : I && (I.current = g);
  });
}, LQ = kg.forwardRef((A, g) => {
  const { src: I, options: B = {}, ...Q } = A, C = zI(null);
  return $I(() => {
    const e = C.current;
    e && (e.innerHTML = "", MQ(I, e, B));
  }, [I]), /* @__PURE__ */ BB("div", { ref: YQ(C, g), ...Q });
});
export {
  LQ as default
};
