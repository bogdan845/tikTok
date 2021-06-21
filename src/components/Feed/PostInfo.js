import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";

export const PostInfo = ({userName}) => {
  const [like, setLike] = useState(false);
  const likeHandler = () => setLike((prevState) => !prevState);

  const likeIcon = (
    <AntDesign
      onPress={likeHandler}
      size={25}
      color={like ? "#E71426" : "#fff"}
      name={like ? "heart" : "hearto"}
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