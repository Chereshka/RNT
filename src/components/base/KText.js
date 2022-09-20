import React from "react";
import { Text, StyleSheet } from "react-native";

export default KText = ({ text, style }) => {
    return (

        <Text
            style={[styles.content__input, style]}
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
