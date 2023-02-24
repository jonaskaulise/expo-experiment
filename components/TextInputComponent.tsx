import {ScrollView, StyleSheet, TextInput, View} from "react-native";

const globalStyle = require('../style')

export default function TextInputComponent() {
    return (
        <ScrollView>
            <View style={styles.scrollContainer}>
                <View style={globalStyle.margin20}>
                    <TextInput
                        placeholder="TextInput"
                    />
                </View>
                <View style={globalStyle.margin20}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="TextInput"
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        padding: 5,
        backgroundColor: 'white'
    }
});
