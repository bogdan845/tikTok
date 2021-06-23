import React, {useState, useRef} from "react";
import {FlatList, ScrollView, Dimensions, View, Text} from "react-native";

/*
* styles / components
* */
import styles from "./styles";
import {Post} from "./Post";
import {posts} from "../../data";


/*
* Feed
* */
export const Feed = () => {

    const [currentVisibleIndex, setCurrentVisibleIndex] = useState()

    const onViewableItemsChanged = ({viewableItems, changed}) => {
        if (viewableItems && viewableItems.length > 0) {
            setCurrentVisibleIndex(() => (viewableItems[0].index));
        }
    };

    const viewabilityConfigCallbackPairs = useRef([
        {
            onViewableItemsChanged,
            viewabilityConfig: {
                waitForInteraction: true,
                itemVisiblePercentThreshold: 50
            }
        },
    ]);


    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            viewabilityConfigCallbackPairs={
                viewabilityConfigCallbackPairs.current
            }
            renderItem={({item, index}) => (
                <Post
                    video={item}
                    key={item.id}
                    currentIndex={index}
                    currentVisibleIndex={currentVisibleIndex}
                />)
            }
            // snapToInterval={{height: wi}}
            // snapToAlignment={"start"}
            // decelerationRate={'normal'}
        />
    );
};