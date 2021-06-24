import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

/*
 * components
 * */
import { Feed } from "./src/components/Feed/Feed";
import { AppCamera } from "./src/components/Camera/AppCamera";

/*
 * App
 * */
export default function App() {
  const [camera, setCamera] = useState(false);

  const closeCameraHandler = () => setCamera(() => false);

  const swipeConfig = {
    velocityThreshold: 1.25,
    directionalOffsetThreshold: 80,
  };

  return (
    <SafeAreaView>
      <GestureRecognizer
        onSwipeLeft={() => setCamera(() => true)}
        config={swipeConfig}
      >
        {camera ? <AppCamera closeCamera={closeCameraHandler} /> : <Feed />}
      </GestureRecognizer>
    </SafeAreaView>
  );
}