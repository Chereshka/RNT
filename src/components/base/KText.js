import React from "react";
import { Text, StyleSheet } from "react-native";

export default KText = ({ text, style, numberOfLines }) => {
    return (

        <Text
            style={[styles.content__input, style]}

            numberOfLines={numberOfLines}
        >
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
    content__text: {
        fontSize: 15
    },

})
