import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Alert,
  View,
  Text,
  Dimensions,
} from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { Feed } from "./src/components/Feed/Feed";
import { AppCamera } from "./src/components/Camera/Camera";

https://www.codementor.io/@foysalit/building-a-camera-app-with-react-native-r8up5685v
https://scotch.io/tutorials/implementing-an-infinite-scroll-list-in-react-native
https://www.youtube.com/watch?v=rY0braBBlgw&ab_channel=ReactNativeSchool
https://codedaily.io/tutorials/Create-a-Video-that-Auto-Plays-when-Scrolled-into-View-in-React-Native

export default function App() {
  const [toggleCamera, setToggleCamera] = useState(false);

  const closeCameraHandler = () =>  setToggleCamera(() => false);

  return (
    <SafeAreaView>
      <GestureRecognizer
        onSwipeLeft={() => {
          console.log("camera");
          setToggleCamera(() => true);
        }}
        onSwipeRight={() => {
          console.log("app");
          setToggleCamera(() => false);
        }}
        config={{
          velocityThreshold: 1.25,
          directionalOffsetThreshold: 80,
        }}
      >
        {toggleCamera ? (
          // <View style={styles.container}>
          //   <Text>Camera</Text>
          // </View>
          <AppCamera closeCamera={closeCameraHandler}  />
        ) : (
          <Feed />
        )}
      </GestureRecognizer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 2,
    height: 600,
  },
});
