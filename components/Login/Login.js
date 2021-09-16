import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Formik } from 'formik';
import {
    StyleSheet, Text, View, Image, ImageBackground, TextInput,
    TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { globalStyles } from '../../styles/global'
// import loginIcon from '@assets/login3.png'
// import loginIcon from '../assets/login3.png'

import LoginButton from '../Login/LoginButton';

export default function Login({ navigation, userLogin }) {

    const handleLogin = () => {

    }

    const handleSignup = () => {

    }

    return (
        <ImageBackground source={require('../../assets/login3.png')} style={styles.container} >

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.contentContainer}>
                    <View style={styles.logoArea}>
                        <View style={styles.logoContainer}>
                            <Image source={require('../../assets/group43.png')} style={styles.logo} />
                        </View>
                        <Text style={styles.text}>Welcome Back</Text>
                    </View>

                    <Formik
                        initialValues={{ username: '', password: '' }}
                        onSubmit={(values, actions) => {
                            console.log(values);
                            actions.resetForm();
                            userLogin(values);
                        }}
                    >
                        {(props) => (
                            <View >
                                <TextInput
                                    style={globalStyles.textInput}
                                    placeholder="Enter username"
                                    onChangeText={props.handleChange('username')}
                                    value={props.values.username}
                                    placeholderTextColor='white'
                                />

                                <TextInput
                                    style={globalStyles.textInput}
                                    placeholder="Enter Password"
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                    placeholderTextColor='white'
                                />
                                <LoginButton

                                    textColor='black'
                                    buttonType='white'
                                    handleClick={props.handleSubmit}
                                    text='Login'
                                />
                            </View>
                        )}
                    </Formik>

                    <StatusBar style="light" />
                </View>
            </TouchableWithoutFeedback>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        margin: 0,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '90%',
        height: '100%',
        margin: 0,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        marginBottom: 12,
    },
    button: {
        backgroundColor: 'white',
        padding: 18,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '80%',
        margin: 5,
    },
    button2: {
        backgroundColor: 'rgba(1, 10, 67, 0.9)',
        borderWidth: 1,
        borderColor: 'white',
        padding: 18,
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '80%',
        margin: 5,
    },
    textWhite: {
        color: 'white',
    },
    logoArea: {
        marginBottom: 10,
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }

});
