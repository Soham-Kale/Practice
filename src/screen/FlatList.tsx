import { StyleSheet, Text, View } from "react-native";


const FlatList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>FlatList Demo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
    }
})

export default FlatList;