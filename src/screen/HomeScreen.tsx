import { StackNavigationProp } from "@react-navigation/stack";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "./RootNavigator";

const topic = [
    {
        id: '1',
        title: "FlatList Demo",
        screen: "FlatListDemo"
    },
    {
        id: '2',
        title: "Featch API Demo",
        screen: "FeatchDataDemo"
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
                    <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    btn: {
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
        backgroundColor: "#c7b9b9ff"
    },
    title: {
        textAlign: 'center',    
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default HomeScreen;