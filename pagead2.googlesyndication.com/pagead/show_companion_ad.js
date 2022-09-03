(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var e, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        r = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        t = function(a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var f = a[d];
                    if (!(f in c)) break a;
                    c = c[f]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && r(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    t("Symbol", function(a) {
        if (a) return a;
        var b = function(k, m) {
            this.L = k;
            r(this, "description", {
                configurable: !0,
                writable: !0,
                value: m
            })
        };
        b.prototype.toString = function() {
            return this.L
        };
        a = 1E9 * Math.random() >>> 0;
        var c = "jscomp_symbol_" + a + "_",
            d = 0,
            f = function(k) {
                if (this instanceof f) throw new TypeError("Symbol is not a constructor");
                return new b(c + (k || "") + "_" + d++, k)
            };
        return f
    }, "es6", "es3");
    t("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && r(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    }, "es6", "es3");
    var ea = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        u = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        v = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };
    t("WeakMap", function(a) {
        function b() {
            if (!a || !Object.seal) return !1;
            try {
                var h = Object.seal({}),
                    l = Object.seal({}),
                    n = new a([
                        [h, 2],
                        [l, 3]
                    ]);
                if (2 != n.get(h) || 3 != n.get(l)) return !1;
                n.delete(h);
                n.set(l, 4);
                return !n.has(h) && 4 == n.get(l)
            } catch (q) {
                return !1
            }
        }

        function c() {}

        function d(h) {
            var l = typeof h;
            return "object" === l && null !== h || "function" === l
        }

        function f(h) {
            if (!v(h, m)) {
                var l = new c;
                r(h, m, {
                    value: l
                })
            }
        }

        function k(h) {
            var l = Object[h];
            l && (Object[h] = function(n) {
                if (n instanceof c) return n;
                Object.isExtensible(n) && f(n);
                return l(n)
            })
        }
        if (b()) return a;
        var m = "$jscomp_hidden_" + Math.random();
        k("freeze");
        k("preventExtensions");
        k("seal");
        var p = 0,
            g = function(h) {
                this.v = (p += Math.random() + 1).toString();
                if (h) {
                    h = u(h);
                    for (var l; !(l = h.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        g.prototype.set = function(h, l) {
            if (!d(h)) throw Error("Invalid WeakMap key");
            f(h);
            if (!v(h, m)) throw Error("WeakMap key fail: " + h);
            h[m][this.v] = l;
            return this
        };
        g.prototype.get = function(h) {
            return d(h) && v(h, m) ? h[m][this.v] : void 0
        };
        g.prototype.has = function(h) {
            return d(h) && v(h,
                m) && v(h[m], this.v)
        };
        g.prototype.delete = function(h) {
            return d(h) && v(h, m) && v(h[m], this.v) ? delete h[m][this.v] : !1
        };
        return g
    }, "es6", "es3");
    t("Map", function(a) {
        function b() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var g = Object.seal({
                        x: 4
                    }),
                    h = new a(u([
                        [g, "s"]
                    ]));
                if ("s" != h.get(g) || 1 != h.size || h.get({
                        x: 4
                    }) || h.set({
                        x: 4
                    }, "t") != h || 2 != h.size) return !1;
                var l = h.entries(),
                    n = l.next();
                if (n.done || n.value[0] != g || "s" != n.value[1]) return !1;
                n = l.next();
                return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0
            } catch (q) {
                return !1
            }
        }
        if (b()) return a;
        var c = new WeakMap,
            d = function(g) {
                this.u = {};
                this.j =
                    m();
                this.size = 0;
                if (g) {
                    g = u(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        d.prototype.set = function(g, h) {
            g = 0 === g ? 0 : g;
            var l = f(this, g);
            l.list || (l.list = this.u[l.id] = []);
            l.g ? l.g.value = h : (l.g = {
                next: this.j,
                l: this.j.l,
                head: this.j,
                key: g,
                value: h
            }, l.list.push(l.g), this.j.l.next = l.g, this.j.l = l.g, this.size++);
            return this
        };
        d.prototype.delete = function(g) {
            g = f(this, g);
            return g.g && g.list ? (g.list.splice(g.index, 1), g.list.length || delete this.u[g.id], g.g.l.next = g.g.next, g.g.next.l = g.g.l, g.g.head = null,
                this.size--, !0) : !1
        };
        d.prototype.clear = function() {
            this.u = {};
            this.j = this.j.l = m();
            this.size = 0
        };
        d.prototype.has = function(g) {
            return !!f(this, g).g
        };
        d.prototype.get = function(g) {
            return (g = f(this, g).g) && g.value
        };
        d.prototype.entries = function() {
            return k(this, function(g) {
                return [g.key, g.value]
            })
        };
        d.prototype.keys = function() {
            return k(this, function(g) {
                return g.key
            })
        };
        d.prototype.values = function() {
            return k(this, function(g) {
                return g.value
            })
        };
        d.prototype.forEach = function(g, h) {
            for (var l = this.entries(), n; !(n = l.next()).done;) n =
                n.value, g.call(h, n[1], n[0], this)
        };
        d.prototype[Symbol.iterator] = d.prototype.entries;
        var f = function(g, h) {
                var l;
                var n = (l = h) && typeof l;
                "object" == n || "function" == n ? c.has(l) ? l = c.get(l) : (n = "" + ++p, c.set(l, n), l = n) : l = "p_" + l;
                if ((n = g.u[l]) && v(g.u, l))
                    for (g = 0; g < n.length; g++) {
                        var q = n[g];
                        if (h !== h && q.key !== q.key || h === q.key) return {
                            id: l,
                            list: n,
                            index: g,
                            g: q
                        }
                    }
                return {
                    id: l,
                    list: n,
                    index: -1,
                    g: void 0
                }
            },
            k = function(g, h) {
                var l = g.j;
                return ea(function() {
                    if (l) {
                        for (; l.head != g.j;) l = l.l;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: h(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            m = function() {
                var g = {};
                return g.l = g.next = g.head = g
            },
            p = 0;
        return d
    }, "es6", "es3");
    var fa = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            f = {
                next: function() {
                    if (!d && c < a.length) {
                        var k = c++;
                        return {
                            value: b(k, a[k]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    };
    t("Array.prototype.entries", function(a) {
        return a ? a : a = function() {
            return fa(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6", "es3");
    t("Set", function(a) {
        function b() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var d = Object.seal({
                        x: 4
                    }),
                    f = new a(u([d]));
                if (!f.has(d) || 1 != f.size || f.add(d) != f || 1 != f.size || f.add({
                        x: 4
                    }) != f || 2 != f.size) return !1;
                var k = f.entries(),
                    m = k.next();
                if (m.done || m.value[0] != d || m.value[1] != d) return !1;
                m = k.next();
                return m.done || m.value[0] == d || 4 != m.value[0].x || m.value[1] != m.value[0] ? !1 : k.next().done
            } catch (p) {
                return !1
            }
        }
        if (b()) return a;
        var c = function(d) {
            this.h = new Map;
            if (d) {
                d =
                    u(d);
                for (var f; !(f = d.next()).done;) f = f.value, this.add(f)
            }
            this.size = this.h.size
        };
        c.prototype.add = function(d) {
            d = 0 === d ? 0 : d;
            this.h.set(d, d);
            this.size = this.h.size;
            return this
        };
        c.prototype.delete = function(d) {
            d = this.h.delete(d);
            this.size = this.h.size;
            return d
        };
        c.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        c.prototype.has = function(d) {
            return this.h.has(d)
        };
        c.prototype.entries = function() {
            return this.h.entries()
        };
        c.prototype.values = function() {
            return this.h.values()
        };
        c.prototype.keys = c.prototype.values;
        c.prototype[Symbol.iterator] = c.prototype.values;
        c.prototype.forEach = function(d, f) {
            var k = this;
            this.h.forEach(function(m) {
                return d.call(f, m, m, k)
            })
        };
        return c
    }, "es6", "es3");
    t("Object.entries", function(a) {
        return a ? a : a = function(b) {
            var c = [],
                d;
            for (d in b) v(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8", "es3");
    var w = this || self,
        x = function(a, b, c, d) {
            a = a.split(".");
            d = d || w;
            a[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + a[0]);
            for (var f; a.length && (f = a.shift());)
                if (a.length || void 0 === b) d = d[f] && d[f] !== Object.prototype[f] ? d[f] : d[f] = {};
                else if (!c && ha(b) && ha(d[f]))
                for (var k in b) b.hasOwnProperty(k) && (d[f][k] = b[k]);
            else d[f] = b
        },
        ha = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        y = function(a) {
            return a
        };

    function ia() {
        var a = w.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var z = null,
        A;
    A = null;

    function B(a) {
        var b = A;
        return b ? b.brands.some(function(c) {
            return (c = c.brand) && -1 != c.indexOf(a)
        }) : !1
    }

    function D(a) {
        var b = null == z ? ia() : z;
        return -1 != b.indexOf(a)
    };

    function E() {
        var a = A;
        return !!a && 0 < a.brands.length
    }

    function F() {
        return E() ? B("Chromium") : (D("Chrome") || D("CriOS")) && !(E() ? 0 : D("Edge")) || D("Silk")
    };
    var ja = Array.prototype.indexOf ? function(a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        ka = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, f = "string" === typeof a ? a.split("") : a, k = 0; k < d; k++) k in f && b.call(c, f[k], k, a)
        };
    var la = E() ? !1 : D("Trident") || D("MSIE"),
        G;
    if (G = D("Gecko")) {
        var ma, na = null == z ? ia() : z;
        ma = -1 != na.toLowerCase().indexOf("webkit");
        G = !(ma && !D("Edge"))
    }
    var oa = G && !(D("Trident") || D("MSIE")) && !D("Edge");
    !D("Android") || F();
    F();
    !D("Safari") || F() || (E() ? 0 : D("Coast")) || (E() ? 0 : D("Opera")) || (E() ? 0 : D("Edge")) || (E() ? B("Microsoft Edge") : D("Edg/")) || E() && B("Opera");

    function H(a) {
        return a
    }
    H(function(a) {
        return null !== a && void 0 !== a
    }, "exists");
    H(function() {
        return !1
    }, "MutableExperimentFlags");
    H(function() {
        return !1
    }, "ImmutableExperimentFlags");
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var I;
    var pa = {},
        J = function(a, b) {
            this.H = b === pa ? a : ""
        };
    J.prototype.toString = function() {
        return this.H.toString()
    };
    var K = function(a) {
            return a instanceof J && a.constructor === J ? a.H : "type_error:SafeHtml"
        },
        L = function(a) {
            if (void 0 === I) {
                var b = null;
                var c = w.trustedTypes;
                if (c && c.createPolicy) try {
                    b = c.createPolicy("goog#html", {
                        createHTML: y,
                        createScript: y,
                        createScriptURL: y
                    })
                } catch (d) {
                    w.console && w.console.error(d.message)
                }
                I = b
            }
            a = (b = I) ? b.createHTML(a) : a;
            return new J(a, pa)
        };

    function M(a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
            if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
        }
        a.innerHTML = K(b)
    };
    var qa = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var ra = qa(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            w.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function sa(a) {
        return a ? a.passive && ra() ? a : a.capture || !1 : !1
    }
    var N = function(a, b, c, d) {
            return a.addEventListener ? (a.addEventListener(b, c, sa(d)), !0) : !1
        },
        ta = function(a, b, c, d) {
            return a.removeEventListener ? (a.removeEventListener(b, c, sa(d)), !0) : !1
        };
    var O = function(a, b) {
        return "string" === typeof b ? a.getElementById(b) : b
    };
    var ua = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        va = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };
    var P = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? !1 : d;
        return wa(a, b, c, !1, d)
    };

    function wa(a, b, c, d, f) {
        a.google_image_requests || (a.google_image_requests = []);
        var k = va("IMG", a.document);
        if (c || f) {
            var m = function(p) {
                c && c(p);
                if (f) {
                    p = a.google_image_requests;
                    var g = ja(p, k);
                    0 <= g && Array.prototype.splice.call(p, g, 1)
                }
                ta(k, "load", m);
                ta(k, "error", m)
            };
            N(k, "load", m);
            N(k, "error", m)
        }
        d && (k.referrerPolicy = "no-referrer");
        k.src = b;
        a.google_image_requests.push(k);
        return k
    }

    function xa(a, b, c) {
        c = void 0 === c ? !1 : c;
        var d;
        if (d = a.navigator) d = a.navigator.userAgent, d = /Chrome/.test(d) && !/Edge/.test(d) ? !0 : !1;
        d && a.navigator.sendBeacon ? a.navigator.sendBeacon(b) : P(a, b, void 0, c)
    };
    var ya = document,
        Q = window;
    var za = function(a) {
        a = void 0 === a ? Q : a;
        return "http:" === a.location.protocol
    };
    var R = function(a, b) {
            a = void 0 === a ? 4E3 : a;
            b = void 0 === b ? "&" : b;
            this.aa = a;
            this.D = b;
            this.B = {};
            this.ca = 0;
            this.A = []
        },
        Ba = function(a, b, c, d, f) {
            var k = [];
            ua(a, function(m, p) {
                (m = Aa(m, b, c, d, f)) && k.push(p + "=" + m)
            });
            return k.join(b)
        },
        Aa = function(a, b, c, d, f) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var k = [], m = 0; m < a.length; m++) k.push(Aa(a[m], b, c, d + 1, f));
                    return k.join(c[d])
                }
            } else if ("object" == typeof a) return f = f || 0, 2 > f ? encodeURIComponent(Ba(a,
                b, c, d, f + 1)) : "...";
            return encodeURIComponent(String(a))
        };
    R.prototype.O = function(a, b) {
        this.A.push(a);
        this.B[a] = b
    };
    R.prototype.N = function(a, b) {
        var c = this.ca++,
            d = {};
        d[a] = b;
        a = [d];
        this.O(c, a)
    };
    R.prototype.Y = function(a, b, c) {
        a = a + "//" + b + c;
        var d = this.W() - c.length;
        if (0 > d) return "";
        this.A.sort(function(h, l) {
            return h - l
        });
        c = null;
        b = "";
        for (var f = 0; f < this.A.length; f++)
            for (var k = this.A[f], m = this.B[k], p = 0; p < m.length; p++) {
                if (!d) {
                    c = null == c ? k : c;
                    break
                }
                var g = Ba(m[p], this.D, ",$");
                if (g) {
                    g = b + g;
                    if (d >= g.length) {
                        d -= g.length;
                        a += g;
                        b = this.D;
                        break
                    }
                    c = null == c ? k : c
                }
            }
        d = "";
        null != c && (d = b + "trn=" + c);
        return a + d
    };
    R.prototype.W = function() {
        var a = 1,
            b;
        for (b in this.B) a = b.length > a ? b.length : a;
        return this.aa - 3 - a - this.D.length - 1
    };
    var S = function(a, b, c, d, f) {
        f = void 0 === f ? !1 : f;
        this.fa = a;
        this.U = b;
        this.ea = c;
        this.T = d;
        this.P = f;
        this.I = Math.random()
    };
    S.prototype.ha = function(a) {
        0 <= a && 1 >= a && (this.I = a)
    };
    S.prototype.ba = function(a, b, c, d, f) {
        if (this.ia(!!c, d)) try {
            if (b instanceof R) var k = b;
            else k = new R, ua(b, function(p, g) {
                k.N(g, p)
            });
            var m = k.Y(this.fa, this.U, this.ea + a + "&");
            m && ("undefined" !== typeof f ? P(w, m, f) : this.P ? xa(w, m) : P(w, m))
        } catch (p) {}
    };
    S.prototype.ia = function(a, b) {
        b = b || this.T;
        a = a ? this.I : Math.random();
        return a < b
    };
    var T = null;
    var Da = function(a) {
            a = void 0 === a ? w : a;
            return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
        },
        Ea = function(a) {
            a = void 0 === a ? w : a;
            return (a = a.performance) && a.now ? a.now() : null
        };
    var Fa = function(a, b, c, d, f, k) {
        d = void 0 === d ? 0 : d;
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = d;
        this.uniqueId = Math.random();
        this.slotId = f;
        this.taskId = k
    };
    var U = w.performance,
        Ga = !!(U && U.mark && U.measure && U.clearMarks),
        V = qa(function() {
            var a;
            if (a = Ga) {
                var b;
                if (null === T) {
                    T = "";
                    try {
                        a = "";
                        try {
                            a = w.top.location.hash
                        } catch (c) {
                            a = w.location.hash
                        }
                        a && (T = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = T;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        }),
        W = function(a, b) {
            this.m = [];
            this.Z = b || w;
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.m = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.s = V() || (null != c ? c : Math.random() <
                a)
        };
    W.prototype.disable = function() {
        this.s = !1;
        this.m != this.Z.google_js_reporting_queue && (V() && ka(this.m, Ha), this.m.length = 0)
    };
    W.prototype.ga = function(a) {
        !this.s || 2048 < this.m.length || this.m.push(a)
    };
    var Ha = function(a) {
        a && U && V() && (U.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), U.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    W.prototype.start = function(a, b) {
        if (!this.s) return null;
        var c = Ea() || Da();
        a = new Fa(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        U && V() && U.mark(b);
        return a
    };
    W.prototype.end = function(a) {
        if (this.s && "number" === typeof a.value) {
            var b = Ea() || Da();
            a.duration = b - a.value;
            b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            U && V() && U.mark(b);
            this.ga(a)
        }
    };
    H(function(a) {
        return "number" === typeof a
    }, "number");
    H(function(a) {
        return "string" === typeof a
    }, "string");
    H(function(a) {
        return "object" === typeof a && "function" === typeof a.then
    }, "Thenable");
    H(function(a) {
        return "boolean" === typeof a
    }, "boolean");
    H(function(a) {
        return !!a && ("object" === typeof a || "function" === typeof a)
    }, "object");
    H(function(a) {
        return null === a
    }, "null");
    H(function(a) {
        return void 0 === a
    }, "undefined");
    H(function(a) {
        return "function" === typeof a
    }, "Function");

    function Ia() {
        return H(function(a) {
            return Array.isArray(a)
        }, "Array<unknown>")
    }
    Ia();
    Ia();

    function Ja() {
        return H(function(a) {
            return a instanceof Set
        }, "Set<unknown>")
    }
    Ja();
    Ja();

    function Ka() {
        return H(function(a) {
            return a instanceof Map
        }, "Map<unknown,unknown>")
    }
    Ka();
    Ka();
    H(function() {
        return !1
    }, "MutableCondition");
    H(function() {
        return !1
    }, "ImmutableCondition");
    H(function() {
        return !1
    }, "MutableFlagValue");
    H(function() {
        return !1
    }, "ImmutableFlagValue");
    H(function() {
        return !1
    }, "MutableConditionalValue");
    H(function() {
        return !1
    }, "ImmutableConditionalValue");
    H(function() {
        return !1
    }, "MutableFlagDefinition");
    H(function() {
        return !1
    }, "ImmutableFlagDefinition");
    H(function() {
        return !1
    }, "MutableGmaSdkMonitoringMessage");
    H(function() {
        return !1
    }, "ImmutableGmaSdkMonitoringMessage");
    H(function() {
        return !1
    }, "MutableTestOnlyPayload");
    H(function() {
        return !1
    }, "ImmutableTestOnlyPayload");
    H(function() {
        return !1
    }, "MutableGptSlotInfo");
    H(function() {
        return !1
    }, "ImmutableGptSlotInfo");
    H(function() {
        return !1
    }, "MutableAdDensity");
    H(function() {
        return !1
    }, "ImmutableAdDensity");
    H(function() {
        return !1
    }, "MutablePageAdDensity");
    H(function() {
        return !1
    }, "ImmutablePageAdDensity");
    H(function() {
        return !1
    }, "MutablePageview");
    H(function() {
        return !1
    }, "ImmutablePageview");
    H(function() {
        return !1
    }, "MutableSize");
    H(function() {
        return !1
    }, "ImmutableSize");
    H(function() {
        return !1
    }, "MutableViewportAdDensity");
    H(function() {
        return !1
    }, "ImmutableViewportAdDensity");
    H(function() {
        return !1
    }, "MutableAdDensityEvent");
    H(function() {
        return !1
    }, "ImmutableAdDensityEvent");
    H(function() {
        return !1
    }, "MutableStrategyActionEnum");
    H(function() {
        return !1
    }, "ImmutableStrategyActionEnum");
    H(function() {
        return !1
    }, "MutableStrategyErrorEnum");
    H(function() {
        return !1
    }, "ImmutableStrategyErrorEnum");
    H(function() {
        return !1
    }, "MutableStrategyWarningEnum");
    H(function() {
        return !1
    }, "ImmutableStrategyWarningEnum");
    H(function() {
        return !1
    }, "MutableAdsStats");
    H(function() {
        return !1
    }, "ImmutableAdsStats");
    H(function() {
        return !1
    }, "MutableFilterStats");
    H(function() {
        return !1
    }, "ImmutableFilterStats");
    H(function() {
        return !1
    }, "MutablePlacementInfo");
    H(function() {
        return !1
    }, "ImmutablePlacementInfo");
    H(function() {
        return !1
    }, "MutablePlacementOptimizationInfo");
    H(function() {
        return !1
    }, "ImmutablePlacementOptimizationInfo");
    H(function() {
        return !1
    }, "MutableAutoAdsInfo");
    H(function() {
        return !1
    }, "ImmutableAutoAdsInfo");
    H(function() {
        return !1
    }, "MutableSize");
    H(function() {
        return !1
    }, "ImmutableSize");
    H(function() {
        return !1
    }, "MutablePageview");
    H(function() {
        return !1
    }, "ImmutablePageview");
    H(function() {
        return !1
    }, "MutableAdSenseEvent");
    H(function() {
        return !1
    }, "ImmutableAdSenseEvent");
    H(function() {
        return !1
    }, "MutableGenotypeConditionallyForceExperimentEvent");
    H(function() {
        return !1
    }, "ImmutableGenotypeConditionallyForceExperimentEvent");
    H(function() {
        return !1
    }, "MutableGenotypeDiversionEvent");
    H(function() {
        return !1
    }, "ImmutableGenotypeDiversionEvent");
    H(function() {
        return !1
    }, "MutableDiversionPointInBinary");
    H(function() {
        return !1
    }, "ImmutableDiversionPointInBinary");
    H(function() {
        return !1
    }, "MutableModAssignment");
    H(function() {
        return !1
    }, "ImmutableModAssignment");
    H(function() {
        return !1
    }, "MutableGenotypeFlagsOverriddenAfterAccessEvent");
    H(function() {
        return !1
    }, "ImmutableGenotypeFlagsOverriddenAfterAccessEvent");
    H(function() {
        return !1
    }, "MutableFlagOverriddenAfterAccess");
    H(function() {
        return !1
    }, "ImmutableFlagOverriddenAfterAccess");
    H(function() {
        return !1
    }, "MutableGenotypeEvent");
    H(function() {
        return !1
    }, "ImmutableGenotypeEvent");
    H(function() {
        return !1
    }, "MutableAdRequestFiredEvent");
    H(function() {
        return !1
    }, "ImmutableAdRequestFiredEvent");
    H(function() {
        return !1
    }, "MutableAdResponseCompletedEvent");
    H(function() {
        return !1
    }, "ImmutableAdResponseCompletedEvent");
    H(function() {
        return !1
    }, "MutableApiFunctionCallEvent");
    H(function() {
        return !1
    }, "ImmutableApiFunctionCallEvent");
    H(function() {
        return !1
    }, "MutableImplExecutionStartEvent");
    H(function() {
        return !1
    }, "ImmutableImplExecutionStartEvent");
    H(function() {
        return !1
    }, "MutableMemoryProfile");
    H(function() {
        return !1
    }, "ImmutableMemoryProfile");
    H(function() {
        return !1
    }, "MutableSetPrivacySettingsEvent");
    H(function() {
        return !1
    }, "ImmutableSetPrivacySettingsEvent");
    H(function() {
        return !1
    }, "MutableGptLifecycleEvent");
    H(function() {
        return !1
    }, "ImmutableGptLifecycleEvent");
    H(function() {
        return !1
    }, "MutableGptState");
    H(function() {
        return !1
    }, "ImmutableGptState");
    H(function() {
        return !1
    }, "MutableJsError");
    H(function() {
        return !1
    }, "ImmutableJsError");
    H(function() {
        return !1
    }, "MutablePageState");
    H(function() {
        return !1
    }, "ImmutablePageState");
    H(function() {
        return !1
    }, "MutableJsErrorReport");
    H(function() {
        return !1
    }, "ImmutableJsErrorReport");
    H(function() {
        return !1
    }, "MutableMessageSet");
    H(function() {
        return !1
    }, "ImmutableMessageSet");
    H(function() {
        return !1
    }, "MutableEventIdMessage");
    H(function() {
        return !1
    }, "ImmutableEventIdMessage");
    H(function() {
        return !1
    }, "MutableUserBiddingSignals");
    H(function() {
        return !1
    }, "ImmutableUserBiddingSignals");
    H(function() {
        return !1
    }, "MutableFrequencyCap");
    H(function() {
        return !1
    }, "ImmutableFrequencyCap");
    H(function() {
        return !1
    }, "MutablePerModelParams");
    H(function() {
        return !1
    }, "ImmutablePerModelParams");
    H(function() {
        return !1
    }, "MutableModelEmbedding");
    H(function() {
        return !1
    }, "ImmutableModelEmbedding");
    H(function() {
        return !1
    }, "MutableTrustedDspBiddingSignals");
    H(function() {
        return !1
    }, "ImmutableTrustedDspBiddingSignals");
    H(function() {
        return !1
    }, "MutableBiddingAdSignals");
    H(function() {
        return !1
    }, "ImmutableBiddingAdSignals");
    H(function() {
        return !1
    }, "MutableAtomicToken");
    H(function() {
        return !1
    }, "ImmutableAtomicToken");
    H(function() {
        return !1
    }, "MutableRecursiveRule");
    H(function() {
        return !1
    }, "ImmutableRecursiveRule");
    H(function() {
        return !1
    }, "MutableExclusionsPackage");
    H(function() {
        return !1
    }, "ImmutableExclusionsPackage");
    H(function() {
        return !1
    }, "MutableRuleSet");
    H(function() {
        return !1
    }, "ImmutableRuleSet");
    H(function() {
        return !1
    }, "MutableSignalTokens");
    H(function() {
        return !1
    }, "ImmutableSignalTokens");
    H(function() {
        return !1
    }, "MutableCreativeSignals");
    H(function() {
        return !1
    }, "ImmutableCreativeSignals");
    H(function() {
        return !1
    }, "MutableRejectionReason");
    H(function() {
        return !1
    }, "ImmutableRejectionReason");
    H(function() {
        return !1
    }, "MutableDebugSignals");
    H(function() {
        return !1
    }, "ImmutableDebugSignals");
    H(function() {
        return !1
    }, "MutableInterestGroupSignals");
    H(function() {
        return !1
    }, "ImmutableInterestGroupSignals");
    H(function() {
        return !1
    }, "MutableDebugConfig");
    H(function() {
        return !1
    }, "ImmutableDebugConfig");
    H(function() {
        return !1
    }, "MutableGoogleBuyerSignals");
    H(function() {
        return !1
    }, "ImmutableGoogleBuyerSignals");
    H(function() {
        return !1
    }, "MutableBiddingQuerySignals");
    H(function() {
        return !1
    }, "ImmutableBiddingQuerySignals");
    H(function() {
        return !1
    }, "MutablePredictedRemarketingAd");
    H(function() {
        return !1
    }, "ImmutablePredictedRemarketingAd");
    H(function() {
        return !1
    }, "MutableQueryFlags");
    H(function() {
        return !1
    }, "ImmutableQueryFlags");
    H(function() {
        return !1
    }, "MutableGtradeFirstPriceAdjustmentInfo");
    H(function() {
        return !1
    }, "ImmutableGtradeFirstPriceAdjustmentInfo");
    H(function() {
        return !1
    }, "MutablePredictedHobParams");
    H(function() {
        return !1
    }, "ImmutablePredictedHobParams");
    H(function() {
        return !1
    }, "MutableDiffRequestInfo");
    H(function() {
        return !1
    }, "ImmutableDiffRequestInfo");
    H(function() {
        return !1
    }, "MutableTurtleXBuyerDebugEventMessage");
    H(function() {
        return !1
    }, "ImmutableTurtleXBuyerDebugEventMessage");
    H(function() {
        return !1
    }, "MutableArcInfo");
    H(function() {
        return !1
    }, "ImmutableArcInfo");
    H(function() {
        return !1
    }, "MutableCategoryData");
    H(function() {
        return !1
    }, "ImmutableCategoryData");
    H(function() {
        return !1
    }, "MutableCreativeVendorInfo");
    H(function() {
        return !1
    }, "ImmutableCreativeVendorInfo");
    H(function() {
        return !1
    }, "MutableTrustedScoringSignals");
    H(function() {
        return !1
    }, "ImmutableTrustedScoringSignals");
    H(function() {
        return !1
    }, "MutableTurtleXSellerDebugEventMessage");
    H(function() {
        return !1
    }, "ImmutableTurtleXSellerDebugEventMessage");
    H(function() {
        return !1
    }, "MutableSellerBrowserSignals");
    H(function() {
        return !1
    }, "ImmutableSellerBrowserSignals");
    var La = function() {};
    var X, Ma = new W(1, window),
        Na = function(a) {
            var b = window;
            null != a && (b.google_measure_js_timing = a);
            b.google_measure_js_timing || Ma.disable()
        },
        Oa = function(a) {
            var b;
            X = null != (b = a) ? b : new S(za() ? "http:" : "https:", "pagead2.googlesyndication.com", "/pagead/gen_204?id=", .01);
            "number" !== typeof window.google_srt && (window.google_srt = Math.random());
            X.ha(window.google_srt);
            "complete" == window.document.readyState ? Na() : Ma.s && N(window, "load", function() {
                Na()
            })
        };
    Oa();
    var Pa = function(a, b) {
        b = void 0 === b ? null : b;
        this.i = null;
        this.G = !1;
        this.o = null;
        this.J = b || "gam";
        this.K = a + "_" + this.J
    };
    e = Pa.prototype;
    e.X = function() {
        var a = (new Date).valueOf();
        null == this.o && (Q.gdbg_offset ? this.o = Q.gdbg_offset : (this.o = a, Q.gdbg_offset = this.o));
        return a - this.o
    };
    e.V = function(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    };
    e.S = function() {
        if (null == this.i && !this.G)
            if (this.i = Q.open("", "GoogleDebug_" + this.K, "width=1100, height=600, status=no,resizable=yes, scrollbars=yes")) {
                var a = "Google Ad Manager Debug Output";
                "gam" != this.J && (a = "Google Debug Output");
                var b = this.i.document,
                    c = "";
                c += "<html>";
                c += "<head><title>" + a + "</title><style>";
                c += "h2 {font-size: 1em;margin: 0 0 0.5em 0;color: #353C43}";
                c += "th {background: #e5e5e5;font-weight: normal;color: #444444;";
                c += "text-align: left;}";
                c += "td {border-bottom: 1px solid #dddddd}";
                c +=
                    "tbody tr:hover {background: #ffffcc}";
                c += ".dn {display: none;} .lightText {color: #a0a0a0;}";
                c += "</style>";
                c += "</head>";
                c += "<body><h2>" + a + "</h2><br/>";
                c += 'Page URL: <span id="pageUrl"></span><br/><br/>';
                c += '<form action="" method="post">';
                c += '<table id="google_slot_table" width="100%" class="dn" ';
                c += 'cellspacing="0">';
                c += "<thead><tr><th>&nbsp;";
                c += '<span id="numSlots">0</span> slots on page</th>';
                c += "<th>&nbsp;</th>";
                c += "<th>&nbsp;</th>";
                c += "</tr><tr>";
                c += "<th>&nbsp;&nbsp;Ad Slot Name</th>";
                c +=
                    "<th>Ad Request URL</th>";
                c += "<th>Delivery Analysis ";
                c += '<span class="lightText">(login required)</span></th>';
                c += "</tr></thead>";
                c += "<tbody>";
                c += '<tr class="dn"><td></td>';
                c += "<td></td></tr>";
                c += "</tbody></table><br/>";
                c += '<table id="google_msg_table" width="100%" cellspacing="0">';
                c += "<thead><tr><th>Offset (msec)</th><th>Type</th>";
                c += "<th>Message</th></tr></thead>";
                c += '<tbody id="google_msg_body">';
                c += '<tr class="dn"><td></td><td></td><td></td></tr>';
                c += "</tbody></table></form></body></html>";
                a = L(c);
                b.write(K(a));
                b.getElementById("pageUrl").textContent = ya.URL;
                b.close();
                b.getElementById("google_slot_table")
            } else this.G = !0
    };
    e.C = function(a, b) {
        return '<font color="' + Qa[a] + '">' + b + "</font>"
    };
    e.ka = function(a, b, c) {
        var d = this.i;
        if (d)
            if (d = this.i.document.getElementById("google_msg_table"), null != d) {
                d = d.insertRow(-1);
                var f = d.insertCell(0);
                M(f, L(this.C(a, "" + this.X())));
                f = d.insertCell(1);
                M(f, L(this.C(a, a + "&nbsp;&nbsp;")));
                d = d.insertCell(2);
                c || (b = this.V(b));
                M(d, L(this.C(a, b)))
            } else alert("fails to add to console: " + a + ", " + b)
    };
    e.M = function() {
        if (null == this.i) {
            var a = "gdbg_console_" + this.K;
            Q[a] ? this.i = Q[a] : (this.S(), Q[a] = this.i)
        }
    };
    e.ja = function(a) {
        this.ka("Error", a, !1)
    };
    var Qa = {
        Information: "black",
        Warning: "orange",
        Error: "red",
        Internal: "green"
    };
    var Y = null;

    function Ra(a) {
        if (!Y) {
            var b = void 0,
                c = (b = void 0 === b ? null : b) || "gam";
            b = "gdbg_logger_showcompanionads_" + c;
            if (!Q[b]) {
                Q[b] = new Pa("showcompanionads", c);
                c = ya.URL;
                var d;
                if (d = !!c) {
                    a: {
                        if (c) {
                            d = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
                            try {
                                var f = d.exec(decodeURIComponent(c));
                                if (f) {
                                    var k = f[1] && 1 < f[1].length ? f[1].substring(1) : "true";
                                    break a
                                }
                            } catch (m) {}
                        }
                        k = ""
                    }
                    d = 0 < k.length
                }(k = d) && Q[b].M()
            }
            Y = Q[b]
        }
        Y.ja(a)
    }
    var Sa = function() {
            var a = [],
                b = document.getElementsByTagName("base");
            if (b)
                for (var c = 0, d = b.length; c < d; ++c) {
                    var f = b[c],
                        k = f.getAttribute("target");
                    k && (a.push({
                        R: f,
                        da: k
                    }), f.removeAttribute("target"))
                }
            return a
        },
        Ta = function(a) {
            if (a)
                for (var b = 0, c = a.length; b < c; ++b) {
                    var d = a[b];
                    d.R.setAttribute("target", d.da)
                }
        };

    function Ua() {
        return !0
    }

    function Va() {
        var a = [],
            b = Z();
        if (b && (b = b.getSlots())) {
            b = u(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                c = {};
                if (d) {
                    c.slotId = d.getSlotId().getId();
                    c.adType = d.get("ad_type");
                    d = d.getSizes();
                    var f = [];
                    if (d && Array.isArray(d))
                        for (var k = 0, m = d.length; k < m; k++) {
                            var p = {};
                            "string" !== typeof d[k] && (p.adWidth = d[k].getWidth(), p.adHeight = d[k].getHeight(), f.push(p))
                        }
                    d = f;
                    c.adSizes = d
                }
                a.push(c)
            }
        }
        return a
    }

    function Wa(a, b, c) {
        b = {
            method: "gscac",
            caller: c
        };
        var d = La;
        c = d;
        var f = "F";
        c.F && c.hasOwnProperty(f) || (d = new d, c.F = d);
        c = [];
        !b.eid && c.length && (b.eid = c.toString());
        X.ba("gpt_sca", b, !0, .001, void 0);
        if ((b = Z()) && a && Array.isArray(a) && (c = b.getSlotIdMap()))
            for (d = 0, f = a.length; d < f; d++) {
                var k = a[d],
                    m = k.slotId;
                if (m in c) {
                    m = c[m];
                    var p = (p = Z()) && null != p.isSlotAPersistentRoadblock ? p.isSlotAPersistentRoadblock(m) : !1;
                    if (!p && k.adContent) {
                        p = m.getSlotId().getDomId();
                        if (p = O(document, p)) p.style.display = "";
                        if (k.friendlyIframeRendering) {
                            p =
                                k.adContent;
                            var g = k.adWidth,
                                h = k.adHeight,
                                l = m.getSlotId().getDomId(),
                                n = O(document, l);
                            if (n) {
                                if (l = O(document, l)) l.textContent = "";
                                l = "google_companion_" + m.getSlotId().getId();
                                g = g ? g : m.getSizes()[0].getWidth();
                                h = h ? h : m.getSizes()[0].getHeight();
                                var q = document;
                                q = q.createElement("iframe");
                                q.id = l;
                                q.name = l;
                                null != g && null != h && (q.width = String(g), q.height = String(h));
                                q.vspace = "0";
                                q.hspace = "0";
                                q.allowTransparency = "true";
                                q.scrolling = "no";
                                q.marginWidth = "0";
                                q.marginHeight = "0";
                                q.frameBorder = "0";
                                q.style.border = "0";
                                q.style.verticalAlign =
                                    "bottom";
                                q.src = "about:blank";
                                n.appendChild(q);
                                h = q;
                                n = p;
                                if (la) {
                                    try {
                                        var Ca = !!h.contentWindow.document
                                    } catch (C) {
                                        Ca = !1
                                    }
                                    if (Ca) {
                                        p = h;
                                        h = n;
                                        n = Sa();
                                        try {
                                            window.frames[p.name].contents = h, p.src = 'javascript:window["contents"]'
                                        } catch (C) {
                                            Ra("Could not write third party content into IE iframe: " + C.message)
                                        } finally {
                                            Ta(n)
                                        }
                                    } else {
                                        p = h;
                                        h = n;
                                        n = Sa();
                                        l = "google-ad-content-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
                                        try {
                                            window[l] = h;
                                            var Ya = 'document.domain = "' +
                                                document.domain + '";var adContent = window.parent["' + (l + '"];window.parent["') + (l + '"] = null;document.write(adContent);document.close();');
                                            p.src = 'javascript:\'<script type="text/javascript">' + Ya + "\x3c/script>'"
                                        } catch (C) {
                                            window[l] = null, Ra("Could not write third party content into IE iframe with modified document.domain: " + C.message)
                                        } finally {
                                            Ta(n)
                                        }
                                    }
                                } else {
                                    p = n;
                                    try {
                                        var ba = h.contentWindow ? h.contentWindow.document : h.contentDocument;
                                        oa && ba.open("text/html", "replace");
                                        var Za = L(p);
                                        ba.write(K(Za));
                                        ba.close()
                                    } catch (C) {
                                        Ra("Could not write content into iframe using the DOM standards method. " +
                                            C.message)
                                    }
                                }
                            }
                            b.slotRenderEnded(m, k.adWidth, k.adHeight)
                        }
                        if (null != k.onAdContentSet) k.onAdContentSet(O(document, m.getSlotId().getDomId()))
                    }
                }
            }
    }

    function Z() {
        if ("undefined" != typeof googletag && googletag && "function" == typeof googletag.companionAds) {
            var a = googletag.companionAds();
            return a
        }
        return null
    }

    function Xa(a) {
        a && (a += "&label=elementview&value=0", P(Q, a))
    }
    x("googleCompanionsServicePresent", Ua, !0, void 0);
    x("googleGetCompanionAdSlots", Va, !0, void 0);
    x("googleSetCompanionAdContents", Wa, !0, void 0);
    x("google_companion_error", Xa, !0, void 0);
    var $a = Z();
    if ($a && $a.onImplementationLoaded) $a.onImplementationLoaded();
}).call(this);