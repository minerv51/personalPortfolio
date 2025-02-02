function _mergeNamespaces(n2, m2) {
  for (var i2 = 0; i2 < m2.length; i2++) {
    const e = m2[i2];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k2 in e) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d = Object.getOwnPropertyDescriptor(e, k2);
          if (d) {
            Object.defineProperty(n2, k2, d.get ? d : {
              enumerable: true,
              get: () => e[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w$1 = Symbol.for("react.suspense"), x$1 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$2 = Symbol.iterator;
function A$2(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z$2 && a[z$2] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$2 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$2 = Object.assign, D$2 = {};
function E$2(a, b2, e) {
  this.props = a;
  this.context = b2;
  this.refs = D$2;
  this.updater = e || B$2;
}
E$2.prototype.isReactComponent = {};
E$2.prototype.setState = function(a, b2) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b2, "setState");
};
E$2.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F$1() {
}
F$1.prototype = E$2.prototype;
function G$2(a, b2, e) {
  this.props = a;
  this.context = b2;
  this.refs = D$2;
  this.updater = e || B$2;
}
var H$2 = G$2.prototype = new F$1();
H$2.constructor = G$2;
C$2(H$2, E$2.prototype);
H$2.isPureReactComponent = true;
var I$2 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$2 = { key: true, ref: true, __self: true, __source: true };
function M$2(a, b2, e) {
  var d, c = {}, k2 = null, h = null;
  if (null != b2) for (d in void 0 !== b2.ref && (h = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J$1.call(b2, d) && !L$2.hasOwnProperty(d) && (c[d] = b2[d]);
  var g = arguments.length - 2;
  if (1 === g) c.children = e;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++) f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$2.current };
}
function N$2(a, b2) {
  return { $$typeof: l$1, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$2(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$1;
}
function escape(a) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b2[a2];
  });
}
var P$2 = /\/+/g;
function Q$2(a, b2) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
}
function R$2(a, b2, e, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2) a = null;
  var h = false;
  if (null === a) h = true;
  else switch (k2) {
    case "string":
    case "number":
      h = true;
      break;
    case "object":
      switch (a.$$typeof) {
        case l$1:
        case n$1:
          h = true;
      }
  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q$2(h, 0) : d, I$2(c) ? (e = "", null != a && (e = a.replace(P$2, "$&/") + "/"), R$2(c, b2, e, "", function(a2) {
    return a2;
  })) : null != c && (O$2(c) && (c = N$2(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$2, "$&/") + "/") + a)), b2.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I$2(a)) for (var g = 0; g < a.length; g++) {
    k2 = a[g];
    var f2 = d + Q$2(k2, g);
    h += R$2(k2, b2, e, f2, c);
  }
  else if (f2 = A$2(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d + Q$2(k2, g++), h += R$2(k2, b2, e, f2, c);
  else if ("object" === k2) throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$2(a, b2, e) {
  if (null == a) return a;
  var d = [], c = 0;
  R$2(a, d, "", "", function(a2) {
    return b2.call(e, a2, c++);
  });
  return d;
}
function T$2(a) {
  if (-1 === a._status) {
    var b2 = a._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b3;
    }, function(b3) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b3;
    });
    -1 === a._status && (a._status = 0, a._result = b2);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U$2 = { current: null }, V$2 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$2, ReactCurrentOwner: K$2 };
function X$2() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$2, forEach: function(a, b2, e) {
  S$2(a, function() {
    b2.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b2 = 0;
  S$2(a, function() {
    b2++;
  });
  return b2;
}, toArray: function(a) {
  return S$2(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$2(a)) throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$2;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r;
react_production_min.PureComponent = G$2;
react_production_min.StrictMode = q$2;
react_production_min.Suspense = w$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min.act = X$2;
react_production_min.cloneElement = function(a, b2, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$2({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h = K$2.current);
    void 0 !== b2.key && (c = "" + b2.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
    for (f2 in b2) J$1.call(b2, f2) && !L$2.hasOwnProperty(f2) && (d[f2] = void 0 === b2[f2] && void 0 !== g ? g[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d.children = e;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function(a) {
  var b2 = M$2.bind(null, a);
  b2.type = a;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$2, render: a };
};
react_production_min.isValidElement = O$2;
react_production_min.lazy = function(a) {
  return { $$typeof: y$1, _payload: { _status: -1, _result: a }, _init: T$2 };
};
react_production_min.memo = function(a, b2) {
  return { $$typeof: x$1, type: a, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a) {
  var b2 = V$2.transition;
  V$2.transition = {};
  try {
    a();
  } finally {
    V$2.transition = b2;
  }
};
react_production_min.unstable_act = X$2;
react_production_min.useCallback = function(a, b2) {
  return U$2.current.useCallback(a, b2);
};
react_production_min.useContext = function(a) {
  return U$2.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$2.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b2) {
  return U$2.current.useEffect(a, b2);
};
react_production_min.useId = function() {
  return U$2.current.useId();
};
react_production_min.useImperativeHandle = function(a, b2, e) {
  return U$2.current.useImperativeHandle(a, b2, e);
};
react_production_min.useInsertionEffect = function(a, b2) {
  return U$2.current.useInsertionEffect(a, b2);
};
react_production_min.useLayoutEffect = function(a, b2) {
  return U$2.current.useLayoutEffect(a, b2);
};
react_production_min.useMemo = function(a, b2) {
  return U$2.current.useMemo(a, b2);
};
react_production_min.useReducer = function(a, b2, e) {
  return U$2.current.useReducer(a, b2, e);
};
react_production_min.useRef = function(a) {
  return U$2.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$2.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b2, e) {
  return U$2.current.useSyncExternalStore(a, b2, e);
};
react_production_min.useTransition = function() {
  return U$2.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const i = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const React = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: i
}, [reactExports]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k$1 = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q$1(c, a, g) {
  var b2, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b2 in a) m.call(a, b2) && !p$1.hasOwnProperty(b2) && (d[b2] = a[b2]);
  if (c && c.defaultProps) for (b2 in a = c.defaultProps, a) void 0 === d[b2] && (d[b2] = a[b2]);
  return { $$typeof: k$1, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q$1;
reactJsxRuntime_production_min.jsxs = q$1;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b2) {
    var c = a.length;
    a.push(b2);
    a: for (; 0 < c; ) {
      var d = c - 1 >>> 1, e = a[d];
      if (0 < g(e, b2)) a[d] = b2, a[c] = e, c = d;
      else break a;
    }
  }
  function h(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length) return null;
    var b2 = a[0], c = a.pop();
    if (c !== b2) {
      a[0] = c;
      a: for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
        var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
        if (0 > g(C2, c)) n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
        else if (n2 < e && 0 > g(x2, c)) a[d] = x2, a[n2] = c, d = n2;
        else break a;
      }
    }
    return b2;
  }
  function g(a, b2) {
    var c = a.sortIndex - b2.sortIndex;
    return 0 !== c ? c : a.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b2 = h(t2); null !== b2; ) {
      if (null === b2.callback) k2(t2);
      else if (b2.startTime <= a) k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else break;
      b2 = h(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2) if (null !== h(r2)) A2 = true, I2(J2);
    else {
      var b2 = h(t2);
      null !== b2 && K2(H2, b2.startTime - a);
    }
  }
  function J2(a, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b2);
      for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
          G2(b2);
        } else k2(r2);
        v2 = h(r2);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b2 = true;
      try {
        b2 = O2(true, a);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else N2 = false;
  }
  var S2;
  if ("function" === typeof F2) S2 = function() {
    F2(R2);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else S2 = function() {
    D2(R2, 0);
  };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b2) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c = y2;
    y2 = b2;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b2) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b2();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b2, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: u2++, callback: b2, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b2 = y2;
    return function() {
      var c = y2;
      y2 = b2;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b2 += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b2) {
  ha(a, b2);
  ha(a + "Capture", b2);
}
function ha(a, b2) {
  ea[a] = b2;
  for (a = 0; a < b2.length; a++) da.add(b2[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a)) return true;
  if (ja.call(la, a)) return false;
  if (ka.test(a)) return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b2, c, d) {
  if (null !== c && 0 === c.type) return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d) return false;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b2, c, d) {
  if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c, d)) return true;
  if (d) return false;
  if (null !== c) switch (c.type) {
    case 3:
      return !b2;
    case 4:
      return false === b2;
    case 5:
      return isNaN(b2);
    case 6:
      return isNaN(b2) || 1 > b2;
  }
  return false;
}
function v$1(a, b2, c, d, e, f2, g) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z$1 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z$1[a] = new v$1(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b2 = a[0];
  z$1[b2] = new v$1(b2, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z$1[a] = new v$1(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z$1[a] = new v$1(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z$1[a] = new v$1(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z$1[a] = new v$1(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z$1[a] = new v$1(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z$1[a] = new v$1(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z$1[a] = new v$1(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b2 = a.replace(
    ra,
    sa
  );
  z$1[b2] = new v$1(b2, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b2 = a.replace(ra, sa);
  z$1[b2] = new v$1(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b2 = a.replace(ra, sa);
  z$1[b2] = new v$1(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z$1[a] = new v$1(a, 1, false, a.toLowerCase(), null, false, false);
});
z$1.xlinkHref = new v$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z$1[a] = new v$1(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b2, c, d) {
  var e = z$1.hasOwnProperty(b2) ? z$1[b2] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c, e, d) && (c = null), d || null === e ? oa(b2) && (null === c ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b2 = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b2) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b2, c) : a.setAttribute(b2, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a) return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A$1 = Object.assign, La;
function Ma(a) {
  if (void 0 === La) try {
    throw Error();
  } catch (c) {
    var b2 = c.stack.trim().match(/\n( *(at )?)/);
    La = b2 && b2[1] || "";
  }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b2) {
  if (!a || Na) return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2) if (b2 = function() {
      throw Error();
    }, Object.defineProperty(b2.prototype, "props", { set: function() {
      throw Error();
    } }), "object" === typeof Reflect && Reflect.construct) {
      try {
        Reflect.construct(b2, []);
      } catch (l2) {
        var d = l2;
      }
      Reflect.construct(a, [], b2);
    } else {
      try {
        b2.call();
      } catch (l2) {
        d = l2;
      }
      a.call(b2.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; ) h--;
      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f2[h]) {
        if (1 !== g || 1 !== h) {
          do
            if (g--, h--, 0 > h || e[g] !== f2[h]) {
              var k2 = "\n" + e[g].replace(" at new ", " at ");
              a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
              return k2;
            }
          while (1 <= g && 0 <= h);
        }
        break;
      }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a) switch (a.$$typeof) {
    case Ca:
      return (a.displayName || "Context") + ".Consumer";
    case Ba:
      return (a._context.displayName || "Context") + ".Provider";
    case Da:
      var b2 = a.render;
      a = a.displayName;
      a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      return a;
    case Ga:
      return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
    case Ha:
      b2 = a._payload;
      a = a._init;
      try {
        return Qa(a(b2));
      } catch (c) {
      }
  }
  return null;
}
function Ra(a) {
  var b2 = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b2);
    case 8:
      return b2 === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2) return b2.displayName || b2.name || null;
      if ("string" === typeof b2) return b2;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b2 = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a) {
  var b2 = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d = "" + a[b2];
  if (!a.hasOwnProperty(b2) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b2, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b2, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b2];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a) return false;
  var b2 = a._valueTracker;
  if (!b2) return true;
  var c = b2.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b2.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;
  try {
    return a.activeElement || a.body;
  } catch (b2) {
    return a.body;
  }
}
function Ya(a, b2) {
  var c = b2.checked;
  return A$1({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b2) {
  var c = null == b2.defaultValue ? "" : b2.defaultValue, d = null != b2.checked ? b2.checked : b2.defaultChecked;
  c = Sa(null != b2.value ? b2.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a, b2) {
  b2 = b2.checked;
  null != b2 && ta(a, "checked", b2, false);
}
function bb(a, b2) {
  ab(a, b2);
  var c = Sa(b2.value), d = b2.type;
  if (null != c) if ("number" === d) {
    if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
  } else a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a, b2.type, c) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
}
function db(a, b2, c) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d = b2.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b2.value && null !== b2.value)) return;
    b2 = "" + a._wrapperState.initialValue;
    c || b2 === a.value || (a.value = b2);
    a.defaultValue = b2;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b2, c) {
  if ("number" !== b2 || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b2, c, d) {
  a = a.options;
  if (b2) {
    b2 = {};
    for (var e = 0; e < c.length; e++) b2["$" + c[e]] = true;
    for (c = 0; c < a.length; c++) e = b2.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b2 = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b2 || a[e].disabled || (b2 = a[e]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a, b2) {
  if (null != b2.dangerouslySetInnerHTML) throw Error(p(91));
  return A$1({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b2) {
  var c = b2.value;
  if (null == c) {
    c = b2.children;
    b2 = b2.defaultValue;
    if (null != c) {
      if (null != b2) throw Error(p(92));
      if (eb(c)) {
        if (1 < c.length) throw Error(p(93));
        c = c[0];
      }
      b2 = c;
    }
    null == b2 && (b2 = "");
    c = b2;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b2) {
  var c = Sa(b2.value), d = Sa(b2.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b2.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b2 = a.textContent;
  b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b2) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b2, c, d, e);
    });
  } : a;
}(function(a, b2) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
    for (; b2.firstChild; ) a.appendChild(b2.firstChild);
  }
});
function ob(a, b2) {
  if (b2) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b2;
      return;
    }
  }
  a.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b2) {
    b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b2] = pb[a];
  });
});
function rb(a, b2, c) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
}
function sb(a, b2) {
  a = a.style;
  for (var c in b2) if (b2.hasOwnProperty(c)) {
    var d = 0 === c.indexOf("--"), e = rb(c, b2[c], d);
    "float" === c && (c = "cssFloat");
    d ? a.setProperty(c, e) : a[c] = e;
  }
}
var tb = A$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b2) {
  if (b2) {
    if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p(137, a));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children) throw Error(p(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p(61));
    }
    if (null != b2.style && "object" !== typeof b2.style) throw Error(p(62));
  }
}
function vb(a, b2) {
  if (-1 === a.indexOf("-")) return "string" === typeof b2.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb) throw Error(p(280));
    var b2 = a.stateNode;
    b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a);
    if (b2) for (a = 0; a < b2.length; a++) Bb(b2[a]);
  }
}
function Gb(a, b2) {
  return a(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a, b2, c) {
  if (Ib) return a(b2, c);
  Ib = true;
  try {
    return Gb(a, b2, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a, b2) {
  var c = a.stateNode;
  if (null === c) return null;
  var d = Db(c);
  if (null === d) return null;
  c = d[b2];
  a: switch (b2) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;
    default:
      a = false;
  }
  if (a) return null;
  if (c && "function" !== typeof c) throw Error(p(231, b2, typeof c));
  return c;
}
var Lb = false;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = true;
  } });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a) {
  Lb = false;
}
function Nb(a, b2, c, d, e, f2, g, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b2, c, d, e, f2, g, h, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b2, c, d, e, f2, g, h, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else throw Error(p(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b2 = a, c = a;
  if (a.alternate) for (; b2.return; ) b2 = b2.return;
  else {
    a = b2;
    do
      b2 = a, 0 !== (b2.flags & 4098) && (c = b2.return), a = b2.return;
    while (a);
  }
  return 3 === b2.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b2 = a.memoizedState;
    null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
    if (null !== b2) return b2.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a) throw Error(p(188));
}
function Yb(a) {
  var b2 = a.alternate;
  if (!b2) {
    b2 = Vb(a);
    if (null === b2) throw Error(p(188));
    return b2 !== a ? null : a;
  }
  for (var c = a, d = b2; ; ) {
    var e = c.return;
    if (null === e) break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c) return Xb(e), a;
        if (f2 === d) return Xb(e), b2;
        f2 = f2.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return) c = e, d = f2;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g) throw Error(p(189));
      }
    }
    if (c.alternate !== d) throw Error(p(190));
  }
  if (3 !== c.tag) throw Error(p(188));
  return c.stateNode.current === c ? a : b2;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag) return a;
  for (a = a.child; null !== a; ) {
    var b2 = $b(a);
    if (null !== b2) return b2;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B$1 = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
  } catch (b2) {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b2) {
  var c = a.pendingLanes;
  if (0 === c) return 0;
  var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
  } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
  if (0 === d) return 0;
  if (0 !== b2 && b2 !== d && 0 === (b2 & e) && (e = d & -d, f2 = b2 & -b2, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b2;
  0 !== (d & 4) && (d |= c & 16);
  b2 = a.entangledLanes;
  if (0 !== b2) for (a = a.entanglements, b2 &= d; 0 < b2; ) c = 31 - oc(b2), e = 1 << c, d |= a[c], b2 &= ~e;
  return d;
}
function vc(a, b2) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b2) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
    if (-1 === k2) {
      if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b2);
    } else k2 <= b2 && (a.expiredLanes |= h);
    f2 &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b2 = [], c = 0; 31 > c; c++) b2.push(a);
  return b2;
}
function Ac(a, b2, c) {
  a.pendingLanes |= b2;
  536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b2 = 31 - oc(b2);
  a[b2] = c;
}
function Bc(a, b2) {
  var c = a.pendingLanes & ~b2;
  a.pendingLanes = b2;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b2;
  a.mutableReadLanes &= b2;
  a.entangledLanes &= b2;
  b2 = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc(c), f2 = 1 << e;
    b2[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f2;
  }
}
function Cc(a, b2) {
  var c = a.entangledLanes |= b2;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e = 1 << d;
    e & b2 | a[d] & b2 && (a[d] |= b2);
    c &= ~e;
  }
}
var C$1 = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b2) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a, b2, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b2, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
  a.eventSystemFlags |= d;
  b2 = a.targetContainers;
  null !== e && -1 === b2.indexOf(e) && b2.push(e);
  return a;
}
function Uc(a, b2, c, d, e) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a, b2, c, d, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b2, c, d, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b2, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c, d, e)), true;
  }
  return false;
}
function Vc(a) {
  var b2 = Wc(a.target);
  if (null !== b2) {
    var c = Vb(b2);
    if (null !== c) {
      if (b2 = c.tag, 13 === b2) {
        if (b2 = Wb(c), null !== b2) {
          a.blockedOn = b2;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b2 && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn) return false;
  for (var b2 = a.targetContainers; 0 < b2.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else return b2 = Cb(c), null !== b2 && Fc(b2), a.blockedOn = c, false;
    b2.shift();
  }
  return true;
}
function Zc(a, b2, c) {
  Xc(a) && c.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b2) {
  a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b2(b3) {
    return ad(b3, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b2, c, d) {
  var e = C$1, f2 = cd.transition;
  cd.transition = null;
  try {
    C$1 = 1, fd(a, b2, c, d);
  } finally {
    C$1 = e, cd.transition = f2;
  }
}
function gd(a, b2, c, d) {
  var e = C$1, f2 = cd.transition;
  cd.transition = null;
  try {
    C$1 = 4, fd(a, b2, c, d);
  } finally {
    C$1 = e, cd.transition = f2;
  }
}
function fd(a, b2, c, d) {
  if (dd) {
    var e = Yc(a, b2, c, d);
    if (null === e) hd(a, b2, d, id, c), Sc(a, d);
    else if (Uc(e, a, b2, c, d)) d.stopPropagation();
    else if (Sc(a, d), b2 & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Cb(e);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b2, c, d);
        null === f2 && hd(a, b2, d, id, c);
        if (f2 === e) break;
        e = f2;
      }
      null !== e && d.stopPropagation();
    } else hd(a, b2, d, null, c);
  }
}
var id = null;
function Yc(a, b2, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a) if (b2 = Vb(a), null === b2) a = null;
  else if (c = b2.tag, 13 === c) {
    a = Wb(b2);
    if (null !== a) return a;
    a = null;
  } else if (3 === c) {
    if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
    a = null;
  } else b2 !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var a, b2 = ld, c = b2.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b2[a] === e[a]; a++) ;
  var g = c - a;
  for (d = 1; d <= g && b2[c - d] === e[f2 - d]; d++) ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b2 = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b2(b3, d, e, f2, g) {
    this._reactName = b3;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a) a.hasOwnProperty(c) && (b3 = a[c], this[c] = b3 ? b3(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A$1(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a) return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$1({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A$1({}, ud, { key: function(a) {
  if (a.key) {
    var b2 = Md[a.key] || a.key;
    if ("Unidentified" !== b2) return b2;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$1({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae$1 = ia && "CompositionEvent" in window, be$1 = null;
ia && "documentMode" in document && (be$1 = document.documentMode);
var ce$1 = ia && "TextEvent" in window && !be$1, de$1 = ia && (!ae$1 || be$1 && 8 < be$1 && 11 >= be$1), ee$1 = String.fromCharCode(32), fe$1 = false;
function ge$1(a, b2) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he$1(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie$1 = false;
function je(a, b2) {
  switch (a) {
    case "compositionend":
      return he$1(b2);
    case "keypress":
      if (32 !== b2.which) return null;
      fe$1 = true;
      return ee$1;
    case "textInput":
      return a = b2.data, a === ee$1 && fe$1 ? null : a;
    default:
      return null;
  }
}
function ke$1(a, b2) {
  if (ie$1) return "compositionend" === a || !ae$1 && ge$1(a, b2) ? (a = nd(), md = ld = kd = null, ie$1 = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length) return b2.char;
        if (b2.which) return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de$1 && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le$1 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me$1(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b2 ? !!le$1[a.type] : "textarea" === b2 ? true : false;
}
function ne$1(a, b2, c, d) {
  Eb(d);
  b2 = oe$1(b2, "onChange");
  0 < b2.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b2 }));
}
var pe$1 = null, qe$1 = null;
function re$1(a) {
  se$1(a, 0);
}
function te$1(a) {
  var b2 = ue$1(a);
  if (Wa(b2)) return a;
}
function ve$1(a, b2) {
  if ("change" === a) return b2;
}
var we$1 = false;
if (ia) {
  var xe$1;
  if (ia) {
    var ye$1 = "oninput" in document;
    if (!ye$1) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye$1 = "function" === typeof ze.oninput;
    }
    xe$1 = ye$1;
  } else xe$1 = false;
  we$1 = xe$1 && (!document.documentMode || 9 < document.documentMode);
}
function Ae$1() {
  pe$1 && (pe$1.detachEvent("onpropertychange", Be$1), qe$1 = pe$1 = null);
}
function Be$1(a) {
  if ("value" === a.propertyName && te$1(qe$1)) {
    var b2 = [];
    ne$1(b2, qe$1, a, xb(a));
    Jb(re$1, b2);
  }
}
function Ce$1(a, b2, c) {
  "focusin" === a ? (Ae$1(), pe$1 = b2, qe$1 = c, pe$1.attachEvent("onpropertychange", Be$1)) : "focusout" === a && Ae$1();
}
function De$1(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te$1(qe$1);
}
function Ee$1(a, b2) {
  if ("click" === a) return te$1(b2);
}
function Fe$1(a, b2) {
  if ("input" === a || "change" === a) return te$1(b2);
}
function Ge$1(a, b2) {
  return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
}
var He$1 = "function" === typeof Object.is ? Object.is : Ge$1;
function Ie$1(a, b2) {
  if (He$1(a, b2)) return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2) return false;
  var c = Object.keys(a), d = Object.keys(b2);
  if (c.length !== d.length) return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b2, e) || !He$1(a[e], b2[e])) return false;
  }
  return true;
}
function Je$1(a) {
  for (; a && a.firstChild; ) a = a.firstChild;
  return a;
}
function Ke$1(a, b2) {
  var c = Je$1(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b2 && d >= b2) return { node: c, offset: b2 - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je$1(c);
  }
}
function Le$1(a, b2) {
  return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le$1(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
}
function Me$1() {
  for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b2.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c) a = b2.contentWindow;
    else break;
    b2 = Xa(a.document);
  }
  return b2;
}
function Ne$1(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
}
function Oe$1(a) {
  var b2 = Me$1(), c = a.focusedElem, d = a.selectionRange;
  if (b2 !== c && c && c.ownerDocument && Le$1(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne$1(c)) {
      if (b2 = d.start, a = d.end, void 0 === a && (a = b2), "selectionStart" in c) c.selectionStart = b2, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b2 = c.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f2 = Math.min(d.start, e);
        d = void 0 === d.end ? f2 : Math.min(d.end, e);
        !a.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = Ke$1(c, f2);
        var g = Ke$1(
          c,
          d
        );
        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b2 = b2.createRange(), b2.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b2), a.extend(g.node, g.offset)) : (b2.setEnd(g.node, g.offset), a.addRange(b2)));
      }
    }
    b2 = [];
    for (a = c; a = a.parentNode; ) 1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b2.length; c++) a = b2[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe$1 = null, Re$1 = null, Se$1 = null, Te$1 = false;
function Ue$1(a, b2, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te$1 || null == Qe$1 || Qe$1 !== Xa(d) || (d = Qe$1, "selectionStart" in d && Ne$1(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se$1 && Ie$1(Se$1, d) || (Se$1 = d, d = oe$1(Re$1, "onSelect"), 0 < d.length && (b2 = new td("onSelect", "select", null, b2, c), a.push({ event: b2, listeners: d }), b2.target = Qe$1)));
}
function Ve$1(a, b2) {
  var c = {};
  c[a.toLowerCase()] = b2.toLowerCase();
  c["Webkit" + a] = "webkit" + b2;
  c["Moz" + a] = "moz" + b2;
  return c;
}
var We$1 = { animationend: Ve$1("Animation", "AnimationEnd"), animationiteration: Ve$1("Animation", "AnimationIteration"), animationstart: Ve$1("Animation", "AnimationStart"), transitionend: Ve$1("Transition", "TransitionEnd") }, Xe$1 = {}, Ye$1 = {};
ia && (Ye$1 = document.createElement("div").style, "AnimationEvent" in window || (delete We$1.animationend.animation, delete We$1.animationiteration.animation, delete We$1.animationstart.animation), "TransitionEvent" in window || delete We$1.transitionend.transition);
function Ze$1(a) {
  if (Xe$1[a]) return Xe$1[a];
  if (!We$1[a]) return a;
  var b2 = We$1[a], c;
  for (c in b2) if (b2.hasOwnProperty(c) && c in Ye$1) return Xe$1[a] = b2[c];
  return a;
}
var $e$1 = Ze$1("animationend"), af = Ze$1("animationiteration"), bf = Ze$1("animationstart"), cf = Ze$1("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b2) {
  df.set(a, b2);
  fa(b2, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e$1, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b2, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b2, void 0, a);
  a.currentTarget = null;
}
function se$1(a, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b2) for (var g = d.length - 1; 0 <= g; g--) {
        var h = d[g], k2 = h.instance, l2 = h.currentTarget;
        h = h.listener;
        if (k2 !== f2 && e.isPropagationStopped()) break a;
        nf(e, h, l2);
        f2 = k2;
      }
      else for (g = 0; g < d.length; g++) {
        h = d[g];
        k2 = h.instance;
        l2 = h.currentTarget;
        h = h.listener;
        if (k2 !== f2 && e.isPropagationStopped()) break a;
        nf(e, h, l2);
        f2 = k2;
      }
    }
  }
  if (Qb) throw a = Rb, Qb = false, Rb = null, a;
}
function D$1(a, b2) {
  var c = b2[of];
  void 0 === c && (c = b2[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b2, a, 2, false), c.add(d));
}
function qf(a, b2, c) {
  var d = 0;
  b2 && (d |= 4);
  pf(c, a, d, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
    });
    var b2 = 9 === a.nodeType ? a : a.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a, b2, c, d) {
  switch (jd(b2)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b2, c, a);
  e = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e = true);
  d ? void 0 !== e ? a.addEventListener(b2, c, { capture: true, passive: e }) : a.addEventListener(b2, c, true) : void 0 !== e ? a.addEventListener(b2, c, { passive: e }) : a.addEventListener(b2, c, false);
}
function hd(a, b2, c, d, e) {
  var f2 = d;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d) a: for (; ; ) {
    if (null === d) return;
    var g = d.tag;
    if (3 === g || 4 === g) {
      var h = d.stateNode.containerInfo;
      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
      if (4 === g) for (g = d.return; null !== g; ) {
        var k2 = g.tag;
        if (3 === k2 || 4 === k2) {
          if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e) return;
        }
        g = g.return;
      }
      for (; null !== h; ) {
        g = Wc(h);
        if (null === g) return;
        k2 = g.tag;
        if (5 === k2 || 6 === k2) {
          d = f2 = g;
          continue a;
        }
        h = h.parentNode;
      }
    }
    d = d.return;
  }
  Jb(function() {
    var d2 = f2, e2 = xb(c), g2 = [];
    a: {
      var h2 = df.get(a);
      if (void 0 !== h2) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c)) break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e$1:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2) break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf])) break a;
        if (k3 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
          } else k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h2 : ue$1(k3);
            u2 = null == n2 ? h2 : ue$1(n2);
            h2 = new t2(F2, w2 + "leave", k3, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2) b: {
              t2 = k3;
              x2 = n2;
              w2 = 0;
              for (u2 = t2; u2; u2 = vf(u2)) w2++;
              u2 = 0;
              for (F2 = x2; F2; F2 = vf(F2)) u2++;
              for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
              for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
              for (; w2--; ) {
                if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                t2 = vf(t2);
                x2 = vf(x2);
              }
              t2 = null;
            }
            else t2 = null;
            null !== k3 && wf(g2, h2, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue$1(d2) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type) var na = ve$1;
        else if (me$1(h2)) if (we$1) na = Fe$1;
        else {
          na = De$1;
          var xa = Ce$1;
        }
        else (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee$1);
        if (na && (na = na(a, d2))) {
          ne$1(g2, na, c, e2);
          break a;
        }
        xa && xa(a, h2, d2);
        "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
      }
      xa = d2 ? ue$1(d2) : window;
      switch (a) {
        case "focusin":
          if (me$1(xa) || "true" === xa.contentEditable) Qe$1 = xa, Re$1 = d2, Se$1 = null;
          break;
        case "focusout":
          Se$1 = Re$1 = Qe$1 = null;
          break;
        case "mousedown":
          Te$1 = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te$1 = false;
          Ue$1(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue$1(g2, c, e2);
      }
      var $a;
      if (ae$1) b: {
        switch (a) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      }
      else ie$1 ? ge$1(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de$1 && "ko" !== c.locale && (ie$1 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie$1 && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = true)), xa = oe$1(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he$1(c), null !== $a && (ba.data = $a))));
      if ($a = ce$1 ? je(a, c) : ke$1(a, c)) d2 = oe$1(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
    }
    se$1(g2, b2);
  });
}
function tf(a, b2, c) {
  return { instance: a, listener: b2, currentTarget: c };
}
function oe$1(a, b2) {
  for (var c = b2 + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b2), null != f2 && d.push(tf(a, f2, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a) return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b2, c, d, e) {
  for (var f2 = b2._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d) break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b2, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b2, c) {
  b2 = zf(b2);
  if (zf(a) !== b2 && c) throw Error(p(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b2) {
  return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b2) {
  var c = b2, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
      if (0 === d) {
        a.removeChild(e);
        bd(b2);
        return;
      }
      d--;
    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b2);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b2 = a.nodeType;
    if (1 === b2 || 3 === b2) break;
    if (8 === b2) {
      b2 = a.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
      if ("/$" === b2) return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b2 = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b2) return a;
        b2--;
      } else "/$" === c && b2++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b2 = a[Of];
  if (b2) return b2;
  for (var c = a.parentNode; c; ) {
    if (b2 = c[uf] || c[Of]) {
      c = b2.alternate;
      if (null !== b2.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
        if (c = a[Of]) return c;
        a = Mf(a);
      }
      return b2;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue$1(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw Error(p(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E$1(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G$1(a, b2) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b2;
}
var Vf = {}, H$1 = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b2) {
  var c = a.type.contextTypes;
  if (!c) return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b2) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c) e[f2] = b2[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E$1(Wf);
  E$1(H$1);
}
function ag(a, b2, c) {
  if (H$1.current !== Vf) throw Error(p(168));
  G$1(H$1, b2);
  G$1(Wf, c);
}
function bg(a, b2, c) {
  var d = a.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();
  for (var e in d) if (!(e in b2)) throw Error(p(108, Ra(a) || "Unknown", e));
  return A$1({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H$1.current;
  G$1(H$1, a);
  G$1(Wf, Wf.current);
  return true;
}
function dg(a, b2, c) {
  var d = a.stateNode;
  if (!d) throw Error(p(169));
  c ? (a = bg(a, b2, Xf), d.__reactInternalMemoizedMergedChildContext = a, E$1(Wf), E$1(H$1), G$1(H$1, a)) : E$1(Wf);
  G$1(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b2 = C$1;
    try {
      var c = eg;
      for (C$1 = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C$1 = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b2;
}
function ug(a, b2, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f2 = 32 - oc(b2) + e;
  if (30 < f2) {
    var g = e - e % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b2) + e | c << e | d;
    sg = f2 + a;
  } else rg = 1 << f2 | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I$1 = false, zg = null;
function Ag(a, b2) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b2;
  c.return = a;
  b2 = a.deletions;
  null === b2 ? (a.deletions = [c], a.flags |= 16) : b2.push(c);
}
function Cg(a, b2) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b2 = 1 !== b2.nodeType || c.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b2, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I$1) {
    var b2 = yg;
    if (b2) {
      var c = b2;
      if (!Cg(a, b2)) {
        if (Dg(a)) throw Error(p(418));
        b2 = Lf(c.nextSibling);
        var d = xg;
        b2 && Cg(a, b2) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I$1 = false, xg = a);
      }
    } else {
      if (Dg(a)) throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I$1 = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg) return false;
  if (!I$1) return Fg(a), I$1 = true, false;
  var b2;
  (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a)) throw Hg(), Error(p(418));
    for (; b2; ) Ag(a, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a) throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b2 = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b2) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b2--;
          } else "$" !== c && "$!" !== c && "$?" !== c || b2++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; ) a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I$1 = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b2, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag) throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d) throw Error(p(147, a));
      var e = d, f2 = "" + a;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
      b2 = function(a2) {
        var b3 = e.refs;
        null === a2 ? delete b3[f2] : b3[f2] = a2;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a) throw Error(p(284));
    if (!c._owner) throw Error(p(290, a));
  }
  return a;
}
function Mg(a, b2) {
  a = Object.prototype.toString.call(b2);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
}
function Ng(a) {
  var b2 = a._init;
  return b2(a._payload);
}
function Og(a) {
  function b2(b3, c2) {
    if (a) {
      var d2 = b3.deletions;
      null === d2 ? (b3.deletions = [c2], b3.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a) return null;
    for (; null !== d2; ) b2(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b3) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
    return a2;
  }
  function e(a2, b3) {
    a2 = Pg(a2, b3);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b3, c2, d2) {
    b3.index = d2;
    if (!a) return b3.flags |= 1048576, c2;
    d2 = b3.alternate;
    if (null !== d2) return d2 = d2.index, d2 < c2 ? (b3.flags |= 2, c2) : d2;
    b3.flags |= 2;
    return c2;
  }
  function g(b3) {
    a && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h(a2, b3, c2, d2) {
    if (null === b3 || 6 !== b3.tag) return b3 = Qg(c2, a2.mode, d2), b3.return = a2, b3;
    b3 = e(b3, c2);
    b3.return = a2;
    return b3;
  }
  function k2(a2, b3, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya) return m2(a2, b3, c2.props.children, d2, c2.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b3.type)) return d2 = e(b3, c2.props), d2.ref = Lg(a2, b3, c2), d2.return = a2, d2;
    d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Lg(a2, b3, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b3, c2, d2) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c2.containerInfo || b3.stateNode.implementation !== c2.implementation) return b3 = Sg(c2, a2.mode, d2), b3.return = a2, b3;
    b3 = e(b3, c2.children || []);
    b3.return = a2;
    return b3;
  }
  function m2(a2, b3, c2, d2, f3) {
    if (null === b3 || 7 !== b3.tag) return b3 = Tg(c2, a2.mode, d2, f3), b3.return = a2, b3;
    b3 = e(b3, c2);
    b3.return = a2;
    return b3;
  }
  function q2(a2, b3, c2) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a2.mode, c2), b3.return = a2, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va:
          return c2 = Rg(b3.type, b3.key, b3.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b3), c2.return = a2, c2;
        case wa:
          return b3 = Sg(b3, a2.mode, c2), b3.return = a2, b3;
        case Ha:
          var d2 = b3._init;
          return q2(a2, d2(b3._payload), c2);
      }
      if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a2.mode, c2, null), b3.return = a2, b3;
      Mg(a2, b3);
    }
    return null;
  }
  function r2(a2, b3, c2, d2) {
    var e2 = null !== b3 ? b3.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b3, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e2 ? k2(a2, b3, c2, d2) : null;
        case wa:
          return c2.key === e2 ? l2(a2, b3, c2, d2) : null;
        case Ha:
          return e2 = c2._init, r2(
            a2,
            b3,
            e2(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2)) return null !== e2 ? null : m2(a2, b3, c2, d2, null);
      Mg(a2, c2);
    }
    return null;
  }
  function y2(a2, b3, c2, d2, e2) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b3, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b3, a2, d2, e2);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b3, a2, d2, e2);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b3, c2, f3(d2._payload), e2);
      }
      if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m2(b3, a2, d2, e2, null);
      Mg(b3, d2);
    }
    return null;
  }
  function n2(e2, g2, h2, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b2(e2, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h2.length) return c(e2, u2), I$1 && tg(e2, w2), l3;
    if (null === u2) {
      for (; w2 < h2.length; w2++) u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I$1 && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++) x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b2(e2, a2);
    });
    I$1 && tg(e2, w2);
    return l3;
  }
  function t2(e2, g2, h2, k3) {
    var l3 = Ka(h2);
    if ("function" !== typeof l3) throw Error(p(150));
    h2 = l3.call(h2);
    if (null == h2) throw Error(p(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e2, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b2(e2, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done) return c(
      e2,
      m3
    ), I$1 && tg(e2, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h2.next()) n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I$1 && tg(e2, w2);
      return l3;
    }
    for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next()) n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b2(e2, a2);
    });
    I$1 && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f3, h2) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f3.props);
                  d2.ref = Lg(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else b2(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Tg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                c(a2, d2.sibling);
                d2 = e(d2, f3.children || []);
                d2.return = a2;
                a2 = d2;
                break a;
              } else {
                c(a2, d2);
                break;
              }
              else b2(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Sg(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
      }
      if (eb(f3)) return n2(a2, d2, f3, h2);
      if (Ka(f3)) return t2(a2, d2, f3, h2);
      Mg(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a) {
  var b2 = Wg.current;
  E$1(Wg);
  a._currentValue = b2;
}
function bh(a, b2, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d && (d.childLanes |= b2)) : null !== d && (d.childLanes & b2) !== b2 && (d.childLanes |= b2);
    if (a === c) break;
    a = a.return;
  }
}
function ch(a, b2) {
  Xg = a;
  Zg = Yg = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (dh = true), a.firstContext = null);
}
function eh(a) {
  var b2 = a._currentValue;
  if (Zg !== a) if (a = { context: a, memoizedValue: b2, next: null }, null === Yg) {
    if (null === Xg) throw Error(p(308));
    Yg = a;
    Xg.dependencies = { lanes: 0, firstContext: a };
  } else Yg = Yg.next = a;
  return b2;
}
var fh = null;
function gh(a) {
  null === fh ? fh = [a] : fh.push(a);
}
function hh(a, b2, c, d) {
  var e = b2.interleaved;
  null === e ? (c.next = c, gh(b2)) : (c.next = e.next, e.next = c);
  b2.interleaved = c;
  return ih(a, d);
}
function ih(a, b2) {
  a.lanes |= b2;
  var c = a.alternate;
  null !== c && (c.lanes |= b2);
  c = a;
  for (a = a.return; null !== a; ) a.childLanes |= b2, c = a.alternate, null !== c && (c.childLanes |= b2), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var jh = false;
function kh(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(a, b2) {
  a = a.updateQueue;
  b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function mh(a, b2) {
  return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function nh(a, b2, c) {
  var d = a.updateQueue;
  if (null === d) return null;
  d = d.shared;
  if (0 !== (K$1 & 2)) {
    var e = d.pending;
    null === e ? b2.next = b2 : (b2.next = e.next, e.next = b2);
    d.pending = b2;
    return ih(a, c);
  }
  e = d.interleaved;
  null === e ? (b2.next = b2, gh(d)) : (b2.next = e.next, e.next = b2);
  d.interleaved = b2;
  return ih(a, c);
}
function oh(a, b2, c) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c & 4194240))) {
    var d = b2.lanes;
    d &= a.pendingLanes;
    c |= d;
    b2.lanes = c;
    Cc(a, c);
  }
}
function ph(a, b2) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b2 : f2 = f2.next = b2;
    } else e = f2 = b2;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b2 : a.next = b2;
  c.lastBaseUpdate = b2;
}
function qh(a, b2, c, d) {
  var e = a.updateQueue;
  jh = false;
  var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h = f2;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b2;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2) break a;
              q2 = A$1({}, q2, r2);
              break a;
            case 2:
              jh = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
      } else y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h = h.next;
      if (null === h) if (h = e.shared.pending, null === h) break;
      else r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m2;
    b2 = e.shared.interleaved;
    if (null !== b2) {
      e = b2;
      do
        g |= e.lane, e = e.next;
      while (e !== b2);
    } else null === f2 && (e.shared.lanes = 0);
    rh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function sh(a, b2, c) {
  a = b2.effects;
  b2.effects = null;
  if (null !== a) for (b2 = 0; b2 < a.length; b2++) {
    var d = a[b2], e = d.callback;
    if (null !== e) {
      d.callback = null;
      d = c;
      if ("function" !== typeof e) throw Error(p(191, e));
      e.call(d);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(a) {
  if (a === th) throw Error(p(174));
  return a;
}
function yh(a, b2) {
  G$1(wh, b2);
  G$1(vh, a);
  G$1(uh, th);
  a = b2.nodeType;
  switch (a) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
  }
  E$1(uh);
  G$1(uh, b2);
}
function zh() {
  E$1(uh);
  E$1(vh);
  E$1(wh);
}
function Ah(a) {
  xh(wh.current);
  var b2 = xh(uh.current);
  var c = lb(b2, a.type);
  b2 !== c && (G$1(vh, a), G$1(uh, c));
}
function Bh(a) {
  vh.current === a && (E$1(uh), E$1(vh));
}
var L$1 = Uf(0);
function Ch(a) {
  for (var b2 = a; null !== b2; ) {
    if (13 === b2.tag) {
      var c = b2.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128)) return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a) break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a) return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M$1 = null, N$1 = null, O$1 = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function P$1() {
  throw Error(p(321));
}
function Mh(a, b2) {
  if (null === b2) return false;
  for (var c = 0; c < b2.length && c < a.length; c++) if (!He$1(a[c], b2[c])) return false;
  return true;
}
function Nh(a, b2, c, d, e, f2) {
  Hh = f2;
  M$1 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
  a = c(d, e);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2) throw Error(p(301));
      f2 += 1;
      O$1 = N$1 = null;
      b2.updateQueue = null;
      Fh.current = Qh;
      a = c(d, e);
    } while (Jh);
  }
  Fh.current = Rh;
  b2 = null !== N$1 && null !== N$1.next;
  Hh = 0;
  O$1 = N$1 = M$1 = null;
  Ih = false;
  if (b2) throw Error(p(300));
  return a;
}
function Sh() {
  var a = 0 !== Kh;
  Kh = 0;
  return a;
}
function Th() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === O$1 ? M$1.memoizedState = O$1 = a : O$1 = O$1.next = a;
  return O$1;
}
function Uh() {
  if (null === N$1) {
    var a = M$1.alternate;
    a = null !== a ? a.memoizedState : null;
  } else a = N$1.next;
  var b2 = null === O$1 ? M$1.memoizedState : O$1.next;
  if (null !== b2) O$1 = b2, N$1 = a;
  else {
    if (null === a) throw Error(p(310));
    N$1 = a;
    a = { memoizedState: N$1.memoizedState, baseState: N$1.baseState, baseQueue: N$1.baseQueue, queue: N$1.queue, next: null };
    null === O$1 ? M$1.memoizedState = O$1 = a : O$1 = O$1.next = a;
  }
  return O$1;
}
function Vh(a, b2) {
  return "function" === typeof b2 ? b2(a) : b2;
}
function Wh(a) {
  var b2 = Uh(), c = b2.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = N$1, e = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e) {
      var g = e.next;
      e.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (null !== e) {
    f2 = e.next;
    d = d.baseState;
    var h = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
        M$1.lanes |= m2;
        rh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h;
    He$1(d, b2.memoizedState) || (dh = true);
    b2.memoizedState = d;
    b2.baseState = g;
    b2.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do
      f2 = e.lane, M$1.lanes |= f2, rh |= f2, e = e.next;
    while (e !== a);
  } else null === e && (c.lanes = 0);
  return [b2.memoizedState, c.dispatch];
}
function Xh(a) {
  var b2 = Uh(), c = b2.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b2.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e);
    He$1(f2, b2.memoizedState) || (dh = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function Yh() {
}
function Zh(a, b2) {
  var c = M$1, d = Uh(), e = b2(), f2 = !He$1(d.memoizedState, e);
  f2 && (d.memoizedState = e, dh = true);
  d = d.queue;
  $h(ai$1.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b2 || f2 || null !== O$1 && O$1.memoizedState.tag & 1) {
    c.flags |= 2048;
    bi$1(9, ci$1.bind(null, c, d, e, b2), void 0, null);
    if (null === Q$1) throw Error(p(349));
    0 !== (Hh & 30) || di$1(c, b2, e);
  }
  return e;
}
function di$1(a, b2, c) {
  a.flags |= 16384;
  a = { getSnapshot: b2, value: c };
  b2 = M$1.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$1.updateQueue = b2, b2.stores = [a]) : (c = b2.stores, null === c ? b2.stores = [a] : c.push(a));
}
function ci$1(a, b2, c, d) {
  b2.value = c;
  b2.getSnapshot = d;
  ei$1(b2) && fi$1(a);
}
function ai$1(a, b2, c) {
  return c(function() {
    ei$1(b2) && fi$1(a);
  });
}
function ei$1(a) {
  var b2 = a.getSnapshot;
  a = a.value;
  try {
    var c = b2();
    return !He$1(a, c);
  } catch (d) {
    return true;
  }
}
function fi$1(a) {
  var b2 = ih(a, 1);
  null !== b2 && gi(b2, a, 1, -1);
}
function hi$1(a) {
  var b2 = Th();
  "function" === typeof a && (a = a());
  b2.memoizedState = b2.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
  b2.queue = a;
  a = a.dispatch = ii$1.bind(null, M$1, a);
  return [b2.memoizedState, a];
}
function bi$1(a, b2, c, d) {
  a = { tag: a, create: b2, destroy: c, deps: d, next: null };
  b2 = M$1.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$1.updateQueue = b2, b2.lastEffect = a.next = a) : (c = b2.lastEffect, null === c ? b2.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b2.lastEffect = a));
  return a;
}
function ji$1() {
  return Uh().memoizedState;
}
function ki$1(a, b2, c, d) {
  var e = Th();
  M$1.flags |= a;
  e.memoizedState = bi$1(1 | b2, c, void 0, void 0 === d ? null : d);
}
function li$1(a, b2, c, d) {
  var e = Uh();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== N$1) {
    var g = N$1.memoizedState;
    f2 = g.destroy;
    if (null !== d && Mh(d, g.deps)) {
      e.memoizedState = bi$1(b2, c, f2, d);
      return;
    }
  }
  M$1.flags |= a;
  e.memoizedState = bi$1(1 | b2, c, f2, d);
}
function mi$1(a, b2) {
  return ki$1(8390656, 8, a, b2);
}
function $h(a, b2) {
  return li$1(2048, 8, a, b2);
}
function ni$1(a, b2) {
  return li$1(4, 2, a, b2);
}
function oi$1(a, b2) {
  return li$1(4, 4, a, b2);
}
function pi$1(a, b2) {
  if ("function" === typeof b2) return a = a(), b2(a), function() {
    b2(null);
  };
  if (null !== b2 && void 0 !== b2) return a = a(), b2.current = a, function() {
    b2.current = null;
  };
}
function qi$1(a, b2, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return li$1(4, 4, pi$1.bind(null, b2, a), c);
}
function ri$1() {
}
function si$1(a, b2) {
  var c = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d = c.memoizedState;
  if (null !== d && null !== b2 && Mh(b2, d[1])) return d[0];
  c.memoizedState = [a, b2];
  return a;
}
function ti$1(a, b2) {
  var c = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d = c.memoizedState;
  if (null !== d && null !== b2 && Mh(b2, d[1])) return d[0];
  a = a();
  c.memoizedState = [a, b2];
  return a;
}
function ui$1(a, b2, c) {
  if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
  He$1(c, b2) || (c = yc(), M$1.lanes |= c, rh |= c, a.baseState = true);
  return b2;
}
function vi$1(a, b2) {
  var c = C$1;
  C$1 = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Gh.transition;
  Gh.transition = {};
  try {
    a(false), b2();
  } finally {
    C$1 = c, Gh.transition = d;
  }
}
function wi$1() {
  return Uh().memoizedState;
}
function xi$1(a, b2, c) {
  var d = yi$1(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (zi$1(a)) Ai$1(b2, c);
  else if (c = hh(a, b2, c, d), null !== c) {
    var e = R$1();
    gi(c, a, d, e);
    Bi$1(c, b2, d);
  }
}
function ii$1(a, b2, c) {
  var d = yi$1(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (zi$1(a)) Ai$1(b2, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
      var g = b2.lastRenderedState, h = f2(g, c);
      e.hasEagerState = true;
      e.eagerState = h;
      if (He$1(h, g)) {
        var k2 = b2.interleaved;
        null === k2 ? (e.next = e, gh(b2)) : (e.next = k2.next, k2.next = e);
        b2.interleaved = e;
        return;
      }
    } catch (l2) {
    } finally {
    }
    c = hh(a, b2, e, d);
    null !== c && (e = R$1(), gi(c, a, d, e), Bi$1(c, b2, d));
  }
}
function zi$1(a) {
  var b2 = a.alternate;
  return a === M$1 || null !== b2 && b2 === M$1;
}
function Ai$1(a, b2) {
  Jh = Ih = true;
  var c = a.pending;
  null === c ? b2.next = b2 : (b2.next = c.next, c.next = b2);
  a.pending = b2;
}
function Bi$1(a, b2, c) {
  if (0 !== (c & 4194240)) {
    var d = b2.lanes;
    d &= a.pendingLanes;
    c |= d;
    b2.lanes = c;
    Cc(a, c);
  }
}
var Rh = { readContext: eh, useCallback: P$1, useContext: P$1, useEffect: P$1, useImperativeHandle: P$1, useInsertionEffect: P$1, useLayoutEffect: P$1, useMemo: P$1, useReducer: P$1, useRef: P$1, useState: P$1, useDebugValue: P$1, useDeferredValue: P$1, useTransition: P$1, useMutableSource: P$1, useSyncExternalStore: P$1, useId: P$1, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b2) {
  Th().memoizedState = [a, void 0 === b2 ? null : b2];
  return a;
}, useContext: eh, useEffect: mi$1, useImperativeHandle: function(a, b2, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ki$1(
    4194308,
    4,
    pi$1.bind(null, b2, a),
    c
  );
}, useLayoutEffect: function(a, b2) {
  return ki$1(4194308, 4, a, b2);
}, useInsertionEffect: function(a, b2) {
  return ki$1(4, 2, a, b2);
}, useMemo: function(a, b2) {
  var c = Th();
  b2 = void 0 === b2 ? null : b2;
  a = a();
  c.memoizedState = [a, b2];
  return a;
}, useReducer: function(a, b2, c) {
  var d = Th();
  b2 = void 0 !== c ? c(b2) : b2;
  d.memoizedState = d.baseState = b2;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
  d.queue = a;
  a = a.dispatch = xi$1.bind(null, M$1, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b2 = Th();
  a = { current: a };
  return b2.memoizedState = a;
}, useState: hi$1, useDebugValue: ri$1, useDeferredValue: function(a) {
  return Th().memoizedState = a;
}, useTransition: function() {
  var a = hi$1(false), b2 = a[0];
  a = vi$1.bind(null, a[1]);
  Th().memoizedState = a;
  return [b2, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b2, c) {
  var d = M$1, e = Th();
  if (I$1) {
    if (void 0 === c) throw Error(p(407));
    c = c();
  } else {
    c = b2();
    if (null === Q$1) throw Error(p(349));
    0 !== (Hh & 30) || di$1(d, b2, c);
  }
  e.memoizedState = c;
  var f2 = { value: c, getSnapshot: b2 };
  e.queue = f2;
  mi$1(ai$1.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  bi$1(9, ci$1.bind(null, d, f2, c, b2), void 0, null);
  return c;
}, useId: function() {
  var a = Th(), b2 = Q$1.identifierPrefix;
  if (I$1) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b2 = ":" + b2 + "R" + c;
    c = Kh++;
    0 < c && (b2 += "H" + c.toString(32));
    b2 += ":";
  } else c = Lh++, b2 = ":" + b2 + "r" + c.toString(32) + ":";
  return a.memoizedState = b2;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: eh,
  useCallback: si$1,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi$1,
  useInsertionEffect: ni$1,
  useLayoutEffect: oi$1,
  useMemo: ti$1,
  useReducer: Wh,
  useRef: ji$1,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri$1,
  useDeferredValue: function(a) {
    var b2 = Uh();
    return ui$1(b2, N$1.memoizedState, a);
  },
  useTransition: function() {
    var a = Wh(Vh)[0], b2 = Uh().memoizedState;
    return [a, b2];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi$1,
  unstable_isNewReconciler: false
}, Qh = { readContext: eh, useCallback: si$1, useContext: eh, useEffect: $h, useImperativeHandle: qi$1, useInsertionEffect: ni$1, useLayoutEffect: oi$1, useMemo: ti$1, useReducer: Xh, useRef: ji$1, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri$1, useDeferredValue: function(a) {
  var b2 = Uh();
  return null === N$1 ? b2.memoizedState = a : ui$1(b2, N$1.memoizedState, a);
}, useTransition: function() {
  var a = Xh(Vh)[0], b2 = Uh().memoizedState;
  return [a, b2];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi$1, unstable_isNewReconciler: false };
function Ci$1(a, b2) {
  if (a && a.defaultProps) {
    b2 = A$1({}, b2);
    a = a.defaultProps;
    for (var c in a) void 0 === b2[c] && (b2[c] = a[c]);
    return b2;
  }
  return b2;
}
function Di$1(a, b2, c, d) {
  b2 = a.memoizedState;
  c = c(d, b2);
  c = null === c || void 0 === c ? b2 : A$1({}, b2, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var Ei$1 = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b2, c) {
  a = a._reactInternals;
  var d = R$1(), e = yi$1(a), f2 = mh(d, e);
  f2.payload = b2;
  void 0 !== c && null !== c && (f2.callback = c);
  b2 = nh(a, f2, e);
  null !== b2 && (gi(b2, a, e, d), oh(b2, a, e));
}, enqueueReplaceState: function(a, b2, c) {
  a = a._reactInternals;
  var d = R$1(), e = yi$1(a), f2 = mh(d, e);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c && null !== c && (f2.callback = c);
  b2 = nh(a, f2, e);
  null !== b2 && (gi(b2, a, e, d), oh(b2, a, e));
}, enqueueForceUpdate: function(a, b2) {
  a = a._reactInternals;
  var c = R$1(), d = yi$1(a), e = mh(c, d);
  e.tag = 2;
  void 0 !== b2 && null !== b2 && (e.callback = b2);
  b2 = nh(a, e, d);
  null !== b2 && (gi(b2, a, d, c), oh(b2, a, d));
} };
function Fi$1(a, b2, c, d, e, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie$1(c, d) || !Ie$1(e, f2) : true;
}
function Gi$1(a, b2, c) {
  var d = false, e = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e = Zf(b2) ? Xf : H$1.current, d = b2.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b2 = new b2(c, f2);
  a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = Ei$1;
  a.stateNode = b2;
  b2._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Hi$1(a, b2, c, d) {
  a = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c, d);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c, d);
  b2.state !== a && Ei$1.enqueueReplaceState(b2, b2.state, null);
}
function Ii$1(a, b2, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = {};
  kh(a);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = eh(f2) : (f2 = Zf(b2) ? Xf : H$1.current, e.context = Yf(a, f2));
  e.state = a.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (Di$1(a, b2, f2, c), e.state = a.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b2 = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b2 !== e.state && Ei$1.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function Ji$1(a, b2) {
  try {
    var c = "", d = b2;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b2, stack: e, digest: null };
}
function Ki$1(a, b2, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b2 ? b2 : null };
}
function Li$1(a, b2) {
  try {
    console.error(b2.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Mi$1 = "function" === typeof WeakMap ? WeakMap : Map;
function Ni$1(a, b2, c) {
  c = mh(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b2.value;
  c.callback = function() {
    Oi$1 || (Oi$1 = true, Pi$1 = d);
    Li$1(a, b2);
  };
  return c;
}
function Qi$1(a, b2, c) {
  c = mh(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b2.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Li$1(a, b2);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Li$1(a, b2);
    "function" !== typeof d && (null === Ri$1 ? Ri$1 = /* @__PURE__ */ new Set([this]) : Ri$1.add(this));
    var c2 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Si$1(a, b2, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Mi$1();
    var e = /* @__PURE__ */ new Set();
    d.set(b2, e);
  } else e = d.get(b2), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b2, e));
  e.has(c) || (e.add(c), a = Ti.bind(null, a, b2, c), b2.then(a, a));
}
function Ui$1(a) {
  do {
    var b2;
    if (b2 = 13 === a.tag) b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2) return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Vi$1(a, b2, c, d, e) {
  if (0 === (a.mode & 1)) return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c, b2, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Wi$1 = ua.ReactCurrentOwner, dh = false;
function Xi$1(a, b2, c, d) {
  b2.child = null === a ? Vg(b2, null, c, d) : Ug(b2, a.child, c, d);
}
function Yi$1(a, b2, c, d, e) {
  c = c.render;
  var f2 = b2.ref;
  ch(b2, e);
  d = Nh(a, b2, c, d, f2, e);
  c = Sh();
  if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e, Zi$1(a, b2, e);
  I$1 && c && vg(b2);
  b2.flags |= 1;
  Xi$1(a, b2, d, e);
  return b2.child;
}
function $i$1(a, b2, c, d, e) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b2.tag = 15, b2.type = f2, bj(a, b2, f2, d, e);
    a = Rg(c.type, null, d, b2, b2.mode, e);
    a.ref = b2.ref;
    a.return = b2;
    return b2.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie$1;
    if (c(g, d) && a.ref === b2.ref) return Zi$1(a, b2, e);
  }
  b2.flags |= 1;
  a = Pg(f2, d);
  a.ref = b2.ref;
  a.return = b2;
  return b2.child = a;
}
function bj(a, b2, c, d, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie$1(f2, d) && a.ref === b2.ref) if (dh = false, b2.pendingProps = d = f2, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
    else return b2.lanes = a.lanes, Zi$1(a, b2, e);
  }
  return cj(a, b2, c, d, e);
}
function dj(a, b2, c) {
  var d = b2.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$1(ej, fj), fj |= c;
  else {
    if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G$1(ej, fj), fj |= a, null;
    b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
    d = null !== f2 ? f2.baseLanes : c;
    G$1(ej, fj);
    fj |= d;
  }
  else null !== f2 ? (d = f2.baseLanes | c, b2.memoizedState = null) : d = c, G$1(ej, fj), fj |= d;
  Xi$1(a, b2, e, c);
  return b2.child;
}
function gj(a, b2) {
  var c = b2.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b2.flags |= 512, b2.flags |= 2097152;
}
function cj(a, b2, c, d, e) {
  var f2 = Zf(c) ? Xf : H$1.current;
  f2 = Yf(b2, f2);
  ch(b2, e);
  c = Nh(a, b2, c, d, f2, e);
  d = Sh();
  if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e, Zi$1(a, b2, e);
  I$1 && d && vg(b2);
  b2.flags |= 1;
  Xi$1(a, b2, c, e);
  return b2.child;
}
function hj(a, b2, c, d, e) {
  if (Zf(c)) {
    var f2 = true;
    cg(b2);
  } else f2 = false;
  ch(b2, e);
  if (null === b2.stateNode) ij(a, b2), Gi$1(b2, c, d), Ii$1(b2, c, d, e), d = true;
  else if (null === a) {
    var g = b2.stateNode, h = b2.memoizedProps;
    g.props = h;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H$1.current, l2 = Yf(b2, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Hi$1(b2, g, d, l2);
    jh = false;
    var r2 = b2.memoizedState;
    g.state = r2;
    qh(b2, d, g, e);
    k2 = b2.memoizedState;
    h !== d || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di$1(b2, c, m2, d), k2 = b2.memoizedState), (h = jh || Fi$1(b2, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d, b2.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), d = false);
  } else {
    g = b2.stateNode;
    lh(a, b2);
    h = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h : Ci$1(b2.type, h);
    g.props = l2;
    q2 = b2.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c) ? Xf : H$1.current, k2 = Yf(b2, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && Hi$1(b2, g, d, k2);
    jh = false;
    r2 = b2.memoizedState;
    g.state = r2;
    qh(b2, d, g, e);
    var n2 = b2.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di$1(b2, c, y2, d), n2 = b2.memoizedState), (l2 = jh || Fi$1(b2, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b2.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d, b2.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), d = false);
  }
  return jj(a, b2, c, d, f2, e);
}
function jj(a, b2, c, d, e, f2) {
  gj(a, b2);
  var g = 0 !== (b2.flags & 128);
  if (!d && !g) return e && dg(b2, c, false), Zi$1(a, b2, f2);
  d = b2.stateNode;
  Wi$1.current = b2;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b2.flags |= 1;
  null !== a && g ? (b2.child = Ug(b2, a.child, null, f2), b2.child = Ug(b2, null, h, f2)) : Xi$1(a, b2, h, f2);
  b2.memoizedState = d.state;
  e && dg(b2, c, true);
  return b2.child;
}
function kj(a) {
  var b2 = a.stateNode;
  b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
  yh(a, b2.containerInfo);
}
function lj(a, b2, c, d, e) {
  Ig();
  Jg(e);
  b2.flags |= 256;
  Xi$1(a, b2, c, d);
  return b2.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function oj(a, b2, c) {
  var d = b2.pendingProps, e = L$1.current, f2 = false, g = 0 !== (b2.flags & 128), h;
  (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h) f2 = true, b2.flags &= -129;
  else if (null === a || null !== a.memoizedState) e |= 1;
  G$1(L$1, e & 1);
  if (null === a) {
    Eg(b2);
    a = b2.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b2.mode, f2 = b2.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = nj(c), b2.memoizedState = mj, a) : qj(b2, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b2, g, d, h, e, c);
  if (f2) {
    f2 = d.fallback;
    g = b2.mode;
    e = a.child;
    h = e.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b2.child !== e ? (d = b2.child, d.childLanes = 0, d.pendingProps = k2, b2.deletions = null) : (d = Pg(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
    f2.return = b2;
    d.return = b2;
    d.sibling = f2;
    b2.child = d;
    d = f2;
    f2 = b2.child;
    g = a.child.memoizedState;
    g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b2.memoizedState = mj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = Pg(f2, { mode: "visible", children: d.children });
  0 === (b2.mode & 1) && (d.lanes = c);
  d.return = b2;
  d.sibling = null;
  null !== a && (c = b2.deletions, null === c ? (b2.deletions = [a], b2.flags |= 16) : c.push(a));
  b2.child = d;
  b2.memoizedState = null;
  return d;
}
function qj(a, b2) {
  b2 = pj({ mode: "visible", children: b2 }, a.mode, 0, null);
  b2.return = a;
  return a.child = b2;
}
function sj(a, b2, c, d) {
  null !== d && Jg(d);
  Ug(b2, a.child, null, c);
  a = qj(b2, b2.pendingProps.children);
  a.flags |= 2;
  b2.memoizedState = null;
  return a;
}
function rj(a, b2, c, d, e, f2, g) {
  if (c) {
    if (b2.flags & 256) return b2.flags &= -257, d = Ki$1(Error(p(422))), sj(a, b2, g, d);
    if (null !== b2.memoizedState) return b2.child = a.child, b2.flags |= 128, null;
    f2 = d.fallback;
    e = b2.mode;
    d = pj({ mode: "visible", children: d.children }, e, 0, null);
    f2 = Tg(f2, e, g, null);
    f2.flags |= 2;
    d.return = b2;
    f2.return = b2;
    d.sibling = f2;
    b2.child = d;
    0 !== (b2.mode & 1) && Ug(b2, a.child, null, g);
    b2.child.memoizedState = nj(g);
    b2.memoizedState = mj;
    return f2;
  }
  if (0 === (b2.mode & 1)) return sj(a, b2, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d) var h = d.dgst;
    d = h;
    f2 = Error(p(419));
    d = Ki$1(f2, d, void 0);
    return sj(a, b2, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (dh || h) {
    d = Q$1;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f2.retryLane && (f2.retryLane = e, ih(a, e), gi(d, a, e, -1));
    }
    tj();
    d = Ki$1(Error(p(421)));
    return sj(a, b2, g, d);
  }
  if ("$?" === e.data) return b2.flags |= 128, b2.child = a.child, b2 = uj.bind(null, a), e._reactRetry = b2, null;
  a = f2.treeContext;
  yg = Lf(e.nextSibling);
  xg = b2;
  I$1 = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
  b2 = qj(b2, d.children);
  b2.flags |= 4096;
  return b2;
}
function vj(a, b2, c) {
  a.lanes |= b2;
  var d = a.alternate;
  null !== d && (d.lanes |= b2);
  bh(a.return, b2, c);
}
function wj(a, b2, c, d, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
}
function xj(a, b2, c) {
  var d = b2.pendingProps, e = d.revealOrder, f2 = d.tail;
  Xi$1(a, b2, d.children, c);
  d = L$1.current;
  if (0 !== (d & 2)) d = d & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b2.child; null !== a; ) {
      if (13 === a.tag) null !== a.memoizedState && vj(a, c, b2);
      else if (19 === a.tag) vj(a, c, b2);
      else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }
      if (a === b2) break a;
      for (; null === a.sibling; ) {
        if (null === a.return || a.return === b2) break a;
        a = a.return;
      }
      a.sibling.return = a.return;
      a = a.sibling;
    }
    d &= 1;
  }
  G$1(L$1, d);
  if (0 === (b2.mode & 1)) b2.memoizedState = null;
  else switch (e) {
    case "forwards":
      c = b2.child;
      for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
      c = e;
      null === c ? (e = b2.child, b2.child = null) : (e = c.sibling, c.sibling = null);
      wj(b2, false, e, c, f2);
      break;
    case "backwards":
      c = null;
      e = b2.child;
      for (b2.child = null; null !== e; ) {
        a = e.alternate;
        if (null !== a && null === Ch(a)) {
          b2.child = e;
          break;
        }
        a = e.sibling;
        e.sibling = c;
        c = e;
        e = a;
      }
      wj(b2, true, c, null, f2);
      break;
    case "together":
      wj(b2, false, null, null, void 0);
      break;
    default:
      b2.memoizedState = null;
  }
  return b2.child;
}
function ij(a, b2) {
  0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function Zi$1(a, b2, c) {
  null !== a && (b2.dependencies = a.dependencies);
  rh |= b2.lanes;
  if (0 === (c & b2.childLanes)) return null;
  if (null !== a && b2.child !== a.child) throw Error(p(153));
  if (null !== b2.child) {
    a = b2.child;
    c = Pg(a, a.pendingProps);
    b2.child = c;
    for (c.return = b2; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b2;
    c.sibling = null;
  }
  return b2.child;
}
function yj(a, b2, c) {
  switch (b2.tag) {
    case 3:
      kj(b2);
      Ig();
      break;
    case 5:
      Ah(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      yh(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d = b2.type._context, e = b2.memoizedProps.value;
      G$1(Wg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b2.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated) return G$1(L$1, L$1.current & 1), b2.flags |= 128, null;
        if (0 !== (c & b2.child.childLanes)) return oj(a, b2, c);
        G$1(L$1, L$1.current & 1);
        a = Zi$1(a, b2, c);
        return null !== a ? a.sibling : null;
      }
      G$1(L$1, L$1.current & 1);
      break;
    case 19:
      d = 0 !== (c & b2.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d) return xj(a, b2, c);
        b2.flags |= 128;
      }
      e = b2.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G$1(L$1, L$1.current);
      if (d) break;
      else return null;
    case 22:
    case 23:
      return b2.lanes = 0, dj(a, b2, c);
  }
  return Zi$1(a, b2, c);
}
var zj, Aj, Bj, Cj;
zj = function(a, b2) {
  for (var c = b2.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b2) break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b2) return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Aj = function() {
};
Bj = function(a, b2, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b2.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e = A$1({}, e, { value: void 0 });
        d = A$1({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e) if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2]) if ("style" === l2) {
      var h = e[l2];
      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
    } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h)) if ("style" === l2) if (h) {
        for (g in h) !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
        for (g in k2) k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
      } else c || (f2 || (f2 = []), f2.push(
        l2,
        c
      )), c = k2;
      else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$1("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b2.updateQueue = l2) b2.flags |= 4;
  }
};
Cj = function(a, b2, c, d) {
  c !== d && (b2.flags |= 4);
};
function Dj(a, b2) {
  if (!I$1) switch (a.tailMode) {
    case "hidden":
      b2 = a.tail;
      for (var c = null; null !== b2; ) null !== b2.alternate && (c = b2), b2 = b2.sibling;
      null === c ? a.tail = null : c.sibling = null;
      break;
    case "collapsed":
      c = a.tail;
      for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
      null === d ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
  }
}
function S$1(a) {
  var b2 = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b2) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b2;
}
function Ej(a, b2, c) {
  var d = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S$1(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S$1(b2), null;
    case 3:
      d = b2.stateNode;
      zh();
      E$1(Wf);
      E$1(H$1);
      Eh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child) Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a, b2);
      S$1(b2);
      return null;
    case 5:
      Bh(b2);
      var e = xh(wh.current);
      c = b2.type;
      if (null !== a && null != b2.stateNode) Bj(a, b2, c, d, e), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d) {
          if (null === b2.stateNode) throw Error(p(166));
          S$1(b2);
          return null;
        }
        a = xh(uh.current);
        if (Gg(b2)) {
          d = b2.stateNode;
          c = b2.type;
          var f2 = b2.memoizedProps;
          d[Of] = b2;
          d[Pf] = f2;
          a = 0 !== (b2.mode & 1);
          switch (c) {
            case "dialog":
              D$1("cancel", d);
              D$1("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$1("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++) D$1(lf[e], d);
              break;
            case "source":
              D$1("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D$1(
                "error",
                d
              );
              D$1("load", d);
              break;
            case "details":
              D$1("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D$1("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D$1("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D$1("invalid", d);
          }
          ub(c, f2);
          e = null;
          for (var g in f2) if (f2.hasOwnProperty(g)) {
            var h = f2[g];
            "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
              d.textContent,
              h,
              a
            ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D$1("scroll", d);
          }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e;
          b2.updateQueue = d;
          null !== d && (b2.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b2;
          a[Pf] = d;
          zj(a, b2, false, false);
          b2.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D$1("cancel", a);
                D$1("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$1("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D$1(lf[e], a);
                e = d;
                break;
              case "source":
                D$1("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D$1(
                  "error",
                  a
                );
                D$1("load", a);
                e = d;
                break;
              case "details":
                D$1("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D$1("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = A$1({}, d, { value: void 0 });
                D$1("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D$1("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f2 in h) if (h.hasOwnProperty(f2)) {
              var k2 = h[f2];
              "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$1("scroll", a) : null != k2 && ta(a, f2, k2, g));
            }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S$1(b2);
      return null;
    case 6:
      if (a && null != b2.stateNode) Cj(a, b2, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b2.stateNode) throw Error(p(166));
        c = xh(wh.current);
        xh(uh.current);
        if (Gg(b2)) {
          d = b2.stateNode;
          c = b2.memoizedProps;
          d[Of] = b2;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a) switch (a.tag) {
              case 3:
                Af(d.nodeValue, c, 0 !== (a.mode & 1));
                break;
              case 5:
                true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
            }
          }
          f2 && (b2.flags |= 4);
        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b2, b2.stateNode = d;
      }
      S$1(b2);
      return null;
    case 13:
      E$1(L$1);
      d = b2.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I$1 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2) throw Error(p(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2) throw Error(p(317));
            f2[Of] = b2;
          } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S$1(b2);
          f2 = false;
        } else null !== zg && (Fj(zg), zg = null), f2 = true;
        if (!f2) return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128)) return b2.lanes = c, b2;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (L$1.current & 1) ? 0 === T$1 && (T$1 = 3) : tj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S$1(b2);
      return null;
    case 4:
      return zh(), Aj(a, b2), null === a && sf(b2.stateNode.containerInfo), S$1(b2), null;
    case 10:
      return ah(b2.type._context), S$1(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S$1(b2), null;
    case 19:
      E$1(L$1);
      f2 = b2.memoizedState;
      if (null === f2) return S$1(b2), null;
      d = 0 !== (b2.flags & 128);
      g = f2.rendering;
      if (null === g) if (d) Dj(f2, false);
      else {
        if (0 !== T$1 || null !== a && 0 !== (a.flags & 128)) for (a = b2.child; null !== a; ) {
          g = Ch(a);
          if (null !== g) {
            b2.flags |= 128;
            Dj(f2, false);
            d = g.updateQueue;
            null !== d && (b2.updateQueue = d, b2.flags |= 4);
            b2.subtreeFlags = 0;
            d = c;
            for (c = b2.child; null !== c; ) f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
            G$1(L$1, L$1.current & 1 | 2);
            return b2.child;
          }
          a = a.sibling;
        }
        null !== f2.tail && B$1() > Gj && (b2.flags |= 128, d = true, Dj(f2, false), b2.lanes = 4194304);
      }
      else {
        if (!d) if (a = Ch(g), null !== a) {
          if (b2.flags |= 128, d = true, c = a.updateQueue, null !== c && (b2.updateQueue = c, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I$1) return S$1(b2), null;
        } else 2 * B$1() - f2.renderingStartTime > Gj && 1073741824 !== c && (b2.flags |= 128, d = true, Dj(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b2.child, b2.child = g) : (c = f2.last, null !== c ? c.sibling = g : b2.child = g, f2.last = g);
      }
      if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$1(), b2.sibling = null, c = L$1.current, G$1(L$1, d ? c & 1 | 2 : c & 1), b2;
      S$1(b2);
      return null;
    case 22:
    case 23:
      return Hj(), d = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d && (b2.flags |= 8192), d && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S$1(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$1(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b2.tag));
}
function Ij(a, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 3:
      return zh(), E$1(Wf), E$1(H$1), Eh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
    case 5:
      return Bh(b2), null;
    case 13:
      E$1(L$1);
      a = b2.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b2.alternate) throw Error(p(340));
        Ig();
      }
      a = b2.flags;
      return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 19:
      return E$1(L$1), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b2.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false, U$1 = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V$1 = null;
function Lj(a, b2) {
  var c = a.ref;
  if (null !== c) if ("function" === typeof c) try {
    c(null);
  } catch (d) {
    W$1(a, b2, d);
  }
  else c.current = null;
}
function Mj(a, b2, c) {
  try {
    c();
  } catch (d) {
    W$1(a, b2, d);
  }
}
var Nj = false;
function Oj(a, b2) {
  Cf = dd;
  a = Me$1();
  if (Ne$1(a)) {
    if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
    else a: {
      c = (c = a.ownerDocument) && c.defaultView || window;
      var d = c.getSelection && c.getSelection();
      if (d && 0 !== d.rangeCount) {
        c = d.anchorNode;
        var e = d.anchorOffset, f2 = d.focusNode;
        d = d.focusOffset;
        try {
          c.nodeType, f2.nodeType;
        } catch (F2) {
          c = null;
          break a;
        }
        var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
        b: for (; ; ) {
          for (var y2; ; ) {
            q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
            q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
            3 === q2.nodeType && (g += q2.nodeValue.length);
            if (null === (y2 = q2.firstChild)) break;
            r2 = q2;
            q2 = y2;
          }
          for (; ; ) {
            if (q2 === a) break b;
            r2 === c && ++l2 === e && (h = g);
            r2 === f2 && ++m2 === d && (k2 = g);
            if (null !== (y2 = q2.nextSibling)) break;
            q2 = r2;
            r2 = q2.parentNode;
          }
          q2 = y2;
        }
        c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
      } else c = null;
    }
    c = c || { start: 0, end: 0 };
  } else c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V$1 = b2; null !== V$1; ) if (b2 = V$1, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a) a.return = b2, V$1 = a;
  else for (; null !== V$1; ) {
    b2 = V$1;
    try {
      var n2 = b2.alternate;
      if (0 !== (b2.flags & 1024)) switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n2) {
            var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci$1(b2.type, t2), J2);
            x2.__reactInternalSnapshotBeforeUpdate = w2;
          }
          break;
        case 3:
          var u2 = b2.stateNode.containerInfo;
          1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p(163));
      }
    } catch (F2) {
      W$1(b2, b2.return, F2);
    }
    a = b2.sibling;
    if (null !== a) {
      a.return = b2.return;
      V$1 = a;
      break;
    }
    V$1 = b2.return;
  }
  n2 = Nj;
  Nj = false;
  return n2;
}
function Pj(a, b2, c) {
  var d = b2.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.destroy;
        e.destroy = void 0;
        void 0 !== f2 && Mj(b2, c, f2);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Qj(a, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c = b2 = b2.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b2);
  }
}
function Rj(a) {
  var b2 = a.ref;
  if (null !== b2) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b2 ? b2(a) : b2.current = a;
  }
}
function Sj(a) {
  var b2 = a.alternate;
  null !== b2 && (a.alternate = null, Sj(b2));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Tj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Uj(a) {
  a: for (; ; ) {
    for (; null === a.sibling; ) {
      if (null === a.return || Tj(a.return)) return null;
      a = a.return;
    }
    a.sibling.return = a.return;
    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
      if (a.flags & 2) continue a;
      if (null === a.child || 4 === a.tag) continue a;
      else a.child.return = a, a = a.child;
    }
    if (!(a.flags & 2)) return a.stateNode;
  }
}
function Vj(a, b2, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b2 ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b2) : c.insertBefore(a, b2) : (8 === c.nodeType ? (b2 = c.parentNode, b2.insertBefore(a, c)) : (b2 = c, b2.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b2, c), a = a.sibling; null !== a; ) Vj(a, b2, c), a = a.sibling;
}
function Wj(a, b2, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b2 ? c.insertBefore(a, b2) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b2, c), a = a.sibling; null !== a; ) Wj(a, b2, c), a = a.sibling;
}
var X$1 = null, Xj = false;
function Yj(a, b2, c) {
  for (c = c.child; null !== c; ) Zj(a, b2, c), c = c.sibling;
}
function Zj(a, b2, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c);
  } catch (h) {
  }
  switch (c.tag) {
    case 5:
      U$1 || Lj(c, b2);
    case 6:
      var d = X$1, e = Xj;
      X$1 = null;
      Yj(a, b2, c);
      X$1 = d;
      Xj = e;
      null !== X$1 && (Xj ? (a = X$1, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X$1.removeChild(c.stateNode));
      break;
    case 18:
      null !== X$1 && (Xj ? (a = X$1, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X$1, c.stateNode));
      break;
    case 4:
      d = X$1;
      e = Xj;
      X$1 = c.stateNode.containerInfo;
      Xj = true;
      Yj(a, b2, c);
      X$1 = d;
      Xj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$1 && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f2 = e, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b2, g) : 0 !== (f2 & 4) && Mj(c, b2, g));
          e = e.next;
        } while (e !== d);
      }
      Yj(a, b2, c);
      break;
    case 1:
      if (!U$1 && (Lj(c, b2), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
      } catch (h) {
        W$1(c, b2, h);
      }
      Yj(a, b2, c);
      break;
    case 21:
      Yj(a, b2, c);
      break;
    case 22:
      c.mode & 1 ? (U$1 = (d = U$1) || null !== c.memoizedState, Yj(a, b2, c), U$1 = d) : Yj(a, b2, c);
      break;
    default:
      Yj(a, b2, c);
  }
}
function ak(a) {
  var b2 = a.updateQueue;
  if (null !== b2) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Kj());
    b2.forEach(function(b3) {
      var d = bk.bind(null, a, b3);
      c.has(b3) || (c.add(b3), b3.then(d, d));
    });
  }
}
function ck(a, b2) {
  var c = b2.deletions;
  if (null !== c) for (var d = 0; d < c.length; d++) {
    var e = c[d];
    try {
      var f2 = a, g = b2, h = g;
      a: for (; null !== h; ) {
        switch (h.tag) {
          case 5:
            X$1 = h.stateNode;
            Xj = false;
            break a;
          case 3:
            X$1 = h.stateNode.containerInfo;
            Xj = true;
            break a;
          case 4:
            X$1 = h.stateNode.containerInfo;
            Xj = true;
            break a;
        }
        h = h.return;
      }
      if (null === X$1) throw Error(p(160));
      Zj(f2, g, e);
      X$1 = null;
      Xj = false;
      var k2 = e.alternate;
      null !== k2 && (k2.return = null);
      e.return = null;
    } catch (l2) {
      W$1(e, b2, l2);
    }
  }
  if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a), b2 = b2.sibling;
}
function dk(a, b2) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b2, a);
      ek(a);
      if (d & 4) {
        try {
          Pj(3, a, a.return), Qj(3, a);
        } catch (t2) {
          W$1(a, a.return, t2);
        }
        try {
          Pj(5, a, a.return);
        } catch (t2) {
          W$1(a, a.return, t2);
        }
      }
      break;
    case 1:
      ck(b2, a);
      ek(a);
      d & 512 && null !== c && Lj(c, c.return);
      break;
    case 5:
      ck(b2, a);
      ek(a);
      d & 512 && null !== c && Lj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W$1(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2) try {
          "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
          vb(h, g);
          var l2 = vb(h, f2);
          for (g = 0; g < k2.length; g += 2) {
            var m2 = k2[g], q2 = k2[g + 1];
            "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
          }
          switch (h) {
            case "input":
              bb(e, f2);
              break;
            case "textarea":
              ib(e, f2);
              break;
            case "select":
              var r2 = e._wrapperState.wasMultiple;
              e._wrapperState.wasMultiple = !!f2.multiple;
              var y2 = f2.value;
              null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                e,
                !!f2.multiple,
                f2.defaultValue,
                true
              ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
          }
          e[Pf] = f2;
        } catch (t2) {
          W$1(a, a.return, t2);
        }
      }
      break;
    case 6:
      ck(b2, a);
      ek(a);
      if (d & 4) {
        if (null === a.stateNode) throw Error(p(162));
        e = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e.nodeValue = f2;
        } catch (t2) {
          W$1(a, a.return, t2);
        }
      }
      break;
    case 3:
      ck(b2, a);
      ek(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
        bd(b2.containerInfo);
      } catch (t2) {
        W$1(a, a.return, t2);
      }
      break;
    case 4:
      ck(b2, a);
      ek(a);
      break;
    case 13:
      ck(b2, a);
      ek(a);
      e = a.child;
      e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B$1()));
      d & 4 && ak(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U$1 = (l2 = U$1) || m2, ck(b2, a), U$1 = l2) : ck(b2, a);
      ek(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V$1 = a, m2 = a.child; null !== m2; ) {
          for (q2 = V$1 = m2; null !== V$1; ) {
            r2 = V$1;
            y2 = r2.child;
            switch (r2.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r2, r2.return);
                break;
              case 1:
                Lj(r2, r2.return);
                var n2 = r2.stateNode;
                if ("function" === typeof n2.componentWillUnmount) {
                  d = r2;
                  c = r2.return;
                  try {
                    b2 = d, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                  } catch (t2) {
                    W$1(d, c, t2);
                  }
                }
                break;
              case 5:
                Lj(r2, r2.return);
                break;
              case 22:
                if (null !== r2.memoizedState) {
                  gk(q2);
                  continue;
                }
            }
            null !== y2 ? (y2.return = r2, V$1 = y2) : gk(q2);
          }
          m2 = m2.sibling;
        }
        a: for (m2 = null, q2 = a; ; ) {
          if (5 === q2.tag) {
            if (null === m2) {
              m2 = q2;
              try {
                e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
              } catch (t2) {
                W$1(a, a.return, t2);
              }
            }
          } else if (6 === q2.tag) {
            if (null === m2) try {
              q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
            } catch (t2) {
              W$1(a, a.return, t2);
            }
          } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
            q2.child.return = q2;
            q2 = q2.child;
            continue;
          }
          if (q2 === a) break a;
          for (; null === q2.sibling; ) {
            if (null === q2.return || q2.return === a) break a;
            m2 === q2 && (m2 = null);
            q2 = q2.return;
          }
          m2 === q2 && (m2 = null);
          q2.sibling.return = q2.return;
          q2 = q2.sibling;
        }
      }
      break;
    case 19:
      ck(b2, a);
      ek(a);
      d & 4 && ak(a);
      break;
    case 21:
      break;
    default:
      ck(
        b2,
        a
      ), ek(a);
  }
}
function ek(a) {
  var b2 = a.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Tj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f2 = Uj(a);
          Wj(a, f2, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Uj(a);
          Vj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k2) {
      W$1(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b2 & 4096 && (a.flags &= -4097);
}
function hk(a, b2, c) {
  V$1 = a;
  ik(a);
}
function ik(a, b2, c) {
  for (var d = 0 !== (a.mode & 1); null !== V$1; ) {
    var e = V$1, f2 = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Jj;
      if (!g) {
        var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U$1;
        h = Jj;
        var l2 = U$1;
        Jj = g;
        if ((U$1 = k2) && !l2) for (V$1 = e; null !== V$1; ) g = V$1, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k2 ? (k2.return = g, V$1 = k2) : jk(e);
        for (; null !== f2; ) V$1 = f2, ik(f2), f2 = f2.sibling;
        V$1 = e;
        Jj = h;
        U$1 = l2;
      }
      kk(a);
    } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V$1 = f2) : kk(a);
  }
}
function kk(a) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    if (0 !== (b2.flags & 8772)) {
      var c = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772)) switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            U$1 || Qj(5, b2);
            break;
          case 1:
            var d = b2.stateNode;
            if (b2.flags & 4 && !U$1) if (null === c) d.componentDidMount();
            else {
              var e = b2.elementType === b2.type ? c.memoizedProps : Ci$1(b2.type, c.memoizedProps);
              d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
            }
            var f2 = b2.updateQueue;
            null !== f2 && sh(b2, f2, d);
            break;
          case 3:
            var g = b2.updateQueue;
            if (null !== g) {
              c = null;
              if (null !== b2.child) switch (b2.child.tag) {
                case 5:
                  c = b2.child.stateNode;
                  break;
                case 1:
                  c = b2.child.stateNode;
              }
              sh(b2, g, c);
            }
            break;
          case 5:
            var h = b2.stateNode;
            if (null === c && b2.flags & 4) {
              c = h;
              var k2 = b2.memoizedProps;
              switch (b2.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k2.autoFocus && c.focus();
                  break;
                case "img":
                  k2.src && (c.src = k2.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b2.memoizedState) {
              var l2 = b2.alternate;
              if (null !== l2) {
                var m2 = l2.memoizedState;
                if (null !== m2) {
                  var q2 = m2.dehydrated;
                  null !== q2 && bd(q2);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p(163));
        }
        U$1 || b2.flags & 512 && Rj(b2);
      } catch (r2) {
        W$1(b2, b2.return, r2);
      }
    }
    if (b2 === a) {
      V$1 = null;
      break;
    }
    c = b2.sibling;
    if (null !== c) {
      c.return = b2.return;
      V$1 = c;
      break;
    }
    V$1 = b2.return;
  }
}
function gk(a) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    if (b2 === a) {
      V$1 = null;
      break;
    }
    var c = b2.sibling;
    if (null !== c) {
      c.return = b2.return;
      V$1 = c;
      break;
    }
    V$1 = b2.return;
  }
}
function jk(a) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c = b2.return;
          try {
            Qj(4, b2);
          } catch (k2) {
            W$1(b2, c, k2);
          }
          break;
        case 1:
          var d = b2.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b2.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W$1(b2, e, k2);
            }
          }
          var f2 = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W$1(b2, f2, k2);
          }
          break;
        case 5:
          var g = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W$1(b2, g, k2);
          }
      }
    } catch (k2) {
      W$1(b2, b2.return, k2);
    }
    if (b2 === a) {
      V$1 = null;
      break;
    }
    var h = b2.sibling;
    if (null !== h) {
      h.return = b2.return;
      V$1 = h;
      break;
    }
    V$1 = b2.return;
  }
}
var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K$1 = 0, Q$1 = null, Y$1 = null, Z$1 = 0, fj = 0, ej = Uf(0), T$1 = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi$1 = false, Pi$1 = null, Ri$1 = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
function R$1() {
  return 0 !== (K$1 & 6) ? B$1() : -1 !== Ak ? Ak : Ak = B$1();
}
function yi$1(a) {
  if (0 === (a.mode & 1)) return 1;
  if (0 !== (K$1 & 2) && 0 !== Z$1) return Z$1 & -Z$1;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a = C$1;
  if (0 !== a) return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function gi(a, b2, c, d) {
  if (50 < yk) throw yk = 0, zk = null, Error(p(185));
  Ac(a, c, d);
  if (0 === (K$1 & 2) || a !== Q$1) a === Q$1 && (0 === (K$1 & 2) && (qk |= c), 4 === T$1 && Ck(a, Z$1)), Dk(a, d), 1 === c && 0 === K$1 && 0 === (b2.mode & 1) && (Gj = B$1() + 500, fg && jg());
}
function Dk(a, b2) {
  var c = a.callbackNode;
  wc(a, b2);
  var d = uc(a, a === Q$1 ? Z$1 : 0);
  if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b2 = d & -d, a.callbackPriority !== b2) {
    null != c && bc(c);
    if (1 === b2) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
      0 === (K$1 & 6) && jg();
    }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Fk(c, Gk.bind(null, a));
    }
    a.callbackPriority = b2;
    a.callbackNode = c;
  }
}
function Gk(a, b2) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K$1 & 6)) throw Error(p(327));
  var c = a.callbackNode;
  if (Hk() && a.callbackNode !== c) return null;
  var d = uc(a, a === Q$1 ? Z$1 : 0);
  if (0 === d) return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b2) b2 = Ik(a, d);
  else {
    b2 = d;
    var e = K$1;
    K$1 |= 2;
    var f2 = Jk();
    if (Q$1 !== a || Z$1 !== b2) uk = null, Gj = B$1() + 500, Kk(a, b2);
    do
      try {
        Lk();
        break;
      } catch (h) {
        Mk(a, h);
      }
    while (1);
    $g();
    mk.current = f2;
    K$1 = e;
    null !== Y$1 ? b2 = 0 : (Q$1 = null, Z$1 = 0, b2 = T$1);
  }
  if (0 !== b2) {
    2 === b2 && (e = xc(a), 0 !== e && (d = e, b2 = Nk(a, e)));
    if (1 === b2) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B$1()), c;
    if (6 === b2) Ck(a, d);
    else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Ok(e) && (b2 = Ik(a, d), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d = f2, b2 = Nk(a, f2))), 1 === b2)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B$1()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Pk(a, tk, uk);
          break;
        case 3:
          Ck(a, d);
          if ((d & 130023424) === d && (b2 = fk + 500 - B$1(), 10 < b2)) {
            if (0 !== uc(a, 0)) break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              R$1();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b2);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 4:
          Ck(a, d);
          if ((d & 4194240) === d) break;
          b2 = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b2[g];
            g > e && (e = g);
            d &= ~f2;
          }
          d = e;
          d = B$1() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 5:
          Pk(a, tk, uk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Dk(a, B$1());
  return a.callbackNode === c ? Gk.bind(null, a) : null;
}
function Nk(a, b2) {
  var c = sk;
  a.current.memoizedState.isDehydrated && (Kk(a, b2).flags |= 256);
  a = Ik(a, b2);
  2 !== a && (b2 = tk, tk = c, null !== b2 && Fj(b2));
  return a;
}
function Fj(a) {
  null === tk ? tk = a : tk.push.apply(tk, a);
}
function Ok(a) {
  for (var b2 = a; ; ) {
    if (b2.flags & 16384) {
      var c = b2.updateQueue;
      if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
        var e = c[d], f2 = e.getSnapshot;
        e = e.value;
        try {
          if (!He$1(f2(), e)) return false;
        } catch (g) {
          return false;
        }
      }
    }
    c = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c) c.return = b2, b2 = c;
    else {
      if (b2 === a) break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a) return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Ck(a, b2) {
  b2 &= ~rk;
  b2 &= ~qk;
  a.suspendedLanes |= b2;
  a.pingedLanes &= ~b2;
  for (a = a.expirationTimes; 0 < b2; ) {
    var c = 31 - oc(b2), d = 1 << c;
    a[c] = -1;
    b2 &= ~d;
  }
}
function Ek(a) {
  if (0 !== (K$1 & 6)) throw Error(p(327));
  Hk();
  var b2 = uc(a, 0);
  if (0 === (b2 & 1)) return Dk(a, B$1()), null;
  var c = Ik(a, b2);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b2 = d, c = Nk(a, d));
  }
  if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b2), Dk(a, B$1()), c;
  if (6 === c) throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b2;
  Pk(a, tk, uk);
  Dk(a, B$1());
  return null;
}
function Qk(a, b2) {
  var c = K$1;
  K$1 |= 1;
  try {
    return a(b2);
  } finally {
    K$1 = c, 0 === K$1 && (Gj = B$1() + 500, fg && jg());
  }
}
function Rk(a) {
  null !== wk && 0 === wk.tag && 0 === (K$1 & 6) && Hk();
  var b2 = K$1;
  K$1 |= 1;
  var c = ok.transition, d = C$1;
  try {
    if (ok.transition = null, C$1 = 1, a) return a();
  } finally {
    C$1 = d, ok.transition = c, K$1 = b2, 0 === (K$1 & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E$1(ej);
}
function Kk(a, b2) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y$1) for (c = Y$1.return; null !== c; ) {
    var d = c;
    wg(d);
    switch (d.tag) {
      case 1:
        d = d.type.childContextTypes;
        null !== d && void 0 !== d && $f();
        break;
      case 3:
        zh();
        E$1(Wf);
        E$1(H$1);
        Eh();
        break;
      case 5:
        Bh(d);
        break;
      case 4:
        zh();
        break;
      case 13:
        E$1(L$1);
        break;
      case 19:
        E$1(L$1);
        break;
      case 10:
        ah(d.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c = c.return;
  }
  Q$1 = a;
  Y$1 = a = Pg(a.current, null);
  Z$1 = fj = b2;
  T$1 = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b2 = 0; b2 < fh.length; b2++) if (c = fh[b2], d = c.interleaved, null !== d) {
      c.interleaved = null;
      var e = d.next, f2 = c.pending;
      if (null !== f2) {
        var g = f2.next;
        f2.next = e;
        d.next = g;
      }
      c.pending = d;
    }
    fh = null;
  }
  return a;
}
function Mk(a, b2) {
  do {
    var c = Y$1;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d = M$1.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Ih = false;
      }
      Hh = 0;
      O$1 = N$1 = M$1 = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (null === c || null === c.return) {
        T$1 = 1;
        pk = b2;
        Y$1 = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h = c, k2 = b2;
        b2 = Z$1;
        h.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Ui$1(g);
          if (null !== y2) {
            y2.flags &= -257;
            Vi$1(y2, g, h, f2, b2);
            y2.mode & 1 && Si$1(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Si$1(f2, l2, b2);
              tj();
              break a;
            }
            k2 = Error(p(426));
          }
        } else if (I$1 && h.mode & 1) {
          var J2 = Ui$1(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Vi$1(J2, g, h, f2, b2);
            Jg(Ji$1(k2, h));
            break a;
          }
        }
        f2 = k2 = Ji$1(k2, h);
        4 !== T$1 && (T$1 = 2);
        null === sk ? sk = [f2] : sk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x2 = Ni$1(f2, k2, b2);
              ph(f2, x2);
              break a;
            case 1:
              h = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri$1 || !Ri$1.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Qi$1(f2, h, b2);
                ph(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Sk(c);
    } catch (na) {
      b2 = na;
      Y$1 === c && null !== c && (Y$1 = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a = mk.current;
  mk.current = Rh;
  return null === a ? Rh : a;
}
function tj() {
  if (0 === T$1 || 3 === T$1 || 2 === T$1) T$1 = 4;
  null === Q$1 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q$1, Z$1);
}
function Ik(a, b2) {
  var c = K$1;
  K$1 |= 2;
  var d = Jk();
  if (Q$1 !== a || Z$1 !== b2) uk = null, Kk(a, b2);
  do
    try {
      Tk();
      break;
    } catch (e) {
      Mk(a, e);
    }
  while (1);
  $g();
  K$1 = c;
  mk.current = d;
  if (null !== Y$1) throw Error(p(261));
  Q$1 = null;
  Z$1 = 0;
  return T$1;
}
function Tk() {
  for (; null !== Y$1; ) Uk(Y$1);
}
function Lk() {
  for (; null !== Y$1 && !cc(); ) Uk(Y$1);
}
function Uk(a) {
  var b2 = Vk(a.alternate, a, fj);
  a.memoizedProps = a.pendingProps;
  null === b2 ? Sk(a) : Y$1 = b2;
  nk.current = null;
}
function Sk(a) {
  var b2 = a;
  do {
    var c = b2.alternate;
    a = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c = Ej(c, b2, fj), null !== c) {
        Y$1 = c;
        return;
      }
    } else {
      c = Ij(c, b2);
      if (null !== c) {
        c.flags &= 32767;
        Y$1 = c;
        return;
      }
      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T$1 = 6;
        Y$1 = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y$1 = b2;
      return;
    }
    Y$1 = b2 = a;
  } while (null !== b2);
  0 === T$1 && (T$1 = 5);
}
function Pk(a, b2, c) {
  var d = C$1, e = ok.transition;
  try {
    ok.transition = null, C$1 = 1, Wk(a, b2, c, d);
  } finally {
    ok.transition = e, C$1 = d;
  }
  return null;
}
function Wk(a, b2, c, d) {
  do
    Hk();
  while (null !== wk);
  if (0 !== (K$1 & 6)) throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c) return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current) throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === Q$1 && (Y$1 = Q$1 = null, Z$1 = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
    Hk();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = ok.transition;
    ok.transition = null;
    var g = C$1;
    C$1 = 1;
    var h = K$1;
    K$1 |= 4;
    nk.current = null;
    Oj(a, c);
    dk(c, a);
    Oe$1(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    hk(c);
    dc();
    K$1 = h;
    C$1 = g;
    ok.transition = f2;
  } else a.current = c;
  vk && (vk = false, wk = a, xk = e);
  f2 = a.pendingLanes;
  0 === f2 && (Ri$1 = null);
  mc(c.stateNode);
  Dk(a, B$1());
  if (null !== b2) for (d = a.onRecoverableError, c = 0; c < b2.length; c++) e = b2[c], d(e.value, { componentStack: e.stack, digest: e.digest });
  if (Oi$1) throw Oi$1 = false, a = Pi$1, Pi$1 = null, a;
  0 !== (xk & 1) && 0 !== a.tag && Hk();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a = Dc(xk), b2 = ok.transition, c = C$1;
    try {
      ok.transition = null;
      C$1 = 16 > a ? 16 : a;
      if (null === wk) var d = false;
      else {
        a = wk;
        wk = null;
        xk = 0;
        if (0 !== (K$1 & 6)) throw Error(p(331));
        var e = K$1;
        K$1 |= 4;
        for (V$1 = a.current; null !== V$1; ) {
          var f2 = V$1, g = f2.child;
          if (0 !== (V$1.flags & 16)) {
            var h = f2.deletions;
            if (null !== h) {
              for (var k2 = 0; k2 < h.length; k2++) {
                var l2 = h[k2];
                for (V$1 = l2; null !== V$1; ) {
                  var m2 = V$1;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2) q2.return = m2, V$1 = q2;
                  else for (; null !== V$1; ) {
                    m2 = V$1;
                    var r2 = m2.sibling, y2 = m2.return;
                    Sj(m2);
                    if (m2 === l2) {
                      V$1 = null;
                      break;
                    }
                    if (null !== r2) {
                      r2.return = y2;
                      V$1 = r2;
                      break;
                    }
                    V$1 = y2;
                  }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V$1 = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V$1 = g;
          else b: for (; null !== V$1; ) {
            f2 = V$1;
            if (0 !== (f2.flags & 2048)) switch (f2.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f2, f2.return);
            }
            var x2 = f2.sibling;
            if (null !== x2) {
              x2.return = f2.return;
              V$1 = x2;
              break b;
            }
            V$1 = f2.return;
          }
        }
        var w2 = a.current;
        for (V$1 = w2; null !== V$1; ) {
          g = V$1;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2) u2.return = g, V$1 = u2;
          else b: for (g = w2; null !== V$1; ) {
            h = V$1;
            if (0 !== (h.flags & 2048)) try {
              switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h);
              }
            } catch (na) {
              W$1(h, h.return, na);
            }
            if (h === g) {
              V$1 = null;
              break b;
            }
            var F2 = h.sibling;
            if (null !== F2) {
              F2.return = h.return;
              V$1 = F2;
              break b;
            }
            V$1 = h.return;
          }
        }
        K$1 = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a);
        } catch (na) {
        }
        d = true;
      }
      return d;
    } finally {
      C$1 = c, ok.transition = b2;
    }
  }
  return false;
}
function Xk(a, b2, c) {
  b2 = Ji$1(c, b2);
  b2 = Ni$1(a, b2, 1);
  a = nh(a, b2, 1);
  b2 = R$1();
  null !== a && (Ac(a, 1, b2), Dk(a, b2));
}
function W$1(a, b2, c) {
  if (3 === a.tag) Xk(a, a, c);
  else for (; null !== b2; ) {
    if (3 === b2.tag) {
      Xk(b2, a, c);
      break;
    } else if (1 === b2.tag) {
      var d = b2.stateNode;
      if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri$1 || !Ri$1.has(d))) {
        a = Ji$1(c, a);
        a = Qi$1(b2, a, 1);
        b2 = nh(b2, a, 1);
        a = R$1();
        null !== b2 && (Ac(b2, 1, a), Dk(b2, a));
        break;
      }
    }
    b2 = b2.return;
  }
}
function Ti(a, b2, c) {
  var d = a.pingCache;
  null !== d && d.delete(b2);
  b2 = R$1();
  a.pingedLanes |= a.suspendedLanes & c;
  Q$1 === a && (Z$1 & c) === c && (4 === T$1 || 3 === T$1 && (Z$1 & 130023424) === Z$1 && 500 > B$1() - fk ? Kk(a, 0) : rk |= c);
  Dk(a, b2);
}
function Yk(a, b2) {
  0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = R$1();
  a = ih(a, b2);
  null !== a && (Ac(a, b2, c), Dk(a, c));
}
function uj(a) {
  var b2 = a.memoizedState, c = 0;
  null !== b2 && (c = b2.retryLane);
  Yk(a, c);
}
function bk(a, b2) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b2);
  Yk(a, c);
}
var Vk;
Vk = function(a, b2, c) {
  if (null !== a) if (a.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
  else {
    if (0 === (a.lanes & c) && 0 === (b2.flags & 128)) return dh = false, yj(a, b2, c);
    dh = 0 !== (a.flags & 131072) ? true : false;
  }
  else dh = false, I$1 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d = b2.type;
      ij(a, b2);
      a = b2.pendingProps;
      var e = Yf(b2, H$1.current);
      ch(b2, c);
      e = Nh(null, b2, d, a, e, c);
      var f2 = Sh();
      b2.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b2), e.updater = Ei$1, b2.stateNode = e, e._reactInternals = b2, Ii$1(b2, d, a, c), b2 = jj(null, b2, d, true, f2, c)) : (b2.tag = 0, I$1 && f2 && vg(b2), Xi$1(null, b2, e, c), b2 = b2.child);
      return b2;
    case 16:
      d = b2.elementType;
      a: {
        ij(a, b2);
        a = b2.pendingProps;
        e = d._init;
        d = e(d._payload);
        b2.type = d;
        e = b2.tag = Zk(d);
        a = Ci$1(d, a);
        switch (e) {
          case 0:
            b2 = cj(null, b2, d, a, c);
            break a;
          case 1:
            b2 = hj(null, b2, d, a, c);
            break a;
          case 11:
            b2 = Yi$1(null, b2, d, a, c);
            break a;
          case 14:
            b2 = $i$1(null, b2, d, Ci$1(d.type, a), c);
            break a;
        }
        throw Error(p(
          306,
          d,
          ""
        ));
      }
      return b2;
    case 0:
      return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Ci$1(d, e), cj(a, b2, d, e, c);
    case 1:
      return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Ci$1(d, e), hj(a, b2, d, e, c);
    case 3:
      a: {
        kj(b2);
        if (null === a) throw Error(p(387));
        d = b2.pendingProps;
        f2 = b2.memoizedState;
        e = f2.element;
        lh(a, b2);
        qh(b2, d, null, c);
        var g = b2.memoizedState;
        d = g.element;
        if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
          e = Ji$1(Error(p(423)), b2);
          b2 = lj(a, b2, d, c, e);
          break a;
        } else if (d !== e) {
          e = Ji$1(Error(p(424)), b2);
          b2 = lj(a, b2, d, c, e);
          break a;
        } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$1 = true, zg = null, c = Vg(b2, null, d, c), b2.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b2 = Zi$1(a, b2, c);
            break a;
          }
          Xi$1(a, b2, d, c);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Ah(b2), null === a && Eg(b2), d = b2.type, e = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b2.flags |= 32), gj(a, b2), Xi$1(a, b2, g, c), b2.child;
    case 6:
      return null === a && Eg(b2), null;
    case 13:
      return oj(a, b2, c);
    case 4:
      return yh(b2, b2.stateNode.containerInfo), d = b2.pendingProps, null === a ? b2.child = Ug(b2, null, d, c) : Xi$1(a, b2, d, c), b2.child;
    case 11:
      return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Ci$1(d, e), Yi$1(a, b2, d, e, c);
    case 7:
      return Xi$1(a, b2, b2.pendingProps, c), b2.child;
    case 8:
      return Xi$1(a, b2, b2.pendingProps.children, c), b2.child;
    case 12:
      return Xi$1(a, b2, b2.pendingProps.children, c), b2.child;
    case 10:
      a: {
        d = b2.type._context;
        e = b2.pendingProps;
        f2 = b2.memoizedProps;
        g = e.value;
        G$1(Wg, d._currentValue);
        d._currentValue = g;
        if (null !== f2) if (He$1(f2.value, g)) {
          if (f2.children === e.children && !Wf.current) {
            b2 = Zi$1(a, b2, c);
            break a;
          }
        } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
          var h = f2.dependencies;
          if (null !== h) {
            g = f2.child;
            for (var k2 = h.firstContext; null !== k2; ) {
              if (k2.context === d) {
                if (1 === f2.tag) {
                  k2 = mh(-1, c & -c);
                  k2.tag = 2;
                  var l2 = f2.updateQueue;
                  if (null !== l2) {
                    l2 = l2.shared;
                    var m2 = l2.pending;
                    null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                    l2.pending = k2;
                  }
                }
                f2.lanes |= c;
                k2 = f2.alternate;
                null !== k2 && (k2.lanes |= c);
                bh(
                  f2.return,
                  c,
                  b2
                );
                h.lanes |= c;
                break;
              }
              k2 = k2.next;
            }
          } else if (10 === f2.tag) g = f2.type === b2.type ? null : f2.child;
          else if (18 === f2.tag) {
            g = f2.return;
            if (null === g) throw Error(p(341));
            g.lanes |= c;
            h = g.alternate;
            null !== h && (h.lanes |= c);
            bh(g, c, b2);
            g = f2.sibling;
          } else g = f2.child;
          if (null !== g) g.return = f2;
          else for (g = f2; null !== g; ) {
            if (g === b2) {
              g = null;
              break;
            }
            f2 = g.sibling;
            if (null !== f2) {
              f2.return = g.return;
              g = f2;
              break;
            }
            g = g.return;
          }
          f2 = g;
        }
        Xi$1(a, b2, e.children, c);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e = b2.type, d = b2.pendingProps.children, ch(b2, c), e = eh(e), d = d(e), b2.flags |= 1, Xi$1(a, b2, d, c), b2.child;
    case 14:
      return d = b2.type, e = Ci$1(d, b2.pendingProps), e = Ci$1(d.type, e), $i$1(a, b2, d, e, c);
    case 15:
      return bj(a, b2, b2.type, b2.pendingProps, c);
    case 17:
      return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Ci$1(d, e), ij(a, b2), b2.tag = 1, Zf(d) ? (a = true, cg(b2)) : a = false, ch(b2, c), Gi$1(b2, d, e), Ii$1(b2, d, e, c), jj(null, b2, d, true, a, c);
    case 19:
      return xj(a, b2, c);
    case 22:
      return dj(a, b2, c);
  }
  throw Error(p(156, b2.tag));
};
function Fk(a, b2) {
  return ac(a, b2);
}
function $k(a, b2, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b2, c, d) {
  return new $k(a, b2, c, d);
}
function aj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Zk(a) {
  if ("function" === typeof a) return aj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da) return 11;
    if (a === Ga) return 14;
  }
  return 2;
}
function Pg(a, b2) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b2, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b2, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b2 = a.dependencies;
  c.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Rg(a, b2, c, d, e, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a) aj(a) && (g = 1);
  else if ("string" === typeof a) g = 5;
  else a: switch (a) {
    case ya:
      return Tg(c.children, e, f2, b2);
    case za:
      g = 8;
      e |= 8;
      break;
    case Aa:
      return a = Bg(12, c, b2, e | 2), a.elementType = Aa, a.lanes = f2, a;
    case Ea:
      return a = Bg(13, c, b2, e), a.elementType = Ea, a.lanes = f2, a;
    case Fa:
      return a = Bg(19, c, b2, e), a.elementType = Fa, a.lanes = f2, a;
    case Ia:
      return pj(c, e, f2, b2);
    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case Ba:
          g = 10;
          break a;
        case Ca:
          g = 9;
          break a;
        case Da:
          g = 11;
          break a;
        case Ga:
          g = 14;
          break a;
        case Ha:
          g = 16;
          d = null;
          break a;
      }
      throw Error(p(130, null == a ? a : typeof a, ""));
  }
  b2 = Bg(g, c, b2, e);
  b2.elementType = a;
  b2.type = d;
  b2.lanes = f2;
  return b2;
}
function Tg(a, b2, c, d) {
  a = Bg(7, a, d, b2);
  a.lanes = c;
  return a;
}
function pj(a, b2, c, d) {
  a = Bg(22, a, d, b2);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function Qg(a, b2, c) {
  a = Bg(6, a, null, b2);
  a.lanes = c;
  return a;
}
function Sg(a, b2, c) {
  b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
  b2.lanes = c;
  b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b2;
}
function al(a, b2, c, d, e) {
  this.tag = b2;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a, b2, c, d, e, f2, g, h, k2) {
  a = new al(a, b2, c, h, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  kh(f2);
  return a;
}
function cl(a, b2, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b2, implementation: c };
}
function dl(a) {
  if (!a) return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
    var b2 = a;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c)) return bg(a, c, b2);
  }
  return b2;
}
function el(a, b2, c, d, e, f2, g, h, k2) {
  a = bl(c, d, true, a, e, f2, g, h, k2);
  a.context = dl(null);
  c = a.current;
  d = R$1();
  e = yi$1(c);
  f2 = mh(d, e);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  nh(c, f2, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Dk(a, d);
  return a;
}
function fl(a, b2, c, d) {
  var e = b2.current, f2 = R$1(), g = yi$1(e);
  c = dl(c);
  null === b2.context ? b2.context = c : b2.pendingContext = c;
  b2 = mh(f2, g);
  b2.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b2.callback = d);
  a = nh(e, b2, g);
  null !== a && (gi(a, e, g, f2), oh(a, e, g));
  return g;
}
function gl(a) {
  a = a.current;
  if (!a.child) return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function hl(a, b2) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b2 ? c : b2;
  }
}
function il(a, b2) {
  hl(a, b2);
  (a = a.alternate) && hl(a, b2);
}
function jl() {
  return null;
}
var kl = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ll(a) {
  this._internalRoot = a;
}
ml.prototype.render = ll.prototype.render = function(a) {
  var b2 = this._internalRoot;
  if (null === b2) throw Error(p(409));
  fl(a, b2, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b2 = a.containerInfo;
    Rk(function() {
      fl(null, a, null, null);
    });
    b2[uf] = null;
  }
};
function ml(a) {
  this._internalRoot = a;
}
ml.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b2 = Hc();
    a = { blockedOn: null, target: a, priority: b2 };
    for (var c = 0; c < Qc.length && 0 !== b2 && b2 < Qc[c].priority; c++) ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function nl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function pl() {
}
function ql(a, b2, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = gl(g);
        f2.call(a2);
      };
    }
    var g = el(b2, d, a, 0, null, false, false, "", pl);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk();
    return g;
  }
  for (; e = a.lastChild; ) a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function() {
      var a2 = gl(k2);
      h.call(a2);
    };
  }
  var k2 = bl(a, 0, false, null, null, false, false, "", pl);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Rk(function() {
    fl(b2, k2, c, d);
  });
  return k2;
}
function rl(a, b2, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = gl(g);
        h.call(a2);
      };
    }
    fl(b2, g, a, e);
  } else g = ql(c, b2, a, e, d);
  return gl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b2 = a.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c = tc(b2.pendingLanes);
        0 !== c && (Cc(b2, c | 1), Dk(b2, B$1()), 0 === (K$1 & 6) && (Gj = B$1() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b3 = ih(a, 1);
        if (null !== b3) {
          var c2 = R$1();
          gi(b3, a, 1, c2);
        }
      }), il(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b2 = ih(a, 134217728);
    if (null !== b2) {
      var c = R$1();
      gi(b2, a, 134217728, c);
    }
    il(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b2 = yi$1(a), c = ih(a, b2);
    if (null !== c) {
      var d = R$1();
      gi(c, a, b2, d);
    }
    il(a, b2);
  }
};
Hc = function() {
  return C$1;
};
Ic = function(a, b2) {
  var c = C$1;
  try {
    return C$1 = a, b2();
  } finally {
    C$1 = c;
  }
};
yb = function(a, b2, c) {
  switch (b2) {
    case "input":
      bb(a, c);
      b2 = c.name;
      if ("radio" === c.type && null != b2) {
        for (c = a; c.parentNode; ) c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c.length; b2++) {
          var d = c[b2];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e) throw Error(p(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b2 = c.value, null != b2 && fb(a, !!c.multiple, b2, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: false, Events: [Cb, ue$1, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch (a) {
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function(a, b2) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b2)) throw Error(p(200));
  return cl(a, b2, null, c);
};
reactDom_production_min.createRoot = function(a, b2) {
  if (!nl(a)) throw Error(p(299));
  var c = false, d = "", e = kl;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c = true), void 0 !== b2.identifierPrefix && (d = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e = b2.onRecoverableError));
  b2 = bl(a, 1, false, null, null, c, false, d, e);
  a[uf] = b2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ll(b2);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a) return null;
  if (1 === a.nodeType) return a;
  var b2 = a._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a.render) throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Zb(b2);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Rk(a);
};
reactDom_production_min.hydrate = function(a, b2, c) {
  if (!ol(b2)) throw Error(p(200));
  return rl(null, a, b2, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b2, c) {
  if (!nl(a)) throw Error(p(405));
  var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = kl;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b2 = el(b2, null, a, 1, null != c ? c : null, e, false, f2, g);
  a[uf] = b2.current;
  sf(a);
  if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c, e] : b2.mutableSourceEagerHydrationData.push(
    c,
    e
  );
  return new ml(b2);
};
reactDom_production_min.render = function(a, b2, c) {
  if (!ol(b2)) throw Error(p(200));
  return rl(null, a, b2, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!ol(a)) throw Error(p(40));
  return a._reactRootContainer ? (Rk(function() {
    rl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c, d) {
  if (!ol(c)) throw Error(p(200));
  if (null == a || void 0 === a._reactInternals) throw Error(p(38));
  return rl(a, b2, c, false, d);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(reactDomExports);
/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createHashLocation(window2, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window2.location.hash.substr(1));
    if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
      pathname = "/" + pathname;
    }
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createHashHref(window2, to2) {
    let base = window2.document.querySelector("base");
    let href = "";
    if (base && base.getAttribute("href")) {
      let url = window2.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to2 === "string" ? to2 : createPath(to2));
  }
  function validateHashLocation(location, to2) {
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to2) + ")");
  }
  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined") console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
function createLocation(current, to2, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends$3({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to2 === "string" ? parsePath(to2) : to2, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to2 && to2.key || key || createKey()
  });
  return location;
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window2.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends$3({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to2, state) {
    action = Action.Push;
    let location = createLocation(history.location, to2, state);
    if (validateLocation) validateLocation(location, to2);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to2, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to2, state);
    if (validateLocation) validateLocation(location, to2);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to2) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to2 === "string" ? to2 : createPath(to2);
    href = href.replace(/ $/, "%20");
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn2) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn2;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to2) {
      return createHref(window2, to2);
    },
    createURL,
    encodeLocation(to2) {
      let url = createURL(to2);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n2) {
      return globalHistory.go(n2);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  return matchRoutesImpl(routes, locationArg, basename);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(branches[i2], decoded);
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _route$path;
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b2) => a.score !== b2.score ? b2.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:[\w-]+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s) => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b2) {
  let siblings = a.length === b2.length && a.slice(0, -1).every((n2, i2) => n2 === b2[i2]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b2[b2.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname, allowPartial) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta = routesMeta[i2];
    let end = i2 === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    let route = meta.route;
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce((memo, _ref, index) => {
    let {
      paramName,
      isOptional
    } = _ref;
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index];
    if (isOptional && !value) {
      memo[paramName] = void 0;
    } else {
      memo[paramName] = (value || "").replace(/%2F/g, "/");
    }
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_2, paramName, isOptional) => {
    params.push({
      paramName,
      isOptional: isOptional != null
    });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map((v2) => decodeURIComponent(v2).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to2, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to2 === "string" ? parsePath(to2) : to2;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
function getResolveToMatches(matches, v7_relativeSplatPath) {
  let pathMatches = getPathContributingMatches(matches);
  if (v7_relativeSplatPath) {
    return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
  }
  return pathMatches.map((match) => match.pathnameBase);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to2;
  if (typeof toArg === "string") {
    to2 = parsePath(toArg);
  } else {
    to2 = _extends$3({}, toArg);
    invariant(!to2.pathname || !to2.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to2));
    invariant(!to2.pathname || !to2.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to2));
    invariant(!to2.search || !to2.search.includes("#"), getInvalidPathError("#", "search", "hash", to2));
  }
  let isEmptyPath = toArg === "" || to2.pathname === "";
  let toPathname = isEmptyPath ? "/" : to2.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to2.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to2, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"];
new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
new Set(validRequestMethodsArr);
/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
const DataRouterContext = /* @__PURE__ */ reactExports.createContext(null);
const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
const RouteContext = /* @__PURE__ */ reactExports.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
const RouteErrorContext = /* @__PURE__ */ reactExports.createContext(null);
function useHref(to2, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to2, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return reactExports.useContext(LocationContext).location;
}
function useIsomorphicLayoutEffect(cb2) {
  let isStatic = reactExports.useContext(NavigationContext).static;
  if (!isStatic) {
    reactExports.useLayoutEffect(cb2);
  }
}
function useNavigate() {
  let {
    isDataRoute
  } = reactExports.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ? invariant(false) : void 0;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  let {
    basename,
    future,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to2, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current) return;
    if (typeof to2 === "number") {
      navigator2.go(to2);
      return;
    }
    let path = resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
  }, [basename, navigator2, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}
function useResolvedPath(to2, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    future
  } = reactExports.useContext(NavigationContext);
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
  return reactExports.useMemo(() => resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to2, routePathnamesJson, locationPathname, relative]);
}
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    navigator: navigator2,
    static: isStatic
  } = reactExports.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
    ]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
    ])
  })), parentMatches, dataRouterState, future);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
      value: {
        location: _extends$2({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /* @__PURE__ */ reactExports.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ reactExports.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState, future) {
  var _dataRouterState;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (future === void 0) {
    future = null;
  }
  if (matches == null) {
    var _future;
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else if ((_future = future) != null && _future.v7_partialHydration && parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = (_dataRouterState = dataRouterState) == null ? void 0 : _dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]) !== void 0);
    !(errorIndex >= 0) ? invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState && future && future.v7_partialHydration) {
    for (let i2 = 0; i2 < renderedMatches.length; i2++) {
      let match = renderedMatches[i2];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i2;
      }
      if (match.route.id) {
        let {
          loaderData,
          errors: errors2
        } = dataRouterState;
        let needsToRunLoader = match.route.loader && loaderData[match.route.id] === void 0 && (!errors2 || errors2[match.route.id] === void 0);
        if (match.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : void 0;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          warningOnce("route-fallback");
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        children = /* @__PURE__ */ reactExports.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
        match,
        routeContext: {
          outlet,
          matches: matches2,
          isDataRoute: dataRouterState != null
        },
        children
      });
    };
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches: matches2,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook$1 = /* @__PURE__ */ function(DataRouterHook2) {
  DataRouterHook2["UseBlocker"] = "useBlocker";
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
  DataRouterHook2["UseNavigateStable"] = "useNavigate";
  return DataRouterHook2;
}(DataRouterHook$1 || {});
var DataRouterStateHook$1 = /* @__PURE__ */ function(DataRouterStateHook2) {
  DataRouterStateHook2["UseBlocker"] = "useBlocker";
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook2["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook2["UseRouteId"] = "useRouteId";
  return DataRouterStateHook2;
}(DataRouterStateHook$1 || {});
function useDataRouterContext(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  !ctx ? invariant(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  !state ? invariant(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports.useContext(RouteContext);
  !route ? invariant(false) : void 0;
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext();
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? invariant(false) : void 0;
  return thisRoute.route.id;
}
function useRouteError() {
  var _state$errors;
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
  if (error !== void 0) {
    return error;
  }
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook$1.UseNavigateStable);
  let id2 = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable);
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to2, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current) return;
    if (typeof to2 === "number") {
      router.navigate(to2);
    } else {
      router.navigate(to2, _extends$2({
        fromRouteId: id2
      }, options));
    }
  }, [router, id2]);
  return navigate;
}
const alreadyWarned$1 = {};
function warningOnce(key, cond, message) {
  if (!alreadyWarned$1[key]) {
    alreadyWarned$1[key] = true;
  }
}
function logV6DeprecationWarnings(renderFuture, routerFuture) {
  if ((renderFuture == null ? void 0 : renderFuture.v7_startTransition) === void 0) ;
  if ((renderFuture == null ? void 0 : renderFuture.v7_relativeSplatPath) === void 0 && true) ;
}
function Route(_props) {
  invariant(false);
}
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = false,
    future
  } = _ref5;
  !!useInRouterContext() ? invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp,
    future: _extends$2({
      v7_relativeSplatPath: false
    }, future)
  }), [basename, future, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
    children,
    value: locationContext
  }));
}
function Routes(_ref6) {
  let {
    children,
    location
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location);
}
new Promise(() => {
});
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  reactExports.Children.forEach(children, (element, index) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === reactExports.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ? invariant(false) : void 0;
    !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}
/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
const _excluded$1 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"];
const REACT_ROUTER_VERSION = "6";
try {
  window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e) {
}
const START_TRANSITION = "startTransition";
const startTransitionImpl = React[START_TRANSITION];
function HashRouter(_ref5) {
  let {
    basename,
    children,
    future,
    window: window2
  } = _ref5;
  let historyRef = reactExports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createHashHistory({
      window: window2,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = reactExports.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = reactExports.useCallback((newState) => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  reactExports.useLayoutEffect(() => history.listen(setState), [history, setState]);
  reactExports.useEffect(() => logV6DeprecationWarnings(future), [future]);
  return /* @__PURE__ */ reactExports.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future
  });
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const Link = /* @__PURE__ */ reactExports.forwardRef(function LinkWithRef(_ref7, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace: replace2,
    state,
    target,
    to: to2,
    preventScrollReset,
    viewTransition
  } = _ref7, rest = _objectWithoutPropertiesLoose$1(_ref7, _excluded$1);
  let {
    basename
  } = reactExports.useContext(NavigationContext);
  let absoluteHref;
  let isExternal = false;
  if (typeof to2 === "string" && ABSOLUTE_URL_REGEX.test(to2)) {
    absoluteHref = to2;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to2.startsWith("//") ? new URL(currentUrl.protocol + to2) : new URL(to2);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to2 = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
      }
    }
  }
  let href = useHref(to2, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to2, {
    replace: replace2,
    state,
    target,
    preventScrollReset,
    relative,
    viewTransition
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ reactExports.createElement("a", _extends$1({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref,
      target
    }))
  );
});
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmit"] = "useSubmit";
  DataRouterHook2["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook2["UseFetcher"] = "useFetcher";
  DataRouterHook2["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetcher"] = "useFetcher";
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function useLinkClickHandler(to2, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    viewTransition
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to2, {
    relative
  });
  return reactExports.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to2, {
        replace: replace2,
        state,
        preventScrollReset,
        relative,
        viewTransition
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to2, preventScrollReset, relative, viewTransition]);
}
function ScrollToTop() {
  const { pathname } = useLocation();
  reactExports.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function toggleMenu() {
  const menu = document.querySelector(".nav-menu");
  menu.classList.toggle("active");
}
function closeMenu() {
  const menu = document.querySelector(".nav-menu");
  menu.classList.remove("active");
}
function Header() {
  const location = useLocation();
  const getLinkStyle = (path) => {
    return location.pathname === path ? { color: "#AC8205", textDecoration: "underline", textUnderlineOffset: "1dvh" } : { color: "#1B2A41" };
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "nav-name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", role: "button", children: "Ben Anthony Minervino" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hamburger", onClick: toggleMenu, children: "≡" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "nav-menu", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", style: getLinkStyle("/"), role: "button", onClick: closeMenu, children: "Home" }),
        " "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", style: getLinkStyle("/about"), role: "button", onClick: closeMenu, children: "About Me" }),
        " "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/resume", style: getLinkStyle("/resume"), role: "button", onClick: closeMenu, children: "Resume" }),
        " "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", style: getLinkStyle("/projects"), role: "button", onClick: closeMenu, children: "Projects" }),
        " "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", style: getLinkStyle("/contact"), role: "button", onClick: closeMenu, children: "Contact" }),
        " "
      ] })
    ] })
  ] });
}
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = i.createContext && /* @__PURE__ */ i.createContext(DefaultContext);
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r2) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty(e, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t2) {
  var i2 = _toPrimitive(t2, "string");
  return "symbol" == typeof i2 ? i2 : i2 + "";
}
function _toPrimitive(t2, r2) {
  if ("object" != typeof t2 || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i2 = e.call(t2, r2);
    if ("object" != typeof i2) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i$1) => /* @__PURE__ */ i.createElement(node.tag, _objectSpread({
    key: i$1
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ i.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ i.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ i.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ i.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
function FiGithub(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }, "child": [] }] })(props);
}
function FiInstagram(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "rect", "attr": { "x": "2", "y": "2", "width": "20", "height": "20", "rx": "5", "ry": "5" }, "child": [] }, { "tag": "path", "attr": { "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }, "child": [] }, { "tag": "line", "attr": { "x1": "17.5", "y1": "6.5", "x2": "17.51", "y2": "6.5" }, "child": [] }] })(props);
}
function FiLinkedin(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }, "child": [] }, { "tag": "rect", "attr": { "x": "2", "y": "9", "width": "4", "height": "12" }, "child": [] }, { "tag": "circle", "attr": { "cx": "4", "cy": "4", "r": "2" }, "child": [] }] })(props);
}
function FiMail(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }, "child": [] }, { "tag": "polyline", "attr": { "points": "22,6 12,13 2,6" }, "child": [] }] })(props);
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "copyright", children: "© 2024 Ben Anthony Minervino. All rights reserved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footerLinks", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/in/ba-minervino", target: "_blank", "aria-label": "Opens in a new tab", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FiLinkedin, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/minerv.51/", target: "_blank", "aria-label": "Opens in a new tab", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FiInstagram, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/minerv51", target: "_blank", "aria-label": "Opens in a new tab", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FiGithub, {}) })
    ] })
  ] });
}
const portrait = "" + new URL("IMG_2663_transparent-BEzBXXrQ.png", import.meta.url).href;
function HeroBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "heroBanner", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bannerText", role: "contentinfo", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Hi, I'm Ben Anthony Minervino" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "BComm Student ● Ted Rogers School of Management" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A Business Technology Management student studying at Toronto Metropolitan University. With a passion for technology and a strong entrepreneurial and analytical mindset, I’m driven to build a career that bridges business and tech, with interests in artificial intelligence, software development, game development, and finance." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/resume", role: "button", children: "See My Resume" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "heroImage", src: portrait, alt: "A portrait of a man with slicked back dark hair, a trimmed beard, wearing a light blue-green shirt with a transparent bacground.", loading: "lazy" })
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroBanner, {}) });
}
const aboutImage = "" + new URL("IMG_0919-DxwEVz3q.png", import.meta.url).href;
function Intro() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "introSection", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "introSectTitle", children: "About Me" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aboutMe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "introBody", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "segmentTitle", children: "Introduction" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "introText", children: "Hi! My name is Ben Anthony (B.A.) Minervino, I am a 21 year old Business Technology Management student currently attending Toronto Metropolitan University. I am aspiring to achieve a Bachelor of Commerce degree from the Ted Rogers School of Management. When I am not at school, I am either finding new adventures to go in with my friends and girlfriend or I am participating in one of my hobbies; photography, fitness, coding, video games, and watching or playing hockey. I am aspiring to develop a career in both business and technology as I have an entrepreneurial and analytical mindset, which complement my passion for technology. I have significant interests in artificial intelligence, software development, game development and finance. My passions, ambition, and hardworking mindset pushes me to succeed in my endeavors and have an upperhand on the competition." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aboutImage", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { id: "groupImage", src: aboutImage, alt: "A young couple posing for a selfie outdoors in an urban setting. The man, wearing sunglasses and a white sweatshirt with red text, has short dark hair and a trimmed beard. The woman, wearing glasses and a light green sweater, has long brown hair and is smiling gently. The background features a modern building with glass windows and metal panels.", loading: "lazy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contactInfo", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "segmentTitle", children: "Contact Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "linksTable", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "contactRow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { id: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FiMail, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { id: "content", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:baminervino@hotmail.com", target: "_blank", "aria-label": "Opens in a new tab", children: "baminervino@hotmail.com" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "contactRow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { id: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FiLinkedin, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { id: "content", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/in/ba-minervino", target: "_blank", "aria-label": "Opens in a new tab", children: "Ben Anthony Minervino" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "contactRow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { id: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FiInstagram, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { id: "content", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/minerv.51/", target: "_blank", "aria-label": "Opens in a new tab", children: "@minerv.51" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "contactRow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { id: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FiGithub, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { id: "content", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/minerv51", target: "_blank", "aria-label": "Opens in a new tab", children: "minerv51" }) })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
function Education() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "myEdSection", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { id: "titleEd", children: "My Education" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "education", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "highSchool", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Emily Carr Secondary School" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "York Region District School Board" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Ontario Secondary School Diploma (OSSD)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "2017 - 2021" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "university", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: " Toronto Metropolitan University" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Ted Rogers School of Management - Business Technology Management" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Bachelor of Commerce (BComm)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "2021 - Present" })
      ] })
    ] })
  ] });
}
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experience", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "My Experience" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experienceContainer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experienceOne", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "L. Minervini Professional Corporation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Administrative Assistant & Law Clerk" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Permanent Part-Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "March 2017 - Present" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "L. Minervini Professional Corporation is a family-owned business where I have gained almost 8 years of valuable experience. During my time here, I have contributed to various aspects of the business including accounting, marketing, branding, communications, information technology, and law. My work has improved overall efficiency, streamlined operations, and elevated our overall brand image." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experienceTwo", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Natural Visions Landscaping" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "CEO | Founder" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Self-Employed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "May 2022 - September 2024" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Natural Visions Landscaping was the first business I have owned and founded. Through this venture I have gained knowledge and experience on all fronts of business operations such as marketing, branding, sales, accounting, leadership, and money management. I received a $3,000 grant from the City of Vaughan as a sole proprietor for the purpose of gaining startup capital." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experienceThree", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "VividShots Imaging" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "CEO | Founder" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Self-Employed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "November 2023 - February 2024" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "VividShots Imaging was a business I founded as I was pushing myself to increase my knowledge and network. This company specialized in real estate photography and was a way for me to not only increase my business experience but to also increase my connections with other business owners and real estate agents in my area as I worked in commercial real estate photography. Through this venture I refined my photography, photoshop, lightroom, and design skills as my creativity was put to the test in order to capture high quality real estate images for clients." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experienceFour", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Alarm Guard Security Services Inc." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Sales & Account Representative" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Internship" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "October 2023 - December 2023" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While working for Alarm Guard as a Sales & Account Representative I conducted direct client acquisition as well as cultivating and managing relationships with clients across Toronto. This role honed my ability to manage client accounts effectively, build beneficial relationships with prospective clients, and turn those prospects into sales." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experienceFive", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "T & F Sales" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Product Merchandiser" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Permanent Part-Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "November 2022 - April 2023" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At T & F Sales, I gained B2B experience as a product merchandiser, introducing a new understnading of supplier-retailer relationships and strong communication strategies that would maximize sales. This role strenghted my communication skills, expanded my network, and gave me a first-hand experience into the management operations of various department stores across Ontario." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {})
      ] })
    ] })
  ] });
}
function FaCss3Alt(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 384 512" }, "child": [{ "tag": "path", "attr": { "d": "M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" }, "child": [] }] })(props);
}
function FaCss3(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z" }, "child": [] }] })(props);
}
function FaHtml5(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 384 512" }, "child": [{ "tag": "path", "attr": { "d": "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" }, "child": [] }] })(props);
}
function FaPython(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" }, "child": [] }] })(props);
}
function FaReact(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" }, "child": [] }] })(props);
}
function FaChalkboardTeacher(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 640 512" }, "child": [{ "tag": "path", "attr": { "d": "M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z" }, "child": [] }] })(props);
}
function FaChartBar(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" }, "child": [] }] })(props);
}
function FaComments(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 576 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z" }, "child": [] }] })(props);
}
function FaDatabase(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z" }, "child": [] }] })(props);
}
function FaHandshake(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 640 512" }, "child": [{ "tag": "path", "attr": { "d": "M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z" }, "child": [] }] })(props);
}
function FaLaptopCode(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 640 512" }, "child": [{ "tag": "path", "attr": { "d": "M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z" }, "child": [] }] })(props);
}
function FaLightbulb(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 352 512" }, "child": [{ "tag": "path", "attr": { "d": "M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z" }, "child": [] }] })(props);
}
function FaPuzzlePiece(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 576 512" }, "child": [{ "tag": "path", "attr": { "d": "M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z" }, "child": [] }] })(props);
}
function FaRecycle(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M184.561 261.903c3.232 13.997-12.123 24.635-24.068 17.168l-40.736-25.455-50.867 81.402C55.606 356.273 70.96 384 96.012 384H148c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12H96.115c-75.334 0-121.302-83.048-81.408-146.88l50.822-81.388-40.725-25.448c-12.081-7.547-8.966-25.961 4.879-29.158l110.237-25.45c8.611-1.988 17.201 3.381 19.189 11.99l25.452 110.237zm98.561-182.915l41.289 66.076-40.74 25.457c-12.051 7.528-9 25.953 4.879 29.158l110.237 25.45c8.672 1.999 17.215-3.438 19.189-11.99l25.45-110.237c3.197-13.844-11.99-24.719-24.068-17.168l-40.687 25.424-41.263-66.082c-37.521-60.033-125.209-60.171-162.816 0l-17.963 28.766c-3.51 5.62-1.8 13.021 3.82 16.533l33.919 21.195c5.62 3.512 13.024 1.803 16.536-3.817l17.961-28.743c12.712-20.341 41.973-19.676 54.257-.022zM497.288 301.12l-27.515-44.065c-3.511-5.623-10.916-7.334-16.538-3.821l-33.861 21.159c-5.62 3.512-7.33 10.915-3.818 16.536l27.564 44.112c13.257 21.211-2.057 48.96-27.136 48.96H320V336.02c0-14.213-17.242-21.383-27.313-11.313l-80 79.981c-6.249 6.248-6.249 16.379 0 22.627l80 79.989C302.689 517.308 320 510.3 320 495.989V448h95.88c75.274 0 121.335-82.997 81.408-146.88z" }, "child": [] }] })(props);
}
function FaRocket(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z" }, "child": [] }] })(props);
}
function FaShieldAlt(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z" }, "child": [] }] })(props);
}
function FaUserTie(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z" }, "child": [] }] })(props);
}
function FaRegClock(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" }, "child": [] }] })(props);
}
function SiFigma(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" }, "child": [] }] })(props);
}
function SiGithub(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }, "child": [] }] })(props);
}
function SiNpm(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" }, "child": [] }] })(props);
}
function SiReact(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" }, "child": [] }] })(props);
}
function SiTableau(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M11.654.174V2.377H9.682v.58h1.972V5.16h.696V2.957h1.97v-.58h-1.97V.174h-.348zm6.03 2.262l-.002 1.623v1.623h-2.957v.927h2.957v3.188H18.725l.011-1.582.02-1.576 1.465-.02 1.46-.01v-.927H18.728V2.436h-.522zm-12.407.06V5.686H2.291v.925H5.277V9.801h.985V6.61h3.013v-.925H6.262V2.496H5.77zm6.086 5.27v3.593H8.06v1.188h3.304v3.596h1.28v-3.596H15.953v-1.188H12.643V7.766h-.637zm9.721 1.55v2.221h-2.012v.811h2.012v2.261h.887v-2.261H24v-.811h-2.029V9.317h-.422zm-19.111.131V11.621H0v.621H1.973v2.194H2.64v-2.194h2v-.62H2.609V9.446h-.318zm15.709 4.516v3.254h-3.016v.927h3.016v3.217h1.072v-3.216H21.74v-.928H18.754v-3.254h-.533zm-12.463.008v3.246H2.262v.928h2.957v3.189H6.32v-3.189h2.955v-.928H6.32V13.97h-.55zm6.316 4.578l.002 1.103v1.1H9.566v.812h1.971v2.262h.928l.012-1.119.017-1.143H14.463v-.812h-2V18.549h-.465z" }, "child": [] }] })(props);
}
function SiVercel(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M24 22.525H0l12-21.05 12 21.05z" }, "child": [] }] })(props);
}
function SiVite(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" }, "child": [] }] })(props);
}
function PiMicrosoftExcelLogoFill(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 256 256", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "d": "M200,24H72A16,16,0,0,0,56,40V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H56v24a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM72,160a8,8,0,0,1-6.15-13.12L81.59,128,65.85,109.12a8,8,0,0,1,12.3-10.24L92,115.5l13.85-16.62a8,8,0,1,1,12.3,10.24L102.41,128l15.74,18.88a8,8,0,0,1-12.3,10.24L92,140.5,78.15,157.12A8,8,0,0,1,72,160Zm56,56H72V192h56Zm0-152H72V40h56Zm72,152H144V192a16,16,0,0,0,16-16v-8h40Zm0-64H160V104h40Zm0-64H160V80a16,16,0,0,0-16-16V40h56Z" }, "child": [] }] })(props);
}
function PiMicrosoftPowerpointLogoFill(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 256 256", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "d": "M136,24A104.33,104.33,0,0,0,54,64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H54A104,104,0,1,0,136,24ZM72,152V104a8,8,0,0,1,8-8H96a24,24,0,0,1,0,48H88v8a8,8,0,0,1-16,0Zm56,63.63A88.36,88.36,0,0,1,75.63,192H128ZM128,64H75.63A88.36,88.36,0,0,1,128,40.37Zm16-23.63A88.13,88.13,0,0,1,223.63,120H160V80a16,16,0,0,0-16-16Zm0,175.26V192a16,16,0,0,0,16-16V136h63.63A88.13,88.13,0,0,1,144,215.63ZM96,128H88V112h8a8,8,0,0,1,0,16Z" }, "child": [] }] })(props);
}
function MySkills2() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mySkills2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { id: "skillTitle", children: "My Technical Skills" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillList", id: "technicalSkillList", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaHtml5, { size: 150, color: "#1B2A41", title: "HTML5", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "HTML 5" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaCss3, { size: 150, color: "#1B2A41", title: "CSS3", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "CSS 3" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaReact, { size: 150, color: "#1B2A41", title: "React", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "React.js" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaLaptopCode, { size: 150, color: "#1B2A41", title: "Front-End Web Development", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Front-End" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Web Development" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaPython, { size: 150, color: "#1B2A41", title: "Python", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Python" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SiTableau, { size: 150, color: "#1B2A41", title: "Tableau", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Tableau" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaDatabase, { size: 150, color: "#1B2A41", title: "SQL", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Database" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Management" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaChartBar, { size: 150, color: "#1B2A41", title: "Data Analysis", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Data Analysis" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PiMicrosoftExcelLogoFill, { size: 150, color: "#1B2A41", title: "Microsoft Excel", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Microsoft Excel" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PiMicrosoftPowerpointLogoFill, { size: 150, color: "#1B2A41", title: "Microsoft PowerPoint", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Microsoft PowerPoint" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { id: "skillTitle", children: "My Interpersonal Skills" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillList", id: "interpersonalSkillList", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaComments, { size: 150, color: "#1B2A41", title: "Communication", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Communication" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaRecycle, { size: 150, color: "#1B2A41", title: "Adaptability", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Adaptability" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaChalkboardTeacher, { size: 150, color: "#1B2A41", title: "Leadership", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Leadership" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaPuzzlePiece, { size: 150, color: "#1B2A41", title: "Problem Solving", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Problem Solving" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaRegClock, { size: 150, color: "#1B2A41", title: "Time Management", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Time Management" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaHandshake, { size: 150, color: "#1B2A41", title: "Collaboration", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Collaboration" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaLightbulb, { size: 150, color: "#1B2A41", title: "Crtical Thinking", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Critical Thinking" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaUserTie, { size: 150, color: "#1B2A41", title: "Customer Relationship Management", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Customer Relationship" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Management" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaShieldAlt, { size: 150, color: "#1B2A41", title: "Reliability", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Reliability" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skillContainer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaRocket, { size: 150, color: "#1B2A41", title: "Entrepreneurship", className: "icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "iconText", children: "Entrepreneurship" })
      ] })
    ] })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.StrictMode, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Intro, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MySkills2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Education, {})
  ] });
}
function ResumeSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "resumeSection", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "resumeTitle", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "My Resume" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Below, you can view an online copy of my resume and download a PDF version using the button at the bottom of the page." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "resumeFile", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        className: "iframe",
        src: "https://drive.google.com/file/d/1NSTrvCQE1tB7tW77dBftIZVSHUa0J2nR/preview",
        title: "Resume Preview"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "resumeDownload", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/resume.pdf", download: "baminervino_resume.pdf", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { id: "downloadButton", children: "Download Resume" }) }) })
  ] });
}
function Resume() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResumeSection, {}) });
}
function Portfolio() {
  const [activeTab, setActiveTab] = reactExports.useState("coding");
  const [linkText, setLinkText] = reactExports.useState("Visit Site");
  const professionalImages = [
    { src: "professional1.jpg", alt: "A professionally done side profile picture of a man with a clean appearance, wearing a black collared shirt, he is looking to the left, with a white background." },
    { src: "professional2.jpg", alt: "A professionally done portrait of a man dressed in a black suit, and shirt, slightly smiling at the camera." },
    { src: "professional3.jpg", alt: "A professionally done headshot of a mean dressed in a black suit, and white shirt, slightly smiling at the camera." }
  ];
  const creativeImages = [
    { src: "creative1.jpg", alt: "A vibrant yellow sunflower, standing under a bright sky with scattered clouds." },
    { src: "creative2.jpg", alt: "A marsh with a calm body of water covered in floating lily pads, surrounded by grass and a forest." },
    { src: "creative3.jpg", alt: "A close-up view of the Eiffel Tower against a backdrop of a clear sky and the sunset." },
    { src: "creative4.jpg", alt: "A woman with curly dark hair, dressed in a lace top, standing in front of a statue surrounded by greenery." },
    { src: "creative5.jpg", alt: "A street performed holds a torch in his outstretched hand, while the crowd behind him is amused." },
    { src: "creative6.jpg", alt: "A dining room with arched windows offering a scenic view of the Italian countryside, the room contains white tablecloths and chairs." },
    { src: "creative7.jpg", alt: "A soccer field surrounded by trees with bright fall leaves in various shades of orange, red, and yellow." },
    { src: "creative8.jpg", alt: "An ancient Roman courtyard in Pompeii with a row of weathered stone columns and a clear sky in the background." },
    { src: "creative9.jpg", alt: "A small chipmunk on a moss covered rock, inside of a forest." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "portfolio", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "portfolioTabs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "tabButton",
          "aria-selected": activeTab === "coding",
          onClick: () => setActiveTab("coding"),
          children: "Coding"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "tabButton",
          "aria-selected": activeTab === "photography",
          onClick: () => setActiveTab("photography"),
          children: "Photography"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "tabButton",
          "aria-selected": activeTab === "other",
          onClick: () => setActiveTab("other"),
          children: "Other"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "portfolioContent", children: [
      activeTab === "coding" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "codingCards", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "siteCard", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Personal Portfolio Website" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: portrait,
            id: "portfolioLogo",
            alt: "A portrait of a man with slicked back dark hair, a trimmed beard, wearing a light blue-green shirt with a transparent bacground."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/portfolioSiteInfo",
            role: "button",
            className: "visitSiteButton",
            children: "Learn More"
          }
        )
      ] }) }) }),
      activeTab === "photography" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "photographyCards", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "professionalPortraits", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Professional Portraits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "professionalGallery", children: professionalImages.map((photo, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: photo.src,
              alt: photo.alt,
              className: "thumbnail",
              loading: "lazy"
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "professionalPortraits", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Creative Photography" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "professionalGallery", children: creativeImages.map((photo, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: photo.src,
              alt: photo.alt,
              className: "thumbnail",
              loading: "lazy"
            },
            index
          )) })
        ] })
      ] }),
      activeTab === "other" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "otherCards", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Other Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Other Projects Are Coming Soon!" })
      ] })
    ] })
  ] });
}
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Portfolio, {}) });
}
const store = {
  _origin: "https://api.emailjs.com"
};
const init = (userID, origin = "https://api.emailjs.com") => {
  store._userID = userID;
  store._origin = origin;
};
const validateParams = (userID, serviceID, templateID) => {
  if (!userID) {
    throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
  }
  if (!serviceID) {
    throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
  }
  if (!templateID) {
    throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  }
  return true;
};
class EmailJSResponseStatus {
  constructor(httpResponse) {
    this.status = httpResponse.status;
    this.text = httpResponse.responseText;
  }
}
const sendPost = (url, data, headers = {}) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", ({ target }) => {
      const responseStatus = new EmailJSResponseStatus(target);
      if (responseStatus.status === 200 || responseStatus.text === "OK") {
        resolve(responseStatus);
      } else {
        reject(responseStatus);
      }
    });
    xhr.addEventListener("error", ({ target }) => {
      reject(new EmailJSResponseStatus(target));
    });
    xhr.open("POST", store._origin + url, true);
    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key]);
    });
    xhr.send(data);
  });
};
const send = (serviceID, templateID, templatePrams, userID) => {
  const uID = userID || store._userID;
  validateParams(uID, serviceID, templateID);
  const params = {
    lib_version: "3.2.0",
    user_id: uID,
    service_id: serviceID,
    template_id: templateID,
    template_params: templatePrams
  };
  return sendPost("/api/v1.0/email/send", JSON.stringify(params), {
    "Content-type": "application/json"
  });
};
const findHTMLForm = (form) => {
  let currentForm;
  if (typeof form === "string") {
    currentForm = document.querySelector(form);
  } else {
    currentForm = form;
  }
  if (!currentForm || currentForm.nodeName !== "FORM") {
    throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
  }
  return currentForm;
};
const sendForm = (serviceID, templateID, form, userID) => {
  const uID = userID || store._userID;
  const currentForm = findHTMLForm(form);
  validateParams(uID, serviceID, templateID);
  const formData = new FormData(currentForm);
  formData.append("lib_version", "3.2.0");
  formData.append("service_id", serviceID);
  formData.append("template_id", templateID);
  formData.append("user_id", uID);
  return sendPost("/api/v1.0/email/send-form", formData);
};
const emailjs = {
  init,
  send,
  sendForm
};
const emailConfig = {
  serviceID: "service_bdjriwc",
  templateID: "template_bvdkeiz",
  publicKey: "gozucmIRgp5AUl6hx"
};
const ContactForm = () => {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    phoneNum: "",
    company: "",
    reason: "placeholder",
    referral: "referralPlace",
    message: "",
    consent: false
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      emailConfig.serviceID,
      // Service ID
      emailConfig.templateID,
      // Template ID
      formData,
      // Form data to send
      emailConfig.publicKey
      // Public Key
    ).then(
      (result) => {
        console.log("Email successfully sent:", result.text);
        alert("Your message has been sent!");
        setFormData({
          name: "",
          email: "",
          phoneNum: "",
          company: "",
          contactMethod: "Email",
          reason: "placeholder",
          referral: "referralPlace",
          message: "",
          consent: false
        });
      },
      (error) => {
        console.error("Failed to send email:", error.text);
        alert("Failed to send your message. Please try again.");
      }
    );
  };
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phoneNum: "",
      company: "",
      reason: "placeholder",
      referral: "referralPlace",
      message: "",
      consent: false
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contactForm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "altFormTitle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Get In Touch" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("form", { className: "form", onSubmit: handleSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "client-info-inputs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { id: "formTitle", children: "Get In Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, id: "name", type: "text", name: "name", placeholder: "Full-Name", value: formData.name, onChange: handleChange }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "emailPhoneNum", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, id: "email", type: "email", name: "email", placeholder: "Email", value: formData.email, onChange: handleChange }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, id: "phoneNum", type: "number", name: "phoneNum", placeholder: "Phone Number", value: formData.phoneNum, onChange: handleChange })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "companyName", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "company", type: "text", name: "company", placeholder: "Company", value: formData.company, onChange: handleChange }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reason", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, id: "reason", name: "reason", placeholder: "Reason for Contact", value: formData.reason, onChange: handleChange, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "placeholder", children: "Reason for Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "inquiry", children: "General Inquiry" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "job", children: "Job Opportunity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "feedback", children: "Feedback" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "referral", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, id: "referral", name: "referral", value: formData.referral, onChange: handleChange, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "referralPlace", children: "How Did You Hear About Me?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "linkedin", children: "LinkedIn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "instagram", children: "Instagram" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "friend/colleague", children: "Friend/Colleague" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "search", children: "Search Engine" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "message", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          required: true,
          id: "message",
          name: "message",
          rows: "4",
          placeholder: "Have A Question or Comment? Get In Touch!",
          value: formData.message,
          onChange: handleChange
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "consent-button", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "consent", children: "I agree to be contacted for a follow-up" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name: "consent", checked: formData.consent, onChange: handleChange, type: "checkbox", id: "cbx2", style: { display: "none" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "cbx2", className: "check", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "18px", height: "18px", viewBox: "0 0 18 18", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "1 9 7 14 15 4" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "submit-reset", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "submit", type: "submit", value: "Submit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "reset", type: "button", value: "Reset", onClick: handleReset })
      ] })
    ] }) })
  ] });
};
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}) });
}
function BiLogoVisualStudio(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "m21.29 4.1-4.12-2a1.36 1.36 0 0 0-.48-.1h-.08a1.18 1.18 0 0 0-.72.24l-.14.12-7.88 7.19L4.44 7a.83.83 0 0 0-.54-.17.88.88 0 0 0-.53.17l-1.1 1a.8.8 0 0 0-.27.61.84.84 0 0 0 .27.62l3 2.71-3 2.72a.84.84 0 0 0 0 1.23l1.1 1a.89.89 0 0 0 .6.22.93.93 0 0 0 .47-.17l3.43-2.61 7.88 7.19a1.2 1.2 0 0 0 .76.36h.17a1 1 0 0 0 .49-.12l4.12-2a1.25 1.25 0 0 0 .71-1.1V5.23a1.26 1.26 0 0 0-.71-1.13zM17 16.47l-6-4.53 6-4.53z" }, "child": [] }] })(props);
}
function portfolioSiteInfo$1() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "portfolioSiteInfo", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "titleBlock", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { id: "pageTitle", children: "Under the Hood: The Tech Behind My Portfolio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "pageSubtitle", children: "Explore the tools, technologies, and processes behind my personal portfolio website" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "githubBlock", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { id: "githubLink", href: "https://github.com/minerv51/personalPortfolio", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btnGithub", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z",
              fill: "currentcolor"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View Code on Github" })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "infoBlock", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Tools & Technologies" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "techStack", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "techStackSection", id: "frontendTech", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Frontend Technologies" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "techStackList", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "techContainer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "stackItem", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiReact, { size: 200, color: "#1B2A41", title: "React.js", className: "icon" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "techText", children: [
                "React.js ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "React, a JavaScript library for building user interfaces, served as the framework for this website's UI."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "techContainer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "stackItem", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaHtml5, { size: 200, color: "#1B2A41", title: "HTML5", className: "icon" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "techText", children: [
                "HTML ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "HTML5, the latest version of the HTML standard, was used to structure the content of this website."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "techContainer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "stackItem", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaCss3Alt, { size: 200, color: "#1B2A41", title: "CSS3", className: "icon" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "techText", children: [
                "CSS ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "CSS3, the latest version of the CSS standard, was used to style the content of this website."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "techStackSection", id: "hostingTech", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Hosting & Deployment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "techStackList", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "techContainer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "stackItem", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiVercel, { size: 200, color: "#1B2A41", title: "Vercel", className: "icon" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "techText", children: [
                "Vercel ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Vercel, a cloud platform for static sites and serverless functions, was used to host and deploy this website."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "techContainer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "stackItem", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiGithub, { size: 200, color: "#1B2A41", title: "Github", className: "icon" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "techText", children: [
                "GitHub ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "GitHub, a web-based version control platform, was used to store and manage the code for this website."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "techContainer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "stackItem", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "auto",
                  height: "200",
                  viewBox: "-5.728 -8.5 49.639 51",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      fill: "#1B2A41",
                      d: "M32.937 1.554c-3.968-2.48-9.193-1.889-13.852 1.039C14.44-.335 9.213-.925 5.25 1.553c-6.27 3.919-7.032 14.01-1.701 22.54 3.93 6.289 10.074 9.974 15.544 9.906 5.47.068 11.615-3.617 15.545-9.906 5.324-8.53 4.568-18.621-1.701-22.54M6.43 22.292a20.4 20.4 0 0 1-2.46-5.632 16.1 16.1 0 0 1-.534-5.31c.238-3.153 1.521-5.608 3.612-6.914s4.855-1.385 7.8-.217q.661.266 1.312.606a24 24 0 0 0-4.227 5.081c-3.237 5.18-4.224 10.942-3.095 15.537a21 21 0 0 1-2.408-3.151m27.786-5.634a20.5 20.5 0 0 1-2.46 5.632 21 21 0 0 1-2.408 3.158c1.01-4.12.323-9.165-2.153-13.897a.625.625 0 0 0-.895-.243l-7.72 4.823a.63.63 0 0 0-.2.87l1.133 1.811a.63.63 0 0 0 .869.2l5.004-3.126c.162.486.324.971.445 1.457a16.1 16.1 0 0 1 .536 5.303c-.238 3.151-1.522 5.606-3.612 6.914a7.06 7.06 0 0 1-3.579 1.036h-.16a7.05 7.05 0 0 1-3.578-1.036c-2.093-1.308-3.376-3.763-3.614-6.914a16.1 16.1 0 0 1 .534-5.31 21 21 0 0 1 6.444-10.314 16.1 16.1 0 0 1 4.532-2.806c2.936-1.168 5.705-1.09 7.797.217 2.093 1.308 3.375 3.76 3.612 6.914a16.2 16.2 0 0 1-.527 5.311"
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "techText", children: [
                "GoDaddy ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "GoDaddy, a domain registrar and web hosting company, was used to purchase the domain for this website."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "techStackSection", id: "formHandlingTech", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Form Handling & APIs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "techStackList", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "techContainer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "stackItem", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                className: "emailJSLogo",
                viewBox: "0 0 510.88 512",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "rect",
                    {
                      width: "240.31",
                      height: "240.31",
                      x: "270.57",
                      fill: "inherit",
                      rx: "24"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      fill: "inherit",
                      d: "M215.12 254.73V68.5a29.16 29.16 0 0 0-8.55-20.64 29.19 29.19 0 0 0-41.28 0L16.18 197a55.27 55.27 0 0 0 0 78.14l220.71 220.68a55.27 55.27 0 0 0 78.14 0l149.11-149.11a29.19 29.19 0 0 0 0-41.28l-1.14-1.12a29.16 29.16 0 0 0-20.64-8.55H256.15a41 41 0 0 1-41.03-41.03"
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "techText", children: [
              "EmailJS ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "EmailJS, a cloud-based email service, was used to handle the contact form on this website."
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "techStackSection", id: "developmentTech", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Development Tools" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "techStackList", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "techContainer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "stackItem", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiFigma, { size: 200, color: "#1B2A41", title: "Figma", className: "icon" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "techText", children: [
                "Figma ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Figma, a design and prototyping tool, was used to create the designs and wireframes for this website."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "techContainer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "stackItem", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BiLogoVisualStudio, { size: 200, color: "#1B2A41", title: "VS Code", className: "icon" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "techText", children: [
                "Visual Studio Code ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Visual Studio Code, a source code editor, was used to write and edit the code for this website."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "techContainer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "stackItem", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiVite, { size: 200, color: "#1B2A41", title: "Vite", className: "icon" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "techText", children: [
                "Vite ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Vite, a build tool for modern web development, was used to bundle the code for this website."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "techContainer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "stackItem", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiNpm, { size: 200, color: "#1B2A41", title: "npm", className: "icon" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "techText", children: [
                "npm ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "npm, a package manager for JavaScript, was used to manage the dependencies for this website."
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
var define_process_env_default = {};
function v(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var y = { exports: {} }, w = {}, b = { exports: {} }, x = {};
function C() {
  var e2 = { "align-content": false, "align-items": false, "align-self": false, "alignment-adjust": false, "alignment-baseline": false, all: false, "anchor-point": false, animation: false, "animation-delay": false, "animation-direction": false, "animation-duration": false, "animation-fill-mode": false, "animation-iteration-count": false, "animation-name": false, "animation-play-state": false, "animation-timing-function": false, azimuth: false, "backface-visibility": false, background: true, "background-attachment": true, "background-clip": true, "background-color": true, "background-image": true, "background-origin": true, "background-position": true, "background-repeat": true, "background-size": true, "baseline-shift": false, binding: false, bleed: false, "bookmark-label": false, "bookmark-level": false, "bookmark-state": false, border: true, "border-bottom": true, "border-bottom-color": true, "border-bottom-left-radius": true, "border-bottom-right-radius": true, "border-bottom-style": true, "border-bottom-width": true, "border-collapse": true, "border-color": true, "border-image": true, "border-image-outset": true, "border-image-repeat": true, "border-image-slice": true, "border-image-source": true, "border-image-width": true, "border-left": true, "border-left-color": true, "border-left-style": true, "border-left-width": true, "border-radius": true, "border-right": true, "border-right-color": true, "border-right-style": true, "border-right-width": true, "border-spacing": true, "border-style": true, "border-top": true, "border-top-color": true, "border-top-left-radius": true, "border-top-right-radius": true, "border-top-style": true, "border-top-width": true, "border-width": true, bottom: false, "box-decoration-break": true, "box-shadow": true, "box-sizing": true, "box-snap": true, "box-suppress": true, "break-after": true, "break-before": true, "break-inside": true, "caption-side": false, chains: false, clear: true, clip: false, "clip-path": false, "clip-rule": false, color: true, "color-interpolation-filters": true, "column-count": false, "column-fill": false, "column-gap": false, "column-rule": false, "column-rule-color": false, "column-rule-style": false, "column-rule-width": false, "column-span": false, "column-width": false, columns: false, contain: false, content: false, "counter-increment": false, "counter-reset": false, "counter-set": false, crop: false, cue: false, "cue-after": false, "cue-before": false, cursor: false, direction: false, display: true, "display-inside": true, "display-list": true, "display-outside": true, "dominant-baseline": false, elevation: false, "empty-cells": false, filter: false, flex: false, "flex-basis": false, "flex-direction": false, "flex-flow": false, "flex-grow": false, "flex-shrink": false, "flex-wrap": false, float: false, "float-offset": false, "flood-color": false, "flood-opacity": false, "flow-from": false, "flow-into": false, font: true, "font-family": true, "font-feature-settings": true, "font-kerning": true, "font-language-override": true, "font-size": true, "font-size-adjust": true, "font-stretch": true, "font-style": true, "font-synthesis": true, "font-variant": true, "font-variant-alternates": true, "font-variant-caps": true, "font-variant-east-asian": true, "font-variant-ligatures": true, "font-variant-numeric": true, "font-variant-position": true, "font-weight": true, grid: false, "grid-area": false, "grid-auto-columns": false, "grid-auto-flow": false, "grid-auto-rows": false, "grid-column": false, "grid-column-end": false, "grid-column-start": false, "grid-row": false, "grid-row-end": false, "grid-row-start": false, "grid-template": false, "grid-template-areas": false, "grid-template-columns": false, "grid-template-rows": false, "hanging-punctuation": false, height: true, hyphens: false, icon: false, "image-orientation": false, "image-resolution": false, "ime-mode": false, "initial-letters": false, "inline-box-align": false, "justify-content": false, "justify-items": false, "justify-self": false, left: false, "letter-spacing": true, "lighting-color": true, "line-box-contain": false, "line-break": false, "line-grid": false, "line-height": false, "line-snap": false, "line-stacking": false, "line-stacking-ruby": false, "line-stacking-shift": false, "line-stacking-strategy": false, "list-style": true, "list-style-image": true, "list-style-position": true, "list-style-type": true, margin: true, "margin-bottom": true, "margin-left": true, "margin-right": true, "margin-top": true, "marker-offset": false, "marker-side": false, marks: false, mask: false, "mask-box": false, "mask-box-outset": false, "mask-box-repeat": false, "mask-box-slice": false, "mask-box-source": false, "mask-box-width": false, "mask-clip": false, "mask-image": false, "mask-origin": false, "mask-position": false, "mask-repeat": false, "mask-size": false, "mask-source-type": false, "mask-type": false, "max-height": true, "max-lines": false, "max-width": true, "min-height": true, "min-width": true, "move-to": false, "nav-down": false, "nav-index": false, "nav-left": false, "nav-right": false, "nav-up": false, "object-fit": false, "object-position": false, opacity: false, order: false, orphans: false, outline: false, "outline-color": false, "outline-offset": false, "outline-style": false, "outline-width": false, overflow: false, "overflow-wrap": false, "overflow-x": false, "overflow-y": false, padding: true, "padding-bottom": true, "padding-left": true, "padding-right": true, "padding-top": true, page: false, "page-break-after": false, "page-break-before": false, "page-break-inside": false, "page-policy": false, pause: false, "pause-after": false, "pause-before": false, perspective: false, "perspective-origin": false, pitch: false, "pitch-range": false, "play-during": false, position: false, "presentation-level": false, quotes: false, "region-fragment": false, resize: false, rest: false, "rest-after": false, "rest-before": false, richness: false, right: false, rotation: false, "rotation-point": false, "ruby-align": false, "ruby-merge": false, "ruby-position": false, "shape-image-threshold": false, "shape-outside": false, "shape-margin": false, size: false, speak: false, "speak-as": false, "speak-header": false, "speak-numeral": false, "speak-punctuation": false, "speech-rate": false, stress: false, "string-set": false, "tab-size": false, "table-layout": false, "text-align": true, "text-align-last": true, "text-combine-upright": true, "text-decoration": true, "text-decoration-color": true, "text-decoration-line": true, "text-decoration-skip": true, "text-decoration-style": true, "text-emphasis": true, "text-emphasis-color": true, "text-emphasis-position": true, "text-emphasis-style": true, "text-height": true, "text-indent": true, "text-justify": true, "text-orientation": true, "text-overflow": true, "text-shadow": true, "text-space-collapse": true, "text-transform": true, "text-underline-position": true, "text-wrap": true, top: false, transform: false, "transform-origin": false, "transform-style": false, transition: false, "transition-delay": false, "transition-duration": false, "transition-property": false, "transition-timing-function": false, "unicode-bidi": false, "vertical-align": false, visibility: false, "voice-balance": false, "voice-duration": false, "voice-family": false, "voice-pitch": false, "voice-range": false, "voice-rate": false, "voice-stress": false, "voice-volume": false, volume: false, "white-space": false, widows: false, width: true, "will-change": false, "word-break": true, "word-spacing": true, "word-wrap": true, "wrap-flow": false, "wrap-through": false, "writing-mode": false, "z-index": false };
  return e2;
}
var k = /javascript\s*\:/gim;
x.whiteList = C(), x.getDefaultWhiteList = C, x.onAttr = function(e2, t2, n2) {
}, x.onIgnoreAttr = function(e2, t2, n2) {
}, x.safeAttrValue = function(e2, t2) {
  return k.test(t2) ? "" : t2;
};
var S = { indexOf: function(e2, t2) {
  var n2, i2;
  if (Array.prototype.indexOf) return e2.indexOf(t2);
  for (n2 = 0, i2 = e2.length; n2 < i2; n2++) if (e2[n2] === t2) return n2;
  return -1;
}, forEach: function(e2, t2, n2) {
  var i2, r2;
  if (Array.prototype.forEach) return e2.forEach(t2, n2);
  for (i2 = 0, r2 = e2.length; i2 < r2; i2++) t2.call(n2, e2[i2], i2, e2);
}, trim: function(e2) {
  return String.prototype.trim ? e2.trim() : e2.replace(/(^\s*)|(\s*$)/g, "");
}, trimRight: function(e2) {
  return String.prototype.trimRight ? e2.trimRight() : e2.replace(/(\s*$)/g, "");
} }, T = S;
var $ = function(e2, t2) {
  ";" !== (e2 = T.trimRight(e2))[e2.length - 1] && (e2 += ";");
  var n2 = e2.length, i2 = false, r2 = 0, o2 = 0, a2 = "";
  function s2() {
    if (!i2) {
      var n3 = T.trim(e2.slice(r2, o2)), s3 = n3.indexOf(":");
      if (-1 !== s3) {
        var l3 = T.trim(n3.slice(0, s3)), c3 = T.trim(n3.slice(s3 + 1));
        if (l3) {
          var d2 = t2(r2, a2.length, l3, c3, n3);
          d2 && (a2 += d2 + "; ");
        }
      }
    }
    r2 = o2 + 1;
  }
  for (; o2 < n2; o2++) {
    var l2 = e2[o2];
    if ("/" === l2 && "*" === e2[o2 + 1]) {
      var c2 = e2.indexOf("*/", o2 + 2);
      if (-1 === c2) break;
      r2 = (o2 = c2 + 1) + 1, i2 = false;
    } else "(" === l2 ? i2 = true : ")" === l2 ? i2 = false : ";" === l2 ? i2 || s2() : "\n" === l2 && s2();
  }
  return T.trim(a2);
}, I = x, A = $;
function N(e2) {
  return null == e2;
}
function L(e2) {
  (e2 = function(e3) {
    var t2 = {};
    for (var n2 in e3) t2[n2] = e3[n2];
    return t2;
  }(e2 || {})).whiteList = e2.whiteList || I.whiteList, e2.onAttr = e2.onAttr || I.onAttr, e2.onIgnoreAttr = e2.onIgnoreAttr || I.onIgnoreAttr, e2.safeAttrValue = e2.safeAttrValue || I.safeAttrValue, this.options = e2;
}
L.prototype.process = function(e2) {
  if (!(e2 = (e2 = e2 || "").toString())) return "";
  var t2 = this.options, n2 = t2.whiteList, i2 = t2.onAttr, r2 = t2.onIgnoreAttr, o2 = t2.safeAttrValue, a2 = A(e2, function(e3, t3, a3, s2, l2) {
    var c2 = n2[a3], d2 = false;
    if (true === c2 ? d2 = c2 : "function" == typeof c2 ? d2 = c2(s2) : c2 instanceof RegExp && (d2 = c2.test(s2)), true !== d2 && (d2 = false), s2 = o2(a3, s2)) {
      var u2, h2 = { position: t3, sourcePosition: e3, source: l2, isWhite: d2 };
      return d2 ? N(u2 = i2(a3, s2, h2)) ? a3 + ":" + s2 : u2 : N(u2 = r2(a3, s2, h2)) ? void 0 : u2;
    }
  });
  return a2;
};
var O = L;
!function(e2, t2) {
  var n2 = x, i2 = O;
  for (var r2 in (t2 = e2.exports = function(e3, t3) {
    return new i2(t3).process(e3);
  }).FilterCSS = i2, n2) t2[r2] = n2[r2];
  "undefined" != typeof window && (window.filterCSS = e2.exports);
}(b, b.exports);
var M = b.exports, D = { indexOf: function(e2, t2) {
  var n2, i2;
  if (Array.prototype.indexOf) return e2.indexOf(t2);
  for (n2 = 0, i2 = e2.length; n2 < i2; n2++) if (e2[n2] === t2) return n2;
  return -1;
}, forEach: function(e2, t2, n2) {
  var i2, r2;
  if (Array.prototype.forEach) return e2.forEach(t2, n2);
  for (i2 = 0, r2 = e2.length; i2 < r2; i2++) t2.call(n2, e2[i2], i2, e2);
}, trim: function(e2) {
  return String.prototype.trim ? e2.trim() : e2.replace(/(^\s*)|(\s*$)/g, "");
}, spaceIndex: function(e2) {
  var t2 = /\s|\n|\t/.exec(e2);
  return t2 ? t2.index : -1;
} }, E = M.FilterCSS, R = M.getDefaultWhiteList, H = D;
function P() {
  return { a: ["target", "href", "title"], abbr: ["title"], address: [], area: ["shape", "coords", "href", "alt"], article: [], aside: [], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], b: [], bdi: ["dir"], bdo: ["dir"], big: [], blockquote: ["cite"], br: [], caption: [], center: [], cite: [], code: [], col: ["align", "valign", "span", "width"], colgroup: ["align", "valign", "span", "width"], dd: [], del: ["datetime"], details: ["open"], div: [], dl: [], dt: [], em: [], figcaption: [], figure: [], font: ["color", "size", "face"], footer: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], header: [], hr: [], i: [], img: ["src", "alt", "title", "width", "height", "loading"], ins: ["datetime"], kbd: [], li: [], mark: [], nav: [], ol: [], p: [], pre: [], s: [], section: [], small: [], span: [], sub: [], summary: [], sup: [], strong: [], strike: [], table: ["width", "border", "align", "valign"], tbody: ["align", "valign"], td: ["width", "rowspan", "colspan", "align", "valign"], tfoot: ["align", "valign"], th: ["width", "rowspan", "colspan", "align", "valign"], thead: ["align", "valign"], tr: ["rowspan", "align", "valign"], tt: [], u: [], ul: [], video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"] };
}
var j = new E();
function z(e2) {
  return e2.replace(_, "&lt;").replace(W, "&gt;");
}
var _ = /</g, W = />/g, B = /"/g, F = /&quot;/g, V = /&#([a-zA-Z0-9]*);?/gim, G = /&colon;?/gim, q = /&newline;?/gim, Y = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, U = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, Z = /u\s*r\s*l\s*\(.*/gi;
function X(e2) {
  return e2.replace(B, "&quot;");
}
function J(e2) {
  return e2.replace(F, '"');
}
function K(e2) {
  return e2.replace(V, function(e3, t2) {
    return "x" === t2[0] || "X" === t2[0] ? String.fromCharCode(parseInt(t2.substr(1), 16)) : String.fromCharCode(parseInt(t2, 10));
  });
}
function Q(e2) {
  return e2.replace(G, ":").replace(q, " ");
}
function ee(e2) {
  for (var t2 = "", n2 = 0, i2 = e2.length; n2 < i2; n2++) t2 += e2.charCodeAt(n2) < 32 ? " " : e2.charAt(n2);
  return H.trim(t2);
}
function te(e2) {
  return e2 = ee(e2 = Q(e2 = K(e2 = J(e2))));
}
function ne(e2) {
  return e2 = z(e2 = X(e2));
}
w.whiteList = { a: ["target", "href", "title"], abbr: ["title"], address: [], area: ["shape", "coords", "href", "alt"], article: [], aside: [], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], b: [], bdi: ["dir"], bdo: ["dir"], big: [], blockquote: ["cite"], br: [], caption: [], center: [], cite: [], code: [], col: ["align", "valign", "span", "width"], colgroup: ["align", "valign", "span", "width"], dd: [], del: ["datetime"], details: ["open"], div: [], dl: [], dt: [], em: [], figcaption: [], figure: [], font: ["color", "size", "face"], footer: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], header: [], hr: [], i: [], img: ["src", "alt", "title", "width", "height", "loading"], ins: ["datetime"], kbd: [], li: [], mark: [], nav: [], ol: [], p: [], pre: [], s: [], section: [], small: [], span: [], sub: [], summary: [], sup: [], strong: [], strike: [], table: ["width", "border", "align", "valign"], tbody: ["align", "valign"], td: ["width", "rowspan", "colspan", "align", "valign"], tfoot: ["align", "valign"], th: ["width", "rowspan", "colspan", "align", "valign"], thead: ["align", "valign"], tr: ["rowspan", "align", "valign"], tt: [], u: [], ul: [], video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"] }, w.getDefaultWhiteList = P, w.onTag = function(e2, t2, n2) {
}, w.onIgnoreTag = function(e2, t2, n2) {
}, w.onTagAttr = function(e2, t2, n2) {
}, w.onIgnoreTagAttr = function(e2, t2, n2) {
}, w.safeAttrValue = function(e2, t2, n2, i2) {
  if (n2 = te(n2), "href" === t2 || "src" === t2) {
    if ("#" === (n2 = H.trim(n2))) return "#";
    if ("http://" !== n2.substr(0, 7) && "https://" !== n2.substr(0, 8) && "mailto:" !== n2.substr(0, 7) && "tel:" !== n2.substr(0, 4) && "data:image/" !== n2.substr(0, 11) && "ftp://" !== n2.substr(0, 6) && "./" !== n2.substr(0, 2) && "../" !== n2.substr(0, 3) && "#" !== n2[0] && "/" !== n2[0]) return "";
  } else if ("background" === t2) {
    if (Y.lastIndex = 0, Y.test(n2)) return "";
  } else if ("style" === t2) {
    if (U.lastIndex = 0, U.test(n2)) return "";
    if (Z.lastIndex = 0, Z.test(n2) && (Y.lastIndex = 0, Y.test(n2))) return "";
    false !== i2 && (n2 = (i2 = i2 || j).process(n2));
  }
  return n2 = ne(n2);
}, w.escapeHtml = z, w.escapeQuote = X, w.unescapeQuote = J, w.escapeHtmlEntities = K, w.escapeDangerHtml5Entities = Q, w.clearNonPrintableCharacter = ee, w.friendlyAttrValue = te, w.escapeAttrValue = ne, w.onIgnoreTagStripAll = function() {
  return "";
}, w.StripTagBody = function(e2, t2) {
  "function" != typeof t2 && (t2 = function() {
  });
  var n2 = !Array.isArray(e2), i2 = [], r2 = false;
  return { onIgnoreTag: function(o2, a2, s2) {
    if (function(t3) {
      return !!n2 || -1 !== H.indexOf(e2, t3);
    }(o2)) {
      if (s2.isClosing) {
        var l2 = "[/removed]", c2 = s2.position + 10;
        return i2.push([false !== r2 ? r2 : s2.position, c2]), r2 = false, l2;
      }
      return r2 || (r2 = s2.position), "[removed]";
    }
    return t2(o2, a2, s2);
  }, remove: function(e3) {
    var t3 = "", n3 = 0;
    return H.forEach(i2, function(i3) {
      t3 += e3.slice(n3, i3[0]), n3 = i3[1];
    }), t3 += e3.slice(n3);
  } };
}, w.stripCommentTag = function(e2) {
  for (var t2 = "", n2 = 0; n2 < e2.length; ) {
    var i2 = e2.indexOf("<!--", n2);
    if (-1 === i2) {
      t2 += e2.slice(n2);
      break;
    }
    t2 += e2.slice(n2, i2);
    var r2 = e2.indexOf("-->", i2);
    if (-1 === r2) break;
    n2 = r2 + 3;
  }
  return t2;
}, w.stripBlankChar = function(e2) {
  var t2 = e2.split("");
  return t2 = t2.filter(function(e3) {
    var t3 = e3.charCodeAt(0);
    return 127 !== t3 && (!(t3 <= 31) || (10 === t3 || 13 === t3));
  }), t2.join("");
}, w.attributeWrapSign = '"', w.cssFilter = j, w.getDefaultCSSWhiteList = R;
var ie = {}, re = D;
function oe(e2) {
  var t2, n2 = re.spaceIndex(e2);
  return t2 = -1 === n2 ? e2.slice(1, -1) : e2.slice(1, n2 + 1), "/" === (t2 = re.trim(t2).toLowerCase()).slice(0, 1) && (t2 = t2.slice(1)), "/" === t2.slice(-1) && (t2 = t2.slice(0, -1)), t2;
}
function ae(e2) {
  return "</" === e2.slice(0, 2);
}
var se = /[^a-zA-Z0-9\\_:.-]/gim;
function le(e2, t2) {
  for (; t2 < e2.length; t2++) {
    var n2 = e2[t2];
    if (" " !== n2) return "=" === n2 ? t2 : -1;
  }
}
function ce(e2, t2) {
  for (; t2 < e2.length; t2++) {
    var n2 = e2[t2];
    if (" " !== n2) return "'" === n2 || '"' === n2 ? t2 : -1;
  }
}
function de(e2, t2) {
  for (; t2 > 0; t2--) {
    var n2 = e2[t2];
    if (" " !== n2) return "=" === n2 ? t2 : -1;
  }
}
function ue(e2) {
  return function(e3) {
    return '"' === e3[0] && '"' === e3[e3.length - 1] || "'" === e3[0] && "'" === e3[e3.length - 1];
  }(e2) ? e2.substr(1, e2.length - 2) : e2;
}
ie.parseTag = function(e2, t2, n2) {
  var i2 = "", r2 = 0, o2 = false, a2 = false, s2 = 0, l2 = e2.length, c2 = "", d2 = "";
  e: for (s2 = 0; s2 < l2; s2++) {
    var u2 = e2.charAt(s2);
    if (false === o2) {
      if ("<" === u2) {
        o2 = s2;
        continue;
      }
    } else if (false === a2) {
      if ("<" === u2) {
        i2 += n2(e2.slice(r2, s2)), o2 = s2, r2 = s2;
        continue;
      }
      if (">" === u2 || s2 === l2 - 1) {
        i2 += n2(e2.slice(r2, o2)), c2 = oe(d2 = e2.slice(o2, s2 + 1)), i2 += t2(o2, i2.length, c2, d2, ae(d2)), r2 = s2 + 1, o2 = false;
        continue;
      }
      if ('"' === u2 || "'" === u2) for (var h2 = 1, p2 = e2.charAt(s2 - h2); "" === p2.trim() || "=" === p2; ) {
        if ("=" === p2) {
          a2 = u2;
          continue e;
        }
        p2 = e2.charAt(s2 - ++h2);
      }
    } else if (u2 === a2) {
      a2 = false;
      continue;
    }
  }
  return r2 < l2 && (i2 += n2(e2.substr(r2))), i2;
}, ie.parseAttr = function(e2, t2) {
  var n2 = 0, i2 = 0, r2 = [], o2 = false, a2 = e2.length;
  function s2(e3, n3) {
    if (!((e3 = (e3 = re.trim(e3)).replace(se, "").toLowerCase()).length < 1)) {
      var i3 = t2(e3, n3 || "");
      i3 && r2.push(i3);
    }
  }
  for (var l2 = 0; l2 < a2; l2++) {
    var c2, d2 = e2.charAt(l2);
    if (false !== o2 || "=" !== d2) if (false === o2 || l2 !== i2) if (/\s|\n|\t/.test(d2)) {
      if (e2 = e2.replace(/\s|\n|\t/g, " "), false === o2) {
        if (-1 === (c2 = le(e2, l2))) {
          s2(re.trim(e2.slice(n2, l2))), o2 = false, n2 = l2 + 1;
          continue;
        }
        l2 = c2 - 1;
        continue;
      }
      if (-1 === (c2 = de(e2, l2 - 1))) {
        s2(o2, ue(re.trim(e2.slice(n2, l2)))), o2 = false, n2 = l2 + 1;
        continue;
      }
    } else ;
    else {
      if (-1 === (c2 = e2.indexOf(d2, l2 + 1))) break;
      s2(o2, re.trim(e2.slice(i2 + 1, c2))), o2 = false, n2 = (l2 = c2) + 1;
    }
    else o2 = e2.slice(n2, l2), n2 = l2 + 1, i2 = '"' === e2.charAt(n2) || "'" === e2.charAt(n2) ? n2 : ce(e2, l2 + 1);
  }
  return n2 < e2.length && (false === o2 ? s2(e2.slice(n2)) : s2(o2, ue(re.trim(e2.slice(n2))))), re.trim(r2.join(" "));
};
var he = M.FilterCSS, pe = w, me = ie, fe = me.parseTag, ge = me.parseAttr, ve = D;
function ye(e2) {
  return null == e2;
}
function we(e2) {
  (e2 = function(e3) {
    var t2 = {};
    for (var n2 in e3) t2[n2] = e3[n2];
    return t2;
  }(e2 || {})).stripIgnoreTag && (e2.onIgnoreTag, e2.onIgnoreTag = pe.onIgnoreTagStripAll), e2.whiteList || e2.allowList ? e2.whiteList = function(e3) {
    var t2 = {};
    for (var n2 in e3) Array.isArray(e3[n2]) ? t2[n2.toLowerCase()] = e3[n2].map(function(e4) {
      return e4.toLowerCase();
    }) : t2[n2.toLowerCase()] = e3[n2];
    return t2;
  }(e2.whiteList || e2.allowList) : e2.whiteList = pe.whiteList, this.attributeWrapSign = true === e2.singleQuotedAttributeValue ? "'" : pe.attributeWrapSign, e2.onTag = e2.onTag || pe.onTag, e2.onTagAttr = e2.onTagAttr || pe.onTagAttr, e2.onIgnoreTag = e2.onIgnoreTag || pe.onIgnoreTag, e2.onIgnoreTagAttr = e2.onIgnoreTagAttr || pe.onIgnoreTagAttr, e2.safeAttrValue = e2.safeAttrValue || pe.safeAttrValue, e2.escapeHtml = e2.escapeHtml || pe.escapeHtml, this.options = e2, false === e2.css ? this.cssFilter = false : (e2.css = e2.css || {}, this.cssFilter = new he(e2.css));
}
we.prototype.process = function(e2) {
  if (!(e2 = (e2 = e2 || "").toString())) return "";
  var t2 = this, n2 = t2.options, i2 = n2.whiteList, r2 = n2.onTag, o2 = n2.onIgnoreTag, a2 = n2.onTagAttr, s2 = n2.onIgnoreTagAttr, l2 = n2.safeAttrValue, c2 = n2.escapeHtml, d2 = t2.attributeWrapSign, u2 = t2.cssFilter;
  n2.stripBlankChar && (e2 = pe.stripBlankChar(e2)), n2.allowCommentTag || (e2 = pe.stripCommentTag(e2));
  var h2 = false;
  n2.stripIgnoreTagBody && (h2 = pe.StripTagBody(n2.stripIgnoreTagBody, o2), o2 = h2.onIgnoreTag);
  var p2 = fe(e2, function(e3, t3, n3, h3, p3) {
    var m2 = { sourcePosition: e3, position: t3, isClosing: p3, isWhite: Object.prototype.hasOwnProperty.call(i2, n3) }, f2 = r2(n3, h3, m2);
    if (!ye(f2)) return f2;
    if (m2.isWhite) {
      if (m2.isClosing) return "</" + n3 + ">";
      var g2 = function(e4) {
        var t4 = ve.spaceIndex(e4);
        if (-1 === t4) return { html: "", closing: "/" === e4[e4.length - 2] };
        var n4 = "/" === (e4 = ve.trim(e4.slice(t4 + 1, -1)))[e4.length - 1];
        return n4 && (e4 = ve.trim(e4.slice(0, -1))), { html: e4, closing: n4 };
      }(h3), v2 = i2[n3], y2 = ge(g2.html, function(e4, t4) {
        var i3 = -1 !== ve.indexOf(v2, e4), r3 = a2(n3, e4, t4, i3);
        return ye(r3) ? i3 ? (t4 = l2(n3, e4, t4, u2)) ? e4 + "=" + d2 + t4 + d2 : e4 : ye(r3 = s2(n3, e4, t4, i3)) ? void 0 : r3 : r3;
      });
      return h3 = "<" + n3, y2 && (h3 += " " + y2), g2.closing && (h3 += " /"), h3 += ">";
    }
    return ye(f2 = o2(n3, h3, m2)) ? c2(h3) : f2;
  }, c2);
  return h2 && (p2 = h2.remove(p2)), p2;
};
var be = we;
!function(e2, t2) {
  var n2 = w, i2 = ie, r2 = be;
  function o2(e3, t3) {
    return new r2(t3).process(e3);
  }
  (t2 = e2.exports = o2).filterXSS = o2, t2.FilterXSS = r2, function() {
    for (var e3 in n2) t2[e3] = n2[e3];
    for (var r3 in i2) t2[r3] = i2[r3];
  }(), "undefined" != typeof window && (window.filterXSS = e2.exports), "undefined" != typeof self && "undefined" != typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope && (self.filterXSS = e2.exports);
}(y, y.exports);
var xe = v(y.exports);
const Ce = { cardBgColor: "#ffffff", cardDetailsBackGround: "#ffffff", cardDetailsColor: "#000", cardMediaBgColor: "#f5f5f5", cardSubtitleColor: "#000", cardTitleColor: "#007FFF", detailsColor: "#000", iconBackgroundColor: "#007FFF", nestedCardBgColor: "#f5f5f5", nestedCardDetailsBackGround: "#f5f5f5", nestedCardDetailsColor: "#000", nestedCardSubtitleColor: "#000", nestedCardTitleColor: "#000", primary: "#007FFF", secondary: "#ffdf00", titleColor: "#007FFF", titleColorActive: "#007FFF", toolbarBgColor: "#f5f5f5", toolbarBtnBgColor: "#fff", toolbarTextColor: "#000" }, ke = { cardBgColor: "#191919", cardDetailsBackGround: "#191919", cardDetailsColor: "#ffff0f", cardMediaBgColor: "#2f2f2f", cardSubtitleColor: "#ffffff", cardTitleColor: "#007FFF", detailsColor: "#ffffff", iconBackgroundColor: "#007FFF", nestedCardBgColor: "#333333", nestedCardDetailsBackGround: "#333333", nestedCardDetailsColor: "#ffffff", nestedCardSubtitleColor: "#ffffff", nestedCardTitleColor: "#ffffff", primary: "#007FFF", secondary: "#ffdf00", titleColor: "#007FFF", titleColorActive: "#007FFF", toolbarBgColor: "#555", toolbarBtnBgColor: "#222", toolbarTextColor: "#ffffff" }, Se = (e2, t2) => `rgba(${parseInt(e2.slice(1, 3), 16)}, ${parseInt(e2.slice(3, 5), 16)}, ${parseInt(e2.slice(5, 7), 16)}, ${t2})`, Te = (e2) => "HORIZONTAL" === e2 || "VERTICAL" === e2 ? "reveal" : "VERTICAL_ALTERNATING" === e2 ? "slide_from_sides" : "reveal", $e = () => {
  const e2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let t2 = "";
  const n2 = new Uint32Array(7);
  window.crypto.getRandomValues(n2);
  for (let i2 = 0; i2 < n2.length; i2++) t2 += e2[n2[i2] % 62];
  return t2;
};
var Ie = { exports: {} };
Ie.exports = function() {
  var e2 = 1e3, t2 = 6e4, n2 = 36e5, i2 = "millisecond", r2 = "second", o2 = "minute", a2 = "hour", s2 = "day", l2 = "week", c2 = "month", d2 = "quarter", u2 = "year", h2 = "date", p2 = "Invalid Date", m2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, f2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(e3) {
    var t3 = ["th", "st", "nd", "rd"], n3 = e3 % 100;
    return "[" + e3 + (t3[(n3 - 20) % 10] || t3[n3] || t3[0]) + "]";
  } }, v2 = function(e3, t3, n3) {
    var i3 = String(e3);
    return !i3 || i3.length >= t3 ? e3 : "" + Array(t3 + 1 - i3.length).join(n3) + e3;
  }, y2 = { s: v2, z: function(e3) {
    var t3 = -e3.utcOffset(), n3 = Math.abs(t3), i3 = Math.floor(n3 / 60), r3 = n3 % 60;
    return (t3 <= 0 ? "+" : "-") + v2(i3, 2, "0") + ":" + v2(r3, 2, "0");
  }, m: function e3(t3, n3) {
    if (t3.date() < n3.date()) return -e3(n3, t3);
    var i3 = 12 * (n3.year() - t3.year()) + (n3.month() - t3.month()), r3 = t3.clone().add(i3, c2), o3 = n3 - r3 < 0, a3 = t3.clone().add(i3 + (o3 ? -1 : 1), c2);
    return +(-(i3 + (n3 - r3) / (o3 ? r3 - a3 : a3 - r3)) || 0);
  }, a: function(e3) {
    return e3 < 0 ? Math.ceil(e3) || 0 : Math.floor(e3);
  }, p: function(e3) {
    return { M: c2, y: u2, w: l2, d: s2, D: h2, h: a2, m: o2, s: r2, ms: i2, Q: d2 }[e3] || String(e3 || "").toLowerCase().replace(/s$/, "");
  }, u: function(e3) {
    return void 0 === e3;
  } }, w2 = "en", b2 = {};
  b2[w2] = g2;
  var x2 = "$isDayjsObject", C2 = function(e3) {
    return e3 instanceof $2 || !(!e3 || !e3[x2]);
  }, k2 = function e3(t3, n3, i3) {
    var r3;
    if (!t3) return w2;
    if ("string" == typeof t3) {
      var o3 = t3.toLowerCase();
      b2[o3] && (r3 = o3), n3 && (b2[o3] = n3, r3 = o3);
      var a3 = t3.split("-");
      if (!r3 && a3.length > 1) return e3(a3[0]);
    } else {
      var s3 = t3.name;
      b2[s3] = t3, r3 = s3;
    }
    return !i3 && r3 && (w2 = r3), r3 || !i3 && w2;
  }, S2 = function(e3, t3) {
    if (C2(e3)) return e3.clone();
    var n3 = "object" == typeof t3 ? t3 : {};
    return n3.date = e3, n3.args = arguments, new $2(n3);
  }, T2 = y2;
  T2.l = k2, T2.i = C2, T2.w = function(e3, t3) {
    return S2(e3, { locale: t3.$L, utc: t3.$u, x: t3.$x, $offset: t3.$offset });
  };
  var $2 = function() {
    function g3(e3) {
      this.$L = k2(e3.locale, null, true), this.parse(e3), this.$x = this.$x || e3.x || {}, this[x2] = true;
    }
    var v3 = g3.prototype;
    return v3.parse = function(e3) {
      this.$d = function(e4) {
        var t3 = e4.date, n3 = e4.utc;
        if (null === t3) return /* @__PURE__ */ new Date(NaN);
        if (T2.u(t3)) return /* @__PURE__ */ new Date();
        if (t3 instanceof Date) return new Date(t3);
        if ("string" == typeof t3 && !/Z$/i.test(t3)) {
          var i3 = t3.match(m2);
          if (i3) {
            var r3 = i3[2] - 1 || 0, o3 = (i3[7] || "0").substring(0, 3);
            return n3 ? new Date(Date.UTC(i3[1], r3, i3[3] || 1, i3[4] || 0, i3[5] || 0, i3[6] || 0, o3)) : new Date(i3[1], r3, i3[3] || 1, i3[4] || 0, i3[5] || 0, i3[6] || 0, o3);
          }
        }
        return new Date(t3);
      }(e3), this.init();
    }, v3.init = function() {
      var e3 = this.$d;
      this.$y = e3.getFullYear(), this.$M = e3.getMonth(), this.$D = e3.getDate(), this.$W = e3.getDay(), this.$H = e3.getHours(), this.$m = e3.getMinutes(), this.$s = e3.getSeconds(), this.$ms = e3.getMilliseconds();
    }, v3.$utils = function() {
      return T2;
    }, v3.isValid = function() {
      return !(this.$d.toString() === p2);
    }, v3.isSame = function(e3, t3) {
      var n3 = S2(e3);
      return this.startOf(t3) <= n3 && n3 <= this.endOf(t3);
    }, v3.isAfter = function(e3, t3) {
      return S2(e3) < this.startOf(t3);
    }, v3.isBefore = function(e3, t3) {
      return this.endOf(t3) < S2(e3);
    }, v3.$g = function(e3, t3, n3) {
      return T2.u(e3) ? this[t3] : this.set(n3, e3);
    }, v3.unix = function() {
      return Math.floor(this.valueOf() / 1e3);
    }, v3.valueOf = function() {
      return this.$d.getTime();
    }, v3.startOf = function(e3, t3) {
      var n3 = this, i3 = !!T2.u(t3) || t3, d3 = T2.p(e3), p3 = function(e4, t4) {
        var r3 = T2.w(n3.$u ? Date.UTC(n3.$y, t4, e4) : new Date(n3.$y, t4, e4), n3);
        return i3 ? r3 : r3.endOf(s2);
      }, m3 = function(e4, t4) {
        return T2.w(n3.toDate()[e4].apply(n3.toDate("s"), (i3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t4)), n3);
      }, f3 = this.$W, g4 = this.$M, v4 = this.$D, y3 = "set" + (this.$u ? "UTC" : "");
      switch (d3) {
        case u2:
          return i3 ? p3(1, 0) : p3(31, 11);
        case c2:
          return i3 ? p3(1, g4) : p3(0, g4 + 1);
        case l2:
          var w3 = this.$locale().weekStart || 0, b3 = (f3 < w3 ? f3 + 7 : f3) - w3;
          return p3(i3 ? v4 - b3 : v4 + (6 - b3), g4);
        case s2:
        case h2:
          return m3(y3 + "Hours", 0);
        case a2:
          return m3(y3 + "Minutes", 1);
        case o2:
          return m3(y3 + "Seconds", 2);
        case r2:
          return m3(y3 + "Milliseconds", 3);
        default:
          return this.clone();
      }
    }, v3.endOf = function(e3) {
      return this.startOf(e3, false);
    }, v3.$set = function(e3, t3) {
      var n3, l3 = T2.p(e3), d3 = "set" + (this.$u ? "UTC" : ""), p3 = (n3 = {}, n3[s2] = d3 + "Date", n3[h2] = d3 + "Date", n3[c2] = d3 + "Month", n3[u2] = d3 + "FullYear", n3[a2] = d3 + "Hours", n3[o2] = d3 + "Minutes", n3[r2] = d3 + "Seconds", n3[i2] = d3 + "Milliseconds", n3)[l3], m3 = l3 === s2 ? this.$D + (t3 - this.$W) : t3;
      if (l3 === c2 || l3 === u2) {
        var f3 = this.clone().set(h2, 1);
        f3.$d[p3](m3), f3.init(), this.$d = f3.set(h2, Math.min(this.$D, f3.daysInMonth())).$d;
      } else p3 && this.$d[p3](m3);
      return this.init(), this;
    }, v3.set = function(e3, t3) {
      return this.clone().$set(e3, t3);
    }, v3.get = function(e3) {
      return this[T2.p(e3)]();
    }, v3.add = function(i3, d3) {
      var h3, p3 = this;
      i3 = Number(i3);
      var m3 = T2.p(d3), f3 = function(e3) {
        var t3 = S2(p3);
        return T2.w(t3.date(t3.date() + Math.round(e3 * i3)), p3);
      };
      if (m3 === c2) return this.set(c2, this.$M + i3);
      if (m3 === u2) return this.set(u2, this.$y + i3);
      if (m3 === s2) return f3(1);
      if (m3 === l2) return f3(7);
      var g4 = (h3 = {}, h3[o2] = t2, h3[a2] = n2, h3[r2] = e2, h3)[m3] || 1, v4 = this.$d.getTime() + i3 * g4;
      return T2.w(v4, this);
    }, v3.subtract = function(e3, t3) {
      return this.add(-1 * e3, t3);
    }, v3.format = function(e3) {
      var t3 = this, n3 = this.$locale();
      if (!this.isValid()) return n3.invalidDate || p2;
      var i3 = e3 || "YYYY-MM-DDTHH:mm:ssZ", r3 = T2.z(this), o3 = this.$H, a3 = this.$m, s3 = this.$M, l3 = n3.weekdays, c3 = n3.months, d3 = n3.meridiem, u3 = function(e4, n4, r4, o4) {
        return e4 && (e4[n4] || e4(t3, i3)) || r4[n4].slice(0, o4);
      }, h3 = function(e4) {
        return T2.s(o3 % 12 || 12, e4, "0");
      }, m3 = d3 || function(e4, t4, n4) {
        var i4 = e4 < 12 ? "AM" : "PM";
        return n4 ? i4.toLowerCase() : i4;
      };
      return i3.replace(f2, function(e4, i4) {
        return i4 || function(e5) {
          switch (e5) {
            case "YY":
              return String(t3.$y).slice(-2);
            case "YYYY":
              return T2.s(t3.$y, 4, "0");
            case "M":
              return s3 + 1;
            case "MM":
              return T2.s(s3 + 1, 2, "0");
            case "MMM":
              return u3(n3.monthsShort, s3, c3, 3);
            case "MMMM":
              return u3(c3, s3);
            case "D":
              return t3.$D;
            case "DD":
              return T2.s(t3.$D, 2, "0");
            case "d":
              return String(t3.$W);
            case "dd":
              return u3(n3.weekdaysMin, t3.$W, l3, 2);
            case "ddd":
              return u3(n3.weekdaysShort, t3.$W, l3, 3);
            case "dddd":
              return l3[t3.$W];
            case "H":
              return String(o3);
            case "HH":
              return T2.s(o3, 2, "0");
            case "h":
              return h3(1);
            case "hh":
              return h3(2);
            case "a":
              return m3(o3, a3, true);
            case "A":
              return m3(o3, a3, false);
            case "m":
              return String(a3);
            case "mm":
              return T2.s(a3, 2, "0");
            case "s":
              return String(t3.$s);
            case "ss":
              return T2.s(t3.$s, 2, "0");
            case "SSS":
              return T2.s(t3.$ms, 3, "0");
            case "Z":
              return r3;
          }
          return null;
        }(e4) || r3.replace(":", "");
      });
    }, v3.utcOffset = function() {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, v3.diff = function(i3, h3, p3) {
      var m3, f3 = this, g4 = T2.p(h3), v4 = S2(i3), y3 = (v4.utcOffset() - this.utcOffset()) * t2, w3 = this - v4, b3 = function() {
        return T2.m(f3, v4);
      };
      switch (g4) {
        case u2:
          m3 = b3() / 12;
          break;
        case c2:
          m3 = b3();
          break;
        case d2:
          m3 = b3() / 3;
          break;
        case l2:
          m3 = (w3 - y3) / 6048e5;
          break;
        case s2:
          m3 = (w3 - y3) / 864e5;
          break;
        case a2:
          m3 = w3 / n2;
          break;
        case o2:
          m3 = w3 / t2;
          break;
        case r2:
          m3 = w3 / e2;
          break;
        default:
          m3 = w3;
      }
      return p3 ? m3 : T2.a(m3);
    }, v3.daysInMonth = function() {
      return this.endOf(c2).$D;
    }, v3.$locale = function() {
      return b2[this.$L];
    }, v3.locale = function(e3, t3) {
      if (!e3) return this.$L;
      var n3 = this.clone(), i3 = k2(e3, t3, true);
      return i3 && (n3.$L = i3), n3;
    }, v3.clone = function() {
      return T2.w(this.$d, this);
    }, v3.toDate = function() {
      return new Date(this.valueOf());
    }, v3.toJSON = function() {
      return this.isValid() ? this.toISOString() : null;
    }, v3.toISOString = function() {
      return this.$d.toISOString();
    }, v3.toString = function() {
      return this.$d.toUTCString();
    }, g3;
  }(), I2 = $2.prototype;
  return S2.prototype = I2, [["$ms", i2], ["$s", r2], ["$m", o2], ["$H", a2], ["$W", s2], ["$M", c2], ["$y", u2], ["$D", h2]].forEach(function(e3) {
    I2[e3[1]] = function(t3) {
      return this.$g(t3, e3[0], e3[1]);
    };
  }), S2.extend = function(e3, t3) {
    return e3.$i || (e3(t3, $2, S2), e3.$i = true), S2;
  }, S2.locale = k2, S2.isDayjs = C2, S2.unix = function(e3) {
    return S2(1e3 * e3);
  }, S2.en = b2[w2], S2.Ls = b2, S2.p = {}, S2;
}();
var Ae = v(Ie.exports);
const Ne = (e2, t2, n2 = true) => {
  const [i2, c2] = reactExports.useState(false), d2 = reactExports.useRef(window.matchMedia(e2)), u2 = reactExports.useCallback(() => c2(d2.current.matches), [d2]), h2 = function(e3, t3, n3) {
    var i3 = this, s2 = reactExports.useRef(null), l2 = reactExports.useRef(0), c3 = reactExports.useRef(null), d3 = reactExports.useRef([]), u3 = reactExports.useRef(), h3 = reactExports.useRef(), p2 = reactExports.useRef(e3), m2 = reactExports.useRef(true);
    p2.current = e3;
    var f2 = "undefined" != typeof window, g2 = !t3 && 0 !== t3 && f2;
    if ("function" != typeof e3) throw new TypeError("Expected a function");
    t3 = +t3 || 0;
    var v2 = !!(n3 = n3 || {}).leading, y2 = !("trailing" in n3) || !!n3.trailing, w2 = "maxWait" in n3, b2 = "debounceOnServer" in n3 && !!n3.debounceOnServer, x2 = w2 ? Math.max(+n3.maxWait || 0, t3) : null;
    reactExports.useEffect(function() {
      return m2.current = true, function() {
        m2.current = false;
      };
    }, []);
    var C2 = reactExports.useMemo(function() {
      var e4 = function(e5) {
        var t4 = d3.current, n5 = u3.current;
        return d3.current = u3.current = null, l2.current = e5, h3.current = p2.current.apply(n5, t4);
      }, n4 = function(e5, t4) {
        g2 && cancelAnimationFrame(c3.current), c3.current = g2 ? requestAnimationFrame(e5) : setTimeout(e5, t4);
      }, r2 = function(e5) {
        if (!m2.current) return false;
        var n5 = e5 - s2.current;
        return !s2.current || n5 >= t3 || n5 < 0 || w2 && e5 - l2.current >= x2;
      }, o2 = function(t4) {
        return c3.current = null, y2 && d3.current ? e4(t4) : (d3.current = u3.current = null, h3.current);
      }, a2 = function e5() {
        var i4 = Date.now();
        if (r2(i4)) return o2(i4);
        if (m2.current) {
          var a3 = t3 - (i4 - s2.current), c4 = w2 ? Math.min(a3, x2 - (i4 - l2.current)) : a3;
          n4(e5, c4);
        }
      }, C3 = function() {
        if (f2 || b2) {
          var o3 = Date.now(), p3 = r2(o3);
          if (d3.current = [].slice.call(arguments), u3.current = i3, s2.current = o3, p3) {
            if (!c3.current && m2.current) return l2.current = s2.current, n4(a2, t3), v2 ? e4(s2.current) : h3.current;
            if (w2) return n4(a2, t3), e4(s2.current);
          }
          return c3.current || n4(a2, t3), h3.current;
        }
      };
      return C3.cancel = function() {
        c3.current && (g2 ? cancelAnimationFrame(c3.current) : clearTimeout(c3.current)), l2.current = 0, d3.current = s2.current = u3.current = c3.current = null;
      }, C3.isPending = function() {
        return !!c3.current;
      }, C3.flush = function() {
        return c3.current ? o2(Date.now()) : h3.current;
      }, C3;
    }, [v2, w2, t3, x2, y2, g2, f2, b2]);
    return C2;
  }(() => {
    const e3 = d2.current.matches;
    e3 !== i2 && c2(e3);
  }, 100);
  return reactExports.useEffect(() => {
    const e3 = d2.current;
    if (!n2 || !e3) return;
    const t3 = e3.matches;
    return t3 !== i2 && c2(t3), e3.addEventListener("change", u2), window.addEventListener("resize", h2), () => {
      e3.removeEventListener("change", u2), window.removeEventListener("resize", h2);
    };
  }, [e2, n2, d2]), reactExports.useEffect(() => {
    i2 && t2 && t2();
  }, [i2, t2]), i2;
}, Le = reactExports.createContext({}), Oe = (t2) => {
  const { cardHeight: n2 = 200, cardLess: i2 = false, flipLayout: r2, items: o2 = [], theme: c2, buttonTexts: d2, classNames: u2, mode: h2 = "VERTICAL_ALTERNATING", fontSizes: p2, textOverlay: m2, darkMode: f2, slideShow: g2, onThemeChange: v2, mediaSettings: y2, mediaHeight: w2 = 200, contentDetailsHeight: b2 = 10, showAllCardsHorizontal: x2, textDensity: C2 = "HIGH", responsiveBreakPoint: k2 = 1024, enableBreakPoint: S2 } = t2, [T2, $2] = reactExports.useState(f2), [I2, A2] = reactExports.useState(x2 || false), [N2, L2] = reactExports.useState(false), [O2, M2] = reactExports.useState(C2), D2 = reactExports.useMemo(() => Math.max(b2 || 0 + w2 || 0, n2), []), E2 = reactExports.useMemo(() => {
    const e2 = Math.round(0.75 * D2);
    return b2 > D2 ? Math.min(b2, e2) : Math.max(b2, e2);
  }, [D2]), R2 = reactExports.useCallback(() => {
    $2(!T2), null == v2 || v2();
  }, [T2]), H2 = reactExports.useCallback((e2) => {
    A2(e2);
  }, [I2]), P2 = reactExports.useCallback((e2) => {
    M2(e2);
  }, [O2]);
  Ne(`(max-width: ${k2 - 1}px)`, () => L2(true), S2), Ne(`(min-width: ${k2}px)`, () => L2(false), S2);
  const j2 = reactExports.useMemo(() => {
    return { borderLessCards: false, cardHeight: D2, cardLess: false, disableAutoScrollOnClick: !!t2.disableInteraction, disableClickOnCircle: !!t2.disableInteraction, disableInteraction: false, disableTimelinePoint: !!t2.disableInteraction, disableToolbar: false, enableBreakPoint: true, enableDarkToggle: false, enableLayoutSwitch: true, enableQuickJump: true, focusActiveItemOnLoad: false, highlightCardsOnHover: false, lineWidth: 3, mediaHeight: 200, nestedCardHeight: 150, parseDetailsAsHTML: false, scrollable: { scrollbar: false }, showProgressOnSlideshow: g2, slideItemDuration: 2e3, slideShowType: Te(h2), textOverlay: false, timelinePointDimension: 16, timelinePointShape: "circle", titleDateFormat: "MMM DD, YYYY", toolbarPosition: "top", uniqueId: "react-chrono", useReadMore: true, ...t2, activeItemIndex: r2 ? (null == o2 ? void 0 : o2.length) - 1 : 0, buttonTexts: { changeDensity: "Change density", changeDensityOptions: { high: { helpText: "Show more items at once", text: "High" }, low: { helpText: "Show fewer items at once", text: "Low" } }, changeLayout: "Change layout", changeLayoutOptions: { alternating: { helpText: "Show cards in a vertical layout with alternating fashion", text: "Alternating" }, horizontal: { helpText: "Show cards in a horizontal layout", text: "Horizontal" }, horizontal_all: { helpText: "Show all cards in a horizontal layout", text: "Show all cards" }, vertical: { helpText: "Show cards in a vertical layout", text: "Vertical" } }, dark: "Switch to Dark Mode", first: "Go to First", jumpTo: "Jump to", last: "Go to Last", light: "Switch to Light Mode", next: "Next", play: "Play Slideshow", previous: "Previous", stop: "Stop Slideshow", ...d2 }, cardHeight: i2 ? n2 || 80 : n2, classNames: { card: "rc-card", cardMedia: "rc-card-media", cardSubTitle: "rc-card-subtitle", cardText: "rc-card-text", cardTitle: "rc-card-title", controls: "rc-controls", title: "rc-title", ...u2 }, contentDetailsHeight: E2, darkMode: T2, fontSizes: { cardSubtitle: "0.85rem", cardText: "1rem", cardTitle: "1rem", title: "1rem", ...p2 }, isMobile: N2, mediaSettings: { align: "VERTICAL" !== h2 || m2 ? "center" : "left", imageFit: "cover", ...y2 }, showAllCardsHorizontal: I2, textDensity: O2, theme: { ...(e2 = T2, e2 ? ke : Ce), ...c2 }, toggleDarkMode: R2, updateHorizontalAllCards: H2, updateTextContentDensity: P2 };
    var e2;
  }, [E2, D2, T2, R2, H2, O2, N2]), z2 = reactExports.useMemo(() => ({ ...j2, darkMode: T2, toggleDarkMode: R2, updateHorizontalAllCards: H2 }), [j2, T2]), { children: _2 } = t2;
  return jsxRuntimeExports.jsx(Le.Provider, { value: z2, children: _2 });
};
var Me, De = { exports: {} };
Me = De, function() {
  var e2 = {}.hasOwnProperty;
  function t2() {
    for (var e3 = "", t3 = 0; t3 < arguments.length; t3++) {
      var r2 = arguments[t3];
      r2 && (e3 = i2(e3, n2(r2)));
    }
    return e3;
  }
  function n2(n3) {
    if ("string" == typeof n3 || "number" == typeof n3) return n3;
    if ("object" != typeof n3) return "";
    if (Array.isArray(n3)) return t2.apply(null, n3);
    if (n3.toString !== Object.prototype.toString && !n3.toString.toString().includes("[native code]")) return n3.toString();
    var r2 = "";
    for (var o2 in n3) e2.call(n3, o2) && n3[o2] && (r2 = i2(r2, o2));
    return r2;
  }
  function i2(e3, t3) {
    return t3 ? e3 ? e3 + " " + t3 : e3 + t3 : e3;
  }
  Me.exports ? (t2.default = t2, Me.exports = t2) : window.classNames = t2;
}();
var Ee = v(De.exports);
var Re = function() {
  return Re = Object.assign || function(e2) {
    for (var t2, n2 = 1, i2 = arguments.length; n2 < i2; n2++) for (var r2 in t2 = arguments[n2]) Object.prototype.hasOwnProperty.call(t2, r2) && (e2[r2] = t2[r2]);
    return e2;
  }, Re.apply(this, arguments);
};
function He(e2, t2, n2) {
  if (n2 || 2 === arguments.length) for (var i2, r2 = 0, o2 = t2.length; r2 < o2; r2++) !i2 && r2 in t2 || (i2 || (i2 = Array.prototype.slice.call(t2, 0, r2)), i2[r2] = t2[r2]);
  return e2.concat(i2 || Array.prototype.slice.call(t2));
}
"function" == typeof SuppressedError && SuppressedError;
var _e = "-ms-", We = "-moz-", Be = "-webkit-", Fe = "comm", Ve = "rule", Ge = "decl", qe = "@import", Ye = "@keyframes", Ue = "@layer", Ze = Math.abs, Xe = String.fromCharCode, Je = Object.assign;
function Ke(e2) {
  return e2.trim();
}
function Qe(e2, t2) {
  return (e2 = t2.exec(e2)) ? e2[0] : e2;
}
function et(e2, t2, n2) {
  return e2.replace(t2, n2);
}
function tt(e2, t2, n2) {
  return e2.indexOf(t2, n2);
}
function nt(e2, t2) {
  return 0 | e2.charCodeAt(t2);
}
function it(e2, t2, n2) {
  return e2.slice(t2, n2);
}
function rt(e2) {
  return e2.length;
}
function ot(e2) {
  return e2.length;
}
function at(e2, t2) {
  return t2.push(e2), e2;
}
function st(e2, t2) {
  return e2.filter(function(e3) {
    return !Qe(e3, t2);
  });
}
var lt = 1, ct = 1, dt = 0, ut = 0, ht = 0, pt = "";
function mt(e2, t2, n2, i2, r2, o2, a2, s2) {
  return { value: e2, root: t2, parent: n2, type: i2, props: r2, children: o2, line: lt, column: ct, length: a2, return: "", siblings: s2 };
}
function ft(e2, t2) {
  return Je(mt("", null, null, "", null, null, 0, e2.siblings), e2, { length: -e2.length }, t2);
}
function gt(e2) {
  for (; e2.root; ) e2 = ft(e2.root, { children: [e2] });
  at(e2, e2.siblings);
}
function vt() {
  return ht = ut > 0 ? nt(pt, --ut) : 0, ct--, 10 === ht && (ct = 1, lt--), ht;
}
function yt() {
  return ht = ut < dt ? nt(pt, ut++) : 0, ct++, 10 === ht && (ct = 1, lt++), ht;
}
function wt() {
  return nt(pt, ut);
}
function bt() {
  return ut;
}
function xt(e2, t2) {
  return it(pt, e2, t2);
}
function Ct(e2) {
  switch (e2) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function kt(e2) {
  return Ke(xt(ut - 1, $t(91 === e2 ? e2 + 2 : 40 === e2 ? e2 + 1 : e2)));
}
function St(e2) {
  for (; (ht = wt()) && ht < 33; ) yt();
  return Ct(e2) > 2 || Ct(ht) > 3 ? "" : " ";
}
function Tt(e2, t2) {
  for (; --t2 && yt() && !(ht < 48 || ht > 102 || ht > 57 && ht < 65 || ht > 70 && ht < 97); ) ;
  return xt(e2, bt() + (t2 < 6 && 32 == wt() && 32 == yt()));
}
function $t(e2) {
  for (; yt(); ) switch (ht) {
    case e2:
      return ut;
    case 34:
    case 39:
      34 !== e2 && 39 !== e2 && $t(ht);
      break;
    case 40:
      41 === e2 && $t(e2);
      break;
    case 92:
      yt();
  }
  return ut;
}
function It(e2, t2) {
  for (; yt() && e2 + ht !== 57 && (e2 + ht !== 84 || 47 !== wt()); ) ;
  return "/*" + xt(t2, ut - 1) + "*" + Xe(47 === e2 ? e2 : yt());
}
function At(e2) {
  for (; !Ct(wt()); ) yt();
  return xt(e2, ut);
}
function Nt(e2) {
  return function(e3) {
    return pt = "", e3;
  }(Lt("", null, null, null, [""], e2 = function(e3) {
    return lt = ct = 1, dt = rt(pt = e3), ut = 0, [];
  }(e2), 0, [0], e2));
}
function Lt(e2, t2, n2, i2, r2, o2, a2, s2, l2) {
  for (var c2 = 0, d2 = 0, u2 = a2, h2 = 0, p2 = 0, m2 = 0, f2 = 1, g2 = 1, v2 = 1, y2 = 0, w2 = "", b2 = r2, x2 = o2, C2 = i2, k2 = w2; g2; ) switch (m2 = y2, y2 = yt()) {
    case 40:
      if (108 != m2 && 58 == nt(k2, u2 - 1)) {
        -1 != tt(k2 += et(kt(y2), "&", "&\f"), "&\f", Ze(c2 ? s2[c2 - 1] : 0)) && (v2 = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      k2 += kt(y2);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      k2 += St(m2);
      break;
    case 92:
      k2 += Tt(bt() - 1, 7);
      continue;
    case 47:
      switch (wt()) {
        case 42:
        case 47:
          at(Mt(It(yt(), bt()), t2, n2, l2), l2);
          break;
        default:
          k2 += "/";
      }
      break;
    case 123 * f2:
      s2[c2++] = rt(k2) * v2;
    case 125 * f2:
    case 59:
    case 0:
      switch (y2) {
        case 0:
        case 125:
          g2 = 0;
        case 59 + d2:
          -1 == v2 && (k2 = et(k2, /\f/g, "")), p2 > 0 && rt(k2) - u2 && at(p2 > 32 ? Dt(k2 + ";", i2, n2, u2 - 1, l2) : Dt(et(k2, " ", "") + ";", i2, n2, u2 - 2, l2), l2);
          break;
        case 59:
          k2 += ";";
        default:
          if (at(C2 = Ot(k2, t2, n2, c2, d2, r2, s2, w2, b2 = [], x2 = [], u2, o2), o2), 123 === y2) if (0 === d2) Lt(k2, t2, C2, C2, b2, o2, u2, s2, x2);
          else switch (99 === h2 && 110 === nt(k2, 3) ? 100 : h2) {
            case 100:
            case 108:
            case 109:
            case 115:
              Lt(e2, C2, C2, i2 && at(Ot(e2, C2, C2, 0, 0, r2, s2, w2, r2, b2 = [], u2, x2), x2), r2, x2, u2, s2, i2 ? b2 : x2);
              break;
            default:
              Lt(k2, C2, C2, C2, [""], x2, 0, s2, x2);
          }
      }
      c2 = d2 = p2 = 0, f2 = v2 = 1, w2 = k2 = "", u2 = a2;
      break;
    case 58:
      u2 = 1 + rt(k2), p2 = m2;
    default:
      if (f2 < 1) {
        if (123 == y2) --f2;
        else if (125 == y2 && 0 == f2++ && 125 == vt()) continue;
      }
      switch (k2 += Xe(y2), y2 * f2) {
        case 38:
          v2 = d2 > 0 ? 1 : (k2 += "\f", -1);
          break;
        case 44:
          s2[c2++] = (rt(k2) - 1) * v2, v2 = 1;
          break;
        case 64:
          45 === wt() && (k2 += kt(yt())), h2 = wt(), d2 = u2 = rt(w2 = k2 += At(bt())), y2++;
          break;
        case 45:
          45 === m2 && 2 == rt(k2) && (f2 = 0);
      }
  }
  return o2;
}
function Ot(e2, t2, n2, i2, r2, o2, a2, s2, l2, c2, d2, u2) {
  for (var h2 = r2 - 1, p2 = 0 === r2 ? o2 : [""], m2 = ot(p2), f2 = 0, g2 = 0, v2 = 0; f2 < i2; ++f2) for (var y2 = 0, w2 = it(e2, h2 + 1, h2 = Ze(g2 = a2[f2])), b2 = e2; y2 < m2; ++y2) (b2 = Ke(g2 > 0 ? p2[y2] + " " + w2 : et(w2, /&\f/g, p2[y2]))) && (l2[v2++] = b2);
  return mt(e2, t2, n2, 0 === r2 ? Ve : s2, l2, c2, d2, u2);
}
function Mt(e2, t2, n2, i2) {
  return mt(e2, t2, n2, Fe, Xe(ht), it(e2, 2, -2), 0, i2);
}
function Dt(e2, t2, n2, i2, r2) {
  return mt(e2, t2, n2, Ge, it(e2, 0, i2), it(e2, i2 + 1, -1), i2, r2);
}
function Et(e2, t2, n2) {
  switch (function(e3, t3) {
    return 45 ^ nt(e3, 0) ? (((t3 << 2 ^ nt(e3, 0)) << 2 ^ nt(e3, 1)) << 2 ^ nt(e3, 2)) << 2 ^ nt(e3, 3) : 0;
  }(e2, t2)) {
    case 5103:
      return Be + "print-" + e2 + e2;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Be + e2 + e2;
    case 4789:
      return We + e2 + e2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Be + e2 + We + e2 + _e + e2 + e2;
    case 5936:
      switch (nt(e2, t2 + 11)) {
        case 114:
          return Be + e2 + _e + et(e2, /[svh]\w+-[tblr]{2}/, "tb") + e2;
        case 108:
          return Be + e2 + _e + et(e2, /[svh]\w+-[tblr]{2}/, "tb-rl") + e2;
        case 45:
          return Be + e2 + _e + et(e2, /[svh]\w+-[tblr]{2}/, "lr") + e2;
      }
    case 6828:
    case 4268:
    case 2903:
      return Be + e2 + _e + e2 + e2;
    case 6165:
      return Be + e2 + _e + "flex-" + e2 + e2;
    case 5187:
      return Be + e2 + et(e2, /(\w+).+(:[^]+)/, Be + "box-$1$2" + _e + "flex-$1$2") + e2;
    case 5443:
      return Be + e2 + _e + "flex-item-" + et(e2, /flex-|-self/g, "") + (Qe(e2, /flex-|baseline/) ? "" : _e + "grid-row-" + et(e2, /flex-|-self/g, "")) + e2;
    case 4675:
      return Be + e2 + _e + "flex-line-pack" + et(e2, /align-content|flex-|-self/g, "") + e2;
    case 5548:
      return Be + e2 + _e + et(e2, "shrink", "negative") + e2;
    case 5292:
      return Be + e2 + _e + et(e2, "basis", "preferred-size") + e2;
    case 6060:
      return Be + "box-" + et(e2, "-grow", "") + Be + e2 + _e + et(e2, "grow", "positive") + e2;
    case 4554:
      return Be + et(e2, /([^-])(transform)/g, "$1" + Be + "$2") + e2;
    case 6187:
      return et(et(et(e2, /(zoom-|grab)/, Be + "$1"), /(image-set)/, Be + "$1"), e2, "") + e2;
    case 5495:
    case 3959:
      return et(e2, /(image-set\([^]*)/, Be + "$1$`$1");
    case 4968:
      return et(et(e2, /(.+:)(flex-)?(.*)/, Be + "box-pack:$3" + _e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Be + e2 + e2;
    case 4200:
      if (!Qe(e2, /flex-|baseline/)) return _e + "grid-column-align" + it(e2, t2) + e2;
      break;
    case 2592:
    case 3360:
      return _e + et(e2, "template-", "") + e2;
    case 4384:
    case 3616:
      return n2 && n2.some(function(e3, n3) {
        return t2 = n3, Qe(e3.props, /grid-\w+-end/);
      }) ? ~tt(e2 + (n2 = n2[t2].value), "span", 0) ? e2 : _e + et(e2, "-start", "") + e2 + _e + "grid-row-span:" + (~tt(n2, "span", 0) ? Qe(n2, /\d+/) : +Qe(n2, /\d+/) - +Qe(e2, /\d+/)) + ";" : _e + et(e2, "-start", "") + e2;
    case 4896:
    case 4128:
      return n2 && n2.some(function(e3) {
        return Qe(e3.props, /grid-\w+-start/);
      }) ? e2 : _e + et(et(e2, "-end", "-span"), "span ", "") + e2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return et(e2, /(.+)-inline(.+)/, Be + "$1$2") + e2;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (rt(e2) - 1 - t2 > 6) switch (nt(e2, t2 + 1)) {
        case 109:
          if (45 !== nt(e2, t2 + 4)) break;
        case 102:
          return et(e2, /(.+:)(.+)-([^]+)/, "$1" + Be + "$2-$3$1" + We + (108 == nt(e2, t2 + 3) ? "$3" : "$2-$3")) + e2;
        case 115:
          return ~tt(e2, "stretch", 0) ? Et(et(e2, "stretch", "fill-available"), t2, n2) + e2 : e2;
      }
      break;
    case 5152:
    case 5920:
      return et(e2, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(t3, n3, i2, r2, o2, a2, s2) {
        return _e + n3 + ":" + i2 + s2 + (r2 ? _e + n3 + "-span:" + (o2 ? a2 : +a2 - +i2) + s2 : "") + e2;
      });
    case 4949:
      if (121 === nt(e2, t2 + 6)) return et(e2, ":", ":" + Be) + e2;
      break;
    case 6444:
      switch (nt(e2, 45 === nt(e2, 14) ? 18 : 11)) {
        case 120:
          return et(e2, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Be + (45 === nt(e2, 14) ? "inline-" : "") + "box$3$1" + Be + "$2$3$1" + _e + "$2box$3") + e2;
        case 100:
          return et(e2, ":", ":" + _e) + e2;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return et(e2, "scroll-", "scroll-snap-") + e2;
  }
  return e2;
}
function Rt(e2, t2) {
  for (var n2 = "", i2 = 0; i2 < e2.length; i2++) n2 += t2(e2[i2], i2, e2, t2) || "";
  return n2;
}
function Ht(e2, t2, n2, i2) {
  switch (e2.type) {
    case Ue:
      if (e2.children.length) break;
    case qe:
    case Ge:
      return e2.return = e2.return || e2.value;
    case Fe:
      return "";
    case Ye:
      return e2.return = e2.value + "{" + Rt(e2.children, i2) + "}";
    case Ve:
      if (!rt(e2.value = e2.props.join(","))) return "";
  }
  return rt(n2 = Rt(e2.children, i2)) ? e2.return = e2.value + "{" + n2 + "}" : "";
}
function Pt(e2, t2, n2, i2) {
  if (e2.length > -1 && !e2.return) switch (e2.type) {
    case Ge:
      return void (e2.return = Et(e2.value, e2.length, n2));
    case Ye:
      return Rt([ft(e2, { value: et(e2.value, "@", "@" + Be) })], i2);
    case Ve:
      if (e2.length) return function(e3, t3) {
        return e3.map(t3).join("");
      }(n2 = e2.props, function(t3) {
        switch (Qe(t3, i2 = /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            gt(ft(e2, { props: [et(t3, /:(read-\w+)/, ":" + We + "$1")] })), gt(ft(e2, { props: [t3] })), Je(e2, { props: st(n2, i2) });
            break;
          case "::placeholder":
            gt(ft(e2, { props: [et(t3, /:(plac\w+)/, ":" + Be + "input-$1")] })), gt(ft(e2, { props: [et(t3, /:(plac\w+)/, ":" + We + "$1")] })), gt(ft(e2, { props: [et(t3, /:(plac\w+)/, _e + "input-$1")] })), gt(ft(e2, { props: [t3] })), Je(e2, { props: st(n2, i2) });
        }
        return "";
      });
  }
}
var jt = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, zt = "undefined" != typeof process && void 0 !== define_process_env_default && (define_process_env_default.REACT_APP_SC_ATTR || define_process_env_default.SC_ATTR) || "data-styled", _t = "active", Wt = "data-styled-version", Bt = "6.1.8", Ft = "/*!sc*/\n", Vt = "undefined" != typeof window && "HTMLElement" in window, Gt = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== define_process_env_default && void 0 !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY && "" !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY && define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== define_process_env_default && void 0 !== define_process_env_default.SC_DISABLE_SPEEDY && "" !== define_process_env_default.SC_DISABLE_SPEEDY ? "false" !== define_process_env_default.SC_DISABLE_SPEEDY && define_process_env_default.SC_DISABLE_SPEEDY : false), Zt = Object.freeze([]), Xt = Object.freeze({});
var Jt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Kt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Qt = /(^-|-$)/g;
function en(e2) {
  return e2.replace(Kt, "-").replace(Qt, "");
}
var tn = /(a)(d)/gi, nn = 52, rn = function(e2) {
  return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
};
function on(e2) {
  var t2, n2 = "";
  for (t2 = Math.abs(e2); t2 > nn; t2 = t2 / nn | 0) n2 = rn(t2 % nn) + n2;
  return (rn(t2 % nn) + n2).replace(tn, "$1-$2");
}
var an, sn = function(e2, t2) {
  for (var n2 = t2.length; n2; ) e2 = 33 * e2 ^ t2.charCodeAt(--n2);
  return e2;
}, ln = function(e2) {
  return sn(5381, e2);
};
function cn(e2) {
  return on(ln(e2) >>> 0);
}
function dn(e2) {
  return "string" == typeof e2 && true;
}
var un = "function" == typeof Symbol && Symbol.for, hn = un ? Symbol.for("react.memo") : 60115, pn = un ? Symbol.for("react.forward_ref") : 60112, mn = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, fn = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, gn = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, vn = ((an = {})[pn] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, an[hn] = gn, an);
function yn(e2) {
  return ("type" in (t2 = e2) && t2.type.$$typeof) === hn ? gn : "$$typeof" in e2 ? vn[e2.$$typeof] : mn;
  var t2;
}
var wn = Object.defineProperty, bn = Object.getOwnPropertyNames, xn = Object.getOwnPropertySymbols, Cn = Object.getOwnPropertyDescriptor, kn = Object.getPrototypeOf, Sn = Object.prototype;
function Tn(e2, t2, n2) {
  if ("string" != typeof t2) {
    if (Sn) {
      var i2 = kn(t2);
      i2 && i2 !== Sn && Tn(e2, i2, n2);
    }
    var r2 = bn(t2);
    xn && (r2 = r2.concat(xn(t2)));
    for (var o2 = yn(e2), a2 = yn(t2), s2 = 0; s2 < r2.length; ++s2) {
      var l2 = r2[s2];
      if (!(l2 in fn || n2 && n2[l2] || a2 && l2 in a2 || o2 && l2 in o2)) {
        var c2 = Cn(t2, l2);
        try {
          wn(e2, l2, c2);
        } catch (e3) {
        }
      }
    }
  }
  return e2;
}
function $n(e2) {
  return "function" == typeof e2;
}
function In(e2) {
  return "object" == typeof e2 && "styledComponentId" in e2;
}
function An(e2, t2) {
  return e2 && t2 ? "".concat(e2, " ").concat(t2) : e2 || t2 || "";
}
function Nn(e2, t2) {
  if (0 === e2.length) return "";
  for (var n2 = e2[0], i2 = 1; i2 < e2.length; i2++) n2 += e2[i2];
  return n2;
}
function Ln(e2) {
  return null !== e2 && "object" == typeof e2 && e2.constructor.name === Object.name && !("props" in e2 && e2.$$typeof);
}
function On(e2, t2, n2) {
  if (void 0 === n2 && (n2 = false), !n2 && !Ln(e2) && !Array.isArray(e2)) return t2;
  if (Array.isArray(t2)) for (var i2 = 0; i2 < t2.length; i2++) e2[i2] = On(e2[i2], t2[i2]);
  else if (Ln(t2)) for (var i2 in t2) e2[i2] = On(e2[i2], t2[i2]);
  return e2;
}
function Mn(e2, t2) {
  Object.defineProperty(e2, "toString", { value: t2 });
}
function Rn(e2) {
  for (var t2 = [], n2 = 1; n2 < arguments.length; n2++) t2[n2 - 1] = arguments[n2];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e2, " for more information.").concat(t2.length > 0 ? " Args: ".concat(t2.join(", ")) : ""));
}
var Hn = function() {
  function e2(e3) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
  }
  return e2.prototype.indexOfGroup = function(e3) {
    for (var t2 = 0, n2 = 0; n2 < e3; n2++) t2 += this.groupSizes[n2];
    return t2;
  }, e2.prototype.insertRules = function(e3, t2) {
    if (e3 >= this.groupSizes.length) {
      for (var n2 = this.groupSizes, i2 = n2.length, r2 = i2; e3 >= r2; ) if ((r2 <<= 1) < 0) throw Rn(16, "".concat(e3));
      this.groupSizes = new Uint32Array(r2), this.groupSizes.set(n2), this.length = r2;
      for (var o2 = i2; o2 < r2; o2++) this.groupSizes[o2] = 0;
    }
    for (var a2 = this.indexOfGroup(e3 + 1), s2 = (o2 = 0, t2.length); o2 < s2; o2++) this.tag.insertRule(a2, t2[o2]) && (this.groupSizes[e3]++, a2++);
  }, e2.prototype.clearGroup = function(e3) {
    if (e3 < this.length) {
      var t2 = this.groupSizes[e3], n2 = this.indexOfGroup(e3), i2 = n2 + t2;
      this.groupSizes[e3] = 0;
      for (var r2 = n2; r2 < i2; r2++) this.tag.deleteRule(n2);
    }
  }, e2.prototype.getGroup = function(e3) {
    var t2 = "";
    if (e3 >= this.length || 0 === this.groupSizes[e3]) return t2;
    for (var n2 = this.groupSizes[e3], i2 = this.indexOfGroup(e3), r2 = i2 + n2, o2 = i2; o2 < r2; o2++) t2 += "".concat(this.tag.getRule(o2)).concat(Ft);
    return t2;
  }, e2;
}(), Pn = /* @__PURE__ */ new Map(), jn = /* @__PURE__ */ new Map(), zn = 1, _n = function(e2) {
  if (Pn.has(e2)) return Pn.get(e2);
  for (; jn.has(zn); ) zn++;
  var t2 = zn++;
  return Pn.set(e2, t2), jn.set(t2, e2), t2;
}, Wn = function(e2, t2) {
  zn = t2 + 1, Pn.set(e2, t2), jn.set(t2, e2);
}, Bn = "style[".concat(zt, "][").concat(Wt, '="').concat(Bt, '"]'), Fn = new RegExp("^".concat(zt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Vn = function(e2, t2, n2) {
  for (var i2, r2 = n2.split(","), o2 = 0, a2 = r2.length; o2 < a2; o2++) (i2 = r2[o2]) && e2.registerName(t2, i2);
}, Gn = function(e2, t2) {
  for (var n2, i2 = (null !== (n2 = t2.textContent) && void 0 !== n2 ? n2 : "").split(Ft), r2 = [], o2 = 0, a2 = i2.length; o2 < a2; o2++) {
    var s2 = i2[o2].trim();
    if (s2) {
      var l2 = s2.match(Fn);
      if (l2) {
        var c2 = 0 | parseInt(l2[1], 10), d2 = l2[2];
        0 !== c2 && (Wn(d2, c2), Vn(e2, d2, l2[3]), e2.getTag().insertRules(c2, r2)), r2.length = 0;
      } else r2.push(s2);
    }
  }
};
var qn = function(e2) {
  var t2 = document.head, n2 = e2 || t2, i2 = document.createElement("style"), r2 = function(e3) {
    var t3 = Array.from(e3.querySelectorAll("style[".concat(zt, "]")));
    return t3[t3.length - 1];
  }(n2), o2 = void 0 !== r2 ? r2.nextSibling : null;
  i2.setAttribute(zt, _t), i2.setAttribute(Wt, Bt);
  var a2 = "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
  return a2 && i2.setAttribute("nonce", a2), n2.insertBefore(i2, o2), i2;
}, Yn = function() {
  function e2(e3) {
    this.element = qn(e3), this.element.appendChild(document.createTextNode("")), this.sheet = function(e4) {
      if (e4.sheet) return e4.sheet;
      for (var t2 = document.styleSheets, n2 = 0, i2 = t2.length; n2 < i2; n2++) {
        var r2 = t2[n2];
        if (r2.ownerNode === e4) return r2;
      }
      throw Rn(17);
    }(this.element), this.length = 0;
  }
  return e2.prototype.insertRule = function(e3, t2) {
    try {
      return this.sheet.insertRule(t2, e3), this.length++, true;
    } catch (e4) {
      return false;
    }
  }, e2.prototype.deleteRule = function(e3) {
    this.sheet.deleteRule(e3), this.length--;
  }, e2.prototype.getRule = function(e3) {
    var t2 = this.sheet.cssRules[e3];
    return t2 && t2.cssText ? t2.cssText : "";
  }, e2;
}(), Un = function() {
  function e2(e3) {
    this.element = qn(e3), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e2.prototype.insertRule = function(e3, t2) {
    if (e3 <= this.length && e3 >= 0) {
      var n2 = document.createTextNode(t2);
      return this.element.insertBefore(n2, this.nodes[e3] || null), this.length++, true;
    }
    return false;
  }, e2.prototype.deleteRule = function(e3) {
    this.element.removeChild(this.nodes[e3]), this.length--;
  }, e2.prototype.getRule = function(e3) {
    return e3 < this.length ? this.nodes[e3].textContent : "";
  }, e2;
}(), Zn = function() {
  function e2(e3) {
    this.rules = [], this.length = 0;
  }
  return e2.prototype.insertRule = function(e3, t2) {
    return e3 <= this.length && (this.rules.splice(e3, 0, t2), this.length++, true);
  }, e2.prototype.deleteRule = function(e3) {
    this.rules.splice(e3, 1), this.length--;
  }, e2.prototype.getRule = function(e3) {
    return e3 < this.length ? this.rules[e3] : "";
  }, e2;
}(), Xn = Vt, Jn = { isServer: !Vt, useCSSOMInjection: !Gt }, Kn = function() {
  function e2(e3, t2, n2) {
    void 0 === e3 && (e3 = Xt), void 0 === t2 && (t2 = {});
    var i2 = this;
    this.options = Re(Re({}, Jn), e3), this.gs = t2, this.names = new Map(n2), this.server = !!e3.isServer, !this.server && Vt && Xn && (Xn = false, function(e4) {
      for (var t3 = document.querySelectorAll(Bn), n3 = 0, i3 = t3.length; n3 < i3; n3++) {
        var r2 = t3[n3];
        r2 && r2.getAttribute(zt) !== _t && (Gn(e4, r2), r2.parentNode && r2.parentNode.removeChild(r2));
      }
    }(this)), Mn(this, function() {
      return function(e4) {
        for (var t3 = e4.getTag(), n3 = t3.length, i3 = "", r2 = function(n4) {
          var r3 = function(e5) {
            return jn.get(e5);
          }(n4);
          if (void 0 === r3) return "continue";
          var o3 = e4.names.get(r3), a2 = t3.getGroup(n4);
          if (void 0 === o3 || 0 === a2.length) return "continue";
          var s2 = "".concat(zt, ".g").concat(n4, '[id="').concat(r3, '"]'), l2 = "";
          void 0 !== o3 && o3.forEach(function(e5) {
            e5.length > 0 && (l2 += "".concat(e5, ","));
          }), i3 += "".concat(a2).concat(s2, '{content:"').concat(l2, '"}').concat(Ft);
        }, o2 = 0; o2 < n3; o2++) r2(o2);
        return i3;
      }(i2);
    });
  }
  return e2.registerId = function(e3) {
    return _n(e3);
  }, e2.prototype.reconstructWithOptions = function(t2, n2) {
    return void 0 === n2 && (n2 = true), new e2(Re(Re({}, this.options), t2), this.gs, n2 && this.names || void 0);
  }, e2.prototype.allocateGSInstance = function(e3) {
    return this.gs[e3] = (this.gs[e3] || 0) + 1;
  }, e2.prototype.getTag = function() {
    return this.tag || (this.tag = (e3 = function(e4) {
      var t2 = e4.useCSSOMInjection, n2 = e4.target;
      return e4.isServer ? new Zn(n2) : t2 ? new Yn(n2) : new Un(n2);
    }(this.options), new Hn(e3)));
    var e3;
  }, e2.prototype.hasNameForId = function(e3, t2) {
    return this.names.has(e3) && this.names.get(e3).has(t2);
  }, e2.prototype.registerName = function(e3, t2) {
    if (_n(e3), this.names.has(e3)) this.names.get(e3).add(t2);
    else {
      var n2 = /* @__PURE__ */ new Set();
      n2.add(t2), this.names.set(e3, n2);
    }
  }, e2.prototype.insertRules = function(e3, t2, n2) {
    this.registerName(e3, t2), this.getTag().insertRules(_n(e3), n2);
  }, e2.prototype.clearNames = function(e3) {
    this.names.has(e3) && this.names.get(e3).clear();
  }, e2.prototype.clearRules = function(e3) {
    this.getTag().clearGroup(_n(e3)), this.clearNames(e3);
  }, e2.prototype.clearTag = function() {
    this.tag = void 0;
  }, e2;
}(), Qn = /&/g, ei = /^\s*\/\/.*$/gm;
function ti(e2, t2) {
  return e2.map(function(e3) {
    return "rule" === e3.type && (e3.value = "".concat(t2, " ").concat(e3.value), e3.value = e3.value.replaceAll(",", ",".concat(t2, " ")), e3.props = e3.props.map(function(e4) {
      return "".concat(t2, " ").concat(e4);
    })), Array.isArray(e3.children) && "@keyframes" !== e3.type && (e3.children = ti(e3.children, t2)), e3;
  });
}
var ni = new Kn(), ii = function(e2) {
  var t2, n2, i2, r2 = Xt, o2 = r2.options, a2 = void 0 === o2 ? Xt : o2, s2 = r2.plugins, l2 = void 0 === s2 ? Zt : s2, c2 = function(e3, i3, r3) {
    return r3.startsWith(n2) && r3.endsWith(n2) && r3.replaceAll(n2, "").length > 0 ? ".".concat(t2) : e3;
  }, d2 = l2.slice();
  d2.push(function(e3) {
    e3.type === Ve && e3.value.includes("&") && (e3.props[0] = e3.props[0].replace(Qn, n2).replace(i2, c2));
  }), a2.prefix && d2.push(Pt), d2.push(Ht);
  var u2 = function(e3, r3, o3, s3) {
    void 0 === r3 && (r3 = ""), void 0 === o3 && (o3 = ""), void 0 === s3 && (s3 = "&"), t2 = s3, n2 = r3, i2 = new RegExp("\\".concat(n2, "\\b"), "g");
    var l3 = e3.replace(ei, ""), c3 = Nt(o3 || r3 ? "".concat(o3, " ").concat(r3, " { ").concat(l3, " }") : l3);
    a2.namespace && (c3 = ti(c3, a2.namespace));
    var u3, h2 = [];
    return Rt(c3, function(e4) {
      var t3 = ot(e4);
      return function(n3, i3, r4, o4) {
        for (var a3 = "", s4 = 0; s4 < t3; s4++) a3 += e4[s4](n3, i3, r4, o4) || "";
        return a3;
      };
    }(d2.concat((u3 = function(e4) {
      return h2.push(e4);
    }, function(e4) {
      e4.root || (e4 = e4.return) && u3(e4);
    })))), h2;
  };
  return u2.hash = l2.length ? l2.reduce(function(e3, t3) {
    return t3.name || Rn(15), sn(e3, t3.name);
  }, 5381).toString() : "", u2;
}(), ri = i.createContext({ shouldForwardProp: void 0, styleSheet: ni, stylis: ii });
function oi() {
  return reactExports.useContext(ri);
}
ri.Consumer, i.createContext(void 0);
var ai = function() {
  function e2(e3, t2) {
    var n2 = this;
    this.inject = function(e4, t3) {
      void 0 === t3 && (t3 = ii);
      var i2 = n2.name + t3.hash;
      e4.hasNameForId(n2.id, i2) || e4.insertRules(n2.id, i2, t3(n2.rules, i2, "@keyframes"));
    }, this.name = e3, this.id = "sc-keyframes-".concat(e3), this.rules = t2, Mn(this, function() {
      throw Rn(12, String(n2.name));
    });
  }
  return e2.prototype.getName = function(e3) {
    return void 0 === e3 && (e3 = ii), this.name + e3.hash;
  }, e2;
}(), si = function(e2) {
  return e2 >= "A" && e2 <= "Z";
};
function li(e2) {
  for (var t2 = "", n2 = 0; n2 < e2.length; n2++) {
    var i2 = e2[n2];
    if (1 === n2 && "-" === i2 && "-" === e2[0]) return e2;
    si(i2) ? t2 += "-" + i2.toLowerCase() : t2 += i2;
  }
  return t2.startsWith("ms-") ? "-" + t2 : t2;
}
var ci = function(e2) {
  return null == e2 || false === e2 || "" === e2;
}, di = function(e2) {
  var t2, n2, i2 = [];
  for (var r2 in e2) {
    var o2 = e2[r2];
    e2.hasOwnProperty(r2) && !ci(o2) && (Array.isArray(o2) && o2.isCss || $n(o2) ? i2.push("".concat(li(r2), ":"), o2, ";") : Ln(o2) ? i2.push.apply(i2, He(He(["".concat(r2, " {")], di(o2), false), ["}"], false)) : i2.push("".concat(li(r2), ": ").concat((t2 = r2, null == (n2 = o2) || "boolean" == typeof n2 || "" === n2 ? "" : "number" != typeof n2 || 0 === n2 || t2 in jt || t2.startsWith("--") ? String(n2).trim() : "".concat(n2, "px")), ";")));
  }
  return i2;
};
function ui(e2, t2, n2, i2) {
  if (ci(e2)) return [];
  if (In(e2)) return [".".concat(e2.styledComponentId)];
  if ($n(e2)) {
    if (!$n(o2 = e2) || o2.prototype && o2.prototype.isReactComponent || !t2) return [e2];
    var r2 = e2(t2);
    return ui(r2, t2, n2, i2);
  }
  var o2;
  return e2 instanceof ai ? n2 ? (e2.inject(n2, i2), [e2.getName(i2)]) : [e2] : Ln(e2) ? di(e2) : Array.isArray(e2) ? Array.prototype.concat.apply(Zt, e2.map(function(e3) {
    return ui(e3, t2, n2, i2);
  })) : [e2.toString()];
}
var hi = ln(Bt), pi = function() {
  function e2(e3, t2, n2) {
    this.rules = e3, this.staticRulesId = "", this.isStatic = (void 0 === n2 || n2.isStatic) && function(e4) {
      for (var t3 = 0; t3 < e4.length; t3 += 1) {
        var n3 = e4[t3];
        if ($n(n3) && !In(n3)) return false;
      }
      return true;
    }(e3), this.componentId = t2, this.baseHash = sn(hi, t2), this.baseStyle = n2, Kn.registerId(t2);
  }
  return e2.prototype.generateAndInjectStyles = function(e3, t2, n2) {
    var i2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e3, t2, n2) : "";
    if (this.isStatic && !n2.hash) if (this.staticRulesId && t2.hasNameForId(this.componentId, this.staticRulesId)) i2 = An(i2, this.staticRulesId);
    else {
      var r2 = Nn(ui(this.rules, e3, t2, n2)), o2 = on(sn(this.baseHash, r2) >>> 0);
      if (!t2.hasNameForId(this.componentId, o2)) {
        var a2 = n2(r2, ".".concat(o2), void 0, this.componentId);
        t2.insertRules(this.componentId, o2, a2);
      }
      i2 = An(i2, o2), this.staticRulesId = o2;
    }
    else {
      for (var s2 = sn(this.baseHash, n2.hash), l2 = "", c2 = 0; c2 < this.rules.length; c2++) {
        var d2 = this.rules[c2];
        if ("string" == typeof d2) l2 += d2;
        else if (d2) {
          var u2 = Nn(ui(d2, e3, t2, n2));
          s2 = sn(s2, u2 + c2), l2 += u2;
        }
      }
      if (l2) {
        var h2 = on(s2 >>> 0);
        t2.hasNameForId(this.componentId, h2) || t2.insertRules(this.componentId, h2, n2(l2, ".".concat(h2), void 0, this.componentId)), i2 = An(i2, h2);
      }
    }
    return i2;
  }, e2;
}(), mi = i.createContext(void 0);
mi.Consumer;
var fi = {};
function vi(e2, t2, n2) {
  var r2 = In(e2), o2 = e2, a2 = !dn(e2), s2 = t2.attrs, l2 = void 0 === s2 ? Zt : s2, c2 = t2.componentId, h2 = void 0 === c2 ? function(e3, t3) {
    var n3 = "string" != typeof e3 ? "sc" : en(e3);
    fi[n3] = (fi[n3] || 0) + 1;
    var i2 = "".concat(n3, "-").concat(cn(Bt + n3 + fi[n3]));
    return t3 ? "".concat(t3, "-").concat(i2) : i2;
  }(t2.displayName, t2.parentComponentId) : c2, p2 = t2.displayName, m2 = void 0 === p2 ? function(e3) {
    return dn(e3) ? "styled.".concat(e3) : "Styled(".concat(function(e4) {
      return e4.displayName || e4.name || "Component";
    }(e3), ")");
  }(e2) : p2, f2 = t2.displayName && t2.componentId ? "".concat(en(t2.displayName), "-").concat(t2.componentId) : t2.componentId || h2, g2 = r2 && o2.attrs ? o2.attrs.concat(l2).filter(Boolean) : l2, v2 = t2.shouldForwardProp;
  if (r2 && o2.shouldForwardProp) {
    var y2 = o2.shouldForwardProp;
    if (t2.shouldForwardProp) {
      var w2 = t2.shouldForwardProp;
      v2 = function(e3, t3) {
        return y2(e3, t3) && w2(e3, t3);
      };
    } else v2 = y2;
  }
  var b2 = new pi(n2, f2, r2 ? o2.componentStyle : void 0);
  function x2(e3, t3) {
    return function(e4, t4, n3) {
      var r3 = e4.attrs, o3 = e4.componentStyle, a3 = e4.defaultProps, s3 = e4.foldedComponentIds, l3 = e4.styledComponentId, c3 = e4.target, h3 = i.useContext(mi), p3 = oi(), m3 = e4.shouldForwardProp || p3.shouldForwardProp;
      var f3 = function(e5, t5, n4) {
        return void 0 === n4 && (n4 = Xt), e5.theme !== n4.theme && e5.theme || t5 || n4.theme;
      }(t4, h3, a3) || Xt, g3 = function(e5, t5, n4) {
        for (var i2, r4 = Re(Re({}, t5), { className: void 0, theme: n4 }), o4 = 0; o4 < e5.length; o4 += 1) {
          var a4 = $n(i2 = e5[o4]) ? i2(r4) : i2;
          for (var s4 in a4) r4[s4] = "className" === s4 ? An(r4[s4], a4[s4]) : "style" === s4 ? Re(Re({}, r4[s4]), a4[s4]) : a4[s4];
        }
        return t5.className && (r4.className = An(r4.className, t5.className)), r4;
      }(r3, t4, f3), v3 = g3.as || c3, y3 = {};
      for (var w3 in g3) void 0 === g3[w3] || "$" === w3[0] || "as" === w3 || "theme" === w3 && g3.theme === f3 || ("forwardedAs" === w3 ? y3.as = g3.forwardedAs : m3 && !m3(w3, v3) || (y3[w3] = g3[w3], m3 || true));
      var b3 = function(e5, t5) {
        var n4 = oi(), i2 = e5.generateAndInjectStyles(t5, n4.styleSheet, n4.stylis);
        return i2;
      }(o3, g3);
      var x3 = An(s3, l3);
      return b3 && (x3 += " " + b3), g3.className && (x3 += " " + g3.className), y3[dn(v3) && !Jt.has(v3) ? "class" : "className"] = x3, y3.ref = n3, reactExports.createElement(v3, y3);
    }(C2, e3, t3);
  }
  x2.displayName = m2;
  var C2 = i.forwardRef(x2);
  return C2.attrs = g2, C2.componentStyle = b2, C2.displayName = m2, C2.shouldForwardProp = v2, C2.foldedComponentIds = r2 ? An(o2.foldedComponentIds, o2.styledComponentId) : "", C2.styledComponentId = f2, C2.target = r2 ? o2.target : e2, Object.defineProperty(C2, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(e3) {
    this._foldedDefaultProps = r2 ? function(e4) {
      for (var t3 = [], n3 = 1; n3 < arguments.length; n3++) t3[n3 - 1] = arguments[n3];
      for (var i2 = 0, r3 = t3; i2 < r3.length; i2++) On(e4, r3[i2], true);
      return e4;
    }({}, o2.defaultProps, e3) : e3;
  } }), Mn(C2, function() {
    return ".".concat(C2.styledComponentId);
  }), a2 && Tn(C2, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), C2;
}
function yi(e2, t2) {
  for (var n2 = [e2[0]], i2 = 0, r2 = t2.length; i2 < r2; i2 += 1) n2.push(t2[i2], e2[i2 + 1]);
  return n2;
}
var wi = function(e2) {
  return Object.assign(e2, { isCss: true });
};
function bi(e2) {
  for (var t2 = [], n2 = 1; n2 < arguments.length; n2++) t2[n2 - 1] = arguments[n2];
  if ($n(e2) || Ln(e2)) return wi(ui(yi(Zt, He([e2], t2, true))));
  var i2 = e2;
  return 0 === t2.length && 1 === i2.length && "string" == typeof i2[0] ? ui(i2) : wi(ui(yi(i2, t2)));
}
function xi(e2, t2, n2) {
  if (void 0 === n2 && (n2 = Xt), !t2) throw Rn(1, t2);
  var i2 = function(i3) {
    for (var r2 = [], o2 = 1; o2 < arguments.length; o2++) r2[o2 - 1] = arguments[o2];
    return e2(t2, n2, bi.apply(void 0, He([i3], r2, false)));
  };
  return i2.attrs = function(i3) {
    return xi(e2, t2, Re(Re({}, n2), { attrs: Array.prototype.concat(n2.attrs, i3).filter(Boolean) }));
  }, i2.withConfig = function(i3) {
    return xi(e2, t2, Re(Re({}, n2), i3));
  }, i2;
}
var Ci = function(e2) {
  return xi(vi, e2);
}, ki = Ci;
function Si(e2) {
  for (var t2 = [], n2 = 1; n2 < arguments.length; n2++) t2[n2 - 1] = arguments[n2];
  var i2 = Nn(bi.apply(void 0, He([e2], t2, false))), r2 = cn(i2);
  return new ai(r2, i2);
}
Jt.forEach(function(e2) {
  ki[e2] = Ci(e2);
});
const $i = bi(["scrollbar-color:", " default;scrollbar-width:thin;&::-webkit-scrollbar{width:0.3em;}&::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,0.2);}&::-webkit-scrollbar-thumb{background-color:", ";outline:1px solid ", ";}"], (e2) => {
  var t2;
  return null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.primary;
}, (e2) => {
  var t2;
  return null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.primary;
}, (e2) => {
  var t2;
  return null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.primary;
}), Ii = bi(["&::after{content:'';position:absolute;bottom:0;left:0;width:100%;height:2rem;background:linear-gradient( 0deg,var(--rc-gradient-color) 0%,rgba(255,255,255,0) 100% );}"]), Ai = ki.div.withConfig({ displayName: "MediaWrapper", componentId: "sc-1yk7mm5-0" })(["align-items:flex-start;align-self:center;background:", ";border-radius:4px;flex-direction:row;height:", ";padding:0.5em;position:relative;text-align:", ";width:calc(100% - 1em);", ";", ""], (e2) => {
  var t2;
  return e2.$textOverlay ? "none" : null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.cardMediaBgColor;
}, (e2) => e2.$textOverlay ? "calc(100% - 1em)" : "0", (e2) => e2.align, (e2) => e2.$cardHeight ? `min-height: ${e2.$cardHeight}px;` : "", (e2) => "HORIZONTAL" === e2.mode || "left" === e2.dir ? "\n        justify-content: flex-start;\n      " : "\n        justify-content: flex-end;\n      "), Ni = ki.img.withConfig({ displayName: "CardImage", componentId: "sc-1yk7mm5-1" })(["flex:4;justify-self:center;margin-left:auto;margin-right:auto;height:100%;width:100%;object-fit:", ";object-position:center;visibility:", ";border-radius:", ";"], (e2) => e2.fit || "cover", (e2) => e2.$visible ? "visible" : "hidden", (e2) => e2.$enableBorderRadius ? "6px" : "0"), Li = ki.video.withConfig({ displayName: "CardVideo", componentId: "sc-1yk7mm5-2" })(["max-width:100%;max-height:100%;margin-left:auto;margin-right:auto;"]), Oi = ki.div.withConfig({ displayName: "MediaDetailsWrapper", componentId: "sc-1yk7mm5-3" })(["bottom:0;left:0;right:0;margin-right:auto;width:", ";display:flex;flex-direction:column;flex:1;overflow:hidden;", " position:", ";", " ", " --rc-gradient-color:", ";", ""], (e2) => {
  switch (e2.mode) {
    case "HORIZONTAL":
    case "VERTICAL":
    case "VERTICAL_ALTERNATING":
      return "calc(90% - 0rem)";
  }
}, (e2) => e2.$textInMedia && e2.$expandFull ? bi(["height:100%;width:100%;border:0;"]) : e2.$showText ? e2.$textInMedia && e2.$expandable ? bi(["box-shadow:0 0 10px 0 rgba(0,0,0,0.2);border-radius:10px;height:50%;"]) : void 0 : bi(["height:15%;box-shadow:0 0 10px 0 rgba(0,0,0,0.2);border-radius:10px;"]), (e2) => e2.$absolutePosition ? "absolute" : "relative", (e2) => {
  var t2, n2;
  return e2.$absolutePosition ? `
    left: 50%;
    bottom: ${e2.$expandFull ? "0%" : " 5%"};
    transform: translateX(-50%);
    background: ${e2.$showText ? null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.cardDetailsBackGround : null === (n2 = e2.theme) || void 0 === n2 ? void 0 : n2.cardBgColor};
    // backdrop-filter: blur(1px);
    padding: 0.25rem;
    ${e2.$showText ? "overflow: auto;" : "overflow: hidden;"}
    transition: height 0.25s ease-out, width 0.25s ease-out, bottom 0.25s ease-out, background 0.25s ease-out;
  ` : "";
}, ({ $borderLessCard: e2 }) => e2 ? "border-radius: 6px; box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);" : "", (e2) => e2.$gradientColor, (e2) => e2.$gradientColor ? Ii : null), Mi = ki.span.withConfig({ displayName: "ErrorMessage", componentId: "sc-1yk7mm5-4" })(["color:#a3a3a3;left:50%;position:absolute;text-align:center;top:50%;transform:translateY(-50%) translateX(-50%);"]), Di = ki.iframe.withConfig({ displayName: "IFrameVideo", componentId: "sc-1yk7mm5-5" })(["position:relative;height:100%;width:100%;"]), Ei = ki.div.withConfig({ displayName: "DetailsTextWrapper", componentId: "sc-1yk7mm5-6" })(["align-self:center;display:flex;transition:height 0.5s ease;width:calc(100%);background:", ";color:", ";padding:0.5rem;border-bottom-left-radius:8px;border-bottom-right-radius:8px;position:relative;align-items:flex-start;justify-content:center;", " ", " ", " ", ""], (e2) => e2.background, (e2) => {
  var t2;
  return null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.cardDetailsColor;
}, $i, (e2) => e2.$expandFull ? "\n        overflow: auto;\n      " : "\n        overflow: hidden;\n      ", (e2) => e2.$show ? "\n    height: 100%;" : "\n    height: 0;\n  ", (e2) => !e2.$expandFull && Ii), Ri = ki.div.withConfig({ displayName: "CardMediaHeader", componentId: "sc-1yk7mm5-7" })(["padding:0.5rem 0 0.5rem 0.5rem;display:flex;align-items:center;justify-content:center;"]), Hi = ki.div.withConfig({ displayName: "ImageWrapper", componentId: "sc-1yk7mm5-8" })(["width:100%;height:100%;overflow:hidden;border-radius:6px;"]), Pi = reactExports.memo(({ theme: t2, show: n2, expand: i2, textOverlay: r2, text: o2, height: s2, onRender: c2 }) => {
  const d2 = reactExports.useCallback((e2) => {
    e2 && (null == c2 || c2(e2.clientHeight));
  }, []), u2 = o2, h2 = reactExports.useMemo(() => {
    const e2 = (null == t2 ? void 0 : t2.cardDetailsBackGround) || "";
    return e2 ? Se(e2, 0.8) : e2;
  }, [null == t2 ? void 0 : t2.cardDetailsBackGround]);
  return r2 ? jsxRuntimeExports.jsx(Ei, { ref: d2, $expandFull: i2, theme: t2, $show: n2, background: h2, children: jsxRuntimeExports.jsx(u2, {}) }) : null;
}, (e2, t2) => e2.height === t2.height && e2.show === t2.show && e2.expand === t2.expand && JSON.stringify(e2.theme) === JSON.stringify(t2.theme));
Pi.displayName = "Details Text";
const ji = () => jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: jsxRuntimeExports.jsx("path", { d: "M6 18h12v2H6zm5-14v8.586L6.707 8.293 5.293 9.707 12 16.414l6.707-6.707-1.414-1.414L13 12.586V4z" }) }), zi = () => jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, children: jsxRuntimeExports.jsx("path", { d: "M20 6 9 17l-5-5" }) }), _i = () => jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", children: jsxRuntimeExports.jsx("path", { d: "m6 9 6 6 6-6" }) }), Wi = () => jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-chevron-left", children: jsxRuntimeExports.jsx("polyline", { points: "15 18 9 12 15 6" }) }), Bi = () => jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-chevron-right", children: jsxRuntimeExports.jsx("polyline", { points: "9 18 15 12 9 6" }) });
function Fi() {
  return jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "prefix__feather prefix__feather-x", children: jsxRuntimeExports.jsx("path", { d: "M18 6L6 18M6 6l12 12" }) });
}
const Vi = (t2) => jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", strokeLinecap: "round", strokeLinejoin: "round", fill: "currentColor", children: jsxRuntimeExports.jsx("path", { d: "M19 3H5c-1.103 0-2 .897-2 2v4h18V5c0-1.103-.897-2-2-2zM3 19c0 1.103.897 2 2 2h8V11H3v8zm12 2h4c1.103 0 2-.897 2-2v-8h-6v10z" }) }), Gi = () => jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-maximize-2", children: jsxRuntimeExports.jsx("path", { d: "M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" }) }), qi = () => jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: jsxRuntimeExports.jsx("path", { d: "M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7" }) }), Yi = () => jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: jsxRuntimeExports.jsx("path", { d: "M5 12h14" }) }), Ui = () => jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24", children: jsxRuntimeExports.jsx("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }) }), Zi = () => jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: jsxRuntimeExports.jsx("path", { d: "M12 5v14M5 12h14" }) }), Xi = () => jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24", children: [jsxRuntimeExports.jsx("circle", { cx: 12, cy: 12, r: 10 }), jsxRuntimeExports.jsx("path", { d: "M9 9h6v6H9z" })] }), Ji = () => jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-sun", children: [jsxRuntimeExports.jsx("circle", { cx: 12, cy: 12, r: 5 }), jsxRuntimeExports.jsx("path", { d: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" })] }), Ki = () => jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: jsxRuntimeExports.jsx("path", { d: "M9 16h2v4h2V6h2v14h2V6h3V4H9c-3.309 0-6 2.691-6 6s2.691 6 6 6zM9 6h2v8H9c-2.206 0-4-1.794-4-4s1.794-4 4-4z" }) }), Qi = bi(["align-items:center;background:none;border-radius:50%;border:none;cursor:pointer;display:flex;height:1.5rem;justify-content:center;padding:0;width:1.5rem;margin:0 0.25rem;background:", ";color:#fff;svg{width:70%;height:70%;}"], (e2) => {
  var t2;
  return null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.primary;
}), er = ki.button.withConfig({ displayName: "ExpandButton", componentId: "sc-14xzasw-0" })(["", ""], Qi), tr = ki.button.withConfig({ displayName: "ShowHideTextButton", componentId: "sc-14xzasw-1" })(["", ""], Qi), nr = ki.ul.withConfig({ displayName: "ButtonWrapper", componentId: "sc-14xzasw-2" })(["display:flex;flex-direction:row;justify-content:flex-end;list-style:none;margin:0;padding:0;margin-left:auto;"]), ir = reactExports.memo(({ theme: t2, expanded: n2, onExpand: i2, textOverlay: r2 }) => {
  const o2 = reactExports.useMemo(() => n2 ? "Minimize" : "Maximize", [n2]);
  return r2 ? jsxRuntimeExports.jsx(er, { onPointerDown: i2, onKeyDown: (e2) => "Enter" === e2.key && (null == i2 ? void 0 : i2(e2)), theme: t2, "aria-expanded": n2, tabIndex: 0, "aria-label": o2, title: o2, children: jsxRuntimeExports.jsx(n2 ? qi : Gi, {}) }) : null;
}, (e2, t2) => e2.expanded === t2.expanded);
ir.displayName = "Expand Button";
const rr = reactExports.memo(({ textOverlay: t2, onToggle: n2, theme: i2, show: r2 }) => {
  const o2 = reactExports.useMemo(() => r2 ? "Hide Text" : "Show Text", [r2]);
  return t2 ? jsxRuntimeExports.jsx(tr, { onPointerDown: n2, theme: i2, tabIndex: 0, onKeyDown: (e2) => "Enter" === e2.key && (null == n2 ? void 0 : n2(e2)), "aria-label": o2, title: o2, children: jsxRuntimeExports.jsx(r2 ? Yi : Zi, {}) }) : null;
});
rr.displayName = "Show Hide Text Button";
const or = Si(["0%{opacity:0;transform:scale(0.95);}100%{opacity:1;transform:scale(1);}"]), ar = Si(["0%{opacity:0;transform:translateY(-50%);}100%{opacity:1;transform:translateY(0);}"]), sr = Si(["0%{opacity:0;transform:translateX(-50%);}100%{opacity:1;transform:translateX(0);}"]), lr = Si(["0%{opacity:0;transform:translateX(50%);}100%{opacity:1;transform:translateX(0);}"]), cr = ki.section.withConfig({ displayName: "TimelineItemContentWrapper", componentId: "sc-d7qjm1-0" })(["align-items:flex-start;background:", ";border-radius:8px;display:flex;position:absolute;", ";flex-direction:column;justify-content:flex-start;line-height:1.5em;margin:", ";max-width:", "px;", " ", ";position:relative;text-align:left;width:98%;z-index:0;", " ", " height:", ";&:focus{outline:1px solid ", ";}", " ", ""], (e2) => e2.theme.cardBgColor, ({ borderLessCards: e2 }) => e2 ? "none" : "filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.3))", (e2) => "HORIZONTAL" === e2.mode ? "0 auto" : "", (e2) => e2.$maxWidth, ({ $textDensity: e2, $customContent: t2, $minHeight: n2 }) => bi(["", ";"], "HIGH" === e2 ? `${t2 ? "height" : "min-height"}: ${n2}px` : ""), (e2) => e2.$textOverlay ? `min-height: ${e2.$minHeight}px` : "", (e2) => e2.$highlight ? bi(["&:hover{filter:drop-shadow(0 0 5px rgba(0,0,0,0.3)) brightness(1.05);&::before{content:'';height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1;border:2px solid ", ";border-radius:4px;}}"], e2.theme.primary) : bi([""]), (e2) => e2.$isNested ? bi(["background:", ";box-shadow:0 0 5px 2px rgba(0,0,0,0.1);"], e2.theme.nestedCardBgColor) : bi([""]), (e2) => e2.$textOverlay ? "0" : "", (e2) => {
  var t2;
  return null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.primary;
}, (e2) => {
  if (e2.$slideShowActive && e2.$active) return "slide_in" === e2.$slideShowType ? bi(["animation:", " 0.5s ease-in-out;"], ar) : "slide_from_sides" === e2.$slideShowType && "left" === e2.$branchDir ? bi(["animation:", " 0.5s ease-in-out;"], sr) : "slide_from_sides" === e2.$slideShowType && "right" === e2.$branchDir ? bi(["animation:", " 0.5s ease-in-out;"], lr) : bi(["animation:", " 0.5s ease-in-out;"], or);
}, (e2) => e2.$slideShowActive && e2.$active ? bi(["opacity:1;animation-timing-function:ease-in-out;animation-duration:0.5s;"]) : e2.$slideShowActive && !e2.$active ? bi(["opacity:0;"]) : void 0), dr = ki.header.withConfig({ displayName: "TimelineCardHeader", componentId: "sc-d7qjm1-1" })(["width:100%;padding:0.5rem;"]), ur = ki.h2.withConfig({ displayName: "CardSubTitle", componentId: "sc-d7qjm1-2" })(["color:", ";font-size:", ";font-weight:600;margin:0;text-align:left;width:97%;padding:", ";"], (e2) => e2.theme.cardSubtitleColor, (e2) => e2.$fontSize, (e2) => e2.$padding ? "0.5rem 0 0.5rem 0.5rem;" : ""), hr = ki.h1.withConfig({ displayName: "CardTitle", componentId: "sc-d7qjm1-3" })(["color:", ";font-size:", ";font-weight:600;margin:0.25rem 0 0.5rem 0;text-align:left;width:95%;padding:", " &.active{color:", ";}"], (e2) => e2.theme.cardTitleColor, (e2) => e2.$fontSize, (e2) => e2.$padding ? "0.2rem 0 0.25rem 0.5rem;" : "", (e2) => e2.theme.primary), pr = ki.a.withConfig({ displayName: "CardTitleAnchor", componentId: "sc-d7qjm1-4" })(["color:inherit;&:active{color:inherit;}"]), mr = ki.p.withConfig({ displayName: "TimelineContentDetails", componentId: "sc-d7qjm1-5" })(["font-size:0.85rem;font-weight:400;margin:0;width:100%;color:", ";"], (e2) => e2.theme.cardDetailsColor), fr = ki.span.withConfig({ displayName: "TimelineSubContent", componentId: "sc-d7qjm1-6" })(["margin-bottom:0.5rem;display:block;font-size:", ";color:", ";"], (e2) => e2.fontSize, (e2) => e2.theme.cardDetailsColor), gr = ki.div.withConfig({ displayName: "TimelineContentDetailsWrapper", componentId: "sc-d7qjm1-7" })(["align-items:center;display:flex;flex-direction:column;margin:0 auto;margin-top:0.5em;margin-bottom:0.5em;position:relative;", " ", " overflow-x:hidden;overflow-y:auto;scrollbar-color:", " default;scrollbar-width:thin;transition:max-height 0.25s ease-in-out;width:", ";padding:0.25rem 0.25rem;", " $", " &::-webkit-scrollbar{width:0.3em;}&::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,0.2);}&::-webkit-scrollbar-thumb{background-color:", ";outline:1px solid ", ";}&.show-less{scrollbar-width:none;&::-webkit-scrollbar{width:0;}overflow:hidden;}--rc-gradient-color:", ";", ""], ({ $useReadMore: e2, $customContent: t2, $showMore: n2, height: i2 = 0, $textOverlay: r2 }) => !e2 || t2 || n2 || r2 ? "height: 100%" : `max-height: ${i2}px;`, ({ $cardHeight: e2 = 0, $contentHeight: t2 = 0, height: n2 = 0, $showMore: i2, $textOverlay: r2 }) => i2 && !r2 ? `max-height: ${(e2 || 0) + (t2 || 0) - n2}px;` : "", (e2) => {
  var t2;
  return null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.primary;
}, (e2) => e2.$borderLess ? "calc(100% - 0.5rem)" : "calc(95% - 0.5rem)", (e2) => e2.$customContent ? "height: 100%;" : "", ({ height: e2 = 0, $cardHeight: t2 = 0, $contentHeight: n2 = 0, $showMore: i2, $useReadMore: r2 }) => i2 && r2 && t2 ? bi(["animation:", " 0.25s ease-in-out;"], Si(["0%{max-height:", "px;}100%{max-height:", "px;}"], e2, t2 + n2 - e2)) : "", (e2) => {
  var t2;
  return null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.primary;
}, (e2) => {
  var t2;
  return null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.primary;
}, (e2) => e2.$gradientColor, Ii), vr = ki.button.withConfig({ displayName: "ShowMore", componentId: "sc-d7qjm1-8" })(["align-items:center;align-self:flex-end;border-radius:4px;cursor:pointer;display:", ";font-size:0.75rem;justify-self:flex-end;margin-bottom:0.5em;margin-left:0.5em;margin-right:0.5em;margin-top:auto;padding:0.25em;color:", ";border:0;background:none;&:hover{text-decoration:underline;}"], (e2) => "true" === e2.show ? "flex" : "none", (e2) => e2.theme.primary), yr = ki.progress.withConfig({ displayName: "SlideShowProgressBar", componentId: "sc-d7qjm1-9" })(["background:", ";bottom:-0.75em;display:block;height:4px;left:50%;transform:translateX(-50%);position:absolute;border-radius:2px;gggg border:0;", " ", " svg{position:absolute;left:0;top:0;width:100%;}"], (e2) => e2.color, (e2) => {
  if (e2.$paused) return bi(["left:50%;transform:translateX(-50%);"]);
}, (e2) => !e2.$paused && e2.$startWidth && e2.$startWidth > 0 ? bi(["animation:", " ", "ms ease-in;animation-play-state:running;"], Si(["0%{width:", "px;}100%{width:", "px;}"], e2.$startWidth, 0), e2.$duration) : bi(["animation-play-state:paused;width:", "px;"], e2.$startWidth)), wr = ki.span.withConfig({ displayName: "ChevronIconWrapper", componentId: "sc-d7qjm1-10" })(["align-items:center;display:flex;height:1.25em;justify-content:center;margin-left:0.2em;margin-top:0.2em;width:1.25em;", ";svg{height:100%;width:100%;}"], (e2) => "false" === e2.collapsed ? "\n      transform: rotate(90deg);\n  " : "transform: rotate(-90deg)"), br = ki.span.withConfig({ displayName: "TriangleIconWrapper", componentId: "sc-d7qjm1-11" })(["display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;position:absolute;top:calc(50%);background:", ";transform:translateY(-50%) rotate(225deg);z-index:-1;& svg{width:100%;height:100%;fill:#fff;}", ";"], (e2) => e2.theme.cardBgColor, (e2) => "left" === e2.dir ? `right: ${e2.offset}px;` : `left: ${e2.offset}px;`), xr = i.memo(({ content: t2, color: n2, dir: i2, theme: r2, fontSize: o2, classString: a2, padding: s2 }) => t2 ? jsxRuntimeExports.jsx(ur, { style: { color: n2 }, dir: i2, theme: r2, $fontSize: o2, className: Ee("card-sub-title", a2), $padding: s2, children: t2 }) : null, (e2, t2) => {
  var n2, i2;
  return (null === (n2 = e2.theme) || void 0 === n2 ? void 0 : n2.cardSubtitleColor) === (null === (i2 = t2.theme) || void 0 === i2 ? void 0 : i2.cardSubtitleColor);
});
xr.displayName = "Timeline Content";
const Cr = ({ title: t2, url: n2, theme: i2, color: r2, dir: o2, active: a2, fontSize: s2 = "1rem", classString: l2 = "", padding: c2 = false }) => t2 ? jsxRuntimeExports.jsx(hr, { className: Ee(a2 ? "active" : "", { [l2]: true }), theme: i2, style: { color: r2 }, dir: o2, $fontSize: s2, "data-class": l2, $padding: c2, children: n2 ? jsxRuntimeExports.jsx(pr, { href: n2, target: "_blank", rel: "noreferrer", children: t2 }) : t2 }) : null;
Cr.displayName = "Timeline Title";
const kr = ({ active: i2, id: c2, onMediaStateChange: d2, title: u2, content: m2, media: f2, slideshowActive: g2, url: v2, detailsText: y2, showProgressBar: w2, remainInterval: b2, startWidth: x2, paused: C2, triangleDir: k2, resuming: S2, progressRef: T2 }) => {
  const $2 = reactExports.useRef(null), [I2, A2] = reactExports.useState(false), N2 = reactExports.useRef(null), [L2, O2] = reactExports.useState(0), [M2, D2] = reactExports.useState(false), [E2, R2] = reactExports.useState(true), [H2, P2] = reactExports.useState(false), { mode: j2, fontSizes: z2, classNames: _2, mediaHeight: W2, borderLessCards: B2, textOverlay: F2, theme: V2, cardHeight: G2, mediaSettings: q2 } = reactExports.useContext(Le);
  reactExports.useEffect(() => {
    $2 && (i2 ? $2.current && $2.current.play() : $2.current && $2.current.pause());
  }, [i2]);
  const Y2 = reactExports.useCallback(() => {
    P2(true);
  }, []), U2 = reactExports.useCallback(() => {
    A2(true), d2({ id: c2, paused: false, playing: false });
  }, [d2, c2]), Z2 = reactExports.memo(({ message: t2 }) => jsxRuntimeExports.jsx(Mi, { children: t2 })), X2 = reactExports.useMemo(() => /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/.test(f2.source.url), []), J2 = reactExports.useMemo(() => jsxRuntimeExports.jsx(Di, { frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, src: `${f2.source.url}${i2 ? "?autoplay=1&enablejsapi=1" : "?enablejsapi=1"}`, title: f2.name }), [i2]), K2 = reactExports.useMemo(() => jsxRuntimeExports.jsx(Li, { controls: true, autoPlay: i2, ref: $2, onLoadedData: Y2, onPlay: () => d2({ id: c2, paused: false, playing: true }), onPause: () => d2({ id: c2, paused: true, playing: false }), onEnded: () => d2({ id: c2, paused: false, playing: false }), onError: U2, children: jsxRuntimeExports.jsx("source", { src: f2.source.url }) }), [i2]), Q2 = reactExports.useMemo(() => jsxRuntimeExports.jsx(Ni, { src: f2.source.url, mode: j2, onLoad: Y2, onError: U2, $visible: H2, alt: f2.name, loading: "lazy", $enableBorderRadius: B2, fit: null == q2 ? void 0 : q2.imageFit }), [H2, B2]);
  Z2.displayName = "Error Message";
  const ee2 = reactExports.useCallback((e2) => {
    e2 && O2(e2);
  }, []), te2 = reactExports.useCallback((e2) => {
    D2((e3) => !e3), R2(true);
  }, []), ne2 = reactExports.useCallback((e2) => {
    D2(false), R2((e3) => !e3);
  }, []), ie2 = reactExports.useMemo(() => ("VERTICAL" === j2 || "VERTICAL_ALTERNATING" === j2) && F2, []), re2 = reactExports.useMemo(() => E2 && !!y2, [E2, y2]), oe2 = reactExports.useMemo(() => u2 || m2 || y2, [u2, m2, y2]), ae2 = reactExports.useMemo(() => F2 && !!y2, [m2, y2]), se2 = reactExports.useMemo(() => Se((null == V2 ? void 0 : V2.cardDetailsBackGround) || "", 0.8), [null == V2 ? void 0 : V2.cardDetailsBackGround]), le2 = reactExports.useMemo(() => !M2 && E2 && F2, [M2, E2]), ce2 = reactExports.useMemo(() => F2 ? G2 : W2, []), de2 = reactExports.useMemo(() => jsxRuntimeExports.jsxs(Oi, { mode: j2, $absolutePosition: F2, $textInMedia: F2, ref: N2, theme: V2, $expandFull: M2, $showText: E2, $expandable: ae2, $gradientColor: le2 ? se2 : null, children: [jsxRuntimeExports.jsxs(Ri, { children: [jsxRuntimeExports.jsx(Cr, { title: u2, theme: V2, active: i2, url: v2, fontSize: null == z2 ? void 0 : z2.cardTitle, classString: null == _2 ? void 0 : _2.cardTitle }), ae2 ? jsxRuntimeExports.jsxs(nr, { children: [jsxRuntimeExports.jsx(rr, { onToggle: ne2, show: E2, textOverlay: true, theme: V2 }), jsxRuntimeExports.jsx(ir, { theme: V2, expanded: M2, onExpand: te2, textOverlay: true })] }) : null] }), E2 && jsxRuntimeExports.jsx(xr, { content: m2, fontSize: null == z2 ? void 0 : z2.cardSubtitle, classString: null == _2 ? void 0 : _2.cardSubTitle, padding: true, theme: V2 }), re2 ? jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx(Pi, { theme: V2, show: E2, expand: M2, text: y2, onRender: ee2, textOverlay: F2 }) }) : null] }), [E2, M2, re2, se2, u2, JSON.stringify(V2)]), ue2 = reactExports.useMemo(() => w2 && F2, [w2, F2]);
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsxs(Ai, { theme: V2, $active: i2, mode: j2, $slideShowActive: g2, className: Ee("card-media-wrapper", null == _2 ? void 0 : _2.cardMedia), $cardHeight: ce2, align: null == q2 ? void 0 : q2.align, $textOverlay: F2, children: ["VIDEO" === f2.type && !X2 && (I2 ? jsxRuntimeExports.jsx(Z2, { message: "Failed to load the video" }) : K2), "VIDEO" === f2.type && X2 && J2, "IMAGE" === f2.type && (I2 ? jsxRuntimeExports.jsx(Z2, { message: "Failed to load the image." }) : jsxRuntimeExports.jsx(Hi, { height: W2, children: Q2 })), ue2 ? jsxRuntimeExports.jsx(yr, { color: null == V2 ? void 0 : V2.primary, $duration: b2, $paused: C2, ref: T2, $startWidth: x2, $resuming: S2 }) : null, ie2 ? jsxRuntimeExports.jsx(br, { dir: k2, theme: V2, offset: -15, role: "img" }) : null] }), oe2 ? de2 : null] });
};
kr.displayName = "Card Media";
const Sr = ({ showProgressBar: i2, onExpand: r2, triangleDir: o2, showMore: s2, textContentIsLarge: c2, showReadMore: d2, remainInterval: u2, paused: p2, startWidth: m2, canShow: f2, progressRef: g2, isNested: v2, isResuming: y2 }) => {
  const { mode: w2, theme: b2 } = reactExports.useContext(Le), x2 = reactExports.useMemo(() => !v2 && ["VERTICAL", "VERTICAL_ALTERNATING"].some((e2) => e2 === w2), [w2, v2]), C2 = reactExports.useCallback((e2) => {
    e2.stopPropagation(), e2.preventDefault(), r2();
  }, [r2]), k2 = reactExports.useMemo(() => d2 && c2, [d2, c2]);
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [k2 ? jsxRuntimeExports.jsxs(vr, { className: "show-more", onPointerDown: C2, onKeyUp: (e2) => {
    "Enter" === e2.key && r2();
  }, show: f2 ? "true" : "false", theme: b2, tabIndex: 0, children: [jsxRuntimeExports.jsx("span", { children: s2 ? "read less" : "read more" }), jsxRuntimeExports.jsx(wr, { collapsed: s2 ? "true" : "false", children: jsxRuntimeExports.jsx(Bi, {}) })] }) : null, i2 && jsxRuntimeExports.jsx(yr, { color: null == b2 ? void 0 : b2.primary, $duration: u2, $paused: p2, ref: g2, $startWidth: m2, $resuming: y2 }), x2 && jsxRuntimeExports.jsx(br, { dir: o2, theme: b2, offset: -8 })] });
}, Tr = reactExports.memo(({ title: n2, url: i2, media: r2, content: o2, cardTitle: s2 }) => {
  const { fontSizes: l2, classNames: c2, theme: d2, isMobile: u2 } = reactExports.useContext(Le), p2 = reactExports.useMemo(() => !r2, [r2]);
  return jsxRuntimeExports.jsxs(dr, { children: [u2 ? jsxRuntimeExports.jsx(hr, { $fontSize: "1.2rem", theme: d2, children: s2 }) : null, p2 ? jsxRuntimeExports.jsx(Cr, { title: n2, theme: d2, url: i2, fontSize: null == l2 ? void 0 : l2.cardTitle, classString: null == c2 ? void 0 : c2.cardTitle }) : null, p2 ? jsxRuntimeExports.jsx(xr, { content: o2, theme: d2, fontSize: null == l2 ? void 0 : l2.cardSubtitle, classString: null == c2 ? void 0 : c2.cardSubTitle }) : null] });
});
Tr.displayName = "ContentHeader";
const $r = ({ timelineContent: t2, theme: n2, detailedText: i2, showMore: r2 }) => {
  const o2 = reactExports.forwardRef((o3, s2) => {
    const l2 = Array.isArray(i2), { fontSizes: c2, classNames: d2, parseDetailsAsHTML: u2, textDensity: p2 } = reactExports.useContext(Le);
    return (() => {
      if (t2) return jsxRuntimeExports.jsx("div", { ref: s2, children: t2 });
      {
        let t3 = null;
        t3 = l2 ? (({ fontSizes: t4, parseDetailsAsHTML: n3, theme: i3, detailedText: r3, cardTextClassName: o5 }) => r3.map((r4, a2) => {
          const s3 = n3 ? { dangerouslySetInnerHTML: { __html: xe(r4) } } : null;
          return jsxRuntimeExports.jsx(fr, { fontSize: null == t4 ? void 0 : t4.cardText, className: o5, theme: i3, ...s3, children: n3 ? null : r4 }, a2);
        }))({ cardTextClassName: null == d2 ? void 0 : d2.cardText, detailedText: i2, fontSizes: c2, parseDetailsAsHTML: u2, theme: n2 }) : u2 ? xe(i2) : i2;
        const o4 = u2 && !l2 ? { dangerouslySetInnerHTML: { __html: xe(t3) } } : {}, h2 = reactExports.useMemo(() => u2 && !l2 || "LOW" === p2, [l2, p2]);
        return t3 ? jsxRuntimeExports.jsx(mr, { className: r2 ? "active" : "", ref: s2, theme: n2, ...o4, children: h2 ? null : t3 }) : null;
      }
    })();
  });
  return o2.displayName = "Text Or Content", o2;
}, Ir = reactExports.forwardRef((t2, i2) => {
  const { showMore: r2, cardActualHeight: o2, detailsHeight: a2, gradientColor: s2, customContent: l2, timelineContent: c2, detailedText: d2, contentDetailsClass: u2 } = t2, { useReadMore: p2, borderLessCards: m2, contentDetailsHeight: f2, textOverlay: g2, theme: v2 } = reactExports.useContext(Le), y2 = $r({ detailedText: d2, showMore: r2, theme: v2, timelineContent: c2 });
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx(gr, { "aria-expanded": r2, className: u2, $customContent: !!l2, ref: i2, theme: v2, $useReadMore: p2, $borderLess: m2, $showMore: r2, $cardHeight: g2 ? null : o2, $contentHeight: a2, height: f2, $textOverlay: g2, $gradientColor: s2, children: l2 || jsxRuntimeExports.jsx(y2, { detailedText: d2, showMore: r2, theme: v2, timelineContent: c2 }) }) });
});
Ir.displayName = "Details Text";
const Ar = i.memo(({ active: n2, content: i2, detailedText: c2, id: d2, media: u2, onShowMore: p2, slideShowActive: m2, onElapsed: f2, theme: g2, onClick: v2, customContent: y2, hasFocus: w2, flip: b2, branchDir: x2, url: C2, timelineContent: k2, items: S2, isNested: T2, nestedCardHeight: $2, title: I2, cardTitle: A2 }) => {
  const [N2, L2] = reactExports.useState(false), O2 = reactExports.useRef(null), M2 = reactExports.useRef(null), D2 = reactExports.useRef(null), E2 = reactExports.useRef(0), R2 = reactExports.useRef(true), [H2, P2] = reactExports.useState(false), [j2, z2] = reactExports.useState(0), [_2, W2] = reactExports.useState(0), [B2, F2] = reactExports.useState(false), [V2, G2] = reactExports.useState(false), { mode: q2, cardHeight: Y2, slideItemDuration: U2 = 2e3, useReadMore: Z2, cardWidth: X2, borderLessCards: J2, disableAutoScrollOnClick: K2, classNames: Q2, textOverlay: ee2, slideShowType: te2, showProgressOnSlideshow: ne2, disableInteraction: ie2, highlightCardsOnHover: re2, textDensity: oe2 } = reactExports.useContext(Le), { paused: ae2, remainInterval: se2, startWidth: le2, tryPause: ce2, tryResume: de2, setupTimer: ue2, setStartWidth: he2 } = ((e2, t2, n3, i3, a2, c3) => {
    const d3 = reactExports.useRef(), u3 = reactExports.useRef(0), [h2, p3] = reactExports.useState(0), [m3, f3] = reactExports.useState(false), g3 = reactExports.useRef(0), [v3, y3] = reactExports.useState(0), w3 = reactExports.useCallback((e3) => {
      i3 && (y3(e3), d3.current = /* @__PURE__ */ new Date(), f3(false), u3.current = window.setTimeout(() => {
        window.clearTimeout(u3.current), f3(true), p3(0), y3(i3), a2 && (null == c3 || c3(a2));
      }, e3));
    }, []), b3 = reactExports.useCallback(() => {
      if (t2 && n3) {
        if (window.clearTimeout(u3.current), f3(true), d3.current) {
          const e3 = +/* @__PURE__ */ new Date() - +d3.current;
          g3.current = e3;
        }
        e2.current && p3(e2.current.clientWidth);
      }
    }, [t2, n3]), x3 = reactExports.useCallback(() => {
      if (t2 && n3) {
        if (!i3) return;
        const e3 = i3 - g3.current;
        f3(false), e3 > 0 && w3(e3);
      }
    }, [t2, n3, i3]);
    return reactExports.useEffect(() => {
      u3.current && !n3 && window.clearTimeout(u3.current);
    }, [n3]), { paused: m3, remainInterval: v3, setStartWidth: p3, setupTimer: w3, startWidth: h2, tryPause: b3, tryResume: x3 };
  })(D2, n2, m2, U2, d2, f2), pe2 = reactExports.useMemo(() => n2 && m2 && ne2, [n2, m2]), me2 = reactExports.useMemo(() => !!c2, [c2]);
  reactExports.useEffect(() => {
    const e2 = O2.current;
    e2 && (e2.scrollTop = 0);
  }, [N2]), reactExports.useEffect(() => {
    n2 && F2(true);
  }, [n2]);
  const fe2 = reactExports.useCallback((e2) => {
    if (null === e2) return;
    const t2 = O2.current;
    if (!t2) return;
    const { scrollHeight: n3, offsetTop: i3 } = t2;
    E2.current = e2.clientWidth, he2(E2.current), z2(n3), W2(t2.offsetHeight), P2(n3 + i3 > e2.clientHeight);
  }, [O2, oe2]);
  reactExports.useEffect(() => {
    U2 && (n2 && m2 && (he2(E2.current), ue2(U2)), n2 && w2 && M2.current && M2.current.focus(), m2 || F2(false));
  }, [n2, m2]), reactExports.useEffect(() => {
    w2 && n2 && M2.current && M2.current.focus();
  }, [w2, n2]), reactExports.useEffect(() => {
    ae2 || R2.current || G2(true);
  }, [ae2, le2]), reactExports.useEffect(() => {
    R2.current = false;
  }, []);
  const ge2 = reactExports.useMemo(() => Z2 && c2 && !y2 && "HIGH" === oe2, [oe2]), ve2 = reactExports.useCallback((e2) => {
    m2 && (e2.playing ? ce2() : e2.paused && ae2 && d2 && f2 && f2(d2));
  }, [ae2, m2]), ye2 = reactExports.useMemo(() => Ee(n2 ? "timeline-card-content active" : "timeline-card-content ", null == Q2 ? void 0 : Q2.card), [n2]), we2 = reactExports.useMemo(() => Ee(N2 || y2 || !Z2 ? "card-description" : "show-less card-description", null == Q2 ? void 0 : Q2.cardText), [N2, y2]), be2 = reactExports.useMemo(() => ee2 && u2 ? Y2 : T2 ? $2 : Y2, []), xe2 = reactExports.useCallback(() => {
    (n2 && ae2 || !m2) && (L2(!N2), p2());
  }, [n2, ae2, m2, N2]), Ce2 = reactExports.useMemo(() => b2 ? "right" === x2 ? "left" : "right" : x2, [x2, b2]), ke2 = reactExports.useMemo(() => {
    const e2 = T2 ? null == g2 ? void 0 : g2.nestedCardDetailsBackGround : null == g2 ? void 0 : g2.cardBgColor;
    return !N2 && H2 ? Se(e2 || "#ffffff", 0.8) : null;
  }, [H2, N2, null == g2 ? void 0 : g2.cardDetailsBackGround, T2]), Te2 = reactExports.useMemo(() => !(ee2 || null != S2 && S2.length || "HIGH" !== oe2), [null == S2 ? void 0 : S2.length, oe2]), $e2 = reactExports.useMemo(() => $r({ detailedText: c2, showMore: N2, theme: g2, timelineContent: k2 }), [N2, k2, g2, c2]), Ie2 = reactExports.useMemo(() => {
    if (!T2 && !ie2) return { onPointerDown: (e2) => {
      e2.stopPropagation(), !m2 && v2 && d2 && !K2 && v2(d2);
    }, onPointerEnter: ce2, onPointerLeave: de2 };
  }, []), Ae2 = reactExports.useMemo(() => !Te2 && "HIGH" === oe2, [Te2, oe2]);
  return jsxRuntimeExports.jsxs(cr, { className: ye2, $minHeight: be2, $maxWidth: X2, mode: q2, $noMedia: !u2, ...Ie2, ref: fe2, tabIndex: T2 ? -1 : 0, theme: g2, $borderLessCards: J2, $textOverlay: ee2, $active: B2, $slideShowType: te2, $slideShowActive: m2, $branchDir: x2, $isNested: T2, $highlight: re2, $customContent: !!y2, $textDensity: oe2, children: [I2 && !ee2 ? jsxRuntimeExports.jsx(Tr, { title: I2, theme: g2, url: C2, media: u2, content: i2, cardTitle: A2 }) : null, u2 && jsxRuntimeExports.jsx(kr, { active: n2, cardHeight: Y2, content: i2, hideMedia: N2, id: d2, media: u2, onMediaStateChange: ve2, slideshowActive: m2, theme: g2, title: I2, url: C2, startWidth: le2, detailsText: $e2, paused: ae2, remainInterval: se2, showProgressBar: pe2, triangleDir: Ce2, resuming: V2, progressRef: D2 }), Te2 && jsxRuntimeExports.jsx(Ir, { showMore: N2, gradientColor: ke2, detailedText: c2, customContent: y2, timelineContent: k2, contentDetailsClass: we2, cardActualHeight: j2, detailsHeight: _2, ref: O2 }), Ae2 && jsxRuntimeExports.jsx(qo, { items: S2, mode: "VERTICAL", nestedCardHeight: $2, isChild: true }), (!ee2 || !u2) && jsxRuntimeExports.jsx(Sr, { theme: g2, progressRef: D2, startWidth: le2, textContentIsLarge: H2, remainInterval: se2, paused: ae2, triangleDir: Ce2, showProgressBar: pe2, showReadMore: ge2, onExpand: xe2, canShow: me2, showMore: N2, isNested: T2, isResuming: V2 })] });
});
Ar.displayName = "TimelineCardContent";
const Nr = ki.div.withConfig({ displayName: "TitleWrapper", componentId: "sc-13izrht-0" })(["border-radius:0.2rem;font-size:", ";font-weight:600;overflow:hidden;padding:0.25rem;visibility:", ";text-align:", ";color:", ";&.active{background:", ";color:", ";}"], (e2) => e2.$fontSize ? e2.$fontSize : "1rem", (e2) => e2.$hide ? "hidden" : "visible", (e2) => e2.align ? e2.align : "", (e2) => e2.theme ? e2.theme.titleColor : "", (e2) => {
  var t2;
  return null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.secondary;
}, (e2) => {
  var t2, n2, i2;
  return null !== (t2 = e2.theme) && void 0 !== t2 && t2.titleColorActive ? null === (n2 = e2.theme) || void 0 === n2 ? void 0 : n2.titleColorActive : null === (i2 = e2.theme) || void 0 === i2 ? void 0 : i2.primary;
}), Lr = ({ title: t2, active: n2, theme: i2, align: r2, classString: o2 }) => {
  const s2 = reactExports.useMemo(() => Ee("timeline-item-title", n2 ? "active" : "", o2), [n2, o2]), { fontSizes: l2 } = reactExports.useContext(Le);
  return jsxRuntimeExports.jsx(Nr, { className: s2, theme: i2, $hide: !t2, align: r2, $fontSize: null == l2 ? void 0 : l2.title, children: t2 });
}, Or = ki.div.withConfig({ displayName: "Wrapper", componentId: "sc-18iuiou-0" })(["align-items:center;border:1px solid transparent;display:flex;justify-content:center;position:relative;width:100%;height:100%;&.vertical{justify-content:flex-start;}"]);
ki.div.withConfig({ displayName: "Item", componentId: "sc-18iuiou-1" })([""]);
const Mr = Si(["from{opacity:0;}to{opacity:1;}"]), Dr = ki.div.withConfig({ displayName: "ShapeWrapper", componentId: "sc-18iuiou-2" })(["align-items:center;display:flex;flex-direction:column;justify-content:center;width:5em;"]), Er = (e2) => "circle" === e2.$timelinePointShape ? "border-radius: 50%;" : "square" === e2.$timelinePointShape ? "border-radius: 2px;" : "diamond" === e2.$timelinePointShape ? "border-radius: 0;" : void 0, Rr = ki.div.withConfig({ displayName: "Shape", componentId: "sc-18iuiou-3" })(["", " cursor:pointer;height:", "px;width:", "px;transform:", ";&.active{&.using-icon{}&:not(.using-icon){transform:", ";}&::after{", " content:'';display:block;height:", "px;width:", "px;left:50%;position:absolute;top:50%;transform:translateY(-50%) translateX(-50%);z-index:-1;}}&:not(.using-icon){background:", ";&.active{background:", ";border:", "px solid ", ";}&.in-active{}}&.using-icon{background:", ";display:flex;align-items:center;justify-content:center;img{max-width:90%;max-height:90%;}}"], Er, (e2) => e2.dimension, (e2) => e2.dimension, (e2) => "diamond" === e2.$timelinePointShape ? "rotate(45deg)" : "", (e2) => "diamond" === e2.$timelinePointShape ? "rotate(45deg)" : "", Er, (e2) => e2.dimension ? Math.round(0.75 * e2.dimension) : 20, (e2) => e2.dimension ? Math.round(0.75 * e2.dimension) : 20, (e2) => {
  var t2;
  return null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.primary;
}, (e2) => {
  var t2;
  return null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.secondary;
}, (e2) => e2.dimension ? Math.round(0.2 * e2.dimension) : "3", (e2) => {
  var t2;
  return null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.primary;
}, (e2) => {
  var t2;
  return null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.iconBackgroundColor;
}), Hr = ki.div.withConfig({ displayName: "TimelineTitleContainer", componentId: "sc-18iuiou-4" })(["display:flex;align-items:center;justify-content:flex-start;&.vertical{margin-bottom:1em;}&.horizontal{position:absolute;top:0;}"]), Pr = ki.div.withConfig({ displayName: "TimelineContentContainer", componentId: "sc-18iuiou-5" })(["align-items:flex-start;animation:", " 0.25s ease-in;outline:2px solid ", ";margin:1rem;&.horizontal{min-width:", "px;}&.vertical{width:calc(100% - 5em);margin-left:auto;flex-direction:column;}"], Mr, (e2) => {
  var t2;
  return e2.$highlight && e2.$active ? null === (t2 = e2.theme) || void 0 === t2 ? void 0 : t2.primary : "transparent";
}, (e2) => e2.$cardWidth), jr = ({ active: n2, autoScroll: i2, cardDetailedText: s2, cardSubtitle: c2, cardTitle: d2, url: u2, id: p2, media: m2, onClick: f2, onElapsed: v2, slideShowRunning: y2, title: w2, wrapperId: b2, customContent: x2, hasFocus: C2, iconChild: k2, timelineContent: S2, cardWidth: T2, isNested: $2, nestedCardHeight: I2, items: A2 }) => {
  const N2 = reactExports.useRef(null), L2 = reactExports.useRef(null), O2 = reactExports.useRef(null), { mode: M2, cardPositionHorizontal: D2, timelinePointDimension: E2, disableClickOnCircle: R2, cardLess: H2, showAllCardsHorizontal: P2, classNames: j2, theme: z2, timelinePointShape: _2, disableInteraction: W2 } = reactExports.useContext(Le);
  reactExports.useEffect(() => {
    if (n2) {
      const e2 = N2.current, t2 = L2.current;
      if (e2 && t2) {
        const n3 = e2.offsetLeft, r2 = t2.offsetLeft;
        null == i2 || i2({ pointOffset: n3 + r2, pointWidth: e2.clientWidth });
      }
    }
  }, [n2, i2, M2]);
  const B2 = reactExports.useCallback(() => {
  }, []), F2 = reactExports.useMemo(() => null == M2 ? void 0 : M2.toLowerCase(), [M2]), V2 = reactExports.useMemo(() => Ee("timeline-horz-card-wrapper", F2, "TOP" === D2 ? "bottom" : "top", P2 ? "show-all" : ""), [M2, D2]), G2 = reactExports.useMemo(() => Ee(F2, D2), []), q2 = reactExports.useMemo(() => Ee("timeline-circle", { "using-icon": !!k2 }, F2, n2 ? "active" : "in-active"), [n2]), Y2 = reactExports.useMemo(() => jsxRuntimeExports.jsx(Pr, { className: V2, ref: O2, id: `timeline-card-${p2}`, theme: z2, $active: n2 && !W2, $highlight: P2, tabIndex: 0, $cardWidth: T2, children: jsxRuntimeExports.jsx(Ar, { content: c2, active: n2, title: d2, url: u2, detailedText: s2, onShowMore: B2, theme: z2, slideShowActive: y2, media: m2, onElapsed: v2, id: p2, customContent: x2, hasFocus: C2, onClick: f2, timelineContent: S2, isNested: $2, nestedCardHeight: I2, items: A2 }) }), [n2, y2, JSON.stringify(z2)]), U2 = reactExports.useMemo(() => n2 && !H2 || P2, [n2, H2, P2]);
  return jsxRuntimeExports.jsxs(Or, { ref: L2, className: F2, children: [U2 && (() => {
    const e2 = document.getElementById(b2);
    if (e2) return ReactDOM.createPortal(Y2, e2);
  })(), jsxRuntimeExports.jsx(Dr, { children: jsxRuntimeExports.jsx(Rr, { className: q2, onClick: () => {
    R2 || !f2 || y2 || f2(p2);
  }, ref: N2, theme: z2, "aria-label": w2, dimension: E2, $timelinePointShape: _2, children: k2 || null }) }), jsxRuntimeExports.jsx(Hr, { className: G2, children: jsxRuntimeExports.jsx(Lr, { title: w2, active: n2 && !W2, theme: z2, classString: null == j2 ? void 0 : j2.title }) })] });
}, zr = ki.ul.withConfig({ displayName: "TimelineHorizontalWrapper", componentId: "sc-1dd6qhe-0" })(["display:flex;list-style:none;margin:0;width:100%;direction:", ";&.vertical{flex-direction:column;}&.horizontal{flex-direction:row;}"], (e2) => e2.flipLayout ? "rtl" : "ltr"), _r = ki.li.withConfig({ displayName: "TimelineItemWrapper", componentId: "sc-1dd6qhe-1" })(["width:", "px;visibility:hidden;display:flex;align-items:center;justify-content:center;height:150px;flex-direction:column;&.vertical{margin-bottom:2rem;width:100%;}&.visible{visibility:visible;}"], (e2) => e2.width), Wr = ({ items: t2, handleItemClick: n2, autoScroll: r2, wrapperId: o2, slideShowRunning: s2, onElapsed: l2, contentDetailsChildren: c2, hasFocus: d2, iconChildren: u2, nestedCardHeight: p2, isNested: m2 }) => {
  const { mode: f2 = "HORIZONTAL", itemWidth: g2 = 200, cardHeight: v2, flipLayout: y2, showAllCardsHorizontal: w2, theme: b2, cardWidth: x2 } = reactExports.useContext(Le), C2 = reactExports.useMemo(() => Ee(f2.toLowerCase(), "timeline-horizontal-container", w2 ? "show-all-cards-horizontal" : ""), [f2, w2]), k2 = i.Children.toArray(u2);
  return jsxRuntimeExports.jsx(zr, { className: C2, flipLayout: y2, children: t2.map((t3, i2) => jsxRuntimeExports.jsx(_r, { width: g2, className: Ee(t3.visible ? "visible" : "", "timeline-horz-item-container"), children: jsxRuntimeExports.jsx(jr, { ...t3, onClick: n2, autoScroll: r2, wrapperId: o2, theme: b2, slideShowRunning: s2, cardHeight: v2, onElapsed: l2, customContent: c2 ? c2[i2] : null, hasFocus: d2, iconChild: k2[i2], active: t3.active, cardWidth: x2, isNested: m2, nestedCardHeight: p2 }) }, t3.id)) });
}, Br = ki.div.withConfig({ displayName: "TimelinePointWrapper", componentId: "sc-12rz3g8-0" })(["align-items:center;display:flex;justify-content:center;position:relative;width:", ";&.left{order:2;}&.right{order:1;}&::before{background:", ";width:", ";height:2rem;position:absolute;content:'';display:block;left:50%;top:-1rem;transform:translateY(-50%) translateX(-50%);}&::after{background:", ";content:'';display:block;height:100%;left:50%;position:absolute;width:", ";z-index:0;transform:translateX(-50%);}"], (e2) => e2.$isMobile ? "25%" : "10%", (e2) => e2.bg, (e2) => e2.width ? `${e2.width}px` : "4px", (e2) => e2.bg, (e2) => e2.width ? `${e2.width}px` : "4px"), Fr = ki.button.withConfig({ displayName: "TimelinePointContainer", componentId: "sc-12rz3g8-1" })(["position:relative;z-index:1;visibility:", ";background:none;border:0;"], (e2) => e2.$hide ? "hidden" : "visible"), Vr = reactExports.memo((t2) => {
  const { className: n2, id: i2, onClick: s2, active: l2, onActive: c2, slideShowRunning: d2, iconChild: u2, timelinePointDimension: p2, lineWidth: m2, disableClickOnCircle: f2, cardLess: g2, isMobile: v2 } = t2, y2 = reactExports.useRef(null), { theme: w2, focusActiveItemOnLoad: b2, timelinePointShape: x2, disableTimelinePoint: C2 } = reactExports.useContext(Le), k2 = reactExports.useRef(true), S2 = reactExports.useMemo(() => b2 ? l2 : l2 && !k2.current, [l2]);
  reactExports.useEffect(() => {
    if (S2) {
      const e2 = y2.current;
      e2 && c2(e2.offsetTop);
    }
  }, [S2, l2]);
  const T2 = reactExports.useMemo(() => Ee({ active: l2, "using-icon": !!u2 }), [l2, u2]), $2 = reactExports.useMemo(() => !f2 && { onClick: (e2) => {
    e2.stopPropagation(), i2 && s2 && !d2 && s2(i2);
  } }, [i2, s2, d2, f2]);
  return reactExports.useEffect(() => {
    k2.current && (k2.current = false);
  }, []), jsxRuntimeExports.jsx(Br, { width: m2, bg: w2 && w2.primary, className: n2, $cardLess: g2, $isMobile: v2, children: jsxRuntimeExports.jsx(Fr, { className: `${n2} timeline-vertical-circle`, ...$2, ref: y2, "aria-label": "select timeline", $hide: C2, children: jsxRuntimeExports.jsx(Rr, { className: T2, theme: w2, dimension: p2, $timelinePointShape: x2, children: u2 || null }) }) });
}, (e2, t2) => e2.active === t2.active && e2.isMobile === t2.isMobile);
Vr.displayName = "TimelinePoint";
const Gr = ki.div.withConfig({ displayName: "TimelineVerticalWrapper", componentId: "sc-1427v1d-0" })(["display:flex;flex-direction:column;width:100%;padding:0.25rem;outline:0;"]), qr = Si(["from{opacity:0;visibility:hidden;}to{opacity:1;visibility:visible;}"]), Yr = ki.li.withConfig({ displayName: "VerticalItemWrapper", componentId: "sc-1427v1d-1" })(["display:flex;position:relative;visibility:hidden;width:100%;align-items:stretch;justify-content:center;margin:1rem 0;list-style:none;&.left{margin-right:auto;}&.right{margin-left:auto;}&.visible{visibility:visible;}", ""], (e2) => e2.$isNested ? bi(["position:relative;&:not(:last-child)::after{content:'';position:absolute;width:2px;height:2rem;background:", ";left:50%;transform:translateX(-50%);bottom:-2rem;}"], (e3) => e3.theme.primary) : bi([""])), Ur = ki.div.withConfig({ displayName: "TimelineCardContentWrapper", componentId: "sc-1427v1d-2" })(["visibility:hidden;position:relative;display:flex;align-items:center;", " ", " &.visible{visibility:visible;animation:", " 0.25s ease-in;}"], (e2) => e2.$alternateCards ? "width: " + (e2.$isMobile ? "75%;" : "37.5%;") : e2.$noTitle ? "width: 95%;" : e2.$isMobile ? "width: 75%;" : "width: 85%;", (e2) => e2.$flip ? "\n        justify-content: flex-end;\n        &.left {\n          order: 3;\n        }\n        &.right {\n          order: 1;\n        }\n      " : "\n        &.left {\n          order: 1;\n          justify-content: flex-end;\n        }\n        &.right {\n          order: 3;\n          justify-content: flex-start;\n        }\n      ", qr), Zr = ki.div.withConfig({ displayName: "TimelineTitleWrapper", componentId: "sc-1427v1d-3" })(["align-items:center;display:", ";", ";&.left{justify-content:", ";order:", ";}&.right{", ";}"], (e2) => e2.$hide && "VERTICAL" === e2.mode ? "none" : "flex", (e2) => e2.$alternateCards ? "width: 37.5%" : "width: 10%", (e2) => e2.$flip ? "flex-end" : "flex-start", (e2) => e2.$flip && "VERTICAL_ALTERNATING" === e2.mode ? "1" : "3", (e2) => e2.$flip ? "\n      order: 3;\n      justify-content: flex-start;" : "order: 1;\n    justify-content: flex-end;"), Xr = (n2) => {
  const i2 = reactExports.useRef(null), { active: o2, alternateCards: s2, cardDetailedText: c2, cardSubtitle: d2, cardTitle: u2, url: p2, className: m2, contentDetailsChildren: f2, iconChild: g2, hasFocus: v2, id: y2, media: w2, onActive: b2, onClick: x2, onElapsed: C2, slideShowRunning: k2, title: S2, visible: T2, timelineContent: $2, items: I2, isNested: A2, nestedCardHeight: N2 } = n2, { cardHeight: L2, mode: O2, flipLayout: M2, timelinePointDimension: D2, lineWidth: E2, disableClickOnCircle: R2, cardLess: H2, theme: P2, classNames: j2, textOverlay: z2, mediaHeight: _2, disableInteraction: W2, isMobile: B2 } = reactExports.useContext(Le), F2 = reactExports.useCallback((e2) => {
    if (i2.current) {
      const { offsetTop: t2, clientHeight: n3 } = i2.current;
      b2(t2 + e2, t2, n3);
    }
  }, [b2]), V2 = reactExports.useCallback(() => {
    setTimeout(() => {
      F2(0);
    }, 100);
  }, [F2]), G2 = reactExports.useMemo(() => jsxRuntimeExports.jsxs(Zr, { className: m2, $alternateCards: s2, mode: O2, $hide: !S2, $flip: !s2 && M2, children: [jsxRuntimeExports.jsx(Lr, { title: S2, active: o2 && !W2, theme: P2, align: M2 ? "left" : "right", classString: null == j2 ? void 0 : j2.title }), " "] }), [o2, S2, m2, s2, O2, M2, P2, j2]), q2 = reactExports.useMemo(() => Ee({ [m2]: true }, "vertical-item-row", T2 ? "visible" : ""), [m2, T2]), Y2 = Ee("card-content-wrapper", T2 ? "visible" : "", { [m2]: true }), U2 = reactExports.useMemo(() => jsxRuntimeExports.jsx(Vr, { active: o2, alternateCards: s2, className: m2, id: y2, mode: O2, onActive: F2, onClick: x2, slideShowRunning: k2, iconChild: g2, timelinePointDimension: D2, lineWidth: E2, disableClickOnCircle: R2, cardLess: H2, isMobile: B2 }), [k2, o2, s2, m2, y2, O2, F2, x2, g2, D2, E2, R2, H2, B2]), Z2 = reactExports.useMemo(() => !A2 && !B2, [A2, B2]);
  return jsxRuntimeExports.jsxs(Yr, { $alternateCards: s2, $cardHeight: A2 ? N2 : L2, className: q2, ref: i2, $cardLess: H2, $isNested: A2, theme: P2, children: [Z2 ? G2 : null, jsxRuntimeExports.jsx(Ur, { className: Y2, $alternateCards: s2, $noTitle: !S2, $flip: !s2 && M2, height: z2 ? _2 : L2, $isMobile: B2, children: H2 ? null : jsxRuntimeExports.jsx(Ar, { active: o2, branchDir: m2, content: d2, customContent: f2, detailedText: c2, hasFocus: v2, id: y2, media: w2, onClick: x2, onElapsed: C2, onShowMore: V2, slideShowActive: k2, theme: P2, url: p2, flip: !s2 && M2, timelineContent: $2, items: I2, isNested: A2, nestedCardHeight: N2, title: u2, cardTitle: S2 }) }), A2 ? null : U2] }, y2);
};
Xr.displayName = "VerticalItem";
const Jr = ({ alternateCards: t2 = true, autoScroll: n2, contentDetailsChildren: i2, hasFocus: r2, iconChildren: o2, items: a2, mode: s2, onClick: c2, onElapsed: d2, onOutlineSelection: p2, slideShowRunning: m2, theme: f2, cardLess: g2, nestedCardHeight: v2 }) => {
  const y2 = reactExports.useCallback((e2, t3, i3) => {
    n2({ contentHeight: i3, contentOffset: t3, pointOffset: e2 });
  }, [n2]), w2 = reactExports.useCallback(() => {
  }, []), { isMobile: b2 } = reactExports.useContext(Le);
  return jsxRuntimeExports.jsx(Gr, { role: "list", children: a2.map((e2, n3) => {
    let a3 = "";
    a3 = t2 && !b2 && n3 % 2 == 0 ? "left" : "right";
    const s3 = i2 && i2[n3] || null, l2 = Array.isArray(o2) ? o2[n3] : 0 === n3 ? o2 : null;
    return reactExports.createElement(Xr, { ...e2, alternateCards: t2, className: a3, contentDetailsChildren: s3, iconChild: l2, hasFocus: r2, index: n3, key: e2.id, onActive: y2, onClick: c2, onElapsed: d2, onShowMore: w2, slideShowRunning: m2, cardLess: g2, nestedCardHeight: v2 });
  }) });
};
Jr.displayName = "TimelineVertical";
const Kr = () => jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-chevrons-left", children: [jsxRuntimeExports.jsx("polyline", { points: "11 17 6 12 11 7" }), jsxRuntimeExports.jsx("polyline", { points: "18 17 13 12 18 7" })] }), Qr = () => jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-chevrons-right", children: [jsxRuntimeExports.jsx("polyline", { points: "13 17 18 12 13 7" }), jsxRuntimeExports.jsx("polyline", { points: "6 17 11 12 6 7" })] }), eo = () => jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: jsxRuntimeExports.jsx("polygon", { points: "5 3 19 12 5 21 5 3" }) }), to = ki.ul.withConfig({ displayName: "TimelineNavWrapper", componentId: "sc-1apb8f9-0" })(["border-radius:25px;display:flex;list-style:none;padding:0.25rem 0.25rem;box-shadow:0 1px 1px rgba(0,0,0,0.1);background:", ";"], (e2) => e2.theme.toolbarBtnBgColor), no = ki.li.withConfig({ displayName: "TimelineNavItem", componentId: "sc-1apb8f9-1" })(["padding:0.1em;display:flex;align-items:center;justify-content:center;", ";"], (e2) => e2.$disable ? "pointer-events: none; filter: opacity(0.5) grayscale(95%);" : ""), io = ki.button.withConfig({ displayName: "TimelineNavButton", componentId: "sc-1apb8f9-2" })(["align-items:center;background:", ";filter:brightness(1.25);border-radius:50%;border:0;color:#fff;cursor:pointer;display:flex;height:24px;justify-content:center;margin:0 0.2em;padding:0;transition:all 0.1s ease-in;width:24px;transform:", ";&:active{filter:drop-shadow(0 0 2px rgba(0,0,0,0.25));transform:", " scale(0.9);}svg{width:65%;height:65%;}"], (e2) => e2.theme.primary, (e2) => {
  if ("TRUE" === e2.rotate) return "rotate(90deg)";
}, (e2) => "TRUE" === e2.rotate ? "rotate(90deg)" : ""), ro = ki.div.withConfig({ displayName: "TimelineControlContainer", componentId: "sc-1apb8f9-3" })(["align-items:center;display:flex;justify-content:center;margin:0.5rem 0;"]), oo = ki.button.withConfig({ displayName: "ControlButton", componentId: "sc-1apb8f9-4" })(["align-items:center;background:", ";border-radius:50%;cursor:pointer;display:flex;height:3em;justify-content:center;margin-left:0.5em;width:3em;outline:0;color:#fff;svg{width:80%;height:80%;}"], (e2) => e2.theme.primary);
ki(oo).withConfig({ displayName: "MediaToggle", componentId: "sc-1apb8f9-5" })([""]), ki(oo).withConfig({ displayName: "ReplayWrapper", componentId: "sc-1apb8f9-6" })([""]);
const ao = ({ onNext: i2, onPrevious: r2, onFirst: o2, onLast: s2, disableLeft: c2, disableRight: d2, slideShowRunning: u2, onReplay: p2, slideShowEnabled: m2, onToggleDarkMode: f2, isDark: g2, onPaused: v2 }) => {
  const { mode: y2, flipLayout: w2, theme: b2, buttonTexts: x2, classNames: C2, enableDarkToggle: k2, disableInteraction: S2 } = reactExports.useContext(Le), T2 = reactExports.useMemo(() => "HORIZONTAL" !== y2, [y2]), $2 = reactExports.useMemo(() => w2 && "HORIZONTAL" === y2, []), I2 = reactExports.useMemo(() => c2 || u2, [c2, u2]), A2 = reactExports.useMemo(() => d2 || u2, [d2, u2]), N2 = reactExports.useCallback(() => {
    u2 ? null == v2 || v2() : null == p2 || p2();
  }, [u2]), L2 = reactExports.useMemo(() => w2 ? null == x2 ? void 0 : x2.next : null == x2 ? void 0 : x2.previous, [w2]), O2 = reactExports.useMemo(() => w2 ? null == x2 ? void 0 : x2.previous : null == x2 ? void 0 : x2.next, [w2]), M2 = reactExports.useMemo(() => u2 ? null == x2 ? void 0 : x2.stop : null == x2 ? void 0 : x2.play, [u2]), D2 = reactExports.useMemo(() => w2 ? null == x2 ? void 0 : x2.first : null == x2 ? void 0 : x2.last, [w2]), E2 = reactExports.useMemo(() => w2 ? null == x2 ? void 0 : x2.last : null == x2 ? void 0 : x2.first, [w2]);
  return jsxRuntimeExports.jsx(ro, { children: jsxRuntimeExports.jsxs(to, { className: Ee("timeline-controls", null == C2 ? void 0 : C2.controls), theme: b2, children: [S2 ? null : jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(no, { $disable: I2, children: jsxRuntimeExports.jsx(io, { mode: y2, theme: b2, onClick: $2 ? s2 : o2, title: E2, "aria-label": E2, "aria-disabled": c2, "aria-controls": "timeline-main-wrapper", tabIndex: c2 ? -1 : 0, rotate: T2 ? "TRUE" : "FALSE", children: jsxRuntimeExports.jsx(Kr, {}) }) }), jsxRuntimeExports.jsx(no, { $disable: I2, children: jsxRuntimeExports.jsx(io, { mode: y2, theme: b2, onClick: $2 ? i2 : r2, title: L2, "aria-label": L2, "aria-disabled": c2, "aria-controls": "timeline-main-wrapper", tabIndex: c2 ? -1 : 0, rotate: T2 ? "TRUE" : "FALSE", children: jsxRuntimeExports.jsx(Wi, {}) }) }), jsxRuntimeExports.jsx(no, { $disable: A2, children: jsxRuntimeExports.jsx(io, { mode: y2, theme: b2, onClick: $2 ? r2 : i2, title: O2, "aria-label": O2, "aria-disabled": d2, "aria-controls": "timeline-main-wrapper", rotate: T2 ? "TRUE" : "FALSE", tabIndex: d2 ? -1 : 0, children: jsxRuntimeExports.jsx(Bi, {}) }) }), jsxRuntimeExports.jsx(no, { $disable: A2, children: jsxRuntimeExports.jsx(io, { mode: y2, theme: b2, onClick: $2 ? o2 : s2, title: D2, "aria-label": D2, "aria-disabled": d2, "aria-controls": "timeline-main-wrapper", tabIndex: d2 ? -1 : 0, rotate: T2 ? "TRUE" : "FALSE", children: jsxRuntimeExports.jsx(Qr, {}) }) })] }), jsxRuntimeExports.jsx(no, { children: m2 && jsxRuntimeExports.jsx(io, { theme: b2, onClick: N2, title: M2, tabIndex: 0, "aria-controls": "timeline-main-wrapper", "aria-label": M2, children: jsxRuntimeExports.jsx(u2 ? Xi : eo, {}) }) }), k2 ? jsxRuntimeExports.jsx(no, { $disable: u2, children: jsxRuntimeExports.jsx(io, { theme: b2, onClick: f2, title: g2 ? null == x2 ? void 0 : x2.light : null == x2 ? void 0 : x2.dark, tabIndex: 0, "aria-controls": "timeline-main-wrapper", "aria-label": g2 ? null == x2 ? void 0 : x2.light : null == x2 ? void 0 : x2.dark, children: jsxRuntimeExports.jsx(g2 ? Ji : Ui, {}) }) }) : null] }) }, "control-wrapper");
};
ao.displayName = "Timeline Control";
const so = ki.ul.withConfig({ displayName: "ToolbarWrapper", componentId: "sc-exupb5-0" })(["list-style:none;margin:0;display:flex;align-items:center;background-color:", ";box-shadow:0 2px 1px rgba(0,0,0,0.1);width:100%;height:100%;border-radius:6px;flex-wrap:wrap;padding:0.25rem;"], (e2) => e2.theme.toolbarBgColor), lo = ki.li.withConfig({ displayName: "ToolbarListItem", componentId: "sc-exupb5-1" })(["padding:0;margin:0 0.5rem;"]), co = ki.span.withConfig({ displayName: "IconWrapper", componentId: "sc-exupb5-2" })(["display:flex;align-items:center;justify-content:center;width:1rem;height:1rem;"]), uo = ki.span.withConfig({ displayName: "ContentWrapper", componentId: "sc-exupb5-3" })(["display:flex;"]), ho = ({ items: n2, children: i2 = [], theme: r2 }) => jsxRuntimeExports.jsx(so, { theme: r2, children: null == n2 ? void 0 : n2.map(({ label: n3, id: r3, icon: o2 }, a2) => jsxRuntimeExports.jsxs(lo, { "aria-label": n3, children: [o2 ? jsxRuntimeExports.jsx(co, { children: o2 }) : null, jsxRuntimeExports.jsx(uo, { children: i2[a2] })] }, r3)) }), po = "rgba(0, 0, 0, 0.1)", mo = `
  align-items: center;
  background: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0px 1px 1px ${po};
  display: flex;
  margin: 0;
  margin-bottom: 0.5rem;
  // padding: 0.25rem 0.5rem;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`, fo = ki.ul.withConfig({ displayName: "ListStyle", componentId: "sc-1mak9q1-0" })(["display:flex;flex-direction:column;justify-content:center;list-style:none;margin:0;padding:0;width:100%;align-items:center;"]), go = ki.li.withConfig({ displayName: "ListItemStyle", componentId: "sc-1mak9q1-1" })(["", " border:", ";flex-direction:", ";background:", ";&:hover{border:1px solid ", ";cursor:pointer;}user-select:none;padding:0.25rem;width:calc(100% - 0.5rem);"], mo, (e2) => e2.$active ? `1px solid ${e2.$theme.primary}` : "1px solid transparent", (e2) => e2.$selectable ? "row" : "column", (e2) => e2.$theme.toolbarBtnBgColor, (e2) => e2.$theme.primary), vo = ki.h1.withConfig({ displayName: "TitleStyle", componentId: "sc-1mak9q1-2" })(["color:", ";font-size:1rem;font-weight:normal;margin:0.2rem 0;text-align:left;white-space:nowrap;"], (e2) => e2.theme.primary), yo = ki.p.withConfig({ displayName: "TitleDescriptionStyle", componentId: "sc-1mak9q1-3" })(["font-size:0.8rem;font-weight:normal;margin:0;padding:0.1rem;text-align:left;width:100%;color:", ";"], (e2) => e2.theme.cardSubtitleColor), wo = ki.span.withConfig({ displayName: "CheckboxWrapper", componentId: "sc-1mak9q1-4" })(["width:2rem;display:flex;align-items:center;justify-content:center;"]), bo = ki.span.withConfig({ displayName: "CheckboxStyle", componentId: "sc-1mak9q1-5" })(["align-items:center;background-color:white;", " background:", ";color:#fff;border-radius:50%;display:flex;height:1.25rem;justify-content:center;margin-right:0.25rem;margin-left:0.1rem;width:1.25rem;svg{width:80%;height:80%;}"], (e2) => !e2.selected && `box-shadow: inset 0 0 0 1px ${po};`, (e2) => e2.selected ? e2.theme.primary : e2.theme.toolbarBgColor), xo = ki.div.withConfig({ displayName: "StyleAndDescription", componentId: "sc-1mak9q1-6" })(["flex-direction:column;display:flex;width:", ";"], (e2) => e2.$selectable ? "calc(100% - 2rem)" : "100%"), Co = reactExports.memo(({ title: n2, id: i2, description: r2, theme: o2, onClick: a2, active: s2, selected: c2 = false, selectable: d2 = false }) => {
  const u2 = reactExports.useCallback((e2) => null == a2 ? void 0 : a2(e2), []), h2 = reactExports.useCallback((e2, t2) => {
    "Enter" === e2.key && u2(t2);
  }, []);
  return jsxRuntimeExports.jsxs(go, { $theme: o2, onClick: () => u2(i2), $active: s2, tabIndex: 0, $selectable: d2, onKeyUp: (e2) => h2(e2, i2), children: [d2 ? jsxRuntimeExports.jsx(wo, { children: jsxRuntimeExports.jsx(bo, { role: "checkbox", selected: c2, theme: o2, children: c2 && jsxRuntimeExports.jsx(zi, {}) }) }) : null, jsxRuntimeExports.jsxs(xo, { $selectable: d2, children: [jsxRuntimeExports.jsx(vo, { theme: o2, children: n2 }), jsxRuntimeExports.jsx(yo, { theme: o2, children: r2 })] })] }, i2);
});
Co.displayName = "ListItem";
const ko = ({ items: t2, theme: n2, onClick: i2, activeItemIndex: r2, multiSelectable: o2 = false }) => {
  const [a2, c2] = reactExports.useState(() => t2.map((e2) => ({ id: $e(), ...e2 }))), d2 = reactExports.useCallback((e2) => {
    const t3 = a2.map((t4) => t4.id === e2 ? { ...t4, selected: true } : { ...t4, selected: false });
    c2(t3);
  }, []), u2 = reactExports.useCallback((e2) => {
    if (d2(e2), o2) {
      const t3 = a2.find((t4) => t4.id === e2);
      t3.onSelect && reactExports.startTransition(() => {
        t3.onSelect();
      });
    } else null == i2 || i2(e2);
  }, []);
  return jsxRuntimeExports.jsx(fo, { children: null == a2 ? void 0 : a2.map(({ title: t3, id: i3, description: a3, selected: s2 }, l2) => jsxRuntimeExports.jsx(Co, { title: t3, id: i3, description: a3, theme: n2, onClick: u2, selectable: o2, selected: s2, active: r2 === l2 }, i3)) });
};
const So = ki.div.withConfig({ displayName: "PopoverWrapper", componentId: "sc-168kw5q-0" })([""]), To = ki.div.withConfig({ displayName: "PopoverHolder", componentId: "sc-168kw5q-1" })(["align-items:flex-start;background:", ";background:;border-radius:6px;box-shadow:0px 5px 16px rgba(0,0,0,0.5);display:flex;flex-direction:column;justify-content:space-between;max-height:500px;overflow-y:auto;padding:0.5rem;position:absolute;", ";", ";width:", ";z-index:100;opacity:", ";transition:opacity 0.1s ease-in-out;"], ({ $theme: e2 }) => e2.toolbarBgColor, (e2) => "bottom" === e2.$position ? "bottom: 3.5rem" : "top: 4rem", (e2) => e2.$isMobile ? "left: 4px;" : "", ({ $isMobile: e2, $width: t2 }) => e2 ? "90%" : `${t2}px`, ({ $visible: e2 }) => e2 ? 1 : 0), $o = ki.div.withConfig({ displayName: "Selecter", componentId: "sc-168kw5q-2" })(["align-items:center;background:", ";color:", ";border-radius:25px;box-shadow:", ";cursor:pointer;display:flex;font-weight:normal;justify-content:space-between;padding:", ";user-select:none;"], ({ $theme: e2 }) => e2.toolbarBtnBgColor, ({ $theme: e2 }) => e2.toolbarTextColor, ({ $open: e2, $isDarkMode: t2 }) => e2 ? "inset 0 0 1px 1px rgba(0, 0, 0, 0.2)" : `0px 1px 1px rgba(0, 0, 0, ${t2 ? "0.85" : "0.2"})`, (e2) => e2.$isMobile ? "0.4rem" : "0.4rem 0.5rem"), Io = ki.span.withConfig({ displayName: "SelecterIcon", componentId: "sc-168kw5q-3" })(["align-items:center;color:", ";display:flex;height:1.25rem;justify-content:center;width:1.25rem;transition:transform 0.2s ease-in-out;margin-right:0.1rem;& svg{height:100%;width:100%;}"], ({ theme: e2 }) => e2.primary), Ao = ki.span.withConfig({ displayName: "SelecterLabel", componentId: "sc-168kw5q-4" })(["font-size:0.9rem;text-align:left;white-space:nowrap;"]), No = ki.div.withConfig({ displayName: "Header", componentId: "sc-168kw5q-5" })(["height:30px;width:100%;"]), Lo = ki.div.withConfig({ displayName: "Content", componentId: "sc-168kw5q-6" })(["height:calc(100% - 30px);overflow-y:auto;width:calc(100% - 0rem);"]), Oo = ki.button.withConfig({ displayName: "CloseButton", componentId: "sc-168kw5q-7" })(["align-items:center;background:transparent;border:none;color:", ";cursor:pointer;display:flex;justify-content:center;margin-bottom:0.5rem;margin-left:auto;"], ({ theme: e2 }) => e2.primary), Mo = ({ children: n2, position: i2, placeholder: a2, theme: c2, width: d2 = 350, isDarkMode: u2 = false, icon: h2, $isMobile: p2 = false }) => {
  const [m2, f2] = reactExports.useState(false), [g2, v2] = reactExports.useState(false), y2 = reactExports.useRef(null), w2 = reactExports.useCallback(() => f2(!m2), []), b2 = reactExports.useCallback(() => f2(false), []), x2 = reactExports.useCallback((e2) => {
    "Enter" === e2.key && w2();
  }, []);
  return function(e2, t2) {
    const n3 = reactExports.useRef(), i3 = reactExports.useCallback((e3) => {
      const i4 = n3.current;
      i4 && (i4.contains(e3.target) || t2());
    }, []), a3 = reactExports.useCallback((e3) => {
      "Escape" === e3.key && t2();
    }, []);
    reactExports.useEffect(() => {
      const t3 = e2.current;
      t3 && (n3.current = t3, t3.addEventListener("keyup", a3));
    }, [e2, t2]), reactExports.useEffect(() => (document.addEventListener("click", i3), () => {
      const e3 = n3.current;
      e3 && e3.removeEventListener("keyup", a3), document.removeEventListener("click", i3);
    }), []);
  }(y2, b2), reactExports.useEffect(() => {
    m2 ? setTimeout(() => {
      v2(true);
    }, 10) : v2(false);
  }, [m2]), jsxRuntimeExports.jsxs(So, { ref: y2, children: [jsxRuntimeExports.jsxs($o, { role: "button", onClick: w2, $theme: c2, $open: m2, $isDarkMode: u2, tabIndex: 0, onKeyUp: x2, $isMobile: p2, title: a2, children: [jsxRuntimeExports.jsx(Io, { theme: c2, open: m2, children: h2 || jsxRuntimeExports.jsx(_i, {}) }), a2 && !p2 ? jsxRuntimeExports.jsx(Ao, { children: a2 }) : null] }), m2 ? jsxRuntimeExports.jsxs(To, { $position: i2, $width: d2, $theme: c2, $isMobile: p2, $visible: g2, children: [jsxRuntimeExports.jsx(No, { children: jsxRuntimeExports.jsx(Oo, { theme: c2, onClick: b2, children: jsxRuntimeExports.jsx(Fi, {}) }) }), jsxRuntimeExports.jsx(Lo, { children: n2 })] }) : null] });
}, Do = ({ onUpdateTimelineMode: t2, theme: n2, mode: i2, isDarkMode: r2, position: o2, isMobile: s2 }) => {
  const { showAllCardsHorizontal: l2, buttonTexts: c2 } = reactExports.useContext(Le), d2 = reactExports.useMemo(() => i2, [l2, i2]), u2 = reactExports.useMemo(() => ({ alternating: null == c2 ? void 0 : c2.changeLayoutOptions.alternating, horizontal: null == c2 ? void 0 : c2.changeLayoutOptions.horizontal, horizontal_all: null == c2 ? void 0 : c2.changeLayoutOptions.horizontal_all, vertical: null == c2 ? void 0 : c2.changeLayoutOptions.vertical }), []), p2 = reactExports.useMemo(() => [{ description: u2.vertical.helpText, id: "VERTICAL", onSelect: () => t2("VERTICAL"), selected: "VERTICAL" === d2, title: u2.vertical.text }, { description: u2.alternating.helpText, id: "VERTICAL_ALTERNATING", onSelect: () => t2("VERTICAL_ALTERNATING"), selected: "VERTICAL_ALTERNATING" === d2, title: u2.alternating.text }], [d2]), m2 = reactExports.useMemo(() => [{ description: u2.horizontal.helpText, id: "HORIZONTAL", onSelect: () => {
    t2("HORIZONTAL");
  }, selected: "HORIZONTAL" === d2, title: u2.horizontal.text }, { description: u2.horizontal_all.helpText, id: "HORIZONTAL_ALL", onSelect: () => {
    t2("HORIZONTAL_ALL");
  }, selected: "HORIZONTAL_ALL" === d2, title: u2.horizontal.text }], [d2]);
  return jsxRuntimeExports.jsx(Mo, { placeholder: c2.changeLayout, position: o2, theme: n2, isDarkMode: r2, icon: jsxRuntimeExports.jsx(Vi, {}), $isMobile: s2, children: jsxRuntimeExports.jsx(ko, { items: "HORIZONTAL" === i2 || "HORIZONTAL_ALL" === i2 ? m2 : p2, theme: n2, multiSelectable: true }) });
}, Eo = ({ activeItem: t2, items: n2, theme: i2, onActivateItem: r2, isDarkMode: o2, position: a2, isMobile: s2 }) => {
  const { buttonTexts: l2 } = reactExports.useContext(Le);
  return jsxRuntimeExports.jsx(Mo, { placeholder: l2.jumpTo, position: a2, theme: i2, width: 400, isDarkMode: o2, $isMobile: s2, icon: jsxRuntimeExports.jsx(ji, {}), children: jsxRuntimeExports.jsx(ko, { items: n2.map((e2, n3) => ({ active: n3 === t2, description: e2.description, id: e2.id, label: e2.title, onSelect: () => {
  }, title: e2.title || `Item ${n3 + 1}` })), theme: i2, onClick: r2 }) });
}, Ro = ({ onChange: t2, selectedDensity: n2, theme: i2, isDarkMode: r2, position: o2, isMobile: s2 }) => {
  const { buttonTexts: l2 } = reactExports.useContext(Le), c2 = reactExports.useMemo(() => [{ description: "Show less text", id: "LOW", onSelect: () => t2("LOW"), selected: "LOW" === n2, title: "Low" }, { description: "Show more text", id: "HIGH", onSelect: () => t2("HIGH"), selected: "HIGH" === n2, title: "High" }], [n2]);
  return jsxRuntimeExports.jsx(Mo, { placeholder: l2.changeDensity, theme: i2, isDarkMode: r2, position: o2, $isMobile: s2, width: 300, icon: jsxRuntimeExports.jsx(Ki, {}), children: jsxRuntimeExports.jsx(ko, { items: c2, theme: i2, multiSelectable: true }) });
}, Ho = ki.div.withConfig({ displayName: "Wrapper", componentId: "sc-cif21b-0" })(["display:flex;flex-direction:column;height:100%;&:focus{outline:0;}overflow:hidden;position:relative;width:100%;&.horizontal{justify-content:flex-start;}&.js-focus-visible :focus:not(.focus-visible){}&.js-focus-visible .focus-visible{outline:2px solid #528deb;}"]), Po = ki.div.withConfig({ displayName: "TimelineMainWrapper", componentId: "sc-cif21b-1" })(["align-items:flex-start;display:flex;justify-content:center;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;", ";scroll-behavior:smooth;width:100%;", " &.horizontal{min-height:150px;}padding:", ";"], (e2) => "HORIZONTAL" === e2.mode ? "position: relative" : "", $i, ({ $scrollable: e2 }) => e2 ? "" : "0 1rem 0"), jo = ki.div.withConfig({ displayName: "TimelineMain", componentId: "sc-cif21b-2" })(["position:absolute;top:50%;left:0;display:flex;align-items:center;transition:all 0.2s ease;transform:translate(0,-50%);&.vertical{align-items:flex-start;justify-content:flex-start;width:100%;height:100%;}"]), zo = ki.div.withConfig({ displayName: "Outline", componentId: "sc-cif21b-3" })(["position:absolute;right:0;left:0;width:100%;height:", ";margin-right:auto;margin-left:auto;background:", ";"], (e2) => `${e2.height}px`, (e2) => e2.color);
ki.div.withConfig({ displayName: "TimelineControlContainer", componentId: "sc-cif21b-4" })(["display:flex;align-items:center;justify-content:center;min-height:3rem;filter:", ";&.hide{visibility:hidden;}&.show{visibility:visible;}"], (e2) => e2.active ? "opacity(1);" : "opacity(0.9);");
const _o = ki.div.withConfig({ displayName: "TimelineContentRender", componentId: "sc-cif21b-5" })(["display:flex;align-items:flex-start;justify-content:", ";width:98%;margin-right:auto;margin-left:auto;overflow-x:hidden;"], (e2) => e2.$showAllCards ? "flex-start" : "center"), Wo = ki.div.withConfig({ displayName: "ToolbarWrapper", componentId: "sc-cif21b-6" })(["display:flex;font-weight:bold;text-align:center;text-decoration:none;border-radius:6px;width:100%;padding:0;margin:", ";order:", ";"], (e2) => "top" === e2.position ? "0 0 20px 0" : "20px 0 0 0", (e2) => "top" === e2.position ? 0 : 1), Bo = ki.ul.withConfig({ displayName: "ExtraControls", componentId: "sc-cif21b-7" })(["display:flex;align-items:center;list-style:none;margin:0;padding:0.1rem;visibility:", ";"], (e2) => e2.$hide ? "hidden" : "visible"), Fo = ki.li.withConfig({ displayName: "ExtraControlChild", componentId: "sc-cif21b-8" })(["display:flex;margin:0.5rem 0;margin-right:0.5rem;"]), Vo = ({ activeTimelineItem: n2, slideShowEnabled: i2, slideShowRunning: r2, flipLayout: o2, toggleDarkMode: s2, onPaused: l2, onFirst: c2, onLast: d2, onNext: u2, onPrevious: p2, onRestartSlideshow: m2, totalItems: f2, items: g2 = [], id: v2, onActivateTimelineItem: y2, onUpdateTimelineMode: w2, onUpdateTextContentDensity: b2, mode: x2 }) => {
  const { theme: C2, cardLess: k2, enableQuickJump: S2, darkMode: T2, toolbarPosition: $2, textDensity: I2, isMobile: A2, enableLayoutSwitch: N2 } = reactExports.useContext(Le), L2 = reactExports.useMemo(() => [{ id: "timeline-controls", label: "Timeline Controls", name: "timeline_control", onSelect: () => {
  } }, { id: "timeline-popover", label: "timeline_popover", name: "popover", onSelect: () => {
  } }, { id: "layout-popover", label: "layout_popover", name: "popover", onSelect: () => {
  } }, { id: "change-density", label: "change_density", name: "changeDensity", onSelect: () => {
  } }], []), O2 = reactExports.useMemo(() => o2 ? n2 === f2 - 1 : 0 === n2, [o2, n2, f2]), M2 = reactExports.useMemo(() => o2 ? 0 === n2 : n2 === f2 - 1, [o2, n2, f2]), D2 = reactExports.useMemo(() => k2 || r2, [k2, r2]), E2 = reactExports.useMemo(() => g2.every((e2) => e2.cardDetailedText), []);
  return jsxRuntimeExports.jsxs(ho, { items: L2, theme: C2, children: [jsxRuntimeExports.jsx(ao, { disableLeft: O2, disableRight: M2, id: v2, onFirst: c2, onLast: d2, onNext: u2, onPrevious: p2, onReplay: m2, slideShowEnabled: i2, slideShowRunning: r2, isDark: T2, onToggleDarkMode: s2, onPaused: l2 }), jsxRuntimeExports.jsxs(Bo, { $hide: D2, $slideShowRunning: r2, children: [jsxRuntimeExports.jsx(Fo, { children: S2 ? jsxRuntimeExports.jsx(Eo, { activeItem: n2, isDarkMode: T2, items: g2.map((e2) => ({ ...e2, description: e2.cardSubtitle, id: e2.id, title: e2.title })), onActivateItem: y2, theme: C2, position: $2, isMobile: A2 }) : null }, "quick-jump"), jsxRuntimeExports.jsx(Fo, { children: !k2 && N2 ? jsxRuntimeExports.jsx(Do, { isDarkMode: T2, theme: C2, onUpdateTimelineMode: w2, mode: x2, position: $2, isMobile: A2 }) : null }, "layout-switcher"), E2 ? jsxRuntimeExports.jsx(Fo, { children: jsxRuntimeExports.jsx(Ro, { isDarkMode: T2, theme: C2, onChange: b2, position: $2, selectedDensity: I2, isMobile: A2 }) }, "change-density") : null, " "] }, "timeline-extra-controls")] });
}, Go = (n2) => {
  const { activeTimelineItem: i2, contentDetailsChildren: c2, iconChildren: d2, items: u2 = [], onFirst: p2, onLast: m2, onNext: f2, onPrevious: g2, onRestartSlideshow: v2, onTimelineUpdated: y2, onItemSelected: w2, onOutlineSelection: b2, slideShowEnabled: x2, slideShowRunning: C2, mode: k2 = "HORIZONTAL", nestedCardHeight: S2, isChild: T2 = false, onPaused: $2, uniqueId: I2, noUniqueId: A2 } = n2, { cardPositionHorizontal: N2, disableNavOnKey: L2, flipLayout: O2, itemWidth: M2 = 200, lineWidth: D2, onScrollEnd: E2, scrollable: R2 = true, showAllCardsHorizontal: H2, theme: P2, darkMode: j2, toggleDarkMode: z2, updateHorizontalAllCards: _2, toolbarPosition: W2, updateTextContentDensity: B2, disableToolbar: F2 } = reactExports.useContext(Le), [V2, G2] = ((e2, t2) => {
    const [n3, i3] = reactExports.useState(0);
    return [n3, reactExports.useMemo(() => (n4, r2) => {
      const { clientWidth: o2, scrollLeft: a2, scrollTop: s2, clientHeight: l2 } = n4, { pointOffset: c3, pointWidth: d3, contentHeight: u3, contentOffset: h2 } = r2;
      if ("HORIZONTAL" === e2 && t2 && d3 && c3) {
        const e3 = a2 + o2, n5 = c3 + d3, r3 = c3 - a2, s3 = e3 - c3;
        (!(c3 >= a2 && n5 <= e3) && !(c3 < a2 && n5 > a2 || n5 > e3 && c3 < e3) || r3 <= t2 && r3 >= 0 || s3 <= t2 && s3 >= 0) && i3(c3 - t2);
      } else if (("VERTICAL" === e2 || "VERTICAL_ALTERNATING" === e2) && h2 && u3) {
        const e3 = s2 + l2, t3 = h2 + u3, n5 = h2 - u3, r3 = !(h2 >= s2 && t3 <= e3) || h2 < s2 && t3 > s2 || t3 > e3 && h2 < e3;
        r3 && n5 + u3 < e3 ? i3(n5 + Math.round(u3 / 2)) : r3 && i3(n5);
      }
    }, [e2, t2])];
  })(k2, M2), q2 = reactExports.useRef(null), [Y2, U2] = reactExports.useState(false), Z2 = reactExports.useRef(null), [X2, J2] = reactExports.useState("HORIZONTAL" === k2 && H2 ? "HORIZONTAL_ALL" : k2), K2 = reactExports.useRef(i2), Q2 = reactExports.useRef(null), ee2 = reactExports.useMemo(() => {
    if (!C2) {
      if ("boolean" == typeof R2) return R2;
      if ("object" == typeof R2 && R2.scrollbar) return R2.scrollbar;
    }
  }, [C2, R2]), te2 = reactExports.useRef(`react-chrono-timeline-${A2 ? I2 : $e()}`), ne2 = reactExports.useCallback(() => {
    Y2 && (K2.current = Math.min(K2.current + 1, u2.length - 1), null == f2 || f2());
  }, [Y2, f2]), ie2 = reactExports.useCallback(() => {
    Y2 && (K2.current = Math.max(K2.current - 1, 0), null == g2 || g2());
  }, [Y2, g2]), re2 = reactExports.useCallback(() => {
    Y2 && (K2.current = 0, null == p2 || p2());
  }, [Y2, p2]), oe2 = reactExports.useCallback(() => {
    Y2 && (K2.current = u2.length - 1, null == m2 || m2());
  }, [Y2, m2]), ae2 = reactExports.useCallback((e2) => {
    const { key: t2 } = e2;
    "HORIZONTAL" === k2 && "ArrowRight" === t2 ? O2 ? ie2() : ne2() : "HORIZONTAL" === k2 && "ArrowLeft" === t2 ? O2 ? ne2() : ie2() : "VERTICAL" !== k2 && "VERTICAL_ALTERNATING" !== k2 || "ArrowDown" !== t2 ? "VERTICAL" !== k2 && "VERTICAL_ALTERNATING" !== k2 || "ArrowUp" !== t2 ? "Home" === t2 ? re2() : "End" === t2 && oe2() : ie2() : ne2();
  }, [ne2, ie2, oe2]), se2 = (e2, t2) => {
    if (e2) {
      for (let n3 = 0; n3 < u2.length; n3++) if (u2[n3].id === e2) {
        K2.current = n3, t2 && n3 < u2.length - 1 ? null == y2 || y2(n3 + 1) : null == y2 || y2(n3);
        break;
      }
    }
  };
  reactExports.useEffect(() => {
    const e2 = u2[i2 || 0];
    if (C2 && (K2.current = i2), u2.length && e2) {
      const { title: i3, cardTitle: r2, cardSubtitle: o2, cardDetailedText: a2 } = e2;
      if (null == w2 || w2({ cardDetailedText: a2, cardSubtitle: o2, cardTitle: r2, index: K2.current, title: i3 }), "HORIZONTAL" === k2) {
        var t2, n3;
        const i4 = null === (t2 = Z2.current) || void 0 === t2 ? void 0 : t2.querySelector(`#timeline-card-${e2.id}`), r3 = null == i4 ? void 0 : i4.getBoundingClientRect(), o3 = null === (n3 = Z2.current) || void 0 === n3 ? void 0 : n3.getBoundingClientRect();
        if (r3 && o3) {
          const { width: e3, left: t3 } = r3, { width: n4, left: i5 } = o3;
          setTimeout(() => {
            const r4 = Z2.current;
            r4.style.scrollBehavior = "smooth", r4.scrollLeft += t3 - i5 + e3 / 2 - n4 / 2;
          }, 100);
        }
      }
    }
  }, [i2, u2.length, C2]);
  const le2 = (e2) => {
    const t2 = Q2.current;
    t2 && G2(t2, e2);
  };
  reactExports.useEffect(() => {
    const e2 = Q2.current;
    e2 && ("HORIZONTAL" === k2 ? e2.scrollLeft = Math.max(V2, 0) : e2.scrollTop = V2);
  }, [V2]), reactExports.useEffect(() => {
    setTimeout(() => {
      const e3 = Q2.current;
      if (e3) {
        const t2 = e3.querySelectorAll(".vertical-item-row");
        Array.from(t2).forEach((e4) => {
          q2.current && q2.current.observe(e4);
        });
      }
    }, 0);
    const e2 = (e3, t2) => {
      e3.querySelectorAll("img,video").forEach((e4) => e4.style.visibility = "hide" === t2 ? "hidden" : "visible");
    };
    return "HORIZONTAL" !== k2 && (q2.current = new IntersectionObserver((t2) => {
      t2.forEach((t3) => {
        const n3 = t3.target;
        t3.isIntersecting ? e2(n3, "show") : (e2(n3, "hide"), n3.querySelectorAll("iframe").forEach((e3) => {
          var t4;
          null === (t4 = e3.contentWindow) || void 0 === t4 || t4.postMessage('{"event":"command","func":"stopVideo","args":""}', "*");
        }));
      });
    }, { root: Q2.current, threshold: 0 })), () => {
      q2.current && q2.current.disconnect();
    };
  }, []);
  const ce2 = reactExports.useCallback((e2) => {
    L2 || C2 || (U2(true), ae2(e2));
  }, [L2, C2, ae2]), de2 = reactExports.useCallback((e2) => {
    "VERTICAL" === e2 ? J2("VERTICAL") : "HORIZONTAL" === e2 ? (J2("HORIZONTAL"), null == _2 || _2(false)) : "VERTICAL_ALTERNATING" === e2 ? J2("VERTICAL_ALTERNATING") : "HORIZONTAL_ALL" === e2 && (J2("HORIZONTAL_ALL"), null == _2 || _2(true));
  }, []), ue2 = reactExports.useMemo(() => Ee(k2.toLocaleLowerCase(), { "focus-visible": !T2, "js-focus-visible": !T2 }), [k2, T2]), he2 = reactExports.useMemo(() => !F2 && !T2, [T2, F2]);
  return jsxRuntimeExports.jsxs(Ho, { onKeyDown: ce2, className: ue2, cardPositionHorizontal: N2, onMouseDown: () => {
    U2(true);
  }, onKeyUp: (e2) => {
    "Escape" === e2.key && (null == $2 || $2());
  }, children: [he2 ? jsxRuntimeExports.jsx(Wo, { position: W2, children: jsxRuntimeExports.jsx(Vo, { activeTimelineItem: i2, totalItems: u2.length, slideShowEnabled: x2, slideShowRunning: C2, onFirst: re2, onLast: oe2, onNext: ne2, onPrevious: ie2, onRestartSlideshow: v2, darkMode: j2, toggleDarkMode: z2, onPaused: $2, id: te2.current, flipLayout: O2, items: u2, onActivateTimelineItem: se2, onUpdateTimelineMode: de2, onUpdateTextContentDensity: B2, mode: X2 }) }) : null, jsxRuntimeExports.jsxs(Po, { ref: Q2, $scrollable: ee2, className: `${k2.toLowerCase()} timeline-main-wrapper`, id: "timeline-main-wrapper", theme: P2, mode: k2, position: W2, onScroll: (e2) => {
    const t2 = e2.target;
    let n3 = 0;
    "VERTICAL" === k2 || "VERTICAL_ALTERNATING" === k2 ? (n3 = t2.scrollTop + t2.clientHeight, t2.scrollHeight - n3 < 1 && (null == E2 || E2())) : (n3 = t2.scrollLeft + t2.offsetWidth, t2.scrollWidth === n3 && (null == E2 || E2()));
  }, children: ["VERTICAL_ALTERNATING" === X2 ? jsxRuntimeExports.jsx(Jr, { activeTimelineItem: i2, autoScroll: le2, contentDetailsChildren: c2, hasFocus: Y2, iconChildren: d2, items: u2, mode: X2, onClick: se2, onElapsed: (e2) => se2(e2, true), onOutlineSelection: b2, slideShowRunning: C2, theme: P2, nestedCardHeight: S2 }) : null, "HORIZONTAL" === X2 || "HORIZONTAL_ALL" === X2 ? jsxRuntimeExports.jsxs(jo, { className: k2.toLowerCase(), children: [jsxRuntimeExports.jsx(zo, { color: P2 && P2.primary, height: D2 }), jsxRuntimeExports.jsx(Wr, { autoScroll: le2, contentDetailsChildren: c2, handleItemClick: se2, hasFocus: Y2, iconChildren: d2, items: u2, mode: X2, onElapsed: (e2) => se2(e2, true), slideShowRunning: C2, wrapperId: te2.current, nestedCardHeight: S2 })] }) : null, "VERTICAL" === X2 ? jsxRuntimeExports.jsx(Jr, { activeTimelineItem: i2, alternateCards: false, autoScroll: le2, contentDetailsChildren: c2, hasFocus: Y2, iconChildren: d2, items: u2, mode: k2, onClick: se2, onElapsed: (e2) => se2(e2, true), onOutlineSelection: b2, slideShowRunning: C2, theme: P2, nestedCardHeight: S2 }) : null] }), jsxRuntimeExports.jsx(_o, { id: te2.current, $showAllCards: H2, ref: Z2 })] });
};
Go.displayName = "Timeline";
var qo = Go;
const Yo = i.Children.toArray, Uo = (t2) => {
  const { allowDynamicUpdate: n2 = false, children: a2, items: c2, onScrollEnd: d2, slideShow: u2 = false, onItemSelected: h2, activeItemIndex: p2 = 0, titleDateFormat: m2 = "MMM DD, YYYY", mode: f2 } = t2, [g2, v2] = reactExports.useState([]), y2 = reactExports.useRef(), [w2, b2] = reactExports.useState(false), [x2, C2] = reactExports.useState(p2), k2 = (e2) => {
    if (null != e2 && e2.length) return e2.map((e3, t4) => {
      var n3;
      const i2 = $e();
      return { ...e3, _dayjs: Ae(e3.date), active: t4 === p2, id: i2, items: null === (n3 = e3.items) || void 0 === n3 ? void 0 : n3.map((e4) => ({ ...e4, _dayjs: Ae(e4.date), id: $e(), isNested: true, visible: true })), title: e3.date ? Ae(e3.date).format(m2) : e3.title, visible: true };
    });
    const t3 = i.Children.toArray(a2).filter((e3) => "chrono-icons" !== e3.props.className).length;
    return Array.from({ length: t3 }).map((e3, t4) => ({ active: t4 === p2, id: $e(), visible: true }));
  };
  reactExports.useEffect(() => {
    const e2 = null == c2 ? void 0 : c2.filter((e3) => e3);
    let t3 = [];
    if (null != e2 && e2.length) g2.length && e2.length > g2.length ? t3 = ((e3) => {
      if (e3) {
        const t4 = g2.length;
        return e3.map((e4, n3) => ({ ...e4, active: n3 === t4, visible: true }));
      }
      return [];
    })(e2) : e2.length && (t3 = k2(e2)), t3.length && (y2.current = t3, v2(t3), C2(0));
    else {
      const e3 = k2();
      v2(e3);
    }
  }, [JSON.stringify(n2 ? c2 : null)]);
  const S2 = reactExports.useCallback((e2) => {
    v2((t3) => t3.map((t4, n3) => ({ ...t4, active: n3 === e2, visible: e2 >= 0 }))), C2(e2), c2 && c2.length - 1 === e2 && b2(false);
  }, []);
  reactExports.useEffect(() => {
    S2(p2);
  }, [p2]);
  const T2 = reactExports.useCallback(() => {
    S2(-1), setTimeout(() => {
      b2(true), S2(0);
    }, 0);
  }, []), $2 = reactExports.useCallback((e2) => {
    e2 >= 0 && (C2(e2), S2(e2));
  }, [g2.length]), I2 = reactExports.useCallback(() => {
    b2(false);
  }, []);
  let A2 = Yo(a2).filter((e2) => "chrono-icons" === e2.props.className);
  return A2.length && (A2 = A2[0].props.children), jsxRuntimeExports.jsx(Oe, { ...t2, children: jsxRuntimeExports.jsx(qo, { activeTimelineItem: x2, contentDetailsChildren: Yo(a2).filter((e2) => "chrono-icons" !== e2.props.className), iconChildren: A2, items: g2, onFirst: () => {
    C2(0), S2(0);
  }, onLast: () => {
    if (g2.length) {
      const e2 = g2.length - 1;
      C2(e2), S2(e2);
    }
  }, onNext: () => {
    if (g2.length && x2 < g2.length - 1) {
      const e2 = x2 + 1;
      S2(e2), C2(e2);
    }
  }, onPrevious: () => {
    if (x2 > 0) {
      const e2 = x2 - 1;
      S2(e2), C2(e2);
    }
  }, onRestartSlideshow: T2, onTimelineUpdated: S2, slideShow: u2, slideShowEnabled: u2, slideShowRunning: w2, onScrollEnd: d2, onItemSelected: h2, onOutlineSelection: $2, mode: f2, onPaused: I2 }) });
};
const devProcess = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "devProcess", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { id: "title", children: "Development Process" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Uo,
      {
        items: [
          {
            cardTitle: "Initial Planning, Researching, and Wireframing",
            cardDetailedText: `During this initial phase, I conducted research on which elements employers preferred to see on Portfolio Websites through surveying. 
                I also planned out the structure and design of the website, considering the target audience, type of content, and the desired user experience. I used Figma and hand drew wireframes and sketches of the website's initial design to help visualize the design and functionality of the website.`
          },
          {
            cardTitle: "Setting Up Development Environment, Project Structure, and Initial Code",
            cardDetailedText: `I set up my development environment, created a project structure, and started writing the initial code for the website. I used React and styled-components for the front-end development. I also created a simple layout for the website using HTML and CSS, which I will continue to update as I develop the website's features and design.`
          },
          {
            cardTitle: "Building the foundation of the User Interface",
            cardDetailedText: `I started building the foundation of the User Interface (UI) by creating the main structure and layout of the website. I used CSS Grid and Flexbox to position elements and create a responsive design. I also added some basic styling using CSS and styled-components to make the website look visually appealing and user-friendly.`
          },
          {
            cardTitle: "Adding Features and Enhancing Functionality",
            cardDetailedText: "After finalizing the user interface, I implemented the functionality for the contact form by integrating it with the EmailJS API. This approach allowed me to bypass the need for a backend to store submissions, ensuring that all messages are sent directly to my email in real-time, streamlining communication without additional server-side complexity."
          },
          {
            cardTitle: "Optimizing Performance & Adaptive Design",
            cardDetailedText: "I optimized the website's performance by implementing lazy loading, eliminating unnecessary code and processes, and fine-tuning resource management to ensure lightning-fast load times. Additionally, I conducted extensive testing across various screen sizes, refining responsiveness to deliver a seamless user experience on all devices."
          },
          {
            cardTitle: "Hosting and Maintenance",
            cardDetailedText: "For deployment, I hosted the website on Vercel, seamlessly integrating it with my GitHub repository, ensuring automatic updates whenever I push new code. This streamlined workflow allows for efficient version control and continuous deployment. Additionally, I used GoDaddy to purchase and manage my custom domain, configuring DNS settings to point to Vercel for a professional and reliable hosting solution."
          }
        ],
        theme: {
          primary: "#1B2A41",
          secondary: "#E5E9F0",
          text: "#E5E9F0",
          background: "#E5E9F0",
          borderRadius: 10,
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
          cardTitleColor: "#1B2A41",
          titleColor: "#1B2A41",
          titleColorActive: "#AC8205"
        },
        mode: "VERTICAL",
        disableToolbar: true
      }
    ) })
  ] });
};
function portfolioSiteInfo() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.StrictMode, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(portfolioSiteInfo$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(devProcess, {})
  ] });
}
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Home, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/about", element: /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/resume", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Resume, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/projects", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/portfolioSiteInfo", element: /* @__PURE__ */ jsxRuntimeExports.jsx(portfolioSiteInfo, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
ReactDOM.render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(HashRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }),
  document.getElementById("root")
);
