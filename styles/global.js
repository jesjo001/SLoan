import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    textInput: {
        backgroundColor: 'rgba(1, 10, 67, 0.9)',
        borderWidth: 1,
        borderColor: 'white',
        padding: 18,
        color: 'white',
        textAlign: 'left',
        alignItems: 'center',
        borderRadius: 10,
        width: 250,
        margin: 5,
    },
    SignUpInput: {
        backgroundColor: 'rgba(1, 10, 67, 0.9)',
        borderWidth: 1,
        borderColor: 'white',
        padding: 18,
        color: 'white',
        textAlign: 'left',
        alignItems: 'center',
        borderRadius: 10,
        width: 250,
        height: '9%',
        margin: 5,
    },
    SignUpInputRow: {
        backgroundColor: 'rgba(1, 10, 67, 0.9)',
        borderWidth: 1,
        borderColor: 'white',
        padding: 18,
        color: 'white',
        textAlign: 'left',
        alignItems: 'center',
        borderRadius: 10,
        width: 120,
        height: 50,
        margin: 5,
        marginBottom: 0,
    },

    placeholder: {
        color: 'white',
    },
    FormContainer: {
        marginTop:10,
        paddingTop: 10,
    },
    FormRowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 0,
    }
})