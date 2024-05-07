import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback} from 'react-native';

export default class HomeScreen extends React.Component {
    state = {

    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <TextInput>This will be our Home Page!!!</TextInput>

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

});


