import { StackNavigationProp } from "@react-navigation/stack";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "./RootNavigator";

const topic = [
    {
        id: '1',
        title: "Home Screen",
        screen: "HomeScreen",
    },
]


type HomeScreenProps = StackNavigationProp<RootStackParamList, 'Home'>

type Props = {
    navigation: HomeScreenProps;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return <View style={styles.container}>
        <FlatList
            data={topic}
            renderItem={({item}) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen as keyof RootStackParamList)}
                    style={styles.btn}
                >
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
})

export default HomeScreen;