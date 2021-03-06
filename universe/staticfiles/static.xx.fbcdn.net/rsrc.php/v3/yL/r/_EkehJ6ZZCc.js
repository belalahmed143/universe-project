if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("CometGlobalPanelLayoutContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(!1);
    g["default"] = b
}), 98);
__d("useFeedComposerCometDialogImplementation.evil", ["FeedComposerCometDialog.entrypoint", "requireDeferred", "useCometComposerEntryPointDialog"], (function(a, b, c, d, e, f, g) {
    "use strict";
    c("requireDeferred")("FeedComposerCometDialog.react").__setRef("useFeedComposerCometDialogImplementation.evil");

    function a(a) {
        return c("useCometComposerEntryPointDialog")(babelHelpers["extends"]({}, a, {
            composerDialogEntryPoint: c("FeedComposerCometDialog.entrypoint")
        }))
    }
    g["default"] = a
}), 98);
__d("CometSSRClientRender", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function() {};

    function a() {
        throw new g()
    }
    f.ClientRenderSentinel = g;
    f.CometSSRClientRender = a
}), 66);
__d("CometSSRReactFizzEnvironment", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        window.__isReactFizzContext = a
    }

    function b() {
        var a;
        return !!((a = window) == null ? void 0 : a.__isReactFizzContext)
    }
    f.setReactFizzEnvironment = a;
    f.isReactFizzEnvironment = b
}), 66);
__d("MPNNewWelcomePageButtom.react", ["cx", "EllipsisText.react", "LiveChatPluginFbts", "MessagingPluginContext", "ShimButton.react", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var e = b.prototype;
        e.render = function() {
            var a = this.context.state.threadCSSColor,
                b = this.props.onClick;
            return i.jsx("div", {
                className: "_a6s8",
                children: i.jsx("div", {
                    className: "_a6s9",
                    children: i.jsx(c("ShimButton.react"), {
                        onClick: b,
                        className: "_a2zm",
                        style: {
                            backgroundColor: a
                        },
                        children: i.jsx(c("EllipsisText.react"), {
                            className: "continueText _4mr9",
                            children: d("LiveChatPluginFbts").START_CHAT_BUTTON_TEXT
                        })
                    })
                })
            })
        };
        return b
    }(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MPNSwitchAccountActionButton.react", ["cx", "ix", "CometPressable.react", "Image.react", "MessagingPluginContext", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = d("react").useContext;

    function a(a) {
        var b = k(c("MessagingPluginContext"));
        b = b.state.viewerProfilePicureUri;
        var d = a.onPress;
        a = a.testid;
        return j.jsx("div", {
            className: "_a6se",
            children: j.jsxs(c("CometPressable.react"), {
                onPress: d,
                overlayRadius: 6,
                testid: void 0,
                children: [j.jsx(c("Image.react"), {
                    className: "_a6sd _a6sc",
                    src: b
                }), j.jsx(c("Image.react"), {
                    className: "_a6sb",
                    src: i("481882")
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);