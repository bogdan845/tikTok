import {StyleSheet, Dimensions} from "react-native";
const {width: winWidth, height: winHeight} = Dimensions.get("window");
export default styles = StyleSheet.create({

    // AppCamera.js
    camera: {
        height: winHeight,
        width: winWidth,
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    },

    toolbarWrap: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: winWidth,
    },

    // Tollbar.js
    toolbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 30,
        paddingTop: 20,
        paddingHorizontal: 50,
        alignItems: "center",
    },

    captureBtn: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 100,
        borderColor: "#fff",
    },

    captureBtnActive: {
        backgroundColor: "#F44336",
    },
});
