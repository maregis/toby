if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}


;(function(){
var f;
function r(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var aa = "closure_uid_" + (1E9 * Math.random() >>> 0), da = 0;
function ea(a) {
  return Array.prototype.join.call(arguments, "");
}
;function fa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ha(a, b) {
  null != a && this.append.apply(this, arguments);
}
f = ha.prototype;
f.Ha = "";
f.set = function(a) {
  this.Ha = "" + a;
};
f.append = function(a, b, c) {
  this.Ha += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ha += arguments[d];
    }
  }
  return this;
};
f.clear = function() {
  this.Ha = "";
};
f.toString = function() {
  return this.Ha;
};
if ("undefined" === typeof ia) {
  var ia = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var ja = null;
if ("undefined" === typeof ka) {
  var ka = null
}
function ma() {
  return new oa(null, 5, [pa, !0, ra, !0, sa, !1, ta, !1, va, null], null);
}
function v(a) {
  return null != a && !1 !== a;
}
function xa(a) {
  return a instanceof Array;
}
function x(a, b) {
  return a[r(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function y(a, b) {
  var c = null == b ? null : b.constructor, c = v(v(c) ? c.Bb : c) ? c.Ab : r(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function ya(a) {
  var b = a.Ab;
  return v(b) ? b : "" + B(a);
}
var za = "undefined" !== typeof Symbol && "function" === r(Symbol) ? Symbol.iterator : "@@iterator";
function D(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Aa = {}, Da = {}, Ea = function Ea(b) {
  if (b ? b.Y : b) {
    return b.Y(b);
  }
  var c;
  c = Ea[r(null == b ? null : b)];
  if (!c && (c = Ea._, !c)) {
    throw y("ICounted.-count", b);
  }
  return c.call(null, b);
}, Fa = {}, Ga = function Ga(b, c) {
  if (b ? b.M : b) {
    return b.M(b, c);
  }
  var d;
  d = Ga[r(null == b ? null : b)];
  if (!d && (d = Ga._, !d)) {
    throw y("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Ha = {}, E = function E() {
  switch(arguments.length) {
    case 2:
      return E.f(arguments[0], arguments[1]);
    case 3:
      return E.o(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
E.f = function(a, b) {
  if (a ? a.K : a) {
    return a.K(a, b);
  }
  var c;
  c = E[r(null == a ? null : a)];
  if (!c && (c = E._, !c)) {
    throw y("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
E.o = function(a, b, c) {
  if (a ? a.ea : a) {
    return a.ea(a, b, c);
  }
  var d;
  d = E[r(null == a ? null : a)];
  if (!d && (d = E._, !d)) {
    throw y("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
E.T = 3;
var Ia = {}, G = function G(b) {
  if (b ? b.W : b) {
    return b.W(b);
  }
  var c;
  c = G[r(null == b ? null : b)];
  if (!c && (c = G._, !c)) {
    throw y("ISeq.-first", b);
  }
  return c.call(null, b);
}, H = function H(b) {
  if (b ? b.ca : b) {
    return b.ca(b);
  }
  var c;
  c = H[r(null == b ? null : b)];
  if (!c && (c = H._, !c)) {
    throw y("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Ka = {}, La = {}, I = function I() {
  switch(arguments.length) {
    case 2:
      return I.f(arguments[0], arguments[1]);
    case 3:
      return I.o(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
I.f = function(a, b) {
  if (a ? a.O : a) {
    return a.O(a, b);
  }
  var c;
  c = I[r(null == a ? null : a)];
  if (!c && (c = I._, !c)) {
    throw y("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
I.o = function(a, b, c) {
  if (a ? a.H : a) {
    return a.H(a, b, c);
  }
  var d;
  d = I[r(null == a ? null : a)];
  if (!d && (d = I._, !d)) {
    throw y("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
I.T = 3;
var Ma = function Ma(b, c, d) {
  if (b ? b.Na : b) {
    return b.Na(b, c, d);
  }
  var e;
  e = Ma[r(null == b ? null : b)];
  if (!e && (e = Ma._, !e)) {
    throw y("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Na = {}, Oa = {}, Pa = function Pa(b) {
  if (b ? b.bb : b) {
    return b.bb();
  }
  var c;
  c = Pa[r(null == b ? null : b)];
  if (!c && (c = Pa._, !c)) {
    throw y("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, Ra = function Ra(b) {
  if (b ? b.cb : b) {
    return b.cb();
  }
  var c;
  c = Ra[r(null == b ? null : b)];
  if (!c && (c = Ra._, !c)) {
    throw y("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, Sa = {}, Ta = function Ta(b, c, d) {
  if (b ? b.eb : b) {
    return b.eb(b, c, d);
  }
  var e;
  e = Ta[r(null == b ? null : b)];
  if (!e && (e = Ta._, !e)) {
    throw y("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, Ua = function Ua(b) {
  if (b ? b.ob : b) {
    return b.state;
  }
  var c;
  c = Ua[r(null == b ? null : b)];
  if (!c && (c = Ua._, !c)) {
    throw y("IDeref.-deref", b);
  }
  return c.call(null, b);
}, Va = {}, Wa = function Wa(b) {
  if (b ? b.L : b) {
    return b.L(b);
  }
  var c;
  c = Wa[r(null == b ? null : b)];
  if (!c && (c = Wa._, !c)) {
    throw y("IMeta.-meta", b);
  }
  return c.call(null, b);
}, Xa = {}, Za = function Za(b, c) {
  if (b ? b.S : b) {
    return b.S(b, c);
  }
  var d;
  d = Za[r(null == b ? null : b)];
  if (!d && (d = Za._, !d)) {
    throw y("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, $a = {}, ab = function ab() {
  switch(arguments.length) {
    case 2:
      return ab.f(arguments[0], arguments[1]);
    case 3:
      return ab.o(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
ab.f = function(a, b) {
  if (a ? a.U : a) {
    return a.U(a, b);
  }
  var c;
  c = ab[r(null == a ? null : a)];
  if (!c && (c = ab._, !c)) {
    throw y("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
ab.o = function(a, b, c) {
  if (a ? a.V : a) {
    return a.V(a, b, c);
  }
  var d;
  d = ab[r(null == a ? null : a)];
  if (!d && (d = ab._, !d)) {
    throw y("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
ab.T = 3;
var bb = function bb(b, c) {
  if (b ? b.w : b) {
    return b.w(b, c);
  }
  var d;
  d = bb[r(null == b ? null : b)];
  if (!d && (d = bb._, !d)) {
    throw y("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, cb = function cb(b) {
  if (b ? b.G : b) {
    return b.G(b);
  }
  var c;
  c = cb[r(null == b ? null : b)];
  if (!c && (c = cb._, !c)) {
    throw y("IHash.-hash", b);
  }
  return c.call(null, b);
}, db = {}, eb = function eb(b) {
  if (b ? b.R : b) {
    return b.R(b);
  }
  var c;
  c = eb[r(null == b ? null : b)];
  if (!c && (c = eb._, !c)) {
    throw y("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, fb = {}, J = function J(b, c) {
  if (b ? b.jb : b) {
    return b.jb(0, c);
  }
  var d;
  d = J[r(null == b ? null : b)];
  if (!d && (d = J._, !d)) {
    throw y("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, gb = {}, hb = function hb(b, c, d) {
  if (b ? b.F : b) {
    return b.F(b, c, d);
  }
  var e;
  e = hb[r(null == b ? null : b)];
  if (!e && (e = hb._, !e)) {
    throw y("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, ib = function ib(b, c, d) {
  if (b ? b.ib : b) {
    return b.ib(0, c, d);
  }
  var e;
  e = ib[r(null == b ? null : b)];
  if (!e && (e = ib._, !e)) {
    throw y("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, jb = function jb(b) {
  if (b ? b.Ra : b) {
    return b.Ra(b);
  }
  var c;
  c = jb[r(null == b ? null : b)];
  if (!c && (c = jb._, !c)) {
    throw y("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, lb = function lb(b, c) {
  if (b ? b.Wa : b) {
    return b.Wa(b, c);
  }
  var d;
  d = lb[r(null == b ? null : b)];
  if (!d && (d = lb._, !d)) {
    throw y("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, mb = function mb(b) {
  if (b ? b.Xa : b) {
    return b.Xa(b);
  }
  var c;
  c = mb[r(null == b ? null : b)];
  if (!c && (c = mb._, !c)) {
    throw y("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, nb = function nb(b, c, d) {
  if (b ? b.Oa : b) {
    return b.Oa(b, c, d);
  }
  var e;
  e = nb[r(null == b ? null : b)];
  if (!e && (e = nb._, !e)) {
    throw y("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, ob = function ob(b, c, d) {
  if (b ? b.hb : b) {
    return b.hb(0, c, d);
  }
  var e;
  e = ob[r(null == b ? null : b)];
  if (!e && (e = ob._, !e)) {
    throw y("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, pb = function pb(b) {
  if (b ? b.gb : b) {
    return b.gb();
  }
  var c;
  c = pb[r(null == b ? null : b)];
  if (!c && (c = pb._, !c)) {
    throw y("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, qb = function qb(b) {
  if (b ? b.$a : b) {
    return b.$a(b);
  }
  var c;
  c = qb[r(null == b ? null : b)];
  if (!c && (c = qb._, !c)) {
    throw y("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, rb = function rb(b) {
  if (b ? b.ab : b) {
    return b.ab(b);
  }
  var c;
  c = rb[r(null == b ? null : b)];
  if (!c && (c = rb._, !c)) {
    throw y("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, sb = function sb(b) {
  if (b ? b.Za : b) {
    return b.Za(b);
  }
  var c;
  c = sb[r(null == b ? null : b)];
  if (!c && (c = sb._, !c)) {
    throw y("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, tb = function tb(b, c) {
  if (b ? b.zb : b) {
    return b.zb(b, c);
  }
  var d;
  d = tb[r(null == b ? null : b)];
  if (!d && (d = tb._, !d)) {
    throw y("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, ub = function ub(b) {
  if (b ? b.Ta : b) {
    return b.Ta(b);
  }
  var c;
  c = ub[r(null == b ? null : b)];
  if (!c && (c = ub._, !c)) {
    throw y("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function vb(a) {
  this.Cb = a;
  this.m = 1073741824;
  this.A = 0;
}
vb.prototype.jb = function(a, b) {
  return this.Cb.append(b);
};
function wb(a) {
  var b = new ha;
  a.F(null, new vb(b), ma());
  return "" + B(b);
}
var xb = "undefined" !== typeof Math.imul && 0 !== Math.imul(4294967295, 5) ? function(a, b) {
  return Math.imul(a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function yb(a) {
  a = xb(a | 0, -862048943);
  return xb(a << 15 | a >>> -15, 461845907);
}
function Ab(a, b) {
  var c = (a | 0) ^ (b | 0);
  return xb(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Bb(a, b) {
  var c = (a | 0) ^ b, c = xb(c ^ c >>> 16, -2048144789), c = xb(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Cb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Ab(c, yb(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ yb(a.charCodeAt(a.length - 1)) : b;
  return Bb(b, xb(2, a.length));
}
var Db = {}, Eb = 0;
function Fb(a) {
  255 < Eb && (Db = {}, Eb = 0);
  var b = Db[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = xb(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    Db[a] = b;
    Eb += 1;
  }
  return a = b;
}
function Gb(a) {
  a && (a.m & 4194304 || a.Hb) ? a = a.G(null) : "number" === typeof a ? a = Math.floor(a) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Fb(a), 0 !== a && (a = yb(a), a = Ab(0, a), a = Bb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : cb(a);
  return a;
}
function Hb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Ib(a, b, c, d, e) {
  this.Qa = a;
  this.name = b;
  this.Ga = c;
  this.Ka = d;
  this.da = e;
  this.m = 2154168321;
  this.A = 4096;
}
f = Ib.prototype;
f.toString = function() {
  return this.Ga;
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.w = function(a, b) {
  return b instanceof Ib ? this.Ga === b.Ga : !1;
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return I.o(c, this, null);
      case 3:
        return I.o(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.f = function(a, c) {
    return I.o(c, this, null);
  };
  a.o = function(a, c, d) {
    return I.o(c, this, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(D(b)));
};
f.j = function(a) {
  return I.o(a, this, null);
};
f.f = function(a, b) {
  return I.o(a, this, b);
};
f.L = function() {
  return this.da;
};
f.S = function(a, b) {
  return new Ib(this.Qa, this.name, this.Ga, this.Ka, b);
};
f.G = function() {
  var a = this.Ka;
  return null != a ? a : this.Ka = a = Hb(Cb(this.name), Fb(this.Qa));
};
f.F = function(a, b) {
  return J(b, this.Ga);
};
function K(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.m & 8388608 || a.Ib)) {
    return a.R(null);
  }
  if (xa(a) || "string" === typeof a) {
    return 0 === a.length ? null : new M(a, 0);
  }
  if (x(db, a)) {
    return eb(a);
  }
  throw Error([B(a), B(" is not ISeqable")].join(""));
}
function N(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.m & 64 || a.Va)) {
    return a.W(null);
  }
  a = K(a);
  return null == a ? null : G(a);
}
function Jb(a) {
  return null != a ? a && (a.m & 64 || a.Va) ? a.ca(null) : (a = K(a)) ? H(a) : Kb : Kb;
}
function O(a) {
  return null == a ? null : a && (a.m & 128 || a.Ua) ? a.ba(null) : K(Jb(a));
}
var P = function P() {
  switch(arguments.length) {
    case 1:
      return P.j(arguments[0]);
    case 2:
      return P.f(arguments[0], arguments[1]);
    default:
      var b = new M(Array.prototype.slice.call(arguments, 2), 0);
      return P.C(arguments[0], arguments[1], b);
  }
};
P.j = function() {
  return !0;
};
P.f = function(a, b) {
  return null == a ? null == b : a === b || bb(a, b);
};
P.C = function(a, b, c) {
  for (;;) {
    if (P.f(a, b)) {
      if (O(c)) {
        a = b, b = N(c), c = O(c);
      } else {
        return P.f(b, N(c));
      }
    } else {
      return !1;
    }
  }
};
P.J = function(a) {
  var b = N(a), c = O(a);
  a = N(c);
  c = O(c);
  return P.C(b, a, c);
};
P.T = 2;
function Lb(a) {
  this.s = a;
}
Lb.prototype.next = function() {
  if (null != this.s) {
    var a = N(this.s);
    this.s = O(this.s);
    return {value:a, done:!1};
  }
  return {value:null, done:!0};
};
function Q(a) {
  return new Lb(K(a));
}
function Mb(a, b) {
  var c = yb(a), c = Ab(0, c);
  return Bb(c, b);
}
function Nb(a) {
  var b = 0, c = 1;
  for (a = K(a);;) {
    if (null != a) {
      b += 1, c = xb(31, c) + Gb(N(a)) | 0, a = O(a);
    } else {
      return Mb(c, b);
    }
  }
}
var Ob = Mb(1, 0);
function Pb(a) {
  var b = 0, c = 0;
  for (a = K(a);;) {
    if (null != a) {
      b += 1, c = c + Gb(N(a)) | 0, a = O(a);
    } else {
      return Mb(c, b);
    }
  }
}
var Qb = Mb(0, 0);
Da["null"] = !0;
Ea["null"] = function() {
  return 0;
};
Date.prototype.w = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
bb.number = function(a, b) {
  return a === b;
};
Aa["function"] = !0;
Va["function"] = !0;
Wa["function"] = function() {
  return null;
};
cb._ = function(a) {
  return a[aa] || (a[aa] = ++da);
};
function Rb(a) {
  return Ua(a);
}
function Sb(a, b) {
  var c = Ea(a);
  if (0 === c) {
    return b.D ? b.D() : b.call(null);
  }
  for (var d = E.f(a, 0), e = 1;;) {
    if (e < c) {
      var g = E.f(a, e), d = b.f ? b.f(d, g) : b.call(null, d, g), e = e + 1
    } else {
      return d;
    }
  }
}
function Tb(a, b, c) {
  var d = Ea(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var g = E.f(a, c), e = b.f ? b.f(e, g) : b.call(null, e, g);
      c += 1;
    } else {
      return e;
    }
  }
}
function Ub(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.D ? b.D() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var g = a[e], d = b.f ? b.f(d, g) : b.call(null, d, g), e = e + 1
    } else {
      return d;
    }
  }
}
function Vb(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var g = a[c], e = b.f ? b.f(e, g) : b.call(null, e, g);
      c += 1;
    } else {
      return e;
    }
  }
}
function Wb(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var g = a[d];
      c = b.f ? b.f(c, g) : b.call(null, c, g);
      d += 1;
    } else {
      return c;
    }
  }
}
function Xb(a) {
  return a ? a.m & 2 || a.nb ? !0 : a.m ? !1 : x(Da, a) : x(Da, a);
}
function Zb(a, b) {
  this.c = a;
  this.i = b;
}
Zb.prototype.fb = function() {
  return this.i < this.c.length;
};
Zb.prototype.next = function() {
  var a = this.c[this.i];
  this.i += 1;
  return a;
};
function M(a, b) {
  this.c = a;
  this.i = b;
  this.m = 166199550;
  this.A = 8192;
}
f = M.prototype;
f.toString = function() {
  return wb(this);
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.K = function(a, b) {
  var c = b + this.i;
  return c < this.c.length ? this.c[c] : null;
};
f.ea = function(a, b, c) {
  a = b + this.i;
  return a < this.c.length ? this.c[a] : c;
};
f.Ta = function() {
  return new Zb(this.c, this.i);
};
f.ba = function() {
  return this.i + 1 < this.c.length ? new M(this.c, this.i + 1) : null;
};
f.Y = function() {
  var a = this.c.length - this.i;
  return 0 > a ? 0 : a;
};
f.G = function() {
  return Nb(this);
};
f.w = function(a, b) {
  return $b.f ? $b.f(this, b) : $b.call(null, this, b);
};
f.U = function(a, b) {
  return Wb(this.c, b, this.c[this.i], this.i + 1);
};
f.V = function(a, b, c) {
  return Wb(this.c, b, c, this.i);
};
f.W = function() {
  return this.c[this.i];
};
f.ca = function() {
  return this.i + 1 < this.c.length ? new M(this.c, this.i + 1) : Kb;
};
f.R = function() {
  return this.i < this.c.length ? this : null;
};
f.M = function(a, b) {
  return R.f ? R.f(b, this) : R.call(null, b, this);
};
M.prototype[za] = function() {
  return Q(this);
};
function ac(a, b) {
  return b < a.length ? new M(a, b) : null;
}
function bc() {
  switch(arguments.length) {
    case 1:
      return ac(arguments[0], 0);
    case 2:
      return ac(arguments[0], arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
bb._ = function(a, b) {
  return a === b;
};
var cc = function cc() {
  switch(arguments.length) {
    case 0:
      return cc.D();
    case 1:
      return cc.j(arguments[0]);
    case 2:
      return cc.f(arguments[0], arguments[1]);
    default:
      var b = new M(Array.prototype.slice.call(arguments, 2), 0);
      return cc.C(arguments[0], arguments[1], b);
  }
};
cc.D = function() {
  return dc;
};
cc.j = function(a) {
  return a;
};
cc.f = function(a, b) {
  return null != a ? Ga(a, b) : Ga(Kb, b);
};
cc.C = function(a, b, c) {
  for (;;) {
    if (v(c)) {
      a = cc.f(a, b), b = N(c), c = O(c);
    } else {
      return cc.f(a, b);
    }
  }
};
cc.J = function(a) {
  var b = N(a), c = O(a);
  a = N(c);
  c = O(c);
  return cc.C(b, a, c);
};
cc.T = 2;
function T(a) {
  if (null != a) {
    if (a && (a.m & 2 || a.nb)) {
      a = a.Y(null);
    } else {
      if (xa(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (x(Da, a)) {
            a = Ea(a);
          } else {
            a: {
              a = K(a);
              for (var b = 0;;) {
                if (Xb(a)) {
                  a = b + Ea(a);
                  break a;
                }
                a = O(a);
                b += 1;
              }
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
function ec(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return K(a) ? N(a) : c;
    }
    var d = a;
    if (d ? d.m & 16 || d.sb || (d.m ? 0 : x(Ha, d)) : x(Ha, d)) {
      return E.o(a, b, c);
    }
    if (K(a)) {
      var d = O(a), e = b - 1;
      a = d;
      b = e;
    } else {
      return c;
    }
  }
}
function fc(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.m & 16 || a.sb)) {
    return a.ea(null, b, null);
  }
  if (xa(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (x(Ha, a)) {
    return E.f(a, b);
  }
  if (a ? a.m & 64 || a.Va || (a.m ? 0 : x(Ia, a)) : x(Ia, a)) {
    return ec(a, b);
  }
  throw Error([B("nth not supported on this type "), B(ya(null == a ? null : a.constructor))].join(""));
}
function gc(a, b) {
  return null == a ? null : a && (a.m & 256 || a.tb) ? a.O(null, b) : xa(a) ? b < a.length ? a[b | 0] : null : "string" === typeof a ? b < a.length ? a[b | 0] : null : x(La, a) ? I.f(a, b) : null;
}
function hc(a, b, c) {
  return null != a ? a && (a.m & 256 || a.tb) ? a.H(null, b, c) : xa(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : x(La, a) ? I.o(a, b, c) : c : c;
}
var ic = function ic() {
  switch(arguments.length) {
    case 3:
      return ic.o(arguments[0], arguments[1], arguments[2]);
    default:
      var b = new M(Array.prototype.slice.call(arguments, 3), 0);
      return ic.C(arguments[0], arguments[1], arguments[2], b);
  }
};
ic.o = function(a, b, c) {
  if (null != a) {
    a = Ma(a, b, c);
  } else {
    a: {
      a = [b];
      c = [c];
      b = a.length;
      var d = 0, e;
      for (e = jb(jc);;) {
        if (d < b) {
          var g = d + 1;
          e = e.Oa(null, a[d], c[d]);
          d = g;
        } else {
          a = mb(e);
          break a;
        }
      }
    }
  }
  return a;
};
ic.C = function(a, b, c, d) {
  for (;;) {
    if (a = ic.o(a, b, c), v(d)) {
      b = N(d), c = N(O(d)), d = O(O(d));
    } else {
      return a;
    }
  }
};
ic.J = function(a) {
  var b = N(a), c = O(a);
  a = N(c);
  var d = O(c), c = N(d), d = O(d);
  return ic.C(b, a, c, d);
};
ic.T = 3;
function kc(a) {
  var b = "function" == r(a);
  return v(b) ? b : a ? v(v(null) ? null : a.mb) ? !0 : a.kb ? !1 : x(Aa, a) : x(Aa, a);
}
function lc(a, b) {
  this.h = a;
  this.meta = b;
  this.m = 393217;
  this.A = 0;
}
f = lc.prototype;
f.L = function() {
  return this.meta;
};
f.S = function(a, b) {
  return new lc(this.h, b);
};
f.mb = !0;
f.call = function() {
  function a(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, z, F, L, ca) {
    a = this.h;
    return mc.Sa ? mc.Sa(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, z, F, L, ca) : mc.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, z, F, L, ca);
  }
  function b(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, z, F, L) {
    a = this;
    return a.h.wa ? a.h.wa(b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, z, F, L) : a.h.call(null, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, z, F, L);
  }
  function c(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, z, F) {
    a = this;
    return a.h.va ? a.h.va(b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, z, F) : a.h.call(null, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, z, F);
  }
  function d(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, z) {
    a = this;
    return a.h.ua ? a.h.ua(b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, z) : a.h.call(null, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, z);
  }
  function e(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C) {
    a = this;
    return a.h.ta ? a.h.ta(b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C) : a.h.call(null, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C);
  }
  function g(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A) {
    a = this;
    return a.h.sa ? a.h.sa(b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A) : a.h.call(null, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A);
  }
  function h(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w) {
    a = this;
    return a.h.ra ? a.h.ra(b, c, d, e, g, h, k, l, m, n, p, q, t, u, w) : a.h.call(null, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w);
  }
  function k(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u) {
    a = this;
    return a.h.qa ? a.h.qa(b, c, d, e, g, h, k, l, m, n, p, q, t, u) : a.h.call(null, b, c, d, e, g, h, k, l, m, n, p, q, t, u);
  }
  function l(a, b, c, d, e, g, h, k, l, m, n, p, q, t) {
    a = this;
    return a.h.pa ? a.h.pa(b, c, d, e, g, h, k, l, m, n, p, q, t) : a.h.call(null, b, c, d, e, g, h, k, l, m, n, p, q, t);
  }
  function m(a, b, c, d, e, g, h, k, l, m, n, p, q) {
    a = this;
    return a.h.oa ? a.h.oa(b, c, d, e, g, h, k, l, m, n, p, q) : a.h.call(null, b, c, d, e, g, h, k, l, m, n, p, q);
  }
  function n(a, b, c, d, e, g, h, k, l, m, n, p) {
    a = this;
    return a.h.na ? a.h.na(b, c, d, e, g, h, k, l, m, n, p) : a.h.call(null, b, c, d, e, g, h, k, l, m, n, p);
  }
  function p(a, b, c, d, e, g, h, k, l, m, n) {
    a = this;
    return a.h.ma ? a.h.ma(b, c, d, e, g, h, k, l, m, n) : a.h.call(null, b, c, d, e, g, h, k, l, m, n);
  }
  function q(a, b, c, d, e, g, h, k, l, m) {
    a = this;
    return a.h.Aa ? a.h.Aa(b, c, d, e, g, h, k, l, m) : a.h.call(null, b, c, d, e, g, h, k, l, m);
  }
  function t(a, b, c, d, e, g, h, k, l) {
    a = this;
    return a.h.za ? a.h.za(b, c, d, e, g, h, k, l) : a.h.call(null, b, c, d, e, g, h, k, l);
  }
  function u(a, b, c, d, e, g, h, k) {
    a = this;
    return a.h.ya ? a.h.ya(b, c, d, e, g, h, k) : a.h.call(null, b, c, d, e, g, h, k);
  }
  function w(a, b, c, d, e, g, h) {
    a = this;
    return a.h.xa ? a.h.xa(b, c, d, e, g, h) : a.h.call(null, b, c, d, e, g, h);
  }
  function A(a, b, c, d, e, g) {
    a = this;
    return a.h.aa ? a.h.aa(b, c, d, e, g) : a.h.call(null, b, c, d, e, g);
  }
  function C(a, b, c, d, e) {
    a = this;
    return a.h.N ? a.h.N(b, c, d, e) : a.h.call(null, b, c, d, e);
  }
  function F(a, b, c, d) {
    a = this;
    return a.h.o ? a.h.o(b, c, d) : a.h.call(null, b, c, d);
  }
  function L(a, b, c) {
    a = this;
    return a.h.f ? a.h.f(b, c) : a.h.call(null, b, c);
  }
  function ca(a, b) {
    a = this;
    return a.h.j ? a.h.j(b) : a.h.call(null, b);
  }
  function Ca(a) {
    a = this;
    return a.h.D ? a.h.D() : a.h.call(null);
  }
  var z = null, z = function(z, S, W, X, ba, ga, la, na, qa, ua, wa, Ba, Ja, Qa, Ya, kb, zb, Yb, zc, Xc, Sd, Be) {
    switch(arguments.length) {
      case 1:
        return Ca.call(this, z);
      case 2:
        return ca.call(this, z, S);
      case 3:
        return L.call(this, z, S, W);
      case 4:
        return F.call(this, z, S, W, X);
      case 5:
        return C.call(this, z, S, W, X, ba);
      case 6:
        return A.call(this, z, S, W, X, ba, ga);
      case 7:
        return w.call(this, z, S, W, X, ba, ga, la);
      case 8:
        return u.call(this, z, S, W, X, ba, ga, la, na);
      case 9:
        return t.call(this, z, S, W, X, ba, ga, la, na, qa);
      case 10:
        return q.call(this, z, S, W, X, ba, ga, la, na, qa, ua);
      case 11:
        return p.call(this, z, S, W, X, ba, ga, la, na, qa, ua, wa);
      case 12:
        return n.call(this, z, S, W, X, ba, ga, la, na, qa, ua, wa, Ba);
      case 13:
        return m.call(this, z, S, W, X, ba, ga, la, na, qa, ua, wa, Ba, Ja);
      case 14:
        return l.call(this, z, S, W, X, ba, ga, la, na, qa, ua, wa, Ba, Ja, Qa);
      case 15:
        return k.call(this, z, S, W, X, ba, ga, la, na, qa, ua, wa, Ba, Ja, Qa, Ya);
      case 16:
        return h.call(this, z, S, W, X, ba, ga, la, na, qa, ua, wa, Ba, Ja, Qa, Ya, kb);
      case 17:
        return g.call(this, z, S, W, X, ba, ga, la, na, qa, ua, wa, Ba, Ja, Qa, Ya, kb, zb);
      case 18:
        return e.call(this, z, S, W, X, ba, ga, la, na, qa, ua, wa, Ba, Ja, Qa, Ya, kb, zb, Yb);
      case 19:
        return d.call(this, z, S, W, X, ba, ga, la, na, qa, ua, wa, Ba, Ja, Qa, Ya, kb, zb, Yb, zc);
      case 20:
        return c.call(this, z, S, W, X, ba, ga, la, na, qa, ua, wa, Ba, Ja, Qa, Ya, kb, zb, Yb, zc, Xc);
      case 21:
        return b.call(this, z, S, W, X, ba, ga, la, na, qa, ua, wa, Ba, Ja, Qa, Ya, kb, zb, Yb, zc, Xc, Sd);
      case 22:
        return a.call(this, z, S, W, X, ba, ga, la, na, qa, ua, wa, Ba, Ja, Qa, Ya, kb, zb, Yb, zc, Xc, Sd, Be);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  z.j = Ca;
  z.f = ca;
  z.o = L;
  z.N = F;
  z.aa = C;
  z.xa = A;
  z.ya = w;
  z.za = u;
  z.Aa = t;
  z.ma = q;
  z.na = p;
  z.oa = n;
  z.pa = m;
  z.qa = l;
  z.ra = k;
  z.sa = h;
  z.ta = g;
  z.ua = e;
  z.va = d;
  z.wa = c;
  z.rb = b;
  z.Sa = a;
  return z;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(D(b)));
};
f.D = function() {
  return this.h.D ? this.h.D() : this.h.call(null);
};
f.j = function(a) {
  return this.h.j ? this.h.j(a) : this.h.call(null, a);
};
f.f = function(a, b) {
  return this.h.f ? this.h.f(a, b) : this.h.call(null, a, b);
};
f.o = function(a, b, c) {
  return this.h.o ? this.h.o(a, b, c) : this.h.call(null, a, b, c);
};
f.N = function(a, b, c, d) {
  return this.h.N ? this.h.N(a, b, c, d) : this.h.call(null, a, b, c, d);
};
f.aa = function(a, b, c, d, e) {
  return this.h.aa ? this.h.aa(a, b, c, d, e) : this.h.call(null, a, b, c, d, e);
};
f.xa = function(a, b, c, d, e, g) {
  return this.h.xa ? this.h.xa(a, b, c, d, e, g) : this.h.call(null, a, b, c, d, e, g);
};
f.ya = function(a, b, c, d, e, g, h) {
  return this.h.ya ? this.h.ya(a, b, c, d, e, g, h) : this.h.call(null, a, b, c, d, e, g, h);
};
f.za = function(a, b, c, d, e, g, h, k) {
  return this.h.za ? this.h.za(a, b, c, d, e, g, h, k) : this.h.call(null, a, b, c, d, e, g, h, k);
};
f.Aa = function(a, b, c, d, e, g, h, k, l) {
  return this.h.Aa ? this.h.Aa(a, b, c, d, e, g, h, k, l) : this.h.call(null, a, b, c, d, e, g, h, k, l);
};
f.ma = function(a, b, c, d, e, g, h, k, l, m) {
  return this.h.ma ? this.h.ma(a, b, c, d, e, g, h, k, l, m) : this.h.call(null, a, b, c, d, e, g, h, k, l, m);
};
f.na = function(a, b, c, d, e, g, h, k, l, m, n) {
  return this.h.na ? this.h.na(a, b, c, d, e, g, h, k, l, m, n) : this.h.call(null, a, b, c, d, e, g, h, k, l, m, n);
};
f.oa = function(a, b, c, d, e, g, h, k, l, m, n, p) {
  return this.h.oa ? this.h.oa(a, b, c, d, e, g, h, k, l, m, n, p) : this.h.call(null, a, b, c, d, e, g, h, k, l, m, n, p);
};
f.pa = function(a, b, c, d, e, g, h, k, l, m, n, p, q) {
  return this.h.pa ? this.h.pa(a, b, c, d, e, g, h, k, l, m, n, p, q) : this.h.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q);
};
f.qa = function(a, b, c, d, e, g, h, k, l, m, n, p, q, t) {
  return this.h.qa ? this.h.qa(a, b, c, d, e, g, h, k, l, m, n, p, q, t) : this.h.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q, t);
};
f.ra = function(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u) {
  return this.h.ra ? this.h.ra(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u) : this.h.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q, t, u);
};
f.sa = function(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w) {
  return this.h.sa ? this.h.sa(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w) : this.h.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w);
};
f.ta = function(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A) {
  return this.h.ta ? this.h.ta(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A) : this.h.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A);
};
f.ua = function(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C) {
  return this.h.ua ? this.h.ua(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C) : this.h.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C);
};
f.va = function(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F) {
  return this.h.va ? this.h.va(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F) : this.h.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F);
};
f.wa = function(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F, L) {
  return this.h.wa ? this.h.wa(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F, L) : this.h.call(null, a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F, L);
};
f.rb = function(a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F, L, ca) {
  var Ca = this.h;
  return mc.Sa ? mc.Sa(Ca, a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F, L, ca) : mc.call(null, Ca, a, b, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F, L, ca);
};
function nc(a) {
  var b = null != a;
  return (b ? a ? a.m & 131072 || a.wb || (a.m ? 0 : x(Va, a)) : x(Va, a) : b) ? Wa(a) : null;
}
function oc(a) {
  return null == a ? !1 : a ? a.m & 1024 || a.ub ? !0 : a.m ? !1 : x(Na, a) : x(Na, a);
}
function pc(a) {
  return a ? a.m & 16384 || a.Kb ? !0 : a.m ? !1 : x(Sa, a) : x(Sa, a);
}
function qc(a) {
  return a ? a.A & 512 || a.Eb ? !0 : !1 : !1;
}
function rc(a) {
  var b = [];
  fa(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function sc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var tc = {};
function uc(a) {
  return v(a) ? !0 : !1;
}
function vc(a, b) {
  var c = K(b);
  if (c) {
    var d = N(c), c = O(c);
    return wc ? wc(a, d, c) : xc.call(null, a, d, c);
  }
  return a.D ? a.D() : a.call(null);
}
function yc(a, b, c) {
  for (c = K(c);;) {
    if (c) {
      var d = N(c);
      b = a.f ? a.f(b, d) : a.call(null, b, d);
      c = O(c);
    } else {
      return b;
    }
  }
}
function xc() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0], b = arguments[1];
      return b && (b.m & 524288 || b.yb) ? b.U(null, a) : xa(b) ? Ub(b, a) : "string" === typeof b ? Ub(b, a) : x($a, b) ? ab.f(b, a) : vc(a, b);
    case 3:
      return wc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function wc(a, b, c) {
  return c && (c.m & 524288 || c.yb) ? c.V(null, a, b) : xa(c) ? Vb(c, a, b) : "string" === typeof c ? Vb(c, a, b) : x($a, c) ? ab.o(c, a, b) : yc(a, b, c);
}
function Ac(a) {
  return a;
}
function Bc(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor(a) : Math.ceil(a);
}
function Cc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var B = function B() {
  switch(arguments.length) {
    case 0:
      return B.D();
    case 1:
      return B.j(arguments[0]);
    default:
      var b = new M(Array.prototype.slice.call(arguments, 1), 0);
      return B.C(arguments[0], b);
  }
};
B.D = function() {
  return "";
};
B.j = function(a) {
  return null == a ? "" : ea(a);
};
B.C = function(a, b) {
  for (var c = new ha("" + B(a)), d = b;;) {
    if (v(d)) {
      c = c.append("" + B(N(d))), d = O(d);
    } else {
      return c.toString();
    }
  }
};
B.J = function(a) {
  var b = N(a);
  a = O(a);
  return B.C(b, a);
};
B.T = 1;
function $b(a, b) {
  var c;
  if (b ? b.m & 16777216 || b.Jb || (b.m ? 0 : x(fb, b)) : x(fb, b)) {
    if (Xb(a) && Xb(b) && T(a) !== T(b)) {
      c = !1;
    } else {
      a: {
        c = K(a);
        for (var d = K(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && P.f(N(c), N(d))) {
            c = O(c), d = O(d);
          } else {
            c = !1;
            break a;
          }
        }
      }
    }
  } else {
    c = null;
  }
  return uc(c);
}
function Dc(a, b, c, d, e) {
  this.meta = a;
  this.first = b;
  this.Ba = c;
  this.count = d;
  this.v = e;
  this.m = 65937646;
  this.A = 8192;
}
f = Dc.prototype;
f.toString = function() {
  return wb(this);
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.L = function() {
  return this.meta;
};
f.ba = function() {
  return 1 === this.count ? null : this.Ba;
};
f.Y = function() {
  return this.count;
};
f.G = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Nb(this);
};
f.w = function(a, b) {
  return $b(this, b);
};
f.U = function(a, b) {
  return vc(b, this);
};
f.V = function(a, b, c) {
  return yc(b, c, this);
};
f.W = function() {
  return this.first;
};
f.ca = function() {
  return 1 === this.count ? Kb : this.Ba;
};
f.R = function() {
  return this;
};
f.S = function(a, b) {
  return new Dc(b, this.first, this.Ba, this.count, this.v);
};
f.M = function(a, b) {
  return new Dc(this.meta, b, this, this.count + 1, null);
};
Dc.prototype[za] = function() {
  return Q(this);
};
function Ec(a) {
  this.meta = a;
  this.m = 65937614;
  this.A = 8192;
}
f = Ec.prototype;
f.toString = function() {
  return wb(this);
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.L = function() {
  return this.meta;
};
f.ba = function() {
  return null;
};
f.Y = function() {
  return 0;
};
f.G = function() {
  return Ob;
};
f.w = function(a, b) {
  return $b(this, b);
};
f.U = function(a, b) {
  return vc(b, this);
};
f.V = function(a, b, c) {
  return yc(b, c, this);
};
f.W = function() {
  return null;
};
f.ca = function() {
  return Kb;
};
f.R = function() {
  return null;
};
f.S = function(a, b) {
  return new Ec(b);
};
f.M = function(a, b) {
  return new Dc(this.meta, b, null, 1, null);
};
var Kb = new Ec(null);
Ec.prototype[za] = function() {
  return Q(this);
};
function Fc() {
  var a = 0 < arguments.length ? new M(Array.prototype.slice.call(arguments, 0), 0) : null;
  a: {
    var b;
    if (a instanceof M && 0 === a.i) {
      b = a.c;
    } else {
      b: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.W(null)), a = a.ba(null);
          } else {
            break b;
          }
        }
      }
    }
    for (var a = b.length, c = Kb;;) {
      if (0 < a) {
        var d = a - 1, c = c.M(null, b[a - 1]), a = d
      } else {
        break a;
      }
    }
  }
  return c;
}
function Gc(a, b, c, d) {
  this.meta = a;
  this.first = b;
  this.Ba = c;
  this.v = d;
  this.m = 65929452;
  this.A = 8192;
}
f = Gc.prototype;
f.toString = function() {
  return wb(this);
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.L = function() {
  return this.meta;
};
f.ba = function() {
  return null == this.Ba ? null : K(this.Ba);
};
f.G = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Nb(this);
};
f.w = function(a, b) {
  return $b(this, b);
};
f.U = function(a, b) {
  return vc(b, this);
};
f.V = function(a, b, c) {
  return yc(b, c, this);
};
f.W = function() {
  return this.first;
};
f.ca = function() {
  return null == this.Ba ? Kb : this.Ba;
};
f.R = function() {
  return this;
};
f.S = function(a, b) {
  return new Gc(b, this.first, this.Ba, this.v);
};
f.M = function(a, b) {
  return new Gc(null, b, this, this.v);
};
Gc.prototype[za] = function() {
  return Q(this);
};
function R(a, b) {
  var c = null == b;
  return (c ? c : b && (b.m & 64 || b.Va)) ? new Gc(null, a, b, null) : new Gc(null, a, K(b), null);
}
function U(a, b, c, d) {
  this.Qa = a;
  this.name = b;
  this.Ea = c;
  this.Ka = d;
  this.m = 2153775105;
  this.A = 4096;
}
f = U.prototype;
f.toString = function() {
  return [B(":"), B(this.Ea)].join("");
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.w = function(a, b) {
  return b instanceof U ? this.Ea === b.Ea : !1;
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return gc(c, this);
      case 3:
        return hc(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.f = function(a, c) {
    return gc(c, this);
  };
  a.o = function(a, c, d) {
    return hc(c, this, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(D(b)));
};
f.j = function(a) {
  return gc(a, this);
};
f.f = function(a, b) {
  return hc(a, this, b);
};
f.G = function() {
  var a = this.Ka;
  return null != a ? a : this.Ka = a = Hb(Cb(this.name), Fb(this.Qa)) + 2654435769 | 0;
};
f.F = function(a, b) {
  return J(b, [B(":"), B(this.Ea)].join(""));
};
var Hc = function Hc() {
  switch(arguments.length) {
    case 1:
      return Hc.j(arguments[0]);
    case 2:
      return Hc.f(arguments[0], arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
Hc.j = function(a) {
  if (a instanceof U) {
    return a;
  }
  if (a instanceof Ib) {
    var b;
    if (a && (a.A & 4096 || a.xb)) {
      b = a.Qa;
    } else {
      throw Error([B("Doesn't support namespace: "), B(a)].join(""));
    }
    return new U(b, Ic.j ? Ic.j(a) : Ic.call(null, a), a.Ga, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new U(b[0], b[1], a, null) : new U(null, b[0], a, null)) : null;
};
Hc.f = function(a, b) {
  return new U(a, b, [B(v(a) ? [B(a), B("/")].join("") : null), B(b)].join(""), null);
};
Hc.T = 2;
function V(a, b, c, d) {
  this.meta = a;
  this.fn = b;
  this.s = c;
  this.v = d;
  this.m = 32374988;
  this.A = 0;
}
f = V.prototype;
f.toString = function() {
  return wb(this);
};
f.equiv = function(a) {
  return this.w(null, a);
};
function Jc(a) {
  null != a.fn && (a.s = a.fn.D ? a.fn.D() : a.fn.call(null), a.fn = null);
  return a.s;
}
f.L = function() {
  return this.meta;
};
f.ba = function() {
  eb(this);
  return null == this.s ? null : O(this.s);
};
f.G = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Nb(this);
};
f.w = function(a, b) {
  return $b(this, b);
};
f.U = function(a, b) {
  return vc(b, this);
};
f.V = function(a, b, c) {
  return yc(b, c, this);
};
f.W = function() {
  eb(this);
  return null == this.s ? null : N(this.s);
};
f.ca = function() {
  eb(this);
  return null != this.s ? Jb(this.s) : Kb;
};
f.R = function() {
  Jc(this);
  if (null == this.s) {
    return null;
  }
  for (var a = this.s;;) {
    if (a instanceof V) {
      a = Jc(a);
    } else {
      return this.s = a, K(this.s);
    }
  }
};
f.S = function(a, b) {
  return new V(b, this.fn, this.s, this.v);
};
f.M = function(a, b) {
  return R(b, this);
};
V.prototype[za] = function() {
  return Q(this);
};
function Kc(a, b) {
  this.Ya = a;
  this.end = b;
  this.m = 2;
  this.A = 0;
}
Kc.prototype.add = function(a) {
  this.Ya[this.end] = a;
  return this.end += 1;
};
Kc.prototype.la = function() {
  var a = new Lc(this.Ya, 0, this.end);
  this.Ya = null;
  return a;
};
Kc.prototype.Y = function() {
  return this.end;
};
function Lc(a, b, c) {
  this.c = a;
  this.off = b;
  this.end = c;
  this.m = 524306;
  this.A = 0;
}
f = Lc.prototype;
f.Y = function() {
  return this.end - this.off;
};
f.K = function(a, b) {
  return this.c[this.off + b];
};
f.ea = function(a, b, c) {
  return 0 <= b && b < this.end - this.off ? this.c[this.off + b] : c;
};
f.gb = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Lc(this.c, this.off + 1, this.end);
};
f.U = function(a, b) {
  return Wb(this.c, b, this.c[this.off], this.off + 1);
};
f.V = function(a, b, c) {
  return Wb(this.c, b, c, this.off);
};
function Mc(a, b, c, d) {
  this.la = a;
  this.ka = b;
  this.meta = c;
  this.v = d;
  this.m = 31850732;
  this.A = 1536;
}
f = Mc.prototype;
f.toString = function() {
  return wb(this);
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.L = function() {
  return this.meta;
};
f.ba = function() {
  if (1 < Ea(this.la)) {
    return new Mc(pb(this.la), this.ka, this.meta, null);
  }
  var a = eb(this.ka);
  return null == a ? null : a;
};
f.G = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Nb(this);
};
f.w = function(a, b) {
  return $b(this, b);
};
f.W = function() {
  return E.f(this.la, 0);
};
f.ca = function() {
  return 1 < Ea(this.la) ? new Mc(pb(this.la), this.ka, this.meta, null) : null == this.ka ? Kb : this.ka;
};
f.R = function() {
  return this;
};
f.$a = function() {
  return this.la;
};
f.ab = function() {
  return null == this.ka ? Kb : this.ka;
};
f.S = function(a, b) {
  return new Mc(this.la, this.ka, b, this.v);
};
f.M = function(a, b) {
  return R(b, this);
};
f.Za = function() {
  return null == this.ka ? null : this.ka;
};
Mc.prototype[za] = function() {
  return Q(this);
};
function Nc(a, b) {
  return 0 === Ea(a) ? b : new Mc(a, b, null, null);
}
function Oc(a, b) {
  a.add(b);
}
function Pc(a) {
  for (var b = [];;) {
    if (K(a)) {
      b.push(N(a)), a = O(a);
    } else {
      return b;
    }
  }
}
function Qc(a, b) {
  if (Xb(a)) {
    return T(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && K(c)) {
      c = O(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var Rc = function Rc(b) {
  return null == b ? null : null == O(b) ? K(N(b)) : R(N(b), Rc(O(b)));
}, Sc = function Sc() {
  switch(arguments.length) {
    case 0:
      return Sc.D();
    case 1:
      return Sc.j(arguments[0]);
    case 2:
      return Sc.f(arguments[0], arguments[1]);
    default:
      var b = new M(Array.prototype.slice.call(arguments, 2), 0);
      return Sc.C(arguments[0], arguments[1], b);
  }
};
Sc.D = function() {
  return new V(null, function() {
    return null;
  }, null, null);
};
Sc.j = function(a) {
  return new V(null, function() {
    return a;
  }, null, null);
};
Sc.f = function(a, b) {
  return new V(null, function() {
    var c = K(a);
    return c ? qc(c) ? Nc(qb(c), Sc.f(rb(c), b)) : R(N(c), Sc.f(Jb(c), b)) : b;
  }, null, null);
};
Sc.C = function(a, b, c) {
  return function e(a, b) {
    return new V(null, function() {
      var c = K(a);
      return c ? qc(c) ? Nc(qb(c), e(rb(c), b)) : R(N(c), e(Jb(c), b)) : v(b) ? e(N(b), O(b)) : null;
    }, null, null);
  }(Sc.f(a, b), c);
};
Sc.J = function(a) {
  var b = N(a), c = O(a);
  a = N(c);
  c = O(c);
  return Sc.C(b, a, c);
};
Sc.T = 2;
function Tc(a, b, c) {
  var d = K(c);
  if (0 === b) {
    return a.D ? a.D() : a.call(null);
  }
  c = G(d);
  var e = H(d);
  if (1 === b) {
    return a.j ? a.j(c) : a.j ? a.j(c) : a.call(null, c);
  }
  var d = G(e), g = H(e);
  if (2 === b) {
    return a.f ? a.f(c, d) : a.f ? a.f(c, d) : a.call(null, c, d);
  }
  var e = G(g), h = H(g);
  if (3 === b) {
    return a.o ? a.o(c, d, e) : a.o ? a.o(c, d, e) : a.call(null, c, d, e);
  }
  var g = G(h), k = H(h);
  if (4 === b) {
    return a.N ? a.N(c, d, e, g) : a.N ? a.N(c, d, e, g) : a.call(null, c, d, e, g);
  }
  var h = G(k), l = H(k);
  if (5 === b) {
    return a.aa ? a.aa(c, d, e, g, h) : a.aa ? a.aa(c, d, e, g, h) : a.call(null, c, d, e, g, h);
  }
  var k = G(l), m = H(l);
  if (6 === b) {
    return a.xa ? a.xa(c, d, e, g, h, k) : a.xa ? a.xa(c, d, e, g, h, k) : a.call(null, c, d, e, g, h, k);
  }
  var l = G(m), n = H(m);
  if (7 === b) {
    return a.ya ? a.ya(c, d, e, g, h, k, l) : a.ya ? a.ya(c, d, e, g, h, k, l) : a.call(null, c, d, e, g, h, k, l);
  }
  var m = G(n), p = H(n);
  if (8 === b) {
    return a.za ? a.za(c, d, e, g, h, k, l, m) : a.za ? a.za(c, d, e, g, h, k, l, m) : a.call(null, c, d, e, g, h, k, l, m);
  }
  var n = G(p), q = H(p);
  if (9 === b) {
    return a.Aa ? a.Aa(c, d, e, g, h, k, l, m, n) : a.Aa ? a.Aa(c, d, e, g, h, k, l, m, n) : a.call(null, c, d, e, g, h, k, l, m, n);
  }
  var p = G(q), t = H(q);
  if (10 === b) {
    return a.ma ? a.ma(c, d, e, g, h, k, l, m, n, p) : a.ma ? a.ma(c, d, e, g, h, k, l, m, n, p) : a.call(null, c, d, e, g, h, k, l, m, n, p);
  }
  var q = G(t), u = H(t);
  if (11 === b) {
    return a.na ? a.na(c, d, e, g, h, k, l, m, n, p, q) : a.na ? a.na(c, d, e, g, h, k, l, m, n, p, q) : a.call(null, c, d, e, g, h, k, l, m, n, p, q);
  }
  var t = G(u), w = H(u);
  if (12 === b) {
    return a.oa ? a.oa(c, d, e, g, h, k, l, m, n, p, q, t) : a.oa ? a.oa(c, d, e, g, h, k, l, m, n, p, q, t) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, t);
  }
  var u = G(w), A = H(w);
  if (13 === b) {
    return a.pa ? a.pa(c, d, e, g, h, k, l, m, n, p, q, t, u) : a.pa ? a.pa(c, d, e, g, h, k, l, m, n, p, q, t, u) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, t, u);
  }
  var w = G(A), C = H(A);
  if (14 === b) {
    return a.qa ? a.qa(c, d, e, g, h, k, l, m, n, p, q, t, u, w) : a.qa ? a.qa(c, d, e, g, h, k, l, m, n, p, q, t, u, w) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, t, u, w);
  }
  var A = G(C), F = H(C);
  if (15 === b) {
    return a.ra ? a.ra(c, d, e, g, h, k, l, m, n, p, q, t, u, w, A) : a.ra ? a.ra(c, d, e, g, h, k, l, m, n, p, q, t, u, w, A) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A);
  }
  var C = G(F), L = H(F);
  if (16 === b) {
    return a.sa ? a.sa(c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C) : a.sa ? a.sa(c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C);
  }
  var F = G(L), ca = H(L);
  if (17 === b) {
    return a.ta ? a.ta(c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F) : a.ta ? a.ta(c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F);
  }
  var L = G(ca), Ca = H(ca);
  if (18 === b) {
    return a.ua ? a.ua(c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F, L) : a.ua ? a.ua(c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F, L) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F, L);
  }
  ca = G(Ca);
  Ca = H(Ca);
  if (19 === b) {
    return a.va ? a.va(c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F, L, ca) : a.va ? a.va(c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F, L, ca) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F, L, ca);
  }
  var z = G(Ca);
  H(Ca);
  if (20 === b) {
    return a.wa ? a.wa(c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F, L, ca, z) : a.wa ? a.wa(c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F, L, ca, z) : a.call(null, c, d, e, g, h, k, l, m, n, p, q, t, u, w, A, C, F, L, ca, z);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function mc() {
  switch(arguments.length) {
    case 2:
      return Uc(arguments[0], arguments[1]);
    case 3:
      return Vc(arguments[0], arguments[1], arguments[2]);
    case 4:
      var a;
      a = arguments[0];
      var b = R(arguments[1], R(arguments[2], arguments[3])), c = a.T;
      if (a.J) {
        var d = Qc(b, c + 1);
        a = d <= c ? Tc(a, d, b) : a.J(b);
      } else {
        a = a.apply(a, Pc(b));
      }
      return a;
    case 5:
      return a = arguments[0], b = R(arguments[1], R(arguments[2], R(arguments[3], arguments[4]))), c = a.T, a.J ? (d = Qc(b, c + 1), a = d <= c ? Tc(a, d, b) : a.J(b)) : a = a.apply(a, Pc(b)), a;
    default:
      return b = new M(Array.prototype.slice.call(arguments, 5), 0), a = arguments[0], b = R(arguments[1], R(arguments[2], R(arguments[3], R(arguments[4], Rc(b))))), c = a.T, a.J ? (d = Qc(b, c + 1), a = d <= c ? Tc(a, d, b) : a.J(b)) : a = a.apply(a, Pc(b)), a;
  }
}
function Uc(a, b) {
  var c = a.T;
  if (a.J) {
    var d = Qc(b, c + 1);
    return d <= c ? Tc(a, d, b) : a.J(b);
  }
  return a.apply(a, Pc(b));
}
function Vc(a, b, c) {
  b = R(b, c);
  c = a.T;
  if (a.J) {
    var d = Qc(b, c + 1);
    return d <= c ? Tc(a, d, b) : a.J(b);
  }
  return a.apply(a, Pc(b));
}
function Wc(a, b) {
  for (;;) {
    if (null == K(b)) {
      return !0;
    }
    var c;
    c = N(b);
    c = a.j ? a.j(c) : a.call(null, c);
    if (v(c)) {
      c = a;
      var d = O(b);
      a = c;
      b = d;
    } else {
      return !1;
    }
  }
}
function Yc(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.Db = c;
  this.lb = d;
  this.A = 16386;
  this.m = 6455296;
}
f = Yc.prototype;
f.equiv = function(a) {
  return this.w(null, a);
};
f.w = function(a, b) {
  return this === b;
};
f.ob = function() {
  return this.state;
};
f.L = function() {
  return this.meta;
};
f.ib = function(a, b, c) {
  for (var d = K(this.lb), e = null, g = 0, h = 0;;) {
    if (h < g) {
      a = e.K(null, h);
      var k = fc(a, 0);
      a = fc(a, 1);
      var l = b, m = c;
      a.N ? a.N(k, this, l, m) : a.call(null, k, this, l, m);
      h += 1;
    } else {
      if (a = K(d)) {
        d = a, qc(d) ? (e = qb(d), d = rb(d), a = e, g = T(e), e = a) : (a = N(d), k = fc(a, 0), a = fc(a, 1), e = k, g = b, h = c, a.N ? a.N(e, this, g, h) : a.call(null, e, this, g, h), d = O(d), e = null, g = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
f.G = function() {
  return this[aa] || (this[aa] = ++da);
};
function Zc() {
  switch(arguments.length) {
    case 1:
      return $c(arguments[0]);
    default:
      var a = new M(Array.prototype.slice.call(arguments, 1), 0), b = arguments[0], c = a, c = (null == c ? 0 : c ? c.m & 64 || c.Va || (c.m ? 0 : x(Ia, c)) : x(Ia, c)) ? Uc(ad, a) : a, a = gc(c, sa), c = gc(c, bd);
      return new Yc(b, a, c, null);
  }
}
function $c(a) {
  return new Yc(a, null, null, null);
}
function cd(a, b) {
  if (a instanceof Yc) {
    var c = a.Db;
    if (null != c && !v(c.j ? c.j(b) : c.call(null, b))) {
      throw Error([B("Assert failed: "), B("Validator rejected reference state"), B("\n"), B(function() {
        var a = Fc(new Ib(null, "validate", "validate", 1439230700, null), new Ib(null, "new-value", "new-value", -1567397401, null));
        return dd.j ? dd.j(a) : dd.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.lb && ib(a, c, b);
    return b;
  }
  return tb(a, b);
}
var Y = function Y() {
  switch(arguments.length) {
    case 1:
      return Y.j(arguments[0]);
    case 2:
      return Y.f(arguments[0], arguments[1]);
    case 3:
      return Y.o(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Y.N(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      var b = new M(Array.prototype.slice.call(arguments, 4), 0);
      return Y.C(arguments[0], arguments[1], arguments[2], arguments[3], b);
  }
};
Y.j = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.j ? a.j(d) : a.call(null, d);
        return b.f ? b.f(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.j ? b.j(a) : b.call(null, a);
      }
      function e() {
        return b.D ? b.D() : b.call(null);
      }
      var g = null, h = function() {
        function c(a, b, e) {
          var g = null;
          if (2 < arguments.length) {
            for (var g = 0, h = Array(arguments.length - 2);g < h.length;) {
              h[g] = arguments[g + 2], ++g;
            }
            g = new M(h, 0);
          }
          return d.call(this, a, b, g);
        }
        function d(c, e, g) {
          e = Vc(a, e, g);
          return b.f ? b.f(c, e) : b.call(null, c, e);
        }
        c.T = 2;
        c.J = function(a) {
          var b = N(a);
          a = O(a);
          var c = N(a);
          a = Jb(a);
          return d(b, c, a);
        };
        c.C = d;
        return c;
      }(), g = function(a, b, g) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
          default:
            var n = null;
            if (2 < arguments.length) {
              for (var n = 0, p = Array(arguments.length - 2);n < p.length;) {
                p[n] = arguments[n + 2], ++n;
              }
              n = new M(p, 0);
            }
            return h.C(a, b, n);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      g.T = 2;
      g.J = h.J;
      g.D = e;
      g.j = d;
      g.f = c;
      g.C = h.C;
      return g;
    }();
  };
};
Y.f = function(a, b) {
  return new V(null, function() {
    var c = K(b);
    if (c) {
      if (qc(c)) {
        for (var d = qb(c), e = T(d), g = new Kc(Array(e), 0), h = 0;;) {
          if (h < e) {
            Oc(g, function() {
              var b = E.f(d, h);
              return a.j ? a.j(b) : a.call(null, b);
            }()), h += 1;
          } else {
            break;
          }
        }
        return Nc(g.la(), Y.f(a, rb(c)));
      }
      return R(function() {
        var b = N(c);
        return a.j ? a.j(b) : a.call(null, b);
      }(), Y.f(a, Jb(c)));
    }
    return null;
  }, null, null);
};
Y.o = function(a, b, c) {
  return new V(null, function() {
    var d = K(b), e = K(c);
    if (d && e) {
      var g = R, h;
      h = N(d);
      var k = N(e);
      h = a.f ? a.f(h, k) : a.call(null, h, k);
      d = g(h, Y.o(a, Jb(d), Jb(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
Y.N = function(a, b, c, d) {
  return new V(null, function() {
    var e = K(b), g = K(c), h = K(d);
    if (e && g && h) {
      var k = R, l;
      l = N(e);
      var m = N(g), n = N(h);
      l = a.o ? a.o(l, m, n) : a.call(null, l, m, n);
      e = k(l, Y.N(a, Jb(e), Jb(g), Jb(h)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
Y.C = function(a, b, c, d, e) {
  var g = function k(a) {
    return new V(null, function() {
      var b = Y.f(K, a);
      return Wc(Ac, b) ? R(Y.f(N, b), k(Y.f(Jb, b))) : null;
    }, null, null);
  };
  return Y.f(function() {
    return function(b) {
      return Uc(a, b);
    };
  }(g), g(cc.C(e, d, bc([c, b], 0))));
};
Y.J = function(a) {
  var b = N(a), c = O(a);
  a = N(c);
  var d = O(c), c = N(d), e = O(d), d = N(e), e = O(e);
  return Y.C(b, a, c, d, e);
};
Y.T = 4;
function ed(a) {
  return new V(null, function() {
    return R(a, ed(a));
  }, null, null);
}
var fd = function fd() {
  switch(arguments.length) {
    case 2:
      return fd.f(arguments[0], arguments[1]);
    default:
      var b = new M(Array.prototype.slice.call(arguments, 2), 0);
      return fd.C(arguments[0], arguments[1], b);
  }
};
fd.f = function(a, b) {
  return new V(null, function() {
    var c = K(a), d = K(b);
    return c && d ? R(N(c), R(N(d), fd.f(Jb(c), Jb(d)))) : null;
  }, null, null);
};
fd.C = function(a, b, c) {
  return new V(null, function() {
    var d = Y.f(K, cc.C(c, b, bc([a], 0)));
    return Wc(Ac, d) ? Sc.f(Y.f(N, d), Uc(fd, Y.f(Jb, d))) : null;
  }, null, null);
};
fd.J = function(a) {
  var b = N(a), c = O(a);
  a = N(c);
  c = O(c);
  return fd.C(b, a, c);
};
fd.T = 2;
function gd(a, b) {
  this.B = a;
  this.c = b;
}
function hd(a) {
  return new gd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function id(a) {
  a = a.l;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function jd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = hd(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var kd = function kd(b, c, d, e) {
  var g = new gd(d.B, D(d.c)), h = b.l - 1 >>> c & 31;
  5 === c ? g.c[h] = e : (d = d.c[h], b = null != d ? kd(b, c - 5, d, e) : jd(null, c - 5, e), g.c[h] = b);
  return g;
};
function ld(a, b) {
  throw Error([B("No item "), B(a), B(" in vector of length "), B(b)].join(""));
}
function md(a, b) {
  if (b >= id(a)) {
    return a.Z;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e
    } else {
      return c.c;
    }
  }
}
function nd(a, b) {
  return 0 <= b && b < a.l ? md(a, b) : ld(b, a.l);
}
var od = function od(b, c, d, e, g) {
  var h = new gd(d.B, D(d.c));
  if (0 === c) {
    h.c[e & 31] = g;
  } else {
    var k = e >>> c & 31;
    b = od(b, c - 5, d.c[k], e, g);
    h.c[k] = b;
  }
  return h;
};
function pd(a, b, c, d, e, g) {
  this.i = a;
  this.base = b;
  this.c = c;
  this.Ca = d;
  this.start = e;
  this.end = g;
}
pd.prototype.fb = function() {
  return this.i < this.end;
};
pd.prototype.next = function() {
  32 === this.i - this.base && (this.c = md(this.Ca, this.i), this.base += 32);
  var a = this.c[this.i & 31];
  this.i += 1;
  return a;
};
function qd(a, b, c, d, e, g) {
  this.meta = a;
  this.l = b;
  this.shift = c;
  this.root = d;
  this.Z = e;
  this.v = g;
  this.m = 167668511;
  this.A = 8196;
}
f = qd.prototype;
f.toString = function() {
  return wb(this);
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.O = function(a, b) {
  return I.o(this, b, null);
};
f.H = function(a, b, c) {
  return "number" === typeof b ? E.o(this, b, c) : c;
};
f.K = function(a, b) {
  return nd(this, b)[b & 31];
};
f.ea = function(a, b, c) {
  return 0 <= b && b < this.l ? md(this, b)[b & 31] : c;
};
f.eb = function(a, b, c) {
  if (0 <= b && b < this.l) {
    return id(this) <= b ? (a = D(this.Z), a[b & 31] = c, new qd(this.meta, this.l, this.shift, this.root, a, null)) : new qd(this.meta, this.l, this.shift, od(this, this.shift, this.root, b, c), this.Z, null);
  }
  if (b === this.l) {
    return Ga(this, c);
  }
  throw Error([B("Index "), B(b), B(" out of bounds  [0,"), B(this.l), B("]")].join(""));
};
f.Ta = function() {
  var a = this.l;
  return new pd(0, 0, 0 < T(this) ? md(this, 0) : null, this, 0, a);
};
f.L = function() {
  return this.meta;
};
f.Y = function() {
  return this.l;
};
f.bb = function() {
  return E.f(this, 0);
};
f.cb = function() {
  return E.f(this, 1);
};
f.G = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Nb(this);
};
f.w = function(a, b) {
  if (b instanceof qd) {
    if (this.l === T(b)) {
      for (var c = ub(this), d = ub(b);;) {
        if (v(c.fb())) {
          var e = c.next(), g = d.next();
          if (!P.f(e, g)) {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return $b(this, b);
  }
};
f.Ra = function() {
  var a = this;
  return new rd(a.l, a.shift, function() {
    var b = a.root;
    return sd.j ? sd.j(b) : sd.call(null, b);
  }(), function() {
    var b = a.Z;
    return td.j ? td.j(b) : td.call(null, b);
  }());
};
f.U = function(a, b) {
  return Sb(this, b);
};
f.V = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.l) {
      var e = md(this, a);
      c = e.length;
      a: {
        for (var g = 0;;) {
          if (g < c) {
            var h = e[g], d = b.f ? b.f(d, h) : b.call(null, d, h), g = g + 1
          } else {
            e = d;
            break a;
          }
        }
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
f.Na = function(a, b, c) {
  if ("number" === typeof b) {
    return Ta(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
f.R = function() {
  if (0 === this.l) {
    return null;
  }
  if (32 >= this.l) {
    return new M(this.Z, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.c[0];
      } else {
        a = a.c;
        break a;
      }
    }
  }
  return ud ? ud(this, a, 0, 0) : vd.call(null, this, a, 0, 0);
};
f.S = function(a, b) {
  return new qd(b, this.l, this.shift, this.root, this.Z, this.v);
};
f.M = function(a, b) {
  if (32 > this.l - id(this)) {
    for (var c = this.Z.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.Z[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new qd(this.meta, this.l + 1, this.shift, this.root, d, null);
  }
  c = (d = this.l >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = hd(null), d.c[0] = this.root, e = jd(null, this.shift, new gd(null, this.Z)), d.c[1] = e) : d = kd(this, this.shift, this.root, new gd(null, this.Z));
  return new qd(this.meta, this.l + 1, c, d, [b], null);
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.ea(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.f = function(a, c) {
    return this.K(null, c);
  };
  a.o = function(a, c, d) {
    return this.ea(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(D(b)));
};
f.j = function(a) {
  return this.K(null, a);
};
f.f = function(a, b) {
  return this.ea(null, a, b);
};
var wd = new gd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), dc = new qd(null, 0, 5, wd, [], Ob);
qd.prototype[za] = function() {
  return Q(this);
};
function xd(a, b, c, d, e, g) {
  this.ga = a;
  this.node = b;
  this.i = c;
  this.off = d;
  this.meta = e;
  this.v = g;
  this.m = 32375020;
  this.A = 1536;
}
f = xd.prototype;
f.toString = function() {
  return wb(this);
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.L = function() {
  return this.meta;
};
f.ba = function() {
  if (this.off + 1 < this.node.length) {
    var a;
    a = this.ga;
    var b = this.node, c = this.i, d = this.off + 1;
    a = ud ? ud(a, b, c, d) : vd.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return sb(this);
};
f.G = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Nb(this);
};
f.w = function(a, b) {
  return $b(this, b);
};
f.U = function(a, b) {
  var c;
  c = this.ga;
  var d = this.i + this.off, e = T(this.ga);
  c = yd ? yd(c, d, e) : zd.call(null, c, d, e);
  return Sb(c, b);
};
f.V = function(a, b, c) {
  a = this.ga;
  var d = this.i + this.off, e = T(this.ga);
  a = yd ? yd(a, d, e) : zd.call(null, a, d, e);
  return Tb(a, b, c);
};
f.W = function() {
  return this.node[this.off];
};
f.ca = function() {
  if (this.off + 1 < this.node.length) {
    var a;
    a = this.ga;
    var b = this.node, c = this.i, d = this.off + 1;
    a = ud ? ud(a, b, c, d) : vd.call(null, a, b, c, d);
    return null == a ? Kb : a;
  }
  return rb(this);
};
f.R = function() {
  return this;
};
f.$a = function() {
  var a = this.node;
  return new Lc(a, this.off, a.length);
};
f.ab = function() {
  var a = this.i + this.node.length;
  if (a < Ea(this.ga)) {
    var b = this.ga, c = md(this.ga, a);
    return ud ? ud(b, c, a, 0) : vd.call(null, b, c, a, 0);
  }
  return Kb;
};
f.S = function(a, b) {
  var c = this.ga, d = this.node, e = this.i, g = this.off;
  return Ad ? Ad(c, d, e, g, b) : vd.call(null, c, d, e, g, b);
};
f.M = function(a, b) {
  return R(b, this);
};
f.Za = function() {
  var a = this.i + this.node.length;
  if (a < Ea(this.ga)) {
    var b = this.ga, c = md(this.ga, a);
    return ud ? ud(b, c, a, 0) : vd.call(null, b, c, a, 0);
  }
  return null;
};
xd.prototype[za] = function() {
  return Q(this);
};
function vd() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new xd(a, nd(a, b), b, c, null, null);
    case 4:
      return ud(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ad(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function ud(a, b, c, d) {
  return new xd(a, b, c, d, null, null);
}
function Ad(a, b, c, d, e) {
  return new xd(a, b, c, d, e, null);
}
function Bd(a, b, c, d, e) {
  this.meta = a;
  this.Ca = b;
  this.start = c;
  this.end = d;
  this.v = e;
  this.m = 167666463;
  this.A = 8192;
}
f = Bd.prototype;
f.toString = function() {
  return wb(this);
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.O = function(a, b) {
  return I.o(this, b, null);
};
f.H = function(a, b, c) {
  return "number" === typeof b ? E.o(this, b, c) : c;
};
f.K = function(a, b) {
  return 0 > b || this.end <= this.start + b ? ld(b, this.end - this.start) : E.f(this.Ca, this.start + b);
};
f.ea = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : E.o(this.Ca, this.start + b, c);
};
f.eb = function(a, b, c) {
  var d = this.start + b;
  a = this.meta;
  c = ic.o(this.Ca, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return Cd.aa ? Cd.aa(a, c, b, d, null) : Cd.call(null, a, c, b, d, null);
};
f.L = function() {
  return this.meta;
};
f.Y = function() {
  return this.end - this.start;
};
f.G = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Nb(this);
};
f.w = function(a, b) {
  return $b(this, b);
};
f.U = function(a, b) {
  return Sb(this, b);
};
f.V = function(a, b, c) {
  return Tb(this, b, c);
};
f.Na = function(a, b, c) {
  if ("number" === typeof b) {
    return Ta(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
f.R = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : R(E.f(a.Ca, e), new V(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
f.S = function(a, b) {
  var c = this.Ca, d = this.start, e = this.end, g = this.v;
  return Cd.aa ? Cd.aa(b, c, d, e, g) : Cd.call(null, b, c, d, e, g);
};
f.M = function(a, b) {
  var c = this.meta, d = Ta(this.Ca, this.end, b), e = this.start, g = this.end + 1;
  return Cd.aa ? Cd.aa(c, d, e, g, null) : Cd.call(null, c, d, e, g, null);
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.ea(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.f = function(a, c) {
    return this.K(null, c);
  };
  a.o = function(a, c, d) {
    return this.ea(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(D(b)));
};
f.j = function(a) {
  return this.K(null, a);
};
f.f = function(a, b) {
  return this.ea(null, a, b);
};
Bd.prototype[za] = function() {
  return Q(this);
};
function Cd(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Bd) {
      c = b.start + c, d = b.start + d, b = b.Ca;
    } else {
      var g = T(b);
      if (0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new Bd(a, b, c, d, e);
    }
  }
}
function zd() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return yd(a, arguments[1], T(a));
    case 3:
      return yd(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function yd(a, b, c) {
  return Cd(null, a, b, c, null);
}
function Dd(a, b) {
  return a === b.B ? b : new gd(a, D(b.c));
}
function sd(a) {
  return new gd({}, D(a.c));
}
function td(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  sc(a, 0, b, 0, a.length);
  return b;
}
var Ed = function Ed(b, c, d, e) {
  d = Dd(b.root.B, d);
  var g = b.l - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.c[g];
    b = null != h ? Ed(b, c - 5, h, e) : jd(b.root.B, c - 5, e);
  }
  d.c[g] = b;
  return d;
};
function rd(a, b, c, d) {
  this.l = a;
  this.shift = b;
  this.root = c;
  this.Z = d;
  this.A = 88;
  this.m = 275;
}
f = rd.prototype;
f.Wa = function(a, b) {
  if (this.root.B) {
    if (32 > this.l - id(this)) {
      this.Z[this.l & 31] = b;
    } else {
      var c = new gd(this.root.B, this.Z), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.Z = d;
      if (this.l >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = jd(this.root.B, this.shift, c);
        this.root = new gd(this.root.B, d);
        this.shift = e;
      } else {
        this.root = Ed(this, this.shift, this.root, c);
      }
    }
    this.l += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
f.Xa = function() {
  if (this.root.B) {
    this.root.B = null;
    var a = this.l - id(this), b = Array(a);
    sc(this.Z, 0, b, 0, a);
    return new qd(null, this.l, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
f.Oa = function(a, b, c) {
  if ("number" === typeof b) {
    return ob(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
f.hb = function(a, b, c) {
  var d = this;
  if (d.root.B) {
    if (0 <= b && b < d.l) {
      return id(this) <= b ? d.Z[b & 31] = c : (a = function() {
        return function g(a, k) {
          var l = Dd(d.root.B, k);
          if (0 === a) {
            l.c[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = g(a - 5, l.c[m]);
            l.c[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.l) {
      return lb(this, c);
    }
    throw Error([B("Index "), B(b), B(" out of bounds for TransientVector of length"), B(d.l)].join(""));
  }
  throw Error("assoc! after persistent!");
};
f.Y = function() {
  if (this.root.B) {
    return this.l;
  }
  throw Error("count after persistent!");
};
f.K = function(a, b) {
  if (this.root.B) {
    return nd(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
f.ea = function(a, b, c) {
  return 0 <= b && b < this.l ? E.f(this, b) : c;
};
f.O = function(a, b) {
  return I.o(this, b, null);
};
f.H = function(a, b, c) {
  return "number" === typeof b ? E.o(this, b, c) : c;
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(null, c);
      case 3:
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.f = function(a, c) {
    return this.O(null, c);
  };
  a.o = function(a, c, d) {
    return this.H(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(D(b)));
};
f.j = function(a) {
  return this.O(null, a);
};
f.f = function(a, b) {
  return this.H(null, a, b);
};
function Fd() {
  this.m = 2097152;
  this.A = 0;
}
Fd.prototype.equiv = function(a) {
  return this.w(null, a);
};
Fd.prototype.w = function() {
  return !1;
};
var Gd = new Fd;
function Hd(a, b) {
  return uc(oc(b) ? T(a) === T(b) ? Wc(Ac, Y.f(function(a) {
    return P.f(hc(b, N(a), Gd), N(O(a)));
  }, a)) : null : null);
}
function Id(a) {
  this.s = a;
}
Id.prototype.next = function() {
  if (null != this.s) {
    var a = N(this.s), b = fc(a, 0), a = fc(a, 1);
    this.s = O(this.s);
    return {value:[b, a], done:!1};
  }
  return {value:null, done:!0};
};
function Jd(a) {
  return new Id(K(a));
}
function Kd(a, b) {
  var c;
  if (b instanceof U) {
    a: {
      c = a.length;
      for (var d = b.Ea, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        var g = a[e];
        if (g instanceof U && d === g.Ea) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (c = "string" == typeof b, v(v(c) ? c : "number" === typeof b)) {
      a: {
        for (c = a.length, d = 0;;) {
          if (c <= d) {
            c = -1;
            break a;
          }
          if (b === a[d]) {
            c = d;
            break a;
          }
          d += 2;
        }
      }
    } else {
      if (b instanceof Ib) {
        a: {
          for (c = a.length, d = b.Ga, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            g = a[e];
            if (g instanceof Ib && d === g.Ga) {
              c = e;
              break a;
            }
            e += 2;
          }
        }
      } else {
        if (null == b) {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (null == a[d]) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        } else {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (P.f(b, a[d])) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        }
      }
    }
  }
  return c;
}
function Ld(a, b, c) {
  this.c = a;
  this.i = b;
  this.da = c;
  this.m = 32374990;
  this.A = 0;
}
f = Ld.prototype;
f.toString = function() {
  return wb(this);
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.L = function() {
  return this.da;
};
f.ba = function() {
  return this.i < this.c.length - 2 ? new Ld(this.c, this.i + 2, this.da) : null;
};
f.Y = function() {
  return (this.c.length - this.i) / 2;
};
f.G = function() {
  return Nb(this);
};
f.w = function(a, b) {
  return $b(this, b);
};
f.U = function(a, b) {
  return vc(b, this);
};
f.V = function(a, b, c) {
  return yc(b, c, this);
};
f.W = function() {
  return new qd(null, 2, 5, wd, [this.c[this.i], this.c[this.i + 1]], null);
};
f.ca = function() {
  return this.i < this.c.length - 2 ? new Ld(this.c, this.i + 2, this.da) : Kb;
};
f.R = function() {
  return this;
};
f.S = function(a, b) {
  return new Ld(this.c, this.i, b);
};
f.M = function(a, b) {
  return R(b, this);
};
Ld.prototype[za] = function() {
  return Q(this);
};
function Md(a, b, c) {
  this.c = a;
  this.i = b;
  this.l = c;
}
Md.prototype.fb = function() {
  return this.i < this.l;
};
Md.prototype.next = function() {
  var a = new qd(null, 2, 5, wd, [this.c[this.i], this.c[this.i + 1]], null);
  this.i += 2;
  return a;
};
function oa(a, b, c, d) {
  this.meta = a;
  this.l = b;
  this.c = c;
  this.v = d;
  this.m = 16647951;
  this.A = 8196;
}
f = oa.prototype;
f.toString = function() {
  return wb(this);
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.keys = function() {
  return Q(Nd.j ? Nd.j(this) : Nd.call(null, this));
};
f.entries = function() {
  return Jd(K(this));
};
f.values = function() {
  return Q(Od.j ? Od.j(this) : Od.call(null, this));
};
f.has = function(a) {
  return hc(this, a, tc) === tc ? !1 : !0;
};
f.get = function(a, b) {
  return this.H(null, a, b);
};
f.forEach = function(a) {
  for (var b = K(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var g = c.K(null, e), h = fc(g, 0), g = fc(g, 1);
      a.f ? a.f(g, h) : a.call(null, g, h);
      e += 1;
    } else {
      if (b = K(b)) {
        qc(b) ? (c = qb(b), b = rb(b), h = c, d = T(c), c = h) : (c = N(b), h = fc(c, 0), c = g = fc(c, 1), a.f ? a.f(c, h) : a.call(null, c, h), b = O(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
f.O = function(a, b) {
  return I.o(this, b, null);
};
f.H = function(a, b, c) {
  a = Kd(this.c, b);
  return -1 === a ? c : this.c[a + 1];
};
f.Ta = function() {
  return new Md(this.c, 0, 2 * this.l);
};
f.L = function() {
  return this.meta;
};
f.Y = function() {
  return this.l;
};
f.G = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Pb(this);
};
f.w = function(a, b) {
  if (b && (b.m & 1024 || b.ub)) {
    var c = this.c.length;
    if (this.l === b.Y(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.H(null, this.c[d], tc);
          if (e !== tc) {
            if (P.f(this.c[d + 1], e)) {
              d += 2;
            } else {
              return !1;
            }
          } else {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return Hd(this, b);
  }
};
f.Ra = function() {
  return new Pd({}, this.c.length, D(this.c));
};
f.U = function(a, b) {
  return vc(b, this);
};
f.V = function(a, b, c) {
  return yc(b, c, this);
};
f.Na = function(a, b, c) {
  a = Kd(this.c, b);
  if (-1 === a) {
    if (this.l < Qd) {
      a = this.c;
      for (var d = a.length, e = Array(d + 2), g = 0;;) {
        if (g < d) {
          e[g] = a[g], g += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new oa(this.meta, this.l + 1, e, null);
    }
    a = jc;
    null != a ? a && (a.A & 4 || a.Gb) ? (d = wc(lb, jb(a), this), d = mb(d), a = nc(a), a = kc(d) && !(d ? d.m & 262144 || d.Lb || (d.m ? 0 : x(Xa, d)) : x(Xa, d)) ? new lc(d, a) : null == d ? null : Za(d, a)) : a = wc(Ga, a, this) : a = wc(cc, Kb, this);
    return Za(Ma(a, b, c), this.meta);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = D(this.c);
  b[a + 1] = c;
  return new oa(this.meta, this.l, b, null);
};
f.R = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new Ld(a, 0, null) : null;
};
f.S = function(a, b) {
  return new oa(b, this.l, this.c, this.v);
};
f.M = function(a, b) {
  if (pc(b)) {
    return Ma(this, E.f(b, 0), E.f(b, 1));
  }
  for (var c = this, d = K(b);;) {
    if (null == d) {
      return c;
    }
    var e = N(d);
    if (pc(e)) {
      c = Ma(c, E.f(e, 0), E.f(e, 1)), d = O(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(null, c);
      case 3:
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.f = function(a, c) {
    return this.O(null, c);
  };
  a.o = function(a, c, d) {
    return this.H(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(D(b)));
};
f.j = function(a) {
  return this.O(null, a);
};
f.f = function(a, b) {
  return this.H(null, a, b);
};
var Qd = 8;
oa.prototype[za] = function() {
  return Q(this);
};
function Pd(a, b, c) {
  this.La = a;
  this.Ma = b;
  this.c = c;
  this.m = 258;
  this.A = 56;
}
f = Pd.prototype;
f.Y = function() {
  if (v(this.La)) {
    return Bc(this.Ma);
  }
  throw Error("count after persistent!");
};
f.O = function(a, b) {
  return I.o(this, b, null);
};
f.H = function(a, b, c) {
  if (v(this.La)) {
    return a = Kd(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
f.Wa = function(a, b) {
  if (v(this.La)) {
    if (b ? b.m & 2048 || b.vb || (b.m ? 0 : x(Oa, b)) : x(Oa, b)) {
      return nb(this, Rd.j ? Rd.j(b) : Rd.call(null, b), Td.j ? Td.j(b) : Td.call(null, b));
    }
    for (var c = K(b), d = this;;) {
      var e = N(c);
      if (v(e)) {
        var g = e, c = O(c), d = nb(d, function() {
          var a = g;
          return Rd.j ? Rd.j(a) : Rd.call(null, a);
        }(), function() {
          var a = g;
          return Td.j ? Td.j(a) : Td.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
f.Xa = function() {
  if (v(this.La)) {
    return this.La = !1, new oa(null, Bc(this.Ma), this.c, null);
  }
  throw Error("persistent! called twice");
};
f.Oa = function(a, b, c) {
  if (v(this.La)) {
    a = Kd(this.c, b);
    if (-1 === a) {
      if (this.Ma + 2 <= 2 * Qd) {
        return this.Ma += 2, this.c.push(b), this.c.push(c), this;
      }
      a = this.Ma;
      var d = this.c;
      a = Ud.f ? Ud.f(a, d) : Ud.call(null, a, d);
      return nb(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function Ud(a, b) {
  for (var c = jb(jc), d = 0;;) {
    if (d < a) {
      c = nb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Vd() {
  this.val = !1;
}
function Wd(a, b) {
  return a === b ? !0 : a === b || a instanceof U && b instanceof U && a.Ea === b.Ea ? !0 : P.f(a, b);
}
function Xd(a, b, c) {
  a = D(a);
  a[b] = c;
  return a;
}
function Yd(a, b, c, d) {
  a = a.Ia(b);
  a.c[c] = d;
  return a;
}
function Zd(a, b, c) {
  this.B = a;
  this.I = b;
  this.c = c;
}
f = Zd.prototype;
f.Ia = function(a) {
  if (a === this.B) {
    return this;
  }
  var b = Cc(this.I), c = Array(0 > b ? 4 : 2 * (b + 1));
  sc(this.c, 0, c, 0, 2 * b);
  return new Zd(a, this.I, c);
};
f.Pa = function() {
  var a = this.c;
  return $d ? $d(a) : ae.call(null, a);
};
f.Ja = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.I & e)) {
    return d;
  }
  var g = Cc(this.I & e - 1), e = this.c[2 * g], g = this.c[2 * g + 1];
  return null == e ? g.Ja(a + 5, b, c, d) : Wd(c, e) ? g : d;
};
f.ja = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = Cc(this.I & h - 1);
  if (0 === (this.I & h)) {
    var l = Cc(this.I);
    if (2 * l < this.c.length) {
      a = this.Ia(a);
      b = a.c;
      g.val = !0;
      a: {
        for (c = 2 * (l - k), g = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[g];
          --l;
          --c;
          --g;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.I |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = be.ja(a, b + 5, c, d, e, g);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.I >>> d & 1) && (k[d] = null != this.c[e] ? be.ja(a, b + 5, Gb(this.c[e]), this.c[e], this.c[e + 1], g) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new ce(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    sc(this.c, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    sc(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    g.val = !0;
    a = this.Ia(a);
    a.c = b;
    a.I |= h;
    return a;
  }
  l = this.c[2 * k];
  h = this.c[2 * k + 1];
  if (null == l) {
    return l = h.ja(a, b + 5, c, d, e, g), l === h ? this : Yd(this, a, 2 * k + 1, l);
  }
  if (Wd(d, l)) {
    return e === h ? this : Yd(this, a, 2 * k + 1, e);
  }
  g.val = !0;
  g = b + 5;
  d = de ? de(a, g, l, h, c, d, e) : ee.call(null, a, g, l, h, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Ia(a);
  a.c[e] = null;
  a.c[k] = d;
  return a;
};
f.ia = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = Cc(this.I & g - 1);
  if (0 === (this.I & g)) {
    var k = Cc(this.I);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = be.ia(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.I >>> c & 1) && (h[c] = null != this.c[d] ? be.ia(a + 5, Gb(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new ce(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    sc(this.c, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    sc(this.c, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.val = !0;
    return new Zd(null, this.I | g, a);
  }
  var l = this.c[2 * h], g = this.c[2 * h + 1];
  if (null == l) {
    return k = g.ia(a + 5, b, c, d, e), k === g ? this : new Zd(null, this.I, Xd(this.c, 2 * h + 1, k));
  }
  if (Wd(c, l)) {
    return d === g ? this : new Zd(null, this.I, Xd(this.c, 2 * h + 1, d));
  }
  e.val = !0;
  e = this.I;
  k = this.c;
  a += 5;
  a = fe ? fe(a, l, g, b, c, d) : ee.call(null, a, l, g, b, c, d);
  c = 2 * h;
  h = 2 * h + 1;
  d = D(k);
  d[c] = null;
  d[h] = a;
  return new Zd(null, e, d);
};
var be = new Zd(null, 0, []);
function ce(a, b, c) {
  this.B = a;
  this.l = b;
  this.c = c;
}
f = ce.prototype;
f.Ia = function(a) {
  return a === this.B ? this : new ce(a, this.l, D(this.c));
};
f.Pa = function() {
  var a = this.c;
  return ge ? ge(a) : he.call(null, a);
};
f.Ja = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.Ja(a + 5, b, c, d) : d;
};
f.ja = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.c[h];
  if (null == k) {
    return a = Yd(this, a, h, be.ja(a, b + 5, c, d, e, g)), a.l += 1, a;
  }
  b = k.ja(a, b + 5, c, d, e, g);
  return b === k ? this : Yd(this, a, h, b);
};
f.ia = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.c[g];
  if (null == h) {
    return new ce(null, this.l + 1, Xd(this.c, g, be.ia(a + 5, b, c, d, e)));
  }
  a = h.ia(a + 5, b, c, d, e);
  return a === h ? this : new ce(null, this.l, Xd(this.c, g, a));
};
function ie(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Wd(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return -1;
    }
  }
}
function je(a, b, c, d) {
  this.B = a;
  this.Da = b;
  this.l = c;
  this.c = d;
}
f = je.prototype;
f.Ia = function(a) {
  if (a === this.B) {
    return this;
  }
  var b = Array(2 * (this.l + 1));
  sc(this.c, 0, b, 0, 2 * this.l);
  return new je(a, this.Da, this.l, b);
};
f.Pa = function() {
  var a = this.c;
  return $d ? $d(a) : ae.call(null, a);
};
f.Ja = function(a, b, c, d) {
  a = ie(this.c, this.l, c);
  return 0 > a ? d : Wd(c, this.c[a]) ? this.c[a + 1] : d;
};
f.ja = function(a, b, c, d, e, g) {
  if (c === this.Da) {
    b = ie(this.c, this.l, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.l) {
        return b = 2 * this.l, c = 2 * this.l + 1, a = this.Ia(a), a.c[b] = d, a.c[c] = e, g.val = !0, a.l += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      sc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.val = !0;
      d = this.l + 1;
      a === this.B ? (this.c = b, this.l = d, a = this) : a = new je(this.B, this.Da, d, b);
      return a;
    }
    return this.c[b + 1] === e ? this : Yd(this, a, b + 1, e);
  }
  return (new Zd(a, 1 << (this.Da >>> b & 31), [null, this, null, null])).ja(a, b, c, d, e, g);
};
f.ia = function(a, b, c, d, e) {
  return b === this.Da ? (a = ie(this.c, this.l, c), -1 === a ? (a = 2 * this.l, b = Array(a + 2), sc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.val = !0, new je(null, this.Da, this.l + 1, b)) : P.f(this.c[a], d) ? this : new je(null, this.Da, this.l, Xd(this.c, a + 1, d))) : (new Zd(null, 1 << (this.Da >>> a & 31), [null, this])).ia(a, b, c, d, e);
};
function ee() {
  switch(arguments.length) {
    case 6:
      return fe(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return de(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function fe(a, b, c, d, e, g) {
  var h = Gb(b);
  if (h === d) {
    return new je(null, h, 2, [b, c, e, g]);
  }
  var k = new Vd;
  return be.ia(a, h, b, c, k).ia(a, d, e, g, k);
}
function de(a, b, c, d, e, g, h) {
  var k = Gb(c);
  if (k === e) {
    return new je(null, k, 2, [c, d, g, h]);
  }
  var l = new Vd;
  return be.ja(a, b, k, c, d, l).ja(a, b, e, g, h, l);
}
function ke(a, b, c, d, e) {
  this.meta = a;
  this.Fa = b;
  this.i = c;
  this.s = d;
  this.v = e;
  this.m = 32374860;
  this.A = 0;
}
f = ke.prototype;
f.toString = function() {
  return wb(this);
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.L = function() {
  return this.meta;
};
f.G = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Nb(this);
};
f.w = function(a, b) {
  return $b(this, b);
};
f.U = function(a, b) {
  return vc(b, this);
};
f.V = function(a, b, c) {
  return yc(b, c, this);
};
f.W = function() {
  return null == this.s ? new qd(null, 2, 5, wd, [this.Fa[this.i], this.Fa[this.i + 1]], null) : N(this.s);
};
f.ca = function() {
  if (null == this.s) {
    var a = this.Fa, b = this.i + 2;
    return le ? le(a, b, null) : ae.call(null, a, b, null);
  }
  var a = this.Fa, b = this.i, c = O(this.s);
  return le ? le(a, b, c) : ae.call(null, a, b, c);
};
f.R = function() {
  return this;
};
f.S = function(a, b) {
  return new ke(b, this.Fa, this.i, this.s, this.v);
};
f.M = function(a, b) {
  return R(b, this);
};
ke.prototype[za] = function() {
  return Q(this);
};
function ae() {
  switch(arguments.length) {
    case 1:
      return $d(arguments[0]);
    case 3:
      return le(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function $d(a) {
  return le(a, 0, null);
}
function le(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new ke(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (v(d) && (d = d.Pa(), v(d))) {
          return new ke(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new ke(null, a, b, c, null);
  }
}
function me(a, b, c, d, e) {
  this.meta = a;
  this.Fa = b;
  this.i = c;
  this.s = d;
  this.v = e;
  this.m = 32374860;
  this.A = 0;
}
f = me.prototype;
f.toString = function() {
  return wb(this);
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.L = function() {
  return this.meta;
};
f.G = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Nb(this);
};
f.w = function(a, b) {
  return $b(this, b);
};
f.U = function(a, b) {
  return vc(b, this);
};
f.V = function(a, b, c) {
  return yc(b, c, this);
};
f.W = function() {
  return N(this.s);
};
f.ca = function() {
  var a = this.Fa, b = this.i, c = O(this.s);
  return ne ? ne(null, a, b, c) : he.call(null, null, a, b, c);
};
f.R = function() {
  return this;
};
f.S = function(a, b) {
  return new me(b, this.Fa, this.i, this.s, this.v);
};
f.M = function(a, b) {
  return R(b, this);
};
me.prototype[za] = function() {
  return Q(this);
};
function he() {
  switch(arguments.length) {
    case 1:
      return ge(arguments[0]);
    case 4:
      return ne(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function ge(a) {
  return ne(null, a, 0, null);
}
function ne(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (v(e) && (e = e.Pa(), v(e))) {
          return new me(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new me(a, b, c, d, null);
  }
}
function oe(a, b, c, d, e, g) {
  this.meta = a;
  this.l = b;
  this.root = c;
  this.fa = d;
  this.ha = e;
  this.v = g;
  this.m = 16123663;
  this.A = 8196;
}
f = oe.prototype;
f.toString = function() {
  return wb(this);
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.keys = function() {
  return Q(Nd.j ? Nd.j(this) : Nd.call(null, this));
};
f.entries = function() {
  return Jd(K(this));
};
f.values = function() {
  return Q(Od.j ? Od.j(this) : Od.call(null, this));
};
f.has = function(a) {
  return hc(this, a, tc) === tc ? !1 : !0;
};
f.get = function(a, b) {
  return this.H(null, a, b);
};
f.forEach = function(a) {
  for (var b = K(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var g = c.K(null, e), h = fc(g, 0), g = fc(g, 1);
      a.f ? a.f(g, h) : a.call(null, g, h);
      e += 1;
    } else {
      if (b = K(b)) {
        qc(b) ? (c = qb(b), b = rb(b), h = c, d = T(c), c = h) : (c = N(b), h = fc(c, 0), c = g = fc(c, 1), a.f ? a.f(c, h) : a.call(null, c, h), b = O(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
f.O = function(a, b) {
  return I.o(this, b, null);
};
f.H = function(a, b, c) {
  return null == b ? this.fa ? this.ha : c : null == this.root ? c : this.root.Ja(0, Gb(b), b, c);
};
f.L = function() {
  return this.meta;
};
f.Y = function() {
  return this.l;
};
f.G = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Pb(this);
};
f.w = function(a, b) {
  return Hd(this, b);
};
f.Ra = function() {
  return new pe({}, this.root, this.l, this.fa, this.ha);
};
f.Na = function(a, b, c) {
  if (null == b) {
    return this.fa && c === this.ha ? this : new oe(this.meta, this.fa ? this.l : this.l + 1, this.root, !0, c, null);
  }
  a = new Vd;
  b = (null == this.root ? be : this.root).ia(0, Gb(b), b, c, a);
  return b === this.root ? this : new oe(this.meta, a.val ? this.l + 1 : this.l, b, this.fa, this.ha, null);
};
f.R = function() {
  if (0 < this.l) {
    var a = null != this.root ? this.root.Pa() : null;
    return this.fa ? R(new qd(null, 2, 5, wd, [null, this.ha], null), a) : a;
  }
  return null;
};
f.S = function(a, b) {
  return new oe(b, this.l, this.root, this.fa, this.ha, this.v);
};
f.M = function(a, b) {
  if (pc(b)) {
    return Ma(this, E.f(b, 0), E.f(b, 1));
  }
  for (var c = this, d = K(b);;) {
    if (null == d) {
      return c;
    }
    var e = N(d);
    if (pc(e)) {
      c = Ma(c, E.f(e, 0), E.f(e, 1)), d = O(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(null, c);
      case 3:
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.f = function(a, c) {
    return this.O(null, c);
  };
  a.o = function(a, c, d) {
    return this.H(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(D(b)));
};
f.j = function(a) {
  return this.O(null, a);
};
f.f = function(a, b) {
  return this.H(null, a, b);
};
var jc = new oe(null, 0, null, !1, null, Qb);
oe.prototype[za] = function() {
  return Q(this);
};
function pe(a, b, c, d, e) {
  this.B = a;
  this.root = b;
  this.count = c;
  this.fa = d;
  this.ha = e;
  this.m = 258;
  this.A = 56;
}
function qe(a, b) {
  if (a.B) {
    if (b ? b.m & 2048 || b.vb || (b.m ? 0 : x(Oa, b)) : x(Oa, b)) {
      return re(a, Rd.j ? Rd.j(b) : Rd.call(null, b), Td.j ? Td.j(b) : Td.call(null, b));
    }
    for (var c = K(b), d = a;;) {
      var e = N(c);
      if (v(e)) {
        var g = e, c = O(c), d = re(d, function() {
          var a = g;
          return Rd.j ? Rd.j(a) : Rd.call(null, a);
        }(), function() {
          var a = g;
          return Td.j ? Td.j(a) : Td.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function re(a, b, c) {
  if (a.B) {
    if (null == b) {
      a.ha !== c && (a.ha = c), a.fa || (a.count += 1, a.fa = !0);
    } else {
      var d = new Vd;
      b = (null == a.root ? be : a.root).ja(a.B, 0, Gb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.val && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
f = pe.prototype;
f.Y = function() {
  if (this.B) {
    return this.count;
  }
  throw Error("count after persistent!");
};
f.O = function(a, b) {
  return null == b ? this.fa ? this.ha : null : null == this.root ? null : this.root.Ja(0, Gb(b), b);
};
f.H = function(a, b, c) {
  return null == b ? this.fa ? this.ha : c : null == this.root ? c : this.root.Ja(0, Gb(b), b, c);
};
f.Wa = function(a, b) {
  return qe(this, b);
};
f.Xa = function() {
  var a;
  if (this.B) {
    this.B = null, a = new oe(null, this.count, this.root, this.fa, this.ha, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
f.Oa = function(a, b, c) {
  return re(this, b, c);
};
var ad = function ad() {
  var b = 0 < arguments.length ? new M(Array.prototype.slice.call(arguments, 0), 0) : null;
  return ad.C(b);
};
ad.C = function(a) {
  for (var b = K(a), c = jb(jc);;) {
    if (b) {
      a = O(O(b));
      var d = N(b), b = N(O(b)), c = nb(c, d, b), b = a;
    } else {
      return mb(c);
    }
  }
};
ad.T = 0;
ad.J = function(a) {
  return ad.C(K(a));
};
function se(a, b) {
  this.X = a;
  this.da = b;
  this.m = 32374988;
  this.A = 0;
}
f = se.prototype;
f.toString = function() {
  return wb(this);
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.L = function() {
  return this.da;
};
f.ba = function() {
  var a = this.X, a = (a ? a.m & 128 || a.Ua || (a.m ? 0 : x(Ka, a)) : x(Ka, a)) ? this.X.ba(null) : O(this.X);
  return null == a ? null : new se(a, this.da);
};
f.G = function() {
  return Nb(this);
};
f.w = function(a, b) {
  return $b(this, b);
};
f.U = function(a, b) {
  return vc(b, this);
};
f.V = function(a, b, c) {
  return yc(b, c, this);
};
f.W = function() {
  return this.X.W(null).bb();
};
f.ca = function() {
  var a = this.X, a = (a ? a.m & 128 || a.Ua || (a.m ? 0 : x(Ka, a)) : x(Ka, a)) ? this.X.ba(null) : O(this.X);
  return null != a ? new se(a, this.da) : Kb;
};
f.R = function() {
  return this;
};
f.S = function(a, b) {
  return new se(this.X, b);
};
f.M = function(a, b) {
  return R(b, this);
};
se.prototype[za] = function() {
  return Q(this);
};
function Nd(a) {
  return (a = K(a)) ? new se(a, null) : null;
}
function Rd(a) {
  return Pa(a);
}
function te(a, b) {
  this.X = a;
  this.da = b;
  this.m = 32374988;
  this.A = 0;
}
f = te.prototype;
f.toString = function() {
  return wb(this);
};
f.equiv = function(a) {
  return this.w(null, a);
};
f.L = function() {
  return this.da;
};
f.ba = function() {
  var a = this.X, a = (a ? a.m & 128 || a.Ua || (a.m ? 0 : x(Ka, a)) : x(Ka, a)) ? this.X.ba(null) : O(this.X);
  return null == a ? null : new te(a, this.da);
};
f.G = function() {
  return Nb(this);
};
f.w = function(a, b) {
  return $b(this, b);
};
f.U = function(a, b) {
  return vc(b, this);
};
f.V = function(a, b, c) {
  return yc(b, c, this);
};
f.W = function() {
  return this.X.W(null).cb();
};
f.ca = function() {
  var a = this.X, a = (a ? a.m & 128 || a.Ua || (a.m ? 0 : x(Ka, a)) : x(Ka, a)) ? this.X.ba(null) : O(this.X);
  return null != a ? new te(a, this.da) : Kb;
};
f.R = function() {
  return this;
};
f.S = function(a, b) {
  return new te(this.X, b);
};
f.M = function(a, b) {
  return R(b, this);
};
te.prototype[za] = function() {
  return Q(this);
};
function Od(a) {
  return (a = K(a)) ? new te(a, null) : null;
}
function Td(a) {
  return Ra(a);
}
function Ic(a) {
  if (a && (a.A & 4096 || a.xb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([B("Doesn't support name: "), B(a)].join(""));
}
function ue(a, b, c, d, e, g, h) {
  var k = ja;
  ja = null == ja ? null : ja - 1;
  try {
    if (null != ja && 0 > ja) {
      return J(a, "#");
    }
    J(a, c);
    if (0 === va.j(g)) {
      K(h) && J(a, function() {
        var a = ve.j(g);
        return v(a) ? a : "...";
      }());
    } else {
      if (K(h)) {
        var l = N(h);
        b.o ? b.o(l, a, g) : b.call(null, l, a, g);
      }
      for (var m = O(h), n = va.j(g) - 1;;) {
        if (!m || null != n && 0 === n) {
          K(m) && 0 === n && (J(a, d), J(a, function() {
            var a = ve.j(g);
            return v(a) ? a : "...";
          }()));
          break;
        } else {
          J(a, d);
          var p = N(m);
          c = a;
          h = g;
          b.o ? b.o(p, c, h) : b.call(null, p, c, h);
          var q = O(m);
          c = n - 1;
          m = q;
          n = c;
        }
      }
    }
    return J(a, e);
  } finally {
    ja = k;
  }
}
function we(a, b) {
  for (var c = K(b), d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.K(null, g);
      J(a, h);
      g += 1;
    } else {
      if (c = K(c)) {
        d = c, qc(d) ? (c = qb(d), e = rb(d), d = c, h = T(c), c = e, e = h) : (h = N(d), J(a, h), c = O(d), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
}
var xe = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function ye(a) {
  return [B('"'), B(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return xe[a];
  })), B('"')].join("");
}
function ze(a, b, c) {
  if (null == a) {
    return J(b, "nil");
  }
  if (void 0 === a) {
    return J(b, "#\x3cundefined\x3e");
  }
  if (v(function() {
    var b = gc(c, sa);
    return v(b) ? (b = a ? a.m & 131072 || a.wb ? !0 : a.m ? !1 : x(Va, a) : x(Va, a)) ? nc(a) : b : b;
  }())) {
    J(b, "^");
    var d = nc(a);
    Z.o ? Z.o(d, b, c) : Z.call(null, d, b, c);
    J(b, " ");
  }
  return null == a ? J(b, "nil") : a.Bb ? a.Mb(a, b, c) : a && (a.m & 2147483648 || a.P) ? a.F(null, b, c) : (null == a ? null : a.constructor) === Boolean || "number" === typeof a ? J(b, "" + B(a)) : null != a && a.constructor === Object ? (J(b, "#js "), d = Y.f(function(b) {
    return new qd(null, 2, 5, wd, [Hc.j(b), a[b]], null);
  }, rc(a)), Ae.N ? Ae.N(d, Z, b, c) : Ae.call(null, d, Z, b, c)) : xa(a) ? ue(b, Z, "#js [", " ", "]", c, a) : v("string" == typeof a) ? v(ra.j(c)) ? J(b, ye(a)) : J(b, a) : kc(a) ? we(b, bc(["#\x3c", "" + B(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + B(a);;) {
      if (T(c) < b) {
        c = [B("0"), B(c)].join("");
      } else {
        return c;
      }
    }
  }, we(b, bc(['#inst "', "" + B(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : v(a instanceof RegExp) ? we(b, bc(['#"', a.source, '"'], 0)) : (a ? a.m & 2147483648 || a.P || (a.m ? 0 : x(gb, a)) : x(gb, a)) ? hb(a, b, c) : we(b, bc(["#\x3c", "" + B(a), "\x3e"], 0));
}
function Z(a, b, c) {
  var d = Ce.j(c);
  return v(d) ? (c = ic.o(c, De, ze), d.o ? d.o(a, b, c) : d.call(null, a, b, c)) : ze(a, b, c);
}
function dd() {
  var a = 0 < arguments.length ? new M(Array.prototype.slice.call(arguments, 0), 0) : null;
  return Ee(a);
}
function Ee(a) {
  var b = ma(), c;
  (c = null == a) || (c = K(a), c = v(c) ? !1 : !0);
  if (c) {
    b = "";
  } else {
    c = B;
    var d = new ha;
    a: {
      var e = new vb(d);
      Z(N(a), e, b);
      a = K(O(a));
      for (var g = null, h = 0, k = 0;;) {
        if (k < h) {
          var l = g.K(null, k);
          J(e, " ");
          Z(l, e, b);
          k += 1;
        } else {
          if (a = K(a)) {
            g = a, qc(g) ? (a = qb(g), h = rb(g), g = a, l = T(a), a = h, h = l) : (l = N(g), J(e, " "), Z(l, e, b), a = O(g), g = null, h = 0), k = 0;
          } else {
            break a;
          }
        }
      }
    }
    b = "" + c(d);
  }
  return b;
}
function Ae(a, b, c, d) {
  return ue(c, function(a, c, d) {
    var k = Pa(a);
    b.o ? b.o(k, c, d) : b.call(null, k, c, d);
    J(c, " ");
    a = Ra(a);
    return b.o ? b.o(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, K(a));
}
M.prototype.P = !0;
M.prototype.F = function(a, b, c) {
  return ue(b, Z, "(", " ", ")", c, this);
};
V.prototype.P = !0;
V.prototype.F = function(a, b, c) {
  return ue(b, Z, "(", " ", ")", c, this);
};
ke.prototype.P = !0;
ke.prototype.F = function(a, b, c) {
  return ue(b, Z, "(", " ", ")", c, this);
};
Ld.prototype.P = !0;
Ld.prototype.F = function(a, b, c) {
  return ue(b, Z, "(", " ", ")", c, this);
};
xd.prototype.P = !0;
xd.prototype.F = function(a, b, c) {
  return ue(b, Z, "(", " ", ")", c, this);
};
Gc.prototype.P = !0;
Gc.prototype.F = function(a, b, c) {
  return ue(b, Z, "(", " ", ")", c, this);
};
oe.prototype.P = !0;
oe.prototype.F = function(a, b, c) {
  return Ae(this, Z, b, c);
};
me.prototype.P = !0;
me.prototype.F = function(a, b, c) {
  return ue(b, Z, "(", " ", ")", c, this);
};
Bd.prototype.P = !0;
Bd.prototype.F = function(a, b, c) {
  return ue(b, Z, "[", " ", "]", c, this);
};
Mc.prototype.P = !0;
Mc.prototype.F = function(a, b, c) {
  return ue(b, Z, "(", " ", ")", c, this);
};
Yc.prototype.P = !0;
Yc.prototype.F = function(a, b, c) {
  J(b, "#\x3cAtom: ");
  Z(this.state, b, c);
  return J(b, "\x3e");
};
te.prototype.P = !0;
te.prototype.F = function(a, b, c) {
  return ue(b, Z, "(", " ", ")", c, this);
};
qd.prototype.P = !0;
qd.prototype.F = function(a, b, c) {
  return ue(b, Z, "[", " ", "]", c, this);
};
Ec.prototype.P = !0;
Ec.prototype.F = function(a, b) {
  return J(b, "()");
};
oa.prototype.P = !0;
oa.prototype.F = function(a, b, c) {
  return Ae(this, Z, b, c);
};
se.prototype.P = !0;
se.prototype.F = function(a, b, c) {
  return ue(b, Z, "(", " ", ")", c, this);
};
Dc.prototype.P = !0;
Dc.prototype.F = function(a, b, c) {
  return ue(b, Z, "(", " ", ")", c, this);
};
var Fe = {}, Ge = function Ge(b) {
  if (b ? b.qb : b) {
    return b.qb(b);
  }
  var c;
  c = Ge[r(null == b ? null : b)];
  if (!c && (c = Ge._, !c)) {
    throw y("IEncodeJS.-clj-\x3ejs", b);
  }
  return c.call(null, b);
};
function He(a) {
  return (a ? v(v(null) ? null : a.pb) || (a.kb ? 0 : x(Fe, a)) : x(Fe, a)) ? Ge(a) : "string" === typeof a || "number" === typeof a || a instanceof U || a instanceof Ib ? Ie.j ? Ie.j(a) : Ie.call(null, a) : Ee(bc([a], 0));
}
var Ie = function Ie(b) {
  if (null == b) {
    return null;
  }
  if (b ? v(v(null) ? null : b.pb) || (b.kb ? 0 : x(Fe, b)) : x(Fe, b)) {
    return Ge(b);
  }
  if (b instanceof U) {
    return Ic(b);
  }
  if (b instanceof Ib) {
    return "" + B(b);
  }
  if (oc(b)) {
    var c = {};
    b = K(b);
    for (var d = null, e = 0, g = 0;;) {
      if (g < e) {
        var h = d.K(null, g), k = fc(h, 0), h = fc(h, 1);
        c[He(k)] = Ie(h);
        g += 1;
      } else {
        if (b = K(b)) {
          qc(b) ? (e = qb(b), b = rb(b), d = e, e = T(e)) : (e = N(b), d = fc(e, 0), e = fc(e, 1), c[He(d)] = Ie(e), b = O(b), d = null, e = 0), g = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (null == b ? 0 : b ? b.m & 8 || b.Fb || (b.m ? 0 : x(Fa, b)) : x(Fa, b)) {
    c = [];
    b = K(Y.f(Ie, b));
    d = null;
    for (g = e = 0;;) {
      if (g < e) {
        k = d.K(null, g), c.push(k), g += 1;
      } else {
        if (b = K(b)) {
          d = b, qc(d) ? (b = qb(d), g = rb(d), d = b, e = T(b), b = g) : (b = N(d), c.push(b), b = O(d), d = null, e = 0), g = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
};
var sa = new U(null, "meta", "meta", 1499536964), ta = new U(null, "dup", "dup", 556298533), bd = new U(null, "validator", "validator", -1966190681), Je = new U(null, "width", "width", -384071477), De = new U(null, "fallback-impl", "fallback-impl", -1501286995), Ke = new U(null, "icon", "icon", 1679606541), pa = new U(null, "flush-on-newline", "flush-on-newline", -151457939), Le = new U(null, "title", "title", 636505583), ra = new U(null, "readably", "readably", 1129599760), ve = new U(null, "more-marker", 
"more-marker", -14717935), Me = new U(null, "resizable", "resizable", -2107060206), va = new U(null, "print-length", "print-length", 1931866356), Ce = new U(null, "alt-impl", "alt-impl", 670969595), Ne = new U(null, "height", "height", 1025178622);
var Oe = require("app"), Pe = require("path"), Qe = require("browser-window"), Re = require("crash-reporter"), Se = require("process"), Te = $c ? $c(null) : Zc.call(null, null), Ue = B, Ve, We = Pe.sep, Xe = new qd(null, 4, 5, wd, [Se.cwd(), "resources", "app", "assets"], null);
Ve = function(a, b) {
  return new V(null, function(c) {
    return function() {
      return c(a, b);
    };
  }(function(a, b) {
    for (;;) {
      var e = K(b);
      if (0 < a && e) {
        var g = a - 1, e = Jb(e);
        a = g;
        b = e;
      } else {
        return e;
      }
    }
  }), null, null);
}(1, fd.f(ed(We), Xe));
var Ye = Uc(Ue, Ve);
console.log(Ye);
var Ze = Ie(new oa(null, 5, [Le, "Toby - A YouTube player for the desktop", Je, 640, Ne, 400, Ke, [B(Ye), B(Pe.sep), B("images"), B(Pe.sep), B("t.png")].join(""), Me, !0], null));
function $e() {
  var a = new Qe(Ze);
  cd.f ? cd.f(Te, a) : cd.call(null, Te, a);
  (Rb.j ? Rb.j(Te) : Rb.call(null, Te)).loadUrl([B("file://"), B(Ye), B("\\html\\toby.html")].join(""));
  return (Rb.j ? Rb.j(Te) : Rb.call(null, Te)).on("closed", function() {
    return cd.f ? cd.f(Te, null) : cd.call(null, Te, null);
  });
}
Re.start();
Oe.on("window-all-closed", function() {
  var a;
  P.f(process.platform, "darwin") ? a = null : (console.log("app.quit called"), a = Oe.quit());
  return a;
});
Oe.on("ready", function() {
  return $e();
});

})();
