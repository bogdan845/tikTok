import React from "react";
import { FlatList, Dimensions } from "react-native";
import { Post } from "./Post";
import { posts } from "../../data";
const height = Dimensions.get("window").height;

export const Feed = () => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Post video={item} />}
      // snapToInterval={height}
      // snapToAlignment={"start"}
      // decelerationRate={'normal'}
    />
  );
};
