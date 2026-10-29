var An = Object.defineProperty;
var Hn = (e, t, o) => t in e ? An(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var xt = (e, t, o) => Hn(e, typeof t != "symbol" ? t + "" : t, o);
import { VCard as Ie, VCardText as Qe, VToolbar as Pe, VDivider as Je, VSpacer as et, VThemeProvider as si, VInput as wn, VCardTitle as Tn, VBtn as tt, VIcon as ye, VTooltip as Ln, VMenu as yt, VList as Yt, VSheet as kn, VTextField as Fe, VCheckbox as di, VCardSubtitle as Mn, VListItem as ui, VListItemTitle as ci, VForm as pi, VFileInput as Cn, VDialog as Qt, VTabs as Sn, VTab as xn, VWindow as En, VWindowItem as $n, VCardActions as Jt } from "vuetify/components";
import { reactive as pt, computed as w, unref as m, watch as ue, onMounted as fi, nextTick as On, getCurrentScope as In, onScopeDispose as Pn, getCurrentInstance as At, provide as mi, hasInjectionContext as Fn, inject as gi, shallowRef as hi, toValue as dt, watchEffect as Ae, ref as O, defineComponent as L, openBlock as h, createBlock as H, withCtx as v, createVNode as b, createElementBlock as $, Fragment as U, renderList as G, resolveDynamicComponent as We, mergeProps as ve, createSlots as eo, createCommentVNode as q, useAttrs as Bn, toRef as Rn, normalizeClass as de, createTextVNode as ce, toDisplayString as N, renderSlot as Y, normalizeProps as ft, guardReactiveProps as mt, normalizeStyle as be, createElementVNode as re, useModel as zn, mergeModels as Dn, withDirectives as jn, vShow as Un } from "vue";
import { useEditor as Nn, EditorContent as Zn, nodeViewProps as Gn, NodeViewWrapper as Wn, NodeViewContent as qn, VueNodeViewRenderer as Kn, mergeAttributes as Xn } from "@tiptap/vue-3";
import { useTheme as to } from "vuetify";
import { TextSelection as bi, Plugin as Yn } from "@tiptap/pm/state";
import { BubbleMenu as Qn } from "@tiptap/vue-3/menus";
import { generateHTML as Jn } from "@tiptap/html";
import { Extension as He, Node as vi, getMarkRange as er } from "@tiptap/core";
import { Document as tr } from "@tiptap/extension-document";
import { HardBreak as or } from "@tiptap/extension-hard-break";
import { ListItem as ir, BulletList as nr, OrderedList as rr, TaskList as ar, TaskItem as lr } from "@tiptap/extension-list";
import { Paragraph as sr } from "@tiptap/extension-paragraph";
import { Text as dr } from "@tiptap/extension-text";
import { TextStyle as ur } from "@tiptap/extension-text-style";
import { Placeholder as cr, Focus as pr, Gapcursor as fr, Dropcursor as mr, CharacterCount as gr, UndoRedo as hr } from "@tiptap/extensions";
import { deleteSelection as br } from "@tiptap/pm/commands";
import { Blockquote as vr } from "@tiptap/extension-blockquote";
import { Bold as _r } from "@tiptap/extension-bold";
import { Code as Vr } from "@tiptap/extension-code";
import { CodeBlock as yr } from "@tiptap/extension-code-block";
import { Color as Ar } from "@tiptap/extension-color";
import { FontFamily as Hr } from "@tiptap/extension-font-family";
import { Heading as wr } from "@tiptap/extension-heading";
import { Highlight as Tr } from "@tiptap/extension-highlight";
import { HorizontalRule as Lr } from "@tiptap/extension-horizontal-rule";
import { Image as kr } from "@tiptap/extension-image";
import { Italic as Mr } from "@tiptap/extension-italic";
import { Link as Cr } from "@tiptap/extension-link";
import { Strike as Sr } from "@tiptap/extension-strike";
import { Subscript as xr } from "@tiptap/extension-subscript";
import { Superscript as Er } from "@tiptap/extension-superscript";
import { Table as $r, TableRow as Or, TableHeader as Ir, TableCell as Pr } from "@tiptap/extension-table";
import { TextAlign as Fr } from "@tiptap/extension-text-align";
import { Underline as Br } from "@tiptap/extension-underline";
const Rt = "en", zt = 200, Rr = zt - 80, vo = 20, _o = 1e5, Et = 16, ot = 6, it = 10, nt = 2, zr = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#000000",
  "#333333",
  "#666666",
  "#999999",
  "#CCCCCC",
  "#D5D5D4",
  "#E8E8E8",
  "#EEEEEE"
], Dt = "Roboto", Dr = [
  { title: "editor.default", value: Dt, divider: !0, default: !0 },
  { title: "Arial", value: "Arial" },
  { title: "Arial Black", value: "Arial Black" },
  { title: "Georgia", value: "Georgia" },
  { title: "Impact", value: "Impact" },
  { title: "Helvetica", value: "Helvetica" },
  { title: "Tahoma", value: "Tahoma" },
  { title: "Times New Roman", value: "Times New Roman" },
  { title: "Verdana", value: "Verdana" },
  { title: "Courier New", value: "Courier New", divider: !0 },
  { title: "Monaco", value: "Monaco" },
  { title: "Monospace", value: "monospace" }
], gt = "default", _i = [
  { title: "editor.default", value: gt, default: !0 }
], jr = [8, 10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72], Me = "default";
var ht = /* @__PURE__ */ ((e) => (e[e["size-small"] = 200] = "size-small", e[e["size-medium"] = 500] = "size-medium", e["size-large"] = "100%", e))(ht || {}), bt = /* @__PURE__ */ ((e) => (e[e["size-small"] = 480] = "size-small", e[e["size-medium"] = 640] = "size-medium", e["size-large"] = "100%", e))(bt || {});
const Ur = {
  image: [
    "float-left",
    "float-none",
    "float-right",
    "divider",
    "image-size-small",
    "image-size-medium",
    "image-size-large",
    "divider",
    "textAlign",
    "divider",
    "image",
    "image-aspect-ratio",
    "image-caption",
    "remove"
  ],
  text: ["bold", "italic", "underline", "strike", "divider", "color", "highlight", "textAlign", "divider", "link"],
  link: [
    "bold",
    "italic",
    "underline",
    "strike",
    "divider",
    "color",
    "highlight",
    "textAlign",
    "divider",
    "link",
    "unlink",
    "link-open"
  ],
  video: ["video-size-small", "video-size-medium", "video-size-large", "divider", "video", "remove"],
  table: ["table-add-column-before", "table-add-column-after", "table-delete-column", "divider", "table-add-row-before", "table-add-row-after", "table-delete-row", "divider", "table-merge-or-split-cells", "divider", "table-delete-table", "divider"]
}, je = pt({
  extensions: []
});
function Nr(e) {
  je.defaultLang = e.defaultLang, je.defaultFallbackLang = e.defaultFallbackLang, je.defaultMarkdownTheme = e.defaultMarkdownTheme, je.extensions = e.extensions ?? [];
}
function Ht() {
  return {
    state: je
  };
}
var Vi = typeof global == "object" && global && global.Object === Object && global, Zr = typeof self == "object" && self && self.Object === Object && self, J = Vi || Zr || Function("return this")(), K = J.Symbol, yi = Object.prototype, Gr = yi.hasOwnProperty, Wr = yi.toString, ze = K ? K.toStringTag : void 0;
function qr(e) {
  var t = Gr.call(e, ze), o = e[ze];
  try {
    e[ze] = void 0;
    var i = !0;
  } catch {
  }
  var r = Wr.call(e);
  return i && (t ? e[ze] = o : delete e[ze]), r;
}
var Kr = Object.prototype, Xr = Kr.toString;
function Yr(e) {
  return Xr.call(e);
}
var Qr = "[object Null]", Jr = "[object Undefined]", Vo = K ? K.toStringTag : void 0;
function we(e) {
  return e == null ? e === void 0 ? Jr : Qr : Vo && Vo in Object(e) ? qr(e) : Yr(e);
}
function ae(e) {
  return e != null && typeof e == "object";
}
var ea = "[object Symbol]";
function wt(e) {
  return typeof e == "symbol" || ae(e) && we(e) == ea;
}
function oo(e, t) {
  for (var o = -1, i = e == null ? 0 : e.length, r = Array(i); ++o < i; )
    r[o] = t(e[o], o, e);
  return r;
}
var Q = Array.isArray, yo = K ? K.prototype : void 0, Ao = yo ? yo.toString : void 0;
function Ai(e) {
  if (typeof e == "string")
    return e;
  if (Q(e))
    return oo(e, Ai) + "";
  if (wt(e))
    return Ao ? Ao.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var ta = /\s/;
function oa(e) {
  for (var t = e.length; t-- && ta.test(e.charAt(t)); )
    ;
  return t;
}
var ia = /^\s+/;
function na(e) {
  return e && e.slice(0, oa(e) + 1).replace(ia, "");
}
function pe(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ho = NaN, ra = /^[-+]0x[0-9a-f]+$/i, aa = /^0b[01]+$/i, la = /^0o[0-7]+$/i, sa = parseInt;
function wo(e) {
  if (typeof e == "number")
    return e;
  if (wt(e))
    return Ho;
  if (pe(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = pe(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = na(e);
  var o = aa.test(e);
  return o || la.test(e) ? sa(e.slice(2), o ? 2 : 8) : ra.test(e) ? Ho : +e;
}
function io(e) {
  return e;
}
var da = "[object AsyncFunction]", ua = "[object Function]", ca = "[object GeneratorFunction]", pa = "[object Proxy]";
function Hi(e) {
  if (!pe(e))
    return !1;
  var t = we(e);
  return t == ua || t == ca || t == da || t == pa;
}
var $t = J["__core-js_shared__"], To = function() {
  var e = /[^.]+$/.exec($t && $t.keys && $t.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function fa(e) {
  return !!To && To in e;
}
var ma = Function.prototype, ga = ma.toString;
function Te(e) {
  if (e != null) {
    try {
      return ga.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ha = /[\\^$.*+?()[\]{}|]/g, ba = /^\[object .+?Constructor\]$/, va = Function.prototype, _a = Object.prototype, Va = va.toString, ya = _a.hasOwnProperty, Aa = RegExp(
  "^" + Va.call(ya).replace(ha, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ha(e) {
  if (!pe(e) || fa(e))
    return !1;
  var t = Hi(e) ? Aa : ba;
  return t.test(Te(e));
}
function wa(e, t) {
  return e == null ? void 0 : e[t];
}
function Le(e, t) {
  var o = wa(e, t);
  return Ha(o) ? o : void 0;
}
var jt = Le(J, "WeakMap");
function Ta(e, t, o) {
  switch (o.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, o[0]);
    case 2:
      return e.call(t, o[0], o[1]);
    case 3:
      return e.call(t, o[0], o[1], o[2]);
  }
  return e.apply(t, o);
}
var La = 800, ka = 16, Ma = Date.now;
function Ca(e) {
  var t = 0, o = 0;
  return function() {
    var i = Ma(), r = ka - (i - o);
    if (o = i, r > 0) {
      if (++t >= La)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Sa(e) {
  return function() {
    return e;
  };
}
var vt = function() {
  try {
    var e = Le(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), xa = vt ? function(e, t) {
  return vt(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Sa(t),
    writable: !0
  });
} : io, wi = Ca(xa);
function Ea(e, t) {
  for (var o = -1, i = e == null ? 0 : e.length; ++o < i && t(e[o], o, e) !== !1; )
    ;
  return e;
}
function $a(e, t, o, i) {
  for (var r = e.length, n = o + -1; ++n < r; )
    if (t(e[n], n, e))
      return n;
  return -1;
}
function Oa(e) {
  return e !== e;
}
function Ia(e, t, o) {
  for (var i = o - 1, r = e.length; ++i < r; )
    if (e[i] === t)
      return i;
  return -1;
}
function Pa(e, t, o) {
  return t === t ? Ia(e, t, o) : $a(e, Oa, o);
}
function Fa(e, t) {
  var o = e == null ? 0 : e.length;
  return !!o && Pa(e, t, 0) > -1;
}
var Ba = 9007199254740991, Ra = /^(?:0|[1-9]\d*)$/;
function Ti(e, t) {
  var o = typeof e;
  return t = t ?? Ba, !!t && (o == "number" || o != "symbol" && Ra.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Li(e, t, o) {
  t == "__proto__" && vt ? vt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: o,
    writable: !0
  }) : e[t] = o;
}
function no(e, t) {
  return e === t || e !== e && t !== t;
}
var za = Object.prototype, Da = za.hasOwnProperty;
function ki(e, t, o) {
  var i = e[t];
  (!(Da.call(e, t) && no(i, o)) || o === void 0 && !(t in e)) && Li(e, t, o);
}
function ja(e, t, o, i) {
  var r = !o;
  o || (o = {});
  for (var n = -1, s = t.length; ++n < s; ) {
    var a = t[n], l = void 0;
    l === void 0 && (l = e[a]), r ? Li(o, a, l) : ki(o, a, l);
  }
  return o;
}
var Lo = Math.max;
function Mi(e, t, o) {
  return t = Lo(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var i = arguments, r = -1, n = Lo(i.length - t, 0), s = Array(n); ++r < n; )
      s[r] = i[t + r];
    r = -1;
    for (var a = Array(t + 1); ++r < t; )
      a[r] = i[r];
    return a[t] = o(s), Ta(e, this, a);
  };
}
function Ua(e, t) {
  return wi(Mi(e, t, io), e + "");
}
var Na = 9007199254740991;
function ro(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Na;
}
function ao(e) {
  return e != null && ro(e.length) && !Hi(e);
}
var Za = Object.prototype;
function Ci(e) {
  var t = e && e.constructor, o = typeof t == "function" && t.prototype || Za;
  return e === o;
}
function Ga(e, t) {
  for (var o = -1, i = Array(e); ++o < e; )
    i[o] = t(o);
  return i;
}
var Wa = "[object Arguments]";
function ko(e) {
  return ae(e) && we(e) == Wa;
}
var Si = Object.prototype, qa = Si.hasOwnProperty, Ka = Si.propertyIsEnumerable, lo = ko(/* @__PURE__ */ function() {
  return arguments;
}()) ? ko : function(e) {
  return ae(e) && qa.call(e, "callee") && !Ka.call(e, "callee");
};
function Xa() {
  return !1;
}
var xi = typeof exports == "object" && exports && !exports.nodeType && exports, Mo = xi && typeof module == "object" && module && !module.nodeType && module, Ya = Mo && Mo.exports === xi, Co = Ya ? J.Buffer : void 0, Qa = Co ? Co.isBuffer : void 0, _t = Qa || Xa, Ja = "[object Arguments]", el = "[object Array]", tl = "[object Boolean]", ol = "[object Date]", il = "[object Error]", nl = "[object Function]", rl = "[object Map]", al = "[object Number]", ll = "[object Object]", sl = "[object RegExp]", dl = "[object Set]", ul = "[object String]", cl = "[object WeakMap]", pl = "[object ArrayBuffer]", fl = "[object DataView]", ml = "[object Float32Array]", gl = "[object Float64Array]", hl = "[object Int8Array]", bl = "[object Int16Array]", vl = "[object Int32Array]", _l = "[object Uint8Array]", Vl = "[object Uint8ClampedArray]", yl = "[object Uint16Array]", Al = "[object Uint32Array]", P = {};
P[ml] = P[gl] = P[hl] = P[bl] = P[vl] = P[_l] = P[Vl] = P[yl] = P[Al] = !0;
P[Ja] = P[el] = P[pl] = P[tl] = P[fl] = P[ol] = P[il] = P[nl] = P[rl] = P[al] = P[ll] = P[sl] = P[dl] = P[ul] = P[cl] = !1;
function Hl(e) {
  return ae(e) && ro(e.length) && !!P[we(e)];
}
function Tt(e) {
  return function(t) {
    return e(t);
  };
}
var Ei = typeof exports == "object" && exports && !exports.nodeType && exports, Ue = Ei && typeof module == "object" && module && !module.nodeType && module, wl = Ue && Ue.exports === Ei, Ot = wl && Vi.process, Ee = function() {
  try {
    var e = Ue && Ue.require && Ue.require("util").types;
    return e || Ot && Ot.binding && Ot.binding("util");
  } catch {
  }
}(), So = Ee && Ee.isTypedArray, $i = So ? Tt(So) : Hl, Tl = Object.prototype, Ll = Tl.hasOwnProperty;
function Oi(e, t) {
  var o = Q(e), i = !o && lo(e), r = !o && !i && _t(e), n = !o && !i && !r && $i(e), s = o || i || r || n, a = s ? Ga(e.length, String) : [], l = a.length;
  for (var d in e)
    (t || Ll.call(e, d)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    Ti(d, l))) && a.push(d);
  return a;
}
function Ii(e, t) {
  return function(o) {
    return e(t(o));
  };
}
var kl = Ii(Object.keys, Object), Ml = Object.prototype, Cl = Ml.hasOwnProperty;
function Sl(e) {
  if (!Ci(e))
    return kl(e);
  var t = [];
  for (var o in Object(e))
    Cl.call(e, o) && o != "constructor" && t.push(o);
  return t;
}
function Pi(e) {
  return ao(e) ? Oi(e) : Sl(e);
}
function xl(e) {
  var t = [];
  if (e != null)
    for (var o in Object(e))
      t.push(o);
  return t;
}
var El = Object.prototype, $l = El.hasOwnProperty;
function Ol(e) {
  if (!pe(e))
    return xl(e);
  var t = Ci(e), o = [];
  for (var i in e)
    i == "constructor" && (t || !$l.call(e, i)) || o.push(i);
  return o;
}
function Il(e) {
  return ao(e) ? Oi(e, !0) : Ol(e);
}
var Pl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Fl = /^\w*$/;
function so(e, t) {
  if (Q(e))
    return !1;
  var o = typeof e;
  return o == "number" || o == "symbol" || o == "boolean" || e == null || wt(e) ? !0 : Fl.test(e) || !Pl.test(e) || t != null && e in Object(t);
}
var qe = Le(Object, "create");
function Bl() {
  this.__data__ = qe ? qe(null) : {}, this.size = 0;
}
function Rl(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var zl = "__lodash_hash_undefined__", Dl = Object.prototype, jl = Dl.hasOwnProperty;
function Ul(e) {
  var t = this.__data__;
  if (qe) {
    var o = t[e];
    return o === zl ? void 0 : o;
  }
  return jl.call(t, e) ? t[e] : void 0;
}
var Nl = Object.prototype, Zl = Nl.hasOwnProperty;
function Gl(e) {
  var t = this.__data__;
  return qe ? t[e] !== void 0 : Zl.call(t, e);
}
var Wl = "__lodash_hash_undefined__";
function ql(e, t) {
  var o = this.__data__;
  return this.size += this.has(e) ? 0 : 1, o[e] = qe && t === void 0 ? Wl : t, this;
}
function Ve(e) {
  var t = -1, o = e == null ? 0 : e.length;
  for (this.clear(); ++t < o; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ve.prototype.clear = Bl;
Ve.prototype.delete = Rl;
Ve.prototype.get = Ul;
Ve.prototype.has = Gl;
Ve.prototype.set = ql;
function Kl() {
  this.__data__ = [], this.size = 0;
}
function Lt(e, t) {
  for (var o = e.length; o--; )
    if (no(e[o][0], t))
      return o;
  return -1;
}
var Xl = Array.prototype, Yl = Xl.splice;
function Ql(e) {
  var t = this.__data__, o = Lt(t, e);
  if (o < 0)
    return !1;
  var i = t.length - 1;
  return o == i ? t.pop() : Yl.call(t, o, 1), --this.size, !0;
}
function Jl(e) {
  var t = this.__data__, o = Lt(t, e);
  return o < 0 ? void 0 : t[o][1];
}
function es(e) {
  return Lt(this.__data__, e) > -1;
}
function ts(e, t) {
  var o = this.__data__, i = Lt(o, e);
  return i < 0 ? (++this.size, o.push([e, t])) : o[i][1] = t, this;
}
function fe(e) {
  var t = -1, o = e == null ? 0 : e.length;
  for (this.clear(); ++t < o; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
fe.prototype.clear = Kl;
fe.prototype.delete = Ql;
fe.prototype.get = Jl;
fe.prototype.has = es;
fe.prototype.set = ts;
var Ke = Le(J, "Map");
function os() {
  this.size = 0, this.__data__ = {
    hash: new Ve(),
    map: new (Ke || fe)(),
    string: new Ve()
  };
}
function is(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function kt(e, t) {
  var o = e.__data__;
  return is(t) ? o[typeof t == "string" ? "string" : "hash"] : o.map;
}
function ns(e) {
  var t = kt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function rs(e) {
  return kt(this, e).get(e);
}
function as(e) {
  return kt(this, e).has(e);
}
function ls(e, t) {
  var o = kt(this, e), i = o.size;
  return o.set(e, t), this.size += o.size == i ? 0 : 1, this;
}
function me(e) {
  var t = -1, o = e == null ? 0 : e.length;
  for (this.clear(); ++t < o; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
me.prototype.clear = os;
me.prototype.delete = ns;
me.prototype.get = rs;
me.prototype.has = as;
me.prototype.set = ls;
var ss = "Expected a function";
function uo(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ss);
  var o = function() {
    var i = arguments, r = t ? t.apply(this, i) : i[0], n = o.cache;
    if (n.has(r))
      return n.get(r);
    var s = e.apply(this, i);
    return o.cache = n.set(r, s) || n, s;
  };
  return o.cache = new (uo.Cache || me)(), o;
}
uo.Cache = me;
var ds = 500;
function us(e) {
  var t = uo(e, function(i) {
    return o.size === ds && o.clear(), i;
  }), o = t.cache;
  return t;
}
var cs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ps = /\\(\\)?/g, fs = us(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(cs, function(o, i, r, n) {
    t.push(r ? n.replace(ps, "$1") : i || o);
  }), t;
});
function ms(e) {
  return e == null ? "" : Ai(e);
}
function Mt(e, t) {
  return Q(e) ? e : so(e, t) ? [e] : fs(ms(e));
}
function $e(e) {
  if (typeof e == "string" || wt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function co(e, t) {
  t = Mt(t, e);
  for (var o = 0, i = t.length; e != null && o < i; )
    e = e[$e(t[o++])];
  return o && o == i ? e : void 0;
}
function gs(e, t, o) {
  var i = e == null ? void 0 : co(e, t);
  return i === void 0 ? o : i;
}
function po(e, t) {
  for (var o = -1, i = t.length, r = e.length; ++o < i; )
    e[r + o] = t[o];
  return e;
}
var xo = K ? K.isConcatSpreadable : void 0;
function hs(e) {
  return Q(e) || lo(e) || !!(xo && e && e[xo]);
}
function Fi(e, t, o, i, r) {
  var n = -1, s = e.length;
  for (o || (o = hs), r || (r = []); ++n < s; ) {
    var a = e[n];
    o(a) ? po(r, a) : i || (r[r.length] = a);
  }
  return r;
}
function bs(e) {
  var t = e == null ? 0 : e.length;
  return t ? Fi(e) : [];
}
function vs(e) {
  return wi(Mi(e, void 0, bs), e + "");
}
var Bi = Ii(Object.getPrototypeOf, Object), _s = "[object Object]", Vs = Function.prototype, ys = Object.prototype, Ri = Vs.toString, As = ys.hasOwnProperty, Hs = Ri.call(Object);
function ws(e) {
  if (!ae(e) || we(e) != _s)
    return !1;
  var t = Bi(e);
  if (t === null)
    return !0;
  var o = As.call(t, "constructor") && t.constructor;
  return typeof o == "function" && o instanceof o && Ri.call(o) == Hs;
}
function Ts(e, t, o) {
  var i = -1, r = e.length;
  t < 0 && (t = -t > r ? 0 : r + t), o = o > r ? r : o, o < 0 && (o += r), r = t > o ? 0 : o - t >>> 0, t >>>= 0;
  for (var n = Array(r); ++i < r; )
    n[i] = e[i + t];
  return n;
}
function Ls() {
  this.__data__ = new fe(), this.size = 0;
}
function ks(e) {
  var t = this.__data__, o = t.delete(e);
  return this.size = t.size, o;
}
function Ms(e) {
  return this.__data__.get(e);
}
function Cs(e) {
  return this.__data__.has(e);
}
var Ss = 200;
function xs(e, t) {
  var o = this.__data__;
  if (o instanceof fe) {
    var i = o.__data__;
    if (!Ke || i.length < Ss - 1)
      return i.push([e, t]), this.size = ++o.size, this;
    o = this.__data__ = new me(i);
  }
  return o.set(e, t), this.size = o.size, this;
}
function ne(e) {
  var t = this.__data__ = new fe(e);
  this.size = t.size;
}
ne.prototype.clear = Ls;
ne.prototype.delete = ks;
ne.prototype.get = Ms;
ne.prototype.has = Cs;
ne.prototype.set = xs;
var zi = typeof exports == "object" && exports && !exports.nodeType && exports, Eo = zi && typeof module == "object" && module && !module.nodeType && module, Es = Eo && Eo.exports === zi, $o = Es ? J.Buffer : void 0;
$o && $o.allocUnsafe;
function $s(e, t) {
  return e.slice();
}
function Os(e, t) {
  for (var o = -1, i = e == null ? 0 : e.length, r = 0, n = []; ++o < i; ) {
    var s = e[o];
    t(s, o, e) && (n[r++] = s);
  }
  return n;
}
function Di() {
  return [];
}
var Is = Object.prototype, Ps = Is.propertyIsEnumerable, Oo = Object.getOwnPropertySymbols, ji = Oo ? function(e) {
  return e == null ? [] : (e = Object(e), Os(Oo(e), function(t) {
    return Ps.call(e, t);
  }));
} : Di, Fs = Object.getOwnPropertySymbols, Bs = Fs ? function(e) {
  for (var t = []; e; )
    po(t, ji(e)), e = Bi(e);
  return t;
} : Di;
function Ui(e, t, o) {
  var i = t(e);
  return Q(e) ? i : po(i, o(e));
}
function Io(e) {
  return Ui(e, Pi, ji);
}
function Ni(e) {
  return Ui(e, Il, Bs);
}
var Ut = Le(J, "DataView"), Nt = Le(J, "Promise"), Zt = Le(J, "Set"), Po = "[object Map]", Rs = "[object Object]", Fo = "[object Promise]", Bo = "[object Set]", Ro = "[object WeakMap]", zo = "[object DataView]", zs = Te(Ut), Ds = Te(Ke), js = Te(Nt), Us = Te(Zt), Ns = Te(jt), X = we;
(Ut && X(new Ut(new ArrayBuffer(1))) != zo || Ke && X(new Ke()) != Po || Nt && X(Nt.resolve()) != Fo || Zt && X(new Zt()) != Bo || jt && X(new jt()) != Ro) && (X = function(e) {
  var t = we(e), o = t == Rs ? e.constructor : void 0, i = o ? Te(o) : "";
  if (i)
    switch (i) {
      case zs:
        return zo;
      case Ds:
        return Po;
      case js:
        return Fo;
      case Us:
        return Bo;
      case Ns:
        return Ro;
    }
  return t;
});
var Zs = Object.prototype, Gs = Zs.hasOwnProperty;
function Ws(e) {
  var t = e.length, o = new e.constructor(t);
  return t && typeof e[0] == "string" && Gs.call(e, "index") && (o.index = e.index, o.input = e.input), o;
}
var Vt = J.Uint8Array;
function fo(e) {
  var t = new e.constructor(e.byteLength);
  return new Vt(t).set(new Vt(e)), t;
}
function qs(e, t) {
  var o = fo(e.buffer);
  return new e.constructor(o, e.byteOffset, e.byteLength);
}
var Ks = /\w*$/;
function Xs(e) {
  var t = new e.constructor(e.source, Ks.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Do = K ? K.prototype : void 0, jo = Do ? Do.valueOf : void 0;
function Ys(e) {
  return jo ? Object(jo.call(e)) : {};
}
function Qs(e, t) {
  var o = fo(e.buffer);
  return new e.constructor(o, e.byteOffset, e.length);
}
var Js = "[object Boolean]", ed = "[object Date]", td = "[object Map]", od = "[object Number]", id = "[object RegExp]", nd = "[object Set]", rd = "[object String]", ad = "[object Symbol]", ld = "[object ArrayBuffer]", sd = "[object DataView]", dd = "[object Float32Array]", ud = "[object Float64Array]", cd = "[object Int8Array]", pd = "[object Int16Array]", fd = "[object Int32Array]", md = "[object Uint8Array]", gd = "[object Uint8ClampedArray]", hd = "[object Uint16Array]", bd = "[object Uint32Array]";
function vd(e, t, o) {
  var i = e.constructor;
  switch (t) {
    case ld:
      return fo(e);
    case Js:
    case ed:
      return new i(+e);
    case sd:
      return qs(e);
    case dd:
    case ud:
    case cd:
    case pd:
    case fd:
    case md:
    case gd:
    case hd:
    case bd:
      return Qs(e);
    case td:
      return new i();
    case od:
    case rd:
      return new i(e);
    case id:
      return Xs(e);
    case nd:
      return new i();
    case ad:
      return Ys(e);
  }
}
var _d = "[object Map]";
function Vd(e) {
  return ae(e) && X(e) == _d;
}
var Uo = Ee && Ee.isMap, yd = Uo ? Tt(Uo) : Vd, Ad = "[object Set]";
function Hd(e) {
  return ae(e) && X(e) == Ad;
}
var No = Ee && Ee.isSet, wd = No ? Tt(No) : Hd, Zi = "[object Arguments]", Td = "[object Array]", Ld = "[object Boolean]", kd = "[object Date]", Md = "[object Error]", Gi = "[object Function]", Cd = "[object GeneratorFunction]", Sd = "[object Map]", xd = "[object Number]", Wi = "[object Object]", Ed = "[object RegExp]", $d = "[object Set]", Od = "[object String]", Id = "[object Symbol]", Pd = "[object WeakMap]", Fd = "[object ArrayBuffer]", Bd = "[object DataView]", Rd = "[object Float32Array]", zd = "[object Float64Array]", Dd = "[object Int8Array]", jd = "[object Int16Array]", Ud = "[object Int32Array]", Nd = "[object Uint8Array]", Zd = "[object Uint8ClampedArray]", Gd = "[object Uint16Array]", Wd = "[object Uint32Array]", I = {};
I[Zi] = I[Td] = I[Fd] = I[Bd] = I[Ld] = I[kd] = I[Rd] = I[zd] = I[Dd] = I[jd] = I[Ud] = I[Sd] = I[xd] = I[Wi] = I[Ed] = I[$d] = I[Od] = I[Id] = I[Nd] = I[Zd] = I[Gd] = I[Wd] = !0;
I[Md] = I[Gi] = I[Pd] = !1;
function ut(e, t, o, i, r, n) {
  var s;
  if (o && (s = r ? o(e, i, r, n) : o(e)), s !== void 0)
    return s;
  if (!pe(e))
    return e;
  var a = Q(e);
  if (a)
    s = Ws(e);
  else {
    var l = X(e), d = l == Gi || l == Cd;
    if (_t(e))
      return $s(e);
    if (l == Wi || l == Zi || d && !r)
      s = {};
    else {
      if (!I[l])
        return r ? e : {};
      s = vd(e, l);
    }
  }
  n || (n = new ne());
  var u = n.get(e);
  if (u)
    return u;
  n.set(e, s), wd(e) ? e.forEach(function(f) {
    s.add(ut(f, t, o, f, e, n));
  }) : yd(e) && e.forEach(function(f, g) {
    s.set(g, ut(f, t, o, g, e, n));
  });
  var c = Ni, p = a ? void 0 : c(e);
  return Ea(p || e, function(f, g) {
    p && (g = f, f = e[g]), ki(s, g, ut(f, t, o, g, e, n));
  }), s;
}
var qd = "__lodash_hash_undefined__";
function Kd(e) {
  return this.__data__.set(e, qd), this;
}
function Xd(e) {
  return this.__data__.has(e);
}
function Xe(e) {
  var t = -1, o = e == null ? 0 : e.length;
  for (this.__data__ = new me(); ++t < o; )
    this.add(e[t]);
}
Xe.prototype.add = Xe.prototype.push = Kd;
Xe.prototype.has = Xd;
function Yd(e, t) {
  for (var o = -1, i = e == null ? 0 : e.length; ++o < i; )
    if (t(e[o], o, e))
      return !0;
  return !1;
}
function qi(e, t) {
  return e.has(t);
}
var Qd = 1, Jd = 2;
function Ki(e, t, o, i, r, n) {
  var s = o & Qd, a = e.length, l = t.length;
  if (a != l && !(s && l > a))
    return !1;
  var d = n.get(e), u = n.get(t);
  if (d && u)
    return d == t && u == e;
  var c = -1, p = !0, f = o & Jd ? new Xe() : void 0;
  for (n.set(e, t), n.set(t, e); ++c < a; ) {
    var g = e[c], _ = t[c];
    if (i)
      var y = s ? i(_, g, c, t, e, n) : i(g, _, c, e, t, n);
    if (y !== void 0) {
      if (y)
        continue;
      p = !1;
      break;
    }
    if (f) {
      if (!Yd(t, function(T, V) {
        if (!qi(f, V) && (g === T || r(g, T, o, i, n)))
          return f.push(V);
      })) {
        p = !1;
        break;
      }
    } else if (!(g === _ || r(g, _, o, i, n))) {
      p = !1;
      break;
    }
  }
  return n.delete(e), n.delete(t), p;
}
function eu(e) {
  var t = -1, o = Array(e.size);
  return e.forEach(function(i, r) {
    o[++t] = [r, i];
  }), o;
}
function tu(e) {
  var t = -1, o = Array(e.size);
  return e.forEach(function(i) {
    o[++t] = i;
  }), o;
}
var ou = 1, iu = 2, nu = "[object Boolean]", ru = "[object Date]", au = "[object Error]", lu = "[object Map]", su = "[object Number]", du = "[object RegExp]", uu = "[object Set]", cu = "[object String]", pu = "[object Symbol]", fu = "[object ArrayBuffer]", mu = "[object DataView]", Zo = K ? K.prototype : void 0, It = Zo ? Zo.valueOf : void 0;
function gu(e, t, o, i, r, n, s) {
  switch (o) {
    case mu:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case fu:
      return !(e.byteLength != t.byteLength || !n(new Vt(e), new Vt(t)));
    case nu:
    case ru:
    case su:
      return no(+e, +t);
    case au:
      return e.name == t.name && e.message == t.message;
    case du:
    case cu:
      return e == t + "";
    case lu:
      var a = eu;
    case uu:
      var l = i & ou;
      if (a || (a = tu), e.size != t.size && !l)
        return !1;
      var d = s.get(e);
      if (d)
        return d == t;
      i |= iu, s.set(e, t);
      var u = Ki(a(e), a(t), i, r, n, s);
      return s.delete(e), u;
    case pu:
      if (It)
        return It.call(e) == It.call(t);
  }
  return !1;
}
var hu = 1, bu = Object.prototype, vu = bu.hasOwnProperty;
function _u(e, t, o, i, r, n) {
  var s = o & hu, a = Io(e), l = a.length, d = Io(t), u = d.length;
  if (l != u && !s)
    return !1;
  for (var c = l; c--; ) {
    var p = a[c];
    if (!(s ? p in t : vu.call(t, p)))
      return !1;
  }
  var f = n.get(e), g = n.get(t);
  if (f && g)
    return f == t && g == e;
  var _ = !0;
  n.set(e, t), n.set(t, e);
  for (var y = s; ++c < l; ) {
    p = a[c];
    var T = e[p], V = t[p];
    if (i)
      var S = s ? i(V, T, p, t, e, n) : i(T, V, p, e, t, n);
    if (!(S === void 0 ? T === V || r(T, V, o, i, n) : S)) {
      _ = !1;
      break;
    }
    y || (y = p == "constructor");
  }
  if (_ && !y) {
    var A = e.constructor, k = t.constructor;
    A != k && "constructor" in e && "constructor" in t && !(typeof A == "function" && A instanceof A && typeof k == "function" && k instanceof k) && (_ = !1);
  }
  return n.delete(e), n.delete(t), _;
}
var Vu = 1, Go = "[object Arguments]", Wo = "[object Array]", rt = "[object Object]", yu = Object.prototype, qo = yu.hasOwnProperty;
function Au(e, t, o, i, r, n) {
  var s = Q(e), a = Q(t), l = s ? Wo : X(e), d = a ? Wo : X(t);
  l = l == Go ? rt : l, d = d == Go ? rt : d;
  var u = l == rt, c = d == rt, p = l == d;
  if (p && _t(e)) {
    if (!_t(t))
      return !1;
    s = !0, u = !1;
  }
  if (p && !u)
    return n || (n = new ne()), s || $i(e) ? Ki(e, t, o, i, r, n) : gu(e, t, l, o, i, r, n);
  if (!(o & Vu)) {
    var f = u && qo.call(e, "__wrapped__"), g = c && qo.call(t, "__wrapped__");
    if (f || g) {
      var _ = f ? e.value() : e, y = g ? t.value() : t;
      return n || (n = new ne()), r(_, y, o, i, n);
    }
  }
  return p ? (n || (n = new ne()), _u(e, t, o, i, r, n)) : !1;
}
function Ct(e, t, o, i, r) {
  return e === t ? !0 : e == null || t == null || !ae(e) && !ae(t) ? e !== e && t !== t : Au(e, t, o, i, Ct, r);
}
var Hu = 1, wu = 2;
function Tu(e, t, o, i) {
  var r = o.length, n = r;
  if (e == null)
    return !n;
  for (e = Object(e); r--; ) {
    var s = o[r];
    if (s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++r < n; ) {
    s = o[r];
    var a = s[0], l = e[a], d = s[1];
    if (s[2]) {
      if (l === void 0 && !(a in e))
        return !1;
    } else {
      var u = new ne(), c;
      if (!(c === void 0 ? Ct(d, l, Hu | wu, i, u) : c))
        return !1;
    }
  }
  return !0;
}
function Xi(e) {
  return e === e && !pe(e);
}
function Lu(e) {
  for (var t = Pi(e), o = t.length; o--; ) {
    var i = t[o], r = e[i];
    t[o] = [i, r, Xi(r)];
  }
  return t;
}
function Yi(e, t) {
  return function(o) {
    return o == null ? !1 : o[e] === t && (t !== void 0 || e in Object(o));
  };
}
function ku(e) {
  var t = Lu(e);
  return t.length == 1 && t[0][2] ? Yi(t[0][0], t[0][1]) : function(o) {
    return o === e || Tu(o, e, t);
  };
}
function Mu(e, t) {
  return e != null && t in Object(e);
}
function Cu(e, t, o) {
  t = Mt(t, e);
  for (var i = -1, r = t.length, n = !1; ++i < r; ) {
    var s = $e(t[i]);
    if (!(n = e != null && o(e, s)))
      break;
    e = e[s];
  }
  return n || ++i != r ? n : (r = e == null ? 0 : e.length, !!r && ro(r) && Ti(s, r) && (Q(e) || lo(e)));
}
function Su(e, t) {
  return e != null && Cu(e, t, Mu);
}
var xu = 1, Eu = 2;
function $u(e, t) {
  return so(e) && Xi(t) ? Yi($e(e), t) : function(o) {
    var i = gs(o, e);
    return i === void 0 && i === t ? Su(o, e) : Ct(t, i, xu | Eu);
  };
}
function Ou(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Iu(e) {
  return function(t) {
    return co(t, e);
  };
}
function Pu(e) {
  return so(e) ? Ou($e(e)) : Iu(e);
}
function Fu(e) {
  return typeof e == "function" ? e : e == null ? io : typeof e == "object" ? Q(e) ? $u(e[0], e[1]) : ku(e) : Pu(e);
}
var Pt = function() {
  return J.Date.now();
}, Bu = "Expected a function", Ru = Math.max, zu = Math.min;
function Du(e, t, o) {
  var i, r, n, s, a, l, d = 0, u = !1, c = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Bu);
  t = wo(t) || 0, pe(o) && (u = !!o.leading, c = "maxWait" in o, n = c ? Ru(wo(o.maxWait) || 0, t) : n, p = "trailing" in o ? !!o.trailing : p);
  function f(C) {
    var F = i, E = r;
    return i = r = void 0, d = C, s = e.apply(E, F), s;
  }
  function g(C) {
    return d = C, a = setTimeout(T, t), u ? f(C) : s;
  }
  function _(C) {
    var F = C - l, E = C - d, D = t - F;
    return c ? zu(D, n - E) : D;
  }
  function y(C) {
    var F = C - l, E = C - d;
    return l === void 0 || F >= t || F < 0 || c && E >= n;
  }
  function T() {
    var C = Pt();
    if (y(C))
      return V(C);
    a = setTimeout(T, _(C));
  }
  function V(C) {
    return a = void 0, p && i ? f(C) : (i = r = void 0, s);
  }
  function S() {
    a !== void 0 && clearTimeout(a), d = 0, i = l = r = a = void 0;
  }
  function A() {
    return a === void 0 ? s : V(Pt());
  }
  function k() {
    var C = Pt(), F = y(C);
    if (i = arguments, r = this, l = C, F) {
      if (a === void 0)
        return g(l);
      if (c)
        return clearTimeout(a), a = setTimeout(T, t), f(l);
    }
    return a === void 0 && (a = setTimeout(T, t)), s;
  }
  return k.cancel = S, k.flush = A, k;
}
function Ft(e) {
  return ae(e) && ao(e);
}
var ju = 200;
function Uu(e, t, o, i) {
  var r = -1, n = Fa, s = !0, a = e.length, l = [], d = t.length;
  if (!a)
    return l;
  o && (t = oo(t, Tt(o))), t.length >= ju && (n = qi, s = !1, t = new Xe(t));
  e:
    for (; ++r < a; ) {
      var u = e[r], c = o == null ? u : o(u);
      if (u = u !== 0 ? u : 0, s && c === c) {
        for (var p = d; p--; )
          if (t[p] === c)
            continue e;
        l.push(u);
      } else n(t, c, i) || l.push(u);
    }
  return l;
}
function Qi(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Nu = Ua(function(e, t) {
  var o = Qi(t);
  return Ft(o) && (o = void 0), Ft(e) ? Uu(e, Fi(t, 1, Ft, !0), Fu(o)) : [];
});
function Zu(e, t) {
  return t.length < 2 ? e : co(e, Ts(t, 0, -1));
}
function Ko(e, t) {
  return Ct(e, t);
}
var Gu = Object.prototype, Wu = Gu.hasOwnProperty;
function qu(e, t) {
  t = Mt(t, e);
  var o = -1, i = t.length;
  if (!i)
    return !0;
  for (; ++o < i; ) {
    var r = $e(t[o]);
    if (r === "__proto__" && !Wu.call(e, "__proto__") || (r === "constructor" || r === "prototype") && o < i - 1)
      return !1;
  }
  var n = Zu(e, t);
  return n == null || delete n[$e(Qi(t))];
}
function Ku(e) {
  return ws(e) ? void 0 : e;
}
var Xu = 1, Yu = 2, Qu = 4, Ju = vs(function(e, t) {
  var o = {};
  if (e == null)
    return o;
  var i = !1;
  t = oo(t, function(n) {
    return n = Mt(n, e), i || (i = n.length > 1), n;
  }), ja(e, Ni(e), o), i && (o = ut(o, Xu | Yu | Qu, Ku));
  for (var r = t.length; r--; )
    qu(o, t[r]);
  return o;
}), ec = "Expected a function";
function Se(e, t, o) {
  var i = !0, r = !0;
  if (typeof e != "function")
    throw new TypeError(ec);
  return pe(o) && (i = "leading" in o ? !!o.leading : i, r = "trailing" in o ? !!o.trailing : r), Du(e, t, {
    leading: i,
    maxWait: t,
    trailing: r
  });
}
function tc(e, t, o) {
  return e < t ? t : e > o ? o : e;
}
const Gt = (e) => typeof e == "number", Ne = (e) => typeof e == "string", Oe = (e) => typeof e == "boolean", oc = (e) => typeof e == "function", Ze = (e, t = "px") => {
  if (!e) return e;
  const o = Gt(e) ? String(e) : e, i = Number.parseFloat(o), r = o.match(/[a-zA-Z%]+$/), n = r ? r[0] : t;
  return Number.isNaN(i) ? e : i + n;
};
function ic(e, t) {
  const { extensions: o = [] } = e.extensionManager ?? {};
  return !!o.find((r) => r.name === t);
}
const Xo = (e, t) => {
  const { schema: o } = e, i = o.marks[t], r = o.nodes[t];
  return i ? e.isActive(i.name) : r ? e.isActive(r.name) : !1;
};
function Ji(e, t) {
  const { state: o } = Ht(), i = w(() => Oe(m(e)) ? gt : Ne(o.defaultMarkdownTheme) && o.defaultMarkdownTheme ? o.defaultMarkdownTheme : gt), r = w(() => ({
    [`markdown-theme-${m(i)}`]: !!Ne(m(i))
  }));
  function n(a) {
    !Oe(m(e)) && m(e) !== a && (t == null || t(a));
  }
  return ue(i, (a) => n(a)), ue(e, (a) => {
    a && Ne(a) && o.defaultMarkdownTheme !== a && (o.defaultMarkdownTheme = a);
  }), (() => {
    o.defaultMarkdownTheme && n(o.defaultMarkdownTheme);
  })(), {
    markdownThemeStyle: r
  };
}
function en(e) {
  return In() ? (Pn(e), !0) : !1;
}
const xe = /* @__PURE__ */ new WeakMap(), nc = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const o = e[0], i = (t = At()) == null ? void 0 : t.proxy;
  if (i == null && !Fn())
    throw new Error("injectLocal must be called in setup");
  return i && xe.has(i) && o in xe.get(i) ? xe.get(i)[o] : gi(...e);
};
function rc(e, t) {
  var o;
  const i = (o = At()) == null ? void 0 : o.proxy;
  if (i == null)
    throw new Error("provideLocal must be called in setup");
  xe.has(i) || xe.set(i, /* @__PURE__ */ Object.create(null));
  const r = xe.get(i);
  return r[e] = t, mi(e, t);
}
// @__NO_SIDE_EFFECTS__
function ac(e, t) {
  const o = Symbol(e.name || "InjectionState"), i = void 0;
  return [(...s) => {
    const a = e(...s);
    return rc(o, a), a;
  }, () => /* @__PURE__ */ nc(o, i)];
}
const tn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const lc = Object.prototype.toString, sc = (e) => lc.call(e) === "[object Object]";
function Bt(e) {
  return Array.isArray(e) ? e : [e];
}
function dc(e) {
  return At();
}
function uc(e, t = !0, o) {
  dc() ? fi(e, o) : t ? e() : On(e);
}
function cc(e, t, o) {
  return ue(
    e,
    t,
    {
      ...o,
      immediate: !0
    }
  );
}
const pc = tn ? window : void 0, fc = tn ? window.document : void 0;
function Wt(e) {
  var t;
  const o = dt(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
function Yo(...e) {
  const t = [], o = () => {
    t.forEach((a) => a()), t.length = 0;
  }, i = (a, l, d, u) => (a.addEventListener(l, d, u), () => a.removeEventListener(l, d, u)), r = w(() => {
    const a = Bt(dt(e[0])).filter((l) => l != null);
    return a.every((l) => typeof l != "string") ? a : void 0;
  }), n = cc(
    () => {
      var a, l;
      return [
        (l = (a = r.value) == null ? void 0 : a.map((d) => Wt(d))) != null ? l : [pc].filter((d) => d != null),
        Bt(dt(r.value ? e[1] : e[0])),
        Bt(m(r.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        dt(r.value ? e[3] : e[2])
      ];
    },
    ([a, l, d, u]) => {
      if (o(), !(a != null && a.length) || !(l != null && l.length) || !(d != null && d.length))
        return;
      const c = sc(u) ? { ...u } : u;
      t.push(
        ...a.flatMap(
          (p) => l.flatMap(
            (f) => d.map((g) => i(p, f, g, c))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    n(), o();
  };
  return en(o), s;
}
// @__NO_SIDE_EFFECTS__
function mc() {
  const e = hi(!1), t = At();
  return t && fi(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function gc(e) {
  const t = /* @__PURE__ */ mc();
  return w(() => (t.value, !!e()));
}
const Qo = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function hc(e, t = {}) {
  const {
    document: o = fc,
    autoExit: i = !1
  } = t, r = w(() => {
    var V;
    return (V = Wt(e)) != null ? V : o == null ? void 0 : o.documentElement;
  }), n = hi(!1), s = w(() => [
    "requestFullscreen",
    "webkitRequestFullscreen",
    "webkitEnterFullscreen",
    "webkitEnterFullScreen",
    "webkitRequestFullScreen",
    "mozRequestFullScreen",
    "msRequestFullscreen"
  ].find((V) => o && V in o || r.value && V in r.value)), a = w(() => [
    "exitFullscreen",
    "webkitExitFullscreen",
    "webkitExitFullScreen",
    "webkitCancelFullScreen",
    "mozCancelFullScreen",
    "msExitFullscreen"
  ].find((V) => o && V in o || r.value && V in r.value)), l = w(() => [
    "fullScreen",
    "webkitIsFullScreen",
    "webkitDisplayingFullscreen",
    "mozFullScreen",
    "msFullscreenElement"
  ].find((V) => o && V in o || r.value && V in r.value)), d = [
    "fullscreenElement",
    "webkitFullscreenElement",
    "mozFullScreenElement",
    "msFullscreenElement"
  ].find((V) => o && V in o), u = /* @__PURE__ */ gc(() => r.value && o && s.value !== void 0 && a.value !== void 0 && l.value !== void 0), c = () => d ? (o == null ? void 0 : o[d]) === r.value : !1, p = () => {
    if (l.value) {
      if (o && o[l.value] != null)
        return o[l.value];
      {
        const V = r.value;
        if ((V == null ? void 0 : V[l.value]) != null)
          return !!V[l.value];
      }
    }
    return !1;
  };
  async function f() {
    if (!(!u.value || !n.value)) {
      if (a.value)
        if ((o == null ? void 0 : o[a.value]) != null)
          await o[a.value]();
        else {
          const V = r.value;
          (V == null ? void 0 : V[a.value]) != null && await V[a.value]();
        }
      n.value = !1;
    }
  }
  async function g() {
    if (!u.value || n.value)
      return;
    p() && await f();
    const V = r.value;
    s.value && (V == null ? void 0 : V[s.value]) != null && (await V[s.value](), n.value = !0);
  }
  async function _() {
    await (n.value ? f() : g());
  }
  const y = () => {
    const V = p();
    (!V || V && c()) && (n.value = V);
  }, T = { capture: !1, passive: !0 };
  return Yo(o, Qo, y, T), Yo(() => Wt(r), Qo, y, T), uc(y, !1), i && en(f), {
    isSupported: u,
    isFullscreen: n,
    enter: g,
    exit: f,
    toggle: _
  };
}
const [bc, mo] = /* @__PURE__ */ ac(() => {
  const { state: e } = Ht(), t = pt({
    extensions: e.extensions ?? [],
    defaultLang: Rt,
    defaultMarkdownTheme: gt,
    isFullscreen: !1,
    color: void 0,
    highlight: void 0
  }), o = w(() => t.isFullscreen);
  function i() {
    t.isFullscreen = !t.isFullscreen;
  }
  return Ae(() => {
    t.extensions = e.extensions, t.defaultLang = e.defaultLang, t.defaultMarkdownTheme = e.defaultMarkdownTheme;
  }), {
    state: t,
    isFullscreen: o,
    toggleFullscreen: i
  };
}), Jo = "[vuetify-pro-tiptap]";
class qt {
  static warn(t) {
    console.warn(`${Jo}: ${t}`);
  }
  static error(t) {
    console.error(`${Jo}: ${t}`);
  }
}
function vc(e) {
  return e = e || /* @__PURE__ */ new Map(), {
    /**
     * A Map of event names to registered handler functions.
     */
    all: e,
    /**
     * Register an event handler for the given type.
     * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
     * @param {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on(t, o) {
      const i = e.get(t);
      i ? i.push(o) : e.set(t, [o]);
    },
    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    off(t, o) {
      const i = e.get(t);
      i && (o ? i.splice(i.indexOf(o) >>> 0, 1) : e.set(t, []));
    },
    /**
     * Invoke all handlers for the given type.
     * If present, `'*'` handlers are invoked after type-matched handlers.
     *
     * Note: Manually firing '*' handlers is not supported.
     *
     * @param {string|symbol} type The event type to invoke
     * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit(t, o) {
      let i = e.get(t);
      i && i.slice().map((r) => {
        r(o);
      }), i = e.get("*"), i && i.slice().map((r) => {
        r(t, o);
      });
    }
  };
}
const _c = {
  "editor.remove": "Entfernen",
  "editor.words": "WÖRTER",
  "editor.characters": "ZEICHEN",
  "editor.default": "Standard",
  "editor.size.small.tooltip": "Klein",
  "editor.size.medium.tooltip": "Mittel",
  "editor.size.large.tooltip": "Groß",
  "editor.bold.tooltip": "Fett",
  "editor.italic.tooltip": "Kursiv",
  "editor.underline.tooltip": "Unterstrichen",
  "editor.strike.tooltip": "Durchgestrichen",
  "editor.color.tooltip": "Farbe",
  "editor.highlight.tooltip": "Hervorheben",
  "editor.heading.tooltip": "Überschriften",
  "editor.heading.h1.tooltip": "Überschrift 1",
  "editor.heading.h2.tooltip": "Überschrift 2",
  "editor.heading.h3.tooltip": "Überschrift 3",
  "editor.heading.h4.tooltip": "Überschrift 4",
  "editor.heading.h5.tooltip": "Überschrift 5",
  "editor.heading.h6.tooltip": "Überschrift 6",
  "editor.paragraph.tooltip": "Absatz",
  "editor.textalign.tooltip": "Ausrichten",
  "editor.textalign.left.tooltip": "Links",
  "editor.textalign.center.tooltip": "Zentriert",
  "editor.textalign.right.tooltip": "Rechts",
  "editor.textalign.justify.tooltip": "Blocksatz",
  "editor.fontFamily.tooltip": "Schriftart",
  "editor.fontSize.tooltip": "Schriftgröße",
  "editor.superscript.tooltip": "Hochgestellt",
  "editor.subscript.tooltip": "Tiefgestellt",
  "editor.bulletlist.tooltip": "Aufzählungsliste",
  "editor.orderedlist.tooltip": "Nummerierte Liste",
  "editor.tasklist.tooltip": "Aufgabenliste",
  "editor.indent.tooltip": "Einzug",
  "editor.outdent.tooltip": "Ausrücken",
  "editor.link.tooltip": "Link",
  "editor.link.unlink.tooltip": "Link entfernen",
  "editor.link.open": "Link öffnen",
  "editor.link.dialog.title": "Link einfügen",
  "editor.link.dialog.link": "Link",
  "editor.link.dialog.openInNewTab": "In neuem Tab öffnen",
  "editor.link.dialog.button.apply": "Anwenden",
  "editor.markdownTheme.tooltip": "Thema",
  "editor.image.tooltip": "Bild",
  "editor.image.float.left.tooltip": "Links ausrichten",
  "editor.image.float.none.tooltip": "Keine Ausrichtung",
  "editor.image.float.right.tooltip": "Rechts ausrichten",
  "editor.image.dialog.title": "Bild einfügen",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Hochladen",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Original-Seitenverhältnis beibehalten",
  "editor.image.dialog.form.file": "Datei",
  "editor.image.dialog.form.caption": "Etikett",
  "editor.image.dialog.form.captionDisabled": "Etikett deaktiviert",
  "editor.image.dialog.button.apply": "Anwenden",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Video einfügen",
  "editor.video.dialog.link": "Link",
  "editor.video.dialog.button.apply": "Anwenden",
  "editor.table.tooltip": "Tabelle",
  "editor.table.menu.insert_table": "Tabelle einfügen",
  "editor.table.menu.insert_table.with_header_row": "Mit Kopfzeile",
  "editor.table.menu.add_column_before": "Spalte davor einfügen",
  "editor.table.menu.add_column_after": "Spalte danach einfügen",
  "editor.table.menu.delete_column": "Spalte löschen",
  "editor.table.menu.add_row_before": "Zeile davor einfügen",
  "editor.table.menu.add_row_after": "Zeile danach einfügen",
  "editor.table.menu.delete_row": "Zeile löschen",
  "editor.table.menu.merge_or_split_cells": "Zellen zusammenführen oder teilen",
  "editor.table.menu.delete_table": "Tabelle löschen",
  "editor.blockquote.tooltip": "Zitat",
  "editor.horizontalrule.tooltip": "Horizontale Linie",
  "editor.code.tooltip": "Code",
  "editor.codeblock.tooltip": "Codeblock",
  "editor.clear.tooltip": "Formatierung löschen",
  "editor.undo.tooltip": "Rückgängig",
  "editor.redo.tooltip": "Wiederholen",
  "editor.fullscreen.tooltip.fullscreen": "Vollbild",
  "editor.fullscreen.tooltip.exit": "Vollbild beenden"
}, Vc = {
  "editor.remove": "Remove",
  "editor.words": "WORDS",
  "editor.characters": "CHARACTERS",
  "editor.default": "default",
  "editor.size.small.tooltip": "Small",
  "editor.size.medium.tooltip": "Medium",
  "editor.size.large.tooltip": "Cover",
  "editor.bold.tooltip": "Bold",
  "editor.italic.tooltip": "Italic",
  "editor.underline.tooltip": "Underline",
  "editor.strike.tooltip": "Strike",
  "editor.color.tooltip": "Color",
  "editor.highlight.tooltip": "Highlight",
  "editor.heading.tooltip": "Headings",
  "editor.heading.h1.tooltip": "Heading 1",
  "editor.heading.h2.tooltip": "Heading 2",
  "editor.heading.h3.tooltip": "Heading 3",
  "editor.heading.h4.tooltip": "Heading 4",
  "editor.heading.h5.tooltip": "Heading 5",
  "editor.heading.h6.tooltip": "Heading 6",
  "editor.paragraph.tooltip": "Paragraph",
  "editor.textalign.tooltip": "Align",
  "editor.textalign.left.tooltip": "Left",
  "editor.textalign.center.tooltip": "Center",
  "editor.textalign.right.tooltip": "Right",
  "editor.textalign.justify.tooltip": "Justify",
  "editor.fontFamily.tooltip": "Font family",
  "editor.fontSize.tooltip": "Font size",
  "editor.superscript.tooltip": "Superscript",
  "editor.subscript.tooltip": "Subscript",
  "editor.bulletlist.tooltip": "Bullet List",
  "editor.orderedlist.tooltip": "Ordered List",
  "editor.tasklist.tooltip": "Task List",
  "editor.indent.tooltip": "Indent",
  "editor.outdent.tooltip": "Outdent",
  "editor.link.tooltip": "Link",
  "editor.link.unlink.tooltip": "Unlink",
  "editor.link.open": "Open link",
  "editor.link.dialog.title": "Insert link",
  "editor.link.dialog.link": "link",
  "editor.link.dialog.openInNewTab": "Open in new tab",
  "editor.link.dialog.button.apply": "apply",
  "editor.markdownTheme.tooltip": "Theme",
  "editor.image.tooltip": "Image",
  "editor.image.float.left.tooltip": "Float left",
  "editor.image.float.none.tooltip": "Float none",
  "editor.image.float.right.tooltip": "Float right",
  "editor.image.dialog.title": "Insert image",
  "editor.image.dialog.tab.url": "url",
  "editor.image.dialog.tab.upload": "upload",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Lock original aspect ratio",
  "editor.image.dialog.form.file": "File",
  "editor.image.dialog.form.caption": "Label",
  "editor.image.dialog.form.captionDisabled": "Label disabled",
  "editor.image.dialog.button.apply": "apply",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Insert video",
  "editor.video.dialog.link": "link",
  "editor.video.dialog.button.apply": "apply",
  "editor.table.tooltip": "Table",
  "editor.table.menu.insert_table": "Insert Table",
  "editor.table.menu.insert_table.with_header_row": "With header row",
  "editor.table.menu.add_column_before": "Add Column Before",
  "editor.table.menu.add_column_after": "Add Column After",
  "editor.table.menu.delete_column": "Delete Column",
  "editor.table.menu.add_row_before": "Add Row Before",
  "editor.table.menu.add_row_after": "Add Row After",
  "editor.table.menu.delete_row": "Delete Row",
  "editor.table.menu.merge_or_split_cells": "Merge Or Split Cells",
  "editor.table.menu.delete_table": "Delete Table",
  "editor.blockquote.tooltip": "Blockquote",
  "editor.horizontalrule.tooltip": "Horizontal Rule",
  "editor.code.tooltip": "Code",
  "editor.codeblock.tooltip": "Code Block",
  "editor.clear.tooltip": "Clear Format",
  "editor.undo.tooltip": "Undo",
  "editor.redo.tooltip": "Redo",
  "editor.fullscreen.tooltip.fullscreen": "Fullscreen",
  "editor.fullscreen.tooltip.exit": "Fullscreen Exit"
}, yc = {
  "editor.remove": "Supprimer",
  "editor.words": "MOTS",
  "editor.characters": "CARACTÈRES",
  "editor.default": "par défaut",
  "editor.size.small.tooltip": "Petit",
  "editor.size.medium.tooltip": "Moyen",
  "editor.size.large.tooltip": "Couverture",
  "editor.bold.tooltip": "Gras",
  "editor.italic.tooltip": "Italique",
  "editor.underline.tooltip": "Souligné",
  "editor.strike.tooltip": "Barré",
  "editor.color.tooltip": "Couleur",
  "editor.highlight.tooltip": "Surligner",
  "editor.heading.tooltip": "Titres",
  "editor.heading.h1.tooltip": "Titre 1",
  "editor.heading.h2.tooltip": "Titre 2",
  "editor.heading.h3.tooltip": "Titre 3",
  "editor.heading.h4.tooltip": "Titre 4",
  "editor.heading.h5.tooltip": "Titre 5",
  "editor.heading.h6.tooltip": "Titre 6",
  "editor.paragraph.tooltip": "Paragraphe",
  "editor.textalign.tooltip": "Aligner",
  "editor.textalign.left.tooltip": "Gauche",
  "editor.textalign.center.tooltip": "Centre",
  "editor.textalign.right.tooltip": "Droite",
  "editor.textalign.justify.tooltip": "Justifier",
  "editor.fontFamily.tooltip": "Police",
  "editor.fontSize.tooltip": "Taille de police",
  "editor.superscript.tooltip": "Exposant",
  "editor.subscript.tooltip": "Indice",
  "editor.bulletlist.tooltip": "Liste à puces",
  "editor.orderedlist.tooltip": "Liste numérotée",
  "editor.tasklist.tooltip": "Liste de tâches",
  "editor.indent.tooltip": "Indenter",
  "editor.outdent.tooltip": "Désindenter",
  "editor.link.tooltip": "Lien",
  "editor.link.unlink.tooltip": "Supprimer le lien",
  "editor.link.open": "Ouvrir le lien",
  "editor.link.dialog.title": "Insérer un lien",
  "editor.link.dialog.link": "lien",
  "editor.link.dialog.openInNewTab": "Ouvrir dans un nouvel onglet",
  "editor.link.dialog.button.apply": "appliquer",
  "editor.markdownTheme.tooltip": "Thème",
  "editor.image.tooltip": "Image",
  "editor.image.float.left.tooltip": "Aligner à gauche",
  "editor.image.float.none.tooltip": "Sans alignement",
  "editor.image.float.right.tooltip": "Aligner à droite",
  "editor.image.dialog.title": "Insérer une image",
  "editor.image.dialog.tab.url": "url",
  "editor.image.dialog.tab.upload": "téléverser",
  "editor.image.dialog.form.link": "Lien",
  "editor.image.dialog.form.alt": "Texte alternatif",
  "editor.image.dialog.form.aspectRatio": "Conserver les proportions",
  "editor.image.dialog.form.file": "Fichier",
  "editor.image.dialog.form.caption": "Étiquette",
  "editor.image.dialog.form.captionDisabled": "Libellé désactivé",
  "editor.image.dialog.button.apply": "appliquer",
  "editor.video.tooltip": "Vidéo",
  "editor.video.dialog.title": "Insérer une vidéo",
  "editor.video.dialog.link": "lien",
  "editor.video.dialog.button.apply": "appliquer",
  "editor.table.tooltip": "Tableau",
  "editor.table.menu.insert_table": "Insérer un tableau",
  "editor.table.menu.insert_table.with_header_row": "Avec ligne d’en-tête",
  "editor.table.menu.add_column_before": "Ajouter une colonne avant",
  "editor.table.menu.add_column_after": "Ajouter une colonne après",
  "editor.table.menu.delete_column": "Supprimer la colonne",
  "editor.table.menu.add_row_before": "Ajouter une ligne avant",
  "editor.table.menu.add_row_after": "Ajouter une ligne après",
  "editor.table.menu.delete_row": "Supprimer la ligne",
  "editor.table.menu.merge_or_split_cells": "Fusionner ou diviser les cellules",
  "editor.table.menu.delete_table": "Supprimer le tableau",
  "editor.blockquote.tooltip": "Citation",
  "editor.horizontalrule.tooltip": "Ligne horizontale",
  "editor.code.tooltip": "Code",
  "editor.codeblock.tooltip": "Bloc de code",
  "editor.clear.tooltip": "Effacer le formatage",
  "editor.undo.tooltip": "Annuler",
  "editor.redo.tooltip": "Rétablir",
  "editor.fullscreen.tooltip.fullscreen": "Plein écran",
  "editor.fullscreen.tooltip.exit": "Quitter le plein écran"
}, Ac = {
  "editor.remove": "Rimuovi",
  "editor.words": "Parole",
  "editor.characters": "Caratteri",
  "editor.default": "Predefinito",
  "editor.size.small.tooltip": "Piccolo",
  "editor.size.medium.tooltip": "Medio",
  "editor.size.large.tooltip": "Grande",
  "editor.bold.tooltip": "Grassetto",
  "editor.italic.tooltip": "Corsivo",
  "editor.underline.tooltip": "Sottolineato",
  "editor.strike.tooltip": "Barrato",
  "editor.color.tooltip": "Colore",
  "editor.highlight.tooltip": "Evidenzia",
  "editor.heading.tooltip": "Intestazioni",
  "editor.heading.h1.tooltip": "Intestzione 1",
  "editor.heading.h2.tooltip": "Intestzione 2",
  "editor.heading.h3.tooltip": "Intestzione 3",
  "editor.heading.h4.tooltip": "Intestazione 4",
  "editor.heading.h5.tooltip": "Intestazione 5",
  "editor.heading.h6.tooltip": "Intestazione 6",
  "editor.paragraph.tooltip": "Paragrafo",
  "editor.textalign.tooltip": "Allineamento",
  "editor.textalign.left.tooltip": "Sinistra",
  "editor.textalign.center.tooltip": "Centro",
  "editor.textalign.right.tooltip": "Destra",
  "editor.textalign.justify.tooltip": "Giustificato",
  "editor.fontFamily.tooltip": "Tipo carattere",
  "editor.fontSize.tooltip": "Dimensione carattere",
  "editor.superscript.tooltip": "Apice",
  "editor.subscript.tooltip": "Pedice",
  "editor.bulletlist.tooltip": "Elenco puntato",
  "editor.orderedlist.tooltip": "Elenco numerato",
  "editor.tasklist.tooltip": "Elenco attività",
  "editor.indent.tooltip": "Aumenta rientro",
  "editor.outdent.tooltip": "Riduci rientro",
  "editor.link.tooltip": "Aggiungi collegamento",
  "editor.link.unlink.tooltip": "Rimuovi collegamento",
  "editor.link.open": "Apri collegamento",
  "editor.link.dialog.title": "Inserisci collegamento",
  "editor.link.dialog.link": "Collegamento",
  "editor.link.dialog.openInNewTab": "Apri in una nuova finestra",
  "editor.link.dialog.button.apply": "Applica",
  "editor.markdownTheme.tooltip": "Tema",
  "editor.image.tooltip": "Immagine",
  "editor.image.float.left.tooltip": "Allinea a sinistra",
  "editor.image.float.none.tooltip": "Nessun allineamento",
  "editor.image.float.right.tooltip": "Allinea a destra",
  "editor.image.dialog.title": "Inserisci immagine",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Carica",
  "editor.image.dialog.form.link": "Collegamento",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Blocca le proporzioni originali",
  "editor.image.dialog.form.file": "File",
  "editor.image.dialog.form.caption": "Etichetta",
  "editor.image.dialog.form.captionDisabled": "Etichetta disabilitata",
  "editor.image.dialog.button.apply": "Applica",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Inserisci video",
  "editor.video.dialog.link": "Collegamento",
  "editor.video.dialog.button.apply": "Applica",
  "editor.table.tooltip": "Tabella",
  "editor.table.menu.insert_table": "Inserisci tabella",
  "editor.table.menu.insert_table.with_header_row": "Con riga intestazione",
  "editor.table.menu.add_column_before": "Aggiungi colonna prima",
  "editor.table.menu.add_column_after": "Aggiungi colonna dopo",
  "editor.table.menu.delete_column": "Elimina colonna",
  "editor.table.menu.add_row_before": "Aggiungi riga prima",
  "editor.table.menu.add_row_after": "Aggiungi riga dopo",
  "editor.table.menu.delete_row": "Elimina riga",
  "editor.table.menu.merge_or_split_cells": "Unisci o dividi celle",
  "editor.table.menu.delete_table": "Elimina tabella",
  "editor.blockquote.tooltip": "Citazione",
  "editor.horizontalrule.tooltip": "Linea orizzontale",
  "editor.code.tooltip": "Codice",
  "editor.codeblock.tooltip": "Blocco di codice",
  "editor.clear.tooltip": "Rimuovi formattazione",
  "editor.undo.tooltip": "Annulla",
  "editor.redo.tooltip": "Ripristina",
  "editor.fullscreen.tooltip.fullscreen": "Schermo intero",
  "editor.fullscreen.tooltip.exit": "Esci da schermo intero"
}, Hc = {
  "editor.remove": "Verwijderen",
  "editor.words": "WOORDEN",
  "editor.characters": "KARAKTERS",
  "editor.default": "standaard",
  "editor.size.small.tooltip": "Klein",
  "editor.size.medium.tooltip": "Middelmatig",
  "editor.size.large.tooltip": "Cover",
  "editor.bold.tooltip": "Dikgedrukt",
  "editor.italic.tooltip": "Cursief",
  "editor.underline.tooltip": "Onderstreept",
  "editor.strike.tooltip": "Doorgetrokken",
  "editor.color.tooltip": "Kleur",
  "editor.highlight.tooltip": "Markeren",
  "editor.heading.tooltip": "Koppen",
  "editor.heading.h1.tooltip": "Kop 1",
  "editor.heading.h2.tooltip": "Kop 2",
  "editor.heading.h3.tooltip": "Kop 3",
  "editor.heading.h4.tooltip": "Kop 4",
  "editor.heading.h5.tooltip": "Kop 5",
  "editor.heading.h6.tooltip": "Kop 6",
  "editor.paragraph.tooltip": "Paragraaf",
  "editor.textalign.tooltip": "Uitlijnen",
  "editor.textalign.left.tooltip": "Links",
  "editor.textalign.center.tooltip": "Midden",
  "editor.textalign.right.tooltip": "Rechts",
  "editor.textalign.justify.tooltip": "Justify",
  "editor.fontFamily.tooltip": "Font familie",
  "editor.fontSize.tooltip": "Font grootte",
  "editor.superscript.tooltip": "Superscript",
  "editor.subscript.tooltip": "Subscript",
  "editor.bulletlist.tooltip": "Ongenummerde lijst",
  "editor.orderedlist.tooltip": "Genummerde lijst",
  "editor.tasklist.tooltip": "Takenlijst",
  "editor.indent.tooltip": "Inspringing vergroten",
  "editor.outdent.tooltip": "Inspringing verkleinen",
  "editor.link.tooltip": "Link",
  "editor.link.unlink.tooltip": "Link verwijderen",
  "editor.link.open": "Link openen",
  "editor.link.dialog.title": "Link invoegen",
  "editor.link.dialog.link": "link",
  "editor.link.dialog.openInNewTab": "Openen in nieuw tabblad",
  "editor.link.dialog.button.apply": "Toepassen",
  "editor.markdownTheme.tooltip": "Thema",
  "editor.image.tooltip": "Afbeelding",
  "editor.image.float.left.tooltip": "Zweef links",
  "editor.image.float.none.tooltip": "Niet zweven",
  "editor.image.float.right.tooltip": "Zweef rechts",
  "editor.image.dialog.title": "Afbeelding invoegen",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Upload",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Originele aspect ratio vastzetten",
  "editor.image.dialog.form.file": "Bestand",
  "editor.image.dialog.form.caption": "Label",
  "editor.image.dialog.form.captionDisabled": "Label uitgeschakeld",
  "editor.image.dialog.button.apply": "Toepassen",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Video invoegen",
  "editor.video.dialog.link": "link",
  "editor.video.dialog.button.apply": "Toepassen",
  "editor.table.tooltip": "Tabel",
  "editor.table.menu.insert_table": "Tabel invoegen",
  "editor.table.menu.insert_table.with_header_row": "Met kop rij",
  "editor.table.menu.add_column_before": "Kolom ervoor invoegen",
  "editor.table.menu.add_column_after": "Kolom erna invoegen",
  "editor.table.menu.delete_column": "Kolom verwijderen",
  "editor.table.menu.add_row_before": "Rij ervoor invoegen",
  "editor.table.menu.add_row_after": "Rij erna invoegen",
  "editor.table.menu.delete_row": "Rij verwijderen",
  "editor.table.menu.merge_or_split_cells": "Cellen samenvoegen/splitsen",
  "editor.table.menu.delete_table": "Tabel verwijderen",
  "editor.blockquote.tooltip": "Citaatblok",
  "editor.horizontalrule.tooltip": "Horizontale lijn",
  "editor.code.tooltip": "Code",
  "editor.codeblock.tooltip": "Code blok",
  "editor.clear.tooltip": "Formattering verwijderen",
  "editor.undo.tooltip": "Stap terug",
  "editor.redo.tooltip": "Stap verder",
  "editor.fullscreen.tooltip.fullscreen": "Volledig scherm",
  "editor.fullscreen.tooltip.exit": "Volledig scherm verlaten"
}, wc = {
  "editor.remove": "Remover",
  "editor.words": "Palavras",
  "editor.characters": "Caracteres",
  "editor.default": "Padrão",
  "editor.size.small.tooltip": "Pequeno",
  "editor.size.medium.tooltip": "Médio",
  "editor.size.large.tooltip": "Grande",
  "editor.bold.tooltip": "Negrito",
  "editor.italic.tooltip": "Itálico",
  "editor.underline.tooltip": "Sublinhado",
  "editor.strike.tooltip": "Tachado",
  "editor.color.tooltip": "Cor",
  "editor.highlight.tooltip": "Destacar",
  "editor.heading.tooltip": "Cabeçalhos",
  "editor.heading.h1.tooltip": "Cabeçalho 1",
  "editor.heading.h2.tooltip": "Cabeçalho 2",
  "editor.heading.h3.tooltip": "Cabeçalho 3",
  "editor.heading.h4.tooltip": "Cabeçalho 4",
  "editor.heading.h5.tooltip": "Cabeçalho 5",
  "editor.heading.h6.tooltip": "Cabeçalho 6",
  "editor.paragraph.tooltip": "Parágrafo",
  "editor.textalign.tooltip": "Alinhamento",
  "editor.textalign.left.tooltip": "Esquerda",
  "editor.textalign.center.tooltip": "Centro",
  "editor.textalign.right.tooltip": "Direita",
  "editor.textalign.justify.tooltip": "Justificado",
  "editor.fontFamily.tooltip": "Fonte",
  "editor.fontSize.tooltip": "Tamanho da fonte",
  "editor.superscript.tooltip": "Sobrescrito",
  "editor.subscript.tooltip": "Subscrito",
  "editor.bulletlist.tooltip": "Lista com marcadores",
  "editor.orderedlist.tooltip": "Lista numerada",
  "editor.tasklist.tooltip": "Lista de tarefas",
  "editor.indent.tooltip": "Aumentar recuo",
  "editor.outdent.tooltip": "Diminuir recuo",
  "editor.link.tooltip": "Adicionar link",
  "editor.link.unlink.tooltip": "Remover link",
  "editor.link.open": "Abrir link",
  "editor.link.dialog.title": "Inserir link",
  "editor.link.dialog.link": "Link",
  "editor.link.dialog.openInNewTab": "Abrir em nova aba",
  "editor.link.dialog.button.apply": "Aplicar",
  "editor.markdownTheme.tooltip": "Tema",
  "editor.image.tooltip": "Imagem",
  "editor.image.float.left.tooltip": "Alinhar à esquerda",
  "editor.image.float.none.tooltip": "Sem alinhamento",
  "editor.image.float.right.tooltip": "Alinhar à direita",
  "editor.image.dialog.title": "Inserir imagem",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Carregar",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Texto alternativo",
  "editor.image.dialog.form.aspectRatio": "Bloquear proporção original",
  "editor.image.dialog.form.file": "Arquivo",
  "editor.image.dialog.form.caption": "Legenda",
  "editor.image.dialog.form.captionDisabled": "Sem legenda",
  "editor.image.dialog.button.apply": "Aplicar",
  "editor.video.tooltip": "Vídeo",
  "editor.video.dialog.title": "Inserir vídeo",
  "editor.video.dialog.link": "Link",
  "editor.video.dialog.button.apply": "Aplicar",
  "editor.table.tooltip": "Tabela",
  "editor.table.menu.insert_table": "Inserir tabela",
  "editor.table.menu.insert_table.with_header_row": "Com linha de cabeçalho",
  "editor.table.menu.add_column_before": "Adicionar coluna antes",
  "editor.table.menu.add_column_after": "Adicionar coluna depois",
  "editor.table.menu.delete_column": "Excluir coluna",
  "editor.table.menu.add_row_before": "Adicionar linha antes",
  "editor.table.menu.add_row_after": "Adicionar linha depois",
  "editor.table.menu.delete_row": "Excluir linha",
  "editor.table.menu.merge_or_split_cells": "Mesclar ou dividir células",
  "editor.table.menu.delete_table": "Excluir tabela",
  "editor.blockquote.tooltip": "Citação",
  "editor.horizontalrule.tooltip": "Linha horizontal",
  "editor.code.tooltip": "Código",
  "editor.codeblock.tooltip": "Bloco de código",
  "editor.clear.tooltip": "Remover formatação",
  "editor.undo.tooltip": "Desfazer",
  "editor.redo.tooltip": "Refazer",
  "editor.fullscreen.tooltip.fullscreen": "Tela cheia",
  "editor.fullscreen.tooltip.exit": "Sair da tela cheia"
}, Tc = {
  "editor.remove": "Kaldır",
  "editor.words": "Kelime",
  "editor.characters": "Karakter",
  "editor.default": "varsayılan",
  "editor.size.small.tooltip": "Küçük",
  "editor.size.medium.tooltip": "Orta",
  "editor.size.large.tooltip": "Kapak",
  "editor.bold.tooltip": "Kalın",
  "editor.italic.tooltip": "İtalik",
  "editor.underline.tooltip": "Altı Çizili",
  "editor.strike.tooltip": "Üstü Çizili",
  "editor.color.tooltip": "Renk",
  "editor.highlight.tooltip": "Vurgula",
  "editor.heading.tooltip": "Başlıklar",
  "editor.heading.h1.tooltip": "Başlık 1",
  "editor.heading.h2.tooltip": "Başlık 2",
  "editor.heading.h3.tooltip": "Başlık 3",
  "editor.heading.h4.tooltip": "Başlık 4",
  "editor.heading.h5.tooltip": "Başlık 5",
  "editor.heading.h6.tooltip": "Başlık 6",
  "editor.paragraph.tooltip": "Paragraf",
  "editor.textalign.tooltip": "Hizala",
  "editor.textalign.left.tooltip": "Sola",
  "editor.textalign.center.tooltip": "Ortala",
  "editor.textalign.right.tooltip": "Sağa",
  "editor.textalign.justify.tooltip": "İki Yana Yasla",
  "editor.fontFamily.tooltip": "Yazı Tipi",
  "editor.fontSize.tooltip": "Yazı Boyutu",
  "editor.superscript.tooltip": "Üst Simge",
  "editor.subscript.tooltip": "Alt Simge",
  "editor.bulletlist.tooltip": "Noktalı Liste",
  "editor.orderedlist.tooltip": "Numaralı Liste",
  "editor.tasklist.tooltip": "Görev Listesi",
  "editor.indent.tooltip": "Girinti",
  "editor.outdent.tooltip": "Çıkıntı",
  "editor.link.tooltip": "Bağlantı",
  "editor.link.unlink.tooltip": "Bağlantıyı Kaldır",
  "editor.link.open": "Bağlantıyı Aç",
  "editor.link.dialog.title": "Bağlantı Ekle",
  "editor.link.dialog.link": "bağlantı",
  "editor.link.dialog.openInNewTab": "Yeni sekmede aç",
  "editor.link.dialog.button.apply": "Uygula",
  "editor.markdownTheme.tooltip": "Tema",
  "editor.image.tooltip": "Resim",
  "editor.image.float.left.tooltip": "Sola Yasla",
  "editor.image.float.none.tooltip": "Hizalamayı Kaldır",
  "editor.image.float.right.tooltip": "Sağa Yasla",
  "editor.image.dialog.title": "Resim Ekle",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Yükle",
  "editor.image.dialog.form.link": "Bağlantı",
  "editor.image.dialog.form.alt": "Alternatif Metin",
  "editor.image.dialog.form.aspectRatio": "Orijinal En/Boy Oranını Koru",
  "editor.image.dialog.form.file": "Dosya",
  "editor.image.dialog.form.caption": "Label",
  "editor.image.dialog.form.captionDisabled": "",
  "editor.image.dialog.button.apply": "Uygula",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Video Ekle",
  "editor.video.dialog.link": "bağlantı",
  "editor.video.dialog.button.apply": "Uygula",
  "editor.table.tooltip": "Tablo",
  "editor.table.menu.insert_table": "Tablo Ekle",
  "editor.table.menu.insert_table.with_header_row": "Başlık Satırıyla",
  "editor.table.menu.add_column_before": "Önce Sütun Ekle",
  "editor.table.menu.add_column_after": "Sonra Sütun Ekle",
  "editor.table.menu.delete_column": "Sütunu Sil",
  "editor.table.menu.add_row_before": "Önce Satır Ekle",
  "editor.table.menu.add_row_after": "Sonra Satır Ekle",
  "editor.table.menu.delete_row": "Satırı Sil",
  "editor.table.menu.merge_or_split_cells": "Hücreleri Birleştir veya Ayır",
  "editor.table.menu.delete_table": "Tabloyu Sil",
  "editor.blockquote.tooltip": "Alıntı",
  "editor.horizontalrule.tooltip": "Yatay Çizgi",
  "editor.code.tooltip": "Kod",
  "editor.codeblock.tooltip": "Kod Bloğu",
  "editor.clear.tooltip": "Biçimlendirmeyi Temizle",
  "editor.undo.tooltip": "Geri Al",
  "editor.redo.tooltip": "İleri Al",
  "editor.fullscreen.tooltip.fullscreen": "Tam Ekran",
  "editor.fullscreen.tooltip.exit": "Tam Ekrandan Çık"
}, Lc = {
  "editor.remove": "删除",
  "editor.words": "单词",
  "editor.characters": "字符",
  "editor.default": "默认",
  "editor.size.small.tooltip": "小尺寸",
  "editor.size.medium.tooltip": "中等尺寸",
  "editor.size.large.tooltip": "铺满",
  "editor.bold.tooltip": "粗体",
  "editor.italic.tooltip": "斜体",
  "editor.underline.tooltip": "下划线",
  "editor.strike.tooltip": "中划线",
  "editor.color.tooltip": "文本颜色",
  "editor.highlight.tooltip": "文本高亮",
  "editor.heading.tooltip": "标题",
  "editor.heading.h1.tooltip": "标题 1",
  "editor.heading.h2.tooltip": "标题 2",
  "editor.heading.h3.tooltip": "标题 3",
  "editor.heading.h4.tooltip": "标题 4",
  "editor.heading.h5.tooltip": "标题 5",
  "editor.heading.h6.tooltip": "标题 6",
  "editor.paragraph.tooltip": "正文",
  "editor.textalign.tooltip": "对齐方式",
  "editor.textalign.left.tooltip": "左对齐",
  "editor.textalign.center.tooltip": "居中对齐",
  "editor.textalign.right.tooltip": "右对齐",
  "editor.textalign.justify.tooltip": "两端对齐",
  "editor.fontFamily.tooltip": "字体",
  "editor.fontSize.tooltip": "字体大小",
  "editor.superscript.tooltip": "上标",
  "editor.subscript.tooltip": "下标",
  "editor.bulletlist.tooltip": "无序列表",
  "editor.orderedlist.tooltip": "有序列表",
  "editor.tasklist.tooltip": "任务列表",
  "editor.indent.tooltip": "增加缩进",
  "editor.outdent.tooltip": "减少缩进",
  "editor.link.tooltip": "网络链接",
  "editor.link.unlink.tooltip": "取消链接",
  "editor.link.open": "打开链接",
  "editor.link.dialog.title": "插入链接",
  "editor.link.dialog.link": "链接",
  "editor.link.dialog.openInNewTab": "在新标签页中打开",
  "editor.link.dialog.button.apply": "应用",
  "editor.markdownTheme.tooltip": "主题",
  "editor.image.tooltip": "图片",
  "editor.image.float.left.tooltip": "左浮动",
  "editor.image.float.none.tooltip": "无浮动",
  "editor.image.float.right.tooltip": "右浮动",
  "editor.image.dialog.title": "插入图片",
  "editor.image.dialog.tab.url": "网络图片",
  "editor.image.dialog.tab.upload": "本地图片",
  "editor.image.dialog.form.link": "链接",
  "editor.image.dialog.form.alt": "说明",
  "editor.image.dialog.form.aspectRatio": "锁定原有长宽比",
  "editor.image.dialog.form.file": "文件",
  "editor.image.dialog.form.caption": "标签",
  "editor.image.dialog.form.captionDisabled": "标签已禁用",
  "editor.image.dialog.button.apply": "应用",
  "editor.video.tooltip": "视频",
  "editor.video.dialog.title": "插入视频",
  "editor.video.dialog.link": "网络链接",
  "editor.video.dialog.button.apply": "应用",
  "editor.table.tooltip": "表格",
  "editor.table.menu.insert_table": "插入表格",
  "editor.table.menu.insert_table.with_header_row": "带标题行",
  "editor.table.menu.add_column_before": "向左插入一列",
  "editor.table.menu.add_column_after": "向右插入一列",
  "editor.table.menu.delete_column": "删除列",
  "editor.table.menu.add_row_before": "向上插入一行",
  "editor.table.menu.add_row_after": "向下插入一行",
  "editor.table.menu.delete_row": "删除行",
  "editor.table.menu.merge_or_split_cells": "合并或拆分单元格",
  "editor.table.menu.delete_table": "删除表格",
  "editor.blockquote.tooltip": "引用",
  "editor.horizontalrule.tooltip": "分隔线",
  "editor.code.tooltip": "代码",
  "editor.codeblock.tooltip": "代码块",
  "editor.clear.tooltip": "清除格式",
  "editor.undo.tooltip": "撤销",
  "editor.redo.tooltip": "重做",
  "editor.fullscreen.tooltip.fullscreen": "全屏",
  "editor.fullscreen.tooltip.exit": "退出全屏"
}, kc = {
  nl: Hc,
  tr: Tc,
  zhHans: Lc,
  en: Vc,
  de: _c,
  fr: yc,
  it: Ac,
  pt: wc
}, Mc = {
  lang: Rt,
  fallbackLang: Rt,
  message: kc
};
class Cc {
  constructor() {
    /**
     * Mitt event emitter for handling language change events.
     */
    xt(this, "emitter", vc());
    /**
     * Private property to store the current locale settings.
     */
    xt(this, "_locale", Mc);
  }
  /**
   * Get the current language code.
   * @returns The current language code.
   */
  get lang() {
    return this._locale.lang;
  }
  /**
   * Set the current language code.
   * If the provided language is not supported, it sets the language to the fallback language.
   * @param lang - The new language code to set.
   */
  set lang(t) {
    this.isLangSupported(t) ? this._locale.lang = t : (qt.warn(`Can't find the current language "${t}", Using fallback language "${this._locale.fallbackLang}" instead.`), this._locale.lang = this._locale.fallbackLang), this.emitter.emit("lang", this._locale.lang);
  }
  /**
   * Get the fallback language code.
   * @returns The fallback language code.
   */
  get fallbackLang() {
    return this._locale.fallbackLang;
  }
  /**
   * Set the fallback language code.
   * If the provided language is not supported, it logs a warning and keeps the current fallback language.
   * @param lang - The new fallback language code to set.
   */
  set fallbackLang(t) {
    if (!this.isLangSupported(t)) {
      qt.warn(`Can't find the fallback language "${t}", Using language "${this._locale.fallbackLang}" by default`);
      return;
    }
    this._locale.fallbackLang = t;
  }
  /**
   * Get the language message records.
   * @returns The language message records.
   */
  get message() {
    return this._locale.message;
  }
  /**
   * Set the language message records.
   * @param message - The new language message records to set.
   */
  set message(t) {
    this._locale.message = t;
  }
  /**
   * Load the message records for a specific language.
   * @param lang - The language code to load messages for.
   * @returns The message records for the specified language.
   */
  loadLangMessage(t) {
    return this.message[t] || {};
  }
  /**
   * Check if a given language is supported.
   * @param lang - The language code to check.
   * @returns True if the language is supported, false otherwise.
   */
  isLangSupported(t) {
    return Object.keys(this.message).includes(t);
  }
  /**
   * Public method to set the current language.
   * @param lang - The new language code to set.
   */
  setLang(t) {
    this.lang = t;
  }
  /**
   * Public method to set the fallback language.
   * @param lang - The new fallback language code to set.
   */
  setFallbackLang(t) {
    this.fallbackLang = t;
  }
  /**
   * Public method to register a callback for language change events.
   * @param hook - The callback function to be called when the language changes.
   * @returns An object with an unsubscribe method to stop listening to the event.
   */
  registerWatchLang(t) {
    return this.emitter.on("lang", t), {
      unsubscribe: () => this.emitter.off("lang", t)
    };
  }
  /**
   * Public method to set the message records for a specific language.
   * @param lang - The language code to set messages for.
   * @param message - The message records to set for the specified language.
   */
  setMessage(t, o) {
    this.message[t] = o;
  }
  /**
   * Build an internationalization handler function.
   * @param lang - Optional language code. If not provided, the current language will be used.
   * @returns A function that takes a message path and returns the translated message.
   */
  buildI18nHandler(t) {
    const o = t || this.lang, i = this.loadLangMessage(o), r = this.loadLangMessage(this.fallbackLang);
    return (n) => i[n] || r[n] || n;
  }
}
const Ge = new Cc(), ge = () => {
  const e = O(Ge.lang), t = w(() => Ge.buildI18nHandler(m(e)));
  return Ae((o) => {
    const i = Ge.registerWatchLang((r) => {
      e.value = r;
    });
    o(() => i.unsubscribe());
  }), {
    lang: e,
    t
  };
}, Sc = /* @__PURE__ */ L({
  __name: "BubbleMenu",
  props: {
    editor: {},
    shouldShow: {}
  },
  setup(e) {
    const t = e, { t: o } = ge(), i = w(() => {
      var c, p;
      const n = t.editor.state.selection;
      if (n.to === n.from || n.empty) return;
      const s = Xo(t.editor, "link"), a = Xo(t.editor, "table"), l = ((c = n.node) == null ? void 0 : c.type.name) === "image", d = ((p = n.node) == null ? void 0 : p.type.name) === "video", u = n instanceof bi;
      if (a) return "table";
      if (s) return "link";
      if (l) return "image";
      if (d) return "video";
      if (u) return "text";
    });
    function r(n) {
      var u, c;
      if (!n)
        return [];
      const { extensions: s = [] } = t.editor.extensionManager, a = s.find((p) => p.name === "base-kit");
      if (!a)
        return [];
      const { button: l } = ((u = a.options) == null ? void 0 : u.bubble) ?? {};
      if (!l)
        return [];
      const d = l({
        editor: t.editor,
        extension: a,
        t: m(o)
      });
      return n ? ((c = m(d)) == null ? void 0 : c[n]) ?? [] : [];
    }
    return (n, s) => {
      const a = Je, l = Pe, d = Qe, u = Ie;
      return h(), H(m(Qn), {
        editor: e.editor,
        "should-show": t.shouldShow
      }, {
        default: v(() => [
          b(u, { class: "vuetify-pro-tiptap-editor__menu-bubble" }, {
            default: v(() => [
              b(d, { class: "d-flex pa-0" }, {
                default: v(() => [
                  b(l, {
                    density: "compact",
                    flat: "",
                    height: "auto",
                    class: "py-1 ps-1"
                  }, {
                    default: v(() => [
                      (h(!0), $(U, null, G(r(i.value), (c, p) => (h(), $(U, { key: p }, [
                        c.type === "divider" ? (h(), H(a, {
                          key: 0,
                          vertical: "",
                          class: "mx-1 me-2"
                        })) : (h(), H(We(c.component), ve({
                          key: 1,
                          ref_for: !0
                        }, c.componentProps, { editor: e.editor }), eo({ _: 2 }, [
                          G(c.componentSlots, (f, g, _) => ({
                            name: `${g}`,
                            fn: v((y) => [
                              (h(), H(We(f), ve({ ref_for: !0 }, y == null ? void 0 : y.props), null, 16))
                            ])
                          }))
                        ]), 1040, ["editor"]))
                      ], 64))), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["editor", "should-show"]);
    };
  }
}), xc = /* @__PURE__ */ L({
  __name: "TiptapToolbar",
  props: {
    editor: {}
  },
  setup(e) {
    const t = e, { t: o } = ge();
    function i() {
      return [...t.editor.extensionManager.extensions].sort((s, a) => {
        const l = s.options.sort ?? -1, d = a.options.sort ?? -1;
        return l - d;
      }).reduce((s, a) => {
        const { button: l, divider: d = !1, spacer: u = !1 } = a.options;
        if (!l || !oc(l)) return s;
        const c = l({
          editor: t.editor,
          extension: a,
          t: m(o)
        });
        if (Array.isArray(c)) {
          const p = c.map((f, g) => ({
            button: f,
            divider: g === c.length - 1 ? d : !1,
            spacer: g === 0 ? u : !1
          }));
          return [...s, ...p];
        }
        return [...s, { button: c, divider: d, spacer: u }];
      }, []);
    }
    return (r, n) => {
      const s = et, a = Je, l = Pe;
      return h(), H(l, ve(r.$attrs, {
        density: "compact",
        flat: "",
        height: "auto",
        class: "py-1 ps-1"
      }), {
        default: v(() => [
          (h(!0), $(U, null, G(i(), (d, u) => (h(), $(U, { key: u }, [
            d.spacer ? (h(), H(s, { key: 0 })) : q("", !0),
            (h(), H(We(d.button.component), ve({ ref_for: !0 }, d.button.componentProps, { editor: e.editor }), eo({ _: 2 }, [
              G(d.button.componentSlots, (c, p, f) => ({
                name: `${p}`,
                fn: v((g) => [
                  (h(), H(We(c), ve({ ref_for: !0 }, g == null ? void 0 : g.props), null, 16))
                ])
              }))
            ]), 1040, ["editor"])),
            d.divider ? (h(), H(a, {
              key: 1,
              vertical: "",
              class: "mx-1 me-2"
            })) : q("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 16);
    };
  }
}), Ec = { class: "text-overline me-4" }, $c = { class: "text-overline" }, km = /* @__PURE__ */ L({
  __name: "VuetifyTiptap",
  props: {
    modelValue: { default: "" },
    markdownTheme: { type: [String, Boolean], default: void 0 },
    output: { default: "html" },
    dark: { type: Boolean, default: void 0 },
    dense: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !0 },
    flat: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    label: { default: void 0 },
    hideToolbar: { type: Boolean, default: !1 },
    disableToolbar: { type: Boolean, default: !1 },
    hideBubble: { type: Boolean, default: !1 },
    bubbleShouldShow: {},
    removeDefaultWrapper: { type: Boolean, default: !1 },
    maxWidth: { default: void 0 },
    minHeight: { default: void 0 },
    maxHeight: { default: void 0 },
    extensions: { default: () => [] },
    editorClass: { default: void 0 },
    errorMessages: { default: () => [] }
  },
  emits: ["enter", "change", "update:modelValue", "update:markdownTheme"],
  setup(e, { expose: t, emit: o }) {
    const i = e, r = o, n = Bn(), s = to(), { state: a, isFullscreen: l } = bc(), { markdownThemeStyle: d } = Ji(
      w(() => i.markdownTheme),
      (A) => {
        r("update:markdownTheme", A);
      }
    ), u = w(() => {
      const A = Nu(i.extensions, a.extensions, "name");
      return [...a.extensions.map((C, F) => {
        const E = i.extensions.find((D) => D.name === C.name);
        return E ? C.configure(E.options) : C;
      }), ...A].map((C, F) => C.configure({ sort: F }));
    });
    let c;
    const p = Nn({
      content: i.modelValue,
      editorProps: {
        handleKeyDown: Se(function(A, k) {
          return k.key === "Enter" && n.enter && !k.shiftKey ? (r("enter"), !0) : !1;
        }, zt)
      },
      onUpdate: Se(({ editor: A }) => {
        const k = T(A, i.output);
        c = k, r("update:modelValue", k), r("change", { editor: A, output: k });
      }, zt),
      extensions: m(u),
      autofocus: !1,
      editable: !i.disabled,
      injectCSS: !0
    }), { t: f } = ge(), g = w(() => Oe(i.dark) ? i.dark : Oe(s.current.value.dark) ? s.current.value.dark : !1), _ = w(() => [{
      __dark: m(g),
      ...m(d)
    }, i.editorClass]), y = w(() => {
      const A = Ze(i.maxWidth), k = {
        maxWidth: A,
        width: A ? "100%" : void 0,
        margin: A ? "0 auto" : void 0,
        backgroundColor: m(g) ? "#1E1E1E" : "#FFFFFF"
      };
      if (m(l)) return { height: "100%", overflowY: "auto", ...k };
      const C = Ze(i.minHeight), F = Ze(i.maxHeight);
      return {
        minHeight: C,
        maxHeight: F,
        overflowY: "auto",
        ...k
      };
    });
    function T(A, k) {
      return i.removeDefaultWrapper ? k === "html" ? A.isEmpty ? "" : A.getHTML() : k === "json" ? A.isEmpty ? {} : A.getJSON() : k === "text" ? A.isEmpty ? "" : A.getText() : "" : k === "html" ? A.getHTML() : k === "json" ? A.getJSON() : k === "text" ? A.getText() : "";
    }
    const V = Se((A) => {
      if (!p.value || c !== void 0 && Ko(c, A)) return;
      const k = T(p.value, i.output);
      if (Ko(k, A)) return;
      const { from: C, to: F } = p.value.state.selection;
      p.value.commands.setContent(A, { emitUpdate: !1 }), p.value.commands.setTextSelection({ from: C, to: F });
    }, Rr), S = (A) => {
      var k;
      return (k = p.value) == null ? void 0 : k.setEditable(!A);
    };
    return ue(() => i.modelValue, V), ue(() => i.disabled, S), mi("disableToolbar", Rn(() => i.disableToolbar)), t({ editor: p }), (A, k) => {
      const C = Tn, F = Je, E = et, D = Pe, ee = Ie, te = wn, x = si;
      return m(p) ? (h(), $("div", {
        key: 0,
        class: de(["vuetify-pro-tiptap", { dense: e.dense }])
      }, [
        b(x, {
          theme: g.value ? "dark" : "light"
        }, {
          default: v(() => [
            b(te, {
              class: "pt-0",
              "hide-details": "auto",
              "error-messages": e.errorMessages
            }, {
              default: v(() => [
                b(ee, ve({
                  flat: e.flat,
                  outlined: e.outlined,
                  color: g.value ? "grey-darken-4" : "grey-lighten-4"
                }, A.$attrs, {
                  style: {
                    borderColor: e.errorMessages ? "#ff5252" : void 0,
                    width: "100%"
                  },
                  class: ["vuetify-pro-tiptap-editor", { "vuetify-pro-tiptap-editor--fullscreen": m(l) }]
                }), {
                  default: v(() => [
                    e.label && !m(l) ? (h(), $(U, { key: 0 }, [
                      b(C, {
                        class: de(g.value ? "bg-grey-darken-3" : "bg-grey-lighten-3")
                      }, {
                        default: v(() => [
                          ce(N(e.label), 1)
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      b(F)
                    ], 64)) : q("", !0),
                    e.hideToolbar ? q("", !0) : (h(), H(xc, {
                      key: 1,
                      class: "vuetify-pro-tiptap-editor__toolbar",
                      editor: m(p)
                    }, null, 8, ["editor"])),
                    e.hideBubble ? q("", !0) : (h(), H(Sc, {
                      key: 2,
                      editor: m(p),
                      "should-show": e.bubbleShouldShow
                    }, null, 8, ["editor", "should-show"])),
                    Y(A.$slots, "editor", ft(mt({ editor: m(p), props: { class: "vuetify-pro-tiptap-editor__content", "data-testid": "value" } })), () => [
                      b(m(Zn), {
                        class: de(["vuetify-pro-tiptap-editor__content", _.value]),
                        style: be(y.value),
                        editor: m(p),
                        "data-testid": "value"
                      }, null, 8, ["class", "style", "editor"])
                    ]),
                    Y(A.$slots, "bottom", ft(mt({ editor: m(p) })), () => [
                      b(D, {
                        class: "px-4",
                        density: "compact",
                        flat: ""
                      }, {
                        default: v(() => [
                          b(E),
                          m(ic)(m(p), "characterCount") ? (h(), $(U, { key: 0 }, [
                            re("span", Ec, N(m(p).storage.characterCount.words()) + " " + N(m(f)("editor.words")), 1),
                            re("span", $c, N(m(p).storage.characterCount.characters()) + " " + N(m(f)("editor.characters")), 1)
                          ], 64)) : q("", !0)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 3
                }, 16, ["flat", "outlined", "color", "style", "class"])
              ]),
              _: 3
            }, 8, ["error-messages"])
          ]),
          _: 3
        }, 8, ["theme"])
      ], 2)) : q("", !0);
    };
  }
});
function Oc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kt = { exports: {} }, B = {}, Xt = { exports: {} }, ke = {};
function on() {
  var e = {};
  return e["align-content"] = !1, e["align-items"] = !1, e["align-self"] = !1, e["alignment-adjust"] = !1, e["alignment-baseline"] = !1, e.all = !1, e["anchor-point"] = !1, e.animation = !1, e["animation-delay"] = !1, e["animation-direction"] = !1, e["animation-duration"] = !1, e["animation-fill-mode"] = !1, e["animation-iteration-count"] = !1, e["animation-name"] = !1, e["animation-play-state"] = !1, e["animation-timing-function"] = !1, e.azimuth = !1, e["backface-visibility"] = !1, e.background = !0, e["background-attachment"] = !0, e["background-clip"] = !0, e["background-color"] = !0, e["background-image"] = !0, e["background-origin"] = !0, e["background-position"] = !0, e["background-repeat"] = !0, e["background-size"] = !0, e["baseline-shift"] = !1, e.binding = !1, e.bleed = !1, e["bookmark-label"] = !1, e["bookmark-level"] = !1, e["bookmark-state"] = !1, e.border = !0, e["border-bottom"] = !0, e["border-bottom-color"] = !0, e["border-bottom-left-radius"] = !0, e["border-bottom-right-radius"] = !0, e["border-bottom-style"] = !0, e["border-bottom-width"] = !0, e["border-collapse"] = !0, e["border-color"] = !0, e["border-image"] = !0, e["border-image-outset"] = !0, e["border-image-repeat"] = !0, e["border-image-slice"] = !0, e["border-image-source"] = !0, e["border-image-width"] = !0, e["border-left"] = !0, e["border-left-color"] = !0, e["border-left-style"] = !0, e["border-left-width"] = !0, e["border-radius"] = !0, e["border-right"] = !0, e["border-right-color"] = !0, e["border-right-style"] = !0, e["border-right-width"] = !0, e["border-spacing"] = !0, e["border-style"] = !0, e["border-top"] = !0, e["border-top-color"] = !0, e["border-top-left-radius"] = !0, e["border-top-right-radius"] = !0, e["border-top-style"] = !0, e["border-top-width"] = !0, e["border-width"] = !0, e.bottom = !1, e["box-decoration-break"] = !0, e["box-shadow"] = !0, e["box-sizing"] = !0, e["box-snap"] = !0, e["box-suppress"] = !0, e["break-after"] = !0, e["break-before"] = !0, e["break-inside"] = !0, e["caption-side"] = !1, e.chains = !1, e.clear = !0, e.clip = !1, e["clip-path"] = !1, e["clip-rule"] = !1, e.color = !0, e["color-interpolation-filters"] = !0, e["column-count"] = !1, e["column-fill"] = !1, e["column-gap"] = !1, e["column-rule"] = !1, e["column-rule-color"] = !1, e["column-rule-style"] = !1, e["column-rule-width"] = !1, e["column-span"] = !1, e["column-width"] = !1, e.columns = !1, e.contain = !1, e.content = !1, e["counter-increment"] = !1, e["counter-reset"] = !1, e["counter-set"] = !1, e.crop = !1, e.cue = !1, e["cue-after"] = !1, e["cue-before"] = !1, e.cursor = !1, e.direction = !1, e.display = !0, e["display-inside"] = !0, e["display-list"] = !0, e["display-outside"] = !0, e["dominant-baseline"] = !1, e.elevation = !1, e["empty-cells"] = !1, e.filter = !1, e.flex = !1, e["flex-basis"] = !1, e["flex-direction"] = !1, e["flex-flow"] = !1, e["flex-grow"] = !1, e["flex-shrink"] = !1, e["flex-wrap"] = !1, e.float = !1, e["float-offset"] = !1, e["flood-color"] = !1, e["flood-opacity"] = !1, e["flow-from"] = !1, e["flow-into"] = !1, e.font = !0, e["font-family"] = !0, e["font-feature-settings"] = !0, e["font-kerning"] = !0, e["font-language-override"] = !0, e["font-size"] = !0, e["font-size-adjust"] = !0, e["font-stretch"] = !0, e["font-style"] = !0, e["font-synthesis"] = !0, e["font-variant"] = !0, e["font-variant-alternates"] = !0, e["font-variant-caps"] = !0, e["font-variant-east-asian"] = !0, e["font-variant-ligatures"] = !0, e["font-variant-numeric"] = !0, e["font-variant-position"] = !0, e["font-weight"] = !0, e.grid = !1, e["grid-area"] = !1, e["grid-auto-columns"] = !1, e["grid-auto-flow"] = !1, e["grid-auto-rows"] = !1, e["grid-column"] = !1, e["grid-column-end"] = !1, e["grid-column-start"] = !1, e["grid-row"] = !1, e["grid-row-end"] = !1, e["grid-row-start"] = !1, e["grid-template"] = !1, e["grid-template-areas"] = !1, e["grid-template-columns"] = !1, e["grid-template-rows"] = !1, e["hanging-punctuation"] = !1, e.height = !0, e.hyphens = !1, e.icon = !1, e["image-orientation"] = !1, e["image-resolution"] = !1, e["ime-mode"] = !1, e["initial-letters"] = !1, e["inline-box-align"] = !1, e["justify-content"] = !1, e["justify-items"] = !1, e["justify-self"] = !1, e.left = !1, e["letter-spacing"] = !0, e["lighting-color"] = !0, e["line-box-contain"] = !1, e["line-break"] = !1, e["line-grid"] = !1, e["line-height"] = !1, e["line-snap"] = !1, e["line-stacking"] = !1, e["line-stacking-ruby"] = !1, e["line-stacking-shift"] = !1, e["line-stacking-strategy"] = !1, e["list-style"] = !0, e["list-style-image"] = !0, e["list-style-position"] = !0, e["list-style-type"] = !0, e.margin = !0, e["margin-bottom"] = !0, e["margin-left"] = !0, e["margin-right"] = !0, e["margin-top"] = !0, e["marker-offset"] = !1, e["marker-side"] = !1, e.marks = !1, e.mask = !1, e["mask-box"] = !1, e["mask-box-outset"] = !1, e["mask-box-repeat"] = !1, e["mask-box-slice"] = !1, e["mask-box-source"] = !1, e["mask-box-width"] = !1, e["mask-clip"] = !1, e["mask-image"] = !1, e["mask-origin"] = !1, e["mask-position"] = !1, e["mask-repeat"] = !1, e["mask-size"] = !1, e["mask-source-type"] = !1, e["mask-type"] = !1, e["max-height"] = !0, e["max-lines"] = !1, e["max-width"] = !0, e["min-height"] = !0, e["min-width"] = !0, e["move-to"] = !1, e["nav-down"] = !1, e["nav-index"] = !1, e["nav-left"] = !1, e["nav-right"] = !1, e["nav-up"] = !1, e["object-fit"] = !1, e["object-position"] = !1, e.opacity = !1, e.order = !1, e.orphans = !1, e.outline = !1, e["outline-color"] = !1, e["outline-offset"] = !1, e["outline-style"] = !1, e["outline-width"] = !1, e.overflow = !1, e["overflow-wrap"] = !1, e["overflow-x"] = !1, e["overflow-y"] = !1, e.padding = !0, e["padding-bottom"] = !0, e["padding-left"] = !0, e["padding-right"] = !0, e["padding-top"] = !0, e.page = !1, e["page-break-after"] = !1, e["page-break-before"] = !1, e["page-break-inside"] = !1, e["page-policy"] = !1, e.pause = !1, e["pause-after"] = !1, e["pause-before"] = !1, e.perspective = !1, e["perspective-origin"] = !1, e.pitch = !1, e["pitch-range"] = !1, e["play-during"] = !1, e.position = !1, e["presentation-level"] = !1, e.quotes = !1, e["region-fragment"] = !1, e.resize = !1, e.rest = !1, e["rest-after"] = !1, e["rest-before"] = !1, e.richness = !1, e.right = !1, e.rotation = !1, e["rotation-point"] = !1, e["ruby-align"] = !1, e["ruby-merge"] = !1, e["ruby-position"] = !1, e["shape-image-threshold"] = !1, e["shape-outside"] = !1, e["shape-margin"] = !1, e.size = !1, e.speak = !1, e["speak-as"] = !1, e["speak-header"] = !1, e["speak-numeral"] = !1, e["speak-punctuation"] = !1, e["speech-rate"] = !1, e.stress = !1, e["string-set"] = !1, e["tab-size"] = !1, e["table-layout"] = !1, e["text-align"] = !0, e["text-align-last"] = !0, e["text-combine-upright"] = !0, e["text-decoration"] = !0, e["text-decoration-color"] = !0, e["text-decoration-line"] = !0, e["text-decoration-skip"] = !0, e["text-decoration-style"] = !0, e["text-emphasis"] = !0, e["text-emphasis-color"] = !0, e["text-emphasis-position"] = !0, e["text-emphasis-style"] = !0, e["text-height"] = !0, e["text-indent"] = !0, e["text-justify"] = !0, e["text-orientation"] = !0, e["text-overflow"] = !0, e["text-shadow"] = !0, e["text-space-collapse"] = !0, e["text-transform"] = !0, e["text-underline-position"] = !0, e["text-wrap"] = !0, e.top = !1, e.transform = !1, e["transform-origin"] = !1, e["transform-style"] = !1, e.transition = !1, e["transition-delay"] = !1, e["transition-duration"] = !1, e["transition-property"] = !1, e["transition-timing-function"] = !1, e["unicode-bidi"] = !1, e["vertical-align"] = !1, e.visibility = !1, e["voice-balance"] = !1, e["voice-duration"] = !1, e["voice-family"] = !1, e["voice-pitch"] = !1, e["voice-range"] = !1, e["voice-rate"] = !1, e["voice-stress"] = !1, e["voice-volume"] = !1, e.volume = !1, e["white-space"] = !1, e.widows = !1, e.width = !0, e["will-change"] = !1, e["word-break"] = !0, e["word-spacing"] = !0, e["word-wrap"] = !0, e["wrap-flow"] = !1, e["wrap-through"] = !1, e["writing-mode"] = !1, e["z-index"] = !1, e;
}
function Ic(e, t, o) {
}
function Pc(e, t, o) {
}
var Fc = /javascript\s*\:/img;
function Bc(e, t) {
  return Fc.test(t) ? "" : t;
}
ke.whiteList = on();
ke.getDefaultWhiteList = on;
ke.onAttr = Ic;
ke.onIgnoreAttr = Pc;
ke.safeAttrValue = Bc;
var Rc = {
  indexOf: function(e, t) {
    var o, i;
    if (Array.prototype.indexOf)
      return e.indexOf(t);
    for (o = 0, i = e.length; o < i; o++)
      if (e[o] === t)
        return o;
    return -1;
  },
  forEach: function(e, t, o) {
    var i, r;
    if (Array.prototype.forEach)
      return e.forEach(t, o);
    for (i = 0, r = e.length; i < r; i++)
      t.call(o, e[i], i, e);
  },
  trim: function(e) {
    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
  },
  trimRight: function(e) {
    return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "");
  }
}, De = Rc;
function zc(e, t) {
  e = De.trimRight(e), e[e.length - 1] !== ";" && (e += ";");
  var o = e.length, i = !1, r = 0, n = 0, s = "";
  function a() {
    if (!i) {
      var u = De.trim(e.slice(r, n)), c = u.indexOf(":");
      if (c !== -1) {
        var p = De.trim(u.slice(0, c)), f = De.trim(u.slice(c + 1));
        if (p) {
          var g = t(r, s.length, p, f, u);
          g && (s += g + "; ");
        }
      }
    }
    r = n + 1;
  }
  for (; n < o; n++) {
    var l = e[n];
    if (l === "/" && e[n + 1] === "*") {
      var d = e.indexOf("*/", n + 2);
      if (d === -1) break;
      n = d + 1, r = n + 1, i = !1;
    } else l === "(" ? i = !0 : l === ")" ? i = !1 : l === ";" ? i || a() : l === `
` && a();
  }
  return De.trim(s);
}
var Dc = zc, at = ke, jc = Dc;
function ei(e) {
  return e == null;
}
function Uc(e) {
  var t = {};
  for (var o in e)
    t[o] = e[o];
  return t;
}
function nn(e) {
  e = Uc(e || {}), e.whiteList = e.whiteList || at.whiteList, e.onAttr = e.onAttr || at.onAttr, e.onIgnoreAttr = e.onIgnoreAttr || at.onIgnoreAttr, e.safeAttrValue = e.safeAttrValue || at.safeAttrValue, this.options = e;
}
nn.prototype.process = function(e) {
  if (e = e || "", e = e.toString(), !e) return "";
  var t = this, o = t.options, i = o.whiteList, r = o.onAttr, n = o.onIgnoreAttr, s = o.safeAttrValue, a = jc(e, function(l, d, u, c, p) {
    var f = i[u], g = !1;
    if (f === !0 ? g = f : typeof f == "function" ? g = f(c) : f instanceof RegExp && (g = f.test(c)), g !== !0 && (g = !1), c = s(u, c), !!c) {
      var _ = {
        position: d,
        sourcePosition: l,
        source: p,
        isWhite: g
      };
      if (g) {
        var y = r(u, c, _);
        return ei(y) ? u + ":" + c : y;
      } else {
        var y = n(u, c, _);
        if (!ei(y))
          return y;
      }
    }
  });
  return a;
};
var Nc = nn;
(function(e, t) {
  var o = ke, i = Nc;
  function r(s, a) {
    var l = new i(a);
    return l.process(s);
  }
  t = e.exports = r, t.FilterCSS = i;
  for (var n in o) t[n] = o[n];
  typeof window < "u" && (window.filterCSS = e.exports);
})(Xt, Xt.exports);
var go = Xt.exports, ho = {
  indexOf: function(e, t) {
    var o, i;
    if (Array.prototype.indexOf)
      return e.indexOf(t);
    for (o = 0, i = e.length; o < i; o++)
      if (e[o] === t)
        return o;
    return -1;
  },
  forEach: function(e, t, o) {
    var i, r;
    if (Array.prototype.forEach)
      return e.forEach(t, o);
    for (i = 0, r = e.length; i < r; i++)
      t.call(o, e[i], i, e);
  },
  trim: function(e) {
    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function(e) {
    var t = /\s|\n|\t/, o = t.exec(e);
    return o ? o.index : -1;
  }
}, Zc = go.FilterCSS, Gc = go.getDefaultWhiteList, Ye = ho;
function rn() {
  return {
    a: ["target", "href", "title"],
    abbr: ["title"],
    address: [],
    area: ["shape", "coords", "href", "alt"],
    article: [],
    aside: [],
    audio: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "preload",
      "src"
    ],
    b: [],
    bdi: ["dir"],
    bdo: ["dir"],
    big: [],
    blockquote: ["cite"],
    br: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ["align", "valign", "span", "width"],
    colgroup: ["align", "valign", "span", "width"],
    dd: [],
    del: ["datetime"],
    details: ["open"],
    div: [],
    dl: [],
    dt: [],
    em: [],
    figcaption: [],
    figure: [],
    font: ["color", "size", "face"],
    footer: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    header: [],
    hr: [],
    i: [],
    img: ["src", "alt", "title", "width", "height", "loading"],
    ins: ["datetime"],
    kbd: [],
    li: [],
    mark: [],
    nav: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: [],
    sub: [],
    summary: [],
    sup: [],
    strong: [],
    strike: [],
    table: ["width", "border", "align", "valign"],
    tbody: ["align", "valign"],
    td: ["width", "rowspan", "colspan", "align", "valign"],
    tfoot: ["align", "valign"],
    th: ["width", "rowspan", "colspan", "align", "valign"],
    thead: ["align", "valign"],
    tr: ["rowspan", "align", "valign"],
    tt: [],
    u: [],
    ul: [],
    video: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "playsinline",
      "poster",
      "preload",
      "src",
      "height",
      "width"
    ]
  };
}
var an = new Zc();
function Wc(e, t, o) {
}
function qc(e, t, o) {
}
function Kc(e, t, o) {
}
function Xc(e, t, o) {
}
function ln(e) {
  return e.replace(Qc, "&lt;").replace(Jc, "&gt;");
}
function Yc(e, t, o, i) {
  if (o = fn(o), t === "href" || t === "src") {
    if (o = Ye.trim(o), o === "#") return "#";
    if (!(o.substr(0, 7) === "http://" || o.substr(0, 8) === "https://" || o.substr(0, 7) === "mailto:" || o.substr(0, 4) === "tel:" || o.substr(0, 11) === "data:image/" || o.substr(0, 6) === "ftp://" || o.substr(0, 2) === "./" || o.substr(0, 3) === "../" || o[0] === "#" || o[0] === "/"))
      return "";
  } else if (t === "action" || t === "formaction") {
    if (o = Ye.trim(o), !/^https?:\/\//i.test(o) && /^[^/?#]*:/.test(o))
      return "";
  } else if (t === "background") {
    if (lt.lastIndex = 0, lt.test(o))
      return "";
  } else if (t === "style") {
    if (ti.lastIndex = 0, ti.test(o) || (oi.lastIndex = 0, oi.test(o) && (lt.lastIndex = 0, lt.test(o))))
      return "";
    i !== !1 && (i = i || an, o = i.process(o));
  }
  return o = mn(o), o;
}
var Qc = /</g, Jc = />/g, e1 = /"/g, t1 = /&quot;/g, o1 = /&#([a-zA-Z0-9]*);?/gim, i1 = /&colon;?/gim, n1 = /&newline;?/gim, lt = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, ti = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, oi = /u\s*r\s*l\s*\(.*/gi;
function sn(e) {
  return e.replace(e1, "&quot;");
}
function dn(e) {
  return e.replace(t1, '"');
}
function un(e) {
  return e.replace(o1, function(o, i) {
    return i[0] === "x" || i[0] === "X" ? String.fromCharCode(parseInt(i.substr(1), 16)) : String.fromCharCode(parseInt(i, 10));
  });
}
function cn(e) {
  return e.replace(i1, ":").replace(n1, " ");
}
function pn(e) {
  for (var t = "", o = 0, i = e.length; o < i; o++)
    t += e.charCodeAt(o) < 32 ? " " : e.charAt(o);
  return Ye.trim(t);
}
function fn(e) {
  return e = dn(e), e = un(e), e = cn(e), e = pn(e), e;
}
function mn(e) {
  return e = sn(e), e = ln(e), e;
}
function r1() {
  return "";
}
function a1(e, t) {
  typeof t != "function" && (t = function() {
  });
  var o = !Array.isArray(e);
  function i(s) {
    return o ? !0 : Ye.indexOf(e, s) !== -1;
  }
  var r = [], n = !1;
  return {
    onIgnoreTag: function(s, a, l) {
      if (i(s))
        if (l.isClosing) {
          var d = "[/removed]", u = l.position + d.length;
          return r.push([
            n !== !1 ? n : l.position,
            u
          ]), n = !1, d;
        } else
          return n || (n = l.position), "[removed]";
      else
        return t(s, a, l);
    },
    remove: function(s) {
      var a = "", l = 0;
      return Ye.forEach(r, function(d) {
        a += s.slice(l, d[0]), l = d[1];
      }), a += s.slice(l), a;
    }
  };
}
function l1(e) {
  for (var t = "", o = 0; o < e.length; ) {
    var i = e.indexOf("<!--", o);
    if (i === -1) {
      t += e.slice(o);
      break;
    }
    t += e.slice(o, i);
    var r = e.indexOf("-->", i);
    if (r === -1)
      break;
    o = r + 3;
  }
  return t;
}
function s1(e) {
  var t = e.split("");
  return t = t.filter(function(o) {
    var i = o.charCodeAt(0);
    return i === 127 ? !1 : i <= 31 ? i === 10 || i === 13 : !0;
  }), t.join("");
}
B.whiteList = rn();
B.getDefaultWhiteList = rn;
B.onTag = Wc;
B.onIgnoreTag = qc;
B.onTagAttr = Kc;
B.onIgnoreTagAttr = Xc;
B.safeAttrValue = Yc;
B.escapeHtml = ln;
B.escapeQuote = sn;
B.unescapeQuote = dn;
B.escapeHtmlEntities = un;
B.escapeDangerHtml5Entities = cn;
B.clearNonPrintableCharacter = pn;
B.friendlyAttrValue = fn;
B.escapeAttrValue = mn;
B.onIgnoreTagStripAll = r1;
B.StripTagBody = a1;
B.stripCommentTag = l1;
B.stripBlankChar = s1;
B.attributeWrapSign = '"';
B.cssFilter = an;
B.getDefaultCSSWhiteList = Gc;
var St = {}, he = ho;
function d1(e) {
  var t = he.spaceIndex(e), o;
  return t === -1 ? o = e.slice(1, -1) : o = e.slice(1, t + 1), o = he.trim(o).toLowerCase(), o.slice(0, 1) === "/" && (o = o.slice(1)), o.slice(-1) === "/" && (o = o.slice(0, -1)), o;
}
function u1(e) {
  return e.slice(0, 2) === "</";
}
function c1(e, t, o) {
  var i = "", r = 0, n = !1, s = !1, a = 0, l = e.length, d = "", u = "";
  e: for (a = 0; a < l; a++) {
    var c = e.charAt(a);
    if (n === !1) {
      if (c === "<") {
        n = a;
        continue;
      }
    } else if (s === !1) {
      if (c === "<") {
        i += o(e.slice(r, a)), n = a, r = a;
        continue;
      }
      if (c === ">" || a === l - 1) {
        i += o(e.slice(r, n)), u = e.slice(n, a + 1), d = d1(u), i += t(
          n,
          i.length,
          d,
          u,
          u1(u)
        ), r = a + 1, n = !1;
        continue;
      }
      if (c === '"' || c === "'")
        for (var p = 1, f = e.charAt(a - p); f.trim() === "" || f === "="; ) {
          if (f === "=") {
            s = c;
            continue e;
          }
          f = e.charAt(a - ++p);
        }
    } else if (c === s) {
      s = !1;
      continue;
    }
  }
  return r < l && (i += o(e.substr(r))), i;
}
var p1 = /[^a-zA-Z0-9\\_:.-]/gim;
function f1(e, t) {
  var o = 0, i = 0, r = [], n = !1, s = e.length;
  function a(p, f) {
    if (p = he.trim(p), p = p.replace(p1, "").toLowerCase(), !(p.length < 1)) {
      var g = t(p, f || "");
      g && r.push(g);
    }
  }
  for (var l = 0; l < s; l++) {
    var d = e.charAt(l), u, c;
    if (n === !1 && d === "=") {
      n = e.slice(o, l), o = l + 1, i = e.charAt(o) === '"' || e.charAt(o) === "'" ? o : g1(e, l + 1);
      continue;
    }
    if (n !== !1 && l === i) {
      if (c = e.indexOf(d, l + 1), c === -1)
        break;
      u = he.trim(e.slice(i + 1, c)), a(n, u), n = !1, l = c, o = l + 1;
      continue;
    }
    if (/\s|\n|\t/.test(d))
      if (e = e.replace(/\s|\n|\t/g, " "), n === !1)
        if (c = m1(e, l), c === -1) {
          u = he.trim(e.slice(o, l)), a(u), n = !1, o = l + 1;
          continue;
        } else {
          l = c - 1;
          continue;
        }
      else if (c = h1(e, l - 1), c === -1) {
        u = he.trim(e.slice(o, l)), u = ii(u), a(n, u), n = !1, o = l + 1;
        continue;
      } else
        continue;
  }
  return o < e.length && (n === !1 ? a(e.slice(o)) : a(n, ii(he.trim(e.slice(o))))), he.trim(r.join(" "));
}
function m1(e, t) {
  for (; t < e.length; t++) {
    var o = e[t];
    if (o !== " ")
      return o === "=" ? t : -1;
  }
}
function g1(e, t) {
  for (; t < e.length; t++) {
    var o = e[t];
    if (o !== " ")
      return o === "'" || o === '"' ? t : -1;
  }
}
function h1(e, t) {
  for (; t > 0; t--) {
    var o = e[t];
    if (o !== " ")
      return o === "=" ? t : -1;
  }
}
function b1(e) {
  return e[0] === '"' && e[e.length - 1] === '"' || e[0] === "'" && e[e.length - 1] === "'";
}
function ii(e) {
  return b1(e) ? e.substr(1, e.length - 2) : e;
}
St.parseTag = c1;
St.parseAttr = f1;
var v1 = go.FilterCSS, W = B, gn = St, _1 = gn.parseTag, V1 = gn.parseAttr, ct = ho;
function st(e) {
  return e == null;
}
function y1(e) {
  var t = ct.spaceIndex(e);
  if (t === -1)
    return {
      html: "",
      closing: e[e.length - 2] === "/"
    };
  e = ct.trim(e.slice(t + 1, -1));
  var o = e[e.length - 1] === "/";
  return o && (e = ct.trim(e.slice(0, -1))), {
    html: e,
    closing: o
  };
}
function A1(e) {
  var t = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
  return t;
}
function H1(e) {
  var t = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && (Array.isArray(e[o]) ? t[o.toLowerCase()] = e[o].map(function(i) {
      return i.toLowerCase();
    }) : t[o.toLowerCase()] = e[o]);
  return t;
}
function Ce(e, t, o) {
  return Object.prototype.hasOwnProperty.call(e, t) && typeof e[t] == "function" ? e[t] : o;
}
function ni(e, t) {
  if (Object.prototype.hasOwnProperty.call(e, t) && !(e[t] === void 0 || e[t] === null))
    return e[t];
}
function hn(e) {
  e = A1(e || {}), Object.prototype.hasOwnProperty.call(e, "stripIgnoreTag") && e.stripIgnoreTag && (Object.prototype.hasOwnProperty.call(e, "onIgnoreTag") && e.onIgnoreTag && console.error(
    'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
  ), e.onIgnoreTag = W.onIgnoreTagStripAll);
  var t = ni(e, "whiteList");
  t === void 0 && (t = ni(e, "allowList")), t === void 0 ? e.whiteList = W.whiteList : e.whiteList = H1(t), this.attributeWrapSign = Object.prototype.hasOwnProperty.call(e, "singleQuotedAttributeValue") && e.singleQuotedAttributeValue === !0 ? "'" : W.attributeWrapSign, e.onTag = Ce(e, "onTag", W.onTag), e.onTagAttr = Ce(e, "onTagAttr", W.onTagAttr), e.onIgnoreTag = Ce(e, "onIgnoreTag", W.onIgnoreTag), e.onIgnoreTagAttr = Ce(e, "onIgnoreTagAttr", W.onIgnoreTagAttr), e.safeAttrValue = Ce(e, "safeAttrValue", W.safeAttrValue), e.escapeHtml = Ce(e, "escapeHtml", W.escapeHtml), this.options = e, Object.prototype.hasOwnProperty.call(e, "css") && e.css === !1 ? this.cssFilter = !1 : (e.css = Object.prototype.hasOwnProperty.call(e, "css") ? e.css : {}, this.cssFilter = new v1(e.css));
}
hn.prototype.process = function(e) {
  if (e = e || "", e = e.toString(), !e) return "";
  var t = this, o = t.options, i = o.whiteList, r = o.onTag, n = o.onIgnoreTag, s = o.onTagAttr, a = o.onIgnoreTagAttr, l = o.safeAttrValue, d = o.escapeHtml, u = t.attributeWrapSign, c = t.cssFilter;
  o.stripBlankChar && (e = W.stripBlankChar(e)), o.allowCommentTag || (e = W.stripCommentTag(e));
  var p = !1;
  o.stripIgnoreTagBody && (p = W.StripTagBody(
    o.stripIgnoreTagBody,
    n
  ), n = p.onIgnoreTag);
  var f = _1(
    e,
    function(g, _, y, T, V) {
      var S = {
        sourcePosition: g,
        position: _,
        isClosing: V,
        isWhite: Object.prototype.hasOwnProperty.call(i, y)
      }, A = r(y, T, S);
      if (!st(A)) return A;
      if (S.isWhite) {
        if (S.isClosing)
          return "</" + y + ">";
        var k = y1(T), C = i[y], F = V1(k.html, function(E, D) {
          var ee = ct.indexOf(C, E) !== -1, te = s(y, E, D, ee);
          return st(te) ? ee ? (D = l(y, E, D, c), D ? E + "=" + u + D + u : E) : (te = a(y, E, D, ee), st(te) ? void 0 : te) : te;
        });
        return T = "<" + y, F && (T += " " + F), k.closing && (T += " /"), T += ">", T;
      } else
        return A = n(y, T, S), st(A) ? d(T) : A;
    },
    d
  );
  return p && (f = p.remove(f)), f;
};
var w1 = hn;
(function(e, t) {
  var o = B, i = St, r = w1;
  function n(l, d) {
    var u = new r(d);
    return u.process(l);
  }
  function s(l, d) {
    var u = [], c = {};
    if (d)
      for (var p in d)
        Object.prototype.hasOwnProperty.call(d, p) && (c[p] = d[p]);
    var f = c.onIgnoreTag, g = c.onIgnoreTagAttr;
    c.onIgnoreTag = function(y, T, V) {
      if (u.push({
        type: "tag",
        tag: y,
        html: T,
        isClosing: !!(V && V.isClosing)
      }), f)
        return f(y, T, V);
    }, c.onIgnoreTagAttr = function(y, T, V, S) {
      if (u.push({
        type: "attr",
        tag: y,
        attr: T,
        value: V
      }), g)
        return g(y, T, V, S);
    };
    var _ = n(l, c);
    return {
      html: _,
      removed: u
    };
  }
  t = e.exports = n, t.filterXSS = n, t.filterXSSWithResult = s, t.FilterXSS = r, function() {
    for (var l in o)
      Object.prototype.hasOwnProperty.call(o, l) && (t[l] = o[l]);
    for (var d in i)
      Object.prototype.hasOwnProperty.call(i, d) && (t[d] = i[d]);
  }(), typeof window < "u" && (window.filterXSS = e.exports);
  function a() {
    return typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope;
  }
  a() && (self.filterXSS = e.exports);
})(Kt, Kt.exports);
var T1 = Kt.exports;
const L1 = /* @__PURE__ */ Oc(T1), k1 = {
  a: ["href", "title", "target"],
  span: ["style", "class", "data-display"],
  blockquote: ["class", "style"],
  p: ["class", "style"],
  hr: [],
  pre: [],
  code: [],
  strong: [],
  img: ["src", "alt", "title", "width", "height", "style", "data-display"],
  label: ["contenteditable"],
  input: ["type", "value", "checked"],
  div: ["class", "style"],
  iframe: ["src", "allowfullscreen", "frameborder", "width", "height"],
  em: [],
  s: [],
  mark: ["class", "style"],
  sub: ["class", "style"],
  sup: ["class", "style"],
  h1: ["class", "style"],
  h2: ["class", "style"],
  h3: ["class", "style"],
  h4: ["class", "style"],
  h5: ["class", "style"],
  h6: ["class", "style"],
  ul: ["class", "data-type"],
  li: ["class", "data-checked", "itemtypename"],
  ol: [],
  u: [],
  table: ["class", "style"],
  colgroup: [],
  col: ["style"],
  tbody: ["class", "style"],
  tr: ["class", "style"],
  th: ["class", "style", "colspan", "rowspan"],
  td: ["class", "style", "colspan", "rowspan"],
  br: []
}, M1 = ["innerHTML"], Mm = /* @__PURE__ */ L({
  __name: "VuetifyViewer",
  props: {
    value: { default: "" },
    dark: { type: Boolean, default: void 0 },
    dense: { type: Boolean, default: !1 },
    markdownTheme: { type: [String, Boolean], default: void 0 },
    xss: { type: [Boolean, Array], default: !0 },
    xssOptions: { default: () => k1 },
    extensions: { default: () => [] }
  },
  setup(e) {
    const t = e, { state: o } = Ht(), i = to(), { markdownThemeStyle: r } = Ji(w(() => t.markdownTheme)), n = w(() => [...o.extensions, ...t.extensions]), s = w(() => Oe(t.dark) ? t.dark : Oe(i.current.value.dark) ? i.current.value.dark : !1), a = w(() => ({
      __dark: m(s),
      dense: t.dense,
      view: !0,
      ...m(r)
    })), l = w(() => Ne(t.value) ? t.value : Jn(t.value, m(n))), d = w(() => {
      let f = m(l);
      if (t.xss === !1)
        return f;
      f = f.replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/").replace("https://vimeo.com/", "https://player.vimeo.com/video/");
      const g = t.xssOptions;
      return L1(f, { whiteList: g, css: !1 });
    }), u = O();
    function c() {
      var f;
      (f = u.value) == null || f.querySelectorAll("img").forEach((g) => {
        var _;
        (_ = g.nextElementSibling) != null && _.classList.contains("image-figure_caption") && (g.nextElementSibling.style.width = `${g.offsetWidth}px`);
      });
    }
    const p = new ResizeObserver(() => c());
    return Ae((f) => {
      u.value && m(p).observe(u.value), f(() => {
        m(p).disconnect();
      });
    }), (f, g) => (h(), $("div", {
      class: de(["vuetify-pro-tiptap-editor__content", a.value]),
      style: { width: "100%" }
    }, [
      Y(f.$slots, "before"),
      re("div", {
        ref_key: "contentEl",
        ref: u,
        class: "content",
        innerHTML: d.value
      }, null, 8, M1),
      Y(f.$slots, "after")
    ], 2));
  }
}), C1 = (e) => {
  var t;
  return {
    action: () => e.editor.chain().focus().toggleBlockquote().run(),
    isActive: () => e.editor.isActive("blockquote") || !1,
    disabled: ((t = e.isDisabled) == null ? void 0 : t.call(e, e.editor)) || !e.editor.can().toggleCodeBlock(),
    title: e.t("editor.blockquote.tooltip"),
    icon: "blockquote"
  };
};
var S1 = "M19,12H17V15H14V17H19V12M7,9H10V7H5V12H7V9M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H21V19Z", x1 = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", E1 = "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z", $1 = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", O1 = "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M11 8H9V10C9 11.1 8.1 12 7 12C8.1 12 9 12.9 9 14V16H11V18H9C7.9 18 7 17.1 7 16V15C7 13.9 6.1 13 5 13V11C6.1 11 7 10.1 7 9V8C7 6.9 7.9 6 9 6H11V8M19 13C17.9 13 17 13.9 17 15V16C17 17.1 16.1 18 15 18H13V16H15V14C15 12.9 15.9 12 17 12C15.9 12 15 11.1 15 10V8H13V6H15C16.1 6 17 6.9 17 8V9C17 10.1 17.9 11 19 11V13Z", I1 = "M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z", P1 = "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z", F1 = "M13.09 20H6L12 14L13.88 15.88C14.5 14.9 15.36 14.1 16.4 13.6L18 12V13.09C18.33 13.04 18.66 13 19 13C19.34 13 19.67 13.04 20 13.09V8L14 2H6C4.89 2 4 2.89 4 4V20C4 21.1 4.89 22 6 22H13.81C13.46 21.39 13.21 20.72 13.09 20M13 3.5L18.5 9H13V3.5M8 9C9.11 9 10 9.9 10 11S9.11 13 8 13 6 12.11 6 11 6.9 9 8 9M20 15V18H23V20H20V23H18V20H15V18H18V15H20Z", ri = "M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z", B1 = "M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z", R1 = "M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z", z1 = "M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z", D1 = "M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z", j1 = "M6,5V5.18L8.82,8H11.22L10.5,9.68L12.6,11.78L14.21,8H20V5H6M3.27,5L2,6.27L8.97,13.24L6.5,19H9.5L11.07,15.34L16.73,21L18,19.73L3.55,5.27L3.27,5Z", U1 = "M4,17L6.75,14.25L6.72,14.23C6.14,13.64 6.14,12.69 6.72,12.11L11.46,7.37L15.7,11.61L10.96,16.35C10.39,16.93 9.46,16.93 8.87,16.37L8.24,17H4M15.91,2.91C16.5,2.33 17.45,2.33 18.03,2.91L20.16,5.03C20.74,5.62 20.74,6.57 20.16,7.16L16.86,10.45L12.62,6.21L15.91,2.91Z", N1 = "M3,7H9V13H3V7M3,3H21V5H3V3M21,7V9H11V7H21M21,11V13H11V11H21M3,15H17V17H3V15M3,19H21V21H3V19Z", Z1 = "M3,7H9V13H3V7M3,3H21V5H3V3M21,11V13H11V11H21M3,15H17V17H3V15M3,19H21V21H3V19Z", G1 = "M15,7H21V13H15V7M3,3H21V5H3V3M13,7V9H3V7H13M9,11V13H3V11H9M3,15H17V17H3V15M3,19H21V21H3V19Z", W1 = "M17,8H20V20H21V21H17V20H18V17H14L12.5,20H14V21H10V20H11L17,8M18,9L14.5,16H18V9M5,3H10C11.11,3 12,3.89 12,5V16H9V11H6V16H3V5C3,3.89 3.89,3 5,3M6,5V9H9V5H6Z", q1 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z", K1 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M21,18H15A2,2 0 0,1 13,16C13,15.47 13.2,15 13.54,14.64L18.41,9.41C18.78,9.05 19,8.55 19,8A2,2 0 0,0 17,6A2,2 0 0,0 15,8H13A4,4 0 0,1 17,4A4,4 0 0,1 21,8C21,9.1 20.55,10.1 19.83,10.83L15,16H21V18Z", X1 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6A2,2 0 0,1 15,4Z", Y1 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M18,18V13H13V11L18,4H20V11H21V13H20V18H18M18,11V7.42L15.45,11H18Z", Q1 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H20V6H15V10H17A4,4 0 0,1 21,14A4,4 0 0,1 17,18H15A2,2 0 0,1 13,16V15H15V16H17A2,2 0 0,0 19,14A2,2 0 0,0 17,12H15A2,2 0 0,1 13,10V6A2,2 0 0,1 15,4Z", J1 = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V7H19V6H15V10H19A2,2 0 0,1 21,12V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V6A2,2 0 0,1 15,4M15,12V16H19V12H15Z", ep = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M13,8H15.31L15.63,5H17.63L17.31,8H19.31L19.63,5H21.63L21.31,8H23V10H21.1L20.9,12H23V14H20.69L20.37,17H18.37L18.69,14H16.69L16.37,17H14.37L14.69,14H13V12H14.9L15.1,10H13V8M17.1,10L16.9,12H18.9L19.1,10H17.1Z", tp = "M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M3,21H21V19H3M3,12L7,16V8M11,17H21V15H11V17Z", op = "M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M11,17H21V15H11M3,8V16L7,12M3,21H21V19H3V21Z", ip = "M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z", np = "M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z", rp = "M21,19V17H8V19H21M21,13V11H8V13H21M8,7H21V5H8V7M4,5V7H6V5H4M3,5A1,1 0 0,1 4,4H6A1,1 0 0,1 7,5V7A1,1 0 0,1 6,8H4A1,1 0 0,1 3,7V5M4,11V13H6V11H4M3,11A1,1 0 0,1 4,10H6A1,1 0 0,1 7,11V13A1,1 0 0,1 6,14H4A1,1 0 0,1 3,13V11M4,17V19H6V17H4M3,17A1,1 0 0,1 4,16H6A1,1 0 0,1 7,17V19A1,1 0 0,1 6,20H4A1,1 0 0,1 3,19V17Z", ap = "M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z", lp = "M13,4A4,4 0 0,1 17,8A4,4 0 0,1 13,12H11V18H9V4H13M13,10A2,2 0 0,0 15,8A2,2 0 0,0 13,6H11V10H13Z", sp = "M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z", dp = "M2 4V7H7V19H10V7H15V4H2M21 9H12V12H15V19H18V12H21V9Z", up = "M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z", cp = "M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,21.03H16.97V20.03L17.86,19.23C18.62,18.58 19.18,18.04 19.56,17.6C19.93,17.16 20.12,16.75 20.13,16.36C20.14,16.08 20.05,15.85 19.86,15.66C19.68,15.5 19.39,15.38 19,15.38C18.69,15.38 18.42,15.44 18.16,15.56L17.5,15.94L17.05,14.77C17.32,14.56 17.64,14.38 18.03,14.24C18.42,14.1 18.85,14 19.32,14C20.1,14.04 20.7,14.25 21.1,14.66C21.5,15.07 21.72,15.59 21.72,16.23C21.71,16.79 21.53,17.31 21.18,17.78C20.84,18.25 20.42,18.7 19.91,19.14L19.27,19.66V19.68H21.85V21.03Z", pp = "M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,9H16.97V8L17.86,7.18C18.62,6.54 19.18,6 19.56,5.55C19.93,5.11 20.12,4.7 20.13,4.32C20.14,4.04 20.05,3.8 19.86,3.62C19.68,3.43 19.39,3.34 19,3.33C18.69,3.34 18.42,3.4 18.16,3.5L17.5,3.89L17.05,2.72C17.32,2.5 17.64,2.33 18.03,2.19C18.42,2.05 18.85,2 19.32,2C20.1,2 20.7,2.2 21.1,2.61C21.5,3 21.72,3.54 21.72,4.18C21.71,4.74 21.53,5.26 21.18,5.73C20.84,6.21 20.42,6.66 19.91,7.09L19.27,7.61V7.63H21.85V9Z", fp = "M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z", mp = "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z", gp = "M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z", hp = "M18 15V18H15V20H18V23H20V20H23V18H20V15H18M13.3 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V13.3C20.4 13.1 19.7 13 19 13C17.9 13 16.8 13.3 15.9 13.9L14.5 12L11 16.5L8.5 13.5L5 18H13.1C13 18.3 13 18.7 13 19C13 19.7 13.1 20.4 13.3 21Z", bp = "M22 13H14V11H22V13M22 7H14V9H22V7M14 17H22V15H14V17M12 9V15C12 16.1 11.1 17 10 17H4C2.9 17 2 16.1 2 15V9C2 7.9 2.9 7 4 7H10C11.1 7 12 7.9 12 9M10.5 15L8.3 12L6.5 14.3L5.3 12.8L3.5 15H10.5Z", vp = "M2,5.27L3.28,4L20,20.72L18.73,22L13.9,17.17L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L12.5,15.76L10.88,14.15C10.87,14.39 10.77,14.64 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C8.12,13.77 7.63,12.37 7.72,11L2,5.27M12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.79,8.97L9.38,7.55L12.71,4.22M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.2,10.54 16.61,12.5 16.06,14.23L14.28,12.46C14.23,11.78 13.94,11.11 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z", ai = "M10.6 13.4A1 1 0 0 1 9.2 14.8A4.8 4.8 0 0 1 9.2 7.8L12.7 4.2A5.1 5.1 0 0 1 19.8 4.2A5.1 5.1 0 0 1 19.8 11.3L18.3 12.8A6.4 6.4 0 0 0 17.9 10.4L18.4 9.9A3.2 3.2 0 0 0 18.4 5.6A3.2 3.2 0 0 0 14.1 5.6L10.6 9.2A2.9 2.9 0 0 0 10.6 13.4M23 18V20H20V23H18V20H15V18H18V15H20V18M16.2 13.7A4.8 4.8 0 0 0 14.8 9.2A1 1 0 0 0 13.4 10.6A2.9 2.9 0 0 1 13.4 14.8L9.9 18.4A3.2 3.2 0 0 1 5.6 18.4A3.2 3.2 0 0 1 5.6 14.1L6.1 13.7A7.3 7.3 0 0 1 5.7 11.2L4.2 12.7A5.1 5.1 0 0 0 4.2 19.8A5.1 5.1 0 0 0 11.3 19.8L13.1 18A6 6 0 0 1 16.2 13.7Z", _p = "M19,13H5V11H19V13Z", Vp = "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z", yp = "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z", Ap = "M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z", Hp = "M9 7V17H15V15H11V7H9Z", wp = "M9 7C7.9 7 7 7.9 7 9V17H9V9H11V16H13V9H15V17H17V9C17 7.9 16.11 7 15 7H9Z", Tp = "M11 7C9.9 7 9 7.9 9 9V11C9 12.11 9.9 13 11 13H13V15H9V17H13C14.11 17 15 16.11 15 15V13C15 11.9 14.11 11 13 11H11V9H15V7H11Z", Lp = "M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z", kp = "M11,2A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H2V2H11M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M15,11H18V8H20V11H23V13H20V16H18V13H15V11Z", Mp = "M13,2A2,2 0 0,0 11,4V20A2,2 0 0,0 13,22H22V2H13M20,10V14H13V10H20M20,16V20H13V16H20M20,4V8H13V4H20M9,11H6V8H4V11H1V13H4V16H6V13H9V11Z", Cp = "M4,2H11A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M17.59,12L15,9.41L16.41,8L19,10.59L21.59,8L23,9.41L20.41,12L23,14.59L21.59,16L19,13.41L16.41,16L15,14.59L17.59,12Z", Sp = "M5,10H3V4H11V6H5V10M19,18H13V20H21V14H19V18M5,18V14H3V20H11V18H5M21,4H13V6H19V10H21V4M8,13V15L11,12L8,9V11H3V13H8M16,11V9L13,12L16,15V13H21V11H16Z", xp = "M18,14H20V17H23V19H20V22H18V19H15V17H18V14M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z", Ep = "M15.46,15.88L16.88,14.46L19,16.59L21.12,14.46L22.54,15.88L20.41,18L22.54,20.12L21.12,21.54L19,19.41L16.88,21.54L15.46,20.12L17.59,18L15.46,15.88M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z", $p = "M22,10A2,2 0 0,1 20,12H4A2,2 0 0,1 2,10V3H4V5H8V3H10V5H14V3H16V5H20V3H22V10M4,10H8V7H4V10M10,10H14V7H10V10M20,10V7H16V10H20M11,14H13V17H16V19H13V22H11V19H8V17H11V14Z", Op = "M22,14A2,2 0 0,0 20,12H4A2,2 0 0,0 2,14V21H4V19H8V21H10V19H14V21H16V19H20V21H22V14M4,14H8V17H4V14M10,14H14V17H10V14M20,14V17H16V14H20M11,10H13V7H16V5H13V2H11V5H8V7H11V10Z", Ip = "M9.41,13L12,15.59L14.59,13L16,14.41L13.41,17L16,19.59L14.59,21L12,18.41L9.41,21L8,19.59L10.59,17L8,14.41L9.41,13M22,9A2,2 0 0,1 20,11H4A2,2 0 0,1 2,9V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V9M4,9H8V6H4V9M10,9H14V6H10V9M16,9H20V6H16V9Z", Pp = "M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z", Fp = "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z", Bp = "M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5M14,13H11V16H9V13H6V11H9V8H11V11H14V13Z", Rp = "M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z";
const zp = {
  bold: D1,
  italic: ip,
  underline: fp,
  strike: up,
  color: Rp,
  highlight: U1,
  heading: ep,
  textAlign: ri,
  fontFamily: W1,
  fontSize: dp,
  subscript: cp,
  superscript: pp,
  bulletList: np,
  orderedList: ap,
  taskList: rp,
  indent: op,
  outdent: tp,
  link: ai,
  fileImagePlus: F1,
  image: hp,
  imageLabel: bp,
  video: Bp,
  table: Lp,
  blockquote: sp,
  horizontalRule: _p,
  code: I1,
  codeBlock: O1,
  clear: j1,
  undo: Fp,
  redo: Ap,
  markdownTheme: yp,
  fullscreen: mp,
  // heading
  h1: q1,
  h2: K1,
  h3: X1,
  h4: Y1,
  h5: Q1,
  h6: J1,
  p: lp,
  // textAlign
  left: R1,
  center: ri,
  right: z1,
  justify: B1,
  // no tollbar icon
  circle: E1,
  close: $1,
  fullscreenExit: gp,
  linkVariant: ai,
  linkVariantOff: vp,
  openInNew: Vp,
  formatFloatLeft: N1,
  formatFloatNone: Z1,
  formatFloatRight: G1,
  sizeS: Tp,
  sizeM: wp,
  sizeL: Hp,
  aspectRatio: S1,
  delete: P1,
  text: Pp,
  // table
  tablePlus: xp,
  tableRemove: Ep,
  tableColumnPlusAfter: kp,
  tableColumnPlusBefore: Mp,
  tableColumnRemove: Cp,
  tableRowPlusAfter: $p,
  tableRowPlusBefore: Op,
  tableRowRemove: Ip,
  tableMergeCells: Sp,
  check: x1
};
function j(e) {
  if (e)
    return `svg:${zp[e]}`;
}
const bn = {
  editor: {
    type: Object,
    required: !0
  },
  icon: {
    type: String,
    default: void 0
  },
  rawIcon: {
    type: String,
    default: void 0
  },
  tooltip: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String,
    default: void 0
  },
  action: {
    type: Function,
    default: void 0
  },
  isActive: {
    type: Function,
    default: void 0
  },
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, R = {
  editor: {
    type: Object,
    required: !0
  },
  t: {
    type: Function,
    required: !0
  },
  isDisabled: {
    type: Function,
    default: void 0
  }
}, M = /* @__PURE__ */ L({
  __name: "index",
  props: bn,
  setup(e) {
    const t = e, o = gi("disableToolbar", O(!1));
    return (i, r) => {
      var l;
      const n = ye, s = Ln, a = tt;
      return h(), H(a, {
        density: "comfortable",
        size: "small",
        disabled: m(o) || i.disabled,
        color: i.color,
        icon: "",
        class: de(["rounded me-1 ms-0", [
          t.class,
          {
            "v-btn--active": (l = i.isActive) == null ? void 0 : l.call(i)
          }
        ]]),
        onClick: i.action
      }, {
        default: v(() => [
          b(n, {
            icon: t.rawIcon || m(j)(t.icon)
          }, null, 8, ["icon"]),
          b(s, {
            eager: !1,
            activator: "parent",
            location: "top",
            text: t.tooltip
          }, null, 8, ["text"]),
          Y(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "color", "class", "onClick"]);
    };
  }
}), Dp = /* @__PURE__ */ L({
  __name: "BlockquoteActionButton",
  props: R,
  setup(e) {
    const t = e, o = C1({
      editor: t.editor,
      t: t.t,
      isDisabled: t.isDisabled
    });
    return (i, r) => (h(), H(M, ve({
      editor: t.editor
    }, { ...m(o), tootip: m(o).title }), null, 16, ["editor"]));
  }
}), jp = /* @__PURE__ */ L({
  __name: "BoldActionButton",
  props: R,
  setup(e) {
    return (t, o) => (h(), H(M, {
      editor: t.editor,
      action: () => t.editor.chain().focus().toggleBold().run(),
      "is-active": () => t.editor.isActive("bold") || !1,
      disabled: !t.editor.can().toggleBold(),
      tooltip: t.t("editor.bold.tooltip"),
      icon: "bold"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), Up = /* @__PURE__ */ L({
  __name: "BulletListActionButton",
  props: R,
  setup(e) {
    return (t, o) => (h(), H(M, {
      editor: t.editor,
      action: () => t.editor.chain().focus().toggleBulletList().run(),
      "is-active": () => t.editor.isActive("bulletList") || !1,
      disabled: !t.editor.can().toggleBulletList(),
      tooltip: t.t("editor.bulletlist.tooltip"),
      icon: "bulletList"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), Np = /* @__PURE__ */ L({
  __name: "ClearActionButton",
  props: R,
  setup(e) {
    return (t, o) => (h(), H(M, {
      editor: t.editor,
      action: () => t.editor.chain().focus().clearNodes().unsetAllMarks().run(),
      disabled: !t.editor.can().chain().focus().clearNodes().unsetAllMarks().run(),
      tooltip: t.t("editor.clear.tooltip"),
      icon: "clear"
    }, null, 8, ["editor", "action", "disabled", "tooltip"]));
  }
}), Zp = /* @__PURE__ */ L({
  __name: "CodeActionButton",
  props: R,
  setup(e) {
    return (t, o) => (h(), H(M, {
      editor: t.editor,
      action: () => t.editor.chain().focus().toggleCode().run(),
      "is-active": () => t.editor.isActive("code") || !1,
      disabled: !t.editor.can().toggleCode(),
      tooltip: t.t("editor.code.tooltip"),
      icon: "code"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), Gp = (e) => {
  var t;
  return {
    action: () => e.editor.chain().focus().toggleCodeBlock().run(),
    isActive: () => e.editor.isActive("codeBlock") || !1,
    disabled: ((t = e.isDisabled) == null ? void 0 : t.call(e, e.editor)) || !e.editor.can().toggleCodeBlock(),
    title: e.t("editor.codeblock.tooltip"),
    icon: "codeBlock"
  };
}, Wp = /* @__PURE__ */ L({
  __name: "CodeBlockActionButton",
  props: R,
  setup(e) {
    const t = e, o = Gp(t);
    return (i, r) => (h(), H(M, ve({
      editor: t.editor
    }, { ...m(o), tootip: m(o).title }), null, 16, ["editor"]));
  }
}), vn = /* @__PURE__ */ L({
  __name: "ColorPicker",
  props: {
    modelValue: { default: "" },
    nudgeLeft: { default: 0 },
    nudgeTop: { default: 0 },
    more: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const o = e, i = t, r = O(""), n = O(!1);
    ue(n, (a) => {
      r.value = o.modelValue;
    });
    function s(a) {
      i("update:modelValue", a), i("change", a), r.value = a, n.value = !1;
    }
    return (a, l) => {
      const d = ye, u = tt, c = Fe, p = kn, f = Yt, g = yt;
      return h(), H(g, {
        modelValue: n.value,
        "onUpdate:modelValue": l[2] || (l[2] = (_) => n.value = _),
        "nudge-left": e.nudgeLeft || 255,
        "nudge-top": e.nudgeTop || 42,
        "close-on-content-click": !1,
        transition: "scale-transition",
        origin: e.nudgeLeft ? "top left" : "top right",
        activator: "parent"
      }, {
        default: v(() => [
          b(f, null, {
            default: v(() => [
              b(p, {
                class: "d-flex flex-wrap justify-between ma-1",
                fluid: "",
                "max-width": 230
              }, {
                default: v(() => [
                  (h(!0), $(U, null, G(m(zr), (_) => (h(), H(u, {
                    key: _,
                    flat: "",
                    icon: "",
                    density: "compact",
                    onClick: (y) => s(_)
                  }, {
                    default: v(() => [
                      b(d, {
                        icon: m(j)("circle"),
                        color: _
                      }, null, 8, ["icon", "color"])
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 128)),
                  b(c, {
                    modelValue: r.value,
                    "onUpdate:modelValue": l[0] || (l[0] = (_) => r.value = _),
                    class: "mt-2 mx-1",
                    "append-inner-icon": m(j)("check"),
                    density: "compact",
                    label: "HEX",
                    variant: "outlined",
                    flat: "",
                    "hide-details": "",
                    "single-line": "",
                    clearable: "",
                    "onClick:appendInner": l[1] || (l[1] = (_) => s(r.value))
                  }, eo({ _: 2 }, [
                    r.value ? {
                      name: "prepend-inner",
                      fn: v(() => [
                        b(d, {
                          class: "opacity-100",
                          icon: m(j)("circle"),
                          color: r.value
                        }, null, 8, ["icon", "color"])
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["modelValue", "append-inner-icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "nudge-left", "nudge-top", "origin"]);
    };
  }
}), qp = /* @__PURE__ */ L({
  __name: "ColorActionButton",
  props: R,
  setup(e) {
    const t = e, { state: o } = mo();
    function i(n) {
      typeof n == "string" && t.editor.chain().focus().setColor(n).run();
    }
    function r() {
      const { color: n } = t.editor.getAttributes("textStyle");
      return n && t.editor.isActive({ color: n }) || !1;
    }
    return Ae(() => {
      const { color: n } = t.editor.getAttributes("textStyle");
      o.color = n;
    }), (n, s) => (h(), H(M, {
      editor: n.editor,
      icon: "color",
      tooltip: n.t("editor.color.tooltip"),
      disabled: !n.editor.can().setColor(""),
      color: m(o).color,
      "is-active": r
    }, {
      default: v(() => [
        b(vn, {
          modelValue: m(o).color,
          "onUpdate:modelValue": s[0] || (s[0] = (a) => m(o).color = a),
          activator: "parent",
          "nudge-top": -4,
          "nudge-left": 8,
          onChange: i
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }, 8, ["editor", "tooltip", "disabled", "color"]));
  }
}), Kp = /* @__PURE__ */ L({
  __name: "FullscreenActionButton",
  props: {
    ...R,
    useWindow: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, { t: o } = ge(), { state: i, toggleFullscreen: r } = mo(), { isFullscreen: n, enter: s, exit: a } = hc();
    ue(n, (c) => {
      !c && i.isFullscreen && t.useWindow && u();
    });
    const l = w(() => {
      const c = i.isFullscreen ? "editor.fullscreen.tooltip.exit" : "editor.fullscreen.tooltip.fullscreen";
      return m(o)(c);
    }), d = w(() => i.isFullscreen ? "fullscreenExit" : "fullscreen");
    function u(c = !1) {
      r(), i.isFullscreen ? (document.documentElement.classList.add("overflow-y-hidden"), c && s()) : (document.documentElement.classList.remove("overflow-y-hidden"), c && a());
    }
    return (c, p) => (h(), H(M, {
      editor: c.editor,
      icon: d.value,
      tooltip: l.value,
      action: () => u(e.useWindow)
    }, null, 8, ["editor", "icon", "tooltip", "action"]));
  }
}), Xp = /* @__PURE__ */ L({
  __name: "HighlightActionButton",
  props: R,
  setup(e) {
    const t = e, { state: o } = mo();
    function i(r) {
      typeof r == "string" && t.editor.chain().focus().setHighlight({ color: r }).run();
    }
    return Ae(() => {
      const { color: r } = t.editor.getAttributes("highlight");
      o.highlight = r;
    }), (r, n) => (h(), H(M, {
      editor: r.editor,
      icon: "highlight",
      tooltip: r.t("editor.highlight.tooltip"),
      disabled: !r.editor.can().setHighlight(),
      color: m(o).highlight,
      "is-active": () => r.editor.isActive("highlight") || !1
    }, {
      default: v(() => [
        b(vn, {
          modelValue: m(o).highlight,
          "onUpdate:modelValue": n[0] || (n[0] = (s) => m(o).highlight = s),
          activator: "parent",
          "nudge-top": -4,
          "nudge-left": 8,
          onChange: i
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }, 8, ["editor", "tooltip", "disabled", "color", "is-active"]));
  }
}), Yp = /* @__PURE__ */ L({
  __name: "HistoryActionButton",
  props: R,
  setup(e) {
    const t = e, o = ["undo", "redo"];
    function i(r) {
      r === "redo" && t.editor.chain().focus().redo().run(), r === "undo" && t.editor.chain().focus().undo().run();
    }
    return (r, n) => (h(), $(U, null, G(o, (s) => b(M, {
      key: s,
      editor: r.editor,
      action: () => i(s),
      "is-active": () => !1,
      disabled: !r.editor.can()[s](),
      tooltip: r.t(`editor.${s}.tooltip`),
      icon: s
    }, null, 8, ["editor", "action", "disabled", "tooltip", "icon"])), 64));
  }
}), Qp = /* @__PURE__ */ L({
  __name: "HorizontalRuleActionButton",
  props: R,
  setup(e) {
    return (t, o) => (h(), H(M, {
      editor: t.editor,
      action: () => t.editor.chain().focus().setHorizontalRule().run(),
      "is-active": () => t.editor.isActive("horizontalRule") || !1,
      disabled: !t.editor.can().setHorizontalRule(),
      tooltip: t.t("editor.horizontalrule.tooltip"),
      icon: "horizontalRule"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), bo = /* @__PURE__ */ L({
  __name: "OriginalThemeProvider",
  setup(e) {
    const { global: { name: t } } = to();
    return (o, i) => {
      const r = si;
      return h(), H(r, { theme: m(t) }, {
        default: v(() => [
          Y(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["theme"]);
    };
  }
}), Jp = /* @__PURE__ */ L({
  __name: "ImageActionButton",
  props: {
    ...R,
    upload: {
      type: Function,
      default: void 0
    },
    imageTabs: {
      type: Array,
      default: () => []
    },
    hiddenTabs: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = e, o = O({});
    function i() {
      var s, a;
      const r = (s = t.editor) == null ? void 0 : s.view.state.selection, n = ((a = r == null ? void 0 : r.node) == null ? void 0 : a.attrs) ?? {};
      n != null && n.src && (o.value.src = n.src), n != null && n.alt && (o.value.alt = n.alt), n != null && n.title && (o.value.title = n.title), n != null && n.width && (o.value.width = n.width), n != null && n.height && (o.value.height = n.height), n != null && n.display && (o.value.display = n.display), n != null && n.captionDisabled && (o.value.captionDisabled = n.captionDisabled), o.value.lockAspectRatio = n.lockAspectRatio ?? !0;
    }
    return (r, n) => (h(), H(M, {
      editor: r.editor,
      action: i,
      "is-active": () => r.editor.isActive("image") || !1,
      disabled: !r.editor.can().setImage({}),
      tooltip: r.t("editor.image.tooltip"),
      icon: "image"
    }, {
      default: v(() => [
        b(bo, null, {
          default: v(() => [
            Y(r.$slots, "dialog", {
              props: { editor: r.editor, value: o.value, imageTabs: e.imageTabs, hiddenTabs: e.hiddenTabs, upload: e.upload }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["editor", "is-active", "disabled", "tooltip"]));
  }
}), ef = /* @__PURE__ */ L({
  __name: "IndentActionButton",
  props: R,
  setup(e) {
    const t = e, o = ["outdent", "indent"], i = {
      indent: "sinkListItem",
      outdent: "liftListItem"
    };
    function r(n) {
      n === "indent" && t.editor.chain().focus().sinkListItem("listItem").run(), n === "outdent" && t.editor.chain().focus().liftListItem("listItem").run();
    }
    return (n, s) => (h(), $(U, null, G(o, (a) => b(M, {
      key: a,
      editor: n.editor,
      action: () => r(a),
      "is-active": () => !1,
      disabled: !n.editor.can()[i[a]]("listItem"),
      tooltip: n.t(`editor.${a}.tooltip`),
      icon: a
    }, null, 8, ["editor", "action", "disabled", "tooltip", "icon"])), 64));
  }
}), tf = /* @__PURE__ */ L({
  __name: "ItalicActionButton",
  props: R,
  setup(e) {
    return (t, o) => (h(), H(M, {
      editor: t.editor,
      action: () => t.editor.chain().focus().toggleItalic().run(),
      "is-active": () => t.editor.isActive("italic") || !1,
      disabled: !t.editor.can().toggleItalic(),
      tooltip: t.t("editor.italic.tooltip"),
      icon: "italic"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), of = /* @__PURE__ */ L({
  __name: "LinkActionButton",
  props: R,
  setup(e) {
    const t = e, o = O({
      href: void 0,
      target: void 0
    });
    function i() {
      const { href: r, target: n } = t.editor.getAttributes("link");
      o.value = {
        href: r,
        target: n
      };
    }
    return (r, n) => (h(), H(M, {
      editor: r.editor,
      icon: "link",
      tooltip: r.t("editor.link.tooltip"),
      disabled: !r.editor.can().setLink({ href: "" }),
      "is-active": () => r.editor.isActive("link") || !1,
      action: i
    }, {
      default: v(() => [
        b(bo, null, {
          default: v(() => [
            Y(r.$slots, "dialog", {
              props: { editor: r.editor, value: o.value.href, ...o.value }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["editor", "tooltip", "disabled", "is-active"]));
  }
}), nf = /* @__PURE__ */ L({
  __name: "OrderedListActionButton",
  props: R,
  setup(e) {
    return (t, o) => (h(), H(M, {
      editor: t.editor,
      action: () => t.editor.chain().focus().toggleOrderedList().run(),
      "is-active": () => t.editor.isActive("orderedList") || !1,
      disabled: !t.editor.can().toggleOrderedList(),
      tooltip: t.t("editor.orderedlist.tooltip"),
      icon: "orderedList"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), rf = /* @__PURE__ */ L({
  __name: "StrikeActionButton",
  props: R,
  setup(e) {
    return (t, o) => (h(), H(M, {
      editor: t.editor,
      action: () => t.editor.chain().focus().toggleStrike().run(),
      "is-active": () => t.editor.isActive("strike") || !1,
      disabled: !t.editor.can().toggleStrike(),
      tooltip: t.t("editor.strike.tooltip"),
      icon: "strike"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), af = /* @__PURE__ */ L({
  __name: "SubscriptActionButton",
  props: {
    ...R,
    extension: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = e, o = w(() => {
      const n = [], s = t.extension.options.subscript, a = t.extension.options.superscript;
      return s !== !1 && n.push("subscript"), a !== !1 && n.push("superscript"), n;
    }), i = {
      subscript: "toggleSubscript",
      superscript: "toggleSuperscript"
    };
    function r(n) {
      n === "subscript" && t.editor.chain().focus().toggleSubscript().run(), n === "superscript" && t.editor.chain().focus().toggleSuperscript().run();
    }
    return (n, s) => (h(!0), $(U, null, G(o.value, (a) => (h(), H(M, {
      key: a,
      editor: n.editor,
      action: () => r(a),
      "is-active": () => n.editor.isActive(a) || !1,
      disabled: !n.editor.can()[i[a]](),
      tooltip: n.t(`editor.${a}.tooltip`),
      icon: a
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip", "icon"]))), 128));
  }
}), lf = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, sf = /CrOS/, df = /android|ipad|playbook|silk/i;
function li(e = {}) {
  let t = e.ua || typeof navigator < "u" && navigator.userAgent;
  return t && typeof t == "object" && t.headers && typeof t.headers["user-agent"] == "string" && (t = t.headers["user-agent"]), typeof t != "string" ? !1 : !!(lf.test(t) && !sf.test(t) || e.tablet && df.test(t) || e.tablet && e.featureDetect && navigator && navigator.maxTouchPoints > 1 && t.includes("Macintosh") && t.includes("Safari"));
}
const uf = ["onMouseover", "onMousedown"], cf = /* @__PURE__ */ L({
  __name: "CreateTablePopover",
  emits: ["create-table"],
  setup(e, { emit: t }) {
    const o = t, { t: i } = ge(), r = O(!1), n = O(!0), s = pt({
      rows: li() ? it : ot,
      cols: li() ? it : ot
    }), a = pt({
      rows: nt,
      cols: nt
    });
    function l(p, f) {
      const g = {
        boxSizing: "border-box",
        width: "16px",
        height: "16px",
        padding: "4px",
        border: "1px solid #dcdfe6",
        borderRadius: "2px"
      };
      return f <= a.cols && p <= a.rows && (g.backgroundColor = "#ecf5ff", g.borderColor = "var(--vp-theme-primary)"), g;
    }
    function d(p, f) {
      p === s.rows && (s.rows = Math.min(p + 1, it)), f === s.cols && (s.cols = Math.min(f + 1, it)), a.rows = p, a.cols = f;
    }
    function u(p, f) {
      o("create-table", { rows: p, cols: f, withHeaderRow: m(n) }), c();
    }
    function c() {
      r.value = !1, n.value = !0, s.rows = ot, s.cols = ot, a.rows = nt, a.cols = nt;
    }
    return (p, f) => {
      const g = di, _ = Qe, y = Mn, T = Ie, V = yt;
      return h(), H(V, {
        modelValue: r.value,
        "onUpdate:modelValue": f[1] || (f[1] = (S) => r.value = S),
        location: "end bottom",
        "open-on-click": "",
        "open-on-hover": "",
        "close-on-content-click": !1,
        activator: "parent"
      }, {
        default: v(() => [
          b(T, { density: "compact" }, {
            default: v(() => [
              b(_, { class: "pa-2 pb-0" }, {
                default: v(() => [
                  b(g, {
                    modelValue: n.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (S) => n.value = S),
                    density: "compact",
                    "hide-details": "",
                    label: m(i)("editor.table.menu.insert_table.with_header_row")
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }),
              b(_, { class: "d-flex flex-column flex-wrap justify-space-between pa-2" }, {
                default: v(() => [
                  (h(!0), $(U, null, G(s.rows, (S) => (h(), $("div", {
                    key: "r" + S,
                    class: "d-flex"
                  }, [
                    (h(!0), $(U, null, G(s.cols, (A) => (h(), $("div", {
                      key: "c" + A,
                      class: "pa-1",
                      onMouseover: (k) => d(S, A),
                      onMousedown: (k) => u(S, A)
                    }, [
                      re("div", {
                        style: be(l(S, A))
                      }, null, 4)
                    ], 40, uf))), 128))
                  ]))), 128))
                ]),
                _: 1
              }),
              b(y, { class: "pt-0 pb-2" }, {
                default: v(() => [
                  ce(N(a.rows) + " x " + N(a.cols), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), pf = /* @__PURE__ */ L({
  __name: "TableMenu",
  props: {
    editor: {},
    activator: { default: void 0 }
  },
  setup(e) {
    const t = e, { t: o } = ge(), i = O(!1), r = w(() => [
      {
        type: "item",
        key: "insert-table",
        title: m(o)("editor.table.menu.insert_table"),
        icon: j("tablePlus"),
        disabled: !t.editor.can().insertTable() || !1
      },
      {
        type: "divider"
      },
      {
        type: "item",
        key: "add-column-before",
        title: m(o)("editor.table.menu.add_column_before"),
        icon: j("tableColumnPlusBefore"),
        disabled: !t.editor.can().addColumnBefore() || !1
      },
      {
        type: "item",
        key: "add-column-after",
        title: m(o)("editor.table.menu.add_column_after"),
        icon: j("tableColumnPlusAfter"),
        disabled: !t.editor.can().addColumnAfter() || !1
      },
      {
        type: "item",
        key: "delete-column",
        title: m(o)("editor.table.menu.delete_column"),
        icon: j("tableColumnRemove"),
        disabled: !t.editor.can().deleteColumn() || !1
      },
      {
        type: "divider"
      },
      {
        type: "item",
        key: "add-row-before",
        title: m(o)("editor.table.menu.add_row_before"),
        icon: j("tableRowPlusBefore"),
        disabled: !t.editor.can().addRowBefore() || !1
      },
      {
        type: "item",
        key: "add-row-after",
        title: m(o)("editor.table.menu.add_row_after"),
        icon: j("tableRowPlusAfter"),
        disabled: !t.editor.can().addRowAfter() || !1
      },
      {
        type: "item",
        key: "delete-row",
        title: m(o)("editor.table.menu.delete_row"),
        icon: j("tableRowRemove"),
        disabled: !t.editor.can().deleteRow() || !1
      },
      {
        type: "divider"
      },
      {
        type: "item",
        key: "merge-or-split-cells",
        title: m(o)("editor.table.menu.merge_or_split_cells"),
        icon: j("tableMergeCells"),
        disabled: !t.editor.can().mergeOrSplit() || !1
      },
      {
        type: "divider"
      },
      {
        type: "item",
        key: "delete-table",
        title: m(o)("editor.table.menu.delete_table"),
        icon: j("tableRemove"),
        disabled: !t.editor.can().deleteTable() || !1
      }
    ]);
    function n(a, l) {
      var c;
      if (!a) return;
      const { editor: d } = t, u = {
        "insert-table": () => d.chain().focus().insertTable({ ...l }).run(),
        "add-column-before": () => d.chain().focus().addColumnBefore().run(),
        "add-column-after": () => d.chain().focus().addColumnAfter().run(),
        "delete-column": () => d.chain().focus().deleteColumn().run(),
        "add-row-before": () => d.chain().focus().addRowBefore().run(),
        "add-row-after": () => d.chain().focus().addRowAfter().run(),
        "delete-row": () => d.chain().focus().deleteRow().run(),
        "merge-or-split-cells": () => d.chain().focus().mergeOrSplit().run(),
        "delete-table": () => d.chain().focus().deleteTable().run()
      };
      (c = u[a]) == null || c.call(u);
    }
    function s(a) {
      n("insert-table", a), i.value = !1;
    }
    return (a, l) => {
      const d = ye, u = ci, c = ui, p = Je, f = Yt, g = yt;
      return h(), H(g, {
        modelValue: i.value,
        "onUpdate:modelValue": l[0] || (l[0] = (_) => i.value = _),
        activator: "parent"
      }, {
        default: v(() => [
          b(f, { density: "compact" }, {
            default: v(() => [
              (h(!0), $(U, null, G(r.value, (_, y) => (h(), $(U, null, [
                _.key === "insert-table" ? (h(), H(c, {
                  key: y,
                  disabled: _.disabled
                }, {
                  prepend: v(() => [
                    b(d, {
                      icon: _.icon
                    }, null, 8, ["icon"])
                  ]),
                  default: v(() => [
                    b(u, null, {
                      default: v(() => [
                        ce(N(_.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    _.key === "insert-table" ? (h(), H(cf, {
                      key: y,
                      onCreateTable: s
                    })) : q("", !0)
                  ]),
                  _: 2
                }, 1032, ["disabled"])) : _.type === "item" ? (h(), H(c, {
                  key: "item-" + y,
                  disabled: _.disabled,
                  onClick: (T) => n(_.key)
                }, {
                  prepend: v(() => [
                    b(d, {
                      icon: _.icon
                    }, null, 8, ["icon"])
                  ]),
                  default: v(() => [
                    b(u, null, {
                      default: v(() => [
                        ce(N(_.title), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])) : (h(), H(p, {
                  key: "divider-" + y
                }))
              ], 64))), 256))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), ff = /* @__PURE__ */ L({
  __name: "TableActionButton",
  props: R,
  setup(e) {
    return (t, o) => (h(), H(M, {
      editor: t.editor,
      "is-active": () => t.editor.isActive("table") || !1,
      disabled: !t.editor.can().insertTable(),
      tooltip: t.t("editor.table.tooltip"),
      icon: "table"
    }, {
      default: v(() => [
        b(pf, {
          editor: t.editor,
          activator: "parent"
        }, null, 8, ["editor"])
      ]),
      _: 1
    }, 8, ["editor", "is-active", "disabled", "tooltip"]));
  }
}), mf = /* @__PURE__ */ L({
  __name: "TaskListActionButton",
  props: R,
  setup(e) {
    return (t, o) => (h(), H(M, {
      editor: t.editor,
      action: () => t.editor.chain().focus().toggleTaskList().run(),
      "is-active": () => t.editor.isActive("taskList") || !1,
      disabled: !t.editor.can().toggleTaskList(),
      tooltip: t.t("editor.tasklist.tooltip"),
      icon: "taskList"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), gf = /* @__PURE__ */ L({
  __name: "UnderlineActionButton",
  props: R,
  setup(e) {
    return (t, o) => (h(), H(M, {
      editor: t.editor,
      action: () => t.editor.chain().focus().toggleUnderline().run(),
      "is-active": () => t.editor.isActive("underline") || !1,
      disabled: !t.editor.can().toggleUnderline(),
      tooltip: t.t("editor.underline.tooltip"),
      icon: "underline"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), hf = /* @__PURE__ */ L({
  __name: "VideoActionButton",
  props: R,
  setup(e) {
    const t = e, o = O(void 0);
    function i() {
      const { src: r } = t.editor.getAttributes("video");
      o.value = r;
    }
    return (r, n) => (h(), H(M, {
      editor: r.editor,
      action: i,
      "is-active": () => r.editor.isActive("video") || !1,
      disabled: !r.editor.can().setVideo({}),
      tooltip: r.t("editor.video.tooltip"),
      icon: "video"
    }, {
      default: v(() => [
        b(bo, null, {
          default: v(() => [
            Y(r.$slots, "dialog", {
              props: { editor: r.editor, value: o.value }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["editor", "is-active", "disabled", "tooltip"]));
  }
}), bf = (e) => {
  const t = ["float-left", "float-none", "float-right"], o = [
    "formatFloatLeft",
    "formatFloatNone",
    "formatFloatRight"
  ], i = ["left", "inline", "right"];
  return t.map((r, n) => ({
    type: r,
    component: M,
    componentProps: {
      tooltip: `editor.image.${r.replace("-", ".")}.tooltip`,
      icon: o[n],
      action: () => e.chain().focus().updateImage({ display: i[n] }).run(),
      isActive: () => e.isActive("image", { display: i[n] })
    }
  }));
}, vf = (e) => {
  const t = ["size-small", "size-medium", "size-large"], o = ["sizeS", "sizeM", "sizeL"];
  return t.map((i, r) => ({
    type: `image-${i}`,
    component: M,
    componentProps: {
      tooltip: `editor.${i.replace("-", ".")}.tooltip`,
      icon: o[r],
      action: () => e.chain().focus().updateImage({ width: ht[i], height: null }).run(),
      isActive: () => e.isActive("image", { width: ht[i] })
    }
  }));
}, _f = (e) => [
  ...bf(e),
  ...vf(e),
  {
    type: "image-aspect-ratio",
    component: M,
    componentProps: {
      tooltip: "editor.image.dialog.form.aspectRatio",
      icon: "aspectRatio",
      action: () => {
        const t = e.isActive("image", { lockAspectRatio: !0 });
        e.chain().focus().updateImage({
          lockAspectRatio: !t,
          height: t ? void 0 : null
        }).run();
      },
      isActive: () => e.isActive("image", { lockAspectRatio: !0 })
    }
  },
  {
    type: "image-caption",
    component: M,
    componentProps: {
      tooltip: "editor.image.dialog.form.caption",
      icon: "imageLabel",
      action: () => {
        const t = e.isActive("image", { captionDisabled: !0 });
        e.chain().focus().updateImage({
          captionDisabled: !t
        }).run();
      },
      isActive: () => !e.isActive("image", { captionDisabled: !0 })
    }
  }
], Vf = (e) => {
  const t = ["size-small", "size-medium", "size-large"], o = ["sizeS", "sizeM", "sizeL"];
  return t.map((i, r) => ({
    type: `video-${i}`,
    component: M,
    componentProps: {
      tooltip: `editor.${i.replace("-", ".")}.tooltip`,
      icon: o[r],
      action: () => e.chain().focus().updateVideo({ width: bt[i] }).run(),
      isActive: () => e.isActive("video", { width: bt[i] })
    }
  }));
}, yf = (e) => [
  {
    type: "table-add-column-before",
    component: M,
    componentProps: {
      tooltip: "editor.table.menu.add_column_before",
      icon: "tableColumnPlusBefore",
      action: () => e.chain().focus().addColumnBefore().run(),
      disabled: !e.can().addColumnBefore()
    }
  },
  {
    type: "table-add-column-after",
    component: M,
    componentProps: {
      tooltip: "editor.table.menu.add_column_after",
      icon: "tableColumnPlusAfter",
      action: () => e.chain().focus().addColumnAfter().run(),
      disabled: !e.can().addColumnAfter()
    }
  },
  {
    type: "table-delete-column",
    component: M,
    componentProps: {
      tooltip: "editor.table.menu.delete_column",
      icon: "tableColumnRemove",
      action: () => e.chain().focus().deleteColumn().run(),
      disabled: !e.can().deleteColumn()
    }
  },
  {
    type: "table-add-row-before",
    component: M,
    componentProps: {
      tooltip: "editor.table.menu.add_row_before",
      icon: "tableRowPlusBefore",
      action: () => e.chain().focus().addRowBefore().run(),
      disabled: !e.can().addRowBefore()
    }
  },
  {
    type: "table-add-row-after",
    component: M,
    componentProps: {
      tooltip: "editor.table.menu.add_row_after",
      icon: "tableRowPlusAfter",
      action: () => e.chain().focus().addRowAfter().run(),
      disabled: !e.can().addRowAfter()
    }
  },
  {
    type: "table-delete-row",
    component: M,
    componentProps: {
      tooltip: "editor.table.menu.delete_row",
      icon: "tableRowRemove",
      action: () => e.chain().focus().deleteRow().run(),
      disabled: !e.can().deleteRow()
    }
  },
  {
    type: "table-merge-or-split-cells",
    component: M,
    componentProps: {
      tooltip: "editor.table.menu.merge_or_split_cells",
      icon: "tableMergeCells",
      action: () => e.chain().focus().mergeOrSplit().run(),
      disabled: !e.can().mergeOrSplit()
    }
  },
  {
    type: "table-delete-table",
    component: M,
    componentProps: {
      tooltip: "editor.table.menu.delete_table",
      icon: "tableRemove",
      action: () => e.chain().focus().deleteTable().run(),
      disabled: !e.can().deleteTable()
    }
  }
], Af = (e) => [
  ..._f(e),
  ...Vf(e),
  ...yf(e),
  {
    type: "unlink",
    component: M,
    componentProps: {
      tooltip: "editor.link.unlink.tooltip",
      icon: "linkVariantOff",
      action: () => {
        const { href: t } = e.getAttributes("link");
        e.chain().extendMarkRange("link", { href: t }).unsetLink().focus().run();
      }
    }
  },
  {
    type: "link-open",
    component: M,
    componentProps: {
      tooltip: "editor.link.open",
      icon: "openInNew",
      action: () => {
        const { href: t } = e.getAttributes("link");
        Ne(t) && t && window.open(t, "_blank");
      }
    }
  },
  {
    type: "remove",
    component: M,
    componentProps: {
      tooltip: "editor.remove",
      icon: "delete",
      action: () => {
        const { state: t, dispatch: o } = e.view;
        br(t, o);
      }
    }
  }
], Hf = (e, t, { editor: o, extension: i, t: r }) => {
  const { extensions: n = [] } = o.extensionManager, s = {};
  for (const a of Object.keys(e)) {
    const l = e[a];
    if (!l) continue;
    const d = [];
    for (const p of l) {
      if (p === "divider") {
        const _ = d[d.length - 1];
        if ((_ == null ? void 0 : _.type) === "divider") continue;
        d.push({
          type: "divider",
          component: void 0,
          componentProps: {}
        });
        continue;
      }
      const f = t.find((_) => _.type === p);
      if (f) {
        d.push({
          ...f,
          componentProps: {
            ...f.componentProps,
            tooltip: f.componentProps.tooltip ? r(f.componentProps.tooltip) : void 0
          },
          componentSlots: f.componentSlots
        });
        continue;
      }
      const g = n.find((_) => _.name === p);
      if (g) {
        const { button: _ } = g.options, y = _({ editor: o, extension: g, t: r });
        d.push({
          type: p,
          component: y.component,
          componentProps: y.componentProps,
          componentSlots: y.componentSlots
        });
        continue;
      }
    }
    const u = d[d.length - 1], c = d[0];
    (u == null ? void 0 : u.type) === "divider" && d.pop(), (c == null ? void 0 : c.type) === "divider" && d.shift(), s[a] = d;
  }
  return s;
}, Cm = /* @__PURE__ */ He.create({
  name: "base-kit",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      bubble: {
        list: Ur,
        defaultBubbleList: Af,
        button: ({ editor: t, extension: o, t: i }) => {
          var a;
          const { list: r = {}, defaultBubbleList: n } = ((a = o.options) == null ? void 0 : a.bubble) ?? {}, s = (n == null ? void 0 : n(t)) ?? [];
          return Hf(r, s, { editor: t, extension: o, t: i });
        }
      }
    };
  },
  addExtensions() {
    const e = [];
    return this.options.placeholder !== !1 && e.push(
      cr.configure({
        placeholder: "",
        ...this.options.placeholder
      })
    ), this.options.focus !== !1 && e.push(
      pr.configure({
        className: "focus",
        ...this.options.focus
      })
    ), this.options.document !== !1 && e.push(tr.configure()), this.options.text !== !1 && e.push(dr.configure()), this.options.gapcursor !== !1 && e.push(fr.configure()), this.options.dropcursor !== !1 && e.push(mr.configure(this.options.dropcursor)), this.options.characterCount !== !1 && e.push(gr.configure(this.options.characterCount)), this.options.paragraph !== !1 && e.push(sr.configure(this.options.paragraph)), this.options.hardBreak !== !1 && e.push(or.configure(this.options.hardBreak)), this.options.listItem !== !1 && e.push(ir.configure(this.options.listItem)), this.options.textStyle !== !1 && e.push(ur.configure(this.options.textStyle)), e;
  }
}), wf = {
  ...Ju(bn, ["action", "isActive"]),
  maxHeight: {
    type: [String, Number],
    default: void 0
  },
  items: {
    type: Array,
    default: () => []
  }
}, Be = () => ({
  ...R,
  extension: {
    type: Object,
    required: !0
  }
}), Tf = {
  ...Be(),
  items: { type: Function, default: [] },
  headingLevels: { type: Array, default: void 0 }
}, Re = /* @__PURE__ */ L({
  __name: "index",
  props: /* @__PURE__ */ Dn({
    ...wf,
    showMenu: {
      type: Boolean,
      default: !1
    }
  }, {
    showMenu: { type: Boolean },
    showMenuModifiers: {}
  }),
  emits: ["update:showMenu"],
  setup(e) {
    const t = e, o = zn(e, "showMenu"), i = w(() => {
      const n = t.items.find((a) => a.isActive());
      return n && !n.default ? {
        ...n,
        rawIcon: n.rawIcon,
        icon: n.icon ? n.icon : t.icon
      } : {
        title: t.tooltip,
        icon: t.icon,
        isActive: () => !1
      };
    }), r = w(() => ({
      active: i,
      items: t.items
    }));
    return (n, s) => {
      const a = ye, l = ci, d = ui, u = Je, c = Yt, p = yt;
      return h(), $(U, null, [
        b(m(M), {
          class: de(t.class),
          style: be(t.style),
          editor: n.editor,
          icon: i.value.icon,
          "raw-icon": i.value.rawIcon,
          tooltip: i.value.title,
          disabled: n.disabled,
          color: n.color,
          "is-active": i.value.isActive
        }, {
          default: v(() => [
            b(p, {
              modelValue: o.value,
              "onUpdate:modelValue": s[0] || (s[0] = (f) => o.value = f),
              activator: "parent"
            }, {
              default: v(() => [
                b(c, {
                  density: "compact",
                  "max-height": n.maxHeight
                }, {
                  default: v(() => [
                    (h(!0), $(U, null, G(n.items, (f, g) => (h(), $(U, { key: g }, [
                      b(d, {
                        active: f.isActive(),
                        disabled: f.disabled,
                        onClick: f.action
                      }, {
                        prepend: v(() => [
                          f.rawIcon || f.icon ? (h(), H(a, {
                            key: 0,
                            icon: f.rawIcon ? f.rawIcon : m(j)(f.icon)
                          }, null, 8, ["icon"])) : q("", !0)
                        ]),
                        default: v(() => [
                          b(l, {
                            style: be(f.style)
                          }, {
                            default: v(() => [
                              ce(N(f.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["style"])
                        ]),
                        _: 2
                      }, 1032, ["active", "disabled", "onClick"]),
                      f.divider ? (h(), H(u, { key: 0 })) : q("", !0)
                    ], 64))), 128))
                  ]),
                  _: 1
                }, 8, ["max-height"])
              ]),
              _: 1
            }, 8, ["modelValue"]),
            Y(n.$slots, "btn-append", ft(mt(r.value)))
          ]),
          _: 3
        }, 8, ["class", "style", "editor", "icon", "raw-icon", "tooltip", "disabled", "color", "is-active"]),
        Y(n.$slots, "append", ft(mt(r.value)))
      ], 64);
    };
  }
}), Lf = { class: "blocktype-selector" }, kf = /* @__PURE__ */ L({
  __name: "BlockTypeSelectorActionMenuButton",
  props: Tf,
  setup(e) {
    const t = e, { editor: o } = t, i = w(() => {
      const { t: n } = t, { extensions: s = [] } = o.extensionManager ?? [], a = s.find((u) => u.name === "base-kit"), l = [];
      a && a.options.paragraph !== !1 && l.push({
        action: () => o.chain().focus().setParagraph().run(),
        isActive: () => o.isActive("paragraph") || !1,
        disabled: !o.can().setParagraph(),
        icon: "p",
        title: n("editor.paragraph.tooltip"),
        divider: !0
      });
      const d = s.find((u) => u.name === "heading");
      return d && (t.headingLevels || d.options.levels).forEach((u) => {
        l.push({
          action: () => o.chain().focus().toggleHeading({ level: u }).run(),
          isActive: () => o.isActive("heading", { level: u }) || !1,
          disabled: !o.can().toggleHeading({ level: u }),
          icon: `h${u}`,
          title: n(`editor.heading.h${u}.tooltip`)
        });
      }), t.items && t.items({ editor: o, t: n }).forEach((u) => {
        l.push(u);
      }), l;
    }), r = O(!1);
    return (n, s) => {
      var a;
      return h(), $("span", Lf, [
        b(Re, {
          "show-menu": r.value,
          "onUpdate:showMenu": s[1] || (s[1] = (l) => r.value = l),
          editor: m(o),
          class: "rounded-e-0 border",
          items: i.value,
          "max-height": 280,
          disabled: ((a = t.isDisabled) == null ? void 0 : a.call(t, m(o))) || i.value.filter((l) => l.disabled).length === n.items.length,
          tooltip: n.t("editor.heading.tooltip"),
          icon: "heading"
        }, {
          append: v(({ active: l }) => [
            re("span", {
              class: "active-title px-2 d-flex align-center rounded-e border border-s-0",
              onClick: s[0] || (s[0] = (d) => r.value = !r.value)
            }, N(l.value.title), 1)
          ]),
          _: 1
        }, 8, ["show-menu", "editor", "items", "disabled", "tooltip"])
      ]);
    };
  }
}), Mf = /* @__PURE__ */ L({
  __name: "FontFamilyActionMenuButton",
  props: Be(),
  setup(e) {
    const t = e, o = w(() => {
      var r;
      return (((r = t.extension.options) == null ? void 0 : r.fontFamilies) || []).map((n) => ({
        title: t.t(n.title),
        isActive: () => {
          const { fontFamily: s } = t.editor.getAttributes("textStyle");
          return n.value === Dt && s === void 0 ? !0 : t.editor.isActive({ fontFamily: n.value }) || !1;
        },
        action: () => {
          if (n.value === Dt) {
            t.editor.chain().focus().unsetFontFamily().run();
            return;
          }
          t.editor.chain().focus().setFontFamily(n.value).run();
        },
        style: { fontFamily: n.value },
        divider: n.divider ?? !1,
        default: n.default ?? !1
      }));
    });
    return (i, r) => (h(), H(Re, {
      editor: i.editor,
      items: o.value,
      "max-height": 280,
      disabled: !t.editor.can().setFontFamily(""),
      tooltip: i.t("editor.fontFamily.tooltip"),
      icon: "fontFamily"
    }, null, 8, ["editor", "items", "disabled", "tooltip"]));
  }
}), Cf = /* @__PURE__ */ L({
  __name: "FontSizeActionMenuButton",
  props: Be(),
  setup(e) {
    const t = e, o = w(() => {
      var r;
      const i = ((r = t.extension.options) == null ? void 0 : r.fontSizes) || [];
      return [Me, ...i].map((n) => ({
        title: n === Me ? t.t("editor.default") : String(n),
        isActive: () => {
          const { fontSize: s } = t.editor.getAttributes("textStyle");
          return n === Me && s === void 0 ? !0 : t.editor.isActive({ fontSize: String(n) }) || !1;
        },
        action: () => {
          if (n === Me) {
            t.editor.chain().focus().unsetFontSize().run();
            return;
          }
          t.editor.chain().focus().setFontSize(String(n)).run();
        },
        divider: n === Me,
        default: n === Me
      }));
    });
    return (i, r) => (h(), H(Re, {
      editor: i.editor,
      items: o.value,
      "max-height": 280,
      disabled: !t.editor.can().setFontSize(""),
      tooltip: i.t("editor.fontSize.tooltip"),
      icon: "fontSize"
    }, null, 8, ["editor", "items", "disabled", "tooltip"]));
  }
}), Sf = /* @__PURE__ */ L({
  __name: "HeadingActionMenuButton",
  props: Be(),
  setup(e) {
    const t = e, o = w(() => {
      var a;
      const { extensions: i = [] } = t.editor.extensionManager ?? [], r = ((a = t.extension.options) == null ? void 0 : a.levels) || [], n = i.find((l) => l.name === "base-kit"), s = r.map((l) => ({
        action: () => t.editor.chain().focus().toggleHeading({ level: l }).run(),
        isActive: () => t.editor.isActive("heading", { level: l }) || !1,
        disabled: !t.editor.can().toggleHeading({ level: l }),
        icon: `h${l}`,
        title: t.t(`editor.heading.h${l}.tooltip`)
      }));
      return n && n.options.paragraph !== !1 && s.unshift({
        action: () => t.editor.chain().focus().setParagraph().run(),
        isActive: () => t.editor.isActive("paragraph") || !1,
        disabled: !t.editor.can().setParagraph(),
        icon: "p",
        title: t.t("editor.paragraph.tooltip"),
        divider: !0
      }), s;
    });
    return (i, r) => (h(), H(Re, {
      editor: i.editor,
      items: o.value,
      "max-height": 280,
      disabled: o.value.filter((n) => n.disabled).length === o.value.length,
      tooltip: i.t("editor.heading.tooltip"),
      icon: "heading"
    }, null, 8, ["editor", "items", "disabled", "tooltip"]));
  }
}), xf = /* @__PURE__ */ L({
  __name: "MarkdownThemeActionMenuButton",
  props: Be(),
  setup(e) {
    const t = e, { state: o } = Ht(), i = w(() => [..._i, ...t.extension.options.markdownThemes].map((n) => ({
      title: t.t(n.title),
      isActive: () => o.defaultMarkdownTheme === n.value,
      action: () => {
        o.defaultMarkdownTheme = n.value;
      },
      divider: n.divider ?? !1,
      default: n.default ?? !1
    })));
    return (r, n) => (h(), H(Re, {
      editor: r.editor,
      items: i.value,
      "max-height": 280,
      disabled: !1,
      tooltip: r.t("editor.markdownTheme.tooltip"),
      icon: "markdownTheme"
    }, null, 8, ["editor", "items", "tooltip"]));
  }
}), Ef = /* @__PURE__ */ L({
  __name: "TextAlignActionMenuButton",
  props: Be(),
  setup(e) {
    const t = e, o = w(() => {
      var r;
      return (((r = t.extension.options) == null ? void 0 : r.alignments) || []).map((n) => ({
        title: t.t(`editor.textalign.${n}.tooltip`),
        icon: n,
        isActive: () => t.editor.isActive({ textAlign: n }) || !1,
        action: () => t.editor.chain().focus().setTextAlign(n).run(),
        disabled: !t.editor.can().setTextAlign(n)
      }));
    });
    return (i, r) => (h(), H(Re, {
      editor: i.editor,
      items: o.value,
      "max-height": 280,
      disabled: o.value.filter((n) => n.disabled).length === o.value.length,
      tooltip: i.t("editor.textalign.tooltip"),
      icon: "center"
    }, null, 8, ["editor", "items", "disabled", "tooltip"]));
  }
}), Sm = He.create({
  addOptions() {
    return {
      button: ({ editor: e, extension: t, t: o }) => ({
        component: kf,
        componentProps: {
          isDisabled: t.options.isDisabled,
          headingLevels: t.options.headingLevels,
          items: t.options.items,
          editor: e,
          extension: t,
          t: o
        }
      })
    };
  }
}), xm = /* @__PURE__ */ vr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "blockquote"
      },
      button: ({ editor: t, t: o }) => ({
        component: Dp,
        componentProps: {
          editor: t,
          t: o
        }
      })
    };
  }
}), Em = /* @__PURE__ */ _r.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: o }) => ({
        component: jp,
        componentProps: {
          editor: t,
          t: o
        }
      })
    };
  }
}), $m = /* @__PURE__ */ nr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: o }) => ({
        component: Up,
        componentProps: {
          editor: t,
          t: o
        }
      })
    };
  }
}), Om = /* @__PURE__ */ vi.create({
  name: "clear",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: o }) => ({
        component: Np,
        componentProps: {
          editor: t,
          t: o
        }
      })
    };
  }
}), Im = /* @__PURE__ */ Vr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: o }) => ({
        component: Zp,
        componentProps: {
          editor: t,
          t: o
        }
      })
    };
  }
}), Pm = /* @__PURE__ */ yr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: o }) => ({
        component: Wp,
        componentProps: {
          editor: t,
          t: o
        }
      })
    };
  }
}), Fm = /* @__PURE__ */ Ar.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: o }) => ({
        component: qp,
        componentProps: {
          editor: t,
          t: o
        }
      })
    };
  }
}), Bm = /* @__PURE__ */ Hr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      fontFamilies: Dr,
      button: ({ editor: t, extension: o, t: i }) => ({
        component: Mf,
        componentProps: {
          editor: t,
          extension: o,
          t: i
        }
      })
    };
  }
}), Rm = /* @__PURE__ */ He.create({
  name: "fontSize",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["textStyle"],
      fontSizes: [...jr],
      button: ({ editor: t, extension: o, t: i }) => ({
        component: Cf,
        componentProps: {
          editor: t,
          extension: o,
          t: i
        }
      })
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (e) => {
              const o = (e.style.fontSize || "").match(/^(\d+(\.\d+)?)(px|em|rem|%)?$/);
              return o ? o[0] : "";
            },
            renderHTML: (e) => e.fontSize ? {
              style: `font-size: ${Ze(e.fontSize)}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (e) => ({ chain: t }) => t().setMark("textStyle", { fontSize: e }).run(),
      unsetFontSize: () => ({ chain: e }) => e().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
    };
  }
}), zm = /* @__PURE__ */ He.create({
  name: "fullscreen",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      useWindow: !1,
      button: ({ editor: t, extension: o, t: i }) => ({
        component: Kp,
        componentProps: {
          editor: t,
          t: i,
          useWindow: o.options.useWindow ?? !1
        }
      })
    };
  }
}), Dm = /* @__PURE__ */ wr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      levels: [1, 2, 3, 4, 5, 6],
      button: ({ editor: t, extension: o, t: i }) => ({
        component: Sf,
        componentProps: {
          editor: t,
          extension: o,
          t: i
        }
      })
    };
  }
}), jm = /* @__PURE__ */ Tr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      multicolor: !0,
      button: ({ editor: t, t: o }) => ({
        component: Xp,
        componentProps: {
          editor: t,
          t: o
        }
      })
    };
  }
}), Um = /* @__PURE__ */ hr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      depth: 10,
      button: ({ editor: t, t: o }) => ({
        component: Yp,
        componentProps: {
          editor: t,
          t: o
        }
      })
    };
  }
}), Nm = /* @__PURE__ */ Lr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: o }) => ({
        component: Qp,
        componentProps: {
          editor: t,
          t: o
        }
      })
    };
  }
}), _n = /* @__PURE__ */ L({
  __name: "ImageProperties",
  props: {
    modelValue: { default: () => ({}) },
    t: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, i = t, r = w({
      get: () => o.modelValue,
      set: (n) => i("update:modelValue", n)
    });
    return (n, s) => {
      const a = Fe, l = di;
      return h(), $(U, null, [
        b(a, {
          modelValue: r.value.alt,
          "onUpdate:modelValue": s[0] || (s[0] = (d) => r.value.alt = d),
          label: e.t("editor.image.dialog.form.alt"),
          "prepend-icon": m(j)("text")
        }, null, 8, ["modelValue", "label", "prepend-icon"]),
        b(l, {
          modelValue: r.value.lockAspectRatio,
          "onUpdate:modelValue": s[1] || (s[1] = (d) => r.value.lockAspectRatio = d),
          label: e.t("editor.image.dialog.form.aspectRatio"),
          "hide-details": ""
        }, null, 8, ["modelValue", "label"]),
        b(l, {
          modelValue: r.value.captionDisabled,
          "onUpdate:modelValue": s[2] || (s[2] = (d) => r.value.captionDisabled = d),
          label: e.t("editor.image.dialog.form.captionDisabled"),
          "hide-details": ""
        }, null, 8, ["modelValue", "label"])
      ], 64);
    };
  }
}), $f = /* @__PURE__ */ L({
  __name: "ImageUpload",
  props: {
    modelValue: { default: () => ({}) },
    upload: { type: Function, default: void 0 },
    t: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, i = t, r = O(!1), n = w({
      get: () => o.modelValue,
      set: (a) => i("update:modelValue", a)
    }), s = async (a) => {
      var d;
      const l = a instanceof File ? a : a[0];
      if (!l)
        throw new Error("No files to upload");
      try {
        r.value = !0;
        const u = await ((d = o.upload) == null ? void 0 : d.call(o, l));
        if (!u)
          throw new Error("No link received after upload");
        n.value = {
          ...m(n),
          src: u
        };
      } catch (u) {
        qt.error(`Failed to execute upload file: ${u}`);
      } finally {
        r.value = !1;
      }
    };
    return (a, l) => {
      const d = Cn, u = Fe, c = pi;
      return h(), H(c, { disabled: r.value }, {
        default: v(() => [
          b(d, {
            modelValue: n.value.file,
            "onUpdate:modelValue": [
              l[0] || (l[0] = (p) => n.value.file = p),
              s
            ],
            label: e.t("editor.image.dialog.form.file"),
            accept: "image/*",
            loading: r.value,
            "prepend-icon": m(j)("fileImagePlus"),
            "onClick:clear": l[1] || (l[1] = (p) => n.value.src = void 0)
          }, null, 8, ["modelValue", "label", "loading", "prepend-icon"]),
          b(u, {
            modelValue: n.value.src,
            "onUpdate:modelValue": l[2] || (l[2] = (p) => n.value.src = p),
            label: e.t("editor.image.dialog.form.link"),
            disabled: "",
            autofocus: "",
            "prepend-icon": m(j)("linkVariant")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          b(_n, {
            modelValue: n.value,
            "onUpdate:modelValue": l[3] || (l[3] = (p) => n.value = p),
            t: e.t
          }, null, 8, ["modelValue", "t"])
        ]),
        _: 1
      }, 8, ["disabled"]);
    };
  }
}), Of = /* @__PURE__ */ L({
  __name: "ImageUrl",
  props: {
    modelValue: { default: () => ({}) },
    t: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, i = t, r = w({
      get: () => o.modelValue,
      set: (n) => i("update:modelValue", n)
    });
    return (n, s) => {
      const a = Fe, l = pi;
      return h(), H(l, null, {
        default: v(() => [
          b(a, {
            modelValue: r.value.src,
            "onUpdate:modelValue": s[0] || (s[0] = (d) => r.value.src = d),
            label: e.t("editor.image.dialog.form.link"),
            autofocus: "",
            "prepend-icon": m(j)("linkVariant")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          b(_n, {
            modelValue: r.value,
            "onUpdate:modelValue": s[1] || (s[1] = (d) => r.value = d),
            t: e.t
          }, null, 8, ["modelValue", "t"])
        ]),
        _: 1
      });
    };
  }
}), If = { class: "headline" }, Pf = /* @__PURE__ */ L({
  __name: "ImageDialog",
  props: {
    value: { default: () => ({}) },
    editor: {},
    upload: { type: Function, default: void 0 },
    imageTabs: { default: () => [] },
    hiddenTabs: { default: () => [] },
    destroy: { type: Function, default: void 0 }
  },
  setup(e) {
    const t = e, { t: o } = ge(), i = O(!1), r = O(!1), n = O({}), s = w(() => [...[
      {
        name: m(o)("editor.image.dialog.tab.url"),
        type: "url",
        component: Of
      },
      {
        name: m(o)("editor.image.dialog.tab.upload"),
        type: "upload",
        component: $f
      }
    ].filter((p) => p.type ? !t.hiddenTabs.includes(p.type) : p), ...t.imageTabs]), a = w(() => {
      const { src: u } = m(n);
      return !(typeof u == "string" && u !== "");
    });
    async function l() {
      const { src: u, lockAspectRatio: c, height: p } = m(n);
      u && (t.editor.chain().focus().setImage({
        ...m(n),
        src: u,
        height: c ? void 0 : p
      }).run(), d());
    }
    function d() {
      i.value = !1, n.value = {}, setTimeout(() => {
        var u;
        return (u = t.destroy) == null ? void 0 : u.call(t);
      }, 300);
    }
    return ue(
      () => t.value,
      (u) => {
        n.value = {
          ...m(n),
          ...u
        };
      },
      { immediate: !0, deep: !0 }
    ), (u, c) => {
      const p = et, f = ye, g = tt, _ = Pe, y = xn, T = Sn, V = $n, S = En, A = Qe, k = Jt, C = Ie, F = Qt;
      return h(), H(F, {
        modelValue: i.value,
        "onUpdate:modelValue": c[3] || (c[3] = (E) => i.value = E),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": d
      }, {
        default: v(() => [
          b(C, null, {
            default: v(() => [
              b(_, {
                class: "px-6",
                density: "compact"
              }, {
                default: v(() => [
                  re("span", If, N(m(o)("editor.image.dialog.title")), 1),
                  b(p),
                  b(g, {
                    class: "mx-0",
                    icon: "",
                    onClick: d
                  }, {
                    default: v(() => [
                      b(f, {
                        icon: m(j)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              b(T, {
                modelValue: r.value,
                "onUpdate:modelValue": c[0] || (c[0] = (E) => r.value = E)
              }, {
                default: v(() => [
                  (h(!0), $(U, null, G(s.value, (E, D) => (h(), H(y, {
                    key: D,
                    value: D
                  }, {
                    default: v(() => [
                      ce(N(E.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue"]),
              b(A, null, {
                default: v(() => [
                  b(S, {
                    modelValue: r.value,
                    "onUpdate:modelValue": c[2] || (c[2] = (E) => r.value = E)
                  }, {
                    default: v(() => [
                      (h(!0), $(U, null, G(s.value, (E, D) => (h(), H(V, {
                        key: D,
                        value: D
                      }, {
                        default: v(() => [
                          (h(), H(We(E.component), {
                            modelValue: n.value,
                            "onUpdate:modelValue": c[1] || (c[1] = (ee) => n.value = ee),
                            upload: e.upload,
                            t: m(o)
                          }, null, 8, ["modelValue", "upload", "t"]))
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(k, null, {
                default: v(() => [
                  b(g, {
                    disabled: a.value,
                    onClick: l
                  }, {
                    default: v(() => [
                      ce(N(m(o)("editor.image.dialog.button.apply")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), Ff = ["src", "alt"], Bf = {
  key: 0,
  class: "image-resizer"
}, Rf = ["onMousedown"], zf = /* @__PURE__ */ L({
  __name: "ImageView",
  props: {
    ...Gn,
    selected: {
      type: Boolean,
      required: !0
    }
  },
  setup(e) {
    const t = e, o = t.editor, i = {
      TOP_LEFT: "tl",
      TOP_RIGHT: "tr",
      BOTTOM_LEFT: "bl",
      BOTTOM_RIGHT: "br"
    }, r = O({
      width: _o,
      height: _o
    }), n = O({
      width: 0,
      height: 0
    }), s = O([
      i.TOP_LEFT,
      i.TOP_RIGHT,
      i.BOTTOM_LEFT,
      i.BOTTOM_RIGHT
    ]), a = O(!1), l = O({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      dir: ""
    }), d = w(() => {
      const { src: x, alt: oe, width: Z, height: le } = t.node.attrs, _e = Gt(Z) ? `${Z}px` : Z, z = Gt(le) ? `${le}px` : le;
      return {
        src: x || void 0,
        alt: oe || void 0,
        style: {
          width: _e || void 0,
          height: z || void 0
        }
      };
    }), u = w(() => t.node.attrs.display || void 0), c = w(() => t.node.attrs.lockAspectRatio ?? !0), p = w(() => typeof m(u) == "string" ? ["image-view", `image-view--${m(u)}`] : ["image-view"]), f = O(void 0), g = w(() => {
      const {
        style: { width: x }
      } = m(d);
      return { width: x === "100%" ? x : void 0 };
    }), _ = w(() => t.node.attrs.captionDisabled || !1);
    function y(x) {
      n.value = {
        width: x.target.width,
        height: x.target.height
      };
    }
    function T() {
      const { editor: x, getPos: oe } = t, Z = oe();
      Z && x.commands.setNodeSelection(Z);
    }
    const V = O(null), S = Se(function() {
      const { editor: x } = t, { width: oe } = getComputedStyle(x.view.dom);
      r.value.width = Number.parseInt(oe, 10);
    }, Et);
    function A(x, oe) {
      x.preventDefault(), x.stopPropagation(), l.value.x = x.clientX, l.value.y = x.clientY;
      const Z = m(n).width, le = m(n).height, _e = Z / le;
      let z = Number(t.node.attrs.width), se = Number(t.node.attrs.height);
      const ie = m(r).width;
      z && !se ? (z = z > ie ? ie : z, se = Math.round(z / _e)) : se && !z ? (z = Math.round(se * _e), z = z > ie ? ie : z) : !z && !se ? (z = Z > ie ? ie : Z, se = Math.round(z / _e)) : z = z > ie ? ie : z, l.value.w = z, l.value.h = se, l.value.dir = oe, a.value = !0, F();
    }
    const k = Se(function(x) {
      if (x.preventDefault(), x.stopPropagation(), !m(a)) return;
      const { x: oe, y: Z, w: le, h: _e, dir: z } = m(l), se = (x.clientX - oe) * (/l/.test(z) ? -1 : 1), ie = (x.clientY - Z) * (/t/.test(z) ? -1 : 1), Vn = tc(le + se, vo, m(r).width), yn = m(c) ? null : Math.max(_e + ie, vo);
      t.updateAttributes({
        width: Vn,
        height: yn
      });
    }, Et);
    function C(x) {
      x.preventDefault(), x.stopPropagation(), m(a) && (a.value = !1, l.value = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }, E(), T());
    }
    function F() {
      document == null || document.addEventListener("mousemove", k, !0), document == null || document.addEventListener("mouseup", C, !0);
    }
    function E() {
      document == null || document.removeEventListener("mousemove", k, !0), document == null || document.removeEventListener("mouseup", C, !0);
    }
    const D = Se(function() {
      var x;
      f.value = `${(x = V.value) == null ? void 0 : x.offsetWidth}px`;
    }, Et), ee = new ResizeObserver(() => S()), te = new ResizeObserver(() => D());
    return Ae((x) => {
      m(ee).observe(t.editor.view.dom), V.value && m(te).observe(V.value), x(() => {
        m(ee).disconnect(), m(te).disconnect();
      });
    }), (x, oe) => (h(), H(m(Wn), {
      as: "span",
      class: de(p.value),
      style: be(g.value)
    }, {
      default: v(() => [
        re("div", {
          draggable: "true",
          "data-drag-handle": "",
          class: de([{
            "image-view__body--focused": e.selected,
            "image-view__body--resizing": a.value
          }, "image-view__body"]),
          style: be(g.value)
        }, [
          re("img", {
            ref_key: "imgEl",
            ref: V,
            src: d.value.src,
            alt: d.value.alt,
            style: be(d.value.style),
            class: "image-view__body__image",
            onLoad: y,
            onClick: T
          }, null, 44, Ff),
          m(o).view.editable ? jn((h(), $("div", Bf, [
            (h(!0), $(U, null, G(s.value, (Z) => (h(), $("span", {
              key: Z,
              class: de([`image-resizer__handler--${Z}`, "image-resizer__handler"]),
              onMousedown: (le) => A(le, Z)
            }, null, 42, Rf))), 128))
          ], 512)), [
            [Un, e.selected || a.value]
          ]) : q("", !0)
        ], 6),
        _.value ? q("", !0) : (h(), $("div", {
          key: 0,
          class: "caption",
          style: be({ width: f.value })
        }, [
          b(m(qn))
        ], 4))
      ]),
      _: 1
    }, 8, ["class", "style"]));
  }
}), Zm = /* @__PURE__ */ kr.extend({
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])',
        getAttrs(t) {
          var o, i, r;
          if ((o = t.parentElement) != null && o.classList.contains("image-figure_content")) {
            const n = t.parentElement;
            let s = n.getAttribute("data-display");
            s || (i = n.parentElement) != null && i.classList.contains("image-figure") && (s = (r = n.parentElement) == null ? void 0 : r.getAttribute("data-display")), s && t.setAttribute("data-display", s);
            const a = n.querySelector(".image-figure_caption");
            a && (t.innerHTML = a.innerHTML, n.removeChild(a));
          }
          return null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: e, node: t }) {
    const o = Xn(this.options.HTMLAttributes, e);
    if (t.attrs.captionDisabled || !t.content.size)
      return ["img", o];
    const i = { class: "image-figure" };
    return o["data-display"] && (i["data-display"] = o["data-display"], delete o["data-display"]), [
      "span",
      i,
      [
        "span",
        { class: "image-figure_content" },
        ["img", o],
        ["span", { class: "image-figure_caption" }, 0]
      ]
    ];
  },
  content() {
    return this.options.captionContent || "text*";
  },
  addAttributes() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      src: {
        default: null
      },
      alt: {
        default: null
      },
      lockAspectRatio: {
        default: !0
      },
      width: {
        default: this.options.width
      },
      height: {
        default: null
      },
      display: {
        default: this.options.display,
        renderHTML: ({ display: t }) => t ? {
          "data-display": t
        } : {},
        parseHTML: (t) => t.getAttribute("data-display") || "inline"
      },
      captionDisabled: {
        default: this.options.captionDisabled,
        renderHTML: ({ captionDisabled: t }) => t ? {
          "data-caption-disabled": t
        } : {},
        parseHTML: (t) => t.getAttribute("data-caption-disabled") === "true" || !1
      }
    };
  },
  addNodeView() {
    return Kn(zf);
  },
  addCommands() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      updateImage: (t) => ({ commands: o }) => o.updateAttributes(this.name, t)
    };
  },
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      upload: void 0,
      width: ht["size-large"],
      display: "inline",
      imageTabs: [],
      hiddenTabs: [],
      inline: !0,
      dialogComponent: () => Pf,
      button: ({ editor: t, extension: o, t: i }) => {
        const { upload: r, imageTabs: n, hiddenTabs: s, dialogComponent: a } = o.options;
        return {
          component: Jp,
          componentProps: {
            editor: t,
            t: i,
            upload: r,
            imageTabs: n,
            hiddenTabs: s
          },
          componentSlots: {
            dialog: a()
          }
        };
      }
    };
  }
}), Gm = /* @__PURE__ */ He.create({
  name: "indent",
  addOptions() {
    return {
      divider: !1,
      spacer: !1,
      button: ({ editor: e, t }) => ({
        component: ef,
        componentProps: {
          editor: e,
          t
        }
      })
    };
  }
}), Wm = /* @__PURE__ */ Mr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: o }) => ({
        component: tf,
        componentProps: {
          editor: t,
          t: o
        }
      })
    };
  }
}), Df = { class: "headline" }, jf = /* @__PURE__ */ L({
  __name: "LinkDialog",
  props: {
    value: { default: void 0 },
    target: { default: "_blank" },
    editor: {},
    destroy: { type: Function, default: void 0 }
  },
  setup(e) {
    const t = e, { t: o } = ge(), i = () => ({
      href: "",
      target: "_blank"
    }), r = O(i()), n = O(!1), s = w(() => {
      const { href: d, target: u } = r.value;
      return d ? t.value === d && t.target === u : !0;
    });
    function a() {
      const { href: d, target: u } = r.value;
      d && t.editor.chain().focus().extendMarkRange("link").setLink({ href: d, target: u }).run(), l();
    }
    function l() {
      n.value = !1, r.value = i(), setTimeout(() => {
        var d;
        return (d = t.destroy) == null ? void 0 : d.call(t);
      }, 300);
    }
    return ue(n, (d) => {
      d && (r.value = {
        href: t.value,
        target: t.target
      });
    }), (d, u) => {
      const c = et, p = ye, f = tt, g = Pe, _ = Fe, y = Qe, T = Jt, V = Ie, S = Qt;
      return h(), H(S, {
        modelValue: n.value,
        "onUpdate:modelValue": u[1] || (u[1] = (A) => n.value = A),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": l
      }, {
        default: v(() => [
          b(V, null, {
            default: v(() => [
              b(g, {
                class: "px-6",
                density: "compact"
              }, {
                default: v(() => [
                  re("span", Df, N(m(o)("editor.link.dialog.title")), 1),
                  b(c),
                  b(f, {
                    class: "mx-0",
                    icon: "",
                    onClick: l
                  }, {
                    default: v(() => [
                      b(p, {
                        icon: m(j)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              b(y, null, {
                default: v(() => [
                  b(_, {
                    modelValue: r.value.href,
                    "onUpdate:modelValue": u[0] || (u[0] = (A) => r.value.href = A),
                    label: m(o)("editor.link.dialog.link"),
                    autofocus: ""
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }),
              b(T, null, {
                default: v(() => [
                  b(f, {
                    disabled: s.value,
                    onClick: a
                  }, {
                    default: v(() => [
                      ce(N(m(o)("editor.link.dialog.button.apply")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), qm = /* @__PURE__ */ Cr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      openOnClick: !1,
      dialogComponent: () => jf,
      button: ({ editor: t, extension: o, t: i }) => {
        const { dialogComponent: r } = o.options;
        return {
          component: of,
          componentProps: {
            editor: t,
            t: i
          },
          componentSlots: {
            dialog: r()
          }
        };
      }
    };
  },
  addProseMirrorPlugins() {
    var e;
    return [
      ...((e = this.parent) == null ? void 0 : e.call(this)) || [],
      new Yn({
        props: {
          handleClick(t, o) {
            const { schema: i, doc: r, tr: n } = t.state, s = er(r.resolve(o), i.marks.link);
            if (!s) return !1;
            const a = r.resolve(s.from), l = r.resolve(s.to), d = n.setSelection(new bi(a, l));
            return t.dispatch(d), !0;
          }
        }
      })
    ];
  }
}), Km = /* @__PURE__ */ He.create({
  name: "markdownTheme",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      markdownThemes: _i,
      button: ({ editor: t, extension: o, t: i }) => ({
        component: xf,
        componentProps: {
          editor: t,
          extension: o,
          t: i
        }
      })
    };
  }
}), Xm = /* @__PURE__ */ rr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: o }) => ({
        component: nf,
        componentProps: {
          editor: t,
          t: o
        }
      })
    };
  }
}), Ym = /* @__PURE__ */ Sr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: o }) => ({
        component: rf,
        componentProps: {
          editor: t,
          t: o
        }
      })
    };
  }
}), Qm = /* @__PURE__ */ He.create({
  name: "subAndSuperScript",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, extension: o, t: i }) => ({
        component: af,
        componentProps: {
          editor: t,
          extension: o,
          t: i
        }
      })
    };
  },
  addExtensions() {
    const e = [];
    return this.options.subscript !== !1 && e.push(xr.configure(this.options.subscript)), this.options.superscript !== !1 && e.push(Er.configure(this.options.superscript)), e;
  }
}), Jm = /* @__PURE__ */ $r.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      resizable: !0,
      HTMLAttributes: {
        class: "table-wrapper"
      },
      button: ({ editor: t, t: o }) => ({
        component: ff,
        componentProps: {
          editor: t,
          t: o
        }
      })
    };
  },
  addExtensions() {
    return [
      Or.configure(this.options.tableRow),
      Ir.configure(this.options.tableHeader),
      Pr.configure(this.options.tableCell)
    ];
  }
}), eg = /* @__PURE__ */ ar.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "task-list"
      },
      taskItem: {
        HTMLAttributes: {
          class: "task-list-item"
        }
      },
      button: ({ editor: t, t: o }) => ({
        component: mf,
        componentProps: {
          editor: t,
          t: o
        }
      })
    };
  },
  addExtensions() {
    return [lr.configure(this.options.taskItem)];
  }
}), tg = /* @__PURE__ */ Fr.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["heading", "paragraph"],
      button: ({ editor: t, extension: o, t: i }) => ({
        component: Ef,
        componentProps: {
          editor: t,
          extension: o,
          t: i
        }
      })
    };
  }
}), og = /* @__PURE__ */ Br.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button: ({ editor: t, t: o }) => ({
        component: gf,
        componentProps: {
          editor: t,
          t: o
        }
      })
    };
  }
}), Uf = { class: "headline" }, Nf = /* @__PURE__ */ L({
  __name: "VideoDialog",
  props: {
    value: { default: void 0 },
    editor: {},
    destroy: { type: Function, default: void 0 }
  },
  setup(e) {
    const t = e, { t: o } = ge(), i = O(""), r = O(!1), n = w(() => t.value === i.value || !m(i));
    function s() {
      m(i) && t.editor.chain().focus().setVideo({ src: i.value }).run(), a();
    }
    function a() {
      r.value = !1, i.value = "", setTimeout(() => {
        var l;
        return (l = t.destroy) == null ? void 0 : l.call(t);
      }, 300);
    }
    return Ae(() => {
      t.value && (i.value = t.value);
    }), (l, d) => {
      const u = et, c = ye, p = tt, f = Pe, g = Fe, _ = Qe, y = Jt, T = Ie, V = Qt;
      return h(), H(V, {
        modelValue: r.value,
        "onUpdate:modelValue": d[1] || (d[1] = (S) => r.value = S),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": a
      }, {
        default: v(() => [
          b(T, null, {
            default: v(() => [
              b(f, {
                class: "px-6",
                density: "compact"
              }, {
                default: v(() => [
                  re("span", Uf, N(m(o)("editor.video.dialog.title")), 1),
                  b(u),
                  b(p, {
                    class: "mx-0",
                    icon: "",
                    onClick: a
                  }, {
                    default: v(() => [
                      b(c, {
                        icon: m(j)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              b(_, null, {
                default: v(() => [
                  b(g, {
                    modelValue: i.value,
                    "onUpdate:modelValue": d[0] || (d[0] = (S) => i.value = S),
                    label: m(o)("editor.video.dialog.link"),
                    "hide-details": "",
                    autofocus: ""
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }),
              b(y, null, {
                default: v(() => [
                  b(p, {
                    disabled: n.value,
                    onClick: s
                  }, {
                    default: v(() => [
                      ce(N(m(o)("editor.video.dialog.button.apply")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
function Zf(e) {
  return e = e.replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/"), e = e.replace("https://vimeo.com/", "https://player.vimeo.com/video/"), /^https?:\/\/www.bilibili.com\/video\/.*/i.test(e) && (e = e.replace(/\?.*$/i, "").replace("https://www.bilibili.com/video/", "https://player.bilibili.com/player.html?bvid=")), e.includes("drive.google.com") && (e = e.replace("/view", "/preview")), e;
}
const ig = /* @__PURE__ */ vi.create({
  name: "video",
  group: "block",
  atom: !0,
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null,
        renderHTML: ({ src: e }) => ({
          src: e ? Zf(e) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width: e }) => ({
          width: Ze(e)
        })
      },
      frameborder: {
        default: this.options.frameborder ? 1 : 0,
        parseHTML: () => this.options.frameborder ? 1 : 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-video] iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    const { width: t = "100%" } = e ?? {}, o = {
      ...e,
      width: "100%",
      height: "100%"
    }, i = `position: relative;overflow: hidden;display: flex;flex: 1;max-width: ${t};`, r = `flex: 1;padding-bottom: ${9 / 16 * 100}%;`, a = ["div", { style: i }, ["div", { style: r }], ["iframe", o]];
    return ["div", {
      ...this.options.HTMLAttributes,
      "data-video": ""
    }, a];
  },
  addCommands() {
    return {
      setVideo: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: e
      }),
      updateVideo: (e) => ({ commands: t }) => t.updateAttributes(this.name, e)
    };
  },
  addOptions() {
    return {
      divider: !1,
      spacer: !1,
      allowFullscreen: !0,
      frameborder: !1,
      width: bt["size-medium"],
      HTMLAttributes: {
        class: "iframe-wrapper",
        style: "display: flex;justify-content: center;"
      },
      dialogComponent: () => Nf,
      button: ({ editor: e, extension: t, t: o }) => {
        const { dialogComponent: i } = t.options;
        return {
          component: hf,
          componentProps: {
            editor: e,
            t: o
          },
          componentSlots: {
            dialog: i()
          }
        };
      }
    };
  }
}), ng = (e) => (o) => {
  const { lang: i, fallbackLang: r, markdownTheme: n, components: s = {}, extensions: a } = e || {};
  r && Ge.setFallbackLang(r), i && Ge.setLang(i), Object.keys(s).forEach((l) => o.component(l, s[l])), Nr({
    defaultLang: i,
    defaultFallbackLang: r,
    defaultMarkdownTheme: n,
    extensions: a
  });
};
export {
  M as ActionButton,
  Re as ActionMenuButton,
  Cm as BaseKit,
  Sm as BlockTypeSelector,
  kf as BlockTypeSelectorActionMenuButton,
  xm as Blockquote,
  Dp as BlockquoteActionButton,
  C1 as BlockquoteMenuItem,
  Em as Bold,
  jp as BoldActionButton,
  $m as BulletList,
  Up as BulletListActionButton,
  Om as Clear,
  Np as ClearActionButton,
  Im as Code,
  Zp as CodeActionButton,
  Pm as CodeBlock,
  Wp as CodeBlockActionButton,
  Gp as CodeBlockMenuItem,
  Fm as Color,
  qp as ColorActionButton,
  kc as DEFAULT_LOCALE_MESSAGE,
  Bm as FontFamily,
  Mf as FontFamilyActionMenuButton,
  Rm as FontSize,
  Cf as FontSizeActionMenuButton,
  zm as Fullscreen,
  Kp as FullscreenActionButton,
  Dm as Heading,
  Sf as HeadingActionMenuButton,
  jm as Highlight,
  Xp as HighlightActionButton,
  Um as History,
  Yp as HistoryActionButton,
  Nm as HorizontalRule,
  Qp as HorizontalRuleActionButton,
  Zm as Image,
  Jp as ImageActionButton,
  _n as ImageProperties,
  Gm as Indent,
  ef as IndentActionButton,
  Wm as Italic,
  tf as ItalicActionButton,
  qm as Link,
  of as LinkActionButton,
  Km as MarkdownTheme,
  xf as MarkdownThemeActionMenuButton,
  Xm as OrderedList,
  nf as OrderedListActionButton,
  Ym as Strike,
  rf as StrikeActionButton,
  Qm as SubAndSuperScript,
  af as SubscriptActionButton,
  Jm as Table,
  ff as TableActionButton,
  eg as TaskList,
  mf as TaskListActionButton,
  tg as TextAlign,
  Ef as TextAlignActionMenuButton,
  og as Underline,
  gf as UnderlineActionButton,
  ig as Video,
  hf as VideoActionButton,
  km as VuetifyTiptap,
  Mm as VuetifyViewer,
  bn as actionButtonProps,
  ng as createVuetifyProTipTap,
  Af as defaultBubbleList,
  R as extActionButtonProps,
  Ge as locale,
  Ht as useContext,
  ge as useLocale
};
