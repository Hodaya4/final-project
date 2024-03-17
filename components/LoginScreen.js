import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
//שאלון שעל בסיסו אפשר לדעת צריך לחבר api
const LoginScreen = () => {
    const [responses, setResponses] = useState({});

    const handleResponseChange = (question, response) => {
        setResponses(prevResponses => ({
            ...prevResponses,
            [question]: response,
        }));
    };

    const handleSubmit = () => {
        console.log('Responses:', responses);

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Familiarization  Questionnaire</Text>
            <Text style={styles.question}>What genres do you enjoy reading?</Text>
            <TextInput
                style={styles.input}
                onChangeText={response => handleResponseChange('genres', response)}
                placeholderTextColor="#003f5c"
            />

            <Text style={styles.question}>Do you prefer short or long books?</Text>
            <TextInput
                style={styles.input}
                onChangeText={response => handleResponseChange('bookLength', response)}
                placeholderTextColor="#003f5c"
            />

            <Text style={styles.question}>What mood are you usually in when reading?</Text>
            <TextInput
                style={styles.input}
                onChangeText={response => handleResponseChange('mood', response)}
                placeholderTextColor="#003f5c"
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003f5c',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fb5b5a',
        marginBottom: 20,
    },
    question: {
        fontSize: 16,
        marginBottom: 10,
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
         width: '50%',
         height: 50,
         backgroundColor: '#fb5b5a',
         borderRadius: 25,
         justifyContent: 'center',
         alignItems: 'center',
    },
    buttonText: {
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',

    },
});

export default LoginScreen;

