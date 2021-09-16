import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Formik } from 'formik';
import {
    StyleSheet, Text, View, Image, ImageBackground, TextInput,
    TouchableWithoutFeedback, Keyboard, ScrollView
} from 'react-native';
import { globalStyles } from '../../styles/global'
// import loginIcon from '@assets/login3.png'
// import loginIcon from '../assets/login3.png'

import Button from '../../utilities/Button';

export default function SignUp({ navigation, userSignUp }) {

    const handleLogin = () => {

    }

    const handleSignup = () => {

    }

    return (
        <ImageBackground source={require('../../assets/login3.png')} style={styles.container} >
            <ScrollView style={{ marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0, width: "100%", height: "100%", display: "flex", }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.contentContainer}>
                        <View style={styles.logoArea}>
                            <View style={styles.logoContainer}>
                                <Image source={require('../../assets/group43.png')} style={styles.logo} />
                            </View>
                            <Text style={styles.text}>Create an account</Text>
                        </View>

                        <Formik
                            initialValues={{ username: '', password: '' }}
                            onSubmit={(values, actions) => {
                                console.log(values);
                                actions.resetForm();
                                userSignUp(values);
                            }}
                        >
                            {(props) => (
                                <View >

                                    <View style={globalStyles.FormRowContainer}>
                                        <TextInput
                                            style={globalStyles.SignUpInputRow}
                                            placeholder="First Name"
                                            onChangeText={props.handleChange('firstname')}
                                            value={props.values.firstname}
                                            placeholderTextColor='white'
                                        />

                                        <TextInput
                                            style={globalStyles.SignUpInputRow}
                                            placeholder="LastName"
                                            onChangeText={props.handleChange('lastname')}
                                            value={props.values.lastname}
                                            placeholderTextColor='white'
                                        />
                                    </View>

                                    <View style={globalStyles.FormContainer}>
                                    <TextInput
                                        style={globalStyles.SignUpInput}
                                        placeholder="Enter username"
                                        onChangeText={props.handleChange('username')}
                                        value={props.values.username}
                                        placeholderTextColor='white'
                                    />

                                    <TextInput
                                        style={globalStyles.SignUpInput}
                                        placeholder="Enter Password"
                                        onChangeText={props.handleChange('password')}
                                        value={props.values.password}
                                        placeholderTextColor='white'
                                    />

                                    <TextInput
                                        style={globalStyles.SignUpInput}
                                        placeholder="Email"
                                        onChangeText={props.handleChange('email')}
                                        value={props.values.email}
                                        placeholderTextColor='white'
                                    />

                                    <TextInput
                                        style={globalStyles.SignUpInput}
                                        placeholder="Enter Your Phone Number"
                                        onChangeText={props.handleChange('number')}
                                        value={props.values.number}
                                        placeholderTextColor='white'
                                    />

                                    <TextInput
                                        style={globalStyles.SignUpInput}
                                        placeholder="Enter Password"
                                        onChangeText={props.handleChange('homeAddress')}
                                        value={props.values.homeAddress}
                                        placeholderTextColor='white'
                                    />

                                    <TextInput
                                        style={globalStyles.SignUpInput}
                                        placeholder="Enter Password"
                                        onChangeText={props.handleChange('businessAddress')}
                                        value={props.values.businessAddress}
                                        placeholderTextColor='white'
                                    />

                                    <TextInput
                                        style={globalStyles.SignUpInput}
                                        placeholder="Enter Password"
                                        onChangeText={props.handleChange('bvn')}
                                        value={props.values.bvn}
                                        placeholderTextColor='white'
                                    />

                                        <Button
                                            textColor='black'
                                            buttonType='white'
                                            handleClick={props.handleSubmit}
                                            text='SignUp'

                                        />
                                    </View>
                                    
                                </View>
                            )}
                        </Formik>

                        <StatusBar style="light" />
                    </View>



                </TouchableWithoutFeedback>
            </ScrollView>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%',
        margin: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    contentContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        width: '100%',
        height: '100%',
        paddingLeft: 0,
        paddingRight: 0
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
        marginTop: 100,
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
