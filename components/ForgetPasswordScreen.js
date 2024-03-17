import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class ForgotPasswordScreen extends React.Component {
    state = {
        email: '',
    };

    handleSendEmail = () => {
        // Implement email sending functionality here
        // You can use the 'this.state.email' to get the entered email address
        // Example: Send a password reset email to the entered email address
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
        backgroundColor: '#003f5c', // Background color
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fb5b5a', // Logo color
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20, // Set borderRadius to make the input oval-shaped
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#465881', // Input background color
        color: 'white', // Input text color
    },
    button: {
        width: '80%',
        height: 40,
        backgroundColor: '#fb5b5a', // Button background color
        borderRadius: 20, // Set borderRadius to make the button oval-shaped
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
