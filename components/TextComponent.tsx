import {ScrollView, StyleSheet, Text, View} from "react-native";

const globalStyle = require('../style')

export default function TextComponent() {
    return (
        <ScrollView>
            <View style={styles.scrollContainer}>
                <View style={globalStyle.margin20}>
                    <Text>Text</Text>
                </View>
                <View style={globalStyle.margin20}>
                    <Text style={styles.text20}>Text</Text>
                </View>
                <View style={globalStyle.margin20}>
                    <Text style={styles.text30}>Text</Text>
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
    text20: {
        fontSize: 20
    },
    text30: {
        fontSize: 30
    }
});
