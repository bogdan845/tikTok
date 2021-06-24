import React from "react";
import { View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

/*
 * styles / components
 * */
import styles from "./styles";

/*
 * PostInfo
 * */
export const PostInfo = ({ userName, likeHandler, isLiked }) => {
  const likeIcon = (
    <AntDesign
      onPress={likeHandler}
      size={25}
      color={isLiked ? "#E71426" : "#fff"}
      name={isLiked ? "heart" : "hearto"}
    ></AntDesign>
  );

  return (
    <View style={styles.postInfo}>
      <Text style={styles.userName} userName={userName}>
        {userName}
      </Text>
      {likeIcon}
    </View>
  );
};
