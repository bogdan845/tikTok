import React, {useState, useEffect} from "react";
import * as MediaLibrary from "expo-media-library";
import {
    Text,
    View,
    Button,
} from "react-native";
import {Camera} from "expo-camera";
import {Audio} from "expo-av";

/*
* styles / components
* */
import styles from "./styles";
import {Toolbar} from "./Toolbar";


/*
* AppCamera
* */
export const AppCamera = ({closeCamera}) => {

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

    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [capturing, setCapturing] = useState({isActive: false});
    const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

    const flashModeHandler = (flashMode) => setFlashMode(() => flashMode);
    const cameraTypeHandler = (cameraType) => setCameraType(() => cameraType);

    const capturingOnHandler = () => setCapturing({isActive: true});
    const capturingOutHandler = async () => {
        if (capturing.isActive) {
            cameraRef.stopRecording();
        }
    };

    const takePhotoHandler = async () => {
        if (cameraRef) {
            const options = {quality: 0.5};
            const photo = await cameraRef.takePictureAsync(options);
            await MediaLibrary.createAssetAsync(photo.uri);
            await setCapturing(() => ({isActive: false}))
        }
    };

    const videoRecordingHandler = async () => {
        if (cameraRef) {
            const options = {maxDuration: 10};
            const video = await cameraRef.recordAsync(options);
            await MediaLibrary.createAssetAsync(video.uri);
            await setCapturing(() => ({isActive: false}))
        }
    };

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>Some of permissions not allowed</Text>;
    }

    return (
        <View>
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
                        cameraType={cameraType}
                        setCameraType={cameraTypeHandler}
                        flashMode={flashMode}
                        setFlashMode={flashModeHandler}
                        capturingOn={capturingOnHandler}
                        capturingOut={capturingOutHandler}
                        videoRecording={videoRecordingHandler}
                        takePhoto={takePhotoHandler}
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