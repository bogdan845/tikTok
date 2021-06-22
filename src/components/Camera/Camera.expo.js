import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Button
} from "react-native";
import { Camera } from "expo-camera";
import { Audio } from 'expo-av';

export const AppCamera = ({closeCamera}) =>  {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      console.log(status)
      // const { status } = await Permissions.askAsync(Permissions.CAMERA);
      const {camera} = await Permissions.askAsync(Permissions.CAMERA);
      // const {state} = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
      const {audio} = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
      setHasPermission(camera === "granted" && audio === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ratio={'16:9'}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => closeCamera()}
            style={styles.closeBtn}
            title="Back to Feed"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
  },
  camera: {
    height: Dimensions.get('window').height,
  },
  buttonContainer: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    color: 'red'
  },

  closeBtn: {
    width: '100%'
  },
  button: {},
  text: {},
});
