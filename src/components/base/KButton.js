import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { colors } from "../../api/staticData/colors";
import KText from "./KText";
export default Button = ({ disabled, onClick, fontSize = 18, opacity, title, style }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            activeOpacity={0.7}
            onPress={onClick}
            style={[
                styles.button,
                style,
                {
                    opacity: disabled ? 0.5 : 1.0
                }
            ]}
        >
            <KText style={{
                fontSize: fontSize,
                fontWeight: 'bold',
                opacity: opacity ? 0.4 : 1
            }}
                text={title} semiBold
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 40,
        backgroundColor: colors.cream,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    }
})
