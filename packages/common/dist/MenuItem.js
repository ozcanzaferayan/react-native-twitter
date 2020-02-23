"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
exports.MenuItem = function (props) {
    var colorBackgroundNormal = "rgba(29, 161, 249, 0)";
    var colorBackgroundHover = "rgba(29, 161, 249, 0.1)";
    var colorBackgroundPress = "rgba(29, 161, 249, 0.2)";
    var colorNormal = "rgba(217,217,217,1.00)";
    var colorHover = "rgba(29,161,242,1.00)";
    var _a = react_1.useState(colorNormal), color = _a[0], setColor = _a[1];
    var _b = react_1.useState(colorBackgroundNormal), colorBackground = _b[0], setBackgroundColor = _b[1];
    return (react_1.default.createElement(react_native_1.View, { style: { paddingTop: 4, paddingBottom: 4 } },
        react_1.default.createElement(react_native_1.TouchableHighlight, { underlayColor: colorBackgroundPress, style: {
                backgroundColor: colorBackground,
                borderRadius: 9999,
                padding: 9
            }, onPress: function () { return console.log("TODO: Navigate to " + props.text); }, onMouseEnter: function () {
                setColor(colorHover);
                setBackgroundColor(colorBackgroundHover);
            }, onMouseLeave: function () {
                setColor(colorNormal);
                setBackgroundColor(colorBackgroundNormal);
            } },
            react_1.default.createElement(react_native_1.View, { style: {
                    flexDirection: "row",
                    alignItems: "center"
                } },
                react_1.default.createElement(react_native_1.Image, { resizeMode: "contain", style: {
                        height: 25,
                        width: 25,
                        borderRadius: 25
                    }, source: {
                        uri: props.iconSrc.replace("{{color}}", color)
                    } }),
                react_1.default.createElement(react_native_1.Text, { style: {
                        fontSize: 18,
                        marginStart: 5,
                        marginEnd: 5,
                        fontWeight: "bold",
                        paddingStart: 10,
                        color: color
                    } }, props.text)))));
};
