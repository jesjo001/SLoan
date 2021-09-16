import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// import getStartedIcon from '../../assets/getstarted3.png';

import GetStartedButton from './GetStartedButton';


export default function GetStarted({ navigation }) {

    const handleNavigationClick = () => {
        navigation.navigate('Welcome');
    }

    return (

        <ImageBackground source={require('../../assets/getstarted2.png')} style={styles.container}>
            <View style={styles.mainContent}>
                <Text></Text>
                <StatusBar style="light" />
            </View>
            <GetStartedButton handleNavigationClick={handleNavigationClick} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        margin: 0,
    },
    mainContent: {
        height: '70%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
