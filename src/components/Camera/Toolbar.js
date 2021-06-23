import React from 'react';
import {Camera} from "expo-camera";
import Ionicons from 'react-native-vector-icons/Ionicons'
import {View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

/*
* styles / components
* */
import styles from "./styles";
import {Text} from "react-native-web";

/*
* Constants for flash and cameraType
* */
const {FlashMode: CameraFlashModes, Type: CameraTypes} = Camera.Constants;


/*
* Toolbar
* */
export const Toolbar = ({
                    capturing = {isActive: false},
                    cameraType = CameraTypes.back,
                    setCameraType,
                    flashMode = CameraFlashModes.off,
                    setFlashMode,
                    capturingOn,
                    capturingOut,
                    videoRecording,
                    takePhoto
                }) => (
    <View style={styles.toolbar}>
        <TouchableOpacity onPress={() => setFlashMode(
            flashMode === CameraFlashModes.on
                ? CameraFlashModes.off
                : CameraFlashModes.on
        )}>
            <Ionicons
                name={flashMode === CameraFlashModes.on ? 'flash' : "flash-off"}
                color='white'
                size={30}
            />
        </TouchableOpacity>
        <TouchableWithoutFeedback
            onPressIn={capturingOn}
            onPressOut={capturingOut}
            onLongPress={videoRecording}
            onPress={takePhoto}
        >
            <View style={[styles.captureBtn, capturing.isActive && styles.captureBtnActive]}></View>
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={() => setCameraType(
            cameraType === CameraTypes.back
                ? CameraTypes.front
                : CameraTypes.back
        )}>
            <Ionicons
                name='md-camera-reverse'
                color='white'
                size={30}
            >
            </Ionicons>
        </TouchableOpacity>
    </View>
);