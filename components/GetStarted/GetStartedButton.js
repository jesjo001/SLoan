import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function GetStartedButton({ handleNavigationClick }) {

    const pressHandler = () => {
        console.log("hello")
    }
    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Apply for loan in 2 min.</Text>
                <Text style={styles.text}>Are you out of cash? Never mind.</Text>
                <Text style={styles.text}>SoftLoan is here to </Text>
                <Text style={styles.text}>foot your bills</Text>
                <TouchableOpacity style={styles.button} onPress={handleNavigationClick}>
                    <Text style={styles.buttonText} >Get Started </Text><MaterialIcons name="arrow-forward" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 1,
        borderTopRightRadius: 25,
        borderWidth: 1,
        // borderStyle: 'dashed',
        borderColor: '#15278E',
        backgroundColor: '#15278E',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '28%',
        flexDirection: 'row',
        marginLeft: 0,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        backgroundColor: 'white',
        width: 120,
        maxHeight: 40,
        borderRadius: 8,
        fontWeight: 'bold',
        marginTop: 5,
        justifyContent: 'center',
    },
    buttonText: {
        height: 50,
        margin: 0,
        padding: 5,
    },
    title: {
        color: 'white',
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
    }
});
