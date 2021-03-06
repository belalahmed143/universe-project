if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("CometGlobalPanelGating", ["qex"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        return Boolean(c("qex")._("19"))
    }

    function b() {
        var a;
        return (a = c("qex")._("117")) != null ? a : 0
    }
    g.isGlobalPanelEnabled = a;
    g.getGlobalPanelNumTargetedTabs = b
}), 98);
__d("CometSkittleIcon.react", ["CometIcon.react", "profilePhotoUtils", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            circle: {
                borderTopStartRadius: "s45kfl79",
                borderTopEndRadius: "emlxlaya",
                borderBottomEndRadius: "bkmhp75w",
                borderBottomStartRadius: "spb7xbtv"
            },
            iconBadge: {
                alignItems: "bp9cbjyn",
                backgroundColor: "is6700om",
                borderTopColor: "np69z8it",
                borderEndColor: "et4y5ytx",
                borderBottomColor: "j7g94pet",
                borderStartColor: "b74d5cxt",
                borderTopStartRadius: "s45kfl79",
                borderTopEndRadius: "emlxlaya",
                borderBottomEndRadius: "bkmhp75w",
                borderBottomStartRadius: "spb7xbtv",
                borderTopStyle: "goun2846",
                borderEndStyle: "ccm00jje",
                borderBottomStyle: "s44p3ltw",
                borderStartStyle: "mk2mc5f4",
                borderTopWidth: "qxh1up0x",
                borderEndWidth: "qtyiw8t4",
                borderBottomWidth: "tpcyxxvw",
                borderStartWidth: "k0bpgpbk",
                display: "j83agx80",
                justifyContent: "taijpn5t",
                overflowX: "ni8dbmo4",
                overflowY: "stjgntxs",
                paddingTop: "jwdofwj8",
                paddingEnd: "n8tt0mok",
                paddingBottom: "r8blr3vg",
                paddingStart: "hyh9befq",
                position: "pmk7jnqg"
            },
            roundedRect: {
                borderTopStartRadius: "ue3kfks5",
                borderTopEndRadius: "pw54ja7n",
                borderBottomEndRadius: "uo3d90p7",
                borderBottomStartRadius: "l82x9zwi"
            },
            skittle: {
                alignItems: "bp9cbjyn",
                borderTopWidth: "rt8b4zig",
                borderEndWidth: "n8ej3o3l",
                borderBottomWidth: "agehan2d",
                borderStartWidth: "sk4xxmp2",
                boxSizing: "rq0escxv",
                display: "pq6dq46d",
                justifyContent: "taijpn5t",
                position: "l9j0dhe7"
            }
        },
        j = {
            accent: {
                backgroundColor: "is6700om"
            },
            blue: {
                backgroundColor: "nfl8ryma"
            },
            cherry: {
                backgroundColor: "cvgnql8j"
            },
            grape: {
                backgroundColor: "oxqh0ovx"
            },
            gray: {
                backgroundColor: "tdjehn4e"
            },
            green: {
                backgroundColor: "jllm4f4h"
            },
            lemon: {
                backgroundColor: "tutozmqo"
            },
            lightblue: {
                backgroundColor: "oo1teu6h"
            },
            lime: {
                backgroundColor: "x2my2bqz"
            },
            pink: {
                backgroundColor: "g1i5egrt"
            },
            red: {
                backgroundColor: "l44iypv3"
            },
            seafoam: {
                backgroundColor: "p43b5e0k"
            },
            teal: {
                backgroundColor: "gbrvaats"
            },
            tomato: {
                backgroundColor: "d8rukodm"
            },
            white: {
                backgroundColor: "q2y6ezfg"
            }
        },
        k = {
            36: {
                height: "tv7at329",
                width: "thwo4zme"
            },
            40: {
                height: "qypqp5cg",
                width: "q676j6op"
            },
            48: {
                height: "m7zwrmfr",
                width: "tmrshh9y"
            },
            56: {
                height: "e5d9fub0",
                width: "oeao4gh3"
            },
            60: {
                height: "cb02d2ww",
                width: "ljni7pan"
            }
        },
        l = (b = {}, b[36] = 20, b[40] = 24, b[48] = 24, b[56] = 24, b[60] = 24, b);

    function m(a) {
        switch (a) {
            case "gray":
                return "primary";
            case "white":
                return "primary";
            case "lightblue":
                return "highlight";
            default:
                return "white"
        }
    }

    function a(a, b) {
        var e = a.color,
            f = a.disabled;
        f = f === void 0 ? !1 : f;
        var g = a.icon,
            n = a.iconAria,
            o = a.iconBadge,
            p = a.iconBadgeAria,
            q = a.shape;
        q = q === void 0 ? "circle" : q;
        a = a.size;
        return h.jsxs("div", {
            className: c("stylex")(q === "circle" && i.circle, q === "roundedRect" && i.roundedRect, i.skittle, j[e], k[a]),
            ref: b,
            children: [h.jsx(c("CometIcon.react"), babelHelpers["extends"]({}, n, {
                color: f ? "disabled" : m(e),
                icon: g,
                size: l[a]
            })), o && h.jsx("div", {
                className: c("stylex")(i.iconBadge),
                style: d("profilePhotoUtils").getBadgePosition(a / 2),
                children: h.jsx(c("CometIcon.react"), babelHelpers["extends"]({}, p, {
                    color: "white",
                    icon: o,
                    size: 8
                }))
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e
}), 98);
__d("getItemRoleFromCompositeRole", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        switch (a) {
            case "grid":
                return "row";
            case "listbox":
                return "option";
            case "list":
                return "listitem";
            case "radiogroup":
                return "radio";
            case "row":
                return "gridcell";
            case "tablist":
                return "tab"
        }
        return null
    }
    f["default"] = a
}), 66);
__d("BaseInput.react", ["CometContainerPressableContext", "Locale", "react", "stylex", "testID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
        j = b.useMemo,
        k = {
            root: {
                WebkitTapHighlightColor: "oajrlxb2",
                boxSizing: "rq0escxv",
                touchAction: "f1sip0of",
                ":disabled": {
                    cursor: "hidtqoto"
                }
            },
            zIndex: {
                zIndex: "tkr6xdv7"
            }
        },
        l = d("Locale").isRTL();

    function a(a, b) {
        var d = a.onChange,
            e = a.onClick,
            f = a.onValueChange,
            g = a.testid,
            m = a.type,
            n = m === void 0 ? "text" : m;
        m = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["onChange", "onClick", "onValueChange", "testid", "type", "xstyle"]);
        var o = j(function() {
                switch (n) {
                    case "switch":
                        return "checkbox";
                    default:
                        return n
                }
            }, [n]),
            p = o === "checkbox" || o === "radio",
            q = o === "textarea",
            r = i(c("CometContainerPressableContext")) != null;
        a = Object.assign({}, {
            dir: l ? "rtl" : "ltr"
        }, a, c("testID")(g), {
            className: c("stylex")(k.root, m, r && k.zIndex),
            onChange: function(a) {
                p || f && f(a.target.value, a), d && d(a)
            },
            onClick: function(a) {
                p && (f && f(a.target.checked, a)), e && e(a)
            }
        });
        return q ? h.jsx("textarea", babelHelpers["extends"]({
            suppressHydrationWarning: !0
        }, a, {
            ref: b
        })) : h.jsx("input", babelHelpers["extends"]({
            suppressHydrationWarning: !0
        }, a, {
            ref: b,
            type: o
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.memo(h.forwardRef(a));
    g["default"] = e
}), 98);
__d("BaseSwitch.react", ["BaseFocusRing.react", "BaseInput.react", "BaseView.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            "switch": {
                cursor: "nhd2j8a9",
                height: "datstx6m",
                marginTop: "kvgmc6g5",
                marginEnd: "cxmmr5t8",
                marginBottom: "oygrvhab",
                marginStart: "hcukyx3x",
                opacity: "b5wmifdl",
                outline: "lzcic4wl",
                paddingTop: "jb3vyjys",
                paddingEnd: "rz4wbd8a",
                paddingBottom: "qt6c0cv9",
                paddingStart: "a8nywdso",
                position: "pmk7jnqg",
                start: "j9ispegn",
                top: "kr520xx4",
                width: "k4urcfbm"
            },
            wrapper: {
                position: "l9j0dhe7"
            }
        };

    function a(a, b) {
        var d = a.children,
            e = a.suppressFocusRing,
            f = a.testid,
            g = a.xstyle,
            j = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "suppressFocusRing", "testid", "xstyle"]);
        return h.jsx(c("BaseFocusRing.react"), {
            suppressFocusRing: e,
            children: function(a) {
                return h.jsxs(c("BaseView.react"), {
                    testid: void 0,
                    xstyle: [i.wrapper, a, g],
                    children: [d, h.jsx(c("BaseInput.react"), babelHelpers["extends"]({}, j, {
                        "aria-checked": (a = j.checked) != null ? a : !1,
                        ref: b,
                        role: "switch",
                        type: "checkbox",
                        xstyle: i["switch"]
                    }))]
                })
            }
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(h.forwardRef(a));
    g["default"] = b
}), 98);
__d("BaseScrollableArea.react", ["BaseScrollableAreaContext", "CometDebounce", "CometVisualCompletionAttributes", "Locale", "UserAgent", "gkx", "react", "resize-observer-polyfill", "stylex", "useVisibilityObserver"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
        j = b.useEffect,
        k = b.useImperativeHandle,
        l = b.useMemo,
        m = b.useRef,
        n = b.useState,
        o = {
            baseScroller: {
                display: "j83agx80",
                flexDirection: "cbu4d94t",
                flexGrow: "buofh1pr",
                position: "l9j0dhe7"
            },
            baseScrollerHorizontal: {
                flexDirection: "btwxx1t3"
            },
            baseScrollerWithBottomShadow: {
                marginBottom: "hy3dmvr3"
            },
            baseScrollerWithTopShadow: {
                marginTop: "j8v9yfo1"
            },
            "default": {
                MsOverflowStyle: "o8kakjsu",
                MsScrollChaining: "rpm2j7zs",
                MsScrollRails: "k7i0oixp",
                WebkitOverflowScrolling: "gvuykj2m",
                display: "j83agx80",
                flexDirection: "cbu4d94t",
                overflowX: "ni8dbmo4",
                overflowY: "stjgntxs",
                position: "l9j0dhe7",
                zIndex: "du4w35lb"
            },
            expanding: {
                flexBasis: "d8ncny3e",
                flexGrow: "buofh1pr",
                flexShrink: "g5gj957u",
                minHeight: "tgvbjcpo"
            },
            expandingIE11: {
                flexBasis: "mg4g778l",
                flexGrow: "buofh1pr",
                flexShrink: "g5gj957u",
                minHeight: "tgvbjcpo"
            },
            hideScrollbar: {
                MsOverflowStyle: "q5bimw55",
                scrollbarWidth: "ofs802cu",
                "::-webkit-scrollbar": {
                    display: "pohlnb88",
                    height: "dkue75c7",
                    width: "mb9wzai9"
                }
            },
            horizontalAuto: {
                overflowX: "d76ob5m9",
                overscrollBehaviorX: "qan41l3s"
            },
            perspective: {
                perspective: "l56l04vs",
                perspectiveOrigin: "r57mb794",
                position: "l9j0dhe7",
                transformStyle: "kh7kg01d"
            },
            perspectiveRTL: {
                perspectiveOrigin: "qckw9t6u"
            },
            verticalAuto: {
                overflowY: "eg9m0zos",
                overscrollBehaviorY: "c3g1iek1"
            }
        },
        p = {
            base: {
                boxSizing: "rq0escxv",
                display: "mkhogb32",
                end: "n7fi1qx3",
                opacity: "b5wmifdl",
                paddingTop: "jb3vyjys",
                paddingEnd: "ph5uu5jm",
                paddingBottom: "qt6c0cv9",
                paddingStart: "b3onmgus",
                pointerEvents: "hzruof5a",
                position: "pmk7jnqg",
                top: "kr520xx4",
                transformOrigin: "enuw37q7",
                transitionDuration: "dpja2al7",
                transitionProperty: "art1omkt",
                transitionTimingFunction: "nw2je8n7",
                width: "hhz5lgdu"
            },
            hovered: {
                opacity: "pedkr2u6",
                transitionDuration: "z1801hqc"
            },
            inner: {
                backgroundColor: "oj68ptkr",
                borderTopStartRadius: "jk6sbkaj",
                borderTopEndRadius: "kdgqqoy6",
                borderBottomEndRadius: "ihh4hy1g",
                borderBottomStartRadius: "qttc61fc",
                height: "datstx6m",
                width: "k4urcfbm"
            },
            rtl: {
                transformOrigin: "ondramem"
            }
        },
        q = {
            base: {
                backgroundColor: "pwoa4pd7",
                display: "mkhogb32",
                end: "n7fi1qx3",
                height: "datstx6m",
                opacity: "b5wmifdl",
                position: "pmk7jnqg",
                top: "kr520xx4",
                transitionDuration: "qgmjvhk0",
                transitionProperty: "art1omkt",
                transitionTimingFunction: "nw2je8n7",
                width: "hhz5lgdu",
                ":hover": {
                    opacity: "pyaxyem1"
                }
            }
        },
        r = {
            cover: {
                display: "j83agx80",
                end: "n7fi1qx3",
                flexDirection: "cbu4d94t",
                flexShrink: "pfnyh3mw",
                height: "lbh82i0l",
                pointerEvents: "hzruof5a",
                position: "lpgh02oy",
                start: "j9ispegn",
                zIndex: "tkr6xdv7"
            },
            coverBottom: {
                WebkitMaskImage: "lp1j85zp",
                bottom: "eud3zkil",
                clipPath: "hqei98xk",
                justifyContent: "bkfpd7mw",
                marginBottom: "sjgh65i0"
            },
            coverTop: {
                WebkitMaskImage: "e1szh6ib",
                clipPath: "tnm6jfde",
                justifyContent: "jifvfom9",
                top: "c0svfr8d"
            },
            shadow: {
                flexShrink: "pfnyh3mw",
                height: "gl3lb2sf",
                position: "lpgh02oy",
                "::after": {
                    boxShadow: "ktaft1kr",
                    content: "fe6kdd0r",
                    height: "jsehenr4",
                    position: "l10q8mi9",
                    top: "t41evnfo",
                    width: "dxtmbej5"
                }
            },
            shadowBottom: {
                bottom: "i09qtzwb",
                transform: "sizpolk9"
            },
            shadowTop: {
                top: "kr520xx4"
            }
        },
        s = d("Locale").isRTL(),
        t = c("gkx")("1299319");

    function a(a, b) {
        var d = a.children,
            e = a.expanding;
        e = e === void 0 ? !1 : e;
        var f = a.forceBrowserDefault,
            g = f === void 0 ? !1 : f;
        f = a.hideScrollbar;
        var v = f === void 0 ? !1 : f,
            w = a.horizontal;
        f = a.id;
        var A = a.onScroll,
            B = a.onScrollBottom,
            C = a.onScrollTop,
            D = a.scrollTracePolicy,
            E = a.style,
            F = a.tabIndex,
            G = a.testid,
            H = a.vertical;
        G = a.withBottomShadow;
        G = G === void 0 ? !1 : G;
        var I = a.withTopShadow;
        I = I === void 0 ? !1 : I;
        var J = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "expanding", "forceBrowserDefault", "hideScrollbar", "horizontal", "id", "onScroll", "onScrollBottom", "onScrollTop", "scrollTracePolicy", "style", "tabIndex", "testid", "vertical", "withBottomShadow", "withTopShadow", "xstyle"]);
        var K = l(function() {
                return g || !H || v || w || z()
            }, [H, v, w, g]),
            L = n(!1),
            M = L[0],
            N = L[1];
        L = n(!1);
        var aa = L[0],
            O = L[1];
        L = n(!1);
        var ba = L[0],
            P = L[1],
            Q = i(c("BaseScrollableAreaContext")),
            R = m(null),
            S = m(null),
            T = m(null),
            U = m(null),
            V = m(null),
            W = m(0);
        j(function() {
            if (K) return;
            var a = R.current,
                b = S.current,
                d = T.current,
                e = U.current;
            if (a == null || b == null || d == null || e == null) return;
            var f = 0,
                g = 0,
                h = function() {
                    e.style.display = "none";
                    d.style.display = "none";
                    var a = b.getBoundingClientRect(),
                        c = Math.ceil(a.height);
                    g = a.top;
                    W.current = b.scrollHeight;
                    a = W.current;
                    a !== b.scrollHeight && (a = b.scrollHeight);
                    f = Math.pow(c, 2) / a;
                    var h = (c - f) / (a - c);
                    s ? (d.style.left = "0px", e.style.left = "0px") : (d.style.right = "0px", e.style.right = "0px");
                    d.style.height = a <= c ? "0px" : f + "px";
                    e.style.height = a + "px";
                    d.style.transform = ["matrix3d(\n          1,0,0,0,\n          0,1,0,0,\n          0,0,1,0,\n          0,0,0,-1)", "scale(" + 1 / h + ")", "translateZ(" + (1 - 1 / h) + "px)", "translateZ(-2px)"].join(" ");
                    d.style.display = "block";
                    e.style.display = a <= c ? "none" : "block"
                },
                i = function(a) {
                    u(a);
                    var c = a.clientY;
                    a = b.clientHeight;
                    var d = b.scrollTop;
                    P(!0);
                    var h = W.current / a;
                    a = d / h;
                    if (c < g + a || c > g + a + f) {
                        var i = c < g + a ? -20 : 20,
                            j = !0,
                            k = window.setInterval(function() {
                                j && b.scrollTo({
                                    top: b.scrollTop + i
                                })
                            }, 16);
                        a = function a(b) {
                            u(b), k && window.clearInterval(k), window.removeEventListener("mouseup", a, !0), e.removeEventListener("mouseenter", l), e.removeEventListener("mouseleave", m)
                        };
                        var l = function(a) {
                                u(a), j = !0
                            },
                            m = function(a) {
                                u(a), j = !1
                            };
                        window.addEventListener("mouseup", a, !0);
                        e.addEventListener("mouseenter", l);
                        e.addEventListener("mouseleave", m);
                        return
                    }
                    var n = function(a) {
                        u(a);
                        a = a.clientY - c;
                        b.scrollTo({
                            top: d + a * h
                        })
                    };
                    a = function a(b) {
                        u(b), P(!1), window.removeEventListener("mousemove", n, !0), window.removeEventListener("mouseup", a, !0)
                    };
                    window.addEventListener("mousemove", n, !0);
                    window.addEventListener("mouseup", a, !0)
                },
                j = c("CometDebounce")(h, {
                    wait: 100
                });
            window.addEventListener("resize", j);
            e.addEventListener("mousedown", i);
            var k = new(c("resize-observer-polyfill"))(j);
            k.observe(a);
            k.observe(b);
            return function() {
                window.removeEventListener("resize", j), e.removeEventListener("mousedown", i), k.disconnect(), j.reset()
            }
        }, [K]);
        L = function() {
            N(!0)
        };
        var ca = function() {
                return N(!1)
            },
            X = function(a) {
                A && A(a), O(!0), V.current && window.clearTimeout(V.current), V.current = window.setTimeout(function() {
                    O(!1)
                }, 1e3)
            };
        j(function() {
            return function() {
                window.clearTimeout(V.current)
            }
        }, []);
        var Y = l(function() {
            return {
                getDOMNode: function() {
                    return S.current
                }
            }
        }, []);
        k(b, function() {
            return Y
        }, [Y]);
        b = l(function() {
            return [].concat(Q, [Y])
        }, [Y, Q]);
        var Z = h.jsx("div", {
                className: c("stylex")(r.cover, r.coverTop),
                children: h.jsx("div", {
                    className: c("stylex")(r.shadow, r.shadowTop)
                })
            }),
            $ = h.jsx("div", {
                className: c("stylex")(r.cover, r.coverBottom),
                children: h.jsx("div", {
                    className: c("stylex")(r.shadow, r.shadowBottom)
                })
            });
        return K ? h.jsx(c("BaseScrollableAreaContext").Provider, {
            value: b,
            children: h.jsxs("div", babelHelpers["extends"]({}, a, {
                className: c("stylex")(o["default"], e && (t ? o.expandingIE11 : o.expanding), v && o.hideScrollbar, w && o.horizontalAuto, H && o.verticalAuto, J),
                "data-testid": void 0,
                id: f,
                onScroll: X,
                ref: S,
                style: E,
                tabIndex: F,
                children: [I && Z, h.jsxs("div", {
                    className: c("stylex")(o.baseScroller, w && !H && o.baseScrollerHorizontal, I && o.baseScrollerWithTopShadow, G && o.baseScrollerWithBottomShadow),
                    children: [C ? h.jsx(y, {
                        onVisible: C,
                        scrollerRef: S
                    }) : null, d, B ? h.jsx(x, {
                        onVisible: B,
                        scrollerRef: S
                    }) : null]
                }), G && $]
            }))
        }) : h.jsx(c("BaseScrollableAreaContext").Provider, {
            value: b,
            children: h.jsxs("div", babelHelpers["extends"]({}, a, {
                className: c("stylex")(o["default"], o.hideScrollbar, e && (t ? o.expandingIE11 : o.expanding), o.perspective, s && o.perspectiveRTL, w && o.horizontalAuto, H && o.verticalAuto, J),
                "data-scrolltracepolicy": D,
                "data-testid": void 0,
                id: f,
                onMouseEnter: L,
                onMouseLeave: ca,
                onScroll: X,
                ref: S,
                style: E,
                tabIndex: F,
                children: [I && Z, h.jsxs("div", {
                    className: c("stylex")(o.baseScroller, w && !H && o.baseScrollerHorizontal, I && o.baseScrollerWithTopShadow, G && o.baseScrollerWithBottomShadow),
                    ref: R,
                    children: [C ? h.jsx(y, {
                        onVisible: C,
                        scrollerRef: S
                    }) : null, d, B ? h.jsx(x, {
                        onVisible: B,
                        scrollerRef: S
                    }) : null]
                }), G && $, h.jsx("div", babelHelpers["extends"]({
                    className: c("stylex")(q.base)
                }, c("CometVisualCompletionAttributes").IGNORE, {
                    "data-thumb": 1,
                    ref: U
                })), h.jsx("div", babelHelpers["extends"]({
                    className: c("stylex")(p.base, s && p.rtl, (M || aa || ba) && p.hovered)
                }, c("CometVisualCompletionAttributes").IGNORE, {
                    "data-thumb": 1,
                    ref: T,
                    children: h.jsx("div", {
                        className: c("stylex")(p.inner)
                    })
                }))]
            }))
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var u = function(a) {
            a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation()
        },
        v = {
            bottom: {
                bottom: "i09qtzwb"
            },
            main: {
                height: "ay7djpcl",
                opacity: "b5wmifdl",
                pointerEvents: "hzruof5a",
                position: "pmk7jnqg",
                width: "rfua0xdk"
            },
            top: {
                top: "kr520xx4"
            }
        };

    function w(a) {
        var b = a.onVisible,
            d = a.scrollerRef;
        a = a.xstyle;
        var e = l(function() {
            return function() {
                return d.current
            }
        }, [d]);
        b = c("useVisibilityObserver")({
            onVisible: b,
            options: {
                root: e,
                rootMargin: 0
            }
        });
        return h.jsx("div", {
            className: c("stylex")(v.main, a),
            ref: b
        })
    }
    w.displayName = w.name + " [from " + f.id + "]";

    function x(a) {
        var b = a.onVisible;
        a = a.scrollerRef;
        return h.jsx(w, {
            onVisible: b,
            scrollerRef: a,
            xstyle: v.bottom
        })
    }
    x.displayName = x.name + " [from " + f.id + "]";

    function y(a) {
        var b = a.onVisible;
        a = a.scrollerRef;
        return h.jsx(w, {
            onVisible: b,
            scrollerRef: a,
            xstyle: v.top
        })
    }
    y.displayName = y.name + " [from " + f.id + "]";

    function z() {
        return c("UserAgent").isPlatform("iOS") || c("UserAgent").isPlatform("Android") || c("UserAgent").isBrowser("Edge") || c("UserAgent").isBrowser("IE") || c("UserAgent").isBrowser("Firefox < 64")
    }
    e = h.forwardRef(a);
    g["default"] = e
}), 98);
__d("BaseStyledSwitch.react", ["BaseRow.react", "BaseRowItem.react", "BaseSwitch.react", "BaseView.react", "Locale", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("Locale").isRTL(),
        j = {
            alignIcon: {
                alignItems: "bp9cbjyn"
            },
            background: {
                backgroundColor: "iwcwj0ba",
                bottom: "i09qtzwb",
                boxSizing: "rq0escxv",
                end: "n7fi1qx3",
                opacity: "b5wmifdl",
                pointerEvents: "hzruof5a",
                position: "pmk7jnqg",
                start: "j9ispegn",
                top: "kr520xx4",
                transitionDuration: "f0ai4nzy",
                transitionProperty: "art1omkt",
                transitionTimingFunction: "b4alr923"
            },
            backgroundActive: {
                opacity: "pedkr2u6",
                transitionDuration: "s00z5mgp",
                transitionTimingFunction: "eloblzlw"
            },
            disabled: {
                opacity: "ggwglk7f",
                transitionDuration: "s00z5mgp",
                transitionTimingFunction: "eloblzlw"
            },
            slider: {
                backgroundColor: "q2y6ezfg",
                borderTopStartRadius: "lit7pgxp",
                borderTopEndRadius: "o3c63hce",
                borderBottomEndRadius: "hqlzco19",
                borderBottomStartRadius: "lsl2245n",
                boxShadow: "dsne8k7f",
                height: "rgmg9uty",
                pointerEvents: "hzruof5a",
                position: "pmk7jnqg",
                start: "tkxwya3v",
                top: "bk00n993",
                transitionDuration: "f0ai4nzy",
                transitionProperty: "flx89l3n",
                transitionTimingFunction: "b4alr923",
                width: "b73ngqbp"
            },
            sliderActive: {
                transitionDuration: "s00z5mgp",
                transitionTimingFunction: "eloblzlw"
            },
            sliderActiveLeft: {
                transform: "ebryzltl"
            },
            sliderActiveLeftSmall: {
                transform: "lyjqmpqq"
            },
            sliderActiveRight: {
                transform: "duvxvzcv"
            },
            sliderActiveRightSmall: {
                transform: "kwf64sci"
            },
            sliderIconContainer: {
                height: "datstx6m",
                width: "k4urcfbm"
            },
            sliderSmall: {
                height: "jnigpg78",
                width: "odw8uiq3"
            },
            "switch": {
                backgroundColor: "pwoa4pd7",
                borderTop: "qu0x051f",
                borderEnd: "esr5mh6w",
                borderBottom: "e9989ue4",
                borderStart: "r7d6kgcz",
                borderTopStartRadius: "cmek9o9a",
                borderTopEndRadius: "p7f4f6cj",
                borderBottomEndRadius: "c8oo3d72",
                borderBottomStartRadius: "r15kkdkt",
                boxSizing: "rq0escxv",
                display: "q9uorilb",
                height: "mudddibn",
                opacity: "pedkr2u6",
                overflowX: "ni8dbmo4",
                overflowY: "stjgntxs",
                paddingTop: "jb3vyjys",
                paddingEnd: "rz4wbd8a",
                paddingBottom: "qt6c0cv9",
                paddingStart: "a8nywdso",
                position: "l9j0dhe7",
                transitionDuration: "f0ai4nzy",
                transitionProperty: "art1omkt",
                transitionTimingFunction: "b4alr923",
                width: "i8j84fko"
            },
            switchSmall: {
                borderTopStartRadius: "lit7pgxp",
                borderTopEndRadius: "o3c63hce",
                borderBottomEndRadius: "hqlzco19",
                borderBottomStartRadius: "lsl2245n",
                height: "rgmg9uty",
                width: "eim337gk"
            }
        };

    function a(a, b) {
        var d, e = a["aria-describedby"],
            f = a["aria-hidden"],
            g = a["aria-label"],
            k = a.disabled;
        k = k === void 0 ? !1 : k;
        var l = a.icon,
            m = a.onClick,
            n = a.onValueChange,
            o = a.size;
        o = o === void 0 ? "medium" : o;
        var p = a.tabIndex,
            q = a.testid;
        q = a.value;
        a = a.xstyle;
        o = o === "small";
        return h.jsxs(c("BaseSwitch.react"), {
            "aria-describedby": e,
            "aria-hidden": f,
            "aria-label": g,
            checked: q,
            disabled: k,
            onClick: m,
            onValueChange: n,
            ref: b,
            tabIndex: p,
            testid: void 0,
            xstyle: [j["switch"], o && j.switchSmall, k && j.disabled, a],
            children: [h.jsx(c("BaseView.react"), {
                xstyle: [j.background, q && j.backgroundActive]
            }), h.jsx(c("BaseView.react"), {
                xstyle: [j.slider, o && j.sliderSmall, q && j.sliderActive, q && (i ? [j.sliderActiveLeft, o && j.sliderActiveLeftSmall] : [j.sliderActiveRight, o && j.sliderActiveRightSmall])],
                children: l == null ? null : h.jsx(c("BaseRow.react"), {
                    align: "center",
                    expanding: !0,
                    verticalAlign: "center",
                    xstyle: j.sliderIconContainer,
                    children: h.jsx(c("BaseRowItem.react"), {
                        expanding: !0,
                        verticalAlign: "center",
                        xstyle: j.alignIcon,
                        children: l
                    })
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("useFadeEffect", ["clearTimeout", "react", "setTimeout", "useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useReducer,
        j = b.useRef,
        k = 1e3;

    function l(a, b) {
        switch (b.type) {
            case "start":
                return {
                    isTransitioning: !0,
                    shouldBeVisible: b.shouldBeVisible
                };
            case "finish":
                return {
                    isTransitioning: !1,
                    shouldBeVisible: a.shouldBeVisible
                };
            default:
                return a
        }
    }

    function a(a) {
        var b = j(null),
            d = i(l, {
                isTransitioning: !1,
                shouldBeVisible: !1
            }),
            e = d[0],
            f = e.isTransitioning;
        e = e.shouldBeVisible;
        var g = d[1],
            m = j(null),
            n = j(null);
        c("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED")(function() {
            return function() {
                m.current != null && c("clearTimeout")(m.current), n.current != null && window.cancelAnimationFrame(n.current)
            }
        }, []);
        var o = h(function() {
                g({
                    type: "finish"
                }), m.current != null && c("clearTimeout")(m.current), m.current = null
            }, []),
            p = h(function(a) {
                n.current != null && window.cancelAnimationFrame(n.current), n.current = window.requestAnimationFrame(function() {
                    g({
                        shouldBeVisible: a,
                        type: "start"
                    }), n.current = null, m.current != null && c("clearTimeout")(m.current), m.current = c("setTimeout")(o, k)
                })
            }, [o]),
            q = j(!1);
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            q.current !== a && (!a || b.current != null) && p(a), q.current = a
        }, [a, p]);
        d = h(function(a) {
            var c = b.current;
            b.current = a;
            a != null ? (a.addEventListener != null && (a.addEventListener("transitionend", o), a.addEventListener("webkitTransitionEnd", o)), q.current === !0 && p(!0)) : c != null && c.removeEventListener != null && (c.removeEventListener("transitionend", o), c.removeEventListener("webkitTransitionEnd", o))
        }, [o, p]);
        f = f || e || a;
        return [f, e, d]
    }
    g["default"] = a
}), 98);
__d("CometSwitch.react", ["BaseStyledSwitch.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            toggle: {
                marginTop: "kvgmc6g5",
                marginEnd: "cxmmr5t8",
                marginBottom: "enqfppq2",
                marginStart: "hcukyx3x"
            }
        };

    function a(a, b) {
        var d, e = a.children,
            f = a.disabled;
        f = f === void 0 ? !1 : f;
        var g = a.size;
        g = g === void 0 ? "medium" : g;
        var j = a.testid;
        j = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "disabled", "size", "testid", "xstyle"]);
        return h.jsx(c("BaseStyledSwitch.react"), babelHelpers["extends"]({}, a, {
            "aria-label": e,
            disabled: f,
            ref: b,
            size: g,
            testid: void 0,
            xstyle: [i.toggle, j]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("CometScrollableArea.react", ["BaseScrollableArea.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a, b) {
        var d = a.horizontal;
        d = d === void 0 ? !0 : d;
        var e = a.id,
            f = a.vertical;
        f = f === void 0 ? !0 : f;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["horizontal", "id", "vertical"]);
        return h.jsx(c("BaseScrollableArea.react"), babelHelpers["extends"]({}, a, {
            horizontal: d,
            id: e,
            ref: b,
            vertical: f
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("MWChatEncryptedBackupsUpsellChatTabVisibilityContext", ["emptyFunction", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = d("react");
    b = a.createContext;
    var i = a.useContext,
        j = a.useMemo,
        k = a.useState,
        l = b({
            enabledState: [!1, c("emptyFunction")],
            openState: [!1, c("emptyFunction")]
        });
    e = function(a) {
        a = a.children;
        var b = k(!1),
            c = k(!1);
        return h.jsx(l.Provider, {
            value: j(function() {
                return {
                    enabledState: c,
                    openState: b
                }
            }, [b, c]),
            children: a
        })
    };
    f = function() {
        var a = i(l);
        a = a.enabledState;
        return a
    };
    d = function() {
        var a = i(l);
        a = a.openState;
        return a
    };
    g.MWChatEncryptedBackupsUpsellChatTabVisibilityContextProvider = e;
    g.useMWChatEncryptedBackupsUpsellChatTabEnabled = f;
    g.useMWChatEncryptedBackupsUpsellChatTabOpen = d
}), 98);
__d("MutationObserver", [], (function(a, b, c, d, e, f) {
    b = function() {
        function a(a) {}
        var b = a.prototype;
        b.observe = function(a, b) {};
        b.disconnect = function() {};
        b.takeRecords = function() {
            return []
        };
        return a
    }();
    e = (d = (c = a.MutationObserver) != null ? c : a.WebKitMutationObserver) != null ? d : b;
    c = e;
    f["default"] = c
}), 66);
__d("GraphqlSubscriptionsDebugEventFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1801");
    c = b("FalcoLoggerInternal").create("graphql_subscriptions_debug_event", a);
    e.exports = c
}), null);
__d("GraphqlSubscriptionsVolumeEventFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1802");
    c = b("FalcoLoggerInternal").create("graphql_subscriptions_volume_event", a);
    e.exports = c
}), null);
__d("relay-runtime/util/handlePotentialSnapshotErrors", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        for (var c = c, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var f;
            if (d) {
                if (e >= c.length) break;
                f = c[e++]
            } else {
                e = c.next();
                if (e.done) break;
                f = e.value
            }
            f = f;
            a.requiredFieldLogger({
                kind: "relay_resolver.error",
                owner: f.field.owner,
                fieldPath: f.field.path,
                error: f.error
            })
        }
        if (b != null) switch (b.action) {
            case "THROW":
                f = b.field;
                e = f.path;
                d = f.owner;
                a.requiredFieldLogger({
                    kind: "missing_field.throw",
                    owner: d,
                    fieldPath: e
                });
                throw new Error("Relay: Missing @required value at path '" + e + "' in '" + d + "'.");
            case "LOG":
                b.fields.forEach(function(b) {
                    var c = b.path;
                    b = b.owner;
                    a.requiredFieldLogger({
                        kind: "missing_field.log",
                        owner: b,
                        fieldPath: c
                    })
                });
                break;
            default:
                b.action
        }
    }
    e.exports = a
}), null);