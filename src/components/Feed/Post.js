import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { Video } from "expo-av";
import styles from "./styles";
import { PostInfo } from "./PostInfo";
const windowHeight = Dimensions.get("window").height;

export const Post = ({ video }) => {
  const [pause, setPause] = useState(true);
  const [position, setPosition] = useState({
    start: null,
    end: null,
  });
  const pauseHandler = () => {
    setPause((prevState) => !prevState);
  };

  return (
    <View style={styles.postContainer}>
      <TouchableWithoutFeedback onPress={pauseHandler}>
        <Video
          onError={(e) => console.log(e)}
          resizeMode={"cover"}
          style={styles.video}
          repeat={true}
          shouldPlay={false}
          isLooping
          isMuted={true}
          source={{
            uri: video.uri,
          }}
        />
      </TouchableWithoutFeedback>
      {!pause && (
        <Entypo
          onPress={pauseHandler}
          style={styles.playIcon}
          name="controller-play"
          color={"rgba(255, 255, 255, 0.75)"}
          size={100}
        />
      )}
      <PostInfo userName={video.userName} />
    </View>
  );
};
