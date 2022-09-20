import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Alert
} from "react-native";

import { images } from "../../assets/images/images";
import { useDispatch } from "react-redux";
import dataService from "../api/services/data.service";
import { colors } from "../api/staticData/colors";
import { loadPosts } from "../redux/actions/appActions";


import KButton from "../components/base/KButton";
import KText from "../components/base/KText";
import KTextInput from "../components/base/KTextInput";

const w = Dimensions.get("window").width;

const isTabletLayout = w >= 768;


export default Autorization = ({ navigation }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const loadMenu = () => dispatch(loadPosts());

    tryLogin = async () => {

        dataService.login({ login: login.toLowerCase(), password: password })
            .then((res) => {

                if (res.data.success) {
                    loadMenu()
                    navigation.replace('MobPosts')
                } else {
                    Alert.alert(res.data.error)
                }

            })
    }

    return (
        <View style={styles.loyaut} >

            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}
            >
                <KeyboardAvoidingView
                    style={styles.loyaut}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.container}>

                        <KText
                            text={'Autorization'}
                            style={[styles.elementMargin, styles.header]}
                        />

                        <View style={styles.inputWithlabel}>
                            <KText
                                text={'Login'}
                                style={[styles.elementMargin, styles.loginLabelText]}
                            />
                            <KTextInput
                                value={login}
                                onChangeText={(text) => setLogin(text)}
                                style={[styles.elementMargin, styles.textInput]}
                            />
                        </View>

                        <View style={styles.inputWithlabel}>
                            <KText
                                text={'Password'}
                                style={[styles.elementMargin, styles.loginLabelText]}
                            />
                            <KTextInput
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                style={[styles.elementMargin, styles.textInput]}
                                secureTextEntry
                            />
                        </View>
                        <KButton
                            title={'Submit'}
                            style={styles.buttonSubmit}
                            onClick={() => tryLogin()}
                            disabled={login.length === 0 | password.length === 0}
                        />
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>

    );

}
const styles = StyleSheet.create({
    loyaut: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: isTabletLayout ? 450 : w * 0.9,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.blueWater,
        flexDirection: 'column',
        padding: 20
    },
    elementMargin: {
        marginBottom: 20
    },
    header: {
        fontSize: 20,
        color: colors.blueWater,
        alignSelf: 'center',
        fontWeight: 'bold'

    },
    inputWithlabel: {
        flexDirection: isTabletLayout ? 'row' : 'column',
        justifyContent: 'space-between'
    },
    textInput: {
        width: isTabletLayout ? '60%' : '100%',
        zIndex: 20
    },
    loginLabelText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonSubmit: {
        width: isTabletLayout ? 260 : '100%',
        alignSelf: 'center'
    }

});
