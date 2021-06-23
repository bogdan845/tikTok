import React, {useState, useRef, useEffect} from "react";
import {FlatList, ScrollView, Dimensions, View, ActivityIndicator} from "react-native";

/*
* styles / components
* */
import styles from "./styles";
import {Post} from "./Post";


/*
* Feed
* */
export const Feed = () => {

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        const url = 'https://my-json-server.typicode.com/bogdan845/tikTok-data/db';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.posts.length > counter) {
                    setPosts(() => data.posts.slice(0, counter + 2))
                    setisLoading(() => false);
                } else {
                    setisLoading(() => true);
                }
            })
            .catch(err => console.log(err))
    }

    const loadMoreHandler = () => {
        setCounter(prevState => prevState + 2)
        getData();
    }

    const [posts, setPosts] = useState([]);

    const [isLoading, setisLoading] = useState(false);

    const [counter, setCounter] = useState(2);

    const [currentVisibleIndex, setCurrentVisibleIndex] = useState();

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
            onEndReached={loadMoreHandler}
            onEndReachedThreshold={0.25}
            ListFooterComponent={() =>
                isLoading
                    ? null
                    : <ActivityIndicator size="large" color="#B2B2B2"/>
            }
        />
    );
};