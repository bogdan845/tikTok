import React, { useState, useEffect, useRef } from "react";
// import RNFetchBlob from 'rn-fetch-blob'
import * as MediaLibrary from "expo-media-library";
import Toolbar from "./Toolbar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Button,
} from "react-native";
import styles from "./styles";
import { Camera } from "expo-camera";
import { Audio } from "expo-av";

export const AppCamera = ({ closeCamera }) => {
  useEffect(() => {
    (async () => {
      const video = await Camera.requestPermissionsAsync();
      const audio = await Audio.requestPermissionsAsync();
      const storage = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(
        video.status === "granted" &&
          audio.status === "granted" &&
          storage.status === "granted"
      );
    })();
  }, []);

  const [cameraRef, setCameraRef] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [captures, setCaptures] = useState([]);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [capturing, setCapturing] = useState({ isCapturing: false });
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

  const flashModeHandler = (flashMode) => setFlashMode(() => flashMode);
  const cameraTypeHandler = (cameraType) => setCameraType(() => cameraType);

  const captureInHandler = () => setCapturing({ isCapturing: true });

  const captureOutHandler = async () => {
    if (capturing.isCapturing) {
      cameraRef.stopRecording();
    }
  };

  const shortCaptureHandler = async () => {
    if (cameraRef) {
      const options = { quality: 0.5 };
      const photo = await cameraRef.takePictureAsync(options);
      await MediaLibrary.createAssetAsync(photo.uri);
      setCapturing(() => ({
        isCapturing: false,
        captures: [photo, ...captures],
      }));
    }
  };

  const longCaptureHandler = async () => {
    if (cameraRef) {
      const options = { maxDuration: 10 };
      const video = await cameraRef.recordAsync(options);
      await MediaLibrary.createAssetAsync(video.uri);
      setCapturing(() => ({
        isCapturing: false,
        captures: [video, ...captures],
      }));
      console.log(video);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        ref={(ref) => setCameraRef(ref)}
        style={styles.camera}
        type={cameraType}
        ratio={"16:9"}
        flashMode={flashMode}
      >
        <View style={styles.toolbarWrap}>
          <Toolbar
            capturing={capturing}
            flashMode={flashMode}
            setFlashMode={flashModeHandler}
            cameraType={cameraType}
            setCameraType={cameraTypeHandler}
            onCaptureIn={captureInHandler}
            onCaptureOut={captureOutHandler}
            onLongCapture={longCaptureHandler}
            onShortCapture={shortCaptureHandler}
          />
          <Button
            onPress={() => closeCamera()}
            title="Back to Feed"
            color="rgba(0,0,0,0.5)"
          />
        </View>
      </Camera>
    </View>
  );
};

// import React, {useState, useEffect, useRef} from "react";
// import Toolbar from "./Toolbar";
// import {
//     StyleSheet,
//     Text,
//     View,
//     TouchableOpacity,
//     Dimensions,
//     Button
// } from "react-native";
// import styles from "./styles";
// import {Camera} from "expo-camera";
//
// import * as Permissions from 'expo-permissions';
//
//
// export class AppCamera extends React.Component {
//     camera = null;
//
//     state = {
//         captures: [],
//         capturing: null,
//         hasCameraPermission: null,
//         cameraType: Camera.Constants.Type.back,
//         flashMode: Camera.Constants.FlashMode.off,
//     };
//
//     setFlashMode = (flashMode) => this.setState({flashMode});
//     setCameraType = (cameraType) => this.setState({cameraType});
//     handleCaptureIn = () => this.setState({capturing: true});
//
//     handleCaptureOut = () => {
//         if (this.state.capturing)
//             this.camera.stopRecording();
//     };
//
//     handleShortCapture = async () => {
//         const photoData = await this.camera.takePictureAsync();
//         this.setState({capturing: false, captures: [photoData, ...this.state.captures]})
//     };
//
//     handleLongCapture = async () => {
//         const videoData = await this.camera.recordAsync();
//         this.setState({capturing: false, captures: [videoData, ...this.state.captures]});
//
//         console.log('video working')
//     };
//
//     async componentDidMount() {
//         const camera = await Permissions.askAsync(Permissions.CAMERA);
//         const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
//         const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');
//
//         this.setState({hasCameraPermission});
//     };
//
//     render() {
//         const {hasCameraPermission, flashMode, cameraType, capturing, captures} = this.state;
//
//         if (hasCameraPermission === null) {
//             return <View/>;
//         } else if (hasCameraPermission === false) {
//             return <Text>Access to camera has been denied.</Text>;
//         }
//
//         return (
//
//             <View styel={styles.container}>
//                 <Camera
//                     type={cameraType}
//                     flashMode={flashMode}
//                     style={styles.camera}
//                     ref={camera => this.camera = camera}
//                     ratio={'16:9'}
//                 >
//
//
//                     {/*{captures.length > 0 && <Gallery captures={captures}/>}*/}
//
//                     <View style={styles.toolbarWrap}>
//                         <Toolbar style={styles.toolbar}
//                                  capturing={capturing}
//                                  flashMode={flashMode}
//                                  cameraType={cameraType}
//                                  setFlashMode={this.setFlashMode}
//                                  setCameraType={this.setCameraType}
//                                  onCaptureIn={this.handleCaptureIn}
//                                  onCaptureOut={this.handleCaptureOut}
//                                  onLongCapture={this.handleLongCapture}
//                                  onShortCapture={this.handleShortCapture}
//                         />
//                     </View>
//                 </Camera>
//             </View>
//
//         );
//     };
// };
