import {StyleSheet, Dimensions} from "react-native";

const {width: winWidth, height: winHeight} = Dimensions.get("window");

export default styles = StyleSheet.create({

    // Post.js
    postContainer: {
        width: "100%",
        height: winHeight,
        flex: 1,
        justifyContent: "flex-end",
    },

    video: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#eee'
    },

    // PostInfo.js
    postInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'rgba(0,0,0,0.25)'
    },

    userName: {
        fontSize: 20,
        color: "#fff",
    },
});