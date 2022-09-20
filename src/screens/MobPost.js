import React from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    FlatList,
} from "react-native";


import { useSelector } from "react-redux";
import KText from "../components/base/KText";
import { colors } from "../api/staticData/colors";

const w = Dimensions.get("window").width;

const isTabletLayout = w >= 768;

const elementPadding = 20;

export default MobPosts = ({ navigation }) => {

    const { posts } = useSelector(state => state.appReducer);


    return (
        <View style={styles.loyaut}>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                numColumns={isTabletLayout ? 2 : 1}
                columnWrapperStyle={isTabletLayout && styles.flatListColumn}  
                // Можно вынести в отдельный компонент, но для примера должно быть получше оставить это здесь
                renderItem={({ item }) =>
                    <View style={styles.renderItem}>
                        <View style={styles.postContainer}
                        >
                            {isTabletLayout &&
                                <View style={styles.postImage} />
                            }
                            <KText
                                text={`Author: ${item.user.name}`}
                                style={styles.postText}
                            />
                            <KText
                                text={`Company: ${item.user.company.name}`}
                                style={styles.postText}
                            />
                            <KText
                                text={`Title: ${item.title}`}
                                style={[styles.postText, !isTabletLayout && styles.lastElement]}
                            />
                            {isTabletLayout &&
                                <KText
                                    text={`Title: ${item.body}`}
                                    style={[styles.postText, styles.lastElement]}
                                />
                            }
                        </View>
                    </View>
                }
            />
        </View>
    );

}
const styles = StyleSheet.create({
    loyaut: {
        flex: 1,
        padding: elementPadding / 2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    flatListColumn: {
        flex: 1,
        justifyContent: "space-between",
    },
    renderItem: {
        padding: elementPadding / 2,
        width: isTabletLayout ? '50%' : '100%'
    },
    postContainer: {
        padding: elementPadding / 2,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: colors.blueWater,
        flex: 1
    },
    postImage: {
        width: 150,
        height: 150,
        marginBottom: elementPadding,
        backgroundColor: colors.cream
    },
    postText: {
        fontWeight: 'bold',
        marginBottom: elementPadding
    },
    lastElement: {
        marginBottom: 0
    },


});
