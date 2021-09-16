import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Formik } from 'formik';
import {
    StyleSheet, Text, View, Image, ImageBackground, TextInput,
    TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { globalStyles } from '../../styles/global'
import Button from '../../utilities/Button'
// import loginIcon from '@assets/login3.png'
// import loginIcon from '../assets/login3.png'

import LoginButton from '../Login/LoginButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PasswordReset({ navigation, userLogin }) {

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
                        <Text style={styles.text}>Recover your account</Text>
                        <Text style={styles.SubText}>We will send you a link to recover your account</Text>
                    </View>

                    <Formik
                        initialValues={{ email: '' }}
                        onSubmit={(values, actions) => {
                            console.log(values);
                            actions.resetForm();
                            userLogin(values);
                        }}
                    >
                        {(props) => (
                            <View style={styles.InputContainer} >
                                <TextInput
                                    style={globalStyles.textInput}
                                    placeholder="Enter email"
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.email}
                                      placeholderTextColor='white'
                                />

                                <View>
                                    <Button
                                        textColor='black'
                                        buttonType='white'
                                        handleClick={props.handleSubmit}
                                        text='Reset Password'

                                    />
                                    <TouchableOpacity>
                                        <Text style={{ color: 'white', textAlign: 'center', padding: 10,}}>Oh! I remember my PIN. Login</Text>
                                    </TouchableOpacity>
                                    
                                </View>

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
    InputContainer: {
        display: 'flex',
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        alignContent: 'space-between'
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        paddingBottom:0,
        marginBottom: 0,
        textAlign: 'center',
    },
    SubText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10,
        marginTop:0,
        paddingTop:0,
        marginBottom: 12,
        textAlign: 'center',
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
        display: 'flex',
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'space-between',

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
