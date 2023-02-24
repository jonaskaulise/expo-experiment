import {Pressable, StyleSheet} from 'react-native';
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Ionicons} from "@expo/vector-icons";

const Stack = createNativeStackNavigator()

export default function StackComponent() {
    return (
            <Stack.Navigator
                initialRouteName="First"
                screenOptions={({ route }) => ({
                    headerTitleAlign: "center",
                    headerRight: () => (
                        <Pressable style={styles.headerRight}>
                            <Ionicons name="mail" size={30} color="gray"/>
                        </Pressable>
                    ),
                    animation: "slide_from_right"
                })}
            >
                <Stack.Screen name="First" component={FirstComponent}/>
                <Stack.Screen
                    name="Second"
                    component={SecondComponent}
                    options={({ route, navigation }) => ({
                        headerLeft: () => (
                            <Pressable style={styles.headerRight} onPress={() => navigation.pop()}>
                                <Ionicons name="arrow-back" size={30} color="gray"/>
                            </Pressable>
                        ),
                    })}
                />
            </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    headerRight: {
        paddingRight: 10,
    },
    headerLeft: {
        paddingLeft: 10,
    }
});
