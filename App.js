import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import SignUpScreen from "./components/SignUpScreen";
import ForgotPasswordScreen from "./components/ForgetPasswordScreen";
import HomeScreen from "./components/HomeScreen";
export default class App extends React.Component {
    state = {
        email: '',
        password: '' ,
        showHome: false ,
        showSignUp: false,
        showForgetPassword: false
    };

    toggleHome = () => {
        this.setState(prevState => ({ showHome: !prevState.showHome }));
    };

    toggleSignUp = () => {
        this.setState(prevState => ({ showSignUp: !prevState.showSignUp }));
    };
    toggleForgetPassword = () => {
        this.setState(prevState => ({ showForgetPassword: !prevState.showForgetPassword }));
    };

    render() {
        if (this.state.showSignUp) {
            return <SignUpScreen toggleSignUp={this.toggleSignUp}/>;
        }
        if (this.state.showForgetPassword) {
            return <ForgotPasswordScreen toggleForgetPassword={this.toggleForgetPassword}/>;
        }
        if (this.state.showHome) {
           return <HomeScreen/>;
        }

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <Text style={styles.logo}>BookHaven</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Email..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({ email: text })}
                            textAlign={'left'}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Password..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({ password: text })}
                            textAlign={'left'}
                        />
                    </View>
                    <TouchableOpacity onPress={this.toggleForgetPassword}>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginBtn} onPress={this.toggleHome}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signUpBtn} onPress={this.toggleSignUp}>
                        <Text style={styles.loginText}>Sign Up</Text>
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
        fontSize: 50,
        color: '#fb5b5a',
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
    forgot: {
        color: 'white',
        fontSize: 11,
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    signUpBtn: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    loginText: {
        color: 'white',
    },

});