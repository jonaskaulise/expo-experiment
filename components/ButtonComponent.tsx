import {Button, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";

const globalStyle = require('../style')

export default function ButtonComponent() {
    return (
        <ScrollView>
            <View style={styles.scrollContainer}>
                <Text style={globalStyle.margin10}>Button:</Text>
                <View style={globalStyle.margin20}>
                    <Button title="Button"/>
                </View>
                <View style={globalStyle.margin20}>
                    <Button title="Button" color="red"/>
                </View>
                <Text style={globalStyle.margin10}>Pressable:</Text>
                <View style={globalStyle.margin20}>
                    <Pressable><Text>Pressable</Text></Pressable>
                </View>
                <View style={globalStyle.margin20}>
                    <Pressable style={styles.pressable}><Text style={globalStyle.font20}>Pressable</Text></Pressable>
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
    pressable: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    }
});
