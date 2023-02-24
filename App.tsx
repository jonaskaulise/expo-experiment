import {Pressable, StyleSheet, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TextComponent from "./components/TextComponent";
import {Ionicons} from "@expo/vector-icons";
import ButtonComponent from "./components/ButtonComponent";
import TextInputComponent from "./components/TextInputComponent";
import StackComponent from "./components/Stack/StackComponent";

const Tab = createBottomTabNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        switch(route.name) {
                            case 'Text':
                                iconName = 'text'
                                break
                            case 'TextInput':
                                iconName = 'chatbox'
                                break
                            case 'Button':
                                iconName = 'play-circle'
                                break
                            case 'Stack':
                                iconName = 'layers'
                                break
                            default:
                                iconName = 'alert-circle'
                        }
                        if (focused) {
                            return <Ionicons name={iconName} size={size} color={color}/>
                        } else {
                            iconName += '-outline'
                            // return <View style={styles.focusedTab}>
                            //     <Ionicons name={iconName} size={size} color="white"/>
                            // </View>
                            return <Ionicons name={iconName} size={size} color={color}/>
                        }
                    },
                    tabBarActiveTintColor: 'red',
                    tabBarShowLabel: true,
                    headerTitleAlign: "center",
                    headerRight: () => (
                        <Pressable style={styles.headerRight}>
                            <Ionicons name="mail" size={30} color="gray"/>
                        </Pressable>
                    ),
                })}
        >
            <Tab.Screen name="Text" component={TextComponent}/>
            <Tab.Screen name="TextInput" component={TextInputComponent}/>
            <Tab.Screen name="Button" component={ButtonComponent}/>
            <Tab.Screen
                name="Stack"
                component={StackComponent}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    focusedTab: {
        backgroundColor: 'red',
        borderRadius: 10,
        color: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        width: '150%',
    },
    headerRight: {
        paddingRight: 10,
    }
});
