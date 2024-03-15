// LoginScreen.js

import React from 'react';
import {Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';


export default class LoginScreen extends React.Component {
    state = {

    };

    handleLogin = () => {

    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Login</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003f5c',
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fb5b5a',
    },


});
