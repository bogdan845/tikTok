import React from 'react';
import {Camera} from "expo-camera";
// import Feather from "react-native-vector-icons/Feather";
// import MaterialIconsfrom from "react-native-vector-icons/MaterialIcons";
import Ionicons from 'react-native-vector-icons/Ionicons'
import {View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

import styles from "./styles";
import {Text} from "react-native-web";

const {FlashMode: CameraFlashModes, Type: CameraTypes} = Camera.Constants;

export default ({
                    capturing = {isCapturing: false},
                    cameraType = CameraTypes.back,
                    flashMode = CameraFlashModes.off,
                    setFlashMode,
                    setCameraType,
                    onCaptureIn,
                    onCaptureOut,
                    onLongCapture,
                    onShortCapture
                }) => (

    <View style={styles.toolbar}>

        <TouchableOpacity onPress={() => {
            setFlashMode(
                flashMode === CameraFlashModes.on ? CameraFlashModes.off : CameraFlashModes.on
            )
        }}>
            <Ionicons
                name={flashMode === CameraFlashModes.on ? 'flash' : "flash-off"}
                color='white'
                size={30}
            />
        </TouchableOpacity>
        <TouchableWithoutFeedback
            onPressIn={onCaptureIn}
            onPressOut={onCaptureOut}
            onLongPress={onLongCapture}
            onPress={onShortCapture}
        >
            {/*<View style={[styles.captureBtn, capturing.isCapturing && styles.captureBtnActive]}>*/}
            {/*    {capturing.isCapturing && <View style={styles.captureBtnInternal}></View>}*/}
            {/*</View>            */}
            <View style={[styles.captureBtn, capturing.isCapturing && styles.captureBtnActive]}>
                {/*{capturing.isCapturing && <View style={styles.captureBtnInternal}></View>}*/}
            </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={() => {
            setCameraType(
                cameraType === CameraTypes.back ? CameraTypes.front : CameraTypes.back
            )
        }}>
            <Ionicons
                name='md-camera-reverse'
                color='white'
                size={30}
            >
            </Ionicons>
        </TouchableOpacity>
    </View>
)