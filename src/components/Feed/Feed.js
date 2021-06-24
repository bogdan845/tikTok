import React, { useState, useRef, useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";

/*
 * components
 * */
import { Post } from "./Post";

/*
 * Feed
 * */
export const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(2);
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const url = "https://my-json-server.typicode.com/bogdan845/tikTok-data/db";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.posts.length > counter) {
          setCounter((prevState) => prevState + 2);
          setPosts(() => data.posts.slice(0, counter));
          setIsLoading(() => false);
        } else {
          setIsLoading(() => true);
        }
      })
      .catch((err) => console.log(err));
  };

  const loadMoreHandler = () => getData();

  const onViewableItemsChanged = ({ viewableItems, changed }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentVisibleIndex(() => viewableItems[0].index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      onViewableItemsChanged,
      viewabilityConfig: {
        waitForInteraction: true,
        itemVisiblePercentThreshold: 50,
      },
    },
  ]);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      renderItem={({ item, index }) => (
        <Post
          video={item}
          key={item.id}
          currentIndex={index}
          currentVisibleIndex={currentVisibleIndex}
        />
      )}
      onEndReached={loadMoreHandler}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() =>
        isLoading ? null : <ActivityIndicator size="large" color="#B2B2B2" />
      }
    />
  );
};
