import React from "react";
import { View, Text, StyleSheet} from "react-native";
import Video from 'react-native-video'

export const VideoContainer = ({ video }) => {
  return (
    <View style={styles.container}>
      {/* <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
      /> */}

      <Text style={styles.text}>{video.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: "100%",
    height: "100%",
  },

  video: {
    position: "absolute",
    top: 0,
    left: 0,
    // right: 0,
    // bottom: 0,
    // borderColor: '#000',
    // borderWidth: 2,
    // flex: 1,
    // height: 400,
    // height: 500,
    // backgroundColor: 'red',
    // width: 200,
    // height: '100%',
    // minHeight: '100%',
    // paddingTop: '100%',
    // flex: 0,
    // flexDirection: 'row',
    // width: 500,
    // paddingTop: 150,
    // paddingBottom: 150
  },

  text: {
    fontSize: 50,
  },
});
