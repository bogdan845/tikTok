import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";

import { VideoContainer } from "./src/VideoContainer";
import { DATA } from "./src/data";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.videoList}
        data={DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <VideoContainer video={item} />}
      />

      {/* <ScrollView contentContainerStyle={{flexGrow: 1, flex: 1}}>
        {DATA.map((item) => (
          <VideoContainer video={item} key={item.id}></VideoContainer>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
    // backgroundColor: "#4578ee",
  },
  videoList: {
    position: 'relative',
    // height: '100%',
    // width: '100%',
    flex: 1
  },
});
