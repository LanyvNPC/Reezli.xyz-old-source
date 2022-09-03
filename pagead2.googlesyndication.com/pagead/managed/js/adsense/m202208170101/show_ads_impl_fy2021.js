(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var p, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var da = ca(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        ha = {},
        ia = {};

    function ja(a, b) {
        var c = ia[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function ka(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in ha ? f = ha : f = da;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? aa(ha, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ia[d] && (a = 1E9 * Math.random() >>> 0, ia[d] = fa ? da.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var la = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ma;
    if (fa && "function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = ma;

    function ra(a, b) {
        a.prototype = la(b.prototype);
        a.prototype.constructor = a;
        if (qa) qa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Jf = b.prototype
    }
    ka("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        ra(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    ka("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ha.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    var u = this || self;

    function ta(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function ua(a) {
        var b = ta(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function wa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function xa(a) {
        return Object.prototype.hasOwnProperty.call(a, ya) && a[ya] || (a[ya] = ++za)
    }
    var ya = "closure_uid_" + (1E9 * Math.random() >>> 0),
        za = 0;

    function Aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ba(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ca(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ca = Aa : Ca = Ba;
        return Ca.apply(null, arguments)
    }

    function Da(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ea() {
        return Date.now()
    }

    function Fa(a, b) {
        a = a.split(".");
        var c = u;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ha(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Jf = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Dj = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Ia(a) {
        return a
    };
    var Ja = {
        Ki: 0,
        Ji: 1,
        Ii: 2
    };

    function Ka(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ka);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Ha(Ka, Error);
    Ka.prototype.name = "CustomError";
    var La;

    function Ma(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ka.call(this, c + a[d])
    }
    Ha(Ma, Ka);
    Ma.prototype.name = "AssertionError";

    function Na(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Oa(a) {
        if (!Pa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Qa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ra, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Sa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ta, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ua, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Va, "&#0;"));
        return a
    }
    var Qa = /&/g,
        Ra = /</g,
        Sa = />/g,
        Ta = /"/g,
        Ua = /'/g,
        Va = /\x00/g,
        Pa = /[\x00&<>"']/;

    function Wa(a, b) {
        return -1 != a.indexOf(b)
    }

    function Xa(a, b) {
        let c = 0;
        a = Na(String(a)).split(".");
        b = Na(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = Ya(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || Ya(0 == e[2].length, 0 == f[2].length) || Ya(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function Ya(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Za() {
        var a = u.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function v(a) {
        return Wa(Za(), a)
    };

    function $a() {
        return v("Opera")
    }

    function ab() {
        return v("Trident") || v("MSIE")
    }

    function bb() {
        return v("Firefox") || v("FxiOS")
    }

    function cb() {
        return v("Safari") && !(db() || v("Coast") || $a() || v("Edge") || v("Edg/") || v("OPR") || bb() || v("Silk") || v("Android"))
    }

    function db() {
        return (v("Chrome") || v("CriOS")) && !v("Edge") || v("Silk")
    }

    function eb() {
        return v("Android") && !(db() || bb() || $a() || v("Silk"))
    }

    function fb(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function gb() {
        var a = Za();
        if (ab()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = fb(b);
        return $a() ? a(["Version", "Opera"]) :
            v("Edge") ? a(["Edge"]) : v("Edg/") ? a(["Edg"]) : v("Silk") ? a(["Silk"]) : db() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function hb(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function ib(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function jb(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function kb(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function lb(a, b, c) {
        let d = c;
        ib(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function mb(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function nb(a, b) {
        return 0 <= hb(a, b)
    }

    function ob(a, b) {
        b = hb(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function pb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function qb(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function rb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function sb(a, b) {
        if (!ua(a) || !ua(b) || a.length != b.length) return !1;
        const c = a.length,
            d = tb;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function tb(a, b) {
        return a === b
    }

    function ub(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = ub.apply(null, rb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function vb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function wb(a) {
        wb[" "](a);
        return a
    }
    wb[" "] = function() {};

    function xb(a, b) {
        try {
            return wb(a[b]), !0
        } catch (c) {}
        return !1
    }

    function yb(a, b, c, d) {
        d = d ? d(b) : b;
        return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    };
    var zb = $a(),
        Ab = ab(),
        Bb = v("Edge"),
        Cb = Bb || Ab,
        Db = v("Gecko") && !(Wa(Za().toLowerCase(), "webkit") && !v("Edge")) && !(v("Trident") || v("MSIE")) && !v("Edge"),
        Eb = Wa(Za().toLowerCase(), "webkit") && !v("Edge");

    function Fb() {
        var a = u.document;
        return a ? a.documentMode : void 0
    }
    var Gb;
    a: {
        var Hb = "",
            Ib = function() {
                var a = Za();
                if (Db) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Bb) return /Edge\/([\d\.]+)/.exec(a);
                if (Ab) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Eb) return /WebKit\/(\S+)/.exec(a);
                if (zb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ib && (Hb = Ib ? Ib[1] : "");
        if (Ab) {
            var Jb = Fb();
            if (null != Jb && Jb > parseFloat(Hb)) {
                Gb = String(Jb);
                break a
            }
        }
        Gb = Hb
    }
    var Kb = Gb,
        Lb = {};

    function Mb(a) {
        return yb(Lb, a, function() {
            return 0 <= Xa(Kb, a)
        })
    }
    var Nb;
    if (u.document && Ab) {
        var Ob = Fb();
        Nb = Ob ? Ob : parseInt(Kb, 10) || void 0
    } else Nb = void 0;
    var Pb = Nb;
    eb();
    db();
    cb();
    var Qb = {},
        Rb = null;

    function Sb(a, b) {
        void 0 === b && (b = 0);
        Tb();
        b = Qb[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                l = a[e + 2],
                k = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | l >> 6];
            l = b[l & 63];
            c[f++] = k + g + h + l
        }
        k = 0;
        l = d;
        switch (a.length - e) {
            case 2:
                k = a[e + 1], l = b[(k & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | k >> 4] + l + d
        }
        return c.join("")
    }

    function Ub(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return Sb(b, 3)
    }

    function Vb(a) {
        var b = [];
        Wb(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Xb(a) {
        var b = a.length,
            c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : Wa("=.", a[b - 1]) && (c = Wa("=.", a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c),
            e = 0;
        Wb(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    }

    function Wb(a, b) {
        function c(l) {
            for (; d < a.length;) {
                var k = a.charAt(d++),
                    m = Rb[k];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(k)) throw Error("Unknown base64 encoding at char: " + k);
            }
            return l
        }
        Tb();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function Tb() {
        if (!Rb) {
            Rb = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Qb[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Rb[f] && (Rb[f] = e)
                }
            }
        }
    };
    var Yb = "undefined" !== typeof Uint8Array;

    function Zb(a) {
        return Yb && null != a && a instanceof Uint8Array
    }
    let $b;
    var ac = {};
    let bc;

    function cc(a) {
        if (a !== ac) throw Error("illegal external caller");
    }

    function dc() {
        return bc || (bc = new ec(null, ac))
    }
    var ec = class {
        constructor(a, b) {
            cc(b);
            this.P = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.P
        }
    };
    const fc = Symbol(void 0);

    function gc(a, b) {
        Object.isFrozen(a) || (fc ? a[fc] |= b : void 0 !== a.sa ? a.sa |= b : Object.defineProperties(a, {
            sa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function hc(a, b) {
        Object.isExtensible(a) && (fc ? a[fc] && (a[fc] &= ~b) : void 0 !== a.sa && (a.sa &= ~b))
    }

    function ic(a) {
        let b;
        fc ? b = a[fc] : b = a.sa;
        return null == b ? 0 : b
    }

    function jc(a, b) {
        fc ? a[fc] = b : void 0 !== a.sa ? a.sa = b : Object.defineProperties(a, {
            sa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function kc(a) {
        gc(a, 1);
        return a
    }

    function lc(a) {
        return a ? !!(ic(a) & 2) : !1
    }

    function mc(a) {
        gc(a, 16);
        return a
    }

    function nc(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        hc(a, 16)
    }

    function oc(a, b) {
        b ? gc(a, 8) : hc(a, 8)
    }

    function pc(a, b) {
        jc(b, (ic(a) | 0) & -51)
    };

    function qc(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let rc;
    var sc = Object.freeze(kc([]));

    function tc(a) {
        if (lc(a.M)) throw Error("Cannot mutate an immutable Message");
    }

    function uc(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };

    function vc(a, b, c = !1, d = !1) {
        if (Array.isArray(a)) return new b(d ? mc(a) : a);
        if (c) return new b
    };

    function wc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (Zb(a)) return Sb(a);
                    if (a instanceof ec) {
                        var b = a.P;
                        b = null == b || "string" === typeof b ? b : Yb && b instanceof Uint8Array ? Sb(b) : null;
                        return null == b ? "" : a.P = b
                    }
                }
        }
        return a
    };

    function xc(a, b, c) {
        if (null != a) {
            if (Array.isArray(a)) a = yc(a, b, c);
            else if (qc(a)) {
                const d = {};
                for (let e in a) Object.prototype.hasOwnProperty.call(a, e) && (d[e] = xc(a[e], b, c));
                a = d
            } else a = b(a);
            return a
        }
    }

    function yc(a, b, c) {
        const d = Array.prototype.slice.call(a);
        c(a, d);
        for (a = 0; a < d.length; a++) d[a] = xc(d[a], b, c);
        return d
    }

    function zc(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = wc(a);
        return Array.isArray(a) ? yc(a, zc, Ac) : a
    }

    function Bc(a) {
        if ("object" === typeof a) {
            if (Zb(a)) return new Uint8Array(a);
            if (Array.isArray(a.M) && a.constructor !== Object) return Cc(a)
        }
        return a
    }

    function Ac() {};

    function Dc(a) {
        return a.A || (a.A = a.M[a.C + a.B] = {})
    }

    function x(a, b, c = !1) {
        return -1 === b ? null : b >= a.C ? a.A ? a.A[b] : void 0 : c && a.A && (c = a.A[b], null != c) ? c : a.M[b + a.B]
    }

    function y(a, b, c, d = !1, e = !1) {
        e || tc(a);
        a.G && (a.G = void 0);
        if (b >= a.C || d) return Dc(a)[b] = c, a;
        void 0 !== a.A && a.C >= a.M.length ? (d = a.M.length - 1, e = b + a.B, e >= d ? (a.M[d] = void 0, a.M[e] = c, a.M.push(a.A)) : a.M[e] = c) : a.M[b + a.B] = c;
        void 0 !== a.A && b in a.A && delete a.A[b];
        return a
    }

    function Ec(a, b) {
        return null != x(a, b)
    }

    function Fc(a, b) {
        return Array.isArray(x(a, b))
    }

    function Gc(a, b, c, d) {
        let e = x(a, b, d);
        Array.isArray(e) ? e && ic(e) & 1 || kc(e) : e = sc;
        if (lc(a.M)) c & 1 || (gc(e, 2), Object.freeze(e));
        else if (e === sc || lc(e)) e = kc(Array.prototype.slice.call(e)), y(a, b, e, d);
        return e
    }

    function Hc(a, b, c = !1) {
        return Gc(a, b, 0, c)
    }

    function Ic(a, b) {
        a = x(a, b);
        return null == a ? a : +a
    }

    function Jc(a, b) {
        a = x(a, b);
        return null == a ? a : !!a
    }

    function z(a, b, c) {
        a = x(a, b);
        return null == a ? c : a
    }

    function B(a, b, c = !1) {
        a = Jc(a, b);
        return null == a ? c : a
    }

    function Kc(a, b, c) {
        null == c ? c = sc : kc(c);
        return y(a, b, c)
    }

    function Lc(a, b, c, d) {
        tc(a);
        c !== d ? y(a, b, c) : y(a, b, void 0, !1);
        return a
    }

    function Mc(a, b, c, d) {
        tc(a);
        (c = Nc(a, c)) && c !== b && null != d && (a.j && c in a.j && (a.j[c] = void 0), y(a, c));
        return y(a, b, d)
    }

    function Nc(a, b) {
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d];
            null != x(a, e) && (0 !== c && y(a, c, void 0, !1, !0), c = e)
        }
        return c
    }

    function D(a, b, c, d = !1) {
        {
            a.j || (a.j = {});
            const e = a.j[c];
            if (e) b = e;
            else if (b = vc(x(a, c, d), b)) a.j[c] = b, gc(b.M, ic(a.M) & -33)
        }
        if (null == b) return b;
        lc(b.M) && !lc(a.M) && (b = b.Tc(), y(a, c, b.M, d), a.j[c] = b);
        return b
    }

    function Oc(a, b, c, d, e = !0) {
        a.j || (a.j = {});
        let f = a.j[c];
        d = Gc(a, c, 2, d);
        const g = !!(ic(a.M) & 16);
        var h = lc(d);
        h = lc(a.M) || h;
        if (!f) {
            f = [];
            let k = h;
            for (let m = 0; m < d.length; m++) {
                var l = d[m];
                k = k || lc(l);
                l = vc(l, b, !1, g);
                void 0 !== l && (f.push(l), h && gc(l.M, 2))
            }
            a.j[c] = f;
            oc(d, !k)
        }
        b = h || e;
        e = lc(f);
        b && !e && (Object.isFrozen(f) && (a.j[c] = f = f.slice()), gc(f, 2), Object.freeze(f));
        !b && e && (a.j[c] = f = f.slice());
        return f
    }

    function E(a, b, c, d = !1) {
        const e = lc(a.M);
        b = Oc(a, b, c, d, e);
        a = Hc(a, c, d);
        if (!(c = e) && (c = a)) {
            if (!a) throw Error("cannot check mutability state of non-array");
            c = !(ic(a) & 8)
        }
        if (c) {
            for (c = 0; c < b.length; c++)(d = b[c]) && lc(d.M) && !e && (b[c] = b[c].Tc(), a[c] = b[c].M);
            oc(a, !0)
        }
        return b
    }

    function Pc(a, b, c) {
        tc(a);
        a.j || (a.j = {});
        let d;
        null == c ? d = c = void 0 : d = c.M;
        a.j[b] = c;
        return y(a, b, d)
    }

    function Qc(a, b, c, d) {
        tc(a);
        a.j || (a.j = {});
        let e;
        null != d ? e = d.M : e = d = void 0;
        a.j[b] = d;
        return Mc(a, b, c, e)
    }

    function Rc(a, b, c) {
        tc(a);
        let d;
        if (null != c) {
            d = kc([]);
            let e = !1;
            for (let f = 0; f < c.length; f++) d[f] = c[f].M, e = e || lc(d[f]);
            a.j || (a.j = {});
            a.j[b] = c;
            oc(d, !e)
        } else a.j && (a.j[b] = void 0), d = sc;
        return y(a, b, d)
    }

    function H(a, b) {
        return z(a, b, "")
    }

    function Sc(a) {
        return x(a, 13 === Nc(a, Tc) ? 13 : -1)
    }

    function Uc(a, b, c, d) {
        c = Nc(a, d) === c ? c : -1;
        return D(a, b, c)
    }

    function Vc(a, b, c) {
        return Lc(a, b, c, !1)
    }

    function Wc(a, b) {
        return Lc(a, b, 1, 0)
    };

    function Xc(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error("Expected to deserialize an Array but got " + ta(b) + ": " + b);
        Yc = b;
        mc(b);
        a = new a(b);
        Yc = null;
        return a
    }

    function Cc(a) {
        var b = yc(a.M, Bc, pc);
        mc(b);
        Yc = b;
        b = new a.constructor(b);
        Yc = null;
        Zc(b, a);
        return b
    }

    function $c(a) {
        rc = !0;
        try {
            return JSON.stringify(a.toJSON(), ad)
        } finally {
            rc = !1
        }
    }
    var bd = class {
        constructor(a, b, c) {
            a || (a = Yc);
            Yc = null;
            var d = this.constructor.j || 0,
                e = 0 < d,
                f = this.constructor.messageId;
            a ? ic(a) & 16 && gc(a, 32) : (a = f ? [f] : [], gc(a, 48));
            e && 0 < a.length && qc(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
            this.B = (f ? 0 : -1) - d;
            this.j = void 0;
            this.M = a;
            a: {
                f = this.M.length;d = f - 1;
                if (f && (f = this.M[d], qc(f))) {
                    this.A = f;
                    f = Object.keys(f);
                    if (b = 0 < f.length) b: {
                        b = f;f = isNaN;a = b.length;
                        const g = "string" === typeof b ? b.split("") : b;
                        for (let h = 0; h < a; h++)
                            if (h in g && !f.call(void 0, g[h], h, b)) {
                                b = !1;
                                break b
                            }
                        b = !0
                    }
                    b ? this.C =
                        Number.MAX_VALUE : this.C = d - this.B;
                    break a
                }
                void 0 !== b && -1 < b ? (this.C = Math.max(b, d + 1 - this.B), this.A = void 0) : this.C = Number.MAX_VALUE
            }
            if (!e && this.A && "g" in this.A) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c)
                for (e = 0; e < c.length; e++) d = c[e], d < this.C ? (d += this.B, (b = this.M[d]) ? Array.isArray(b) && kc(b) : this.M[d] = sc) : (b = Dc(this), (f = b[d]) ? Array.isArray(f) && kc(f) : b[d] = sc)
        }
        toJSON() {
            const a = this.M;
            return rc ? a : yc(a, zc, Ac)
        }
    };

    function ad(a, b) {
        return wc(b)
    }

    function Zc(a, b) {
        b.D && (a.D = b.D.slice());
        const c = b.j;
        if (c) {
            b = b.A;
            for (let f in c) {
                if (!Object.prototype.hasOwnProperty.call(c, f)) continue;
                const g = c[f];
                if (g) {
                    var d = !(!b || !b[f]),
                        e = +f;
                    if (Array.isArray(g)) {
                        if (g.length)
                            for (d = E(a, g[0].constructor, e, d), e = 0; e < Math.min(d.length, g.length); e++) Zc(d[e], g[e])
                    } else(d = D(a, g.constructor, e, d)) && Zc(d, g)
                }
            }
        }
    }
    let Yc;

    function cd(a, b, c, d, e, f) {
        (a = a.j && a.j[c]) ? Array.isArray(a) ? (e = f.hb ? kc(a.slice()) : a, Rc(b, c, e)) : Pc(b, c, a): (Yb && d instanceof Uint8Array ? e = d.length ? new ec(new Uint8Array(d), ac) : dc() : (Array.isArray(d) && (e ? gc(d, 2) : d && ic(d) & 1 && f.hb ? (e = Array.prototype.slice.call(d), jc(e, (ic(d) | 0) & -51), d = e) : nc(d)), e = d), y(b, c, e))
    };
    var dd = class extends bd {
        Tc() {
            return this
        }
    };
    Object.defineProperties(dd, {
        [Symbol.hasInstance]: uc(() => {
            throw Error(void 0);
        })
    });
    const ed = a => null !== a && void 0 !== a;
    let fd = void 0;

    function gd(a, b) {
        const c = fd;
        fd = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };
    class K extends dd {
        Tc() {
            if (lc(this.M)) {
                var {
                    hb: a
                } = {
                    hb: !0
                };
                a = {
                    hb: a
                };
                const c = lc(this.M);
                if (c && !a.hb) throw Error("copyRepeatedFields must be true for frozen messages");
                c || nc(this.M);
                const d = new this.constructor;
                this.D && (d.D = this.D.slice());
                const e = this.M;
                for (let f = 0; f < e.length; f++) {
                    const g = e[f];
                    if (f === e.length - 1 && qc(g))
                        for (b in g) {
                            if (!Object.prototype.hasOwnProperty.call(g, b)) continue;
                            const h = +b;
                            Number.isNaN(h) ? Dc(d)[b] = g[b] : cd(this, d, h, g[b], c, a)
                        } else cd(this, d, f - this.B, g, c, a)
                }
                var b = d;
                b.G = this
            } else b =
                this;
            return b
        }
    }
    Object.defineProperties(K, {
        [Symbol.hasInstance]: uc(Object[Symbol.hasInstance])
    });

    function hd(a, b) {
        this.j = a === id && b || "";
        this.l = jd
    }
    hd.prototype.na = !0;
    hd.prototype.ka = function() {
        return this.j
    };

    function kd(a) {
        return a instanceof hd && a.constructor === hd && a.l === jd ? a.j : "type_error:Const"
    }

    function ld(a) {
        return new hd(id, a)
    }
    var jd = {},
        id = {};
    var md = ld("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function nd(a, b) {
        for (const c in a) b.call(void 0, a[c], c, a)
    }

    function od(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function pd(a) {
        var b = qd;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function rd(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function sd(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const td = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function ud(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < td.length; f++) c = td[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var vd = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var wd;

    function xd() {
        if (void 0 === wd) {
            var a = null,
                b = u.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ia,
                        createScript: Ia,
                        createScriptURL: Ia
                    })
                } catch (c) {
                    u.console && u.console.error(c.message)
                }
                wd = a
            } else wd = a
        }
        return wd
    };
    const yd = {};

    function zd(a) {
        return a instanceof Ad && a.constructor === Ad ? a.j : "type_error:SafeScript"
    }
    class Ad {
        constructor(a, b) {
            this.j = b === yd ? a : "";
            this.na = !0
        }
        toString() {
            return this.j.toString()
        }
        ka() {
            return this.j.toString()
        }
    };
    var Cd = class {
        constructor(a, b) {
            this.j = b === Bd ? a : ""
        }
        toString() {
            return this.j + ""
        }
    };
    Cd.prototype.na = !0;
    Cd.prototype.ka = function() {
        return this.j.toString()
    };

    function Dd(a, b) {
        a = Ed.exec(Fd(a).toString());
        var c = a[3] || "";
        return Gd(a[1] + Hd("?", a[2] || "", b) + Hd("#", c))
    }

    function Fd(a) {
        return a instanceof Cd && a.constructor === Cd ? a.j : "type_error:TrustedResourceUrl"
    }

    function Id(a, b) {
        var c = kd(a);
        if (!Jd.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Kd, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof hd ? kd(d) : encodeURIComponent(String(d))
        });
        return Gd(a)
    }
    var Kd = /%{(\w+)}/g,
        Jd = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Ed = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Bd = {};

    function Gd(a) {
        const b = xd();
        a = b ? b.createScriptURL(a) : a;
        return new Cd(a, Bd)
    }

    function Hd(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var Md = class {
        constructor(a, b) {
            this.j = b === Ld ? a : ""
        }
        toString() {
            return this.j.toString()
        }
    };
    Md.prototype.na = !0;
    Md.prototype.ka = function() {
        return this.j.toString()
    };

    function Nd(a) {
        return a instanceof Md && a.constructor === Md ? a.j : "type_error:SafeUrl"
    }
    var Od = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Pd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Qd(a) {
        if (a instanceof Md) return a;
        a = "object" == typeof a && a.na ? a.ka() : String(a);
        Pd.test(a) ? a = new Md(a, Ld) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(Od) ? new Md(a, Ld) : null);
        return a
    }
    var Ld = {},
        Rd = new Md("about:invalid#zClosurez", Ld);
    const Sd = {};

    function Td(a) {
        return a instanceof Ud && a.constructor === Ud ? a.j : "type_error:SafeStyle"
    }

    function Vd(a) {
        let b = "";
        for (let c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
                let d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(Wd).join(" ") : Wd(d), b += `${c}:${d};`)
            }
        return b ? new Ud(b, Sd) : Xd
    }
    class Ud {
        constructor(a, b) {
            this.j = b === Sd ? a : "";
            this.na = !0
        }
        ka() {
            return this.j
        }
        toString() {
            return this.j.toString()
        }
    }
    var Xd = new Ud("", Sd);

    function Wd(a) {
        if (a instanceof Md) return 'url("' + Nd(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof hd) a = kd(a);
        else {
            a = String(a);
            var b = a.replace(Yd, "$1").replace(Yd, "$1").replace(Zd, "url");
            if ($d.test(b)) {
                if (b = !ae.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && be(a)
                }
                a = b ? ce(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Ma("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function be(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const $d = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        Zd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Yd = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        ae = /\/\*/;

    function ce(a) {
        return a.replace(Zd, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g, h, l) => {
                f = h;
                return l
            });
            b = (Qd(d) || Rd).ka();
            return c + f + b + f + e
        })
    };
    const de = {};

    function ee(a) {
        return a instanceof fe && a.constructor === fe ? a.j : "type_error:SafeStyleSheet"
    }
    class fe {
        constructor(a, b) {
            this.j = b === de ? a : "";
            this.na = !0
        }
        toString() {
            return this.j.toString()
        }
        ka() {
            return this.j
        }
    };
    const ge = {};

    function he(a) {
        return a instanceof ie && a.constructor === ie ? a.j : "type_error:SafeHtml"
    }

    function je(a) {
        return a instanceof ie ? a : ke(Oa("object" == typeof a && a.na ? a.ka() : String(a)))
    }

    function ke(a) {
        const b = xd();
        a = b ? b.createHTML(a) : a;
        return new ie(a, ge)
    }

    function le(a, b, c) {
        var d = String(a);
        if (!me.test(d)) throw Error("");
        if (d.toUpperCase() in ne) throw Error("");
        return oe(String(a), b, c)
    }

    function oe(a, b, c) {
        var d = "";
        if (b)
            for (let g in b)
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                    if (!me.test(g)) throw Error("");
                    var e = b[g];
                    if (null != e) {
                        var f = g;
                        if (e instanceof hd) e = kd(e);
                        else if ("style" == f.toLowerCase()) {
                            if (!wa(e)) throw Error("");
                            e instanceof Ud || (e = Vd(e));
                            e = Td(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in pe)
                                if (e instanceof Cd) e = Fd(e).toString();
                                else if (e instanceof Md) e = Nd(e);
                            else if ("string" === typeof e) e = (Qd(e) || Rd).ka();
                            else throw Error("");
                        }
                        e.na && (e = e.ka());
                        f = `${f}="` +
                            Oa(String(e)) + '"';
                        d += " " + f
                    }
                }
        b = `<${a}` + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === vd[a.toLowerCase()] ? b += ">" : (c = qe(c), b += ">" + he(c).toString() + "</" + a + ">");
        return ke(b)
    }

    function re(a) {
        const b = je(se),
            c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = je(e), c.push(he(e).toString()))
            };
        a.forEach(d);
        return ke(c.join(he(b).toString()))
    }

    function qe(a) {
        return re(Array.prototype.slice.call(arguments))
    }
    class ie {
        constructor(a, b) {
            this.j = b === ge ? a : "";
            this.na = !0
        }
        ka() {
            return this.j.toString()
        }
        toString() {
            return this.j.toString()
        }
    }
    const me = /^[a-zA-Z0-9-]+$/,
        pe = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        ne = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var te = ke("<!DOCTYPE html>"),
        se = new ie(u.trustedTypes && u.trustedTypes.emptyHTML || "", ge),
        ue = ke("<br>");

    function ve(a) {
        a: {
            try {
                var b = new URL(a)
            } catch (c) {
                b = "https:";
                break a
            }
            b = b.protocol
        }
        return "javascript:" === b ? "about:invalid" : a
    };

    function we(a) {
        var b = xe(ye) || Rd;
        a.href = b instanceof Md ? Nd(b) : ve(b)
    };

    function ze(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    const Ae = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function Be(a, b, c) {
        if (b instanceof Cd) a.href = Fd(b).toString();
        else {
            if (-1 === Ae.indexOf(c)) throw Error(`TrustedResourceUrl href attribute required with rel="${c}"`);
            a.href = b instanceof Md ? Nd(b) : ve(b)
        }
        a.rel = c
    };

    function Ce(a) {
        var b;
        (b = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function De(a, b) {
        a.src = Fd(b);
        Ce(a)
    };

    function Ee() {
        return !1
    }

    function Fe() {
        return !0
    }

    function Ge(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function He(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Je(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Ke(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function Le(a, b) {
        let c = 0;
        return function(d) {
            u.clearTimeout(c);
            const e = arguments;
            c = u.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function Me(a, b) {
        function c() {
            e = u.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var Ne = {
            passive: !0
        },
        Oe = Je(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                u.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Pe(a) {
        return a ? a.passive && Oe() ? a : a.capture || !1 : !1
    }

    function L(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Pe(d)), !0) : !1
    }

    function Qe(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Pe(d)), !0) : !1
    };

    function Re(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            De(f, a);
            "complete" !== b.document.readyState ? L(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function Se(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.Za}`;
        let c = void 0;
        try {
            c = await Te(b)
        } catch (g) {}
        if (c) {
            b = a.rb || c.sodar_query_id;
            var d = void 0 !== c.rc_enable && a.A ? c.rc_enable : "n",
                e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
                f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.B,
                Fe: c.bg_hash_basename,
                Ee: c.bg_binary,
                gf: a.j + "_" + a.l,
                rb: b,
                Za: a.Za,
                Ub: d,
                lc: e,
                Sb: f
            }
        }
    }
    let Te = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function Ue(a) {
        var b = await Se(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && "function" === typeof c.push || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.Fe,
                _bgp_: b.Ee,
                _li_: b.gf,
                _jk_: b.rb,
                _st_: b.Za,
                _rc_: b.Ub,
                _dl_: b.lc,
                _g2_: b.Sb
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = Id(md, {
                basename: "sodar2"
            });
            Re(a)
        }
    };

    function Ve(a, b) {
        return Pc(a, 5, b)
    }

    function We(a, b) {
        return Lc(a, 3, b, "")
    }
    var Xe = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function Ye(a, b) {
        return Lc(a, 1, b, "")
    }
    var Ze = class extends K {
        constructor(a) {
            super(a)
        }
        l() {
            return H(this, 1)
        }
    };

    function $e(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var af = class {
            constructor(a) {
                this.j = a.l;
                this.l = a.A;
                this.B = a.B;
                this.rb = a.rb;
                this.win = a.U();
                this.Za = a.Za;
                this.Ub = a.Ub;
                this.lc = a.lc;
                this.Sb = a.Sb;
                this.A = a.j
            }
        },
        bf = class {
            constructor(a, b, c) {
                this.l = a;
                this.A = b;
                this.B = c;
                this.win = window;
                this.Za = "env";
                this.Ub = "n";
                this.lc = "0";
                this.Sb = "1";
                this.j = !0
            }
            U() {
                return this.win
            }
            build() {
                return new af(this)
            }
        };
    var df = class extends K {
            constructor(a) {
                super(a, -1, cf)
            }
        },
        cf = [2, 3];

    function ef(a, b) {
        return y(a, 1, b)
    }

    function ff(a, b) {
        return y(a, 2, b)
    }

    function gf(a, b) {
        return y(a, 3, b)
    }

    function hf(a, b) {
        return y(a, 4, b)
    }
    var jf = class extends K {
        constructor() {
            super(void 0)
        }
        getVersion() {
            return x(this, 5)
        }
    };
    var kf = window;
    var lf = {
        Tf: "google_adtest",
        Xf: "google_ad_client",
        Yf: "google_ad_format",
        ag: "google_ad_height",
        ng: "google_ad_width",
        eg: "google_ad_layout",
        fg: "google_ad_layout_key",
        gg: "google_ad_output",
        hg: "google_ad_region",
        kg: "google_ad_slot",
        lg: "google_ad_type",
        mg: "google_ad_url",
        og: "google_allow_expandable_ads",
        Fg: "google_analytics_domain_name",
        Gg: "google_analytics_uacct",
        Ug: "google_container_id",
        gh: "google_gl",
        Dh: "google_enable_ose",
        Nh: "google_full_width_responsive",
        Ni: "google_rl_filtering",
        Mi: "google_rl_mode",
        Oi: "google_rt",
        Li: "google_rl_dest_url",
        ti: "google_max_radlink_len",
        yi: "google_num_radlinks",
        zi: "google_num_radlinks_per_unit",
        Wf: "google_ad_channel",
        si: "google_max_num_ads",
        ui: "google_max_responsive_height",
        Pg: "google_color_border",
        Ch: "google_enable_content_recommendations",
        bh: "google_content_recommendation_ui_type",
        ah: "google_source_type",
        Zg: "google_content_recommendation_rows_num",
        Yg: "google_content_recommendation_columns_num",
        Xg: "google_content_recommendation_ad_positions",
        eh: "google_content_recommendation_use_square_imgs",
        Rg: "google_color_link",
        Qg: "google_color_line",
        Tg: "google_color_url",
        Uf: "google_ad_block",
        jg: "google_ad_section",
        Vf: "google_ad_callback",
        Mg: "google_captcha_token",
        Sg: "google_color_text",
        Ag: "google_alternate_ad_url",
        dg: "google_ad_host_tier_id",
        Ng: "google_city",
        bg: "google_ad_host",
        cg: "google_ad_host_channel",
        Bg: "google_alternate_color",
        Og: "google_color_bg",
        Eh: "google_encoding",
        Lh: "google_font_face",
        jh: "google_cust_ch",
        mh: "google_cust_job",
        lh: "google_cust_interests",
        kh: "google_cust_id",
        oh: "google_cust_u_url",
        Ph: "google_hints",
        ei: "google_image_size",
        vi: "google_mtl",
        oj: "google_cpm",
        Wg: "google_contents",
        xi: "google_native_settings_key",
        fh: "google_country",
        gj: "google_targeting",
        Mh: "google_font_size",
        sh: "google_disable_video_autoplay",
        Bj: "google_video_product_type",
        Aj: "google_video_doc_id",
        zj: "google_cust_gender",
        cj: "google_cust_lh",
        bj: "google_cust_l",
        nj: "google_tfs",
        wi: "google_native_ad_template",
        ji: "google_kw",
        dj: "google_tag_for_child_directed_treatment",
        ej: "google_tag_for_under_age_of_consent",
        Qi: "google_region",
        ih: "google_cust_criteria",
        ig: "google_safe",
        hh: "google_ctr_threshold",
        Ri: "google_resizing_allowed",
        Ti: "google_resizing_width",
        Si: "google_resizing_height",
        yj: "google_cust_age",
        LANGUAGE: "google_language",
        ki: "google_kw_type",
        Ei: "google_pucrd",
        Di: "google_page_url",
        fj: "google_tag_partner",
        Xi: "google_restrict_data_processing",
        Qf: "google_adbreak_test",
        Zf: "google_ad_frequency_hint",
        Rf: "google_admob_interstitial_slot",
        Sf: "google_admob_rewarded_slot",
        ri: "google_max_ad_content_rating",
        Hi: "google_ad_public_floor",
        Fi: "google_ad_private_floor",
        xj: "google_traffic_source"
    };
    var mf = Je(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = he(se);
        return !b.parentElement
    });

    function nf(a, b) {
        if (mf())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = he(b)
    }
    var of = /^[\w+/_-]+[=]{0,2}$/;

    function pf(a, b) {
        b = (b || u).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && of .test(a) ? a : "" : ""
    };

    function qf(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function rf(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function sf(a) {
        return rf.apply(null, arguments) / arguments.length
    };

    function tf(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    tf.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    tf.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    tf.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function uf(a, b) {
        this.width = a;
        this.height = b
    }

    function vf(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    p = uf.prototype;
    p.aspectRatio = function() {
        return this.width / this.height
    };
    p.isEmpty = function() {
        return !(this.width * this.height)
    };
    p.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    p.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    p.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function wf(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : u.document.createElement("div");
        return a.replace(xf, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = ke(e + " "), nf(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var xf = /&([^;\s<&]+);?/g;

    function yf(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function zf(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Af(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Bf(a) {
        return a ? new Cf(Df(a)) : La || (La = new Cf)
    }

    function Ef(a, b) {
        nd(b, function(c, d) {
            c && "object" == typeof c && c.na && (c = c.ka());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Ff.hasOwnProperty(d) ? a.setAttribute(Ff[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var Ff = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Gf(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new uf(a.clientWidth, a.clientHeight)
    }

    function Hf(a) {
        var b = a.scrollingElement ? a.scrollingElement : Eb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return Ab && Mb("10") && a.pageYOffset != b.scrollTop ? new tf(b.scrollLeft, b.scrollTop) : new tf(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function If(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Jf(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!ua(f) || wa(f) && 0 < f.nodeType) e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (wa(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                ib(g ? qb(f) : f, e)
            }
        }
    }

    function Kf(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Lf(a, b) {
        var c = Kf(a, "DIV");
        Ab ? (b = qe(ue, b), nf(c, b), c.removeChild(c.firstChild)) : nf(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    }

    function Mf(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function Df(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var Nf = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Of = {
            IMG: " ",
            BR: "\n"
        };

    function Pf(a) {
        var b = [];
        Qf(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Qf(a, b, c) {
        if (!(a.nodeName in Nf))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Of) b.push(Of[a.nodeName]);
        else
            for (a = a.firstChild; a;) Qf(a, b, c), a = a.nextSibling
    }

    function Rf(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return Sf(a, function(e) {
            return (!d || e.nodeName == d) && (!c || "string" === typeof e.className && nb(e.className.split(/\s+/), c))
        })
    }

    function Sf(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Cf(a) {
        this.j = a || u.document || document
    }
    p = Cf.prototype;
    p.Ve = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    p.Pf = Cf.prototype.Ve;
    p.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    p.ha = function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = e[1],
            g = Kf(d, String(e[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : Ef(g, f));
        2 < e.length && Jf(d, g, e, 2);
        return g
    };
    p.createElement = function(a) {
        return Kf(this.j, a)
    };
    p.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };

    function Tf(a, b) {
        return Lf(a.j, b)
    }
    p.U = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    };
    p.appendChild = function(a, b) {
        a.appendChild(b)
    };
    p.append = function(a, b) {
        Jf(Df(a), a, arguments, 1)
    };
    p.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    p.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    p.Se = Mf;

    function Uf() {
        return !Vf() && (v("iPod") || v("iPhone") || v("Android") || v("IEMobile"))
    }

    function Vf() {
        return v("iPad") || v("Android") && !v("Mobile") || v("Silk")
    };
    var Wf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Xf(a) {
        try {
            return !!a && null != a.location.href && xb(a, "foo")
        } catch {
            return !1
        }
    }

    function Yf(a, b = !1, c = !1, d = u) {
        c = c ? Zf(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !Xf(c) || !a(c));) c = Zf(c)
    }

    function Zf(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function $f(a) {
        return Xf(a.top) ? a.top : null
    }

    function ag(a, b) {
        const c = bg("SCRIPT", a);
        De(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function cg(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function dg() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function eg(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function fg(a) {
        const b = [];
        eg(a, function(c) {
            b.push(c)
        });
        return b
    }

    function gg(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var ig = Je(() => mb(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], hg) || 1E-4 > Math.random());
    const hg = a => Wa(Za(), a);
    var jg = /^([0-9.]+)px$/,
        kg = /^(-?[0-9.]{1,30})$/;

    function lg(a) {
        if (!kg.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function mg(a) {
        return /^true$/.test(a)
    }

    function ng(a) {
        return (a = jg.exec(a)) ? +a[1] : null
    }

    function og() {
        var a = u.document.URL;
        if (!a) return "";
        const b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch {}
        return ""
    }
    var pg = {
        pg: "allow-forms",
        qg: "allow-modals",
        rg: "allow-orientation-lock",
        sg: "allow-pointer-lock",
        tg: "allow-popups",
        ug: "allow-popups-to-escape-sandbox",
        vg: "allow-presentation",
        wg: "allow-same-origin",
        xg: "allow-scripts",
        yg: "allow-top-navigation",
        zg: "allow-top-navigation-by-user-activation"
    };
    const qg = Je(() => fg(pg));

    function rg() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = qg();
        return a.length ? jb(b, c => !nb(a, c)) : b
    }

    function sg() {
        const a = bg("IFRAME"),
            b = {};
        ib(qg(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var tg = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        ug = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (tg(a, b)) return a;
                if (!(a = Zf(a))) break
            }
            return null
        },
        vg = Je(() => Uf() ? 2 : Vf() ? 1 : 0),
        M = (a, b) => {
            eg(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    const wg = {
        ["http://googleads.g.doubleclick.net"]: !0,
        ["http://pagead2.googlesyndication.com"]: !0,
        ["https://googleads.g.doubleclick.net"]: !0,
        ["https://pagead2.googlesyndication.com"]: !0
    };
    var xg = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/;
    const yg = /.*domain\.test$/,
        Ag = /\.prod\.google\.com(:\d+)?$/;
    var Bg = a => wg[a] || xg.test(a) || yg.test(a) || Ag.test(a);
    let Cg = [];
    const Dg = () => {
        const a = Cg;
        Cg = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Eg = (a, b) => {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * 2 ** 52),
                configurable: !1
            })
        } catch (c) {
            b && b.la(784, c)
        }
        a = Number(a.goog_pvsid);
        b && (!a || 0 >= a) && b.la(784, Error(`Invalid correlator, ${a}`));
        return a || -1
    };

    function Fg(a, b, c, d = []) {
        const e = new a.MutationObserver(f => {
            for (const g of f)
                for (const h of g.removedNodes)
                    if (d && (h === b || Mf(h, b))) {
                        for (const l of d) l.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        Yf(f => {
            if (!f.parent || !Xf(f.parent)) return !1;
            const g = f.parent.document.getElementsByTagName("iframe");
            for (let k = 0; k < g.length; k++) try {
                a: {
                    var h = g[k];
                    try {
                        var l = h.contentWindow || (h.contentDocument ? If(h.contentDocument) : null);
                        break a
                    } catch (m) {}
                    l =
                    null
                }
                if (l == f) {
                    Fg(f.parent, g[k], c, d);
                    break
                }
            }
            catch {}
            return !1
        }, !1, !1, a)
    }
    var Gg = (a, b) => {
            Fg(If(Df(a)), a, b)
        },
        Hg = (a, b) => {
            "complete" === a.document.readyState ? (Cg.push(b), 1 == Cg.length && (window.Promise ? Promise.resolve().then(Dg) : window.setImmediate ? setImmediate(Dg) : setTimeout(Dg, 0))) : a.addEventListener("load", b)
        },
        Ig = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function bg(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var Jg = a => {
        let b = a;
        for (; a && a != a.parent;) a = a.parent, Xf(a) && (b = a);
        return b
    };

    function Kg(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    p = Kg.prototype;
    p.getWidth = function() {
        return this.right - this.left
    };
    p.getHeight = function() {
        return this.bottom - this.top
    };

    function Lg(a) {
        return new Kg(a.top, a.right, a.bottom, a.left)
    }
    p.contains = function(a) {
        return this && a ? a instanceof Kg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Mg(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    p.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    p.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    p.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Ng(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Og(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Ng(c, e, d - c, a - e)
        }
        return null
    }

    function Pg(a, b) {
        var c = Og(a, b);
        if (!c || !c.height || !c.width) return [new Ng(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            l = b.top + b.height;
        b.top > a.top && (c.push(new Ng(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        l < g && (c.push(new Ng(a.left, l, a.width, g - l)), e = l - d);
        b.left > a.left && c.push(new Ng(a.left, d, b.left - a.left, e));
        h < f && c.push(new Ng(h, d, f - h, e));
        return c
    }
    Ng.prototype.contains = function(a) {
        return a instanceof tf ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Ng.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Ng.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Ng.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const Qg = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Rg(a = u) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function Sg(a = Rg()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function Tg(a = Rg()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(Qg[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function Ug() {
        var a = Rg();
        return a && a.initialIntersection
    }

    function Vg() {
        const a = Ug();
        return a && wa(a.rootBounds) ? new uf(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Wg(a = Rg()) {
        return a ? Xf(a.master) ? a.master : null : null
    }

    function Xg(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            ob(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, l = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !l && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || ag(a.document, g ? Id(ld("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : Gd(kd(ld("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, L(a, "message", f), d = () => {
            Qe(a, "message", f)
        });
        return e
    };

    function N(a, ...b) {
        if (0 === b.length) return Gd(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Gd(c.join(""))
    }

    function Yg(a, b) {
        let c = Fd(a).toString();
        if (/#/.test(c)) throw Error("");
        let d = /\?/.test(c) ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Gd(c)
    };

    function Zg(a) {
        a = a[0];
        const b = xd();
        a = b ? b.createScript(a) : a;
        return new Ad(a, yd)
    };

    function $g(a) {
        return new fe(a[0], de)
    };
    class ah {
        constructor(a) {
            this.ff = a
        }
    }

    function bh(a) {
        return new ah(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const ye = [bh("data"), bh("http"), bh("https"), bh("mailto"), bh("ftp"), new ah(a => /^[^:]*([/?#]|$)/.test(a))];

    function xe(a = ye) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof ah && c.ff("#")) return new Md("#", Ld)
        }
    };

    function ch(a) {
        return Gd(Fd(a).toString())
    };

    function dh(a, b, c) {
        if ("string" === typeof b)(b = eh(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = eh(c, d);
                f && (c.style[f] = e)
            }
    }
    var fh = {};

    function eh(a, b) {
        var c = fh[b];
        if (!c) {
            var d = zf(b);
            c = d;
            void 0 === a.style[d] && (d = (Eb ? "Webkit" : Db ? "Moz" : Ab ? "ms" : null) + Af(d), void 0 !== a.style[d] && (c = d));
            fh[b] = c
        }
        return c
    }

    function gh(a, b) {
        var c = Df(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function hh(a, b) {
        return gh(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function ih(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function jh(a) {
        var b = Df(a),
            c = new tf(0, 0);
        var d = b ? Df(b) : document;
        d = !Ab || 9 <= Number(Pb) || "CSS1Compat" == Bf(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = ih(a);
        b = Hf(Bf(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function kh(a) {
        var b = lh;
        if ("none" != hh(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function lh(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Eb && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = ih(a), new uf(a.right - a.left, a.bottom - a.top)) : new uf(b, c)
    }

    function mh(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function nh(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? mh(a, b) : 0
    }
    var oh = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function ph(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in oh ? oh[b] : mh(a, b)
    };
    var qh = a => "number" === typeof a && 0 < a,
        sh = (a, b) => {
            a = rh(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        rh = a => Object.entries(th(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        th = a => {
            const b = {};
            eg(a, (c, d) => {
                if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        uh = () => {
            try {
                return kf.history.length
            } catch (a) {
                return 0
            }
        },
        vh = a => {
            a = Wg(Rg(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        wh = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a :
                0
        },
        xh = a => {
            a.u_tz = -(new Date).getTimezoneOffset();
            a.u_his = uh();
            a.u_h = kf.screen ? .height;
            a.u_w = kf.screen ? .width;
            a.u_ah = kf.screen ? .availHeight;
            a.u_aw = kf.screen ? .availWidth;
            a.u_cd = kf.screen ? .colorDepth
        },
        yh = a => {
            let b;
            b = (b = 9 !== a.nodeType && a.id) ? "/" + b : "";
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c =
                ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + b + c
        },
        zh = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        Ah = () => {
            if (!kf) return !1;
            try {
                return !(!kf.navigator.standalone && !kf.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        Bh = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        Ch = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h =
                                    parseInt(f[2], 10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        };
    class Dh {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Eh = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Fh = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        Gh = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.Dd = !!c;
                this.depth = null
            }
        };

    function Hh(a, b, c = null, d = !1) {
        Ih(a, b, c, d)
    }

    function Ih(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = bg("IMG", a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                d && ob(a.google_image_requests, e);
                Qe(e, "load", f);
                Qe(e, "error", f)
            };
            L(e, "load", f);
            L(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Kh = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            eg(a, (d, e) => {
                d && (c += `&${e}=${encodeURIComponent(d)}`)
            });
            Jh(c)
        },
        Jh = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Hh(b, a, void 0, !1)
        };

    function Lh(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Mh(a, b, c, d, e) {
        const f = [];
        eg(a, function(g, h) {
            (g = Nh(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Nh(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Nh(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Mh(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Oh(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.A.length - 1
    }

    function Ph(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Oh(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let k = Mh(h[l], a.A, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
                        e = a.A;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class Qh {
        constructor() {
            this.A = "&";
            this.l = {};
            this.B = 0;
            this.j = []
        }
    };

    function Rh() {
        var a = Sh,
            b = u.google_srt;
        0 <= b && 1 >= b && (a.j = b)
    }

    function Th(a, b, c, d, e) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Qh ? f = c : (f = new Qh, eg(c, (h, l) => {
                var k = f;
                const m = k.B++;
                h = Lh(l, h);
                k.j.push(m);
                k.l[m] = h
            }));
            const g = Ph(f, "/pagead/gen_204?id=" + b + "&");
            g && Hh(u, g)
        } catch (f) {}
    }
    class Uh {
        constructor() {
            this.j = Math.random()
        }
    };
    let Vh = null;

    function Wh() {
        if (null === Vh) {
            Vh = "";
            try {
                let a = "";
                try {
                    a = u.top.location.hash
                } catch (b) {
                    a = u.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Vh = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Vh
    };
    var Xh = () => {
            const a = u.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Ea()
        },
        Yh = () => {
            const a = u.performance;
            return a && a.now ? a.now() : null
        };
    class Zh {
        constructor(a, b) {
            var c = Yh() || Xh();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const $h = u.performance,
        ai = !!($h && $h.mark && $h.measure && $h.clearMarks),
        bi = Je(() => {
            var a;
            if (a = ai) a = Wh(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function ci(a) {
        a && $h && bi() && ($h.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), $h.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function di() {
        var a = ei;
        a.l = !1;
        a.j != a.A.google_js_reporting_queue && (bi() && ib(a.j, ci), a.j.length = 0)
    }

    function fi(a, b) {
        if (!a.l) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw ci(c), e;
        }
        a.end(c);
        return d
    }
    class gi {
        constructor(a) {
            this.j = [];
            this.A = a || u;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.j = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.l = bi() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.l) return null;
            a = new Zh(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            $h && bi() && $h.mark(b);
            return a
        }
        end(a) {
            if (this.l && "number" === typeof a.value) {
                a.duration = (Yh() || Xh()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                $h && bi() && $h.mark(b);
                !this.l || 2048 < this.j.length ||
                    this.j.push(a)
            }
        }
    };

    function hi(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = ii(a.stack, b));
        return b
    }

    function ii(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    class ji {
        constructor(a = null) {
            this.B = Sh;
            this.l = null;
            this.D = this.la;
            this.j = a;
            this.A = !1
        }
        ta() {
            return this.B
        }
        Wd(a) {
            this.l = a
        }
        C(a) {
            this.A = a
        }
        vb(a, b, c) {
            let d, e;
            try {
                this.j && this.j.l ? (e = this.j.start(a.toString(), 3), d = b(), this.j.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    ci(e), b = this.D(a, new Dh(f, {
                        message: hi(f)
                    }), void 0, c)
                } catch (g) {
                    this.la(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        ma(a, b) {
            return (...c) => this.vb(a, () => b.apply(void 0, c))
        }
        la(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const I = new Qh;
                var g = I;
                g.j.push(1);
                g.l[1] = Lh("context", a);
                b.error && b.meta && b.id || (b = new Dh(b, {
                    message: hi(b)
                }));
                if (b.msg) {
                    g = I;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = Lh("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.l) try {
                    this.l(b)
                } catch (va) {}
                if (d) try {
                    d(b)
                } catch (va) {}
                d = I;
                l = [l];
                d.j.push(3);
                d.l[3] = l;
                d = u;
                l = [];
                b = null;
                do {
                    var k = d;
                    if (Xf(k)) {
                        var m = k.location.href;
                        b = k.document && k.document.referrer || null
                    } else m = b, b = null;
                    l.push(new Gh(m || "", k));
                    try {
                        d = k.parent
                    } catch (va) {
                        d = null
                    }
                } while (d && k != d);
                for (let va = 0, Ga = l.length - 1; va <= Ga; ++va) l[va].depth = Ga -
                    va;
                k = u;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1)
                    for (m = 1; m < l.length; ++m) {
                        var n = l[m];
                        n.url || (n.url = k.location.ancestorOrigins[m - 1] || "", n.Dd = !0)
                    }
                var q = l;
                let ba = new Gh(u.location.href, u, !1);
                k = null;
                const sa = q.length - 1;
                for (n = sa; 0 <= n; --n) {
                    var r = q[n];
                    !k && Eh.test(r.url) && (k = r);
                    if (r.url && !r.Dd) {
                        ba = r;
                        break
                    }
                }
                r = null;
                const Y = q.length && q[sa].url;
                0 != ba.depth && Y && (r = q[sa]);
                f = new Fh(ba, r);
                if (f.l) {
                    q = I;
                    var t = f.l.url || "";
                    q.j.push(4);
                    q.l[4] = Lh("top", t)
                }
                var C = {
                    url: f.j.url ||
                        ""
                };
                if (f.j.url) {
                    var w = f.j.url.match(Wf),
                        A = w[1],
                        F = w[3],
                        G = w[4];
                    t = "";
                    A && (t += A + ":");
                    F && (t += "//", t += F, G && (t += ":" + G));
                    var J = t
                } else J = "";
                A = I;
                C = [C, {
                    url: J
                }];
                A.j.push(5);
                A.l[5] = C;
                Th(this.B, e, I, this.A, c)
            } catch (I) {
                try {
                    Th(this.B, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: hi(I),
                        url: f && f.j.url
                    }, this.A, c)
                } catch (ba) {}
            }
            return !0
        }
        Fa(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.la(a, c instanceof Error ? c : Error(c))
            })
        }
    };
    var ki = a => "string" === typeof a,
        li = a => void 0 === a;

    function mi() {
        var a = ni;
        return b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    var oi;
    oi = {
        Gi: 0,
        fe: 3,
        ge: 4,
        ie: 5
    };
    var pi = oi.fe,
        qi = oi.ge,
        ri = oi.ie;

    function si(a, ...b) {
        ti(a, ...b.map(c => ({
            Lf: 7,
            message: c
        })))
    };

    function ui(a) {
        return JSON.stringify([a.map(b => [{
            [b.Lf]: b.message.toJSON()
        }])])
    };
    var vi = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function ti(a, ...b) {
        a.l.push(...b);
        100 <= a.l.length ? (null !== a.j && clearTimeout(a.j), a.j = setTimeout(() => {
            wi(a)
        }, 0)) : null === a.j && (a.j = setTimeout(() => {
            wi(a)
        }, 100))
    }

    function wi(a) {
        const b = ui(a.l);
        a.A("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
        a.l = [];
        a.j = null
    }
    var xi = class {
            constructor() {
                this.A = vi;
                this.l = [];
                this.j = null
            }
        },
        yi = class extends xi {};
    var O = a => {
        var b = "Fc";
        if (a.Fc && a.hasOwnProperty(b)) return a.Fc;
        b = new a;
        return a.Fc = b
    };
    class zi {
        constructor(a) {
            this.methodName = a
        }
    }
    var Ai = new zi(15),
        Bi = new zi(2),
        Ci = new zi(3),
        Di = new zi(5),
        Ei = new zi(6),
        Fi = new zi(7),
        Gi = new zi(8),
        Hi = new zi(14),
        Ii = (a, b, c) => b[a.methodName] || c || (() => {});

    function Ji(a, b) {
        a.j = c => {
            Ii(Bi, b, () => [])(c, 1)
        };
        a.l = () => Ii(Ci, b, () => [])(1)
    }
    class Ki {
        constructor() {
            this.j = () => {};
            this.l = () => []
        }
    };
    let Sh, Li;
    const ei = new gi(u);
    (a => {
        Sh = a || new Uh;
        "number" !== typeof u.google_srt && (u.google_srt = Math.random());
        Rh();
        Li = new ji(ei);
        Li.C(!0);
        "complete" == u.document.readyState ? u.google_measure_js_timing || di() : ei.l && L(u, "load", () => {
            u.google_measure_js_timing || di()
        })
    })();
    var Mi = (a, b, c) => Li.vb(a, b, c),
        Ni = (a, b) => Li.ma(a, b),
        Oi = (a, b, c) => {
            const d = O(Ki).l();
            !b.eid && d.length && (b.eid = d.toString());
            Th(Sh, a, b, !0, c)
        },
        Pi = (a, b) => Li.la(a, b, void 0, void 0);
    var Qi = (a, b) => {
        const c = og();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(u.document.location.protocol), "//", encodeURIComponent(u.document.location.host)].join("")
    };
    Gd(kd(ld("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var Ri = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (l) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            L(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = Qe(a, "message", e));
                return g
            }
        },
        Si = (a, b, c, d = null) => {
            const e = Ri(a, b, Ge(c, () => e()), d);
            return e
        },
        Ti = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && Ti(a[f], b, c, d, --e)
        };

    function Ui(a, b, c, d) {
        Bg(d.origin) && "expandable-xpc-ready" == c.notify && Vi(a, b)
    }

    function Vi(a, b) {
        var c = a.Ec;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Na,
            f: a.wf,
            g: a.ve,
            h: a.ef,
            i: void 0
        });
        u.setTimeout(Ni(220, zh(() => {
            ag(c.document, ch(b))
        })), 0)
    };
    var Xi = class extends K {
            constructor() {
                super(void 0, -1, Wi)
            }
        },
        Wi = [15];
    var Yi = class extends K {
        constructor() {
            super(void 0)
        }
        getCorrelator() {
            return z(this, 1, 0)
        }
        setCorrelator(a) {
            return Lc(this, 1, a, 0)
        }
    };
    var Zi = class extends K {
        constructor() {
            super(void 0)
        }
    };
    let $i = null,
        aj = null;
    var bj = () => {
            if (null != $i) return $i;
            $i = !1;
            try {
                const a = $f(u);
                a && -1 !== a.location.hash.indexOf("google_logging") && ($i = !0);
                u.localStorage.getItem("google_logging") && ($i = !0)
            } catch (a) {}
            return $i
        },
        cj = () => {
            if (null != aj) return aj;
            aj = !1;
            try {
                const a = $f(u);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || u.localStorage.getItem("auto_ads_logging")) aj = !0
            } catch (a) {}
            return aj
        },
        dj = (a, b = []) => {
            let c = !1;
            u.google_logging_queue || (c = !0, u.google_logging_queue = []);
            u.google_logging_queue.push([a, b]);
            c && bj() && ag(u.document,
                Gd(kd(ld("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    let ej = (new Date).getTime();
    var fj = a => {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };
    var gj = {
        ai: 0,
        Zh: 1,
        Wh: 2,
        Rh: 3,
        Xh: 4,
        Sh: 5,
        Yh: 6,
        Uh: 7,
        Vh: 8,
        Qh: 9,
        Th: 10
    };
    var hj = {
        ci: 0,
        di: 1,
        bi: 2
    };

    function ij(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function jj(a) {
        a = kb(a, b => new Kg(b.top, b.right, b.bottom, b.left));
        a = kj(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function kj(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return lb(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Lg(a[0]))
    };
    var qd = {
        Pi: 0,
        Fh: 1,
        Ih: 2,
        Gh: 3,
        Hh: 4,
        Oh: 8,
        aj: 9,
        ni: 10,
        oi: 11,
        Wi: 16,
        rh: 17,
        qh: 24,
        li: 25,
        Ig: 26,
        Hg: 27,
        he: 30,
        gi: 32,
        ii: 40
    };
    var lj = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5
        },
        mj = {
            [1]: 1,
            [2]: 1,
            [3]: 1,
            [4]: 1,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };

    function nj(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map)) : a.google_reactive_ads_global_state = new oj;
        return a.google_reactive_ads_global_state
    }
    class oj {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new pj;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map
        }
    }
    var pj = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var qj = 728 * 1.38,
        rj = (a, b = 420) => (a = P(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384,
        sj = a => {
            var b = P(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        uj = a => Math.max(0, tj(a, !0) - P(a).clientHeight),
        P = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        tj = (a, b) => {
            const c = P(a);
            return b ? c.scrollHeight == P(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        wj = (a, b) => vj(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] &&
            !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1,
        xj = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        yj = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        zj = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        Aj = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e =
                            d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        Bj = (a, b, c, d, e) => {
            Th(c, b, {
                c: e.data.substring(0, 500),
                u: a.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        },
        vj = a => 26 === a || 27 === a || 40 === a;

    function Cj(a) {
        if (0 != a.j) throw Error("Already resolved/rejected.");
    }
    var Fj = class {
        constructor() {
            this.l = new Dj(this);
            this.j = 0
        }
        resolve(a) {
            Cj(this);
            this.j = 1;
            this.B = a;
            Ej(this.l)
        }
    };

    function Ej(a) {
        switch (a.j.j) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.B);
                break;
            case 2:
                a.A && a.A(a.j.A);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var Dj = class {
        constructor(a) {
            this.j = a
        }
        then(a, b) {
            if (this.l) throw Error("Then functions already set.");
            this.l = a;
            this.A = b;
            Ej(this)
        }
    };

    function Gj(a, b) {
        Hj(a).forEach(b, void 0)
    }

    function Hj(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function Ij(a, b) {
        return void 0 !== a.j[Jj(b)]
    }

    function Kj(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function Lj(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const Mj = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = Jj(a);
            this.j[c] = b;
            this.l[c] = a
        }
        remove(a) {
            a = Jj(a);
            this.j[a] = void 0;
            this.l[a] = void 0
        }
        get(a, b) {
            a = Jj(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        ob() {
            return Kj(this).length
        }
        clear() {
            this.j = {};
            this.l = {}
        }
    };

    function Jj(a) {
        return a instanceof Object ? String(xa(a)) : a + ""
    };
    const Nj = class {
        constructor(a) {
            this.j = new Mj;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        remove(a) {
            this.j.remove(a)
        }
        contains(a) {
            return Ij(this.j, a)
        }
    };
    const Oj = new Nj("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function Pj(a) {
        a && "function" == typeof a.wa && a.wa()
    };

    function Qj() {
        this.F = this.F;
        this.I = this.I
    }
    Qj.prototype.F = !1;
    Qj.prototype.wa = function() {
        this.F || (this.F = !0, this.l())
    };

    function Rj(a, b) {
        a.F ? b() : (a.I || (a.I = []), a.I.push(b))
    }
    Qj.prototype.l = function() {
        if (this.I)
            for (; this.I.length;) this.I.shift()()
    };

    function Sj(a) {
        a.j.forEach((b, c) => {
            var d = a.element;
            b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
        })
    }

    function Tj(a, b, c) {
        if (!a.j.has(b)) {
            var d = a.j,
                e = d.set;
            var f = a.element;
            const g = f.style.getPropertyValue(b);
            f = g ? {
                value: g,
                priority: f.style.getPropertyPriority(b)
            } : null;
            e.call(d, b, f)
        }
        a.element.style.setProperty(b, c, "important")
    }
    var Uj = class extends Qj {
        constructor(a) {
            super();
            this.element = a;
            this.j = new Map
        }
        l() {
            Sj(this);
            super.l()
        }
    };

    function Vj(a, b) {
        const c = new Wj({
            first: a.P,
            second: b.P
        });
        a.ba(() => Q(c, {
            first: a.P,
            second: b.P
        }));
        b.ba(() => Q(c, {
            first: a.P,
            second: b.P
        }));
        return c
    }

    function Xj(...a) {
        const b = [...a],
            c = () => b.every(f => f.P),
            d = new Wj(c()),
            e = () => {
                Q(d, c())
            };
        b.forEach(f => f.ba(e));
        return Yj(d)
    }

    function Zj(...a) {
        const b = [...a],
            c = () => -1 !== b.findIndex(f => f.P),
            d = new Wj(c()),
            e = () => {
                Q(d, c())
            };
        b.forEach(f => f.ba(e));
        return Yj(d)
    }

    function Q(a, b) {
        a.P = b;
        a.j.forEach(c => {
            c(a.P)
        })
    }

    function Yj(a, b = ak) {
        var c = a.P;
        const d = new Wj(a.P);
        a.ba(e => {
            b(e, c) || (c = e, Q(d, e))
        });
        return d
    }

    function bk(a, b) {
        return a.ba(b, !0)
    }

    function ck(a, b, c) {
        return bk(a, d => {
            d === b && c()
        })
    }

    function dk(a, b) {
        if (!1 === a.P) b();
        else {
            var c = {
                Gb: null
            };
            c.Gb = ck(a, !1, () => {
                c.Gb && (c.Gb(), c.Gb = null);
                b()
            })
        }
    }

    function ek(a, b, c) {
        Yj(a).ba(d => {
            d === b && c()
        })
    }

    function fk(a, b) {
        a.l && a.l();
        a.l = b.ba(c => Q(a, c), !0)
    }
    class Wj {
        constructor(a) {
            this.P = a;
            this.j = new Map;
            this.A = 1;
            this.l = null
        }
        ba(a, b = !1) {
            const c = this.A++;
            this.j.set(c, a);
            b && a(this.P);
            return () => {
                this.j.delete(c)
            }
        }
        map(a) {
            const b = new Wj(a(this.P));
            this.ba(c => Q(b, a(c)));
            return b
        }
    }

    function ak(a, b) {
        return a == b
    };

    function gk(a, b) {
        ib(a.j, c => {
            c(b)
        })
    }
    var hk = class {
        constructor() {
            this.j = []
        }
    };
    class ik {
        constructor(a) {
            this.j = a
        }
        ba(a) {
            this.j.j.push(a)
        }
        map(a) {
            const b = new hk;
            this.ba(c => gk(b, a(c)));
            return new ik(b)
        }
    }

    function jk(...a) {
        const b = new hk;
        a.forEach(c => {
            c.ba(d => {
                gk(b, d)
            })
        });
        return new ik(b)
    };

    function kk(a) {
        return Yj(Vj(a.j, a.A).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : lk(c, b)
        }))
    }
    var nk = class {
        constructor(a) {
            this.l = a;
            this.j = new Wj(null);
            this.A = new Wj(null);
            this.B = new hk;
            this.F = b => {
                null == this.j.P && 1 == b.touches.length && Q(this.j, b.touches[0])
            };
            this.C = b => {
                const c = this.j.P;
                null != c && (b = mk(c, b.changedTouches), null != b && (Q(this.j, null), Q(this.A, null), gk(this.B, lk(c, b))))
            };
            this.D = b => {
                var c = this.j.P;
                null != c && (c = mk(c, b.changedTouches), null != c && (Q(this.A, c), b.preventDefault()))
            }
        }
    };

    function lk(a, b) {
        return {
            de: b.pageX - a.pageX,
            ee: b.pageY - a.pageY
        }
    }

    function mk(a, b) {
        if (null == b) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function ok(a) {
        return Yj(Vj(a.j, a.l).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : pk(c, b)
        }))
    }
    var qk = class {
        constructor(a, b) {
            this.B = a;
            this.C = b;
            this.j = new Wj(null);
            this.l = new Wj(null);
            this.A = new hk;
            this.G = c => {
                Q(this.j, c)
            };
            this.D = c => {
                const d = this.j.P;
                null != d && (Q(this.j, null), Q(this.l, null), gk(this.A, pk(d, c)))
            };
            this.F = c => {
                null != this.j.P && (Q(this.l, c), c.preventDefault())
            }
        }
    };

    function pk(a, b) {
        return {
            de: b.screenX - a.screenX,
            ee: b.screenY - a.screenY
        }
    };
    var tk = (a, b) => {
        const c = new rk(a, b);
        return () => sk(c)
    };

    function sk(a) {
        if (a.j) return !1;
        if (null == a.l) return uk(a), !0;
        const b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return uk(a), !0;
        vk(a, b);
        return !0
    }

    function uk(a) {
        a.l = (new Date).getTime();
        a.B()
    }

    function vk(a, b) {
        a.j = !0;
        a.A.setTimeout(() => {
            a.j = !1;
            uk(a)
        }, b)
    }
    class rk {
        constructor(a, b) {
            this.A = a;
            this.B = b;
            this.l = null;
            this.j = !1
        }
    };

    function wk(a) {
        return xk(ok(a.j), kk(a.l))
    }

    function yk(a) {
        return jk(new ik(a.j.A), new ik(a.l.B))
    }
    var zk = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function xk(a, b) {
        return Vj(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };

    function Ak(a, b) {
        return new Bk(a, b)
    }

    function Ck(a) {
        a.win.requestAnimationFrame(() => {
            a.F || Q(a.A, new uf(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function Dk(a) {
        a.j || (a.j = !0, a.B.observe(a.element));
        return Yj(a.A, vf)
    }
    var Bk = class extends Qj {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.j = !1;
            this.A = new Wj(new uf(this.element.offsetWidth, this.element.offsetHeight));
            this.B = new ResizeObserver(() => {
                Ck(this)
            })
        }
        l() {
            this.B.disconnect();
            super.l()
        }
    };

    function Ek(a, b) {
        return {
            top: a.j - b,
            right: a.A + a.l,
            bottom: a.j + b,
            left: a.A
        }
    }
    class Fk {
        constructor(a, b, c) {
            this.A = a;
            this.j = b;
            this.l = c
        }
    };

    function Gk(a, b) {
        a = a.getBoundingClientRect();
        return new Hk(a.top + yj(b), a.bottom - a.top)
    }

    function Ik(a) {
        return new Hk(Math.round(a.j), Math.round(a.l))
    }
    class Hk {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        getHeight() {
            return this.l
        }
    };

    function Jk(a, b) {
        a.D = !0;
        a.A = b;
        a.l.forEach(c => {
            c(a.A)
        });
        a.l = []
    }
    class Kk {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.D = !1;
            this.C = this.A = null;
            this.F = tk(a, () => {
                if (null != this.C) {
                    var b = tj(this.j, !0) - this.C;
                    1E3 < b && Jk(this, b)
                }
            });
            this.B = null
        }
        init(a, b) {
            null == a ? (this.C = a = tj(this.j, !0), this.j.addEventListener("scroll", this.F), null != b && b(a)) : this.B = this.j.setTimeout(() => {
                this.init(void 0, b)
            }, a)
        }
        wa() {
            null != this.B && this.j.clearTimeout(this.B);
            this.j.removeEventListener("scroll", this.F);
            this.l = [];
            this.A = null
        }
        addListener(a) {
            this.D ? a(this.A) : this.l.push(a)
        }
    };

    function Lk(a) {
        return new Mk(a, new Uj(a.document.body), new Uj(a.document.documentElement))
    }

    function Nk(a) {
        null === a.l && (a.l = a.B.pageYOffset, Tj(a.j, "position", "fixed"), Tj(a.j, "top", `${-a.l}px`), Tj(a.j, "width", "100%"));
        Tj(a.j, "overflow-x", "hidden");
        Tj(a.j, "overflow-y", "hidden");
        Tj(a.A, "overflow-x", "hidden");
        Tj(a.A, "overflow-y", "hidden")
    }

    function Ok(a) {
        null !== a.l && (a.B.scrollTo(0, a.l), a.l = null)
    }
    var Mk = class {
        constructor(a, b, c) {
            this.B = a;
            this.j = b;
            this.A = c;
            this.l = null
        }
    };
    var Pk = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class Qk {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function Rk(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new Sk(d)
    }

    function Tk(a, b = 1) {
        a = a.j.slice(0);
        const c = new Qk(b);
        vb(a, () => c.next());
        return new Sk(a)
    }
    const Sk = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        forEach(a) {
            this.j.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Sk(jb(this.j, a))
        }
        apply(a) {
            return new Sk(a(this.j.slice(0)))
        }
        sort(a) {
            return new Sk(this.j.slice(0).sort(a))
        }
        get(a) {
            return this.j[a]
        }
        add(a) {
            const b = this.j.slice(0);
            b.push(a);
            return new Sk(b)
        }
    };
    class Uk {
        constructor(a) {
            this.j = new Nj(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };

    function Vk(a) {
        return new Wk({
            value: a
        }, null)
    }

    function Xk(a) {
        return new Wk(null, Error(a))
    }

    function Yk(a) {
        try {
            return Vk(a())
        } catch (b) {
            return new Wk(null, b)
        }
    }

    function Zk(a) {
        return null != a.j ? a.j.value : null
    }

    function $k(a, b) {
        null != a.j && b(a.j.value)
    }

    function al(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class Wk {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof Wk ? a : Vk(a)) : this
        }
    };
    class bl {
        constructor() {
            this.j = new Mj
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new Nj, this.j.set(a, c));
            c.add(b)
        }
    };

    function cl(a) {
        return !a
    }

    function dl(a) {
        const b = {
            Cc: a
        };
        return () => {
            if (b.Cc) {
                const c = b.Cc;
                delete b.Cc;
                c()
            }
        }
    };
    var fl = class extends K {
            constructor(a) {
                super(a, -1, el)
            }
            getId() {
                return x(this, 3)
            }
        },
        el = [4];
    class gl {
        constructor(a, {
            cd: b,
            me: c,
            cf: d,
            Rd: e
        }) {
            this.C = a;
            this.A = c;
            this.B = new Sk(b || []);
            this.l = e;
            this.j = d
        }
    };
    var hl = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new Mj;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        jl = a => {
            var b = il(a);
            a = [];
            for (let c of b) b = String(c.eb), a.push(c.Ia + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const il = a => {
            const b = [],
                c = a.B;
            c && c.j.length && b.push({
                Ia: "a",
                eb: kl(c)
            });
            null != a.A && b.push({
                Ia: "as",
                eb: a.A
            });
            null != a.j && b.push({
                Ia: "i",
                eb: String(a.j)
            });
            null != a.l && b.push({
                Ia: "rp",
                eb: String(a.l)
            });
            b.sort(function(d, e) {
                return d.Ia.localeCompare(e.Ia)
            });
            b.unshift({
                Ia: "t",
                eb: ll(a.C)
            });
            return b
        },
        ll = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        kl = a => {
            a = a.j.slice(0).map(ml);
            a = JSON.stringify(a);
            return gg(a)
        },
        ml = a => {
            const b = {};
            Ec(a, 7) && (b.q = x(a, 7));
            Ec(a, 2) &&
                (b.o = x(a, 2));
            Ec(a, 5) && (b.p = x(a, 5));
            return b
        };

    function nl() {
        var a = new ol;
        return y(a, 2, 1)
    }
    var ol = class extends K {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return y(this, 1, a)
        }
    };

    function pl(a) {
        const b = [].slice.call(arguments).filter(He(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.hd || []);
            d = Object.assign(d, e.pb())
        });
        return new ql(c, d)
    }

    function rl(a) {
        switch (a) {
            case 1:
                return new ql(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new ql(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new ql(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new ql(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function sl(a) {
        return null == a ? null : new ql(null, {
            google_ml_rank: a
        })
    }

    function tl(a) {
        return null == a ? null : new ql(null, {
            google_placement_id: jl(a)
        })
    }
    class ql {
        constructor(a, b) {
            this.hd = a;
            this.j = b
        }
        pb() {
            return this.j
        }
    };
    var ul = class extends K {
            constructor(a) {
                super(a)
            }
        },
        vl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        xl = class extends K {
            constructor(a) {
                super(a, -1, wl)
            }
        },
        yl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        zl = class extends K {
            constructor(a) {
                super(a)
            }
            l() {
                return H(this, 2)
            }
        },
        wl = [1];
    var Al = class extends K {
        constructor(a) {
            super(a)
        }
        l() {
            return z(this, 1, 0)
        }
    };
    var Bl = class extends K {
        constructor(a) {
            super(a)
        }
        l() {
            return H(this, 1)
        }
        F() {
            return H(this, 2)
        }
    };
    var Dl = class extends K {
            constructor(a) {
                super(a)
            }
            I() {
                return D(this, Cl, 2)
            }
            F() {
                return D(this, Bl, 4)
            }
            l() {
                D(this, Al, 5)
            }
        },
        Cl = class extends K {
            constructor(a) {
                super(a)
            }
            l() {
                return z(this, 1, 0)
            }
        };
    var El = class extends K {
        constructor(a) {
            super(a)
        }
        l() {
            return z(this, 3, 0)
        }
        J() {
            return B(this, 4)
        }
        K() {
            return B(this, 7)
        }
        I() {
            return D(this, Bl, 5)
        }
        F() {
            return D(this, Al, 6)
        }
    };
    var Hl = class extends K {
            constructor(a) {
                super(a, -1, Fl)
            }
            K() {
                return x(this, 2)
            }
            J() {
                return x(this, 5)
            }
            l() {
                return E(this, Gl, 3)
            }
            F() {
                return x(this, 4)
            }
            I() {
                return Ic(this, 6)
            }
            N() {
                return Fc(this, 7)
            }
        },
        Gl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Il = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Fl = [3];
    var Kl = class extends K {
            constructor(a) {
                super(a, -1, Jl)
            }
        },
        Jl = [2];
    var Ll = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var Nl = class extends K {
            constructor(a) {
                super(a, -1, Ml)
            }
        },
        Ml = [1];
    var Ol = class extends K {
        constructor(a) {
            super(a)
        }
        Z() {
            return D(this, fl, 1)
        }
        l() {
            return x(this, 2)
        }
    };
    var Pl = class extends K {
            constructor(a) {
                super(a)
            }
            getName() {
                return x(this, 4)
            }
        },
        Ql = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Rl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Sl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Tl = [1, 2, 3];
    var Wl = class extends K {
            constructor(a) {
                super(a, -1, Ul)
            }
            l() {
                return E(this, Vl, 1)
            }
        },
        Vl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Ul = [1];
    var Xl = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var Zl = class extends K {
            constructor(a) {
                super(a, -1, Yl)
            }
        },
        Yl = [3, 4];
    var $l = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var bm = class extends K {
            constructor(a) {
                super(a, -1, am)
            }
            Z() {
                return D(this, fl, 1)
            }
            l() {
                return x(this, 2)
            }
        },
        am = [6, 7, 9, 10, 11];
    var dm = class extends K {
            constructor(a) {
                super(a, -1, cm)
            }
        },
        cm = [4];
    var fm = class extends K {
            constructor(a) {
                super(a, -1, em)
            }
        },
        gm = class extends K {
            constructor() {
                super(void 0)
            }
        },
        em = [6];
    var jm = class extends K {
            constructor(a) {
                super(a, -1, hm)
            }
            l() {
                return Hc(this, 1)
            }
            F() {
                return D(this, im, 3)
            }
        },
        mm = class extends K {
            constructor(a) {
                super(a, -1, km)
            }
            l() {
                return E(this, lm, 1)
            }
        },
        lm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        im = class extends K {
            constructor(a) {
                super(a)
            }
            l() {
                return D(this, nm, 3)
            }
        },
        nm = class extends K {
            constructor(a) {
                super(a)
            }
            l() {
                return Uc(this, om, 2, pm)
            }
        },
        om = class extends K {
            constructor(a) {
                super(a)
            }
        },
        hm = [1, 4],
        km = [1],
        pm = [1, 2];
    var qm = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function rm(a) {
        return D(a, sm, 13)
    }
    var vm = class extends K {
            constructor(a) {
                super(a, -1, tm)
            }
            l() {
                return D(this, um, 15)
            }
        },
        wm = class extends K {
            constructor() {
                super(void 0)
            }
        },
        xm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        zm = class extends K {
            constructor(a) {
                super(a, -1, ym)
            }
        },
        Am = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Bm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        sm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Cm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        um = class extends K {
            constructor(a) {
                super(a)
            }
            l() {
                return B(this, 18, !1)
            }
            I() {
                y(this, 18, !1)
            }
            F() {
                return B(this,
                    21, !1)
            }
        },
        Dm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Em = class extends K {
            constructor(a) {
                super(a)
            }
        },
        tm = [1, 2, 5, 7],
        ym = [2, 5, 6, 11];
    var Fm = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function Gm(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? Xc(Fm, b) : null
        } catch (b) {
            return null
        }
    }

    function Hm(a, b) {
        if (void 0 !== a.zc) {
            let c = Gm(b);
            c || (c = new Fm);
            void 0 !== a.zc && y(c, 2, a.zc);
            y(c, 1, Ea() + 864E5);
            a = $c(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = Gm(b)) && x(a, 1) < Ea()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };
    var Im = {
            za: "ama_success",
            ua: .1,
            xa: !0
        },
        Jm = {
            za: "ama_failure",
            ua: .1,
            xa: !0
        },
        Km = {
            za: "ama_inf_scr",
            ua: .1,
            xa: !0
        },
        Lm = {
            za: "ama_inf_scr",
            ua: .1,
            xa: !0
        },
        Mm = {
            za: "ama_coverage",
            ua: .1,
            xa: !0
        },
        Nm = {
            za: "ama_inf_scr",
            ua: 1,
            xa: !0
        },
        Om = {
            za: "ama_opt",
            ua: .1,
            xa: !0
        },
        Pm = {
            za: "ama_aud_sen",
            ua: 1,
            xa: !0
        };

    function Qm(a, b) {
        for (var c = 0; c < b.length; c++) a.va(b[c]);
        return a
    }

    function Rm(a, b) {
        a.A = a.A ? a.A : b;
        return a
    }
    class Sm {
        constructor(a) {
            this.F = {};
            this.F.c = a;
            this.C = [];
            this.A = null;
            this.D = [];
            this.G = 0
        }
        Ya(a) {
            this.F.wpc = a;
            return this
        }
        va(a) {
            for (var b = 0; b < this.C.length; b++)
                if (this.C[b] == a) return this;
            this.C.push(a);
            return this
        }
        B(a) {
            var b = sd(this.F);
            0 < this.G && (b.t = this.G);
            b.err = this.C.join();
            b.warn = this.D.join();
            this.A && (b.excp_n = this.A.name, b.excp_m = this.A.message && this.A.message.substring(0, 512), b.excp_s = this.A.stack && ii(this.A.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function Tm(a, b, c) {
        !b.xa || "pvc" in c || (c.pvc = Eg(a.j));
        Oi(b.za, c, b.ua)
    }

    function Um(a, b, c) {
        c = c.B(a.j);
        b.xa && (c.pvc = Eg(a.j));
        0 < b.ua && (c.r = b.ua, Tm(a, b, c))
    }
    var Vm = class {
        constructor(a) {
            this.j = a
        }
    };

    function Wm(a, b, c) {
        Tm(a.l, Pm, { ...c,
            evt: b,
            vh: P(a.A).clientHeight,
            eid: D(a.j, zl, 4) ? .l()
        })
    }
    var Xm = class {
        constructor(a, b, c) {
            this.A = a;
            this.l = b;
            this.j = c
        }
    };

    function Ym(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function Zm(a) {
        return Hj(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };
    var R = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        S = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        },
        $m = class {
            constructor(a) {
                this.j = a;
                this.defaultValue = ""
            }
        };
    var an = new R(1084),
        bn = new R(1082, !0),
        cn = new S(1130, 100),
        dn = new R(1150),
        en = new S(1126, 5E3),
        fn = new S(1032, 200),
        gn = new $m(14),
        hn = new R(1131, !0),
        jn = new S(1159, 500),
        kn = new R(1122, !0),
        ln = new R(1196),
        mn = new R(1170),
        nn = new R(1160),
        on = new R(316),
        pn = new R(334),
        qn = new S(54),
        rn = new R(313),
        sn = new S(66, -1),
        tn = new S(65, -1),
        un = new R(369),
        vn = new R(368),
        wn = new S(1169, 61440),
        xn = new R(1171),
        yn = new R(1151),
        zn = new R(1179),
        An = new S(1072, .75),
        Bn = new S(1168, 61440),
        Cn = new R(290),
        Dn = new R(154),
        En = new R(1147),
        Fn = new R(1197),
        Gn = new R(380254521),
        Hn = new R(381914117, !0),
        In = new S(1142, 8),
        Jn = new S(1165, 1E3),
        Kn = new S(1158),
        Ln = new S(1157),
        Mn = new S(1195, 1),
        Nn = new S(1193, 100),
        On = new R(1191),
        Pn = new S(1103),
        Qn = new R(1192),
        Rn = new R(1202),
        Sn = new R(1176),
        Tn = new R(1189),
        Un = new S(1114, 1),
        Vn = new S(1116, 300),
        Wn = new S(1110),
        Xn = new S(1111),
        Yn = new S(1112),
        Zn = new S(1113),
        $n = new S(1104),
        ao = new S(1108),
        bo = new S(1106),
        co = new S(1107),
        eo = new S(1105),
        fo = new R(1203),
        go = new S(1115, 1),
        ho = new R(1121),
        io = new S(1194, 1),
        jo = new R(1186),
        ko = new R(1188),
        lo =
        new S(1119, 300),
        mo = new R(1162),
        no = new R(1175),
        oo = new R(1120),
        po = new $m(1166),
        qo = new R(447540098),
        ro = new R(449967574),
        so = new R(447540095),
        to = new R(447540097),
        uo = new R(447540099),
        vo = new R(447540096),
        wo = new R(83),
        xo = new R(439828594),
        yo = new R(77),
        zo = new R(78),
        Ao = new R(309),
        Bo = new R(80),
        Co = new R(76),
        Do = new R(1957),
        Eo = new R(380025941),
        Fo = new R(84),
        Go = new R(1973),
        Ho = new R(188),
        Io = new R(1971),
        Jo = new R(1928),
        Ko = new R(1941),
        Lo = new R(370946349),
        Mo = new R(392736476),
        No = new S(406149835),
        Oo = new R(432946749),
        Po =
        new R(432938498),
        Qo = new S(1935);
    var Ro = class {
            constructor() {
                const a = {};
                this.A = (b, c) => null != a[b] ? a[b] : c;
                this.B = (b, c) => null != a[b] ? a[b] : c;
                this.j = (b, c) => null != a[b] ? a[b] : c;
                this.C = (b, c) => null != a[b] ? a[b] : c;
                this.l = () => {}
            }
        },
        T = a => O(Ro).A(a.j, a.defaultValue),
        U = a => O(Ro).B(a.j, a.defaultValue);

    function So(a, b) {
        a = (new Cf(a)).createElement("DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function To(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Ym(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Uo(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Ym(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var Wo = (a, b, c, d = 0) => {
            var e = Vo(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.Mb(c);) b = c;
                e = {
                    anchor: b,
                    position: e.cc
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            To(a, e.anchor, e.position)
        },
        Xo = (a, b, c, d = 0) => {
            T(rn) ? Wo(a, b, c, d) : To(a, b, c)
        };

    function Vo(a, b, c) {
        const d = f => {
                f = Yo(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = Yo(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    init: Zo(a.previousSibling, d),
                    Mb: f => Zo(f.previousSibling, d),
                    cc: 0
                };
            case 2:
                return {
                    init: Zo(a.lastChild, d),
                    Mb: f => Zo(f.previousSibling, d),
                    cc: 0
                };
            case 3:
                return {
                    init: Zo(a.nextSibling, e),
                    Mb: f => Zo(f.nextSibling, e),
                    cc: 3
                };
            case 1:
                return {
                    init: Zo(a.firstChild, e),
                    Mb: f => Zo(f.nextSibling, e),
                    cc: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Yo(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Zo(a, b) {
        return a && b(a) ? a : null
    };
    var $o = (a, b = !1) => {
        try {
            return b ? (new uf(a.innerWidth, a.innerHeight)).round() : Gf(a || window).round()
        } catch (c) {
            return new uf(-12245933, -12245933)
        }
    };

    function ap(a = u) {
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function bp(a, b = u) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new tf(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function cp(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function dp(a) {
        -1 === a.l && (a.l = lb(a.j, (b, c, d) => c ? b + 2 ** d : b, 0));
        return a.l
    }
    class ep {
        constructor() {
            this.j = [];
            this.l = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && Number.isInteger(a) && this.j[a] !== b && (this.j[a] = b, this.l = -1)
        }
        get(a) {
            return !!this.j[a]
        }
    };
    N `https://www.googletagservices.com/console/host/host.js`;
    N `https://www.googletagservices.com/console/panel/index.html`;
    N `https://www.googletagservices.com/console/overlay/index.html`;
    var fp = (a, b, c) => {
        b = b || a.google_ad_width;
        c = c || a.google_ad_height;
        if (a && a.top == a) return !1;
        const d = a.document,
            e = d.documentElement;
        if (b && c) {
            let f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
            if (g > 2 * c || f > 2 * b) return !1
        }
        return !0
    };

    function gp(a, b) {
        eg(a, (c, d) => {
            b[d] = c
        })
    }
    var hp = a => {
        let b = a.location.href;
        if (a == a.top) return {
            url: b,
            Hc: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
        return {
            url: b,
            Hc: c
        }
    };

    function ip(a) {
        if (a == a.top) return 0;
        for (; a && a != a.top && Xf(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    var jp = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        kp = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
        },
        lp = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const mp = (a, b, c) => {
        a = jp(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var np = (a, b) => {
            b = b.parentElement;
            return b ? (a = cg(b, a)) ? a.direction : "" : ""
        },
        op = (a, b, c) => {
            if (0 === mp(a, b, c)) return !1;
            lp(b, c, "0px");
            const d = mp(a, b, c);
            lp(b, c, -1 * d + "px");
            a = mp(a, b, c);
            0 !== a && a !== d && lp(b, c, d / (a - d) * d + "px");
            return !0
        };
    const pp = RegExp("(^| )adsbygoogle($| )");

    function qp(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            const e = zf(d.Mc);
            a[e] = d.value
        }
    }

    function rp(a, b, c, d, e, f) {
        a = sp(a, e);
        a.qa.setAttribute("data-ad-format", d ? d : "auto");
        tp(a, b, c, f);
        return a
    }

    function up(a, b, c = null) {
        a = sp(a, {});
        tp(a, b, null, c);
        return a
    }

    function tp(a, b, c, d) {
        var e = [];
        if (d = d && d.hd) a.Pa.className = d.join(" ");
        a = a.qa;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function sp(a, b) {
        var c = So(a, b.clearBoth || !1),
            d = c.style;
        d.textAlign = "center";
        b.ac && qp(d, b.ac);
        a = (new Cf(a)).createElement("INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Uc && (d.marginTop = b.Uc);
        b.tc && (d.marginBottom = b.tc);
        b.bb && qp(d, b.bb);
        c.appendChild(a);
        return {
            Pa: c,
            qa: a
        }
    }

    function vp(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        var d = {
            element: b
        };
        c = c && c.pb();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function wp(a) {
        const b = Zm(a.document);
        ib(b, function(c) {
            const d = xp(a, c);
            var e;
            if (e = d) e = jp(c, a), e = !((e ? e.y : 0) < P(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), vp(a, c))
        })
    }

    function xp(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in lf) a[lf[c]] && (b[lf[c]] = a[lf[c]]);
        return b
    };

    function yp(a) {
        var b = [];
        Gj(a.getElementsByTagName("p"), function(c) {
            100 <= zp(c) && b.push(c)
        });
        return b
    }

    function zp(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Gj(a.childNodes, function(c) {
            b += zp(c)
        });
        return b
    }

    function Ap(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Bp(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }
    const Cp = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.l = b;
            this.A = c;
            this.j = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.B)
            } catch (f) {}
            if (!b.length) return [];
            a = qb(b);
            a = Bp(this, a);
            "number" === typeof this.l && (b = this.l, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.A) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = yp(a[c]),
                        e = this.A;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.B,
                occurrenceIndex: this.l,
                paragraphIndex: this.A,
                ignoreMode: this.j
            })
        }
    };
    class Dp {
        constructor() {
            var a = N `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.j = null;
            this.l = !1;
            this.B = Math.random();
            this.A = this.la;
            this.D = a
        }
        Wd(a) {
            this.j = a
        }
        C(a) {
            this.l = a
        }
        la(a, b, c = .01, d, e = "jserror") {
            if ((this.l ? this.B : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new Dh(b, {
                context: a,
                id: e
            }));
            if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
            u.google_js_errors = u.google_js_errors || [];
            u.google_js_errors.push(b);
            u.error_rep_loaded || (ag(u.document, ch(this.D)), u.error_rep_loaded = !0);
            return !1
        }
        vb(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.A(a, d, .01, c, "jserror")) throw d;
            }
        }
        ma(a, b) {
            return (...c) => this.vb(a, () => b.apply(void 0, c))
        }
        Fa(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.la(a, c instanceof Error ? c : Error(c))
            })
        }
    };
    const Ep = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var Fp = (a, b, c, d) => {
            const e = d || window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                f && queueMicrotask(() => {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                const g = Yh();
                let h, l = 3;
                try {
                    h = b.apply(this, arguments)
                } catch (k) {
                    l = 13;
                    if (!c) throw k;
                    c(a, k)
                } finally {
                    e.google_measure_js_timing && g && Ep({
                        label: a.toString(),
                        value: g,
                        duration: (Yh() || 0) - g,
                        type: l,
                        ...(f && {
                            taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                        })
                    }, e)
                }
                return h
            }
        },
        Gp = (a, b) => Fp(754,
            a, (c, d) => {
                (new Dp).la(c, d)
            }, b);

    function Hp(a, b, c) {
        return Fp(a, b, void 0, c).apply()
    }

    function Ip(a, b) {
        return Gp(a, b).apply()
    }

    function Jp(a) {
        if (!a) return null;
        var b = x(a, 7);
        if (x(a, 1) || a.getId() || 0 < Hc(a, 4).length) {
            b = Hc(a, 4);
            var c = x(a, 3),
                d = x(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Ap(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Ap(b[c]);
            a = (b = e) ? new Cp(b, x(a, 2), x(a, 5), Kp(x(a, 6))) : null
        } else a = b ? new Cp(b, x(a, 2), x(a, 5), Kp(x(a, 6))) : null;
        return a
    }
    var Lp = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Kp(a) {
        return null == a ? a : Lp[a]
    }

    function Mp(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = x(a[c], 1),
                e = x(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.Mc = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Np(a, b) {
        var c = {};
        a && (c.Uc = x(a, 1), c.tc = x(a, 2), c.clearBoth = !!Jc(a, 3));
        b && (c.ac = Mp(E(b, Xl, 3)), c.bb = Mp(E(b, Xl, 4)));
        return c
    }
    var Op = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Pp = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const Qp = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return rp(d.document, a, null, null, this.j, b)
        }
        A() {
            return null
        }
    };
    const Rp = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < E(this.j, Zl, 9).length ? E(this.j, Zl, 9)[0] : null,
                f = Np(D(this.j, $l, 3), e);
            if (!e) return null;
            if (e = x(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = (new Cf(d)).createElement(g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.ac && qp(c.style, f.ac);
                d = (new Cf(d)).createElement("INS");
                f.bb && qp(d.style, f.bb);
                c.appendChild(d);
                f = {
                    Pa: c,
                    qa: d
                };
                f.qa.setAttribute("data-ad-type", "text");
                f.qa.setAttribute("data-native-settings-key",
                    e);
                tp(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        A() {
            var a = 0 < E(this.j, Zl, 9).length ? E(this.j, Zl, 9)[0] : null;
            if (!a) return null;
            a = E(a, Xl, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == x(c, 1) && 0 < parseInt(x(c, 2), 10)) return parseInt(x(c, 2), 10)
            }
            return null
        }
    };
    const Sp = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const l = c.item(h);
                    "width" !== l && "height" !== l && g.push({
                        Mc: l,
                        value: c.getPropertyValue(l)
                    })
                }
                c = {
                    bb: g
                }
            } else c = {};
            a = rp(d.document, a, f, e, c, b);
            a.qa.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        A() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        pb() {
            return this.j
        }
    };
    class Tp {
        constructor(a) {
            this.l = a
        }
        j() {
            return new ql([], {
                google_ad_type: this.l,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const Up = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        l() {
            return this.A
        }
        j(a) {
            a = this.B.query(a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function Vp(a, b, c) {
        const d = [];
        for (let r = 0; r < a.length; r++) {
            var e = a[r];
            var f = r,
                g = b,
                h = c,
                l = e.Z();
            if (l) {
                var k = Jp(l);
                if (k) {
                    var m = Op[x(e, 2)],
                        n = void 0 === m ? null : m;
                    if (null === n) e = null;
                    else {
                        m = (m = D(e, $l, 3)) ? Jc(m, 3) : null;
                        k = new Up(k, n);
                        n = Hc(e, 10).slice(0);
                        Ec(l, 5) && n.push(1);
                        var q = h ? h : {};
                        h = x(e, 12);
                        l = Fc(e, 4) ? D(e, ol, 4) : null;
                        1 == x(e, 8) || 2 == x(e, 8) && T(mn) ? (q = q.De || null, e = new Wp(k, new Qp(Np(D(e, $l, 3), null)), q, m, 0, n, l, g, f, h, e)) : e = 2 == x(e, 8) ? new Wp(k, new Rp(e), q.df || new Tp("text"), m, 1, n, l, g, f, h, e) : null
                    }
                } else e = null
            } else e =
                null;
            null !== e && d.push(e)
        }
        return d
    }

    function Xp(a) {
        return a.C
    }

    function Yp(a) {
        return a.pa
    }

    function Zp(a) {
        var b = a.J;
        a = a.A.document.createElement("div");
        T(ln) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function $p(a) {
        return T(ln) ? (a.N || (a.N = a.I.j(a.A)), a.N) : a.I.j(a.A)
    }

    function aq(a) {
        return a.F instanceof Sp ? a.F.pb() : null
    }

    function bq(a, b, c) {
        Ij(a.K, b) || a.K.set(b, []);
        a.K.get(b).push(c)
    }

    function cq(a, b) {
        a.C = !0;
        T(ln) && (a.j && Uo(a.j), a.j = null);
        null != b && a.T.push(b)
    }

    function dq(a) {
        return So(a.A.document, a.J || !1)
    }

    function eq(a) {
        return a.F.A(a.A)
    }

    function fq(a, b = null, c = null) {
        return new Wp(a.I, b || a.F, c || a.O, a.J, a.Ra, a.Ic, a.kc, a.A, a.ea, a.G, a.B, a.D, a.W)
    }
    class Wp {
        constructor(a, b, c, d, e, f, g, h, l, k = null, m = null, n = null, q = null) {
            this.I = a;
            this.F = b;
            this.O = c;
            this.J = d;
            this.Ra = e;
            this.Ic = f;
            this.kc = g ? g : new ol;
            this.A = h;
            this.ea = l;
            this.G = k;
            this.B = m;
            (a = !m) || (a = !(m.Z() && null != x(m.Z(), 5)));
            this.pa = !a;
            this.D = n;
            this.W = q;
            this.T = [];
            this.C = !1;
            this.K = new Mj;
            this.N = this.j = null
        }
        U() {
            return this.A
        }
        l() {
            return this.I.l()
        }
    };
    var gq = a => a ? .google_ad_slot ? Vk(new gl(1, {
            me: a.google_ad_slot
        })) : Xk("Missing dimension when creating placement id"),
        iq = a => {
            switch (a.Ra) {
                case 0:
                case 1:
                    var b = a.B;
                    null == b ? a = null : (a = b.Z(), null == a ? a = null : (b = b.l(), a = null == b ? null : new gl(0, {
                        cd: [a],
                        Rd: b
                    })));
                    return null != a ? Vk(a) : Xk("Missing dimension when creating placement id");
                case 2:
                    return a = hq(a), null != a ? Vk(a) : Xk("Missing dimension when creating placement id");
                default:
                    return Xk("Invalid type: " + a.Ra)
            }
        };
    const hq = a => {
        if (null == a || null == a.D) return null;
        const b = D(a.D, fl, 1),
            c = D(a.D, fl, 2);
        if (null == b || null == c) return null;
        const d = a.W;
        if (null == d) return null;
        a = a.l();
        return null == a ? null : new gl(0, {
            cd: [b, c],
            cf: d,
            Rd: Pp[a]
        })
    };

    function jq(a) {
        const b = aq(a.V);
        return (b ? gq(b) : iq(a.V)).map(c => jl(c))
    }

    function kq(a) {
        a.j = a.j || jq(a);
        return a.j
    }

    function lq(a, b) {
        if (a.V.C) throw Error("AMA:AP:AP");
        Xo(b, a.Z(), a.V.l());
        cq(a.V, b)
    }
    const mq = class {
        constructor(a, b, c) {
            this.V = a;
            this.l = b;
            this.X = c;
            this.j = null
        }
        Z() {
            return this.l
        }
        fill(a, b) {
            var c = this.V;
            (a = c.F.l(a, b, this.l, c.A)) && lq(this, a.Pa);
            return a
        }
    };
    const nq = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = Wa(b, "&") ? wf(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && Oj.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (nq(a, b[c])) return !0
        }
        return !1
    };
    var oq = a => {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const pq = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return rp(d.document, a, null, null, this.j, b)
        }
        A(a) {
            return oq(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };
    class qq {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = oq(a);
            return new ql(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.l,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const rq = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        j() {
            return this.B
        }
        l() {
            return this.A
        }
    };
    const sq = {
        TABLE: {
            ib: new Uk([1, 2])
        },
        THEAD: {
            ib: new Uk([0, 3, 1, 2])
        },
        TBODY: {
            ib: new Uk([0, 3, 1, 2])
        },
        TR: {
            ib: new Uk([0, 3, 1, 2])
        },
        TD: {
            ib: new Uk([0, 3])
        }
    };

    function tq(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = hb(e, f), 0 > c || b.push(new uq(a, [f], c, f, 3, Pf(f).trim(), d));
        return b
    }

    function vq(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            l = "";
        for (let n = 0; n < g; n++) {
            var k = f[n];
            if (1 == k.nodeType || 3 == k.nodeType) {
                a: {
                    var m = k;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName) break a;
                    const q = c.getComputedStyle(m).getPropertyValue("display");m = "inline" == q || "inline-block" == q ? null : m
                }
                m ? (d.length && l && e.push(new uq(a, d, n - 1, m, 0, l, c)), d = [], h = n + 1, l = "") : (d.push(k), k = Pf(k).trim(), l += k && l ? " " + k : k)
            }
        }
        d.length && l && e.push(new uq(a, d, h, b, 2, l, c));
        return e
    }

    function wq(a, b) {
        return a.j - b.j
    }

    function xq(a) {
        const b = nl();
        return new Wp(new rq(a.nc, a.oc), new Qp({
            clearBoth: !0
        }), null, !0, 2, [], b, a.l, null, null, null, a.A, a.j)
    }
    class uq {
        constructor(a, b, c, d, e, f, g) {
            this.A = a;
            this.gb = b.slice(0);
            this.j = c;
            this.nc = d;
            this.oc = e;
            this.B = f;
            this.l = g
        }
        U() {
            return this.l
        }
    };

    function yq(a) {
        return pb(a.C ? vq(a.l, a.j, a.A) : [], a.B ? tq(a.l, a.B, a.j, a.A) : []).filter(b => {
            var c = b.nc.tagName;
            c ? (c = sq[c.toUpperCase()], b = null != c && c.ib.contains(b.oc)) : b = !1;
            return !b
        })
    }
    class zq {
        constructor(a, b, c) {
            this.j = a;
            this.B = b.Hb;
            this.C = b.rd;
            this.l = b.articleStructure;
            this.A = c
        }
    };

    function Aq(a, b) {
        return Ip(() => {
            if (T(ln)) {
                var c = [],
                    d = yj(b),
                    e = zj(b);
                for (var f of a) {
                    var g = f;
                    if (!g.j && !g.C) {
                        var h = g;
                        var l = g,
                            k = Zp(l);
                        try {
                            var m = $p(l);
                            if (m) {
                                Xo(k, m, l.l());
                                var n = k
                            } else n = null
                        } catch (t) {
                            throw Uo(k), t;
                        }
                        h.j = n
                    }
                    h = g.j;
                    g = $p(f);
                    h && g && (h = Bq(h, e, d), c.push(new mq(f, g, h)))
                }
                n = c
            } else {
                n = [];
                f = [];
                try {
                    m = [];
                    for (let t = 0; t < a.length; t++) {
                        var q = a[t],
                            r = $p(q);
                        r && m.push({
                            Nd: q,
                            anchorElement: r
                        })
                    }
                    for (r = 0; r < m.length; r++) {
                        q = f;
                        h = q.push; {
                            k = m[r];
                            const t = k.anchorElement,
                                C = k.Nd,
                                w = Zp(C);
                            try {
                                Xo(w, t, C.l()), l = w
                            } catch (A) {
                                throw Uo(w),
                                    A;
                            }
                        }
                        h.call(q, l)
                    }
                    c = yj(b);
                    d = zj(b);
                    for (h = 0; h < f.length; h++) e = Bq(f[h], d, c), g = m[h], n.push(new mq(g.Nd, g.anchorElement, e))
                } finally {
                    for (m = 0; m < f.length; m++) Uo(f[m])
                }
            }
            return n
        }, b)
    }

    function Bq(a, b, c) {
        a = a.getBoundingClientRect();
        return new Fk(a.left + b, a.top + c, a.right - a.left)
    };

    function Cq(a, b) {
        const c = yq(b);
        c.sort(wq);
        return new Dq(a, b, c)
    }

    function Eq(a, b, c) {
        return new Wp(new rq(b, c), new Qp({}), null, !0, 2, [], null, a.j, null, null, null, a.C.l, null)
    }
    var Dq = class {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.B = c;
            this.l = !1;
            this.A = 0
        }
        next() {
            if (!this.l) {
                if (this.A >= this.B.length) var a = null;
                else {
                    {
                        const b = this.B[this.A++].gb[0];
                        wa(b) && 1 == b.nodeType ? a = Eq(this, b, 0) : (a = this.j.document.createElement("div"), M(a, {
                            display: "none"
                        }), b.parentNode.insertBefore(a, b), a = Eq(this, a, 3))
                    }
                    a = Aq([a], this.j)[0] || null
                }
                if (a) return a;
                this.l = !0
            }
            return null
        }
    };
    var Fq = class {
        constructor(a) {
            this.l = a
        }
        j() {
            return this.l.next()
        }
    };
    const Gq = {
            1: "0.5vp",
            2: "300px"
        },
        Hq = {
            1: 700,
            2: 1200
        },
        Iq = {
            [1]: {
                Zd: "3vp",
                Rc: "1vp",
                Yd: "0.3vp"
            },
            [2]: {
                Zd: "900px",
                Rc: "300px",
                Yd: "90px"
            }
        };

    function Jq(a, b, c) {
        var d = Kq(a),
            e = P(a).clientHeight || Hq[d],
            f = void 0;
        c && (f = (c = (c = Lq(E(c, Hl, 2), d)) ? D(c, Il, 7) : void 0) ? Mq(c, e) : void 0);
        c = f;
        f = Kq(a);
        a = P(a).clientHeight || Hq[f];
        const g = Nq(Iq[f].Rc, a);
        a = null === g ? Oq(f, a) : new Pq(g, g, Qq(g, g, 8), 8, .3, c);
        c = Nq(Iq[d].Zd, e);
        f = Nq(Iq[d].Rc, e);
        e = Nq(Iq[d].Yd, e);
        d = a.A;
        c && e && f && void 0 !== b && (d = .5 >= b ? f + (1 - 2 * b) * (c - f) : e + (2 - 2 * b) * (f - e));
        b = d;
        return new Pq(d, b, Qq(d, b, a.l), a.l, a.B, a.j)
    }

    function Rq(a, b) {
        const c = Kq(a);
        a = P(a).clientHeight || Hq[c];
        if (b = Lq(E(b, Hl, 2), c))
            if (b = Sq(b, a)) return b;
        return Oq(c, a)
    }

    function Tq(a) {
        const b = Kq(a);
        return Oq(b, P(a).clientHeight || Hq[b])
    }

    function Uq(a, b) {
        let c = {
            Wb: a.A,
            Va: a.C
        };
        for (let d of a.D) d.adCount <= b && (c = d.Qc);
        return c
    }

    function Vq(a, b, c) {
        var d = Jc(b, 2);
        b = D(b, Hl, 1);
        const e = P(c).clientHeight || Hq[Kq(c)];
        c = Nq(b ? .K(), e) ? ? a.A;
        const f = Nq(b ? .J(), e) ? ? a.C;
        d = d ? [] : Wq(b ? .l(), e) ? ? a.D;
        const g = b ? .F() ? ? a.l,
            h = b ? .I() ? ? a.B;
        a = (b ? .N() ? Mq(D(b, Il, 7), e) : null) ? ? a.j;
        return new Pq(c, f, d, g, h, a)
    }
    class Pq {
        constructor(a, b, c, d, e, f) {
            this.A = a;
            this.C = b;
            this.D = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.B = e;
            this.j = f
        }
    }

    function Lq(a, b) {
        for (let c of a)
            if (x(c, 1) == b) return c;
        return null
    }

    function Wq(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = x(d, 1);
            const e = Nq(x(d, 2), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                Qc: {
                    Wb: e,
                    Va: Nq(x(d, 3), b)
                }
            })
        }
        return c
    }

    function Sq(a, b) {
        const c = Nq(x(a, 2), b),
            d = Nq(x(a, 5), b);
        if (null === c) return null;
        const e = x(a, 4);
        if (null == e) return null;
        var f = a.l();
        f = Wq(f, b);
        if (null === f) return null;
        const g = D(a, Il, 7);
        return new Pq(c, d, f, e, Ic(a, 6), g ? Mq(g, b) : void 0)
    }

    function Oq(a, b) {
        a = Nq(Gq[a], b);
        return new Pq(null === a ? Infinity : a, null, [], 3, null)
    }

    function Nq(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function Kq(a) {
        a = 900 <= P(a).clientWidth;
        return Uf() && !a ? 1 : 2
    }

    function Qq(a, b, c) {
        if (4 > c) return [];
        const d = Math.ceil(c / 2);
        return [{
            adCount: d,
            Qc: {
                Wb: 2 * a,
                Va: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            Qc: {
                Wb: 3 * a,
                Va: 3 * b
            }
        }]
    }

    function Mq(a, b) {
        return {
            Gd: Nq(x(a, 2), b) || 0,
            Fd: x(a, 3) || 1,
            cb: Nq(x(a, 1), b) || 0
        }
    };

    function Xq(a, b, c) {
        return ij({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function Yq(a) {
        if (!a.length) return null;
        const b = jj(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new Zq(b, a)
    }
    class Zq {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function $q(a = window) {
        a = a.googletag;
        return a ? .apiReady ? a : void 0
    };
    var fr = (a, b) => {
        const c = qb(b.document.querySelectorAll(".google-auto-placed")),
            d = ar(b),
            e = br(b),
            f = cr(b),
            g = dr(b),
            h = qb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = qb(b.document.querySelectorAll("div.googlepublisherpluginad")),
            k = qb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(qb(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), qb(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n, q] of [
                [a.Nb, c],
                [a.Qa, d],
                [a.Ze, e],
                [a.Ob, f],
                [a.Pb, g],
                [a.Xe, h],
                [a.Ye, l],
                [a.bf, k]
            ]) a = q, !1 === n ? b = b.concat(a) : m = m.concat(a);
        a = er(m);
        b = er(b);
        a = a.slice(0);
        for (const n of b)
            for (b = 0; b < a.length; b++)(n.contains(a[b]) || a[b].contains(n)) && a.splice(b, 1);
        return a
    };
    const gr = a => {
            const b = $q(a);
            return b ? jb(kb(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        ar = a => qb(a.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
        br = a => qb(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        cr = a => (gr(a) || qb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(qb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        dr = a => qb(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var er = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var hr = Li.ma(453, fr),
        ir;
    ir = Li.ma(454, (a, b) => {
        const c = qb(b.document.querySelectorAll(".google-auto-placed")),
            d = ar(b),
            e = br(b),
            f = cr(b),
            g = dr(b),
            h = qb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = qb(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = qb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return er([].concat(!0 === a.Nb ? c : [], !0 === a.Qa ? d : [], !0 === a.Ze ? e : [], !0 === a.Ob ? f : [], !0 === a.Pb ? g : [], !0 === a.Xe ? h : [], !0 === a.Ye ? l : [], !0 === a.bf ? b : []))
    });

    function jr(a, b, c) {
        const d = kr(a);
        b = lr(d, b, c);
        return new mr(a, d, b)
    }

    function nr(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function or(a) {
        return a.j.map(b => b.box)
    }

    function pr(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class mr {
        constructor(a, b, c) {
            this.A = a;
            this.j = b.slice(0);
            this.B = c.slice(0);
            this.l = null
        }
    }

    function kr(a) {
        const b = hr({
                Qa: !1
            }, a),
            c = zj(a),
            d = yj(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && Wa(e.className, "google-auto-placed")) || nr(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Cj: e ? 1 : 0
            } : null
        }).filter(He(e => null === e))
    }

    function lr(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? qr(a, b) : kb(a, d => new Zq(d.box, 1))
    }

    function qr(a, b) {
        a = kb(a, d => new Zq(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (Xq(d, a[f], b)) {
                        d = Yq([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function rr(a, b, c) {
        const d = Ek(c, b);
        return !mb(a, e => ij(e, d))
    }

    function sr(a, b, c, d, e) {
        e = e.X;
        const f = Ek(e, b),
            g = Ek(e, c),
            h = Ek(e, d);
        return !mb(a, l => ij(l, g) || ij(l, f) && !ij(l, h))
    }

    function tr(a, b, c, d) {
        const e = or(a);
        if (rr(e, b, d.X)) return !0;
        if (!sr(e, b, c.Gd, c.cb, d)) return !1;
        const f = new Zq(Ek(d.X, 0), 1);
        a = jb(a.B, g => Xq(g, f, c.cb));
        b = lb(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.Fd ? !1 : !0
    };
    var ur = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function vr(a, b) {
        const c = new bl,
            d = new Nj;
        b.forEach(e => {
            if (Uc(e, Ql, 1, Tl)) {
                e = Uc(e, Ql, 1, Tl);
                if (D(e, Ol, 1) && D(e, Ol, 1).Z() && D(e, Ol, 2) && D(e, Ol, 2).Z()) {
                    const g = wr(a, D(e, Ol, 1).Z()),
                        h = wr(a, D(e, Ol, 2).Z());
                    if (g && h)
                        for (var f of ur({
                                anchor: g,
                                position: D(e, Ol, 1).l()
                            }, {
                                anchor: h,
                                position: D(e, Ol, 2).l()
                            })) c.set(xa(f.anchor), f.position)
                }
                D(e, Ol, 3) && D(e, Ol, 3).Z() && (f = wr(a, D(e, Ol, 3).Z())) && c.set(xa(f), D(e, Ol, 3).l())
            } else Uc(e, Rl, 2, Tl) ? xr(a, Uc(e, Rl, 2, Tl), c) : Uc(e, Sl, 3, Tl) && yr(a, Uc(e, Sl, 3, Tl), d)
        });
        return new zr(c, d)
    }
    class zr {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const xr = (a, b, c) => {
            D(b, Ol, 2) ? (b = D(b, Ol, 2), (a = wr(a, b.Z())) && c.set(xa(a), b.l())) : D(b, fl, 1) && (a = Ar(a, D(b, fl, 1))) && a.forEach(d => {
                d = xa(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        yr = (a, b, c) => {
            D(b, fl, 1) && (a = Ar(a, D(b, fl, 1))) && a.forEach(d => {
                c.add(xa(d))
            })
        },
        wr = (a, b) => (a = Ar(a, b)) && 0 < a.length ? a[0] : null,
        Ar = (a, b) => (b = Jp(b)) ? b.query(a) : null;

    function Br(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (Cr(b)) return !0;
            if (a.j.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.j.add(d));
        return !1
    }

    function Dr(a) {
        a = Er(a);
        return a.has("all") || a.has("after")
    }

    function Fr(a) {
        a = Er(a);
        return a.has("all") || a.has("before")
    }

    function Er(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function Cr(a) {
        const b = Er(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var Gr = class {
        constructor() {
            this.j = new Set
        }
    };

    function Hr(a) {
        return function(b) {
            return Aq(b, a)
        }
    }

    function Ir(a) {
        const b = P(a).clientHeight;
        return b ? Da(Jr, b + yj(a)) : Ee
    }

    function Kr(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return Ee;
        const d = or(c || jr(b));
        return e => rr(d, a, e.X)
    }

    function Lr(a, b, c, d) {
        if (0 > a || 0 > b.Gd || 0 > b.Fd || 0 > b.cb) throw Error("ama::ead:nd");
        return Infinity === a ? Ee : e => tr(d || jr(c, b.cb), a, b, e)
    }

    function Mr(a) {
        if (!a.length) return Ee;
        const b = new Uk(a);
        return c => b.contains(c.Ra)
    }

    function Nr(a) {
        return function(b) {
            for (let c of b.Ic)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function Or(a) {
        return a.length ? function(b) {
            const c = b.Ic;
            return a.some(d => -1 < c.indexOf(d))
        } : Fe
    }

    function Pr(a, b) {
        if (0 >= a) return Fe;
        const c = P(b).scrollHeight - a;
        return function(d) {
            return d.X.j <= c
        }
    }

    function Qr(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[x(c.kc, 2) || 0]
        }
    }

    function Rr(a) {
        return a.length ? b => a.includes(x(b.kc, 1) || 0) : Fe
    }

    function Tr(a, b) {
        const c = vr(a, b);
        return function(d) {
            var e = d.Z();
            d = Pp[d.V.l()];
            var f = xa(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(xa(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(xa(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function Ur() {
        const a = new Gr;
        return function(b) {
            var c = b.Z();
            b = Pp[b.V.l()];
            a: switch (b) {
                case 1:
                    var d = Dr(c.previousElementSibling) || Fr(c);
                    break a;
                case 4:
                    d = Dr(c) || Fr(c.nextElementSibling);
                    break a;
                case 2:
                    d = Fr(c.firstElementChild);
                    break a;
                case 3:
                    d = Dr(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + b);
            }
            return !(d || Br(a, c, b))
        }
    }
    const Jr = (a, b) => b.X.j >= a,
        Vr = (a, b, c) => {
            c = c.X.l;
            return a <= c && c <= b
        };
    var Wr = class {
        constructor(a, b) {
            this.A = a;
            this.l = b
        }
        j() {
            const a = Ir(this.A);
            let b = this.l.next();
            for (; b;) {
                if (a(b)) return b;
                b = this.l.next()
            }
            return null
        }
    };
    var Xr = class {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = new bm;
            var b = D(this.A.l, fl, 1);
            a = Pc(a, 1, b);
            a = y(y(a, 2, 2), 8, 1);
            a = Vp([a], this.l);
            return Aq(a, this.l)[0] || null
        }
    };
    var Yr = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > .5 * b
        },
        Zr = a => {
            const b = P(a).clientHeight || 0;
            return c => c.getBoundingClientRect().height >= .75 * b
        };

    function $r(a, b) {
        if (!b) return !1;
        const c = xa(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = $r(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function as(a, b) {
        return mb(b.gb, c => $r(a, c))
    }
    class bs {
        constructor(a) {
            this.j = new Mj;
            this.l = a
        }
    };
    class cs {
        constructor(a, b) {
            this.B = a;
            this.j = [];
            this.l = [];
            this.A = b
        }
    };
    var es = (a, {
            Fj: b = !1,
            Gj: c = 3,
            Hf: d = null
        } = {}) => {
            a = yq(a);
            return ds(a, b, c, d)
        },
        ds = (a, b = !1, c = 3, d = null) => {
            if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
            var e = a.slice(0);
            e.sort(wq);
            a = [];
            b = new cs(b, d);
            for (const k of e) {
                d = b;
                e = {
                    dc: k,
                    Qb: 51 > k.B.length ? !1 : null != d.A ? !as(d.A, k) : !0
                };
                if (d.B || e.Qb) {
                    if (d.j.length) {
                        var f = d.j[d.j.length - 1].dc;
                        b: {
                            var g = f.U();
                            var h = f.gb[f.gb.length - 1];f = e.dc.gb[0];
                            if (!h || !f) {
                                g = !1;
                                break b
                            }
                            var l = h.parentElement;
                            const m = f.parentElement;
                            if (l && m && l == m) {
                                l = 0;
                                for (h = h.nextSibling; 10 >
                                    l && h;) {
                                    if (h == f) {
                                        g = !0;
                                        break b
                                    }
                                    if (nq(g, h)) break;
                                    h = h.nextSibling;
                                    l++
                                }
                                g = !1
                            } else g = !1
                        }
                    } else g = !0;
                    g ? (d.j.push(e), e.Qb && d.l.push(e.dc)) : (d.j = [e], d.l = e.Qb ? [e.dc] : [])
                }
                if (b.l.length >= c) {
                    if (1 >= b.l.length) d = null;
                    else {
                        e = b.l[1];
                        for (d = b; d.j.length && !d.j[0].Qb;) d.j.shift();
                        d.j.shift();
                        d.l.shift();
                        d = e
                    }
                    d && a.push(d)
                }
            }
            return a
        };
    var gs = (a, b) => {
            a = fs(a, b);
            const c = new bs(b);
            return Pk(a, d => es(d, {
                Hf: c
            }))
        },
        fs = (a, b) => {
            const c = new Mj;
            a.forEach(d => {
                var e = Jp(D(d, fl, 1));
                if (e) {
                    const f = e.toString();
                    Ij(c, f) || c.set(f, {
                        articleStructure: d,
                        ue: e,
                        Hb: null,
                        rd: !1
                    });
                    e = c.get(f);
                    (d = (d = D(d, fl, 2)) ? x(d, 7) : null) ? e.Hb = e.Hb ? e.Hb + "," + d : d: e.rd = !0
                }
            });
            return Lj(c).map(d => {
                const e = d.ue.query(b.document);
                return e.length ? new zq(e[0], d, b) : null
            }).filter(d => null != d)
        };
    var hs = (a, b) => {
        b = fs(b, a);
        const c = b.map(d => d.j);
        b = b.filter(d => {
            d = d.j.getBoundingClientRect();
            return 0 < d.width && 0 < d.height
        }).filter(d => Yr(c)(d.j)).filter(d => Zr(a)(d.j));
        b.sort((d, e) => {
            e = e.j;
            return d.j.getBoundingClientRect().top - e.getBoundingClientRect().top
        });
        return b[0] || null
    };
    var js = (a, b, c) => {
        if (B(c, 2)) {
            if (a.document.getElementById("google-auto-placed-read-aloud-player-reserved")) {
                var d = new bm;
                var e = new fl;
                e = y(e, 7, "div#google-auto-placed-read-aloud-player-reserved");
                d = Pc(d, 1, e);
                d = y(y(d, 2, 2), 8, 1);
                d = Vp([d], a);
                d = Aq(d, a)[0] || null
            } else d = null;
            if (d) return d
        }
        if (b = hs(a, b)) {
            a: switch (c = is(c), c) {
                case 1:
                    a = new Xr(a, b);
                    break a;
                case 2:
                    a = new Fq(Cq(a, b));
                    break a;
                case 3:
                    a = new Wr(a, Cq(a, b));
                    break a;
                default:
                    throw Error(`Unknown position: ${c}`);
            }
            a = a.j()
        }
        else a = null;
        return a
    };

    function is(a) {
        if (B(a, 2)) return 3;
        switch (z(a, 1, 0)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                throw Error(`Unknown player position: ${z(a,1,0)}`);
        }
    };
    var ks = class {
            constructor(a) {
                this.j = a
            }
        },
        ns = (a, b, c, d) => {
            if (0 < a.document.getElementsByTagName("google-read-aloud-player").length) return Xk("Player already created");
            var e = a.document;
            const f = e.createElement("div");
            f.id = "google-auto-placed-read-aloud-player";
            M(f, {
                padding: "5px"
            });
            const g = e.createElement("script");
            var h = Zg `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`;
            g.textContent = zd(h);
            Ce(g);
            f.appendChild(g);
            ls(e, f, ld("https://www.google-analytics.com/analytics.js"));
            ls(e, f, ld("https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"));
            e = e.createElement("google-read-aloud-player");
            e.setAttribute("data-api-key", "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
            e.setAttribute("data-tracking-ids", "UA-199725947-1,UA-168915890-13");
            e.setAttribute("data-url", c.url);
            e.setAttribute("data-voice", "en-us-m-6");
            d && (Ec(d, 1) && 0 != z(d, 1, 0) && e.setAttribute("data-docking-begin-trigger", ms[z(d, 1, 0)]), Ec(d, 2) && e.setAttribute("data-experiment", d.l()));
            f.appendChild(e);
            lq(b,
                f);
            return Vk(new ks(a.document.getElementsByTagName("google-read-aloud-player")[0]))
        };
    const ls = (a, b, c) => {
            a = a.createElement("script");
            De(a, Gd(kd(c)));
            a.setAttribute("async", "true");
            b.appendChild(a)
        },
        ms = {
            [1]: "out-of-view"
        };
    class os {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.j = b
            })
        }
    };

    function ps() {
        const {
            promise: a,
            resolve: b
        } = new os;
        return {
            promise: a,
            resolve: b
        }
    };

    function qs(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = ps();
        b[a] = d;
        c();
        return d
    }

    function rs(a, b, c) {
        return qs(a, b, () => {
            ag(b.document, c)
        }).promise
    };

    function ss(a, b, c) {
        a = rs(7, a, c).then(d => {
            d.init(b);
            d.handleAdConfig({
                preloadAdBreaks: "on",
                sound: "on"
            });
            return d
        });
        Li.Fa(915, a);
        return new ts(a)
    }

    function us(a, b) {
        a = a.j.then(c => {
            c.handleAdBreak({
                type: "preroll",
                name: "audiosense-preroll",
                adBreakDone: b
            })
        });
        Li.Fa(956, a)
    }
    var ts = class {
        constructor(a) {
            this.j = a
        }
    };

    function vs(a) {
        const b = a.A.j;
        b.addEventListener("firstplay", () => {
            a.j || (a.j = !0, b.pause(), us(a.B, () => b.play()), Wm(a.l, "play", {}))
        })
    }
    var ws = class {
        constructor(a, b, c) {
            this.A = a;
            this.B = b;
            this.l = c;
            this.j = !1
        }
    };

    function xs(a, b, c, d, e) {
        const f = D(c, Wl, 6) ? .l();
        return f && 0 != f.length ? (c = D(c, ul, 27)) ? D(c, vl, 2) ? Vk(new ys(a, b, f, c, d, e)) : Xk("No AudioSenseConfig.PlacementConfig found") : Xk("No AudioSenseConfig found") : Xk("No ArticleStructure found")
    }

    function zs(a) {
        const b = js(a.B, a.G, D(a.l, vl, 2));
        if (b) {
            var c = !!a.C.xb && As(a);
            c && (a.D = ss(a.B, a.F, a.C.xb));
            var d = ns(a.B, b, a.C, D(a.l, zl, 4) || void 0);
            null != d.j ? (a.A = d.j.value, a.A.j.addEventListener("firstview", () => {
                Wm(a.j, "view", {})
            }), c && vs(new ws(a.A, a.D, a.j)), Wm(a.j, "place", {
                sts: "ok",
                pp: b.X.j
            })) : Wm(a.j, "place", {
                sts: "wf"
            })
        } else Wm(a.j, "place", {
            sts: "pf"
        })
    }

    function As(a) {
        return (a = D(a.l, xl, 3)) ? E(a, yl, 1).some(b => 1 === z(b, 1, 0)) : !1
    }
    var ys = class {
        constructor(a, b, c, d, e, f) {
            this.B = a;
            this.j = new Xm(a, b, d);
            this.G = c;
            this.l = d;
            this.C = e;
            this.F = f;
            this.A = this.D = null
        }
    };
    const Bs = ["-webkit-text-fill-color"];

    function Cs(a) {
        if (Cb) {
            {
                const c = cg(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = Ds(a)
                } else a = Es()
            }
        } else a = Es();
        return a
    }
    var Es = () => {
        const a = {
            all: "initial"
        };
        ib(Bs, b => {
            a[b] = "unset"
        });
        return a
    };

    function Ds(a) {
        ib(Bs, b => {
            delete a[b]
        });
        return a
    };
    class Fs {
        constructor(a) {
            this.j = a
        }
        ra(a) {
            const b = a.document.createElement("div");
            M(b, Cs(a));
            M(b, {
                width: "100%",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            M(c, Cs(a));
            c.className = "auto-prose-searchbox-wrapper";
            c.appendChild(b);
            return c
        }
    };
    var Gs = {},
        Hs = {},
        Is = {},
        Js = {},
        Ks = {};

    function Ls() {
        throw Error("Do not instantiate directly");
    }
    Ls.prototype.kd = null;
    Ls.prototype.ra = function() {
        return this.content
    };
    Ls.prototype.toString = function() {
        return this.content
    };

    function Ms(a) {
        if (a.md !== Gs) throw Error("Sanitized content was not of kind HTML.");
        return ke(a.toString())
    }

    function Ns() {
        Ls.call(this)
    }
    Ha(Ns, Ls);
    Ns.prototype.md = Gs;

    function Os(a, b) {
        return null != a && a.md === b
    };

    function Ps(a) {
        if (null != a) switch (a.kd) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function Qs(a) {
        return Os(a, Gs) ? a : a instanceof ie ? Rs(he(a).toString()) : a instanceof ie ? Rs(he(a).toString()) : Rs(String(String(a)).replace(Ss, Ts), Ps(a))
    }
    var Rs = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.kd = d);
            return c
        }
    }(Ns);

    function Us(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function Vs(a) {
        return Os(a, Gs) ? String(String(a.ra()).replace(Ws, "").replace(Xs, "&lt;")).replace(Ys, Ts) : String(a).replace(Ss, Ts)
    }

    function Zs(a) {
        a = String(a);
        const b = (d, e, f) => {
            const g = Math.min(e.length - f, d.length);
            for (let l = 0; l < g; l++) {
                var h = e[f + l];
                if (d[l] !== ("A" <= h && "Z" >= h ? h.toLowerCase() : h)) return !1
            }
            return !0
        };
        for (var c = 0; - 1 != (c = a.indexOf("<", c));) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function $s(a) {
        if (null == a) return " null ";
        if (Os(a, Hs)) return a.ra();
        if (a instanceof Ad || a instanceof Ad) return zd(a).toString();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(at, bt) + "'"
        }
    }

    function V(a) {
        Os(a, Ks) ? a = Us(a.ra()) : null == a ? a = "" : a instanceof Ud ? a = Us(Td(a)) : a instanceof Ud ? a = Us(Td(a)) : a instanceof fe ? a = Us(ee(a)) : a instanceof fe ? a = Us(ee(a)) : (a = String(a), a = ct.test(a) ? a : "zSoyz");
        return a
    }
    const dt = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function Ts(a) {
        return dt[a]
    }
    const et = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function bt(a) {
        return et[a]
    }
    const ft = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function gt(a) {
        return ft[a]
    }
    const Ss = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Ys = /[\x00\x22\x27\x3c\x3e]/g,
        at = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        ht = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        ct = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        it =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function jt(a) {
        return String(a).replace(ht, gt)
    }
    const Ws = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Xs = /</g;
    /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var kt = class {
        constructor(a) {
            this.j = a
        }
        init() {
            var a = Rs('<style>.autoprose-input {width: 100%; padding: 0; border: none; margin: 0; height: auto; outline: none;}.autoprose-input-td {background: #fff; border-color: #bdc1c6; border-width: 1px 0 1px 1px; border-style: solid; border-radius: 24px 0 0 24px; -moz-border-radius: 24px 0 0 24px; -webkit-border-radius: 24px 0 0 24px; padding-left: 24px; width: 100%;}.autoprose-searchbox {width: 100%; padding: 0; border: none; margin: 0; height: auto; background: rgb(255, 255, 255); outline: none;}.autoprose-searchbox-clear-button {padding-right: 5px; visibility: hidden;}.autoprose-searchbox-clear-td {background: #fff; border-color: #bdc1c6; border-width: 1px 0 1px 0; border-style: solid;}.autoprose-search-button {border-color: #bdc1c6; background-color: #fff; background-image: none; font-size: 0; padding: 6px 27px; width: auto; vertical-align: middle; border: 1px solid #bdc1c6; border-radius: 0 24px 24px 0; -moz-border-radius: 0 24px 24px 0; -webkit-border-radius: 0 24px 24px 0; height: 100%;}.autoprose-searchbox-div {padding: 5px;}.autoprose-searchbox-table {height: 38px; margin-left: auto; margin-right: auto;}</style><div class="autoprose-searchbox-div"><table class="autoprose-searchbox-table" cellspacing="0" cellpadding="0"><tr><td class="autoprose-input-td"><input autocomplete="off" class="autoprose-input" dir="ltr" name="search" placeholder="Search" size="40" spellcheck="false" title="search" type="text"></td><td class="autoprose-searchbox-clear-td"><div class="autoprose-searchbox-clear-button" title="clear results"><svg width="14" height="14" viewBox="0 0 14 14" fill="none visibility: hidden;" mlns="http://www.w3.org/2000/svg" stlye="float: right;"><path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#80868b"/></svg></div></td><td><button class="autoprose-search-button"><svg width="13" height="13" viewBox="0 0 13 13"><title>search</title><path d="m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z" fill="#1a73e8"></path></svg></button></td></tr></table></div>');
            a = Ms(a);
            this.j.appendChild(Lf(document, a))
        }
    };

    function lt(a) {
        const b = dq(a.A.V),
            c = a.C.ra(a.D, () => a.remove());
        b.appendChild(c);
        a.B && (b.className = a.B);
        return {
            Oe: b,
            Ke: c
        }
    }
    class mt {
        constructor(a, b, c, d) {
            this.D = a;
            this.A = b;
            this.C = c;
            this.B = d || null;
            this.j = null;
            this.l = new Wj(null)
        }
        init() {
            const a = lt(this);
            this.j = a.Oe;
            lq(this.A, this.j);
            Q(this.l, a.Ke)
        }
        remove() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            Q(this.l, null)
        }
        F() {
            return this.l
        }
    };

    function nt(a) {
        const b = ot(a.l, E(a.j, bm, 1), D(a.j, Dl, 31) ? .I() ? .l());
        if (b) {
            D(a.j, Dl, 31) ? .l();
            var c = a.l.document.createElement("div");
            (new mt(a.l, b, new Fs(c))).init();
            (new kt(c, D(a.j, Dl, 31) ? .F())).init()
        }
    }
    var pt = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    };

    function ot(a, b, c) {
        b = b.filter(d => {
            a: {
                var e = x(D(d, ol, 4), 1);
                switch (c) {
                    case 1:
                        e = 4 === e || 2 === e;
                        break a;
                    case 2:
                        e = 5 === e || 3 === e;
                        break a;
                    default:
                        e = !1
                }
            }
            d = 1 === x(d, 8);
            return e && d
        });
        b = Vp(b, a);
        a = Aq(b, a);
        a.sort(qt);
        b = [1, 3].includes(c) ? 0 : a.length - 1;
        return a[b] || null
    }

    function qt(a, b) {
        return a.X.j - b.X.j
    };
    var rt = class {
        constructor(a) {
            this.j = a
        }
        ra(a) {
            const b = a.document.createElement("div");
            M(b, Cs(a));
            M(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            M(c, Cs(a));
            M(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };
    var st = (a, b) => (b = D(b, Wl, 6)) ? gs(b.l(), a).map(c => xq(c)) : [];

    function tt(a, b, c) {
        a.Aa.contentWindow.google.search.cse.element.getElement("auto-rs-prose").execute(b, void 0, {
            rsToken: c,
            afsExperimentId: a.A
        })
    }
    var ut = class {
        constructor(a, b, c, d, e, f) {
            this.Aa = a;
            this.l = "9d449ff4a772956c6";
            this.j = b;
            this.host = c;
            this.language = d;
            this.B = e;
            this.A = f
        }
        init() {
            this.Aa.setAttribute("id", "prose-iframe");
            this.Aa.setAttribute("width", "100%");
            this.Aa.setAttribute("height", "100%");
            var a = this.Aa,
                b = Vd({
                    "box-sizing": "border-box",
                    border: "unset"
                });
            a.style.cssText = Td(b);
            a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var c = Qd(a) || Rd;
            a = this.j;
            b = this.host;
            var d = this.language,
                e = this.B.replace("${website}",
                    this.host.startsWith("www.") ? this.host.slice(4) : this.host),
                f = Rs;
            Os(c, Is) || Os(c, Js) ? c = jt(c) : c instanceof Md ? c = jt(Nd(c)) : c instanceof Md ? c = jt(Nd(c)) : c instanceof Cd ? c = jt(Fd(c).toString()) : c instanceof Cd ? c = jt(Fd(c).toString()) : (c = String(c), c = it.test(c) ? c.replace(ht, gt) : "about:invalid#zSoyz");
            a = f('<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; height: 16px; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}</style><img class="cse-favicon" src="' +
                Vs(c) + '" alt="' + Vs(b) + ' icon"><p class="cse-header"><strong>' + Qs(e) + '</strong></p><div class="gcse-search" data-gname="' + Vs("auto-rs-prose") + '" data-adclient="' + Vs(a) + '" data-adchannel="AutoRsVariant" data-as_sitesearch="' + Vs(b) + '" data-gl="' + Vs(d) + '" data-personalizedAds="false"></div>');
            a = Ms(a);
            b = {
                style: Vd({
                    margin: 0
                })
            };
            d = {
                src: Id(ld("https://cse.google.com/cse.js?cx=%{cxId}&language=%{lang}"), {
                    cxId: this.l,
                    lang: this.language
                })
            };
            e = {};
            f = {};
            for (g in d) Object.prototype.hasOwnProperty.call(d, g) && (f[g] =
                d[g]);
            for (const h in e) Object.prototype.hasOwnProperty.call(e, h) && (f[h] = e[h]);
            var g = oe("script", f);
            g = le("body", b, [a, g]);
            this.Aa.srcdoc = he(g)
        }
    };

    function vt(a, b) {
        return new wt(a, b)
    }

    function xt(a) {
        const b = yt(a);
        ib(a.j.maxZIndexListeners, c => c(b))
    }

    function yt(a) {
        a = fg(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class zt {
        constructor(a) {
            this.j = nj(a).floatingAdsStacking
        }
        addListener(a) {
            this.j.maxZIndexListeners.push(a);
            a(yt(this))
        }
    }

    function At(a) {
        if (null == a.j) {
            var b = a.l,
                c = a.A;
            const d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            xt(b);
            a.j = d
        }
    }

    function Bt(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            xt(b);
            a.j = null
        }
    }
    class wt {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.j = null
        }
    };

    function Ct(a) {
        L(a.l, "click", () => Dt(a));
        L(a.G, "click", () => void Dt(a));
        const b = a.width / a.win.innerWidth;
        L(a.win, "resize", () => {
            a.width = Math.floor(b * a.win.innerWidth);
            a.j.style.width = `${a.width}px`;
            a.j.style.height = `${a.win.innerHeight}px`;
            a.l.style.width = `${a.win.innerWidth}px`;
            a.l.style.height = `${a.win.innerHeight}px`;
            a.C && (a.B.style.transform = `translateX(${a.width}px)`)
        })
    }

    function Dt(a) {
        a.C = !0;
        a.j.scrollTop = 0;
        a.B.style.transitionDuration = ".5s";
        a.B.style.transform = `translateX(${a.width}px)`;
        a.l.style.opacity = "0";
        a.A.style.transitionDelay = ".5s";
        wb(a.A.offsetWidth);
        a.A.style.visibility = "hidden";
        setTimeout(() => {
            a.win.document.documentElement.style.overflow = ""
        }, 500);
        for (const b of a.F) try {
            b()
        } catch (c) {
            console.error(c)
        }
    }
    var Et = class {
        constructor(a, b) {
            this.win = a;
            this.width = b;
            this.F = [];
            this.C = !0;
            b = new Cf(a.document);
            this.l = b.ha("DIV", {
                "class": "adpub-drawer-modal-background"
            });
            var c = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
            c.setAttribute("viewBox", "0 0 24 24");
            var d = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
            d.setAttribute("fill", "#5f6368");
            d.setAttribute("d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z");
            c.appendChild(d);
            this.G = b.ha("DIV", {
                "class": "adpub-drawer-close-button"
            }, c);
            this.j = b.ha("DIV", {
                "class": "adpub-drawer-contents"
            });
            this.B = b.ha("DIV", {
                "class": "adpub-drawer"
            }, this.G, this.j);
            this.A = b.ha("DIV", {
                "class": "adpub-drawer-container"
            }, this.l, this.B);
            this.D = b.ha("DIV", {
                "class": "adpub-drawer-root"
            });
            c = this.D.attachShadow({
                mode: "open"
            });
            d = c.appendChild;
            var e = this.win.innerHeight - 5;
            var f = this.width,
                g = a.innerWidth;
            e = Rs("<style>.adpub-drawer-container {height: 100%; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " +
                V(100002) + ";}.adpub-drawer-modal-background {background-color: black; height: " + V(e + 5) + "px; opacity: 0; position: absolute; transition: opacity .5s ease-in-out; width: " + V(g) + "px;}.adpub-drawer {position: absolute; transform: translateX(" + V(f) + "px); transition: transform .5s ease-in-out; height: 100%; overflow: auto; right: 0; border-radius: 20px 0 0 20px;}.adpub-drawer-close-button {color: #5f6368; height: 24px; width: 24px; top: 20px; right: 20px; position: fixed; cursor: pointer;}.adpub-drawer-contents {background: white; height: " +
                V(e) + "px; overflow-y: auto; padding-top: " + V(5) + "px; width: " + V(f) + "px;}</style>");
            d.call(c, Tf(b, Ms(e)));
            c.appendChild(this.A);
            M(this.D, Cs(a))
        }
        init() {
            this.win.document.body.appendChild(this.D);
            Ct(this)
        }
        W(a) {
            for (; this.j.firstChild;) this.j.removeChild(this.j.firstChild);
            this.j.appendChild(a)
        }
        show() {
            this.C = !1;
            this.win.document.documentElement.style.overflow = "hidden";
            this.A.style.transitionDelay = "0s";
            this.A.style.visibility = "visible";
            this.l.style.opacity = ".5";
            this.B.style.transform = "translateX(0)"
        }
        ea(a) {
            this.F.push(a)
        }
    };

    function Ft(a) {
        L(a.J, "click", () => Gt(a));
        L(a.B, "mousedown", () => {
            const d = f => {
                    Ht(a, f.movementY)
                },
                e = () => {
                    It(a);
                    Qe(a.B, "mousemove", d);
                    Qe(a.B, "mouseup", e);
                    Qe(a.B, "mouseleave", e)
                };
            L(a.B, "mousemove", d);
            L(a.B, "mouseup", e);
            L(a.B, "mouseleave", e)
        });
        L(a.j, "touchstart", d => {
            let e = d.touches[0];
            const f = h => {
                    const l = h.touches[0];
                    0 === Jt(a) ? a.l.classList.add("scrollable") : a.l.classList.remove("scrollable");
                    if (e) {
                        var k = 0 === Jt(a) && a.l.scrollTop;
                        const m = l.target === a.B || l.target.parentElement === a.B;
                        if (!k || m) k = l.screenY - e.screenY,
                            Ht(a, k), k = 0 < k && 0 === a.l.scrollTop, k = a.I && !k, h.cancelable && !k && h.preventDefault()
                    }
                    e = l
                },
                g = () => {
                    It(a);
                    Qe(a.j, "touchmove", f);
                    Qe(a.j, "touchend", g);
                    Qe(a.j, "touchcancel", g)
                };
            L(a.j, "touchmove", f, {
                passive: !1
            });
            L(a.j, "touchend", g);
            L(a.j, "touchcancel", g)
        });
        L(a.C, "touchstart", () => {});
        const b = a.A / a.win.innerHeight,
            c = a.F / a.A;
        L(a.win, "resize", () => {
            a.A = Math.floor(b * a.win.innerHeight);
            a.F = Math.floor(c * a.A);
            a.D = a.win.innerHeight - (a.A + 30 - 20);
            const d = a.I ? 0 : a.A - a.F;
            a.l.style.height = `${a.A}px`;
            a.j.style.transform = a.K ? `translateY(${a.A+ 
a.D}px)` : `translateY(${d+a.D}px)`
        })
    }

    function Kt(a, b) {
        var c = ["https://cse.google.com"];
        const d = ["touchstart", "touchmove", "touchend", "touchcancel"],
            e = (l, k, m) => {
                try {
                    const n = m.map(q => new Touch(q));
                    l.dispatchEvent(new TouchEvent(k, {
                        bubbles: !0,
                        cancelable: !0,
                        touches: n
                    }))
                } catch {
                    k = new UIEvent(k, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: 1,
                        view: a.win
                    });
                    for (const n of m) l.dispatchEvent(Object.assign(k, {
                        touches: [n]
                    }))
                }
            },
            f = l => {
                l = l.contentDocument;
                for (const k of d) L(l, k, m => {
                    m = [...m.touches].map(n => ({
                        clientX: n.clientX,
                        clientY: n.clientY,
                        force: n.force,
                        identifier: n.identifier,
                        pageX: n.pageX,
                        pageY: n.pageY,
                        radiusX: n.radiusX,
                        radiusY: n.radiusY,
                        rotationAngle: n.rotationAngle,
                        screenX: n.screenX,
                        screenY: n.screenY,
                        target: a.l
                    }));
                    e(a.j, k, m)
                })
            },
            g = l => {
                if ((void 0 === c || c.includes(l.origin)) && d.includes(l.data ? .type) && Array.isArray(l.data ? .touches)) {
                    var k = l.data.type;
                    l = l.data.touches.map(m => ({ ...m,
                        target: a.l
                    }));
                    e(a.j, k, l)
                }
            },
            h = l => {
                l.contentWindow ? L(l.contentWindow, "message", g) : console.error("Loaded iframe missing content window.")
            };
        "complete" === b.contentDocument ? .readyState && (h(b), f(b));
        L(b, "load", () => {
            h(b);
            f(b)
        })
    }

    function Lt(a, b, c) {
        a.T.set(b, a.win.document.documentElement.style.getPropertyValue(b) ? ? "");
        a.win.document.documentElement.style.setProperty(b, c)
    }

    function Mt(a, b) {
        const c = a.T.get(b) ? ? "";
        a.win.document.documentElement.style.setProperty(b, c)
    }

    function Gt(a) {
        a.K = !0;
        a.I = !1;
        Mt(a, "position");
        Mt(a, "width");
        Mt(a, "transform");
        Mt(a, "overflow");
        Mt(a, "touch-action");
        null != a.G && (a.win.document.documentElement.scrollTop = a.G, a.win.document.body.scrollTop = a.G);
        Mt(a, "scroll-behavior");
        a.C.style.transform = "";
        a.l.scrollTop = 0;
        a.l.classList.remove("scrollable");
        a.j.style.transitionDuration = ".5s";
        a.j.style.transform = `translateY(${a.A+a.D}px)`;
        a.J.style.opacity = "0";
        a.C.style.transitionDelay = ".5s";
        wb(a.C.offsetHeight);
        a.C.style.visibility = "hidden";
        for (const b of a.O) try {
            b()
        } catch (c) {
            console.error(c)
        }
    }

    function Ht(a, b) {
        a.j.style.transitionDuration = "0s";
        b = Math.max(Jt(a) + b, 0) + a.D;
        a.j.style.transform = `translateY(${b}px)`;
        wb(a.j.offsetHeight);
        a.j.style.transitionDuration = ".5s"
    }

    function It(a) {
        const b = Jt(a);
        if (a.I) 50 < b ? Gt(a) : 0 !== b && Nt(a, 0);
        else {
            const c = a.A - a.F;
            b < c - 50 ? Nt(a, 0) : b > c + 50 ? Gt(a) : b !== c && Nt(a, a.A - a.F)
        }
    }

    function Jt(a) {
        return Number(((new DOMMatrix(a.j.style.transform ? ? null)).f - a.D).toFixed(1))
    }

    function Nt(a, b) {
        a.K = !1;
        0 === b && (a.I = !0, a.l.classList.add("scrollable"));
        a.C.style.transitionDelay = "0s";
        a.C.style.visibility = "visible";
        a.J.style.opacity = ".5";
        a.j.style.transform = `translateY(${b+a.D}px)`
    }
    var Ot = class {
        constructor(a, b, c) {
            this.win = a;
            this.F = b;
            this.A = c;
            this.O = [];
            this.T = new Map;
            this.I = !1;
            this.K = !0;
            this.G = null;
            b = new Cf(a.document);
            this.J = b.ha("DIV", {
                "class": "cse-modal-background",
                tabindex: 1
            });
            var d = b.ha("DIV", {
                "class": "cse-drawer-handle-icon"
            });
            this.B = b.ha("DIV", {
                "class": "cse-drawer-handle"
            }, d);
            this.l = b.ha("DIV", {
                "class": "cse-drawer-contents"
            });
            this.j = b.ha("DIV", {
                "class": "cse-drawer"
            }, this.B, this.l);
            this.C = b.ha("DIV", {
                "class": "cse-drawer-container"
            }, this.J, this.j);
            this.N = b.ha("DIV", {
                "class": "adpub-drawer-root"
            });
            this.D = a.innerHeight - (c + 30 - 20);
            c = this.N.attachShadow({
                mode: "open"
            });
            d = c.appendChild;
            var e = this.A;
            var f = this.D;
            e = Rs("<style>.cse-drawer-container {height: 100%; left: 0; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " + V(100002) + ";}.cse-modal-background {background-color: black; height: 100vh; opacity: 0; overflow: hidden; position: absolute; transition: opacity .5s ease-in-out; width: 100%;}.cse-drawer {background: white; position: absolute; transform: translateY(" +
                V(e + f) + "px); transition: transform .5s ease-in-out; width: 100%;}.cse-drawer-handle {align-items: flex-end; border-radius: " + V(20) + "px " + V(20) + "px 0 0; background: white; display: flex; height: " + V(30) + "px; justify-content: center; margin-top: " + V(-20) + "px;}.cse-drawer-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.cse-drawer-contents {background: white; height: " + V(e) + "px; scrollbar-width: none; overflow: hidden;}.cse-drawer-scroller::-webkit-scrollbar {display: none;}.scrollable {overflow: auto;}</style>");
            d.call(c, Tf(b, Ms(e)));
            c.appendChild(this.C);
            M(this.N, Cs(a))
        }
        init() {
            this.win.document.body.appendChild(this.N);
            Ft(this)
        }
        W(a) {
            for (; this.l.firstChild;) this.l.removeChild(this.l.firstChild);
            this.l.appendChild(a)
        }
        show() {
            this.G = this.win.document.documentElement.scrollTop + this.win.document.body.scrollTop;
            Lt(this, "transform", `translateY(${-this.G}px)`);
            Lt(this, "position", "fixed");
            Lt(this, "width", "100%");
            Lt(this, "overflow", "hidden");
            Lt(this, "touch-action", "none");
            Lt(this, "scroll-behavior", "auto");
            this.C.style.transform =
                `translateY(${this.G}px)`;
            Nt(this, this.A - this.F)
        }
        ea(a) {
            this.O.push(a)
        }
    };

    function Pt(a, b) {
        const c = a.document.createElement("div");
        M(c, Cs(a));
        a.document.body.appendChild(c);
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            Xd: c,
            shadowRoot: a
        }
    }

    function Qt(a, b) {
        b = b.getElementById(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    }

    function Rt(a, b) {
        const c = new Wj(b.P);
        ek(b, !0, () => void Q(c, !0));
        ek(b, !1, () => {
            a.setTimeout(() => {
                b.P || Q(c, !1)
            }, 700)
        });
        return Yj(c)
    };
    var St = void 0;

    function Tt() {
        void 0 === St && (St = 20);
        return St
    };

    function Ut(a, b, c) {
        const d = vt(new zt(a), c.zIndex - 1),
            e = Pt(a, c.yc),
            f = e.shadowRoot;
        var g = f.appendChild,
            h = new Cf(a.document),
            l = c.ud,
            k = c.qd || !1,
            m = c.jd;
        c = Rs("<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + V(c.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            V(l) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: " + V(Tt()) + "px; transition: transform " + V(.5) + "s ease-in-out;" + (k ? "left: 0; border-top-right-radius: " + V(Tt()) + "px; border-bottom-right-radius: " + V(Tt()) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + V(Tt()) + "px; border-bottom-left-radius: " + V(Tt()) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (k ?
                "text-align: left;" : "text-align: right;") + 'height: 24px;}#hd-close-button {border: none; background: none; cursor: pointer;}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}</style><div id="hd-drawer-container"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-close-button" aria-label="' + Vs(m) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>');
        g.call(f, Tf(h, Ms(c)));
        g = Qt("hd-content-container", f);
        g.appendChild(b);
        wb(a.document.body.offsetHeight);
        b = {
            jb: Qt("hd-drawer-container", f),
            Kc: Qt("hd-modal-background", f),
            vc: g,
            He: Qt("hd-close-button", f),
            Oc: e
        };
        a = new Vt(a, b, Lk(a), d);
        a.init();
        return a
    }

    function Wt(a) {
        if (a.F) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function Xt(a) {
        const {
            Kc: b,
            He: c
        } = Wt(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }
    var Vt = class extends Qj {
        constructor(a, b, c, d) {
            super();
            this.B = b;
            this.j = new Wj(!1);
            this.A = Rt(a, this.j);
            ek(this.A, !0, () => {
                Nk(c);
                At(d)
            });
            ek(this.A, !1, () => {
                Sj(c.j);
                Sj(c.A);
                Ok(c);
                Bt(d)
            })
        }
        show({
            Ac: a = !1
        } = {}) {
            Wt(this).jb.classList.add("hd-revealed");
            Q(this.j, !0);
            a && ek(this.A, !1, () => {
                this.wa()
            })
        }
        collapse() {
            Wt(this).jb.classList.remove("hd-revealed");
            Q(this.j, !1)
        }
        init() {
            Xt(this)
        }
        l() {
            const a = this.B.Oc.Xd,
                b = a.parentNode;
            b && b.removeChild(a);
            super.l()
        }
    };
    var Yt = void 0;

    function Zt() {
        void 0 === Yt && (Yt = 20);
        return Yt
    }
    var $t = void 0;

    function au() {
        void 0 === $t && ($t = 30);
        return $t
    }

    function bu(a) {
        return Rs('<div class="ved-handle" id="' + Vs(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function cu(a) {
        return wk(a.j).map(b => b ? du(a, b) : 0)
    }

    function du(a, b) {
        switch (a.direction) {
            case 0:
                return eu(-b.ee);
            case 1:
                return eu(-b.de);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function fu(a) {
        return yk(a.j).map(b => du(a, b))
    }
    var gu = class {
        constructor(a) {
            this.j = a;
            this.direction = 0
        }
    };

    function eu(a) {
        return 0 === a ? 0 : a
    };

    function W(a) {
        if (a.F) throw Error("Accessing domItems after disposal");
        return a.C
    }

    function hu(a) {
        W(a).jb.classList.add("ved-revealed");
        Q(a.A, !0)
    }

    function iu(a) {
        return Rt(a.win, a.A)
    }

    function ju(a, b) {
        const c = new Wj(b());
        (new ik(a.G)).ba(() => void Q(c, b()));
        return Yj(c)
    }

    function ku(a) {
        const {
            ga: b,
            Zb: c
        } = W(a);
        return ju(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function lu(a) {
        const {
            ga: b,
            Zb: c
        } = W(a);
        return ju(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function mu(a) {
        const {
            ga: b
        } = W(a);
        return ju(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function nu(a) {
        return Zj(ku(a), mu(a))
    }

    function ou(a) {
        const {
            ga: b,
            Wa: c
        } = W(a);
        return ju(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function pu(a) {
        ck(ku(a), !0, () => {
            const {
                sd: b,
                wb: c
            } = W(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        ck(ku(a), !1, () => {
            const {
                sd: b,
                wb: c
            } = W(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function qu(a) {
        const b = Ak(a.win, W(a).vc);
        bk(Dk(b), () => void ru(a));
        Rj(a, Da(Pj, b))
    }

    function su(a) {
        ck(tu(a), !0, () => {
            W(a).Kd.classList.remove("ved-hidden")
        });
        ck(tu(a), !1, () => {
            W(a).Kd.classList.add("ved-hidden")
        })
    }

    function uu(a) {
        const b = () => void gk(a.D),
            {
                Kc: c,
                Wa: d,
                Ue: e
            } = W(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        ek(vu(a), !0, b)
    }

    function wu(a) {
        dk(a.j, () => void gk(a.G))
    }

    function ru(a) {
        if (!a.j.P) {
            var {
                nd: b,
                vc: c
            } = W(a), d = c.getBoundingClientRect().height;
            d = Math.max(xu(a), d);
            Q(a.j, !0);
            var e = yu(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    Q(a.j, !1)
                })
            })
        }
    }

    function tu(a) {
        const {
            ga: b,
            Wa: c
        } = W(a);
        return ju(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function vu(a) {
        return Xj(a.B.map(cl), zu(a))
    }

    function zu(a) {
        return ju(a, () => 0 === W(a).ga.scrollTop)
    }

    function Au(a, b) {
        W(a).ga.scrollTop = b;
        wu(a)
    }

    function Bu(a, b) {
        ({
            wb: a
        } = W(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function Cu(a, b) {
        Q(a.B, !0);
        const {
            wb: c,
            ga: d
        } = W(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void Du(a, b)
    }

    function Du(a, b) {
        const {
            wb: c,
            ga: d
        } = W(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        Au(a, b);
        Q(a.B, !1)
    }

    function yu(a) {
        const b = W(a).ga.scrollTop;
        Cu(a, b);
        return () => void Du(a, b)
    }

    function xu(a) {
        const {
            ga: b,
            Zb: c,
            nd: d,
            Wa: e
        } = W(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var g = d.getBoundingClientRect();
        const h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var Eu = class extends Qj {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.C = b;
            this.J = c;
            this.D = new hk;
            this.G = new hk;
            this.A = new Wj(!1);
            this.B = new Wj(!1);
            this.j = new Wj(!1)
        }
        init() {
            Au(this, Bu(this, W(this).Wa));
            pu(this);
            qu(this);
            su(this);
            uu(this);
            W(this).ga.addEventListener("scroll", () => void wu(this))
        }
        l() {
            const a = this.C.Oc.Xd,
                b = a.parentNode;
            b && b.removeChild(a);
            super.l()
        }
    };

    function Fu(a, b, c) {
        const d = vt(new zt(a), c.zIndex - 1);
        var e = Pt(a, c.yc),
            f = e.shadowRoot,
            g = f.appendChild,
            h = new Cf(a.document),
            l = 100 * c.Ld,
            k = 100 * c.vd;
        c = Rs("<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + V(c.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            V(k) + "%; transition: transform " + V(.5) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round " + V(Zt()) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            V(l / k * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + V((k - l) / k * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            V(l / k * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + V(l / k * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + V(au() + 50) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            V(Zt()) + "px " + V(Zt()) + "px 0 0; background: white; display: flex; height: " + V(au()) + 'px; justify-content: center; cursor: grab;}.ved-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            bu("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + bu("ved-fixed-handle") + "</div></div></div>");
        g.call(f, Tf(h, Ms(c)));
        g = Qt("ved-content-container", f);
        g.appendChild(b);
        wb(a.document.body.offsetHeight);
        b = {
            jb: Qt("ved-drawer-container", f),
            Kc: Qt("ved-modal-background", f),
            be: Qt("ved-ui-revealer", f),
            ga: Qt("ved-scroller",
                f),
            wb: Qt("ved-scrolled-stack", f),
            Ue: Qt("ved-fully-closed-anchor", f),
            Wa: Qt("ved-partially-extended-anchor", f),
            nd: Qt("ved-content-sizer", f),
            vc: g,
            Hj: Qt("ved-moving-handle", f),
            Zb: Qt("ved-moving-handle-holder", f),
            Te: Qt("ved-fixed-handle", f),
            sd: Qt("ved-fixed-handle-holder", f),
            Kd: Qt("ved-over-scroll-block", f),
            Oc: e
        };
        e = b.Te;
        e = new zk(new qk(a, e), new nk(e));
        f = e.j;
        f.C.addEventListener("mousedown", f.G);
        f.B.addEventListener("mouseup", f.D);
        f.B.addEventListener("mousemove", f.F, {
            passive: !1
        });
        f = e.l;
        f.l.addEventListener("touchstart",
            f.F);
        f.l.addEventListener("touchend", f.C);
        f.l.addEventListener("touchmove", f.D, {
            passive: !1
        });
        b = new Eu(a, b, new gu(e));
        b.init();
        a = new Gu(a, b, Lk(a), d);
        Rj(a, Da(Pj, b));
        a.init();
        return a
    }

    function Hu(a) {
        ck(Xj(nu(a.j), ou(a.j)), !0, dl(() => {
            W(a.j).Wa.classList.remove("ved-snap-point-top")
        }));
        ck(lu(a.j), !0, () => {
            W(a.j).ga.classList.add("ved-no-snap")
        });
        ck(lu(a.j), !1, () => {
            W(a.j).ga.classList.remove("ved-no-snap")
        });
        ek(lu(a.j), !1, () => {
            var b = a.j;
            var c = W(b).Zb;
            c = Cu(b, Bu(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function Iu(a) {
        const b = a.j.J;
        cu(b).ba(c => {
            c = -c;
            if (0 < c) {
                const {
                    be: d
                } = W(a.j);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                be: c
            } = W(a.j)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        fu(b).ba(c => {
            30 < -c && a.collapse()
        })
    }
    var Gu = class extends Qj {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.j = b;
            ek(iu(b), !0, () => {
                Nk(c);
                At(d)
            });
            ek(iu(b), !1, () => {
                Sj(c.j);
                Sj(c.A);
                Ok(c);
                Bt(d)
            })
        }
        show({
            Ac: a = !1
        } = {}) {
            hu(this.j);
            a && ek(iu(this.j), !1, () => {
                this.wa()
            })
        }
        collapse() {
            var a = this.j;
            W(a).jb.classList.remove("ved-revealed");
            Q(a.A, !1)
        }
        isVisible() {
            return iu(this.j)
        }
        init() {
            (new ik(this.j.D)).ba(() => {
                this.collapse()
            });
            Hu(this);
            Iu(this);
            wb(this.win.document.body.offsetHeight)
        }
    };

    function Ju(a) {
        a.B.init();
        a.B.W(a.l);
        a.B instanceof Ot && Kt(a.B, a.l);
        a.B.ea(() => void Bt(a.K));
        a.G.init()
    }

    function Ku(a) {
        let b;
        a.A.id = "cse-overlay-div";
        M(a.A, {
            "background-color": "white",
            border: "none",
            "border-radius": "16px 16px 16px 16px",
            "box-shadow": "0 3px 10px rgb(34 25 25 / 40%)",
            display: "none",
            "flex-direction": "column",
            height: "90%",
            left: "2.5%",
            margin: "auto",
            overflow: "auto",
            position: "fixed",
            padding: "1%",
            top: "5%",
            transition: "all 0.25s linear",
            width: "95%",
            "z-index": 100002
        });
        b = a.C.createElement("DIV");
        b.id = "cse-overlay-close-button";
        M(b, {
            "background-image": "url(//www.google.com/images/nav_logo114.png)",
            "background-position": "-140px -230px",
            "background-repeat": "no-repeat",
            cursor: "pointer",
            display: "block",
            "float": "right",
            height: "12px",
            opacity: 1,
            position: "absolute",
            right: "15px",
            top: "15px",
            width: "12px"
        });
        a.F.classList.add("gsc-modal-background-image");
        a.F.setAttribute("tabindex", 0);
        a.j.document.body.appendChild(a.A);
        a.j.document.body.appendChild(a.F);
        const c = () => {
            "flex" === a.A.style.display && (a.A.style.display = "none");
            a.F.classList.remove("gsc-modal-background-image-visible");
            Bt(a.K)
        };
        b.onclick = c;
        a.F.onclick =
            c;
        a.A.appendChild(b);
        a.A.appendChild(a.l);
        a.G.init()
    }

    function Lu(a) {
        (function(c, d) {
            c[d] = c[d] || function() {
                (c[d].q = c[d].q || []).push(arguments)
            };
            c[d].t = 1 * new Date
        })(a.j, "_googCsa");
        const b = a.T.map(c => ({
            container: c,
            relatedSearches: 5
        }));
        a.j._googCsa("relatedsearch", {
            pubId: a.O,
            styleId: "5134551505",
            hl: a.J,
            fexp: a.N,
            channel: "AutoRsVariant",
            resultsPageBaseUrl: "http://google.com",
            resultsPageQueryParam: "q",
            relatedSearchTargeting: "content",
            relatedSearchResultClickedCallback: a.ea.bind(a),
            relatedSearchUseResultCallback: !0
        }, b)
    }

    function Mu(a, b) {
        return a.D ? 2 === vg() ? Fu(a.j, b, {
            Ld: .95,
            vd: .95,
            zIndex: 100001
        }) : Ut(a.j, b, {
            ud: `${Math.round(.8*a.j.innerWidth)}px`,
            jd: "",
            qd: !1,
            zIndex: 100001
        }) : null
    }
    var Nu = class {
        constructor(a, b, c, d, e, f, g) {
            this.j = a;
            this.T = b;
            this.J = d ? .l() || "en";
            this.W = d ? .F() || "Search results from ${website}";
            this.I = e;
            this.D = f;
            this.N = g;
            this.O = c.replace("ca", "partner");
            this.K = vt(new zt(a), 1E5);
            this.C = new Cf(a.document);
            f ? b = null : this.I ? 2 === vg() ? (b = Math.round(.95 * this.j.innerHeight) - 30, b = new Ot(this.j, b, b)) : b = new Et(this.j, Math.round(.8 * this.j.innerWidth)) : b = null;
            this.B = b;
            this.A = this.C.createElement("DIV");
            this.F = this.C.createElement("DIV");
            this.l = this.C.createElement("IFRAME");
            this.G =
                new ut(this.l, this.O, a.location.host, this.J, this.W, this.N)
        }
        init() {
            if (0 !== this.T.length && (this.I || !this.j.document.querySelector('script[src*="cse.google.com/cse"]'))) {
                if (this.D) this.G.init();
                else if (this.I) Ju(this);
                else {
                    Ku(this);
                    var a = this.C.createElement("SCRIPT"),
                        b = N `https://cse.google.com/cse.js?cx=9d449ff4a772956c6`;
                    b = Yg(b, new Map([
                        ["language", this.J]
                    ]));
                    De(a, b);
                    this.j.document.head.appendChild(a)
                }
                a = this.C.createElement("SCRIPT");
                De(a, N `https://www.google.com/adsense/search/async-ads.js`);
                this.j.document.head.appendChild(a);
                Lu(this)
            }
        }
        ea(a, b) {
            this.D || At(this.K);
            if (this.I || this.D) {
                const c = () => {
                    const d = new ResizeObserver(f => {
                            this.l.height = 0;
                            this.l.height = f[0].target.scrollHeight
                        }),
                        e = () => {
                            const f = this.l.contentDocument ? .documentElement;
                            f ? d.observe(f) : (console.warn("iframe body missing"), setTimeout(e, 1E3))
                        };
                    e();
                    this.D ? (tt(this.G, a, b), this.B.show({
                        Ac: !0
                    })) : this.B.show()
                };
                this.D ? (this.B = Mu(this, this.l), L(this.l, "load", c)) : (tt(this.G, a, b), c())
            } else this.F.classList.add("gsc-modal-background-image-visible"), this.A.style.display =
                "flex", tt(this.G, a, b)
        }
    };

    function Ou(a) {
        var b = st(a.l, a.j);
        b = Aq(b, a.l).sort(Pu);
        var c = 0 == b.length ? [] : [b[Math.floor(b.length / 2)]];
        var d = a.l;
        b = [];
        for (var e = 0; e < c.length; e++) {
            const f = c[e],
                g = "autors-container-" + e,
                h = d.document.createElement("div");
            h.setAttribute("id", g);
            (new mt(d, f, new rt(h))).init();
            b.push(g)
        }
        c = D(a.j, El, 28) ? .F() ? .l() || D(a.j, El, 28) ? .l() || 0;
        d = D(a.j, El, 28) ? .J() || !1;
        e = D(a.j, El, 28) ? .K() || !1;
        (new Nu(a.l, b, a.A, D(a.j, El, 28) ? .I(), d, e, c)).init()
    }
    var Qu = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.A = c
        }
    };

    function Pu(a, b) {
        return a.X.j - b.X.j
    };
    var Ru = (a, b) => {
        const c = [];
        D(a, dm, 18) && c.push(2);
        b.da && c.push(0);
        D(a, El, 28) && 1 == z(D(a, El, 28), 1, 0) && c.push(1);
        D(a, Dl, 31) && 1 == z(D(a, Dl, 31), 1, 0) && c.push(5);
        D(a, ul, 27) && 1 == z(D(a, ul, 27), 1, 0) && c.push(3);
        D(a, fm, 29) && c.push(4);
        D(a, qm, 30) && c.push(6);
        return c
    };

    function Su(a, b) {
        const c = Bf(a).createElement("IMG");
        Tu(a, c);
        c.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        M(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function Uu(a, b) {
        const c = b.document.createElement("button");
        Tu(b, c);
        M(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.A();
            d.stopPropagation()
        });
        return c
    }

    function Vu(a, b, c) {
        const d = Bf(b).createElement("IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.B);
        Tu(b, d);
        M(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function Wu(a) {
        const b = a.document.createElement("ins");
        Tu(a, b);
        M(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class Xu {
        constructor(a, b, c) {
            this.l = a;
            this.B = b;
            this.A = c;
            this.j = new Wj(!1)
        }
        ra(a, b, c, d) {
            const e = Su(a, d),
                f = Su(a),
                g = Uu(this, a),
                h = Vu(this, a, c);
            a = Wu(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            this.j.ba(l => {
                M(e, {
                    display: l ? "none" : "inline"
                });
                M(f, {
                    display: l ? "inline" : "none"
                });
                l ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        yd() {
            return 40
        }
        Id() {
            Q(this.j, !1);
            return 0
        }
        Jd() {
            Q(this.j, !0)
        }
    }

    function Tu(a, b) {
        M(b, Cs(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function Yu(a, b) {
        const c = b.document.createElement("button");
        Zu(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        M(c, b);
        c.addEventListener("click", d => {
            a.D();
            d.stopPropagation()
        });
        return c
    }

    function $u(a, b, c, d) {
        const e = b.document.createElement("div");
        M(e, Cs(b));
        M(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        M(f, Cs(b));
        M(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (M(e, {
                    "flex-direction": "row"
                }), a.j && M(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), M(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                M(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (M(e, {
                border: "0",
                "flex-direction": "column"
            }), M(f, {
                "margin-left": "0",
                "text-align": "center"
            }), M(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && M(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function Zu(a, b, c) {
        M(c, Cs(b));
        M(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.F,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.G,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class av {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.C = a;
            this.D = b;
            this.G = c;
            this.l = d;
            this.F = e;
            this.B = f;
            this.j = g;
            this.A = h
        }
        ra(a) {
            const b = a.document.createElement("div");
            Zu(this, a, b);
            M(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.B) {
                var c = Bf(a).createElement("IMG");
                c.src = this.B;
                Zu(this, a, c);
                M(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            Zu(this, a, c);
            M(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.C));
            b.appendChild(c);
            c = Yu(this, a);
            c.appendChild(b);
            return this.A ? $u(this, a, c, this.A) : c
        }
    };
    var bv = (a, b) => {
        b = b.filter(c => 5 == x(D(c, ol, 4), 1) && 1 == x(c, 8));
        b = Vp(b, a);
        a = Aq(b, a);
        a.sort((c, d) => d.X.j - c.X.j);
        return a[0] || null
    };
    var gv = a => {
            let b = 0;
            try {
                var c = a.L;
                b |= c != c.top ? 512 : 0;
                var d = a.L;
                var e = Math.min(d.screen.width || 0, d.screen.height || 0);
                b |= e ? 320 > e ? 8192 : 0 : 2048;
                var f = a.L;
                b |= f.navigator && cv(f.navigator.userAgent) ? 1048576 : 0;
                if (a.Xb) var g = b | (a.L.innerHeight >= a.Xb ? 0 : 1024);
                else {
                    var h = a.L;
                    g = b | (h.innerHeight >= h.innerWidth ? 0 : 8)
                }
                b = g;
                b |= rj(a.L, a.Jc);
                b |= sj(a.L)
            } catch (l) {
                b |= 32
            }
            switch (a.gd) {
                case 2:
                    dv(a.L, a.ta) && (b |= 16777216);
                    break;
                case 1:
                    ev(a.L, a.ta) && (b |= 16777216)
            }
            a.Ge && fv(a.L, a.ta) && (b |= 16777216);
            return b
        },
        cv = a => /Android 2/.test(a) ||
        /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a),
        dv = (a, b = null) => {
            const c = hv(a.innerWidth, 3, 0, Math.min(Math.round(a.innerWidth / 320 * 50), iv) + 15, 3);
            return jv(a, c, b)
        },
        ev = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), iv) + 15,
                f = hv(c, 3, d - e, d, 3);
            25 < e && f.push({
                x: c - 25,
                y: d - 25
            });
            return jv(a, f, b)
        },
        fv = (a, b = null) => null != kv(a, b),
        kv = (a, b = null) => {
            var c = a.innerWidth;
            const d = a.innerHeight,
                e = U(Kn);
            c =
                hv(c, 10, d - e, d, 10);
            return lv(a, c, b)
        },
        mv = (a, b) => {
            const c = a.innerWidth,
                d = a.innerHeight;
            let e = d;
            for (; e > b;) {
                var f = hv(c, 3, e - b, e, 3);
                f = lv(a, f);
                if (!f) return d - e;
                e = f.getBoundingClientRect().top - 1
            }
            return null
        },
        jv = (a, b, c = null) => null != lv(a, b, c);

    function lv(a, b, c = null) {
        for (const d of b)
            if (b = nv(a, d, c)) return b;
        return null
    }

    function nv(a, b, c = null) {
        const d = ov(a.document, b.x, b.y);
        return d ? pv(d, a, b, c) || qv(d, a, b, c) || null : null
    }
    var ov = (a, b, c) => {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b, c));
        return a.elementFromPoint(b, c)
    };

    function qv(a, b, c, d = null) {
        const e = b.document;
        for (a = a.offsetParent; a && a != e.body; a = a.offsetParent) {
            const f = pv(a, b, c, d);
            if (f) return f
        }
        return null
    }
    var hv = (a, b, c, d, e) => {
        const f = [];
        for (let k = 0; k < e; k++)
            for (let m = 0; m < b; m++) {
                var g = f,
                    h = b - 1,
                    l = e - 1;
                g.push.call(g, {
                    x: (0 == h ? 0 : m / h) * a,
                    y: c + (0 == l ? 0 : k / l) * (d - c)
                })
            }
        return f
    };

    function pv(a, b, c, d = null) {
        if ("fixed" !== hh(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= kh(a).width && 1 >= kh(a).height ? !0 : !1;
        d && Th(d, "ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id"),
            cls: a.getAttribute("class"),
            ign: e,
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    }
    const iv = 90 * 1.38;

    function rv(a) {
        if (a.G) {
            const b = yj(a.j);
            if (b > a.l + 100 || b < a.l - 100) sv(a), a.l = uj(a.j)
        }
        a.I && a.j.clearTimeout(a.I);
        a.I = a.j.setTimeout(() => tv(a), 200)
    }

    function tv(a) {
        var b = uj(a.j);
        a.l && a.l > b && (a.l = b);
        b = yj(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), uv(a))
    }

    function vv(a) {
        a.j.removeEventListener("scroll", a.K)
    }

    function sv(a) {
        a.G = !1;
        const b = a.C.Id();
        switch (b) {
            case 0:
                Q(a.B, a.D);
                break;
            case 1:
                a.A && (M(a.A, {
                    display: "none"
                }), Q(a.B, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function uv(a) {
        a.A || (a.A = wv(a));
        M(a.A, {
            display: "block"
        });
        a.G = !0;
        a.C.Jd();
        Q(a.B, a.D)
    }

    function wv(a) {
        var b = mv(a.j, a.C.yd() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.j.document.createElement("div");
        M(c, Cs(a.j));
        M(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.D = a.C.ra(a.j, () => a.remove(), () => {
            vv(a);
            sv(a)
        }, () => {
            vv(a);
            uv(a)
        });
        c.appendChild(a.D);
        a.J && (c.className = a.J);
        a.j.document.body.appendChild(c);
        return c
    }
    class xv {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.D = null;
            this.B = new Wj(null);
            this.J = c || null;
            this.A = null;
            this.G = !1;
            this.l = 0;
            this.I = null;
            this.K = () => rv(this)
        }
        init() {
            this.j.addEventListener("scroll", this.K);
            this.l = uj(this.j);
            tv(this)
        }
        remove() {
            this.A && this.A.parentNode && this.A.parentNode.removeChild(this.A);
            this.A = null;
            vv(this);
            Q(this.B, null)
        }
        F() {
            return this.B
        }
    };

    function yv(a) {
        Q(a.D, 0);
        null != a.A && (a.A.remove(), a.A = null);
        null != a.l && (a.l.remove(), a.l = null)
    }

    function zv(a) {
        a.l = new xv(a.C, a.J, a.G);
        a.l.init();
        fk(a.B, a.l.F());
        Q(a.D, 2)
    }
    class Av {
        constructor(a, b, c, d, e) {
            this.C = a;
            this.I = b;
            this.K = c;
            this.J = d;
            this.G = e;
            this.D = new Wj(0);
            this.B = new Wj(null);
            this.l = this.A = this.j = null
        }
        init() {
            this.I ? (this.A = new mt(this.C, this.I, this.K, this.G), this.A.init(), fk(this.B, this.A.F()), Q(this.D, 1), null == this.j && (this.j = new Kk(this.C), this.j.init(2E3)), this.j.addListener(() => {
                yv(this);
                zv(this)
            })) : zv(this)
        }
        remove() {
            yv(this);
            this.j && (this.j.wa(), this.j = null)
        }
        F() {
            return this.B
        }
    };
    var Bv = (a, b, c, d, e) => {
        a = new Av(a, bv(a, e), new av(b, d, "#FFF", "#4A4A4A", "normal"), new Xu(b, c, d), "google-dns-link-placeholder");
        a.init();
        return a
    };
    var Cv = a => a.googlefc = a.googlefc || {},
        Dv = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function Ev(a) {
        var b = Dv(a.j);
        if (Fv(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = Bv(a.j, c, b, () => Gv(a), a.B))
        }
    }

    function Hv(a) {
        const b = Cv(a.j);
        Dv(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => Ev(a)
        })
    }

    function Gv(a) {
        At(a.A);
        Dv(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.remove(), a.l = null);
            Bt(a.A)
        })
    }
    class Iv {
        constructor(a, b, c) {
            this.j = a;
            this.A = vt(b, 2147483643);
            this.B = c;
            this.l = null
        }
    }

    function Fv(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function Jv(a) {
        const b = a.document.createElement("ins");
        Kv(a, b);
        M(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function Lv(a, b, c, d) {
        const e = Bf(a).createElement("IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        Kv(a, e);
        M(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function Mv(a, b) {
        const c = b.document.createElement("span");
        Kv(b, c);
        M(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.B));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function Nv(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.A));
        M(c, Cs(b));
        M(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function Ov(a) {
        const b = a.document.createElement("div");
        M(b, Cs(a));
        M(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class Pv {
        constructor(a, b, c, d) {
            this.B = a;
            this.C = b;
            this.A = c;
            this.l = d;
            this.j = new Wj(!1)
        }
        ra(a, b, c, d) {
            c = Jv(a);
            const e = Lv(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = Lv(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = Mv(this, a),
                h = Lv(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.C);
            M(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const l = Nv(this, a);
            a = Ov(a);
            a.appendChild(c);
            a.appendChild(l);
            this.j.ba(k => {
                M(e, {
                    display: k ? "none" : "inline"
                });
                M(f, {
                    display: k ? "inline" : "none"
                });
                k ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), M(l, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), M(l, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        yd() {
            return 71
        }
        Id() {
            Q(this.j, !1);
            return 0
        }
        Jd() {
            Q(this.j, !0)
        }
    }

    function Kv(a, b) {
        M(b, Cs(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function Qv(a) {
        Rv(a.l, b => {
            var c = a.B,
                d = b.Ef,
                e = b.Ie,
                f = b.we;
            b = b.showRevocationMessage;
            (new Av(c, bv(c, a.A), new av(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new Pv(d, e, f, b), "google-revocation-link-placeholder")).init()
        }, () => {
            Bt(a.j)
        })
    }
    class Sv {
        constructor(a, b, c, d) {
            this.B = a;
            this.j = vt(b, 2147483643);
            this.A = c;
            this.l = d
        }
    };
    var Tv = a => {
        if (!a || !Ec(a, 1)) return !1;
        a = x(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function Uv(a) {
        if (!0 !== a.l.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            Tv(a.j) && (b = new Sv(a.l, a.C, a.B || E(a.j, bm, 4), a.A), At(b.j), Qv(b), b = !0);
            var c;
            a: if ((c = a.j) && Ec(c, 3)) switch (c = x(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (Hv(new Iv(a.l, a.C, a.B || E(a.j, bm, 4))), b = !0);
            if (c = (c = a.j) ? !0 === Jc(c, 5) : !1) c = ((c = a.j) ? !0 === Jc(c, 6) : !1) || T(yn);
            c && (b = !0);
            b && (a.A.start(), a.l.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class Vv {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.A = b;
            this.j = c;
            this.C = d;
            this.B = e || null
        }
    };
    var Wv = (a, b, c, d, e, f) => {
            try {
                const g = a.j,
                    h = bg("SCRIPT", g);
                h.async = !0;
                De(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", () => {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", () => {
                    0 < c ? Wv(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (g) {
                f()
            }
        },
        Xv = (a, b, c = () => {}, d = () => {}) => {
            Wv(Bf(a), b, 0, !1, c, d)
        };
    var Yv = (a = null) => {
        a = a || u;
        return a.googlefc || (a.googlefc = {})
    };
    rd(gj).map(a => Number(a));
    rd(hj).map(a => Number(a));
    var Zv = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = bg("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    const $v = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function aw(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = $v(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function bw(a) {
        return aw(a) ? !1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length ? cw(a, "1") : !0 : !1
    }

    function cw(a, b) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var c = a.publisher.restrictions[b];
                if (void 0 !== c) {
                    c = c["755"];
                    break a
                }
            }
            c = void 0
        }
        if (0 === c) return !1;a.purpose && a.vendor ? (c = a.vendor.consents, (c = !(!c || !c["755"])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
        return b
    }

    function dw(a) {
        var b = ["3", "4"];
        return !1 === a.gdprApplies ? !0 : b.every(c => cw(a, c))
    }

    function ew(a) {
        if (a.A) return a.A;
        a.A = ug(a.j, "__tcfapiLocator");
        return a.A
    }

    function fw(a) {
        return "function" === typeof a.j.__tcfapi || null != ew(a)
    }

    function gw(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
        else if (ew(a)) {
            hw(a);
            const e = ++a.J;
            a.C[e] = c;
            a.A && a.A.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function iw(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.D
        };
        const d = Ke(() => b(c));
        let e = 0; - 1 !== a.G && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.G));
        gw(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = $v(c), c.internalBlockOnErrors = a.D, aw(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), gw(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        })
    }

    function hw(a) {
        a.B || (a.B = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, L(a.j, "message", a.B))
    }
    class jw extends Qj {
        constructor(a, b = 500, c = !1) {
            super();
            this.j = a;
            this.A = null;
            this.C = {};
            this.J = 0;
            this.G = b;
            this.D = c;
            this.B = null
        }
        l() {
            this.C = {};
            this.B && (Qe(this.j, "message", this.B), delete this.B);
            delete this.C;
            delete this.j;
            delete this.A;
            super.l()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.D
            };
            const c = Ke(() => a(b));
            let d = 0; - 1 !== this.G && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.G));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = $v(b), b.internalBlockOnErrors =
                    this.D, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                gw(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && gw(this, "removeEventListener", null, a.listenerId)
        }
    };

    function Rv(a, b, c) {
        const d = Yv(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = Yv(a.j),
                    f = new jw(a.j);
                fw(f) && iw(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        Ef: e.getDefaultConsentRevocationText(),
                        Ie: e.getDefaultConsentRevocationCloseText(),
                        we: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function kw(a) {
        const b = Id(ld("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.l,
            ers: 2
        });
        Xv(a.j, b, () => {}, () => {})
    }
    class lw {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        start() {
            if (this.j === this.j.top) try {
                Zv(this.j, "googlefcPresent"), kw(this)
            } catch (a) {}
        }
    };
    var mw = (a, b, c) => {
        const d = D(a, Wl, 6);
        if (!d) return [];
        c = gs(d.l(), c);
        return (a = a.l()) && Jc(a, 11) ? c.map(e => xq(e)) : c.map(e => {
            const f = nl();
            return new Wp(new rq(e.nc, e.oc), new pq, new qq(b), !0, 2, [], f, e.l, null, null, null, e.A, e.j)
        })
    };
    var ow = class extends K {
        constructor() {
            super(void 0, -1, nw)
        }
    };

    function pw(a, b) {
        return y(a, 1, b)
    }

    function qw(a, b) {
        return Rc(a, 2, b)
    }
    var sw = class extends K {
            constructor(a) {
                super(a, -1, rw)
            }
        },
        tw = class extends K {
            constructor(a) {
                super(a)
            }
            getHeight() {
                return z(this, 2, 0)
            }
        },
        nw = [5],
        rw = [2];
    var uw = class extends K {
            constructor() {
                super(void 0)
            }
        },
        vw = [1, 2];
    var ww = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function xw(a) {
        return new ql(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class yw {
        j(a) {
            return xw(Math.floor(a.l))
        }
    };
    var zw = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        Zi: 4,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE"
    };

    function Aw(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."];
        a = nj(a) ? .tagSpecificState[1];
        (a = null == a ? null : 4 === a.debugCard ? .getAdType() ? a.debugCard : null) && a.displayAdLoadedContent(b)
    };
    var Bw = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function Cw(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.pc = c;
                a.A = !!b.adTest;
                c = b.pubVars;
                wa(c) && (a.H = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.D = {};
                    for (d of b.fillMessage) a.D[d.key] = d.value
                }
                a.B = b.adWidth;
                a.l = b.adHeight;
                qh(a.B) && qh(a.l) || Oi("rctnosize", b);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.G(b)
    }
    class Dw {
        constructor() {
            this.D = this.H = this.A = this.pc = null;
            this.l = this.B = 0
        }
        G() {
            return !0
        }
    };

    function Ew(a, b = []) {
        const c = Date.now();
        return jb(b, d => c - d < 1E3 * a)
    }

    function Fw(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || mb(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
            d = Ew(b, d);
            d.length || a ? .removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }

    function Gw(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                const e = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var d = "__storage_test__" === e
            } catch (e) {
                d = !1
            }
            c = !d
        }
        return c ? null : Fw(a, b)
    };
    var Hw = (a, b, c) => {
        let d = 0;
        try {
            d |= a != a.top ? 512 : 0;
            d |= sj(a);
            d |= rj(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = Gw(c, 3600);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            T(Eo) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    };
    class Iw extends Dw {
        constructor() {
            super();
            this.C = !1;
            this.j = null;
            this.F = !1
        }
        G(a) {
            this.C = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = Xc(vm, b)
            } catch (d) {
                c = null
            } else c = null;
            this.j = c;
            Array.isArray(a.fillMessage) && (this.F = !0);
            return !0
        }
    };
    const Jw = {};

    function Kw(a, b, c) {
        let d = Lw(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.D.l;
        for (; d.ub && d.ub.length;) {
            const h = d.ub.shift();
            var g = eq(h.V);
            const l = h.X.j,
                k = !!c.A.Pc || !!c.A.Vc || c.Ea() || !!c.A.od || l > e;
            g = !g || g <= d.Db;
            if (k && g && Mw(c, h, {
                    Vb: d.Db
                })) {
                e = l;
                if (d.Bb.j.length + 1 >= f) return !0;
                d = Lw(a, c, b);
                if (!d) return !0
            }
        }
        return c.B
    }
    const Lw = (a, b, c) => {
        var d = b.D.l,
            e = b.D.B,
            f = b.D;
        f = jr(b.U(), f.j ? f.j.cb : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = P(f.A).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - pr(f)) : e = void 0;
        a = null == e || 50 <= e ? Nw(b, f, {
            types: a
        }, c) : null;
        return {
            Bb: f,
            Db: e,
            ub: a
        }
    };
    Jw[2] = Da(function(a, b) {
        a = Nw(b, jr(b.U()), {
            types: a,
            La: Tq(b.U())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (Mw(b, a[c])) return !0;
        return b.B ? (b.C.push(11), !0) : !1
    }, [0]);
    Jw[5] = Da(Kw, [0], 5);
    Jw[10] = Da(function(a, b) {
        a = [];
        const c = b.W;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !T(nn) && a.push(1);
        return Kw(a, 10, b)
    }, 10);
    Jw[3] = function(a) {
        if (!a.B) return !1;
        var b = Nw(a, jr(a.U()), {
            types: [0],
            La: Tq(a.U())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (Mw(a, b[c])) return !0;
        a.C.push(11);
        return !0
    };
    const Ow = a => {
            var b;
            a.A.ce ? b = new Pq(0, null, [], 3, null) : b = Tq(a.U());
            return {
                types: [0],
                La: b
            }
        },
        Qw = a => {
            const b = a.U().document.body.getBoundingClientRect().width;
            Pw(a, xw(b))
        },
        Sw = (a, b) => {
            var c = Ow(a);
            c.Df = [5];
            c = Nw(a, jr(a.U()), c, 8);
            Rw(a, c.reverse(), b)
        },
        Rw = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.X), Mw(a, d, {
                        qc: b
                    })) return !0;
            return !1
        };
    Jw[8] = function(a) {
        var b = a.U().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => Jw[8](a), {
            once: !0
        }), !0;
        if (!a.B) return !1;
        if (!a.Tb()) return !0;
        b = Ow(a);
        b.Nc = [2, 4, 5];
        b = Nw(a, jr(a.U()), b, 8);
        const c = new yw;
        if (Rw(a, b, c)) return !0;
        if (a.A.pd) switch (a.A.Md || 0) {
            case 1:
                Sw(a, c);
                break;
            default:
                Qw(a)
        }
        return !0
    };
    Jw[6] = Da(Kw, [2], 6);
    Jw[7] = Da(Kw, [1], 7);
    Jw[9] = function(a) {
        const b = Lw([0, 2], a, 9);
        if (!b || !b.ub) return a.C.push(17), Aw(a.U()), a.B;
        for (const e of b.ub) {
            var c = e;
            var d = a.A.Bc || null;
            null == d ? c = null : (d = fq(c.V, new Tw, new Uw(d, a.U())), c = new mq(d, c.Z(), c.X));
            if (c && !(eq(c.V) > b.Db) && Mw(a, c, {
                    Vb: b.Db,
                    uc: !0
                })) return a = c.V.T, cq(e.V, 0 < a.length ? a[0] : null), !0
        }
        a.C.push(17);
        Aw(a.U());
        return a.B
    };
    class Tw {
        l(a, b, c, d) {
            return up(d.document, a, b)
        }
        A(a) {
            return P(a).clientHeight || 0
        }
    };
    var Vw = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.Bb = c
        }
        ia(a) {
            return this.j ? Lr(this.l, this.j, a, this.Bb) : Kr(this.l, a, this.Bb)
        }
        ja() {
            return this.j ? 16 : 9
        }
    };
    var Ww = class {
        constructor(a) {
            this.rc = a
        }
        ia(a) {
            return Tr(a.document, this.rc)
        }
        ja() {
            return 11
        }
    };
    var Xw = class {
        constructor(a) {
            this.Va = a
        }
        ia(a) {
            return Pr(this.Va, a)
        }
        ja() {
            return 13
        }
    };
    var Yw = class {
        ia(a) {
            return Ir(a)
        }
        ja() {
            return 12
        }
    };
    var Zw = class {
        constructor(a) {
            this.lb = a
        }
        ia() {
            return Nr(this.lb)
        }
        ja() {
            return 2
        }
    };
    var $w = class {
        constructor(a) {
            this.j = a
        }
        ia() {
            return Qr(this.j)
        }
        ja() {
            return 3
        }
    };
    var ax = class {
        ia() {
            return Ur()
        }
        ja() {
            return 17
        }
    };
    var bx = class {
        constructor(a) {
            this.j = a
        }
        ia() {
            return Mr(this.j)
        }
        ja() {
            return 1
        }
    };
    var cx = class {
        ia() {
            return He(Xp)
        }
        ja() {
            return 7
        }
    };
    var dx = class {
        constructor(a) {
            this.Nc = a
        }
        ia() {
            return Or(this.Nc)
        }
        ja() {
            return 6
        }
    };
    var ex = class {
        constructor(a) {
            this.j = a
        }
        ia() {
            return Rr(this.j)
        }
        ja() {
            return 5
        }
    };
    var fx = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        ia() {
            return Da(Vr, this.minWidth, this.maxWidth)
        }
        ja() {
            return 10
        }
    };
    var gx = class {
        constructor(a) {
            this.B = a.l.slice(0);
            this.l = a.j.slice(0);
            this.A = a.A;
            this.C = a.B;
            this.j = a.C
        }
    };

    function hx(a) {
        var b = new ix;
        b.C = a;
        b.l.push(new bx(a));
        return b
    }

    function jx(a, b) {
        a.l.push(new dx(b));
        return a
    }

    function kx(a, b) {
        a.l.push(new Zw(b));
        return a
    }

    function lx(a, b) {
        a.l.push(new ex(b));
        return a
    }

    function mx(a, b) {
        a.l.push(new $w(b));
        return a
    }

    function nx(a) {
        a.l.push(new cx);
        return a
    }

    function ox(a) {
        a.j.push(new Yw);
        return a
    }

    function px(a, b = 0, c, d) {
        a.j.push(new Vw(b, c, d));
        return a
    }

    function qx(a, b = 0, c = Infinity) {
        a.j.push(new fx(b, c));
        return a
    }

    function rx(a) {
        a.j.push(new ax);
        return a
    }

    function sx(a, b = 0) {
        a.j.push(new Xw(b));
        return a
    }

    function tx(a, b) {
        a.A = b;
        return a
    }
    var ix = class {
        constructor() {
            this.A = 0;
            this.B = !1;
            this.l = [].slice(0);
            this.j = [].slice(0)
        }
        build() {
            return new gx(this)
        }
    };
    class Uw {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = this.l,
                b = this.A;
            const c = a.H || {};
            c.google_ad_client = a.pc;
            c.google_ad_height = P(b).clientHeight || 0;
            c.google_ad_width = P(b).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            b = new Bw;
            y(b, 1, a.C);
            a.j && Pc(b, 2, a.j);
            a.F && y(b, 3, !0);
            c.google_rasc = $c(b);
            a.A && (c.google_adtest = "on");
            return new ql(["fsi_container"], c)
        }
    };
    var ux = jl(new gl(0, {})),
        vx = jl(new gl(1, {})),
        wx = a => a === ux || a === vx;

    function xx(a, b, c) {
        Ij(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class yx {
        constructor() {
            this.j = new Mj
        }
    };

    function zx(a, b) {
        b && (a.j.apv = x(b, 4), Fc(b, 23) && (a.j.sat = "" + x(D(b, xm, 23), 1)));
        return a
    }

    function Ax(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    class Bx extends Sm {
        constructor(a) {
            super(a);
            this.j = {}
        }
        I(a) {
            null != a && (this.j.allp = a);
            return this
        }
        B(a) {
            try {
                this.j.su = a.location.hostname
            } catch (b) {
                this.j.su = "_ex"
            }
            a = super.B(a);
            ud(a, this.j);
            return a
        }
    }

    function Cx(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function Dx(a, b) {
        a.l.op = Ex(b)
    }

    function Fx(a, b, c) {
        30 >= c.length ? a.l[b] = Gx(c) : (a.l[b] = Gx(c.slice(0, 30)), a.l[b + "_c"] = c.length.toString())
    }

    function Hx(a, b, c) {
        Fx(a, "fap", b);
        a.l.fad = Ex(c)
    }

    function Ix(a, b, c) {
        Fx(a, "fmp", b);
        a.l.fmd = Ex(c)
    }

    function Jx(a, b, c) {
        Fx(a, "vap", b);
        a.l.vad = Ex(c)
    }

    function Kx(a, b, c) {
        Fx(a, "vmp", b);
        a.l.vmd = Ex(c)
    }

    function Lx(a, b, c) {
        Fx(a, "pap", b);
        a.l.pad = Ex(c)
    }

    function Mx(a, b, c) {
        Fx(a, "pmp", b);
        a.l.pmd = Ex(c)
    }

    function Nx(a, b) {
        Fx(a, "psq", b)
    }
    var Ox = class extends Bx {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.l = {}
        }
        B(a) {
            a = super.B(a);
            Object.assign(a, this.l);
            return a
        }
    };

    function Gx(a) {
        return a.map(b => b ? .toString() ? ? "null").join("~")
    }

    function Ex(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };
    var Px = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function Qx(a, b) {
        return Kc(a, 1, b)
    }

    function Rx() {
        var a = new Sx;
        tc(a);
        Gc(a, 2, 2, !1).push("irr");
        return a
    }

    function Tx(a, b) {
        return y(a, 3, b)
    }

    function Ux(a, b) {
        return y(a, 4, b)
    }

    function Vx(a, b) {
        return y(a, 5, b)
    }

    function Wx(a, b) {
        return y(a, 7, b)
    }

    function Xx(a, b) {
        return y(a, 8, b)
    }

    function Yx(a, b) {
        return y(a, 9, b)
    }

    function Zx(a, b) {
        return Rc(a, 10, b)
    }

    function $x(a, b) {
        return Kc(a, 11, b)
    }
    var Sx = class extends K {
            constructor() {
                super(void 0, -1, ay)
            }
        },
        ay = [1, 2, 10, 11];

    function by(a, b, c) {
        const d = b.V;
        Ij(a.j, d) || a.j.set(d, new cy(Zk(kq(b)) ? ? ""));
        c(a.j.get(d))
    }

    function dy(a, b) {
        by(a, b, c => {
            c.j = !0
        })
    }

    function ey(a, b) {
        by(a, b, c => {
            c.l = !0
        })
    }

    function fy(a, b) {
        by(a, b, c => {
            c.A = !0
        });
        a.I.push(b.V)
    }

    function gy(a, b, c) {
        by(a, b, d => {
            d.Ta = c
        })
    }

    function hy(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) wx(f.Ta ? ? "") ? ++e : (b = a.l.get(f.Ta ? ? "", null), d.push(b));
        return {
            list: d.sort((f, g) => (f ? ? -1) - (g ? ? -1)),
            Ua: e
        }
    }

    function iy(a, b) {
        Dx(b, a.l.ob());
        var c = Lj(a.j).filter(f => 0 === (f.Ha.startsWith(ux) ? 0 : 1)),
            d = Lj(a.j).filter(f => 1 === (f.Ha.startsWith(ux) ? 0 : 1)),
            e = hy(a, f => f.j, c);
        Hx(b, e.list, e.Ua);
        e = hy(a, f => f.j, d);
        Ix(b, e.list, e.Ua);
        e = hy(a, f => f.l, c);
        Jx(b, e.list, e.Ua);
        e = hy(a, f => f.l, d);
        Kx(b, e.list, e.Ua);
        c = hy(a, f => f.A, c);
        Lx(b, c.list, c.Ua);
        d = hy(a, f => f.A, d);
        Mx(b, d.list, d.Ua);
        Nx(b, a.I.map(f => a.j.get(f) ? .Ta).map(f => a.l.get(f) ? ? null))
    }

    function jy() {
        var a = O(ky);
        if (!a.B) return Rx();
        const b = $x(Zx(Yx(Xx(Wx(Vx(Ux(Tx(Qx(new Sx, a.B ? ? []), a.C), a.F), a.G), a.J), a.K), a.D ? ? 0), Lj(a.j).map(c => {
            var d = new Px;
            d = y(d, 1, c.Ha);
            var e = a.l.get(c.Ta ? ? "", -1);
            d = y(d, 2, e);
            d = y(d, 3, c.j);
            return y(d, 4, c.l)
        })), a.I.map(c => a.j.get(c) ? .Ta).map(c => a.l.get(c) ? ? null));
        null != a.A && y(b, 6, a.A);
        return b
    }
    var ky = class {
        constructor() {
            this.B = null;
            this.G = this.F = !1;
            this.A = null;
            this.K = this.C = this.J = !1;
            this.D = null;
            this.l = new Mj;
            this.j = new Mj;
            this.I = []
        }
    };
    class cy {
        constructor(a) {
            this.A = this.l = this.j = !1;
            this.Ta = null;
            this.Ha = a
        }
    };
    class ly {
        constructor(a = 0) {
            this.j = a
        }
    };
    class my {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function ny(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function oy(a, b) {
        const c = a.G.filter(d => Kj(d.Kb).every(e => d.Kb.get(e) === b.get(e)));
        return 0 === c.length ? (a.j.push(19), null) : c.reduce((d, e) => d.Kb.ob() > e.Kb.ob() ? d : e, c[0])
    }

    function py(a, b) {
        b = kq(b);
        if (null == b.j) return a.j.push(18), null;
        b = b.j.value;
        if (Ij(a.l, b)) return a.l.get(b);
        var c = hl(b);
        c = oy(a, c);
        a.l.set(b, c);
        return c
    }
    var qy = class {
        constructor(a) {
            this.A = a;
            this.l = new Mj;
            this.G = (D(a, mm, 2) ? .l() || []).map(b => ({
                Kb: hl(H(b, 1)),
                Od: z(b, 2, 0),
                Ha: H(b, 1)
            }));
            this.j = []
        }
        F() {
            const a = O(ky);
            var b = this.B();
            a.B = b;
            b = !!this.A.F() ? .l() ? .l();
            a.G = b;
            b = new Mj;
            for (const c of D(this.A, mm, 2) ? .l() ? ? []) b.set(H(c, 1), z(c, 2, 0));
            a.l = b
        }
        C() {
            return [...this.j]
        }
        B() {
            return [...this.A.l()]
        }
        D(a) {
            const b = py(this, a);
            null != b ? .Ha && gy(O(ky), a, b.Ha)
        }
        I(a) {
            const b = U(An) || 0;
            if (0 == a.length || 0 == b) return !0;
            const c = (new Sk(a)).filter(d => {
                d = py(this, d) ? .Ha || "";
                return "" != d &&
                    !(d === ux || d === vx)
            });
            return b <= c.j.length / a.length
        }
    };

    function ry(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => (py(a.j, c) ? .Od || Number.MAX_VALUE) - (py(a.j, d) ? .Od || Number.MAX_VALUE))
    }

    function sy(a, b) {
        var c = b.X.j,
            d = Math,
            e = d.min;
        const f = b.Z(),
            g = b.V.l();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? ny(f.parentElement) : ny(f));
        d = a.A;
        0 > d.j && (d.j = P(d.l).scrollHeight || 0);
        d = d.j - b.X.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.Z();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function ty(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => sy(a, c) - sy(a, d))
    }

    function uy(a, b) {
        return b.sort((c, d) => {
            const e = c.V.G,
                f = d.V.G;
            var g;
            null == e || null == f ? g = null == e && null == f ? sy(a, c) - sy(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class vy {
        constructor(a, b = 0, c = null) {
            this.A = new my(a);
            this.l = new ly(b);
            this.j = c && new qy(c)
        }
    };

    function wy(a) {
        a.j.forEach(b => {
            b.j && Uo(b.j);
            b.j = null
        })
    }

    function xy(a, b, c = 0) {
        var d = a.j;
        for (var e of b.B) d = Rk(d, e.ia(a.A), yy(e.ja(), c));
        e = d = d.apply(Hr(a.A));
        for (const f of b.l) e = Rk(e, f.ia(a.A), zy(f.ja(), c));
        switch (b.A) {
            case 1:
                e = ty(a.l, e);
                break;
            case 2:
                e = uy(a.l, e);
                break;
            case 3:
                const f = O(ky);
                e = ry(a.l, e);
                d.forEach(g => {
                    dy(f, g);
                    a.l.j ? .D(g)
                });
                e.forEach(g => ey(f, g))
        }
        b.C && (e = Tk(e, yf(a.A.location.href + a.A.localStorage.google_experiment_mod)));
        1 === b.j ? .length && xx(a.B, b.j[0], {
            ye: d.j.length,
            Mf: e.j.length
        });
        return e.j.slice(0)
    }
    class Ay {
        constructor(a, b, c = 0, d = null) {
            this.j = new Sk(a);
            this.l = new vy(b, c, d);
            this.A = b;
            this.B = new yx
        }
    }
    const yy = (a, b) => c => bq(c, b, a),
        zy = (a, b) => c => bq(c.V, b, a);

    function By(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = Cy(Dy(c), a);
                    break a;
                case 3:
                    a = Cy(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = Cy(e ? 1 == e.nodeType ? e : Dy(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && 2 == b && !Ey(c))) b = 1 == b || 2 == b ? c : c.parentNode,
        d = !(b && !Ym(b) && 0 >= b.offsetWidth);
        return d
    }

    function Cy(a, b) {
        if (!a) return !1;
        a = cg(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Dy(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Ey(a) {
        return !!a.nextSibling || !!a.parentNode && Ey(a.parentNode)
    };
    var Fy = !Ab && !cb();

    function Gy(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (Fy && a.dataset) {
            if (eb() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var Hy = (a, b, c) => {
            if (!b) return null;
            const d = Kf(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = P(a).clientHeight;
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var l = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = l - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        Iy = a => {
            const b = a.document.body;
            var c = Hy(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; 0 < d.length;) {
                    const h = d.pop(),
                        l = h.element;
                    var g = h.height;
                    0 < h.depth && g > e && (e = g, f = l);
                    if (5 > h.depth)
                        for (let k = 0; k < l.children.length; k++) {
                            const m = l.children[k];
                            g = c;
                            const n = m.getBoundingClientRect().width;
                            (null == n || null == g ? 0 : n >= .9 * g && n <= 1.01 * g) && d.push({
                                element: m,
                                depth: h.depth + 1,
                                height: m.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? Hy(a, c.parentNode || b, c) : null
        },
        Ky = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, Uf() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) ||
                    (b |= 32768), Jy(a) && (b |= 33554432)
            } catch (c) {
                b |= 32
            }
            return b
        },
        Jy = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == Gy(a[b])) return !0;
            return !1
        };

    function Ly(a) {
        const b = tj(a, !0),
            c = P(a).scrollWidth,
            d = P(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = yj(a);
        const g = [];
        var h = [];
        const l = [],
            k = [];
        var m = [],
            n = [],
            q = [];
        let r = 0,
            t = 0,
            C = Infinity,
            w = Infinity,
            A = null;
        var F = fr({
            Qa: !1
        }, a);
        for (var G of F) {
            F = G.getBoundingClientRect();
            const ba = b - (F.bottom + f);
            var J = void 0,
                I = void 0;
            if (G.className && Wa(G.className, "adsbygoogle-ablated-ad-slot")) {
                J = G.getAttribute("google_element_uid");
                I = a.google_sv_map;
                if (!J || !I || !I[J]) continue;
                J = (I = Ch(I[J])) ? I.height : 0;
                I = I ? I.width : 0
            } else if (J = F.bottom - F.top, I = F.right - F.left, 1 >= J || 1 >= I) continue;
            g.push(J);
            l.push(I);
            k.push(J * I);
            G.className && Wa(G.className, "google-auto-placed") ? (t += 1, G.className && Wa(G.className, "pedestal_container") && (A = J)) : (C = Math.min(C, ba), n.push(F), r += 1, h.push(J), m.push(J * I));
            w = Math.min(w, ba);
            q.push(F)
        }
        C = Infinity === C ? null : C;
        w = Infinity === w ? null : w;
        f = My(n);
        q = My(q);
        h = Ny(b, h);
        n = Ny(b, g);
        m = Ny(b * c, m);
        G = Ny(b * c, k);
        return new Oy(a, {
            Ne: e,
            Lc: b,
            sf: c,
            rf: d,
            hf: r,
            xe: t,
            Ae: Py(g),
            Be: Py(l),
            ze: Py(k),
            nf: f,
            mf: q,
            lf: C,
            kf: w,
            xc: h,
            wc: n,
            te: m,
            se: G,
            tf: A
        })
    }

    function Qy(a, b, c, d) {
        const e = Uf() && !(900 <= P(a.l).clientWidth);
        d = jb(d, f => nb(a.A, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.Ne,
            pg_h: Ry(a.j.Lc),
            pg_w: Ry(a.j.sf),
            pg_hs: Ry(a.j.rf),
            c: Ry(a.j.hf),
            aa_c: Ry(a.j.xe),
            av_h: Ry(a.j.Ae),
            av_w: Ry(a.j.Be),
            av_a: Ry(a.j.ze),
            s: Ry(a.j.nf),
            all_s: Ry(a.j.mf),
            b: Ry(a.j.lf),
            all_b: Ry(a.j.kf),
            d: Ry(a.j.xc),
            all_d: Ry(a.j.wc),
            ard: Ry(a.j.te),
            all_ard: Ry(a.j.se),
            pd_h: Ry(a.j.tf),
            dt: e ? "m" : "d"
        }
    }
    class Oy {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.A = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function Py(a) {
        return sf.apply(null, jb(a, b => 0 < b)) || null
    }

    function Ny(a, b) {
        return 0 >= a ? null : rf.apply(null, b) / a
    }

    function My(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function Ry(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function Sy(a, b) {
        b = (P(b).clientHeight || 0) - yj(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            nr(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function Ty(a) {
        const b = {};
        var c = hr({
            Qa: !1,
            Nb: !1,
            Ob: !1,
            Pb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(nr);
        b.ne = c.length;
        c = ir({
            Ob: !0
        }, a).map(d => d.getBoundingClientRect()).filter(nr);
        b.Pe = c.length;
        c = ir({
            Pb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(nr);
        b.pf = c.length;
        c = ir({
            Nb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(nr);
        b.re = c.length;
        c = (P(a).clientHeight || 0) - yj(a);
        c = hr({
            Qa: !1
        }, a).map(d => d.getBoundingClientRect()).filter(nr).filter(Ca(Uy, null, c));
        b.pe = c.length;
        a = Ly(a);
        c = null != a.j.xc ? a.j.xc :
            null;
        null != c && (b.jf = c);
        a = null != a.j.wc ? a.j.wc : null;
        null != a && (b.qe = a);
        return b
    }

    function Mw(a, b, {
        Vb: c,
        qc: d,
        uc: e
    } = {}) {
        return Hp(997, () => Vy(a, b, {
            Vb: c,
            qc: d,
            uc: e
        }), a.j)
    }

    function Nw(a, b, c, d) {
        var e = c.La ? c.La : a.D;
        const f = Uq(e, b.j.length);
        e = a.A.Yc ? e.j : void 0;
        const g = rx(sx(ox(qx(px(nx(lx(mx(jx(kx(hx(c.types), a.T), c.Nc || []), a.O), c.Df || [])), f.Wb || void 0, e, b), c.minWidth, c.maxWidth)), f.Va || void 0));
        a.N && g.j.push(new Ww(a.N));
        b = 1;
        a.A.Vc ? b = 2 : a.Ea() && (b = 3);
        tx(g, b);
        a.A.Pc && (g.B = !0);
        return Hp(995, () => xy(a.l, g.build(), d), a.j)
    }

    function Pw(a, b) {
        const c = Iy(a.j);
        if (c) {
            const d = pl(a.J, b),
                e = rp(a.j.document, a.F, null, null, {}, d);
            e && (Xo(e.Pa, c, 2, 256), Hp(996, () => Wy(a, e, d), a.j))
        }
    }

    function Xy(a) {
        return a.G ? a.G : a.G = a.j.google_ama_state
    }

    function Vy(a, b, {
        Vb: c,
        qc: d,
        uc: e
    } = {}) {
        const f = b.V;
        if (f.C) return !1;
        var g = b.Z();
        if (!By(a.j, f.l(), g, a.B)) return !1;
        c = null == c ? null : new ql(null, {
            google_max_responsive_height: c
        });
        g = rl(x(f.kc, 2) || 0);
        const h = sl(f.G),
            l = Yy(a, f),
            k = pl(a.J, f.O ? f.O.j(b.X) : null, c, d || null, g, h, l),
            m = b.fill(a.F, k);
        if (e && !Zy(a, m, k) || !Hp(996, () => Wy(a, m, k), a.j)) return !1;
        dj(9, [f.G, f.Ra]);
        a.Ea() && fy(O(ky), b);
        return !0
    }

    function Yy(a, b) {
        return Zk(al(iq(b).map(tl), () => {
            a.C.push(18)
        }))
    }

    function Zy(a, b, c) {
        if (!b) return !1;
        var d = b.qa,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.j;
        e = b.qa;
        c = c && c.pb() || {};
        if (d !== d.top) var g = $f(d) ? 3 : 16;
        else if (488 > P(d).clientWidth)
            if (d.innerHeight >= d.innerWidth)
                if (g = P(d).clientWidth, !g || .3 < (g - f) / g) g = 6;
                else {
                    if (g = "true" != c.google_full_width_responsive) b: {
                        var h = e.parentElement;
                        for (g = P(d).clientWidth; h; h = h.parentElement) {
                            const l = cg(h, d);
                            if (!l) continue;
                            const k = ng(l.width);
                            if (k && !(k >= g) && "visible" != l.overflow) {
                                g = !0;
                                break b
                            }
                        }
                        g = !1
                    }
                    g = g ? 7 : !0
                }
        else g = 5;
        else g = 4;
        if (!0 !== g) f = g;
        else {
            if (!(c = "true" == c.google_full_width_responsive)) a: {
                do
                    if ((c = cg(e, d)) && "fixed" == c.position) {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = P(d).clientWidth, f = d - f, f = d && 0 <= f ? !0 : d ? -10 > f ? 11 : 0 > f ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.j;
            b = b.qa;
            if (f = np(a, b)) b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none", b.style.borderSpacing = b.style.padding = "0", lp(b, f, "0px"), b.style.width = P(a).clientWidth + "px", op(a, b, f), b.style.zIndex = 30;
            return !0
        }
        Uo(b.Pa);
        return !1
    }

    function Wy(a, b, c) {
        if (!b) return !1;
        try {
            vp(a.j, b.qa, c)
        } catch (d) {
            return Uo(b.Pa), a.C.push(6), !1
        }
        return !0
    }
    class $y {
        constructor(a, b, c, d, e = {}, f = []) {
            this.l = a;
            this.F = b;
            this.j = c;
            this.D = d.La;
            this.T = d.lb || [];
            this.J = d.Qe || null;
            this.O = d.Me || [];
            this.N = d.rc || [];
            this.A = e;
            this.B = !1;
            this.K = [];
            this.C = [];
            this.I = this.G = void 0;
            this.W = f
        }
        U() {
            return this.j
        }
        va(a) {
            this.K.push(a)
        }
        Ea() {
            if (0 == (this.l.l.j ? .B().length ? ? 0)) return !1;
            if (0 == (U(An) || 0)) return !0;
            if (void 0 === this.I) {
                const a = tx(ox(nx(hx([0, 1, 2]))), 1).build(),
                    b = Hp(995, () => xy(this.l, a), this.j);
                this.I = this.l.l.j ? .I(b) || !1
            }
            return this.I
        }
        Gc() {
            return !!this.A.Td
        }
        Tb() {
            return !Jy(this.j)
        }
    }
    const Uy = (a, b) => b.top <= a;

    function az(a, b, c, d, e, f = 0, g = 0) {
        this.Ba = a;
        this.hc = f;
        this.ec = g;
        this.errors = b;
        this.Ja = c;
        this.j = d;
        this.l = e
    };
    var bz = (a, {
        Tb: b = !1,
        Gc: c = !1,
        Ff: d = !1,
        Ea: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !T(nn);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !T(nn) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function cz(a, b, c) {
        a = bz(a, {
            Tb: b.Tb(),
            Gc: b.Gc(),
            Ff: !!b.A.Bc,
            Ea: b.Ea()
        });
        return new dz(a, b, c)
    }

    function ez(a, b) {
        const c = Jw[b];
        return c ? Hp(998, () => c(a.j), a.C) : (a.j.va(12), !0)
    }
    class dz {
        constructor(a, b, c) {
            this.B = a.slice(0);
            this.l = a.slice(0);
            this.A = ob(this.l, 1);
            this.j = b;
            this.C = c
        }
    };
    const fz = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };
    class gz {
        j() {
            return new ql([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class hz {
        j() {
            return new ql(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function iz(a) {
        return Zm(a.j.document).map(b => {
            const c = new rq(b, 3);
            b = new Sp(xp(a.j, b));
            return new Wp(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class jz {
        constructor(a) {
            var b = new hz;
            this.j = a;
            this.l = b || null
        }
    };
    const kz = {
        Uc: "10px",
        tc: "10px"
    };

    function lz(a) {
        return Hj(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new Wp(new rq(b, 1), new Qp(kz), a.l, !1, 0, [], null, a.j, null))
    }
    class mz {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function nz(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function oz(a, b, c) {
        const d = nz(c.Lb, "gapsMeasurementWindow") || nz(c.nb, "gapsPerMeasurementWindow") || nz(c.sb, "maxGapsToReport");
        return null != d ? Xk(d) : c.bd || -1 != c.nb || -1 != c.sb ? Vk(new pz(a, b, c)) : Xk("ShouldHaveLimits")
    }

    function qz(a) {
        return Xy(a.A) && Xy(a.A).placed || []
    }

    function rz(a) {
        return qz(a).map(b => Ik(Gk(b.element, a.j)))
    }

    function sz(a) {
        return qz(a).map(b => b.index)
    }

    function tz(a, b) {
        const c = b.V;
        return !a.D && c.B && Ec(c.B, 8) && 1 == x(c.B, 8) ? [] : c.C ? (c.T || []).map(d => Ik(Gk(d, a.j))) : [Ik(new Hk(b.X.j, 0))]
    }

    function uz(a) {
        a.sort((e, f) => e.j - f.j);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.j;
            d = d.j + d.l;
            f <= c ? c = Math.max(c, d) : (b.push(new Hk(c, f - c)), c = d)
        }
        return b
    }

    function vz(a, b) {
        b = b.map(c => {
            var d = new tw;
            d = y(d, 1, c.j);
            c = c.getHeight();
            return y(d, 2, c)
        });
        return qw(pw(new sw, a), b)
    }

    function wz(a) {
        const b = E(a, tw, 2).map(c => `G${z(c,1,0)}~${c.getHeight()}`);
        return `W${z(a,1,0)}${b.join("")}`
    }

    function xz(a, b) {
        const c = [];
        let d = 0;
        for (const e of Kj(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.I || f.splice(a.C, f.length);
            !a.F && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(vz(e, f));
            d += f.length;
            if (!a.F && d >= a.l) break
        }
        return c
    }

    function yz(a) {
        const b = E(a, sw, 5).map(c => wz(c));
        return `M${z(a,1,0)}H${z(a,2,0)}C${z(a,3,0)}B${Number(!!B(a,4))}${b.join("")}`
    }

    function zz(a) {
        var b = Aq(a.A.l.j.j.slice(0), a.j),
            c = rz(a),
            d = new Nj(sz(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = tz(a, b[e]);
                c.push(...f)
            }
        c.push(new Hk(0, 0));
        c.push(Ik(new Hk(P(a.j).scrollHeight, 0)));
        b = uz(c);
        c = new Mj;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.G ? 0 : Math.floor(e.j / a.B), Ij(c, f) || c.set(f, []), c.get(f).push(e);
        b = xz(a, c);
        c = new ow;
        c = y(c, 1, a.l);
        c = y(c, 2, a.B);
        c = y(c, 3, a.C);
        a = y(c, 4, a.D);
        return Rc(a, 5, b)
    }

    function Az(a) {
        a = zz(a);
        return yz(a)
    }
    var pz = class {
        constructor(a, b, c) {
            this.G = -1 == c.Lb;
            this.B = c.Lb;
            this.I = -1 == c.nb;
            this.C = c.nb;
            this.F = -1 == c.sb;
            this.l = c.sb;
            this.D = c.Cd;
            this.A = b;
            this.j = a
        }
    };

    function Bz(a) {
        var b = new Cz;
        return y(b, 1, a)
    }
    var Cz = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var Dz = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function Ez(a) {
        var b = jy();
        Pc(a, 1, b)
    }

    function Fz(a, b) {
        return Rc(a, 3, b)
    }

    function Gz(a, b) {
        Rc(a, 4, b)
    }

    function Hz(a, b) {
        var c = Cz;
        tc(a);
        const d = Oc(a, c, 4, void 0, !1);
        b = null != b ? b : new c;
        c = Gc(a, 4, 2);
        d.push(b);
        c.push(b.M);
        lc(b.M) && oc(c, !1);
        return a
    }

    function Iz(a, b) {
        return Rc(a, 5, b)
    }
    var Kz = class extends K {
            constructor() {
                super(void 0, -1, Jz)
            }
            I(a) {
                return y(this, 8, a)
            }
        },
        Jz = [3, 4, 5, 6];
    const Lz = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        Mz = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var Nz = (a, b) => {
        a = Hc(a, 2);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    const Pz = (a, b) => {
            a = Mz(Lz(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = gg(a),
                d = Oz(a);
            return b.find(e => {
                const f = Fc(e, 7) ? x(D(e, Am, 7), 1) : x(e, 1);
                e = Fc(e, 7) ? x(D(e, Am, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        },
        Oz = a => {
            const b = {};
            for (;;) {
                b[gg(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };
    const Qz = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var Rz = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            Oi("ama", b, .01)
        },
        Sz = a => {
            const b = {};
            eg(Qz, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    var Tz = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                Rz(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            Rz(a, {
                lserr: 1
            })
        }
    };

    function Uz(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function Vz(a, b) {
        a = Uz(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };
    var Wz = class extends K {
            constructor() {
                super(void 0)
            }
            Ya(a) {
                return y(this, 2, a)
            }
        },
        Xz = [4, 5];

    function Yz() {
        if (Zz) return Zz;
        const a = Wg() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Zz = b : a.google_persistent_state_async = Zz = new $z
    }

    function X(a, b, c) {
        b = aA[b] || "google_ps_" + b;
        a = a.S;
        const d = a[b];
        return void 0 === d ? a[b] = c : d
    }

    function bA(a, b, c) {
        return a.S[aA[b] || "google_ps_" + b] = c
    }

    function cA(a, b) {
        return bA(a, b, X(a, b, 0) + 1)
    }

    function dA() {
        var a = Yz();
        return X(a, 20, {})
    }

    function eA() {
        var a = Yz();
        const b = X(a, 31, !1);
        b || bA(a, 31, !0);
        return !b
    }

    function fA() {
        var a = Yz();
        return X(a, 26)
    }

    function gA() {
        var a = Yz();
        return X(a, 28, [])
    }
    class $z {
        constructor() {
            this.S = {}
        }
    }
    var Zz = null;
    const aA = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    var hA = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_resize: "twa",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_dom_fingerprint: "adf",
            google_placement_id: "pi",
            google_ad_width: "w",
            google_captcha_token: "captok",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            gfwrnwer: "fwrn",
            gfwrnher: "fwrnh",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_native_settings_key: "nsk",
            google_enable_content_recommendations: "ecr",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_pucrd: "pucrd",
            google_reactive_plaf: "plaf",
            google_reactive_plat: "plat",
            google_reactive_fba: "fba",
            google_reactive_sra_channels: "plach",
            google_responsive_auto_format: "rafmt",
            armr: "armr",
            google_plas: "plas",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_video_play_muted: "vpmute",
            google_source_type: "src_type",
            google_restrict_data_processing: "rdp",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_for_under_age_of_consent: "tfua",
            google_tag_origin: "to",
            google_ad_semantic_area: "sem",
            google_tfs: "tfs",
            google_package: "pwprc",
            google_tag_partner: "tp",
            fra: "fpla",
            google_ml_rank: "mlr",
            google_apsail: "psa",
            google_ad_channel: "channel",
            google_ad_type: "ad_type",
            google_ad_format: "format",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_page_url: "url",
            google_allow_expandable_ads: "ea",
            google_ad_section: "region",
            google_cpm: "cpm",
            google_encoding: "oe",
            google_safe: "adsafe",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_kw_type: "kw_type",
            google_kw: "kw",
            google_contents: "contents",
            google_targeting: "targeting",
            google_adtest: "adtest",
            google_alternate_color: "alt_color",
            google_alternate_ad_url: "alternate_ad_url",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_cust_id: "cust_id",
            google_language: "hl",
            google_city: "gcs",
            google_country: "gl",
            google_region: "gr",
            google_content_recommendation_ad_positions: "ad_pos",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_content_recommendation_ui_type: "crui",
            google_content_recommendation_use_square_imgs: "cr_sq_img",
            google_color_line: "color_line",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_full_width_responsive_allowed: "fwr",
            google_full_width_responsive: "fwrattr",
            efwr: "efwr",
            google_pgb_reactive: "pra",
            google_resizing_allowed: "rs",
            google_resizing_height: "rh",
            google_resizing_width: "rw",
            rpe: "rpe",
            google_responsive_formats: "resp_fmts",
            google_safe_for_responsive_override: "sfro",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl",
            easpf: "easpf",
            easpi: "easpi",
            easpa: "easai",
            asntp: "asntp",
            asntpv: "asntpv",
            asntpl: "asntpl",
            asntpm: "asntpm",
            asntpc: "asntpc",
            asna: "asna",
            asnd: "asnd",
            asnp: "asnp",
            asns: "asns",
            asmat: "asmat",
            asptt: "asptt"
        },
        iA = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) &&
        RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        jA = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        kA = a => {
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    break;
                default:
                    try {
                        const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c =
                                parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };
    const lA = new WeakMap;

    function mA() {
        var a = nA,
            b = oA;
        const c = xa(a),
            d = ([, ...f]) => b(c, f),
            e = ([f, ...g]) => a.apply(f, g);
        return function(...f) {
            const g = this || u;
            let h = lA.get(g);
            h || (h = {}, lA.set(g, h));
            return yb(h, [this, ...f], e, d)
        }
    }

    function oA(a, b) {
        a = [a];
        for (let c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
        return a.join("\v")
    };

    function nA(a) {
        if (a.google_ad_client) var b = String(a.google_ad_client);
        else {
            if (null == (b = Uz(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client"))) {
                b: {
                    b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) &&
                    /applewebkit/i.test(a) && !/version|safari/i.test(a) && !Ah() ? iA : jA;
                    for (var c = b.length - 1; 0 <= c; c--) {
                        var d = b[c];
                        if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                            b = d;
                            break b
                        }
                    }
                    b = null
                }
                if (b) {
                    a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                    for (c = {}; d = a.exec(b);) c[d[1]] = kA(d[2]);
                    b = c;
                    b = b.google_ad_client ? b.google_ad_client : ""
                } else b = ""
            }
            b = b ? ? ""
        }
        return b
    };

    function pA(a, b) {
        var c = new Wz;
        c = y(c, 1, a.B).Ya(a.webPropertyCode);
        c = y(c, 3, a.l);
        b = Qc(c, 5, Xz, b);
        a.j && !a.A.has(2) && (a.A.add(2), si(a.ta, b))
    }
    var qA = class {
        constructor(a) {
            this.A = new Set;
            this.win = Wg() || window;
            this.l = U(cn);
            var b = 0 < this.l && dg() < 1 / this.l;
            this.B = (this.j = !!X(Yz(), 30, b)) ? Eg(this.win) : 0;
            this.j ? (b = this.win, b = T(zn) ? mA()(b) : nA(b)) : b = "";
            this.webPropertyCode = b;
            this.ta = a ? ? new yi
        }
    };
    var sA = (a, b, c, d, e, f, g = null, h = null, l) => {
            rA(a, new Vm(a), b, c, d, e, f, g, new Kk(a), h, l)
        },
        rA = (a, b, c, d, e, f, g, h = null, l = null, k = null, m) => {
            if (c)
                if (d) {
                    var n = Ru(d, e);
                    try {
                        const q = new tA(a, b, c, d, e, n, f, g, h, l, k, m);
                        Hp(990, () => uA(q), a)
                    } catch (q) {
                        cj() && dj(15, [q]), Um(b, Jm, Rm(Ax(zx((new Bx(0)).Ya(c), d), n).va(1), q)), pA(O(qA), Hz(new Kz, Bz(1)))
                    }
                } else Um(b, Jm, (new Bx(0)).Ya(c).va(8)), pA(O(qA), Hz(new Kz, Bz(8)));
            else Um(b, Jm, (new Bx(0)).va(9)), pA(O(qA), Hz(new Kz, Bz(9)))
        };

    function uA(a) {
        a.I.forEach(b => {
            switch (b) {
                case 0:
                    Hp(991, () => vA(a), a.l);
                    break;
                case 1:
                    Ou(new Qu(a.l, a.j, a.C));
                    break;
                case 5:
                    nt(new pt(a.l, a.j));
                    break;
                case 2:
                    wA(a);
                    break;
                case 3:
                    xA(a);
                    break;
                case 4:
                    yA(a);
                    break;
                case 6:
                    a.runStorify()
            }
        })
    }

    function vA(a) {
        (a.j ? .l() ? .l() ? ? !1) && zA(a, "p", AA(a));
        if (rm(a.j) && 1 === x(rm(a.j), 1)) {
            var b = D(rm(a.j), Cm, 6);
            b && 2 === x(b, 1) && (wp(a.l), a.F = "b")
        }
        var c = a.B.vf;
        b = Rq(a.l, c);
        if (a.B.da && Fc(a.B.da, 10)) {
            var d = Ic(D(a.B.da, Bm, 10), 1);
            null !== d && void 0 !== d && (b = Jq(a.l, d, c))
        }
        Fc(a.j, 26) && (b = Vq(b, D(a.j, Em, 26), a.l));
        c = a.B.da ? Hc(a.B.da, 6) : [];
        d = a.B.da ? E(a.B.da, Pl, 5) : [];
        const e = a.B.da ? Hc(a.B.da, 2) : [],
            f = Hp(993, () => {
                var g = a.j,
                    h = E(g, bm, 1);
                const l = a.B.da && Nz(a.B.da, 1) ? "text_image" : "text";
                var k = new gz;
                let m = Vp(h, a.l, {
                    De: k,
                    df: new Tp(l)
                });
                h.length != m.length && a.J.push(13);
                m = m.concat(lz(new mz(a.l, k)));
                h = 0;
                k = T(un);
                var n = !1;
                if (rm(g) && 1 === x(rm(g), 1)) {
                    var q = D(rm(g), Cm, 6);
                    q && (h = x(q, 2) || 0, 1 === x(q, 1) && (n = !0))
                }
                q = D(g, jm, 24) ? .F() ? .l() ? .l() || !1;
                if (k || n || q) k = iz(new jz(a.l)), n = O(ky), m = m.concat(k), n.J = !0, n.D = k.length, "n" === a.F && (a.F = D(g, jm, 24) ? .l() ? .length ? "o" : "p");
                m = m.concat(mw(g, l, a.l));
                g = D(g, jm, 24);
                return new Ay(m, a.l, h, g)
            }, a.l);
        a.A = new $y(f, a.C, a.l, {
            La: b,
            Qe: a.W,
            lb: a.B.lb,
            Me: c,
            rc: d
        }, BA(a), e);
        Xy(a.A) ? .optimization ? .ablatingThisPageview && !a.A.Ea() &&
            (wp(a.l), O(ky).C = !0, a.F = "f");
        a.G = cz(e, a.A, a.l);
        Hp(992, () => {
            var g = a.G;
            const h = new Fj;
            for (g.j.B = !0; 0 < g.l.length;) ez(g, g.l[0]) || g.j.va(5), g.l.shift();
            try {
                var l = h.resolve,
                    k = g.j.l.j.filter(Xp).j.length,
                    m = g.j.K.slice(0),
                    n = g.j;
                var q = [...n.C, ...(n.l.l.j ? .C() || [])];
                var r = new az(k, m, q, g.j.l.j.j.length, g.j.l.B.j, g.j.l.j.filter(Xp).filter(Yp).j.length, g.j.l.j.filter(Yp).j.length);
                l.call(h, new fz(r))
            } catch (t) {
                g = t, Cj(h), h.j = 2, h.A = g, Ej(h.l)
            }
            return h.l
        }, a.l).then(Hp(994, () => a.ya.bind(a), a.l), a.T.bind(a))
    }

    function wA(a) {
        const b = D(a.j, dm, 18);
        b && Uv(new Vv(a.l, new lw(a.l, a.C), b, new zt(a.l), E(a.j, bm, 1)))
    }

    function xA(a) {
        $k(xs(a.l, a.D, a.j, a.ea, {
            google_ad_client: a.C
        }), b => zs(b))
    }

    function yA(a) {
        const b = D(a.j, fm, 29);
        b && CA(a.pa, {
            win: a.l,
            webPropertyCode: a.C,
            wd: b,
            dd: D(a.j, Wl, 6) ? .l() ? ? []
        })
    }

    function BA(a) {
        const b = T(vn);
        if (!a.j.l()) return {
            Pc: b,
            Vc: !1,
            od: !1,
            ce: !1,
            pd: !1,
            Td: !1,
            uf: 0,
            Md: 0,
            Yc: DA(a),
            Bc: a.O
        };
        const c = a.j.l();
        let d = Ic(c, 8);
        return {
            Pc: b || B(c, 14, !1),
            Vc: B(c, 2, !1),
            od: B(c, 3, !1),
            ce: B(c, 4, !1),
            pd: B(c, 5, !1),
            Td: B(c, 6, !1),
            uf: null == d ? 0 : d,
            Md: x(c, 10),
            Yc: DA(a),
            Bc: a.O
        }
    }

    function DA(a) {
        return a.B.da && Fc(a.B.da, 10) ? .5 <= (Ic(D(a.B.da, Bm, 10), 1) || 0) : !0
    }

    function EA(a, b) {
        for (var c = Qm(Qm(new Bx(b.Ba), b.errors), a.J), d = b.Ja, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.D.length; g++)
                if (c.D[g] == f) break a;c.D.push(f)
        }
        c.j.pp = b.ec;
        c.j.ppp = b.hc;
        c.j.ppos = b.placementPositionDiffs;
        c.j.eatf = b.Ib;
        c.j.eatfAbg = b.Jb;
        c.j.reatf = b.qb;
        c.j.a = a.G.B.slice(0).join(",");
        c = Ax(zx(c, a.j), a.I).Ya(a.C);
        if (d = b.Cb) c.j.as_count = d.ne, c.j.d_count = d.Pe, c.j.ng_count = d.pf, c.j.am_count = d.re, c.j.atf_count = d.pe, c.j.mdns = Cx(d.jf), c.j.alldns = Cx(d.qe);
        c = c.I(b.tb);
        if (d = b.Re) {
            e = [];
            for (var h of Kj(d)) 0 <
                d.get(h).length && (f = d.get(h)[0], e.push("(" + [h, f.ye, f.Mf].join() + ")"));
            c.j.fd = e.join(",")
        }
        h = b.Lc;
        null != h && (c.j.pgh = h);
        c.j.abl = b.zd;
        c.j.rr = a.F;
        void 0 !== b.exception && Rm(c, b.exception).va(1);
        return c
    }

    function FA(a, b) {
        var c = EA(a, b);
        Um(a.D, 0 < b.errors.length || 0 < a.J.length || void 0 !== b.exception ? 0 < a.N ? Lm : Jm : 0 < a.N ? Km : Im, c);
        if (D(a.j, jm, 24)) {
            a.A.l.l.j ? .F();
            b = Xy(a.A);
            var d = O(ky);
            d.A = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.F = !0);
            d.K = !!b ? .optimization ? .availableAbg;
            b = O(ky);
            c = new Ox(c);
            b.B ? (c.l.sl = (b.B ? ? []).join("~"), c.l.ab = Ex(b.F), c.l.rr = Ex(b.J), c.l.oab = Ex(b.G), null != b.A && (c.l.sab = Ex(b.A)), b.C && (c.l.fb = Ex(b.C)), c.l.ls = Ex(b.K), Dx(c, b.l.ob()), null != b.D && (c.l.rp = Ex(b.D)),
                iy(b, c)) : (b = c, d = "irr".replace(RegExp("~", "g"), ""), b.l.e = b.l.e ? b.l.e + ("~" + d) : d);
            Um(a.D, Om, c)
        }
    }

    function GA(a, b) {
        const c = O(qA);
        if (c.j) {
            var d = new Kz,
                e = b.Ja.filter(f => null !== f);
            b = a.J.concat(b.errors, b.exception ? [1] : []).filter(f => null !== f);
            Gz(Iz(Fz(d, a.G.B.slice(0).map(f => {
                var g = new ww;
                return y(g, 1, f)
            })), e.map(f => {
                var g = new Dz;
                return y(g, 1, f)
            })), b.map(f => Bz(f)));
            D(a.j, jm, 24) && Ez(d);
            pA(c, d)
        }
    }

    function HA(a) {
        return rm(a.j) && 1 === x(rm(a.j), 1) ? !(D(rm(a.j), Cm, 6) && 1 <= (x(D(rm(a.j), Cm, 6), 3) || 0)) : !1
    }

    function IA(a) {
        if (HA(a)) {
            a = a.A;
            var b = ir({
                Ob: !0,
                Pb: !0
            }, a.j);
            a = 0 < Sy(b, a.j)
        } else a = a.A.j, b = hr({
            Qa: !1,
            Nb: !1
        }, a), a = 0 < Sy(b, a);
        return a
    }

    function JA(a) {
        if (a.j ? .l() ? .l() ? ? !1) {
            var b = AA(a);
            a.K.init(null == b ? void 0 : b, () => {
                zA(a, "s", b)
            });
            a.K.addListener(c => {
                zA(a, "d", AA(a), c);
                a.K.wa();
                if (a.j ? .l() ? .F()) {
                    a.j ? .l() ? .I();
                    try {
                        a.I ? .includes(0) && (a.N++, vA(a), zA(a, "r", AA(a), c))
                    } catch (d) {
                        zA(a, "f", AA(a), c), Um(a.D, Lm, Rm(Ax(zx((new Bx(0)).Ya(a.C), a.j), a.I).va(1), d))
                    }
                }
            })
        }
    }

    function KA(a, b, c) {
        {
            var d = Xy(a.A),
                e = b.j;
            const f = e.j,
                g = e.ec;
            let h = e.Ba,
                l = e.hc,
                k = e.errors.slice(),
                m = e.Ja.slice(),
                n = b.exception;
            const q = Uz(a.l).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.G.A && m.push(13), void 0 !== d.exception && (n = d.exception), d.numPostPlacementsPlaced && (l += d.numPostPlacementsPlaced), c = {
                Ba: h,
                ec: g,
                hc: l,
                tb: f,
                errors: e.errors.slice(),
                Ja: m,
                exception: n,
                qb: c,
                Ib: !!d.eatf,
                Jb: !!d.eatfAbg,
                zd: q
            }) : (m.push(12), a.G.A && m.push(13), c = {
                Ba: h,
                ec: g,
                hc: l,
                tb: f,
                errors: k,
                Ja: m,
                exception: n,
                qb: c,
                Ib: !1,
                Jb: !1,
                zd: q
            })
        }
        c.Cb = Ty(a.A.j);
        if (b = b.j.l) c.Re = b;
        c.Lc = P(a.l).scrollHeight;
        if (cj()) {
            d = a.A.l.j.j.slice(0);
            b = [];
            for (const f of d) {
                d = {};
                e = f.K;
                for (const g of Kj(e)) d[g] = e.get(g);
                d = {
                    anchorElement: $p(f),
                    position: f.l(),
                    clearBoth: f.J,
                    locationType: f.Ra,
                    placed: f.C,
                    placementProto: f.B ? f.B.toJSON() : null,
                    articleStructure: f.D ? f.D.toJSON() : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            dj(14, [{
                placementIdentifiers: b
            }, a.A.F, c.Cb])
        }
        return c
    }

    function LA(a, b) {
        var c = a.A.j;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.tb;
        c.numAutoAdsPlaced = b.Ba;
        c.hasAtfAd = b.qb;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.A && (a = oz(a.l, a.A, {
            Lb: -1,
            nb: -1,
            sb: -1,
            Cd: !0,
            bd: !0
        }), null != a.j ? (c.placementPositionDiffs = Az(a.j.value), b = zz(a.j.value), a = new uw, a = Qc(a, 2, vw, b), c.placementPositionDiffsReport = $c(a)) : (b = a.l.message, c.placementPositionDiffs = "E" + b, a = new uw, a = Mc(a, 1, vw, b), c.placementPositionDiffsReport = $c(a)))
    }

    function zA(a, b, c, d) {
        b = {
            r: b,
            pg_h: P(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (b.pg_hd = d);
        Tm(a.D, Nm, b)
    }

    function AA(a) {
        let b = null;
        a.j.l() && Ec(a.j.l(), 19) && (b = x(a.j.l(), 19));
        return b
    }
    class tA {
        constructor(a, b, c, d, e, f, g, h, l, k, m, n) {
            this.l = a;
            this.D = b;
            this.C = c;
            this.j = d;
            this.B = e;
            this.I = f;
            this.W = l || null;
            this.J = [];
            this.K = k;
            this.O = m;
            this.pa = g;
            this.Ka = h;
            this.N = 0;
            this.ea = n ? n : {
                url: a.location.href,
                xb: void 0
            };
            this.F = "n"
        }
        runStorify() {
            const a = D(this.j, qm, 30);
            if (a) {
                var b = D(this.j, Wl, 6) ? .l() ? ? [];
                this.Ka.runStorify(this.l, $c(a), this.C, b.map(c => $c(c)))
            }
        }
        ya(a) {
            try {
                T(ln) && wy(this.A.l);
                const b = IA(this) || HA(this) ? IA(this) : void 0;
                Hm({
                    zc: b
                }, this.l);
                JA(this);
                const c = KA(this, a, IA(this));
                Fc(this.j, 25) && Jc(D(this.j,
                    Dm, 25), 1) && LA(this, c);
                FA(this, c);
                GA(this, c);
                Ni(753, () => {
                    if (T(pn) && null != this.A) {
                        var d = oz(this.l, this.A, {
                                Lb: U(tn),
                                nb: U(sn),
                                sb: U(qn),
                                Cd: !0,
                                bd: !1
                            }),
                            e = sd(c);
                        null != d.j ? (d = Az(d.j.value), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.l.message;
                        e = EA(this, e);
                        Um(this.D, Mm, e)
                    }
                })()
            } catch (b) {
                this.T(b)
            }
        }
        T(a) {
            FA(this, {
                Ba: 0,
                tb: void 0,
                errors: [],
                Ja: [],
                exception: a,
                qb: void 0,
                Ib: void 0,
                Jb: void 0,
                Cb: void 0
            });
            GA(this, {
                Ba: 0,
                tb: void 0,
                errors: [],
                Ja: [],
                exception: a,
                qb: void 0,
                Ib: void 0,
                Jb: void 0,
                Cb: void 0
            })
        }
    };
    var MA = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function NA(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Yk(() => Xc(MA, c)) : Vk(null)
    };

    function OA(a) {
        this.j = a || {
            cookie: ""
        }
    }
    p = OA.prototype;
    p.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Ij, g = c.Gf || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Ed);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    p.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Na(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    p.remove = function(a, b, c) {
        const d = void 0 !== this.get(a);
        this.set(a, "", {
            Ed: 0,
            path: b,
            domain: c
        });
        return d
    };
    p.isEmpty = function() {
        return !this.j.cookie
    };
    p.ob = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };
    p.clear = function() {
        var a = (this.j.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Na(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };

    function PA(a, b = window) {
        if (Jc(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    }

    function QA(a) {
        return "null" !== a.origin
    }

    function RA(a, b, c) {
        b = Jc(b, 5) && QA(c) ? c.document.cookie : null;
        return null === b ? null : (new OA({
            cookie: b
        })).get(a) || ""
    };

    function SA(a, b) {
        return y(a, 5, b)
    }
    var TA = class extends K {
        constructor() {
            super(void 0)
        }
        l() {
            return Jc(this, 6)
        }
    };
    var WA = ({
        win: a,
        Rb: b,
        Ad: c = !1,
        Bd: d = !1
    }) => {
        if (!UA({
                win: a,
                Rb: b,
                Ad: c,
                Bd: d
            })) return VA(a, SA(new TA, !0));
        (b = X(Yz(), 24)) ? (b = SA(new TA, bw(b)), a = VA(a, b)) : a = new Wk(null, Error("tcunav"));
        return a
    };

    function UA({
        win: a,
        Rb: b,
        Ad: c,
        Bd: d
    }) {
        if (!(d = !d && fw(new jw(a)))) {
            if (c = !c) {
                if (b) {
                    a = NA(a);
                    if (null != a.j)
                        if ((a = a.j.value) && Ec(a, 1)) b: switch (a = x(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else Pi(806, a.l), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function VA(a, b) {
        return (a = PA(b, a)) ? Vk(a) : new Wk(null, Error("unav"))
    };
    var XA = class extends K {
        constructor(a) {
            super(a)
        }
    };
    class YA {
        constructor(a, b, c, d) {
            this.j = a;
            this.A = b;
            this.C = c;
            this.l = !1;
            this.B = d
        }
    };

    function CA(a, {
        win: b,
        webPropertyCode: c,
        wd: d,
        dd: e
    }) {
        a = rs(8, b, a.j).then(f => f.runGallerify({
            win: b,
            webPropertyCode: c,
            serializedGallerifyConfig: $c(d),
            serializedArticleStructures: e.map(g => $c(g))
        }));
        Li.Fa(927, a)
    }
    var ZA = class {
        constructor(a) {
            this.j = a
        }
    };
    var $A = {
            Jg: "google_ads_preview",
            th: "google_mc_lab",
            Kh: "google_anchor_debug",
            Jh: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            fi: "google_scr_debug",
            hi: "google_ia_debug_allow_onclick",
            Ci: "googleads",
            he: "google_pedestal_debug",
            Vi: "google_responsive_slot_preview",
            Ui: "google_responsive_dummy_ad",
            Cg: "google_auto_gallery",
            Eg: "google_auto_storify_swipeable",
            Dg: "google_auto_storify_scrollable"
        },
        aB = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };

    function bB(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = cB(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function cB(a) {
        let b = "";
        eg(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function dB() {
        var a = u.location;
        let b = !1;
        eg($A, c => {
            bB(a, c) && (b = !0)
        });
        return b
    }

    function eB(a, b) {
        switch (a) {
            case 1:
                return bB(b, "google_ia_debug");
            case 2:
                return bB(b, "google_bottom_anchor_debug");
            case 3:
                return bB(b, "google_anchor_debug") || bB(b, "googleads");
            case 4:
                return bB(b, "google_scr_debug")
        }
    };

    function fB({
        win: a,
        webPropertyCode: b,
        mb: c
    }) {
        if (bB(a.location, "google_auto_gallery")) {
            var d = new fm;
            var e = new gm;
            e = y(e, 1, !0);
            d = Pc(d, 3, e);
            CA(new ZA(c), {
                win: a,
                webPropertyCode: b,
                wd: d,
                dd: []
            })
        }
    };
    var gB = "a".charCodeAt(),
        hB = rd(gj),
        iB = rd(hj);

    function jB(a, b) {
        if (a.j + b > a.l.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.l.substring(a.j, a.j + b);
        a.j += b;
        return parseInt(c, 2)
    }

    function kB(a) {
        return String.fromCharCode(gB + jB(a, 6)) + String.fromCharCode(gB + jB(a, 6))
    }

    function lB(a) {
        let b = jB(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!jB(a, 1),
                e = jB(a, 16);
            if (d)
                for (d = jB(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function mB(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (jB(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function nB(a) {
        const b = jB(a, 16);
        return !0 === !!jB(a, 1) ? (a = lB(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : mB(a, b)
    }
    class oB {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.l = a;
            this.j = 0
        }
    };
    var qB = (a, b) => {
        try {
            var c = Vb(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new oB(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.j += 78;
            c.cmpId = jB(d, 12);
            c.cmpVersion = jB(d, 12);
            d.j += 30;
            c.tcfPolicyVersion = jB(d, 6);
            c.isServiceSpecific = !!jB(d, 1);
            c.useNonStandardStacks = !!jB(d, 1);
            c.specialFeatureOptins = pB(mB(d, 12, iB), iB);
            c.purpose = {
                consents: pB(mB(d, 24, hB), hB),
                legitimateInterests: pB(mB(d, 24, hB), hB)
            };
            c.purposeOneTreatment = !!jB(d, 1);
            c.publisherCC = kB(d);
            c.vendor = {
                consents: pB(nB(d), b),
                legitimateInterests: pB(nB(d),
                    b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const pB = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var rB = class {
        constructor(a) {
            this.key = a;
            this.defaultValue = !1;
            this.valueType = "boolean"
        }
    };

    function sB(a) {
        tB || (tB = new uB);
        const b = tB.j[a.key];
        if ("proto" === a.valueType) {
            try {
                const c = JSON.parse(b);
                if (Array.isArray(c)) return c
            } catch (c) {}
            return a.defaultValue
        }
        return typeof b === typeof a.defaultValue ? b : a.defaultValue
    }
    var vB = class {
        constructor() {
            this.j = {}
        }
    };
    var wB = class extends K {
            constructor() {
                super(void 0)
            }
        },
        xB = class extends K {
            constructor() {
                super(void 0)
            }
        };
    var yB = class extends K {
            constructor() {
                super(void 0)
            }
        },
        zB = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 24, 25];
    var AB = class {};
    var CB = class extends K {
            constructor(a) {
                super(a, -1, BB)
            }
        },
        DB = class extends K {
            constructor(a) {
                super(a)
            }
        },
        EB = class extends K {
            constructor(a) {
                super(a)
            }
        },
        BB = [7];
    var FB = new rB("45368529"),
        GB = new rB("45369554");
    var uB = class extends vB {
            constructor() {
                super();
                var a = u.__fcexpdef || "";
                try {
                    const b = JSON.parse(a)[0];
                    a = "";
                    for (let c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                    this.j = JSON.parse(a)
                } catch (b) {}
            }
        },
        tB;

    function HB(a) {
        return (a = IB(a)) ? D(a, DB, 4) : null
    }

    function IB(a) {
        if (a = (new OA(a)).get("FCCDCF", ""))
            if (sB(FB))
                if (a.startsWith("%")) try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    JB(1), b = null
                } else b = a;
                else b = a;
        else b = null;
        try {
            return b ? Xc(CB, b) : null
        } catch (c) {
            return JB(2), null
        }
    }

    function JB(a) {
        new AB;
        var b = new xB;
        a = y(b, 7, a);
        b = new wB;
        a = Pc(b, 1, a);
        b = new yB;
        Qc(b, 22, zB, a);
        sB(GB)
    };

    function KB(a) {
        a.__tcfapiPostMessageReady || LB(new MB(a))
    }

    function LB(a) {
        a.l = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.j.__tcfapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.j.addEventListener("message", a.l);
        a.j.__tcfapiPostMessageReady = !0
    }
    var MB = class {
        constructor(a) {
            this.j = a;
            this.l = null
        }
    };

    function NB(a) {
        var b = T(xn);
        a.__uspapi || a.frames.__uspapiLocator || (a = new OB(a), PB(a), b && QB(a))
    }

    function PB(a) {
        !a.C || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", Zv(a.j, "__uspapiLocator"), Fa("__uspapi", (...b) => RB(a, ...b)))
    }

    function QB(a) {
        !a.A || a.j.__tcfapi || a.j.frames.__tcfapiLocator || (a.j.__tcfapiManager = "fc", Zv(a.j, "__tcfapiLocator"), a.j.__tcfapiEventListeners = a.j.__tcfapiEventListeners || [], Fa("__tcfapi", (...b) => SB(a, ...b)), KB(a.j))
    }

    function RB(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.C
        }, !0)
    }

    function SB(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && 2 !== c) d(null, !1);
            else switch (c = a.j.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(TB(a, e, null), !0) : d(null, !1);
                    break;
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d);
                    d(TB(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function TB(a, b, c) {
        if (!a.A) return null;
        b = qB(a.A, b);
        b.addtlConsent = null != a.B ? a.B : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class OB {
        constructor(a) {
            this.j = a;
            this.l = a.document;
            this.C = (a = (a = IB(this.l)) ? D(a, EB, 5) || null : null) ? x(a, 2) : null;
            this.A = (a = HB(this.l)) && Ec(a, 1) ? x(a, 1) : null;
            this.B = (a = HB(this.l)) && Ec(a, 2) ? x(a, 2) : null
        }
    };

    function UB(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    }

    function VB(a, b) {
        a = UB(a);
        b = UB(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var WB = Promise;
    class XB {
        constructor(a) {
            this.A = a
        }
        l(a, b, c) {
            this.A.then(d => {
                d.l(a, b, c)
            })
        }
        j(a, b) {
            return this.A.then(c => c.j(a, b))
        }
    };
    class YB {
        constructor(a) {
            this.data = a
        }
    };

    function ZB(a, b) {
        $B(a, b);
        return new aC(a)
    }
    class aC {
        constructor(a) {
            this.A = a
        }
        l(a, b, c = []) {
            const d = new MessageChannel;
            $B(d.port1, b);
            this.A.postMessage(a, [d.port2].concat(c))
        }
        j(a, b) {
            return new WB(c => {
                this.l(a, c, b)
            })
        }
    }

    function $B(a, b) {
        b && (a.onmessage = c => {
            b(new YB(c.data, ZB(c.ports[0])))
        })
    };
    var dC = ({
        destination: a,
        Aa: b,
        origin: c,
        Na: d = "ZNWN1d",
        onMessage: e,
        Hd: f
    }) => bC({
        destination: a,
        We: () => b.contentWindow,
        qf: cC(c),
        Na: d,
        onMessage: e,
        Hd: f
    });
    const bC = ({
            destination: a,
            We: b,
            qf: c,
            Lj: d,
            Na: e,
            onMessage: f,
            Hd: g
        }) => {
            const h = Object.create(null);
            c.forEach(l => {
                h[l] = !0
            });
            return new XB(new WB((l, k) => {
                const m = n => {
                    if (n.source && n.source === b())
                        if (!0 !== h[n.origin]) {
                            a.removeEventListener("message", m, !1);
                            const q = c.join(", ");
                            k(Error(`Origin mismatch while establishing channel "${e}". Expected ${1===c.length?q:`one of [${q}]`}, but received ${n.origin}.`))
                        } else(n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? k(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) :
                            (l(ZB(n.ports[0], f)), g && g(n)))
                };
                a.addEventListener("message", m, !1)
            }))
        },
        cC = a => {
            a = "string" === typeof a ? [a] : a;
            const b = Object.create(null);
            a.forEach(c => {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var eC = class {
        constructor(a) {
            this.mc = a
        }
        runStorify(a, b, c, d) {
            const e = rs(11, a, this.mc).then(f => {
                f.runStorify(a, b, c, d)
            });
            Li.Fa(1021, e)
        }
    };
    var fC = (a, b, c, d, e, f, g, h = null, l) => {
        try {
            var k = a.localStorage
        } catch (t) {
            k = null
        }
        if (k) {
            if (T(on)) var m = null;
            else try {
                m = k.getItem("google_ama_config")
            } catch (t) {
                m = null
            }
            try {
                var n = m ? Xc(vm, m) : null
            } catch (t) {
                n = null
            }
            m = n
        } else m = null;
        a: {
            if (d) try {
                var q = Xc(vm, d);
                break a
            } catch (t) {
                Rz(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            q = null
        }
        if (d = q) {
            if (e) {
                q = new wm;
                Pc(d, 3, q);
                m = d.l() && x(d.l(), 13) ? x(d.l(), 13) : 1;
                y(q, 1, Date.now() + 864E5 * m);
                q = Cc(d);
                d.l() && (m = new um, n = d.l(), n = Jc(n, 23), m = y(m, 23, null == n ? void 0 : n), n = B(d.l(), 12, !1), m = y(m, 12, n), n = B(d.l(), 15, !1), m =
                    y(m, 15, n), Pc(q, 15, m));
                m = E(q, bm, 1);
                for (n = 0; n < m.length; n++) y(m[n], 11, sc);
                Pc(q, 22);
                if (T(on)) Tz(a);
                else try {
                    (e || a.localStorage).setItem("google_ama_config", $c(q))
                } catch (t) {
                    Rz(a, {
                        lserr: 1
                    })
                }
            }
            e = Pz(a, E(d, zm, 7));
            a: {
                if (e && (q = x(e, 3), m = D(d, Nl, 9), q && m)) {
                    b: {
                        m = E(m, Ll, 1);
                        for (r of m)
                            if (x(r, 1) == q) {
                                var r = D(r, Kl, 2) || null;
                                break b
                            }
                        r = null
                    }
                    if (r) break a
                }
                r = D(d, Kl, 8) || new Kl
            }
            r = {
                vf: r
            };
            e && (r.da = e);
            e && Nz(e, 3) && (r.lb = [1]);
            if (7 == c.google_pgb_reactive && (e = r.da, !e || !Jc(e, 8))) return !1;
            Vz(a, 2) && (dj(5, [d.toJSON()]), c = Sz(c), f = new ZA(f),
                g = new eC(g), e = r.da, c.google_package = e && x(e, 4) || "", sA(a, b, d, r, f, g, new ql(["google-auto-placed"], c), h, {
                    url: a.location.href,
                    xb: l
                }));
            return !0
        }
        m && (Rz(a, {
            cfg: 1,
            cl: 1
        }), Tz(a));
        return !1
    };

    function gC(a, b, c, d, e) {
        a = {
            wp: e.B,
            c: e.I,
            e: U(Pn),
            m: a,
            q: b,
            v: Math.round(c - d)
        };
        Oi("adfil-clk", a, 1)
    };
    class hC {
        constructor(a, b) {
            this.A = a;
            this.j = !1;
            this.B = b;
            this.l = this.B.ma(264, c => {
                this.j && (iC || (c = Date.now()), this.A(c), iC ? jC.call(u, this.l) : u.setTimeout(this.l, 17))
            })
        }
        start() {
            this.j || (this.j = !0, iC ? jC.call(u, this.l) : this.l(0))
        }
    }
    var jC = u.requestAnimationFrame || u.webkitRequestAnimationFrame,
        iC = !!jC && !/'iPhone'/.test(u.navigator.userAgent);

    function kC(a) {
        return a * a * a
    }

    function lC(a) {
        a = 1 - a;
        return 1 - a * a * a
    }
    class mC {
        constructor(a, b, c) {
            this.l = a;
            this.F = b;
            this.K = 100;
            this.progress = 0;
            this.j = null;
            this.J = !1;
            this.A = [];
            this.B = null;
            this.C = new hC(Ca(this.N, this), c)
        }
        N(a) {
            if (this.J) this.C.j = !1;
            else {
                null === this.j && (this.j = a);
                this.progress = (a - this.j) / this.K;
                1 <= this.progress && (this.progress = 1);
                a = this.B ? this.B(this.progress) : this.progress;
                this.A = [];
                for (let b = 0; b < this.l.length; b++) this.A.push((this.F[b] - this.l[b]) * a + this.l[b]);
                this.D();
                1 == this.progress && (this.C.j = !1, this.G())
            }
        }
        G() {}
        D() {}
        play() {
            this.J = !1;
            this.C.start()
        }
        reset(a,
            b, c) {
            this.j = null;
            this.l = a;
            this.F = b;
            this.K = c;
            this.progress = 0
        }
    };
    class nC extends mC {
        constructor(a, b, c, d, e, f) {
            super([b], [c], d);
            this.O = a;
            this.I = e ? e : null;
            this.B = f || null
        }
        D() {
            const a = {};
            a.left = this.A[0] + "px";
            dh(this.O, a)
        }
        G() {
            this.I && this.I()
        }
    };

    function oC(a) {
        M(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };
    const pC = [{
        ic: "5984482117",
        jc: "1907259590",
        Yb: 480,
        Ma: 220
    }, {
        ic: "1530485620",
        jc: "2837189651",
        Yb: 400,
        Ma: 180
    }, {
        ic: "4440010542",
        jc: "9211025045",
        Yb: 360,
        Ma: 160
    }, {
        ic: "1138882718",
        jc: "6584860439",
        Yb: -Infinity,
        Ma: 150
    }];

    function qC(a) {
        return pC.find(b => b.Yb <= a)
    };

    function rC(a, b, c) {
        const d = qC(a.document.body.clientWidth),
            e = b.j ? sC(a, b, c, d) : tC(a, b, c, d);
        e.show({
            Ac: !0
        });
        uC.push(() => {
            e.wa()
        })
    }

    function sC(a, b, c, d) {
        b = vC(a, b, c, d, a.innerWidth, "100%", "15px", "13px", "center");
        return Fu(a, b, {
            Ld: .75,
            vd: .95,
            zIndex: 100001,
            yc: "adpub-drawer-root"
        })
    }

    function tC(a, b, c, d) {
        a: {
            var e = a.document.body.clientWidth;
            var f = .9 * e;
            for (e = 768 >= e ? 3 : 4; 1 <= e; e--) {
                const g = d.Ma * e + 42;
                if (g <= f) {
                    f = g;
                    break a
                }
            }
        }
        c = vC(a, b, c, d, f, "600px", "24px", "24px", "start");
        return Ut(a, c, {
            ud: `${f}px`,
            qd: wC(b),
            jd: H(b.A, 14),
            zIndex: 100001,
            yc: "adpub-drawer-root"
        })
    }

    function vC(a, b, c, d, e, f, g, h, l) {
        var k = b.A,
            m = !!b.l,
            n = H(k, 10),
            q = n.indexOf("TERM");
        var r = T(Qn) ? T(Qn) ? {
            Wc: "pub-adfiliates-rockskipper",
            sc: "ads"
        } : void 0 : m ? {
            Wc: "vert-pla-adfiliates-e4-srp",
            sc: "plas"
        } : {
            Wc: "vert-pla-adfiliates-srp",
            sc: "plas"
        };
        var t = r;
        r = U(In);
        e = Math.max(Math.floor((e - Math.floor(e / d.Ma) * d.Ma) / 2), 5);
        var C = b.G ? "on" : "",
            w = H(k, 3),
            A = `${U(Pn)}`,
            F = H(k, 7),
            G = H(k, 6),
            J = b.B,
            I = n.substring(0, q);
        n = n.substring(q + 4);
        d = T(Qn) ? d.jc : d.ic;
        m = !m;
        q = t.Wc;
        t = t.sc;
        var ba = !!B(k, 13);
        c = Rs('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' +
            Vs(V(g)) + " " + Vs(V(h)) + "; text-align: " + Vs(V(l)) + ';">' + (m ? '<div style="max-width: ' + Vs(V(f)) + '">' + Qs(w) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + Qs(G) + "</a></div>" : "") + "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " + Vs(V(g)) + "; text-align: " + Vs(V(l)) + '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">shoppingmode</span><span style="color:#80868b"> ' +
            Qs(I) + "</span>" + Qs(c) + '<span style="color:#80868b">' + Qs(n) + '</span></div></div><div id="anno-csa" style="margin:5px ' + Vs(V(e)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');const pageOptions = {'pubId': " + Zs($s(q)) + ", 'styleId': " + Zs($s(d)) + ", 'disableCarousel': true, 'query': " + Zs($s(c)) + ", 'hl': " + Zs($s(F)) + ", 'personalizedAds': 'false', 'fexp': " + Zs($s(A)) + ", 'adfiliateWp': " + Zs($s(J)) + ", 'adtest': " +
            Zs($s(C)) + "}; const adBlock = {'container': 'anno-csa', 'linkTarget': '_blank', 'number': " + Zs($s(r)) + ", 'width': document.body.offsetWidth - 30}; _googCsa(" + Zs($s(t)) + ", pageOptions, adBlock);\x3c/script>" + (ba ? "<script>const el = document.getElementById('anno-csa'); el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>" : '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') +
            "</div>");
        b = le("body", {
            dir: wC(b) ? "rtl" : "ltr",
            lang: H(k, 7),
            style: Vd({
                margin: "0",
                height: "100%",
                "padding-top": "0px",
                overflow: T(Tn) ? null : "hidden"
            })
        }, Ms(c));
        k = a.document.createElement("IFRAME");
        M(k, {
            border: "0",
            width: "100%"
        });
        xC(a, k);
        k.srcdoc = he(b);
        return k
    }

    function xC(a, b) {
        const c = a.requestAnimationFrame;
        b.onload = () => {
            const d = b.contentDocument.body,
                e = new ResizeObserver(() => {
                    c(() => {
                        b.height = `${d.parentElement.offsetHeight}px`
                    })
                });
            e.observe(d);
            uC.push(() => {
                e.disconnect()
            })
        }
    }
    const uC = [];
    var yC = class {
        constructor(a, b, c, d, e, f) {
            this.K = a;
            this.N = b;
            this.A = c;
            this.G = d;
            this.I = e;
            this.C = f
        }
        get j() {
            return this.K
        }
        get F() {
            return this.N
        }
        get B() {
            return this.A
        }
        get D() {
            return this.G
        }
        get J() {
            return this.I
        }
        get l() {
            return this.C
        }
    };

    function zC(a, b) {
        const c = a.document.createElement("SPAN");
        c.appendChild(a.document.createTextNode("shoppingmode"));
        oC(c);
        M(c, b);
        c.className = "google-material-icons";
        return c
    };

    function AC(a) {
        return a.performance.now()
    };

    function BC(a, b, c) {
        return gv({
            L: a,
            Jc: 3E3,
            Xb: a.innerWidth > qj ? 650 : 0,
            ta: c,
            gd: b
        })
    }
    let CC = "",
        DC = "";

    function EC(a, b) {
        a.document.getElementById("google-anno-sa-qtx").innerText = H(b.A, 11).replace("TERM", CC)
    }

    function FC(a, b) {
        if (!fv(a)) {
            var c = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/);
            M(a.document.body, {
                "padding-bottom": (c && c.length ? Number(c[0]) + 45 : 45) + "px"
            });
            GC(a);
            c = document.createElement("div");
            c.id = "google-anno-sa";
            c.dir = wC(b) ? "rtl" : "ltr";
            M(c, {
                background: "white",
                "border-style": "solid",
                "border-top-left-radius": "20px",
                "border-top-right-radius": "20px",
                bottom: "0",
                height: "45px",
                position: "fixed",
                "text-align": "center",
                width: "100%",
                border: "0px",
                left: "0px",
                "box-shadow": "0px 0px 10px 0px #00000026",
                "z-index": U(Jn).toString()
            });
            c.appendChild(HC(a, b));
            c.appendChild(IC(a, b));
            c.appendChild(JC(a, b));
            a.document.getElementsByTagName("body")[0].appendChild(c)
        }
    }

    function KC(a) {
        return a.document.getElementById("google-anno-sa")
    }

    function IC(a, b) {
        const c = document.createElement("SPAN");
        oC(c);
        M(c, {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: "60px",
            right: "60px",
            display: "flex",
            "flex-direction": "row",
            "justify-content": "center",
            color: "#1967D2",
            cursor: "pointer"
        });
        var d = wC(b);
        b.j || M(c, {
            "justify-content": ""
        });
        c.appendChild(zC(a, {
            "font-family": '"Google Material Icons"',
            "font-size": "18px",
            "font-style": "normal",
            "font-weight": "normal",
            "text-decoration": "none",
            width: "15px",
            height: "15px",
            "margin-left": d ? "8px" : "",
            "margin-right": d ?
                "" : "8px",
            "margin-top": "11px",
            "line-height": "normal"
        }));
        d = document.createElement("SPAN");
        d.id = "google-anno-sa-qtx";
        d.appendChild(a.document.createTextNode(H(b.A, 11).replace("TERM", CC)));
        M(d, {
            height: "40px",
            "align-items": "center",
            "line-height": "40px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent"
        });
        const e = AC(a);
        c.addEventListener("click", f => {
            gC(DC, CC, AC(a),
                e, b);
            rC(a, b, CC);
            f.preventDefault();
            return !1
        });
        c.appendChild(d);
        return c
    }

    function HC(a, b) {
        const c = document.createElement("SPAN");
        c.id = "gda";
        const d = LC(a, b);
        c.appendChild(d);
        c.addEventListener("click", e => {
            const f = wC(b),
                g = (b.j ? f : !f) ? a.innerWidth : -a.innerWidth;
            (new nC(KC(a), 0, g, b.D, () => {}, kC)).play();
            const h = MC(b);
            h.appendChild(zC(a, {
                "font-family": '"Google Material Icons"',
                "font-size": "18px",
                "font-style": "normal",
                "font-weight": "normal",
                "text-decoration": "none",
                "margin-right": "8px",
                "margin-top": "10px",
                left: "13px",
                top: "14px",
                margin: "0",
                position: "absolute",
                "line-height": "normal"
            }));
            h.addEventListener("click", l => {
                const k = (b.j ? f : !f) ? a.innerWidth : -a.innerWidth;
                (new nC(KC(a), k, 0, b.D, () => {}, lC)).play();
                a.document.body.removeChild(h);
                l.preventDefault();
                return !1
            });
            a.document.body.appendChild(h);
            e.preventDefault();
            return !1
        });
        return c
    }

    function LC(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = wC(b);
        b = b.j ? d : !d;
        M(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            left: b ? "" : "0",
            right: b ? "0" : "",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        b = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(b);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-linecap",
            "square");
        c.setAttribute("stroke-width", "2px");
        b = c.ownerDocument;
        d = b.createElementNS("http://www.w3.org/2000/svg", "line");
        d.setAttribute("x1", "6");
        d.setAttribute("y1", "14");
        d.setAttribute("x2", "14");
        d.setAttribute("y2", "6");
        c.appendChild(d);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "6");
        b.setAttribute("y1", "6");
        b.setAttribute("x2", "14");
        b.setAttribute("y2", "14");
        c.appendChild(b);
        a.appendChild(c);
        return a
    }

    function JC(a, b) {
        const c = document.createElement("DIV");
        c.id = "google-anno-ea";
        b.j || M(c, {
            width: "60px",
            height: "45px",
            cursor: "pointer"
        });
        const d = NC(a, b);
        c.appendChild(d);
        const e = AC(a);
        c.addEventListener("click", f => {
            gC(DC, CC, AC(a), e, b);
            rC(a, b, CC);
            f.preventDefault();
            return !1
        });
        return c
    }

    function NC(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = wC(b);
        d = b.j ? d : !d;
        M(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            left: d ? "0" : "",
            right: d ? "" : "0",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        d = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(d);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-width",
            "2px");
        c.setAttribute("stroke-linecap", "square");
        b.j ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "6"), d.setAttribute("y1", "12"), d.setAttribute("x2", "10"), d.setAttribute("y2", "8"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "8"), b.setAttribute("x2", "14"), b.setAttribute("y2", "12"), c.appendChild(b)) : wC(b) ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"),
            d.setAttribute("x1", "6"), d.setAttribute("y1", "6"), d.setAttribute("x2", "10"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "10"), b.setAttribute("x2", "6"), b.setAttribute("y2", "14"), c.appendChild(b)) : (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "10"), d.setAttribute("y1", "6"), d.setAttribute("x2", "6"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg",
            "line"), b.setAttribute("x1", "6"), b.setAttribute("y1", "10"), b.setAttribute("x2", "10"), b.setAttribute("y2", "14"), c.appendChild(b));
        a.appendChild(c);
        return a
    }

    function MC(a) {
        const b = document.createElement("div");
        b.id = "gca";
        const c = wC(a);
        a = a.j ? c : !c;
        M(b, {
            position: "fixed",
            bottom: "0%",
            left: a ? "" : "0%",
            right: a ? "0%" : "",
            width: "45px",
            height: "45px",
            background: "white",
            "border-top-left-radius": "20px",
            "border-top-right-radius": "20px",
            "box-shadow": "0px 0px 10px 0px #00000026",
            color: "#1967D2",
            "z-index": U(Jn).toString()
        });
        return b
    }

    function GC(a) {
        (new MutationObserver(b => {
            b.forEach(c => {
                "attributes" === c.type && "0px" === a.document.body.style.paddingBottom && M(a.document.body, {
                    "padding-bottom": "45px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function OC(a) {
        try {
            return null !== a.location ? .href ? .match(/goog_fsa=1/)
        } catch (b) {
            return !1
        }
    };
    const PC = [255, 255, 255];

    function QC(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a) return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function RC(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = QC(b.backgroundColor);
        var c = SC(b);
        if (c) return c;
        a = (a = a.parentElement) ? RC(a) : PC;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function SC(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };
    var UC = class {
        constructor() {
            var a = U(io),
                b = U(Mn);
            this.B = a;
            this.A = b;
            this.l = new TC;
            this.j = 0
        }
    };
    class TC {
        constructor() {
            this.j = new Map;
            this.l = 0
        }
        get A() {
            return this.l
        }
    };
    var YC = class {
        constructor(a) {
            this.l = a;
            this.j = new VC;
            for (var b of this.l) {
                var c = H(b, 1);
                for (var d of E(b, WC, 2)) {
                    a = this.j;
                    var e = H(d, 1),
                        f = c,
                        g = a.B.has(f) ? a.B.get(f) : a.C++;
                    a.B.set(f, g);
                    a.A.set(g, f);
                    f = 0;
                    for (let h = 0; h < e.length; h++) {
                        const l = e.charCodeAt(h);
                        a.j[f].contains(l) || (a.j.push(new XC), a.j[a.size].D = f, a.j[a.size].G = l, a.j[f].A.set(l, a.size), a.size++);
                        f = a.j[f].A.get(l)
                    }
                    a.j[f].C = !0;
                    a.j[f].B = g;
                    a.j[f].F = a.l.length;
                    a.l.push(e.length)
                }
            }
            b = this.j;
            d = [];
            for (d.push(0); 0 < d.length;) {
                c = d.shift();
                a = b;
                e = c;
                g = a.j[e];
                if (0 === e) g.j = 0, g.l = 0;
                else if (0 === g.D) g.j = 0, g.l = g.C ? e : a.j[a.j[e].j].l;
                else {
                    g = a.j[a.j[e].D].j;
                    for (f = a.j[e].G;;) {
                        if (a.j[g].contains(f)) {
                            a.j[e].j = a.j[g].A.get(f);
                            break
                        }
                        if (0 === g) {
                            a.j[e].j = 0;
                            break
                        }
                        g = a.j[g].j
                    }
                    a.j[e].l = a.j[e].C ? e : a.j[a.j[e].j].l
                }
                for (const h of b.j[c].childNodes) d.push(h)
            }
        }
        match(a) {
            return this.j.match(a)
        }
    };
    class VC {
        constructor() {
            this.size = 1;
            this.j = [new XC];
            this.l = [];
            this.B = new Map;
            this.A = new Map;
            this.C = 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let f = 0; f < a.length; f++) {
                for (;;) {
                    var d = a.charCodeAt(f);
                    const g = this.j[b];
                    var e = String.fromCharCode(d);
                    e = e.toLowerCase() === e ? e.toUpperCase().charCodeAt(0) : e.toLowerCase().charCodeAt(0);
                    if (g.contains(d)) {
                        b = g.A.get(d);
                        break
                    }
                    if (T(On) && g.contains(e)) {
                        b = g.A.get(e);
                        break
                    }
                    if (0 === b) break;
                    b = g.j
                }
                for (d = b;;) {
                    d = this.j[d].l;
                    if (0 === d) break;
                    c.push(new ZC(f + 1 - this.l[this.j[d].F], f, this.A.get(this.j[d].B)));
                    d = this.j[d].j
                }
            }
            return c
        }
    }
    class XC {
        constructor() {
            this.A = new Map;
            this.K = !1;
            this.W = this.J = this.I = this.T = this.N = this.O = -1
        }
        contains(a) {
            return this.A.has(a)
        }
        set D(a) {
            this.O = a
        }
        get D() {
            return this.O
        }
        set G(a) {
            this.N = a
        }
        get G() {
            return this.N
        }
        set C(a) {
            this.K = a
        }
        get C() {
            return this.K
        }
        set B(a) {
            this.J = a
        }
        get B() {
            return this.J
        }
        set j(a) {
            this.T = a
        }
        get j() {
            return this.T
        }
        set l(a) {
            this.I = a
        }
        get l() {
            return this.I
        }
        set F(a) {
            this.W = a
        }
        get F() {
            return this.W
        }
        get childNodes() {
            return this.A.values()
        }
    }
    var ZC = class {
        constructor(a, b, c) {
            this.C = a;
            this.B = b;
            this.D = c
        }
        get l() {
            return this.C
        }
        get A() {
            return this.B
        }
        get j() {
            return this.D
        }
        get length() {
            return this.B - this.C
        }
    };
    const $C = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function aD(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return "" === a || $C.test(a)
        }
    };
    const bD = ["block", "inline", "inline-block", "list-item", "table-cell"];

    function cD(a, b, c, d, e, f) {
        if (AC(a) >= c.F) return !1;
        for (let I = 0; I < b.childNodes.length; I++) {
            const ba = b.childNodes[I];
            if (ba.nodeType === Node.TEXT_NODE && "" !== ba.textContent) {
                a: {
                    var g = a;
                    var h = c,
                        l = b,
                        k = ba.textContent,
                        m = d,
                        n = e,
                        q = f;
                    const sa = [];b: {
                        var r = k;
                        switch (h.C) {
                            case 1:
                                var t = Array(r.length),
                                    C = 0;
                                for (var w = 0; w < r.length; w++) $C.test(r[w]) || C++, t[w] = C;
                                r = t;
                                break b;
                            default:
                                t = Array(r.length);
                                for (w = C = 0; w < r.length;) {
                                    for (;
                                        /\s/.test(r[w]);) t[w] = C, w++;
                                    for (var A = !1; w < r.length && !/\s/.test(r[w]);) A = !0, t[w] = C, w++;
                                    A && (C++, t[w -
                                        1] = C)
                                }
                                r = t
                        }
                    }
                    if (k.includes("\u00bb")) n = [];
                    else {
                        t = n.match(k);
                        n = new Map;
                        for (const Y of t) t = Y.l, n.has(t) ? (C = n.get(t), Y.length > C.length && n.set(t, Y)) : n.set(t, Y);
                        n = Array.from(n.values())
                    }
                    C = -1;
                    for (const Y of n) {
                        t = Y.l;
                        n = Y.A;
                        if (!(w = !aD(k.charAt(t - 1), h.C) || !aD(k.charAt(n + 1), h.C))) {
                            w = q;
                            A = Y.j;
                            var F = w.l,
                                G = w.j + r[t] - U(Nn);
                            for (const va of F.j.keys()) {
                                var J = F.j.get(va);
                                let Ga = 0;
                                for (; Ga < J.length && J[Ga] < G;) Ga++;
                                F.l -= Ga;
                                0 < Ga && F.j.set(va, J.slice(Ga))
                            }
                            F = w;
                            G = F.l;
                            w = !((G.j.has(A) ? G.j.get(A).length : 0) < F.B && w.l.A < w.A)
                        }
                        if (!w) {
                            if (w = !h.l) w = g.getComputedStyle(l), A = w.fontSize.match(/\d+/), w = !(A && 12 <= Number(A[0]) && 22 >= Number(A[0]) && nb(bD, w.display));
                            if (w) {
                                q.j += r[r.length - 1];
                                g = [];
                                break a
                            }
                            C += 1;
                            C < t && sa.push(g.document.createTextNode(k.substring(C, t)));
                            C = sa;
                            w = C.push;
                            A = g;
                            F = h;
                            G = Y.j;
                            J = k.substring(t, n + 1);
                            A = F.l ? dD(A, F, G, J) : eD(A, F, G, J);
                            w.call(C, A);
                            C = m;
                            w = Y.j;
                            C.j++;
                            C.l.add(w);
                            C = q.l;
                            w = Y.j;
                            t = q.j + r[t];
                            A = [];
                            C.j.has(w) && (A = C.j.get(w));
                            A.push(t);
                            C.l++;
                            C.j.set(w, A);
                            C = n
                        }
                    }
                    h = C + 1;0 !== h && h < k.length && sa.push(g.document.createTextNode(k.substring(h)));q.j +=
                    r[r.length - 1];g = sa
                }
                if (0 < g.length && !T(ho)) {
                    for (const sa of g) b.insertBefore(sa, ba), fD(sa);
                    b.removeChild(ba);
                    I += g.length - 1
                }
            }
            else if (gD(ba, c) && !cD(a, ba, c, d, e, f)) return !1
        }
        return !0
    }

    function fD(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = SC(QC(getComputedStyle(a.parentElement).color)),
                    c = SC(QC(getComputedStyle(a).color));
                var d = RC(a);
                if (d = b && c && d ? VB(c, d) < Math.min(VB(b, d), 4.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    M(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) fD(a.children[b])
        }
    }

    function gD(a, b) {
        if (a.nodeType !== Node.ELEMENT_NODE || a.classList ? .contains("google-anno-skip")) return !1;
        switch (a.tagName ? .toUpperCase ? .()) {
            case "IFRAME":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "KBD":
            case "LABEL":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "STYLE":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
                return !1;
            case "A":
                return !!b.l;
            default:
                return !!b.l ||
                    !(a.className.toUpperCase ? .() ? .includes("CRUMB") || a.id.toUpperCase ? .() ? .includes("CRUMB"))
        }
    }

    function dD(a, b, c, d) {
        const e = a.document.createElement("SPAN");
        e.appendChild(a.document.createTextNode(d));
        (new IntersectionObserver(f => {
            f.forEach(g => {
                g.isIntersecting && g.target.textContent && (CC = c, DC = d, KC(a) ? EC(a, b) : FC(a, b))
            })
        }, {
            threshold: .98
        })).observe(e);
        return e
    }

    function eD(a, b, c, d) {
        const e = a.document.createElement("SPAN");
        hD(e);
        e.appendChild(a.document.createTextNode(d));
        const f = a.document.createElement("A");
        oC(f);
        M(f, {
            "text-decoration": "none"
        });
        we(f);
        f.className = "google-anno";
        f.appendChild(zC(a, {
            bottom: "-1px",
            "font-family": '"Google Material Icons", "goog-matfb"',
            "font-size": "90%",
            "font-style": "normal",
            "font-weight": "normal",
            position: "relative",
            "text-decoration": "none"
        }));
        f.appendChild(a.document.createTextNode("\u00a0"));
        f.appendChild(e);
        const g = AC(a);
        f.addEventListener("click", h => {
            Mi(999, () => {
                gC(d, c, AC(a), g, b);
                rC(a, b, c)
            }, l => {
                l.e = `${U(Pn)}`
            });
            h.preventDefault();
            h.stopImmediatePropagation();
            return !1
        });
        return f
    }

    function hD(a) {
        oC(a);
        M(a, {
            "text-decoration": "underline"
        });
        M(a, {
            "text-decoration-style": "dotted"
        });
        M(a, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        })
    };
    var jD = class {
        constructor() {
            this.j = 0;
            this.l = new Set;
            this.A = 0;
            this.B = this.C = null
        }
        sendGen204(a, b, c, d, e, f, g, h) {
            var l = U(Pn);
            a = a.location ? .hostname || "";
            var k = Array.from(this.B ? ? []).sort().join(","),
                m = this.C || "";
            let n = 0;
            for (const q of E(d, iD, 2)) n += E(q, WC, 2).length;
            b = {
                wp: b,
                c,
                e: l,
                h: a,
                ld: k,
                lx: m,
                m: n,
                n: this.j,
                o: f,
                p: E(d, iD, 2).length,
                t: this.l.size,
                w: this.A,
                x: Math.round(e)
            };
            Oi("adfil-imp", { ...b,
                ...(g ? {
                    sap: Number(g.j),
                    tap: Number(g.F),
                    bap: Number(g.B),
                    nsr: g.J,
                    im: Number(g.l),
                    mo: Number(g.D),
                    ae: Number(h.l),
                    fs: Number(h.j)
                } : {})
            }, 1)
        }
    };
    var kD = class {
        constructor(a, b, c) {
            this.win = a;
            this.l = b;
            this.A = c
        }
        get window() {
            return this.win
        }
        get j() {
            return this.l
        }
        get B() {
            return this.A
        }
    };
    var mD = class extends K {
            constructor(a) {
                super(a, -1, lD)
            }
        },
        WC = class extends K {
            constructor(a) {
                super(a)
            }
        },
        iD = class extends K {
            constructor(a) {
                super(a, -1, nD)
            }
        },
        lD = [2],
        nD = [2];

    function oD(a) {
        try {
            const d = a.A.match(/\bgoog_cpmi=([^&]*)/);
            if (d) {
                var b = decodeURIComponent(d[1]);
                var c = new mD(JSON.parse(b))
            } else c = null
        } catch (d) {
            c = null
        }
        c || (c = T(oo) ? a.j ? .l() ? ? null : null);
        c || (c = T(oo) ? a.aa ? .F() ? ? null : null);
        return c
    }

    function pD(a) {
        return !!a.aa && Array.isArray(Sc(a.aa)) || !!a.j && Fc(a.j, 2)
    }

    function qD(a) {
        return (a.aa ? .l() || a.j ? .F()) ? ? null
    }
    var rD = class {
        constructor(a, b, c, d) {
            this.A = a;
            this.aa = b;
            this.j = c;
            this.l = d
        }
    };
    var sD = class {
        constructor(a, b) {
            this.A = a;
            this.j = b
        }
        get l() {
            return this.A
        }
    };

    function tD(a) {
        return a ? (a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : "" : ""
    }

    function uD(a) {
        return new Set(a.map(tD).filter(b => b.length))
    };
    var vD = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.D = b;
            this.F = c;
            this.C = d
        }
        get l() {
            return this.B
        }
        get A() {
            return this.D
        }
        get G() {
            return this.F
        }
        get j() {
            return this.C
        }
    };

    function wC(a) {
        return 2 === z(a.A, 12, 0)
    }
    var xD = class {
        constructor(a, b, c, d, e, f, g = !1) {
            var h = Li;
            this.B = a;
            this.j = b;
            this.A = c;
            this.I = d;
            this.F = e;
            this.l = f;
            this.D = h;
            this.G = g;
            this.C = nb(wD, H(c, 7)) ? 1 : 0
        }
    };
    const wD = ["ja", "zh_CN", "zh_TW"];

    function yD(a, b, c) {
        try {
            wb(a.document)
        } catch (e) {
            return
        }
        const d = ig() ? null : Math.floor(20 * dg());
        null != d && zD(a, b, c, new sD(!1, d))
    }

    function zD(a, b, c, d) {
        const e = oD(b);
        if (e) {
            var f = 488 > P(a).clientWidth,
                g = AD(a, f, b),
                h = new kD(a, b, c);
            dj(17, [c, e, f, g]);
            Mi(898, () => {
                if (a.performance) {
                    var l = AC(a),
                        k = U(lo),
                        m = k ? l + k : Infinity;
                    !T(ho) && !T(Sn) && 0 < E(e, iD, 2).length && BD(a.document);
                    if (T(mo) || OC(a)) {
                        var n = Sh;
                        if (OC(a)) k = new yC(!0, !1, !1, d.l, 0, f);
                        else {
                            k = gv({
                                L: a,
                                Jc: 3E3,
                                Xb: U(Ln),
                                ta: n,
                                Ge: !0
                            });
                            var q = BC(a, 2, n);
                            n = BC(a, 1, n);
                            k = new yC(0 < k || !g.l || !g.j || 0 === g.G ? !1 : !g.A || 0 < n || f && 0 === q ? !0 : !1, 0 === q, 0 === n, d.l, k, f)
                        }
                    } else k = null;
                    CD(a, k, h, d);
                    q = new jD;
                    m = new xD(c, f, e, d.j,
                        m, k, h.j.l);
                    if ((n = a.document.body) && DD(n)) {
                        n = n.textContent || "";
                        b: switch (m.C) {
                            case 1:
                                var r = 0;
                                for (var t = n.length - 1; 0 <= t; t--) $C.test(n[t]) || r++;
                                break b;
                            default:
                                r = n.trim(), r = "" === r ? 0 : r.split(/\s+/).length
                        }
                        q.A = r;
                        t = tD(H(m.A, 7));
                        var C = a.document.documentElement;
                        C = tD(C.lang) || tD(C.getAttribute("xml:lang"));
                        if ("" !== C) var w = new Set([C]);
                        else {
                            C = a.location;
                            var A = C.host.match(/^[a-z]{2}\./i);
                            A = A ? [A[0]] : [];
                            for (w of C.pathname.split("/")) 2 === w.length && A.push(w);
                            w = uD(A);
                            w.size || (w = a.navigator, w = uD(w.languages ? .length ?
                                w.languages : [w.language]))
                        }
                        q.C = t;
                        q.B = new Set(w);
                        if (r < U(Vn)) m = "sw";
                        else if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) m = "si";
                        else if (w.has(t))
                            if (AC(a) >= m.F) m = "l";
                            else {
                                r = m.A;
                                if (0 === E(r, iD, 2).length || m.l && !m.l.j) m = !0;
                                else {
                                    m.l || (w = a.document, t = w.createElement("style"), t.textContent = ee($g `@font-face{font-family:"goog-matfb";size-adjust:17.16%;src:local("Times New Roman");}`), w.head.appendChild(t));
                                    w = new YC(E(r, iD, 2));
                                    c: {
                                        r = w.j;t = 0;
                                        for (C = 0; C < n.length; C++) {
                                            for (;;) {
                                                A = n.charCodeAt(C);
                                                if (r.j[t].contains(A)) {
                                                    t = r.j[t].A.get(A);
                                                    break
                                                }
                                                if (0 === t) break;
                                                t = r.j[t].j
                                            }
                                            for (A = t;;) {
                                                A = r.j[A].l;
                                                if (0 === A) break;
                                                r = new ZC(C + 1 - r.l[r.j[A].F], C, r.A.get(r.j[A].B));
                                                break c
                                            }
                                        }
                                        r = void 0
                                    }
                                    r ? (m.l && T(fo) && (n = n.substring(r.l, r.A), CC = r.j, DC = n, KC(a) ? EC(a, m) : FC(a, m)), n = new UC, m = cD(a, a.document.body, m, q, w, n)) : m = !0
                                }
                                m = m ? "a" : "p"
                            }
                        else m = "sl"
                    } else m = "se";
                    l = AC(a) - l;
                    !T(ho) && 0 < q.j && (B(e, 13) || (n = a.document, w = n.createElement("LINK"), Be(w, N `https://www.google.com/adsense/search/ads.js`, "prefetch"), w.as = "script", w.fetchPriority =
                        "low", n.head.appendChild(w)), T(Sn) && BD(a.document));
                    q.sendGen204(a, c, d.j, e, l, m, k, g);
                    dj(18, [d.j, l, m, q])
                }
            }, l => {
                l.e = `${U(Pn)}`
            })
        }
    }

    function CD(a, b, c, d) {
        T(mo) && b && !b.j && (a = kv(a)) && Gg(a, () => {
            zD(c.window, c.j, c.B, new sD(!0, d.j))
        })
    }

    function AD(a, b, c) {
        if (!T(mo) && !OC(a)) return null;
        a = pD(c) && B(qD(c), 5);
        b = pD(c) && B(qD(c), 6) && (b || !B(qD(c), 7));
        const d = E(oD(c), iD, 2).length;
        c = pD(c) && B(qD(c), 8);
        return new vD(a, b, d, c)
    }

    function DD(a) {
        try {
            wb(new ResizeObserver(() => {}))
        } catch {
            return !1
        }
        return a.classList && void 0 !== a.classList.contains && void 0 !== a.attachShadow
    }

    function BD(a) {
        const b = a.createElement("LINK"),
            c = T(no) ? N `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700&text=shoppingmode` : N `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700`;
        Be(b, c, "stylesheet");
        a.head.appendChild(b)
    };
    var FD = a => {
        const b = a.H;
        null == b.google_ad_output && (b.google_ad_output = "html");
        if (null != b.google_ad_client) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!kf.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = ED(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = ED(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = ED(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = ED(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = ED(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = ED(a, b.google_color_line, c))
    };

    function ED(a, b, c) {
        a.j |= 2;
        return b[c % b.length]
    };

    function GD(a, b) {
        var c = Li,
            d;
        var e;
        d = (e = (e = Rg()) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new Ng(d.left, d.top, d.width, d.height) : null) ? new tf(e.left, e.top) : (d = Ug()) && wa(d.rootBounds) ? new tf(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new tf(0, 0),
                g = If(Df(b));
            if (xb(g, "parent")) {
                do {
                    if (g == a) var h = jh(b);
                    else {
                        var l = ih(b);
                        h = new tf(l.left, l.top)
                    }
                    d =
                        h;
                    f.x += d.x;
                    f.y += d.y
                } while (g && g != a && g != g.parent && (b = g.frameElement) && (g = g.parent))
            }
            return f
        } catch (k) {
            return c.la(888, k), new tf(-12245933, -12245933)
        }
    };
    var HD = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var JD = class extends K {
            constructor(a) {
                super(a, -1, ID)
            }
            l() {
                return Hc(this, 1)
            }
        },
        ID = [1];
    var LD = class extends K {
            constructor(a) {
                super(a, -1, KD)
            }
            F() {
                return D(this, mD, 11)
            }
            l() {
                return Uc(this, HD, 13, Tc)
            }
        },
        KD = [19],
        Tc = [13, 14];

    function MD(a, b) {
        b && !a.j && (a.j = b.split(":").find(c => 0 === c.indexOf("ID=")) || null)
    }
    var ND = class {
            constructor() {
                this.j = null;
                this.l = {
                    [pi]: {},
                    [qi]: {},
                    [ri]: {}
                };
                const a = b => this.j ? gg(`${b} + ${this.j}`) % 1E3 : void 0;
                this.l[qi] = {
                    [9]: (...b) => a(b[0])
                }
            }
        },
        OD;
    let PD = void 0;

    function QD() {
        gd(PD, ed);
        return PD
    };

    function RD(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : od(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function SD(a) {
        T(an) && Oi("abg_adsensesettings_lserr", {
            s: a,
            g: T(bn),
            c: QD(),
            r: .01
        }, .01)
    };
    var TD = (a = u) => a.ggeac || (a.ggeac = {});

    function UD(a = document) {
        return !!a.featurePolicy ? .allowedFeatures().includes("browsing-topics")
    };
    class VD {
        constructor() {
            this.j = () => {}
        }
    };
    var XD = (a = TD()) => {
            Ji(O(Ki), a);
            WD(a);
            O(VD).j = Ii(Hi, a);
            O(Ro).l()
        },
        WD = a => {
            const b = O(Ro);
            b.A = (c, d) => Ii(Di, a, () => !1)(c, d, 1);
            b.B = (c, d) => Ii(Ei, a, () => 0)(c, d, 1);
            b.j = (c, d) => Ii(Fi, a, () => "")(c, d, 1);
            b.C = (c, d) => Ii(Gi, a, () => [])(c, d, 1);
            b.l = () => {
                Ii(Ai, a)(1)
            }
        };
    var YD = a => {
        const b = O(Ki).l();
        a = Uz(a);
        a.eids || (a.eids = []);
        return b.concat(a.eids).join(",")
    };

    function ZD(a, b, c) {
        return c ? RA(b, c, a.j) : null
    }

    function $D(a, b, c, d) {
        if (d) {
            var e = {
                Ed: x(c, 2) - Date.now() / 1E3,
                path: x(c, 3),
                domain: x(c, 4),
                Gf: !1
            };
            a = a.j;
            Jc(d, 5) && QA(a) && (new OA(a.document)).set(b, x(c, 1), e)
        }
    }

    function aE(a, b, c) {
        if (c && RA(b, c, a.j))
            for (const e of bE(a.j.location.hostname)) {
                var d = a.j;
                Jc(c, 5) && QA(d) && (new OA(d.document)).remove(b, "/", e)
            }
    }
    var cE = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };

    function bE(a) {
        if ("localhost" === a) return ["localhost"];
        a = a.split(".");
        if (2 > a.length) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function dE(a, b, c) {
        return Ni(629, d => {
            delete a._gfp_s_;
            if (!d) throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d) return Promise.resolve();
            if (0 === d.length) throw Error("Invalid JSONP response");
            for (const f of d) {
                var e = f._domain_;
                const g = f._value_,
                    h = f._expires_,
                    l = f._path_;
                d = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof l || "number" !== typeof d || !g) throw Error("Invalid JSONP response");
                e = hf(gf(ff(ef(new jf, g), h), l), e);
                switch (d) {
                    case 1:
                        $D(c, "__gads",
                            e, b);
                        break;
                    case 2:
                        T(Gn) && $D(c, "__gpi", e, b)
                }
            }
            return Promise.resolve()
        })
    }

    function eE(a, b, c) {
        let d = void 0;
        if (0 === a.l) {
            if (ZD(a, "__gads", b)) var e = !0;
            else if (e = a.j, Jc(b, 5) && QA(e) && (new OA(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" === RA("GoogleAdServingTest", b, a.j)) {
                var f = a.j;
                Jc(b, 5) && QA(f) && (new OA(f.document)).remove("GoogleAdServingTest", void 0, void 0)
            }
            a.l = e ? 2 : 1
        }
        2 === a.l && (d = dE(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function fE(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = ZD(b, "__gads", a);
        e && (d.cookie = e);
        T(Gn) && ((e = ZD(b, "__gpi", a)) && !e.includes("&") && (d.gpic = e), d.gpid_exp = "1");
        const f = Dd(Gd(kd(ld("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = eE(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = l => {
                g(l).then(h)
            };
            ag(c.document, f)
        }) : Promise.resolve()
    }
    var gE = (a, b, c) => {
        "_gfp_p_" in b || (b._gfp_p_ = !1, "_gfp_a_" in b || (b._gfp_a_ = !0));
        const d = new cE(b);
        c = b.google_ad_client || c;
        var e = b._gfp_a_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
        if (e) {
            e = b._gfp_p_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
            e ? Promise.resolve() : fE(a, d, b, c)
        } else Promise.resolve();
        a = ZD(d, "__gads", a) || "";
        OD || (OD = new ND);
        b = OD;
        MD(b, a);
        a = b.l;
        O(VD).j(a);
        O(Ki).j(20);
        O(Ki).j(17)
    };
    var ni = {
        wj: 0,
        sj: 1,
        qj: 2,
        rj: 3,
        uj: 5,
        vj: 6,
        tj: 7
    };
    var hE = class {
        constructor(a) {
            this.L = a.L;
            this.pubWin = a.pubWin;
            this.H = a.H;
            this.aa = a.aa;
            this.ca = a.ca;
            this.Sa = a.Sa;
            this.innerInsElement = a.innerInsElement;
            this.outerInsElement = a.outerInsElement;
            this.B = -1;
            this.j = 0;
            this.l = this.J = null;
            this.I = this.F = 0;
            this.A = [];
            this.kb = this.D = "";
            this.C = this.G = null
        }
    };

    function iE(a) {
        T(jo) && (a.easpf = !0, a.easpi = T(oo), T(mo) && (a.easpa = !0), a.asntp = U($n), a.asntpv = U(eo), a.asntpl = U(bo), a.asntpm = U(co), a.asntpc = U(ao), a.asna = U(Wn), a.asnd = U(Xn), a.asnp = U(Yn), a.asns = U(Zn), a.asmat = U(Un), a.asptt = U(go))
    };
    var jE = (a, b) => gv({
        L: a,
        Jc: 3E3,
        Xb: a.innerWidth > qj ? 650 : 0,
        ta: Sh,
        gd: b
    });
    var kE = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= rj(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var lE = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= rj(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var mE = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (c) {
                b |= 32
            }
            return b
        },
        nE = (a, b, c) => {
            let d = 0;
            try {
                d |= rj(a, 2500);
                if (T(Ao)) {
                    const g = P(a).clientHeight;
                    d |= g ? 320 > g ? 2097152 : 0 : 1073741824
                }
                d |= sj(a);
                var e;
                if (e = 0 < b) {
                    var f = Gw(c, b);
                    e = !(f && 1 > f.length)
                }
                e && (d |= 134217728)
            } catch (g) {
                d |= 32
            }
            return d
        };

    function oE(a, b = null) {
        if (!T(Do)) return 32;
        let c = a != a.top ? 512 : 0;
        cv(a.navigator ? .userAgent) && (c |= 1048576);
        const d = a.innerWidth;
        1200 > d && (c |= 65536);
        const e = a.innerHeight;
        650 > e && (c |= 2097152);
        b && 0 === c && (pE({
            L: a,
            Vd: 1,
            position: 3 === b ? "left" : "right",
            R: d,
            Y: e,
            Da: new Set,
            minWidth: 120,
            minHeight: 500
        }) || (c |= 16));
        return c
    }

    function qE(a) {
        if (0 !== oE(a)) return "";
        const b = [],
            c = a.innerWidth,
            d = a.innerHeight;
        for (const e of ["left", "right"]) {
            const f = pE({
                L: a,
                Vd: 1,
                position: e,
                R: c,
                Y: d,
                Da: new Set,
                minWidth: 120,
                minHeight: 500
            });
            f && b.push(`${f.width}x${f.height}_${String(e).charAt(0)}`)
        }
        return b.join("|")
    }

    function rE(a, b) {
        return null !== Sf(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c))
    }

    function sE(a, b) {
        return Sf(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position)
    }

    function tE(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function uE(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function vE(a) {
        return `${a.position}-${uE(a.R)}x${uE(a.Y)}-${uE(a.scrollY+a.Xa)}Y`
    }

    function wE(a) {
        return `f-${vE({position:a.position,Xa:a.Xa,scrollY:0,R:a.R,Y:a.Y})}`
    }

    function xE(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return Infinity !== a ? a : 0
    }

    function yE(a, b, c) {
        const d = nj(c.L).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.Y),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.R);
                for (var l = .3 * c.R; f <= g; f += 10) {
                    if (0 < e && h < l) {
                        var k = wE({
                            position: "left",
                            Xa: f,
                            R: c.R,
                            Y: c.Y
                        });
                        b.set(k, xE(b.get(k), h))
                    }
                    if (h < c.R && e > c.R - l) {
                        k = wE({
                            position: "right",
                            Xa: f,
                            R: c.R,
                            Y: c.Y
                        });
                        const m = c.R - e;
                        b.set(k, xE(b.get(k), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function pE(a) {
        var b = nj(a.L).sideRailAvailableSpace,
            c = {
                L: a.L,
                R: a.R,
                Y: a.Y,
                Da: a.Da
            },
            d = `f-${uE(c.R)}x${uE(c.Y)}`;
        if (!b.has(d)) {
            b.set(d, 0);
            nj(c.L).sideRailProcessedFixedElements.clear();
            d = new Set([...Array.from(c.L.document.querySelectorAll("[data-anchor-status]")), ...c.Da]);
            for (var e of tE(c.L)) rE(e, d) || yE(e, b, c)
        }
        c = [];
        d = .9 * a.Y;
        var f = yj(a.L),
            g = e = (a.Y - d) / 2,
            h = d / 11;
        for (var l = 0; 12 > l; l++) {
            var k = c,
                m = k.push;
            a: {
                var n = g;
                var q = a.position,
                    r = b,
                    t = {
                        L: a.L,
                        R: a.R,
                        Y: a.Y,
                        Da: a.Da
                    };
                const w = wE({
                        position: q,
                        Xa: n,
                        R: t.R,
                        Y: t.Y
                    }),
                    A = vE({
                        position: q,
                        Xa: n,
                        scrollY: f,
                        R: t.R,
                        Y: t.Y
                    });
                if (r.has(A)) {
                    n = xE(r.get(w), r.get(A));
                    break a
                }
                const F = "left" === q ? 20 : t.R - 20;
                let G = F;q = .3 * t.R / 7 * ("left" === q ? 1 : -1);
                for (let J = 0; 8 > J; J++) {
                    const I = ov(t.L.document, Math.round(G), Math.round(n));
                    var C = rE(I, t.Da);
                    const ba = sE(I, t.L);
                    if (!C && null !== ba) {
                        yE(ba, r, t);
                        r.delete(A);
                        break
                    }
                    C || (C = I.offsetHeight >= .25 * t.Y, C = I.offsetWidth >= .9 * t.R && C);
                    if (C) r.set(A, Math.round(Math.abs(G - F) + 20));
                    else if (G !== F) G -= q, q /= 2;
                    else {
                        r.set(A, 0);
                        break
                    }
                    G += q
                }
                n = xE(r.get(w), r.get(A))
            }
            m.call(k, n);
            g += h
        }
        b = a.Vd;
        f = a.position;
        d = Math.round(d / 12);
        e = Math.round(e);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (k = 0; k < c.length; k++) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[k];) m.pop();
            h[k] = 0 === m.length ? 0 : m[m.length - 1] + 1;
            m.push(k)
        }
        m = [];
        l = c.length - 1;
        k = Array(c.length).fill(0);
        for (n = l; 0 <= n; n--) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[n];) m.pop();
            k[n] = 0 === m.length ? l : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (l = 0; l < c.length; l++)
            if (n = {
                    position: f,
                    width: Math.round(c[l]),
                    height: Math.round((k[l] - h[l] + 1) * d),
                    Kj: e + h[l] * d
                }, r = n.width >= g && n.height >= a, 0 === b && r) {
                m = n;
                break
            } else 1 === b && r && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    };
    const zE = {
        [27]: 512,
        [26]: 128
    };
    var AE = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === jE(a, c);
                case 3:
                case 4:
                    return 0 === oE(a, c);
                case 8:
                    return b = "on" === b.google_adtest || bB(a.location, "google_ia_debug") ? -1 : 3600, 0 == (mE(a) | nE(a, b, d));
                case 9:
                    return b = !("on" === b.google_adtest || bB(a.location, "google_scr_debug")), !Hw(a, b, d);
                case 30:
                    return 0 == Ky(a);
                case 26:
                    return 0 == lE(a);
                case 27:
                    return 0 === kE(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        BE = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return jE(a, c);
                case 3:
                case 4:
                    return oE(a,
                        c);
                case 8:
                    return b = "on" === b.google_adtest || bB(a.location, "google_ia_debug") ? -1 : 3600, mE(a) | nE(a, b, d);
                case 9:
                    return Hw(a, !("on" === b.google_adtest || bB(a.location, "google_scr_debug")), d);
                case 16:
                    return kp(b, a) ? 0 : 8388608;
                case 30:
                    return Ky(a);
                case 26:
                    return lE(a);
                case 27:
                    return kE(a);
                default:
                    return 32
            }
        },
        CE = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!pd(d)) return !1;
            a = $f(a);
            if (!a || !AE(a, b, d, c)) return !1;
            b = nj(a);
            if (wj(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        EE = a => {
            const b =
                a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && DE(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b
        },
        FE = a => {
            if (!a.hash) return null;
            let b = null;
            eg($A, c => {
                !b && bB(a, c) && (b = aB[c])
            });
            return b
        },
        HE = (a, b) => {
            const c = nj(a).tagSpecificState[1] || null;
            null != c && null == c.debugCard && eg(zw, d => {
                !c.debugCardRequested && "number" === typeof d && eB(d, a.location) && (c.debugCardRequested = !0, GE(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        JE = (a, b, c) => {
            if (!b) return null;
            const d = nj(b);
            let e = 0;
            eg(qd, f => {
                const g = zE[f];
                g && 0 ===
                    IE(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        KE = (a, b, c) => {
            const d = [];
            eg(qd, e => {
                if (T(Do) || 3 !== e && 4 !== e) {
                    var f = IE(b, a, e, c);
                    0 !== f && d.push(e + ":" + f)
                }
            });
            return d.join(",") || null
        },
        LE = a => {
            const b = [],
                c = {};
            eg(a, (d, e) => {
                if ((e = lj[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        ME = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        IE = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = nj(b),
                g = wj(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            eg(f.reactiveTypeDisabledByPublisher, (l, k) => {
                String(c) === String(k) && (h = !0)
            });
            h && FE(b.location) !== c && (e |= 128);
            return e | BE(b, a, c, d)
        },
        NE = (a, b) => {
            if (a) {
                var c = nj(a),
                    d = {};
                eg(b, (e, f) => {
                    (f = lj[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                eg(qd, e => {
                    d[mj[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        OE = (a, b, c) => {
            b = Li.ma(b, c);
            return rs(1, window, Dd(ch(a), O(Ro).j(gn.j, gn.defaultValue) ? {
                bust: O(Ro).j(gn.j, gn.defaultValue)
            } : {})).then(b)
        },
        GE = (a, b, c) => {
            c = Li.ma(212, c);
            rs(3, a, ch(b)).then(c)
        };
    const PE = a => {
        a.adsbygoogle || (a.adsbygoogle = [], ag(a.document, ch(N `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`)))
    };
    var QE = (a, b) => {
            L(a, "load", () => {
                PE(a);
                a.adsbygoogle.push(b)
            })
        },
        RE = a => {
            a = a.google_reactive_ad_format;
            return pd(a) ? "" + a : null
        },
        DE = a => !!RE(a) || null != a.google_pgb_reactive,
        SE = a => {
            a = RE(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a
        };
    var TE = a => "number" === typeof a.google_reactive_sra_index,
        YE = (a, b, c) => {
            const d = b.L || b.pubWin,
                e = b.H;
            e.google_reactive_plat = KE(d, e, c);
            var f = LE(a);
            f && (e.google_reactive_plaf = f);
            (f = ME(a)) && (e.google_reactive_fba = f);
            (f = qE(d)) && (e.google_plas = f);
            UE(a, e);
            f = FE(b.pubWin.location);
            VE(a, f, e);
            f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
            iE(e);
            T(En) && (e.fsapi = !0);
            Vg() || $o(b.pubWin.top);
            f = Si(b.pubWin, "rsrai", Ni(429, (g, h) => WE(b, d, e.google_ad_client, a, g, h, c)), Li.ma(430, Da(Bj, b.pubWin, 431, Sh)));
            b.A.push(f);
            nj(d).wasReactiveTagRequestSent = !0;
            XE(b, a, c)
        };
    const XE = (a, b, c) => {
        const d = a.H,
            e = wa(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = Si(a.pubWin, "apcnf", Ni(353, (f, g) => {
            var h = a.pubWin,
                l = d.google_ad_client,
                k = ch(a.ca.mb),
                m = ch(a.ca.mc),
                n = ch(a.ca.xb);
            return Bg(g.origin) ? fC(h, l, e, f.config, c, k, m, null, n) : !1
        }), Li.ma(353, Da(Bj, a.pubWin, 353, Sh)));
        a.A.push(b)
    };
    var WE = (a, b, c, d, e, f, g) => {
            if (!Bg(f.origin)) return !1;
            f = e.data;
            if (!Array.isArray(f)) return !1;
            if (!Vz(b, 1)) return !0;
            f && dj(6, [f]);
            e = e.amaConfig;
            const h = [],
                l = [],
                k = nj(b);
            let m = null;
            for (let n = 0; n < f.length; n++) {
                if (!f[n]) continue;
                const q = f[n],
                    r = q.adFormat;
                k && q.enabledInAsfe && (k.reactiveTypeEnabledInAsfe[r] = !0);
                if (!q.noCreative) {
                    q.google_reactive_sra_index = n;
                    if (9 === r && e) {
                        q.pubVars = Object.assign(q.pubVars || {}, ZE(d, q));
                        const t = new Iw;
                        if (Cw(t, q)) {
                            m = t;
                            continue
                        }
                    }
                    h.push(q);
                    l.push(r)
                }
            }
            h.length && (Oi("rasra::pm", {
                rt: l.join(","),
                c
            }, .1), OE(a.ca.Pd, 522, n => {
                $E(h, b, c, n, d, g)
            }));
            e && fC(b, c, d, e, g, ch(a.ca.mb), ch(a.ca.mc), m);
            return !0
        },
        ZE = (a, b) => {
            const c = b.adFormat,
                d = b.adKey;
            delete b.adKey;
            const e = {};
            a = a.page_level_pubvars;
            wa(a) && Object.assign(e, a);
            e.google_ad_unit_key = d;
            e.google_reactive_sra_index = b.google_reactive_sra_index;
            30 === c && (e.google_reactive_ad_format = 30);
            e.google_pgb_reactive = e.google_pgb_reactive || 5;
            return b.pubVars = e
        },
        $E = (a, b, c, d, e, f) => {
            const g = [];
            for (let h = 0; h < a.length; h++) {
                const l = a[h],
                    k = l.adFormat,
                    m = l.adKey,
                    n = d.configProcessorForAdFormat(k);
                k && n && m ? (l.pubVars = ZE(e, l), delete l.google_reactive_sra_index, g.push(k), Mi(466, () => n.verifyAndProcessConfig(b, l, f))) : Oi("rasra::ivc", {
                    af: k,
                    ak: m,
                    c
                }, .1)
            }
            Oi("rasra::pr", {
                rt: g.join(","),
                c
            }, .1)
        },
        UE = (a, b) => {
            const c = [];
            let d = !1;
            eg(lj, (e, f) => {
                let g;
                if (a.hasOwnProperty(f)) {
                    const h = a[f];
                    wa(h) && h.google_ad_channel && (g = String(h.google_ad_channel))
                }
                f = lj[f] - 1;
                c[f] && "+" != c[f] || (c[f] = g ? g.replace(/,/g, "+") : "+", d = d || g)
            });
            d && (b.google_reactive_sra_channels = c.join(","))
        },
        VE = (a, b, c) => {
            const d = a.page_level_pubvars;
            !c.google_adtest &&
                ("on" == a.google_adtest || d && "on" == d.google_adtest || b) && (c.google_adtest = "on")
        };
    wb("script");
    var aF = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function bF(a, b) {
        if (!kp(b, a)) return () => {};
        a = cF(b, a);
        if (!a) return () => {};
        const c = gA();
        b = sd(b);
        const d = {
            Ga: a,
            H: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => ob(c, d)
    }

    function cF(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !pp.test(a.className);) a = a.parentElement;
        return a
    }

    function dF(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {},
                l = a.childNodes[g];
            var c = l.style,
                d = h,
                e = ["width", "height"];
            for (let k = 0; k < e.length; k++) {
                const m = "google_ad_" + e[k];
                if (!d.hasOwnProperty(m)) {
                    var f = ng(c[e[k]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return l
        }
        return null
    }

    function eF(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function fF(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.j != c) {
            a.j = c;
            a = gA();
            for (const d of a)
                if (d.Ga.offsetWidth != d.offsetWidth || d.H.google_full_width_responsive_allowed) d.offsetWidth = d.Ga.offsetWidth, Mi(467, () => {
                    var e = d.Ga,
                        f = d.H;
                    const g = dF(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const h = dF(e, f);
                    !h && g && 1 == e.childNodes.length ? (eF(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", e.dataset.adsbygoogleStatus = "reserved", e.className += " adsbygoogle-noablate", PE(b), b.adsbygoogle.push({
                            element: e,
                            params: f
                        })) : h && g ? h !=
                        g && (eF(g, !1), eF(h, !0)) : Oi("auto_size_refresh", {
                            context: "showOrHideElm",
                            url: b.location.href,
                            nodes: e.childNodes.length
                        })
                })
        }
    }
    var gF = class extends Qj {
        constructor() {
            super(...arguments);
            this.j = null
        }
        init(a) {
            const b = Yz();
            if (!X(b, 27, !1)) {
                bA(b, 27, !0);
                this.j = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => fF(this, a);
                L(a, "resize", c);
                Rj(this, () => {
                    Qe(a, "resize", c)
                })
            }
        }
    };
    var hF = class {
        constructor(a, b, c) {
            this.L = a;
            this.Ga = b;
            this.H = c;
            this.j = null;
            this.l = this.A = 0
        }
        B() {
            10 <= ++this.A && u.clearInterval(this.j);
            var a = np(this.L, this.Ga);
            a = op(this.L, this.Ga, a);
            const b = jp(this.Ga, this.L);
            null != b && 0 === b.x || u.clearInterval(this.j);
            a && (this.l++, Oi("rspv:al", {
                aligns: this.l,
                attempt: this.A,
                client: this.H.google_ad_client,
                eoffs: String(null != b ? b.x : null),
                eids: YD(this.H),
                slot: this.H.google_ad_slot,
                url: this.H.google_page_url
            }, .01))
        }
    };

    function iF(a, b) {
        var c = SA(a, bw(b));
        c = y(c, 2, b.tcString);
        c = y(c, 4, b.addtlConsent || "");
        y(c, 7, b.internalErrorState);
        c = !dw(b);
        y(a, 9, c);
        null != b.gdprApplies && y(a, 3, b.gdprApplies)
    }

    function jF(a) {
        const b = new jw(a.pubWin, -1, T(Io));
        if (!fw(b)) return Promise.resolve(null);
        const c = Yz(),
            d = X(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = X(c, 25, []);
            g.push(f);
            bA(c, 25, g)
        });
        d || null === d || (bA(c, 24, null), b.addEventListener(f => {
            if (aw(f)) {
                bA(c, 24, f);
                iF(a.l, f);
                for (const g of X(c, 25, [])) g.resolve(f);
                bA(c, 25, [])
            } else bA(c, 24, null)
        }));
        return e
    };

    function kF(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : 0 <= a ? a : "-M"
    };
    var mF = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => lF(d));
        return Si(a, "adpnt", (e, f) => {
            if (xj(f, c.contentWindow)) {
                e = Aj(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e);
                    a.googletag ? ? (a.googletag = {
                        cmd: []
                    });
                    var g = a.googletag.queryIds ? ? [];
                    g.push(e);
                    500 < g.length && g.shift();
                    a.googletag.queryIds = g
                } catch {}
                d.dataset.adStatus && Oi("adsense_late_fill", {
                    status: d.dataset.adStatus
                });
                d.dataset.adStatus = "filled";
                g = !0
            } else g = !1;
            return g
        })
    };

    function lF(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function nF(a, b, c) {
        try {
            if (!Bg(c.origin) || a.j && !xj(c, a.j.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Ka[d]) && a.T.vb(168, () => {
            e.call(a, b, c)
        })
    }
    class oF extends Qj {
        constructor(a, b) {
            var c = Li,
                d = Sh;
            super();
            this.A = a;
            this.j = b;
            this.T = c;
            this.ta = d;
            this.Ka = {};
            this.ke = this.T.ma(168, (e, f) => void nF(this, e, f));
            this.Ce = this.T.ma(169, (e, f) => Bj(this.A, "ras::xsf", this.ta, e, f));
            this.ea = [];
            this.pa(this.Ka);
            this.ea.push(Ri(this.A, "sth", this.ke, this.Ce))
        }
        l() {
            for (const a of this.ea) a();
            this.ea.length = 0;
            super.l()
        }
    };
    class pF extends oF {
        constructor(a, b = null) {
            super(a, b);
            this.A = a
        }
    };
    var qF = class extends pF {
        constructor(a, b) {
            super(a, b);
            this.B = () => {};
            this.j && L(this.j, "load", this.B)
        }
        l() {
            this.j && Qe(this.j, "load", this.B);
            super.l();
            this.j = null
        }
        pa(a) {
            a["adsense-labs"] = b => {
                if (b = Aj(b).settings) try {
                    var c = new df(JSON.parse(b));
                    if (Ec(c, 1)) {
                        var d = this.A,
                            e = x(c, 1) || "";
                        if (T(bn) ? null != WA({
                                win: d,
                                Rb: QD()
                            }).j : 1) {
                            if (T(bn)) {
                                var f = WA({
                                    win: d,
                                    Rb: QD()
                                });
                                if (null != f.j) {
                                    SD("ok");
                                    var g = RD(f.j.value)
                                } else SD(f.l.message), g = {}
                            } else g = RD(d.localStorage);
                            null !== c && (g[e] = c.toJSON());
                            try {
                                d.localStorage.setItem("google_adsense_settings",
                                    JSON.stringify(g))
                            } catch (h) {}
                        }
                    }
                } catch (h) {}
            }
        }
    };

    function rF(a) {
        a.B = a.D;
        a.J.style.transition = "height 500ms";
        a.C.style.transition = "height 500ms";
        a.G.style.transition = "height 500ms";
        a.j.style.transition = "height 500ms";
        sF(a)
    }

    function tF(a, b) {
        (a.j.contentWindow || a.j.contentWindow).postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function sF(a) {
        const b = `rect(0px, ${a.j.width}px, ${a.B}px, 0px)`;
        a.j.style.clip = b;
        a.G.style.clip = b;
        a.j.setAttribute("height", a.B);
        a.j.style.height = a.B + "px";
        a.G.setAttribute("height", a.B);
        a.G.style.height = a.B + "px";
        a.C.style.height = a.B + "px";
        a.J.style.height = a.B + "px"
    }

    function uF(a, b) {
        b = lg(b.r_nh);
        a.D = null == b ? 0 : b;
        if (0 >= a.D) return "1";
        a.N = jh(a.J).y;
        a.K = yj(a.A);
        if (a.N + a.B < a.K) return "2";
        if (a.N > tj(a.A) - a.A.innerHeight) return "3";
        b = a.K;
        a.j.setAttribute("height", a.D);
        a.j.style.height = a.D + "px";
        a.G.style.overflow = "hidden";
        a.J.style.position = "relative";
        a.J.style.transition = "height 100ms";
        a.C.style.transition = "height 100ms";
        a.G.style.transition = "height 100ms";
        a.j.style.transition = "height 100ms";
        b = Math.min(b + a.A.innerHeight - a.N, a.B);
        dh(a.C, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.j.width}px, ${b}px, 0px)`;
        dh(a.j, {
            clip: b
        });
        dh(a.G, {
            clip: b
        });
        return "0"
    }

    function vF(a, b = {}) {
        a.W && (b.eid = a.W);
        b.qid = a.yb;
        Oi("eoscrl", b, fj(String(a.zb)))
    }
    class wF extends pF {
        constructor(a, b) {
            super(a.L, b);
            this.G = a.outerInsElement.firstElementChild;
            this.C = a.outerInsElement;
            this.J = this.C.parentElement && this.C.parentElement.classList.contains("adsbygoogle") ? this.C.parentElement : this.C;
            this.B = parseInt(this.C.style.height, 10);
            this.W = null;
            this.Ab = this.Xc = !1;
            this.yb = "";
            this.ya = this.K = this.D = 0;
            this.le = this.B / 5;
            this.N = jh(this.J).y;
            this.zb = null;
            this.je = Me(Ni(651, () => {
                this.N = jh(this.J).y;
                var c = this.K;
                this.K = yj(this.A);
                this.B < this.D ? (c = this.K - c, 0 < c && (this.ya +=
                    c, this.ya >= this.le ? (rF(this), tF(this, this.D)) : (this.B = Math.min(this.D, this.B + c), tF(this, c), sF(this)))) : Qe(this.A, "scroll", this.O)
            }), this);
            this.O = () => {
                var c = this.je;
                kf.requestAnimationFrame ? kf.requestAnimationFrame(c) : c()
            }
        }
        pa(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = Aj(b);
                this.W = b.i_expid;
                this.yb = b.qid;
                this.zb = b.gen204_fraction;
                this.Xc || (this.Xc = !0, b = uF(this, b), "0" === b && L(this.A, "scroll", this.O, Ne), c.source.postMessage(JSON.stringify({
                        msg_type: "expand-on-scroll-result",
                        eos_success: "0" === b,
                        googMsgType: "sth"
                    }),
                    "*"), vF(this, {
                    err: b
                }))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Ab || (this.Ab = !0, rF(this), Qe(this.A, "scroll", this.O))
            }
        }
        l() {
            this.O && Qe(this.A, "scroll", this.O, Ne);
            super.l()
        }
    };

    function xF(a) {
        const b = a.K.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.A.innerHeight) && !c
    }
    class yF extends Qj {
        constructor(a, b, c) {
            super();
            this.A = a;
            this.C = b;
            this.K = c;
            this.D = 0;
            this.B = xF(this);
            this.J = Le(this.G, this);
            this.j = Ni(433, () => {
                var d = this.J;
                kf.requestAnimationFrame ? kf.requestAnimationFrame(d) : d()
            });
            L(this.A, "scroll", this.j, Ne)
        }
        G() {
            const a = xF(this);
            if (a && !this.B) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.C.contentWindow;
                c && (Ti(c, "ig", b, "*", 2), 10 <= ++this.D && this.j && Qe(this.A, "scroll", this.j, Ne))
            }
            this.B = a
        }
    };

    function zF(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function AF(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function BF(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function CF(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.Mc + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        dh(a, "transition", b.join(","))
    }
    var DF = Je(function() {
        if (Ab) return Mb("10.0");
        var a = Kf(document, "DIV"),
            b = Eb ? "-webkit" : Db ? "-moz" : Ab ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = le("div", {
            style: c
        });
        nf(a, b);
        a = a.firstChild;
        b = a.style[zf("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[eh(a, "transition")] || "")
    });

    function EF(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function FF(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function GF(a, b) {
        0 > a.A.indexOf(b) && (a.A = b + a.A)
    }

    function HF(a, b, c, d) {
        return "" != a.A || b ? null : "" == a.j.replace(IF, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function JF(a) {
        var b = HF(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var KF = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.A = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.A].join("|")
        }
    };

    function LF(a) {
        let b = a.W;
        a.J = function() {};
        MF(a, a.G, b);
        let c = a.G.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : cg(c, b)
            } catch (g) {
                GF(a.j, "c")
            }
            const f = NF(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.T = !0);
            if (d && !f && OF(e)) {
                FF(a.j, "l");
                a.K = c;
                break
            }
            d = d && f;
            if (e && PF(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.zb) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Xf(b)) {
                        FF(a.j, "c");
                        break
                    }
                } catch (g) {
                    FF(a.j,
                        "c");
                    break
                }
            }
        }
        a.I && a.B && QF(a);
        return a.j
    }

    function RF(a) {
        function b() {
            SF(c, f, g);
            if (h && !l && !g) {
                const k = function(m) {
                    for (let n = 0; n < m.length; n++) dh(h, m[n], "0px")
                };
                k(TF);
                k(UF)
            }
        }
        const c = a.G;
        c.style.overflow = a.yb ? "visible" : "hidden";
        a.I && (a.K ? (CF(c, VF), CF(a.K, VF)) : CF(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.O && (c.style.opacity = a.O);
        const d = null != a.F && null != a.A && (a.pa || a.A > a.F) ? a.A : null,
            e = null != a.D && null != a.l && (a.pa || a.l > a.D) ? a.l : null;
        if (a.N) {
            const k = a.N.length;
            for (let m = 0; m < k; m++) SF(a.N[m], d, e)
        }
        const f = a.A,
            g = a.l,
            h = a.K,
            l = a.T;
        a.I ? u.setTimeout(b, 1E3) : b()
    }

    function WF(a) {
        if (a.B && !a.Ka || null == a.A && null == a.l && null == a.O && a.B) return a.j;
        var b = a.B;
        a.B = !1;
        LF(a);
        a.B = b;
        if (!b || null != a.ea && !HF(a.j, a.ea, a.A, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.F = null, a.D = null);
        if (null == a.F && null !== a.A || null == a.D && null !== a.l) a.I = !1;
        (0 == a.A || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.A = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.A = "";
        RF(a);
        return LF(a)
    }

    function PF(a, b) {
        let c = !1;
        "none" == b.display && (FF(a.j, "n"), a.B && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || FF(a.j, "v");
        "hidden" == b.overflow && FF(a.j, "o");
        "absolute" == b.position ? (FF(a.j, "a"), c = !0) : "fixed" == b.position && (FF(a.j, "f"), c = !0);
        return c
    }

    function MF(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let l = 0; l < g.length; l++) {
            var h = g[l];
            h == b ? e = !0 : (h = XF(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && EF(a.j, 0, "o"), d & 4 && EF(a.j, 1, "o"));
        return !(d & 1)
    }

    function NF(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (C) {
            GF(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = lg(f),
            h = c.getAttribute("height"),
            l = lg(h),
            k = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = MF(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var q = e && e.width,
            r = e && e.height,
            t = ng(m) == a.F && ng(n) == a.D;
        m = t ? m : q;
        r = t ? n : r;
        q = ng(m);
        t = ng(r);
        g = null !== a.F && (null !== q && a.F >= q || null !== g && a.F >= g);
        t = null !== a.D && (null !== t && a.D >= t || null !== l && a.D >= l);
        l = !b && OF(d);
        t = b || t || l || !(f || m || d && (!YF(String(d.minWidth)) || !ZF(String(d.maxWidth))));
        k = b || g || l || k || !(h || r || d && (!YF(String(d.minHeight)) || !ZF(String(d.maxHeight))));
        $F(a, 0, t, c, "width", f, a.F, a.A);
        aG(a, 0, "d", t, e, d, "width", m, a.F, a.A);
        aG(a, 0, "m", t, e, d, "minWidth", e && e.minWidth, a.F, a.A);
        aG(a, 0, "M", t, e, d, "maxWidth", e && e.maxWidth, a.F, a.A);
        a.Ab ? (c = /^html|body$/i.test(c.nodeName), f = ng(n), h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1, h = null != a.l && d && f && Math.round(f) !== a.l && !h && "100%" !== d.minHeight, a.B && !c && h && (e.setProperty("height", "auto", "important"), d && !YF(String(d.minHeight)) && e.setProperty("min-height",
            "0px", "important"), d && !ZF(String(d.maxHeight)) && a.l && Math.round(f) < a.l && e.setProperty("max-height", "none", "important"))) : ($F(a, 1, k, c, "height", h, a.D, a.l), aG(a, 1, "d", k, e, d, "height", r, a.D, a.l), aG(a, 1, "m", k, e, d, "minHeight", e && e.minHeight, a.D, a.l), aG(a, 1, "M", k, e, d, "maxHeight", e && e.maxHeight, a.D, a.l));
        return b
    }

    function QF(a) {
        function b() {
            if (0 < c) {
                var k = cg(e, d) || {};
                const m = ng(k.width);
                k = ng(k.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== k && null !== g && h && h(1, g - k);
                --c
            } else u.clearInterval(l), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.W,
            e = a.G,
            f = a.A,
            g = a.l,
            h = a.J;
        let l;
        u.setTimeout(function() {
            l = u.setInterval(b, 16)
        }, 990)
    }

    function XF(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = cg(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.C.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.C.boundingClientRect.left ? 2 : 0) | (c.bottom > a.C.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function $F(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = lg(f);
                null == f && (GF(a.j, "n"), EF(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.B)
                        if (a.I) {
                            const l = Math.max(f + h - (g || 0), 0),
                                k = a.J;
                            a.J = function(m, n) {
                                m == b && d.setAttribute(e, l - n);
                                k && k(m, n)
                            }
                        } else d.setAttribute(e, h)
                } else EF(a.j, b, "d")
        }
    }

    function aG(a, b, c, d, e, f, g, h, l, k) {
        if (null != k) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? YF(f) : ZF(f)) || (f = ng(f), null == f ? FF(a.j, "p") : null != l && FF(a.j, f == l ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? YF(h) : ZF(h)) return;
                h = ng(h);
                null == h && (GF(a.j, "p"), EF(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.B)
                        if (a.I) {
                            const m = Math.max(h + k - (l || 0), 0),
                                n = a.J;
                            a.J = function(q, r) {
                                q == b && (e[g] = m - r + "px");
                                n && n(q, r)
                            }
                        } else e[g] = k + "px"
                } else EF(a.j, b, c)
        }
    }
    var fG = class {
        constructor(a, b, c, d, e, f, g) {
            this.zb = a;
            this.N = c;
            this.G = b;
            this.W = (a = this.G.ownerDocument) && (a.defaultView || a.parentWindow);
            this.C = new bG(this.G);
            this.B = g;
            this.Ka = cG(this.C, d.Sc, d.height, d.Ud);
            this.F = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.right - this.C.boundingClientRect.left : null : e;
            this.D = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.bottom - this.C.boundingClientRect.top : null : f;
            this.A = dG(d.width);
            this.l = dG(d.height);
            this.O = this.B ? dG(d.opacity) : null;
            this.ea =
                d.check;
            this.I = "animate" == d.Sc && !eG(this.C, this.l, this.ya) && DF();
            this.yb = !!d.Zc;
            this.j = new KF;
            eG(this.C, this.l, this.ya) && FF(this.j, "r");
            e = this.C;
            e.j && e.l >= e.A && FF(this.j, "b");
            this.K = this.J = null;
            this.T = !1;
            this.pa = !!d.Cf;
            this.Ab = !!d.Sd;
            this.ya = !!d.Ud
        }
    };

    function eG(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.B) && (c ? (b = a.l + Math.min(b, dG(a.getHeight())), a = a.j && b >= a.A) : a = a.j && a.l >= a.A, d = a);
        return d
    }
    var bG = class {
        constructor(a) {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && $f(c);
            this.j = !!c;
            this.boundingClientRect = null;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || u;
            this.A = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && zF(b);
            this.B = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.B
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function cG(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return eG(a, c, d)
        }
    }

    function OF(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function gG(a, b, c, d) {
        return WF(new fG(a, b, d, c, null, null, !0))
    }
    var hG = new KF("s", ""),
        IF = RegExp("[lonvafrbpEe]", "g");

    function ZF(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function YF(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function SF(a, b, c) {
        null !== b && null !== lg(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== lg(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var TF = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        UF = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");
    let iG = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
        jG = TF;
    for (let a = 0; a < jG.length; a++) iG += ", " + jG[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
    jG = UF;
    for (let a = 0; a < jG.length; a++) iG += ", " + jG[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var VF = iG;

    function dG(a) {
        return "string" === typeof a ? lg(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function kG(a, b, c) {
        const d = {
            scrl: yj(a.A || window),
            adk: a.D,
            adf: a.C,
            fmt: a.B
        };
        b && (d.str = eG(b, lg(c.r_nh), mg(c.r_cab)), d.ad_y = b.l, d.vph = b.A);
        eg(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function lG(a, b, c) {
        const d = fj(String(b.gen204_fraction));
        b = kG(a, c, b);
        b.url = a.A.document.URL;
        Oi("resize", b, d)
    }
    class mG extends pF {
        constructor(a, b, c) {
            super(a, b);
            this.D = String(c.google_ad_unit_key || "");
            this.C = String(c.google_ad_dom_fingerprint || "");
            this.B = String(c.google_ad_format || "")
        }
        pa(a) {
            a["resize-me"] = (b, c) => {
                b = Aj(b);
                var d = b.r_chk;
                if (null == d || "" === d) {
                    var e = lg(b.r_nw),
                        f = lg(b.r_nh),
                        g = lg(b.r_no);
                    null != g || 0 !== e && 0 !== f || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null; {
                        var l = g,
                            k = mg(b.r_ao),
                            m = mg(b.r_ifr),
                            n = mg(b.r_cab);
                        const t = window;
                        if (this.j && t)
                            if ("no_rsz" === h) b.err = "7", lG(this, b, null), f = !0;
                            else if (g = new bG(this.j), g.j) {
                            var q =
                                g.getWidth();
                            null != q && (b.w = q);
                            q = g.getHeight();
                            null != q && (b.h = q);
                            if (cG(g, h, f, n)) {
                                var r = this.j.ownerDocument.getElementById(this.j.id + "_host");
                                q = r ? [this.j] : null;
                                r = r || this.j;
                                const C = T(Dn);
                                d = gG(t, r, {
                                    width: e,
                                    height: f,
                                    opacity: l,
                                    check: d,
                                    Sc: h,
                                    Zc: k,
                                    Cf: m,
                                    Sd: C,
                                    Ud: n
                                }, q);
                                b.r_cui && mg(b.r_cui.toString()) && M(r, {
                                    height: (null === f ? 0 : f - 48) + "px",
                                    top: "24px"
                                });
                                null != e && (b.nw = e);
                                null != f && (b.nh = f);
                                b.rsz = d.toString();
                                b.abl = JF(d);
                                b.frsz = ("force" === h).toString();
                                b.err = "0";
                                lG(this, b, g);
                                f = !0
                            } else b.err = "1", lG(this, b, g), f = !1
                        } else b.err =
                            "3", lG(this, b, null), f = !1;
                        else b.err = "2", lG(this, b, null), f = !1
                    }
                    e = {
                        msg_type: "resize-result"
                    };
                    e.r_str = h;
                    e.r_status = f;
                    c = c.source;
                    e.googMsgType = "sth";
                    c.postMessage(JSON.stringify(e), "*");
                    this.j.dataset.googleQueryId || this.j.setAttribute("data-google-query-id", b.qid)
                }
            }
        }
        l() {
            super.l();
            this.j = null
        }
    };
    const nG = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const oG = /^blogger$/,
        pG = /^wordpress(.|\s|$)/i,
        qG = /^joomla!/i,
        rG = /^drupal/i,
        sG = /\/wp-content\//,
        tG = /\/wp-content\/plugins\/advanced-ads/,
        uG = /\/wp-content\/themes\/genesis/,
        vG = /\/wp-content\/plugins\/genesis/;

    function wG(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (tG.test(e)) return 5;
                if (vG.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", uG.test(e) || vG.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (oG.test(f)) return 1;
                if (pG.test(f)) return 2;
                if (qG.test(f)) return 3;
                if (rG.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href") || "", sG.test(d))) return 2;
        return 0
    };
    let xG = navigator;
    var yG = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        zG = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return yG(a.toLowerCase())
        };
    const AG = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        BG = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        CG = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var DG = () => {
        const a = new ep;
        u.SVGElement && u.document.createElementNS && a.set(0);
        const b = sg();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        u.crypto && u.crypto.subtle && a.set(3);
        u.TextDecoder && u.TextEncoder && a.set(4);
        return dp(a)
    };
    var EG = new Map([
        [".google.com", a => N `https://adservice.google.com/adsid/integrator.${a}`],
        [".google.ad", a => N `https://adservice.google.ad/adsid/integrator.${a}`],
        [".google.ae", a => N `https://adservice.google.ae/adsid/integrator.${a}`],
        [".google.com.af", a => N `https://adservice.google.com.af/adsid/integrator.${a}`],
        [".google.com.ag", a => N `https://adservice.google.com.ag/adsid/integrator.${a}`],
        [".google.com.ai", a => N `https://adservice.google.com.ai/adsid/integrator.${a}`],
        [".google.al", a => N `https://adservice.google.al/adsid/integrator.${a}`],
        [".google.co.ao", a => N `https://adservice.google.co.ao/adsid/integrator.${a}`],
        [".google.com.ar", a => N `https://adservice.google.com.ar/adsid/integrator.${a}`],
        [".google.as", a => N `https://adservice.google.as/adsid/integrator.${a}`],
        [".google.at", a => N `https://adservice.google.at/adsid/integrator.${a}`],
        [".google.com.au", a => N `https://adservice.google.com.au/adsid/integrator.${a}`],
        [".google.az", a => N `https://adservice.google.az/adsid/integrator.${a}`],
        [".google.com.bd", a => N `https://adservice.google.com.bd/adsid/integrator.${a}`],
        [".google.be", a => N `https://adservice.google.be/adsid/integrator.${a}`],
        [".google.bf", a => N `https://adservice.google.bf/adsid/integrator.${a}`],
        [".google.bg", a => N `https://adservice.google.bg/adsid/integrator.${a}`],
        [".google.com.bh", a => N `https://adservice.google.com.bh/adsid/integrator.${a}`],
        [".google.bi", a => N `https://adservice.google.bi/adsid/integrator.${a}`],
        [".google.bj", a => N `https://adservice.google.bj/adsid/integrator.${a}`],
        [".google.com.bn", a => N `https://adservice.google.com.bn/adsid/integrator.${a}`],
        [".google.com.bo", a => N `https://adservice.google.com.bo/adsid/integrator.${a}`],
        [".google.com.br", a => N `https://adservice.google.com.br/adsid/integrator.${a}`],
        [".google.bs", a => N `https://adservice.google.bs/adsid/integrator.${a}`],
        [".google.bt", a => N `https://adservice.google.bt/adsid/integrator.${a}`],
        [".google.co.bw", a => N `https://adservice.google.co.bw/adsid/integrator.${a}`],
        [".google.com.bz", a => N `https://adservice.google.com.bz/adsid/integrator.${a}`],
        [".google.ca", a => N `https://adservice.google.ca/adsid/integrator.${a}`],
        [".google.cd", a => N `https://adservice.google.cd/adsid/integrator.${a}`],
        [".google.cf", a => N `https://adservice.google.cf/adsid/integrator.${a}`],
        [".google.cg", a => N `https://adservice.google.cg/adsid/integrator.${a}`],
        [".google.ch", a => N `https://adservice.google.ch/adsid/integrator.${a}`],
        [".google.ci", a => N `https://adservice.google.ci/adsid/integrator.${a}`],
        [".google.co.ck", a => N `https://adservice.google.co.ck/adsid/integrator.${a}`],
        [".google.cl", a => N `https://adservice.google.cl/adsid/integrator.${a}`],
        [".google.cm", a => N `https://adservice.google.cm/adsid/integrator.${a}`],
        [".google.com.co", a => N `https://adservice.google.com.co/adsid/integrator.${a}`],
        [".google.co.cr", a => N `https://adservice.google.co.cr/adsid/integrator.${a}`],
        [".google.com.cu", a => N `https://adservice.google.com.cu/adsid/integrator.${a}`],
        [".google.cv", a => N `https://adservice.google.cv/adsid/integrator.${a}`],
        [".google.com.cy", a => N `https://adservice.google.com.cy/adsid/integrator.${a}`],
        [".google.cz", a => N `https://adservice.google.cz/adsid/integrator.${a}`],
        [".google.de", a => N `https://adservice.google.de/adsid/integrator.${a}`],
        [".google.dj", a => N `https://adservice.google.dj/adsid/integrator.${a}`],
        [".google.dk", a => N `https://adservice.google.dk/adsid/integrator.${a}`],
        [".google.dm", a => N `https://adservice.google.dm/adsid/integrator.${a}`],
        [".google.dz", a => N `https://adservice.google.dz/adsid/integrator.${a}`],
        [".google.com.ec", a => N `https://adservice.google.com.ec/adsid/integrator.${a}`],
        [".google.ee", a => N `https://adservice.google.ee/adsid/integrator.${a}`],
        [".google.com.eg", a => N `https://adservice.google.com.eg/adsid/integrator.${a}`],
        [".google.es", a => N `https://adservice.google.es/adsid/integrator.${a}`],
        [".google.com.et", a => N `https://adservice.google.com.et/adsid/integrator.${a}`],
        [".google.fi", a => N `https://adservice.google.fi/adsid/integrator.${a}`],
        [".google.com.fj", a => N `https://adservice.google.com.fj/adsid/integrator.${a}`],
        [".google.fm", a => N `https://adservice.google.fm/adsid/integrator.${a}`],
        [".google.fr", a => N `https://adservice.google.fr/adsid/integrator.${a}`],
        [".google.ga", a => N `https://adservice.google.ga/adsid/integrator.${a}`],
        [".google.ge", a => N `https://adservice.google.ge/adsid/integrator.${a}`],
        [".google.gg", a => N `https://adservice.google.gg/adsid/integrator.${a}`],
        [".google.com.gh", a => N `https://adservice.google.com.gh/adsid/integrator.${a}`],
        [".google.com.gi", a => N `https://adservice.google.com.gi/adsid/integrator.${a}`],
        [".google.gl", a => N `https://adservice.google.gl/adsid/integrator.${a}`],
        [".google.gm", a => N `https://adservice.google.gm/adsid/integrator.${a}`],
        [".google.gr", a => N `https://adservice.google.gr/adsid/integrator.${a}`],
        [".google.com.gt", a => N `https://adservice.google.com.gt/adsid/integrator.${a}`],
        [".google.gy", a => N `https://adservice.google.gy/adsid/integrator.${a}`],
        [".google.com.hk", a => N `https://adservice.google.com.hk/adsid/integrator.${a}`],
        [".google.hn", a => N `https://adservice.google.hn/adsid/integrator.${a}`],
        [".google.hr", a => N `https://adservice.google.hr/adsid/integrator.${a}`],
        [".google.ht", a => N `https://adservice.google.ht/adsid/integrator.${a}`],
        [".google.hu", a => N `https://adservice.google.hu/adsid/integrator.${a}`],
        [".google.co.id", a => N `https://adservice.google.co.id/adsid/integrator.${a}`],
        [".google.ie", a => N `https://adservice.google.ie/adsid/integrator.${a}`],
        [".google.co.il", a => N `https://adservice.google.co.il/adsid/integrator.${a}`],
        [".google.im", a => N `https://adservice.google.im/adsid/integrator.${a}`],
        [".google.co.in", a => N `https://adservice.google.co.in/adsid/integrator.${a}`],
        [".google.iq", a => N `https://adservice.google.iq/adsid/integrator.${a}`],
        [".google.is", a => N `https://adservice.google.is/adsid/integrator.${a}`],
        [".google.it", a => N `https://adservice.google.it/adsid/integrator.${a}`],
        [".google.je", a => N `https://adservice.google.je/adsid/integrator.${a}`],
        [".google.com.jm", a => N `https://adservice.google.com.jm/adsid/integrator.${a}`],
        [".google.jo", a => N `https://adservice.google.jo/adsid/integrator.${a}`],
        [".google.co.jp", a => N `https://adservice.google.co.jp/adsid/integrator.${a}`],
        [".google.co.ke", a => N `https://adservice.google.co.ke/adsid/integrator.${a}`],
        [".google.com.kh", a => N `https://adservice.google.com.kh/adsid/integrator.${a}`],
        [".google.ki", a => N `https://adservice.google.ki/adsid/integrator.${a}`],
        [".google.kg", a => N `https://adservice.google.kg/adsid/integrator.${a}`],
        [".google.co.kr", a => N `https://adservice.google.co.kr/adsid/integrator.${a}`],
        [".google.com.kw", a => N `https://adservice.google.com.kw/adsid/integrator.${a}`],
        [".google.kz", a => N `https://adservice.google.kz/adsid/integrator.${a}`],
        [".google.la", a => N `https://adservice.google.la/adsid/integrator.${a}`],
        [".google.com.lb", a => N `https://adservice.google.com.lb/adsid/integrator.${a}`],
        [".google.li", a => N `https://adservice.google.li/adsid/integrator.${a}`],
        [".google.lk", a => N `https://adservice.google.lk/adsid/integrator.${a}`],
        [".google.co.ls", a => N `https://adservice.google.co.ls/adsid/integrator.${a}`],
        [".google.lt", a => N `https://adservice.google.lt/adsid/integrator.${a}`],
        [".google.lu", a => N `https://adservice.google.lu/adsid/integrator.${a}`],
        [".google.lv", a => N `https://adservice.google.lv/adsid/integrator.${a}`],
        [".google.com.ly", a => N `https://adservice.google.com.ly/adsid/integrator.${a}`],
        [".google.md", a => N `https://adservice.google.md/adsid/integrator.${a}`],
        [".google.me", a => N `https://adservice.google.me/adsid/integrator.${a}`],
        [".google.mg", a => N `https://adservice.google.mg/adsid/integrator.${a}`],
        [".google.mk", a => N `https://adservice.google.mk/adsid/integrator.${a}`],
        [".google.ml", a => N `https://adservice.google.ml/adsid/integrator.${a}`],
        [".google.com.mm", a => N `https://adservice.google.com.mm/adsid/integrator.${a}`],
        [".google.mn", a => N `https://adservice.google.mn/adsid/integrator.${a}`],
        [".google.ms", a => N `https://adservice.google.ms/adsid/integrator.${a}`],
        [".google.com.mt", a => N `https://adservice.google.com.mt/adsid/integrator.${a}`],
        [".google.mu", a => N `https://adservice.google.mu/adsid/integrator.${a}`],
        [".google.mv", a => N `https://adservice.google.mv/adsid/integrator.${a}`],
        [".google.mw", a => N `https://adservice.google.mw/adsid/integrator.${a}`],
        [".google.com.mx", a => N `https://adservice.google.com.mx/adsid/integrator.${a}`],
        [".google.com.my", a => N `https://adservice.google.com.my/adsid/integrator.${a}`],
        [".google.co.mz", a => N `https://adservice.google.co.mz/adsid/integrator.${a}`],
        [".google.com.na", a => N `https://adservice.google.com.na/adsid/integrator.${a}`],
        [".google.com.ng", a => N `https://adservice.google.com.ng/adsid/integrator.${a}`],
        [".google.com.ni", a => N `https://adservice.google.com.ni/adsid/integrator.${a}`],
        [".google.ne", a => N `https://adservice.google.ne/adsid/integrator.${a}`],
        [".google.nl", a => N `https://adservice.google.nl/adsid/integrator.${a}`],
        [".google.no", a => N `https://adservice.google.no/adsid/integrator.${a}`],
        [".google.com.np", a => N `https://adservice.google.com.np/adsid/integrator.${a}`],
        [".google.nr", a => N `https://adservice.google.nr/adsid/integrator.${a}`],
        [".google.nu", a => N `https://adservice.google.nu/adsid/integrator.${a}`],
        [".google.co.nz", a => N `https://adservice.google.co.nz/adsid/integrator.${a}`],
        [".google.com.om", a => N `https://adservice.google.com.om/adsid/integrator.${a}`],
        [".google.com.pa", a => N `https://adservice.google.com.pa/adsid/integrator.${a}`],
        [".google.com.pe", a => N `https://adservice.google.com.pe/adsid/integrator.${a}`],
        [".google.com.pg", a => N `https://adservice.google.com.pg/adsid/integrator.${a}`],
        [".google.com.ph", a => N `https://adservice.google.com.ph/adsid/integrator.${a}`],
        [".google.com.pk", a => N `https://adservice.google.com.pk/adsid/integrator.${a}`],
        [".google.pl", a => N `https://adservice.google.pl/adsid/integrator.${a}`],
        [".google.pn", a => N `https://adservice.google.pn/adsid/integrator.${a}`],
        [".google.com.pr", a => N `https://adservice.google.com.pr/adsid/integrator.${a}`],
        [".google.ps", a => N `https://adservice.google.ps/adsid/integrator.${a}`],
        [".google.pt", a => N `https://adservice.google.pt/adsid/integrator.${a}`],
        [".google.com.py", a => N `https://adservice.google.com.py/adsid/integrator.${a}`],
        [".google.com.qa", a => N `https://adservice.google.com.qa/adsid/integrator.${a}`],
        [".google.ro", a => N `https://adservice.google.ro/adsid/integrator.${a}`],
        [".google.ru", a => N `https://adservice.google.ru/adsid/integrator.${a}`],
        [".google.rw", a => N `https://adservice.google.rw/adsid/integrator.${a}`],
        [".google.com.sa", a => N `https://adservice.google.com.sa/adsid/integrator.${a}`],
        [".google.com.sb", a => N `https://adservice.google.com.sb/adsid/integrator.${a}`],
        [".google.sc", a => N `https://adservice.google.sc/adsid/integrator.${a}`],
        [".google.se", a => N `https://adservice.google.se/adsid/integrator.${a}`],
        [".google.com.sg", a => N `https://adservice.google.com.sg/adsid/integrator.${a}`],
        [".google.sh", a => N `https://adservice.google.sh/adsid/integrator.${a}`],
        [".google.si", a => N `https://adservice.google.si/adsid/integrator.${a}`],
        [".google.sk", a => N `https://adservice.google.sk/adsid/integrator.${a}`],
        [".google.sn", a => N `https://adservice.google.sn/adsid/integrator.${a}`],
        [".google.so", a => N `https://adservice.google.so/adsid/integrator.${a}`],
        [".google.sm", a => N `https://adservice.google.sm/adsid/integrator.${a}`],
        [".google.sr", a => N `https://adservice.google.sr/adsid/integrator.${a}`],
        [".google.st", a => N `https://adservice.google.st/adsid/integrator.${a}`],
        [".google.com.sv", a => N `https://adservice.google.com.sv/adsid/integrator.${a}`],
        [".google.td", a => N `https://adservice.google.td/adsid/integrator.${a}`],
        [".google.tg", a => N `https://adservice.google.tg/adsid/integrator.${a}`],
        [".google.co.th", a => N `https://adservice.google.co.th/adsid/integrator.${a}`],
        [".google.com.tj", a => N `https://adservice.google.com.tj/adsid/integrator.${a}`],
        [".google.tl", a => N `https://adservice.google.tl/adsid/integrator.${a}`],
        [".google.tm", a => N `https://adservice.google.tm/adsid/integrator.${a}`],
        [".google.tn", a => N `https://adservice.google.tn/adsid/integrator.${a}`],
        [".google.to", a => N `https://adservice.google.to/adsid/integrator.${a}`],
        [".google.com.tr", a => N `https://adservice.google.com.tr/adsid/integrator.${a}`],
        [".google.tt", a => N `https://adservice.google.tt/adsid/integrator.${a}`],
        [".google.com.tw", a => N `https://adservice.google.com.tw/adsid/integrator.${a}`],
        [".google.co.tz", a => N `https://adservice.google.co.tz/adsid/integrator.${a}`],
        [".google.com.ua", a => N `https://adservice.google.com.ua/adsid/integrator.${a}`],
        [".google.co.ug", a => N `https://adservice.google.co.ug/adsid/integrator.${a}`],
        [".google.co.uk", a => N `https://adservice.google.co.uk/adsid/integrator.${a}`],
        [".google.com.uy", a => N `https://adservice.google.com.uy/adsid/integrator.${a}`],
        [".google.co.uz", a => N `https://adservice.google.co.uz/adsid/integrator.${a}`],
        [".google.com.vc", a => N `https://adservice.google.com.vc/adsid/integrator.${a}`],
        [".google.co.ve", a => N `https://adservice.google.co.ve/adsid/integrator.${a}`],
        [".google.vg", a => N `https://adservice.google.vg/adsid/integrator.${a}`],
        [".google.co.vi", a => N `https://adservice.google.co.vi/adsid/integrator.${a}`],
        [".google.com.vn", a => N `https://adservice.google.com.vn/adsid/integrator.${a}`],
        [".google.vu", a => N `https://adservice.google.vu/adsid/integrator.${a}`],
        [".google.ws", a => N `https://adservice.google.ws/adsid/integrator.${a}`],
        [".google.rs", a => N `https://adservice.google.rs/adsid/integrator.${a}`],
        [".google.co.za", a => N `https://adservice.google.co.za/adsid/integrator.${a}`],
        [".google.co.zm", a => N `https://adservice.google.co.zm/adsid/integrator.${a}`],
        [".google.co.zw", a => N `https://adservice.google.co.zw/adsid/integrator.${a}`],
        [".google.cat", a => N `https://adservice.google.cat/adsid/integrator.${a}`]
    ].map(([a, b]) => [a, {
        json: b("json"),
        js: b("js"),
        ["sync.js"]: b("sync.js")
    }]));

    function FG(a, b, c) {
        const d = bg("LINK", a);
        try {
            if (d.rel = "preload", Wa("preload", "stylesheet")) {
                d.href = Fd(b).toString();
                const h = pf('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
                h && d.setAttribute("nonce", h)
            } else {
                if (b instanceof Cd) var e = Fd(b).toString();
                else {
                    if (b instanceof Md) var f = Nd(b);
                    else {
                        if (b instanceof Md) var g = b;
                        else b = "object" == typeof b && b.na ? b.ka() : String(b), Pd.test(b) || (b = "about:invalid#zClosurez"), g = new Md(b, Ld);
                        f = Nd(g)
                    }
                    e = f
                }
                d.href = e
            }
        } catch {
            return
        }
        d.as =
            "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch {}
    };
    let GG = u;
    const IG = a => {
        const b = new Map([
            ["domain", u.location.hostname]
        ]);
        HG[3] >= Ea() && b.set("adsid", HG[1]);
        return Yg(EG.get(a).js, b)
    };
    let HG, JG;
    const KG = () => {
        GG = u;
        HG = GG.googleToken = GG.googleToken || {};
        const a = Ea();
        HG[1] && HG[3] > a && 0 < HG[2] || (HG[1] = "", HG[2] = -1, HG[3] = -1, HG[4] = "", HG[6] = "");
        JG = GG.googleIMState = GG.googleIMState || {};
        EG.has(JG[1]) || (JG[1] = ".google.com");
        Array.isArray(JG[5]) || (JG[5] = []);
        "boolean" !== typeof JG[6] && (JG[6] = !1);
        Array.isArray(JG[7]) || (JG[7] = []);
        "number" !== typeof JG[8] && (JG[8] = 0)
    };
    var LG = a => {
        KG();
        EG.has(a) && (JG[1] = a)
    };
    const MG = {
        Dc: () => 0 < JG[8],
        zf: () => {
            JG[8]++
        },
        Af: () => {
            0 < JG[8] && JG[8]--
        },
        Bf: () => {
            JG[8] = 0
        },
        Jj: () => !1,
        xd: () => JG[5],
        ed: a => {
            try {
                a()
            } catch (b) {
                u.setTimeout(() => {
                    throw b;
                }, 0)
            }
        },
        Qd: () => {
            if (!MG.Dc()) {
                var a = u.document,
                    b = e => {
                        e = IG(e);
                        a: {
                            try {
                                var f = pf("script[nonce]");
                                break a
                            } catch {}
                            f = void 0
                        }
                        FG(a, e.toString(), f);
                        f = bg("SCRIPT", a);
                        f.type = "text/javascript";
                        f.onerror = () => u.processGoogleToken({}, 2);
                        De(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f), MG.zf()
                        } catch (g) {}
                    },
                    c = JG[1];
                b(c);
                ".google.com" != c && b(".google.com");
                var d = {
                    newToken: "FBT"
                };
                u.setTimeout(() => u.processGoogleToken(d, 1), 1E3)
            }
        }
    };

    function NG(a) {
        KG();
        const b = GG.googleToken[5] || 0;
        a && (0 != b || HG[3] >= Ea() ? MG.ed(a) : (MG.xd().push(a), MG.Qd()));
        HG[3] >= Ea() && HG[2] >= Ea() || MG.Qd()
    }
    var PG = a => {
        u.processGoogleToken = u.processGoogleToken || ((b, c) => OG(b, c));
        NG(a)
    };
    const OG = (a = {}, b = 0) => {
        var c = a.newToken || "",
            d = "NT" == c,
            e = parseInt(a.freshLifetimeSecs || "", 10),
            f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        KG();
        1 == b ? MG.Bf() : MG.Af();
        var h = GG.googleToken = GG.googleToken || {},
            l = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !MG.Dc() && (!(HG[3] >= Ea()) || "NT" == HG[1]);
        var k = !(HG[3] >= Ea()) && 0 != b;
        if (l || d || k) d = Ea(), e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && Hh(u, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
            `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, KG();
        if (l || !MG.Dc()) {
            b = MG.xd();
            for (c = 0; c < b.length; c++) MG.ed(b[c]);
            b.length = 0
        }
    };
    const QG = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        RG = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function SG(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return QG.get(b.type) ? ? null
        } catch {}
        return RG.get(a.performance ? .navigation ? .type) ? ? null
    };
    var TG = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Z = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function UG() {
        const a = window.navigator.userAgent,
            b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function VG(a = window) {
        return !a.PeriodicSyncManager
    }

    function WG(a, b, c) {
        a = a.goog_tt_state_map;
        let d, e = [];
        b && (d = a ? .get(TG.issuerOrigin)) && e.push(d);
        c && (d = a ? .get(Z.issuerOrigin)) && e.push(d);
        return e
    }

    function XG(a) {
        return T(Oo) ? !0 : a.some(b => b.hasRedemptionRecord)
    }

    function YG(a, b, c) {
        return b || ".google.ch" === c || "function" === typeof a.__tcfapi
    }

    function ZG(a, b) {
        a = T(Oo) ? a.filter(c => 12 !== c.state).map(c => c.issuerOrigin) : a.filter(c => c.hasRedemptionRecord).map(c => c.issuerOrigin);
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: T(Oo) ? "omit" : "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        !T(Oo) && b && 0 < Object.keys(b).length && (a.additionalSigningData = Ub(JSON.stringify(b)));
        return a
    }

    function $G(a, b, c) {
        if (a = window.goog_tt_state_map ? .get(a)) a.state = b, void 0 != c && (a.hasRedemptionRecord = c)
    }

    function aH() {
        const a = `${TG.issuerOrigin}${TG.redemptionPath}`,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: TG.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        $G(TG.issuerOrigin, 2);
        return window.fetch(a, b).then(c => {
            if (!c.ok) throw Error(`${c.status}: Network response was not ok!`);
            $G(TG.issuerOrigin, 6, !0)
        }).catch(c => {
            c && "NoModificationAllowedError" === c.name ? $G(TG.issuerOrigin, 6, !0) : $G(TG.issuerOrigin, 5)
        })
    }

    function bH() {
        const a = `${TG.issuerOrigin}${TG.issuancePath}`;
        $G(TG.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(b => {
            if (!b.ok) throw Error(`${b.status}: Network response was not ok!`);
            $G(TG.issuerOrigin, 10);
            return aH()
        }).catch(b => {
            if (b && "NoModificationAllowedError" === b.name) return $G(TG.issuerOrigin, 10), aH();
            $G(TG.issuerOrigin, 9)
        })
    }

    function cH() {
        $G(TG.issuerOrigin, 13);
        return document.hasTrustToken(TG.issuerOrigin).then(a => a ? aH() : bH())
    }

    function dH() {
        $G(Z.issuerOrigin, 13);
        if (window.Promise) {
            var a = document.hasTrustToken(Z.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }));
            const b = `${Z.issuerOrigin}${Z.redemptionPath}`,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            $G(Z.issuerOrigin, 16);
            a = a.then(e => window.fetch(b, c).then(f => {
                if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                $G(Z.issuerOrigin, 18, !0)
            }).catch(f => {
                if (f && "NoModificationAllowedError" === f.name) $G(Z.issuerOrigin,
                    18, !0);
                else {
                    if (e) return window.Promise.reject({
                        state: 17,
                        error: f
                    });
                    $G(Z.issuerOrigin, 17)
                }
            })).then(() => document.hasTrustToken(Z.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }))).then(e => {
                const f = `${Z.issuerOrigin}${Z.getStatePath}`;
                $G(Z.issuerOrigin, 20);
                return window.fetch(`${f}?ht=${e}`, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Z.issuerOrigin]
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    $G(Z.issuerOrigin, 22);
                    return g.text().then(h =>
                        JSON.parse(h))
                }).catch(g => window.Promise.reject({
                    state: 21,
                    error: g
                }))
            });
            const d = Eg(window);
            return a.then(e => {
                const f = `${Z.issuerOrigin}${Z.issuancePath}`;
                return e && e.srqt && e.cs ? ($G(Z.issuerOrigin, 23), window.fetch(`${f}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    $G(Z.issuerOrigin, 25);
                    return e
                }).catch(g => window.Promise.reject({
                    state: 24,
                    error: g
                }))) : e
            }).then(e => {
                if (e && e.srdt && e.cs) return $G(Z.issuerOrigin,
                    26), window.fetch(`${b}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(f => {
                    if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                    $G(Z.issuerOrigin, 28, !0)
                }).catch(f => window.Promise.reject({
                    state: 27,
                    error: f
                }))
            }).then(() => {
                $G(Z.issuerOrigin, 29)
            }).catch(e => {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        $G(Z.issuerOrigin, e.state);
                        const f = U(No);
                        Math.random() <= f && Kh({
                            state: e.state,
                            err: e.error.toString()
                        }, "dtt_err")
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function eH(a) {
        if (document.hasTrustToken && !T(Lo) && a.A) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof Map) {
                var c = [];
                if (a.j.some(d => d.issuerOrigin === TG.issuerOrigin)) {
                    let d = b.get(TG.issuerOrigin);
                    d || (d = cH(), b.set(TG.issuerOrigin, d));
                    c.push(d)
                }
                a.j.some(d => d.issuerOrigin === Z.issuerOrigin) && (a = b.get(Z.issuerOrigin), a || (a = dH(), b.set(Z.issuerOrigin, a)), c.push(a));
                if (0 < c.length && window.Promise && window.Promise.all) return window.Promise.all(c)
            }
        }
    }
    var fH = class extends Qj {
        constructor(a, b, c) {
            super();
            this.A = a;
            this.j = [];
            b && UG() && this.j.push(TG);
            c && this.j.push(Z);
            if (document.hasTrustToken && !T(Lo)) {
                const d = new Map;
                this.j.forEach(e => {
                    d.set(e.issuerOrigin, {
                        issuerOrigin: e.issuerOrigin,
                        state: this.A ? 1 : 12,
                        hasRedemptionRecord: !1
                    })
                });
                window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof Map ? new Map([...d, ...window.goog_tt_state_map]) : d;
                window.goog_tt_promise_map && window.goog_tt_promise_map instanceof Map || (window.goog_tt_promise_map =
                    new Map)
            }
        }
    };

    function gH(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const hH = /[+, ]/;

    function iH(a, b) {
        const c = a.H;
        var d = a.pubWin,
            e = {},
            f = d.document;
        var g = Jg(d);
        var h = fp(d, c.google_ad_width, c.google_ad_height);
        var l = hp(g).Hc;
        var k = d.top == d ? 0 : Xf(d.top) ? 1 : 2;
        var m = 4;
        h || 1 != k ? h || 2 != k ? h && 1 == k ? m = 7 : h && 2 == k && (m = 8) : m = 6 : m = 5;
        l && (m |= 16);
        l = "" + m;
        k = ip(d);
        m = !!c.google_page_url;
        e.google_iframing = l;
        0 != k && (e.google_iframing_environment = k);
        if (!m && "ad.yieldmanager.com" == f.domain) {
            for (l = f.URL.substring(f.URL.lastIndexOf("http")); - 1 < l.indexOf("%");) try {
                l = decodeURIComponent(l)
            } catch (q) {
                break
            }
            c.google_page_url = l;
            m = !!l
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && Xf(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url = d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var n = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            n = null
        } else n = null;
        e.google_last_modified_time = n;
        d = g == g.top ? g.document.referrer : (d = Rg()) && d.referrer || "";
        e.google_referrer_url = d;
        gp(e, c);
        e = c.google_page_location ||
            c.google_page_url;
        "EMPTY" == e && (e = c.google_page_url);
        e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in nG), 2 <= e.length && (d = d || e[e.length - 2] in nG), e = d) : e = !1;
        e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
        b = jH(a, b);
        d = a.H;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        "ca-pub-6219811747049371" === d.google_ad_client && kH.test(f) &&
            (g = "/pagead/lopri?");
        a = sh(b, `https://${e}${g}` + (B(a.aa, 9) && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = a
    }

    function lH(a) {
        return encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + rh({
            adk: a.google_ad_unit_key,
            client: a.google_ad_client,
            fa: a.google_reactive_ad_format
        })
    }

    function mH(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (9 === a.nodeType) a: {
            try {
                const c = If(a);
                if (c) {
                    const d = c.frameElement;
                    if (d && Xf(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function nH(a, b) {
        b.eid = YD(a.pubWin);
        const c = a.H.google_loeid;
        "string" === typeof c && (a.j |= 4096, b.loeid = c)
    }

    function oH(a, b) {
        a = (a = $f(a.pubWin)) && a.document ? bp(a.document, a) : new tf(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function pH(a) {
        try {
            const b = u.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function qH(a) {
        const b = Wh();
        b && (a.debug_experiment_id = b);
        a.creatives = pH(/\b(?:creatives)=([\d,]+)/);
        a.adgroups = pH(/\b(?:adgroups)=([\d,]+)/);
        a.adgroups && (a.adtest = "on", a.disable_budget_throttling = !0, a.use_budget_filtering = !1, a.retrieve_only = !0, a.disable_fcap = !0)
    }

    function rH(a, b, c) {
        const d = a.H;
        var e = a.pubWin,
            f = a.L,
            g = Jg(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = Rg(e)) && wa(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = hp(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.Hc || (b.usrc = 1));
        h = d.google_trust_token_additional_signing_data || {};
        h.url = b.url;
        d.google_trust_token_additional_signing_data = h;
        g.url != (b.loc || b.url) && (b.top =
            g.url);
        a.kb && (b.etu = a.kb);
        0 <= a.B && (b.eae = a.B);
        (c = JE(d, f, f ? PA(c, f) : null)) && (b.fc = c);
        if (!Bh(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode && (h = (new Cf(c)).createElement("IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const ea = h.contentWindow.document;
                    ea.open();
                    ea.write(he(te));
                    ea.close();
                    g += ea.documentMode
                } catch (ea) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let l, k, m, n, q, r, t, C, w;
        try {
            var A = e.screenX;
            l = e.screenY
        } catch (ea) {}
        try {
            k = e.outerWidth,
                m = e.outerHeight
        } catch (ea) {}
        try {
            n = e.innerWidth, q = e.innerHeight
        } catch (ea) {}
        try {
            r = e.screenLeft, t = e.screenTop
        } catch (ea) {}
        try {
            n = e.innerWidth, q = e.innerHeight
        } catch (ea) {}
        try {
            C = e.screen.availWidth, w = e.screen.availTop
        } catch (ea) {}
        b.brdim = [r, t, A, l, C, w, k, m, n, q].join();
        A = 0;
        void 0 === u.postMessage && (A |= 1);
        0 < A && (b.osd = A);
        b.vis = zF(e.document);
        A = a.innerInsElement;
        e = DE(d) ? hG : WF(new fG(e, A, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = JF(e);
        if (!DE(d) && (e = Ch(d), null != e)) {
            A =
                0;
            a: {
                try {
                    {
                        var F = d.google_async_iframe_id;
                        const ea = window.document;
                        if (F) var G = ea.getElementById(F);
                        else {
                            var J = ea.getElementsByTagName("script"),
                                I = J[J.length - 1];
                            G = I && I.parentNode || null
                        }
                    }
                    if (F = G) {
                        G = [];
                        J = 0;
                        for (var ba = Date.now(); 100 >= ++J && 50 > Date.now() - ba && (F = mH(F));) 1 === F.nodeType && G.push(F);
                        var sa = G;
                        b: {
                            for (ba = 0; ba < sa.length; ba++) {
                                c: {
                                    var Y = sa[ba];
                                    try {
                                        if (Y.parentNode && 0 < Y.offsetWidth && 0 < Y.offsetHeight && Y.style && "none" !== Y.style.display && "hidden" !== Y.style.visibility && (!Y.style.opacity || 0 !== Number(Y.style.opacity))) {
                                            const ea =
                                                Y.getBoundingClientRect();
                                            var va = 0 < ea.right && 0 < ea.bottom;
                                            break c
                                        }
                                    } catch (ea) {}
                                    va = !1
                                }
                                if (!va) {
                                    var Ga = !1;
                                    break b
                                }
                            }
                            Ga = !0
                        }
                        if (Ga) {
                            b: {
                                const ea = Date.now();Ga = /^html|body$/i;va = /^fixed/i;
                                for (Y = 0; Y < sa.length && 50 > Date.now() - ea; Y++) {
                                    const zg = sa[Y];
                                    if (!Ga.test(zg.tagName) && va.test(zg.style.position || hh(zg, "position"))) {
                                        var Ie = zg;
                                        break b
                                    }
                                }
                                Ie = null
                            }
                            break a
                        }
                    }
                } catch {}
                Ie = null
            }
            Ie && Ie.offsetWidth * Ie.offsetHeight <= 4 * e.width * e.height && (A = 1);
            b.pfx = A
        }
        a: {
            if (.05 > Math.random() && f) try {
                const ea = f.document.getElementsByTagName("head")[0];
                var Sr = ea ? wG(ea) : 0;
                break a
            } catch (ea) {}
            Sr = 0
        }
        f = Sr;
        0 !== f && (b.cms = f);
        d.google_lrv !== H(a.aa, 2) && (b.alvm = d.google_lrv || "none")
    }

    function sH(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : Yf(() => {
            c++;
            return !1
        }, !0, !0, a);
        c && (b.nhd = c)
    }

    function tH(a, b) {
        const c = X(b, 8, {});
        b = X(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function uH(a, b, c) {
        const d = a.H;
        var e = a.H;
        b.dt = ej;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = u.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (I) {}
            g = null
        }(e = (e = g) ? kF(e, u.Date.now() - ej, 1E6) : null) && (b.bdt = e);
        b.idt = kF(a.I, ej);
        e = a.H;
        b.shv = H(a.aa, 2);
        a.Sa && (b.mjsv = a.Sa);
        "sa" == e.google_loader_used ? b.ptt = 5 : "aa" == e.google_loader_used && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
        if (e = Rg(a.pubWin)) b.is_amp = 1, b.amp_v = Sg(e), (e = Tg(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        if ("_gfp_a_" in a.pubWin) {
            e = a.pubWin._gfp_a_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
            e && (e = new cE(a.pubWin), (g = ZD(e, "__gads", c)) && (b.cookie = g), T(Gn) && (g = ZD(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g), T(Hn) && "1" === ZD(e, "__gpi_opt_out", c) && (b.gpico = "1", b.pdopt = "1"))
        }
        e = Yz();
        f = X(e, 8, {});
        g = d.google_ad_section;
        f[g] && (b.prev_fmts = f[g]);
        f = X(e, 9, {});
        f[g] && (b.prev_slotnames = f[g].toLowerCase());
        tH(d, e);
        g = X(e, 15, 0);
        0 < g && (b.nras = String(g));
        (f = Rg(window)) ? (f ? (g = f.pageViewId, f = f.clientId, "string" === typeof f && (g += f.replace(/\D/g, "").substr(0, 6))) : g = null, g = +g) : (g = Jg(window), (f = g.google_global_correlator) || (g.google_global_correlator = f = 1 + Math.floor(Math.random() * Math.pow(2, 43))), g = f);
        b.correlator = X(e, 7, g);
        T(wo) && (b.rume = 1);
        if (d.google_ad_channel) {
            g = X(e, 10, {});
            f = "";
            var h = d.google_ad_channel.split(hH);
            for (var l = 0; l < h.length; l++) {
                var k = h[l];
                g[k] ? f += k + "+" : g[k] = !0
            }
            b.pv_ch = f
        }
        if (d.google_ad_host_channel) {
            f =
                X(e, 11, []);
            h = d.google_ad_host_channel.split("|");
            e = -1;
            g = [];
            for (l = 0; l < h.length; l++) {
                k = h[l].split(hH);
                f[l] || (f[l] = {});
                var m = "";
                for (var n = 0; n < k.length; n++) {
                    var q = k[n];
                    "" !== q && (f[l][q] ? m += "+" + q : f[l][q] = !0)
                }
                m = m.slice(1);
                g[l] = m;
                "" !== m && (e = l)
            }
            f = "";
            if (-1 < e) {
                for (h = 0; h < e; h++) f += g[h] + "|";
                f += g[e]
            }
            b.pv_h_ch = f
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        e = d.google_ad_client;
        try {
            var r = Jg(window),
                t = r.google_prev_clients;
            t || (t = r.google_prev_clients = {});
            if (e in t) var C = 1;
            else t[e] = !0, C = 2
        } catch {
            C = 0
        }
        b.pv =
            C;
        t = a.pubWin.document;
        C = a.H;
        e = a.pubWin;
        r = t.domain;
        e = (Jc(c, 5) && QA(e) ? e.document.cookie : null) || "";
        h = a.pubWin.screen;
        l = t.referrer;
        m = uh();
        if (Rg()) var w = window.gaGlobal || {};
        else {
            g = Math.round((new Date).getTime() / 1E3);
            f = C.google_analytics_domain_name;
            c = "undefined" == typeof f ? zG("auto", r) : zG(f, r);
            n = -1 < e.indexOf("__utma=" + c + ".");
            k = -1 < e.indexOf("__utmb=" + c);
            (r = (Wg() || window).gaGlobal) || (r = {}, (Wg() || window).gaGlobal = r);
            t = !1;
            if (n) {
                var A = e.split("__utma=" + c + ".")[1].split(";")[0].split(".");
                k ? r.sid = A[3] : r.sid ||
                    (r.sid = g + "");
                r.vid = A[0] + "." + A[1];
                r.from_cookie = !0
            } else {
                r.sid || (r.sid = g + "");
                if (!r.vid) {
                    t = !0;
                    k = Math.round(2147483647 * Math.random());
                    n = xG.appName;
                    q = xG.version;
                    var F = xG.language ? xG.language : xG.browserLanguage,
                        G = xG.platform,
                        J = xG.userAgent;
                    try {
                        A = xG.javaEnabled()
                    } catch (I) {
                        A = !1
                    }
                    A = [n, q, F, G, J, A ? 1 : 0].join("");
                    h ? A += h.width + "x" + h.height + h.colorDepth : u.java && u.java.awt && (h = u.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), A += h.screen.width + "x" + h.screen.height);
                    A = A + e + (l || "");
                    for (h = A.length; 0 < m;) A += m-- ^ h++;
                    r.vid = (k ^ yG(A) & 2147483647) + "." + g
                }
                r.from_cookie || (r.from_cookie = !1)
            }
            if (!r.cid) {
                b: for (g = f, A = 999, g && (g = 0 == g.indexOf(".") ? g.substr(1) : g, A = g.split(".").length), g = 999, e = e.split(";"), f = 0; f < e.length; f++)
                    if (h = AG.exec(e[f]) || BG.exec(e[f]) || CG.exec(e[f])) {
                        l = h[1] || 0;
                        if (l == A) {
                            w = h[2];
                            break b
                        }
                        l < g && (g = l, w = h[2])
                    }t && w && -1 != w.search(/^\d+\.\d+$/) ? (r.vid = w, r.from_cookie = !0) : w != r.vid && (r.cid = w)
            }
            r.dh = c;
            r.hid || (r.hid = Math.round(2147483647 * Math.random()));
            w = r
        }
        b.ga_vid = w.vid;
        b.ga_sid = w.sid;
        b.ga_hid = w.hid;
        b.ga_fc = w.from_cookie;
        b.ga_cid = w.cid;
        b.ga_wpids = C.google_analytics_uacct;
        sH(a.pubWin, b);
        (a = d.google_ad_layout) && 0 <= aF[a] && (b.rplot = aF[a])
    }

    function vH(a, b) {
        a = a.l;
        if (a ? .l() || fA()) b.npa = 1;
        if (a) {
            Ec(a, 3) && (b.gdpr = Jc(a, 3) ? "1" : "0");
            var c = x(a, 1);
            c && (b.us_privacy = c);
            (c = x(a, 2)) && (b.gdpr_consent = c);
            (c = x(a, 4)) && (b.addtl_consent = c);
            (a = x(a, 7)) && (b.tcfe = a)
        }
    }

    function wH(a, b) {
        const c = a.H;
        vH(a, b);
        eg(hA, (d, e) => {
            b[d] = c[e]
        });
        DE(c) && (a = RE(c), b.fa = a);
        b.pi || null == c.google_ad_slot || (a = gq(c), null != a.j && (a = jl(a.j.value), b.pi = a))
    }

    function xH(a, b) {
        var c = Vg() || $o(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = $o(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function yH(a, b) {
        var c = a.pubWin;
        null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = $o(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = gg(a.join(""))) : a = 0;
        0 !== a && (b.ifk = a)
    }

    function zH(a, b) {
        (a = dA()[a.H.google_ad_client]) && (b.psts = a.join())
    }

    function AH(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function BH(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = Ub(a))
    }

    function CH(a, b) {
        const c = T(VG(window) ? Ko : Jo),
            d = T(Mo);
        (a = WG(a.pubWin, c, d)) && 0 < a.length && (b.tt_state = Ub(JSON.stringify(a)))
    }

    function DH(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                0 <= d && (b.wsm = d + 1)
            }
        } catch {}
    }

    function EH(a, b) {
        0 <= a.H.google_ad_public_floor && (b.pubf = a.H.google_ad_public_floor);
        0 <= a.H.google_ad_private_floor && (b.pvtf = a.H.google_ad_private_floor)
    }

    function FH(a, b) {
        const c = Number(a.H.google_traffic_source);
        c && Object.values(Ja).includes(c) && (b.trt = a.H.google_traffic_source)
    }

    function jH(a, b) {
        const c = {};
        wH(a, c);
        KG();
        c.adsid = HG[1];
        KG();
        c.pucrd = HG[6];
        BH(a, c);
        CH(a, c);
        uH(a, c, b);
        xh(c);
        c.u_sd = ap(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        Mi(889, () => {
            if (null == a.L) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = GD(a.L, a.innerInsElement);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                cp(a.innerInsElement) || (c.adx = -12245933, c.ady = -12245933, a.j |= 32768)
            }
        });
        xH(a, c);
        yH(a, c);
        oH(a, c);
        nH(a, c);
        a.F && (c.oid = a.F);
        zH(a, c);
        c.pvsid = Eg(a.pubWin,
            Li);
        AH(a, c);
        DH(a, c);
        T(hn) && (c.uas = gH(a.pubWin));
        const d = SG(a.pubWin);
        d && (c.nvt = d);
        a.D && (c.scar = a.D);
        a.C && (c.topics = a.C instanceof Uint8Array ? Sb(a.C, 3) : a.C);
        rH(a, c, b);
        c.fu = a.j;
        c.bc = DG();
        KG();
        c.jar = HG[4];
        B(a.aa, 9) && qH(c);
        bj() && (c.atl = !0);
        EH(a, c);
        FH(a, c);
        "runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (c.td = 1);
        null == O(Ro).j(po.j, po.defaultValue) || !1 !== a.H.google_video_play_muted || 10 !== a.H.google_reactive_ad_format && 11 !== a.H.google_reactive_ad_format || (c.sdkv = O(Ro).j(po.j,
            po.defaultValue));
        return c
    }
    const kH = /YtLoPri/;
    var GH = class extends K {
        constructor(a) {
            super(a)
        }
        l() {
            return D(this, mD, 1)
        }
        F() {
            return D(this, HD, 2)
        }
    };

    function HH(a) {
        Li.Wd(b => {
            b.shv = String(a);
            b.mjsv = "m202208170101";
            b.eid = YD(u)
        })
    }

    function IH(a) {
        HH(H(a, 2));
        a = B(a, 6);
        gd(PD, li);
        PD = a
    };

    function JH({
        Je: a,
        If: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };
    var KH = "undefined" === typeof sttc ? void 0 : sttc;

    function LH(a) {
        var b = Li;
        try {
            return gd(a, ki), new LD(JSON.parse(a))
        } catch (c) {
            b.la(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new LD
    };

    function MH(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = Gf(a.j.U() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = NH(a, b, c, a.j.j.elementsFromPoint(qf(c.left + c.width / 2, c.left, c.right - 1), qf(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = NH(a, b, c, a.j.j.elementsFromPoint(qf(c.left + c.width / 2, c.left, c.right - 1), qf(c.top + 2, c.top, c.bottom - 1)), 2, e.Ca),
            g = NH(a, b, c, a.j.j.elementsFromPoint(qf(c.left + 2, c.left, c.right - 1), qf(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.Ca, ...f.Ca]);
        const h = NH(a, b, c, a.j.j.elementsFromPoint(qf(c.right - 1 - 2, c.left, c.right - 1), qf(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.Ca, ...f.Ca, ...g.Ca]);
        var l = OH(a, b, c),
            k = n => nb(a.A, n.overlapType) && nb(a.B, n.overlapDepth) && nb(a.l, n.overlapDetectionPoint);
        e = jb([...e.entries, ...f.entries, ...g.entries, ...h.entries], k);
        k = jb(l, k);
        l = [...e, ...k];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < l.length || f;
        g = Hf(a.j.j);
        const m = new Ng(c.left, c.top, c.width, c.height);
        e = [...kb(e, n => new Ng(n.elementRect.left,
            n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...ub(kb(k, n => Pg(m, n.elementRect))), ...jb(Pg(m, new Ng(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: l,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? PH(m, e) : QH(c, e)
        }
    }

    function RH(a, b) {
        const c = a.j.U(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(l => {
                                    const k = new gi,
                                        m = fi(k, () => MH(a, l));
                                    m && (k.j.length && (m.executionTime = Math.round(Number(k.j[0].duration))), h.disconnect(), e(m))
                                }, SH);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function NH(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            Ca: []
        };
        const g = [],
            h = [];
        for (let n = 0; n < d.length; n++) {
            const q = d[n];
            if (q === b) continue;
            if (nb(f, q)) continue;
            h.push(q);
            const r = q.getBoundingClientRect();
            if (a.j.contains(q, b)) {
                g.push(TH(a, c, q, r, 1, e));
                continue
            }
            if (a.j.contains(b, q)) {
                g.push(TH(a, c, q, r, 2, e));
                continue
            }
            a: {
                var l = a;
                var k = b,
                    m = q;
                const w = l.j.Se(k, m);
                if (!w) {
                    l = null;
                    break a
                }
                const {
                    suspectAncestor: A,
                    Oa: F
                } = UH(l, k, w, m) || {},
                {
                    suspectAncestor: G,
                    Oa: J
                } = UH(l, m, w, k) || {};l = A && F && G && J ? F <= J ? {
                    suspectAncestor: A,
                    overlapType: VH[F]
                } : {
                    suspectAncestor: G,
                    overlapType: WH[J]
                } : A && F ? {
                    suspectAncestor: A,
                    overlapType: VH[F]
                } : G && J ? {
                    suspectAncestor: G,
                    overlapType: WH[J]
                } : null
            }
            const {
                suspectAncestor: t,
                overlapType: C
            } = l || {};
            t && C ? g.push(TH(a, c, q, r, C, e, t)) : g.push(TH(a, c, q, r, 9, e))
        }
        return {
            entries: g,
            Ca: h
        }
    }

    function OH(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = cg(b, a.j.U());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(TH(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(TH(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(TH(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function PH(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Og(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function QH(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function TH(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (nb(a.A, e) && nb(a.l, f)) {
            b = new Kg(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = XH(a, c)) && Mg(b, a)) c = 4;
            else {
                a = YH(c, d);
                if (Ab) {
                    e = nh(c, "paddingLeft");
                    f = nh(c, "paddingRight");
                    var l = nh(c, "paddingTop"),
                        k = nh(c, "paddingBottom");
                    e = new Kg(l, f, k, e)
                } else e = gh(c, "paddingLeft"), f = gh(c, "paddingRight"), l = gh(c, "paddingTop"), k = gh(c, "paddingBottom"), e = new Kg(parseFloat(l), parseFloat(f), parseFloat(k), parseFloat(e));
                Mg(b, new Kg(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = YH(c, d), c = Mg(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function UH(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.U();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = cg(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    Oa: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    Oa: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    Oa: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const l = ZH(a, e.slice(0, f), h);
                    if (g || l) return {
                        suspectAncestor: h,
                        Oa: 4
                    }
                }
            }
        }
        return (a = ZH(a, e, b)) ? {
                suspectAncestor: a,
                Oa: 5
            } :
            null
    }

    function ZH(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = cg(f, a.j.U());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function XH(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new Kg(a.top, a.right, a.bottom, a.left)
    }

    function YH(a, b) {
        if (!Ab || 9 <= Number(Pb)) {
            var c = gh(a, "borderLeftWidth");
            d = gh(a, "borderRightWidth");
            e = gh(a, "borderTopWidth");
            a = gh(a, "borderBottomWidth");
            c = new Kg(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = ph(a, "borderLeft");
            var d = ph(a, "borderRight"),
                e = ph(a, "borderTop");
            a = ph(a, "borderBottom");
            c = new Kg(e, d, a, c)
        }
        return new Kg(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class $H {
        constructor(a) {
            var b = aI;
            this.j = Bf(a);
            this.A = [5, 8, 9];
            this.B = [3, 4];
            this.l = b
        }
    }
    const VH = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        WH = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    jb(fg({
        Ah: 1,
        Bh: 2,
        ij: 3,
        jj: 4,
        lj: 5,
        wh: 6,
        xh: 7,
        zh: 8,
        Ai: 9,
        kj: 10,
        yh: 11,
        hj: 12,
        uh: 13
    }), a => !nb([1, 2], a));
    fg({
        Kg: 1,
        Bi: 2,
        Vg: 3,
        mj: 4
    });
    const aI = fg({
            Lg: 1,
            pj: 2,
            mi: 3,
            Yi: 4
        }),
        SH = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function bI(a, b, c, d) {
        const e = new os;
        let f = "";
        const g = h => {
            try {
                const l = "object" === typeof h.data ? h.data : JSON.parse(h.data);
                f === l.paw_id && (Qe(a, "message", g), l.error ? e.j(Error(l.error)) : e.resolve(d(l)))
            } catch (l) {}
        };
        return "function" === typeof a.gmaSdk ? .getQueryInfo ? (L(a, "message", g), f = c(a.gmaSdk), e.promise) : "function" === typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage || "function" === typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage ? (f = String(Math.floor(2147483647 * dg())), L(a, "message",
            g), b(a.webkit.messageHandlers, f), e.promise) : null
    }

    function cI(a) {
        return bI(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    };

    function dI(a) {
        if (a.j) return a.j;
        a.j = ug(a.A, "__uspapiLocator");
        return a.j
    }

    function eI(a, b) {
        if ("function" === typeof a.A ? .__uspapi) a = a.A.__uspapi, a("getUSPData", 1, b);
        else if (dI(a)) {
            fI(a);
            const c = ++a.D;
            a.C[c] = b;
            a.j && a.j.postMessage({
                __uspapiCall: {
                    command: "getUSPData",
                    version: 1,
                    callId: c
                }
            }, "*")
        }
    }

    function gI(a, b) {
        let c = {};
        if ("function" === typeof a.A ? .__uspapi || null != dI(a)) {
            var d = Ke(() => b(c));
            eI(a, (e, f) => {
                f && (c = e);
                d()
            });
            setTimeout(d, 500)
        } else b(c)
    }

    function fI(a) {
        a.B || (a.B = b => {
            try {
                let d = {};
                "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                var c = d.__uspapiReturn;
                a.C ? .[c.callId](c.returnValue, c.success)
            } catch {}
        }, L(a.A, "message", a.B))
    }
    var hI = class extends Qj {
        constructor(a) {
            super();
            this.A = a;
            this.j = null;
            this.C = {};
            this.D = 0;
            this.B = null
        }
        l() {
            this.C = {};
            this.B && (Qe(this.A, "message", this.B), delete this.B);
            delete this.C;
            delete this.A;
            delete this.j;
            super.l()
        }
    };
    var iI = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function jI(a) {
        a.D || (a.j || (a.j = ug(a.B, "googlefcPresent")), a.D = !0);
        return !!a.j
    }

    function kI(a) {
        a.A || (a.A = b => {
            try {
                const c = Xc(iI, b.data.__fciReturn);
                (0, a.C[x(c, 1)])(c)
            } catch (c) {}
        }, L(a.B, "message", a.A))
    }

    function lI(a) {
        return new Promise(b => {
            if (jI(a))
                if (a.j === a.B) {
                    var c = a.j.googlefc || (a.j.googlefc = {});
                    c.__fci = c.__fci || [];
                    c.__fci.push("loaded", d => {
                        b(Xc(iI, d))
                    })
                } else kI(a), c = a.G++, a.C[c] = b, a.j.postMessage({
                    __fciCall: {
                        command: "loaded",
                        callId: c
                    }
                }, "*")
        })
    }
    var mI = class extends Qj {
        constructor(a) {
            super();
            this.B = a;
            this.A = this.j = null;
            this.C = {};
            this.G = 0;
            this.D = !1
        }
    };
    const nI = (a, b) => {
        try {
            const g = void 0 === B(b, 6) ? !0 : B(b, 6);
            a: switch (z(b, 4, 0)) {
                case 1:
                    var c = "pt";
                    break a;
                case 2:
                    c = "cr";
                    break a;
                default:
                    c = ""
            }
            var d = new bf($e(z(b, 2, 0)), H(b, 3), c),
                e = D(b, Ze, 5) ? .l() ? ? "";
            d.rb = e;
            d.j = g;
            d.win = a;
            var f = d.build();
            Ue(f)
        } catch {}
    };

    function oI(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? nI(a, b) : L(a, "load", () => void nI(a, b)))
    };

    function pI(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function qI(a) {
        if (a === a.top || Xf(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && pI(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new os;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                kb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    var rI = class extends K {
            constructor(a) {
                super(a)
            }
        },
        sI = [1, 3];
    const tI = N `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function uI(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(h) {
                return g.j(h).then(({
                    data: l
                }) => l)
            }
            const e = bg("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = Fd(tI).toString();
            const f = (new URL(tI.toString())).origin,
                g = dC({
                    destination: a,
                    Aa: e,
                    origin: f,
                    Na: "goog:gRpYw:doubleclick"
                });
            g.j("goog:topics:frame:handshake:ack").then(({
                data: h
            }) => {
                "goog:topics:frame:handshake:ack" ===
                h && c(d)
            });
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        })
    }

    function vI(a, b, c, d, e) {
        var f = Li;
        const {
            Fb: g,
            Eb: h
        } = wI(e);
        b = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        b.getTopicsPromise || (c = {
            message: "goog:topics:frame:get:topics",
            callApi: c,
            sendGen204: d
        }, d && (c.pvsid = Eg(window)), a = a(c).then(l => {
            let k = h;
            if (l instanceof Uint8Array) k || (k = !(g instanceof Uint8Array && sb(l, g)));
            else if (mi()(l)) k || (k = l !== g);
            else return f.la(989, Error(JSON.stringify(l))), 7;
            if (k && e) try {
                var m = new rI;
                var n = y(m, 2, Xh());
                l instanceof Uint8Array ? Mc(n, 1, sI, l) : Mc(n, 3, sI, l);
                e.setItem("goog:cached:topics",
                    $c(n))
            } catch {}
            return l
        }), b.getTopicsPromise = a);
        return g && !h ? Promise.resolve(g) : b.getTopicsPromise
    }

    function wI(a) {
        if (!a) return {
            Fb: null,
            Eb: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                Fb: null,
                Eb: !0
            };
            const l = Xc(rI, b);
            let k;
            const m = Nc(l, sI);
            switch (m) {
                case 0:
                    k = null;
                    break;
                case 1:
                    var c;
                    a = l;
                    var d = 1 === Nc(l, sI) ? 1 : -1; {
                        let n = x(a, d);
                        if (null == n) var e = null;
                        else n instanceof ec ? e = n : (b = n, (n = null == b ? b : b.constructor === ec ? b : "string" === typeof b ? b ? new ec(b, ac) : dc() : Zb(b) ? b.length ? new ec(new Uint8Array(b), ac) : dc() : null) && y(a, d, n, void 0, !0), e = n)
                    }
                    d = e;
                    var f = null == d ? dc() : d;
                    cc(ac);
                    var g = f.P;
                    var h = null == g ||
                        Zb(g) ? g : "string" === typeof g ? Xb(g) : null;
                    k = (c = null == h ? h : f.P = h) ? new Uint8Array(c) : $b || ($b = new Uint8Array(0));
                    break;
                case 3:
                    k = z(l, 3 === Nc(l, sI) ? 3 : -1, 0);
                    break;
                default:
                    ze(m, void 0)
            }
            return {
                Fb: k,
                Eb: z(l, 2, 0) + 6048E5 < Xh()
            }
        } catch {
            return {
                Fb: null,
                Eb: !0
            }
        }
    };

    function xI(a, b) {
        if (db()) {
            var c = a.document.documentElement.lang;
            yI(a) ? zI(b, Eg(a), !0, "", c) : (new MutationObserver((d, e) => {
                yI(a) && (zI(b, Eg(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function yI(a) {
        return a.document.documentElement.classList.contains("translated-rtl") || a.document.documentElement.classList.contains("translated-ltr")
    }

    function zI(a, b, c, d, e) {
        Kh({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function AI(a, b) {
        const c = a.document.getElementById(String(b.google_async_iframe_id) + "_host");
        a = a.document.getElementById(String(b.google_async_iframe_id) + "_host");
        if (null == c || null == a) throw Error("no_ins_in_dom");
        return {
            innerInsElement: c,
            outerInsElement: a
        }
    }

    function BI(a) {
        const b = a.innerInsElement;
        a = a.outerInsElement;
        if (!b || !a) throw Error("no_ins_in_loader_provided_slot");
        return {
            innerInsElement: b,
            outerInsElement: a
        }
    }

    function CI() {
        return T(mo) ? "google_affa_anchor_config" : "google_affa_link_config"
    }
    async function DI({
        aa: a,
        ca: b,
        Sa: c,
        slot: d
    }) {
        const e = d.vars,
            f = $f(d.pubWin),
            {
                innerInsElement: g,
                outerInsElement: h
            } = T(Fn) ? BI(d) : AI(d.pubWin, d.vars),
            l = new hE({
                L: f,
                pubWin: d.pubWin,
                H: e,
                aa: a,
                ca: b,
                Sa: c,
                innerInsElement: g,
                outerInsElement: h
            });
        l.I = Date.now();
        dj(1, [l.H]);
        Mi(1032, () => {
            if (f && T(Go)) {
                var k = l.H;
                X(Yz(), 32, !1) || (bA(Yz(), 32, !0), xI(f, "sa" === k.google_loader_used ? 5 : 9))
            }
        });
        try {
            await EI(l)
        } catch (k) {
            if (!Pi(159, k)) throw k;
        }
        Mi(639, () => {
            {
                var k = l.H;
                const n = l.L;
                if (n && 1 === k.google_responsive_auto_format && !0 === k.google_full_width_responsive_allowed) {
                    var m;
                    (m = (m = n.document.getElementById(k.google_async_iframe_id)) ? Rf(m, "INS", "adsbygoogle") : null) ? (k = new hF(n, m, k), k.j = u.setInterval(Ca(k.B, k), 500), k.B(), k = !0) : k = !1
                } else k = !1
            }
            return k
        });
        Mi(914, () => {
            if (!f || ab() || T(jo)) {
                if (T(Rn) && d.pubWin && !f && !ab() && T(jo)) {
                    var k = d.pubWin,
                        m = new rD(d.pubWin.location ? .hash || "", a, null, FI(d.vars)),
                        n = d.vars.google_ad_client;
                    X(Yz(), 29, !1) || (bA(Yz(), 29, !0), yD(k, m, n))
                }
            } else k = new rD(f.location ? .hash || "", a, null, FI(d.vars)), m = d.vars.google_ad_client, X(Yz(), 29, !1) || (bA(Yz(), 29, !0), yD(f,
                k, m))
        });
        T(jo) && T(ko) && d.vars.google_ad_client && f && !ab() && (b = PA(l.l)) && (b = b.getItem(CI())) && GI(f, e, b);
        Ri(l.pubWin, "affa", k => {
            Mi(1008, () => {
                if (T(jo) && d.vars.google_ad_client && f && !ab()) {
                    var m = k.config;
                    if (T(ko)) {
                        var n = PA(l.l);
                        n && n.setItem(CI(), m)
                    }
                    GI(f, e, k.config)
                }
            })
        });
        return l
    }

    function GI(a, b, c) {
        c = Xc(GH, c);
        c.l() && (c = new rD(a.location ? .hash || "", null, c, FI(b)), b = b.google_ad_client, X(Yz(), 29, !1) || (bA(Yz(), 29, !0), yD(a, c, b)))
    }

    function FI(a) {
        return "on" === a.google_adtest
    }

    function EI(a) {
        if (/_sdo/.test(a.H.google_ad_format)) return Promise.resolve();
        O(Ki).j(13);
        O(Ki).j(11);
        var b = Yz(),
            c = X(b, 23, !1);
        c || bA(b, 23, !0);
        if (!c) {
            b = a.H.google_ad_client;
            c = a.aa;
            b = Array.isArray(Sc(c)) ? D(c.l(), XA, 2) : sb(Uc(c, JD, 14, Tc) ? .l() ? ? [], [b]) ? D(D(Uc(c, JD, 14, Tc), HD, 2), XA, 2) : new XA;
            b = new YA(a.pubWin, a.H.google_ad_client, b, B(a.aa, 6));
            b.l = !0;
            const e = D(b.C, dm, 1);
            if (b.l) {
                c = b.j;
                if (b.B && !Tv(e)) {
                    var d = new MA;
                    d = y(d, 1, 1)
                } else d = null;
                if (d) {
                    d = $c(d);
                    try {
                        c.localStorage.setItem("google_auto_fc_cmp_setting", d)
                    } catch (f) {}
                }
            }
            e &&
                Uv(new Vv(b.j, new lw(b.j, b.A), e, new zt(b.j)))
        }
        b = !Rg() && !$a();
        return !b || b && !HI(a) ? II(a) : Promise.resolve()
    }

    function JI(a, b, c = !1) {
        b = GD(a.L, b);
        const d = Vg() || $o(a.pubWin.top);
        if (!b || -12245933 == b.y || -12245933 == d.width || -12245933 == d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = bp(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function HI(a) {
        return KI(a) || LI(a)
    }

    function KI(a) {
        const b = a.H;
        if (!b.google_pause_ad_requests) return !1;
        const c = u.setTimeout(() => {
                Oi("abg:cmppar", {
                    client: a.H.google_ad_client,
                    url: a.H.google_page_url
                })
            }, 1E4),
            d = Ni(450, () => {
                b.google_pause_ad_requests = !1;
                u.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                HI(a) || II(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function LI(a) {
        const b = a.pubWin.document,
            c = MI();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.innerInsElement,
            e = AF(b);
        if (!e) return !1;
        if (!BF(b)) return NI(a, c.visible, d);
        const f = 3 === zF(b);
        if (JI(a, d) <= c.hidden && !f) return !1;
        let g = Ni(332, () => {
            !BF(b) && g && (Qe(b, e, g), NI(a, c.visible, d) || II(a), g = null)
        });
        return L(b, e, g)
    }

    function MI() {
        const a = {
            hidden: 0,
            visible: 3
        };
        u.IntersectionObserver || (a.visible = -1);
        Uf() && (a.visible *= 2);
        return a
    }

    function NI(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.H;
        if (!vj(d.google_reactive_ad_format) && (DE(d) || d.google_reactive_ads_config) || !cp(c) || JI(a, c) <= b) return !1;
        var e = Yz(),
            f = X(e, 8, {});
        e = X(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const l = new u.IntersectionObserver((k, m) => {
                ib(k, n => {
                    0 >= n.intersectionRatio || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${100*b}%`
            });
            a.J = l;
            l.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    h(void 0)
                })
        });
        ja(Promise, "any").call(Promise, [f, e]).then(() => {
            Mi(294, () => {
                II(a)
            })
        });
        return !0
    }
    async function II(a) {
        Mi(326, () => {
            if (1 === wh(a.H)) {
                var c = T(Ho),
                    d = c || T(Fo),
                    e = a.pubWin;
                if (d && e === a.L) {
                    var f = new Yi;
                    d = new Zi;
                    f.setCorrelator(Eg(a.pubWin));
                    var g = YD(a.pubWin);
                    Lc(f, 5, g, "");
                    Wc(f, 2);
                    g = Pc(d, 1, f);
                    f = new Xi;
                    f = Vc(f, 10, !0);
                    var h = T(yo);
                    f = Vc(f, 8, h);
                    h = T(zo);
                    f = Vc(f, 12, h);
                    h = T(Co);
                    f = Vc(f, 7, h);
                    h = T(Bo);
                    f = Vc(f, 13, h);
                    Pc(g, 2, f);
                    e.google_rum_config = d.toJSON();
                    ag(e.document, ch(B(a.aa, 9) && c ? a.ca.xf : a.ca.yf))
                } else di()
            }
        });
        a.H.google_ad_channel = OI(a, a.H.google_ad_channel);
        a.H.google_tag_partner = PI(a, a.H.google_tag_partner);
        QI(a);
        var b = a.H.google_start_time;
        "number" === typeof b && (ej = b, a.H.google_start_time = null);
        FD(a);
        RI(a);
        eA() && fB({
            win: a.pubWin,
            webPropertyCode: a.H.google_ad_client,
            mb: ch(a.ca.mb)
        });
        DE(a.H) && (dB() && (a.H.google_adtest = a.H.google_adtest || "on"), a.H.google_pgb_reactive = a.H.google_pgb_reactive || 3);
        SI(a.L);
        b = "function" === typeof a.pubWin.document.browsingTopics && (!T(ro) || UD(a.pubWin.document));
        if (T(so) && b) try {
            a.G = uI(a.pubWin)
        } catch (c) {
            Pi(984, c)
        }
        return TI(a)
    }

    function RI(a) {
        a.L && (HE(a.L, a.ca.Le), FE(a.L.location) && QE(a.L, {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.H.google_ad_client
        }))
    }

    function OI(a, b) {
        return (b ? [b] : []).concat(Uz(a.H).ad_channels || []).join("+")
    }

    function PI(a, b) {
        return (b ? [b] : []).concat(Uz(a.H).tag_partners || []).join("+")
    }

    function UI(a) {
        const b = bg("IFRAME");
        eg(a, (c, d) => {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function VI(a, b, c) {
        return 9 == a.H.google_reactive_ad_format && Rf(a.outerInsElement, null, "fsi_container") ? (a.innerInsElement.appendChild(b), Promise.resolve(b)) : OE(a.ca.Pd, 525, d => {
            a.innerInsElement.appendChild(b);
            d.createAdSlot(a.L, a.H, b, a.outerInsElement.parentElement, PA(c, a.pubWin));
            return b
        })
    }

    function WI(a, b, c) {
        oI(a.pubWin, Vc(We(Wc(Wc(Ve(new Xe, Ye(new Ze, String(Eg(a.pubWin)))), 4), 2), H(a.aa, 2)), 6, !0));
        const d = a.L;
        a.H.google_acr && a.H.google_acr(b);
        L(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const f = d ? Uz(d).enable_overlap_observer || !1 : !1;
            (a.H.ovlp || f) && d && d === a.pubWin && XI(d, a, a.outerInsElement, b)
        });
        var e = f => {
            f && a.A.push(() => {
                f.wa()
            })
        };
        YI(a, b);
        T(Hn) && ZI(a, b);
        !d || DE(a.H) && !SE(a.H) || (e(new mG(d, b, a.H)), e(new wF(a, b)), e(d.IntersectionObserver ? null : new yF(d, b, a.innerInsElement)));
        d && (e(new qF(d, b)), a.A.push(bF(d, a.H)), O(gF).init(d), a.A.push(mF(d, a.outerInsElement, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.H.iaaso;
        if (null != c) {
            e = a.outerInsElement;
            const f = e.parentElement;
            (f && pp.test(f.className) ? f : e).setAttribute("data-auto-ad-size", c)
        }
        c = a.outerInsElement;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        $I(a)
    }

    function YI(a, b) {
        const c = a.pubWin,
            d = a.H.google_ad_client,
            e = dA();
        let f = null;
        const g = Ri(c, "pvt", (h, l) => {
            "string" === typeof h.token && l.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
        });
        a.A.push(g)
    }

    function aJ(a, b) {
        var c = ZD(a, "__gpi_opt_out", b.l);
        c && (c = hf(gf(ff(ef(new jf, c), 2147483647), "/"), b.pubWin.location.hostname), $D(a, "__gpi_opt_out", c, b.l))
    }

    function ZI(a, b) {
        const c = Ri(a.pubWin, "gpi-uoo", (d, e) => {
            if (e.source === b.contentWindow) {
                e = hf(gf(ff(ef(new jf, d.userOptOut ? "1" : "0"), 2147483647), "/"), a.pubWin.location.hostname);
                var f = new cE(a.pubWin);
                $D(f, "__gpi_opt_out", e, a.l);
                if (d.userOptOut || d.clearAdsData) aE(f, "__gads", a.l), aE(f, "__gpi", a.l)
            }
        });
        a.A.push(c)
    }

    function $I(a) {
        const b = Rg(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                const c = d => {
                    "fill_sticky" === d.data && b.renderStart && b.renderStart()
                };
                L(a.pubWin, "message", Li.ma(616, c));
                a.A.push(() => {
                    Qe(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function XI(a, b, c, d) {
        RH(new $H(a), c).then(e => {
            dj(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && pp.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }).then(e => {
            const f = b.H.armr || "",
                g = e.executionTime || "",
                h = null == b.H.iaaso ? "" : Number(b.H.iaaso),
                l = Number(e.isOverlappingOrOutsideViewport),
                k = kb(e.entries, w => `${w.overlapType}:${w.overlapDepth}:${w.overlapDetectionPoint}`),
                m = Number(e.overlappedArea.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                q =
                m * e.targetRect.width * e.targetRect.height,
                r = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                t = yh(e.target),
                C = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = e.viewportSize.width + "x" + e.viewportSize.height;
            Oi("ovlp", {
                adf: b.H.google_ad_dom_fingerprint,
                armr: f,
                client: b.H.google_ad_client,
                eid: YD(b.H),
                et: g,
                fwrattr: b.H.google_full_width_responsive,
                iaaso: h,
                io: l,
                saldr: b.H.google_loader_used,
                oa: m,
                oe: k.join(","),
                qid: n,
                rafmt: b.H.google_responsive_auto_format,
                roa: q,
                slot: b.H.google_ad_slot,
                sp: r,
                tgt: t,
                tr: C,
                url: b.H.google_page_url,
                vp: e,
                pvc: Eg(a)
            }, 1)
        }).catch(e => {
            dj(8, ["Error:", e.message, c]);
            Oi("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function bJ(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }

    function cJ(a, b, c, d) {
        var e = a.H;
        const f = e.google_async_iframe_id,
            g = e.google_ad_width,
            h = e.google_ad_height;
        var l = TE(e),
            k = {
                id: f,
                name: f
            };
        k.style = l ? [`width:${g}px !IMPORTANT`, `height:${h}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${g}px;` + `height:${h}px;`;
        var m = sg();
        if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
            m = b;
            if (b = "fsb=" + encodeURIComponent("1")) {
                var n = m.indexOf("#");
                0 > n && (n = m.length);
                var q = m.indexOf("?");
                if (0 > q || q > n) {
                    q = n;
                    var r =
                        ""
                } else r = m.substring(q + 1, n);
                m = [m.slice(0, q), r, m.slice(n)];
                n = m[1];
                m[1] = b ? n ? n + "&" + b : b : n;
                b = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
            } else b = m;
            k.sandbox = rg().join(" ")
        }
        T(kn) && !1 === e.google_video_play_muted && bJ("autoplay", k);
        n = b;
        b = dJ(b);
        q = c ? b.replace(/&ea=[^&]*/, "") + "&ea=0" : b;
        null != g && (k.width = String(g));
        null != h && (k.height = String(h));
        k.frameborder = "0";
        k.marginwidth = "0";
        k.marginheight = "0";
        k.vspace = "0";
        k.hspace = "0";
        k.allowtransparency = "true";
        k.scrolling = "no";
        m = "";
        if (c) {
            m = 10;
            for (q = ""; 0 < m--;) q += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 *
                Math.random()));
            m = q;
            b = Qi(b, m);
            Qi(n, m)
        } else b = q;
        e.dash && (k.srcdoc = e.dash);
        n = T(VG(window) ? Ko : Jo);
        q = T(Mo);
        n = WG(a.pubWin, n, q);
        q = e.google_trust_token_additional_signing_data;
        n && XG(n) && (n = ZG(n, q)) && (k.trustToken = JSON.stringify(n));
        a.pubWin.document.featurePolicy ? .features().includes("attribution-reporting") && bJ("attribution-reporting", k);
        T(xo) && (n = a.pubWin, void 0 !== n.isAnonymouslyFramed && n.crossOriginIsolated && (k.anonymous = "true"));
        if (l) k.src = b, k = UI(k), k = VI(a, k, d);
        else {
            d = b;
            l = {};
            l.dtd = kF((new Date).getTime(),
                ej);
            d = sh(l, d);
            k.src = d;
            d = a.pubWin;
            d = d == d.top;
            k = UI(k);
            d && a.A.push(Xg(a.pubWin, k));
            d = a.innerInsElement;
            l = k;
            for (d.style.visibility = "visible"; n = d.firstChild;) d.removeChild(n);
            d.appendChild(l);
            k = Promise.resolve(k)
        }
        c && (c = a.ca.Nf, e = {
            id: f,
            url: b,
            width: g,
            height: h,
            Na: m,
            wf: a.pubWin,
            ve: f,
            Ej: "google_expandable_ad_slot" + wh(e),
            ef: c.toString(),
            Ec: a.pubWin
        }, e = !e.id || !e.url || 0 >= e.width || 0 >= e.height || !e.Na || !e.Ec ? void 0 : Ri(e.Ec, "ct", Da(Ui, e, c)), e && a.A.push(e));
        return k
    }

    function dJ(a) {
        var b = U(v("Edge") ? wn : Bn);
        var c = a;
        c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
        if (c !== a) {
            b -= 8;
            let d = a.lastIndexOf("&", b); - 1 === d && (d = a.lastIndexOf("?", b));
            Oi("trn", {
                ol: a.length,
                tr: -1 === d ? "" : a.substring(d + 1),
                url: a
            }, .01)
        }
        return c
    }
    async function eJ(a) {
        var b = a.H,
            c = a.pubWin,
            d = a.l;
        T(Gn) && Jc(d, 5) && aJ(new cE(a.pubWin), a);
        var e = PA(d, a.pubWin);
        if (!Jc(d, 5)) return Promise.resolve();
        Jc(d, 5) && gE(d, a.pubWin, a.H.google_ad_client);
        var f = a.H.google_reactive_ads_config;
        f && (NE(a.L, f), YE(f, a, PA(d)), f = f.page_level_pubvars, wa(f) && ud(a.H, f));
        Jc(d, 5) && await fJ();
        if (!YG(a.pubWin, QD(), H(a.aa, 8))) {
            const g = U(Qo);
            f = c.google_trust_token_operation_promise;
            0 < g && f && await Promise.race([f, new Promise(h => void setTimeout(() => {
                h(void 0)
            }, g))])
        }
        f = "";
        TE(b) ? (f =
            a.ca.Of.toString() + "#" + lH(b), tH(b, Yz()), gJ(b)) : (5 == b.google_pgb_reactive && b.google_reactive_ads_config || !EE(b) || CE(c, b, e)) && gJ(b) && (f = iH(a, d));
        dj(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || vh(c);
        e = wh(b);
        b = a.pubWin === a.L ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Ea()).toString(36)}`;
        c = 0 < JI(a, a.innerInsElement, !0);
        e = {
            ifi: e,
            uci: b
        };
        c && (c = Yz(), e.btvi = X(c, 21, 1), cA(c, 21));
        f = sh(e, f);
        d = cJ(a,
            f, 0 === a.B, d);
        f = dJ(f);
        a.H.rpe && gG(a.pubWin, a.innerInsElement, {
            height: a.H.google_ad_height,
            Sc: "force",
            Zc: !0,
            Sd: !0,
            pc: a.H.google_ad_client
        });
        d = await d;
        try {
            WI(a, d, b)
        } catch (g) {
            Pi(223, g)
        }
    }

    function fJ() {
        return (cb() ? 0 <= Xa(gb(), 11) : bb() && 0 <= Xa(gb(), 65)) ? new Promise(a => {
            PG(a.bind(null, !0))
        }) : (PG(null), Promise.resolve(!1))
    }

    function hJ(a) {
        const b = new hI(a);
        return new Promise(c => {
            gI(b, d => {
                d && "string" === typeof d.uspString ? c(d.uspString) : c(null)
            })
        })
    }

    function iJ(a) {
        var b = tg(u.top, "googlefcPresent");
        u.googlefc && !b && Oi("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function jJ(a) {
        return jI(a) ? lI(a) : Promise.resolve(null)
    }

    function kJ(a, b) {
        const c = b.Kf;
        b = b.uspString;
        c ? iF(a, c) : SA(a, !0);
        b && y(a, 1, b)
    }

    function lJ(a) {
        const b = U(fn),
            c = T(dn);
        if (0 >= b && !c) return null;
        const d = Xh(),
            e = cI(a.pubWin);
        if (!e) return null;
        a.D = "0";
        return (c ? e : Promise.race([e, Ig(b, "0")])).then(f => {
            Oi("adsense_paw", {
                time: Xh() - d
            });
            f ? .length > U(en) ? Pi(809, Error(`ML:${f.length}`)) : a.D = f
        }).catch(f => {
            Pi(809, f)
        })
    }

    function mJ(a) {
        const b = Xh();
        return Promise.race([Mi(832, () => qI(a)), Ig(200)]).then(c => {
            Oi("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: Xh() - b,
                tms: 200
            });
            return c ? .kb
        })
    }

    function nJ(a) {
        var b = U(jn);
        return Promise.race([Ni(779, () => {
            const c = T(VG(window) ? Ko : Jo),
                d = T(Mo);
            return eH(new fH(a, c, d))
        })(), Ig(b)])
    }
    async function oJ(a) {
        const b = lJ(a),
            c = Mi(868, () => mJ(a.pubWin));
        LG(H(a.aa, 8));
        NB(a.pubWin);
        iJ(a.H.google_ad_client);
        var d = new mI(a.pubWin);
        await jJ(d);
        a.l = new TA;
        d = [jF(a), hJ(a.pubWin)];
        d = await Promise.all(d);
        kJ(a.l, {
            Kf: d[0],
            uspString: d[1]
        });
        YG(a.pubWin, QD(), H(a.aa, 8)) && (d = nJ(!!Jc(a.l, 5)), T(Po) ? Li.Fa(962, d) : await d);
        if (T(vo) && a.G && pJ(a)) {
            const e = PA(a.l, a.pubWin);
            d = a.G.then(async f => {
                await vI(f, a.pubWin, T(qo), T(uo), e).then(g => {
                    a.C = g
                })
            });
            T(to) ? Li.Fa(985, d) : await d
        }
        T(dn) || await b;
        a.kb = await c || "";
        await eJ(a)
    }

    function pJ(a) {
        const b = a.l;
        a = a.H;
        return !a.google_restrict_data_processing && 1 !== a.google_tag_for_under_age_of_consent && 1 !== a.google_tag_for_child_directed_treatment && !!Jc(b, 5) && !b.l() && !fA() && !Jc(b, 9)
    }

    function TI(a) {
        var b = a.pubWin.document,
            c = a.H;
        const d = c.google_ad_width,
            e = c.google_ad_height;
        let f = 0;
        try {
            !1 === c.google_allow_expandable_ads && (f |= 1);
            if (!b.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(b.location.protocol)) f |= 2; {
                c = navigator;
                const k = c.userAgent,
                    m = c.platform,
                    n = c.product;
                if (!/Win|Mac|Linux|iPad|iPod|iPhone/.test(m) && /^Opera/.test(k)) var g = !1;
                else if (/Win/.test(m) && /Trident/.test(k) && 11 <= b.documentMode) g = !0;
                else {
                    var h = (/WebKit\/(\d+)/.exec(k) || [0, 0])[1],
                        l = (/rv:(\d+\.\d+)/.exec(k) || [0, 0])[1];
                    g = !h && "Gecko" === n && 27 <= l && !/ rv: 1\.8([^.] |\.0) /.test(k) || 536 <= h ? !0 : !1
                }
            }
            g || (f |= 4);
            fp(a.pubWin, d, e) && (f |= 2)
        } catch (k) {
            f |= 8
        }
        a.B = f;
        0 === a.B || (a.H.google_allow_expandable_ads = !1);
        Jg(a.pubWin) != a.pubWin && (a.j |= 4);
        3 === zF(a.pubWin.document) && (a.j |= 32);
        if (b = a.L) b = a.L, b = !(P(b).scrollWidth <= P(b).clientWidth);
        b && (a.j |= 1024);
        a.pubWin.Prototype ? .Version && (a.j |= 16384);
        a.H.google_loader_features_used && (a.j |= a.H.google_loader_features_used);
        a.F = 2;
        return oJ(a)
    }

    function gJ(a) {
        const b = Yz(),
            c = a.google_ad_section;
        DE(a) && cA(b, 15);
        if (Bh(a)) {
            if (100 < cA(b, 5)) return !1
        } else if (100 < cA(b, 6) - X(b, 15, 0) && "" == c) return !1;
        return !0
    }

    function QI(a) {
        const b = a.L;
        if (b && !Uz(b).ads_density_stats_processed && !Rg(b) && (Uz(b).ads_density_stats_processed = !0, T(Cn) || .01 > dg())) {
            const c = () => {
                if (b) {
                    var d = Qy(Ly(b), a.H.google_ad_client, b.location.hostname, YD(a.H).split(","));
                    Oi("ama_stats", d, 1)
                }
            };
            Hg(b, () => {
                u.setTimeout(c, 1E3)
            })
        }
    }

    function SI(a) {
        a && !Uz(a).host_pinged_back && (Uz(a).host_pinged_back = !0, Oi("abg_host", {
            host: a.location.host
        }, .01))
    };
    (function(a, b, c) {
        Mi(843, () => {
            if (!u.google_sa_impl) {
                var d = LH(a);
                IH(d);
                dj(16, [3, d.toJSON()]);
                var e = JH({
                        Je: b,
                        If: H(d, 2)
                    }),
                    f = c(e, d);
                u.google_sa_impl = async h => DI({
                    aa: d,
                    ca: f,
                    Sa: e,
                    slot: h
                });
                XD(TD(u));
                u.google_process_slots ? .();
                var g = (u.Prototype || {}).Version;
                null != g && Oi("prtpjs", {
                    version: g
                })
            }
        })
    })(KH, "m202208170101", function(a, b) {
        const c = 2012 < z(b, 1, 0) ? `_fy${z(b,1,0)}` : "",
            d = H(b, 3);
        b = H(b, 2);
        return {
            yf: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            xf: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Pd: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            Le: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            Nf: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/creativetoolset/xpc_expansion_embed.js`,
            Of: N `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup.html`,
            xb: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            mb: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            mc: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/storify${c}.js`
        }
    });
}).call(this, "[2021,\"r20220822\",\"r20110914\",null,null,null,null,\".google.co.kr\",null,null,null,null,[null,[]],null,null,null,null,-1,[44759875,44759926,44759842]]");