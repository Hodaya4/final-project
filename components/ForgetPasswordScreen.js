import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class ForgotPasswordScreen extends React.Component {
    state = {
        email: '',
    };

    handleSendEmail = () => {

    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Forgot Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={text => this.setState({ email: text })}
                />
                <TouchableOpacity style={styles.button} onPress={this.handleSendEmail}>
                    <Text style={styles.buttonText}>Send Email</Text>
                </TouchableOpacity>
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
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#465881',
        color: 'white',
    },
    button: {
        width: '80%',
        height: 40,
        backgroundColor: '#fb5b5a',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
