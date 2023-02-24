import {Button, StyleSheet, Text, View} from "react-native";

export default function FirstComponent({navigation}) {
    return (
        <View>
            <Text>First</Text>
            <Button title="To second" onPress={() => navigation.navigate('Second')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    first: {
        flex: 1
    }
});
