import React, {useState, useEffect} from "react";
import {View, TouchableWithoutFeedback, Text} from "react-native";
import {Video} from "expo-av";

/*
* styles / components
* */
import styles from "./styles";
import {PostInfo} from "./PostInfo";


/*
* Single post
* */
export const Post = ({video, currentIndex, currentVisibleIndex}) => {

    const [pause, setPause] = useState(true);

    const [like, setLike] = useState(false);
    const likeHandler = () => setLike((prevState) => !prevState);

    const onScrollPauseHandler = () => {
        if (currentIndex === 0 && !currentVisibleIndex) {
            return true;
        }
        return currentIndex == currentVisibleIndex;
    }


    return (
        <View style={styles.postContainer}>
            <TouchableWithoutFeedback onPress={likeHandler}>
                <Video
                    resizeMode={"contain"}
                    style={styles.video}
                    repeat={true}
                    shouldPlay={onScrollPauseHandler()}
                    isLooping
                    isMuted={false}
                    source={{uri: video.uri}}
                />
            </TouchableWithoutFeedback>
            <PostInfo userName={video.userName} likeHandler={likeHandler} isLiked={like}/>
        </View>
    );
};
