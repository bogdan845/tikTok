import { StyleSheet, Dimensions } from "react-native";
const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default styles = StyleSheet.create({
  // Post
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
  },

  playIcon: {
    position: "absolute",
    top: "40%",
    left: "40%",
  },

  // PostInfo
  postInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },

  userName: {
    fontSize: 20,
    color: "#fff",
  },
});