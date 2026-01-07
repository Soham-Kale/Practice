import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import React from "react";
import FlatList from "./FlatList";


export type RootStackParamList = {
    Home: undefined;
    FlatListDemo: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="FlatListDemo" component={FlatList}/>
        </Stack.Navigator>
    )
}

export default RootNavigator;