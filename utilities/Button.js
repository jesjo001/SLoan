import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default function Button({ textColor, buttonType, text }) {

    if (buttonType && textColor) {
        return (

            <TouchableOpacity style={buttonStyle(buttonType)}>
                <Text style={textStyle(textColor)}>{text}</Text>
            </TouchableOpacity>

        );
    }

}

buttonStyle = function (buttonType) {

    if (buttonType === "transparent") {
        return {
            backgroundColor: 'rgba(1, 10, 67, 0.9)',
            borderWidth: 1,
            borderColor: 'white',
            padding: 18,
            color: 'white',
            textAlign: 'center',
            alignItems: 'center',
            borderRadius: 10,
            width: 260,
            margin: 5,
            marginTop:10
        }
    }

    return {
        backgroundColor: `white`,
        padding: 18,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '80%',
        width: 250,
        marginTop: 10,
    }
}

textStyle = function (textColor) {

    if (textColor === "white") {
        return {
            color: 'white',
        }
    }

    return {
        color: 'black',
    }
}

