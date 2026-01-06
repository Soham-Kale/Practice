import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import React from "react";


export type RootStackParamList = {
    Home: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default RootNavigator;