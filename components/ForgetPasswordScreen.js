import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';

export default class ForgotPasswordScreen extends React.Component {
    state = {
        email: '',
    };

    handleSendEmail = () => {

    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <Text style={styles.logo}>Forgot Password</Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Email"
                            keyboardType="email-address"
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({ email: text })}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.handleSendEmail}>
                        <Text style={styles.buttonText}>Send Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.toggleForgetPassword}>
                        <Text style={styles.returnBtn}>Return</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
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
        backgroundColor: '#465881',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: 'white',
    },
    button: {
        width: '80%',
        height: 40,
        backgroundColor: '#fb5b5a',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    returnBtn: {
        color: 'white',
        fontSize: 11,
    },
});
