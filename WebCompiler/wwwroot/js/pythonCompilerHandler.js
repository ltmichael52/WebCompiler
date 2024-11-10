! function(e) {
    var t = {};

    function o(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }
    o.m = e, o.c = t, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) o.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/public/build", o(o.s = 0)
}([function(e, t, o) {
    "use strict";
    o.r(t);
    const n = {
            C: "c",
            CPP: "cpp",
            PYTHON: "python",
            JAVA: "java",
            JAVASCRIPT: "javascript",
            CSHARP: "csharp",
            GOLANG: "golang",
            RUST: "rust",
            R: "r",
            PHP: "php",
            SWIFT: "swift"
        },
        i = n.PYTHON,
        a = {
            [n.C]: "c_cpp",
            [n.CPP]: "c_cpp",
            [n.PYTHON]: "python",
            [n.JAVA]: "java",
            [n.JAVASCRIPT]: "javascript",
            [n.CSHARP]: "csharp",
            [n.GOLANG]: "golang",
            [n.RUST]: "rust",
            [n.R]: "r",
            [n.PHP]: "php",
            [n.SWIFT]: "swift"
        },
        r = '<span class="run-text">\n                                &nbsp;Run&nbsp;\n                              </span>\n',
        s = "compiler";
    let h;
    const u = (e = "Link copied to the clipboard", t = "success") => {
            const o = document.getElementById("notification"),
                n = $(".check-icon-wrapper img");
            $(".notification-message").text(e), $(".notification").css("display", "flex"), "error" === t ? (o.classList.add("notification-error"), $(".check-icon-wrapper").addClass("check-icon-wrapper--error"), n.attr("src", "https://cdn.playground-v2.programiz.com/assets/icons/error.svg").on("load", (function() {
                o.classList.add("notification-show"), o.classList.remove("notification-close"), h && clearTimeout(h), h = setTimeout(() => {
                    C()
                }, 3e3)
            }))) : (o.classList.remove("notification-error"), $(".check-icon-wrapper").removeClass("check-icon-wrapper--error"), n.attr("src", "https://cdn.playground-v2.programiz.com/assets/icons/check.svg"), o.classList.add("notification-show"), o.classList.remove("notification-close"), h && clearTimeout(h), h = setTimeout(() => {
                C()
            }, 3e3))
        },
        C = () => {
            const e = document.getElementById("notification");
            e.classList.add("notification-close"), e.classList.remove("notification-show"), h && (clearTimeout(h), h = null), h = setTimeout(() => {
                $(".notification").css("display", "none")
            }, 300)
        };
    let w = !1;
    const v = ({ code: e, language: t }) => {
        w = !1;
        const o = new Promise(e => {
            $(".progress").css("width", "0%").animate({
                width: "100%"
            }, 900, (function() {
                e()
            }))
        });
    };
    let f = () => {
        w = !0, $(".progress").stop(!0, !0).css("width", "0%"), $(".share-link-generating-modal").hide()
    };
    let b = m("browser_id"),
        k = c();
    let x;
    b || d("browser_id", c(), 365), ace.define("ace/mode/programiz_terminal_highlight_rules", (function(e, t) {
        var o = e("ace/lib/oop"),
            n = e("ace/mode/text_highlight_rules").TextHighlightRules,
            i = function() {
                this.$rules = {
                    start: [{
                        token: ["comment.line.colons.dosbatch"],
                        regex: "(?:^|\\b)gcc($|\\s.*$)",
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: "^(/tmp).*$",
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: /^g\+\+.*$/,
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: /^cat.*$/,
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: /^>/
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: "^(java -cp).*$",
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: "^(csc|mono).*$",
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: "^(node).*$",
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: "^(swift).*$",
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: "^(Rscript).*$",
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: "^(go run).*$",
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: "^(php).*$",
                        caseInsensitive: !0
                    }]
                }
            };
        o.inherits(i, n), t.ProgramizTerminalHighlightRules = i
    })), ace.define("ace/mode/programiz_terminal", (function(e, t) {
        var o = e("ace/lib/oop"),
            n = e("ace/mode/text").Mode,
            i = e("ace/mode/programiz_terminal_highlight_rules").ProgramizTerminalHighlightRules,
            a = function() {
                this.HighlightRules = i
            };
        o.inherits(a, n),
            function() {}.call(a.prototype), t.Mode = a
    }));
    const y = ace.edit("editor"),
        S = ace.edit("terminal");
    let L = $("#root").data("lang") || i,
        T = a[L];
    y.setTheme("ace/theme/textmate"), y.getSession().setMode("ace/mode/" + T), S.setTheme("ace/theme/textmate"), S.getSession().setMode("ace/mode/programiz_terminal");
    const P = () => {
        let e = 0;
        (navigator && navigator.platform ? ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) : navigator.userAgent && -1 == navigator.userAgent.toLowerCase().indexOf("iphone")) && (e = 216);
        const t = ($(".wrapper").height() - 48 - 48 - e) / 22 - 3;
        y.setOptions({
            fontFamily: "Droid Sans Mono",
            fontSize: "14px",
            showGutter: !0,
            highlightActiveLine: !0,
            wrap: !0,
            useWorker: !1,
            overwrite: !1,
            tooltipFollowsMouse: !1,
            maxLines: t,
            dragEnabled: !1,
            showPrintMargin: !1
        }), y.container.style.lineHeight = "22px", S.setOptions({
            fontFamily: "Droid Sans Mono",
            fontSize: "14px",
            showGutter: !1,
            highlightActiveLine: !1,
            behavioursEnabled: !1,
            wrapBehavioursEnabled: !1,
            wrap: !0,
            useWorker: !0,
            overwrite: !1,
            maxLines: t,
            dragEnabled: !1,
            cursorStyle: "slim",
            showPrintMargin: !1,
            displayIndentGuides: !1
        }), S.container.style.lineHeight = "22px"
    };
    P(), $(window).resize(P);
    let M = !1;
    const H = new URLSearchParams(window.location.search).get("ref");
    let _ = "";
    $("#notification").hasClass("share-error") && (u("The link you entered is not valid.", "error"), $("#notification").removeClass("share-error"));
    try {
        const e = localStorage.getItem("playground"),
            t = JSON.parse(e);
        t && H && t[H] && t[H].code && (_ = t[H].code), _ && y.setValue(_, 1)
    } catch {
        localStorage.removeItem("playground")
    }
    y.commands.addCommand({
        name: "executeCode",
        bindKey: {
            win: "Ctrl-Enter",
            mac: "Cmd-Enter|Ctrl-Enter"
        },
        exec: function() {
            return $(".run").is(":disabled") || E(), !1
        }
    }), S.commands.addCommand({
        name: "backspace",
        bindKey: {
            win: "Backspace",
            mac: "Backspace|Delete"
        },
        exec: function() {
            return !(S.getValue().length > V.length)
        }
    }), S.commands.addCommand({
        name: "executeCode",
        bindKey: {
            win: "Ctrl-Enter",
            mac: "Cmd-Enter|Ctrl-Enter"
        },
        exec: function() {
            return $(".run").is(":disabled") || E(), !1
        }
    }), window.innerWidth < 1e3 && (y.renderer.$cursorLayer.isBlinking = !1, S.renderer.$cursorLayer.isBlinking = !1);
    let I = null,
        V = L == n.PYTHON ? "> " : "$ ",
        z = "";

    function O(e) {
        I = io(e, {
            transports: ["websocket"]
        });
        const t = () => {
            $(".mobile-run-button #loader").replaceWith(r), $(".desktop-run-button #loader").replaceWith(r), $(".mobile-top-bar-run-button").html('<img\n      src="https://cdn.playground-v2.programiz.com/assets/icons/play.svg" alt="run-icon"\n    />'), $(".desktop-run-button").attr("disabled", !1), $(".desktop-run-button").css({
                cursor: "pointer"
            })
        };
        I.on("output", ({
            output: e
        }) => {
            t(), e = e.split(">>>").join(">"), z.length > 0 && (e.startsWith(z) ? (e = e.slice(z.length), z = "") : z.startsWith(e) ? (z = z.slice(e.length), e = "") : e.startsWith("> ") && e.replace("> ", "").startsWith(z) && (e = e.slice(z.length + 2).trimLeft()));
            const o = S.getValue() + e;
            S.setValue(o, 1), V = S.getValue(), S.focus()
        }), I.on("disconnect", e => {
            if (console.log("Disconnected: " + e), (!/iPad|iPhone|iPod/.test(navigator.userAgent) || window.MSStream) && ("ping timeout" === e || "transport close" === e)) {
                const e = S.getValue() + "\n=== Session Ended. Please Run the code again ===";
                S.setValue(e, 1), I.disconnect()
            }
            t()
        }), I.on("connect", (function() {
            S.setValue(V, 1), Object.values(n).includes(L) || alert(`This language is not supported, initializing ${i} instead`)
        }))
    }
    S.commands.addCommand({
        name: "newLine",
        bindKey: {
            win: "Enter",
            mac: "Enter"
        },
        exec: () => (z = S.getValue().slice(V.length), I.emit("evaluate", {
            code: z
        }), !0)
    });
    const A = () => {
        "" === y.getValue().trim() ? ($(".share-button-mob").attr("disabled", !0).attr("title", "Write code to enable sharing."), $(".share-button").attr("disabled", !0).attr("title", "Write code to enable sharing.")) : ($(".share-button-mob").attr("disabled", !1).attr("title", "Share code"), $(".share-button").attr("disabled", !1).attr("title", "Share code"))
    };
    y.on("change", A), A(), $(".spinner").hide(), $(".wrapper").css({
        display: "block"
    }), $(".mobile-nav-drawer").addClass("show");
    const E = () => {
        let e = !0;
        I && I.disconnect(), V = "", z = "", j(), $(".desktop-run-button").attr("disabled", !0), $(".desktop-run-button").css({
            cursor: "not-allowed"
        }), S.setValue("");
        const t = y.getValue(),
            o = g(L);
        try {
            (async ({
                code: t,
                sessionId: o,
                language: n
            }) => {
                try {
                    const i = "/api/pythoncompiler/compile",
                        a = navigator.userAgent;

                    const s = {
                        code: t,
                        session_id: o,
                        user_agent: a,
                        language: n
                    };

                    const response = await fetch(i, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(s)
                    });

                    const result = await response.json();
                    S.setValue(result.output, 1);
                } catch (e) {
                    console.error("Code failed: ", e);
                }
            })({
                browserId: "browser_id",
                code: t,
                sessionId: k,
                language: L
            })
        } catch (e) {}
        o && (O(o), I.on("connect", () => {
            e && (I.emit("run", {
                code: t
            }), e = !1)
        }))
    };
    Mousetrap.bind(["command+enter", "ctrl+enter"], (function() {
        return $(".run").is(":disabled") || E(), !1
    })), $("#toggle-expanded-mode-desktop").click(e => {
        e.preventDefault(), $(".spinner").show(), $(".wrapper").css({
                display: "none"
            }), $(".mobile-nav-drawer").removeClass("show"),
            function(e = !0) {
                e ? ($(".container").addClass("maximized"), $("#toggle-expanded-mode-desktop").prop("title", "Exit Fullscreen"), M = !0) : ($(".container").removeClass("maximized"), $("#toggle-expanded-mode-desktop").prop("title", "Enter Fullscreen"), M = !1)
            }(!M), setTimeout(() => {
                $(".spinner").hide(), $(".wrapper").css({
                    display: "block"
                }), $(".mobile-nav-drawer").addClass("show")
            }, 0)
    }), $(".desktop-run-button").click(() => {
        E()
    }), $(".desktop-clear-button").click(() => {
        (() => {
            const e = L === n.PYTHON ? "> " : "";
            S.setValue(e, 1), V = e, z = "", S.focus()
        })()
    }), $(".notification").click(() => {
        C()
    }), $(".share-button, .share-button-mob").click(async e => {
        e.preventDefault(), $(".share-link-generating-modal .modal-content").remove("hidden"), $(".share-link-modal .modal-content").remove("hidden"), $(".share-link-generating-modal").show(), setTimeout(() => {
            v({
                code: y.getValue(),
                language: L
            })
        }, 300)
    }), $(".share-code-copy-btn").click(() => {
        (() => {
            const e = document.querySelector(".share-code-value");
            navigator.clipboard.writeText(e.value).then(() => {
                $(".share-code-copy-btn").css("display", "none"), $(".code-copied-success").css("display", "flex")
            }).catch(() => {})
        })()
    }), $(".modal-content").click(e => {
        e.stopPropagation()
    }), $(".close-modal").click(() => {
        f(), $(".share-link-modal .modal-content").addClass("hidden"), $(".share-link-modal .modal-backdrop-share").addClass("hidden"), x && clearTimeout(x), x = setTimeout(() => {
            $(".share-link-modal .modal-content").removeClass("hidden"), $(".share-link-modal .modal-backdrop-share").removeClass("hidden"), $(".share-link-generating-modal").hide(), $(".share-link-modal").hide()
        }, 300)
    });
    const R = e => {
        e === s && ($(".shell-pill").removeClass("active"), $(".compiler-pill").addClass("active"), $(".terminal-wrapper").hide(), $(".editor-wrapper").show(), y.focus(), y.navigateLineEnd()), e === l && ($(".shell-pill").addClass("active"), $(".compiler-pill").removeClass("active"), $(".terminal-wrapper").show(), $(".editor-wrapper").hide(), S.focus())
    };

    function N(e = !0) {
        if (e) return y.setTheme("ace/theme/twilight"), S.setTheme("ace/theme/twilight"), $("#logo").attr("src", "https://cdn.playground-v2.programiz.com/assets/logos/logo-inverted.svg"), $("#nav-logo").attr("src", "https://cdn.playground-v2.programiz.com/assets/logos/logo-inverted.svg"), $(".container").addClass("dark-mode"), void $("#toggle-dark-mode-desktop").prop("title", "Toggle light mode");
        y.setTheme("ace/theme/textmate"), S.setTheme("ace/theme/textmate"), $(".container").removeClass("dark-mode"), $("#logo").attr("src", "https://cdn.playground-v2.programiz.com/assets/logos/logo.svg"), $("#nav-logo").attr("src", "https://cdn.playground-v2.programiz.com/assets/logos/logo.svg"), $("#toggle-dark-mode-desktop").prop("title", "Toggle dark mode")
    }

    function W() {
        const e = localStorage.getItem("playground");
        if (!e) return L === n.PYTHON && (localStorage.setItem("playground", JSON.stringify({
            darkMode: {
                status: !0,
                updatedAt: Date.now()
            }
        })), !0);
        const t = JSON.parse(e);
        return !!(t && t.darkMode && t.darkMode.status)
    }

    function B(e = !0) {
        e ? $(".mobile-nav-drawer").addClass("visible") : $(".mobile-nav-drawer").removeClass("visible")
    }
    $(".shell-pill").click(() => {
        R(s)
    }), $(".compiler-pill").click(() => {
        R(s)
    }), $("#back-button").click(() => {
        window.history.back()
    }), $("#toggle-dark-mode-mobile, #toggle-dark-mode-desktop").click(() => {
        const e = JSON.parse(localStorage.getItem("playground")) || {},
            t = W() ? 0 : 1;
        let o = {
            status: t,
            updatedAt: Date.now()
        };
        const n = Object.assign(e, {
            darkMode: o
        });
        N(t), localStorage.setItem("playground", JSON.stringify(n))
    }), W() && N(!0), $("img.svg").each((function() {
        var e = $(this),
            t = e.attr("id"),
            o = e.attr("class"),
            n = e.attr("src");
        $.get(n, (function(n) {
            var i = $(n).find("svg");
            void 0 !== t && (i = i.attr("id", t)), void 0 !== o && (i = i.attr("class", o + " replaced-svg")), i = i.removeAttr("xmlns:a"), e.replaceWith(i)
        }), "xml")
    })), $(".desktop-save-button").on("click", () => {
        L === n.PYTHON && window.confirm("Redirecting you to our new Python IDE that supports saving, sharing, working with files & installing packages.") && window.open("https://programiz.pro/ide/python?utm_source=compiler-nav-save&utm_medium=referral&utm_campaign=programiz", "_blank"), L === n.C && window.confirm("Redirecting you to our new C IDE that supports saving, sharing and working with files.") && window.open("https://programiz.pro/ide/c?utm_source=compiler-nav-save&utm_medium=referral&utm_campaign=programiz", "_blank")
    });
    window.matchMedia("(min-width: 768px)").addEventListener("change", e => {
        e.matches ? ($(".shell-pill").removeClass("active"), $(".compiler-pill").removeClass("active"), $(".terminal-wrapper").show(), $(".editor-wrapper").show(), y.focus(), y.navigateLineEnd()) : ($(".shell-pill").removeClass("active"), $(".compiler-pill").addClass("active"), $(".terminal-wrapper").hide(), $(".editor-wrapper").show(), y.focus(), y.navigateLineEnd())
    })
}]);