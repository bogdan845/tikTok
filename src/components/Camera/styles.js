import {StyleSheet, Dimensions} from "react-native";

const {width: winWidth, height: winHeight} = Dimensions.get("window");

export default styles = StyleSheet.create({

    // AppCamera
    container: {

    },

    camera: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
    },


    toolbarWrap: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: winWidth,
    },

    backToFeed: {
        paddingVertical: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        textAlign: 'center',
        color: '#fff',
        fontSize: 15
    },

    // Tollbar
    toolbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 30,
        paddingHorizontal: 50,
        alignItems: 'center'
    },
    captureBtn: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 100,
        borderColor: "#FFFFFF",
    },
    captureBtnActive: {
        // width: 80,
        // height: 80,
        backgroundColor: "#fff",
    },
    // captureBtnInternal: {
    //     width: 76,
    //     height: 76,
    //     borderWidth: 2,
    //     borderRadius: 76,
    //     backgroundColor: "#fff",
    //     borderColor: "transparent",
    // },

    button: {},
    text: {},
});


// import { StyleSheet, Dimensions } from 'react-native';
//
// const { width: winWidth, height: winHeight } = Dimensions.get('window');
//
// export default StyleSheet.create({
//     alignCenter: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     preview: {
//         height: winHeight,
//         width: winWidth,
//         position: 'absolute',
//         left: 0,
//         top: 0,
//         right: 0,
//         bottom: 0,
//     },
//     bottomToolbar: {
//         width: winWidth,
//         position: 'absolute',
//         height: 100,
//         bottom: 0,
//     },
//     captureBtn: {
//         width: 60,
//         height: 60,
//         borderWidth: 2,
//         borderRadius: 60,
//         borderColor: "#FFFFFF",
//     },
//     captureBtnActive: {
//         width: 80,
//         height: 80,
//     },
//     captureBtnInternal: {
//         width: 76,
//         height: 76,
//         borderWidth: 2,
//         borderRadius: 76,
//         backgroundColor: "red",
//         borderColor: "transparent",
//     },
//     galleryContainer: {
//         bottom: 100
//     },
//     galleryImageContainer: {
//         width: 75,
//         height: 75,
//         marginRight: 5
//     },
//     galleryImage: {
//         width: 75,
//         height: 75
//     }
// });