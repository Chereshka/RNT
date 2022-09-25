import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, Touchable, TouchableOpacity } from 'react-native';
// import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { images } from '../../assets/images/images';

import IsUserLogged from '../screens/IsUserLogged';
import Autorization from '../screens/Autorization';

const Stack = createNativeStackNavigator()

import { NavigationContainer } from "@react-navigation/native";
import { colors } from '../api/staticData/colors';
import MobPosts from '../screens/MobPost';
import { clearToken } from '../api/asyncStorage/token';

const w = Dimensions.get('window').width;

const logo = () =>
    <Image
        source={images.logo}
        style={{
            height: 40,
            width: 173.3
        }}
        resizeMode={'cover'}
    />

const logoutButton = (navigation) =>
    <TouchableOpacity
        onPress={() => {
            clearToken();
            navigation.replace("Auntification")
        }}
    >
        <Image
            source={images.logOut}
            style={{ height: 30, width: 33.3 }}
            resizeMode={'cover'}
        />
    </TouchableOpacity>


export const MainAppContainer = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.cream,
                    }
                }}
            >
                <Stack.Screen
                    name="IsUserLogged"
                    component={IsUserLogged}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Auntification"
                    component={Autorization}
                    options={{
                        title: null,
                        headerLeft: () => logo(),

                    }}

                />
                <Stack.Screen
                    name="MobPosts"
                    component={MobPosts}
                    options={({ navigation }) => ({
                        title: null,
                        headerLeft: () => logo(),
                        headerRight: () => logoutButton(navigation)
                    })}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )

}


