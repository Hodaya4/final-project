import React from 'react';
import {Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';

export default class SignUpScreen extends React.Component {

    state = {
        username:'',
        email: '',
        password: '',

    };

    handleSignUp = () => {
        //logic to handle signup
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <Text style={styles.logo}>Create your account!</Text>
                    <Text style={styles.subLogo}>Start your reading journey today!</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Username..."
                            placeholderTextColor="#003f5c"
                            textAlign={'left'}
                            onChangeText={text => this.setState({ username: text })}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Email..."
                            keyboardType="email-address"
                            placeholderTextColor="#003f5c"
                            textAlign={'left'}
                            onChangeText={text => this.setState({ email: text })}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Password..."
                            placeholderTextColor="#003f5c"
                            textAlign={'left'}
                            onChangeText={text => this.setState({ password: text })}
                        />
                    </View>
                    <TouchableOpacity onPress={this.props.toggleSignUp}>
                        <Text style={styles.login}>Log into an existing account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signUpBtn} onPress={this.handleSignUp}>
                        <Text style={styles.loginText}>SIGN UP</Text>
                    </TouchableOpacity>

                </View>
            </TouchableWithoutFeedback>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fb5b5a',
        marginBottom: 10,
    },
    subLogo: {
        fontSize: 15,
        color: '#fff',
        marginBottom: 40,
    },
    inputView: {
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
    login: {
        color: 'white',
        fontSize: 11,
    },
    signUpBtn: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
});
















































































































































































































































































































































































































































































































































































































































































































































































































































































