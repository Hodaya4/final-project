
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SignUpScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>אוסנת והודיה יצליחו בסוף</Text>
            {/* להוסיף  */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
});