import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import React from "react";
import FlatListScreen from "./FlatList";
import FeatchData from "./FeatchData";

export type RootStackParamList = {
    Home: undefined;
    FlatListDemo: undefined;
    FeatchDataDemo: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="FlatListDemo" component={FlatListScreen}/>
            <Stack.Screen name="FeatchDataDemo" component={FeatchData}/>
        </Stack.Navigator>
    )
}

export default RootNavigator;