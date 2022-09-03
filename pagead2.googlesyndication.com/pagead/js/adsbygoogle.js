(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var aa = {},
        m = this || self;

    function ba(a) {
        a = a.split(".");
        for (var b = m, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ca(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function da(a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ea(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function fa(a) {
        return Object.prototype.hasOwnProperty.call(a, ha) && a[ha] || (a[ha] = ++ia)
    }
    var ha = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ia = 0;

    function ja(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ka(a, b, c) {
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

    function la(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la = ja : la = ka;
        return la.apply(null, arguments)
    }

    function ma(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function na(a, b) {
        a = a.split(".");
        var c = m;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function oa(a) {
        return a
    };
    let pa = (new Date).getTime();

    function qa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function ra(a, b) {
        let c = 0;
        a = qa(String(a)).split(".");
        b = qa(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = sa(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || sa(0 == e[2].length, 0 == f[2].length) || sa(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function sa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function ta() {
        var a = m.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function n(a) {
        return -1 != ta().indexOf(a)
    };

    function ua() {
        return n("Trident") || n("MSIE")
    }

    function wa() {
        return (n("Chrome") || n("CriOS")) && !n("Edge") || n("Silk")
    }

    function xa(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function ya() {
        var a = ta();
        if (ua()) {
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
        a = xa(b);
        return n("Opera") ? a(["Version", "Opera"]) :
            n("Edge") ? a(["Edge"]) : n("Edg/") ? a(["Edg"]) : n("Silk") ? a(["Silk"]) : wa() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ba(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ca(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Da(a, b) {
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

    function Ea(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Fa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ga(a, b) {
        a: {
            const c = a.length,
                d = "string" === typeof a ? a.split("") : a;
            for (let e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ha(a, b) {
        a: {
            var c = a.length;
            const d = "string" === typeof a ? a.split("") : a;
            for (--c; 0 <= c; c--)
                if (c in d && b.call(void 0, d[c], c, a)) {
                    b = c;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ia(a, b) {
        return 0 <= Ba(a, b)
    }

    function Ja(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Ka(a) {
        Ka[" "](a);
        return a
    }
    Ka[" "] = function() {};
    var La = ua();
    !n("Android") || wa();
    wa();
    !n("Safari") || wa();
    var Ma = {},
        Na = null;

    function Oa(a) {
        var b;
        void 0 === b && (b = 0);
        Pa();
        b = Ma[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function Ra(a) {
        var b = [];
        Sa(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Sa(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    p = Na[l];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        Pa();
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

    function Pa() {
        if (!Na) {
            Na = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Ma[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Na[f] && (Na[f] = e)
                }
            }
        }
    };
    var Ta = "undefined" !== typeof Uint8Array,
        Ua = {};
    let Va;
    var Wa = class {
        constructor(a) {
            if (Ua !== Ua) throw Error("illegal external caller");
            this.sa = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.sa
        }
    };
    const Xa = Symbol(void 0);

    function Ya(a, b) {
        Object.isFrozen(a) || (Xa ? a[Xa] |= b : void 0 !== a.I ? a.I |= b : Object.defineProperties(a, {
            I: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function $a(a, b) {
        Object.isExtensible(a) && (Xa ? a[Xa] && (a[Xa] &= ~b) : void 0 !== a.I && (a.I &= ~b))
    }

    function ab(a) {
        let b;
        Xa ? b = a[Xa] : b = a.I;
        return null == b ? 0 : b
    }

    function bb(a) {
        Ya(a, 1);
        return a
    }

    function cb(a) {
        return a ? !!(ab(a) & 2) : !1
    }

    function db(a) {
        Ya(a, 16);
        return a
    }

    function eb(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
        $a(a, 16)
    };

    function fb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let gb;
    var hb = Object.freeze(bb([]));

    function ib(a) {
        if (cb(a.u)) throw Error("Cannot mutate an immutable Message");
    }

    function jb(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };

    function kb(a, b, c = !1, d = !1) {
        if (Array.isArray(a)) return new b(d ? db(a) : a);
        if (c) return new b
    };

    function lb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (Ta && null != a && a instanceof Uint8Array) return Oa(a);
                    if (a instanceof Wa) {
                        var b = a.sa;
                        b = null == b || "string" === typeof b ? b : Ta && b instanceof Uint8Array ? Oa(b) : null;
                        return null == b ? "" : a.sa = b
                    }
                }
        }
        return a
    };

    function mb(a, b, c) {
        if (null != a) {
            if (Array.isArray(a)) a = nb(a, b, c);
            else if (fb(a)) {
                const d = {};
                for (let e in a) Object.prototype.hasOwnProperty.call(a, e) && (d[e] = mb(a[e], b, c));
                a = d
            } else a = b(a);
            return a
        }
    }

    function nb(a, b, c) {
        const d = Array.prototype.slice.call(a);
        c(a, d);
        for (a = 0; a < d.length; a++) d[a] = mb(d[a], b, c);
        return d
    }

    function ob(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = lb(a);
        return Array.isArray(a) ? nb(a, ob, pb) : a
    }

    function pb() {};

    function qb(a) {
        return a.i || (a.i = a.u[a.l + a.j] = {})
    }

    function q(a, b, c = !1) {
        return -1 === b ? null : b >= a.l ? a.i ? a.i[b] : void 0 : c && a.i && (c = a.i[b], null != c) ? c : a.u[b + a.j]
    }

    function r(a, b, c, d = !1, e = !1) {
        e || ib(a);
        a.G && (a.G = void 0);
        if (b >= a.l || d) return qb(a)[b] = c, a;
        void 0 !== a.i && a.l >= a.u.length ? (d = a.u.length - 1, e = b + a.j, e >= d ? (a.u[d] = void 0, a.u[e] = c, a.u.push(a.i)) : a.u[e] = c) : a.u[b + a.j] = c;
        void 0 !== a.i && b in a.i && delete a.i[b];
        return a
    }

    function rb(a, b, c, d) {
        let e = q(a, b, d);
        Array.isArray(e) ? e && ab(e) & 1 || bb(e) : e = hb;
        if (cb(a.u)) c & 1 || (Ya(e, 2), Object.freeze(e));
        else if (e === hb || cb(e)) e = bb(Array.prototype.slice.call(e)), r(a, b, e, d);
        return e
    }

    function sb(a, b, c = !1) {
        return rb(a, b, 0, c)
    }

    function tb(a, b) {
        a = q(a, b);
        return null == a ? a : !!a
    }

    function t(a, b, c) {
        a = q(a, b);
        return null == a ? c : a
    }

    function u(a, b, c = !1) {
        a = tb(a, b);
        return null == a ? c : a
    }

    function ub(a, b) {
        a = q(a, b);
        a = null == a ? a : +a;
        return null == a ? 0 : a
    }

    function vb(a, b, c) {
        null == c ? c = hb : bb(c);
        return r(a, b, c)
    }

    function wb(a, b, c) {
        ib(a);
        0 !== c ? r(a, b, c) : r(a, b, void 0, !1);
        return a
    }

    function xb(a, b, c, d) {
        ib(a);
        (c = yb(a, c)) && c !== b && null != d && (a.h && c in a.h && (a.h[c] = void 0), r(a, c));
        return r(a, b, d)
    }

    function zb(a, b, c) {
        return yb(a, b) === c ? c : -1
    }

    function yb(a, b) {
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d];
            null != q(a, e) && (0 !== c && r(a, c, void 0, !1, !0), c = e)
        }
        return c
    }

    function w(a, b, c) {
        {
            a.h || (a.h = {});
            const d = a.h[c];
            if (d) b = d;
            else if (b = kb(q(a, c, !1), b)) a.h[c] = b, Ya(b.u, ab(a.u) & -33)
        }
        if (null == b) return b;
        cb(b.u) && !cb(a.u) && (b = b.ra(), r(a, c, b.u, !1), a.h[c] = b);
        return b
    }

    function Ab(a, b, c, d = !0) {
        a.h || (a.h = {});
        let e = a.h[c];
        const f = rb(a, c, 2, !1),
            g = !!(ab(a.u) & 16);
        var h = cb(f);
        h = cb(a.u) || h;
        if (!e) {
            e = [];
            let l = h;
            for (let p = 0; p < f.length; p++) {
                var k = f[p];
                l = l || cb(k);
                k = kb(k, b, !1, g);
                void 0 !== k && (e.push(k), h && Ya(k.u, 2))
            }
            a.h[c] = e;
            l ? $a(f, 8) : Ya(f, 8)
        }
        b = h || d;
        d = cb(e);
        b && !d && (Object.isFrozen(e) && (a.h[c] = e = e.slice()), Ya(e, 2), Object.freeze(e));
        !b && d && (a.h[c] = e = e.slice());
        return e
    }

    function x(a, b, c) {
        const d = cb(a.u);
        b = Ab(a, b, c, d);
        a = sb(a, c, !1);
        if (!(c = d) && (c = a)) {
            if (!a) throw Error("cannot check mutability state of non-array");
            c = !(ab(a) & 8)
        }
        if (c) {
            for (c = 0; c < b.length; c++) {
                const e = b[c];
                e && cb(e.u) && !d && (b[c] = b[c].ra(), a[c] = b[c].u)
            }
            Ya(a, 8)
        }
        return b
    }

    function Bb(a, b, c) {
        ib(a);
        a.h || (a.h = {});
        let d;
        null == c ? d = c = void 0 : d = c.u;
        a.h[b] = c;
        return r(a, b, d)
    }

    function Cb(a, b, c, d) {
        ib(a);
        a.h || (a.h = {});
        let e;
        null != d ? e = d.u : e = d = void 0;
        a.h[b] = d;
        return xb(a, b, c, e)
    }

    function Db(a, b, c) {
        ib(a);
        let d;
        if (null != c) {
            d = bb([]);
            let e = !1;
            for (let f = 0; f < c.length; f++) d[f] = c[f].u, e = e || cb(d[f]);
            a.h || (a.h = {});
            a.h[b] = c;
            c = d;
            e ? $a(c, 8) : Ya(c, 8)
        } else a.h && (a.h[b] = void 0), d = hb;
        return r(a, b, d)
    }

    function A(a, b) {
        return t(a, b, "")
    }

    function Eb(a, b, c) {
        return t(a, zb(a, c, b), 0)
    }

    function Fb(a, b, c, d) {
        return w(a, b, zb(a, d, c))
    };

    function Gb(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error("Expected to deserialize an Array but got " + ca(b) + ": " + b);
        Hb = b;
        db(b);
        a = new a(b);
        Hb = null;
        return a
    }
    var Ib = class {
        constructor(a, b, c) {
            a || (a = Hb);
            Hb = null;
            var d = this.constructor.h || 0,
                e = 0 < d,
                f = this.constructor.messageId;
            a ? ab(a) & 16 && Ya(a, 32) : (a = f ? [f] : [], Ya(a, 48));
            e && 0 < a.length && fb(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
            this.j = (f ? 0 : -1) - d;
            this.h = void 0;
            this.u = a;
            a: {
                f = this.u.length;d = f - 1;
                if (f && (f = this.u[d], fb(f))) {
                    this.i = f;
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
                    b ? this.l =
                        Number.MAX_VALUE : this.l = d - this.j;
                    break a
                }
                void 0 !== b && -1 < b ? (this.l = Math.max(b, d + 1 - this.j), this.i = void 0) : this.l = Number.MAX_VALUE
            }
            if (!e && this.i && "g" in this.i) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c)
                for (e = 0; e < c.length; e++) d = c[e], d < this.l ? (d += this.j, (b = this.u[d]) ? Array.isArray(b) && bb(b) : this.u[d] = hb) : (b = qb(this), (f = b[d]) ? Array.isArray(f) && bb(f) : b[d] = hb)
        }
        toJSON() {
            const a = this.u;
            return gb ? a : nb(a, ob, pb)
        }
    };

    function Jb(a, b) {
        return lb(b)
    }
    let Hb;

    function Kb(a, b, c, d, e, f) {
        (a = a.h && a.h[c]) ? Array.isArray(a) ? (e = f.ca ? bb(a.slice()) : a, Db(b, c, e)) : Bb(b, c, a): (Ta && d instanceof Uint8Array ? e = d.length ? new Wa(new Uint8Array(d)) : Va || (Va = new Wa(null)) : (Array.isArray(d) && (e ? Ya(d, 2) : d && ab(d) & 1 && f.ca ? (e = f = Array.prototype.slice.call(d), d = (ab(d) | 0) & -51, Xa ? e[Xa] = d : void 0 !== e.I ? e.I = d : Object.defineProperties(e, {
            I: {
                value: d,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }), d = f) : eb(d)), e = d), r(b, c, e))
    };
    var Lb = class extends Ib {
        ra() {
            return this
        }
    };
    Object.defineProperties(Lb, {
        [Symbol.hasInstance]: jb(() => {
            throw Error(void 0);
        })
    });
    const Mb = a => null !== a && void 0 !== a;
    let Nb = void 0;

    function Ob(a, b) {
        const c = Nb;
        Nb = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };
    class B extends Lb {
        ra() {
            if (cb(this.u)) {
                var {
                    ca: a
                } = {
                    ca: !0
                };
                a = {
                    ca: a
                };
                const c = cb(this.u);
                if (c && !a.ca) throw Error("copyRepeatedFields must be true for frozen messages");
                c || eb(this.u);
                const d = new this.constructor;
                this.L && (d.L = this.L.slice());
                const e = this.u;
                for (let f = 0; f < e.length; f++) {
                    const g = e[f];
                    if (f === e.length - 1 && fb(g))
                        for (b in g) {
                            if (!Object.prototype.hasOwnProperty.call(g, b)) continue;
                            const h = +b;
                            Number.isNaN(h) ? qb(d)[b] = g[b] : Kb(this, d, h, g[b], c, a)
                        } else Kb(this, d, f - this.j, g, c, a)
                }
                var b = d;
                b.G = this
            } else b =
                this;
            return b
        }
    }
    Object.defineProperties(B, {
        [Symbol.hasInstance]: jb(Object[Symbol.hasInstance])
    });
    var Qb = class extends B {
            constructor(a) {
                super(a, -1, Pb)
            }
        },
        Rb = class extends B {
            constructor(a) {
                super(a)
            }
        },
        Pb = [2, 3];

    function Sb(a, b) {
        this.i = a === Tb && b || "";
        this.h = Ub
    }
    var Ub = {},
        Tb = {};
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Vb(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Wb(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Xb(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Yb(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    };
    var Zb;

    function $b() {
        if (void 0 === Zb) {
            var a = null,
                b = m.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: oa,
                        createScript: oa,
                        createScriptURL: oa
                    })
                } catch (c) {
                    m.console && m.console.error(c.message)
                }
                Zb = a
            } else Zb = a
        }
        return Zb
    };
    const ac = {};
    class bc {
        constructor(a, b) {
            this.h = b === ac ? a : ""
        }
        toString() {
            return this.h.toString()
        }
    };
    var dc = class {
        constructor(a, b) {
            this.h = b === cc ? a : ""
        }
        toString() {
            return this.h + ""
        }
    };

    function ec(a, b) {
        a = fc.exec(gc(a).toString());
        var c = a[3] || "";
        return hc(a[1] + ic("?", a[2] || "", b) + ic("#", c))
    }

    function gc(a) {
        return a instanceof dc && a.constructor === dc ? a.h : "type_error:TrustedResourceUrl"
    }
    var fc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        cc = {};

    function hc(a) {
        const b = $b();
        a = b ? b.createScriptURL(a) : a;
        return new dc(a, cc)
    }

    function ic(a, b, c) {
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
    var kc = class {
            constructor(a, b) {
                this.h = b === jc ? a : ""
            }
            toString() {
                return this.h.toString()
            }
        },
        jc = {};
    const lc = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function mc(a, b, c) {
        if (b instanceof dc) a.href = gc(b).toString();
        else {
            if (-1 === lc.indexOf(c)) throw Error(`TrustedResourceUrl href attribute required with rel="${c}"`);
            if (b instanceof kc) b = b instanceof kc && b.constructor === kc ? b.h : "type_error:SafeUrl";
            else {
                a: {
                    try {
                        var d = new URL(b)
                    } catch (e) {
                        d = "https:";
                        break a
                    }
                    d = d.protocol
                }
                b = "javascript:" === d ? "about:invalid" : b
            }
            a.href = b
        }
        a.rel = c
    };

    function nc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function oc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function pc(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    };

    function sc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function tc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };

    function uc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function vc(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!da(f) || ea(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ea(f)) {
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
                Ca(g ? Ja(f) : f, d)
            }
        }
    }

    function wc(a) {
        this.h = a || m.document || document
    }
    wc.prototype.getElementsByTagName = function(a, b) {
        return (b || this.h).getElementsByTagName(String(a))
    };
    wc.prototype.createElement = function(a) {
        var b = this.h;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    wc.prototype.createTextNode = function(a) {
        return this.h.createTextNode(String(a))
    };
    wc.prototype.append = function(a, b) {
        vc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
    };
    wc.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function xc() {
        return !yc() && (n("iPod") || n("iPhone") || n("Android") || n("IEMobile"))
    }

    function yc() {
        return n("iPad") || n("Android") && !n("Mobile") || n("Silk")
    };
    var zc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Ac = /#|$/;

    function Bc(a) {
        var b = a.search(Ac),
            c;
        a: {
            for (c = 0; 0 <= (c = a.indexOf("client", c)) && c < b;) {
                var d = a.charCodeAt(c - 1);
                if (38 == d || 63 == d)
                    if (d = a.charCodeAt(c + 6), !d || 61 == d || 38 == d || 35 == d) break a;
                c += 7
            }
            c = -1
        }
        if (0 > c) return null;
        d = a.indexOf("&", c);
        if (0 > d || d > b) d = b;
        return decodeURIComponent(a.slice(c + 7, -1 !== d ? d : 0).replace(/\+/g, " "))
    };

    function Cc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Ka(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch {
            return !1
        }
    }

    function Dc(a) {
        return Cc(a.top) ? a.top : null
    }

    function Ec(a, b) {
        const c = Fc("SCRIPT", a);
        c.src = gc(b);
        (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Gc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Hc(a, b) {
        if (!Ic() && !Jc()) {
            let c = Math.random();
            if (c < b) return c = Kc(), a[Math.floor(c * a.length)]
        }
        return null
    }

    function Kc() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function C(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Lc(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Jc = oc(() => Fa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Mc) || 1E-4 > Math.random()),
        Ic = oc(() => -1 != ta().indexOf("MSIE"));
    const Mc = a => -1 != ta().indexOf(a);
    var Nc = /^([0-9.]+)px$/,
        Oc = /^(-?[0-9.]{1,30})$/;

    function Pc(a) {
        if (!Oc.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function E(a) {
        return (a = Nc.exec(a)) ? +a[1] : null
    }
    var Qc = (a, b) => {
            for (let e = 0; 50 > e; ++e) {
                try {
                    var c = !(!a.frames || !a.frames[b])
                } catch {
                    c = !1
                }
                if (c) return a;
                a: {
                    try {
                        const f = a.parent;
                        if (f && f != a) {
                            var d = f;
                            break a
                        }
                    } catch {}
                    d = null
                }
                if (!(a = d)) break
            }
            return null
        },
        Rc = oc(() => xc() ? 2 : yc() ? 1 : 0),
        Sc = (a, b) => {
            C(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    let Tc = [];
    const Uc = () => {
        const a = Tc;
        Tc = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Vc = (a = "", b = window) => (b = (b = b.location.href.match(zc)[3] || null) ? decodeURI(b) : b) ? Lc(b + a) : null;

    function Wc(a, b) {
        if (a.length && b.head)
            for (const c of a) a: {
                a = c;
                if (!a || !b.head) break a;
                const d = Fc("META");b.head.appendChild(d);d.httpEquiv = "origin-trial";d.content = a
            }
    }
    var Xc = a => {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * 2 ** 52),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        Zc = a => {
            var b = Yc;
            "complete" === b.readyState || "interactive" === b.readyState ? (Tc.push(a), 1 == Tc.length && (window.Promise ? Promise.resolve().then(Uc) : window.setImmediate ? setImmediate(Uc) : setTimeout(Uc, 0))) : b.addEventListener("DOMContentLoaded", a)
        };

    function Fc(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };
    let $c = null;
    var Yc = document,
        F = window;
    let ad = null;
    var bd = (a, b = []) => {
        let c = !1;
        m.google_logging_queue || (c = !0, m.google_logging_queue = []);
        m.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == ad) {
                ad = !1;
                try {
                    var d = Dc(m);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (ad = !0);
                    m.localStorage.getItem("google_logging") && (ad = !0)
                } catch (e) {}
            }
            a = ad
        }
        a && (d = m.document, a = new Sb(Tb, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = hc(a instanceof Sb && a.constructor === Sb && a.h === Ub ? a.i : "type_error:Const"), Ec(d, a))
    };

    function cd(a = m) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function dd(a = cd()) {
        return a ? Cc(a.master) ? a.master : null : null
    };

    function ed(a, ...b) {
        if (0 === b.length) return hc(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return hc(c.join(""))
    };

    function fd(a) {
        a = a[0];
        const b = $b();
        a = b ? b.createScript(a) : a;
        return new bc(a, ac)
    };
    var gd = a => {
            a = dd(cd(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1;
            return a.google_unique_id
        },
        hd = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        id = () => {
            if (!F) return !1;
            try {
                return !(!F.navigator.standalone && !F.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        jd = a => {
            if (!a) return "";
            a = a.toLowerCase();
            "ca-" != a.substring(0, 3) && (a = "ca-" + a);
            return a
        };
    var kd = {
        Db: 0,
        Cb: 1,
        zb: 2,
        ub: 3,
        Ab: 4,
        vb: 5,
        Bb: 6,
        xb: 7,
        yb: 8,
        tb: 9,
        wb: 10
    };
    var ld = {
        Fb: 0,
        Gb: 1,
        Eb: 2
    };

    function md(a) {
        if (0 != a.h) throw Error("Already resolved/rejected.");
    }
    var pd = class {
        constructor() {
            this.i = new nd(this);
            this.h = 0
        }
        resolve(a) {
            md(this);
            this.h = 1;
            this.l = a;
            od(this.i)
        }
    };

    function od(a) {
        switch (a.h.h) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.h.l);
                break;
            case 2:
                a.j && a.j(a.h.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var nd = class {
        constructor(a) {
            this.h = a
        }
        then(a, b) {
            if (this.i) throw Error("Then functions already set.");
            this.i = a;
            this.j = b;
            od(this)
        }
    };

    function qd() {
        this.v = this.v;
        this.B = this.B
    }
    qd.prototype.v = !1;
    qd.prototype.j = function() {
        if (this.B)
            for (; this.B.length;) this.B.shift()()
    };
    const rd = class {
        constructor(a) {
            this.h = a.slice(0)
        }
        forEach(a) {
            this.h.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new rd(Da(this.h, a))
        }
        apply(a) {
            return new rd(a(this.h.slice(0)))
        }
        sort(a) {
            return new rd(this.h.slice(0).sort(a))
        }
        get(a) {
            return this.h[a]
        }
        add(a) {
            const b = this.h.slice(0);
            b.push(a);
            return new rd(b)
        }
    };

    function sd(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };
    const ud = class {
        constructor() {
            this.h = {};
            this.i = {}
        }
        set(a, b) {
            const c = td(a);
            this.h[c] = b;
            this.i[c] = a
        }
        get(a, b) {
            a = td(a);
            return void 0 !== this.h[a] ? this.h[a] : b
        }
        clear() {
            this.h = {};
            this.i = {}
        }
    };

    function td(a) {
        return a instanceof Object ? String(fa(a)) : a + ""
    };

    function vd(a) {
        return new wd({
            value: a
        }, null)
    }

    function xd(a) {
        return new wd(null, a)
    }

    function yd(a) {
        try {
            return vd(a())
        } catch (b) {
            return xd(b)
        }
    }

    function zd(a) {
        return null != a.h ? a.h.value : null
    }

    function Ad(a, b) {
        null != a.h && b(a.h.value);
        return a
    }

    function Cd(a, b) {
        null != a.h || b(a.i);
        return a
    }
    class wd {
        constructor(a, b) {
            this.h = a;
            this.i = b
        }
        map(a) {
            return null != this.h ? (a = a(this.h.value), a instanceof wd ? a : vd(a)) : this
        }
    };
    const Dd = class {
        constructor(a) {
            this.h = new ud;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.h.set(a, !0)
        }
        contains(a) {
            return void 0 !== this.h.h[td(a)]
        }
    };
    class Ed {
        constructor() {
            this.h = new ud
        }
        set(a, b) {
            let c = this.h.get(a);
            c || (c = new Dd, this.h.set(a, c));
            c.add(b)
        }
    };
    var G = class extends B {
            constructor(a) {
                super(a, -1, Fd)
            }
            getId() {
                return q(this, 3)
            }
        },
        Fd = [4];
    class Gd {
        constructor({
            Va: a,
            Ib: b,
            Pb: c,
            jb: d
        }) {
            this.h = b;
            this.l = new rd(a || []);
            this.j = d;
            this.i = c
        }
    };
    const Id = a => {
            const b = [],
                c = a.l;
            c && c.h.length && b.push({
                T: "a",
                ba: Hd(c)
            });
            null != a.h && b.push({
                T: "as",
                ba: a.h
            });
            null != a.i && b.push({
                T: "i",
                ba: String(a.i)
            });
            null != a.j && b.push({
                T: "rp",
                ba: String(a.j)
            });
            b.sort(function(d, e) {
                return d.T.localeCompare(e.T)
            });
            b.unshift({
                T: "t",
                ba: "aa"
            });
            return b
        },
        Hd = a => {
            a = a.h.slice(0).map(Jd);
            a = JSON.stringify(a);
            return Lc(a)
        },
        Jd = a => {
            const b = {};
            null != q(a, 7) && (b.q = q(a, 7));
            null != q(a, 2) && (b.o = q(a, 2));
            null != q(a, 5) && (b.p = q(a, 5));
            return b
        };
    var Kd = class extends B {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return r(this, 1, a)
        }
    };

    function Ld(a) {
        const b = [].slice.call(arguments).filter(nc(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Ia || []);
            d = Object.assign(d, e.Ma)
        });
        return new Md(c, d)
    }

    function Nd(a) {
        switch (a) {
            case 1:
                return new Md(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Md(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Md(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Md(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Od(a) {
        if (null == a) var b = null;
        else {
            var c = Id(a);
            a = [];
            for (b of c) c = String(b.ba), a.push(b.T + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
            b = new Md(null, {
                google_placement_id: a.join("~")
            })
        }
        return b
    }
    class Md {
        constructor(a, b) {
            this.Ia = a;
            this.Ma = b
        }
    };
    const Pd = new Md(["google-auto-placed"], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs"
    });

    function Qd(a, b, c = null, d = !1) {
        Rd(a, b, c, d)
    }

    function Rd(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = Fc("IMG", a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    const h = Ba(g, e);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                tc(e, "load", f);
                tc(e, "error", f)
            };
            sc(e, "load", f);
            sc(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Td = a => {
            let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=dtt_err";
            C(a, (c, d) => {
                c && (b += `&${d}=${encodeURIComponent(c)}`)
            });
            Sd(b)
        },
        Sd = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Qd(b, a, void 0, !1)
        };

    function Ud(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Vd(a, b, c, d, e) {
        const f = [];
        C(a, function(g, h) {
            (g = Wd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Wd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Wd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Vd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Xd(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function Yd(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Xd(a) - b.length;
        if (0 > d) return "";
        a.h.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.h.length; f++) {
            const g = a.h[f],
                h = a.i[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let l = Vd(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
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
    class Zd {
        constructor() {
            this.j = "&";
            this.i = {};
            this.l = 0;
            this.h = []
        }
    };

    function $d() {
        var a = ae,
            b = m.google_srt;
        0 <= b && 1 >= b && (a.h = b)
    }

    function be(a, b, c, d, e) {
        if ((d ? a.h : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Zd ? f = c : (f = new Zd, C(c, (h, k) => {
                var l = f;
                const p = l.l++;
                h = Ud(k, h);
                l.h.push(p);
                l.i[p] = h
            }));
            const g = Yd(f, "/pagead/gen_204?id=" + b + "&");
            g && Qd(m, g)
        } catch (f) {}
    }
    class ce {
        constructor() {
            this.h = Math.random()
        }
    };
    var de = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5
    };

    function ee(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map)) : a.google_reactive_ads_global_state = new fe;
        return a.google_reactive_ads_global_state
    }
    class fe {
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
            this.floatingAdsStacking = new ge;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map
        }
    }
    var ge = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var I = a => {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    var he = a => {
            a = a.getBoundingClientRect();
            return 0 < a.width && 0 < a.height
        },
        ie = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > .5 * b
        },
        je = a => {
            const b = I(a).clientHeight || 0;
            return c => c.getBoundingClientRect().height >= .75 * b
        },
        ke = (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top;
    var me = class extends B {
            constructor(a) {
                super(a)
            }
            m() {
                return w(this, le, 2)
            }
        },
        le = class extends B {
            constructor(a) {
                super(a)
            }
            m() {
                return u(this, 2)
            }
        };
    var ne = class extends B {
        constructor(a) {
            super(a)
        }
    };
    var oe = class extends B {
            constructor(a) {
                super(a)
            }
            getName() {
                return q(this, 4)
            }
        },
        pe = class extends B {
            constructor(a) {
                super(a)
            }
        },
        qe = class extends B {
            constructor(a) {
                super(a)
            }
        },
        re = class extends B {
            constructor(a) {
                super(a)
            }
        },
        se = [1, 2, 3];
    var ve = class extends B {
            constructor(a) {
                super(a, -1, te)
            }
            m() {
                return x(this, ue, 1)
            }
        },
        ue = class extends B {
            constructor(a) {
                super(a)
            }
        },
        te = [1];
    var we = class extends B {
        constructor(a) {
            super(a)
        }
    };
    var ye = class extends B {
            constructor(a) {
                super(a, -1, xe)
            }
        },
        xe = [6, 7, 9, 10, 11];
    var Be = class extends B {
            constructor(a) {
                super(a, -1, ze)
            }
            m() {
                return w(this, Ae, 3)
            }
        },
        Ae = class extends B {
            constructor(a) {
                super(a)
            }
            m() {
                return Fb(this, Ce, 2, De)
            }
        },
        Ce = class extends B {
            constructor(a) {
                super(a)
            }
        },
        ze = [1, 4],
        De = [1, 2];
    var Fe = class extends B {
            constructor(a) {
                super(a, -1, Ee)
            }
        },
        Ge = class extends B {
            constructor(a) {
                super(a)
            }
        },
        Ie = class extends B {
            constructor(a) {
                super(a, -1, He)
            }
        },
        Je = class extends B {
            constructor(a) {
                super(a)
            }
        },
        Ke = class extends B {
            constructor(a) {
                super(a)
            }
        },
        Le = class extends B {
            constructor(a) {
                super(a)
            }
        },
        Me = class extends B {
            constructor(a) {
                super(a)
            }
            m() {
                return tb(this, 23)
            }
        },
        Ee = [1, 2, 5, 7],
        He = [2, 5, 6, 11];

    function Ne(a) {
        var b = [];
        sd(a.getElementsByTagName("p"), function(c) {
            100 <= Oe(c) && b.push(c)
        });
        return b
    }

    function Oe(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        sd(a.childNodes, function(c) {
            b += Oe(c)
        });
        return b
    }

    function Pe(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Qe(a, b) {
        if (null == a.h) return b;
        switch (a.h) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.h);
        }
    }
    const Re = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.i = b;
            this.j = c;
            this.h = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.l)
            } catch (f) {}
            if (!b.length) return [];
            a = Ja(b);
            a = Qe(this, a);
            "number" === typeof this.i && (b = this.i, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.j) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Ne(a[c]),
                        e = this.j;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.l,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.h
            })
        }
    };

    function Se(a) {
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
    };
    var J = class {
            constructor(a, b = !1) {
                this.h = a;
                this.defaultValue = b
            }
        },
        K = class {
            constructor(a, b = 0) {
                this.h = a;
                this.defaultValue = b
            }
        },
        Te = class {
            constructor(a, b = []) {
                this.h = a;
                this.defaultValue = b
            }
        };
    var Ue = new J(1084),
        Ve = new J(1082, !0),
        We = new K(62, .001),
        Xe = new K(1130, 100),
        Ye = new class {
            constructor(a, b = "") {
                this.h = a;
                this.defaultValue = b
            }
        }(14),
        Ze = new J(316),
        $e = new J(313),
        af = new J(369),
        bf = new J(1093),
        cf = new K(1098),
        df = new J(1129, !0),
        ef = new J(1128),
        ff = new J(1026),
        gf = new J(1090),
        hf = new J(1177),
        jf = new J(1053, !0),
        kf = new J(1100, !0),
        lf = new J(1171),
        mf = new J(1201),
        nf = new K(1046),
        of = new J(218),
        pf = new J(217),
        qf = new J(1179),
        rf = new J(227),
        sf = new J(1198),
        tf = new J(282),
        uf = new J(1141, !0),
        vf = new J(1197),
        wf = new J(1202),
        xf = new K(1114, 1),
        yf = new K(1110),
        zf = new K(1111),
        Af = new K(1112),
        Bf = new K(1113),
        Cf = new K(1104),
        Df = new K(1108),
        Ef = new K(1106),
        Ff = new K(1107),
        Gf = new K(1105),
        Hf = new K(1115, 1),
        If = new J(1121),
        Jf = new J(1180),
        Kf = new J(1144),
        Lf = new J(1143),
        Mf = new J(1186),
        Nf = new J(1162),
        Of = new J(1175),
        Pf = new J(1120),
        Qf = new J(1086),
        Rf = new K(1079, 5),
        Sf = new Te(1934, ["AzoawhTRDevLR66Y6MROu167EDncFPBvcKOaQispTo9ouEt5LvcBjnRFqiAByRT+2cDHG1Yj4dXwpLeIhc98/gIAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
            "A6+nc62kbJgC46ypOwRsNW6RkDn2x7tgRh0wp7jb3DtFF7oEhu1hhm4rdZHZ6zXvnKZLlYcBlQUImC4d3kKihAcAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A/9La288e7MDEU2ifusFnMg1C2Ij6uoa/Z/ylwJIXSsWfK37oESIPbxbt4IU86OGqDEPnNVruUiMjfKo65H/CQwAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        Tf = new J(203),
        Uf = new J(84),
        Vf = new J(1928),
        Wf = new J(1941),
        Xf = new J(370946349),
        Yf = new J(392736476),
        Zf = new K(406149835),
        $f = new Te(1932),
        ag = new K(1935);
    var L = a => {
        var b = "oa";
        if (a.oa && a.hasOwnProperty(b)) return a.oa;
        b = new a;
        return a.oa = b
    };
    var bg = class {
            constructor() {
                const a = {};
                this.j = (b, c) => null != a[b] ? a[b] : c;
                this.l = (b, c) => null != a[b] ? a[b] : c;
                this.h = (b, c) => null != a[b] ? a[b] : c;
                this.i = (b, c) => null != a[b] ? a[b] : c;
                this.m = () => {}
            }
        },
        M = a => L(bg).j(a.h, a.defaultValue),
        N = a => L(bg).l(a.h, a.defaultValue);

    function cg(a, b, c) {
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
        Se(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function dg(a, b) {
        const c = e => {
                e = eg(e);
                return null == e ? !1 : 0 < e
            },
            d = e => {
                e = eg(e);
                return null == e ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    init: fg(a.previousSibling, c),
                    ha: e => fg(e.previousSibling, c),
                    ka: 0
                };
            case 2:
                return {
                    init: fg(a.lastChild, c),
                    ha: e => fg(e.previousSibling, c),
                    ka: 0
                };
            case 3:
                return {
                    init: fg(a.nextSibling, d),
                    ha: e => fg(e.nextSibling, d),
                    ka: 3
                };
            case 1:
                return {
                    init: fg(a.firstChild, d),
                    ha: e => fg(e.nextSibling, d),
                    ka: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function eg(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function fg(a, b) {
        return a && b(a) ? a : null
    };
    var gg = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var hg = a => "string" === typeof a,
        ig = a => void 0 === a;
    var kg = class extends B {
            constructor(a) {
                super(a, -1, jg)
            }
        },
        jg = [2, 8],
        lg = [3, 4, 5],
        mg = [6, 7];
    var ng;
    ng = {
        Hb: 0,
        Ra: 3,
        Sa: 4,
        Ta: 5
    };
    var og = ng.Ra,
        pg = ng.Sa,
        qg = ng.Ta;
    const rg = a => null != a ? !a : a,
        sg = (a, b) => {
            let c = !1;
            for (let d = 0; d < a.length; d++) {
                const e = a[d]();
                if (e === b) return e;
                null == e && (c = !0)
            }
            if (!c) return !b
        },
        ug = (a, b) => {
            var c = x(a, kg, 2);
            if (!c.length) return tg(a, b);
            a = t(a, 1, 0);
            if (1 === a) return rg(ug(c[0], b));
            c = Ea(c, d => () => ug(d, b));
            switch (a) {
                case 2:
                    return sg(c, !1);
                case 3:
                    return sg(c, !0)
            }
        },
        tg = (a, b) => {
            const c = yb(a, lg);
            a: {
                switch (c) {
                    case og:
                        var d = Eb(a, 3, lg);
                        break a;
                    case pg:
                        d = Eb(a, 4, lg);
                        break a;
                    case qg:
                        d = Eb(a, 5, lg);
                        break a
                }
                d = void 0
            }
            if (d && (b = (b = b[c]) && b[d])) {
                try {
                    var e = b(...sb(a,
                        8))
                } catch (f) {
                    return
                }
                b = t(a, 1, 0);
                if (4 === b) return !!e;
                d = null != e;
                if (5 === b) return d;
                if (12 === b) a = A(a, zb(a, mg, 7));
                else a: {
                    switch (c) {
                        case pg:
                            a = ub(a, zb(a, mg, 6));
                            break a;
                        case qg:
                            a = A(a, zb(a, mg, 7));
                            break a
                    }
                    a = void 0
                }
                if (null != a) {
                    if (6 === b) return e === a;
                    if (9 === b) return null != e && 0 === ra(String(e), a);
                    if (d) switch (b) {
                        case 7:
                            return e < a;
                        case 8:
                            return e > a;
                        case 12:
                            return hg(a) && hg(e) && (new RegExp(a)).test(e);
                        case 10:
                            return null != e && -1 === ra(String(e), a);
                        case 11:
                            return null != e && 1 === ra(String(e), a)
                    }
                }
            }
        };
    var vg = (a, b) => !a || !(!b || !ug(a, b));
    var xg = class extends B {
            constructor(a) {
                super(a, -1, wg)
            }
        },
        wg = [4];
    var yg = class extends B {
        constructor(a) {
            super(a)
        }
    };
    var Bg = class extends B {
            constructor(a) {
                super(a, -1, Ag)
            }
        },
        Ag = [5],
        Cg = [1, 2, 3, 6, 7];

    function Dg(a, ...b) {
        Eg(a, ...b.map(c => ({
            Qa: 4,
            message: c
        })))
    }

    function Fg(a, ...b) {
        Eg(a, ...b.map(c => ({
            Qa: 7,
            message: c
        })))
    };

    function Gg(a) {
        return JSON.stringify([a.map(b => [{
            [b.Qa]: b.message.toJSON()
        }])])
    };
    var Hg = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function Eg(a, ...b) {
        a.i.push(...b);
        100 <= a.i.length ? (null !== a.h && clearTimeout(a.h), a.h = setTimeout(() => {
            Ig(a)
        }, 0)) : null === a.h && (a.h = setTimeout(() => {
            Ig(a)
        }, a.l))
    }

    function Ig(a) {
        const b = Gg(a.i);
        a.j("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
        a.i = [];
        a.h = null
    }
    var Jg = class {
            constructor(a) {
                this.j = Hg;
                this.l = a;
                this.i = [];
                this.h = null
            }
        },
        Kg = class extends Jg {
            constructor(a = 1E3) {
                super(a)
            }
        };

    function Lg(a, b) {
        return Bb(a, 1, b)
    }

    function Mg(a, b) {
        return Db(a, 2, b)
    }

    function Ng(a, b) {
        return vb(a, 4, b)
    }

    function Og(a, b) {
        return Db(a, 5, b)
    }

    function Pg(a, b) {
        return wb(a, 6, b)
    }
    var Rg = class extends B {
        constructor() {
            super(void 0, -1, Qg)
        }
    };

    function Sg(a, b) {
        return wb(a, 1, b)
    }

    function Tg(a, b) {
        return wb(a, 2, b)
    }
    var Ug = class extends B {
            constructor() {
                super(void 0)
            }
            P() {
                return t(this, 1, 0)
            }
        },
        Vg = class extends B {
            constructor() {
                super(void 0)
            }
        },
        Qg = [2, 4, 5],
        Wg = [1, 2];
    var Yg = class extends B {
            constructor() {
                super(void 0, -1, Xg)
            }
        },
        $g = class extends B {
            constructor() {
                super(void 0, -1, Zg)
            }
        },
        Xg = [2, 3],
        Zg = [5],
        ah = [1, 2, 3, 4];

    function bh(a, b) {
        return Cb(a, 4, ch, b)
    }
    var dh = class extends B {
            constructor() {
                super(void 0)
            }
            getTagSessionCorrelator() {
                return t(this, 2, 0)
            }
        },
        ch = [4, 5, 7];

    function eh(a, b) {
        b = wb(b, 1, Date.now());
        var c = Xc(window);
        b = wb(b, 2, c);
        return wb(b, 6, a.i)
    }

    function fh(a, b, c, d, e, f) {
        const g = Tg(Sg(new Ug, b), c);
        b = Pg(Mg(Lg(Og(Ng(new Rg, d), e), g), a.h), f);
        b = bh(new dh, b);
        a.l && Dg(a.j, eh(a, b));
        if (1 === f || 3 === f || 4 === f && !a.h.some(h => h.P() === g.P() && t(h, 2, 0) === c)) a.h.push(g), 100 < a.h.length && a.h.shift()
    }

    function gh(a, b, c, d) {
        if (a.m) {
            var e = new Yg;
            b = Db(e, 2, b);
            c = Db(b, 3, c);
            d && wb(c, 1, d);
            d = new dh;
            d = Cb(d, 7, ch, c);
            a.l && Dg(a.j, eh(a, d))
        }
    }
    var hh = class {
        constructor(a, b, c, d = new Kg(b)) {
            this.i = a;
            this.m = c;
            this.j = d;
            this.h = [];
            this.l = 0 < this.i && Kc() < 1 / this.i
        }
    };
    var ih = class {
        constructor() {
            this.h = {
                [og]: {},
                [pg]: {},
                [qg]: {}
            }
        }
    };
    var jh = /^true$/.test("false"),
        kh = (a, b) => {
            switch (b) {
                case 1:
                    return Eb(a, 1, Cg);
                case 2:
                    return Eb(a, 2, Cg);
                case 3:
                    return Eb(a, 3, Cg);
                case 6:
                    return Eb(a, 6, Cg);
                default:
                    return null
            }
        },
        lh = (a, b) => {
            if (!a) return null;
            switch (b) {
                case 1:
                    return u(a, 1);
                case 7:
                    return A(a, 3);
                case 2:
                    return ub(a, 2);
                case 3:
                    return A(a, 3);
                case 6:
                    return sb(a, 4);
                default:
                    return null
            }
        };
    const mh = oc(() => {
        if (!jh) return {};
        try {
            const a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (a) {}
        return {}
    });
    var qh = (a, b, c, d = 0) => {
        L(nh).j[d] = L(nh).j[d] ? .add(b) ? ? (new Set).add(b);
        const e = mh();
        if (null != e[b]) return e[b];
        b = oh(d)[b];
        if (!b) return c;
        b = new Bg(b);
        b = ph(b);
        a = lh(b, a);
        return null != a ? a : c
    };
    const ph = a => {
        const b = L(ih).h;
        if (b) {
            const c = Ha(x(a, yg, 5), d => vg(w(d, kg, 1), b));
            if (c) return w(c, xg, 2)
        }
        return w(a, xg, 4)
    };
    class nh {
        constructor() {
            this.i = {};
            this.l = [];
            this.j = {};
            this.h = new Map
        }
    }
    var rh = (a, b = !1, c) => !!qh(1, a, b, c),
        sh = (a, b = 0, c) => {
            a = Number(qh(2, a, b, c));
            return isNaN(a) ? b : a
        },
        th = (a, b = "", c) => qh(3, a, b, c),
        uh = (a, b = [], c) => qh(6, a, b, c),
        oh = a => L(nh).i[a] || (L(nh).i[a] = {});
    const vh = (a, b) => {
        const c = oh(b);
        C(a, (d, e) => c[e] = d)
    };
    var wh = (a, b, c, d, e = !1) => {
            const f = [],
                g = [];
            Ca(b, h => {
                const k = oh(h);
                Ca(a, l => {
                    var p = yb(l, Cg);
                    const v = kh(l, p);
                    if (v) {
                        var D = L(nh).h.get(h) ? .get(v) ? .slice(0) ? ? [];
                        a: {
                            const z = new $g;
                            switch (p) {
                                case 1:
                                    xb(z, 1, ah, v);
                                    break;
                                case 2:
                                    xb(z, 2, ah, v);
                                    break;
                                case 3:
                                    xb(z, 3, ah, v);
                                    break;
                                case 6:
                                    xb(z, 4, ah, v);
                                    break;
                                default:
                                    p = void 0;
                                    break a
                            }
                            vb(z, 5, D);p = z
                        }
                        if (D = p) D = !!L(nh).j[h] ? .has(v);
                        D && f.push(p);
                        if (D = p) D = !!L(nh).h.get(h) ? .has(v);
                        D && g.push(p);
                        e || (p = L(nh), p.h.has(h) || p.h.set(h, new Map), p.h.get(h).has(v) || p.h.get(h).set(v, []), d && p.h.get(h).get(v).push(d));
                        k[v] = l.toJSON()
                    }
                })
            });
            (f.length || g.length) && gh(c, f, g, d ? ? void 0)
        },
        xh = (a, b) => {
            const c = oh(b);
            Ca(a, d => {
                var e = new Bg(d);
                const f = yb(e, Cg);
                (e = kh(e, f)) && (c[e] || (c[e] = d))
            })
        },
        yh = () => Ea(Object.keys(L(nh).i), a => Number(a)),
        zh = a => {
            Ia(L(nh).l, a) || vh(oh(4), a)
        };
    class O {
        constructor(a) {
            this.methodName = a
        }
    }
    var Ah = new O(1),
        Bh = new O(16),
        Ch = new O(15),
        Dh = new O(2),
        Eh = new O(3),
        Fh = new O(4),
        Gh = new O(5),
        Hh = new O(6),
        Ih = new O(7),
        Jh = new O(8),
        Kh = new O(9),
        Lh = new O(10),
        Mh = new O(11),
        Nh = new O(12),
        Oh = new O(13),
        Ph = new O(14),
        P = (a, b, c) => {
            c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
                value: b
            })
        },
        Qh = (a, b, c) => b[a.methodName] || c || (() => {}),
        Rh = a => {
            P(Gh, rh, a);
            P(Hh, sh, a);
            P(Ih, th, a);
            P(Jh, uh, a);
            P(Oh, xh, a);
            P(Ch, zh, a)
        },
        Sh = a => {
            P(Fh, b => {
                L(ih).h = b
            }, a);
            P(Kh, (b, c) => {
                    var d = L(ih);
                    d.h[og][b] || (d.h[og][b] = c)
                },
                a);
            P(Lh, (b, c) => {
                var d = L(ih);
                d.h[pg][b] || (d.h[pg][b] = c)
            }, a);
            P(Mh, (b, c) => {
                var d = L(ih);
                d.h[qg][b] || (d.h[qg][b] = c)
            }, a);
            P(Ph, b => {
                var c = L(ih);
                for (const d of [og, pg, qg]) Object.assign(c.h[d], b[d])
            }, a)
        },
        Th = a => {
            a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
                value: !0
            })
        };

    function Uh(a, b, c) {
        a.l = Qh(Ah, b, () => {});
        a.j = d => {
            Qh(Dh, b, () => [])(d, c)
        };
        a.i = () => Qh(Eh, b, () => [])(c);
        a.h = d => {
            Qh(Bh, b, () => {})(d, c)
        }
    }
    class Vh {
        constructor() {
            this.l = () => {};
            this.h = () => {};
            this.j = () => {};
            this.i = () => []
        }
    };
    class Wh {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    }
    var Xh = a => !!(a.error && a.meta && a.id);
    let Yh = null;

    function Zh() {
        if (null === Yh) {
            Yh = "";
            try {
                let a = "";
                try {
                    a = m.top.location.hash
                } catch (b) {
                    a = m.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Yh = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Yh
    };
    var $h = () => {
            const a = m.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
        },
        ai = () => {
            const a = m.performance;
            return a && a.now ? a.now() : null
        };
    class bi {
        constructor(a, b) {
            var c = ai() || $h();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const ci = m.performance,
        di = !!(ci && ci.mark && ci.measure && ci.clearMarks),
        ei = oc(() => {
            var a;
            if (a = di) a = Zh(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function fi(a) {
        a && ci && ei() && (ci.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), ci.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class gi {
        constructor() {
            this.i = [];
            this.j = m || m;
            let a = null;
            m && (m.google_js_reporting_queue = m.google_js_reporting_queue || [], this.i = m.google_js_reporting_queue, a = m.google_measure_js_timing);
            this.h = ei() || (null != a ? a : 1 > Math.random())
        }
        start(a, b) {
            if (!this.h) return null;
            a = new bi(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            ci && ei() && ci.mark(b);
            return a
        }
        end(a) {
            if (this.h && "number" === typeof a.value) {
                a.duration = (ai() || $h()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                ci && ei() && ci.mark(b);
                !this.h || 2048 < this.i.length ||
                    this.i.push(a)
            }
        }
    };
    ed `https://www.googletagservices.com/console/host/host.js`;
    ed `https://www.googletagservices.com/console/panel/index.html`;
    ed `https://www.googletagservices.com/console/overlay/index.html`;
    var hi = (a, b) => {
        do {
            const c = Gc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function ii(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = E(a[c[e]]);
                d = null === d ? null : Math.round(d);
                null != d && (b[f] = d)
            }
        }
    }
    var ji = (a, b) => !((Oc.test(b.google_ad_width) || Nc.test(a.style.width)) && (Oc.test(b.google_ad_height) || Nc.test(a.style.height))),
        li = (a, b) => (a = ki(a, b)) ? a.y : 0,
        ki = (a, b) => {
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
        mi = a => {
            let b = 0;
            for (let c in gg) - 1 != a.indexOf(c) && (b |= gg[c]);
            return b
        },
        ni = (a, b, c, d, e) => {
            if (a !== a.top) return Dc(a) ? 3 : 16;
            if (!(488 > I(a).clientWidth)) return 4;
            if (!(a.innerHeight >= a.innerWidth)) return 5;
            const f = I(a).clientWidth;
            if (!f || (f - c) / f > d) a = 6;
            else {
                if (c = "true" != e.google_full_width_responsive) a: {
                    c = b.parentElement;
                    for (b = I(a).clientWidth; c; c = c.parentElement)
                        if ((d = Gc(c, a)) && (e = E(d.width)) && !(e >= b) && "visible" != d.overflow) {
                            c = !0;
                            break a
                        }
                    c = !1
                }
                a = c ? 7 : !0
            }
            return a
        },
        oi = (a, b, c, d) => {
            const e = ni(b, c, a, .3, d);
            !0 !== e ? a = e : "true" == d.google_full_width_responsive || hi(c, b) ? (b = I(b).clientWidth, a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
            return a
        },
        pi = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const qi = (a, b) => {
            if (3 == b.nodeType) return /\S/.test(b.data);
            if (1 == b.nodeType) {
                if (/^(script|style)$/i.test(b.nodeName)) return !1;
                let c;
                try {
                    c = Gc(b, a)
                } catch (d) {}
                return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
            }
            return !1
        },
        ri = (a, b, c) => {
            a = ki(b, a);
            return "rtl" == c ? -a.x : a.x
        };
    var si = (a, b) => {
        var c;
        c = (c = b.parentElement) ? (c = Gc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            pi(b, c, "0px");
            b.style.width = I(a).clientWidth + "px";
            if (0 !== ri(a, b, c)) {
                pi(b, c, "0px");
                var d = ri(a, b, c);
                pi(b, c, -1 * d + "px");
                a = ri(a, b, c);
                0 !== a && a !== d && pi(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };
    var ti = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        minWidth() {
            return this.l
        }
        height() {
            return this.j
        }
        h(a) {
            return 300 < a && 300 < this.j ? this.l : Math.min(1200, Math.round(a))
        }
        i() {}
    };
    var ui = (a, b, c, d = e => e) => {
            let e;
            return a.style && a.style[c] && d(a.style[c]) || (e = Gc(a, b)) && e[c] && d(e[c]) || null
        },
        vi = a => b => b.minWidth() <= a,
        yi = (a, b, c, d) => {
            const e = a && wi(c, b),
                f = xi(b, d);
            return g => !(e && g.height() >= f)
        },
        zi = a => b => b.height() <= a,
        wi = (a, b) => li(a, b) < I(b).clientHeight - 100,
        Ai = (a, b) => {
            var c = ui(b, a, "height", E);
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = ui(b, a, "height", E);
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style && E(b.style.height)) && (c = Math.min(c, d)), (d = ui(b, a, "maxHeight",
                E)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        };
    const xi = (a, b) => {
        const c = 0 == hd(a);
        return b && c ? Math.max(250, 2 * I(a).clientHeight / 3) : 250
    };
    var Bi = {
        google_ad_channel: !0,
        google_ad_client: !0,
        google_ad_host: !0,
        google_ad_host_channel: !0,
        google_adtest: !0,
        google_tag_for_child_directed_treatment: !0,
        google_tag_for_under_age_of_consent: !0,
        google_tag_partner: !0,
        google_restrict_data_processing: !0,
        google_page_url: !0,
        google_debug_params: !0,
        google_adbreak_test: !0,
        google_ad_frequency_hint: !0,
        google_admob_interstitial_slot: !0,
        google_admob_rewarded_slot: !0,
        google_max_ad_content_rating: !0,
        google_traffic_source: !0
    };
    const Ci = RegExp("(^| )adsbygoogle($| )");

    function Di(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            const e = uc(d.Rb);
            a[e] = d.value
        }
    };
    class Ei {
        constructor() {
            var a = ed `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.h = null;
            this.j = !1;
            this.l = Math.random();
            this.i = this.H;
            this.m = a
        }
        Na(a) {
            this.h = a
        }
        v(a) {
            this.j = a
        }
        Oa(a) {
            this.i = a
        }
        H(a, b, c = .01, d, e = "jserror") {
            if ((this.j ? this.l : Math.random()) > c) return !1;
            Xh(b) || (b = new Wh(b, {
                context: a,
                id: e
            }));
            if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
            m.google_js_errors = m.google_js_errors || [];
            m.google_js_errors.push(b);
            m.error_rep_loaded || (Ec(m.document, hc(gc(this.m).toString())),
                m.error_rep_loaded = !0);
            return !1
        }
        da(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.i(a, d, .01, c, "jserror")) throw d;
            }
        }
        pa(a, b) {
            return (...c) => this.da(a, () => b.apply(void 0, c))
        }
        ea(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.H(a, c instanceof Error ? c : Error(c))
            })
        }
    };
    const Fi = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var Gi = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = "undefined" !== typeof queueMicrotask;
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = ai();
                let k, l = 3;
                try {
                    k = b.apply(this, arguments)
                } catch (p) {
                    l = 13;
                    if (!c) throw p;
                    c(a, p)
                } finally {
                    f.google_measure_js_timing && h && Fi({
                        label: a.toString(),
                        value: h,
                        duration: (ai() || 0) - h,
                        type: l,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return k
            }
        },
        Hi = (a, b) => Gi(a, b, (c, d) => {
            (new Ei).H(c, d)
        }, void 0, !1);

    function Ii(a, b, c) {
        return Gi(a, b, void 0, c, !0).apply()
    }

    function Ji(a) {
        if (!a) return null;
        var b = q(a, 7);
        if (q(a, 1) || a.getId() || 0 < sb(a, 4).length) {
            b = sb(a, 4);
            var c = q(a, 3),
                d = q(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Pe(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Pe(b[c]);
            a = (b = e) ? new Re(b, q(a, 2), q(a, 5), Ki(q(a, 6))) : null
        } else a = b ? new Re(b, q(a, 2), q(a, 5), Ki(q(a, 6))) : null;
        return a
    }
    var Li = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Ki(a) {
        return null == a ? a : Li[a]
    }
    var Mi = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Ni(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function Oi(a) {
        a = Ni(a);
        return a.optimization = a.optimization || {}
    };
    var Pi = class extends B {
        constructor(a) {
            super(a)
        }
    };
    var Qi = a => {
        switch (q(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = w(a, G, 1), null == b ? b = null : (a = q(a, 2), b = null == a ? null : new Gd({
                    Va: [b],
                    jb: a
                }));
                return null != b ? vd(b) : xd(Error("Missing dimension when creating placement id"));
            case 3:
                return xd(Error("Missing dimension when creating placement id"));
            default:
                return xd(Error("Invalid type: " + q(a, 8)))
        }
    };
    var Ri = (a, b) => {
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

    function Si(a, b) {
        const c = new Ed,
            d = new Dd;
        b.forEach(e => {
            if (Fb(e, pe, 1, se)) {
                e = Fb(e, pe, 1, se);
                if (w(e, ne, 1) && w(w(e, ne, 1), G, 1) && w(e, ne, 2) && w(w(e, ne, 2), G, 1)) {
                    const g = Ti(a, w(w(e, ne, 1), G, 1)),
                        h = Ti(a, w(w(e, ne, 2), G, 1));
                    if (g && h)
                        for (var f of Ri({
                                anchor: g,
                                position: q(w(e, ne, 1), 2)
                            }, {
                                anchor: h,
                                position: q(w(e, ne, 2), 2)
                            })) c.set(fa(f.anchor), f.position)
                }
                w(e, ne, 3) && w(w(e, ne, 3), G, 1) && (f = Ti(a, w(w(e, ne, 3), G, 1))) && c.set(fa(f), q(w(e, ne, 3), 2))
            } else Fb(e, qe, 2, se) ? Ui(a, Fb(e, qe, 2, se), c) : Fb(e, re, 3, se) && Vi(a, Fb(e, re, 3, se), d)
        });
        return new Wi(c,
            d)
    }
    class Wi {
        constructor(a, b) {
            this.i = a;
            this.h = b
        }
    }
    const Ui = (a, b, c) => {
            w(b, ne, 2) ? (b = w(b, ne, 2), (a = Ti(a, w(b, G, 1))) && c.set(fa(a), q(b, 2))) : w(b, G, 1) && (a = Xi(a, w(b, G, 1))) && a.forEach(d => {
                d = fa(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Vi = (a, b, c) => {
            w(b, G, 1) && (a = Xi(a, w(b, G, 1))) && a.forEach(d => {
                c.add(fa(d))
            })
        },
        Ti = (a, b) => (a = Xi(a, b)) && 0 < a.length ? a[0] : null,
        Xi = (a, b) => (b = Ji(b)) ? b.query(a) : null;

    function Yi(a, b, c) {
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
            if (Zi(b)) return !0;
            if (a.h.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.h.add(d));
        return !1
    }

    function $i(a) {
        a = aj(a);
        return a.has("all") || a.has("after")
    }

    function bj(a) {
        a = aj(a);
        return a.has("all") || a.has("before")
    }

    function aj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function Zi(a) {
        const b = aj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var cj = class {
        constructor() {
            this.h = new Set
        }
    };

    function dj(a, b) {
        if (!a) return !1;
        a = Gc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function ej(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function fj(a) {
        return !!a.nextSibling || !!a.parentNode && fj(a.parentNode)
    };

    function gj(a = window) {
        a = a.googletag;
        return a ? .apiReady ? a : void 0
    };
    const hj = a => {
        const b = gj(a);
        return b ? Da(Ea(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
    };
    var ij = a => {
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

    function jj(a, b) {
        if (a.l) return !0;
        a.l = !0;
        const c = x(a.j, ye, 1);
        a.i = 0;
        const d = kj(a.C);
        var e = a.h,
            f = a.j;
        if (w(f, me, 27) ? .m() ? .m()) {
            var g = w(f, ve, 6) ? .m();
            if (g && 0 != g.length) {
                var h;
                f = [];
                for (h of g)
                    if (g = Ji(w(h, G, 1))) g = g.query(e.document), 0 < g.length && f.push(g[0]);
                f = f.filter(he).filter(ie(f)).filter(je(e));
                f.sort(ke);
                if (h = f[0] || null) e = e.document.createElement("div"), e.id = "google-auto-placed-read-aloud-player-reserved", Sc(e, {
                    width: "100%",
                    height: "65px"
                }), h.insertBefore(e, h.firstChild)
            }
        }
        e = a.h;
        var k;
        try {
            var l = (k = e.localStorage.getItem("google_ama_settings")) ?
                Gb(Pi, k) : null
        } catch (D) {
            l = null
        }
        k = null !== l && u(l, 2, !1);
        l = Ni(e);
        k && (l.eatf = !0, bd(7, [!0, 0, !1]));
        h = M(ef) || M(df);
        f = M(df);
        if (h) {
            b: {
                k = f;g = {
                    ab: !1,
                    bb: !1
                };
                const D = Ja(e.document.querySelectorAll(".google-auto-placed")),
                    z = Ja(e.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
                    y = Ja(e.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
                var p = (hj(e) || Ja(e.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Ja(e.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
                const H = Ja(e.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                    za = Ja(e.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                    W = Ja(e.document.querySelectorAll("div.googlepublisherpluginad")),
                    Aa = Ja(e.document.querySelectorAll("html > ins.adsbygoogle"));f = [].concat(Ja(e.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Ja(e.document.querySelectorAll("body ins.adsbygoogle")));h = [];
                for (const [va, qc] of [
                        [g.Kb, D],
                        [g.ab, z],
                        [g.Nb, y],
                        [g.Lb, p],
                        [g.Ob, H],
                        [g.Jb, za],
                        [g.Mb, W],
                        [g.bb, Aa]
                    ]) g = qc,
                !1 === va ? h = h.concat(g) : f = f.concat(g);f = ij(f);h = ij(h);f = f.slice(0);
                for (v of h)
                    for (h = 0; h < f.length; h++)(v.contains(f[h]) ||
                        f[h].contains(v)) && f.splice(h, 1);
                var v = f;e = I(e).clientHeight;
                for (h = 0; h < v.length; h++)
                    if (f = v[h].getBoundingClientRect(), !(0 === f.height && !k || f.top > e)) {
                        v = !0;
                        break b
                    }
                v = !1
            }
            v = v ? l.eatfAbg = !0 : !1
        }
        else v = k;
        if (v) return !0;
        v = new Dd([2]);
        for (l = 0; l < c.length; l++) {
            e = a;
            h = c[l];
            k = l;
            f = b;
            g = d;
            p = v;
            if (!w(h, Kd, 4) || !p.contains(q(w(h, Kd, 4), 1)) || 1 !== q(h, 8) || h && Array.isArray(q(h, 4)) && g[q(w(h, Kd, 4), 2)]) e = null;
            else {
                e.i++;
                if (f = lj(e, h, f, g)) g = Ni(e.h), g.numAutoAdsPlaced || (g.numAutoAdsPlaced = 0), w(h, G, 1) && null != q(w(h, G, 1), 5) && (g.numPostPlacementsPlaced ?
                    g.numPostPlacementsPlaced++ : g.numPostPlacementsPlaced = 1), null == g.placed && (g.placed = []), g.numAutoAdsPlaced++, g.placed.push({
                    index: k,
                    element: f.ga
                }), bd(7, [!1, e.i, !0]);
                e = f
            }
            if (e) return !0
        }
        bd(7, [!1, a.i, !1]);
        return !1
    }

    function lj(a, b, c, d) {
        if (b && Array.isArray(q(b, 4)) && d[q(w(b, Kd, 4), 2)] || 1 != q(b, 8)) return null;
        d = w(b, G, 1);
        if (!d) return null;
        d = Ji(d);
        if (!d) return null;
        d = d.query(a.h.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = Mi[q(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.h;
                switch (e) {
                    case 0:
                        f = dj(ej(d), f);
                        break a;
                    case 3:
                        f = dj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = dj(g ? 1 == g.nodeType ? g : ej(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !fj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !Se(c) && 0 >= c.offsetWidth);
            f = !c
        }
        if (!(c = f)) {
            c = a.v;
            f = q(b, 2);
            g = fa(d);
            g = c.i.h.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.h.contains(fa(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.h.contains(fa(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.B;
            f = q(b, 2);
            a: switch (f) {
                case 1:
                    g = $i(d.previousElementSibling) || bj(d);
                    break a;
                case 4:
                    g = $i(d) || bj(d.nextElementSibling);
                    break a;
                case 2:
                    g = bj(d.firstElementChild);
                    break a;
                case 3:
                    g = $i(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " +
                        f);
            }
            c = g || Yi(c, d, f)
        }
        if (c) return null;
        f = w(b, we, 3);
        c = {};
        f && (c.Pa = q(f, 1), c.Ga = q(f, 2), c.Wa = !!tb(f, 3));
        f = w(b, Kd, 4) && q(w(b, Kd, 4), 2) ? q(w(b, Kd, 4), 2) : null;
        f = Nd(f);
        g = null != q(b, 12) ? q(b, 12) : null;
        g = null == g ? null : new Md(null, {
            google_ml_rank: g
        });
        b = mj(a, b);
        b = Ld(a.m, f, g, b);
        f = a.h;
        a = a.G;
        var h = f.document,
            k = c.Wa || !1;
        g = (new wc(h)).createElement("DIV");
        const l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        c.ib && Di(k, c.ib);
        h = (new wc(h)).createElement("INS");
        k = h.style;
        k.display =
            "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        c.Pa && (k.marginTop = c.Pa);
        c.Ga && (k.marginBottom = c.Ga);
        c.Ua && Di(k, c.Ua);
        g.appendChild(h);
        c = {
            na: g,
            ga: h
        };
        c.ga.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ia) c.na.className = h.join(" ");
        h = c.ga;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var p = c.na;
                if (M($e)) {
                    {
                        const H = dg(d, e);
                        if (H.init) {
                            var v = H.init;
                            for (d = v; d = H.ha(d);) v = d;
                            var D = {
                                anchor: v,
                                position: H.ka
                            }
                        } else D = {
                            anchor: d,
                            position: e
                        }
                    }
                    p["google-ama-order-assurance"] = 0;
                    cg(p, D.anchor, D.position)
                } else cg(p, d, e);
                b: {
                    var z = c.ga;z.dataset.adsbygoogleStatus = "reserved";z.className += " adsbygoogle-noablate";p = {
                        element: z
                    };
                    var y = b && b.Ma;
                    if (z.hasAttribute("data-pub-vars")) {
                        try {
                            y = JSON.parse(z.getAttribute("data-pub-vars"))
                        } catch (H) {
                            break b
                        }
                        z.removeAttribute("data-pub-vars")
                    }
                    y && (p.params = y);
                    (f.adsbygoogle = f.adsbygoogle || []).push(p)
                }
            } catch (H) {
                (z = c.na) && z.parentNode && (y = z.parentNode, y.removeChild(z), Se(y) && (y.style.display = y.getAttribute("data-init-display") ||
                    "none"));
                z = !1;
                break a
            }
            z = !0
        }
        return z ? c : null
    }

    function mj(a, b) {
        return zd(Cd(Qi(b).map(Od), c => {
            Ni(a.h).exception = c
        }))
    }
    const nj = class {
        constructor(a, b, c, d, e) {
            this.h = a;
            this.G = b;
            this.j = c;
            this.m = e || null;
            this.v = (this.C = d) ? Si(a.document, x(d, oe, 5)) : Si(a.document, []);
            this.B = new cj;
            this.i = 0;
            this.l = !1
        }
    };

    function kj(a) {
        const b = {};
        a && sb(a, 6).forEach(c => {
            b[c] = !0
        });
        return b
    };
    var oj = class extends B {
        constructor(a) {
            super(a)
        }
    };
    const pj = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var qj = class {
            constructor(a, b) {
                this.h = a;
                this.i = b
            }
        },
        rj = class {
            constructor(a, b, c) {
                this.url = a;
                this.A = b;
                this.Ja = !!c;
                this.depth = null
            }
        };

    function sj(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }
    class tj {
        constructor(a = null) {
            this.m = ae;
            this.i = null;
            this.l = this.H;
            this.h = a;
            this.j = !1
        }
        Oa(a) {
            this.l = a
        }
        Na(a) {
            this.i = a
        }
        v(a) {
            this.j = a
        }
        da(a, b, c) {
            let d, e;
            try {
                this.h && this.h.h ? (e = this.h.start(a.toString(), 3), d = b(), this.h.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    fi(e), b = this.l(a, new Wh(f, {
                        message: sj(f)
                    }), void 0, c)
                } catch (g) {
                    this.H(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        pa(a, b) {
            return (...c) => this.da(a, () => b.apply(void 0, c))
        }
        H(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const Qa = new Zd;
                var g = Qa;
                g.h.push(1);
                g.i[1] = Ud("context", a);
                Xh(b) || (b = new Wh(b, {
                    message: sj(b)
                }));
                if (b.msg) {
                    g = Qa;
                    var h = b.msg.substring(0, 512);
                    g.h.push(2);
                    g.i[2] = Ud("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.i) try {
                    this.i(b)
                } catch (Za) {}
                if (d) try {
                    d(b)
                } catch (Za) {}
                d = Qa;
                k = [k];
                d.h.push(3);
                d.i[3] = k;
                d = m;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (Cc(l)) {
                        var p = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else p = b, b = null;
                    k.push(new rj(p || "", l));
                    try {
                        d = l.parent
                    } catch (Za) {
                        d = null
                    }
                } while (d && l != d);
                for (let Za = 0, zg = k.length - 1; Za <= zg; ++Za) k[Za].depth = zg - Za;
                l = m;
                if (l.location &&
                    l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (p = 1; p < k.length; ++p) {
                        var v = k[p];
                        v.url || (v.url = l.location.ancestorOrigins[p - 1] || "", v.Ja = !0)
                    }
                var D = k;
                let rc = new rj(m.location.href, m, !1);
                l = null;
                const Bd = D.length - 1;
                for (v = Bd; 0 <= v; --v) {
                    var z = D[v];
                    !l && pj.test(z.url) && (l = z);
                    if (z.url && !z.Ja) {
                        rc = z;
                        break
                    }
                }
                z = null;
                const Xl = D.length && D[Bd].url;
                0 != rc.depth && Xl && (z = D[Bd]);
                f = new qj(rc, z);
                if (f.i) {
                    D = Qa;
                    var y = f.i.url || "";
                    D.h.push(4);
                    D.i[4] = Ud("top", y)
                }
                var H = {
                    url: f.h.url || ""
                };
                if (f.h.url) {
                    var za =
                        f.h.url.match(zc),
                        W = za[1],
                        Aa = za[3],
                        va = za[4];
                    y = "";
                    W && (y += W + ":");
                    Aa && (y += "//", y += Aa, va && (y += ":" + va));
                    var qc = y
                } else qc = "";
                W = Qa;
                H = [H, {
                    url: qc
                }];
                W.h.push(5);
                W.i[5] = H;
                be(this.m, e, Qa, this.j, c)
            } catch (Qa) {
                try {
                    be(this.m, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: sj(Qa),
                        url: f && f.h.url
                    }, this.j, c)
                } catch (rc) {}
            }
            return !0
        }
        ea(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.H(a, c instanceof Error ? c : Error(c))
            })
        }
    };
    class Q extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, Q) : this.stack = Error().stack || ""
        }
    };
    let ae, R;
    const uj = new gi;
    var vj = a => {
        null != a && (m.google_measure_js_timing = a);
        m.google_measure_js_timing || (uj.h = !1, uj.i != uj.j.google_js_reporting_queue && (ei() && Ca(uj.i, fi), uj.i.length = 0))
    };
    (a => {
        ae = a || new ce;
        "number" !== typeof m.google_srt && (m.google_srt = Math.random());
        $d();
        R = new tj(uj);
        R.v(!0);
        "complete" == m.document.readyState ? vj() : uj.h && sc(m, "load", () => {
            vj()
        })
    })();
    var wj = (a, b, c) => R.da(a, b, c),
        xj = (a, b) => R.pa(a, b),
        yj = (a, b, c) => {
            const d = L(Vh).i();
            !b.eid && d.length && (b.eid = d.toString());
            be(ae, a, b, !0, c)
        },
        zj = (a, b, c, d) => {
            let e;
            Xh(b) ? e = b.msg || sj(b.error) : e = sj(b);
            return 0 == e.indexOf("TagError") ? (c = b instanceof Wh ? b.error : b, c.pbr || (c.pbr = !0, R.H(a, b, .1, d, "puberror")), !1) : R.H(a, b, c, d)
        };

    function Aj(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? yd(() => Gb(oj, c)) : vd(null)
    };

    function Bj() {
        if (Cj) return Cj;
        const a = dd() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Cj = b : a.google_persistent_state_async = Cj = new Dj
    }

    function Ej(a) {
        return Fj[a] || "google_ps_" + a
    }

    function Gj(a, b, c) {
        b = Ej(b);
        a = a.S;
        const d = a[b];
        return void 0 === d ? a[b] = c : d
    }
    class Dj {
        constructor() {
            this.S = {}
        }
    }
    var Cj = null;
    const Fj = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function Hj(a) {
        this.h = a || {
            cookie: ""
        }
    }
    Hj.prototype.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Sb, g = c.Tb || !1, f = c.domain || void 0, e = c.path || void 0, d = c.gb);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    Hj.prototype.get = function(a, b) {
        const c = a + "=",
            d = (this.h.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = qa(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    Hj.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    Hj.prototype.clear = function() {
        var a = (this.h.cookie || "").split(";");
        const b = [];
        var c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = qa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (c = b.length - 1; 0 <= c; c--) a = b[c], this.get(a), this.set(a, "", {
            gb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function Ij(a, b = window) {
        if (tb(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    };

    function Jj(a) {
        var b = new Kj;
        return r(b, 5, a)
    }
    var Kj = class extends B {
        constructor() {
            super(void 0)
        }
    };
    const Lj = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function Mj(a) {
        if (a.i) return a.i;
        a.i = Qc(a.h, "__tcfapiLocator");
        return a.i
    }

    function Nj(a) {
        return "function" === typeof a.h.__tcfapi || null != Mj(a)
    }

    function Oj(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
        else if (Mj(a)) {
            Pj(a);
            const e = ++a.G;
            a.m[e] = c;
            a.i && a.i.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function Pj(a) {
        a.l || (a.l = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.m[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, sc(a.h, "message", a.l))
    }
    class Qj extends qd {
        constructor(a) {
            super();
            this.h = a;
            this.i = null;
            this.m = {};
            this.G = 0;
            this.C = !1;
            this.l = null
        }
        j() {
            this.m = {};
            this.l && (tc(this.h, "message", this.l), delete this.l);
            delete this.m;
            delete this.h;
            delete this.i;
            super.j()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.C
            };
            const c = pc(() => a(b));
            let d = 0;
            d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, 500);
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = Lj(b), b.internalBlockOnErrors = this.C, g && 0 === b.internalErrorState ||
                    (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                Oj(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && Oj(this, "removeEventListener", null, a.listenerId)
        }
    };
    var Vj = ({
            A: a,
            N: b,
            qa: c,
            Ha: d,
            ia: e = !1,
            ja: f = !1
        }) => {
            b = Rj({
                A: a,
                N: b,
                ia: e,
                ja: f
            });
            null != b.h || "tcunav" != b.i.message ? d(b) : Sj(a, c).then(g => g.map(Tj)).then(g => g.map(h => Uj(a, h))).then(d)
        },
        Rj = ({
            A: a,
            N: b,
            ia: c = !1,
            ja: d = !1
        }) => {
            if (!Wj({
                    A: a,
                    N: b,
                    ia: c,
                    ja: d
                })) return Uj(a, Jj(!0));
            b = Bj();
            return (b = Gj(b, 24)) ? Uj(a, Tj(b)) : xd(Error("tcunav"))
        };

    function Wj({
        A: a,
        N: b,
        ia: c,
        ja: d
    }) {
        if (!(d = !d && Nj(new Qj(a)))) {
            if (c = !c) {
                if (b) {
                    a = Aj(a);
                    if (null != a.h)
                        if ((a = a.h.value) && null != q(a, 1)) b: switch (a = q(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else R.H(806, a.i, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function Sj(a, b) {
        return Promise.race([Xj(), Yj(a, b)])
    }

    function Xj() {
        return (new Promise(a => {
            var b = Bj();
            a = {
                resolve: a
            };
            const c = Gj(b, 25, []);
            c.push(a);
            b.S[Ej(25)] = c
        })).then(Zj)
    }

    function Yj(a, b) {
        return new Promise(c => {
            a.setTimeout(c, b, xd(Error("tcto")))
        })
    }

    function Zj(a) {
        return a ? vd(a) : xd(Error("tcnull"))
    }

    function Tj(a) {
        if (!1 === a.gdprApplies) var b = !0;
        else void 0 === a.internalErrorState && (a.internalErrorState = Lj(a)), b = "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
        if (b)
            if (!1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length) {
                b: {
                    if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], void 0 !== b)) {
                        b =
                            b["755"];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a = !0
            }
        else a = !0;
        else a = !1;
        return Jj(a)
    }

    function Uj(a, b) {
        return (a = Ij(b, a)) ? vd(a) : xd(Error("unav"))
    };
    var bk = class extends B {
            constructor(a) {
                super(a)
            }
            m() {
                return w(this, ak, 2)
            }
        },
        ak = class extends B {
            constructor(a) {
                super(a, -1, ck)
            }
        },
        ck = [1, 2];
    const dk = class {
        constructor(a) {
            this.exception = a
        }
    };

    function ek(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.h;
            Ni(e.h);
            x(e.j, ye, 1);
            d.call(c, new dk(b))
        } catch (f) {
            a = a.i, b = f, md(a), a.h = 2, a.j = b, od(a.i)
        }
    }
    var fk = class {
        constructor(a, b, c) {
            this.j = a;
            this.h = b;
            this.i = c
        }
        start() {
            this.l()
        }
        l() {
            try {
                switch (this.j.document.readyState) {
                    case "complete":
                    case "interactive":
                        jj(this.h, !0);
                        ek(this);
                        break;
                    default:
                        jj(this.h, !1) ? ek(this) : this.j.setTimeout(la(this.l, this), 100)
                }
            } catch (a) {
                ek(this, a)
            }
        }
    };
    var gk = "a".charCodeAt(),
        hk = Xb(kd),
        ik = Xb(ld);

    function S(a, b) {
        if (a.h + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.h, a.h + b);
        a.h += b;
        return parseInt(c, 2)
    }

    function jk(a) {
        return String.fromCharCode(gk + S(a, 6)) + String.fromCharCode(gk + S(a, 6))
    }

    function kk(a) {
        let b = S(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!S(a, 1),
                e = S(a, 16);
            if (d)
                for (d = S(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function lk(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (S(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function mk(a) {
        const b = S(a, 16);
        return !0 === !!S(a, 1) ? (a = kk(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : lk(a, b)
    }
    class nk {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.h = 0
        }
    };
    var pk = (a, b) => {
        try {
            var c = Ra(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new nk(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.h += 78;
            c.cmpId = S(d, 12);
            c.cmpVersion = S(d, 12);
            d.h += 30;
            c.tcfPolicyVersion = S(d, 6);
            c.isServiceSpecific = !!S(d, 1);
            c.useNonStandardStacks = !!S(d, 1);
            c.specialFeatureOptins = ok(lk(d, 12, ik), ik);
            c.purpose = {
                consents: ok(lk(d, 24, hk), hk),
                legitimateInterests: ok(lk(d, 24, hk), hk)
            };
            c.purposeOneTreatment = !!S(d, 1);
            c.publisherCC = jk(d);
            c.vendor = {
                consents: ok(mk(d), b),
                legitimateInterests: ok(mk(d),
                    b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const ok = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var qk = class {
        constructor(a) {
            this.key = a;
            this.defaultValue = !1;
            this.valueType = "boolean"
        }
    };

    function rk(a) {
        sk || (sk = new tk);
        const b = sk.h[a.key];
        if ("proto" === a.valueType) {
            try {
                const c = JSON.parse(b);
                if (Array.isArray(c)) return c
            } catch (c) {}
            return a.defaultValue
        }
        return typeof b === typeof a.defaultValue ? b : a.defaultValue
    }
    var uk = class {
        constructor() {
            this.h = {}
        }
    };
    var vk = class extends B {
            constructor() {
                super(void 0)
            }
        },
        wk = class extends B {
            constructor() {
                super(void 0)
            }
        };
    var xk = class extends B {
            constructor() {
                super(void 0)
            }
        },
        yk = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 24, 25];
    var zk = class {};
    var Bk = class extends B {
            constructor(a) {
                super(a, -1, Ak)
            }
        },
        Ck = class extends B {
            constructor(a) {
                super(a)
            }
        },
        Dk = class extends B {
            constructor(a) {
                super(a)
            }
        },
        Ak = [7];
    var Ek = new qk("45368529"),
        Fk = new qk("45369554");
    var tk = class extends uk {
            constructor() {
                super();
                var a = m.__fcexpdef || "";
                try {
                    const b = JSON.parse(a)[0];
                    a = "";
                    for (let c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                    this.h = JSON.parse(a)
                } catch (b) {}
            }
        },
        sk;

    function Gk(a) {
        return (a = Hk(a)) ? w(a, Ck, 4) : null
    }

    function Hk(a) {
        if (a = (new Hj(a)).get("FCCDCF", ""))
            if (rk(Ek))
                if (a.startsWith("%")) try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    Ik(1), b = null
                } else b = a;
                else b = a;
        else b = null;
        try {
            return b ? Gb(Bk, b) : null
        } catch (c) {
            return Ik(2), null
        }
    }

    function Ik(a) {
        new zk;
        var b = new wk;
        a = r(b, 7, a);
        b = new vk;
        a = Bb(b, 1, a);
        b = new xk;
        Cb(b, 22, yk, a);
        rk(Fk)
    };
    Xb(kd).map(a => Number(a));
    Xb(ld).map(a => Number(a));

    function Jk(a) {
        a.__tcfapiPostMessageReady || Kk(new Lk(a))
    }

    function Kk(a) {
        a.i = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.h.__tcfapi(e.command, e.version, (f, g) => {
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
        a.h.addEventListener("message", a.i);
        a.h.__tcfapiPostMessageReady = !0
    }
    var Lk = class {
        constructor(a) {
            this.h = a;
            this.i = null
        }
    };
    var Mk = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Fc("IFRAME", c);
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

    function Nk() {
        var a = window,
            b = M(lf);
        a.__uspapi || a.frames.__uspapiLocator || (a = new Ok(a), Pk(a), b && Qk(a))
    }

    function Pk(a) {
        !a.m || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", Mk(a.h, "__uspapiLocator"), na("__uspapi", (...b) => Rk(a, ...b)))
    }

    function Qk(a) {
        !a.j || a.h.__tcfapi || a.h.frames.__tcfapiLocator || (a.h.__tcfapiManager = "fc", Mk(a.h, "__tcfapiLocator"), a.h.__tcfapiEventListeners = a.h.__tcfapiEventListeners || [], na("__tcfapi", (...b) => Sk(a, ...b)), Jk(a.h))
    }

    function Rk(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.m
        }, !0)
    }

    function Sk(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && 2 !== c) d(null, !1);
            else switch (c = a.h.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(Tk(a, e, null), !0) : d(null, !1);
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
                    d(Tk(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function Tk(a, b, c) {
        if (!a.j) return null;
        b = pk(a.j, b);
        b.addtlConsent = null != a.l ? a.l : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class Ok {
        constructor(a) {
            this.h = a;
            this.i = a.document;
            this.m = (a = (a = Hk(this.i)) ? w(a, Dk, 5) || null : null) ? q(a, 2) : null;
            this.j = (a = Gk(this.i)) && null != q(a, 1) ? q(a, 1) : null;
            this.l = (a = Gk(this.i)) && null != q(a, 2) ? q(a, 2) : null
        }
    };
    var Uk = class extends B {
        constructor() {
            super(void 0)
        }
        getWidth() {
            return t(this, 1, 0)
        }
        getHeight() {
            return t(this, 2, 0)
        }
    };
    var Vk = class extends B {
        constructor() {
            super(void 0)
        }
    };
    var Wk = class extends B {
            constructor() {
                super(void 0)
            }
        },
        Xk = [4, 5];
    const Yk = a => {
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
        Zk = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var $k = a => {
        a = sb(a, 2);
        if (!a) return !1;
        for (let b = 0; b < a.length; b++)
            if (1 == a[b]) return !0;
        return !1
    };
    const bl = (a, b) => {
            a = Zk(Yk(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = Lc(a),
                d = al(a);
            return b.find(e => {
                const f = Array.isArray(q(e, 7)) ? q(w(e, Je, 7), 1) : q(e, 1);
                e = Array.isArray(q(e, 7)) ? q(w(e, Je, 7), 2) : 2;
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
        al = a => {
            const b = {};
            for (;;) {
                b[Lc(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };
    const cl = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var dl = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            yj("ama", b, .01)
        },
        el = a => {
            const b = {};
            C(cl, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    var fl = a => {
            a = w(a, Ge, 3);
            return !a || q(a, 1) <= Date.now() ? !1 : !0
        },
        il = a => (a = gl(hl(a))) ? fl(a) ? a : null : null,
        jl = (a, b) => {
            try {
                b.removeItem("google_ama_config")
            } catch (c) {
                dl(a, {
                    lserr: 1
                })
            }
        };

    function gl(a) {
        try {
            return a ? Gb(Fe, a) : null
        } catch (b) {
            return null
        }
    }

    function hl(a) {
        if (M(Ze)) return null;
        try {
            return a.getItem("google_ama_config")
        } catch (b) {
            return null
        }
    };
    var kl = class extends B {
        constructor(a) {
            super(a)
        }
        m() {
            return w(this, bk, 2)
        }
        v() {
            return u(this, 3)
        }
    };
    var ml = class extends B {
            constructor(a) {
                super(a, -1, ll)
            }
            m() {
                return sb(this, 1)
            }
            v() {
                return w(this, kl, 2)
            }
        },
        ll = [1];
    var ol = class extends B {
            constructor(a) {
                super(a, -1, nl)
            }
            getId() {
                return t(this, 1, 0)
            }
            P() {
                return t(this, 7, 0)
            }
        },
        nl = [2];
    var ql = class extends B {
            constructor(a) {
                super(a, -1, pl)
            }
            P() {
                return t(this, 5, 0)
            }
        },
        pl = [2];
    var sl = class extends B {
            constructor(a) {
                super(a, -1, rl)
            }
        },
        ul = class extends B {
            constructor(a) {
                super(a, -1, tl)
            }
            P() {
                return t(this, 1, 0)
            }
        },
        vl = class extends B {
            constructor(a) {
                super(a)
            }
            m() {
                return t(this, 2, 0)
            }
            v() {
                return t(this, 4, 0)
            }
            B() {
                return u(this, 3)
            }
        },
        rl = [1, 4, 2, 3],
        tl = [2];
    var yl = class extends B {
            constructor(a) {
                super(a, -1, wl)
            }
            v() {
                return Fb(this, kl, 13, xl)
            }
            C() {
                return Array.isArray(q(this, zb(this, xl, 13)))
            }
            m() {
                return Fb(this, ml, 14, xl)
            }
            B() {
                return Array.isArray(q(this, zb(this, xl, 14)))
            }
        },
        wl = [19],
        xl = [13, 14];
    let zl = void 0;

    function Al() {
        Ob(zl, Mb);
        return zl
    };
    var Dl = (a, b, c = "", d = null) => 1 === b && Bl(c, d) ? !0 : Cl(a, c, e => Fa(x(e, Rb, 2), f => q(f, 1) === b)),
        Bl = (a, b) => b ? b.C() ? u(b.v(), 1) : b.B() && "" !== a && 1 === b.m().m().length && b.m().m()[0] === a ? u(b.m().v(), 1) : !1 : !1,
        El = (a, b) => {
            b = t(b, 18, 0); - 1 !== b && (a.tmod = b)
        },
        Gl = a => {
            const b = Dc(F) || F;
            return Fl(b, a) ? !0 : Cl(F, "", c => Fa(sb(c, 3), d => d === a))
        },
        Hl = (a = "") => Cl(m, a, () => !0);

    function Fl(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Ia(a.split(","), b.toString())
    }

    function Cl(a, b, c) {
        a = Dc(a) || a;
        const d = Il(a);
        b && (b = jd(String(b)));
        return Wb(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }

    function Il(a) {
        a = Jl(a);
        const b = {};
        C(a, (c, d) => {
            try {
                const e = new Qb(c);
                b[d] = e
            } catch (e) {}
        });
        return b
    }
    var Jl = a => M(Ve) ? (a = Rj({
        A: a,
        N: Al()
    }), null != a.h ? (Kl("ok"), a = Ll(a.h.value)) : (Kl(a.i.message), a = {}), a) : Ll(a.localStorage);

    function Ll(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Vb(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function Ml(a) {
        M(mf) && yj("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }

    function Kl(a) {
        M(Ue) && yj("abg_adsensesettings_lserr", {
            s: a,
            g: M(Ve),
            c: Al(),
            r: .01
        }, .01)
    };

    function T(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function Nl(a) {
        a = T(a);
        const b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Fa: !0,
            qb: b,
            ma: a.ablation_viewport_offset
        } : null
    }

    function Ol(a, b) {
        a = T(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function Pl(a) {
        T(F).allow_second_reactive_tag = a
    }

    function Ql() {
        const a = T(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function Rl(a) {
        return T(a) ? .head_tag_slot_vars ? .google_ad_host ? ? Sl(a)
    }

    function Sl(a) {
        return a.document.querySelector('meta[name="google-adsense-platform-account"]') ? .getAttribute("content") ? ? null
    };

    function Tl(a, b, c, d) {
        Ul(new Vl(a, b, c, d))
    }

    function Ul(a) {
        Cd(Ad(Rj({
            A: a.A,
            N: u(a.i, 6)
        }), b => {
            Wl(a, b, !0)
        }), () => {
            Yl(a)
        })
    }

    function Wl(a, b, c) {
        Cd(Ad(Zl(b), d => {
            $l("ok");
            a.h(d)
        }), () => {
            jl(a.A, b);
            c ? Yl(a) : a.h(null)
        })
    }

    function Yl(a) {
        Cd(Ad(am(a), a.h), () => {
            bm(a)
        })
    }

    function Zl(a) {
        return (a = il(a)) ? vd(a) : xd(Error("invlocst"))
    }

    function am(a) {
        if (Rl(a.A)) return xd(Error("invtag"));
        a: {
            var b = a.A;
            var c = a.j;a = a.i;
            if (a ? .C())(b = a ? .v() ? .m() ? .m()) && 0 < x(b, ye, 1).length ? Ml(!1) : b = null;
            else {
                if (a ? .B()) {
                    const d = a ? .m() ? .m(),
                        e = a ? .m() ? .v() ? .m() ? .m();
                    if (d && 1 === d.length && d[0] === c && e && 0 < x(e, ye, 1).length && A(a, 17) === b.location.host) {
                        Ml(!0);
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new Fe, a = x(b, ye, 1), c = Db(c, 1, a), b = x(b, Ie, 2), b = Db(c, 7, b), b = vd(b)) : b = xd(Error("invtag"));
        return b
    }

    function bm(a) {
        Vj({
            A: a.A,
            N: u(a.i, 6),
            qa: 50,
            Ha: b => {
                cm(a, b)
            }
        })
    }

    function cm(a, b) {
        Cd(Ad(b, c => {
            Wl(a, c, !1)
        }), c => {
            $l(c.message);
            a.h(null)
        })
    }

    function $l(a) {
        yj("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    }
    class Vl {
        constructor(a, b, c, d) {
            this.A = a;
            this.i = b;
            this.j = c;
            this.h = d
        }
    };
    var fm = (a, b, c, d) => {
        try {
            const e = bl(a, x(c, Ie, 7));
            if (e && $k(e)) {
                q(e, 4) && (d = Ld(d, new Md(null, {
                    google_package: q(e, 4)
                })));
                const f = new nj(a, b, c, e, d);
                Ii(1E3, () => {
                    var g = new pd;
                    (new fk(a, f, g)).start();
                    return g.i
                }, a).then(ma(dm, a), ma(em, a))
            }
        } catch (e) {
            dl(a, {
                atf: -1
            })
        }
    };
    const dm = a => {
            dl(a, {
                atf: 1
            })
        },
        em = (a, b) => {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            dl(a, {
                atf: 0
            })
        };

    function gm(a) {
        M(Mf) && (a.easpf = !0, a.easpi = M(Pf), M(Nf) && (a.easpa = !0), a.asntp = N(Cf), a.asntpv = N(Gf), a.asntpl = N(Ef), a.asntpm = N(Ff), a.asntpc = N(Df), a.asna = N(yf), a.asnd = N(zf), a.asnp = N(Af), a.asns = N(Bf), a.asmat = N(xf), a.asptt = N(Hf))
    };

    function hm(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = im(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function im(a) {
        let b = "";
        C(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    };
    La || !n("Safari") || wa();
    class jm {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };

    function km() {
        const {
            promise: a,
            resolve: b
        } = new jm;
        return {
            promise: a,
            resolve: b
        }
    };

    function lm(a = () => {}) {
        m.google_llp || (m.google_llp = {});
        const b = m.google_llp;
        let c = b[7];
        if (c) return c;
        c = km();
        b[7] = c;
        a();
        return c
    }

    function mm(a) {
        return lm(() => {
            Ec(m.document, a)
        }).promise
    };
    var nm = a => {
        if (m.google_apltlad || m !== m.top || !a.google_ad_client) return null;
        m.google_apltlad = !0;
        const b = {
                enable_page_level_ads: {
                    pltais: !0
                },
                google_ad_client: a.google_ad_client
            },
            c = b.enable_page_level_ads;
        C(a, (d, e) => {
            Bi[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        gm(c);
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    };

    function om(a) {
        return ea(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };
    var rm = (a, b) => {
        T(F).ama_ran_on_page || Ii(1001, () => pm(new qm(a, b)), m)
    };

    function pm(a) {
        M(uf) ? Tl(a.h, a.j, a.i.google_ad_client || "", b => {
            var c = a.h,
                d = a.i;
            T(F).ama_ran_on_page || b && sm(c, d, b)
        }) : Vj({
            A: a.h,
            N: u(a.j, 6),
            qa: 50,
            Ha: b => tm(a, b)
        })
    }

    function tm(a, b) {
        Cd(Ad(b, c => {
            um("ok");
            var d = a.h,
                e = a.i;
            if (!T(F).ama_ran_on_page) {
                var f = il(c);
                f ? sm(d, e, f) : jl(d, c)
            }
        }), c => um(c.message))
    }

    function um(a) {
        yj("abg::amalserr", {
            status: a,
            guarding: !0,
            timeout: 50,
            rate: .01
        }, .01)
    }
    class qm {
        constructor(a, b) {
            this.h = m;
            this.i = a;
            this.j = b
        }
    }

    function sm(a, b, c) {
        if (Array.isArray(q(c, 24))) {
            var d = Oi(a);
            d.availableAbg = !0;
            d.ablationFromStorage = !!w(c, Be, 24) ? .m() ? .m()
        }
        if (om(b) && (d = bl(a, x(c, Ie, 7)), !d || !tb(d, 8))) return;
        T(F).ama_ran_on_page = !0;
        w(c, Me, 15) ? .m() && (T(a).enable_overlap_observer = !0);
        var e = w(c, Ke, 13);
        e && 1 === q(e, 1) ? (d = 0, (e = w(e, Le, 6)) && q(e, 3) && (d = q(e, 3) || 0), Ol(a, d)) : w(c, Be, 24) ? .m() ? .m() && (Oi(a).ablatingThisPageview = !0, Ol(a, 1));
        bd(3, [c.toJSON()]);
        const f = b.google_ad_client || "";
        b = el(ea(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        const g = Ld(Pd, new Md(null, b));
        wj(782, () => {
            fm(a, f, c, g)
        })
    };
    /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    function vm() {
        var a = F.document;
        for (const b of [ed `https://fonts.googleapis.com`, ed `https://fonts.gstatic.com`]) {
            const c = a.createElement("LINK");
            c.crossOrigin = "";
            mc(c, b, "preconnect");
            a.head.appendChild(c)
        }
    };

    function wm(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function xm(a) {
        var b = F.document;
        if (b.currentScript) return wm(b.currentScript, a);
        for (const c of b.scripts)
            if (0 === wm(c, a)) return 0;
        return 1
    };

    function ym(a, b = 0) {
        b = 0 !== b ? `${"google_experiment_mod"}${b}` : "google_experiment_mod";
        a: {
            var c = -1;
            try {
                a && (c = parseInt(a.getItem(b), 10))
            } catch {
                c = null;
                break a
            }
            c = 0 <= c && 1E3 > c ? c : null
        }
        if (null === c) {
            c = Jc() ? null : Math.floor(1E3 * Kc());
            var d;
            if (d = null != c && a) a: {
                var e = String(c);
                try {
                    if (a) {
                        a.setItem(b, e);
                        d = e;
                        break a
                    }
                } catch {}
                d = null
            }
            a = d ? c : null
        } else a = c;
        return a
    };

    function zm(a, b) {
        return {
            [og]: {
                [55]: () => 0 === a,
                [23]: c => Dl(F, Number(c)),
                [24]: c => Gl(Number(c)),
                [61]: () => u(b, 6),
                [63]: () => u(b, 6) || ".google.ch" === A(b, 8)
            },
            [pg]: {
                [7]: c => {
                    try {
                        var d = window.localStorage
                    } catch (e) {
                        d = null
                    }
                    return ym(d, Number(c)) ? ? void 0
                }
            },
            [qg]: {
                [6]: () => A(b, 15)
            }
        }
    };
    var Am = (a = m) => a.ggeac || (a.ggeac = {});

    function Bm(a, b = window.document) {
        Wc(a, b)
    }

    function Cm(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function Dm(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    };
    const Em = (a, b) => {
        try {
            const d = a.split(".");
            a = m;
            let e = 0,
                f;
            for (; null != a && e < d.length; e++) f = a, a = a[d[e]], "function" === typeof a && (a = f[d[e]]());
            var c = a;
            if (typeof c === b) return c
        } catch {}
    };
    class Fm {
        constructor() {
            this[og] = {
                [8]: a => {
                    try {
                        return null != ba(a)
                    } catch {}
                },
                [9]: a => {
                    try {
                        var b = ba(a)
                    } catch {
                        return
                    }
                    if (a = "function" === typeof b) b = b && b.toString && b.toString(), a = "string" === typeof b && -1 != b.indexOf("[native code]");
                    return a
                },
                [10]: () => window == window.top,
                [6]: a => Ia(L(Vh).i(), parseInt(a, 10)),
                [27]: a => {
                    a = Em(a, "boolean");
                    return void 0 !== a ? a : void 0
                },
                [60]: a => {
                    try {
                        return !!m.document.querySelector(a)
                    } catch {}
                },
                [69]: a => Cm(a, m.document),
                [70]: a => Dm(a, m.document)
            };
            this[pg] = {
                [3]: () => Rc(),
                [6]: a => {
                    a = Em(a, "number");
                    return void 0 !== a ? a : void 0
                },
                [11]: (a = "") => {
                    a = Vc(a, m);
                    return null == a ? void 0 : a % 1E3
                }
            };
            this[qg] = {
                [2]: () => window.location.href,
                [3]: () => {
                    try {
                        return window.top.location.hash
                    } catch {
                        return ""
                    }
                },
                [4]: a => {
                    a = Em(a, "string");
                    return void 0 !== a ? a : void 0
                },
                [10]: () => {
                    try {
                        const a = m.document;
                        return a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""
                    } catch {
                        return ""
                    }
                },
                [11]: () => {
                    try {
                        return ba("google_tag_data") ? .uach ? .fullVersionList ? .find(a => "Google Chrome" === a.brand) ? .version ? ? ""
                    } catch {
                        return ""
                    }
                }
            }
        }
    };
    const Gm = [12, 13, 20];

    function Hm(a, b, c, d) {
        const e = L(ih).h;
        if (!vg(w(b, kg, 3), e)) return null;
        var f = x(b, ol, 2),
            g = t(b, 6, 0);
        if (g) {
            xb(d, 1, Wg, g);
            f = e[pg];
            switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
            }
            c = void 0;
            if (h) try {
                c = h(g), wb(d, 3, c)
            } catch (k) {}
            return (b = Im(b, c)) ? Jm(a, [b], 1) : null
        }
        if (g = t(b, 10, 0)) {
            xb(d, 2, Wg, g);
            h = null;
            switch (c) {
                case 1:
                    h = e[pg][9];
                    break;
                case 2:
                    h = e[pg][10];
                    break;
                default:
                    return null
            }
            c = h ? h(String(g)) : void 0;
            if (void 0 === c && 1 === t(b, 11, 0)) return null;
            void 0 !== c && wb(d, 3, c);
            return (b = Im(b, c)) ? Jm(a, [b], 1) : null
        }
        d = e ? Da(f, k => vg(w(k,
            kg, 3), e)) : f;
        if (!d.length) return null;
        c = d.length * t(b, 1, 0);
        return (b = t(b, 4, 0)) ? Km(a, b, c, d) : Jm(a, d, c / 1E3)
    }

    function Lm(a, b, c) {
        a.i[c] || (a.i[c] = []);
        a = a.i[c];
        Ia(a, b) || a.push(b)
    }

    function Mm(a, b, c) {
        const d = [],
            e = Nm(a.m, b);
        var f;
        if (f = 9 !== b) a.v[b] ? f = !0 : (a.v[b] = !0, f = !1);
        if (f) return fh(a.h, b, c, d, [], 4), d;
        if (!e.length) return fh(a.h, b, c, d, [], 3), d;
        const g = Ia(Gm, b),
            h = [];
        Ca(e, k => {
            var l = new Vg;
            if (k = Hm(a, k, c, l)) 0 !== yb(l, Wg) && h.push(l), l = k.getId(), d.push(l), Lm(a, l, g ? 4 : c), (k = x(k, Bg, 2)) && (g ? wh(k, yh(), a.h, l) : wh(k, [c], a.h, l))
        });
        fh(a.h, b, c, d, h, 1);
        return d
    }

    function Om(a, b) {
        a.m.push(...Da(Ea(b, c => new ul(c)), c => !Ia(Gm, c.P())))
    }

    function Jm(a, b, c) {
        const d = a.j,
            e = Ga(b, f => !!d[f.getId()]);
        return e ? e : a.B ? null : Hc(b, c)
    }

    function Km(a, b, c, d) {
        const e = null != a.l[b] ? a.l[b] : 1E3;
        if (0 >= e) return null;
        d = Jm(a, d, c / e);
        a.l[b] = d ? 0 : e - c;
        return d
    }

    function Pm(a, b) {
        P(Ah, c => {
            a.j[c] = !0
        }, b);
        P(Dh, (c, d) => Mm(a, c, d), b);
        P(Eh, c => (a.i[c] || []).concat(a.i[4]), b);
        P(Nh, c => void Om(a, c), b);
        P(Bh, (c, d) => void Lm(a, c, d), b)
    }
    class Qm {
        init(a, b, c, {
            Ya: d = !1,
            Qb: e = {},
            Ub: f = []
        } = {}) {
            this.m = a;
            this.v = {};
            this.B = d;
            this.l = e;
            this.i = {
                [b]: [],
                [4]: []
            };
            this.j = {};
            (a = Zh()) && Ca(a.split(",") || [], g => {
                (g = parseInt(g, 10)) && (this.j[g] = !0)
            });
            Ca(f, g => {
                this.j[g] = !0
            });
            this.h = c;
            return this
        }
    }
    const Nm = (a, b) => (a = Ga(a, c => c.P() == b)) && x(a, ql, 2) || [],
        Im = (a, b) => {
            var c = x(a, ol, 2),
                d = c.length,
                e = t(a, 8, 0);
            a = d * t(a, 1, 0) - 1;
            b = void 0 !== b ? b : Math.floor(1E3 * Kc());
            d = (b - e) % d;
            if (b < e || b - e - d >= a) return null;
            c = c[d];
            e = L(ih).h;
            return !c || e && !vg(w(c, kg, 3), e) ? null : c
        };
    class Rm {
        constructor() {
            this.h = () => {}
        }
    }
    var Sm = a => {
        L(Rm).h(a)
    };
    var Um = (a, b, c, d = Am(), e = 0, f = new hh(w(a, vl, 5) ? .m() ? ? 0, w(a, vl, 5) ? .v() ? ? 0, w(a, vl, 5) ? .B() ? ? !1)) => {
            d.hasOwnProperty("init-done") ? (Qh(Nh, d)(Ea(x(a, ul, 2), g => g.toJSON())), Qh(Oh, d)(Ea(x(a, Bg, 1), g => g.toJSON()), e), b && Qh(Ph, d)(b), Tm(e, d)) : (Pm(L(Qm).init(x(a, ul, 2), e, f, c), d), Rh(d), Sh(d), Th(d), Tm(e, d), wh(x(a, Bg, 1), [e], f, void 0, !0), jh = jh || !(!c || !c.eb), Sm(L(Fm)), b && Sm(b))
        },
        Tm = (a, b = Am()) => {
            Uh(L(Vh), b, a);
            Vm(b, a);
            L(Rm).h = Qh(Ph, b);
            L(bg).m()
        },
        Vm = (a, b) => {
            const c = L(bg);
            c.j = (d, e) => Qh(Gh, a, () => !1)(d, e, b);
            c.l = (d, e) => Qh(Hh, a,
                () => 0)(d, e, b);
            c.h = (d, e) => Qh(Ih, a, () => "")(d, e, b);
            c.i = (d, e) => Qh(Jh, a, () => [])(d, e, b);
            c.m = () => {
                Qh(Ch, a)(b)
            }
        };
    var Wm = (a, b, c) => {
        var d = T(a);
        if (d.plle) Tm(1, Am(a));
        else {
            d.plle = !0;
            d = w(b, sl, 12);
            var e = u(b, 9);
            Um(d, zm(c, b), {
                Ya: e && !!a.google_disable_experiments,
                eb: e
            }, Am(a), 1);
            if (c = A(b, 15)) c = Number(c), L(Vh).l(c);
            for (const f of sb(b, 19)) b = f, L(Vh).h(b);
            L(Vh).j(12);
            L(Vh).j(10);
            a = Dc(a) || a;
            hm(a.location, "google_mc_lab") && L(Vh).h(44738307);
            hm(a.location, "google_auto_storify_swipeable") && L(Vh).h(44769175);
            hm(a.location, "google_auto_storify_scrollable") && L(Vh).h(44769174)
        }
    };
    var Xm = {
            "120x90": !0,
            "160x90": !0,
            "180x90": !0,
            "200x90": !0,
            "468x15": !0,
            "728x15": !0
        },
        Ym = (a, b) => {
            if (15 == b) {
                if (728 <= a) return 728;
                if (468 <= a) return 468
            } else if (90 == b) {
                if (200 <= a) return 200;
                if (180 <= a) return 180;
                if (160 <= a) return 160;
                if (120 <= a) return 120
            }
            return null
        };

    function Zm(a) {
        return b => !!(b.fa & a)
    }
    class U extends ti {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.fa = c;
            this.fb = d
        }
        la() {
            return this.fa
        }
        i(a, b, c) {
            b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
        }
    };
    const $m = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        an = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        },
        bn = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function cn(a) {
        var b = 0;
        a.O && b++;
        a.J && b++;
        a.K && b++;
        if (3 > b) return {
            M: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.O.split(",");
        const c = a.K.split(",");
        a = a.J.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            M: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            M: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || 0 === f) return {
                M: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || 0 === f) return {
                M: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            K: d,
            J: e,
            La: b
        }
    }

    function dn(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    const en = Ka("script");

    function fn(a, b, c) {
        null != a.fa && (c.google_responsive_formats = a.fa);
        null != a.W && (c.google_safe_for_responsive_override = a.W);
        null != a.i && (!0 === a.i ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.i));
        null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
        var d = a.m || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.l || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().h(b);
        const e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.h(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.v;
            null != a.h && (c.armr = a.h);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.i && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.G && (c.gfwroml = a.G);
        null != a.L && (c.gfwromr = a.L);
        null != a.l && (c.gfwroh = a.l);
        null != a.m && (c.gfwrow = a.m);
        null != a.V && (c.gfwroz = a.V);
        null != a.B && (c.gml = a.B);
        null != a.C && (c.gmr = a.C);
        null != a.X && (c.gzi = a.X);
        b = Dc(window) || window;
        hm(b.location, "google_responsive_dummy_ad") &&
            (Ia([1, 2, 3, 4, 5, 6, 7, 8], a.v) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = `<${en}>window.top.postMessage('${a}', '*'); 
          </${en}> 
          <div id="dummyAd" style="width:${d}px;height:${e}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${e}</p> 
            <p>Rendered size:${d}x${e}</p> 
          </div>`)
    }
    class gn {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, k = null, l = null, p = null, v = null) {
            this.v = a;
            this.aa = b;
            this.fa = c;
            this.h = d;
            this.W = e;
            this.i = f;
            this.j = g;
            this.G = h;
            this.L = k;
            this.l = l;
            this.m = p;
            this.V = v;
            this.X = this.C = this.B = null
        }
        size() {
            return this.aa
        }
    };
    const hn = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var jn = class extends ti {
            h(a) {
                return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
            }
        },
        mn = (a, b) => {
            kn(a, b);
            if ("pedestal" == b.google_content_recommendation_ui_type) return new gn(9, new jn(a, Math.floor(a * b.google_phwr)));
            var c = xc();
            468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * $m.mobile_banner_image_sidebyside + an.mobile_banner_image_sidebyside) + 96), a = {
                Z: a,
                Y: c,
                J: 1,
                K: 12,
                O: "mobile_banner_image_sidebyside"
            }) : (a = dn(a), a = {
                Z: a.width,
                Y: a.height,
                J: 1,
                K: 13,
                O: "image_sidebyside"
            }) : (a = dn(a), a = {
                Z: a.width,
                Y: a.height,
                J: 4,
                K: 2,
                O: "image_stacked"
            });
            ln(b, a);
            return new gn(9, new jn(a.Z, a.Y))
        },
        nn = (a, b) => {
            kn(a, b);
            var c = cn({
                K: b.google_content_recommendation_rows_num,
                J: b.google_content_recommendation_columns_num,
                O: b.google_content_recommendation_ui_type
            });
            if (c.M) a = {
                Z: 0,
                Y: 0,
                J: 0,
                K: 0,
                O: "image_stacked",
                M: c.M
            };
            else {
                var d = 2 === c.La.length && 468 <= a ? 1 : 0;
                var e = c.La[d];
                e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
                var f = bn[e];
                let g = c.J[d];
                for (; a / g < f && 1 < g;) g--;
                f = g;
                d = c.K[d];
                c = Math.floor(((a - 8 * f - 8) / f * $m[e] + an[e]) * d + 8 * d +
                    8);
                a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    ob: "Calculated slot width is too large: " + a
                } : 1500 < c ? {
                    width: 0,
                    height: 0,
                    ob: "Calculated slot height is too large: " + c
                } : {
                    width: a,
                    height: c
                };
                a = {
                    Z: a.width,
                    Y: a.height,
                    J: f,
                    K: d,
                    O: e
                }
            }
            if (a.M) throw new Q(a.M);
            ln(b, a);
            return new gn(9, new jn(a.Z, a.Y))
        };

    function kn(a, b) {
        if (0 >= a) throw new Q("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function ln(a, b) {
        a.google_content_recommendation_ui_type = b.O;
        a.google_content_recommendation_columns_num = b.J;
        a.google_content_recommendation_rows_num = b.K
    };
    class on extends ti {
        h() {
            return this.minWidth()
        }
        i(a, b, c) {
            si(a, c);
            b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
        }
    };
    const pn = {
        "image-top": a => 600 >= a ? 284 + .414 * (a - 250) : 429,
        "image-middle": a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500),
        "image-side": a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500),
        "text-only": a => 500 >= a ? 187 - .228 * (a - 250) : 130,
        "in-article": a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
    };
    var qn = class extends ti {
            h() {
                return Math.min(1200, this.minWidth())
            }
        },
        rn = (a, b, c, d, e) => {
            var f = e.google_ad_layout || "image-top";
            if ("in-article" == f) {
                var g = a;
                if ("false" == e.google_full_width_responsive) a = g;
                else if (a = ni(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
                else if (a = I(b).clientWidth)
                    if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                        b: {
                            g = c;
                            for (let h = 0; 100 > h && g.parentElement; ++h) {
                                const k = g.parentElement.childNodes;
                                for (let l = 0; l < k.length; ++l) {
                                    const p = k[l];
                                    if (p != g && qi(b, p)) break b
                                }
                                g = g.parentElement;
                                g.style.width = "100%";
                                g.style.height = "auto"
                            }
                        }
                        si(b, c)
                    }
                else a = g;
                else a = g
            }
            if (250 > a) throw new Q("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
            a = Math.min(1200, Math.floor(a));
            if (d && "in-article" != f) {
                f = Math.ceil(d);
                if (50 > f) throw new Q("Fluid responsive ads must be at least 50px tall: height=" + f);
                return new gn(11, new ti(a, f))
            }
            if ("in-article" != f && (d = e.google_ad_layout_key)) {
                f = "" + d;
                c = Math.pow(10, 3);
                if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                    for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g],
                        36) / c);
                else b = null;
                if (!b) throw new Q("Invalid data-ad-layout-key value: " + f);
                f = (a + -725) / 1E3;
                c = 0;
                d = 1;
                e = b.length;
                for (g = 0; g < e; g++) c += b[g] * d, d *= f;
                f = Math.ceil(1E3 * c - -725 + 10);
                if (isNaN(f)) throw new Q("Invalid height: height=" + f);
                if (50 > f) throw new Q("Fluid responsive ads must be at least 50px tall: height=" + f);
                if (1200 < f) throw new Q("Fluid responsive ads must be at most 1200px tall: height=" + f);
                return new gn(11, new ti(a, f))
            }
            d = pn[f];
            if (!d) throw new Q("Invalid data-ad-layout value: " + f);
            c = wi(c, b);
            b = I(b).clientWidth;
            b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
            return new gn(11, "in-article" == f ? new qn(a, b) : new ti(a, b))
        };
    var sn = a => b => {
            for (let c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        },
        un = (a, b) => {
            var c = tn.slice(0);
            const d = c.length;
            let e = null;
            for (let f = 0; f < d; ++f) {
                const g = c[f];
                if (a(g)) {
                    if (!b || b(g)) return g;
                    null === e && (e = g)
                }
            }
            return e
        };
    var V = [new U(970, 90, 2), new U(728, 90, 2), new U(468, 60, 2), new U(336, 280, 1), new U(320, 100, 2), new U(320, 50, 2), new U(300, 600, 4), new U(300, 250, 1), new U(250, 250, 1), new U(234, 60, 2), new U(200, 200, 1), new U(180, 150, 1), new U(160, 600, 4), new U(125, 125, 1), new U(120, 600, 4), new U(120, 240, 4), new U(120, 120, 1, !0)],
        tn = [V[6], V[12], V[3], V[0], V[7], V[14], V[1], V[8], V[10], V[4], V[15], V[2], V[11], V[5], V[13], V[9], V[16]];
    var wn = (a, b, c, d, e) => {
            "false" == e.google_full_width_responsive ? c = {
                D: a,
                F: 1
            } : "autorelaxed" == b && e.google_full_width_responsive || vn(b) || e.google_ad_resize ? (b = oi(a, c, d, e), c = !0 !== b ? {
                D: a,
                F: b
            } : {
                D: I(c).clientWidth || a,
                F: !0
            }) : c = {
                D: a,
                F: 2
            };
            const {
                D: f,
                F: g
            } = c;
            return !0 !== g ? {
                D: a,
                F: g
            } : d.parentElement ? {
                D: f,
                F: g
            } : {
                D: a,
                F: g
            }
        },
        zn = (a, b, c, d, e) => {
            const {
                D: f,
                F: g
            } = wj(247, () => wn(a, b, c, d, e));
            var h = !0 === g;
            const k = E(d.style.width),
                l = E(d.style.height),
                {
                    U: p,
                    R: v,
                    la: D,
                    Ka: z
                } = xn(f, b, c, d, e, h);
            h = yn(b, D);
            var y;
            const H = (y = ui(d, c, "marginLeft",
                    E)) ? y + "px" : "",
                za = (y = ui(d, c, "marginRight", E)) ? y + "px" : "";
            y = ui(d, c, "zIndex") || "";
            return new gn(h, p, D, null, z, g, v, H, za, l, k, y)
        },
        vn = a => "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a),
        xn = (a, b, c, d, e, f) => {
            b = "auto" == b ? .25 >= a / Math.min(1200, I(c).clientWidth) ? 4 : 3 : mi(b);
            let g;
            var h = !1;
            let k = !1;
            if (488 > I(c).clientWidth) {
                g = hi(d, c);
                var l = wi(d, c);
                h = !l && g;
                k = l && g
            }
            l = [vi(a), Zm(b)];
            l.push(yi(488 > I(c).clientWidth, c, d, k));
            null != e.google_max_responsive_height && l.push(zi(e.google_max_responsive_height));
            const p = [y => !y.fb];
            if (h || k) h = Ai(c, d), p.push(zi(h));
            let v = un(sn(l), sn(p));
            if (!v) throw new Q("No slot size for availableWidth=" + a);
            const {
                U: D,
                R: z
            } = wj(248, () => {
                var y;
                a: if (f) {
                    if (e.gfwrnh && (y = E(e.gfwrnh))) {
                        y = {
                            U: new on(a, y),
                            R: !0
                        };
                        break a
                    }
                    y = a / 1.2;
                    var H = Math;
                    var za = H.min;
                    if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var W = Infinity;
                    else {
                        W = d;
                        let va = Infinity;
                        do {
                            var Aa = ui(W, c, "height", E);
                            Aa && (va = Math.min(va, Aa));
                            (Aa = ui(W, c, "maxHeight", E)) && (va = Math.min(va, Aa))
                        } while ((W = W.parentElement) && "HTML" !=
                            W.tagName);
                        W = va
                    }
                    H = za.call(H, y, W);
                    if (H < .5 * y || 100 > H) H = y;
                    M(tf) && !wi(d, c) && (H = Math.max(H, .5 * I(c).clientHeight));
                    y = {
                        U: new on(a, Math.floor(H)),
                        R: H < y ? 102 : !0
                    }
                } else y = {
                    U: v,
                    R: 100
                };
                return y
            });
            return "in-article" === e.google_ad_layout && An(c) ? {
                U: Bn(a, c, d, D, e),
                R: !1,
                la: b,
                Ka: g
            } : {
                U: D,
                R: z,
                la: b,
                Ka: g
            }
        };
    const yn = (a, b) => {
            if ("auto" == a) return 1;
            switch (b) {
                case 2:
                    return 2;
                case 1:
                    return 3;
                case 4:
                    return 4;
                case 3:
                    return 5;
                case 6:
                    return 6;
                case 5:
                    return 7;
                case 7:
                    return 8
            }
            throw Error("bad mask");
        },
        Bn = (a, b, c, d, e) => {
            const f = e.google_ad_height || ui(c, b, "height", E);
            b = rn(a, b, c, f, e).size();
            return b.minWidth() * b.height() > a * d.height() ? new U(b.minWidth(), b.height(), 1) : d
        },
        An = a => M(rf) || a.location && "#hffwroe2etoq" == a.location.hash;
    var Cn = (a, b, c, d, e) => {
        var f;
        (f = I(b).clientWidth) ? 488 > I(b).clientWidth ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, si(b, c), f = {
            D: f,
            F: !0
        }) : f = {
            D: a,
            F: 5
        } : f = {
            D: a,
            F: 4
        }: f = {
            D: a,
            F: 10
        };
        const {
            D: g,
            F: h
        } = f;
        if (!0 !== h || a == g) return new gn(12, new ti(a, d), null, null, !0, h, 100);
        const {
            U: k,
            R: l,
            la: p
        } = xn(g, "auto", b, c, e, !0);
        return new gn(1, k, p, 2, !0, h, l)
    };
    var En = (a, b) => {
            var c = b.google_ad_format;
            if ("autorelaxed" == c) {
                a: {
                    if ("pedestal" != b.google_content_recommendation_ui_type)
                        for (const d of hn)
                            if (null != b[d]) {
                                a = !0;
                                break a
                            }
                    a = !1
                }
                return a ? 9 : 5
            }
            if (vn(c)) return 1;
            if ("link" === c) return 4;
            if ("fluid" == c) {
                if (c = "in-article" === b.google_ad_layout) c = M(rf) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
                return c ? (Dn(b), 1) : 8
            }
            if (27 === b.google_reactive_ad_format) return Dn(b), 1
        },
        Gn = (a, b, c, d, e = !1) => {
            e = b.offsetWidth || (c.google_ad_resize || e) &&
                ui(b, d, "width", E) || c.google_ad_width || 0;
            4 === a && (c.google_ad_format = "auto", a = 1);
            var f = (f = Fn(a, e, b, c, d)) ? f : zn(e, c.google_ad_format, d, b, c);
            f.size().i(d, c, b);
            fn(f, e, c);
            1 != a && (a = f.size().height(), b.style.height = a + "px")
        };
    const Fn = (a, b, c, d, e) => {
            const f = d.google_ad_height || ui(c, e, "height", E);
            switch (a) {
                case 5:
                    const {
                        D: g,
                        F: h
                    } = wj(247, () => wn(b, d.google_ad_format, e, c, d));
                    !0 === h && b != g && si(e, c);
                    !0 === h ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                    return mn(g, d);
                case 9:
                    return nn(b, d);
                case 8:
                    return rn(b, e, c, f, d);
                case 10:
                    return Cn(b, e, c, f, d)
            }
        },
        Dn = a => {
            a.google_ad_format = "auto";
            a.armr = 3
        };

    function Hn(a, b) {
        var c = Dc(b);
        if (c) {
            c = I(c).clientWidth;
            const d = Gc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function In(a) {
        R.Na(b => {
            b.shv = String(a);
            b.mjsv = "m202208170101";
            const c = L(Vh).i(),
                d = T(m);
            d.eids || (d.eids = []);
            b.eid = c.concat(d.eids).join(",")
        })
    }

    function Jn(a) {
        In(A(a, 2));
        a = u(a, 6);
        Ob(zl, ig);
        zl = a
    };

    function Kn({
        Xa: a,
        kb: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };
    var Ln = {
            google_ad_modifications: !0,
            google_analytics_domain_name: !0,
            google_analytics_uacct: !0,
            google_pause_ad_requests: !0,
            google_user_agent_client_hint: !0
        },
        Mn = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        Nn = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) &&
                    RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        On = a => {
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
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };
    const Pn = new WeakMap;

    function Qn() {
        var a = Rn,
            b = Sn;
        const c = fa(a),
            d = ([, ...f]) => b(c, f),
            e = ([f, ...g]) => a.apply(f, g);
        return function(...f) {
            var g = this || m,
                h = Pn.get(g);
            h || (h = {}, Pn.set(g, h));
            g = h;
            f = [this, ...f];
            h = d ? d(f) : f;
            return Object.prototype.hasOwnProperty.call(g, h) ? g[h] : g[h] = e(f)
        }
    }

    function Sn(a, b) {
        a = [a];
        for (let c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
        return a.join("\v")
    };

    function Tn(a) {
        return M(qf) ? Qn()(a) : Rn(a)
    }

    function Rn(a) {
        if (a.google_ad_client) var b = String(a.google_ad_client);
        else {
            if (null == (b = T(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client"))) {
                b: {
                    b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) &&
                    /applewebkit/i.test(a) && !/version|safari/i.test(a) && !id() ? Mn : Nn;
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
                    for (c = {}; d = a.exec(b);) c[d[1]] = On(d[2]);
                    b = c;
                    b = b.google_ad_client ? b.google_ad_client : ""
                } else b = ""
            }
            b = b ? ? ""
        }
        return b
    };

    function Un(a) {
        var b = R;
        try {
            return Ob(a, hg), new yl(JSON.parse(a))
        } catch (c) {
            b.H(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new yl
    };

    function Vn(a, b) {
        return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function Wn(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function Xn() {
        const a = new Set,
            b = gj();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch (c) {}
        return a
    }

    function Yn(a) {
        a = a.id;
        return null != a && (Xn().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function Zn(a, b, c) {
        if (!a.sources) return !1;
        switch ($n(a)) {
            case 2:
                const d = ao(a);
                if (d) return c.some(f => bo(d, f));
            case 1:
                const e = co(a);
                if (e) return b.some(f => bo(e, f))
        }
        return !1
    }

    function $n(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function co(a) {
        return eo(a, b => b.currentRect)
    }

    function ao(a) {
        return eo(a, b => b.previousRect)
    }

    function eo(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function bo(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function fo() {
        const a = [...document.getElementsByTagName("iframe")].filter(Yn),
            b = [...Xn()].map(c => document.getElementById(c)).filter(c => null !== c);
        go = window.scrollX;
        ho = window.scrollY;
        return io = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function jo() {
        var a = new ko;
        if (M(Tf)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                for (const c of b) lo(a).observe({
                    type: c,
                    buffered: !0
                });
                mo(a)
            }
        }
    }

    function lo(a) {
        a.l || (a.l = new PerformanceObserver(Hi(640, b => {
            const c = go !== window.scrollX || ho !== window.scrollY ? [] : io,
                d = fo();
            for (const h of b.getEntries()) switch (h.entryType) {
                case "layout-shift":
                    b = a;
                    var e = h,
                        f = c,
                        g = d;
                    if (!e.hadRecentInput) {
                        b.G += Number(e.value);
                        Number(e.value) > b.V && (b.V = Number(e.value));
                        b.W += 1;
                        if (f = Zn(e, f, g)) b.m += e.value, b.za++;
                        if (5E3 < e.startTime - b.ya || 1E3 < e.startTime - b.Ba) b.ya = e.startTime, b.h = 0, b.i = 0;
                        b.Ba = e.startTime;
                        b.h += e.value;
                        f && (b.i += e.value);
                        b.h > b.aa && (b.aa = b.h, b.Ea = b.i, b.Da = e.startTime +
                            e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    b = h;
                    a.xa = Math.floor(b.renderTime || b.loadTime);
                    a.wa = b.size;
                    break;
                case "first-input":
                    b = h;
                    a.ua = Number((b.processingStart - b.startTime).toFixed(3));
                    a.va = !0;
                    break;
                case "longtask":
                    b = Math.max(0, h.duration - 50), a.C += b, a.L = Math.max(a.L, b), a.X += 1
            }
        })));
        return a.l
    }

    function mo(a) {
        const b = Hi(641, () => {
                var d = document;
                2 == (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && no(a)
            }),
            c = Hi(641, () => void no(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        a.ta = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            lo(a).disconnect()
        }
    }

    function no(a) {
        if (!a.Aa) {
            a.Aa = !0;
            lo(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Wn("cls", a.G), b += Wn("mls", a.V), b += Vn("nls", a.W), window.LayoutShiftAttribution && (b += Wn("cas", a.m), b += Vn("nas", a.za)), b += Wn("wls", a.aa), b += Wn("tls", a.Da), window.LayoutShiftAttribution && (b += Wn("was", a.Ea)));
            window.LargestContentfulPaint && (b += Vn("lcp", a.xa), b += Vn("lcps", a.wa));
            window.PerformanceEventTiming && a.va && (b += Vn("fid", a.ua));
            window.PerformanceLongTaskTiming &&
                (b += Vn("cbt", a.C), b += Vn("mbt", a.L), b += Vn("nlt", a.X));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) Yn(c) && d++;
            b += Vn("nif", d);
            b += Vn("ifi", hd(window));
            c = L(Vh).i();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${m===m.top?1:0}`;
            b += a.Ca ? `&${"qqid"}=${encodeURIComponent(a.Ca)}` : Vn("pvsid", Xc(m));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.v || (a.v = !0, a.j())
        }
    }
    class ko extends qd {
        constructor() {
            super();
            this.i = this.h = this.W = this.V = this.G = 0;
            this.Ba = this.ya = Number.NEGATIVE_INFINITY;
            this.ua = this.wa = this.xa = this.za = this.Ea = this.m = this.Da = this.aa = 0;
            this.va = !1;
            this.X = this.L = this.C = 0;
            const a = document.querySelector("[data-google-query-id]");
            this.Ca = a ? a.getAttribute("data-google-query-id") : null;
            this.l = null;
            this.Aa = !1;
            this.ta = () => {}
        }
        j() {
            super.j();
            this.ta()
        }
    }
    var go = void 0,
        ho = void 0,
        io = [];
    var X = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Y = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function oo() {
        const a = window.navigator.userAgent,
            b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function po(a = window) {
        return !a.PeriodicSyncManager
    }

    function qo() {
        var a = window.document;
        const b = L(bg).i($f.h, $f.defaultValue);
        Wc(b, a)
    }

    function ro(a, b) {
        return a || ".google.ch" === b || "function" === typeof F.__tcfapi
    }

    function Z(a, b, c) {
        if (a = window.goog_tt_state_map ? .get(a)) a.state = b, void 0 != c && (a.hasRedemptionRecord = c)
    }

    function so() {
        const a = `${X.issuerOrigin}${X.redemptionPath}`,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: X.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Z(X.issuerOrigin, 2);
        return window.fetch(a, b).then(c => {
            if (!c.ok) throw Error(`${c.status}: Network response was not ok!`);
            Z(X.issuerOrigin, 6, !0)
        }).catch(c => {
            c && "NoModificationAllowedError" === c.name ? Z(X.issuerOrigin, 6, !0) : Z(X.issuerOrigin, 5)
        })
    }

    function to() {
        const a = `${X.issuerOrigin}${X.issuancePath}`;
        Z(X.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(b => {
            if (!b.ok) throw Error(`${b.status}: Network response was not ok!`);
            Z(X.issuerOrigin, 10);
            return so()
        }).catch(b => {
            if (b && "NoModificationAllowedError" === b.name) return Z(X.issuerOrigin, 10), so();
            Z(X.issuerOrigin, 9)
        })
    }

    function uo() {
        Z(X.issuerOrigin, 13);
        return document.hasTrustToken(X.issuerOrigin).then(a => a ? so() : to())
    }

    function vo() {
        Z(Y.issuerOrigin, 13);
        if (window.Promise) {
            var a = document.hasTrustToken(Y.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }));
            const b = `${Y.issuerOrigin}${Y.redemptionPath}`,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            Z(Y.issuerOrigin, 16);
            a = a.then(e => window.fetch(b, c).then(f => {
                if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                Z(Y.issuerOrigin, 18, !0)
            }).catch(f => {
                if (f && "NoModificationAllowedError" === f.name) Z(Y.issuerOrigin,
                    18, !0);
                else {
                    if (e) return window.Promise.reject({
                        state: 17,
                        error: f
                    });
                    Z(Y.issuerOrigin, 17)
                }
            })).then(() => document.hasTrustToken(Y.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }))).then(e => {
                const f = `${Y.issuerOrigin}${Y.getStatePath}`;
                Z(Y.issuerOrigin, 20);
                return window.fetch(`${f}?ht=${e}`, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Y.issuerOrigin]
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    Z(Y.issuerOrigin, 22);
                    return g.text().then(h =>
                        JSON.parse(h))
                }).catch(g => window.Promise.reject({
                    state: 21,
                    error: g
                }))
            });
            const d = Xc(window);
            return a.then(e => {
                const f = `${Y.issuerOrigin}${Y.issuancePath}`;
                return e && e.srqt && e.cs ? (Z(Y.issuerOrigin, 23), window.fetch(`${f}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    Z(Y.issuerOrigin, 25);
                    return e
                }).catch(g => window.Promise.reject({
                    state: 24,
                    error: g
                }))) : e
            }).then(e => {
                if (e && e.srdt && e.cs) return Z(Y.issuerOrigin,
                    26), window.fetch(`${b}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(f => {
                    if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                    Z(Y.issuerOrigin, 28, !0)
                }).catch(f => window.Promise.reject({
                    state: 27,
                    error: f
                }))
            }).then(() => {
                Z(Y.issuerOrigin, 29)
            }).catch(e => {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        Z(Y.issuerOrigin, e.state);
                        const f = N(Zf);
                        Math.random() <=
                            f && Td({
                                state: e.state,
                                err: e.error.toString()
                            })
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function wo(a) {
        if (document.hasTrustToken && !M(Xf)) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof Map) {
                var c = [];
                if (a.h.some(d => d.issuerOrigin === X.issuerOrigin)) {
                    let d = b.get(X.issuerOrigin);
                    d || (d = uo(), b.set(X.issuerOrigin, d));
                    c.push(d)
                }
                a.h.some(d => d.issuerOrigin === Y.issuerOrigin) && (a = b.get(Y.issuerOrigin), a || (a = vo(), b.set(Y.issuerOrigin, a)), c.push(a));
                if (0 < c.length && window.Promise && window.Promise.all) return window.Promise.all(c)
            }
        }
    }
    var xo = class extends qd {
        constructor(a, b) {
            super();
            this.h = [];
            a && oo() && this.h.push(X);
            b && this.h.push(Y);
            if (document.hasTrustToken && !M(Xf)) {
                const c = new Map;
                this.h.forEach(d => {
                    c.set(d.issuerOrigin, {
                        issuerOrigin: d.issuerOrigin,
                        state: 1,
                        hasRedemptionRecord: !1
                    })
                });
                window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof Map ? new Map([...c, ...window.goog_tt_state_map]) : c;
                window.goog_tt_promise_map && window.goog_tt_promise_map instanceof Map || (window.goog_tt_promise_map = new Map)
            }
        }
    };

    function yo(a, b) {
        return r(a, 2, b)
    }

    function zo(a, b) {
        return r(a, 3, b)
    }

    function Ao(a, b) {
        return r(a, 4, b)
    }

    function Bo(a, b) {
        return r(a, 5, b)
    }

    function Co(a, b) {
        return r(a, 9, b)
    }

    function Do(a, b) {
        return Db(a, 10, b)
    }

    function Eo(a, b) {
        return r(a, 11, b)
    }

    function Fo(a, b) {
        return r(a, 1, b)
    }

    function Go(a, b) {
        return r(a, 7, b)
    }
    var Io = class extends B {
            constructor() {
                super(void 0, -1, Ho)
            }
        },
        Jo = class extends B {
            constructor() {
                super(void 0)
            }
            getVersion() {
                return A(this, 2)
            }
        },
        Ho = [10, 6];
    const Ko = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Lo() {
        if ("function" !== typeof F.navigator ? .userAgentData ? .getHighEntropyValues) return null;
        const a = F.google_tag_data ? ? (F.google_tag_data = {});
        if (a.uach_promise) return a.uach_promise;
        const b = F.navigator.userAgentData.getHighEntropyValues(Ko).then(c => {
            a.uach ? ? (a.uach = c);
            return c
        });
        return a.uach_promise = b
    }

    function Mo(a) {
        return Eo(Do(Bo(yo(Fo(Ao(Go(Co(zo(new Io, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList ? .map(b => {
            var c = new Jo;
            c = r(c, 1, b.brand);
            return r(c, 2, b.version)
        }) || []), a.wow64 || !1)
    }

    function No() {
        return Lo() ? .then(a => Mo(a)) ? ? null
    };
    var Oo = (a, b) => {
            b.google_ad_host || (a = Sl(a)) && (b.google_ad_host = a)
        },
        Ro = (a, b, c = "") => {
            F.google_sa_impl && !F.document.getElementById("google_shimpl") && (delete F.google_sa_queue, delete F.google_sa_impl);
            F.google_sa_queue || (F.google_sa_queue = [], F.google_process_slots = xj(215, () => Po(F.google_sa_queue)), a = Qo(c, a, b), Ec(F.document, a).id = "google_shimpl")
        };

    function Po(a) {
        const b = a.shift();
        "function" === typeof b && R.da(216, b);
        a.length && m.setTimeout(xj(215, () => Po(a)), 0)
    }

    function So(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }
    var Qo = (a, b, c) => {
        var d = Math.random() < N(nf) ? hc(gc(b.mb).toString()) : null;
        b = u(c, 4) ? b.lb : b.nb;
        d = d ? d : hc(gc(b).toString());
        b = {};
        a: {
            if (u(c, 4)) {
                if (c = a || Tn(F)) {
                    c = {
                        client: c,
                        plah: F.location.host
                    };
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            c = {}
        }
        To(c, b);
        a: {
            if ((!M(Mf) || M(wf) && F !== F.top) && (M(Pf) || M(Lf)) && (a = a || Tn(F), c = Rl(F), a)) {
                a = {
                    client: a,
                    plah: F.location.host,
                    ama_t: "adsense",
                    asntp: N(Cf),
                    asntpv: N(Gf),
                    asntpl: N(Ef),
                    asntpm: N(Ff),
                    asntpc: N(Df),
                    asna: N(yf),
                    asnd: N(zf),
                    asnp: N(Af),
                    asns: N(Bf),
                    asmat: N(xf),
                    asptt: N(Hf),
                    easpi: M(Pf),
                    asro: M(If),
                    host: c,
                    easai: M(Nf)
                };
                break a
            }
            a = {}
        }
        To(a, b);
        To(L(bg).h(Ye.h, Ye.defaultValue) ? {
            bust: L(bg).h(Ye.h, Ye.defaultValue)
        } : {}, b);
        return ec(d, b)
    };

    function To(a, b) {
        C(a, (c, d) => {
            void 0 === b[d] && (b[d] = c)
        })
    }
    var Uo = a => {
            a: {
                var b = [m.top];
                var c = [];
                let e = 0,
                    f;
                for (; f = b[e++];) {
                    c.push(f);
                    try {
                        if (f.frames)
                            for (let g = 0; g < f.frames.length && 1024 > b.length; ++g) b.push(f.frames[g])
                    } catch {}
                }
                b = c;
                for (c = 0; c < b.length; c++) try {
                    var d = b[c].frames.google_esf;
                    if (d) {
                        $c = d;
                        break a
                    }
                } catch (g) {}
                $c = null
            }
            if ($c) return null;d = Fc("IFRAME");d.id = "google_esf";d.name = "google_esf";d.src = gc(a.sb).toString();d.style.display = "none";
            return d
        },
        Wo = (a, b, c, d) => {
            Vo(a, b, c, d, (e, f) => {
                e = e.document;
                for (var g = void 0, h = 0; !g || e.getElementById(g + "_host");) g = "aswift_" +
                    h++;
                e = g;
                g = Number(f.google_ad_width || 0);
                f = Number(f.google_ad_height || 0);
                h = Fc("DIV");
                h.id = e + "_host";
                const k = h.style;
                k.border = "none";
                k.height = `${f}px`;
                k.width = `${g}px`;
                k.margin = 0;
                k.padding = 0;
                k.position = "relative";
                k.visibility = "visible";
                k.backgroundColor = "transparent";
                h.style.display = "inline-block";
                const {
                    hb: l,
                    cb: p
                } = {
                    cb: h,
                    hb: h
                };
                c.appendChild(l);
                return {
                    Za: e,
                    outerInsElement: l,
                    innerInsElement: p
                }
            })
        };

    function Vo(a, b, c, d, e) {
        const f = e(a, b);
        e = f.Za;
        Xo(a, c, b);
        c = pa;
        const g = (new Date).getTime();
        b.google_lrv = A(d, 2);
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        d = a.document.getElementById(e + "_host") ? h => h() : h => window.setTimeout(h, 0);
        So(a, () => {
            if (M(vf)) {
                let {
                    outerInsElement: k,
                    innerInsElement: l
                } = f;
                if (!(k && l && k.isConnected && l.isConnected)) {
                    var h = a.document.getElementById(String(b.google_async_iframe_id) + "_host");
                    const p = a.document.getElementById(String(b.google_async_iframe_id) +
                        "_host");
                    if (null == h || null == p) throw Error("no_ins");
                    ({
                        outerInsElement: k,
                        innerInsElement: l
                    } = {
                        innerInsElement: h,
                        outerInsElement: p
                    })
                }
                h = {
                    pubWin: a,
                    vars: b,
                    outerInsElement: k,
                    innerInsElement: l
                }
            } else h = {
                pubWin: a,
                vars: b
            };
            (h = a.google_sa_impl(h)) && h.catch && R.ea(911, h)
        }, d)
    }
    var Xo = (a, b, c) => {
            var d = c.google_ad_output,
                e = c.google_ad_format,
                f = c.google_ad_width || 0,
                g = c.google_ad_height || 0;
            e || "html" != d && null != d || (e = f + "x" + g);
            d = !c.google_ad_slot || c.google_override_format || !Xm[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
            e && d ? e = e.toLowerCase() : e = "";
            c.google_ad_format = e;
            if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
                e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                    c.google_orig_ad_height || c.google_ad_height
                ];
                d = [];
                f = 0;
                for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
                (d = d.join()) && e.push(d);
                c.google_ad_unit_key = Lc(e.join(":")).toString();
                e = [];
                for (d = 0; b && 25 > d; ++d) {
                    f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "";
                    a: {
                        if (b && b.nodeName && b.parentElement) {
                            g = b.nodeName.toString().toLowerCase();
                            const h = b.parentElement.childNodes;
                            let k = 0;
                            for (let l = 0; l < h.length; ++l) {
                                const p = h[l];
                                if (p.nodeName && p.nodeName.toString().toLowerCase() === g) {
                                    if (b === p) {
                                        g = "." + k;
                                        break a
                                    }++k
                                }
                            }
                        }
                        g =
                        ""
                    }
                    e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                    b = b.parentElement
                }
                b = e.join() + ":";
                e = [];
                if (a) try {
                    let h = a.parent;
                    for (d = 0; h && h !== a && 25 > d; ++d) {
                        const k = h.frames;
                        for (f = 0; f < k.length; ++f)
                            if (a === k[f]) {
                                e.push(f);
                                break
                            }
                        a = h;
                        h = a.parent
                    }
                } catch (h) {}
                c.google_ad_dom_fingerprint = Lc(b + e.join()).toString()
            }
        },
        Yo = () => {
            var a = Dc(m);
            a && (a = ee(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
                debugCard: null,
                debugCardRequested: !1
            }))
        },
        Zo = a => {
            qo();
            ro(Al(), A(a, 8)) || xj(779, () => {
                var b = M(po(window) ? Wf : Vf);
                const c =
                    M(Yf);
                b = new xo(b, c);
                0 < N(ag) ? F.google_trust_token_operation_promise = wo(b) : wo(b)
            })();
            a = No();
            null != a && a.then(b => {
                a: {
                    gb = !0;
                    try {
                        var c = JSON.stringify(b.toJSON(), Jb);
                        break a
                    } finally {
                        gb = !1
                    }
                    c = void 0
                }
                F.google_user_agent_client_hint = c
            });
            Bm(L(bg).i(Sf.h, Sf.defaultValue), F.document)
        };

    function $o(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function ap(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "";
            (c = Bc(c)) && (b.google_ad_client = $o("google_ad_client", c))
        }
        a = a.attributes;
        c = a.length;
        for (let e = 0; e < c; e++) {
            var d = a[e];
            if (/data-/.test(d.name)) {
                const f = qa(d.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (d = $o(f, d.value), null !== d && (b[f] = d))
            }
        }
    }

    function bp(a) {
        if (a = cd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function cp(a, b, c, d) {
        ap(a, b);
        if (c.document && c.document.body && !En(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = Hn(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Xm[e + "x" + g];
                var h = f;
                if (e) {
                    const k = Ym(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new Q("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = f + "px";
                g = zn(f, "auto", c, a, b);
                h = f;
                g.size().i(c,
                    b, a);
                fn(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.minWidth() > f && !e && (b.google_ad_width = g.minWidth(), a.style.width = g.minWidth() + "px")
            }
        }(e = a.offsetWidth) || (e = ui(a, c, "width", E));
        e = e || b.google_ad_width || 0;
        f = ma(zn, e, "auto", c, a, b, !1, !0);
        if (!M(gf) && 488 > I(c).clientWidth) {
            g = Dc(c) || c;
            h = b.google_ad_client;
            d = g.location && "#ftptohbh" === g.location.hash ? 2 : hm(g.location, "google_responsive_slot_preview") || M(pf) ? 1 : M( of ) ? 2 : Dl(g, 1, h, d) ? 1 : 0;
            if (g = 0 !== d) b: if (b.google_reactive_ad_format || M(hf) && b.google_ad_resize ||
                    En(c, b) || ji(a, b)) g = !1;
                else {
                    for (g = a; g; g = g.parentElement) {
                        h = Gc(g, c);
                        if (!h) {
                            b.gfwrnwer = 18;
                            g = !1;
                            break b
                        }
                        if (!Ia(["static", "relative"], h.position)) {
                            b.gfwrnwer = 17;
                            g = !1;
                            break b
                        }
                    }
                    g = ni(c, a, e, .3, b);
                    !0 !== g ? (b.gfwrnwer = g, g = !1) : g = c === c.top ? !0 : !1
                }
            g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === d ? (d = {}, fn(f(), e, d), b.google_resizing_width = d.google_ad_width, b.google_resizing_height = d.google_ad_height, b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1
        } else d = !1;
        if (e = En(c, b)) Gn(e, a, b, c, d);
        else {
            if (ji(a,
                    b)) {
                if (d = Gc(a, c)) a.style.width = d.width, a.style.height = d.height, ii(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = bp(c)
            } else ii(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Gn(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = oi(a.offsetWidth || parseInt(a.style.width,
                10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function dp() {
        var a = L(ep);
        var b = new Uk;
        b = r(b, 1, I(a.A).scrollWidth);
        b = r(b, 2, I(a.A).scrollHeight);
        var c = new Uk;
        c = r(c, 1, I(a.A).clientWidth);
        c = r(c, 2, I(a.A).clientHeight);
        var d = new Wk;
        d = r(d, 1, a.v);
        d = r(d, 2, a.m);
        d = r(d, 3, a.h);
        var e = new Vk;
        b = Bb(e, 2, b);
        b = Bb(b, 1, c);
        b = Cb(d, 4, Xk, b);
        a.i && !a.j.has(1) && (a.j.add(1), Fg(a.l, b))
    }
    var ep = class {
        constructor(a) {
            this.j = new Set;
            this.A = dd() || window;
            this.h = N(Xe);
            var b = 0 < this.h && Kc() < 1 / this.h;
            this.v = (this.i = !!Gj(Bj(), 30, b)) ? Xc(this.A) : 0;
            this.m = this.i ? Tn(this.A) : "";
            this.l = a ? ? new Kg(100)
        }
    };

    function fp() {
        const a = fd `(a=0)=>{let b;const c=class{};}`;
        try {
            var b = window;
            const c = a instanceof bc && a.constructor === bc ? a.h : "type_error:SafeScript";
            b.eval(c) === c && b.eval(c.toString());
            return [!0, ""]
        } catch (c) {
            return [!1, String(c)]
        }
    };
    var gp = a => {
        sc(window, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || "sc-cnf" !== c.googMsgType || a(c, b)
        })
    };
    var hp = class extends qd {
        constructor() {
            super();
            this.i = F;
            this.qa = 500;
            this.h = null;
            this.m = {};
            this.l = null
        }
        j() {
            this.m = {};
            this.l && (tc(this.i, "message", this.l), delete this.l);
            delete this.m;
            delete this.i;
            delete this.h;
            super.j()
        }
    };
    var ip = class extends qd {
        constructor() {
            super();
            this.l = F;
            this.h = null;
            this.i = !1
        }
    };
    let jp = null;
    const kp = [],
        lp = new Map;
    let mp = -1;
    var np = a => Ci.test(a.className) && "done" !== a.dataset.adsbygoogleStatus,
        pp = (a, b, c) => {
            a.dataset.adsbygoogleStatus = "done";
            op(a, b, c)
        },
        op = (a, b, c) => {
            var d = window;
            d.google_spfd || (d.google_spfd = cp);
            var e = b.google_reactive_ads_config;
            e || cp(a, b, d, c);
            Oo(d, b);
            if (!qp(a, b, d)) {
                e || (d.google_lpabyc = li(a, d) + ui(a, d, "height", E));
                if (e) {
                    e = e.page_level_pubvars || {};
                    if (T(F).page_contains_reactive_tag && !T(F).allow_second_reactive_tag) {
                        if (e.pltais) {
                            Pl(!1);
                            return
                        }
                        throw new Q("Only one 'enable_page_level_ads' allowed per page.");
                    }
                    T(F).page_contains_reactive_tag = !0;
                    Pl(7 === e.google_pgb_reactive)
                }
                b.google_unique_id = gd(d);
                C(Ln, (f, g) => {
                    b[g] = b[g] || d[g]
                });
                b.google_loader_used = "aa";
                b.google_reactive_tag_first = 1 === (T(F).first_tag_on_page || 0);
                wj(164, () => {
                    Wo(d, b, a, c)
                })
            }
        },
        qp = (a, b, c) => {
            var d = b.google_reactive_ads_config,
                e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
                f = Nl(c);
            if (f && f.Fa && "on" !== b.google_adtest && !e) {
                e = li(a, c);
                const g = I(c).clientHeight;
                e = 0 == g ? null : e / g;
                if (!f.ma || f.ma && (e || 0) >= f.ma) return a.className += " adsbygoogle-ablated-ad-slot",
                    c = c.google_sv_map = c.google_sv_map || {}, d = fa(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == f.qb && (null !== Pc(a.getAttribute("width")) && a.setAttribute("width", 0), null !== Pc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
            }
            if ((f = Gc(a, c)) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
            a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
            return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (m.console && m.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
        };

    function rp(a) {
        var b = document.getElementsByTagName("INS");
        for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
            var c = e;
            if (np(c) && "reserved" !== c.dataset.adsbygoogleStatus && (!a || e.id === a)) return e
        }
        return null
    }
    var tp = (a, b, c) => {
            if (a && a.shift) {
                let d = 20;
                for (; 0 < a.length && 0 < d;) {
                    try {
                        sp(a.shift(), b, c)
                    } catch (e) {
                        setTimeout(() => {
                            throw e;
                        })
                    }--d
                }
            }
        },
        up = () => {
            const a = Fc("INS");
            a.className = "adsbygoogle";
            a.className += " adsbygoogle-noablate";
            Sc(a, {
                display: "none"
            });
            return a
        },
        vp = (a, b) => {
            const c = {};
            C(de, (f, g) => {
                !1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
            });
            ea(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
            const d = up();
            Yc.body.appendChild(d);
            const e = {
                google_reactive_ads_config: c,
                google_ad_client: a.google_ad_client
            };
            e.google_pause_ad_requests = !!T(F).pause_ad_requests;
            pp(d, e, b)
        },
        wp = (a, b) => {
            ee(m).wasPlaTagProcessed = !0;
            const c = () => vp(a, b),
                d = m.document;
            if (d.body || "complete" === d.readyState || "interactive" === d.readyState) vp(a, b);
            else {
                const e = pc(R.pa(191, c));
                sc(d, "DOMContentLoaded", e);
                (new m.MutationObserver((f, g) => {
                    d.body && (e(), g.disconnect())
                })).observe(d, {
                    childList: !0,
                    subtree: !0
                })
            }
        },
        sp = (a, b, c) => {
            const d = {};
            wj(165, () => {
                xp(a, d, b, c)
            }, e => {
                e.client = e.client || d.google_ad_client || a.google_ad_client;
                e.slotname = e.slotname || d.google_ad_slot;
                e.tag_origin = e.tag_origin || d.google_tag_origin
            })
        };

    function yp(a) {
        delete a.google_checked_head;
        C(a, (b, c) => {
            Bi[c] || (delete a[c], m.console.warn(`AdSense head tag doesn't support ${c.replace("google","data").replace(/_/g,"-")} attribute.`))
        })
    }
    var Bp = (a, b) => {
        var c = F.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || F.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = T(window);
            if (d.head_tag_slot_vars) zp(c);
            else {
                var e = {};
                ap(c, e);
                yp(e);
                var f = Yb(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                F.adsbygoogle || (F.adsbygoogle = []);
                d = F.adsbygoogle;
                d.loaded ? d.push(c) : d.splice(0, 0, c);
                e.google_adbreak_test || b.v() ? .v() && M(Qf) ? Ap(f, a) : gp(() => {
                    Ap(f, a)
                })
            }
        }
    };
    const zp = a => {
        const b = T(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = Bc(c) || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new Q("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    };
    var Cp = a => {
            if ("object" === typeof a && null != a) {
                if ("string" === typeof a.type) return 2;
                if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
            }
            return 0
        },
        xp = (a, b, c, d) => {
            if (null == a) throw new Q("push() called with no parameters.");
            d.B() && Dp(a, d.m().m(), A(d, 2));
            var e = Cp(a);
            if (0 !== e) M(kf) && (d = Ql(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = pa)), null == jp ? (Ep(a), kp.push(a)) : 3 === e ? wj(787, () => {
                    jp.handleAdConfig(a)
                }) :
                R.ea(730, jp.handleAdBreak(a));
            else {
                pa = (new Date).getTime();
                Ro(c, d, Fp(a));
                Gp();
                a: {
                    if (void 0 != a.enable_page_level_ads) {
                        if ("string" === typeof a.google_ad_client) {
                            e = !0;
                            break a
                        }
                        throw new Q("'google_ad_client' is missing from the tag config.");
                    }
                    e = !1
                }
                if (e) Hp(a, d);
                else if ((e = a.params) && C(e, (g, h) => {
                        b[h] = g
                    }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
                else {
                    e = Ip(a.element);
                    ap(e, b);
                    c = T(m).head_tag_slot_vars || {};
                    C(c, (g, h) => {
                        b.hasOwnProperty(h) || (b[h] = g)
                    });
                    if (e.hasAttribute("data-require-head") && !T(m).head_tag_slot_vars) throw new Q("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                    if (!b.google_ad_client) throw new Q("Ad client is missing from the slot.");
                    b.google_apsail = Hl(b.google_ad_client);
                    var f = (c = 0 === (T(F).first_tag_on_page || 0) && nm(b)) && om(c);
                    c && (f || (Hp(c, d), T(F).skip_next_reactive_tag = !0), M(sf) && f && Jp(c));
                    0 === (T(F).first_tag_on_page || 0) && (T(F).first_tag_on_page = 2);
                    b.google_pause_ad_requests = !!T(F).pause_ad_requests;
                    pp(e, b, d);
                    !M(sf) && c && f && Jp(c)
                }
            }
        };
    let Kp = !1;
    const Dp = (a, b, c) => {
            M(jf) && !Kp && (Kp = !0, (a = Fp(a)) || (a = Tn(F)), yj("predictive_abg", {
                a_c: a,
                p_c: b,
                b_v: c
            }, .01))
        },
        Fp = a => a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : "",
        Gp = () => {
            if (M(af)) {
                var a = Nl(F);
                if (!(a = a && a.Fa)) {
                    try {
                        var b = F.localStorage
                    } catch (c) {
                        b = null
                    }
                    b = b ? gl(hl(b)) : null;
                    a = !(b && fl(b) && b)
                }
                a || Ol(F, 1)
            }
        },
        Jp = a => {
            Zc(() => {
                ee(m).wasPlaTagProcessed || m.adsbygoogle && m.adsbygoogle.push(a)
            })
        },
        Hp = (a, b) => {
            if (T(F).skip_next_reactive_tag) T(F).skip_next_reactive_tag = !1;
            else {
                0 ===
                    (T(F).first_tag_on_page || 0) && (T(F).first_tag_on_page = 1);
                if (a.tag_partner) {
                    var c = a.tag_partner;
                    const d = T(m);
                    d.tag_partners = d.tag_partners || [];
                    d.tag_partners.push(c)
                }
                rm(a, b);
                wp(a, b)
            }
        },
        Ip = a => {
            if (a) {
                if (!np(a) && (a.id ? a = rp(a.id) : a = null, !a)) throw new Q("'element' has already been filled.");
                if (!("innerHTML" in a)) throw new Q("'element' is not a good DOM element.");
            } else if (a = rp(), !a) throw new Q("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
            return a
        },
        Lp = () => {
            var a = new Qj(F),
                b = new hp;
            const c = new ip;
            var d = F.__cmp ? 1 : 0;
            a = Nj(a) ? 1 : 0;
            var e;
            (e = "function" === typeof b.i ? .__uspapi) || (b.h ? b = b.h : (b.h = Qc(b.i, "__uspapiLocator"), b = b.h), e = null != b);
            b = e ? 1 : 0;
            c.i || (c.h || (c.h = Qc(c.l, "googlefcPresent")), c.i = !0);
            yj("cmpMet", {
                tcfv1: d,
                tcfv2: a,
                usp: b,
                fc: c.h ? 1 : 0,
                ptt: 9
            }, N(We))
        },
        Mp = a => {
            a = {
                value: u(a, 16)
            };
            let b = .01;
            N(cf) && (a.eid = N(cf), b = 1);
            a.frequency = b;
            yj("new_abg_tag", a, b)
        },
        Np = a => {
            Bj().S[Ej(26)] = !!Number(a)
        },
        Op = a => {
            Number(a) ? T(F).pause_ad_requests = !0 : (T(F).pause_ad_requests = !1, a = () => {
                if (!T(F).pause_ad_requests) {
                    var b = {};
                    let c;
                    "function" === typeof window.CustomEvent ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b) : (c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
                    F.dispatchEvent(c)
                }
            }, m.setTimeout(a, 0), m.setTimeout(a, 1E3))
        },
        Pp = a => {
            yj("adsenseGfpKnob", {
                value: a,
                ptt: 9
            }, .1);
            switch (a) {
                case 0:
                case 2:
                    a = !0;
                    break;
                case 1:
                    a = !1;
                    break;
                default:
                    throw Error(`Illegal value of ${"cookieOptions"}: ${a}`);
            }
            F._gfp_a_ = a
        },
        Rp = a => {
            try {
                Object.defineProperty(a,
                    "requestNonPersonalizedAds", {
                        set: Np
                    }), Object.defineProperty(a, "pauseAdRequests", {
                    set: Op
                }), Object.defineProperty(a, "cookieOptions", {
                    set: Pp
                }), Object.defineProperty(a, "onload", {
                    set: Qp
                })
            } catch (b) {}
        };

    function Qp(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }
    var Ap = (a, b) => {
        b = mm(ec(hc(gc(b.pb).toString()), L(bg).h(Ye.h, Ye.defaultValue) ? {
            bust: L(bg).h(Ye.h, Ye.defaultValue)
        } : {})).then(c => {
            null == jp && (c.init(a), jp = c, Sp())
        });
        R.ea(723, b);
        b.finally(() => {
            kp.length = 0;
            yj("slotcar", {
                event: "api_ld",
                time: Date.now() - pa,
                time_pr: Date.now() - mp
            })
        })
    };
    const Sp = () => {
            for (var a of lp.keys()) {
                const b = lp.get(a); - 1 !== b && (m.clearTimeout(b), lp.delete(a))
            }
            for (a = 0; a < kp.length; a++) {
                if (lp.has(a)) continue;
                const b = kp[a],
                    c = Cp(b);
                wj(723, () => {
                    if (3 === c) jp.handleAdConfig(b);
                    else if (2 === c) {
                        var d = jp.handleAdBreakBeforeReady(b);
                        R.ea(730, d)
                    }
                })
            }
        },
        Ep = a => {
            var b = kp.length;
            if (2 === Cp(a) && "preroll" === a.type && null != a.adBreakDone) {
                -1 === mp && (mp = Date.now());
                var c = m.setTimeout(() => {
                    try {
                        (0, a.adBreakDone)({
                            breakType: "preroll",
                            breakName: a.name,
                            breakFormat: "preroll",
                            breakStatus: "timeout"
                        }),
                        lp.set(b, -1), yj("slotcar", {
                            event: "pr_to",
                            source: "adsbygoogle"
                        })
                    } catch (d) {
                        console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                    }
                }, 1E3 * N(Rf));
                lp.set(b, c)
            }
        },
        Tp = () => {
            if (M(Pf) && !M(If)) {
                if (M(Kf)) {
                    var a = F.document;
                    const b = a.createElement("LINK"),
                        c = M(Of) ? ed `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700&text=shoppingmode` : ed `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700`;
                    mc(b, c, "stylesheet");
                    a.head.appendChild(b)
                }
                if (M(Jf)) {
                    vm();
                    return
                }
            }
            M(Jf) && vm()
        };
    (function(a, b, c, d = () => {}) {
        R.Oa(zj);
        wj(166, () => {
            const e = Un(b);
            Jn(e);
            d();
            bd(16, [1, e.toJSON()]);
            var f = dd(cd(F)) || F;
            const g = c(Kn({
                Xa: a,
                kb: A(e, 2)
            }), e);
            El(f, e);
            Wm(f, e, null === F.document.currentScript ? 1 : xm(g.rb));
            dp();
            if ((!ua() || 0 <= ra(ya(), 11)) && (null == (F.Prototype || {}).Version || !M(ff))) {
                vj(M(Uf));
                Zo(e);
                Nk();
                try {
                    jo()
                } catch (p) {}
                Yo();
                Bp(g, e);
                f = window;
                var h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    if (M(bf) && !u(e, 16)) try {
                        if (F.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]')) return
                    } catch (p) {}
                    Tp();
                    Mp(e);
                    N(We) && Lp();
                    var k = {
                        push: p => {
                            sp(p, g, e)
                        },
                        loaded: !0
                    };
                    Rp(k);
                    if (h)
                        for (var l of ["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]) void 0 !== h[l] && (k[l] = h[l]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    tp(h, g, e);
                    f.adsbygoogle = k;
                    h && (k.onload = h.onload);
                    (l = Uo(g)) && document.documentElement.appendChild(l);
                    l = fp();
                    yj("modern_js", {
                        fy: t(e, 1, 0),
                        supports: l[0],
                        c: 2021,
                        e: l[1]
                    }, .01)
                }
            }
        })
    })("m202208170101", "undefined" === typeof sttc ? void 0 : sttc, function(a, b) {
        const c = 2012 < t(b, 1, 0) ? `_fy${t(b,1,0)}` : "";
        var d =
            A(b, 3);
        const e = A(b, 2);
        b = ed `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`;
        d = ed `https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`;
        return {
            pb: b,
            nb: ed `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl${c}.js`,
            lb: ed `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${c}.js`,
            mb: ed `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_instrumented${c}.js`,
            sb: d,
            rb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2021,\"r20220822\",\"r20190131\",null,null,null,null,\".google.co.kr\",null,null,null,[[[1082,null,null,[1]],[null,62,null,[null,0.001]],[null,1130,null,[null,100]],[null,1126,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1131,null,null,[1]],[null,1159,null,[null,500]],[1122,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1087,null,null,[1]],[1167,null,null,[1]],[1129,null,null,[1]],[null,1169,null,[null,61440]],[1053,null,null,[1]],[1100,null,null,[1]],[1201,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1036,null,null,[1]],[1184,null,null,[1]],[1141,null,null,[1]],[1190,null,null,[1]],[380254521,null,null,[],[[[1,[[4,null,63]]],[1]]]],[381914117,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1034,null,[]],[null,1080,null,[null,5]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[1033,null,null,[1]],[null,null,null,[],null,1939],[null,null,null,[null,null,null,[\"A+cA2PUOfIOKAdSDJOW5CP9ZlxONy1yu+hqAq72zUtKw4rLdihqRp6Nui\/jUyCyegr+BUtH+C+Elv0ufn05yBQEAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A+zsdH3aNZT\/bkjT8U\/o5ACzyaeNYzTvtoVmwf\/KOilfv39pxY2AIsOwhQJv+YnXp98i3TqrQibIVtMWs5UHjgoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"AxceVEhIegcDEHqLXFQ2+vPKqzCppoJYsRCZ\/BdfVnbM\/sUUF2BXV8lwNosyYjvoxnTh2FC8cOlAnA5uULr\/zAUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1934],[1947,null,null,[1]],[null,1972,null,[]],[null,1142,null,[null,8]],[null,1165,null,[null,1000]],[null,1195,null,[null,1]],[null,1119,null,[null,300]],[null,1193,null,[null,100]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1115,null,[null,1]],[null,1194,null,[null,1]],[392736476,null,null,[]],[null,null,null,[],null,1932],[432938498,null,null,[]]],[[10,[[null,[[31068788],[31068789,[[1196,null,null,[1]]]]]],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[20,[[44760911],[44760912,[[1160,null,null,[1]]]],[44763827,[[1170,null,null,[1]]]],[44768832,[[1160,null,null,[1]]]]]],[10,[[44767166],[44767167]]],[10,[[44769305],[44769306,[[313,null,null,[1]]]]]],[null,[[44755592],[44755593,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44755594,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44755653,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[1,[[44770147],[44770148,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44772205,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[10,[[44770149],[44770150,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[null,[[44771607],[44771608,[[1200,null,null,[1]]]]],null,51],[10,[[21066428],[21066429]]],[50,[[31068737],[31068738,[[1198,null,null,[1]]]]]],[10,[[31068855],[31068856,[[1177,null,null,[1]]]]]],[20,[[31068874,[[null,1103,null,[null,31068874]]]],[31068875,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,31068875]],[1182,null,null,[1]],[null,1114,null,[null,0.4]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,300]],[null,1115,null,[null,-1]],[null,1194,null,[null,2]],[1186,null,null,[1]]]],[31068877,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1119,null,[null,1000]],[null,1103,null,[null,31068877]],[1182,null,null,[1]],[null,1114,null,[null,0.4]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,300]],[null,1115,null,[null,-1]],[null,1194,null,[null,2]],[1186,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[10,[[31068878,[[null,1103,null,[null,31068878]]]],[31068880,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1119,null,[null,300]],[null,1103,null,[null,31068880]],[1182,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,300]],[null,1115,null,[null,-1]],[1186,null,null,[1]]]],[31069000,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1119,null,[null,300]],[null,1103,null,[null,31069000]],[1182,null,null,[1]],[null,1114,null,[null,0.4]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,300]],[null,1115,null,[null,-1]],[1186,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[1,[[31068913,[[null,1103,null,[null,31068913]]]],[31068914,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,31068914]],[1202,null,null,[1]],[1182,null,null,[1]],[null,1114,null,[null,0.4]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,300]],[null,1115,null,[null,-1]],[null,1194,null,[null,2]],[1186,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[10,[[31069003,[[null,1103,null,[null,31069003]]]],[31069004,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,31069004]],[1192,null,null,[1]],[null,1114,null,[null,0.4]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,300]],[null,1115,null,[null,-1]],[null,1194,null,[null,2]],[1186,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[1000,[[31069049,[[null,null,14,[null,null,\"31069049\"]]],[6,null,null,null,6,null,\"31069049\"]],[31069050,[[null,null,14,[null,null,\"31069050\"]]],[6,null,null,null,6,null,\"31069050\"]]],[4,null,55]],[100,[[31069063],[31069064,[[1197,null,null,[1]]]]]],[1000,[[31069081,[[null,null,14,[null,null,\"31069081\"]]],[6,null,null,null,6,null,\"31069081\"]],[31069082,[[null,null,14,[null,null,\"31069082\"]]],[6,null,null,null,6,null,\"31069082\"]]],[4,null,55]],[1,[[31069093,[[null,1103,null,[null,31069093]]]],[31069094,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1119,null,[null,300]],[null,1103,null,[null,31069094]],[1192,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,300]],[1203,null,null,[1]],[null,1115,null,[null,-1]],[1186,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[1000,[[31069108,[[null,null,14,[null,null,\"31069108\"]]],[6,null,null,null,6,null,\"31069108\"]],[31069109,[[null,null,14,[null,null,\"31069109\"]]],[6,null,null,null,6,null,\"31069109\"]]],[4,null,55]],[1000,[[31069151,[[null,null,14,[null,null,\"31069151\"]]],[6,null,null,null,6,null,\"31069151\"]],[31069152,[[null,null,14,[null,null,\"31069152\"]]],[6,null,null,null,6,null,\"31069152\"]]],[4,null,55]],[1,[[44768761,[[null,1103,null,[null,44768761]],[1121,null,null,[1]]]],[44772037,[[1120,null,null,[1]],[null,1103,null,[null,44772037]],[1182,null,null,[1]],[null,1114,null,[null,0.4]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,300]],[null,1115,null,[null,-1]],[1121,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[10,[[44770765],[44770766,[[1134,null,null,[1]]]]]],[500,[[44770826,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44770826]],[1192,null,null,[1]],[1182,null,null,[1]],[null,1114,null,[null,0.4]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,300]],[null,1115,null,[null,-1]],[null,1194,null,[null,2]]]]],[2,[[4,null,55],[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]],49],[300,[[44770827,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44770827]],[1192,null,null,[1]],[1182,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,300]],[null,1115,null,[null,-1]]]]],[2,[[4,null,55],[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]],49],[10,[[44770880],[44770881,[[1171,null,null,[1]]]]]],[10,[[44771162],[44771163,[[1180,null,null,[1]]]]],[4,null,55],60],[50,[[44771547],[44771548,[[1147,null,null,[1]]]]],null,54],[null,[[44772035,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44772035]],[1182,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,300]],[null,1115,null,[null,-1]],[null,1194,null,[null,2]]]],[44772036,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44772036]],[1182,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,300]],[null,1115,null,[null,-1]],[1180,null,null,[1]],[null,1194,null,[null,2]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[10,[[44772039,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44772039]],[1182,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,300]],[null,1115,null,[null,-1]],[1186,null,null,[1]]]],[44772040,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44772040]],[1182,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1108,null,[null,300]],[1203,null,null,[1]],[null,1115,null,[null,-1]],[1186,null,null,[1]]]]],[4,null,55],49],[1,[[44772268],[44772269,[[1185,null,null,[1]]]]]],[50,[[31061761],[31067422],[31067423,[[null,1032,null,[]]]],[31067605],[31068455],[31068456]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]]]]],[17,[[5,[[44769173],[44769174],[44769175]],null,null,null,null,31,null,null,113],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]],[null,[[31069037],[31069038,[[447540098,null,null,[1]],[447540096,null,null,[1]]]],[31069039,[[447540098,null,null,[1]],[447540097,null,null,[1]],[447540096,null,null,[1]]]]],[2,[[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],null,null,null,null,null,null,112]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102],[50,[[31068919],[31068920],[31068921]],null,null,null,null,null,401,null,102]]],[11,[[1,[[31069034],[31069035,[[447540098,null,null,[1]],[447540096,null,null,[1]]]],[31069036,[[447540098,null,null,[1]],[447540097,null,null,[1]],[447540096,null,null,[1]]]]],null,55]]],[12,[[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[50,[[31067825],[31067826,[[1971,null,null,[1]]]]]],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[50,[[31064018],[31064019,[[1961,null,null,[1]]]]]],[1000,[[31065981,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/(9[23456789]|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]]]]],[1000,[[31067146,null,[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,9,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,9,null,null,null,null,[\"navigator.joinAdInterestGroup\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,69,null,null,null,null,[\"attribution-reporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068556,null,[4,null,8,null,null,null,null,[\"sharedStorage\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[10,[[44768158,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44768159,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],null,null,[0.001,\"1000\",1,\"1000\"]],[1,[null,[[[[null,0,null,null,null,null,\"H1\"],1,[\"10px\",\"10px\",1],[2],null,null,null,1],[[null,0,null,null,null,null,\"DIV#cf-error-details\\u003eDIV.cf-section.cf-highlight.cf-captcha-container\\u003eDIV.cf-wrapper\\u003eDIV.cf-columns.two\"],1,[\"10px\",\"10px\",1],[2],null,null,null,1]],[[null,[1,3,2],null,\"7964472727\",null,null,[0,2],null,null,[1]]]]]],null,null,1,\"reezli-cheats.xyz\",1826327829,[44759875,44759926,44759837,44761793]]");