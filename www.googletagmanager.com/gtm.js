// Copyright 2012 Google Inc. All rights reserved.

(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');

(function() {

    var data = {
        "resource": {
            "version": "30",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-36675496-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-36675496-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__d",
                "vtp_elementSelector": "#search-api-page-search-form-simplest-programming-tutorials-f #edit-keys-2",
                "vtp_attributeName": "value",
                "vtp_selectorType": "CSS"
            }, {
                "function": "__d",
                "vtp_elementSelector": ".programming-examples form select",
                "vtp_attributeName": "value",
                "vtp_selectorType": "CSS"
            }, {
                "function": "__d",
                "vtp_elementSelector": ".built-in-functions form input#edit-title",
                "vtp_attributeName": "value",
                "vtp_selectorType": "CSS"
            }, {
                "function": "__j",
                "vtp_name": "document.title"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return document.getElementById(\"edit-keys-2\").value})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=window.innerWidth;return a=900\u003Ea?\"mobile\":\"desktop\"})();"]
            }, {
                "function": "__vis",
                "vtp_elementSelector": ".recommended-links ul",
                "vtp_outputMethod": "BOOLEAN",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 2], 8, 16], ".children;return 0\u003Ca.length?a[0].src:null})();"]
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__cid"
            }, {
                "function": "__hid"
            }],
            "tags": [{
                "function": "__googtag",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_tagId": "G-YJM03XN8Q2",
                "vtp_configSettingsTable": ["list", ["map", "parameter", "send_page_view", "parameterValue", "true"]],
                "tag_id": 85
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 87
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "toc_trigger",
                "vtp_measurementIdOverride": "G-YJM03XN8Q2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 91
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "page_url", "parameterValue", ["macro", 3]],
                    ["map", "parameter", "click_text", "parameterValue", ["macro", 4]]
                ],
                "vtp_eventName": "toc_link",
                "vtp_measurementIdOverride": "G-YJM03XN8Q2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 92
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "nav_trigger_text", "parameterValue", ["macro", 4]]],
                "vtp_eventName": "desktop_nav_trigger",
                "vtp_measurementIdOverride": "G-YJM03XN8Q2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 96
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "mobile",
                "vtp_measurementIdOverride": "G-YJM03XN8Q2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 98
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "click_element", "parameterValue", ["macro", 2]],
                    ["map", "parameter", "click_text", "parameterValue", ["macro", 4]],
                    ["map", "parameter", "page_url", "parameterValue", ["macro", 3]]
                ],
                "vtp_eventName": "nav_click_desktop",
                "vtp_measurementIdOverride": "G-YJM03XN8Q2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 106
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "click_element", "parameterValue", ["macro", 2]],
                    ["map", "parameter", "click_text", "parameterValue", ["macro", 4]],
                    ["map", "parameter", "page_url", "parameterValue", ["macro", 3]]
                ],
                "vtp_eventName": "nav_mobile_click",
                "vtp_measurementIdOverride": "G-YJM03XN8Q2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 108
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "previous_next_click",
                "vtp_measurementIdOverride": "G-YJM03XN8Q2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 110
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "previous_next_visibility",
                "vtp_measurementIdOverride": "G-YJM03XN8Q2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 112
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "related_bottom_links",
                "vtp_measurementIdOverride": "G-YJM03XN8Q2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 114
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "click_element", "parameterValue", ["macro", 2]]],
                "vtp_eventName": "sidebar_link_click",
                "vtp_measurementIdOverride": "G-YJM03XN8Q2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 116
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "click_text", "parameterValue", ["macro", 4]]],
                "vtp_eventName": "get_app_link_click",
                "vtp_measurementIdOverride": "G-YJM03XN8Q2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 118
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "programiz_logo_click",
                "vtp_measurementIdOverride": "G-YJM03XN8Q2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 119
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "click_element", "parameterValue", ["macro", 2]]],
                "vtp_eventName": "copy_code",
                "vtp_measurementIdOverride": "G-YJM03XN8Q2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 122
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "related_topic_link",
                "vtp_measurementIdOverride": "G-YJM03XN8Q2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 124
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "compiler_desktop_app_link_click",
                "vtp_measurementIdOverride": "G-YJM03XN8Q2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 128
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "page_url", "parameterValue", ["macro", 3]]],
                "vtp_eventName": "run_code_click",
                "vtp_measurementIdOverride": "G-YJM03XN8Q2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 130
            }, {
                "function": "__cl",
                "tag_id": 133
            }, {
                "function": "__cl",
                "tag_id": 134
            }, {
                "function": "__cl",
                "tag_id": 135
            }, {
                "function": "__cl",
                "tag_id": 136
            }, {
                "function": "__cl",
                "tag_id": 137
            }, {
                "function": "__cl",
                "tag_id": 138
            }, {
                "function": "__cl",
                "tag_id": 139
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": false,
                "vtp_elementSelector": ".pagination-area",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "75",
                "vtp_uniqueTriggerId": "7144609_111",
                "tag_id": 140
            }, {
                "function": "__cl",
                "tag_id": 141
            }, {
                "function": "__cl",
                "tag_id": 142
            }, {
                "function": "__cl",
                "tag_id": 143
            }, {
                "function": "__cl",
                "tag_id": 144
            }, {
                "function": "__cl",
                "tag_id": 145
            }, {
                "function": "__cl",
                "tag_id": 146
            }, {
                "function": "__cl",
                "tag_id": 147
            }, {
                "function": "__cl",
                "tag_id": 148
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,b,f,g,c,d){a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);c.async=1;c.src=\"https:\/\/www.clarity.ms\/tag\/\"+g+\"?ref\\x3dgtm2\";d=e.getElementsByTagName(f)[0];d.parentNode.insertBefore(c,d)})(window,document,\"clarity\",\"script\",\"kl8gh6lk26\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 132
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_css",
                "arg0": ["macro", 2],
                "arg1": ".toc-trigger .btn--toc, .toc-trigger svg"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.click"
            }, {
                "function": "_css",
                "arg0": ["macro", 2],
                "arg1": ".tutorial-toc__links a"
            }, {
                "function": "_css",
                "arg0": ["macro", 2],
                "arg1": ".navigation__node, .navigation__node .navigation__node__label, .navigation__node .navigation__node__label svg"
            }, {
                "function": "_css",
                "arg0": ["macro", 2],
                "arg1": ".main-nav__menu-btn, .main-nav__menu-btn svg"
            }, {
                "function": "_css",
                "arg0": ["macro", 2],
                "arg1": ".sub-menu--pc .sub-menu__contents a, .sub-menu--pc .sub-menu__contents a svg, .sub-menu--pc .sub-menu__contents a span"
            }, {
                "function": "_css",
                "arg0": ["macro", 2],
                "arg1": ".sub-menu--sp a, .sub-menu--sp a svg, .sub-menu--sp a span"
            }, {
                "function": "_css",
                "arg0": ["macro", 2],
                "arg1": ".sub-menu--sp .sub-menu__tab__body--explore a"
            }, {
                "function": "_css",
                "arg0": ["macro", 2],
                "arg1": ".pagination-area a div, .pagination-area a svg"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.elementVisibility"
            }, {
                "function": "_re",
                "arg0": ["macro", 5],
                "arg1": "(^$|((^|,)7144609_111($|,)))"
            }, {
                "function": "_css",
                "arg0": ["macro", 2],
                "arg1": ".above-bottom-recommended-articles a, .above-bottom-recommended-articles a div, .above-bottom-recommended-articles a div p"
            }, {
                "function": "_css",
                "arg0": ["macro", 2],
                "arg1": ".left-bar .topmenu a, .left-bar .related-examples-list a"
            }, {
                "function": "_css",
                "arg0": ["macro", 2],
                "arg1": "a.get-app-link, a.get-app-link p"
            }, {
                "function": "_css",
                "arg0": ["macro", 2],
                "arg1": ".main-nav .brand img"
            }, {
                "function": "_css",
                "arg0": ["macro", 2],
                "arg1": ".copy-code-button"
            }, {
                "function": "_css",
                "arg0": ["macro", 2],
                "arg1": ".left-bar .related-topic-list a"
            }, {
                "function": "_css",
                "arg0": ["macro", 2],
                "arg1": "a"
            }, {
                "function": "_css",
                "arg0": ["macro", 2],
                "arg1": ".run-code-button"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 1, 34, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
                ],
                [
                    ["if", 1, 2],
                    ["add", 2]
                ],
                [
                    ["if", 2, 3],
                    ["add", 3]
                ],
                [
                    ["if", 2, 4],
                    ["add", 4]
                ],
                [
                    ["if", 2, 5],
                    ["add", 5]
                ],
                [
                    ["if", 2, 6],
                    ["add", 6]
                ],
                [
                    ["if", 2, 7],
                    ["unless", 8],
                    ["add", 7]
                ],
                [
                    ["if", 2, 9],
                    ["add", 8]
                ],
                [
                    ["if", 10, 11],
                    ["add", 9]
                ],
                [
                    ["if", 2, 12],
                    ["add", 10]
                ],
                [
                    ["if", 2, 13],
                    ["add", 11]
                ],
                [
                    ["if", 2, 14],
                    ["add", 12]
                ],
                [
                    ["if", 2, 15],
                    ["add", 13]
                ],
                [
                    ["if", 2, 16],
                    ["add", 14]
                ],
                [
                    ["if", 2, 17],
                    ["add", 15]
                ],
                [
                    ["if", 2, 18],
                    ["add", 16]
                ],
                [
                    ["if", 2, 19],
                    ["add", 17]
                ]
            ]
        },
        "runtime": [
            [50, "__cid", [46, "a"],
                [36, [17, [13, [41, "$0"],
                    [3, "$0", ["require", "getContainerVersion"]],
                    ["$0"]
                ], "containerId"]]
            ],
            [50, "__cl", [46, "a"],
                [52, "b", ["require", "internal.enableAutoEventOnClick"]],
                ["b"],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__e", [46, "a"],
                [36, [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getEventData"]],
                    ["$0", "event"]
                ]]
            ],
            [50, "__evl", [46, "a"],
                [52, "b", ["require", "internal.enableAutoEventOnElementVisibility"]],
                [52, "c", ["require", "makeNumber"]],
                [52, "d", [8, "selectorType", [17, [15, "a"], "selectorType"], "id", [17, [15, "a"], "elementId"], "selector", [17, [15, "a"], "elementSelector"], "useDomChangeListener", [28, [28, [17, [15, "a"], "useDomChangeListener"]]], "onScreenRatio", ["c", [17, [15, "a"], "onScreenRatio"]], "firingFrequency", [17, [15, "a"], "firingFrequency"]]],
                [22, [17, [15, "a"], "useOnScreenDuration"],
                    [46, [43, [15, "d"], "onScreenDuration", ["c", [17, [15, "a"], "onScreenDuration"]]]]
                ],
                ["b", [15, "d"],
                    [17, [15, "a"], "uniqueTriggerId"]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__googtag", [46, "a"],
                [50, "l", [46, "u", "v"],
                    [66, "w", [2, [15, "b"], "keys", [7, [15, "v"]]],
                        [46, [43, [15, "u"],
                            [15, "w"],
                            [16, [15, "v"],
                                [15, "w"]
                            ]
                        ]]
                    ]
                ],
                [50, "m", [46],
                    [36, [7, [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
                        [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"]
                    ]]
                ],
                [50, "n", [46, "u"],
                    [52, "v", ["m"]],
                    [65, "w", [15, "v"],
                        [46, [53, [52, "x", [16, [15, "u"],
                                [15, "w"]
                            ]],
                            [22, [15, "x"],
                                [46, [36, [15, "x"]]]
                            ]
                        ]]
                    ],
                    [36, [44]]
                ],
                [52, "b", ["require", "Object"]],
                [52, "c", ["require", "createArgumentsQueue"]],
                [52, "d", [15, "__module_gtag"]],
                [52, "e", ["require", "internal.gtagConfig"]],
                [52, "f", ["require", "getType"]],
                [52, "g", ["require", "internal.loadGoogleTag"]],
                [52, "h", ["require", "logToConsole"]],
                [52, "i", ["require", "makeNumber"]],
                [52, "j", ["require", "makeString"]],
                [52, "k", ["require", "makeTableMap"]],
                [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
                [22, [30, [21, ["f", [15, "o"]], "string"],
                        [24, [2, [15, "o"], "indexOf", [7, "-"]], 0]
                    ],
                    [46, ["h", [0, "Invalid Measurement ID for the GA4 Configuration tag: ", [15, "o"]]],
                        [2, [15, "a"], "gtmOnFailure", [7]],
                        [36]
                    ]
                ],
                [52, "p", [30, [17, [15, "a"], "configSettingsVariable"],
                    [8]
                ]],
                [52, "q", [30, ["k", [30, [17, [15, "a"], "configSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]],
                ["l", [15, "p"],
                    [15, "q"]
                ],
                [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"],
                    [8]
                ]],
                [52, "s", [30, ["k", [30, [17, [15, "a"], "eventSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]],
                ["l", [15, "r"],
                    [15, "s"]
                ],
                [52, "t", [15, "p"]],
                ["l", [15, "t"],
                    [15, "r"]
                ],
                [22, [30, [2, [15, "t"], "hasOwnProperty", [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]]],
                        [17, [15, "a"], "userProperties"]
                    ],
                    [46, [53, [52, "u", [30, [16, [15, "t"],
                                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]
                            ],
                            [8]
                        ]],
                        ["l", [15, "u"],
                            [30, ["k", [30, [17, [15, "a"], "userProperties"],
                                    [7]
                                ], "name", "value"],
                                [8]
                            ]
                        ],
                        [43, [15, "t"],
                            [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                            [15, "u"]
                        ]
                    ]]
                ],
                [2, [15, "d"], "convertParameters", [7, [15, "t"],
                    [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
                    [51, "", [7, "u"],
                        [36, [39, [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]], false, [28, [28, [15, "u"]]]]]
                    ]
                ]],
                [2, [15, "d"], "convertParameters", [7, [15, "t"],
                    [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
                    [51, "", [7, "u"],
                        [36, ["i", [15, "u"]]]
                    ]
                ]],
                ["g", [15, "o"],
                    [8, "firstPartyUrl", ["n", [15, "t"]]]
                ],
                ["e", [15, "o"],
                    [15, "t"],
                    [8, "noTargetGroup", true]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__hid", [46, "a"],
                [36, [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getHtmlId"]],
                    ["$0"]
                ]]
            ],
            [50, "__j", [46, "a"],
                [52, "b", ["require", "internal.copyKeyFromWindow"]],
                [36, ["b", [17, [15, "a"], "name"]]]
            ],
            [50, "__jsm", [46, "a"],
                [52, "b", ["require", "internal.executeJavascriptString"]],
                [22, [20, [17, [15, "a"], "javascript"],
                        [44]
                    ],
                    [46, [36]]
                ],
                [36, ["b", [17, [15, "a"], "javascript"]]]
            ],
            [52, "__module_gtag", [13, [41, "$0"],
                [3, "$0", [51, "", [7],
                    [50, "a", [46],
                        [50, "f", [46, "g", "h", "i"],
                            [65, "j", [15, "h"],
                                [46, [22, [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                                    [46, [43, [15, "g"],
                                        [15, "j"],
                                        ["i", [16, [15, "g"],
                                            [15, "j"]
                                        ]]
                                    ]]
                                ]]
                            ]
                        ],
                        [52, "b", ["require", "Object"]],
                        [52, "c", [2, [15, "b"], "freeze", [7, [8, "EP_FIRST_PARTY_COLLECTION", "first_party_collection", "EP_SERVER_CONTAINER_URL", "server_container_url", "EP_TRANSPORT_URL", "transport_url", "EP_USER_PROPERTIES", "user_properties"]]]],
                        [52, "d", [2, [15, "b"], "freeze", [7, [7, "allow_ad_personalization_signals", "allow_direct_google_requests", "allow_google_signals", "cookie_update", "ignore_referrer", "update", "first_party_collection", "send_page_view"]]]],
                        [52, "e", [2, [15, "b"], "freeze", [7, [7, "cookie_expires", "event_timeout", "session_duration", "session_engaged_time", "engagement_time_msec"]]]],
                        [36, [8, "SCHEMA", [15, "c"], "GOLD_BOOLEAN_FIELDS", [15, "d"], "GOLD_NUMERIC_FIELDS", [15, "e"], "convertParameters", [15, "f"]]]
                    ],
                    [36, ["a"]]
                ]],
                ["$0"]
            ]]

        ],
        "entities": {
            "__cid": {
                "2": true,
                "4": true,
                "3": true
            },
            "__e": {
                "2": true,
                "4": true
            },
            "__googtag": {
                "1": 10
            },
            "__j": {
                "2": true
            }


        },
        "blob": {
            "1": "30"
        },
        "permissions": {
            "__cid": {
                "read_container_data": {}
            },
            "__cl": {
                "detect_click_events": {}
            },
            "__e": {
                "read_event_data": {
                    "eventDataAccess": "specific",
                    "keyPatterns": ["event"]
                }
            },
            "__evl": {
                "detect_element_visibility_events": {}
            },
            "__googtag": {
                "logging": {
                    "environments": "debug"
                },
                "access_globals": {
                    "keys": [{
                        "key": "gtag",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "dataLayer",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "configure_google_tags": {
                    "allowedTagIds": "any"
                },
                "load_google_tags": {
                    "allowedTagIds": "any",
                    "allowFirstPartyUrls": true,
                    "allowedFirstPartyUrls": "any"
                }
            },
            "__hid": {},
            "__j": {
                "unsafe_access_globals": {},
                "access_globals": {}
            },
            "__jsm": {
                "unsafe_run_arbitrary_javascript": {}
            }


        }



        ,
        "security_groups": {
            "customScripts": [
                "__jsm"

            ],
            "google": [
                "__cid",
                "__cl",
                "__e",
                "__evl",
                "__googtag",
                "__hid",
                "__j"

            ]


        }



    };

    var productSettings = {
        "AW-948616926": {
            "preAutoPii": true
        }
    };




    var ba, ca = function(a) {
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
        da = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ea = function(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return d
            }
            throw Error("Cannot find global object");
        },
        fa = ea(this),
        ha = function(a, b) {
            if (b) a: {
                for (var c = fa, d = a.split("."), e = 0; e < d.length - 1; e++) {
                    var f = d[e];
                    if (!(f in c)) break a;
                    c = c[f]
                }
                var g = d[d.length - 1],
                    k = c[g],
                    m = b(k);m != k && m != null && da(c, g, {
                    configurable: !0,
                    writable: !0,
                    value: m
                })
            }
        };
    ha("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            da(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    var la = function(a) {
            return ja(a, a)
        },
        ja = function(a, b) {
            a.raw = b;
            Object.freeze && (Object.freeze(a), Object.freeze(b));
            return a
        },
        h = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: ca(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ma = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        oa = function(a) {
            return a instanceof Array ? a : ma(h(a))
        },
        pa = typeof Object.assign == "function" ? Object.assign :
        function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        };
    ha("Object.assign", function(a) {
        return a || pa
    });
    var qa = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ra;
    if (typeof Object.setPrototypeOf == "function") ra = Object.setPrototypeOf;
    else {
        var sa;
        a: {
            var ta = {
                    a: !0
                },
                ua = {};
            try {
                ua.__proto__ = ta;
                sa = ua.a;
                break a
            } catch (a) {}
            sa = !1
        }
        ra = sa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var va = ra,
        wa = function(a, b) {
            a.prototype = qa(b.prototype);
            a.prototype.constructor = a;
            if (va) va(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Pn = b.prototype
        },
        ya = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var za = this || self;
    var Aa = function(a, b) {
        this.type = a;
        this.data = b
    };
    var Ba = function() {
        this.map = {};
        this.C = {}
    };
    ba = Ba.prototype;
    ba.get = function(a) {
        return this.map["dust." + a]
    };
    ba.set = function(a, b) {
        var c = "dust." + a;
        this.C.hasOwnProperty(c) || (this.map[c] = b)
    };
    ba.Xh = function(a, b) {
        this.set(a, b);
        this.C["dust." + a] = !0
    };
    ba.has = function(a) {
        return this.map.hasOwnProperty("dust." + a)
    };
    ba.remove = function(a) {
        var b = "dust." + a;
        this.C.hasOwnProperty(b) || delete this.map[b]
    };
    var Ca = function() {};
    Ca.prototype.reset = function() {};
    var Da = function(a, b) {
        this.P = a;
        this.parent = b;
        this.j = this.C = void 0;
        this.K = !1;
        this.H = function(c, d, e) {
            return c.apply(d, e)
        };
        this.values = new Ba
    };
    Da.prototype.add = function(a, b) {
        Fa(this, a, b, !1)
    };
    var Fa = function(a, b, c, d) {
        a.K || (d ? a.values.Xh(b, c) : a.values.set(b, c))
    };
    Da.prototype.set = function(a, b) {
        this.K || (!this.values.has(a) && this.parent && this.parent.has(a) ? this.parent.set(a, b) : this.values.set(a, b))
    };
    Da.prototype.get = function(a) {
        return this.values.has(a) ? this.values.get(a) : this.parent ? this.parent.get(a) : void 0
    };
    Da.prototype.has = function(a) {
        return !!this.values.has(a) || !(!this.parent || !this.parent.has(a))
    };
    var Ga = function(a) {
        var b = new Da(a.P, a);
        a.C && (b.C = a.C);
        b.H = a.H;
        b.j = a.j;
        return b
    };
    Da.prototype.rd = function() {
        return this.P
    };
    Da.prototype.La = function() {
        this.K = !0
    };

    function Ha(a, b) {
        for (var c, d = h(b), e = d.next(); !e.done && !(c = Ia(a, e.value), c instanceof Aa); e = d.next());
        return c
    }

    function Ia(a, b) {
        try {
            var c = h(b),
                d = c.next().value,
                e = ma(c),
                f = a.get(String(d));
            if (!f || typeof f.invoke !== "function") throw Error("Attempting to execute non-function " + b[0] + ".");
            return f.invoke.apply(f, [a].concat(oa(e)))
        } catch (k) {
            var g = a.C;
            g && g(k, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw k;
        }
    };
    var Ja = function() {
        this.C = new Ca;
        this.j = new Da(this.C)
    };
    ba = Ja.prototype;
    ba.rd = function() {
        return this.C
    };
    ba.execute = function(a) {
        return this.Wh([a].concat(oa(ya.apply(1, arguments))))
    };
    ba.Wh = function() {
        for (var a, b = h(ya.apply(0, arguments)), c = b.next(); !c.done; c = b.next()) a = Ia(this.j, c.value);
        return a
    };
    ba.Ok = function(a) {
        var b = ya.apply(1, arguments),
            c = Ga(this.j);
        c.j = a;
        for (var d, e = h(b), f = e.next(); !f.done; f = e.next()) d = Ia(c, f.value);
        return d
    };
    ba.La = function() {
        this.j.La()
    };
    var Ka = function() {
        Ba.call(this);
        this.j = !1
    };
    wa(Ka, Ba);
    var La = function(a, b) {
        var c = [],
            d;
        for (d in a.map)
            if (a.map.hasOwnProperty(d)) switch (d = d.substring(5), b) {
                case 1:
                    c.push(d);
                    break;
                case 2:
                    c.push(a.get(d));
                    break;
                case 3:
                    c.push([d, a.get(d)])
            }
        return c
    };
    ba = Ka.prototype;
    ba.set = function(a, b) {
        this.j || Ba.prototype.set.call(this, a, b)
    };
    ba.Xh = function(a, b) {
        this.j || Ba.prototype.Xh.call(this, a, b)
    };
    ba.remove = function(a) {
        this.j || Ba.prototype.remove.call(this, a)
    };
    ba.Ja = function() {
        return La(this, 1)
    };
    ba.La = function() {
        this.j = !0
    };
    ba.Pk = function() {
        return this.j
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
    */
    var Ma = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Na = function(a) {
            if (a == null) return String(a);
            var b = Ma.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Pa = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Qa = function(a) {
            if (!a || Na(a) != "object" || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Pa(a, "constructor") && !Pa(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return b === void 0 ||
                Pa(a, b)
        },
        Ra = function(a, b) {
            var c = b || (Na(a) == "array" ? [] : {}),
                d;
            for (d in a)
                if (Pa(a, d)) {
                    var e = a[d];
                    Na(e) == "array" ? (Na(c[d]) != "array" && (c[d] = []), c[d] = Ra(e, c[d])) : Qa(e) ? (Qa(c[d]) || (c[d] = {}), c[d] = Ra(e, c[d])) : c[d] = e
                }
            return c
        };

    function Ta(a) {
        if (a == void 0 || Array.isArray(a) || Qa(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    }

    function Ua(a) {
        return typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0 || typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a)
    };
    var Va = function(a) {
        a = a === void 0 ? [] : a;
        Ka.call(this);
        this.values = [];
        for (var b in a) a.hasOwnProperty(b) && (Ua(b) ? this.values[Number(b)] = a[Number(b)] : Ka.prototype.set.call(this, b, a[b]))
    };
    wa(Va, Ka);
    ba = Va.prototype;
    ba.toString = function(a) {
        if (a && a.indexOf(this) >= 0) return "";
        for (var b = [], c = 0; c < this.values.length; c++) {
            var d = this.values[c];
            d === null || d === void 0 ? b.push("") : d instanceof Va ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d))
        }
        return b.join(",")
    };
    ba.set = function(a, b) {
        if (!Ka.prototype.Pk.call(this))
            if (a === "length") {
                if (!Ua(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.values.length = Number(b)
            } else Ua(a) ? this.values[Number(a)] = b : Ka.prototype.set.call(this, a, b)
    };
    ba.get = function(a) {
        return a === "length" ? this.length() : Ua(a) ? this.values[Number(a)] : Ka.prototype.get.call(this, a)
    };
    ba.length = function() {
        return this.values.length
    };
    ba.Ja = function() {
        for (var a = Ka.prototype.Ja.call(this), b = 0; b < this.values.length; b++) a.push(String(b));
        return a
    };
    ba.remove = function(a) {
        Ua(a) ? delete this.values[Number(a)] : Ka.prototype.remove.call(this, a)
    };
    ba.pop = function() {
        return this.values.pop()
    };
    ba.push = function() {
        return this.values.push.apply(this.values, Array.prototype.slice.call(arguments))
    };
    ba.shift = function() {
        return this.values.shift()
    };
    ba.splice = function(a, b) {
        return new Va(this.values.splice.apply(this.values, arguments))
    };
    ba.unshift = function() {
        return this.values.unshift.apply(this.values, Array.prototype.slice.call(arguments))
    };
    ba.has = function(a) {
        return Ua(a) && this.values.hasOwnProperty(a) || Ka.prototype.has.call(this, a)
    };
    ba.La = function() {
        Ka.prototype.La.call(this);
        Object.freeze(this.values)
    };

    function Wa(a) {
        for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
        return b
    };
    var Xa = function() {
        Ka.call(this)
    };
    wa(Xa, Ka);

    function Ya() {
        for (var a = Za, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function ab() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Za, bb;

    function cb(a) {
        Za = Za || ab();
        bb = bb || Ya();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | k >> 6,
                q = k & 63;
            e || (q = 64, d || (p = 64));
            b.push(Za[m], Za[n], Za[p], Za[q])
        }
        return b.join("")
    }

    function db(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = bb[n];
                if (p != null) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Za = Za || ab();
        bb = bb || Ya();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (k === 64 && e === -1) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            g !== 64 && (c += String.fromCharCode(f << 4 & 240 | g >> 2), k !== 64 && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };
    var eb = {};

    function fb(a, b) {
        eb[a] = eb[a] || [];
        eb[a][b] = !0
    }

    function gb(a) {
        var b = eb[a];
        if (!b || b.length === 0) return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++) e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
        d > 0 && c.push(String.fromCharCode(d));
        return cb(c.join("")).replace(/\.+$/, "")
    }

    function hb() {
        for (var a = [], b = eb.fdr || [], c = 0; c < b.length; c++) b[c] && a.push(c);
        return a.length > 0 ? a : void 0
    };
    var ib = [],
        jb = {};

    function kb(a) {
        return ib[a] === void 0 ? !1 : ib[a]
    };

    function lb() {}

    function mb(a) {
        return typeof a === "function"
    }

    function l(a) {
        return typeof a === "string"
    }

    function nb(a) {
        return typeof a === "number" && !isNaN(a)
    }

    function ob(a) {
        return Array.isArray(a) ? a : [a]
    }

    function pb(a, b) {
        if (a && Array.isArray(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function qb(a, b) {
        if (!nb(a) || !nb(b) || a > b) a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }

    function rb(a, b) {
        for (var c = new sb, d = 0; d < a.length; d++) c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e])) return !0;
        return !1
    }

    function z(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function tb(a) {
        return !!a && (Object.prototype.toString.call(a) === "[object Arguments]" || Object.prototype.hasOwnProperty.call(a, "callee"))
    }

    function ub(a) {
        return Math.round(Number(a)) || 0
    }

    function vb(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }

    function wb(a) {
        var b = [];
        if (Array.isArray(a))
            for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    }

    function xb(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }

    function yb() {
        return new Date(Date.now())
    }

    function zb() {
        return yb().getTime()
    }
    var sb = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    sb.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    sb.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    sb.prototype.contains = function(a) {
        return this.get(a) !== void 0
    };

    function Ab(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }

    function Bb(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }

    function Cb(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }

    function Db(a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    }

    function Eb(a, b) {
        return a.length >= b.length && a.substring(0, b.length) === b
    }

    function Fb(a, b) {
        return a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    }

    function Gb(a, b) {
        var c = C;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e])) return;
            d = d[a[e]];
            if (b.indexOf(d) >= 0) return
        }
        return d
    }

    function Hb(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
    var Ib = /^\w{1,9}$/;

    function Jb(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        z(a, function(d, e) {
            Ib.test(d) && e && c.push(d)
        });
        return c.join(b)
    }

    function Kb(a, b) {
        function c() {
            e && ++d === b && (e(), e = null, c.done = !0)
        }
        var d = 0,
            e = a;
        c.done = !1;
        return c
    }

    function Lb(a) {
        if (!a) return a;
        var b = a;
        if (kb(3)) try {
            b = decodeURIComponent(a)
        } catch (d) {}
        var c = b.split(",");
        return c.length === 2 && c[0] === c[1] ? c[0] : a
    };
    /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    var Mb = globalThis.trustedTypes,
        Nb;

    function Ob() {
        var a = null;
        if (!Mb) return a;
        try {
            var b = function(c) {
                return c
            };
            a = Mb.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {}
        return a
    }

    function Pb() {
        Nb === void 0 && (Nb = Ob());
        return Nb
    };
    var Qb = function(a) {
        this.j = a
    };
    Qb.prototype.toString = function() {
        return this.j + ""
    };

    function Rb(a) {
        var b = a,
            c = Pb();
        return new Qb(c ? c.createScriptURL(b) : b)
    }

    function Sb(a) {
        if (a instanceof Qb) return a.j;
        throw Error("");
    };
    var Tb = la([""]),
        Ub = ja(["\x00"], ["\\0"]),
        Vb = ja(["\n"], ["\\n"]),
        Wb = ja(["\x00"], ["\\u0000"]);

    function Xb(a) {
        return a.toString().indexOf("`") === -1
    }
    Xb(function(a) {
        return a(Tb)
    }) || Xb(function(a) {
        return a(Ub)
    }) || Xb(function(a) {
        return a(Vb)
    }) || Xb(function(a) {
        return a(Wb)
    });
    var Yb = function(a) {
        this.j = a
    };
    Yb.prototype.toString = function() {
        return this.j
    };
    var Zb = new Yb("about:invalid#zClosurez");
    var $b = function(a) {
        this.km = a
    };

    function ac(a) {
        return new $b(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var bc = [ac("data"), ac("http"), ac("https"), ac("mailto"), ac("ftp"), new $b(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function cc(a, b) {
        b = b === void 0 ? bc : b;
        if (a instanceof Yb) return a;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof $b && d.km(a)) return new Yb(a)
        }
    }

    function dc(a) {
        var b;
        b = b === void 0 ? bc : b;
        return cc(a, b) || Zb
    }
    var ec = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function fc(a) {
        var b;
        if (a instanceof Yb)
            if (a instanceof Yb) b = a.j;
            else throw Error("");
        else b = ec.test(a) ? a : void 0;
        return b
    };
    var hc = function() {
        this.j = gc[0].toLowerCase()
    };
    hc.prototype.toString = function() {
        return this.j
    };
    var ic = function(a) {
        this.j = a
    };
    ic.prototype.toString = function() {
        return this.j + ""
    };

    function jc(a, b) {
        var c = [new hc];
        if (c.length === 0) throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof hc) g = f.j;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return e.indexOf(f) !== 0
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    };

    function kc(a, b) {
        var c = fc(b);
        c !== void 0 && (a.action = c)
    };
    var lc = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
        "INPUT"
    ]);

    function mc(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a
    };
    var C = window,
        E = document,
        nc = navigator;

    function oc() {
        var a;
        try {
            a = nc.serviceWorker
        } catch (b) {
            return
        }
        return a
    }
    var pc = E.currentScript,
        qc = pc && pc.src;

    function rc(a, b) {
        var c = C[a];
        C[a] = c === void 0 ? b : c;
        return C[a]
    }

    function sc(a) {
        return (nc.userAgent || "").indexOf(a) !== -1
    }
    var tc = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        uc = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function vc(a, b, c) {
        b && z(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    function wc(a, b, c, d, e) {
        var f = E.createElement("script");
        vc(f, d, tc);
        f.type = "text/javascript";
        f.async = d && d.async === !1 ? !1 : !0;
        var g;
        g = Rb(mc(a));
        f.src = Sb(g);
        var k, m, n, p = (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) == null ? void 0 : n.call(m, "script[nonce]");
        (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", k);
        b && (f.onload = b);
        c && (f.onerror = c);
        if (e) e.appendChild(f);
        else {
            var q = E.getElementsByTagName("script")[0] || E.body || E.head;
            q.parentNode.insertBefore(f,
                q)
        }
        return f
    }

    function xc() {
        if (qc) {
            var a = qc.toLowerCase();
            if (a.indexOf("https://") === 0) return 2;
            if (a.indexOf("http://") === 0) return 3
        }
        return 1
    }

    function yc(a, b, c, d, e) {
        var f;
        f = f === void 0 ? !0 : f;
        var g = e,
            k = !1;
        g || (g = E.createElement("iframe"), k = !0);
        vc(g, c, uc);
        d && z(d, function(n, p) {
            g.dataset[n] = p
        });
        f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
        a !== void 0 && (g.src = a);
        if (k) {
            var m = E.body && E.body.lastChild || E.body || E.head;
            m.parentNode.insertBefore(g, m)
        }
        b && (g.onload = b);
        return g
    }
    var zc = function(a, b, c, d) {
        var e = new Image(1, 1);
        vc(e, d, {});
        e.onload = function() {
            e.onload = null;
            b && b()
        };
        e.onerror = function() {
            e.onerror = null;
            c && c()
        };
        e.src = a;
        return e
    };

    function Ac(a, b, c, d) {
        zc(a, b, c, d)
    }

    function Bc(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }

    function Cc(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }

    function F(a) {
        C.setTimeout(a, 0)
    }

    function Dc(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }

    function Ec(a) {
        function b(e) {
            e && e !== " " && (e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            e && e !== " " && (e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            e && (e = e.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return e
        }
        var c = b(a.innerText || a.textContent || "");
        if (kb(10)) {
            var d = b(a.textContent || "");
            fb("TAGGING", 26);
            d !== c && fb("TAGGING", 25)
        }
        return c
    }

    function Fc(a) {
        var b = E.createElement("div"),
            c = b,
            d, e = mc("A<div>" + a + "</div>"),
            f = Pb();
        d = new ic(f ? f.createHTML(e) : e);
        if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName)) throw Error("");
        var g;
        if (d instanceof ic) g = d.j;
        else throw Error("");
        c.innerHTML = g;
        b = b.lastChild;
        for (var k = []; b && b.firstChild;) k.push(b.removeChild(b.firstChild));
        return k
    }

    function Gc(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()]) return f;
            f = f.parentElement
        }
        return null
    }

    function Hc(a) {
        var b;
        try {
            b = nc.sendBeacon && nc.sendBeacon(a)
        } catch (c) {
            fb("TAGGING", 15)
        }
        b || zc(a)
    }

    function Ic(a, b) {
        try {
            return nc.sendBeacon(a, b)
        } catch (c) {
            fb("TAGGING", 15)
        }
        return !1
    }
    var Jc = {
        cache: "no-store",
        credentials: "include",
        keepalive: !0,
        method: "POST",
        mode: "no-cors",
        redirect: "follow"
    };

    function Kc(a, b, c) {
        if (Lc()) {
            var d = Object.assign({}, Jc);
            b && (d.body = b);
            c && (c.attributionReporting && (d.attributionReporting = c.attributionReporting), c.browsingTopics && (d.browsingTopics = c.browsingTopics));
            try {
                var e = C.fetch(a, d);
                e && e.catch(lb);
                return !0
            } catch (f) {}
        }
        if (c && c.noFallback) return !1;
        if (b) return Ic(a, b);
        Hc(a);
        return !0
    }

    function Lc() {
        return typeof C.fetch === "function"
    }

    function Mc(a, b) {
        var c = a[b];
        c && typeof c.animVal === "string" && (c = c.animVal);
        return c
    }

    function Nc() {
        var a = C.performance;
        if (a && mb(a.now)) return a.now()
    }

    function Oc() {
        return C.performance || void 0
    };

    function Pc(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function Qc(a, b) {
        return this.evaluate(a) === this.evaluate(b)
    }

    function Rc(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function Sc(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        return String(a).indexOf(String(b)) > -1
    }

    function Tc(a, b) {
        var c = String(this.evaluate(a)),
            d = String(this.evaluate(b));
        return c.substring(0, d.length) === d
    }

    function Uc(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        switch (a) {
            case "pageLocation":
                var c = C.location.href;
                b instanceof Xa && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                return c
        }
    };
    var Vc = function(a, b) {
        Ka.call(this);
        this.Sj = a;
        this.sh = b
    };
    wa(Vc, Ka);
    Vc.prototype.toString = function() {
        return this.Sj
    };
    Vc.prototype.getName = function() {
        return this.Sj
    };
    Vc.prototype.invoke = function(a) {
        return this.sh.apply(new Wc(this, a), Array.prototype.slice.call(arguments, 1))
    };
    Vc.prototype.hb = function(a) {
        try {
            return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (b) {}
    };
    var Wc = function(a, b) {
        this.sh = a;
        this.D = b
    };
    Wc.prototype.evaluate = function(a) {
        var b = this.D;
        return Array.isArray(a) ? Ia(b, a) : a
    };
    Wc.prototype.getName = function() {
        return this.sh.getName()
    };
    Wc.prototype.rd = function() {
        return this.D.rd()
    };
    var Xc = function() {
        this.map = new Map
    };
    Xc.prototype.set = function(a, b) {
        this.map.set(a, b)
    };
    Xc.prototype.get = function(a) {
        return this.map.get(a)
    };
    var Yc = function() {
        this.keys = [];
        this.values = []
    };
    Yc.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    };
    Yc.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (b > -1) return this.values[b]
    };

    function Zc() {
        try {
            return Map ? new Xc : new Yc
        } catch (a) {
            return new Yc
        }
    };
    var $c = function(a) {
        if (a instanceof $c) return a;
        if (Ta(a)) throw Error("Type of given value has an equivalent Pixie type.");
        this.value = a
    };
    $c.prototype.getValue = function() {
        return this.value
    };
    $c.prototype.toString = function() {
        return String(this.value)
    };
    var bd = function(a) {
        Ka.call(this);
        this.promise = a;
        this.set("then", ad(this));
        this.set("catch", ad(this, !0));
        this.set("finally", ad(this, !1, !0))
    };
    wa(bd, Xa);
    var ad = function(a, b, c) {
        b = b === void 0 ? !1 : b;
        c = c === void 0 ? !1 : c;
        return new Vc("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof Vc || (d = void 0);
            e instanceof Vc || (e = void 0);
            var f = Ga(this.D),
                g = function(m) {
                    return function(n) {
                        return c ? (m.invoke(f), a.promise) : m.invoke(f, n)
                    }
                },
                k = a.promise.then(d && g(d), e && g(e));
            return new bd(k)
        })
    };

    function I(a, b, c) {
        var d = Zc(),
            e = function(g, k) {
                for (var m = g.Ja(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]))
            },
            f = function(g) {
                var k = d.get(g);
                if (k) return k;
                if (g instanceof Va) {
                    var m = [];
                    d.set(g, m);
                    for (var n = g.Ja(), p = 0; p < n.length; p++) m[n[p]] = f(g.get(n[p]));
                    return m
                }
                if (g instanceof bd) return g.promise;
                if (g instanceof Xa) {
                    var q = {};
                    d.set(g, q);
                    e(g, q);
                    return q
                }
                if (g instanceof Vc) {
                    var r = function() {
                        for (var v = Array.prototype.slice.call(arguments, 0), u = 0; u < v.length; u++) v[u] = cd(v[u], b, c);
                        var w = new Da(b ? b.rd() : new Ca);
                        b && (w.j = b.j);
                        return f(g.invoke.apply(g, [w].concat(v)))
                    };
                    d.set(g, r);
                    e(g, r);
                    return r
                }
                var t = !1;
                switch (c) {
                    case 1:
                        t = !0;
                        break;
                    case 2:
                        t = !1;
                        break;
                    case 3:
                        t = !1;
                        break;
                    default:
                }
                if (g instanceof $c && t) return g.getValue();
                switch (typeof g) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                        return g;
                    case "object":
                        if (g === null) return null
                }
            };
        return f(a)
    }

    function cd(a, b, c) {
        var d = Zc(),
            e = function(g, k) {
                for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]))
            },
            f = function(g) {
                var k = d.get(g);
                if (k) return k;
                if (Array.isArray(g) || tb(g)) {
                    var m = new Va([]);
                    d.set(g, m);
                    for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
                    return m
                }
                if (Qa(g)) {
                    var p = new Xa;
                    d.set(g, p);
                    e(g, p);
                    return p
                }
                if (typeof g === "function") {
                    var q = new Vc("", function() {
                        for (var x = Array.prototype.slice.call(arguments, 0), y = 0; y < x.length; y++) x[y] = I(this.evaluate(x[y]), b, c);
                        return f((0, this.D.H)(g, g, x))
                    });
                    d.set(g,
                        q);
                    e(g, q);
                    return q
                }
                var u = typeof g;
                if (g === null || u === "string" || u === "number" || u === "boolean") return g;
                var w = !1;
                switch (c) {
                    case 1:
                        w = !0;
                        break;
                    case 2:
                        w = !1;
                        break;
                    default:
                }
                if (g !== void 0 && w) return new $c(g)
            };
        return f(a)
    };

    function dd() {
        var a = !1;
        return a
    };
    var ed = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a) {
            for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
            for (var d = 1; d < arguments.length; d++)
                if (arguments[d] instanceof Va)
                    for (var e = arguments[d], f = 0; f < e.length(); f++) b.push(e.get(f));
                else b.push(arguments[d]);
            return new Va(b)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
            return new Va(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.invoke(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = c === void 0 ? 0 : Number(c);
            e < 0 && (e = Math.max(d + e, 0));
            for (var f =
                    e; f < d; f++)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
            for (var f = e; f >= 0; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
            return new Va(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (c !== void 0) e = c;
            else {
                if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var k = f; k < d; k++) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (c !== void 0) e = c;
            else {
                if (d === 0) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var k = f; k >= 0; k--) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
            return e
        },
        reverse: function() {
            for (var a = Wa(this), b = a.length - 1, c = 0; b >= 0; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            b === void 0 && (b = 0);
            b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
            c = c === void 0 ?
                d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new Va(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Wa(this);
            b === void 0 ? c.sort() : c.sort(function(e, f) {
                return Number(b.invoke(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
            return this
        },
        splice: function(a, b, c) {
            return this.splice.apply(this,
                Array.prototype.splice.call(arguments, 1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var fd = function(a) {
        var b;
        b = Error.call(this, a);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack)
    };
    wa(fd, Error);
    var gd = {
            charAt: 1,
            concat: 1,
            indexOf: 1,
            lastIndexOf: 1,
            match: 1,
            replace: 1,
            search: 1,
            slice: 1,
            split: 1,
            substring: 1,
            toLowerCase: 1,
            toLocaleLowerCase: 1,
            toString: 1,
            toUpperCase: 1,
            toLocaleUpperCase: 1,
            trim: 1
        },
        hd = new Aa("break"),
        id = new Aa("continue");

    function jd(a, b) {
        return this.evaluate(a) + this.evaluate(b)
    }

    function kd(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function ld(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (!(c instanceof Va)) throw Error("Error: Non-List argument given to Apply instruction.");
        if (a === null || a === void 0) {
            var d = "TypeError: Can't read property " + b + " of " + a + ".";
            if (dd()) throw new fd(d);
            throw Error(d);
        }
        var e = typeof a === "number";
        if (typeof a === "boolean" || e) {
            if (b === "toString") {
                if (e && c.length()) {
                    var f = I(c.get(0));
                    try {
                        return a.toString(f)
                    } catch (y) {}
                }
                return a.toString()
            }
            var g = "TypeError: " + a + "." + b + " is not a function.";
            if (dd()) throw new fd(g);
            throw Error(g);
        }
        if (typeof a === "string") {
            if (gd.hasOwnProperty(b)) {
                var k = 2;
                k = 1;
                var m = I(c, void 0, k);
                return cd(a[b].apply(a, m), this.D)
            }
            var n = "TypeError: " + b + " is not a function";
            if (dd()) throw new fd(n);
            throw Error(n);
        }
        if (a instanceof Va) {
            if (a.has(b)) {
                var p = a.get(b);
                if (p instanceof Vc) {
                    var q = Wa(c);
                    q.unshift(this.D);
                    return p.invoke.apply(p, q)
                }
                var r =
                    "TypeError: " + b + " is not a function";
                if (dd()) throw new fd(r);
                throw Error(r);
            }
            if (ed.supportedMethods.indexOf(b) >= 0) {
                var t = Wa(c);
                t.unshift(this.D);
                return ed[b].apply(a, t)
            }
        }
        if (a instanceof Vc || a instanceof Xa) {
            if (a.has(b)) {
                var v = a.get(b);
                if (v instanceof Vc) {
                    var u = Wa(c);
                    u.unshift(this.D);
                    return v.invoke.apply(v, u)
                }
                var w = "TypeError: " + b + " is not a function";
                if (dd()) throw new fd(w);
                throw Error(w);
            }
            if (b === "toString") return a instanceof Vc ? a.getName() : a.toString();
            if (b === "hasOwnProperty") return a.has.apply(a,
                Wa(c))
        }
        if (a instanceof $c && b === "toString") return a.toString();
        var x = "TypeError: Object has no '" + b + "' property.";
        if (dd()) throw new fd(x);
        throw Error(x);
    }

    function md(a, b) {
        a = this.evaluate(a);
        if (typeof a !== "string") throw Error("Invalid key name given for assignment.");
        var c = this.D;
        if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
        var d = this.evaluate(b);
        c.set(a, d);
        return d
    }

    function nd() {
        var a = Ga(this.D),
            b = Ha(a, Array.prototype.slice.apply(arguments));
        if (b instanceof Aa) return b
    }

    function od() {
        return hd
    }

    function pd(a) {
        for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
            var d = this.evaluate(b[c]);
            if (d instanceof Aa) return d
        }
    }

    function qd() {
        for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
            var c = arguments[b];
            if (typeof c === "string") {
                var d = this.evaluate(arguments[b + 1]);
                Fa(a, c, d, !0)
            }
        }
    }

    function rd() {
        return id
    }

    function sd(a, b) {
        return new Aa(a, this.evaluate(b))
    }

    function vd(a, b) {
        var c = new Va;
        b = this.evaluate(b);
        for (var d = 0; d < b.length; d++) c.push(b[d]);
        var e = [51, a, c].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.D.add(a, this.evaluate(e))
    }

    function wd(a, b) {
        return this.evaluate(a) / this.evaluate(b)
    }

    function xd(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        var c = a instanceof $c,
            d = b instanceof $c;
        return c || d ? c && d ? a.getValue() === b.getValue() : !1 : a == b
    }

    function yd() {
        for (var a, b = 0; b < arguments.length; b++) a = this.evaluate(arguments[b]);
        return a
    }

    function zd(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = Ha(f, d);
            if (g instanceof Aa) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
        }
    }

    function Ad(a, b, c) {
        if (typeof b === "string") return zd(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof Xa || b instanceof Va || b instanceof Vc) {
            var d = b.Ja(),
                e = d.length;
            return zd(a, function() {
                return e
            }, function(f) {
                return d[f]
            }, c)
        }
    }

    function Bd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Ad(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }

    function Cd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Ad(function(e) {
            var f = Ga(d);
            Fa(f, a, e, !0);
            return f
        }, b, c)
    }

    function Dd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Ad(function(e) {
            var f = Ga(d);
            f.add(a, e);
            return f
        }, b, c)
    }

    function Ed(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Fd(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }

    function Gd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Fd(function(e) {
            var f = Ga(d);
            Fa(f, a, e, !0);
            return f
        }, b, c)
    }

    function Hd(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.D;
        return Fd(function(e) {
            var f = Ga(d);
            f.add(a, e);
            return f
        }, b, c)
    }

    function Fd(a, b, c) {
        if (typeof b === "string") return zd(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof Va) return zd(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        if (dd()) throw new fd("The value is not iterable.");
        throw new TypeError("The value is not iterable.");
    }

    function Id(a, b, c, d) {
        function e(p, q) {
            for (var r = 0; r < f.length(); r++) {
                var t = f.get(r);
                q.add(t, p.get(t))
            }
        }
        var f = this.evaluate(a);
        if (!(f instanceof Va)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.D;
        d = this.evaluate(d);
        var k = Ga(g);
        for (e(g, k); Ia(k, b);) {
            var m = Ha(k, d);
            if (m instanceof Aa) {
                if (m.type === "break") break;
                if (m.type === "return") return m
            }
            var n = Ga(g);
            e(k, n);
            Ia(n, c);
            k = n
        }
    }

    function Jd(a, b) {
        var c = this.D,
            d = this.evaluate(b);
        if (!(d instanceof Va)) throw Error("Error: non-List value given for Fn argument names.");
        var e = Array.prototype.slice.call(arguments, 2);
        return new Vc(a, function() {
            return function(f) {
                var g = Ga(c);
                g.j === void 0 && (g.j = this.D.j);
                for (var k = Array.prototype.slice.call(arguments, 0), m = 0; m < k.length; m++)
                    if (k[m] = this.evaluate(k[m]), k[m] instanceof Aa) return k[m];
                for (var n = d.get("length"), p = 0; p < n; p++) p < k.length ? g.add(d.get(p), k[p]) : g.add(d.get(p), void 0);
                g.add("arguments",
                    new Va(k));
                var q = Ha(g, e);
                if (q instanceof Aa) return q.type === "return" ? q.data : q
            }
        }())
    }

    function Kd(a) {
        a = this.evaluate(a);
        var b = this.D;
        if (Ld && !b.has(a)) throw new ReferenceError(a + " is not defined.");
        return b.get(a)
    }

    function Md(a, b) {
        var c;
        a = this.evaluate(a);
        b = this.evaluate(b);
        if (a === void 0 || a === null) {
            var d = "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
            if (dd()) throw new fd(d);
            throw Error(d);
        }
        if (a instanceof Xa || a instanceof Va || a instanceof Vc) c = a.get(b);
        else if (typeof a === "string") b === "length" ? c = a.length : Ua(b) && (c = a[b]);
        else if (a instanceof $c) return;
        return c
    }

    function Nd(a, b) {
        return this.evaluate(a) > this.evaluate(b)
    }

    function Od(a, b) {
        return this.evaluate(a) >= this.evaluate(b)
    }

    function Pd(a, b) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        a instanceof $c && (a = a.getValue());
        b instanceof $c && (b = b.getValue());
        return a === b
    }

    function Qd(a, b) {
        return !Pd.call(this, a, b)
    }

    function Rd(a, b, c) {
        var d = [];
        this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
        var e = Ha(this.D, d);
        if (e instanceof Aa) return e
    }
    var Ld = !1;

    function Sd(a, b) {
        return this.evaluate(a) < this.evaluate(b)
    }

    function Td(a, b) {
        return this.evaluate(a) <= this.evaluate(b)
    }

    function Ud() {
        for (var a = new Va, b = 0; b < arguments.length; b++) {
            var c = this.evaluate(arguments[b]);
            a.push(c)
        }
        return a
    }

    function Vd() {
        for (var a = new Xa, b = 0; b < arguments.length - 1; b += 2) {
            var c = this.evaluate(arguments[b]) + "",
                d = this.evaluate(arguments[b + 1]);
            a.set(c, d)
        }
        return a
    }

    function Wd(a, b) {
        return this.evaluate(a) % this.evaluate(b)
    }

    function Xd(a, b) {
        return this.evaluate(a) * this.evaluate(b)
    }

    function Yd(a) {
        return -this.evaluate(a)
    }

    function Zd(a) {
        return !this.evaluate(a)
    }

    function $d(a, b) {
        return !xd.call(this, a, b)
    }

    function ae() {
        return null
    }

    function be(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function ce(a, b) {
        var c = this.evaluate(a);
        this.evaluate(b);
        return c
    }

    function de(a) {
        return this.evaluate(a)
    }

    function ee() {
        return Array.prototype.slice.apply(arguments)
    }

    function fe(a) {
        return new Aa("return", this.evaluate(a))
    }

    function ge(a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (a === null || a === void 0) {
            var d = "TypeError: Can't set property " + b + " of " + a + ".";
            if (dd()) throw new fd(d);
            throw Error(d);
        }(a instanceof Vc || a instanceof Va || a instanceof Xa) && a.set(b, c);
        return c
    }

    function he(a, b) {
        return this.evaluate(a) - this.evaluate(b)
    }

    function ie(a, b, c) {
        a = this.evaluate(a);
        var d = this.evaluate(b),
            e = this.evaluate(c);
        if (!Array.isArray(d) || !Array.isArray(e)) throw Error("Error: Malformed switch instruction.");
        for (var f, g = !1, k = 0; k < d.length; k++)
            if (g || a === this.evaluate(d[k]))
                if (f = this.evaluate(e[k]), f instanceof Aa) {
                    var m = f.type;
                    if (m === "break") return;
                    if (m === "return" || m === "continue") return f
                } else g = !0;
        if (e.length === d.length + 1 && (f = this.evaluate(e[e.length - 1]), f instanceof Aa && (f.type === "return" || f.type === "continue"))) return f
    }

    function je(a, b, c) {
        return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
    }

    function ke(a) {
        a = this.evaluate(a);
        return a instanceof Vc ? "function" : typeof a
    }

    function le() {
        for (var a = this.D, b = 0; b < arguments.length; b++) {
            var c = arguments[b];
            typeof c !== "string" || a.add(c, void 0)
        }
    }

    function me(a, b, c, d) {
        var e = this.evaluate(d);
        if (this.evaluate(c)) {
            var f = Ha(this.D, e);
            if (f instanceof Aa) {
                if (f.type === "break") return;
                if (f.type === "return") return f
            }
        }
        for (; this.evaluate(a);) {
            var g = Ha(this.D, e);
            if (g instanceof Aa) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
            this.evaluate(b)
        }
    }

    function ne(a) {
        return ~Number(this.evaluate(a))
    }

    function oe(a, b) {
        return Number(this.evaluate(a)) << Number(this.evaluate(b))
    }

    function pe(a, b) {
        return Number(this.evaluate(a)) >> Number(this.evaluate(b))
    }

    function qe(a, b) {
        return Number(this.evaluate(a)) >>> Number(this.evaluate(b))
    }

    function re(a, b) {
        return Number(this.evaluate(a)) & Number(this.evaluate(b))
    }

    function se(a, b) {
        return Number(this.evaluate(a)) ^ Number(this.evaluate(b))
    }

    function te(a, b) {
        return Number(this.evaluate(a)) | Number(this.evaluate(b))
    }

    function ue() {}

    function ve(a, b, c, d, e) {
        var f = !0;
        try {
            var g = this.evaluate(c);
            if (g instanceof Aa) return g
        } catch (r) {
            if (!(r instanceof fd && a)) throw f = r instanceof fd, r;
            var k = Ga(this.D),
                m = new $c(r);
            k.add(b, m);
            var n = this.evaluate(d),
                p = Ha(k, n);
            if (p instanceof Aa) return p
        } finally {
            if (f && e !== void 0) {
                var q = this.evaluate(e);
                if (q instanceof Aa) return q
            }
        }
    };
    var xe = function() {
        this.j = new Ja;
        we(this)
    };
    xe.prototype.execute = function(a) {
        return this.j.Wh(a)
    };
    var we = function(a) {
        var b = function(c, d) {
            var e = new Vc(String(c), d);
            e.La();
            a.j.j.set(String(c), e)
        };
        b("map", Vd);
        b("and", Pc);
        b("contains", Sc);
        b("equals", Qc);
        b("or", Rc);
        b("startsWith", Tc);
        b("variable", Uc)
    };
    var ze = function() {
        this.C = !1;
        this.j = new Ja;
        ye(this);
        this.C = !0
    };
    ze.prototype.execute = function(a) {
        return Ae(this.j.Wh(a))
    };
    var Be = function(a, b, c) {
        return Ae(a.j.Ok(b, c))
    };
    ze.prototype.La = function() {
        this.j.La()
    };
    var ye = function(a) {
        var b = function(c, d) {
            var e = String(c),
                f = new Vc(e, d);
            f.La();
            a.j.j.set(e, f)
        };
        b(0, jd);
        b(1, kd);
        b(2, ld);
        b(3, md);
        b(56, re);
        b(57, oe);
        b(58, ne);
        b(59, te);
        b(60, pe);
        b(61, qe);
        b(62, se);
        b(53, nd);
        b(4, od);
        b(5, pd);
        b(52, qd);
        b(6, rd);
        b(49, sd);
        b(7, Ud);
        b(8, Vd);
        b(9, pd);
        b(50, vd);
        b(10, wd);
        b(12, xd);
        b(13, yd);
        b(51, Jd);
        b(47, Bd);
        b(54, Cd);
        b(55, Dd);
        b(63, Id);
        b(64, Ed);
        b(65, Gd);
        b(66, Hd);
        b(15, Kd);
        b(16, Md);
        b(17, Md);
        b(18, Nd);
        b(19, Od);
        b(20, Pd);
        b(21, Qd);
        b(22, Rd);
        b(23, Sd);
        b(24, Td);
        b(25, Wd);
        b(26, Xd);
        b(27, Yd);
        b(28, Zd);
        b(29,
            $d);
        b(45, ae);
        b(30, be);
        b(32, ce);
        b(33, ce);
        b(34, de);
        b(35, de);
        b(46, ee);
        b(36, fe);
        b(43, ge);
        b(37, he);
        b(38, ie);
        b(39, je);
        b(67, ve);
        b(40, ke);
        b(44, ue);
        b(41, le);
        b(42, me)
    };
    ze.prototype.rd = function() {
        return this.j.rd()
    };

    function Ae(a) {
        if (a instanceof Aa || a instanceof Vc || a instanceof Va || a instanceof Xa || a instanceof $c || a === null || a === void 0 || typeof a === "string" || typeof a === "number" || typeof a === "boolean") return a
    };
    var Ce = function(a) {
        this.message = a
    };

    function De(a) {
        var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a];
        return b === void 0 ? new Ce("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
    };

    function Ee(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    };
    var Fe = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Ge(a, b) {
        for (var c = "", d = !0; a > 7;) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = "" + De(e) + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = "" + De(a | b) + c
    };
    var He = function() {
        function a(b) {
            return {
                toString: function() {
                    return b
                }
            }
        }
        return {
            rk: a("consent"),
            ii: a("convert_case_to"),
            ji: a("convert_false_to"),
            ki: a("convert_null_to"),
            li: a("convert_true_to"),
            mi: a("convert_undefined_to"),
            nn: a("debug_mode_metadata"),
            la: a("function"),
            Wg: a("instance_name"),
            Sk: a("live_only"),
            Tk: a("malware_disabled"),
            METADATA: a("metadata"),
            Wk: a("original_activity_id"),
            wn: a("original_vendor_template_id"),
            vn: a("once_on_load"),
            Vk: a("once_per_event"),
            rj: a("once_per_load"),
            yn: a("priority_override"),
            zn: a("respected_consent_types"),
            zj: a("setup_tags"),
            we: a("tag_id"),
            Ej: a("teardown_tags")
        }
    }();
    var Je = function(a) {
            return Ie[a]
        },
        Le = function(a) {
            return Ke[a]
        },
        Ne = function(a) {
            return Me[a]
        },
        Oe = [],
        Me = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        Pe = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var Ve = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        Ke = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\v": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        };
    Oe[8] = function(a) {
        if (a == null) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Ve, Le) + "'"
        }
    };
    var cf = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Ie = {
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
    Oe[16] = function(a) {
        return a
    };
    var ef;
    var ff = [],
        gf = [],
        hf = [],
        jf = [],
        kf = [],
        lf = {},
        mf, nf;

    function of (a) {
        nf = nf || a
    }

    function pf(a) {}
    var qf, rf = [],
        sf = [];

    function tf(a, b) {
        var c = {};
        c[He.la] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }

    function uf(a, b, c) {
        try {
            return mf(vf(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    }

    function wf(a) {
        var b = a[He.la];
        if (!b) throw Error("Error: No function name given for function call.");
        return !!lf[b]
    }
    var vf = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = xf(a[e], b, c));
            return d
        },
        xf = function(a, b, c) {
            if (Array.isArray(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(xf(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = ff[f];
                        if (!g || b.isBlocked(g)) return;
                        c[f] = !0;
                        var k = String(g[He.Wg]);
                        try {
                            var m = vf(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = yf(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: k
                            });
                            qf && (d = qf.rl(d, m))
                        } catch (y) {
                            b.logMacroError && b.logMacroError(y, Number(f), k), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[xf(a[n], b, c)] = xf(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = xf(a[q], b, c);
                            nf && (p = p || nf.hm(r));
                            d.push(r)
                        }
                        return nf && p ? nf.vl(d) : d.join("");
                    case "escape":
                        d = xf(a[1], b, c);
                        if (nf && Array.isArray(a[1]) && a[1][0] === "macro" && nf.im(a)) return nf.Fm(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) Oe[a[t]] && (d = Oe[a[t]](d));
                        return d;
                    case "tag":
                        var v = a[1];
                        if (!jf[v]) throw Error("Unable to resolve tag reference " + v + ".");
                        return {
                            Kj: a[2],
                            index: v
                        };
                    case "zb":
                        var u = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        u[He.la] = a[1];
                        var w = uf(u, b, c),
                            x = !!a[4];
                        return x || w !== 2 ? x !== (w === 1) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        yf = function(a, b) {
            var c = a[He.la],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = lf[c],
                f = b && b.type === 2 && (d == null ? void 0 : d.reportMacroDiscrepancy) &&
                e && rf.indexOf(c) !== -1,
                g = {},
                k = {},
                m;
            for (m in a) a.hasOwnProperty(m) && Eb(m, "vtp_") && (e && (g[m] = a[m]), !e || f) && (k[m.substring(4)] = a[m]);
            e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
            if (b) {
                if (b.name == null) {
                    var n;
                    a: {
                        var p = b.type,
                            q = b.index;
                        if (q == null) n = "";
                        else {
                            var r;
                            switch (p) {
                                case 2:
                                    r = ff[q];
                                    break;
                                case 1:
                                    r = jf[q];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var t = r && r[He.Wg];
                            n = t ? String(t) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var v, u, w;
            if (f && sf.indexOf(c) === -1) {
                sf.push(c);
                var x = zb();
                v = e(g);
                var y = zb() - x,
                    A = zb();
                u = ef(c, k, b);
                w = y - (zb() - A)
            } else if (e && (v = e(g)), !e || f) u = ef(c, k, b);
            f && d && (d.reportMacroDiscrepancy(d.id, c, void 0, !0), Ta(v) ? (Array.isArray(v) ? Array.isArray(u) : Qa(v) ? Qa(u) : typeof v === "function" ? typeof u === "function" : v === u) || d.reportMacroDiscrepancy(d.id, c) : v !== u && d.reportMacroDiscrepancy(d.id, c), w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
            return e ? v : u
        };
    var zf = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.permissionId = a;
        this.parameters = b;
        this.name = "PermissionError"
    };
    wa(zf, Error);
    zf.prototype.getMessage = function() {
        return this.message
    };

    function Af(a, b) {
        if (Array.isArray(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) Af(a[c], b[c])
        }
    };
    var Bf = function(a, b) {
        var c;
        c = Error.call(this, "Wrapped error for Dust debugging. Original error message: " + a.message);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.zm = a;
        this.j = [];
        this.C = b
    };
    wa(Bf, Error);

    function Cf() {
        return function(a, b) {
            a instanceof Bf || (a = new Bf(a, Df));
            b && a instanceof Bf && a.j.push(b);
            throw a;
        }
    }

    function Df(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; b > 0; b--) nb(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };

    function Ef(a) {
        function b(r) {
            for (var t = 0; t < r.length; t++) d[r[t]] = !0
        }
        for (var c = [], d = [], e = Ff(a), f = 0; f < gf.length; f++) {
            var g = gf[f],
                k = Gf(g, e);
            if (k) {
                for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                b(g.block || [])
            } else k === null && b(g.block || []);
        }
        for (var p = [], q = 0; q < jf.length; q++) c[q] && !d[q] && (p[q] = !0);
        return p
    }

    function Gf(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (e === 0) return !1;
            if (e === 2) return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var k = b(f[g]);
            if (k === 2) return null;
            if (k === 1) return !1
        }
        return !0
    }

    function Ff(a) {
        var b = [];
        return function(c) {
            b[c] === void 0 && (b[c] = uf(hf[c], a));
            return b[c]
        }
    };
    var Hf = {
        rl: function(a, b) {
            b[He.ii] && typeof a === "string" && (a = b[He.ii] === 1 ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(He.ki) && a === null && (a = b[He.ki]);
            b.hasOwnProperty(He.mi) && a === void 0 && (a = b[He.mi]);
            b.hasOwnProperty(He.li) && a === !0 && (a = b[He.li]);
            b.hasOwnProperty(He.ji) && a === !1 && (a = b[He.ji]);
            return a
        }
    };
    var If = function() {
            this.j = {}
        },
        Kf = function(a, b) {
            var c = Jf.j,
                d;
            (d = c.j)[a] != null || (d[a] = []);
            c.j[a].push(function() {
                return b.apply(null, oa(ya.apply(0, arguments)))
            })
        };

    function Lf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e](b, c, d), g += "."
                } catch (k) {
                    g = typeof k === "string" ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + "."
                }
                if (!f) throw new zf(c, d, g);
            }
    }

    function Mf(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.j[d],
                    f = a.j.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Lf(e, b, d, g);
                    Lf(f, b, d, g)
                }
            }
        }
    };
    var Qf = function() {
            var a = data.permissions || {},
                b = Nf.ctid,
                c = this;
            this.C = {};
            this.j = new If;
            var d = {},
                e = {},
                f = Mf(this.j, b, function() {
                    var g = arguments[0];
                    return g && d[g] ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            z(a, function(g, k) {
                function m(p) {
                    var q = ya.apply(1, arguments);
                    if (!n[p]) throw Of(p, {}, "The requested additional permission " + p + " is not configured.");
                    f.apply(null, [p].concat(oa(q)))
                }
                var n = {};
                z(k, function(p, q) {
                    var r = Pf(p, q);
                    n[p] = r.assert;
                    d[p] || (d[p] = r.M);
                    r.Gj && !e[p] && (e[p] = r.Gj)
                });
                c.C[g] = function(p, q) {
                    var r = n[p];
                    if (!r) throw Of(p, {}, "The requested permission " + p + " is not configured.");
                    var t = Array.prototype.slice.call(arguments, 0);
                    r.apply(void 0, t);
                    f.apply(void 0, t);
                    var v = e[p];
                    v && v.apply(null, [m].concat(oa(t.slice(1))))
                }
            })
        },
        Rf = function(a) {
            return Jf.C[a] || function() {}
        };

    function Pf(a, b) {
        var c = tf(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Of;
        try {
            return yf(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new zf(e, {}, "Permission " + e + " is unknown.");
                },
                M: function() {
                    throw new zf(a, {}, "Permission " + a + " is unknown.");
                }
            }
        }
    }

    function Of(a, b, c) {
        return new zf(a, b, c)
    };
    var Sf = !1;
    var Tf = {};
    Tf.ik = vb('');
    Tf.Al = vb('');
    var Zf = {},
        $f = (Zf.uaa = !0, Zf.uab = !0, Zf.uafvl = !0, Zf.uamb = !0, Zf.uam = !0, Zf.uap = !0, Zf.uapv = !0, Zf.uaw = !0, Zf);
    var hg = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a,
                    e = b[c];
                if (!fg.exec(e)) throw Error("Invalid key wildcard");
                var f = e.indexOf(".*"),
                    g = f !== -1 && f === e.length - 2,
                    k = g ? e.slice(0, e.length - 2) : e,
                    m;
                a: if (d.length === 0) m = !1;
                    else {
                        for (var n = d.split("."), p = 0; p < n.length; p++)
                            if (!gg.exec(n[p])) {
                                m = !1;
                                break a
                            }
                        m = !0
                    }
                if (!m || k.length > d.length || !g && d.length !== e.length ? 0 : g ? Eb(d, k) && (d === k || d.charAt(k.length) === ".") : d === k) return !0
            }
            return !1
        },
        gg = /^[a-z$_][\w$]*$/i,
        fg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
    var ig = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function jg(a, b) {
        var c = String(a),
            d = String(b),
            e = c.length - d.length;
        return e >= 0 && c.indexOf(d, e) === e
    }
    var kg = new sb;

    function lg(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + String(d),
                f = kg.get(e);
            f || (f = new RegExp(b, d), kg.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function mg(a, b) {
        return String(a).indexOf(String(b)) >= 0
    }

    function ng(a, b) {
        return String(a) === String(b)
    }

    function og(a, b) {
        return Number(a) >= Number(b)
    }

    function pg(a, b) {
        return Number(a) <= Number(b)
    }

    function qg(a, b) {
        return Number(a) > Number(b)
    }

    function rg(a, b) {
        return Number(a) < Number(b)
    }

    function sg(a, b) {
        return Eb(String(a), String(b))
    };
    var zg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
        Ag = {
            Fn: "function",
            PixieMap: "Object",
            List: "Array"
        };

    function K(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = zg.exec(b[d]);
            if (!e) throw Error("Internal Error in " + a);
            var f = e[1],
                g = e[2] === "!",
                k = e[3],
                m = c[d];
            if (m == null) {
                if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if (k !== "*") {
                var n = typeof m;
                m instanceof Vc ? n = "Fn" : m instanceof Va ? n = "List" : m instanceof Xa ? n = "PixieMap" : m instanceof $c && (n = "OpaqueValue");
                if (n !== k) throw Error("Error in " + a + ". Argument " + f + " has type " + ((Ag[n] || n) + ", which does not match required type ") + ((Ag[k] ||
                    k) + "."));
            }
        }
    };

    function Bg(a) {
        return "" + a
    }

    function Cg(a, b) {
        var c = [];
        return c
    };

    function Dg(a, b) {
        var c = new Vc(a, function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = this.evaluate(d[e]);
            try {
                return b.apply(this, d)
            } catch (g) {
                if (dd()) throw new fd(g.message);
                throw g;
            }
        });
        c.La();
        return c
    }

    function Eg(a, b) {
        var c = new Xa,
            d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                mb(e) ? c.set(d, Dg(a + "_" + d, e)) : Qa(e) ? c.set(d, Eg(a + "_" + d, e)) : (nb(e) || l(e) || typeof e === "boolean") && c.set(d, e)
            }
        c.La();
        return c
    };

    function Fg(a, b) {
        K(this.getName(), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new Xa;
        return d = Eg("AssertApiSubject", c)
    };

    function Gg(a, b) {
        K(this.getName(), ["actual:?*", "message:?string"], arguments);
        if (a instanceof bd) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new Xa;
        return d = Eg("AssertThatSubject", c)
    };

    function Hg(a) {
        return function() {
            for (var b = [], c = this.D, d = 0; d < arguments.length; ++d) b.push(I(arguments[d], c));
            return cd(a.apply(null, b))
        }
    }

    function Ig() {
        for (var a = Math, b = Jg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Hg(a[e].bind(a)))
        }
        return c
    };

    function Kg(a) {
        var b;
        return b
    };

    function Lg(a) {
        var b;
        return b
    };

    function Mg(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };

    function Ng(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
    };

    function Sg(a) {
        K(this.getName(), ["message:?string"], arguments);
    };

    function Tg(a, b) {
        K(this.getName(), ["min:!number", "max:!number"], arguments);
        return qb(a, b)
    };

    function Ug() {
        return (new Date).getTime()
    };

    function Vg(a) {
        if (a === null) return "null";
        if (a instanceof Va) return "array";
        if (a instanceof Vc) return "function";
        if (a instanceof $c) {
            var b;
            a = (b = a) == null ? void 0 : b.getValue();
            var c;
            if (((c = a) == null ? void 0 : c.constructor) === void 0 || a.constructor.name === void 0) {
                var d = String(a);
                return d.substring(8, d.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };

    function Wg(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Sf || Tf.ik) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return cd(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(I(c))
            })
        }
    };

    function Xg(a) {
        return ub(I(a, this.D))
    };

    function Yg(a) {
        return Number(I(a, this.D))
    };

    function Zg(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a.toString()
    };

    function $g(a, b, c) {
        var d = null,
            e = !1;
        K(this.getName(), ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"], arguments);
        d = new Xa;
        for (var f = 0; f < a.length(); f++) {
            var g = a.get(f);
            g instanceof Xa && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)), e = !0)
        }
        return e ? d : null
    };
    var Jg = "floor ceil round max min abs pow sqrt".split(" ");

    function ah() {
        var a = {};
        return {
            Kl: function(b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            },
            fk: function(b, c) {
                a[b] = c
            },
            reset: function() {
                a = {}
            }
        }
    }

    function bh(a, b) {
        return function() {
            var c = Array.prototype.slice.call(ya.apply(0, arguments), 0);
            c.unshift(b);
            return Vc.prototype.invoke.apply(a, c)
        }
    }

    function ch(a, b) {
        K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
    }

    function dh(a, b) {
        K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
    };
    var eh = {};
    var fh = function(a) {
        var b = new Xa;
        if (a instanceof Va)
            for (var c = a.Ja(), d = 0; d < c.length; d++) {
                var e = c[d];
                a.has(e) && b.set(e, a.get(e))
            } else if (a instanceof Vc)
                for (var f = a.Ja(), g = 0; g < f.length; g++) {
                    var k = f[g];
                    b.set(k, a.get(k))
                } else
                    for (var m = 0; m < a.length; m++) b.set(m, a[m]);
        return b
    };
    eh.keys = function(a) {
        K(this.getName(), ["input:!*"], arguments);
        if (a instanceof Va || a instanceof Vc || typeof a === "string") a = fh(a);
        if (a instanceof Xa) return new Va(a.Ja());
        return new Va
    };
    eh.values = function(a) {
        K(this.getName(), ["input:!*"], arguments);
        if (a instanceof Va || a instanceof Vc || typeof a === "string") a = fh(a);
        if (a instanceof Xa) return new Va(La(a, 2));
        return new Va
    };
    eh.entries = function(a) {
        K(this.getName(), ["input:!*"], arguments);
        if (a instanceof Va || a instanceof Vc || typeof a === "string") a = fh(a);
        if (a instanceof Xa) {
            for (var b = La(a, 3), c = new Va, d = 0; d < b.length; d++) {
                var e = new Va(b[d]);
                c.push(e)
            }
            return c
        }
        return new Va
    };
    eh.freeze = function(a) {
        (a instanceof Xa || a instanceof Va || a instanceof Vc) && a.La();
        return a
    };
    eh.delete = function(a, b) {
        if (a instanceof Xa && !a.j) return a.remove(b), !0;
        return !1
    };

    function M(a, b) {
        var c = ya.apply(2, arguments),
            d = a.D.j;
        if (!d) throw Error("Missing program state.");
        if (d.Lm) {
            try {
                d.Hj.apply(null, [b].concat(oa(c)))
            } catch (e) {
                throw fb("TAGGING", 21), e;
            }
            return
        }
        d.Hj.apply(null, [b].concat(oa(c)))
    };
    var gh = function() {
        this.C = {};
        this.j = {};
        this.H = !0;
    };
    gh.prototype.get = function(a, b) {
        var c = this.contains(a) ? this.C[a] : void 0;
        return c
    };
    gh.prototype.contains = function(a) {
        return this.C.hasOwnProperty(a)
    };
    gh.prototype.add = function(a, b, c) {
        if (this.contains(a)) throw Error("Attempting to add a function which already exists: " + a + ".");
        if (this.j.hasOwnProperty(a)) throw Error("Attempting to add an API with an existing private API name: " + a + ".");
        this.C[a] = c ? void 0 : mb(b) ? Dg(a, b) : Eg(a, b)
    };

    function hh(a, b) {
        var c = void 0;
        return c
    };

    function ih() {
        var a = {};
        return a
    };

    function jh(a) {
        return kh ? E.querySelectorAll(a) : null
    }

    function lh(a, b) {
        if (!kh) return null;
        if (Element.prototype.closest) try {
            return a.closest(b)
        } catch (e) {
            return null
        }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
            d = a;
        if (!E.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (d !== null && d.nodeType === 1);
        return null
    }
    var mh = !1;
    if (E.querySelectorAll) try {
        var nh = E.querySelectorAll(":root");
        nh && nh.length == 1 && nh[0] == E.documentElement && (mh = !0)
    } catch (a) {}
    var kh = mh;
    var oh = /^[0-9A-Fa-f]{64}$/;

    function ph(a) {
        try {
            return (new TextEncoder).encode(a)
        } catch (e) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                d < 128 ? b.push(d) : d < 2048 ? b.push(192 | d >> 6, 128 | d & 63) : d < 55296 || d >= 57344 ? b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63) : (d = 65536 + ((d & 1023) << 10 | a.charCodeAt(++c) & 1023), b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63))
            }
            return new Uint8Array(b)
        }
    }

    function qh(a) {
        if (a === "" || a === "e0") return Promise.resolve(a);
        var b;
        if ((b = C.crypto) == null ? 0 : b.subtle) {
            if (oh.test(a)) return Promise.resolve(a);
            try {
                var c = ph(a);
                return C.crypto.subtle.digest("SHA-256", c).then(function(d) {
                    var e = Array.from(new Uint8Array(d)).map(function(f) {
                        return String.fromCharCode(f)
                    }).join("");
                    return C.btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (d) {
                return Promise.resolve("e2")
            }
        } else return Promise.resolve("e1")
    };

    function rh(a, b) {
        if (a === "") return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var sh = [];

    function th(a) {
        switch (a) {
            case 0:
                return 0;
            case 43:
                return 1;
            case 44:
                return 2;
            case 45:
                return 11;
            case 52:
                return 3;
            case 62:
                return 4;
            case 73:
                return 7;
            case 86:
                return 5;
            case 99:
                return 6;
            case 100:
                return 13;
            case 101:
                return 10;
            case 103:
                return 8;
            case 104:
                return 9
        }
    }

    function N(a) {
        sh[a] = !0;
        var b = th(a);
        b !== void 0 && (ib[b] = !0)
    }
    N(32);
    N(28);
    N(29);
    N(30);
    N(31);
    N(46);
    N(77);
    N(16);
    N(110);
    N(15);
    N(115);
    N(109);
    N(63);
    N(87);
    N(7);
    N(47);
    N(4);
    N(81);
    N(106);
    N(72);
    N(68);
    N(70);
    N(85);
    N(120);

    N(116);
    N(86);
    N(5);
    N(73);
    N(99);
    jb[1] = rh('1', 6E4);
    jb[3] = rh('10', 1);
    jb[2] = rh('', 50);
    N(24);
    N(13);
    N(67);
    N(107);
    N(9);
    N(88);

    N(54);
    N(23);
    N(42);
    N(103);
    N(104);
    N(101);
    N(98);
    N(91);
    N(50);
    N(52);
    N(64);
    N(65);
    N(74);

    N(69);
    N(49);
    N(6);
    N(58);

    function O(a) {
        return !!sh[a]
    }

    function Q(a) {
        fb("GTM", a)
    };
    var T = {
            g: {
                sa: "ad_personalization",
                O: "ad_storage",
                N: "ad_user_data",
                U: "analytics_storage",
                Db: "region",
                Qb: "consent_updated",
                df: "wait_for_update",
                oi: "app_remove",
                ri: "app_store_refund",
                si: "app_store_subscription_cancel",
                ui: "app_store_subscription_convert",
                vi: "app_store_subscription_renew",
                uk: "consent_update",
                gg: "add_payment_info",
                hg: "add_shipping_info",
                jc: "add_to_cart",
                kc: "remove_from_cart",
                ig: "view_cart",
                Rb: "begin_checkout",
                mc: "select_item",
                jb: "view_item_list",
                Eb: "select_promotion",
                kb: "view_promotion",
                Ga: "purchase",
                nc: "refund",
                Ma: "view_item",
                jg: "add_to_wishlist",
                vk: "exception",
                wi: "first_open",
                xi: "first_visit",
                aa: "gtag.config",
                Ua: "gtag.get",
                yi: "in_app_purchase",
                Sb: "page_view",
                wk: "screen_view",
                zi: "session_start",
                xk: "timing_complete",
                yk: "track_social",
                Mc: "user_engagement",
                zk: "user_id_update",
                Fd: "gclid_link_decoration_source",
                Gd: "gclid_storage_source",
                lb: "gclgb",
                Va: "gclid",
                ef: "gclgs",
                ff: "gcllp",
                hf: "gclst",
                da: "ads_data_redaction",
                Ai: "gad_source",
                Bi: "gad_source_src",
                Hd: "gclid_url",
                Ci: "gclsrc",
                kg: "gbraid",
                jf: "wbraid",
                ja: "allow_ad_personalization_signals",
                kf: "allow_custom_scripts",
                Id: "allow_direct_google_requests",
                lf: "allow_display_features",
                Jd: "allow_enhanced_conversions",
                nb: "allow_google_signals",
                za: "allow_interest_groups",
                Ak: "app_id",
                Bk: "app_installer_id",
                Ck: "app_name",
                Dk: "app_version",
                Fb: "auid",
                Di: "auto_detection_enabled",
                Tb: "aw_remarketing",
                nf: "aw_remarketing_only",
                Kd: "discount",
                Ld: "aw_feed_country",
                Md: "aw_feed_language",
                ba: "items",
                Nd: "aw_merchant_id",
                lg: "aw_basket_type",
                Nc: "campaign_content",
                Oc: "campaign_id",
                Pc: "campaign_medium",
                Qc: "campaign_name",
                Rc: "campaign",
                Sc: "campaign_source",
                Tc: "campaign_term",
                ob: "client_id",
                Ei: "rnd",
                mg: "consent_update_type",
                Fi: "content_group",
                Gi: "content_type",
                Ya: "conversion_cookie_prefix",
                Uc: "conversion_id",
                na: "conversion_linker",
                Hi: "conversion_linker_disabled",
                Ub: "conversion_api",
                pf: "cookie_deprecation",
                Wa: "cookie_domain",
                Na: "cookie_expires",
                Za: "cookie_flags",
                oc: "cookie_name",
                Gb: "cookie_path",
                Oa: "cookie_prefix",
                qc: "cookie_update",
                rc: "country",
                wa: "currency",
                Od: "customer_lifetime_value",
                Vc: "custom_map",
                ng: "gcldc",
                Pd: "dclid",
                Ii: "debug_mode",
                fa: "developer_id",
                Ji: "disable_merchant_reported_purchases",
                Wc: "dc_custom_params",
                Ki: "dc_natural_search",
                og: "dynamic_event_settings",
                pg: "affiliation",
                Qd: "checkout_option",
                qf: "checkout_step",
                qg: "coupon",
                Xc: "item_list_name",
                rf: "list_name",
                Li: "promotions",
                Yc: "shipping",
                tf: "tax",
                Rd: "engagement_time_msec",
                Sd: "enhanced_client_id",
                Td: "enhanced_conversions",
                rg: "enhanced_conversions_automatic_settings",
                Ud: "estimated_delivery_date",
                uf: "euid_logged_in_state",
                Zc: "event_callback",
                Ek: "event_category",
                qb: "event_developer_id_string",
                Fk: "event_label",
                sc: "event",
                Vd: "event_settings",
                Wd: "event_timeout",
                Gk: "description",
                Hk: "fatal",
                Mi: "experiments",
                vf: "firebase_id",
                uc: "first_party_collection",
                Xd: "_x_20",
                rb: "_x_19",
                Ni: "fledge_drop_reason",
                sg: "fledge",
                ug: "flight_error_code",
                vg: "flight_error_message",
                Oi: "fl_activity_category",
                Pi: "fl_activity_group",
                wg: "fl_advertiser_id",
                Qi: "fl_ar_dedupe",
                xg: "match_id",
                Ri: "fl_random_number",
                Si: "tran",
                Ti: "u",
                Yd: "gac_gclid",
                vc: "gac_wbraid",
                yg: "gac_wbraid_multiple_conversions",
                zg: "ga_restrict_domain",
                Ag: "ga_temp_client_id",
                Ik: "ga_temp_ecid",
                wc: "gdpr_applies",
                Bg: "geo_granularity",
                Hb: "value_callback",
                sb: "value_key",
                xc: "_google_ng",
                yc: "google_signals",
                Cg: "google_tld",
                Zd: "groups",
                Dg: "gsa_experiment_id",
                Ui: "gtm_up",
                Ib: "iframe_state",
                bd: "ignore_referrer",
                wf: "internal_traffic_results",
                Vb: "is_legacy_converted",
                Jb: "is_legacy_loaded",
                ae: "is_passthrough",
                dd: "_lps",
                Pa: "language",
                be: "legacy_developer_id_string",
                oa: "linker",
                zc: "accept_incoming",
                ub: "decorate_forms",
                W: "domains",
                Kb: "url_position",
                Eg: "method",
                Jk: "name",
                ed: "new_customer",
                Fg: "non_interaction",
                Vi: "optimize_id",
                Gg: "page_hostname",
                fd: "page_path",
                Aa: "page_referrer",
                ab: "page_title",
                Hg: "passengers",
                Ig: "phone_conversion_callback",
                Wi: "phone_conversion_country_code",
                Jg: "phone_conversion_css_class",
                Xi: "phone_conversion_ids",
                Kg: "phone_conversion_number",
                Lg: "phone_conversion_options",
                Mg: "_protected_audience_enabled",
                gd: "quantity",
                de: "redact_device_info",
                xf: "referral_exclusion_definition",
                Wb: "restricted_data_processing",
                Yi: "retoken",
                Kk: "sample_rate",
                yf: "screen_name",
                Lb: "screen_resolution",
                Zi: "search_term",
                Ha: "send_page_view",
                Xb: "send_to",
                hd: "server_container_url",
                jd: "session_duration",
                ee: "session_engaged",
                zf: "session_engaged_time",
                vb: "session_id",
                fe: "session_number",
                Af: "_shared_user_id",
                kd: "delivery_postal_code",
                Lk: "temporary_client_id",
                Bf: "topmost_url",
                aj: "tracking_id",
                Cf: "traffic_type",
                xa: "transaction_id",
                Mb: "transport_url",
                Ng: "trip_type",
                Yb: "update",
                Xa: "url_passthrough",
                Df: "_user_agent_architecture",
                Ef: "_user_agent_bitness",
                Ff: "_user_agent_full_version_list",
                Gf: "_user_agent_mobile",
                Hf: "_user_agent_model",
                If: "_user_agent_platform",
                Jf: "_user_agent_platform_version",
                Kf: "_user_agent_wow64",
                Ba: "user_data",
                Og: "user_data_auto_latency",
                Pg: "user_data_auto_meta",
                Qg: "user_data_auto_multi",
                Rg: "user_data_auto_selectors",
                Sg: "user_data_auto_status",
                ld: "user_data_mode",
                he: "user_data_settings",
                ya: "user_id",
                cb: "user_properties",
                bj: "_user_region",
                ie: "us_privacy_string",
                ka: "value",
                Tg: "wbraid_multiple_conversions",
                me: "_fpm_parameters",
                jj: "_host_name",
                kj: "_in_page_command",
                lj: "_ip_override",
                mj: "_is_passthrough_cid",
                Nb: "non_personalized_ads",
                ue: "_sst_parameters",
                pb: "conversion_label",
                qa: "page_location",
                tb: "global_developer_id_string",
                Ac: "tc_privacy_string"
            }
        },
        Sh = {},
        Th = Object.freeze((Sh[T.g.ja] = 1, Sh[T.g.lf] = 1, Sh[T.g.Jd] = 1, Sh[T.g.nb] = 1, Sh[T.g.ba] = 1, Sh[T.g.Wa] = 1, Sh[T.g.Na] = 1, Sh[T.g.Za] = 1, Sh[T.g.oc] = 1, Sh[T.g.Gb] = 1, Sh[T.g.Oa] = 1, Sh[T.g.qc] = 1, Sh[T.g.Vc] = 1, Sh[T.g.fa] = 1, Sh[T.g.og] = 1, Sh[T.g.Zc] = 1, Sh[T.g.Vd] = 1, Sh[T.g.Wd] =
            1, Sh[T.g.uc] = 1, Sh[T.g.zg] = 1, Sh[T.g.yc] = 1, Sh[T.g.Cg] = 1, Sh[T.g.Zd] = 1, Sh[T.g.wf] = 1, Sh[T.g.Vb] = 1, Sh[T.g.Jb] = 1, Sh[T.g.oa] = 1, Sh[T.g.xf] = 1, Sh[T.g.Wb] = 1, Sh[T.g.Ha] = 1, Sh[T.g.Xb] = 1, Sh[T.g.hd] = 1, Sh[T.g.jd] = 1, Sh[T.g.zf] = 1, Sh[T.g.kd] = 1, Sh[T.g.Mb] = 1, Sh[T.g.Yb] = 1, Sh[T.g.he] = 1, Sh[T.g.cb] = 1, Sh[T.g.ue] = 1, Sh));
    Object.freeze([T.g.qa, T.g.Aa, T.g.ab, T.g.Pa, T.g.yf, T.g.ya, T.g.vf, T.g.Fi]);
    var Uh = {},
        Vh = Object.freeze((Uh[T.g.oi] = 1, Uh[T.g.ri] = 1, Uh[T.g.si] = 1, Uh[T.g.ui] = 1, Uh[T.g.vi] = 1, Uh[T.g.wi] = 1, Uh[T.g.xi] = 1, Uh[T.g.yi] = 1, Uh[T.g.zi] = 1, Uh[T.g.Mc] = 1, Uh)),
        Wh = {},
        Xh = Object.freeze((Wh[T.g.gg] = 1, Wh[T.g.hg] = 1, Wh[T.g.jc] = 1, Wh[T.g.kc] = 1, Wh[T.g.ig] = 1, Wh[T.g.Rb] = 1, Wh[T.g.mc] = 1, Wh[T.g.jb] = 1, Wh[T.g.Eb] = 1, Wh[T.g.kb] = 1, Wh[T.g.Ga] = 1, Wh[T.g.nc] = 1, Wh[T.g.Ma] = 1, Wh[T.g.jg] = 1, Wh)),
        Yh = Object.freeze([T.g.ja, T.g.Id, T.g.nb, T.g.qc, T.g.uc, T.g.bd, T.g.Ha, T.g.Yb]),
        Zh = Object.freeze([].concat(oa(Yh))),
        $h = Object.freeze([T.g.Na,
            T.g.Wd, T.g.jd, T.g.zf, T.g.Rd
        ]),
        ai = Object.freeze([].concat(oa($h))),
        bi = {},
        ci = (bi[T.g.O] = "1", bi[T.g.U] = "2", bi[T.g.N] = "3", bi[T.g.sa] = "4", bi),
        di = {},
        ei = Object.freeze((di[T.g.Fd] = 1, di[T.g.Gd] = 1, di[T.g.ja] = 1, di[T.g.Id] = 1, di[T.g.Jd] = 1, di[T.g.za] = 1, di[T.g.Tb] = 1, di[T.g.nf] = 1, di[T.g.Kd] = 1, di[T.g.Ld] = 1, di[T.g.Md] = 1, di[T.g.ba] = 1, di[T.g.Nd] = 1, di[T.g.Ya] = 1, di[T.g.na] = 1, di[T.g.Wa] = 1, di[T.g.Na] = 1, di[T.g.Za] = 1, di[T.g.Oa] = 1, di[T.g.wa] = 1, di[T.g.Od] = 1, di[T.g.fa] = 1, di[T.g.Ji] = 1, di[T.g.Td] = 1, di[T.g.Ud] = 1, di[T.g.vf] = 1, di[T.g.uc] =
            1, di[T.g.Vb] = 1, di[T.g.Jb] = 1, di[T.g.Pa] = 1, di[T.g.ed] = 1, di[T.g.qa] = 1, di[T.g.Aa] = 1, di[T.g.Ig] = 1, di[T.g.Jg] = 1, di[T.g.Kg] = 1, di[T.g.Lg] = 1, di[T.g.Wb] = 1, di[T.g.Ha] = 1, di[T.g.Xb] = 1, di[T.g.hd] = 1, di[T.g.kd] = 1, di[T.g.xa] = 1, di[T.g.Mb] = 1, di[T.g.Yb] = 1, di[T.g.Xa] = 1, di[T.g.Ba] = 1, di[T.g.ya] = 1, di[T.g.ka] = 1, di)),
        fi = {},
        gi = Object.freeze((fi.search = "s", fi.youtube = "y", fi.playstore = "p", fi.shopping = "h", fi.ads = "a", fi.maps = "m", fi));
    Object.freeze(T.g);
    var hi = {},
        ii = C.google_tag_manager = C.google_tag_manager || {};
    hi.Yg = "4a20";
    hi.te = Number("0") || 0;
    hi.ib = "dataLayer";
    hi.mn = "ChAI8I2OuAYQsOiQy9+Rwek3EiQAFA6Bua40C0aDhRn0C7DrJDRIKsJgV1T4Uy4YLM+M/XsT7h8aAh0j";
    var ji = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        ki = {
            __paused: 1,
            __tg: 1
        },
        li;
    for (li in ji) ji.hasOwnProperty(li) && (ki[li] = 1);
    var mi = vb(""),
        ni = !0,
        oi, pi = !1;
    oi = pi;
    var qi, ri = !1;
    qi = ri;
    var si, ti = !1;
    si = ti;
    hi.Ed = "www.googletagmanager.com";
    var ui = "" + hi.Ed + (oi ? "/gtag/js" : "/gtm.js"),
        vi = null,
        wi = null,
        xi = {},
        yi = {};

    function zi() {
        var a = ii.sequence || 1;
        ii.sequence = a + 1;
        return a
    }
    hi.sk = "";
    var Ai = "";
    hi.Zg = Ai;
    var Bi = new function() {
        this.j = "";
        this.H = !1;
        this.C = 0;
        this.P = this.Z = this.Qa = this.K = ""
    };

    function Ci() {
        var a = Bi.K.length;
        return Bi.K[a - 1] === "/" ? Bi.K.substring(0, a - 1) : Bi.K
    }

    function Di() {
        return Bi.H && Bi.C !== 1
    }

    function Ei(a) {
        for (var b = {}, c = h(a.split("|")), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return b
    }
    var Fi = new sb,
        Gi = {},
        Hi = {},
        Ki = {
            name: hi.ib,
            set: function(a, b) {
                Ra(Hb(a, b), Gi);
                Ii()
            },
            get: function(a) {
                return Ji(a, 2)
            },
            reset: function() {
                Fi = new sb;
                Gi = {};
                Ii()
            }
        };

    function Ji(a, b) {
        return b != 2 ? Fi.get(a) : Li(a)
    }

    function Li(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = Gi, e = 0; e < c.length; e++) {
            if (d === null) return !1;
            if (d === void 0) break;
            d = d[c[e]];
            if (b.indexOf(d) !== -1) return
        }
        return d
    }

    function Mi(a, b) {
        Hi.hasOwnProperty(a) || (Fi.set(a, b), Ra(Hb(a, b), Gi), Ii())
    }

    function Ni() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b],
                d = Ji(c, 1);
            if (Array.isArray(d) || Qa(d)) d = Ra(d);
            Hi[c] = d
        }
    }

    function Ii(a) {
        z(Hi, function(b, c) {
            Fi.set(b, c);
            Ra(Hb(b), Gi);
            Ra(Hb(b, c), Gi);
            a && delete Hi[b]
        })
    }

    function Oi(a, b) {
        var c, d = (b === void 0 ? 2 : b) !== 1 ? Li(a) : Fi.get(a);
        Na(d) === "array" || Na(d) === "object" ? c = Ra(d) : c = d;
        return c
    };
    var Si = /:[0-9]+$/,
        Ti = /^\d+\.fls\.doubleclick\.net$/;

    function Ui(a, b, c, d) {
        for (var e = [], f = h(a.split("&")), g = f.next(); !g.done; g = f.next()) {
            var k = h(g.value.split("=")),
                m = k.next().value,
                n = ma(k);
            if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
                var p = n.join("=");
                if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
                e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")))
            }
        }
        return c ? e : void 0
    }

    function Vi(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if (b === "protocol" || b === "port") a.protocol = Wi(a.protocol) || Wi(C.location.protocol);
        b === "port" ? a.port = String(Number(a.hostname ? a.port : C.location.port) || (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")) : b === "host" && (a.hostname = (a.hostname || C.location.hostname).replace(Si, "").toLowerCase());
        return Xi(a, b, c, d, e)
    }

    function Xi(a, b, c, d, e) {
        var f, g = Wi(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = Yi(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(Si, "").toLowerCase();
                if (c) {
                    var k = /^www\d*\./.exec(f);
                    k && k[0] && (f = f.substring(k[0].length))
                }
                break;
            case "port":
                f = String(Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || fb("TAGGING", 1);
                f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
                var m = f.split("/");
                (d || []).indexOf(m[m.length -
                    1]) >= 0 && (m[m.length - 1] = "");
                f = m.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = Ui(f, e, !1));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = n.length > 1 ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }

    function Wi(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }

    function Yi(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = c < 0 ? a.href : a.href.substring(0, c)
        }
        return b
    }
    var Zi = {},
        $i = 0;

    function aj(a) {
        var b = Zi[a];
        if (!b) {
            var c = E.createElement("a");
            a && (c.href = a);
            var d = c.pathname;
            d[0] !== "/" && (a || fb("TAGGING", 1), d = "/" + d);
            var e = c.hostname.replace(Si, "");
            b = {
                href: c.href,
                protocol: c.protocol,
                host: c.host,
                hostname: e,
                pathname: d,
                search: c.search,
                hash: c.hash,
                port: c.port
            };
            $i < 5 && (Zi[a] = b, $i++)
        }
        return b
    }

    function bj(a) {
        function b(n) {
            var p = n.split("=")[0];
            return d.indexOf(p) < 0 ? n : p + "=0"
        }

        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return p !== void 0
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
            e = aj(a),
            f = a.split(/[?#]/)[0],
            g = e.search,
            k = e.hash;
        g[0] === "?" && (g = g.substring(1));
        k[0] === "#" && (k = k.substring(1));
        g = c(g);
        k = c(k);
        g !== "" && (g = "?" + g);
        k !== "" && (k = "#" + k);
        var m = "" + f + g + k;
        m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
        return m
    }

    function cj(a) {
        var b = aj(C.location.href),
            c = Vi(b, "host", !1);
        if (c && c.match(Ti)) {
            var d = Vi(b, "path");
            if (d) {
                var e = d.split(a + "=");
                if (e.length > 1) return e[1].split(";")[0].split("?")[0]
            }
        }
    }

    function dj(a) {
        for (var b = 0; b < 3; ++b) try {
            var c = decodeURIComponent(a).replace(/\+/g, " ");
            if (c === a) break;
            a = c
        } catch (d) {
            return ""
        }
        return a
    };
    var ej = {
        "https://www.google.com": "/g",
        "https://www.googleadservices.com": "/as",
        "https://pagead2.googlesyndication.com": "/gs"
    };

    function fj(a, b) {
        if (a) {
            var c = "" + a;
            c.indexOf("http://") !== 0 && c.indexOf("https://") !== 0 && (c = "https://" + c);
            c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
            return aj("" + c + b).href
        }
    }

    function gj(a, b) {
        if (Di() || qi) return fj(a, b)
    }

    function hj() {
        return !!hi.Zg && hi.Zg.split("@@").join("") !== "SGTM_TOKEN"
    }

    function ij(a) {
        for (var b = h([T.g.hd, T.g.Mb]), c = b.next(); !c.done; c = b.next()) {
            var d = V(a, c.value);
            if (d) return d
        }
    }

    function jj(a, b) {
        return Di() ? "" + Ci() + (b ? ej[a] || "" : "") : a
    };

    function kj(a) {
        var b = String(a[He.la] || "").replace(/_/g, "");
        return Eb(b, "cvt") ? "cvt" : b
    }
    var lj = C.location.search.indexOf("?gtm_latency=") >= 0 || C.location.search.indexOf("&gtm_latency=") >= 0;
    var mj = {
            sampleRate: "0.005000",
            nk: "",
            kn: "0.01"
        },
        nj = Math.random(),
        oj;
    if (!(oj = lj)) {
        var pj = mj.sampleRate;
        oj = nj < Number(pj)
    }
    var qj = oj,
        rj = (qc == null ? void 0 : qc.includes("gtm_debug=d")) || lj || nj >= 1 - Number(mj.kn);
    var sj = /gtag[.\/]js/,
        tj = /gtm[.\/]js/,
        uj = !1;

    function vj(a) {
        if (uj) return "1";
        var b = a.scriptSource;
        if (b) {
            if (sj.test(b)) return "3";
            if (tj.test(b)) return "2"
        }
        return "0"
    }

    function wj(a, b) {
        var c = xj();
        c.pending || (c.pending = []);
        pb(c.pending, function(d) {
            return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        }) || c.pending.push({
            target: a,
            onLoad: b
        })
    }
    var zj = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {};
        this.pending = [];
        this.siloed = [];
        this.injectedFirstPartyContainers = {};
        yj(this)
    };

    function yj(a) {
        var b = C.google_tags_first_party || [];
        if (Array.isArray(b)) {
            for (var c = {}, d = h(b), e = d.next(); !e.done; e = d.next()) c[e.value] = !0;
            a.injectedFirstPartyContainers = Object.freeze(c)
        } else a.injectedFirstPartyContainers = Object.freeze({})
    }

    function xj() {
        var a = rc("google_tag_data", {}),
            b = a.tidr;
        b || (b = new zj, a.tidr = b);
        return b
    };
    var Aj = {},
        Bj = !1,
        Nf = {
            ctid: "GTM-TKXT7MH",
            canonicalContainerId: "7144609",
            Tj: "GTM-TKXT7MH",
            Uj: "GTM-TKXT7MH"
        };
    Aj.pe = vb("");

    function Cj() {
        var a = Dj();
        return Bj ? a.map(Ej) : a
    }

    function Fj() {
        var a = Gj();
        return Bj ? a.map(Ej) : a
    }

    function Hj() {
        return Ij(Nf.ctid)
    }

    function Jj() {
        return Ij(Nf.canonicalContainerId || "_" + Nf.ctid)
    }

    function Dj() {
        return Nf.Tj ? Nf.Tj.split("|") : [Nf.ctid]
    }

    function Gj() {
        return Nf.Uj ? Nf.Uj.split("|") : []
    }

    function Kj() {
        var a = Oj(Pj()),
            b = a && a.parent;
        if (b) return Oj(b)
    }

    function Oj(a) {
        var b = xj();
        return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
    }

    function Ij(a) {
        return Bj ? Ej(a) : a
    }

    function Ej(a) {
        return "siloed_" + a
    }

    function Qj(a) {
        return Bj ? Rj(a) : a
    }

    function Rj(a) {
        a = String(a);
        return Eb(a, "siloed_") ? a.substring(7) : a
    }

    function Sj() {
        var a = !1;
        if (a) {
            var b = xj();
            if (b.siloed) {
                for (var c = [], d = Dj().map(Ej), e = Gj().map(Ej), f = {}, g = 0; g < b.siloed.length; f = {
                        Pf: void 0
                    }, g++) f.Pf = b.siloed[g], !Bj && pb(f.Pf.isDestination ? e : d, function(k) {
                    return function(m) {
                        return m === k.Pf.ctid
                    }
                }(f)) ? Bj = !0 : c.push(f.Pf);
                b.siloed = c
            }
        }
    }

    function Tj() {
        var a = xj();
        if (a.pending) {
            for (var b, c = [], d = !1, e = Cj(), f = Fj(), g = {}, k = 0; k < a.pending.length; g = {
                    We: void 0
                }, k++) g.We = a.pending[k], pb(g.We.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.We.target.ctid
                }
            }(g)) ? d || (b = g.We.onLoad, d = !0) : c.push(g.We);
            a.pending = c;
            if (b) try {
                b(Jj())
            } catch (m) {}
        }
    }

    function Uj() {
        for (var a = Nf.ctid, b = Cj(), c = Fj(), d = function(n, p) {
                var q = {
                    canonicalContainerId: Nf.canonicalContainerId,
                    scriptContainerId: a,
                    state: 2,
                    containers: b.slice(),
                    destinations: c.slice()
                };
                pc && (q.scriptElement = pc);
                qc && (q.scriptSource = qc);
                if (Kj() === void 0) {
                    var r;
                    a: {
                        if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                            var t;
                            b: {
                                if (q.scriptSource) {
                                    for (var v = Bi.H, u = aj(q.scriptSource), w = v ? u.pathname : "" + u.hostname + u.pathname, x = E.scripts, y = "", A = 0; A < x.length; ++A) {
                                        var B = x[A];
                                        if (!(B.innerHTML.length === 0 || !v && B.innerHTML.indexOf(q.scriptContainerId ||
                                                "SHOULD_NOT_BE_SET") < 0 || B.innerHTML.indexOf(w) < 0)) {
                                            if (B.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                                                t = String(A);
                                                break b
                                            }
                                            y = String(A)
                                        }
                                    }
                                    if (y) {
                                        t = y;
                                        break b
                                    }
                                }
                                t = void 0
                            }
                            var D = t;
                            if (D) {
                                uj = !0;
                                r = D;
                                break a
                            }
                        }
                        var H = [].slice.call(document.scripts);r = q.scriptElement ? String(H.indexOf(q.scriptElement)) : "-1"
                    }
                    q.htmlLoadOrder = r;
                    q.loadScriptType = vj(q)
                }
                var J = p ? e.destination : e.container,
                    G = J[n];
                G ? (p && G.state === 0 && Q(93), Object.assign(G, q)) : J[n] = q
            }, e = xj(), f = h(b), g = f.next(); !g.done; g = f.next()) d(g.value, !1);
        for (var k = h(c), m =
                k.next(); !m.done; m = k.next()) d(m.value, !0);
        e.canonical[Jj()] = {};
        Tj()
    }

    function Vj(a) {
        return !!xj().container[a]
    }

    function Wj(a) {
        var b = xj().destination[a];
        return !!b && !!b.state
    }

    function Pj() {
        return {
            ctid: Hj(),
            isDestination: Aj.pe
        }
    }

    function Xj(a) {
        var b = xj();
        (b.siloed = b.siloed || []).push(a)
    }

    function Yj() {
        var a = xj().container,
            b;
        for (b in a)
            if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
        return !1
    }

    function Zj() {
        var a = {};
        z(xj().destination, function(b, c) {
            c.state === 0 && (a[Rj(b)] = c)
        });
        return a
    }

    function ak(a) {
        return !!(a && a.parent && a.context && a.context.source === 1 && a.parent.ctid.indexOf("GTM-") !== 0)
    }
    var bk = "/td?id=" + Nf.ctid,
        ck = ["v", "t", "pid", "dl", "tdp"],
        dk = ["mcc"],
        ek = {},
        fk = {};

    function gk(a, b, c) {
        fk[a] = b;
        (c === void 0 || c) && hk(a)
    }

    function hk(a, b) {
        if (ek[a] === void 0 || (b === void 0 ? 0 : b)) ek[a] = !0
    }

    function ik(a) {
        a = a === void 0 ? !1 : a;
        var b = Object.keys(ek).filter(function(c) {
            return ek[c] === !0 && fk[c] !== void 0 && (a || !dk.includes(c))
        }).map(function(c) {
            var d = fk[c];
            typeof d === "function" && (d = d());
            return d ? "&" + c + "=" + d : ""
        }).join("");
        return "" + jj("https://www.googletagmanager.com") + bk + ("" + b + "&z=0")
    }

    function jk() {
        Object.keys(ek).forEach(function(a) {
            ck.indexOf(a) < 0 && (ek[a] = !1)
        })
    }

    function kk(a) {
        a = a === void 0 ? !1 : a;
        if (rj && Nf.ctid) {
            var b = ik(a);
            a ? Kc(b) : zc(b);
            jk()
        }
    }

    function lk() {
        Object.keys(ek).filter(function(a) {
            return ek[a] && !ck.includes(a)
        }).length > 0 && kk(!0)
    }
    var mk = qb();

    function nk() {
        mk = qb()
    }

    function ok() {
        gk("v", "3");
        gk("t", "t");
        gk("pid", function() {
            return String(mk)
        });
        Bc(C, "pagehide", lk);
        C.setInterval(nk, 864E5)
    }

    function pk() {
        var a = rc("google_tag_data", {});
        return a.ics = a.ics || new qk
    }
    var qk = function() {
        this.entries = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.j = []
    };
    qk.prototype.default = function(a, b, c, d, e, f, g) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        fb("TAGGING", 19);
        b == null ? fb("TAGGING", 18) : rk(this, a, b === "granted", c, d, e, f, g)
    };
    qk.prototype.waitForUpdate = function(a, b, c) {
        for (var d = 0; d < a.length; d++) rk(this, a[d], void 0, void 0, "", "", b, c)
    };
    var rk = function(a, b, c, d, e, f, g, k) {
        var m = a.entries,
            n = m[b] || {},
            p = n.region,
            q = d && l(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
            var r = !!(g && g > 0 && n.update === void 0),
                t = {
                    region: q,
                    declare_region: n.declare_region,
                    implicit: n.implicit,
                    default: c !== void 0 ? c : n.default,
                    declare: n.declare,
                    update: n.update,
                    quiet: r
                };
            if (e !== "" || n.default !== !1) m[b] = t;
            r && C.setTimeout(function() {
                m[b] === t && t.quiet && (fb("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0, k),
                    a.notifyListeners())
            }, g)
        }
    };
    ba = qk.prototype;
    ba.clearTimeout = function(a, b, c) {
        var d = [a],
            e = c.delegatedConsentTypes,
            f;
        for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
        var g = this.entries[a] || {},
            k = this.getConsentState(a, c);
        if (g.quiet) {
            g.quiet = !1;
            for (var m = h(d), n = m.next(); !n.done; n = m.next()) sk(this, n.value)
        } else if (b !== void 0 && k !== b)
            for (var p = h(d), q = p.next(); !q.done; q = p.next()) sk(this, q.value)
    };
    ba.update = function(a, b, c) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (b != null) {
            var d = this.getConsentState(a, c),
                e = this.entries;
            (e[a] = e[a] || {}).update = b === "granted";
            this.clearTimeout(a, d, c)
        }
    };
    ba.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            g = f[a] || {},
            k = g.declare_region,
            m = c && l(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
            var n = {
                region: g.region,
                declare_region: m,
                declare: b === "granted",
                implicit: g.implicit,
                default: g.default,
                update: g.update,
                quiet: g.quiet
            };
            if (d !== "" || g.declare !== !1) f[a] = n
        }
    };
    ba.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        d.implicit !== !1 && (d.implicit = b === "granted")
    };
    ba.getConsentState = function(a, b) {
        var c = this.entries,
            d = c[a] || {},
            e = d.update;
        if (e !== void 0) return e ? 1 : 2;
        if (kb(8) && b.usedContainerScopedDefaults) {
            var f = b.containerScopedDefaults[a];
            if (f === 3) return 1;
            if (f === 2) return 2
        } else if (e = d.default, e !== void 0) return e ? 1 : 2;
        if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
            var g = b.delegatedConsentTypes[a],
                k = c[g] || {};
            e = k.update;
            if (e !== void 0) return e ? 1 : 2;
            if (kb(8) && b.usedContainerScopedDefaults) {
                var m = b.containerScopedDefaults[g];
                if (m === 3) return 1;
                if (m === 2) return 2
            } else if (e =
                k.default, e !== void 0) return e ? 1 : 2
        }
        e = d.declare;
        if (e !== void 0) return e ? 1 : 2;
        e = d.implicit;
        return e !== void 0 ? e ? 3 : 4 : 0
    };
    ba.addListener = function(a, b) {
        this.j.push({
            consentTypes: a,
            Fl: b
        })
    };
    var sk = function(a, b) {
        for (var c = 0; c < a.j.length; ++c) {
            var d = a.j[c];
            Array.isArray(d.consentTypes) && d.consentTypes.indexOf(b) !== -1 && (d.Vj = !0)
        }
    };
    qk.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.j.length; ++c) {
            var d = this.j[c];
            if (d.Vj) {
                d.Vj = !1;
                try {
                    d.Fl({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };
    var tk = !1,
        uk = !1,
        vk = {},
        wk = {
            delegatedConsentTypes: {},
            corePlatformServices: {},
            usedCorePlatformServices: !1,
            selectedAllCorePlatformServices: !1,
            containerScopedDefaults: (vk.ad_storage = 1, vk.analytics_storage = 1, vk.ad_user_data = 1, vk.ad_personalization = 1, vk),
            usedContainerScopedDefaults: !1
        };

    function xk(a) {
        var b = pk();
        b.accessedAny = !0;
        return (l(a) ? [a] : a).every(function(c) {
            switch (b.getConsentState(c, wk)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        })
    }

    function yk(a) {
        var b = pk();
        b.accessedAny = !0;
        return b.getConsentState(a, wk)
    }

    function zk(a) {
        for (var b = {}, c = h(a), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            b[e] = wk.corePlatformServices[e] !== !1
        }
        return b
    }

    function Ak(a) {
        var b = pk();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }

    function Bk() {
        if (!kb(12)) return !1;
        var a = pk();
        a.accessedAny = !0;
        if (a.active) return !0;
        if (!kb(8) || !wk.usedContainerScopedDefaults) return !1;
        for (var b = h(Object.keys(wk.containerScopedDefaults)), c = b.next(); !c.done; c = b.next())
            if (wk.containerScopedDefaults[c.value] !== 1) return !0;
        return !1
    }

    function Ck(a, b) {
        pk().addListener(a, b)
    }

    function Dk(a, b) {
        pk().notifyListeners(a, b)
    }

    function Ek(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!Ak(b[e])) return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            Ck(b, function(e) {
                d || c() || (d = !0, a(e))
            })
        } else a({})
    }

    function Fk(a, b) {
        function c() {
            for (var k = [], m = 0; m < e.length; m++) {
                var n = e[m];
                xk(n) && !f[n] && k.push(n)
            }
            return k
        }

        function d(k) {
            for (var m = 0; m < k.length; m++) f[k[m]] = !0
        }
        var e = l(b) ? [b] : b,
            f = {},
            g = c();
        g.length !== e.length && (d(g), Ck(e, function(k) {
            function m(q) {
                q.length !== 0 && (d(q), k.consentTypes = q, a(k))
            }
            var n = c();
            if (n.length !== 0) {
                var p = Object.keys(f).length;
                n.length + p >= e.length ? m(n) : C.setTimeout(function() {
                    m(c())
                }, 500)
            }
        }))
    };
    var Gk = ["ad_storage", "analytics_storage", "ad_user_data", "ad_personalization"],
        Hk = !1,
        Ik = !1;

    function Jk() {
        O(50) && !Ik && Hk && (Gk.some(function(a) {
            return wk.containerScopedDefaults[a] !== 1
        }) || Kk("mbc"));
        Ik = !0
    }

    function Kk(a) {
        rj && (gk(a, "1"), kk())
    }

    function Lk(a) {
        fb("HEALTH", a)
    };
    var Mk;
    try {
        Mk = JSON.parse(db("eyIwIjoiVk4iLCIxIjoiVk4tU0ciLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20udm4iLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ"))
    } catch (a) {
        Q(123), Lk(2), Mk = {}
    }

    function Nk() {
        return Mk["0"] || ""
    }

    function Ok() {
        return Mk["1"] || ""
    }

    function Pk() {
        var a = !1;
        return a
    }

    function Qk() {
        return Mk["6"] !== !1
    }

    function Rk() {
        var a = "";
        return a
    }

    function Sk() {
        var a = !1;
        return a
    }

    function Tk() {
        var a = "";
        return a
    }
    var Uk = [T.g.O, T.g.U, T.g.N, T.g.sa],
        Vk, Wk;

    function Xk(a) {
        for (var b = a[T.g.Db], c = Array.isArray(b) ? b : [b], d = {
                Le: 0
            }; d.Le < c.length; d = {
                Le: d.Le
            }, ++d.Le) z(a, function(e) {
            return function(f, g) {
                if (f !== T.g.Db) {
                    var k = c[e.Le],
                        m = Nk(),
                        n = Ok();
                    uk = !0;
                    tk && fb("TAGGING", 20);
                    pk().declare(f, g, k, m, n)
                }
            }
        }(d))
    }

    function Yk(a) {
        Jk();
        !Wk && Vk && Kk("crc");
        Wk = !0;
        var b = a[T.g.Db];
        b && Q(40);
        var c = a[T.g.df];
        c && Q(41);
        for (var d = Array.isArray(b) ? b : [b], e = {
                Me: 0
            }; e.Me < d.length; e = {
                Me: e.Me
            }, ++e.Me) z(a, function(f) {
            return function(g, k) {
                if (g !== T.g.Db && g !== T.g.df) {
                    var m = d[f.Me],
                        n = Number(c),
                        p = Nk(),
                        q = Ok();
                    n = n === void 0 ? 0 : n;
                    tk = !0;
                    uk && fb("TAGGING", 20);
                    pk().default(g, k, m, p, q, n, wk)
                }
            }
        }(e))
    }

    function Zk(a) {
        if (O(104)) {
            kb(9) && (wk.usedContainerScopedDefaults = !0);
            var b = a[T.g.Db];
            if (b) {
                var c = Array.isArray(b) ? b : [b];
                if (!c.includes(Ok()) && !c.includes(Nk())) return
            }
            z(a, function(d, e) {
                switch (d) {
                    case "ad_storage":
                    case "analytics_storage":
                    case "ad_user_data":
                    case "ad_personalization":
                        break;
                    default:
                        return
                }
                kb(9) && (wk.usedContainerScopedDefaults = !0);
                wk.containerScopedDefaults[d] = e === "granted" ? 3 : 2
            })
        }
    }

    function $k(a, b) {
        Jk();
        Vk = !0;
        z(a, function(c, d) {
            tk = !0;
            uk && fb("TAGGING", 20);
            pk().update(c, d, wk)
        });
        Dk(b.eventId, b.priorityId)
    }

    function al(a) {
        a.hasOwnProperty("all") && (wk.selectedAllCorePlatformServices = !0, z(gi, function(b) {
            wk.corePlatformServices[b] = a.all === "granted";
            wk.usedCorePlatformServices = !0
        }));
        z(a, function(b, c) {
            b !== "all" && (wk.corePlatformServices[b] = c === "granted", wk.usedCorePlatformServices = !0)
        })
    }

    function W(a) {
        Array.isArray(a) || (a = [a]);
        return a.every(function(b) {
            return xk(b)
        })
    }

    function bl(a, b) {
        Ck(a, b)
    }

    function cl(a, b) {
        Fk(a, b)
    }

    function dl(a, b) {
        Ek(a, b)
    }

    function el() {
        var a = [T.g.O, T.g.sa, T.g.N];
        pk().waitForUpdate(a, 500, wk)
    }

    function fl(a) {
        for (var b = h(a), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            pk().clearTimeout(d, void 0, wk)
        }
        Dk()
    }

    function gl() {
        if (ii.pscdl === void 0) {
            var a = function(c) {
                    ii.pscdl = c
                },
                b = function() {
                    a("error")
                };
            try {
                nc.cookieDeprecationLabel ? (a("pending"), nc.cookieDeprecationLabel.getValue().then(a).catch(b)) : a("noapi")
            } catch (c) {
                b(c)
            }
        }
    };

    function hl(a, b) {
        b && z(b, function(c, d) {
            typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d))
        })
    };
    var il = /[A-Z]+/,
        jl = /\s/;

    function kl(a, b) {
        if (l(a)) {
            a = xb(a);
            var c = a.indexOf("-");
            if (!(c < 0)) {
                var d = a.substring(0, c);
                if (il.test(d)) {
                    var e = a.substring(c + 1),
                        f;
                    if (b) {
                        var g = function(n) {
                            var p = n.indexOf("/");
                            return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)]
                        };
                        f = g(e);
                        if (d === "DC" && f.length === 2) {
                            var k = g(f[1]);
                            k.length === 2 && (f[1] = k[0], f.push(k[1]))
                        }
                    } else {
                        f = e.split("/");
                        for (var m = 0; m < f.length; m++)
                            if (!f[m] || jl.test(f[m]) && (d !== "AW" || m !== 1)) return
                    }
                    return {
                        id: a,
                        prefix: d,
                        destinationId: d + "-" + f[0],
                        ids: f
                    }
                }
            }
        }
    }

    function ll(a, b) {
        for (var c = {}, d = 0; d < a.length; ++d) {
            var e = kl(a[d], b);
            e && (c[e.id] = e)
        }
        ml(c);
        var f = [];
        z(c, function(g, k) {
            f.push(k)
        });
        return f
    }

    function ml(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                d.prefix === "AW" && d.ids[nl[2]] && b.push(d.destinationId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    }
    var ol = {},
        nl = (ol[0] = 0, ol[1] = 0, ol[2] = 1, ol[3] = 0, ol[4] = 1, ol[5] = 2, ol[6] = 0, ol[7] = 0, ol[8] = 0, ol);
    var pl = Number('') || 500,
        ql = {},
        rl = {},
        sl = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        tl = {},
        ul = Object.freeze((tl[T.g.Ha] = !0, tl)),
        vl = E.location.search.indexOf("?gtm_diagnostics=") >= 0 || E.location.search.indexOf("&gtm_diagnostics=") >= 0,
        wl = void 0;

    function xl(a, b) {
        if (b.length && rj) {
            var c;
            (c = ql)[a] != null || (c[a] = []);
            rl[a] != null || (rl[a] = []);
            var d = b.filter(function(e) {
                return !rl[a].includes(e)
            });
            ql[a].push.apply(ql[a], oa(d));
            rl[a].push.apply(rl[a], oa(d));
            !wl && d.length > 0 && (hk("tdc", !0), wl = C.setTimeout(function() {
                kk();
                ql = {};
                wl = void 0
            }, pl))
        }
    }

    function yl(a, b, c) {
        if (rj && a === "config") {
            var d, e = (d = kl(b)) == null ? void 0 : d.ids;
            if (!(e && e.length > 1)) {
                var f, g = rc("google_tag_data", {});
                g.td || (g.td = {});
                f = g.td;
                var k = Ra(c.K);
                Ra(c.j, k);
                var m = [],
                    n;
                for (n in f)
                    if (f.hasOwnProperty(n)) {
                        var p = zl(f[n], k);
                        p.length && (vl && console.log(p), m.push(n))
                    }
                m.length && (xl(b, m), fb("TAGGING", sl[E.readyState] || 14));
                f[b] = k
            }
        }
    }

    function Al(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function zl(a, b, c, d) {
        c = c === void 0 ? {} : c;
        d = d === void 0 ? "" : d;
        if (a === b) return [];
        var e = function(r, t) {
                var v;
                Na(t) === "object" ? v = t[r] : Na(t) === "array" && (v = t[r]);
                return v === void 0 ? ul[r] : v
            },
            f = Al(a, b),
            g;
        for (g in f)
            if (f.hasOwnProperty(g)) {
                var k = (d ? d + "." : "") + g,
                    m = e(g, a),
                    n = e(g, b),
                    p = Na(m) === "object" || Na(m) === "array",
                    q = Na(n) === "object" || Na(n) === "array";
                if (p && q) zl(m, n, c, k);
                else if (p || q || m !== n) c[k] = !0
            }
        return Object.keys(c)
    }

    function Bl() {
        gk("tdc", function() {
            wl && (C.clearTimeout(wl), wl = void 0);
            var a = [],
                b;
            for (b in ql) ql.hasOwnProperty(b) && a.push(b + "*" + ql[b].join("."));
            return a.length ? a.join("!") : void 0
        }, !1)
    };
    var Cl = function(a, b, c, d, e, f, g, k, m, n, p) {
            this.eventId = a;
            this.priorityId = b;
            this.j = c;
            this.P = d;
            this.H = e;
            this.K = f;
            this.C = g;
            this.eventMetadata = k;
            this.onSuccess = m;
            this.onFailure = n;
            this.isGtmEvent = p
        },
        Dl = function(a, b) {
            var c = [];
            switch (b) {
                case 3:
                    c.push(a.j);
                    c.push(a.P);
                    c.push(a.H);
                    c.push(a.K);
                    c.push(a.C);
                    break;
                case 2:
                    c.push(a.j);
                    break;
                case 1:
                    c.push(a.P);
                    c.push(a.H);
                    c.push(a.K);
                    c.push(a.C);
                    break;
                case 4:
                    c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K)
            }
            return c
        },
        V = function(a, b, c, d) {
            for (var e = h(Dl(a, d === void 0 ? 3 :
                    d)), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                if (g[b] !== void 0) return g[b]
            }
            return c
        },
        El = function(a) {
            for (var b = {}, c = Dl(a, 4), d = h(c), e = d.next(); !e.done; e = d.next())
                for (var f = Object.keys(e.value), g = h(f), k = g.next(); !k.done; k = g.next()) b[k.value] = 1;
            return Object.keys(b)
        },
        Fl = function(a, b, c) {
            function d(n) {
                Qa(n) && z(n, function(p, q) {
                    f = !0;
                    e[p] = q
                })
            }
            var e = {},
                f = !1,
                g = Dl(a, c === void 0 ? 3 : c);
            g.reverse();
            for (var k = h(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
            return f ? e : void 0
        },
        Gl = function(a) {
            for (var b = [T.g.Rc, T.g.Nc,
                    T.g.Oc, T.g.Pc, T.g.Qc, T.g.Sc, T.g.Tc
                ], c = Dl(a, 3), d = h(c), e = d.next(); !e.done; e = d.next()) {
                for (var f = e.value, g = {}, k = !1, m = h(b), n = m.next(); !n.done; n = m.next()) {
                    var p = n.value;
                    f[p] !== void 0 && (g[p] = f[p], k = !0)
                }
                var q = k ? g : void 0;
                if (q) return q
            }
            return {}
        },
        Hl = function(a, b) {
            this.eventId = a;
            this.priorityId = b;
            this.C = {};
            this.P = {};
            this.j = {};
            this.H = {};
            this.Z = {};
            this.K = {};
            this.eventMetadata = {};
            this.isGtmEvent = !1;
            this.onSuccess = function() {};
            this.onFailure = function() {}
        },
        Il = function(a, b) {
            a.C = b;
            return a
        },
        Jl = function(a, b) {
            a.P = b;
            return a
        },
        Kl = function(a, b) {
            a.j = b;
            return a
        },
        Ll = function(a, b) {
            a.H = b;
            return a
        },
        Ml = function(a, b) {
            a.Z = b;
            return a
        },
        Nl = function(a, b) {
            a.K = b;
            return a
        },
        Ol = function(a, b) {
            a.eventMetadata = b || {};
            return a
        },
        Pl = function(a, b) {
            a.onSuccess = b;
            return a
        },
        Ql = function(a, b) {
            a.onFailure = b;
            return a
        },
        Rl = function(a, b) {
            a.isGtmEvent = b;
            return a
        },
        Sl = function(a) {
            return new Cl(a.eventId, a.priorityId, a.C, a.P, a.j, a.H, a.K, a.eventMetadata, a.onSuccess, a.onFailure, a.isGtmEvent)
        };
    var Tl = {
            mk: Number("5"),
            Qn: Number("")
        },
        Ul = [];

    function Vl(a) {
        Ul.push(a)
    }
    var Wl = "?id=" + Nf.ctid,
        Xl = void 0,
        Yl = {},
        Zl = void 0,
        $l = new function() {
            var a = 5;
            Tl.mk > 0 && (a = Tl.mk);
            this.C = a;
            this.j = 0;
            this.H = []
        },
        am = 1E3;

    function bm(a, b) {
        var c = Xl;
        if (c === void 0)
            if (b) c = zi();
            else return "";
        for (var d = [jj("https://www.googletagmanager.com"), "/a", Wl], e = h(Ul), f = e.next(); !f.done; f = e.next())
            for (var g = f.value, k = g({
                    eventId: c,
                    hc: !!a
                }), m = h(k), n = m.next(); !n.done; n = m.next()) {
                var p = h(n.value),
                    q = p.next().value,
                    r = p.next().value;
                d.push("&" + q + "=" + r)
            }
        d.push("&z=0");
        return d.join("")
    }

    function cm() {
        Zl && (C.clearTimeout(Zl), Zl = void 0);
        if (Xl !== void 0 && dm) {
            var a;
            (a = Yl[Xl]) || (a = $l.j < $l.C ? !1 : zb() - $l.H[$l.j % $l.C] < 1E3);
            if (a || am-- <= 0) Q(1), Yl[Xl] = !0;
            else {
                var b = $l.j++ % $l.C;
                $l.H[b] = zb();
                var c = bm(!0);
                zc(c);
                dm = !1
            }
        }
    }
    var dm = !1;

    function em(a) {
        Yl[a] || (a !== Xl && (cm(), Xl = a), dm = !0, Zl || (Zl = C.setTimeout(cm, 500)), bm().length >= 2022 && cm())
    }
    var fm = qb();

    function gm() {
        fm = qb()
    }

    function hm() {
        return [
            ["v", "3"],
            ["t", "t"],
            ["pid", String(fm)]
        ]
    }
    var im = {};

    function jm(a, b, c) {
        qj && a !== void 0 && (im[a] = im[a] || [], im[a].push(c + b), em(a))
    }

    function km(a) {
        var b = a.eventId,
            c = a.hc,
            d = [],
            e = im[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete im[b];
        return d
    };

    function lm(a, b) {
        var c = kl(Ij(a), !0);
        c && mm.register(c, b)
    }

    function nm(a, b, c, d) {
        var e = kl(c, d.isGtmEvent);
        e && (O(48) && O(48) && ni && !Bj && (d.deferrable = !0), mm.push("event", [b, a], e, d))
    }

    function om(a, b, c, d) {
        var e = kl(c, d.isGtmEvent);
        e && mm.push("get", [a, b], e, d)
    }

    function pm(a) {
        var b = kl(Ij(a), !0),
            c;
        b ? c = qm(mm, b).j : c = {};
        return c
    }

    function rm(a, b) {
        var c = kl(Ij(a), !0);
        if (c) {
            var d = mm,
                e = Ra(b, null);
            Ra(qm(d, c).j, e);
            qm(d, c).j = e
        }
    }
    var sm = function() {
            this.P = {};
            this.j = {};
            this.C = {};
            this.Z = null;
            this.K = {};
            this.H = !1;
            this.status = 1
        },
        tm = function(a, b, c, d) {
            this.C = zb();
            this.j = b;
            this.args = c;
            this.messageContext = d;
            this.type = a
        },
        um = function() {
            this.destinations = {};
            this.j = {};
            this.commands = []
        },
        qm = function(a, b) {
            var c = b.destinationId;
            return a.destinations[c] = a.destinations[c] || new sm
        },
        vm = function(a, b, c, d) {
            if (d.j) {
                var e = qm(a, d.j),
                    f = e.Z;
                if (f) {
                    var g = Ra(c, null),
                        k = Ra(e.P[d.j.id], null),
                        m = Ra(e.K, null),
                        n = Ra(e.j, null),
                        p = Ra(a.j, null),
                        q = {};
                    if (qj) try {
                        q = Ra(Gi)
                    } catch (u) {
                        Q(72)
                    }
                    var r =
                        d.j.prefix,
                        t = function(u) {
                            jm(d.messageContext.eventId, r, u)
                        },
                        v = Sl(Rl(Ql(Pl(Ol(Ml(Ll(Nl(Kl(Jl(Il(new Hl(d.messageContext.eventId, d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (t) {
                                var u = t;
                                t = void 0;
                                u("2");
                                if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                            }
                        }), function() {
                            if (t) {
                                var u = t;
                                t = void 0;
                                u("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        jm(d.messageContext.eventId, r, "1"), yl(d.type, d.j.id, v),
                            f(d.j.id, b, d.C, v)
                    } catch (u) {
                        jm(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    um.prototype.register = function(a, b, c) {
        var d = qm(this, a);
        d.status !== 3 && (d.Z = b, d.status = 3, c && (Ra(d.j, c), d.j = c), this.flush())
    };
    um.prototype.push = function(a, b, c, d) {
        c !== void 0 && (qm(this, c).status === 1 && (qm(this, c).status = 2, this.push("require", [{}], c, {})), qm(this, c).H && (d.deferrable = !1));
        this.commands.push(new tm(a, c, b, d));
        d.deferrable || this.flush()
    };
    um.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.commands.length; e = {
                Cc: void 0,
                rh: void 0
            }) {
            var f = this.commands[0],
                g = f.j;
            if (f.messageContext.deferrable) !g || qm(this, g).H ? (f.messageContext.deferrable = !1, this.commands.push(f)) : c.push(f), this.commands.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (qm(this, g).status !== 3 && !a) {
                            this.commands.push.apply(this.commands, c);
                            return
                        }
                        break;
                    case "set":
                        z(f.args[0], function(r, t) {
                            Ra(Hb(r, t), b.j)
                        });
                        break;
                    case "config":
                        var k = qm(this, g);
                        e.Cc = {};
                        z(f.args[0],
                            function(r) {
                                return function(t, v) {
                                    Ra(Hb(t, v), r.Cc)
                                }
                            }(e));
                        var m = !!e.Cc[T.g.Yb];
                        delete e.Cc[T.g.Yb];
                        var n = g.destinationId === g.id;
                        m || (n ? k.K = {} : k.P[g.id] = {});
                        k.H && m || vm(this, T.g.aa, e.Cc, f);
                        k.H = !0;
                        n ? Ra(e.Cc, k.K) : (Ra(e.Cc, k.P[g.id]), Q(70));
                        d = !0;
                        break;
                    case "event":
                        e.rh = {};
                        z(f.args[0], function(r) {
                            return function(t, v) {
                                Ra(Hb(t, v), r.rh)
                            }
                        }(e));
                        vm(this, f.args[1], e.rh, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[T.g.sb] = f.args[0], p[T.g.Hb] = f.args[1], p);
                        vm(this, T.g.Ua, q, f)
                }
                this.commands.shift();
                wm(this, f)
            }
        }
        this.commands.push.apply(this.commands,
            c);
        d && this.flush()
    };
    var wm = function(a, b) {
            if (b.type !== "require")
                if (b.j)
                    for (var c = qm(a, b.j).C[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.destinations)
                        if (a.destinations.hasOwnProperty(e)) {
                            var f = a.destinations[e];
                            if (f && f.C)
                                for (var g = f.C[b.type] || [], k = 0; k < g.length; k++) g[k]()
                        }
        },
        mm = new um;
    var xm = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        ym = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var zm = function(a, b, c) {
            a.addEventListener && a.addEventListener(b, c, !1)
        },
        Am = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        };
    var Bm, Cm;
    a: {
        for (var Dm = ["CLOSURE_FLAGS"], Em = za, Fm = 0; Fm < Dm.length; Fm++)
            if (Em = Em[Dm[Fm]], Em == null) {
                Cm = null;
                break a
            }
        Cm = Em
    }
    var Gm = Cm && Cm[610401301];
    Bm = Gm != null ? Gm : !1;

    function Hm() {
        var a = za.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var Im, Jm = za.navigator;
    Im = Jm ? Jm.userAgentData || null : null;

    function Km(a) {
        return Bm ? Im ? Im.brands.some(function(b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1
        }) : !1 : !1
    }

    function Lm(a) {
        return Hm().indexOf(a) != -1
    };

    function Mm() {
        return Bm ? !!Im && Im.brands.length > 0 : !1
    }

    function Nm() {
        return Mm() ? !1 : Lm("Opera")
    }

    function Om() {
        return Lm("Firefox") || Lm("FxiOS")
    }

    function Pm() {
        return Mm() ? Km("Chromium") : (Lm("Chrome") || Lm("CriOS")) && !(Mm() ? 0 : Lm("Edge")) || Lm("Silk")
    };

    function Qm() {
        return Bm ? !!Im && !!Im.platform : !1
    }

    function Rm() {
        return Lm("iPhone") && !Lm("iPod") && !Lm("iPad")
    }

    function Sm() {
        Rm() || Lm("iPad") || Lm("iPod")
    };
    var Tm = function(a) {
        Tm[" "](a);
        return a
    };
    Tm[" "] = function() {};
    Nm();
    Mm() || Lm("Trident") || Lm("MSIE");
    Lm("Edge");
    !Lm("Gecko") || Hm().toLowerCase().indexOf("webkit") != -1 && !Lm("Edge") || Lm("Trident") || Lm("MSIE") || Lm("Edge");
    Hm().toLowerCase().indexOf("webkit") != -1 && !Lm("Edge") && Lm("Mobile");
    Qm() || Lm("Macintosh");
    Qm() || Lm("Windows");
    (Qm() ? Im.platform === "Linux" : Lm("Linux")) || Qm() || Lm("CrOS");
    Qm() || Lm("Android");
    Rm();
    Lm("iPad");
    Lm("iPod");
    Sm();
    Hm().toLowerCase().indexOf("kaios");
    var Um = function(a, b, c, d) {
            for (var e = b, f = c.length;
                (e = a.indexOf(c, e)) >= 0 && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (g == 38 || g == 63) {
                    var k = a.charCodeAt(e + f);
                    if (!k || k == 61 || k == 38 || k == 35) return e
                }
                e += f + 1
            }
            return -1
        },
        Vm = /#|$/,
        Wm = function(a, b) {
            var c = a.search(Vm),
                d = Um(a, 0, b, c);
            if (d < 0) return null;
            var e = a.indexOf("&", d);
            if (e < 0 || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
        },
        Xm = /[?&]($|#)/,
        Ym = function(a, b, c) {
            for (var d, e = a.search(Vm), f = 0, g, k = [];
                (g = Um(a, f, b, e)) >= 0;) k.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            k.push(a.slice(f));
            d = k.join("").replace(Xm, "$1");
            var m, n = c != null ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                r < 0 && (r = d.length);
                var t = d.indexOf("?"),
                    v;
                t < 0 || t > r ? (t = r, v = "") : v = d.substring(t + 1, r);
                q = [d.slice(0, t), v, d.slice(r)];
                var u = q[1];
                q[1] = p ? u ? u + "&" + p : p : u;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var Zm = function(a) {
            try {
                var b;
                if (b = !!a && a.location.href != null) a: {
                    try {
                        Tm(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        $m = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        an = function(a) {
            if (C.top == C) return 0;
            if (a === void 0 ? 0 : a) {
                var b = C.location.ancestorOrigins;
                if (b) return b[b.length - 1] == C.location.origin ? 1 : 2
            }
            return Zm(C.top) ? 1 : 2
        },
        bn = function(a) {
            a = a === void 0 ? document : a;
            return a.createElement("img")
        };

    function cn(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = bn(a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        k = lc(g, e);
                    k >= 0 && Array.prototype.splice.call(g, k, 1)
                }
                Am(e, "load", f);
                Am(e, "error", f)
            };
            zm(e, "load", f);
            zm(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var en = function(a) {
            var b;
            b = b === void 0 ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            $m(a, function(d, e) {
                if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            dn(c, b)
        },
        dn = function(a, b) {
            var c = window,
                d;
            b = b === void 0 ? !1 : b;
            d = d === void 0 ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else cn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d)
        };
    var fn = function() {
        this.P = this.P;
        this.C = this.C
    };
    fn.prototype.P = !1;
    fn.prototype.dispose = function() {
        this.P || (this.P = !0, this.Qa())
    };
    fn.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    fn.prototype.addOnDisposeCallback = function(a, b) {
        this.P ? b !== void 0 ? a.call(b) : a() : (this.C || (this.C = []), b && (a = a.bind(b)), this.C.push(a))
    };
    fn.prototype.Qa = function() {
        if (this.C)
            for (; this.C.length;) this.C.shift()()
    };
    var gn = function(a) {
            a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
            a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
            return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
        },
        hn = function(a, b) {
            b = b === void 0 ? {} : b;
            fn.call(this);
            this.H = a;
            this.j = null;
            this.Z = {};
            this.Lf = 0;
            var c;
            this.ne = (c = b.bn) != null ? c : 500;
            var d;
            this.Bc = (d = b.Hn) != null ? d : !1;
            this.K =
                null
        };
    wa(hn, fn);
    hn.prototype.Qa = function() {
        this.Z = {};
        this.K && (Am(this.H, "message", this.K), delete this.K);
        delete this.Z;
        delete this.H;
        delete this.j;
        fn.prototype.Qa.call(this)
    };
    var kn = function(a) {
        return typeof a.H.__tcfapi === "function" || jn(a) != null
    };
    hn.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.Bc
            },
            d = ym(function() {
                return a(c)
            }),
            e = 0;
        this.ne !== -1 && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.ne));
        var f = function(g, k) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = gn(c), c.internalBlockOnErrors = b.Bc, k && c.internalErrorState === 0 || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            ln(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    hn.prototype.removeEventListener = function(a) {
        a && a.listenerId && ln(this, "removeEventListener", null, a.listenerId)
    };
    var nn = function(a, b, c) {
            var d;
            d = d === void 0 ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (f !== void 0) {
                        e = f[d === void 0 ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (g === 0) return !1;
            var k = c;
            c === 2 ? (k = 0, g === 2 && (k = 1)) : c === 3 && (k = 1, g === 1 && (k = 0));
            var m;
            if (k === 0)
                if (a.purpose && a.vendor) {
                    var n = mn(a.vendor.consents, d === void 0 ? "755" : d);
                    m = n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : n && mn(a.purpose.consents, b)
                } else m = !0;
            else m = k === 1 ? a.purpose && a.vendor ? mn(a.purpose.legitimateInterests,
                b) && mn(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
            return m
        },
        mn = function(a, b) {
            return !(!a || !a[b])
        },
        ln = function(a, b, c, d) {
            c || (c = function() {});
            if (typeof a.H.__tcfapi === "function") {
                var e = a.H.__tcfapi;
                e(b, 2, c, d)
            } else if (jn(a)) {
                on(a);
                var f = ++a.Lf;
                a.Z[f] = c;
                if (a.j) {
                    var g = {};
                    a.j.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        jn = function(a) {
            if (a.j) return a.j;
            var b;
            a: {
                for (var c = a.H, d = 0; d < 50; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (k) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (k) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.j = b;
            return a.j
        },
        on = function(a) {
            a.K || (a.K = function(b) {
                try {
                    var c;
                    c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.Z[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, zm(a.H, "message", a.K))
        },
        pn = function(a) {
            if (a.gdprApplies === !1) return !0;
            a.internalErrorState === void 0 && (a.internalErrorState = gn(a));
            return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ?
                (en({
                    e: String(a.internalErrorState)
                }), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
        };
    var qn = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function rn() {
        var a = ii.tcf || {};
        return ii.tcf = a
    }
    var sn = function() {
        return new hn(C, {
            bn: -1
        })
    };

    function tn() {
        var a = rn(),
            b = sn();
        kn(b) && !un() && !vn() && Q(124);
        if (!a.active && kn(b)) {
            un() && (a.active = !0, a.fc = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, pk().active = !0, a.tcString = "tcunavailable");
            el();
            try {
                b.addEventListener(function(c) {
                    if (c.internalErrorState !== 0) wn(a), fl([T.g.O, T.g.sa, T.g.N]), pk().active = !0;
                    else if (a.gdprApplies = c.gdprApplies, a.cmpId = c.cmpId, a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode, vn() && (a.active = !0), !xn(c) || un() || vn()) {
                        a.tcfPolicyVersion = c.tcfPolicyVersion;
                        var d;
                        if (c.gdprApplies ===
                            !1) {
                            var e = {},
                                f;
                            for (f in qn) qn.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if (xn(c)) {
                            var g = {},
                                k;
                            for (k in qn)
                                if (qn.hasOwnProperty(k))
                                    if (k === "1") {
                                        var m, n = c,
                                            p = {
                                                Jl: !0
                                            };
                                        p = p === void 0 ? {} : p;
                                        m = pn(n) ? n.gdprApplies === !1 ? !0 : n.tcString === "tcunavailable" ? !p.Pj : (p.Pj || n.gdprApplies !== void 0 || p.Jl) && (p.Pj || typeof n.tcString === "string" && n.tcString.length) ? nn(n, "1", 0) : !0 : !1;
                                        g["1"] = m
                                    } else g[k] = nn(c, k, qn[k]);
                            d = g
                        }
                        if (d) {
                            a.tcString = c.tcString || "tcempty";
                            a.fc = d;
                            var q = {},
                                r = (q[T.g.O] = a.fc["1"] ? "granted" :
                                    "denied", q);
                            a.gdprApplies !== !0 ? (fl([T.g.O, T.g.sa, T.g.N]), pk().active = !0) : (r[T.g.sa] = a.fc["3"] && a.fc["4"] ? "granted" : "denied", typeof a.tcfPolicyVersion === "number" && a.tcfPolicyVersion >= 4 ? r[T.g.N] = a.fc["1"] && a.fc["7"] ? "granted" : "denied" : fl([T.g.N]), $k(r, {
                                eventId: 0
                            }, {
                                gdprApplies: a ? a.gdprApplies : void 0,
                                tcString: yn() || ""
                            }))
                        }
                    } else fl([T.g.O, T.g.sa, T.g.N])
                })
            } catch (c) {
                wn(a), fl([T.g.O, T.g.sa, T.g.N]), pk().active = !0
            }
        }
    }

    function wn(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function xn(a) {
        return a.eventStatus === "tcloaded" || a.eventStatus === "useractioncomplete" || a.eventStatus === "cmpuishown"
    }

    function un() {
        return C.gtag_enable_tcf_support === !0
    }

    function vn() {
        return rn().enableAdvertiserConsentMode === !0
    }

    function yn() {
        var a = rn();
        if (a.active) return a.tcString
    }

    function zn() {
        var a = rn();
        if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0"
    }

    function An(a) {
        if (!qn.hasOwnProperty(String(a))) return !0;
        var b = rn();
        return b.active && b.fc ? !!b.fc[String(a)] : !0
    }
    var Bn = [T.g.O, T.g.U, T.g.N, T.g.sa],
        Cn = {},
        Dn = (Cn[T.g.O] = 1, Cn[T.g.U] = 2, Cn);

    function En(a) {
        if (a === void 0) return 0;
        switch (V(a, T.g.ja)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }

    function Fn(a) {
        if (Ok() === "US-CO" && nc.globalPrivacyControl === !0) return !1;
        var b = En(a);
        if (b === 3) return !1;
        switch (yk(T.g.sa)) {
            case 1:
            case 3:
                return !0;
            case 2:
                return !1;
            case 4:
                return b === 2;
            case 0:
                return !0;
            default:
                return !1
        }
    }

    function Gn() {
        return Bk() || !xk(T.g.O) || !xk(T.g.U)
    }

    function Hn() {
        var a = {},
            b;
        for (b in Dn) Dn.hasOwnProperty(b) && (a[Dn[b]] = yk(b));
        return "G1" + Ee(a[1] || 0) + Ee(a[2] || 0)
    }
    var In = {},
        Jn = (In[T.g.O] = 0, In[T.g.U] = 1, In[T.g.N] = 2, In[T.g.sa] = 3, In);

    function Kn(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }

    function Ln(a) {
        for (var b = "1", c = 0; c < Bn.length; c++) {
            var d = b,
                e, f = Bn[c],
                g = wk.delegatedConsentTypes[f];
            e = g === void 0 ? 0 : Jn.hasOwnProperty(g) ? 12 | Jn[g] : 8;
            var k = pk();
            k.accessedAny = !0;
            var m = k.entries[f] || {};
            e = e << 2 | Kn(m.implicit);
            b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [Kn(m.declare) << 4 | Kn(m.default) << 2 | Kn(m.update)])
        }
        var n = b,
            p = (Ok() === "US-CO" && nc.globalPrivacyControl === !0 ? 1 : 0) << 3,
            q = (Bk() ? 1 : 0) << 2,
            r = En(a);
        b =
            n + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [p | q | r];
        O(104) && (b += "" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [wk.containerScopedDefaults.ad_storage << 4 | wk.containerScopedDefaults.analytics_storage << 2 | wk.containerScopedDefaults.ad_user_data] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [(kb(8) && wk.usedContainerScopedDefaults ? 1 : 0) << 2 | wk.containerScopedDefaults.ad_personalization]);
        return b
    }

    function Mn() {
        if (!xk(T.g.N)) return "-";
        for (var a = Object.keys(gi), b = zk(a), c = "", d = h(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            b[f] && (c += gi[f])
        }(wk.usedCorePlatformServices ? wk.selectedAllCorePlatformServices : 1) && (c += "o");
        return c || "-"
    }

    function Nn() {
        return Qk() || (un() || vn()) && zn() === "1" ? "1" : "0"
    }

    function On() {
        return (Qk() ? !0 : !(!un() && !vn()) && zn() === "1") || !xk(T.g.N)
    }

    function Vn() {
        var a = "0",
            b = "0",
            c;
        var d = rn();
        c = d.active ? d.cmpId : void 0;
        typeof c === "number" && c >= 0 && c <= 4095 && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
        var e = "0",
            f;
        var g = rn();
        f = g.active ? g.tcfPolicyVersion : void 0;
        typeof f === "number" && f >= 0 && f <= 63 && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
        var k = 0;
        Qk() && (k |= 1);
        zn() === "1" && (k |= 2);
        un() && (k |= 4);
        var m;
        var n = rn();
        m = n.enableAdvertiserConsentMode !==
            void 0 ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
        m === "1" && (k |= 8);
        pk().waitPeriodTimedOut && (k |= 16);
        return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [k]
    }

    function Wn() {
        return Ok() === "US-CO"
    };

    function Xn() {
        var a = !1;
        return a
    };
    var Yn = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    };

    function Zn(a) {
        a = a === void 0 ? {} : a;
        var b = Nf.ctid.split("-")[0].toUpperCase(),
            c = {};
        c.ctid = Nf.ctid;
        c.Km = hi.te;
        c.Om = hi.Yg;
        c.lm = Aj.pe ? 2 : 1;
        c.Um = a.ek;
        c.Ae = Nf.canonicalContainerId;
        c.Ae !== a.ra && (c.ra = a.ra);
        var d = Kj();
        c.Am = d ? d.canonicalContainerId : void 0;
        oi ? (c.Xf = Yn[b], c.Xf || (c.Xf = 0)) : c.Xf = si ? 13 : 10;
        Bi.H ? (c.Vf = 0, c.nl = 2) : qi ? c.Vf = 1 : Xn() ? c.Vf = 2 : c.Vf = 3;
        var e = {};
        e[6] = Bj;
        Bi.C === 2 ? e[7] = !0 : Bi.C === 1 && (e[2] = !0);
        c.ql = e;
        var f = a.Nf,
            g;
        var k = c.Xf,
            m = c.Vf;
        k === void 0 ? g = "" : (m || (m = 0), g = "" + Ge(1, 1) + De(k << 2 | m));
        var n = c.nl,
            p = "4" + g +
            (n ? "" + Ge(2, 1) + De(n) : ""),
            q, r = c.Om;
        q = r && Fe.test(r) ? "" + Ge(3, 2) + r : "";
        var t, v = c.Km;
        t = v ? "" + Ge(4, 1) + De(v) : "";
        var u;
        var w = c.ctid;
        if (w && f) {
            var x = w.split("-"),
                y = x[0].toUpperCase();
            if (y !== "GTM" && y !== "OPT") u = "";
            else {
                var A = x[1];
                u = "" + Ge(5, 3) + De(1 + A.length) + (c.lm || 0) + A
            }
        } else u = "";
        var B = c.Um,
            D = c.Ae,
            H = c.ra,
            J = c.On,
            G = p + q + t + u + (B ? "" + Ge(6, 1) + De(B) : "") + (D ? "" + Ge(7, 3) + De(D.length) + D : "") + (H ? "" + Ge(8, 3) + De(H.length) + H : "") + (J ? "" + Ge(9, 3) + De(J.length) + J : ""),
            U;
        var L = c.ql;
        L = L === void 0 ? {} : L;
        for (var R = [], X = h(Object.keys(L)), aa = X.next(); !aa.done; aa =
            X.next()) {
            var S = aa.value;
            R[Number(S)] = L[S]
        }
        if (R.length) {
            var P = Ge(10, 3),
                ka;
            if (R.length === 0) ka = De(0);
            else {
                for (var na = [], ia = 0, xa = !1, Oa = 0; Oa < R.length; Oa++) {
                    xa = !0;
                    var Ea = Oa % 6;
                    R[Oa] && (ia |= 1 << Ea);
                    Ea === 5 && (na.push(De(ia)), ia = 0, xa = !1)
                }
                xa && na.push(De(ia));
                ka = na.join("")
            }
            var Sa = ka;
            U = "" + P + De(Sa.length) + Sa
        } else U = "";
        var $a = c.Am;
        return G + U + ($a ? "" + Ge(11, 3) + De($a.length) + $a : "")
    };
    var $n = {
            yj: "service_worker_endpoint",
            ah: "shared_user_id",
            bh: "shared_user_id_requested",
            ve: "shared_user_id_source"
        },
        ao;

    function bo(a) {
        if (!ao) {
            ao = {};
            for (var b = h(Object.keys($n)), c = b.next(); !c.done; c = b.next()) ao[$n[c.value]] = !0
        }
        return !!ao[a]
    }

    function co(a, b) {
        b = b === void 0 ? !1 : b;
        if (bo(a)) {
            var c, d, e = (d = (c = rc("google_tag_data", {})).xcd) != null ? d : c.xcd = {};
            if (e[a]) return e[a];
            if (b) {
                var f = void 0,
                    g = 1,
                    k = {},
                    m = {
                        set: function(n) {
                            f = n;
                            m.notify()
                        },
                        get: function() {
                            return f
                        },
                        subscribe: function(n) {
                            k[String(g)] = n;
                            return g++
                        },
                        unsubscribe: function(n) {
                            var p = String(n);
                            return k.hasOwnProperty(p) ? (delete k[p], !0) : !1
                        },
                        notify: function() {
                            for (var n = h(Object.keys(k)), p = n.next(); !p.done; p = n.next()) {
                                var q = p.value;
                                try {
                                    k[q](a, f)
                                } catch (r) {}
                            }
                        }
                    };
                return e[a] = m
            }
        }
    }

    function eo(a, b) {
        var c = co(a, !0);
        c && c.set(b)
    }

    function fo(a) {
        var b;
        return (b = co(a)) == null ? void 0 : b.get()
    }

    function go(a, b) {
        if (typeof b === "function") {
            var c;
            return (c = co(a, !0)) == null ? void 0 : c.subscribe(b)
        }
    }

    function ho(a, b) {
        var c = co(a);
        return c ? c.unsubscribe(b) : !1
    };

    function io(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; d >= 0; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = c !== 0 ? b ^ c >> 21 : b;
        return b
    };

    function jo(a) {
        return a.origin !== "null"
    };

    function ko(a, b, c, d) {
        var e;
        if (lo(d)) {
            for (var f = [], g = String(b || mo()).split(";"), k = 0; k < g.length; k++) {
                var m = g[k].split("="),
                    n = m[0].replace(/^\s*|\s*$/g, "");
                if (n && n === a) {
                    var p = m.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    p && c && (p = decodeURIComponent(p));
                    f.push(p)
                }
            }
            e = f
        } else e = [];
        return e
    }

    function no(a, b, c, d, e) {
        if (lo(e)) {
            var f = oo(a, d, e);
            if (f.length === 1) return f[0].id;
            if (f.length !== 0) {
                f = po(f, function(g) {
                    return g.zl
                }, b);
                if (f.length === 1) return f[0].id;
                f = po(f, function(g) {
                    return g.Cm
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    }

    function qo(a, b, c, d) {
        var e = mo(),
            f = window;
        jo(f) && (f.document.cookie = a);
        var g = mo();
        return e !== g || c !== void 0 && ko(b, g, !1, d).indexOf(c) >= 0
    }

    function ro(a, b, c, d) {
        function e(w, x, y) {
            if (y == null) return delete k[x], w;
            k[x] = y;
            return w + "; " + x + "=" + y
        }

        function f(w, x) {
            if (x == null) return w;
            k[x] = !0;
            return w + "; " + x
        }
        if (!lo(c.Bb)) return 2;
        var g;
        b == null ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = so(b), g = a + "=" + b);
        var k = {};
        g = e(g, "path", c.path);
        var m;
        c.expires instanceof Date ? m = c.expires.toUTCString() : c.expires != null && (m = "" + c.expires);
        g = e(g, "expires", m);
        g = e(g, "max-age", c.sm);
        g = e(g, "samesite", c.Pm);
        c.secure &&
            (g = f(g, "secure"));
        var n = c.domain;
        if (n && n.toLowerCase() === "auto") {
            for (var p = to(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                var v = p[t] !== "none" ? p[t] : void 0,
                    u = e(g, "domain", v);
                u = f(u, c.flags);
                try {
                    d && d(a, k)
                } catch (w) {
                    q = w;
                    continue
                }
                r = !0;
                if (!uo(v, c.path) && qo(u, a, b, c.Bb)) return 0
            }
            if (q && !r) throw q;
            return 1
        }
        n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, k);
        return uo(n, c.path) ? 1 : qo(g, a, b, c.Bb) ? 0 : 1
    }

    function vo(a, b, c) {
        c.path == null && (c.path = "/");
        c.domain || (c.domain = "auto");
        return ro(a, b, c)
    }

    function po(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ? d.push(k) : f === void 0 || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return d.length > 0 ? d : e
    }

    function oo(a, b, c) {
        for (var d = [], e = ko(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || !k || b.indexOf(k) !== -1) {
                var m = g.shift();
                if (m) {
                    var n = m.split("-");
                    d.push({
                        id: g.join("."),
                        zl: Number(n[0]) || 1,
                        Cm: Number(n[1]) || 1
                    })
                }
            }
        }
        return d
    }

    function so(a) {
        a && a.length > 1200 && (a = a.substring(0, 1200));
        return a
    }
    var wo = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        xo = /(^|\.)doubleclick\.net$/i;

    function uo(a, b) {
        return a !== void 0 && (xo.test(window.document.location.hostname) || b === "/" && wo.test(a))
    }

    function yo(a) {
        if (!a) return 1;
        var b = a;
        kb(11) && a === "none" && (b = window.document.location.hostname);
        b = b.indexOf(".") === 0 ? b.substring(1) : b;
        return b.split(".").length
    }

    function zo(a) {
        if (!a || a === "/") return 1;
        a[0] !== "/" && (a = "/" + a);
        a[a.length - 1] !== "/" && (a += "/");
        return a.split("/").length - 1
    }

    function Ao(a, b) {
        var c = "" + yo(a),
            d = zo(b);
        d > 1 && (c += "-" + d);
        return c
    }
    var mo = function() {
            return jo(window) ? window.document.cookie : ""
        },
        lo = function(a) {
            return a && kb(12) ? (Array.isArray(a) ? a : [a]).every(function(b) {
                return Ak(b) && xk(b)
            }) : !0
        },
        to = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (b.length === 4) {
                var c = b[b.length - 1];
                if (Number(c).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            xo.test(e) || wo.test(e) || a.push("none");
            return a
        };

    function Bo(a) {
        var b = Math.round(Math.random() * 2147483647);
        return a ? String(b ^ io(a) & 2147483647) : String(b)
    }

    function Co(a) {
        return [Bo(a), Math.round(zb() / 1E3)].join(".")
    }

    function Do(a, b, c, d, e) {
        var f = yo(b);
        return no(a, f, zo(c), d, e)
    }

    function Eo(a, b, c, d) {
        return [b, Ao(c, d), a].join(".")
    };

    function Fo(a, b, c, d) {
        var e, f = Number(a.Ab != null ? a.Ab : void 0);
        f !== 0 && (e = new Date((b || zb()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Bb: d
        }
    };
    var Go;

    function Ho() {
        function a(g) {
            c(g.target || g.srcElement || {})
        }

        function b(g) {
            d(g.target || g.srcElement || {})
        }
        var c = Io,
            d = Jo,
            e = Ko();
        if (!e.init) {
            Bc(E, "mousedown", a);
            Bc(E, "keyup", a);
            Bc(E, "submit", b);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                d(this);
                f.call(this)
            };
            e.init = !0
        }
    }

    function Lo(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: c === 2,
            placement: c,
            forms: d,
            sameHost: e
        };
        Ko().decorators.push(f)
    }

    function Mo(a, b, c) {
        for (var d = Ko().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f],
                k;
            if (k = !c || g.forms) a: {
                var m = g.domains,
                    n = a,
                    p = !!g.sameHost;
                if (m && (p || n !== E.location.hostname))
                    for (var q = 0; q < m.length; q++)
                        if (m[q] instanceof RegExp) {
                            if (m[q].test(n)) {
                                k = !0;
                                break a
                            }
                        } else if (n.indexOf(m[q]) >= 0 || p && m[q].indexOf(n) >= 0) {
                    k = !0;
                    break a
                }
                k = !1
            }
            if (k) {
                var r = g.placement;
                r === void 0 && (r = g.fragment ? 2 : 1);
                r === b && Cb(e, g.callback())
            }
        }
        return e
    }

    function Ko() {
        var a = rc("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var No = /(.*?)\*(.*?)\*(.*)/,
        Oo = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Po = /^(?:www\.|m\.|amp\.)+/,
        Qo = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Ro(a) {
        var b = Qo.exec(a);
        if (b) return {
            Mh: b[1],
            query: b[2],
            fragment: b[3]
        }
    }

    function So(a, b) {
        var c = [nc.userAgent, (new Date).getTimezoneOffset(), nc.userLanguage || nc.language, Math.floor(zb() / 60 / 1E3) - (b === void 0 ? 0 : b), a].join("*"),
            d;
        if (!(d = Go)) {
            for (var e = Array(256), f = 0; f < 256; f++) {
                for (var g = f, k = 0; k < 8; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Go = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Go[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function To() {
        return function(a) {
            var b = aj(C.location.href),
                c = b.search.replace("?", ""),
                d = Ui(c, "_gl", !1, !0) || "";
            a.query = Uo(d) || {};
            var e = Vi(b, "fragment"),
                f;
            var g = -1;
            if (Eb(e, "_gl=")) g = 4;
            else {
                var k = e.indexOf("&_gl=");
                k > 0 && (g = k + 3 + 2)
            }
            if (g < 0) f = void 0;
            else {
                var m = e.indexOf("&", g);
                f = m < 0 ? e.substring(g) : e.substring(g, m)
            }
            a.fragment = Uo(f || "") || {}
        }
    }

    function Vo(a) {
        var b = To(),
            c = Ko();
        c.data || (c.data = {
            query: {},
            fragment: {}
        }, b(c.data));
        var d = {},
            e = c.data;
        e && (Cb(d, e.query), a && Cb(d, e.fragment));
        return d
    }
    var Uo = function(a) {
        try {
            var b = Wo(a, 3);
            if (b !== void 0) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e],
                        g = db(d[e + 1]);
                    c[f] = g
                }
                fb("TAGGING", 6);
                return c
            }
        } catch (k) {
            fb("TAGGING", 8)
        }
    };

    function Wo(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; e < 3; ++e) {
                    var f = No.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && g[1] === "1") {
                var k = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === So(k, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return k;
                fb("TAGGING", 7)
            }
        }
    }

    function Xo(a, b, c, d, e) {
        function f(p) {
            var q = p,
                r = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(q),
                t = q;
            if (r) {
                var v = r[2],
                    u = r[4];
                t = r[1];
                u && (t = t + v + u)
            }
            p = t;
            var w = p.charAt(p.length - 1);
            p && w !== "&" && (p += "&");
            return p + n
        }
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var g = Ro(c);
        if (!g) return "";
        var k = g.query || "",
            m = g.fragment || "",
            n = a + "=" + b;
        d ? m.substring(1).length !== 0 && e || (m = "#" + f(m.substring(1))) : k = "?" + f(k.substring(1));
        return "" + g.Mh + k + m
    }

    function Yo(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var t in n)
                    if (n.hasOwnProperty(t)) {
                        r = !0;
                        break a
                    }
                r = !1
            }
            if (r) {
                var v, u = [],
                    w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        x !== void 0 && x === x && x !== null && x.toString() !== "[object Object]" && (u.push(w), u.push(cb(String(x))))
                    }
                var y = u.join("*");
                v = ["1", So(y), y].join("*");
                d ? (kb(4) || kb(1) || !p) && Zo("_gl", v, a, p, q) : $o("_gl", v, a, p, q)
            }
        }
        var d = (a.tagName || "").toUpperCase() === "FORM",
            e = Mo(b, 1, d),
            f = Mo(b, 2, d),
            g = Mo(b, 4, d),
            k = Mo(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        kb(1) && c(g, !0, !0);
        for (var m in k) k.hasOwnProperty(m) &&
            ap(m, k[m], a)
    }

    function ap(a, b, c) {
        c.tagName.toLowerCase() === "a" ? $o(a, b, c) : c.tagName.toLowerCase() === "form" && Zo(a, b, c)
    }

    function $o(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var f;
        if (f = c.href) {
            var g;
            if (!(g = !kb(5) || d)) {
                var k = C.location.href,
                    m = Ro(c.href),
                    n = Ro(k);
                g = !(m && n && m.Mh === n.Mh && m.query === n.query && m.fragment)
            }
            f = g
        }
        if (f) {
            var p = Xo(a, b, c.href, d, e);
            ec.test(p) && (c.href = p)
        }
    }

    function Zo(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if (f !== "get" || d) {
                if (f === "get" || f === "post") {
                    var g = Xo(a, b, c.action, d, e);
                    ec.test(g) && (c.action = g)
                }
            } else {
                for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
                    var p = k[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = E.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }

    function Io(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && d > 0;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                f !== "http:" && f !== "https:" || Yo(e, e.hostname)
            }
        } catch (g) {}
    }

    function Jo(a) {
        try {
            if (a.action) {
                var b = Vi(aj(a.action), "host");
                Yo(a, b)
            }
        } catch (c) {}
    }

    function bp(a, b, c, d) {
        Ho();
        var e = c === "fragment" ? 2 : 1;
        d = !!d;
        Lo(a, b, e, d, !1);
        e === 2 && fb("TAGGING", 23);
        d && fb("TAGGING", 24)
    }

    function cp(a, b) {
        Ho();
        Lo(a, [Xi(C.location, "host", !0)], b, !0, !0)
    }

    function dp() {
        var a = E.location.hostname,
            b = Oo.exec(E.referrer);
        if (!b) return !1;
        var c = b[2],
            d = b[1],
            e = "";
        if (c) {
            var f = c.split("/"),
                g = f[1];
            e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (d.indexOf("xn--") === 0) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var k = a.replace(Po, ""),
            m = e.replace(Po, "");
        return k === m || Fb(k, "." + m)
    }

    function ep(a, b) {
        return a === !1 ? !1 : a || b || dp()
    };
    var fp = ["1"],
        gp = {},
        hp = {};

    function ip(a, b) {
        b = b === void 0 ? !0 : b;
        var c = jp(a.prefix);
        if (!gp[c])
            if (kp(c, a.path, a.domain)) {
                var d = hp[jp(a.prefix)];
                lp(a, d ? d.id : void 0, d ? d.Hh : void 0)
            } else {
                var e = cj("auiddc");
                if (e) fb("TAGGING", 17), gp[c] = e;
                else if (b) {
                    var f = jp(a.prefix),
                        g = Co();
                    mp(f, g, a);
                    kp(c, a.path, a.domain)
                }
            }
    }

    function lp(a, b, c) {
        var d = jp(a.prefix),
            e = gp[d];
        if (e) {
            var f = e.split(".");
            if (f.length === 2) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var k = e;
                    b && (k = e + "." + b + "." + (c ? c : Math.floor(zb() / 1E3)));
                    mp(d, k, a, g * 1E3)
                }
            }
        }
    }

    function mp(a, b, c, d) {
        var e = Eo(b, "1", c.domain, c.path),
            f = Fo(c, d);
        f.Bb = np();
        vo(a, e, f)
    }

    function kp(a, b, c) {
        var d = Do(a, b, c, fp, np());
        if (!d) return !1;
        op(a, d);
        return !0
    }

    function op(a, b) {
        var c = b.split(".");
        c.length === 5 ? (gp[a] = c.slice(0, 2).join("."), hp[a] = {
            id: c.slice(2, 4).join("."),
            Hh: Number(c[4]) || 0
        }) : c.length === 3 ? hp[a] = {
            id: c.slice(0, 2).join("."),
            Hh: Number(c[2]) || 0
        } : gp[a] = b
    }

    function jp(a) {
        return (a || "_gcl") + "_au"
    }

    function pp(a) {
        function b() {
            xk(c) && a()
        }
        var c = np();
        Ek(function() {
            b();
            xk(c) || Fk(b, c)
        }, c)
    }

    function qp(a) {
        var b = Vo(!0),
            c = jp(a.prefix);
        pp(function() {
            var d = b[c];
            if (d) {
                op(c, d);
                var e = Number(gp[c].split(".")[1]) * 1E3;
                if (e) {
                    fb("TAGGING", 16);
                    var f = Fo(a, e);
                    f.Bb = np();
                    var g = Eo(d, "1", a.domain, a.path);
                    vo(c, g, f)
                }
            }
        })
    }

    function rp(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                k = Do(a, e.path, e.domain, fp, np());
            k && (g[a] = k);
            return g
        };
        pp(function() {
            bp(f, b, c, d)
        })
    }

    function np() {
        return ["ad_storage", "ad_user_data"]
    };
    var sp = {},
        tp = (sp.k = {
            Fa: /^[\w-]+$/
        }, sp.b = {
            Fa: /^[\w-]+$/,
            Uh: !0
        }, sp.i = {
            Fa: /^[1-9]\d*$/
        }, sp.u = {
            Fa: /^[1-9]\d*$/
        }, sp);
    var up = {},
        xp = (up[5] = {
            pk: {
                2: vp
            },
            jh: ["k", "i", "b", "u"]
        }, up[4] = {
            pk: {
                2: vp,
                GCL: wp
            },
            jh: ["k", "i", "b"]
        }, up);

    function yp(a) {
        var b = xp[5];
        if (b) {
            var c = a.split(".")[0];
            if (c) {
                var d = b.pk[c];
                if (d) return d(a, 5)
            }
        }
    }

    function vp(a, b) {
        var c = a.split(".");
        if (c.length === 3) {
            var d = {},
                e = xp[b];
            if (e) {
                for (var f = e.jh, g = h(c[2].split("$")), k = g.next(); !k.done; k = g.next()) {
                    var m = k.value,
                        n = m[0];
                    if (f.indexOf(n) !== -1) try {
                        var p = decodeURIComponent(m.substring(1)),
                            q = tp[n];
                        q && (q.Uh ? (d[n] = d[n] || [], d[n].push(p)) : d[n] = p)
                    } catch (r) {}
                }
                return d
            }
        }
    }

    function zp(a, b) {
        var c = xp[5];
        if (c) {
            for (var d = [], e = h(c.jh), f = e.next(); !f.done; f = e.next()) {
                var g = f.value,
                    k = tp[g];
                if (k) {
                    var m = a[g];
                    if (m !== void 0)
                        if (k.Uh && Array.isArray(m))
                            for (var n = h(m), p = n.next(); !p.done; p = n.next()) d.push(encodeURIComponent("" + g + p.value));
                        else d.push(encodeURIComponent("" + g + m))
                }
            }
            return ["2", b || "1", d.join("$")].join(".")
        }
    }

    function wp(a) {
        var b = a.split(".");
        b.shift();
        var c = b.shift(),
            d = b.shift(),
            e = {};
        return e.k = d, e.i = c, e.b = b, e
    };
    var Ap = new Map([
        [5, "ad_storage"],
        [4, ["ad_storage", "ad_user_data"]]
    ]);

    function Bp(a) {
        if (xp[5]) {
            for (var b = [], c = ko(a, void 0, void 0, Ap.get(5)), d = h(c), e = d.next(); !e.done; e = d.next()) {
                var f = yp(e.value);
                f && (Cp(f), b.push(f))
            }
            return b
        }
    }

    function Dp(a, b, c, d) {
        c = c || {};
        var e = Ao(c.domain, c.path),
            f = zp(b, e);
        if (f) {
            var g = Fo(c, d, void 0, Ap.get(5));
            vo(a, f, g)
        }
    }

    function Ep(a, b) {
        var c = b.Fa;
        return typeof c === "function" ? c(a) : c.test(a)
    }

    function Cp(a) {
        for (var b = h(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
                Ce: void 0
            }, c = b.next()) {
            var e = c.value,
                f = a[e];
            d.Ce = tp[e];
            d.Ce ? d.Ce.Uh ? a[e] = Array.isArray(f) ? f.filter(function(g) {
                return function(k) {
                    return Ep(k, g.Ce)
                }
            }(d)) : void 0 : typeof f === "string" && Ep(f, d.Ce) || (a[e] = void 0) : a[e] = void 0
        }
    };

    function Fp(a) {
        for (var b = [], c = E.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                ai: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    }

    function Gp(a, b) {
        var c = Fp(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!(f[0] !== "1" || b && f.length < 3 || !b && f.length !== 3) && Number(f[1])) {
                d[c[e].ai] || (d[c[e].ai] = []);
                var g = {
                    version: f[0],
                    timestamp: Number(f[1]) * 1E3,
                    T: f[2]
                };
                b && f.length > 3 && (g.labels = f.slice(3));
                d[c[e].ai].push(g)
            }
        }
        return d
    };
    var Hp = ["ad_storage", "ad_user_data"];

    function Ip() {
        var a = Jp();
        if (a.error) return a;
        if (!a.value) return {
            error: 2
        };
        var b;
        try {
            b = a.value.gclid
        } catch (c) {
            return {
                error: 11
            }
        }
        return b ? {
            value: b
        } : {
            value: void 0
        }
    }

    function Jp() {
        if (!xk(Hp)) return {
            error: 3
        };
        if (!C.localStorage) return {
            error: 1
        };
        var a = {
                schema: "gcl",
                version: 1
            },
            b = void 0;
        try {
            b = C.localStorage.getItem("_gcl_ls")
        } catch (d) {
            return {
                error: 13
            }
        }
        try {
            if (b) {
                var c = JSON.parse(b);
                if (c && typeof c === "object") a = c;
                else return {
                    error: 12
                }
            }
        } catch (d) {
            return {
                error: 8
            }
        }
        if (a.schema !== "gcl") return {
            error: 4
        };
        if (a.version !== 1) return {
            error: 5
        };
        try {
            Kp(a)
        } catch (d) {
            return {
                error: 8
            }
        }
        return {
            value: a,
            error: 0
        }
    }

    function Kp(a) {
        if (a && typeof a === "object")
            if ("expires" in a && "value" in a) Date.now() > a.expires && (a.value = null, a.error = 9);
            else
                for (var b = h(Object.keys(a)), c = b.next(); !c.done; c = b.next()) Kp(a[c.value])
    };
    var Lp = /^\w+$/,
        Mp = /^[\w-]+$/,
        Np = {},
        Op = (Np.aw = "_aw", Np.dc = "_dc", Np.gf = "_gf", Np.gp = "_gp", Np.gs = "_gs", Np.ha = "_ha", Np.ag = "_ag", Np.gb = "_gb", Np);

    function Pp() {
        return ["ad_storage", "ad_user_data"]
    }

    function Qp(a) {
        return !kb(12) || xk(a)
    }

    function Rp(a, b) {
        function c() {
            var d = Qp(b);
            d && a();
            return d
        }
        Ek(function() {
            c() || Fk(c, b)
        }, b)
    }

    function Sp(a) {
        return Tp(a).map(function(b) {
            return b.T
        })
    }

    function Up(a) {
        return Vp(a).filter(function(b) {
            return b.T
        }).map(function(b) {
            return b.T
        })
    }

    function Vp(a) {
        var b = Wp(a.prefix),
            c = Xp("gb", b),
            d = Xp("ag", b);
        if (!d || !c) return [];
        var e = function(k) {
                return function(m) {
                    m.type = k;
                    return m
                }
            },
            f = Tp(c).map(e("gb")),
            g = (kb(7) ? Yp(d) : []).map(e("ag"));
        return f.concat(g).sort(function(k, m) {
            return m.timestamp - k.timestamp
        })
    }

    function Zp(a, b, c, d, e, f) {
        var g = pb(a, function(k) {
            return k.T === c
        });
        g ? (g.timestamp < d && (g.timestamp = d, g.wd = f), g.labels = $p(g.labels || [], e || [])) : a.push({
            version: b,
            T: c,
            timestamp: d,
            labels: e,
            wd: f
        })
    }

    function Yp(a) {
        for (var b = Bp(a) || [], c = [], d = h(b), e = d.next(); !e.done; e = d.next()) {
            var f = e.value,
                g = f,
                k = g.k,
                m = g.b,
                n = aq(f);
            if (n) {
                var p = void 0;
                kb(13) && (p = f.u);
                Zp(c, "2", k, n, m || [], p)
            }
        }
        return c.sort(function(q, r) {
            return r.timestamp - q.timestamp
        })
    }

    function Tp(a) {
        for (var b = [], c = ko(a, E.cookie, void 0, Pp()), d = h(c), e = d.next(); !e.done; e = d.next()) {
            var f = bq(e.value);
            if (f != null) {
                var g = f;
                Zp(b, g.version, g.T, g.timestamp, g.labels)
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return cq(b)
    }

    function dq(a, b) {
        for (var c = [], d = h(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            c.includes(f) || c.push(f)
        }
        for (var g = h(b), k = g.next(); !k.done; k = g.next()) {
            var m = k.value;
            c.includes(m) || c.push(m)
        }
        return c
    }

    function eq(a, b) {
        var c = pb(a, function(d) {
            return d.T === b.T
        });
        c ? (c.timestamp < b.timestamp && (c.timestamp = b.timestamp, c.wd = b.wd), c.Ka = c.Ka ? b.Ka ? c.timestamp < b.timestamp ? b.Ka : c.Ka : c.Ka || 0 : b.Ka || 0, c.labels = dq(c.labels || [], b.labels || []), c.Lc = dq(c.Lc || [], b.Lc || [])) : a.push(b)
    }

    function fq() {
        var a = Ip();
        if (!a || a.error || !a.value || typeof a.value !== "object") return null;
        var b = a.value;
        try {
            if (!("value" in b && b.value) || typeof b.value !== "object") return null;
            var c = b.value,
                d = c.value;
            return d && d.match(Mp) ? {
                version: "",
                T: d,
                timestamp: Number(c.creationTimeMs) || 0,
                labels: [],
                Ka: c.linkDecorationSource || 0,
                Lc: [2]
            } : null
        } catch (e) {
            return null
        }
    }

    function gq(a) {
        for (var b = [], c = ko(a, E.cookie, void 0, Pp()), d = h(c), e = d.next(); !e.done; e = d.next()) {
            var f = bq(e.value);
            f != null && (f.wd = void 0, f.Ka = 0, f.Lc = [1], eq(b, f))
        }
        var g = fq();
        g && (g.wd = void 0, g.Ka = g.Ka || 0, g.Lc = g.Lc || [2], eq(b, g));
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return cq(b)
    }

    function $p(a, b) {
        if (!a.length) return b;
        if (!b.length) return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }

    function Wp(a) {
        return a && typeof a === "string" && a.match(Lp) ? a : "_gcl"
    }

    function hq(a, b, c) {
        var d = aj(a),
            e = {
                value: Vi(d, "query", !1, void 0, "gclid"),
                Ka: c ? 4 : 2
            };
        if (b && !e.value) {
            var f = d.hash.replace("#", "");
            e.value = Ui(f, "gclid", !1);
            e.Ka = 3
        }
        return e.value ? [e] : []
    }

    function iq(a, b) {
        var c = kb(7),
            d = aj(a),
            e = Vi(d, "query", !1, void 0, "gclid"),
            f = Vi(d, "query", !1, void 0, "gclsrc"),
            g = Vi(d, "query", !1, void 0, "wbraid");
        g = Lb(g);
        var k;
        c && (k = Vi(d, "query", !1, void 0, "gbraid"));
        var m = Vi(d, "query", !1, void 0, "gad_source"),
            n = Vi(d, "query", !1, void 0, "dclid");
        if (b && (!e || !f || !g || c && !k)) {
            var p = d.hash.replace("#", "");
            e = e || Ui(p, "gclid", !1);
            f = f || Ui(p, "gclsrc", !1);
            g = g || Ui(p, "wbraid", !1);
            c && (k = k || Ui(p, "gbraid", !1));
            m = m || Ui(p, "gad_source", !1)
        }
        return jq(e, f, n, g, k, m)
    }

    function kq() {
        return iq(C.location.href, !0)
    }

    function jq(a, b, c, d, e, f) {
        var g = {},
            k = function(m, n) {
                g[n] || (g[n] = []);
                g[n].push(m)
            };
        g.gclid = a;
        g.gclsrc = b;
        g.dclid = c;
        if (a !== void 0 && a.match(Mp)) switch (b) {
            case void 0:
                k(a, "aw");
                break;
            case "aw.ds":
                k(a, "aw");
                k(a, "dc");
                break;
            case "ds":
                k(a, "dc");
                break;
            case "3p.ds":
                k(a, "dc");
                break;
            case "gf":
                k(a, "gf");
                break;
            case "ha":
                k(a, "ha")
        }
        c && k(c, "dc");
        d !== void 0 && Mp.test(d) && (g.wbraid = d, k(d, "gb"));
        kb(7) && e !== void 0 && Mp.test(e) && (g.gbraid = e, k(e, "ag"));
        f !== void 0 && Mp.test(f) && (g.gad_source = f, k(f, "gs"));
        return g
    }

    function lq(a) {
        var b = kq();
        if (kb(6)) {
            for (var c = !0, d = h(Object.keys(b)), e = d.next(); !e.done; e = d.next())
                if (b[e.value] !== void 0) {
                    c = !1;
                    break
                }
            c && (b = iq(C.document.referrer, !1), b.gad_source = void 0)
        }
        mq(b, !1, a)
    }

    function nq(a) {
        lq(a);
        var b = hq(C.location.href, !0, !1);
        kb(6) && !b.length && (b = hq(C.document.referrer, !1, !0));
        if (b.length) {
            var c = b[0];
            a = a || {};
            var d = zb(),
                e = Fo(a, d, !0),
                f = Pp(),
                g = function() {
                    if (Qp(f)) {
                        var k = {
                                value: {
                                    value: c.value,
                                    creationTimeMs: d,
                                    linkDecorationSource: c.Ka
                                },
                                expires: Number(e.expires)
                            },
                            m = Jp();
                        if (!m.error && m.value) a: if (m.value.gclid = k, !m.error && m.value) {
                            var n = m.value,
                                p;
                            try {
                                p = JSON.stringify(n)
                            } catch (q) {
                                break a
                            }
                            try {
                                C.localStorage.setItem("_gcl_ls", p)
                            } catch (q) {}
                        }
                    }
                };
            Ek(function() {
                    g();
                    Qp(f) || Fk(g, f)
                },
                f)
        }
    }

    function mq(a, b, c, d, e) {
        c = c || {};
        e = e || [];
        var f = Wp(c.prefix),
            g = d || zb(),
            k = Math.round(g / 1E3),
            m = Pp(),
            n = !1,
            p = !1,
            q = function() {
                if (Qp(m)) {
                    var r = Fo(c, g, !0);
                    r.Bb = m;
                    for (var t = function(G, U) {
                            var L = Xp(G, f);
                            L && (vo(L, U, r), G !== "gb" && (n = !0))
                        }, v = function(G) {
                            var U = ["GCL", k, G];
                            e.length > 0 && U.push(e.join("."));
                            return U.join(".")
                        }, u = h(["aw", "dc", "gf", "ha", "gp"]), w = u.next(); !w.done; w = u.next()) {
                        var x = w.value;
                        a[x] && t(x, v(a[x][0]))
                    }
                    if (!n && a.gb) {
                        var y = a.gb[0],
                            A = Xp("gb", f);
                        !b && Tp(A).some(function(G) {
                            return G.T === y && G.labels && G.labels.length >
                                0
                        }) || t("gb", v(y))
                    }
                }
                if (!p && kb(7) && a.gbraid && Qp("ad_storage") && (p = !0, !n)) {
                    var B = a.gbraid,
                        D = Xp("ag", f);
                    if (b || !(kb(7) ? Yp(D) : []).some(function(G) {
                            return G.T === B && G.labels && G.labels.length > 0
                        })) {
                        var H = {},
                            J = (H.k = B, H.i = "" + k, H.b = e, H);
                        Dp(D, J, c, g)
                    }
                }
                oq(a, f, g, c)
            };
        Ek(function() {
            q();
            Qp(m) || Fk(q, m)
        }, m)
    }

    function oq(a, b, c, d) {
        if (a.gad_source !== void 0 && Qp("ad_storage")) {
            var e = a.gad_source,
                f = Xp("gs", b);
            if (f) {
                var g = Math.round((zb() - (Nc() || 0)) / 1E3),
                    k;
                if (kb(13)) {
                    var m, n = String,
                        p = C.location.hostname,
                        q = C.location.pathname,
                        r = p = dj(p);
                    r.split(".").length > 2 && (r = r.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
                    p = r;
                    q = dj(q);
                    var t = q.split(";")[0];
                    t = t.replace(/\/(ar|slp|web|index)?\/?$/, "");
                    m = n(io(("" + p + t).toLowerCase()));
                    var v = {};
                    k = (v.k = e, v.i = "" + g, v.u = m, v)
                } else {
                    var u = {};
                    k = (u.k = e, u.i = "" + g, u)
                }
                Dp(f, k,
                    d, c)
            }
        }
    }

    function pq(a, b) {
        var c = Vo(!0);
        Rp(function() {
            for (var d = Wp(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (Op[f] !== void 0) {
                    var g = Xp(f, d),
                        k = c[g];
                    if (k) {
                        var m = Math.min(qq(k), zb()),
                            n;
                        b: {
                            for (var p = m, q = ko(g, E.cookie, void 0, Pp()), r = 0; r < q.length; ++r)
                                if (qq(q[r]) > p) {
                                    n = !0;
                                    break b
                                }
                            n = !1
                        }
                        if (!n) {
                            var t = Fo(b, m, !0);
                            t.Bb = Pp();
                            vo(g, k, t)
                        }
                    }
                }
            }
            mq(jq(c.gclid, c.gclsrc), !1, b)
        }, Pp())
    }

    function rq(a) {
        var b = [];
        kb(7) && b.push("ag");
        if (b.length !== 0) {
            var c = Vo(!0),
                d = Wp(a.prefix);
            Rp(function() {
                for (var e = 0; e < b.length; ++e) {
                    var f = Xp(b[e], d);
                    if (f) {
                        var g = c[f];
                        if (g) {
                            var k = yp(g);
                            if (k) {
                                var m = aq(k);
                                m || (m = zb());
                                var n;
                                a: {
                                    for (var p = m, q = Bp(f), r = 0; r < q.length; ++r)
                                        if (aq(q[r]) > p) {
                                            n = !0;
                                            break a
                                        }
                                    n = !1
                                }
                                if (n) break;
                                k.i = "" + Math.round(m / 1E3);
                                Dp(f, k, a, m)
                            }
                        }
                    }
                }
            }, ["ad_storage"])
        }
    }

    function Xp(a, b) {
        var c = Op[a];
        if (c !== void 0) return b + c
    }

    function qq(a) {
        return sq(a.split(".")).length !== 0 ? (Number(a.split(".")[1]) || 0) * 1E3 : 0
    }

    function aq(a) {
        return a ? (Number(a.i) || 0) * 1E3 : 0
    }

    function bq(a) {
        var b = sq(a.split("."));
        return b.length === 0 ? null : {
            version: b[0],
            T: b[2],
            timestamp: (Number(b[1]) || 0) * 1E3,
            labels: b.slice(3)
        }
    }

    function sq(a) {
        return a.length < 3 || a[0] !== "GCL" && a[0] !== "1" || !/^\d+$/.test(a[1]) || !Mp.test(a[2]) ? [] : a
    }

    function tq(a, b, c, d, e) {
        if (Array.isArray(b) && jo(C)) {
            var f = Wp(e),
                g = function() {
                    for (var k = {}, m = 0; m < a.length; ++m) {
                        var n = Xp(a[m], f);
                        if (n) {
                            var p = ko(n, E.cookie, void 0, Pp());
                            p.length && (k[n] = p.sort()[p.length - 1])
                        }
                    }
                    return k
                };
            Rp(function() {
                bp(g, b, c, d)
            }, Pp())
        }
    }

    function uq(a, b, c, d) {
        if (Array.isArray(a) && jo(C)) {
            var e = [];
            kb(7) && e.push("ag");
            if (e.length !== 0) {
                var f = Wp(d),
                    g = function() {
                        for (var k = {}, m = 0; m < e.length; ++m) {
                            var n = Xp(e[m], f);
                            if (!n) return {};
                            var p = Bp(n);
                            if (p.length) {
                                var q = p.sort(function(r, t) {
                                    return aq(t) - aq(r)
                                })[0];
                                k[n] = zp(q)
                            }
                        }
                        return k
                    };
                Rp(function() {
                    bp(g, a, b, c)
                }, ["ad_storage"])
            }
        }
    }

    function cq(a) {
        return a.filter(function(b) {
            return Mp.test(b.T)
        })
    }

    function vq(a, b) {
        if (jo(C)) {
            for (var c = Wp(b.prefix), d = {}, e = 0; e < a.length; e++) Op[a[e]] && (d[a[e]] = Op[a[e]]);
            Rp(function() {
                z(d, function(f, g) {
                    var k = ko(c + g, E.cookie, void 0, Pp());
                    k.sort(function(t, v) {
                        return qq(v) - qq(t)
                    });
                    if (k.length) {
                        var m = k[0],
                            n = qq(m),
                            p = sq(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
                            q = {},
                            r;
                        r = sq(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
                        q[f] = [r];
                        mq(q, !0, b, n, p)
                    }
                })
            }, Pp())
        }
    }

    function wq(a) {
        var b = [],
            c = [];
        kb(7) && (b.push("ag"), c.push("gbraid"));
        b.length !== 0 && Rp(function() {
            for (var d = Wp(a.prefix), e = 0; e < b.length; ++e) {
                var f = Xp(b[e], d);
                if (!f) break;
                var g = Bp(f);
                if (g.length) {
                    var k = g.sort(function(q, r) {
                            return aq(r) - aq(q)
                        })[0],
                        m = aq(k),
                        n = k.b,
                        p = {};
                    p[c[e]] = k.k;
                    mq(p, !0, a, m, n)
                }
            }
        }, ["ad_storage"])
    }

    function xq(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }

    function yq(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (Bk()) {
            var c = kq();
            if (xq(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.wbraid);
                kb(7) && b(d, "gbraid", c.gbraid);
                cp(function() {
                    return d
                }, 3);
                cp(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    }

    function zq(a) {
        if (!kb(1)) return null;
        var b = Vo(!0).gad_source;
        if (b != null) return C.location.hash = "", b;
        if (kb(2)) {
            var c = aj(C.location.href);
            b = Vi(c, "query", !1, void 0, "gad_source");
            if (b != null) return b;
            var d = kq();
            if (xq(d, a)) return "0"
        }
        return null
    }

    function Aq(a) {
        var b = zq(a);
        b != null && cp(function() {
            var c = {};
            return c.gad_source = b, c
        }, 4)
    }

    function Bq(a, b, c) {
        var d = [];
        if (b.length === 0) return d;
        for (var e = {}, f = 0; f < b.length; f++) {
            var g = b[f],
                k = g.type ? g.type : "gcl";
            (g.labels || []).indexOf(c) === -1 ? (a.push(0), e[k] || d.push(g)) : a.push(1);
            e[k] = !0
        }
        return d
    }

    function Cq(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!Qp(Pp())) return e;
        var f = Tp(a),
            g = Bq(e, f, b);
        if (g.length && !d)
            for (var k = h(g), m = k.next(); !m.done; m = k.next()) {
                var n = m.value,
                    p = n.timestamp,
                    q = [n.version, Math.round(p / 1E3), n.T].concat(n.labels || [], [b]).join("."),
                    r = Fo(c, p, !0);
                r.Bb = Pp();
                vo(a, q, r)
            }
        return e
    }

    function Dq(a, b) {
        var c = [];
        b = b || {};
        var d = Vp(b),
            e = Bq(c, d, a);
        if (e.length)
            for (var f = h(e), g = f.next(); !g.done; g = f.next()) {
                var k = g.value,
                    m = Wp(b.prefix),
                    n = Xp(k.type, m);
                if (!n) break;
                var p = k,
                    q = p.version,
                    r = p.T,
                    t = p.labels,
                    v = p.timestamp,
                    u = Math.round(v / 1E3);
                if (k.type === "ag") {
                    var w = {},
                        x = (w.k = r, w.i = "" + u, w.b = (t || []).concat([a]), w);
                    Dp(n, x, b, v)
                } else if (k.type === "gb") {
                    var y = [q, u, r].concat(t || [], [a]).join("."),
                        A = Fo(b, v, !0);
                    A.Bb = Pp();
                    vo(n, y, A)
                }
            }
        return c
    }

    function Eq(a, b) {
        var c = Wp(b),
            d = Xp(a, c);
        if (!d) return 0;
        var e;
        e = a === "ag" ? kb(7) ? Yp(d) : [] : Tp(d);
        for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Fq(a) {
        for (var b = 0, c = h(Object.keys(a)), d = c.next(); !d.done; d = c.next())
            for (var e = a[d.value], f = 0; f < e.length; f++) b = Math.max(b, Number(e[f].timestamp));
        return b
    }

    function Gq(a, b) {
        var c = Math.max(Eq("aw", a), Fq(Qp(Pp()) ? Gp() : {})),
            d = Math.max(Eq("gb", a), Fq(Qp(Pp()) ? Gp("_gac_gb", !0) : {}));
        kb(7) && b && (d = Math.max(d, Eq("ag", a)));
        return d > c
    };

    function Yq() {
        ii.dedupe_gclid || (ii.dedupe_gclid = Co());
        return ii.dedupe_gclid
    };
    var Zq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        $q = /^www.googleadservices.com$/;

    function ar(a) {
        a || (a = br());
        return a.hn ? !1 : a.Ul || a.Vl || a.Yl || a.Wl || a.zh || a.Ie || a.Il || a.Xl || a.Ml ? !0 : !1
    }

    function br() {
        var a = {},
            b = Vo(!0);
        a.hn = !!b._up;
        var c = kq();
        a.Ul = c.aw !== void 0;
        a.Vl = c.dc !== void 0;
        a.Yl = c.wbraid !== void 0;
        a.Wl = c.gbraid !== void 0;
        a.Xl = c.gclsrc === "aw.ds";
        var d = aj(C.location.href),
            e = Vi(d, "query", !1, void 0, "gad");
        a.zh = e !== void 0;
        if (!a.zh) {
            var f = d.hash.replace("#", ""),
                g = Ui(f, "gad", !1);
            a.zh = g !== void 0
        }
        a.Ie = Jq().Ie;
        var k = E.referrer ? Vi(aj(E.referrer), "host") : "";
        a.Ml = Zq.test(k);
        a.Il = $q.test(k);
        return a
    };
    var cr = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        dr = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        er = /^\d+\.fls\.doubleclick\.net$/,
        fr = /;gac=([^;?]+)/,
        gr = /;gacgb=([^;?]+)/;

    function hr(a, b) {
        if (er.test(E.location.host)) {
            var c = E.location.href.match(b);
            return c && c.length === 2 && c[1].match(cr) ? decodeURIComponent(c[1]) : ""
        }
        for (var d = [], e = h(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
            for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++) k.push(m[n].T);
            d.push(g + ":" + k.join(","))
        }
        return d.length > 0 ? d.join(";") : ""
    }

    function ir(a, b, c) {
        for (var d = Qp(Pp()) ? Gp("_gac_gb", !0) : {}, e = [], f = !1, g = h(Object.keys(d)), k = g.next(); !k.done; k = g.next()) {
            var m = k.value,
                n = Cq("_gac_gb_" + m, a, b, c);
            f = f || n.length !== 0 && n.some(function(p) {
                return p === 1
            });
            e.push(m + ":" + n.join(","))
        }
        return {
            Hl: f ? e.join(";") : "",
            Gl: hr(d, gr)
        }
    }

    function jr(a) {
        var b = E.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
        return b && b.length === 2 && b[1].match(dr) ? b[1] : void 0
    }

    function kr(a) {
        var b = kb(13),
            c = {},
            d, e, f;
        er.test(E.location.host) && (d = jr("gclgs"), e = jr("gclst"), b && (f = jr("gcllp")));
        if (d && e && (!b || f)) c.uh = d, c.wh = e, c.vh = f;
        else {
            var g = zb(),
                k = Yp((a || "_gcl") + "_gs"),
                m = k.map(function(q) {
                    return q.T
                }),
                n = k.map(function(q) {
                    return g - q.timestamp
                }),
                p = [];
            b && (p = k.map(function(q) {
                return q.wd
            }));
            m.length > 0 && n.length > 0 && (!b || p.length > 0) && (c.uh = m.join("."), c.wh = n.join("."), b && p.length > 0 && (c.vh = p.join(".")))
        }
        return c
    }

    function lr(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (er.test(E.location.host)) {
            var e = jr(c);
            if (e) return [{
                T: e
            }]
        } else {
            if (b === "gclid") {
                var f = (a || "_gcl") + "_aw";
                return d ? gq(f) : Tp(f)
            }
            if (b === "wbraid") return Tp((a || "_gcl") + "_gb");
            if (b === "braids") return Vp({
                prefix: a
            })
        }
        return []
    }

    function mr(a) {
        return lr(a, "gclid", "gclaw").map(function(b) {
            return b.T
        }).join(".")
    }

    function nr(a) {
        var b = lr(a, "gclid", "gclaw", !0),
            c = b.map(function(f) {
                return f.T
            }).join("."),
            d = b.map(function(f) {
                return f.Ka || 0
            }).join("."),
            e = b.map(function(f) {
                for (var g = 0, k = h(f.Lc || []), m = k.next(); !m.done; m = k.next()) {
                    var n = m.value;
                    n === 1 && (g |= 1);
                    n === 2 && (g |= 2)
                }
                return g.toString()
            }).join(".");
        return {
            T: c,
            Mj: d,
            Nj: e
        }
    }

    function or(a) {
        return lr(a, "wbraid", "gclgb").map(function(b) {
            return b.T
        }).join(".")
    }

    function pr(a) {
        return lr(a, "braids", "gclgb").map(function(b) {
            return b.T
        }).join(".")
    }

    function qr(a, b) {
        return er.test(E.location.host) ? !(jr("gclaw") || jr("gac")) : Gq(a, b)
    }

    function rr(a, b, c) {
        var d;
        d = c ? Dq(a, b) : Cq((b && b.prefix || "_gcl") + "_gb", a, b);
        return d.length === 0 || d.every(function(e) {
            return e === 0
        }) ? "" : d.join(".")
    };

    function sr() {
        var a = C.__uspapi;
        if (mb(a)) {
            var b = "";
            try {
                a("getUSPData", 1, function(c, d) {
                    if (d && c) {
                        var e = c.uspString;
                        e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e)
                    }
                })
            } catch (c) {}
            return b
        }
    };

    function Br(a) {
        var b = V(a.m, T.g.Jb),
            c = V(a.m, T.g.Vb);
        b && !c ? (a.eventName !== T.g.aa && a.eventName !== T.g.Mc && Q(131), a.isAborted = !0) : !b && c && (Q(132), a.isAborted = !0)
    }

    function Cr(a) {
        var b = W(T.g.O) ? ii.pscdl : "denied";
        b != null && (a.j[T.g.pf] = b)
    }

    function Dr(a) {
        var b = an(!0);
        a.j[T.g.Ib] = b
    }

    function Er(a) {
        Wn() && (a.j[T.g.xc] = 1)
    }

    function vr() {
        var a = E.title;
        if (a === void 0 || a === "") return "";
        var b = function(d) {
            try {
                return decodeURIComponent(d), !0
            } catch (e) {
                return !1
            }
        };
        a = encodeURIComponent(a);
        for (var c = 256; c > 0 && !b(a.substring(0, c));) c--;
        return decodeURIComponent(a.substring(0, c))
    }

    function Fr(a) {
        var b = V(a.m, T.g.Na);
        a.j[T.g.me] || (a.j[T.g.me] = {});
        a.j[T.g.me].ce = b
    };

    function Mr(a, b, c, d) {
        var e = xc(),
            f;
        if (e === 1) a: {
            var g = ui;g = g.toLowerCase();
            for (var k = "https://" + g, m = "http://" + g, n = 1, p = E.getElementsByTagName("script"), q = 0; q < p.length && q < 100; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (r.indexOf(m) === 0) {
                        f = 3;
                        break a
                    }
                    n === 1 && r.indexOf(k) === 0 && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (f === 2 || d || "http:" !== C.location.protocol ? a : b) + c
    };
    var Rr = function(a, b) {
            if (a)
                if (Xn()) {} else if (a = l(a) ? kl(Qj(a)) : kl(Qj(a.id))) {
                var c = void 0,
                    d = !1,
                    e = V(b, T.g.Xi);
                if (e && Array.isArray(e)) {
                    c = [];
                    for (var f = 0; f < e.length; f++) {
                        var g = kl(e[f]);
                        g && (c.push(g), (a.id === g.id || a.id === a.destinationId && a.destinationId === g.destinationId) && (d = !0))
                    }
                }
                if (!c || d) {
                    var k = V(b, T.g.Kg),
                        m;
                    if (k) {
                        Array.isArray(k) ? m = k : m = [k];
                        var n = V(b, T.g.Ig),
                            p = V(b, T.g.Jg),
                            q = V(b, T.g.Lg),
                            r = V(b, T.g.Wi),
                            t = n || p,
                            v = 1;
                        a.prefix !==
                            "UA" || c || (v = 5);
                        for (var u = 0; u < m.length; u++)
                            if (u < v)
                                if (c) Nr(c, m[u], r, b, {
                                    Ob: t,
                                    options: q
                                });
                                else if (a.prefix === "AW" && a.ids[nl[2]]) O(117) ? Nr([a], m[u], r || "US", b, {
                            Ob: t,
                            options: q
                        }) : Or(a.ids[nl[1]], a.ids[nl[2]], m[u], b, {
                            Ob: t,
                            options: q
                        });
                        else if (a.prefix === "UA")
                            if (O(117)) Nr([a], m[u], r || "US", b, {
                                Ob: t
                            });
                            else {
                                var w = a.destinationId,
                                    x = m[u],
                                    y = {
                                        Ob: t
                                    };
                                Q(23);
                                if (x) {
                                    y = y || {};
                                    var A = Pr(Qr, y, w),
                                        B = {};
                                    y.Ob !== void 0 ? B.receiver = y.Ob : B.replace = x;
                                    B.ga_wpid = w;
                                    B.destination = x;
                                    A(2, yb(), B)
                                }
                            }
                    }
                }
            }
        },
        Nr = function(a, b, c, d, e) {
            Q(21);
            if (b && c) {
                e =
                    e || {};
                for (var f = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: yb()
                    }, g = 0; g < a.length; g++) {
                    var k = a[g];
                    Sr[k.id] || (k && k.prefix === "AW" && !f.adData && k.ids.length >= 2 ? (f.adData = {
                        ak: k.ids[nl[1]],
                        cl: k.ids[nl[2]]
                    }, Tr(f.adData, d), Sr[k.id] = !0) : k && k.prefix === "UA" && !f.gaData && (f.gaData = {
                        gaWpid: k.destinationId
                    }, Sr[k.id] = !0))
                }(f.gaData || f.adData) && Pr(Ur, e)(e.Ob, f, e.options)
            }
        },
        Or = function(a, b, c, d, e) {
            Q(22);
            if (c) {
                e = e || {};
                var f = Pr(Vr, e, a),
                    g = {
                        ak: a,
                        cl: b
                    };
                e.Ob === void 0 && (g.autoreplace = c);
                Tr(g, d);
                f(2, e.Ob, g, c, 0, yb(),
                    e.options)
            }
        },
        Tr = function(a, b) {
            O(5) && (a.dma = Nn(), On() && (a.dmaCps = Mn()), Fn(b) ? a.npa = "0" : a.npa = "1")
        },
        Pr = function(a, b, c) {
            if (C[a.functionName]) return b.Lh && F(b.Lh), C[a.functionName];
            var d = Wr();
            C[a.functionName] = d;
            if (a.additionalQueues)
                for (var e = 0; e < a.additionalQueues.length; e++) C[a.additionalQueues[e]] = C[a.additionalQueues[e]] || Wr();
            a.idKey && C[a.idKey] === void 0 && (C[a.idKey] = c);
            wc(Mr("https://", "http://", a.scriptUrl), b.Lh, b.ym);
            return d
        },
        Wr = function() {
            function a() {
                a.q = a.q || [];
                a.q.push(arguments)
            }
            return a
        },
        Vr = {
            functionName: "_googWcmImpl",
            idKey: "_googWcmAk",
            scriptUrl: "www.gstatic.com/wcm/loader.js"
        },
        Qr = {
            functionName: "_gaPhoneImpl",
            idKey: "ga_wpid",
            scriptUrl: "www.gstatic.com/gaphone/loader.js"
        },
        Xr = {
            qk: "9",
            Yk: "5"
        },
        Ur = {
            functionName: "_googCallTrackingImpl",
            additionalQueues: [Qr.functionName, Vr.functionName],
            scriptUrl: "www.gstatic.com/call-tracking/call-tracking_" + (Xr.qk || Xr.Yk) + ".js"
        },
        Sr = {};

    function Yr(a) {
        return {
            getDestinationId: function() {
                return a.target.destinationId
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.j[b]
            },
            setHitData: function(b, c) {
                a.j[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                a.j[b] === void 0 && (a.j[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return V(a.m, b)
            },
            Rf: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.j)
            }
        }
    };
    var es, fs = !1;

    function gs() {
        fs = !0;
        es = productSettings, productSettings = void 0;
        es = es || {}
    }

    function hs(a) {
        fs || gs();
        return es[a]
    }

    function is() {
        var a = C.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }

    function js(a) {
        if (E.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top === b.bottom || b.left === b.right || !C.getComputedStyle) return !0;
        var c = C.getComputedStyle(a, null);
        if (c.visibility === "hidden") return !0;
        for (var d = a, e = c; d;) {
            if (e.display === "none") return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                k >= 0 && (g = g.substring(k + 8, g.indexOf(")", k)), g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)), f = String(Math.min(Number(g), Number(f))))
            }
            if (f !== void 0 && Number(f) <= 0) return !0;
            (d = d.parentElement) &&
            (e = C.getComputedStyle(d, null))
        }
        return !1
    }
    var ls = function(a) {
            var b = ks(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        },
        ks = function() {
            var a = E.body,
                b = E.documentElement || a && a.parentElement,
                c, d;
            if (E.compatMode && E.compatMode !== "BackCompat") c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(f, g) {
                    return f && g ? Math.min(f, g) : Math.max(f, g)
                };
                c = e(b ? b.clientHeight : 0, a ?
                    a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                width: d,
                height: c
            }
        };
    var os = function(a) {
            if (ms) {
                if (a >= 0 && a < ns.length && ns[a]) {
                    var b;
                    (b = ns[a]) == null || b.disconnect();
                    ns[a] = void 0
                }
            } else C.clearInterval(a)
        },
        rs = function(a, b, c) {
            for (var d = 0; d < c.length; d++) c[d] > 1 ? c[d] = 1 : c[d] < 0 && (c[d] = 0);
            if (ms) {
                var e = !1;
                F(function() {
                    e || ps(a, b, c)()
                });
                return qs(function(f) {
                        e = !0;
                        for (var g = {
                                Ne: 0
                            }; g.Ne < f.length; g = {
                                Ne: g.Ne
                            }, g.Ne++) F(function(k) {
                            return function() {
                                a(f[k.Ne])
                            }
                        }(g))
                    },
                    b, c)
            }
            return C.setInterval(ps(a, b, c), 1E3)
        },
        ps = function(a, b, c) {
            function d(k, m) {
                var n = {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    },
                    p = {
                        boundingClientRect: k.getBoundingClientRect(),
                        intersectionRatio: m,
                        intersectionRect: n,
                        isIntersecting: m > 0,
                        rootBounds: n,
                        target: k,
                        time: zb()
                    };
                F(function() {
                    a(p)
                })
            }
            for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
            c.sort(function(k, m) {
                return k - m
            });
            return function() {
                for (var k = 0; k < b.length; k++) {
                    var m = ls(b[k]);
                    if (m > e[k])
                        for (; f[k] < c.length - 1 && m >= c[f[k] + 1];) d(b[k], m), f[k]++;
                    else if (m < e[k])
                        for (; f[k] >= 0 && m <= c[f[k]];) d(b[k], m), f[k]--;
                    e[k] = m
                }
            }
        },
        qs = function(a, b, c) {
            for (var d = new C.IntersectionObserver(a, {
                    threshold: c
                }), e = 0; e < b.length; e++) d.observe(b[e]);
            for (var f = 0; f < ns.length; f++)
                if (!ns[f]) return ns[f] = d, f;
            return ns.push(d) - 1
        },
        ns = [],
        ms = !(!C.IntersectionObserver || !C.IntersectionObserverEntry);
    var Jf;
    var jt = Number('') || 5,
        kt = Number('') || 50,
        lt = qb();
    var qt = {
        bl: Number('') || 500,
        Nk: Number('') || 5E3,
        oj: Number('20') || 10,
        tk: Number('') || 5E3
    };

    function rt(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var st = function(a, b) {
        var c;
        return c
    };
    var tt;

    function At() {
        var a = Mf(Jf.j, "", function() {
            return {}
        });
        try {
            return a("internal_sw_allowed"), !0
        } catch (b) {
            return !1
        }
    }

    function Bt(a, b) {}
    var Ct = function(a, b, c, d) {};

    function Dt(a, b, c, d) {}

    function Et(a, b, c, d) {}
    var Ft = void 0;

    function Gt(a) {
        var b = [];
        return b
    };
    var Ht = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e < 128 ? b[c++] = e : (e < 2048 ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    Om();
    Rm() || Lm("iPod");
    Lm("iPad");
    !Lm("Android") || Pm() || Om() || Nm() || Lm("Silk");
    Pm();
    !Lm("Safari") || Pm() || (Mm() ? 0 : Lm("Coast")) || Nm() || (Mm() ? 0 : Lm("Edge")) || (Mm() ? Km("Microsoft Edge") : Lm("Edg/")) || (Mm() ? Km("Opera") : Lm("OPR")) || Om() || Lm("Silk") || Lm("Android") || Sm();
    var It = {},
        Jt = null,
        Kt = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                e > 255 && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            f === void 0 && (f = 0);
            if (!Jt) {
                Jt = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; m < 5; m++) {
                    var n = g.concat(k[m].split(""));
                    It[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        Jt[q] === void 0 && (Jt[q] = p)
                    }
                }
            }
            for (var r = It[f], t = Array(Math.floor(b.length / 3)), v = r[64] || "", u = 0, w = 0; u < b.length - 2; u += 3) {
                var x = b[u],
                    y = b[u + 1],
                    A = b[u + 2],
                    B = r[x >> 2],
                    D = r[(x & 3) << 4 | y >> 4],
                    H = r[(y & 15) << 2 | A >> 6],
                    J = r[A & 63];
                t[w++] = "" + B + D + H + J
            }
            var G = 0,
                U = v;
            switch (b.length - u) {
                case 2:
                    G = b[u + 1], U = r[(G & 15) << 2] || v;
                case 1:
                    var L = b[u];
                    t[w] = "" + r[L >> 2] + r[(L & 3) << 4 | G >> 4] + U + v
            }
            return t.join("")
        };
    var Lt = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Mt(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function Nt() {
        var a = C.google_tag_data,
            b;
        if (a != null && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function Ot() {
        var a, b;
        return (b = (a = C.google_tag_data) == null ? void 0 : a.uach_promise) != null ? b : null
    }

    function Pt(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function Qt() {
        var a = C;
        if (!Pt(a)) return null;
        var b = Mt(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(Lt).then(function(d) {
            b.uach != null || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };
    var Rt = function(a, b) {
            a && (b.j[T.g.Df] = a.architecture, b.j[T.g.Ef] = a.bitness, a.fullVersionList && (b.j[T.g.Ff] = a.fullVersionList.map(function(c) {
                return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
            }).join("|")), b.j[T.g.Gf] = a.mobile ? "1" : "0", b.j[T.g.Hf] = a.model, b.j[T.g.If] = a.platform, b.j[T.g.Jf] = a.platformVersion, b.j[T.g.Kf] = a.wow64 ? "1" : "0")
        },
        Tt = function(a) {
            var b = St.gn,
                c = function(g, k) {
                    try {
                        a(g, k)
                    } catch (m) {}
                },
                d = Nt();
            if (d) c(d);
            else {
                var e = Ot();
                if (e) {
                    b = Math.min(Math.max(isFinite(b) ? b :
                        0, 0), 1E3);
                    var f = C.setTimeout(function() {
                        c.Pe || (c.Pe = !0, Q(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(g) {
                        c.Pe || (c.Pe = !0, Q(104), C.clearTimeout(f), c(g))
                    }).catch(function(g) {
                        c.Pe || (c.Pe = !0, Q(105), C.clearTimeout(f), c(null, g))
                    })
                } else c(null)
            }
        },
        Vt = function() {
            if (Pt(C) && (Ut = zb(), !Ot())) {
                var a = Qt();
                a && (a.then(function() {
                    Q(95);
                }), a.catch(function() {
                    Q(96)
                }))
            }
        },
        Ut;

    function Wt(a) {
        var b;
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a))
    };

    function Xt() {
        return Wt("join-ad-interest-group") && mb(nc.joinAdInterestGroup)
    }

    function Yt(a, b) {
        var c = jb[3] === void 0 ? 1 : jb[3],
            d = 'iframe[data-tagging-id="' + b + '"]',
            e = [];
        try {
            if (c === 1) {
                var f = E.querySelector(d);
                f && (e = [f])
            } else e = Array.from(E.querySelectorAll(d))
        } catch (q) {}
        var g;
        a: {
            try {
                g = E.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]');
                break a
            } catch (q) {}
            g = void 0
        }
        var k = g,
            m = ((k == null ? void 0 : k.length) || 0) >= (jb[2] === void 0 ? 50 : jb[2]),
            n;
        if (n = e.length >= 1) {
            var p = Number(e[e.length - 1].dataset.loadTime);
            p !== void 0 && zb() - p < (jb[1] === void 0 ? 6E4 : jb[1]) ? (fb("TAGGING",
                9), n = !0) : n = !1
        }
        if (!n) {
            if (c === 1)
                if (e.length >= 1) Zt(e[0]);
                else {
                    if (m) {
                        fb("TAGGING", 10);
                        return
                    }
                }
            else e.length >= c ? Zt(e[0]) : m && Zt(k[0]);
            yc(a, void 0, {
                allow: "join-ad-interest-group"
            }, {
                taggingId: b,
                loadTime: zb()
            })
        }
    }

    function Zt(a) {
        try {
            a.parentNode.removeChild(a)
        } catch (b) {}
    }

    function $t() {
        return "https://td.doubleclick.net"
    };
    var Tu = {
        J: {
            di: "ads_conversion_hit",
            Dd: "container_execute_start",
            gi: "container_setup_end",
            cg: "container_setup_start",
            ei: "container_blocking_end",
            fi: "container_execute_end",
            hi: "container_yield_end",
            dg: "container_yield_start",
            dj: "event_execute_end",
            cj: "event_evaluation_end",
            Ug: "event_evaluation_start",
            ej: "event_setup_end",
            je: "event_setup_start",
            gj: "ga4_conversion_hit",
            qe: "page_load",
            xn: "pageview",
            Zb: "snippet_load",
            Aj: "tag_callback_error",
            Bj: "tag_callback_failure",
            Cj: "tag_callback_success",
            Dj: "tag_execute_end",
            md: "tag_execute_start"
        }
    };

    function Uu() {
        function a(c, d) {
            var e = gb(d);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    };
    var Vu = !1;

    function Dv(a, b) {}

    function Ev(a, b) {}

    function Fv(a, b) {}

    function Gv(a, b) {}

    function Hv() {
        var a = {};
        return a
    }

    function vv(a) {
        a = a === void 0 ? !0 : a;
        var b = {};
        return b
    }

    function Iv() {}

    function Jv(a, b) {}

    function Kv(a, b, c) {}

    function Lv() {}

    function Mv(a, b) {
        var c = C,
            d, e = c.GooglebQhCsO;
        e || (e = {}, c.GooglebQhCsO = e);
        d = e;
        if (d[a]) return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };

    function Nv(a, b, c, d) {
        var e = Wm(a, "fmt");
        if (b) {
            var f = Wm(a, "random"),
                g = Wm(a, "label") || "";
            if (!f) return !1;
            var k = Kt(decodeURIComponent(g.replace(/\+/g, " ")) + ":" + decodeURIComponent(f.replace(/\+/g, " ")));
            if (!Mv(k, b)) return !1
        }
        e && Number(e) !== 4 && (a = Ym(a, "rfmt", e));
        var m = Ym(a, "fmt", 4);
        wc(m, function() {
            C.google_noFurtherRedirects && b && (C.google_noFurtherRedirects = null, b())
        }, c, d, E.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };

    function gw(a, b) {
        if (data.entities) {
            var c = data.entities[a];
            if (c) return c[b]
        }
    };

    function hw(a, b, c) {
        c = c === void 0 ? !1 : c;
        iw().addRestriction(0, a, b, c)
    }

    function jw(a, b, c) {
        c = c === void 0 ? !1 : c;
        iw().addRestriction(1, a, b, c)
    }

    function kw() {
        var a = Jj();
        return iw().getRestrictions(1, a)
    }
    var lw = function() {
            this.j = {};
            this.C = {}
        },
        mw = function(a, b) {
            var c = a.j[b];
            c || (c = {
                _entity: {
                    internal: [],
                    external: []
                },
                _event: {
                    internal: [],
                    external: []
                }
            }, a.j[b] = c);
            return c
        };
    lw.prototype.addRestriction = function(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (!d || !this.C[b]) {
            var e = mw(this, b);
            a === 0 ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : a === 1 && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    };
    lw.prototype.getRestrictions = function(a, b) {
        var c = mw(this, b);
        if (a === 0) {
            var d, e;
            return [].concat(oa((c == null ? void 0 : (d = c._entity) == null ? void 0 : d.internal) || []), oa((c == null ? void 0 : (e = c._entity) == null ? void 0 : e.external) || []))
        }
        if (a === 1) {
            var f, g;
            return [].concat(oa((c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) || []), oa((c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) || []))
        }
        return []
    };
    lw.prototype.getExternalRestrictions = function(a, b) {
        var c = mw(this, b),
            d, e;
        return a === 0 ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) || [] : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) || []
    };
    lw.prototype.removeExternalRestrictions = function(a) {
        var b = mw(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.C[a] = !0
    };

    function iw() {
        var a = ii.r;
        a || (a = new lw, ii.r = a);
        return a
    };
    var nw = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        ow = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        pw = {
            cl: ["ecl"],
            customPixels: ["customScripts",
                "html"
            ],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        qw = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");

    function rw() {
        var a = Ji("gtm.allowlist") || Ji("gtm.whitelist");
        a && Q(9);
        oi && (a = ["google", "gtagfl", "lcl", "zone"]);
        nw.test(C.location && C.location.hostname) && (oi ? Q(116) : (Q(117), sw && (a = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
        var b = a && Db(wb(a), ow),
            c = Ji("gtm.blocklist") || Ji("gtm.blacklist");
        c || (c = Ji("tagTypeBlacklist")) && Q(3);
        c ? Q(8) : c = [];
        nw.test(C.location && C.location.hostname) && (c = wb(c), c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        wb(c).indexOf("google") >= 0 && Q(2);
        var d = c && Db(wb(c), pw),
            e = {};
        return function(f) {
            var g = f && f[He.la];
            if (!g || typeof g !== "string") return !0;
            g = g.replace(/^_*/, "");
            if (e[g] !== void 0) return e[g];
            var k = yi[g] || [],
                m = !0;
            if (a) {
                var n;
                if (n = m) a: {
                    if (b.indexOf(g) < 0)
                        if (k && k.length > 0)
                            for (var p = 0; p < k.length; p++) {
                                if (b.indexOf(k[p]) < 0) {
                                    Q(11);
                                    n = !1;
                                    break a
                                }
                            } else {
                                n = !1;
                                break a
                            }
                    n = !0
                }
                m = n
            }
            var q = !1;
            if (c) {
                var r = d.indexOf(g) >= 0;
                if (r) q = r;
                else {
                    var t = rb(d, k || []);
                    t && Q(10);
                    q = t
                }
            }
            var v = !m || q;
            v || !(k.indexOf("sandboxedScripts") >= 0) || b && b.indexOf("sandboxedScripts") !==
                -1 || (v = rb(d, qw));
            return e[g] = v
        }
    }
    var sw = !1;
    sw = !0;

    function tw() {
        Bj && hw(Jj(), function(a) {
            var b = tf(a.entityId),
                c;
            if (wf(b)) {
                var d = b[He.la];
                if (!d) throw Error("Error: No function name given for function call.");
                var e = lf[d];
                c = !!e && !!e.runInSiloedMode
            } else c = !!gw(b[He.la], 4);
            return c
        })
    }

    function uw(a, b, c, d, e) {
        if (!vw()) {
            var f = d.siloed ? Ej(a) : a;
            if (!Vj(f)) {
                var g = ww(a),
                    k = Eb(a, "GTM-"),
                    m = hj(),
                    n = c ? "/gtag/js" : "/gtm.js",
                    p = gj(b, n + g);
                if (!p) {
                    var q = hi.Ed + n;
                    if (m && qc && k) q = qc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0], p = Mr("https://", "http://", q + g);
                    else if (Di()) {
                        var r = n;
                        O(64) && (r = "/");
                        p = Ci() + r + g
                    } else p = Mr("https://", "http://", q + g)
                }
                d.siloed && Xj({
                    ctid: f,
                    isDestination: !1
                });
                var t = Pj();
                xj().container[f] = {
                    state: 1,
                    context: d,
                    parent: t
                };
                wj({
                    ctid: f,
                    isDestination: !1
                }, e);
                wc(p)
            }
        }
    }

    function xw(a, b, c, d) {
        if (!vw()) {
            var e = c.siloed ? Ej(a) : a;
            if (!Wj(e))
                if (!c.siloed && Yj()) xj().destination[e] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: Pj()
                }, wj({
                    ctid: e,
                    isDestination: !0
                }, d), Q(91);
                else {
                    var f = "/gtag/destination" + ww(a, !0),
                        g = gj(b, f);
                    g || (Di() ? (O(64) && (f = "/gtd" + ww(a, !0)), g = Ci() + f) : g = Mr("https://", "http://", hi.Ed + f));
                    c.siloed && Xj({
                        ctid: e,
                        isDestination: !0
                    });
                    xj().destination[e] = {
                        state: 1,
                        context: c,
                        parent: Pj()
                    };
                    wj({
                        ctid: e,
                        isDestination: !0
                    }, d);
                    wc(g)
                }
        }
    }

    function ww(a, b) {
        b = b === void 0 ? !1 : b;
        var c = "?id=" + encodeURIComponent(a) + "&l=" + hi.ib;
        if (!Eb(a, "GTM-") || b) c += "&cx=c";
        O(75) && (c += "&gtm=" + Zn());
        hj() && (c += "&sign=" + hi.Zg);
        var d = Bi.C;
        d === 1 ? c += "&fps=fc" : d === 2 && (c += "&fps=fe");
        return c
    }

    function vw() {
        if (Xn()) {
            return !0
        }
        return !1
    };
    var yw = [];

    function zw() {
        var a = Nf.ctid;
        if (a) {
            var b = Aj.pe ? 1 : 0,
                c, d = Oj(Pj());
            c = d && d.context;
            return a + ";" + Nf.canonicalContainerId + ";" + (c && c.fromContainerExecution ? 1 : 0) + ";" + (c && c.source || 0) + ";" + b
        }
    }

    function Aw() {
        var a = aj(C.location.href);
        return a.hostname + a.pathname
    }

    function Bw() {
        var a = Aw();
        a && gk("dl", encodeURIComponent(a));
        if (O(98)) {
            var b = zw();
            b && gk("tdp", b)
        } else gk("tdp", function() {
            return yw.length > 0 ? yw.join(".") : void 0
        });
        var c = an(!0);
        c !== void 0 && gk("frm", String(c))
    };
    var Cw = !1,
        Dw = 0,
        Ew = [];

    function Fw(a) {
        if (!Cw) {
            var b = E.createEventObject,
                c = E.readyState === "complete",
                d = E.readyState === "interactive";
            if (!a || a.type !== "readystatechange" || c || !b && d) {
                Cw = !0;
                for (var e = 0; e < Ew.length; e++) F(Ew[e])
            }
            Ew.push = function() {
                for (var f = ya.apply(0, arguments), g = 0; g < f.length; g++) F(f[g]);
                return 0
            }
        }
    }

    function Gw() {
        if (!Cw && Dw < 140) {
            Dw++;
            try {
                var a, b;
                (b = (a = E.documentElement).doScroll) == null || b.call(a, "left");
                Fw()
            } catch (c) {
                C.setTimeout(Gw, 50)
            }
        }
    }

    function Hw(a) {
        Cw ? a() : Ew.push(a)
    };

    function Jw(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Hj()
        }
    };
    var Lw = function(a, b) {
            this.j = !1;
            this.K = [];
            this.eventData = {
                tags: []
            };
            this.P = !1;
            this.C = this.H = 0;
            Kw(this, a, b)
        },
        Mw = function(a, b, c, d) {
            if (ki.hasOwnProperty(b) || b === "__zone") return -1;
            var e = {};
            Qa(d) && (e = Ra(d, e));
            e.id = c;
            e.status = "timeout";
            return a.eventData.tags.push(e) - 1
        },
        Nw = function(a, b, c, d) {
            var e = a.eventData.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Ow = function(a) {
            if (!a.j) {
                for (var b = a.K, c = 0; c < b.length; c++) b[c]();
                a.j = !0;
                a.K.length = 0
            }
        },
        Kw = function(a, b, c) {
            b !== void 0 && a.xe(b);
            c && C.setTimeout(function() {
                    Ow(a)
                },
                Number(c))
        };
    Lw.prototype.xe = function(a) {
        var b = this,
            c = Bb(function() {
                F(function() {
                    a(Hj(), b.eventData)
                })
            });
        this.j ? c() : this.K.push(c)
    };
    var Pw = function(a) {
            a.H++;
            return Bb(function() {
                a.C++;
                a.P && a.C >= a.H && Ow(a)
            })
        },
        Qw = function(a) {
            a.P = !0;
            a.C >= a.H && Ow(a)
        };
    var Rw = {};

    function Sw() {
        return C[Tw()]
    }
    var Uw = function(a) {
            if (Bk()) {
                var b = Sw();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        },
        Vw = function(a) {
            C.GoogleAnalyticsObject || (C.GoogleAnalyticsObject = a || "ga");
            var b = C.GoogleAnalyticsObject;
            if (C[b]) C.hasOwnProperty(b);
            else {
                var c = function() {
                    var d = ya.apply(0, arguments);
                    c.q = c.q || [];
                    c.q.push(d)
                };
                c.l = Number(yb());
                C[b] = c
            }
            return C[b]
        };

    function Tw() {
        return C.GoogleAnalyticsObject || "ga"
    }

    function Ww() {
        var a = Hj();
    }

    function Xw(a, b) {
        return function() {
            var c = Sw(),
                d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload"),
                        k = f.get("hitCallback"),
                        m = g.indexOf("&tid=" + b) < 0;
                    m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload", g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                })
            }
        }
    }
    var bx = ["es", "1"],
        cx = {},
        dx = {};

    function ex(a, b) {
        if (qj) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            cx[a] = [
                ["e", c],
                ["eid", a]
            ];
            em(a)
        }
    }

    function fx(a) {
        var b = a.eventId,
            c = a.hc;
        if (!cx[b]) return [];
        var d = [];
        dx[b] || d.push(bx);
        d.push.apply(d, oa(cx[b]));
        c && (dx[b] = !0);
        return d
    };
    var gx = {},
        hx = {},
        ix = {};

    function jx(a, b, c, d) {
        qj && O(87) && ((d === void 0 ? 0 : d) ? (ix[b] = ix[b] || 0, ++ix[b]) : c !== void 0 ? (hx[a] = hx[a] || {}, hx[a][b] = Math.round(c)) : (gx[a] = gx[a] || {}, gx[a][b] = (gx[a][b] || 0) + 1))
    }

    function kx(a) {
        var b = a.eventId,
            c = a.hc,
            d = gx[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete gx[b];
        return e.length ? [
            ["md", e.join(".")]
        ] : []
    }

    function lx(a) {
        var b = a.eventId,
            c = a.hc,
            d = hx[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete hx[b];
        return e.length ? [
            ["mtd", e.join(".")]
        ] : []
    }

    function mx() {
        for (var a = [], b = h(Object.keys(ix)), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            a.push("" + d + ix[d])
        }
        return a.length ? [
            ["mec", a.join(".")]
        ] : []
    };
    var nx = {},
        ox = {};

    function px(a, b, c) {
        if (qj && b) {
            var d = kj(b);
            nx[a] = nx[a] || [];
            nx[a].push(c + d);
            var e = (wf(b) ? "1" : "2") + d;
            ox[a] = ox[a] || [];
            ox[a].push(e);
            em(a)
        }
    }

    function qx(a) {
        var b = a.eventId,
            c = a.hc,
            d = [],
            e = nx[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = ox[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete nx[b], delete ox[b]);
        return d
    };

    function rx(a, b, c, d) {
        var e = jf[a],
            f = sx(a, b, c, d);
        if (!f) return null;
        var g = xf(e[He.zj], c, []);
        if (g && g.length) {
            var k = g[0];
            f = rx(k.index, {
                onSuccess: f,
                onFailure: k.Kj === 1 ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function sx(a, b, c, d) {
        function e() {
            function w() {
                Lk(3);
                var J = zb() - H;
                px(c.id, f, "7");
                Nw(c.ac, B, "exception", J);
                O(76) && Kv(c, f, Tu.J.Aj);
                D || (D = !0, k())
            }
            if (f[He.Tk]) k();
            else {
                var x = vf(f, c, []),
                    y = x[He.rk];
                if (y != null)
                    for (var A = 0; A < y.length; A++)
                        if (!W(y[A])) {
                            k();
                            return
                        }
                var B = Mw(c.ac, String(f[He.la]), Number(f[He.we]), x[He.METADATA]),
                    D = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!D) {
                        D = !0;
                        var J = zb() - H;
                        px(c.id, jf[a], "5");
                        Nw(c.ac, B, "success", J);
                        O(76) && Kv(c, f, Tu.J.Cj);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!D) {
                        D = !0;
                        var J = zb() -
                            H;
                        px(c.id, jf[a], "6");
                        Nw(c.ac, B, "failure", J);
                        O(76) && Kv(c, f, Tu.J.Bj);
                        k()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
                px(c.id, f, "1");
                O(76) && Jv(c, f);
                var H = zb();
                try {
                    yf(x, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (J) {
                    w(J)
                }
                O(76) && Kv(c, f, Tu.J.Dj)
            }
        }
        var f = jf[a],
            g = b.onSuccess,
            k = b.onFailure,
            m = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = xf(f[He.Ej], c, []);
        if (n && n.length) {
            var p = n[0],
                q = rx(p.index, {
                    onSuccess: g,
                    onFailure: k,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            k = p.Kj ===
                2 ? m : q
        }
        if (f[He.rj] || f[He.Vk]) {
            var r = f[He.rj] ? kf : c.Vm,
                t = g,
                v = k;
            if (!r[a]) {
                var u = tx(a, r, Bb(e));
                g = u.onSuccess;
                k = u.onFailure
            }
            return function() {
                r[a](t, v)
            }
        }
        return e
    }

    function tx(a, b, c) {
        var d = [],
            e = [];
        b[a] = ux(d, e, c);
        return {
            onSuccess: function() {
                b[a] = vx;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = wx;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function ux(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function vx(a) {
        a()
    }

    function wx(a, b) {
        b()
    };
    var zx = function(a, b) {
        for (var c = [], d = 0; d < jf.length; d++)
            if (a[d]) {
                var e = jf[d];
                var f = Pw(b.ac);
                try {
                    var g = rx(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = e[He.la];
                        if (!k) throw Error("Error: No function name given for function call.");
                        var m = lf[k];
                        c.push({
                            hk: d,
                            Wj: (m ? m.priorityOverride || 0 : 0) || gw(e[He.la], 1) || 0,
                            execute: g
                        })
                    } else xx(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(yx);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return c.length >
            0
    };

    function yx(a, b) {
        var c, d = b.Wj,
            e = a.Wj;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (c !== 0) f = c;
        else {
            var g = a.hk,
                k = b.hk;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function xx(a, b) {
        if (qj) {
            var c = function(d) {
                var e = b.isBlocked(jf[d]) ? "3" : "4",
                    f = xf(jf[d][He.zj], b, []);
                f && f.length && c(f[0].index);
                px(b.id, jf[d], e);
                var g = xf(jf[d][He.Ej], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var Cx = !1,
        Ax;

    function Ex(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (O(76)) {}
        if (d === "gtm.js") {
            if (Cx) return !1;
            Cx = !0
        }
        var e = !1,
            f = kw(),
            g = Ra(a, null);
        if (!f.every(function(t) {
                return t({
                    originalEventData: g
                })
            })) {
            if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent") return !1;
            e = !0
        }
        ex(b, d);
        var k = a.eventCallback,
            m = a.eventTimeout,
            n = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: Fx(g, e),
                Vm: [],
                logMacroError: function() {
                    Q(6);
                    Lk(0)
                },
                cachedModelValues: Gx(),
                ac: new Lw(function() {
                    if (O(76)) {}
                    k &&
                        k.apply(k, Array.prototype.slice.call(arguments, 0))
                }, m),
                originalEventData: g
            };
        O(87) && qj && (n.reportMacroDiscrepancy = jx);
        O(76) && Fv(n.id, n.name);
        var p = Ef(n);
        O(76) && Gv(n.id, n.name);
        e && (p = Hx(p));
        if (O(76)) {}
        var q = zx(p, n),
            r = !1;
        Qw(n.ac);
        d !== "gtm.js" && d !== "gtm.sync" || Ww();
        return Ix(p, q) || r
    }

    function Gx() {
        var a = {};
        a.event = Oi("event", 1);
        a.ecommerce = Oi("ecommerce", 1);
        a.gtm = Oi("gtm");
        a.eventModel = Oi("eventModel");
        return a
    }

    function Fx(a, b) {
        var c = rw();
        return function(d) {
            if (c(d)) return !0;
            var e = d && d[He.la];
            if (!e || typeof e !== "string") return !0;
            e = e.replace(/^_*/, "");
            var f, g = Jj();
            f = iw().getRestrictions(0, g);
            var k = a;
            b && (k = Ra(a, null), k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var m = yi[e] || [], n = h(f), p = n.next(); !p.done; p = n.next()) {
                var q = p.value;
                try {
                    if (!q({
                            entityId: e,
                            securityGroups: m,
                            originalEventData: k
                        })) return !0
                } catch (r) {
                    return !0
                }
            }
            return !1
        }
    }

    function Hx(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(jf[c][He.la]);
                if (ji[d] || jf[c][He.Wk] !== void 0 || gw(d, 2)) b[c] = !0
            }
        return b
    }

    function Ix(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && jf[c] && !ki[String(jf[c][He.la])]) return !0;
        return !1
    }
    var Jx = 0;

    function Kx(a, b) {
        return arguments.length === 1 ? Lx("set", a) : Lx("set", a, b)
    }

    function Mx(a, b) {
        return arguments.length === 1 ? Lx("config", a) : Lx("config", a, b)
    }

    function Sx(a, b, c) {
        c = c || {};
        c[T.g.Xb] = a;
        return Lx("event", b, c)
    }

    function Lx() {
        return arguments
    };
    var Tx = function() {
        this.messages = [];
        this.j = []
    };
    Tx.prototype.enqueue = function(a, b, c) {
        var d = this.messages.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        var e = Object.assign({}, c, {
                eventId: b,
                priorityId: d,
                fromContainerExecution: !0
            }),
            f = {
                message: a,
                notBeforeEventId: b,
                priorityId: d,
                messageContext: e
            };
        this.messages.push(f);
        for (var g = 0; g < this.j.length; g++) try {
            this.j[g](f)
        } catch (k) {}
    };
    Tx.prototype.listen = function(a) {
        this.j.push(a)
    };
    Tx.prototype.get = function() {
        for (var a = {}, b = 0; b < this.messages.length; b++) {
            var c = this.messages[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    Tx.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
            var e = this.messages[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.messages = c;
        return b
    };

    function Ux(a, b, c) {
        c.eventMetadata = c.eventMetadata || {};
        c.eventMetadata.source_canonical_id = Nf.canonicalContainerId;
        Vx().enqueue(a, b, c)
    }

    function Wx() {
        var a = Xx;
        Vx().listen(a)
    }

    function Vx() {
        var a = ii.mb;
        a || (a = new Tx, ii.mb = a);
        return a
    };
    var Yx = {},
        Zx = {};

    function $x(a, b) {
        for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                Oh: void 0,
                yh: void 0
            }, f++) {
            var g = a[f];
            if (g.indexOf("-") >= 0) {
                if (e.Oh = kl(g, b), e.Oh) {
                    var k = Fj();
                    pb(k, function(r) {
                        return function(t) {
                            return r.Oh.destinationId === t
                        }
                    }(e)) ? c.push(g) : d.push(g)
                }
            } else {
                var m = Yx[g] || [];
                e.yh = {};
                m.forEach(function(r) {
                    return function(t) {
                        r.yh[t] = !0
                    }
                }(e));
                for (var n = Cj(), p = 0; p < n.length; p++)
                    if (e.yh[n[p]]) {
                        c = c.concat(Fj());
                        break
                    }
                var q = Zx[g] || [];
                q.length && (c = c.concat(q))
            }
        }
        return {
            om: c,
            tm: d
        }
    }

    function ay(a) {
        z(Yx, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }

    function by(a) {
        z(Zx, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }
    var cy = "HA GF G UA AW DC MC".split(" "),
        dy = !1,
        ey = !1,
        fy = !1,
        gy = !1;

    function hy(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: zi()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var iy = void 0,
        jy = void 0;

    function ky(a, b, c) {
        var d = Ra(a, null);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return b[f] !== void 0
        }) && Q(136);
        var e = Ra(b, null);
        Ra(c, e);
        Ux(Mx(Cj()[0], e), a.eventId, d)
    }

    function ly(a) {
        for (var b = h([T.g.hd, T.g.Mb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || mm.j[d];
            if (e) return e
        }
    }
    var my = [T.g.hd, T.g.Mb, T.g.uc, T.g.ob, T.g.vb, T.g.ya, T.g.oa, T.g.Oa, T.g.Wa, T.g.Gb],
        ny = {
            config: function(a, b) {
                var c = hy(a, b);
                if (!(a.length < 2) && l(a[1])) {
                    var d = {};
                    if (a.length > 2) {
                        if (a[2] !== void 0 && !Qa(a[2]) || a.length > 3) return;
                        d = a[2]
                    }
                    var e = kl(a[1], b.isGtmEvent);
                    if (e) {
                        var f, g, k;
                        a: {
                            if (!Aj.pe) {
                                var m = Oj(Pj());
                                if (ak(m)) {
                                    var n = m.parent,
                                        p = n.isDestination;
                                    k = {
                                        Bm: Oj(n),
                                        mm: p
                                    };
                                    break a
                                }
                            }
                            k = void 0
                        }
                        var q = k;
                        q && (f = q.Bm, g = q.mm);
                        ex(c.eventId, "gtag.config");
                        var r = e.destinationId,
                            t = e.id !== r;
                        if (t ? Fj().indexOf(r) === -1 : Cj().indexOf(r) ===
                            -1) {
                            if (!b.inheritParentConfig && !d[T.g.Jb]) {
                                var v = ly(d);
                                if (t) xw(r, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                                    var u = d;
                                    iy ? ky(b, u, iy) : jy || (jy = Ra(u, null))
                                } else uw(r, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (f && (Q(128), g && Q(130), b.inheritParentConfig)) {
                                var w;
                                var x = d;
                                jy ? (ky(b, jy, x), w = !1) : (!x[T.g.Yb] && mi && iy || (iy = Ra(x, null)), w = !0);
                                w && f.containers && f.containers.join(",");
                                return
                            }
                            var y = d;
                            if (!fy && (fy = !0, ey))
                                for (var A =
                                        h(my), B = A.next(); !B.done; B = A.next())
                                    if (y.hasOwnProperty(B.value)) {
                                        Kk("erc");
                                        break
                                    }
                            rj && !Bj && (Jx === 1 && (ek.mcc = !1), Jx = 2);
                            Hk = !0;
                            if (mi && !t && !d[T.g.Yb]) {
                                var D = gy;
                                gy = !0;
                                if (D) return
                            }
                            dy || Q(43);
                            if (!b.noTargetGroup)
                                if (t) {
                                    by(e.id);
                                    var H = e.id,
                                        J = d[T.g.Zd] || "default";
                                    J = String(J).split(",");
                                    for (var G = 0; G < J.length; G++) {
                                        var U = Zx[J[G]] || [];
                                        Zx[J[G]] = U;
                                        U.indexOf(H) < 0 && U.push(H)
                                    }
                                } else {
                                    ay(e.id);
                                    var L = e.id,
                                        R = d[T.g.Zd] || "default";
                                    R = R.toString().split(",");
                                    for (var X = 0; X < R.length; X++) {
                                        var aa = Yx[R[X]] || [];
                                        Yx[R[X]] = aa;
                                        aa.indexOf(L) <
                                            0 && aa.push(L)
                                    }
                                }
                            delete d[T.g.Zd];
                            var S = b.eventMetadata || {};
                            S.hasOwnProperty("is_external_event") || (S.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = S;
                            delete d[T.g.Zc];
                            for (var P = t ? [e.id] : Fj(), ka = 0; ka < P.length; ka++) {
                                var na = d,
                                    ia = P[ka],
                                    xa = Ra(b, null),
                                    Oa = kl(ia, xa.isGtmEvent);
                                Oa && mm.push("config", [na], Oa, xa)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (a.length === 3) {
                    Q(39);
                    var c = hy(a, b),
                        d = a[1],
                        e = a[2];
                    b.fromContainerExecution || (e[T.g.N] && Q(139), e[T.g.sa] && Q(140));
                    d === "default" ? Yk(e) : d === "update" ? $k(e, c) : d ===
                        "declare" && b.fromContainerExecution && Xk(e)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(a.length < 2) && l(c)) {
                    var d = void 0;
                    if (a.length > 2) {
                        if (!Qa(a[2]) && a[2] !== void 0 || a.length > 3) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = Ra(e, null), e[T.g.Zc] && (g.eventCallback = e[T.g.Zc]), e[T.g.Wd] && (g.eventTimeout = e[T.g.Wd]));
                    var k = hy(a, b),
                        m = k.eventId,
                        n = k.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if (c === "optimize.callback") return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[T.g.Xb];
                    r === void 0 && (r = Ji(T.g.Xb, 2), r === void 0 && (r = "default"));
                    if (l(r) || Array.isArray(r)) {
                        var t;
                        t = b.isGtmEvent ? l(r) ? [r] : r : r.toString().replace(/\s+/g, "").split(",");
                        var v = $x(t, b.isGtmEvent),
                            u = v.om,
                            w = v.tm;
                        if (w.length)
                            for (var x = ly(q), y = 0; y < w.length; y++) {
                                var A = kl(w[y], b.isGtmEvent);
                                A && xw(A.destinationId, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = ll(u, b.isGtmEvent)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        var D;
                        !B.length || ((D = b.eventMetadata) == null ? 0 : D.em_event) || (ey = !0);
                        ex(m, c);
                        for (var H = [], J = 0; J < B.length; J++) {
                            var G =
                                B[J],
                                U = Ra(b, null);
                            if (cy.indexOf(Qj(G.prefix)) !== -1) {
                                var L = Ra(d, null),
                                    R = U.eventMetadata || {};
                                R.hasOwnProperty("is_external_event") || (R.is_external_event = !U.fromContainerExecution);
                                U.eventMetadata = R;
                                delete L[T.g.Zc];
                                nm(c, L, G.id, U);
                                rj && !Bj && Jx === 0 && (gk("mcc", "1"), Jx = 1);
                                Hk = !0
                            }
                            H.push(G.id)
                        }
                        g.eventModel = g.eventModel || {};
                        B.length > 0 ? g.eventModel[T.g.Xb] = H.join() : delete g.eventModel[T.g.Xb];
                        dy || Q(43);
                        b.noGtmEvent === void 0 && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        g.eventModel[T.g.Vb] &&
                            (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                Q(53);
                if (a.length === 4 && l(a[1]) && l(a[2]) && mb(a[3])) {
                    var c = kl(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        dy || Q(43);
                        var f = ly();
                        if (!pb(Fj(), function(k) {
                                return c.destinationId === k
                            })) xw(c.destinationId, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (cy.indexOf(Qj(c.prefix)) !== -1) {
                            Hk = !0;
                            hy(a, b);
                            var g = {};
                            Ra((g[T.g.sb] = d, g[T.g.Hb] = e, g), null);
                            om(d, function(k) {
                                F(function() {
                                    e(k)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (a.length ===
                    2 && a[1].getTime) {
                    dy = !0;
                    var c = hy(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (a.length === 3 && l(a[1]) && mb(a[2])) {
                    if (Kf(a[1], a[2]), Q(74), a[1] === "all") {
                        Q(75);
                        var b = !1;
                        try {
                            b = a[2](Hj(), "unknown", {})
                        } catch (c) {}
                        b || Q(76)
                    }
                } else Q(73)
            },
            set: function(a, b) {
                var c = void 0;
                a.length === 2 && Qa(a[1]) ? c = Ra(a[1], null) : a.length === 3 && l(a[1]) && (c = {}, Qa(a[2]) || Array.isArray(a[2]) ? c[a[1]] = Ra(a[2], null) : c[a[1]] =
                    a[2]);
                if (c) {
                    var d = hy(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    Ra(c, null);
                    var g = Ra(c, null);
                    mm.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        oy = {
            policy: !0
        };
    var qy = function(a) {
        if (py(a)) return a;
        this.value = a
    };
    qy.prototype.getUntrustedMessageValue = function() {
        return this.value
    };
    var py = function(a) {
        return !a || Na(a) !== "object" || Qa(a) ? !1 : "getUntrustedMessageValue" in a
    };
    qy.prototype.getUntrustedMessageValue = qy.prototype.getUntrustedMessageValue;
    var ry = !1,
        sy = [];

    function ty() {
        if (!ry) {
            ry = !0;
            for (var a = 0; a < sy.length; a++) F(sy[a])
        }
    }

    function uy(a) {
        ry ? F(a) : sy.push(a)
    };
    var vy = 0,
        wy = {},
        xy = [],
        yy = [],
        zy = !1,
        Ay = !1;

    function By(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }

    function Cy(a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return Dy(a)
    }

    function Ey(a, b) {
        if (!nb(b) || b < 0) b = 0;
        var c = ii[hi.ib],
            d = 0,
            e = !1,
            f = void 0;
        f = C.setTimeout(function() {
            e || (e = !0, a());
            f = void 0
        }, b);
        return function() {
            var g = c ? c.subscribers : 1;
            ++d === g && (f && (C.clearTimeout(f), f = void 0), e || (a(), e = !0))
        }
    }

    function Fy(a, b) {
        var c = a._clear || b.overwriteModelFields;
        z(a, function(e, f) {
            e !== "_clear" && (c && Mi(e), Mi(e, f))
        });
        vi || (vi = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        typeof d !== "number" && (d = zi(), a["gtm.uniqueEventId"] = d, Mi("gtm.uniqueEventId", d));
        return Ex(a)
    }

    function Gy(a) {
        if (a == null || typeof a !== "object") return !1;
        if (a.event) return !0;
        if (tb(a)) {
            var b = a[0];
            if (b === "config" || b === "event" || b === "js" || b === "get") return !0
        }
        return !1
    }

    function Hy() {
        var a;
        if (yy.length) a = yy.shift();
        else if (xy.length) a = xy.shift();
        else return;
        var b;
        var c = a;
        if (zy || !Gy(c.message)) b = c;
        else {
            zy = !0;
            var d = c.message["gtm.uniqueEventId"];
            typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = zi());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                k = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            xy.unshift(k, c);
            if (rj) {
                if (!O(98)) {
                    var m = zw();
                    m && yw.push(m)
                }
                kk()
            }
            b =
                f
        }
        return b
    }

    function Iy() {
        for (var a = !1, b; !Ay && (b = Hy());) {
            Ay = !0;
            delete Gi.eventModel;
            Ii();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (d == null) Ay = !1;
            else {
                e.fromContainerExecution && Ni();
                try {
                    if (mb(d)) try {
                        d.call(Ki)
                    } catch (v) {} else if (Array.isArray(d)) {
                        if (l(d[0])) {
                            var f = d[0].split("."),
                                g = f.pop(),
                                k = d.slice(1),
                                m = Ji(f.join("."), 2);
                            if (m != null) try {
                                m[g].apply(m, k)
                            } catch (v) {}
                        }
                    } else {
                        var n = void 0;
                        if (tb(d)) a: {
                            if (d.length && l(d[0])) {
                                var p = ny[d[0]];
                                if (p && (!e.fromContainerExecution || !oy[d[0]])) {
                                    n = p(d, e);
                                    break a
                                }
                            }
                            n = void 0
                        }
                        else n = d;
                        n && (a = Fy(n, e) || a)
                    }
                } finally {
                    e.fromContainerExecution && Ii(!0);
                    var q = d["gtm.uniqueEventId"];
                    if (typeof q === "number") {
                        for (var r = wy[String(q)] || [], t = 0; t < r.length; t++) yy.push(Jy(r[t]));
                        r.length && yy.sort(By);
                        delete wy[String(q)];
                        q > vy && (vy = q)
                    }
                    Ay = !1
                }
            }
        }
        return !a
    }

    function Ky() {
        if (O(76)) {
            var a = Ly();
        }
        var b = Iy();
        if (O(76)) {}
        try {
            var c = Hj(),
                d = C[hi.ib].hide;
            if (d && d[c] !== void 0 && d.end) {
                d[c] = !1;
                var e = !0,
                    f;
                for (f in d)
                    if (d.hasOwnProperty(f) && d[f] ===
                        !0) {
                        e = !1;
                        break
                    }
                e && (d.end(), d.end = null)
            }
        } catch (g) {}
        return b
    }

    function Xx(a) {
        if (vy < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            wy[b] = wy[b] || [];
            wy[b].push(a)
        } else yy.push(Jy(a)), yy.sort(By), F(function() {
            Ay || Iy()
        })
    }

    function Jy(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }

    function My() {
        function a(f) {
            var g = {};
            if (py(f)) {
                var k = f;
                f = py(k) ? k.getUntrustedMessageValue() : void 0;
                g.fromContainerExecution = !0
            }
            return {
                message: f,
                messageContext: g
            }
        }
        var b = rc(hi.ib, []),
            c = ii[hi.ib] = ii[hi.ib] || {};
        c.pruned === !0 && Q(83);
        wy = Vx().get();
        Wx();
        Hw(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push((f.event = "gtm.dom", f))
            }
        });
        uy(function() {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var f = {};
                b.push((f.event = "gtm.load", f))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function() {
            var f;
            if (ii.SANDBOXED_JS_SEMAPHORE >
                0) {
                f = [];
                for (var g = 0; g < arguments.length; g++) f[g] = new qy(arguments[g])
            } else f = [].slice.call(arguments, 0);
            var k = f.map(function(q) {
                return a(q)
            });
            xy.push.apply(xy, k);
            var m = d.apply(b, f),
                n = Math.max(100, Number("1000") || 300);
            if (this.length > n)
                for (Q(4), c.pruned = !0; this.length > n;) this.shift();
            var p = typeof m !== "boolean" || m;
            return Iy() && p
        };
        var e = b.slice(0).map(function(f) {
            return a(f)
        });
        xy.push.apply(xy, e);
        if (Ly()) {
            if (O(76)) {}
            F(Ky)
        }
    }
    var Ly = function() {
            var a = !0;
            return a
        },
        Dy = function(a) {
            return C[hi.ib].push(a)
        };

    function Ny(a) {
        if (a == null || a.length === 0) return !1;
        var b = Number(a),
            c = zb();
        return b < c + 3E5 && b > c - 9E5
    }

    function Oy(a) {
        return a && a.indexOf("pending:") === 0 ? Ny(a.substr(8)) : !1
    };

    function iz() {};
    var jz = function() {};
    jz.prototype.toString = function() {
        return "undefined"
    };
    var kz = new jz;
    var mz = function() {
            (ii.rm = ii.rm || {})[Jj()] = function(a) {
                if (lz.hasOwnProperty(a)) return lz[a]
            }
        },
        pz = function(a, b, c) {
            if (a instanceof nz) {
                var d = a,
                    e = d.resolve,
                    f = b,
                    g = String(zi());
                oz[g] = [f, c];
                a = e.call(d, g);
                b = lb
            }
            return {
                Oj: a,
                onSuccess: b
            }
        },
        qz = function(a) {
            var b = a ? 0 : 1;
            return function(c) {
                Q(a ? 134 : 135);
                var d = oz[c];
                if (d && typeof d[b] === "function") d[b]();
                oz[c] = void 0
            }
        },
        nz = function(a) {
            this.valueOf = this.toString;
            this.resolve = function(b) {
                for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === kz ? b : a[d]);
                return c.join("")
            }
        };
    nz.prototype.toString =
        function() {
            return this.resolve("undefined")
        };
    var lz = {},
        oz = {};

    function rz(a, b) {
        function c(g) {
            var k = aj(g),
                m = Vi(k, "protocol"),
                n = Vi(k, "host", !0),
                p = Vi(k, "port"),
                q = Vi(k, "path").toLowerCase().replace(/\/$/, "");
            if (m === void 0 || m === "http" && p === "80" || m === "https" && p === "443") m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function sz(a) {
        return tz(a) ? 1 : 0
    }

    function tz(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = Ra(a, {});
                Ra({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (sz(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return mg(b, c);
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < ig.length; g++) {
                            var k = ig[g];
                            if (b[k] != null) {
                                f = b[k](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return jg(b, c);
            case "_eq":
                return ng(b, c);
            case "_ge":
                return og(b, c);
            case "_gt":
                return qg(b, c);
            case "_lc":
                return String(b).split(",").indexOf(String(c)) >=
                    0;
            case "_le":
                return pg(b, c);
            case "_lt":
                return rg(b, c);
            case "_re":
                return lg(b, c, a.ignore_case);
            case "_sw":
                return sg(b, c);
            case "_um":
                return rz(b, c)
        }
        return !1
    };

    function uz() {
        var a;
        a = a === void 0 ? "" : a;
        var b, c;
        return ((b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)) ? String(data.blob[1]) : a
    };

    function vz() {
        var a = [
            ["cv", O(107) ? uz() : "30"],
            ["rv", hi.Yg],
            ["tc", jf.filter(function(b) {
                return b
            }).length]
        ];
        hi.te && a.push(["x", hi.te]);
        Bi.j && a.push(["tag_exp", Bi.j]);
        return a
    };
    var wz = {},
        xz = {};

    function yz() {
        var a = 0;
        return function(b) {
            switch (b) {
                case 1:
                    a |= 1;
                    break;
                case 2:
                    a |= 2;
                    break;
                case 3:
                    a |= 4
            }
            return a
        }
    }

    function zz(a, b, c, d) {
        if (qj) {
            var e = String(c) + b;
            wz[a] = wz[a] || [];
            wz[a].push(e);
            xz[a] = xz[a] || [];
            xz[a].push(d + b)
        }
    }

    function Az(a) {
        var b = a.eventId,
            c = a.hc,
            d = [],
            e = wz[b] || [];
        e.length && d.push(["hf", e.join(".")]);
        var f = xz[b] || [];
        f.length && d.push(["ht", f.join(".")]);
        c && (delete wz[b], delete xz[b]);
        return d
    };

    function Bz() {
        return !1
    }

    function Cz() {
        var a = {};
        return function(b, c, d) {}
    };

    function Dz() {
        var a = Ez;
        return function(b, c, d) {
            var e = d && d.event;
            b === "__html" && O(80) || Fz(c);
            var f = Eb(b, "__cvt_") ? void 0 : 1,
                g = new Xa;
            z(c, function(r, t) {
                var v = cd(t, void 0, f);
                v === void 0 && t !== void 0 && Q(44);
                g.set(r, v)
            });
            a.j.j.C = Cf();
            var k = {
                Hj: Rf(b),
                eventId: e == null ? void 0 : e.id,
                priorityId: e !== void 0 ? e.priorityId : void 0,
                xe: e !== void 0 ? function(r) {
                    e.ac.xe(r)
                } : void 0,
                eb: function() {
                    return b
                },
                log: function() {},
                El: {
                    index: d == null ? void 0 : d.index,
                    type: d == null ? void 0 : d.type,
                    name: d == null ? void 0 : d.name
                },
                Lm: !!gw(b, 3),
                originalEventData: e ==
                    null ? void 0 : e.originalEventData
            };
            e && e.cachedModelValues && (k.cachedModelValues = {
                gtm: e.cachedModelValues.gtm,
                ecommerce: e.cachedModelValues.ecommerce
            });
            if (Bz()) {
                var m = Cz(),
                    n, p;
                k.Ta = {
                    Zh: [],
                    ye: {},
                    yb: function(r, t, v) {
                        t === 1 && (n = r);
                        t === 7 && (p = v);
                        m(r, t, v)
                    },
                    Wf: ah()
                };
                k.log = function(r) {
                    var t = ya.apply(1, arguments);
                    n && m(n, 4, {
                        level: r,
                        source: p,
                        message: t
                    })
                }
            }
            var q = Be(a, k, [b, g]);
            a.j.j.C = void 0;
            q instanceof Aa && q.type === "return" && (q = q.data);
            return I(q, void 0, f)
        }
    }

    function Fz(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        mb(b) && (a.gtmOnSuccess = function() {
            F(b)
        });
        mb(c) && (a.gtmOnFailure = function() {
            F(c)
        })
    };

    function Gz(a, b) {
        var c = this;
    }
    Gz.R = "addConsentListener";
    var Hz = !1;

    function Iz(a) {
        for (var b = 0; b < a.length; ++b)
            if (Hz) try {
                a[b]()
            } catch (c) {
                Q(77)
            } else a[b]()
    }

    function Jz(a, b, c) {
        var d = this,
            e;
        return e
    }
    Jz.F = "internal.addDataLayerEventListener";

    function Kz(a, b, c) {}
    Kz.R = "addDocumentEventListener";

    function Lz(a, b, c, d) {}
    Lz.R = "addElementEventListener";

    function Mz(a) {
        return a.D.j
    };

    function Nz(a) {}
    Nz.R = "addEventCallback";
    var Oz = function(a) {
            return typeof a === "string" ? a : String(zi())
        },
        Rz = function(a, b) {
            Pz(a, "init", !1) || (Qz(a, "init", !0), b())
        },
        Pz = function(a, b, c) {
            var d = Sz(a);
            return Ab(d, b, c)
        },
        Tz = function(a, b, c, d) {
            var e = Sz(a),
                f = Ab(e, b, d);
            e[b] = c(f)
        },
        Qz = function(a, b, c) {
            Sz(a)[b] = c
        },
        Sz = function(a) {
            ii.hasOwnProperty("autoEventsSettings") || (ii.autoEventsSettings = {});
            var b = ii.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        Uz = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Mc(a, "className"),
                "gtm.elementId": a["for"] ||
                    Dc(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Mc(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Mc(a, "href") || a.src || a.code || a.codebase || "";
            return d
        };

    function cA(a) {}
    cA.F = "internal.addFormAbandonmentListener";

    function dA(a, b, c, d) {}
    dA.F = "internal.addFormData";
    var eA = {},
        fA = [],
        gA = {},
        hA = 0,
        iA = 0;

    function pA(a, b) {}
    pA.F = "internal.addFormInteractionListener";

    function wA(a, b) {}
    wA.F = "internal.addFormSubmitListener";

    function BA(a) {}
    BA.F = "internal.addGaSendListener";

    function CA(a) {
        if (!a) return {};
        var b = a.El;
        return Jw(b.type, b.index, b.name)
    }

    function DA(a) {
        return a ? {
            originatingEntity: CA(a)
        } : {}
    };
    var FA = function(a, b, c) {
            EA().updateZone(a, b, c)
        },
        HA = function(a, b, c, d, e, f) {
            var g = EA();
            c = c && Db(c, GA);
            for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
                var n = String(b[m]);
                if (g.registerChild(n, Hj(), k)) {
                    var p = n,
                        q = a,
                        r = d,
                        t = e,
                        v = f;
                    if (Eb(p, "GTM-")) uw(p, void 0, !1, {
                        source: 1,
                        fromContainerExecution: !0
                    });
                    else {
                        var u = Lx("js", yb());
                        uw(p, void 0, !0, {
                            source: 1,
                            fromContainerExecution: !0
                        });
                        var w = {
                            originatingEntity: t,
                            inheritParentConfig: v
                        };
                        O(112) || Ux(u, q, w);
                        Ux(Mx(p, r), q, w)
                    }
                }
            }
            return k
        },
        EA = function() {
            var a = ii.zones;
            a || (a = ii.zones =
                new IA);
            return a
        },
        JA = {
            zone: 1,
            cn: 1,
            css: 1,
            ew: 1,
            eq: 1,
            ge: 1,
            gt: 1,
            lc: 1,
            le: 1,
            lt: 1,
            re: 1,
            sw: 1,
            um: 1
        },
        GA = {
            cl: ["ecl"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"]
        },
        IA = function() {
            this.j = {};
            this.C = {};
            this.H = 0
        };
    ba = IA.prototype;
    ba.isActive = function(a, b) {
        for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
        if (!c) return !0;
        if (!this.isActive([c.Nh], b)) return !1;
        for (var e = 0; e < c.cf.length; e++)
            if (this.C[c.cf[e]].sd(b)) return !0;
        return !1
    };
    ba.getIsAllowedFn = function(a, b) {
        if (!this.isActive(a, b)) return function() {
            return !1
        };
        for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
        if (!c) return function() {
            return !0
        };
        for (var e = [], f = 0; f < c.cf.length; f++) {
            var g = this.C[c.cf[f]];
            g.sd(b) && e.push(g)
        }
        if (!e.length) return function() {
            return !1
        };
        var k = this.getIsAllowedFn([c.Nh], b);
        return function(m, n) {
            n = n || [];
            if (!k(m, n)) return !1;
            for (var p = 0; p < e.length; ++p)
                if (e[p].dm(m, n)) return !0;
            return !1
        }
    };
    ba.unregisterChild = function(a) {
        for (var b = 0; b < a.length; b++) delete this.j[a[b]]
    };
    ba.createZone = function(a, b) {
        var c = String(++this.H);
        this.C[c] = new KA(a, b);
        return c
    };
    ba.updateZone = function(a, b, c) {
        var d = this.C[a];
        d && d.H(b, c)
    };
    ba.registerChild = function(a, b, c) {
        var d = this.j[a];
        if (!d && ii[a] || !d && Vj(a) || d && d.Nh !== b) return !1;
        if (d) return d.cf.push(c), !1;
        this.j[a] = {
            Nh: b,
            cf: [c]
        };
        return !0
    };
    var KA = function(a, b) {
        this.C = null;
        this.j = [{
            eventId: a,
            sd: !0
        }];
        if (b) {
            this.C = {};
            for (var c = 0; c < b.length; c++) this.C[b[c]] = !0
        }
    };
    KA.prototype.H = function(a, b) {
        var c = this.j[this.j.length - 1];
        a <= c.eventId || c.sd !== b && this.j.push({
            eventId: a,
            sd: b
        })
    };
    KA.prototype.sd = function(a) {
        for (var b = this.j.length -
                1; b >= 0; b--)
            if (this.j[b].eventId <= a) return this.j[b].sd;
        return !1
    };
    KA.prototype.dm = function(a, b) {
        b = b || [];
        if (!this.C || JA[a] || this.C[a]) return !0;
        for (var c = 0; c < b.length; ++c)
            if (this.C[b[c]]) return !0;
        return !1
    };

    function LA(a) {
        var b = ii.zones;
        return b ? b.getIsAllowedFn(Cj(), a) : function() {
            return !0
        }
    }

    function MA() {
        jw(Jj(), function(a) {
            var b = a.originalEventData["gtm.uniqueEventId"],
                c = ii.zones;
            return c ? c.isActive(Cj(), b) : !0
        });
        hw(Jj(), function(a) {
            var b, c;
            b = a.entityId;
            c = a.securityGroups;
            return LA(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
        })
    };
    var NA = function(a, b) {
        this.tagId = a;
        this.Ae = b
    };

    function OA(a, b) {
        var c = this,
            d;
        var e = function(v) {
            hw(v, function(u) {
                for (var w = iw().getExternalRestrictions(0, Jj()), x = h(w), y = x.next(); !y.done; y = x.next()) {
                    var A = y.value;
                    if (!A(u)) return !1
                }
                return !0
            }, !0);
            jw(v, function(u) {
                for (var w = iw().getExternalRestrictions(1, Jj()), x = h(w), y = x.next(); !y.done; y = x.next()) {
                    var A = y.value;
                    if (!A(u)) return !1
                }
                return !0
            }, !0);
            k && k(new NA(a, v))
        };
        K(this.getName(), ["tagId:!string", "options:?PixieMap"], arguments);
        var f = I(b,
                this.D, 1) || {},
            g = f.firstPartyUrl,
            k = f.onLoad,
            m = f.loadByDestination === !0,
            n = f.isGtmEvent === !0,
            p = f.siloed === !0;
        Iz([function() {
            return M(c, "load_google_tags", a, g)
        }]);
        if (m) {
            if (Wj(a)) return
        } else if (Vj(a)) return;
        var q = 6,
            r = Mz(this);
        n && (q = 7);
        r.eb() === "__zone" && (q = 1);
        var t = {
            source: q,
            fromContainerExecution: !0,
            siloed: p
        };
        m ? xw(a, g, t, e) : uw(a, g, !Eb(a, "GTM-"), t, e);
        k && r.eb() === "__zone" && HA(Number.MIN_SAFE_INTEGER, [a], null, {}, CA(Mz(this)));
        d = p ? Ej(a) : a;
        return d
    }
    OA.F = "internal.loadGoogleTag";

    function PA(a) {
        return new Vc("", function(b) {
            var c = this.evaluate(b);
            if (c instanceof Vc) return new Vc("", function() {
                var d = ya.apply(0, arguments),
                    e = this,
                    f = Ra(Mz(this), null);
                f.eventId = a.eventId;
                f.priorityId = a.priorityId;
                f.originalEventData = a.originalEventData;
                var g = d.map(function(m) {
                        return e.evaluate(m)
                    }),
                    k = Ga(this.D);
                k.j = f;
                return c.hb.apply(c, [k].concat(oa(g)))
            })
        })
    };

    function QA(a, b, c) {
        var d = this;
    }
    QA.F = "internal.addGoogleTagRestriction";
    var RA = {},
        SA = [];

    function ZA(a, b) {}
    ZA.F = "internal.addHistoryChangeListener";

    function $A(a, b, c) {}
    $A.R = "addWindowEventListener";

    function aB(a, b) {
        return !0
    }
    aB.R = "aliasInWindow";

    function bB(a, b, c) {}
    bB.F = "internal.appendRemoteConfigParameter";

    function cB(a) {
        var b;
        return b
    }
    cB.R = "callInWindow";

    function dB(a) {}
    dB.R = "callLater";

    function eB(a) {}
    eB.F = "callOnDomReady";

    function fB(a) {}
    fB.F = "callOnWindowLoad";

    function gB(a, b) {
        var c;
        return c
    }
    gB.F = "internal.computeGtmParameter";

    function hB(a, b) {
        var c = this;
    }
    hB.F = "internal.consentScheduleFirstTry";

    function iB(a, b) {
        var c = this;
    }
    iB.F = "internal.consentScheduleRetry";

    function jB(a) {
        var b;
        return b
    }
    jB.F = "internal.copyFromCrossContainerData";

    function kB(a, b) {
        var c;
        var d = cd(c, this.D, Eb(Mz(this).eb(), "__cvt_") ? 2 : 1);
        d === void 0 && c !== void 0 && Q(45);
        return d
    }
    kB.R = "copyFromDataLayer";

    function lB(a) {
        var b = void 0;
        return b
    }
    lB.F = "internal.copyFromDataLayerCache";

    function mB(a) {
        var b;
        return b
    }
    mB.R = "copyFromWindow";

    function nB(a) {
        var b = void 0;
        K(this.getName(), ["key:!string"], arguments);
        M(this, "unsafe_access_globals", a);
        var c = a.split(".");
        b = C[c.shift()];
        for (var d = 0; d < c.length; d++) b = b && b[c[d]];
        return cd(b, this.D, 1)
    }
    nB.F = "internal.copyKeyFromWindow";
    var oB = function(a, b, c) {
        this.eventName = b;
        this.m = c;
        this.j = {};
        this.isAborted = !1;
        this.target = a;
        this.metadata = Ra(c.eventMetadata || {}, {})
    };
    oB.prototype.copyToHitData = function(a, b, c) {
        var d = V(this.m, a);
        d === void 0 && (d = b);
        if (d !== void 0 && c !== void 0 && l(d) && O(68)) try {
            d = c(d)
        } catch (e) {}
        d !== void 0 && (this.j[a] = d)
    };
    var et = function(a, b, c) {
        var d = hs(a.target.destinationId);
        return d && d[b] !== void 0 ? d[b] : c
    };

    function pB(a, b) {
        var c;
        return c
    }
    pB.F = "internal.copyPreHit";

    function qB(a, b) {
        var c = null;
        K(this.getName(), ["functionPath:!string", "arrayPath:!string"], arguments);
        M(this, "access_globals", "readwrite", a);
        M(this, "access_globals", "readwrite", b);
        var d = [C, E],
            e = a.split("."),
            f = Gb(e, d),
            g = e[e.length - 1];
        if (f === void 0) throw Error("Path " + a + " does not exist.");
        var k = f[g];
        if (k && !mb(k)) return null;
        if (k) return cd(k, this.D, 2);
        var m;
        k = function() {
            if (!mb(m.push)) throw Error("Object at " + b + " in window is not an array.");
            m.push.call(m, arguments)
        };
        f[g] = k;
        var n = b.split("."),
            p = Gb(n, d),
            q = n[n.length - 1];
        if (p === void 0) throw Error("Path " + n + " does not exist.");
        m = p[q];
        m === void 0 && (m = [], p[q] = m);
        c = function() {
            k.apply(k, Array.prototype.slice.call(arguments, 0))
        };
        return cd(c, this.D, 2)
    }
    qB.R = "createArgumentsQueue";

    function rB(a) {
        return cd(function(c) {
            var d = Sw();
            if (typeof c === "function") d(function() {
                c(function(f, g, k) {
                    var m = Sw(),
                        n = m && m.getByName &&
                        m.getByName(f);
                    return xm(C.gaplugins.Linker, n).decorate(g, k)
                })
            });
            else if (Array.isArray(c)) {
                var e = String(c[0]).split(".");
                b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c)
            } else if (c === "isLoaded") return !!d.loaded
        }, this.D, 1)
    }
    rB.F = "internal.createGaCommandQueue";

    function sB(a) {
        return cd(function() {
            if (!mb(e.push)) throw Error("Object at " + a + " in window is not an array.");
            e.push.apply(e, Array.prototype.slice.call(arguments, 0))
        }, this.D, Eb(Mz(this).eb(),
            "__cvt_") ? 2 : 1)
    }
    sB.R = "createQueue";

    function tB(a, b) {
        var c = null;
        return c
    }
    tB.F = "internal.createRegex";

    function uB() {
        var a = {};
        return a
    };

    function vB(a) {}
    vB.F = "internal.declareConsentState";

    function wB(a) {
        var b = "";
        return b
    }
    wB.F = "internal.decodeUrlHtmlEntities";

    function xB(a, b, c) {
        var d;
        return d
    }
    xB.F = "internal.decorateUrlWithGaCookies";

    function yB(a) {
        var b;
        return b
    }
    yB.F = "internal.detectUserProvidedData";

    function AB() {}
    AB.F = "internal.disableDeferringCustomEvents";
    var BB = function(a) {
            var b = Gc(a, ["button", "input"], 50);
            if (!b) return null;
            var c = String(b.tagName).toLowerCase();
            if (c === "button") return b;
            if (c === "input") {
                var d = Dc(b, "type");
                if (d === "button" || d === "submit" || d === "image" || d === "file" || d === "reset") return b
            }
            return null
        },
        CB = function(a, b, c) {
            var d = c.target;
            if (d) {
                var e = Pz(a, "individualElementIds", []);
                if (e.length > 0) {
                    var f = Uz(d, b, e);
                    Dy(f)
                }
                var g = !1,
                    k = Pz(a, "commonButtonIds", []);
                if (k.length > 0) {
                    var m = BB(d);
                    if (m) {
                        var n = Uz(m, b, k);
                        Dy(n);
                        g = !0
                    }
                }
                var p = Pz(a, "selectorToTriggerIds", {}),
                    q;
                for (q in p)
                    if (p.hasOwnProperty(q)) {
                        var r = g ? p[q].filter(function(u) {
                            return k.indexOf(u) === -1
                        }) : p[q];
                        if (r.length !== 0) {
                            var t = lh(d, q);
                            if (t) {
                                var v = Uz(t, b, r);
                                Dy(v)
                            }
                        }
                    }
            }
        };

    function DB(a, b) {
        K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
        var c = a ? I(a) : {},
            d = vb(c.matchCommonButtons),
            e = !!c.cssSelector;
        b = Oz(b);
        M(this, "detect_click_events", c.matchCommonButtons, c.cssSelector);
        var f = c.useV2EventName ? "gtm.click-v2" : "gtm.click",
            g = c.useV2EventName ? "ecl" : "cl",
            k = function(n) {
                n.push(b);
                return n
            };
        if (e || d) {
            if (d && Tz(g, "commonButtonIds", k, []), e) {
                var m = xb(String(c.cssSelector));
                Tz(g, "selectorToTriggerIds",
                    function(n) {
                        n.hasOwnProperty(m) || (n[m] = []);
                        k(n[m]);
                        return n
                    }, {})
            }
        } else Tz(g, "individualElementIds", k, []);
        Rz(g, function() {
            Bc(E, "click", function(n) {
                CB(g, f, n)
            }, !0)
        });
        return b
    }
    DB.F = "internal.enableAutoEventOnClick";
    var GB = function(a) {
            if (!EB) {
                var b = function() {
                    var c = E.body;
                    if (c)
                        if (FB)(new MutationObserver(function() {
                            for (var e = 0; e < EB.length; e++) F(EB[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            Bc(c, "DOMNodeInserted", function() {
                                d || (d = !0, F(function() {
                                    d = !1;
                                    for (var e = 0; e < EB.length; e++) F(EB[e])
                                }))
                            })
                        }
                };
                EB = [];
                E.body ? b() : F(b)
            }
            EB.push(a)
        },
        FB = !!C.MutationObserver,
        EB;
    var HB = function(a) {
            a.has("PollingId") && (C.clearInterval(Number(a.get("PollingId"))), a.remove("PollingId"))
        },
        JB = function(a, b, c, d) {
            function e() {
                if (!js(a.target)) {
                    b.has("RecentOnScreen") || b.set("RecentOnScreen", "" + IB().toString());
                    b.has("FirstOnScreen") || b.set("FirstOnScreen", "" + IB().toString());
                    var g = 0;
                    b.has("TotalVisibleTime") && (g = Number(b.get("TotalVisibleTime")));
                    g += 100;
                    b.set("TotalVisibleTime", "" + g.toString());
                    if (g >= c) {
                        var k = Uz(a.target, "gtm.elementVisibility", [b.uid]),
                            m = ls(a.target);
                        k["gtm.visibleRatio"] =
                            Math.round(m * 1E3) / 10;
                        k["gtm.visibleTime"] = c;
                        k["gtm.visibleFirstTime"] = Number(b.get("FirstOnScreen"));
                        k["gtm.visibleLastTime"] = Number(b.get("RecentOnScreen"));
                        Dy(k);
                        d()
                    }
                }
            }
            if (!b.has("PollingId") && (c === 0 && e(), !b.has("HasFired"))) {
                var f = C.setInterval(e, 100);
                b.set("PollingId", String(f))
            }
        },
        IB = function() {
            var a = Number(Ji("gtm.start", 2)) || 0;
            return zb() - a
        },
        KB = function(a, b) {
            this.element = a;
            this.uid = b
        };
    KB.prototype.has = function(a) {
        return !!this.element.dataset["gtmVis" + a + this.uid]
    };
    KB.prototype.get = function(a) {
        return this.element.dataset["gtmVis" +
            a + this.uid]
    };
    KB.prototype.set = function(a, b) {
        this.element.dataset["gtmVis" + a + this.uid] = b
    };
    KB.prototype.remove = function(a) {
        delete this.element.dataset["gtmVis" + a + this.uid]
    };

    function LB(a, b) {
        var c = function(v) {
                var u = new KB(v.target, p);
                v.intersectionRatio >= n ? u.has("HasFired") || JB(v, u, m, q === "ONCE" ? function() {
                    for (var w = 0; w < r.length; w++) {
                        var x = new KB(r[w], p);
                        x.set("HasFired", "1");
                        HB(x)
                    }
                    os(t);
                    if (k) {
                        var y = d;
                        if (EB)
                            for (var A = 0; A < EB.length; A++) EB[A] === y && EB.splice(A, 1)
                    }
                } : function() {
                    u.set("HasFired", "1");
                    HB(u)
                }) : (HB(u), q === "MANY_PER_ELEMENT" && u.has("HasFired") && (u.remove("HasFired"), u.remove("TotalVisibleTime")),
                    u.remove("RecentOnScreen"))
            },
            d = function() {
                var v = !1,
                    u = null;
                if (f === "CSS") {
                    try {
                        u = jh(g)
                    } catch (A) {}
                    v = !!u && r.length !== u.length
                } else if (f === "ID") {
                    var w = E.getElementById(g);
                    w && (u = [w], v = r.length !== 1 || r[0] !== w)
                }
                u || (u = [], v = r.length > 0);
                if (v) {
                    for (var x = 0; x < r.length; x++) HB(new KB(r[x], p));
                    r = [];
                    for (var y = 0; y < u.length; y++) r.push(u[y]);
                    t >= 0 && os(t);
                    r.length > 0 && (t = rs(c, r, [n]))
                }
            };
        K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
        M(this, "detect_element_visibility_events");
        var e = a ? I(a) : {},
            f = e.selectorType,
            g;
        switch (f) {
            case "ID":
                g = String(e.id);
                break;
            case "CSS":
                g = String(e.selector);
                break;
            default:
                throw Error("Unrecognized element selector type " + f + ". Must be one of 'ID' or 'CSS'.");
        }
        var k = !!e.useDomChangeListener,
            m = e.onScreenDuration && Number(e.onScreenDuration) || 0,
            n = (Number(e.onScreenRatio) || 50) / 100,
            p = Oz(b),
            q = e.firingFrequency,
            r = [],
            t = -1;
        d();
        k && GB(d);
        return b
    }
    LB.F = "internal.enableAutoEventOnElementVisibility";

    function MB() {}
    MB.F = "internal.enableAutoEventOnError";
    var NB = {},
        OB = [],
        PB = {},
        QB = 0,
        RB = 0;

    function XB(a, b) {
        var c = this;
        return b
    }
    XB.F = "internal.enableAutoEventOnFormInteraction";

    function bC(a, b) {
        var c = this;
        return b
    }
    bC.F = "internal.enableAutoEventOnFormSubmit";

    function gC() {
        var a = this;
    }
    gC.F = "internal.enableAutoEventOnGaSend";
    var hC = {},
        iC = [];

    function pC(a, b) {
        var c = this;
        return b
    }
    pC.F = "internal.enableAutoEventOnHistoryChange";
    var qC = ["http://", "https://", "javascript:", "file://"];

    function uC(a, b) {
        var c = this;
        return b
    }
    uC.F = "internal.enableAutoEventOnLinkClick";
    var vC, wC;

    function HC(a, b) {
        var c = this;
        return b
    }
    HC.F = "internal.enableAutoEventOnScroll";

    function IC(a) {
        return function() {
            if (a.limit && a.Jh >= a.limit) a.Uf && C.clearInterval(a.Uf);
            else {
                a.Jh++;
                var b = zb();
                Dy({
                    event: a.eventName,
                    "gtm.timerId": a.Uf,
                    "gtm.timerEventNumber": a.Jh,
                    "gtm.timerInterval": a.interval,
                    "gtm.timerLimit": a.limit,
                    "gtm.timerStartTime": a.gk,
                    "gtm.timerCurrentTime": b,
                    "gtm.timerElapsedTime": b - a.gk,
                    "gtm.triggers": a.fn
                })
            }
        }
    }

    function JC(a, b) {
        return b
    }
    JC.F = "internal.enableAutoEventOnTimer";
    var gc = la(["data-gtm-yt-inspected-"]),
        LC = ["www.youtube.com", "www.youtube-nocookie.com"],
        MC, NC = !1;

    function XC(a, b) {
        var c = this;
        return b
    }
    XC.F = "internal.enableAutoEventOnYouTubeActivity";

    function YC(a, b) {
        K(this.getName(), ["booleanExpression:!string", "context:?PixieMap"], arguments);
        var c = b ? I(b) : {},
            d = a,
            e = !1;
        return e
    }
    YC.F = "internal.evaluateBooleanExpression";
    var ZC;

    function $C(a) {
        var b = !1;
        return b
    }
    $C.F = "internal.evaluateMatchingRules";

    function HD() {
        return An(7) && An(9) && An(10)
    };
    var LD = function(a, b) {
            if (!b.isGtmEvent) {
                var c = V(b, T.g.sb),
                    d = V(b, T.g.Hb),
                    e = V(b, c);
                if (e === void 0) {
                    var f = void 0;
                    ID.hasOwnProperty(c) ? f = ID[c] : JD.hasOwnProperty(c) && (f = JD[c]);
                    f === 1 && (f = KD(c));
                    l(f) ? Sw()(function() {
                        var g, k, m, n = (m = (g = Sw()) == null ? void 0 : (k = g.getByName) == null ? void 0 : k.call(g, a)) == null ? void 0 : m.get(f);
                        d(n)
                    }) : d(void 0)
                } else d(e)
            }
        },
        MD = function(a, b) {
            var c = a[T.g.Kb],
                d = b + ".",
                e = a[T.g.W] || "",
                f = c === void 0 ? !!a.use_anchor : c === "fragment",
                g = !!a[T.g.ub];
            e = String(e).replace(/\s+/g, "").split(",");
            var k = Sw();
            k(d + "require", "linker");
            k(d + "linker:autoLink", e, f, g)
        },
        QD = function(a, b, c) {
            if (!c.isGtmEvent || !ND[a]) {
                var d = !W(T.g.U),
                    e = function(f) {
                        var g = "gtm" + String(zi()),
                            k, m = Sw(),
                            n = OD(b, "", c),
                            p, q = n.createOnlyFields._useUp;
                        if (c.isGtmEvent || PD(b, n.createOnlyFields)) {
                            c.isGtmEvent && (k = n.createOnlyFields, n.gtmTrackerName && (k.name = g));
                            m(function() {
                                var t, v = m == null ? void 0 : (t = m.getByName) == null ? void 0 : t.call(m, b);
                                v && (p = v.get("clientId"));
                                if (!c.isGtmEvent) {
                                    var u;
                                    m == null || (u = m.remove) == null || u.call(m, b)
                                }
                            });
                            m("create", a, c.isGtmEvent ?
                                k : n.createOnlyFields);
                            d && W(T.g.U) && (d = !1, m(function() {
                                var t, v, u = (t = Sw()) == null ? void 0 : (v = t.getByName) == null ? void 0 : v.call(t, c.isGtmEvent ? g : b);
                                !u || u.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = ci[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = ci[f]), u.set(n.fieldsToSet),
                                    c.isGtmEvent ? u.send("pageview") : u.send("pageview", n.fieldsToSend))
                            }));
                            c.isGtmEvent && m(function() {
                                var t;
                                m == null || (t = m.remove) == null || t.call(m, g)
                            })
                        }
                    };
                cl(function() {
                    return void e(T.g.U)
                }, T.g.U);
                cl(function() {
                    return void e(T.g.O)
                }, T.g.O);
                cl(function() {
                    return void e(T.g.N)
                }, T.g.N);
                c.isGtmEvent && (ND[a] = !0)
            }
        },
        RD = function(a, b) {
            hj() && b && (a[T.g.rb] = b)
        },
        $D = function(a, b, c) {
            function d() {
                var L = ya.apply(0, arguments);
                L[0] = v ? v + "." + L[0] : "" + L[0];
                r.apply(window, L)
            }

            function e(L) {
                function R(na, ia) {
                    for (var xa = 0; ia && xa <
                        ia.length; xa++) d(na, ia[xa])
                }
                var X = c.isGtmEvent,
                    aa = X ? SD(u) : TD(b, c);
                if (aa) {
                    var S = {};
                    RD(S, L);
                    d("require", "ec", "ec.js", S);
                    X && aa.lh && d("set", "&cu", aa.lh);
                    var P = aa.action;
                    if (X || P === "impressions")
                        if (R("ec:addImpression", aa.Qj), !X) return;
                    if (P === "promo_click" || P === "promo_view" || X && aa.Ye) {
                        var ka = aa.Ye;
                        R("ec:addPromo", ka);
                        if (ka && ka.length > 0 && P === "promo_click") {
                            X ? d("ec:setAction", P, aa.wb) : d("ec:setAction", P);
                            return
                        }
                        if (!X) return
                    }
                    P !== "promo_view" && P !== "impressions" && (R("ec:addProduct", aa.Ic), d("ec:setAction", P,
                        aa.wb))
                }
            }

            function f(L) {
                if (L) {
                    var R = {};
                    if (Qa(L))
                        for (var X in UD) UD.hasOwnProperty(X) && VD(UD[X], X, L[X], R);
                    RD(R, y);
                    d("require", "linkid", R)
                }
            }

            function g() {
                if (Xn()) {} else {
                    var L = V(c, T.g.Vi);
                    L && (d("require", L, {
                        dataLayer: hi.ib
                    }), d("require", "render"))
                }
            }

            function k() {
                var L = V(c, T.g.Vc);
                r(function() {
                    if (!c.isGtmEvent && Qa(L)) {
                        var R = u.fieldsToSend,
                            X, aa, S = (X = t()) == null ? void 0 : (aa = X.getByName) == null ? void 0 : aa.call(X, v),
                            P;
                        for (P in L)
                            if (L[P] !=
                                null && /^(dimension|metric)\d+$/.test(P)) {
                                var ka = void 0,
                                    na = (ka = S) == null ? void 0 : ka.get(KD(L[P]));
                                WD(R, P, na)
                            }
                    }
                })
            }

            function m(L, R, X) {
                X && (R = String(R));
                u.fieldsToSend[L] = R
            }

            function n() {
                if (u.displayfeatures) {
                    var L = "_dc_gtm_" + p.replace(/[^A-Za-z0-9-]/g, "");
                    d("require", "displayfeatures", void 0, {
                        cookieName: L
                    })
                }
            }
            var p = a,
                q, r = c.isGtmEvent ? Vw(V(c, "gaFunctionName")) : Vw();
            if (mb(r)) {
                var t = Sw,
                    v;
                c.isGtmEvent ? v = V(c, "name") || V(c, "gtmTrackerName") : v = "gtag_" + p.split("-").join("_");
                var u = OD(v, b, c);
                !c.isGtmEvent && PD(v, u.createOnlyFields) &&
                    (r(function() {
                        var L, R;
                        t() && ((L = t()) == null || (R = L.remove) == null || R.call(L, v))
                    }), XD[v] = !1);
                r("create", p, u.createOnlyFields);
                var w = c.isGtmEvent && u.fieldsToSet[T.g.rb];
                if (!c.isGtmEvent && u.createOnlyFields[T.g.rb] || w) {
                    var x = gj(c.isGtmEvent ? u.fieldsToSet[T.g.rb] : u.createOnlyFields[T.g.rb], "/analytics.js");
                    x && (q = x)
                }
                var y = c.isGtmEvent ? u.fieldsToSet[T.g.rb] : u.createOnlyFields[T.g.rb];
                if (y) {
                    var A = c.isGtmEvent ? u.fieldsToSet[T.g.Xd] : u.createOnlyFields[T.g.Xd];
                    A && !XD[v] && (XD[v] = !0, r(Xw(v, A)))
                }
                c.isGtmEvent ? u.enableRecaptcha &&
                    d("require", "recaptcha", "recaptcha.js") : (k(), f(u.linkAttribution));
                var B = u[T.g.oa];
                B && B[T.g.W] && MD(B, v);
                d("set", u.fieldsToSet);
                if (c.isGtmEvent) {
                    if (u.enableLinkId) {
                        var D = {};
                        RD(D, y);
                        d("require", "linkid", "linkid.js", D)
                    }
                    QD(p, v, c)
                }
                if (b === T.g.Sb)
                    if (c.isGtmEvent) {
                        n();
                        if (u.remarketingLists) {
                            var H = "_dc_gtm_" + p.replace(/[^A-Za-z0-9-]/g, "");
                            d("require", "adfeatures", {
                                cookieName: H
                            })
                        }
                        e(y);
                        d("send", "pageview");
                        u.createOnlyFields._useUp && Uw(v + ".")
                    } else g(), d("send", "pageview", u.fieldsToSend);
                else b === T.g.aa ? (g(),
                    Rr(p, c), V(c, T.g.Xa) && (yq(["aw", "dc"]), Uw(v + ".")), Aq(["aw", "dc"]), u.sendPageView != 0 && d("send", "pageview", u.fieldsToSend), QD(p, v, c)) : b === T.g.Ua ? LD(v, c) : b === "screen_view" ? d("send", "screenview", u.fieldsToSend) : b === "timing_complete" ? (u.fieldsToSend.hitType = "timing", m("timingCategory", u.eventCategory, !0), c.isGtmEvent ? m("timingVar", u.timingVar, !0) : m("timingVar", u.name, !0), m("timingValue", ub(u.value)), u.eventLabel !== void 0 && m("timingLabel", u.eventLabel, !0), d("send", u.fieldsToSend)) : b === "exception" ? d("send",
                    "exception", u.fieldsToSend) : b === "" && c.isGtmEvent || (b === "track_social" && c.isGtmEvent ? (u.fieldsToSend.hitType = "social", m("socialNetwork", u.socialNetwork, !0), m("socialAction", u.socialAction, !0), m("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || YD[b]) && e(y), c.isGtmEvent && n(), u.fieldsToSend.hitType = "event", m("eventCategory", u.eventCategory, !0), m("eventAction", u.eventAction || b, !0), u.eventLabel !== void 0 && m("eventLabel", u.eventLabel, !0), u.value !== void 0 && m("eventValue", ub(u.value))), d("send", u.fieldsToSend));
                var J = q && !c.eventMetadata.suppress_script_load;
                if (!ZD && (!c.isGtmEvent || J)) {
                    q = q || "https://www.google-analytics.com/analytics.js";
                    ZD = !0;
                    var G = function() {
                            c.onFailure()
                        },
                        U = function() {
                            var L;
                            ((L = t()) == null ? 0 : L.loaded) || G()
                        };
                    Xn() ? F(U) : wc(q, U, G)
                }
            } else F(c.onFailure)
        },
        aE = function(a, b, c, d) {
            dl(function() {
                $D(a, b, d)
            }, [T.g.U, T.g.O])
        },
        PD = function(a, b) {
            var c = bE[a];
            bE[a] = Ra(b, null);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        },
        TD = function(a, b) {
            function c(v) {
                return {
                    id: d(T.g.xa),
                    affiliation: d(T.g.pg),
                    revenue: d(T.g.ka),
                    tax: d(T.g.tf),
                    shipping: d(T.g.Yc),
                    coupon: d(T.g.qg),
                    list: d(T.g.rf) || d(T.g.Xc) || v
                }
            }
            for (var d = function(v) {
                    return V(b, v)
                }, e = d(T.g.ba), f, g = 0; e && g < e.length && !(f = e[g][T.g.rf] || e[g][T.g.Xc]); g++);
            var k = d(T.g.Vc);
            if (Qa(k))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in k) k.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && k[p] != null && WD(n, p, n[k[p]])
                }
            var q = null,
                r = d(T.g.Li);
            if (a === T.g.Ga || a === T.g.nc) q = {
                action: a,
                wb: c(),
                Ic: cE(e)
            };
            else if (a === T.g.jc) q = {
                action: "add",
                wb: c(),
                Ic: cE(e)
            };
            else if (a === T.g.kc) q = {
                action: "remove",
                wb: c(),
                Ic: cE(e)
            };
            else if (a === T.g.Ma) q = {
                action: "detail",
                wb: c(f),
                Ic: cE(e)
            };
            else if (a === T.g.jb) q = {
                action: "impressions",
                Qj: cE(e)
            };
            else if (a === T.g.kb) q = {
                action: "promo_view",
                Ye: cE(r) || cE(e)
            };
            else if (a === "select_content" && r && r.length > 0 || a === T.g.Eb) q = {
                action: "promo_click",
                Ye: cE(r) || cE(e)
            };
            else if (a === "select_content" || a === T.g.mc) q = {
                action: "click",
                wb: {
                    list: d(T.g.rf) || d(T.g.Xc) || f
                },
                Ic: cE(e)
            };
            else if (a === T.g.Rb || a === "checkout_progress") {
                var t = {
                    step: a === T.g.Rb ? 1 : d(T.g.qf),
                    option: d(T.g.Qd)
                };
                q = {
                    action: "checkout",
                    Ic: cE(e),
                    wb: Ra(c(), t)
                }
            } else a === "set_checkout_option" && (q = {
                action: "checkout_option",
                wb: {
                    step: d(T.g.qf),
                    option: d(T.g.Qd)
                }
            });
            q && (q.lh = d(T.g.wa));
            return q
        },
        SD = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.lh = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.Qj = b.translateIfKeyEquals === "impressions" ? cE(d) : d
            }
            if (b.promoView) {
                c.action =
                    "promo_view";
                var e = b.promoView.promotions;
                c.Ye = b.translateIfKeyEquals === "promoView" ? cE(e) : e
            }
            if (b.promoClick) {
                var f = b.promoClick;
                c.action = "promo_click";
                var g = f.promotions;
                c.Ye = b.translateIfKeyEquals === "promoClick" ? cE(g) : g;
                c.wb = f.actionField;
                return c
            }
            for (var k in b)
                if (b[k] !== void 0 && k !== "translateIfKeyEquals" && k !== "impressions" && k !== "promoView" && k !== "promoClick" && k !== "currencyCode") {
                    c.action = k;
                    var m = b[k].products;
                    c.Ic = b.translateIfKeyEquals === "products" ? cE(m) : m;
                    c.wb = b[k].actionField;
                    break
                }
            return Object.keys(c).length ?
                c : null
        },
        cE = function(a) {
            function b(e) {
                function f(k, m) {
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (e[p]) {
                            g[k] = e[p];
                            break
                        }
                    }
                }
                var g = Ra(e, null);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant", "item_variant"]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) g.category = e.category;
                    else {
                        for (var k = "", m = 0; m < dE.length; m++) e[dE[m]] !== void 0 && (k &&
                            (k += "/"), k += e[dE[m]]);
                        k && (g.category = k)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return g
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && Qa(a[d]) && c.push(b(a[d]));
            return c.length ? c : void 0
        },
        OD = function(a, b, c) {
            var d = function(L) {
                    return V(c, L)
                },
                e = {},
                f = {},
                g = {},
                k = {},
                m = eE(d(T.g.Mi));
            !c.isGtmEvent && m && WD(f, "exp", m);
            g["&gtm"] = Zn({
                ra: c.eventMetadata.source_canonical_id,
                Nf: !0
            });
            c.isGtmEvent || (g._no_slc = !0);
            Bk() &&
                (k._cs = fE);
            var n = d(T.g.Vc);
            if (!c.isGtmEvent && Qa(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && n[p] != null) {
                        var q = d(String(n[p]));
                        q !== void 0 && WD(f, p, q)
                    }
            for (var r = !c.isGtmEvent, t = El(c), v = 0; v < t.length; ++v) {
                var u = t[v];
                if (c.isGtmEvent) {
                    var w = d(u);
                    gE.hasOwnProperty(u) ? e[u] = w : hE.hasOwnProperty(u) ? k[u] = w : g[u] = w
                } else {
                    var x = void 0;
                    u !== T.g.fa ? x = d(u) : x = Fl(c, u);
                    if (iE.hasOwnProperty(u)) VD(iE[u], u, x, e);
                    else if (jE.hasOwnProperty(u)) VD(jE[u], u, x, g);
                    else if (JD.hasOwnProperty(u)) VD(JD[u],
                        u, x, f);
                    else if (ID.hasOwnProperty(u)) VD(ID[u], u, x, k);
                    else if (/^(dimension|metric|content_group)\d+$/.test(u)) VD(1, u, x, f);
                    else if (u === T.g.fa) {
                        if (!kE) {
                            var y = Jb(x);
                            y && (f["&did"] = y)
                        }
                        var A = void 0,
                            B = void 0;
                        b === T.g.aa ? A = Jb(Fl(c, u), ".") : (A = Jb(Fl(c, u, 1), "."), B = Jb(Fl(c, u, 2), "."));
                        A && (f["&gdid"] = A);
                        B && (f["&edid"] = B)
                    } else u === T.g.Oa && t.indexOf(T.g.oc) < 0 && (k.cookieName = String(x) + "_ga");
                    O(115) && lE[u] && (c.H.hasOwnProperty(u) || b === T.g.aa && c.j.hasOwnProperty(u)) && (r = !1)
                }
            }
            O(115) && r && (f["&jsscut"] = "1");
            d(T.g.lf) !== !1 &&
                d(T.g.nb) !== !1 && HD() || (g.allowAdFeatures = !1);
            g.allowAdPersonalizationSignals = Fn(c);
            !c.isGtmEvent && d(T.g.Xa) && (k._useUp = !0);
            if (c.isGtmEvent) {
                k.name = k.name || e.gtmTrackerName;
                var D = g.hitCallback;
                g.hitCallback = function() {
                    mb(D) && D();
                    c.onSuccess()
                }
            } else {
                WD(k, "cookieDomain", "auto");
                WD(g, "forceSSL", !0);
                WD(e, "eventCategory", mE(b));
                nE[b] && WD(f, "nonInteraction", !0);
                b === "login" || b === "sign_up" || b === "share" ? WD(e, "eventLabel", d(T.g.Eg)) : b === "search" || b === "view_search_results" ? WD(e, "eventLabel", d(T.g.Zi)) : b === "select_content" &&
                    WD(e, "eventLabel", d(T.g.Gi));
                var H = e[T.g.oa] || {},
                    J = H[T.g.zc];
                J || J != 0 && H[T.g.W] ? k.allowLinker = !0 : J === !1 && WD(k, "useAmpClientId", !1);
                f.hitCallback = c.onSuccess;
                k.name = a
            }
            Gn() && (g["&gcs"] = Hn());
            g["&gcd"] = Ln(c);
            Bk() && (W(T.g.U) || (k.storage = "none"), W([T.g.O, T.g.N]) || (g.allowAdFeatures = !1, k.storeGac = !1));
            On() && (g["&dma_cps"] = Mn());
            g["&dma"] = Nn();
            kn(sn()) && (g["&tcfd"] = Vn());
            Bi.j && (g["&tag_exp"] = Bi.j);
            var G = ij(c) || d(T.g.rb),
                U = d(T.g.Xd);
            G && (c.isGtmEvent || (k[T.g.rb] = G), k._cd2l = !0);
            U && !c.isGtmEvent && (k[T.g.Xd] =
                U);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = k;
            return e
        },
        fE = function(a) {
            return W(a)
        },
        eE = function(a) {
            if (Array.isArray(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (d != null) {
                        var e = d.id,
                            f = d.variant;
                        e != null && f != null && b.push(String(e) + "." + String(f))
                    }
                }
                return b.length > 0 ? b.join("!") : void 0
            }
        },
        WD = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        mE = function(a) {
            var b = "general";
            oE[a] ? b = "ecommerce" : pE[a] ? b = "engagement" : a === "exception" && (b = "error");
            return b
        },
        KD = function(a) {
            return a && l(a) ? a.replace(/(_[a-z])/g,
                function(b) {
                    return b[1].toUpperCase()
                }) : a
        },
        VD = function(a, b, c, d) {
            if (c !== void 0)
                if (qE[b] && (c = vb(c)), b !== "anonymize_ip" || c || (c = void 0), a === 1) d[KD(b)] = c;
                else if (l(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && c[e] !== void 0 && (d[a[e]] = c[e])
        },
        kE = !1;
    var ZD = !1,
        XD = {},
        ND = {},
        rE = {},
        lE = (rE[T.g.ja] = 1, rE[T.g.nb] = 1, rE[T.g.Wa] = 1, rE[T.g.Na] = 1, rE[T.g.Za] = 1, rE[T.g.oc] = 1, rE[T.g.Gb] = 1, rE[T.g.Oa] = 1, rE[T.g.qc] = 1,
            rE[T.g.Gg] = 1, rE[T.g.qa] = 1, rE[T.g.fd] = 1, rE[T.g.Aa] = 1, rE[T.g.ab] = 1, rE),
        sE = {},
        ID = (sE.client_storage = "storage", sE.sample_rate = 1, sE.site_speed_sample_rate = 1, sE.store_gac = 1, sE.use_amp_client_id = 1, sE[T.g.ob] = 1, sE[T.g.na] = "storeGac", sE[T.g.Wa] = 1, sE[T.g.Na] = 1, sE[T.g.Za] = 1, sE[T.g.oc] = 1, sE[T.g.Gb] = 1, sE[T.g.qc] = 1, sE),
        tE = {},
        hE = (tE._cs = 1, tE._useUp = 1, tE.allowAnchor = 1, tE.allowLinker = 1, tE.alwaysSendReferrer = 1, tE.clientId = 1, tE.cookieDomain = 1, tE.cookieExpires = 1, tE.cookieFlags = 1, tE.cookieName = 1, tE.cookiePath = 1, tE.cookieUpdate =
            1, tE.legacyCookieDomain = 1, tE.legacyHistoryImport = 1, tE.name = 1, tE.sampleRate = 1, tE.siteSpeedSampleRate = 1, tE.storage = 1, tE.storeGac = 1, tE.useAmpClientId = 1, tE._cd2l = 1, tE),
        jE = {
            anonymize_ip: 1
        },
        uE = {},
        JD = (uE.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, uE.app_id = 1, uE.app_installer_id = 1, uE.app_name = 1, uE.app_version = 1, uE.description = "exDescription", uE.fatal = "exFatal", uE.language = 1, uE.page_hostname = "hostname", uE.transport_type =
            "transport", uE[T.g.wa] = "currencyCode", uE[T.g.Fg] = 1, uE[T.g.qa] = "location", uE[T.g.fd] = "page", uE[T.g.Aa] = "referrer", uE[T.g.ab] = "title", uE[T.g.yf] = 1, uE[T.g.ya] = 1, uE),
        vE = {},
        iE = (vE.content_id = 1, vE.event_action = 1, vE.event_category = 1, vE.event_label = 1, vE.link_attribution = 1, vE.name = 1, vE[T.g.oa] = 1, vE[T.g.Eg] = 1, vE[T.g.Ha] = 1, vE[T.g.ka] = 1, vE),
        gE = {
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        },
        dE = ["item_category", "item_category2", "item_category3", "item_category4", "item_category5"],
        wE = {},
        UD = (wE.levels = 1, wE[T.g.Na] = "duration", wE[T.g.oc] = 1, wE),
        xE = {},
        qE = (xE.anonymize_ip = 1, xE.fatal = 1, xE.send_page_view = 1, xE.store_gac = 1, xE.use_amp_client_id = 1, xE[T.g.na] = 1, xE[T.g.Fg] = 1, xE),
        yE = {},
        YD = (yE.checkout_progress = 1, yE.select_content = 1, yE.set_checkout_option = 1, yE[T.g.jc] = 1, yE[T.g.kc] = 1, yE[T.g.Rb] = 1, yE[T.g.mc] = 1, yE[T.g.jb] = 1, yE[T.g.Eb] = 1, yE[T.g.kb] =
            1, yE[T.g.Ga] = 1, yE[T.g.nc] = 1, yE[T.g.Ma] = 1, yE),
        zE = {},
        oE = (zE.checkout_progress = 1, zE.set_checkout_option = 1, zE[T.g.gg] = 1, zE[T.g.hg] = 1, zE[T.g.jc] = 1, zE[T.g.kc] = 1, zE[T.g.ig] = 1, zE[T.g.Rb] = 1, zE[T.g.Ga] = 1, zE[T.g.nc] = 1, zE[T.g.jg] = 1, zE),
        AE = {},
        pE = (AE.generate_lead = 1, AE.login = 1, AE.search = 1, AE.select_content = 1, AE.share = 1, AE.sign_up = 1, AE.view_search_results = 1, AE[T.g.mc] = 1, AE[T.g.jb] = 1, AE[T.g.Eb] = 1, AE[T.g.kb] = 1, AE[T.g.Ma] = 1, AE),
        BE = {},
        nE = (BE.view_search_results = 1, BE[T.g.jb] = 1, BE[T.g.kb] = 1, BE[T.g.Ma] = 1, BE),
        bE = {};

    function CE(a, b, c, d) {}
    CE.F = "internal.executeEventProcessor";

    function DE(a) {
        var b;
        K(this.getName(), ["javascript:!string"], arguments);
        M(this, "unsafe_run_arbitrary_javascript");
        try {
            var c = C.google_tag_manager;
            c && typeof c.e === "function" && (b = c.e(a))
        } catch (d) {}
        return cd(b, this.D, 1)
    }
    DE.F = "internal.executeJavascriptString";

    function EE(a) {
        var b;
        return b
    };

    function FE(a) {
        var b = {};
        return cd(b)
    }
    FE.F = "internal.getAdsCookieWritingOptions";

    function GE(a) {
        var b = !1;
        return b
    }
    GE.F = "internal.getAllowAdPersonalization";
    var HE = null;

    function IE() {
        var a = new Xa;
        M(this, "read_container_data"), O(41) && HE ? a = HE : (a.set("containerId", 'GTM-TKXT7MH'), a.set("version", '30'), a.set("environmentName", ''), a.set("debugMode", Sf), a.set("previewMode", Tf.ik), a.set("environmentMode", Tf.Al), a.set("firstPartyServing", Di() || qi), a.set("containerUrl", qc), a.La(), O(41) && (HE = a));
        return a
    }
    IE.R = "getContainerVersion";

    function JE(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c
    }
    JE.R = "getCookieValues";

    function KE() {
        return Nk()
    }
    KE.F = "internal.getCountryCode";

    function LE() {
        var a = [];
        return cd(a)
    }
    LE.F = "internal.getDestinationIds";

    function ME(a, b) {
        var c = null;
        return c
    }
    ME.F = "internal.getElementAttribute";

    function NE(a) {
        var b = null;
        return b
    }
    NE.F = "internal.getElementById";

    function OE(a) {
        var b = "";
        return b
    }
    OE.F = "internal.getElementInnerText";

    function PE(a, b) {
        var c = null;
        return c
    }
    PE.F = "internal.getElementProperty";

    function QE(a) {
        var b;
        return b
    }
    QE.F = "internal.getElementValue";

    function RE(a) {
        var b = 0;
        return b
    }
    RE.F = "internal.getElementVisibilityRatio";

    function SE(a) {
        var b = null;
        return b
    }
    SE.F = "internal.getElementsByCssSelector";

    function TE(a) {
        var b;
        K(this.getName(), ["keyPath:!string"], arguments);
        M(this, "read_event_data", a);
        var c;
        a: {
            var d = a,
                e = Mz(this).originalEventData;
            if (e) {
                for (var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0; q < p.length; q++) {
                    for (var r = p[q].split("\\."), t = 0; t < r.length; t++) {
                        for (var v = r[t].split("."), u = 0; u < v.length; u++) n.push(v[u]), u !== v.length - 1 && n.push(m);
                        t !== r.length - 1 && n.push(k)
                    }
                    q !== p.length - 1 && n.push(g)
                }
                for (var w = [], x = "", y = h(n), A = y.next(); !A.done; A =
                    y.next()) {
                    var B = A.value;
                    B === m ? (w.push(x), x = "") : x = B === g ? x + "\\" : B === k ? x + "." : x + B
                }
                x && w.push(x);
                for (var D = h(w), H = D.next(); !H.done; H = D.next()) {
                    if (f == null) {
                        c = void 0;
                        break a
                    }
                    f = f[H.value]
                }
                c = f
            } else c = void 0
        }
        b = cd(c, this.D, 1);
        return b
    }
    TE.F = "internal.getEventData";
    var UE = {};
    UE.enableAWFledge = O(28);
    UE.enableAdsConversionValidation = O(15);
    UE.enableAutoPhoneAndAddressDetection = O(26);
    UE.enableAutoPiiOnPhoneAndAddress = O(27);
    UE.enableCachedEcommerceData = O(34);
    UE.enableCloudRecommentationsErrorLogging = O(35);
    UE.enableCloudRecommentationsSchemaIngestion = O(36);
    UE.enableCloudRetailInjectPurchaseMetadata = O(38);
    UE.enableCloudRetailLogging = O(37);
    UE.enableCloudRetailPageCategories = O(39);
    UE.enableConsentDisclosureActivity = O(40);
    UE.enableConversionMarkerPageViewRename = O(42);
    UE.enableDCFledge = O(46);
    UE.enableDecodeUri = O(68);
    UE.enableDeferAllEnhancedMeasurement = O(47);
    UE.enableDetectUserProvidedDataErrorHandling = O(49);
    UE.enableDmaBlockDisclosure = O(51);
    UE.enableFormSkipValidation = O(63);
    UE.enableGtmEcModeFix = O(74);
    UE.enableUrlDecodeEventUsage = O(106);
    UE.enableZoneConfigInChildContainers = O(108);
    UE.useEnableAutoEventOnFormApis = O(118);
    UE.autoPiiEligible = Sk();

    function VE() {
        return cd(UE)
    }
    VE.F = "internal.getFlags";

    function WE() {
        return new $c(kz)
    }
    WE.F = "internal.getHtmlId";

    function XE(a, b) {
        var c;
        return c
    }
    XE.F = "internal.getProductSettingsParameter";

    function YE(a, b) {
        var c;
        return c
    }
    YE.R = "getQueryParameters";

    function ZE(a, b) {
        var c;
        return c
    }
    ZE.R = "getReferrerQueryParameters";

    function $E(a) {
        var b = "";
        return b
    }
    $E.R = "getReferrerUrl";

    function aF() {
        return Ok()
    }
    aF.F = "internal.getRegionCode";

    function bF(a, b) {
        var c;
        return c
    }
    bF.F = "internal.getRemoteConfigParameter";

    function cF(a) {
        var b = "";
        return b
    }
    cF.R = "getUrl";

    function dF() {
        M(this, "get_user_agent");
        return nc.userAgent
    }
    dF.F = "internal.getUserAgent";

    function lF() {
        return C.gaGlobal = C.gaGlobal || {}
    }

    function mF() {
        var a = lF();
        a.hid = a.hid || qb();
        return a.hid
    }

    function nF(a, b) {
        var c = lF();
        if (c.vid === void 0 || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };

    function JF(a) {
        if (ht(a) || Di()) a.j[T.g.bj] = Ok() || Nk();
        O(65) && !ht(a) && Di() && (a.j[T.g.lj] = "::")
    };
    var ZF = function(a) {
            this.H = a;
            this.j = ""
        },
        $F = function(a, b) {
            a.C = b;
            return a
        },
        aG = function(a, b) {
            b = a.j + b;
            for (var c = b.indexOf("\n\n"); c !== -1;) {
                var d = a,
                    e;
                a: {
                    var f = h(b.substring(0, c).split("\n")),
                        g = f.next().value,
                        k = f.next().value;
                    if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0) try {
                        e = JSON.parse(k.substring(k.indexOf(":") + 1));
                        break a
                    } catch (G) {}
                    e = void 0
                }
                var m = d,
                    n = e;
                if (n) {
                    var p = n.send_pixel,
                        q = n.options,
                        r = m.H;
                    if (p) {
                        var t = p || [];
                        if (Array.isArray(t))
                            for (var v = Qa(q) ? q : {}, u = h(t), w = u.next(); !w.done; w = u.next()) r(w.value,
                                v)
                    }
                    var x = n.create_iframe,
                        y = n.options,
                        A = m.C;
                    if (x && A) {
                        var B = x || [];
                        if (Array.isArray(B))
                            for (var D = Qa(y) ? y : {}, H = h(B), J = H.next(); !J.done; J = H.next()) A(J.value, D)
                    }
                }
                b = b.substring(c + 2);
                c = b.indexOf("\n\n")
            }
            a.j = b
        };

    function bG(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    };
    var NG = window,
        OG = document,
        PG = function(a) {
            var b = NG._gaUserPrefs;
            if (b && b.ioo && b.ioo() || OG.documentElement.hasAttribute("data-google-analytics-opt-out") || a && NG["ga-disable-" + a] === !0) return !0;
            try {
                var c = NG.external;
                if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0
            } catch (p) {}
            for (var d = [], e = String(OG.cookie).split(";"), f = 0; f < e.length; f++) {
                var g = e[f].split("="),
                    k = g[0].replace(/^\s*|\s*$/g, "");
                if (k && k == "AMP_TOKEN") {
                    var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    m && (m = decodeURIComponent(m));
                    d.push(m)
                }
            }
            for (var n =
                    0; n < d.length; n++)
                if (d[n] == "$OPT_OUT") return !0;
            return OG.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function $G(a) {
        z(a, function(c) {
            c.charAt(0) === "_" && delete a[c]
        });
        var b = a[T.g.cb] || {};
        z(b, function(c) {
            c.charAt(0) === "_" && delete b[c]
        })
    }

    function DH(a, b) {}

    function EH(a, b) {
        var c = function() {};
        return c
    }

    function FH(a, b, c) {};
    var GH = EH;
    var HH = function(a, b, c) {
        for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]))
    };

    function IH(a, b, c) {
        var d = this;
        K(this.getName(), ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"], arguments);
        var e = b ? I(b) : {};
        Iz([function() {
            return M(d, "configure_google_tags", a, e)
        }]);
        var f = c ? I(c) : {},
            g = Mz(this);
        f.originatingEntity = CA(g);
        Ux(Mx(a, e), g.eventId, f);
    }
    IH.F = "internal.gtagConfig";

    function JH() {
        var a = {};
        return a
    };

    function LH(a, b) {}
    LH.R = "gtagSet";

    function MH(a, b) {}
    MH.R = "injectHiddenIframe";
    var NH = yz();

    function OH(a, b, c, d, e) {
        var f = this;
    }
    OH.F = "internal.injectHtml";
    var SH = {};

    function UH(a, b, c, d) {}
    var VH = {
            dl: 1,
            id: 1
        },
        WH = {};

    function XH(a, b, c, d) {}
    UH.R = "injectScript";
    XH.F = "internal.injectScript";

    function YH(a) {
        var b = !0;
        return b
    }
    YH.R = "isConsentGranted";

    function ZH() {
        return Qk()
    }
    ZH.F = "internal.isDmaRegion";

    function $H(a) {
        var b = !1;
        return b
    }
    $H.F = "internal.isEntityInfrastructure";

    function aI() {
        var a = Wg(function(b) {
            Mz(this).log("error", b)
        });
        a.R = "JSON";
        return a
    };

    function bI(a) {
        var b = void 0;
        return cd(b)
    }
    bI.F = "internal.legacyParseUrl";

    function cI() {
        return !1
    }
    var dI = {
        getItem: function(a) {
            var b = null;
            return b
        },
        setItem: function(a, b) {
            return !1
        },
        removeItem: function(a) {}
    };

    function eI() {
        try {
            M(this, "logging")
        } catch (c) {
            return
        }
        if (!console) return;
        for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++) a[b] = I(a[b], this.D);
        console.log.apply(console, a);
    }
    eI.R = "logToConsole";

    function fI(a, b) {}
    fI.F = "internal.mergeRemoteConfig";

    function gI(a, b, c) {
        c = c === void 0 ? !0 : c;
        var d = [];
        return cd(d)
    }
    gI.F = "internal.parseCookieValuesFromString";

    function hI(a) {
        var b = void 0;
        return b
    }
    hI.R = "parseUrl";

    function iI(a) {}
    iI.F = "internal.processAsNewEvent";

    function jI(a, b, c) {
        var d;
        return d
    }
    jI.F = "internal.pushToDataLayer";

    function kI(a) {
        var b = !1;
        return b
    }
    kI.R = "queryPermission";

    function lI() {
        var a = "";
        return a
    }
    lI.R = "readCharacterSet";

    function mI() {
        return hi.ib
    }
    mI.F = "internal.readDataLayerName";

    function nI() {
        var a = "";
        return a
    }
    nI.R = "readTitle";

    function oI(a, b) {
        var c = this;
    }
    oI.F = "internal.registerCcdCallback";

    function pI(a) {
        return !0
    }
    pI.F = "internal.registerDestination";
    var qI = ["config", "event", "get", "set"];

    function rI(a, b, c) {}
    rI.F = "internal.registerGtagCommandListener";

    function sI(a, b) {
        var c = !1;
        return c
    }
    sI.F = "internal.removeDataLayerEventListener";

    function tI(a, b) {}
    tI.F = "internal.removeFormData";

    function uI() {}
    uI.R = "resetDataLayer";

    function vI(a, b, c, d) {}
    vI.F = "internal.sendGtagEvent";

    function wI(a, b, c) {}
    wI.R = "sendPixel";

    function xI(a, b) {}
    xI.F = "internal.setAnchorHref";

    function yI(a) {}
    yI.F = "internal.setContainerConsentDefaults";

    function zI(a, b, c, d) {
        var e = this;
        d = d === void 0 ? !0 : d;
        var f = !1;
        return f
    }
    zI.R = "setCookie";

    function AI(a) {}
    AI.F = "internal.setCorePlatformServices";

    function BI(a, b) {}
    BI.F = "internal.setDataLayerValue";

    function CI(a) {}
    CI.R = "setDefaultConsentState";

    function DI(a, b) {}
    DI.F = "internal.setDelegatedConsentType";

    function EI(a, b) {}
    EI.F = "internal.setFormAction";

    function FI(a, b, c) {}
    FI.F = "internal.setInCrossContainerData";

    function GI(a, b, c) {
        return !1
    }
    GI.R = "setInWindow";

    function HI(a, b, c) {}
    HI.F = "internal.setProductSettingsParameter";

    function II(a, b, c) {}
    II.F = "internal.setRemoteConfigParameter";

    function JI(a, b, c, d) {
        var e = this;
    }
    JI.R = "sha256";

    function KI(a, b, c) {}
    KI.F = "internal.sortRemoteConfigParameters";

    function LI(a, b) {
        var c = void 0;
        return c
    }
    LI.F = "internal.subscribeToCrossContainerData";
    var MI = {},
        NI = {};
    MI.getItem = function(a) {
        var b = null;
        return b
    };
    MI.setItem = function(a, b) {};
    MI.removeItem = function(a) {};
    MI.clear = function() {};
    MI.R = "templateStorage";

    function OI(a, b) {
        var c = !1;
        return c
    }
    OI.F = "internal.testRegex";

    function PI(a) {
        var b;
        return b
    };

    function QI(a) {
        var b;
        return b
    }
    QI.F = "internal.unsiloId";

    function RI(a, b) {
        var c;
        return c
    }
    RI.F = "internal.unsubscribeFromCrossContainerData";

    function SI(a) {}
    SI.R = "updateConsentState";
    var TI;

    function UI(a, b, c) {
        TI = TI || new gh;
        TI.add(a, b, c)
    }

    function VI(a, b) {
        var c = TI = TI || new gh;
        if (c.j.hasOwnProperty(a)) throw Error("Attempting to add a private function which already exists: " + a + ".");
        if (c.contains(a)) throw Error("Attempting to add a private function with an existing API name: " + a + ".");
        c.j[a] = mb(b) ? Dg(a, b) : Eg(a, b)
    }

    function WI() {
        return function(a) {
            var b;
            var c = TI;
            if (c.contains(a)) b = c.get(a, this);
            else {
                var d;
                if (d = c.j.hasOwnProperty(a)) {
                    var e = !1,
                        f = this.D.j;
                    if (f) {
                        var g = f.eb();
                        if (g) {
                            g.indexOf("__cvt_") !== 0 && (e = !0);
                        }
                    } else e = !0;
                    d = e
                }
                if (d) {
                    var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
                    b = k
                } else throw Error(a + " is not a valid API name.");
            }
            return b
        }
    };

    function XI() {
        var a = function(c) {
                return void VI(c.F, c)
            },
            b = function(c) {
                return void UI(c.R, c)
            };
        b(Gz);
        b(Nz);
        b(aB);
        b(cB);
        b(dB);
        b(kB);
        b(mB);
        b(qB);
        b(aI());
        b(sB);
        b(IE);
        b(JE);
        b(YE);
        b(ZE);
        b($E);
        b(cF);
        b(LH);
        b(MH);
        b(UH);
        b(YH);
        b(eI);
        b(hI);
        b(kI);
        b(lI);
        b(nI);
        b(wI);
        b(zI);
        b(CI);
        b(GI);
        b(JI);
        b(MI);
        b(SI);
        UI("Math", Ig());
        UI("Object", eh);
        UI("TestHelper", ih());
        UI("assertApi", Fg);
        UI("assertThat", Gg);
        UI("decodeUri", Kg);
        UI("decodeUriComponent", Lg);
        UI("encodeUri", Mg);
        UI("encodeUriComponent", Ng);
        UI("fail", Sg);
        UI("generateRandom",
            Tg);
        UI("getTimestamp", Ug);
        UI("getTimestampMillis", Ug);
        UI("getType", Vg);
        UI("makeInteger", Xg);
        UI("makeNumber", Yg);
        UI("makeString", Zg);
        UI("makeTableMap", $g);
        UI("mock", ch);
        UI("fromBase64", EE, !("atob" in C));
        UI("localStorage", dI, !cI());
        UI("toBase64", PI, !("btoa" in C));
        a(Jz);
        a(dA);
        a(pA);
        a(wA);
        a(BA);
        a(QA);
        a(ZA);
        a(bB);
        a(eB);
        a(fB);
        a(gB);
        a(hB);
        a(iB);
        a(jB);
        a(lB);
        a(nB);
        a(pB);
        a(rB);
        a(tB);
        a(vB);
        a(wB);
        a(xB);
        a(yB);
        a(AB);
        a(DB);
        a(LB);
        a(MB);
        a(XB);
        a(bC);
        a(gC);
        a(pC);
        a(uC);
        a(HC);
        a(JC);
        a(XC);
        a(YC);
        a($C);
        a(CE);
        a(DE);
        a(FE);
        a(GE);
        a(KE);
        a(LE);
        a(ME);
        a(NE);
        a(OE);
        a(PE);
        a(QE);
        a(RE);
        a(SE);
        a(TE);
        a(VE);
        a(WE);
        a(XE);
        a(aF);
        a(bF);
        a(IH);
        a(OH);
        a(XH);
        a(ZH);
        a($H);
        a(bI);
        a(OA);
        a(fI);
        a(gI);
        a(iI);
        a(jI);
        a(mI);
        a(oI);
        a(pI);
        a(rI);
        a(sI);
        a(tI);
        a(vI);
        a(xI);
        a(yI);
        a(AI);
        a(BI);
        a(DI);
        a(EI);
        a(FI);
        a(HI);
        a(II);
        a(KI);
        a(LI);
        a(OI);
        a(QI);
        a(RI);
        VI("internal.CrossContainerSchema", uB());
        VI("internal.GtagSchema", JH());
        UI("mockObject", dh);
        return WI()
    };
    var Ez;

    function YI() {
        Ez.j.j.H = function(a, b, c) {
            ii.SANDBOXED_JS_SEMAPHORE = ii.SANDBOXED_JS_SEMAPHORE || 0;
            ii.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                ii.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function ZI(a) {
        a && z(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                yi[e] = yi[e] || [];
                yi[e].push(b)
            }
        })
    };
    var $I = Array.isArray;

    function aJ(a, b) {
        return Ra(a, b || null)
    }

    function Y(a) {
        return window.encodeURIComponent(a)
    }

    function bJ(a, b, c) {
        zc(a, b, c)
    }

    function cJ(a, b) {
        if (!a) return !1;
        var c = Vi(aj(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                f > 0 && e.charAt(0) !== "." && (f--, e = "." + e);
                if (f >= 0 && c.indexOf(e, f) === f) return !0
            }
        }
        return !1
    }

    function dJ(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    }
    var mJ = C.clearTimeout,
        nJ = C.setTimeout;

    function oJ(a, b, c) {
        if (Xn()) {
            b && F(b)
        } else return wc(a, b, c)
    }

    function pJ() {
        return C.location.href
    }

    function qJ(a, b) {
        return Ji(a, b || 2)
    }

    function rJ(a, b) {
        C[a] = b
    }

    function sJ(a, b, c) {
        b && (C[a] === void 0 || c && !C[a]) && (C[a] = b);
        return C[a]
    }

    function tJ(a, b) {
        if (Xn()) {
            b && F(b)
        } else yc(a, b)
    }
    var uJ = {};
    var Z = {
        securityGroups: {}
    };

    Z.securityGroups.vis = ["google"],
        function() {
            var a = {};
            (function(b) {
                Z.__vis = b;
                Z.__vis.o = "vis";
                Z.__vis.isVendorTemplate = !0;
                Z.__vis.priorityOverride = 0;
                Z.__vis.isInfrastructure = !0;
                Z.__vis.runInSiloedMode = !1
            })(function(b) {
                var c, d = [];
                d.push(b.vtp_selectorType === "CSS" ? b.vtp_elementSelector : "#" + b.vtp_elementId);
                d.push(b.vtp_outputMethod);
                b.vtp_outputMethod == "BOOLEAN" && d.push(b.vtp_onScreenRatio);
                c = d.join("&");
                var e = a[c],
                    f = Number(new Date);
                if (e && f - e.time < 250) return e.value;
                e = {
                    time: f,
                    value: null
                };
                var g = b.vtp_outputMethod,
                    k = null;
                if (b.vtp_selectorType == "CSS") try {
                    var m = jh(b.vtp_elementSelector);
                    m && m.length > 0 && (k = m[0])
                } catch (p) {
                    k = null
                } else k = E.getElementById(b.vtp_elementId);
                if (k) switch (g) {
                    case "BOOLEAN":
                        var n = (Number(b.vtp_onScreenRatio) || 50) / 100;
                        e.value = ls(k) >= n && !js(k);
                        break;
                    case "PERCENT":
                        e.value = 0, js(k) || (e.value = Math.round(ls(k) * 1E3) / 10)
                }
                a[c] = e;
                return e.value
            })
        }();
    Z.securityGroups.d = ["google"], Z.__d = function(a) {
            var b = null,
                c = null,
                d = a.vtp_attributeName;
            if (a.vtp_selectorType == "CSS") try {
                var e = jh(a.vtp_elementSelector);
                e && e.length > 0 && (b = e[0])
            } catch (f) {
                b = null
            } else b = E.getElementById(a.vtp_elementId);
            b && (d ? c = function() {
                if (b instanceof HTMLInputElement) {
                    var f = b;
                    if (d === "value") return f.value;
                    if (d === "checked" && (f.type === "radio" || f.type === "checkbox")) return f.checked
                }
                return Dc(b, d)
            }() : c = Ec(b));
            return xb(String(b && c))
        }, Z.__d.o = "d", Z.__d.isVendorTemplate = !0, Z.__d.priorityOverride =
        0, Z.__d.isInfrastructure = !0, Z.__d.runInSiloedMode = !1;
    Z.securityGroups.f = ["google"], Z.__f = function(a) {
        var b = qJ("gtm.referrer", 1) || E.referrer;
        return b ? a.vtp_component && a.vtp_component != "URL" ? Vi(aj(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Yi(aj(String(b))) : String(b)
    }, Z.__f.o = "f", Z.__f.isVendorTemplate = !0, Z.__f.priorityOverride = 0, Z.__f.isInfrastructure = !0, Z.__f.runInSiloedMode = !1;

    Z.securityGroups.access_globals = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1,
                    execute: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    case "execute":
                        e.execute = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Z.__access_globals = b;
                Z.__access_globals.o = "access_globals";
                Z.__access_globals.isVendorTemplate = !0;
                Z.__access_globals.priorityOverride = 0;
                Z.__access_globals.isInfrastructure = !1;
                Z.__access_globals.runInSiloedMode = !1
            })(function(b) {
                for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = [], k = 0; k < c.length; k++) {
                    var m = c[k],
                        n = m.key;
                    m.read && e.push(n);
                    m.write && f.push(n);
                    m.execute && g.push(n)
                }
                return {
                    assert: function(p, q, r) {
                        if (!l(r)) throw d(p, {}, "Key must be a string.");
                        if (q === "read") {
                            if (e.indexOf(r) > -1) return
                        } else if (q === "write") {
                            if (f.indexOf(r) > -1) return
                        } else if (q === "readwrite") {
                            if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return
                        } else if (q === "execute") {
                            if (g.indexOf(r) > -1) return
                        } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " + q);
                        throw d(p, {}, "Prohibited " + q + " on global variable: " + r + ".");
                    },
                    M: a
                }
            })
        }();
    Z.securityGroups.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.o = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !0;
                Z.__u.runInSiloedMode = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : qJ("gtm.url", 1)) || pJ();
                var d = b[a("vtp_component")];
                if (!d || d == "URL") return Yi(aj(String(c)));
                var e = aj(String(c)),
                    f;
                if (d === "QUERY") a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        k = b[a("vtp_queryKey").toString()] ||
                        "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;n = g ? Array.isArray(k) ? k : String(k).replace(/\s+/g, "").split(",") : [String(k)];
                    for (var p = 0; p < n.length; p++) {
                        var q = Vi(e, "QUERY", void 0, void 0, n[p]);
                        if (q != void 0 && (!m || q !== "")) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = Vi(e, d, d == "HOST" ? b[a("vtp_stripWww")] : void 0, d == "PATH" ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Z.securityGroups.v = ["google"], Z.__v = function(a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = qJ(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
        return c !== void 0 ? c : a.vtp_defaultValue
    }, Z.__v.o = "v", Z.__v.isVendorTemplate = !0, Z.__v.priorityOverride = 0, Z.__v.isInfrastructure = !0, Z.__v.runInSiloedMode = !1;

    Z.securityGroups.read_event_data = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Z.__read_event_data = b;
                Z.__read_event_data.o = "read_event_data";
                Z.__read_event_data.isVendorTemplate = !0;
                Z.__read_event_data.priorityOverride = 0;
                Z.__read_event_data.isInfrastructure = !1;
                Z.__read_event_data.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_eventDataAccess,
                    d = b.vtp_keyPatterns || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (g != null && !l(g)) throw e(f, {
                            key: g
                        }, "Key must be a string.");
                        if (c !== "any") {
                            try {
                                if (c === "specific" && g != null && hg(g, d)) return
                            } catch (k) {
                                throw e(f, {
                                    key: g
                                }, "Invalid key filter.");
                            }
                            throw e(f, {
                                key: g
                            }, "Prohibited read from event data.");
                        }
                    },
                    M: a
                }
            })
        }();
    Z.securityGroups.aev = ["google"],
        function() {
            function a(r, t, v, u, w) {
                w || (w = "element");
                var x = t + "." + v,
                    y;
                if (n.hasOwnProperty(x)) y = n[x];
                else {
                    var A = r[w];
                    if (A && (y = u(A), n[x] = y, p.push(x), p.length > 35)) {
                        var B = p.shift();
                        delete n[B]
                    }
                }
                return y
            }

            function b(r, t, v) {
                var u = r[q[t]];
                return u !== void 0 ? u : v
            }

            function c(r, t) {
                if (!r) return !1;
                var v = d(pJ());
                Array.isArray(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
                for (var u = [v], w = 0; w < t.length; w++) {
                    var x = t[w];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x = new RegExp(x.domain)
                        } catch (B) {
                            continue
                        } else x =
                            x.domain;
                    var y = d(r);
                    if (x instanceof RegExp) {
                        if (x.test(y)) return !1
                    } else {
                        var A = x;
                        if (A.length != 0) {
                            if (y.indexOf(A) >= 0) return !1;
                            u.push(d(A))
                        }
                    }
                }
                return !cJ(r, u)
            }

            function d(r) {
                m.test(r) || (r = "http://" + r);
                return Vi(aj(r), "HOST", !0)
            }

            function e(r, t, v, u) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(t, v, "FORM." + r, f, "formSubmitElement") || u;
                    case "LENGTH":
                        var w = a(t, v, "FORM." + r, g);
                        return w === void 0 ? u : w;
                    case "INTERACTED_FIELD_ID":
                        return k(t, "id", u);
                    case "INTERACTED_FIELD_NAME":
                        return k(t, "name", u);
                    case "INTERACTED_FIELD_TYPE":
                        return k(t,
                            "type", u);
                    case "INTERACTED_FIELD_POSITION":
                        var x = t.interactedFormFieldPosition;
                        return x === void 0 ? u : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = t.interactSequenceNumber;
                        return y === void 0 ? u : y;
                    default:
                        return u
                }
            }

            function f(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return Dc(r, "value");
                    case "button":
                        return Ec(r);
                    default:
                        return null
                }
            }

            function g(r) {
                if (r.tagName.toLowerCase() === "form" && r.elements) {
                    for (var t = 0, v = 0; v < r.elements.length; v++) Vz(r.elements[v]) && t++;
                    return t
                }
            }

            function k(r, t, v) {
                var u = r.interactedFormField;
                return u && Dc(u, t) || v
            }
            var m = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                Z.__aev = r;
                Z.__aev.o = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0;
                Z.__aev.isInfrastructure = !0;
                Z.__aev.runInSiloedMode = !1
            })(function(r) {
                var t = r.vtp_gtmEventId,
                    v = r.vtp_defaultValue,
                    u = r.vtp_varType,
                    w = r.vtp_gtmCachedValues.gtm;
                switch (u) {
                    case "TAG_NAME":
                        var x = w.element;
                        return x && x.tagName || v;
                    case "TEXT":
                        return a(w, t, u, Ec) || v;
                    case "URL":
                        var y;
                        a: {
                            var A = String(w.elementUrl || v || ""),
                                B = aj(A),
                                D = String(r.vtp_component || "URL");
                            switch (D) {
                                case "URL":
                                    y = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    y = c(A, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = Vi(B, D, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var H;
                        if (r.vtp_attribute ===
                            void 0) H = b(w, u, v);
                        else {
                            var J = w.element;
                            H = J && Dc(J, r.vtp_attribute) || v || ""
                        }
                        return H;
                    case "MD":
                        var G = r.vtp_mdValue,
                            U = a(w, t, "MD", hJ);
                        return G && U ? eJ(U, G) || v : U || v;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, v);
                    default:
                        return b(w, u, v)
                }
            })
        }();
    Z.securityGroups.unsafe_access_globals = ["google"],
        function() {
            function a(c, d) {
                c("access_globals", "readwrite", d)
            }

            function b(c, d) {
                return {
                    key: d
                }
            }(function(c) {
                Z.__unsafe_access_globals = c;
                Z.__unsafe_access_globals.o = "unsafe_access_globals";
                Z.__unsafe_access_globals.isVendorTemplate = !0;
                Z.__unsafe_access_globals.priorityOverride = 0;
                Z.__unsafe_access_globals.isInfrastructure = !1;
                Z.__unsafe_access_globals.runInSiloedMode = !1
            })(function(c) {
                var d = c.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!l(f)) throw d(e, {}, "Wrong key type. Must be string.");
                    },
                    M: b,
                    Gj: a
                }
            })
        }();
    Z.securityGroups.detect_element_visibility_events = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Z.__detect_element_visibility_events = b;
                Z.__detect_element_visibility_events.o = "detect_element_visibility_events";
                Z.__detect_element_visibility_events.isVendorTemplate = !0;
                Z.__detect_element_visibility_events.priorityOverride = 0;
                Z.__detect_element_visibility_events.isInfrastructure = !1;
                Z.__detect_element_visibility_events.runInSiloedMode = !1
            })(function() {
                return {
                    assert: function() {},
                    M: a
                }
            })
        }();



    Z.securityGroups.gaawe = ["google"],
        function() {
            function a(f, g, k) {
                for (var m = 0; m < g.length; m++) f.hasOwnProperty(g[m]) && (f[g[m]] = k(f[g[m]]))
            }

            function b(f, g, k) {
                var m = {},
                    n = function(v, u) {
                        m[v] = m[v] || u
                    },
                    p = function(v, u, w) {
                        w = w === void 0 ? !1 : w;
                        c.push(6);
                        if (v) {
                            m.items = m.items || [];
                            for (var x = {}, y = 0; y < v.length; x = {
                                    Ue: void 0
                                }, y++) x.Ue = {}, z(v[y], function(B) {
                                return function(D, H) {
                                    w && D === "id" ? B.Ue.promotion_id = H : w && D === "name" ? B.Ue.promotion_name = H : B.Ue[D] = H
                                }
                            }(x)), m.items.push(x.Ue)
                        }
                        if (u)
                            for (var A in u) d.hasOwnProperty(A) ? n(d[A],
                                u[A]) : n(A, u[A])
                    },
                    q;
                f.vtp_getEcommerceDataFrom === "dataLayer" ? (q = f.vtp_gtmCachedValues.eventModel) || (q = f.vtp_gtmCachedValues.ecommerce) : (q = f.vtp_ecommerceMacroData, Qa(q) && q.ecommerce && !q.items && (q = q.ecommerce));
                if (Qa(q)) {
                    var r = !1,
                        t;
                    for (t in q) q.hasOwnProperty(t) && (r || (c.push(5), r = !0), t === "currencyCode" ? n("currency", q.currencyCode) : t === "impressions" && g === T.g.jb ? p(q.impressions, null) : t === "promoClick" && g === T.g.Eb ? p(q.promoClick.promotions, q.promoClick.actionField, !0) : t === "promoView" && g === T.g.kb ? p(q.promoView.promotions,
                        q.promoView.actionField, !0) : e.hasOwnProperty(t) ? g === e[t] && p(q[t].products, q[t].actionField) : m[t] = q[t]);
                    aJ(m, k)
                }
            }
            var c = [],
                d = {
                    id: "transaction_id",
                    revenue: "value",
                    list: "item_list_name"
                },
                e = {
                    click: "select_item",
                    detail: "view_item",
                    add: "add_to_cart",
                    remove: "remove_from_cart",
                    checkout: "begin_checkout",
                    checkout_option: "checkout_option",
                    purchase: "purchase",
                    refund: "refund"
                };
            (function(f) {
                Z.__gaawe = f;
                Z.__gaawe.o = "gaawe";
                Z.__gaawe.isVendorTemplate = !0;
                Z.__gaawe.priorityOverride = 0;
                Z.__gaawe.isInfrastructure = !1;
                Z.__gaawe.runInSiloedMode = !1
            })(function(f) {
                var g;
                g = f.vtp_migratedToV2 ? String(f.vtp_measurementIdOverride) : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
                if (l(g) && g.indexOf("G-") === 0) {
                    var k = String(f.vtp_eventName),
                        m = {};
                    c = [];
                    f.vtp_sendEcommerceData && (Xh.hasOwnProperty(k) || k === "checkout_option") && b(f, k, m);
                    var n = f.vtp_eventSettingsVariable;
                    if (n)
                        for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
                    if (f.vtp_eventSettingsTable) {
                        var q = dJ(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
                            r;
                        for (r in q) m[r] = q[r]
                    }
                    var t = dJ(f.vtp_eventParameters,
                            "name", "value"),
                        v;
                    for (v in t) t.hasOwnProperty(v) && (m[v] = t[v]);
                    var u = f.vtp_userDataVariable;
                    u && (m[T.g.Ba] = u);
                    if (m.hasOwnProperty(T.g.cb) || f.vtp_userProperties) {
                        var w = m[T.g.cb] || {};
                        aJ(dJ(f.vtp_userProperties, "name", "value"), w);
                        m[T.g.cb] = w
                    }
                    var x = {
                        originatingEntity: Jw(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName)
                    };
                    if (c.length > 0) {
                        var y = {};
                        x.eventMetadata = (y.event_usage = c, y)
                    }
                    a(m, Yh, function(B) {
                        return vb(B)
                    });
                    a(m, $h, function(B) {
                        return Number(B)
                    });
                    var A = f.vtp_gtmEventId;
                    x.noGtmEvent = !0;
                    Ux(Sx(g, k, m), A, x);
                    F(f.vtp_gtmOnSuccess)
                } else F(f.vtp_gtmOnFailure)
            })
        }();



    Z.securityGroups.load_google_tags = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    tagId: c,
                    firstPartyUrl: d
                }
            }(function(b) {
                Z.__load_google_tags = b;
                Z.__load_google_tags.o = "load_google_tags";
                Z.__load_google_tags.isVendorTemplate = !0;
                Z.__load_google_tags.priorityOverride = 0;
                Z.__load_google_tags.isInfrastructure = !1;
                Z.__load_google_tags.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_allowedTagIds || "specific",
                    d = b.vtp_allowFirstPartyUrls || !1,
                    e = b.vtp_allowedFirstPartyUrls || "specific",
                    f = b.vtp_urls || [],
                    g = b.vtp_tagIds || [],
                    k = b.vtp_createPermissionError;
                return {
                    assert: function(m, n, p) {
                        (function(q) {
                            if (!l(q)) throw k(m, {}, "Tag ID must be a string.");
                            if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1)) throw k(m, {}, "Prohibited Tag ID: " + q + ".");
                        })(n);
                        (function(q) {
                            if (q !== void 0) {
                                if (!l(q)) throw k(m, {}, "First party URL must be a string.");
                                if (d) {
                                    if (e === "any") return;
                                    if (e === "specific") try {
                                        if (yg(aj(q), f)) return
                                    } catch (r) {
                                        throw k(m, {}, "Invalid first party URL filter.");
                                    }
                                }
                                throw k(m, {}, "Prohibited first party URL: " + q);
                            }
                        })(p)
                    },
                    M: a
                }
            })
        }();
    Z.securityGroups.read_container_data = ["google"], Z.__read_container_data = function() {
        return {
            assert: function() {},
            M: function() {
                return {}
            }
        }
    }, Z.__read_container_data.o = "read_container_data", Z.__read_container_data.isVendorTemplate = !0, Z.__read_container_data.priorityOverride = 0, Z.__read_container_data.isInfrastructure = !1, Z.__read_container_data.runInSiloedMode = !1;



    Z.securityGroups.ua = ["google"],
        function() {
            function a(n, p) {
                for (var q in n)
                    if (!k[q] && n.hasOwnProperty(q)) {
                        var r = g[q] ? vb(n[q]) : n[q];
                        q != "anonymizeIp" || r || (r = void 0);
                        p[q] = r
                    }
            }

            function b(n) {
                var p = {};
                n.vtp_gaSettings && aJ(dJ(n.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), p);
                aJ(dJ(n.vtp_fieldsToSet, "fieldName", "value"), p);
                vb(p.urlPassthrough) && (p._useUp = !0);
                n.vtp_transportUrl && (p._x_19 = n.vtp_transportUrl);
                return p
            }

            function c(n, p) {
                return p === void 0 ? p : n(p)
            }

            function d(n, p, q) {}

            function e(n, p) {
                if (!f && (!Di() && !qi || !p._x_19 || n.vtp_useDebugVersion || n.vtp_useInternalVersion)) {
                    var q = n.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    n.vtp_useInternalVersion && !n.vtp_useDebugVersion && (q = "internal/" + q);
                    f = !0;
                    var r = n.vtp_gtmOnFailure,
                        t = gj(p._x_19, "/analytics.js"),
                        v = Mr("https:", "http:", "//www.google-analytics.com/" + q, p && !!p.forceSSL);
                    oJ(q === "analytics.js" && t ? t : v, function() {
                        var u = Sw();
                        u && u.loaded ||
                            r();
                    }, r)
                }
            }
            var f, g = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                k = {
                    urlPassthrough: !0
                },
                m = function(n) {
                    function p() {
                        if (n.vtp_doubleClick || n.vtp_advertisingFeaturesType == "DISPLAY_FEATURES") w.displayfeatures = !0
                    }
                    var q = {},
                        r = {},
                        t = {};
                    if (n.vtp_gaSettings) {
                        var v = n.vtp_gaSettings;
                        aJ(dJ(v.vtp_contentGroup, "index", "group"), q);
                        aJ(dJ(v.vtp_dimension, "index", "dimension"), r);
                        aJ(dJ(v.vtp_metric, "index", "metric"), t);
                        var u = aJ(v);
                        u.vtp_fieldsToSet = void 0;
                        u.vtp_contentGroup = void 0;
                        u.vtp_dimension = void 0;
                        u.vtp_metric = void 0;
                        n = aJ(n, u)
                    }
                    aJ(dJ(n.vtp_contentGroup, "index", "group"), q);
                    aJ(dJ(n.vtp_dimension, "index", "dimension"), r);
                    aJ(dJ(n.vtp_metric, "index", "metric"), t);
                    var w = b(n),
                        x = String(n.vtp_trackingId || ""),
                        y = "",
                        A = "",
                        B = "";
                    n.vtp_setTrackerName &&
                        typeof n.vtp_trackerName == "string" ? n.vtp_trackerName !== "" && (B = n.vtp_trackerName, A = B + ".") : (B = "gtm" + zi(), A = B + ".");
                    var D = function(na, ia) {
                        for (var xa in ia) ia.hasOwnProperty(xa) && (w[na + xa] = ia[xa])
                    };
                    D("contentGroup", q);
                    D("dimension", r);
                    D("metric", t);
                    n.vtp_enableEcommerce && (y = n.vtp_gtmCachedValues.event, w.gtmEcommerceData = d(n, w, y));
                    if (n.vtp_trackType === "TRACK_EVENT") y = "track_event", p(), w.eventCategory = String(n.vtp_eventCategory), w.eventAction = String(n.vtp_eventAction), w.eventLabel = c(String, n.vtp_eventLabel),
                        w.value = c(ub, n.vtp_eventValue);
                    else if (n.vtp_trackType == "TRACK_PAGEVIEW") {
                        if (y = T.g.Sb, p(), n.vtp_advertisingFeaturesType == "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" && (w.remarketingLists = !0), n.vtp_autoLinkDomains) {
                            var H = {};
                            H[T.g.W] = n.vtp_autoLinkDomains;
                            H.use_anchor = n.vtp_useHashAutoLink;
                            H[T.g.ub] = n.vtp_decorateFormsAutoLink;
                            w[T.g.oa] = H
                        }
                    } else n.vtp_trackType === "TRACK_SOCIAL" ? (y = "track_social", w.socialNetwork = String(n.vtp_socialNetwork), w.socialAction = String(n.vtp_socialAction), w.socialTarget = String(n.vtp_socialActionTarget)) :
                        n.vtp_trackType == "TRACK_TIMING" && (y = "timing_complete", w.eventCategory = String(n.vtp_timingCategory), w.timingVar = String(n.vtp_timingVar), w.value = ub(n.vtp_timingValue), w.eventLabel = c(String, n.vtp_timingLabel));
                    n.vtp_enableRecaptcha && (w.enableRecaptcha = !0);
                    n.vtp_enableLinkId && (w.enableLinkId = !0);
                    var J = {};
                    a(w, J);
                    w.name || (J.gtmTrackerName = B);
                    J.gaFunctionName = n.vtp_functionName;
                    n.vtp_nonInteraction !== void 0 && (J.nonInteraction = n.vtp_nonInteraction);
                    var G = Sl(Rl(Ql(Pl(Il(new Hl(n.vtp_gtmEventId, n.vtp_gtmPriorityId),
                        J), n.vtp_gtmOnSuccess), n.vtp_gtmOnFailure), !0));
                    n.vtp_useDebugVersion && n.vtp_useInternalVersion && (G.eventMetadata.suppress_script_load = !0);
                    aE(x, y, Date.now(), G);
                    var U = Vw(n.vtp_functionName);
                    if (mb(U)) {
                        var L = function(na) {
                            var ia = [].slice.call(arguments, 0);
                            ia[0] = A + ia[0];
                            U.apply(window, ia)
                        };
                        if (n.vtp_trackType == "TRACK_TRANSACTION") {} else if (n.vtp_trackType == "DECORATE_LINK") {} else if (n.vtp_trackType == "DECORATE_FORM") {} else if (n.vtp_trackType == "TRACK_DATA") {}
                        e(n, w)
                    } else F(n.vtp_gtmOnFailure)
                };
            Z.__ua = m;
            Z.__ua.o = "ua";
            Z.__ua.isVendorTemplate = !0;
            Z.__ua.priorityOverride = 0;
            Z.__ua.isInfrastructure = !1;
            Z.__ua.runInSiloedMode = !1
        }();
    Z.securityGroups.unsafe_run_arbitrary_javascript = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Z.__unsafe_run_arbitrary_javascript = b;
                Z.__unsafe_run_arbitrary_javascript.o = "unsafe_run_arbitrary_javascript";
                Z.__unsafe_run_arbitrary_javascript.isVendorTemplate = !0;
                Z.__unsafe_run_arbitrary_javascript.priorityOverride = 0;
                Z.__unsafe_run_arbitrary_javascript.isInfrastructure = !1;
                Z.__unsafe_run_arbitrary_javascript.runInSiloedMode = !1
            })(function() {
                return {
                    assert: function() {},
                    M: a
                }
            })
        }();

    Z.securityGroups.gas = ["google"], Z.__gas = function(a) {
        var b = aJ(a),
            c = b;
        c[He.la] = null;
        c[He.Wg] = null;
        var d = b = c;
        d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
        var e = d.vtp_cookieDomain;
        e !== void 0 && (d.vtp_fieldsToSet.push({
            fieldName: "cookieDomain",
            value: e
        }), delete d.vtp_cookieDomain);
        return b
    }, Z.__gas.o = "gas", Z.__gas.isVendorTemplate = !0, Z.__gas.priorityOverride = 0, Z.__gas.isInfrastructure = !1, Z.__gas.runInSiloedMode = !1;



    Z.securityGroups.detect_click_events = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    matchCommonButtons: c,
                    cssSelector: d
                }
            }(function(b) {
                Z.__detect_click_events = b;
                Z.__detect_click_events.o = "detect_click_events";
                Z.__detect_click_events.isVendorTemplate = !0;
                Z.__detect_click_events.priorityOverride = 0;
                Z.__detect_click_events.isInfrastructure = !1;
                Z.__detect_click_events.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_createPermissionError;
                return {
                    assert: function(d, e, f) {
                        if (e !== void 0 && typeof e !== "boolean") throw c(d, {}, "matchCommonButtons must be a boolean.");
                        if (f !== void 0 && typeof f !== "string") throw c(d, {}, "cssSelector must be a string.");
                    },
                    M: a
                }
            })
        }();
    Z.securityGroups.logging = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Z.__logging = b;
                Z.__logging.o = "logging";
                Z.__logging.isVendorTemplate = !0;
                Z.__logging.priorityOverride = 0;
                Z.__logging.isInfrastructure = !1;
                Z.__logging.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_environments || "debug",
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e) {
                        var f;
                        if (f = c !== "all" && !0) {
                            var g = !1;
                            f = !g
                        }
                        if (f) throw d(e, {}, "Logging is not enabled in all environments");
                    },
                    M: a
                }
            })
        }();

    Z.securityGroups.configure_google_tags = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    tagId: c,
                    configuration: d
                }
            }(function(b) {
                Z.__configure_google_tags = b;
                Z.__configure_google_tags.o = "configure_google_tags";
                Z.__configure_google_tags.isVendorTemplate = !0;
                Z.__configure_google_tags.priorityOverride = 0;
                Z.__configure_google_tags.isInfrastructure = !1;
                Z.__configure_google_tags.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_allowedTagIds || "specific",
                    d = b.vtp_tagIds || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f,
                        g) {
                        if (!l(g)) throw e(f, {}, "Tag ID must be a string.");
                        if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1)) throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
                    },
                    M: a
                }
            })
        }();



    Z.securityGroups.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (e.length > 0) {
                            var k = e.shift(),
                                m = a(d, e, f, g);
                            if (String(k.nodeName).toUpperCase() == "SCRIPT" && k.type == "text/gtmscript") {
                                var n = E.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = k.id;
                                n.text = k.text || k.textContent || k.innerHTML || "";
                                k.charset && (n.charset = k.charset);
                                var p = k.getAttribute("data-gtmsrc");
                                p && (n.src = p, m && (n.onload = m));
                                d.insertBefore(n, null);
                                p || m()
                            } else if (k.innerHTML && k.innerHTML.toLowerCase().indexOf("<script") >=
                                0) {
                                for (var q = []; k.firstChild;) q.push(k.removeChild(k.firstChild));
                                d.insertBefore(k, null);
                                a(k, q, m, g)()
                            } else d.insertBefore(k, null), m()
                        } else f()
                    } catch (r) {
                        F(g)
                    }
                }
            }

            function b(d) {
                var e = yz();
                d.vtp_useIframe && e(3);
                d.vtp_supportDocumentWrite && (e(1), e(2));
                zz(d.vtp_gtmEventId, d.vtp_gtmTagId, e(void 0), "j");
                if (E.body) {
                    var f = d.vtp_gtmOnFailure,
                        g = pz(d.vtp_html, d.vtp_gtmOnSuccess, f),
                        k = g.Oj,
                        m =
                        g.onSuccess;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? c(k, m, f) : a(E.body, Fc(k), m, f)()
                } else nJ(function() {
                    b(d)
                }, 200)
            }
            Z.__html = b;
            Z.__html.o = "html";
            Z.__html.isVendorTemplate = !0;
            Z.__html.priorityOverride = 0;
            Z.__html.isInfrastructure = !1;
            Z.__html.runInSiloedMode = !1
        }();


    var vJ = {};
    vJ.onHtmlSuccess = qz(!0), vJ.onHtmlFailure = qz(!1);
    vJ.dataLayer = Ki;
    vJ.callback = function(a) {
        xi.hasOwnProperty(a) && mb(xi[a]) && xi[a]();
        delete xi[a]
    };
    vJ.bootstrap = 0;
    vJ._spx = !1;

    function wJ() {
        ii[Hj()] = ii[Hj()] || vJ;
        Uj();
        Yj() || z(Zj(), function(d, e) {
            xw(d, e.transportUrl, e.context);
            Q(92)
        });
        Cb(yi, Z.securityGroups);
        var a = Oj(Pj()),
            b, c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
        c !== 2 && c !== 4 && c !== 3 || Q(142);
        mz(), of ({
            hm: function(d) {
                return d === kz
            },
            vl: function(d) {
                return new nz(d)
            },
            im: function(d) {
                for (var e = !1, f = !1, g = 2; g < d.length; g++) e = e || d[g] === 8, f = f || d[g] === 16;
                return e && f
            },
            Fm: function(d) {
                var e;
                if (d === kz) e = d;
                else {
                    var f = zi();
                    lz[f] = d;
                    e = 'google_tag_manager["rm"]["' +
                        Jj() + '"](' + f + ")"
                }
                return e
            }
        });
        qf = Hf
    }
    var xJ = !1;
    (function(a) {
        function b() {
            n = E.documentElement.getAttribute("data-tag-assistant-present");
            Ny(n) && (m = k.fj)
        }

        function c() {
            m && qc ? g(m) : a()
        }
        if (!C["__TAGGY_INSTALLED"]) {
            var d = !1;
            if (E.referrer) {
                var e = aj(E.referrer);
                d = Xi(e, "host") === "cct.google"
            }
            if (!d) {
                var f = ko("googTaggyReferrer");
                d = !(!f.length || !f[0].length)
            }
            d && (C["__TAGGY_INSTALLED"] = !0, wc("https://cct.google/taggy/agent.js"))
        }
        var g = function(v) {
                var u = "GTM",
                    w = "GTM";
                oi && (u = "OGT", w = "GTAG");
                var x = C["google.tagmanager.debugui2.queue"];
                x || (x = [], C["google.tagmanager.debugui2.queue"] = x, wc("https://" + hi.Ed + "/debug/bootstrap?id=" + Nf.ctid + "&src=" + w + "&cond=" + v + "&gtm=" + Zn()));
                var y = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: qc,
                        containerProduct: u,
                        debug: !1,
                        id: Nf.ctid,
                        targetRef: {
                            ctid: Nf.ctid,
                            isDestination: Aj.pe
                        },
                        aliases: Dj(),
                        destinations: Gj()
                    }
                };
                y.data.resume = function() {
                    a()
                };
                hi.sk && (y.data.initialPublish = !0);
                x.push(y)
            },
            k = {
                Mk: 1,
                ij: 2,
                wj: 3,
                ni: 4,
                fj: 5
            };
        k[k.Mk] = "GTM_DEBUG_LEGACY_PARAM";
        k[k.ij] = "GTM_DEBUG_PARAM";
        k[k.wj] = "REFERRER";
        k[k.ni] = "COOKIE";
        k[k.fj] = "EXTENSION_PARAM";
        var m = void 0,
            n = void 0,
            p = Vi(C.location, "query", !1, void 0, "gtm_debug");
        Ny(p) && (m = k.ij);
        if (!m && E.referrer) {
            var q = aj(E.referrer);
            Xi(q, "host") === "tagassistant.google.com" && (m = k.wj)
        }
        if (!m) {
            var r = ko("__TAG_ASSISTANT");
            r.length && r[0].length && (m = k.ni)
        }
        m || b();
        if (!m && Oy(n)) {
            var t = !1;
            Bc(E, "TADebugSignal", function() {
                t || (t = !0, b(), c())
            }, !1);
            C.setTimeout(function() {
                t || (t = !0, b(), c())
            }, 200)
        } else c()
    })(function() {
        try {
            var a;
            if (!(a = !O(59))) {
                var b;
                if (!(b = xJ)) {
                    var c;
                    a: {
                        var d = xj();d.injectedFirstPartyContainers || yj(d);
                        for (var e =
                                h(Cj()), f = e.next(); !f.done; f = e.next())
                            if (d.injectedFirstPartyContainers[f.value]) {
                                c = !0;
                                break a
                            }
                        c = !1
                    }
                    b = !c
                }
                a = b
            }
            if (a) {
                Sj();
                if (O(76)) {}
                ib[12] = !0;
                tn();
                gl();
                var g = Jj();
                if (xj().canonical[g]) {
                    var k = ii.zones;
                    k && k.unregisterChild(Cj());
                    iw().removeExternalRestrictions(Jj());
                } else {
                    Vt();
                    a: {}
                    Bi.j = "101671035~101747727";
                    Bi.K = "";
                    Bi.Qa = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                    Bi.Z = "ad_storage|analytics_storage|ad_user_data";
                    Bi.P = "4a10";
                    Bi.P = "4a30";
                    tw();
                    for (var m = data.resource || {}, n = m.macros || [], p = 0; p < n.length; p++) ff.push(n[p]);
                    for (var q = m.tags || [], r = 0; r < q.length; r++) jf.push(q[r]);
                    for (var t = m.predicates || [], v = 0; v < t.length; v++) hf.push(t[v]);
                    for (var u = m.rules || [], w = 0; w < u.length; w++) {
                        for (var x = u[w], y = {}, A = 0; A < x.length; A++) {
                            var B = x[A][0];
                            y[B] = Array.prototype.slice.call(x[A], 1);
                            B !== "if" && B !== "unless" || pf(y[B])
                        }
                        gf.push(y)
                    }
                    lf = Z;
                    mf = sz;
                    Jf = new Qf;
                    var D = data.sandboxed_scripts,
                        H = data.security_groups;
                    a: {
                        var J = data.runtime || [],
                            G = data.runtime_lines;Ez = new ze;YI();ef = Dz();
                        var U = Ez,
                            L = XI(),
                            R = new Vc("require", L);R.La();U.j.j.set("require", R);
                        for (var X = [], aa = 0; aa < J.length; aa++) {
                            var S = J[aa];
                            if (!Array.isArray(S) || S.length < 3) {
                                if (S.length === 0) continue;
                                break a
                            }
                            G && G[aa] && G[aa].length && Af(S, G[aa]);
                            try {
                                Ez.execute(S), O(87) && qj && S[0] === 50 && X.push(S[1])
                            } catch (Pn) {}
                        }
                        O(87) && (rf = X)
                    }
                    if (D && D.length)
                        for (var P = ["sandboxedScripts"], ka = 0; ka < D.length; ka++) {
                            var na = D[ka].replace(/^_*/,
                                "");
                            yi[na] = P
                        }
                    ZI(H);
                    wJ();
                    if (!si)
                        for (var ia = Qk() ? Ei(Bi.Z) : Ei(Bi.Qa), xa = 0; xa < Uk.length; xa++) {
                            var Oa = Uk[xa],
                                Ea = Oa,
                                Sa = ia[Oa] ? "granted" : "denied";
                            pk().implicit(Ea, Sa)
                        }
                    My();
                    Cw = !1;
                    Dw = 0;
                    if (E.readyState === "interactive" && !E.createEventObject || E.readyState === "complete") Fw();
                    else {
                        Bc(E, "DOMContentLoaded", Fw);
                        Bc(E, "readystatechange", Fw);
                        if (E.createEventObject && E.documentElement.doScroll) {
                            var $a = !0;
                            try {
                                $a = !C.frameElement
                            } catch (Pn) {}
                            $a && Gw()
                        }
                        Bc(C, "load", Fw)
                    }
                    ry = !1;
                    E.readyState === "complete" ? ty() : Bc(C, "load", ty);
                    qj && (Vl(hm), C.setInterval(gm, 864E5), Vl(vz), Vl(fx), Vl(Uu), Vl(km), Vl(Az), Vl(qx), Vl(Gt), O(87) && (Vl(kx), Vl(lx), Vl(mx)));
                    if (rj) {
                        ok();
                        Bl();
                        Bw();
                        var td;
                        var ud = Oj(Pj());
                        if (ud) {
                            for (; ud.parent;) {
                                var Nx = Oj(ud.parent);
                                if (!Nx) break;
                                ud = Nx
                            }
                            td = ud
                        } else td = void 0;
                        var Re = td;
                        if (!Re) Q(144);
                        else if (Re.canonicalContainerId) {
                            var Qn;
                            a: {
                                if (Re.scriptSource) {
                                    var Lj;
                                    try {
                                        var Ox;
                                        Lj = (Ox = Oc()) == null ? void 0 : Ox.getEntriesByType("resource")
                                    } catch (Pn) {}
                                    if (Lj) {
                                        for (var Rn = {}, Mj = 0; Mj < Lj.length; ++Mj) {
                                            var Px = Lj[Mj],
                                                Sn = Px.initiatorType;
                                            if (Sn === "script" && Px.name === Re.scriptSource) {
                                                Qn = {
                                                    Mm: Mj,
                                                    Nm: Rn
                                                };
                                                break a
                                            }
                                            Rn[Sn] = 1 + (Rn[Sn] || 0)
                                        }
                                        Q(146)
                                    } else Q(145)
                                }
                                Qn = void 0
                            }
                            var Tn = Qn;
                            Tn && (gk("rtg", String(Re.canonicalContainerId)), gk("rlo", String(Tn.Mm)), gk("slo", String(Tn.Nm.script || "0")), gk("hlo", Re.htmlLoadOrder || "-1"), gk("lst", String(Re.loadScriptType || "0")))
                        }
                        var Un;
                        var Nj = Kj();
                        if (Nj) {
                            var Qx;
                            Un = Nj.canonicalContainerId || "_" + (Nj.scriptContainerId || ((Qx = Nj.destinations) == null ? void 0 : Qx[0]))
                        } else Un =
                            void 0;
                        var Rx = Un;
                        Rx && gk("pcid", Rx);
                        O(33) && (gk("bt", String(Bi.H ? 2 : qi ? 1 : 0)), gk("ct", String(Bi.H ? 0 : qi ? 1 : Xn() ? 2 : 3)))
                    }
                    iz();
                    Lk(1);
                    MA();
                    wi = zb();
                    vJ.bootstrap = wi;
                    if (O(76)) {}
                }
            }
        } catch (Pn) {
            if (Lk(4),
                qj) {
                var yJ = bm(!0, !0);
                zc(yJ)
            }
        }
    });

})()