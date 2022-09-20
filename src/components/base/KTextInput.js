import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../../api/staticData/colors";

export default KTextInput = ({ value, onChangeText, placeholder, style, secureTextEntry }) => {
    return (
        <TextInput
            value={value}
            onChangeText={(text) => onChangeText(text)}
            style={[styles.content__input, style]}
            placeholder={placeholder}
            clearButtonMode="while-editing"
            secureTextEntry={secureTextEntry}

        />
    );
};

const styles = StyleSheet.create({
    content__input: {
        color: colors.blueWater,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderRadius: 8,
        backgroundColor: colors.alto,
        borderColor: colors.blueWater,
        fontSize: 18
    },

})
