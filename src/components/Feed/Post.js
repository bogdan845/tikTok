import React, { useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Video } from "expo-av";

/*
 * styles / components
 * */
import styles from "./styles";
import { PostInfo } from "./PostInfo";

/*
 * Single post
 * */
export const Post = ({ video, currentIndex, currentVisibleIndex }) => {
  const [like, setLike] = useState(false);

  const likeHandler = () => setLike((prevState) => !prevState);

  return (
    <View style={styles.postContainer}>
      <TouchableWithoutFeedback onPress={likeHandler}>
        <Video
          resizeMode={"contain"}
          style={styles.video}
          repeat={true}
          shouldPlay={currentIndex === currentVisibleIndex}
          isLooping
          isMuted={false}
          source={{ uri: video.uri }}
        />
      </TouchableWithoutFeedback>
      <PostInfo
        userName={video.userName}
        likeHandler={likeHandler}
        isLiked={like}
      />
    </View>
  );
};
