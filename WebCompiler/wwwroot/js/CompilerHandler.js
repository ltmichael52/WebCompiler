!function (e) {
    var t = {};
    function o(n) {
        if (t[n])
            return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, o),
            i.l = !0,
            i.exports
    }
    o.m = e,
        o.c = t,
        o.d = function (e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        o.t = function (e, t) {
            if (1 & t && (e = o(e)),
                8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (o.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                for (var i in e)
                    o.d(n, i, function (t) {
                        return e[t]
                    }
                        .bind(null, i));
            return n
        }
        ,
        o.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            }
                : function () {
                    return e
                }
                ;
            return o.d(t, "a", t),
                t
        }
        ,
        o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        o.p = "/public/build",
        o(o.s = 0)
}([function (e, t, o) {
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
    }
        , i = n.PYTHON
        , a = {
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
        }
        , r = '<span class="run-text">\n                                &nbsp;Run&nbsp;\n                              </span>\n'
        , s = "mobile--tabbed-compiler"
        , l = "mobile--tabbed--terminal"
        , c = (window.matchMedia("(max-width: 767px)").matches,
            (e = 36) => {
                let t = (new Date).getTime()
                    , o = performance && performance.now && 1e3 * performance.now() || 0;
                return "xxxxxxxxx-xxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (e) {
                    let n = 16 * Math.random();
                    return t > 0 ? (n = (t + n) % 16 | 0,
                        t = Math.floor(t / 16)) : (n = (o + n) % 16 | 0,
                            o = Math.floor(o / 16)),
                        ("x" === e ? n : 3 & n | 8).toString(16)
                }
                )).slice(0, e)
            }
        )
        , d = (e, t, o) => {
            let n = "";
            if (o) {
                const e = new Date;
                e.setTime(e.getTime() + 24 * o * 60 * 60 * 1e3),
                    n = "; expires=" + e.toUTCString()
            }
            document.cookie = e + "=" + (t || "") + n + "; path=/"
        }
        , m = e => {
            const t = e + "="
                , o = document.cookie.split(";");
            for (let e = 0; e < o.length; e++) {
                let n = o[e];
                for (; " " === n.charAt(0);)
                    n = n.substring(1, n.length);
                if (0 === n.indexOf(t))
                    return n.substring(t.length, n.length)
            }
            return null
        }
        , p = window.location.href
        , h = e => {
            let t, o;
            return t = `https://${e}.repl-web.programiz.com`,
                o = (e => {
                    for (var t = "", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = o.length, i = 0; i < e; i++)
                        t += o.charAt(Math.floor(Math.random() * n));
                    return t
                }
                )(10),
                `${t}/?sessionId=${o}&lang=${e}`
        }
    const y = ace.edit("editor")
        , S = ace.edit("terminal");
    let T = $("#root").data("lang") || i
        , L = a[T];
    y.setTheme("ace/theme/textmate"),
        y.getSession().setMode("ace/mode/" + L),
        S.setTheme("ace/theme/textmate"),
        S.getSession().setMode("ace/mode/programiz_terminal");
    const M = () => {
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
        }),
            y.container.style.lineHeight = "22px",
            S.setOptions({
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
            }),
            S.container.style.lineHeight = "22px"
    }
        ;
    M()
    y.commands.addCommand({
        name: "executeCode",
        bindKey: {
            win: "Ctrl-Enter",
            mac: "Cmd-Enter|Ctrl-Enter"
        },
        exec: function () {
            return $(".run").is(":disabled") || E(),
                !1
        }
    }),
        S.commands.addCommand({
            name: "backspace",
            bindKey: {
                win: "Backspace",
                mac: "Backspace|Delete"
            },
            exec: function () {
                return !(S.getValue().length > V.length)
            }
        }),
        S.commands.addCommand({
            name: "executeCode",
            bindKey: {
                win: "Ctrl-Enter",
                mac: "Cmd-Enter|Ctrl-Enter"
            },
            exec: function () {
                return $(".run").is(":disabled") || E(),
                    !1
            }
        }),
        window.innerWidth < 1e3 && (y.renderer.$cursorLayer.isBlinking = !1,
            S.renderer.$cursorLayer.isBlinking = !1);
    let I = null
        , V = T == n.PYTHON ? "> " : "$ "
        , z = "";
    function O(e) {
        I = io(e, {
            transports: ["websocket"]
        });
        const t = () => {
            $(".mobile-run-button #loader").replaceWith(r),
                $(".desktop-run-button #loader").replaceWith(r),
                $(".mobile-top-bar-run-button").html('<img\n      src="https://cdn.playground-v2.programiz.com/assets/icons/play.svg" alt="run-icon"\n    />'),
                $(".desktop-run-button").attr("disabled", !1),
                $(".desktop-run-button").css({
                    cursor: "pointer"
                })
        }
            ;
        I.on("output", ({ output: e }) => {
            t(),
                e = e.split(">>>").join(">"),
                z.length > 0 && (e.startsWith(z) ? (e = e.slice(z.length),
                    z = "") : z.startsWith(e) ? (z = z.slice(e.length),
                        e = "") : e.startsWith("> ") && e.replace("> ", "").startsWith(z) && (e = e.slice(z.length + 2).trimLeft()));
            const o = S.getValue() + e;
            S.setValue(o, 1),
                V = S.getValue(),
                S.focus()
        }
        ),
            I.on("disconnect", e => {
                if (console.log("Disconnected: " + e),
                    (!/iPad|iPhone|iPod/.test(navigator.userAgent) || window.MSStream) && ("ping timeout" === e || "transport close" === e)) {
                    const e = S.getValue() + "\n=== Session Ended. Please Run the code again ===";
                    S.setValue(e, 1),
                        I.disconnect()
                }
                t()
            }
            ),
            I.on("connect", (function () {
                S.setValue(V, 1),
                    Object.values(n).includes(T) || alert(`This language is not supported, initializing ${i} instead`)
            }
            ))
    }
    S.commands.addCommand({
        name: "newLine",
        bindKey: {
            win: "Enter",
            mac: "Enter"
        },
        exec: () => (z = S.getValue().slice(V.length),
            I.emit("evaluate", {
                code: z
            }),
            !0)
    });
    const A = () => {
        "" === y.getValue().trim() ? ($(".share-button-mob").attr("disabled", !0).attr("title", "Write code to enable sharing."),
            $(".share-button").attr("disabled", !0).attr("title", "Write code to enable sharing.")) : ($(".share-button-mob").attr("disabled", !1).attr("title", "Share code"),
                $(".share-button").attr("disabled", !1).attr("title", "Share code"))
    }
        ;
    y.on("change", A),
        A(),
        $(".spinner").hide(),
        $(".wrapper").css({
            display: "block"
        }),
        $(".mobile-nav-drawer").addClass("show");
    const E = () => {
        let e = !0;
        I && I.disconnect(),
            V = "",
            z = "",
            j(),
            $(".desktop-run-button").attr("disabled", !0),
            $(".desktop-run-button").css({
                cursor: "not-allowed"
            }),
            S.setValue("");
        const t = y.getValue()
            , o = h(T);
        try {
            (async ({ browserId: e, code: t, sessionId: o, language: n }) => {
                try {
                    const i = "https://compiler-api.programiz.com" + "/api/v1/code"
                        , a = navigator.userAgent;
                    let r = m(e);
                    r || (r = c(),
                        d(e, r, 365));
                    const s = {
                        user_id: r,
                        session_id: o,
                        code: t,
                        user_agent: a,
                        language: n
                    };
                    (await fetch(i, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(s)
                    })).json()
                } catch (e) { }
            }
            )({
                browserId: "browser_id",
                code: t,
                sessionId: k,
                language: T
            })
        } catch (e) { }
        o && (O(o),
            I.on("connect", () => {
                e && (I.emit("run", {
                    code: t
                }),
                    e = !1)
            }
            ))
    }
        
    
    const j = () => {
        $("span.run-text").replaceWith('<svg id="loader" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <circle cx="12" cy="12" r="10" stroke="white" stroke-opacity="0.6" stroke-width="4"/>\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0V4C7.58172 4 4 7.58172 4 12C4 12.3387 4.02104 12.6724 4.06189 13H0.0410728C0.0138702 12.6703 0 12.3368 0 12Z" fill="white"/>\n                      </svg>\n'),
            $(".mobile-top-bar-run-button").html('<svg id="mobile-top-bar-run-button-loader" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <circle cx="12" cy="12" r="10" stroke="white" stroke-opacity="0.6" stroke-width="4"/>\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0V4C7.58172 4 4 7.58172 4 12C4 12.3387 4.02104 12.6724 4.06189 13H0.0410728C0.0138702 12.6703 0 12.3368 0 12Z" fill="white"/>\n                      </svg>\n')
    }
        ;
    $(".desktop-run-button").click(() => {
        E()
    }
    ),
        $(".desktop-clear-button").click(() => {
            (() => {
                const e = T === n.PYTHON ? "> " : "";
                S.setValue(e, 1),
                    V = e,
                    z = "",
                    S.focus()
            }
            )()
        }
        ),
        $(".burger-menu-btn").click(e => {
            e.preventDefault(),
                W(!0)
        }
        ),
        $(".close-nav-btn").click(e => {
            e.preventDefault(),
                W(!1)
        }
        ),
        $(".notification").click(() => {
            C()
        }
        ),
        $(".share-button, .share-button-mob").click(async e => {
            e.preventDefault(),
                $(".share-link-generating-modal .modal-content").remove("hidden"),
                $(".share-link-modal .modal-content").remove("hidden"),
                $(".share-link-generating-modal").show(),
                setTimeout(() => {
                    v({
                        code: y.getValue(),
                        language: T
                    })
                }
                    , 300)
        }
        ),
        $(".share-code-copy-btn").click(() => {
            (() => {
                const e = document.querySelector(".share-code-value");
                navigator.clipboard.writeText(e.value).then(() => {
                    $(".share-code-copy-btn").css("display", "none"),
                        $(".code-copied-success").css("display", "flex")
                }
                ).catch(() => { }
                )
            }
            )()
        }
        ),
        $(".modal-content").click(e => {
            e.stopPropagation()
        }
        ),
        $(".close-modal").click(() => {
            f(),
                $(".share-link-modal .modal-content").addClass("hidden"),
                $(".share-link-modal .modal-backdrop-share").addClass("hidden"),
                x && clearTimeout(x),
                x = setTimeout(() => {
                    $(".share-link-modal .modal-content").removeClass("hidden"),
                        $(".share-link-modal .modal-backdrop-share").removeClass("hidden"),
                        $(".share-link-generating-modal").hide(),
                        $(".share-link-modal").hide()
                }
                    , 300)
        }
        );
    const R = e => {
        e === s && ($(".shell-pill").removeClass("active"),
            $(".compiler-pill").addClass("active"),
            $(".terminal-wrapper").hide(),
            $(".editor-wrapper").show(),
            y.focus(),
            y.navigateLineEnd()),
            e === l && ($(".shell-pill").addClass("active"),
                $(".compiler-pill").removeClass("active"),
                $(".terminal-wrapper").show(),
                $(".editor-wrapper").hide(),
                S.focus())
    }
        ;
    function D(e = !0) {
        if (e)
            return y.setTheme("ace/theme/twilight"),
                S.setTheme("ace/theme/twilight"),
                $("#logo").attr("src", "https://cdn.playground-v2.programiz.com/assets/logos/logo-inverted.svg"),
                $("#nav-logo").attr("src", "https://cdn.playground-v2.programiz.com/assets/logos/logo-inverted.svg"),
                $(".container").addClass("dark-mode"),
                void $("#toggle-dark-mode-desktop").prop("title", "Toggle light mode");
        y.setTheme("ace/theme/textmate"),
            S.setTheme("ace/theme/textmate"),
            $(".container").removeClass("dark-mode"),
            $("#logo").attr("src", "https://cdn.playground-v2.programiz.com/assets/logos/logo.svg"),
            $("#nav-logo").attr("src", "https://cdn.playground-v2.programiz.com/assets/logos/logo.svg"),
            $("#toggle-dark-mode-desktop").prop("title", "Toggle dark mode")
    }
    window.matchMedia("(min-width: 768px)").addEventListener("change", e => {
        e.matches ? ($(".shell-pill").removeClass("active"),
            $(".compiler-pill").removeClass("active"),
            $(".terminal-wrapper").show(),
            $(".editor-wrapper").show(),
            y.focus(),
            y.navigateLineEnd()) : ($(".shell-pill").removeClass("active"),
                $(".compiler-pill").addClass("active"),
                $(".terminal-wrapper").hide(),
                $(".editor-wrapper").show(),
                y.focus(),
                y.navigateLineEnd())
    }
    ),
        setTimeout(() => {
            B()
        }
            , 3e3)
}
]);
