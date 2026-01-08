import { FlatList, StyleSheet, Text, View } from "react-native";

const FLAT_LIST = Array.from({ length: 50 }, (_, index) => ({
    id: index.toString(),
    title: `Item ${index + 1}`
}))

const FlatListScreen = () => {

    const handleRenderItem = ({item}: {item: {id: string, title:string}}) => (
        <View>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    )

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Flast List Screen</Text>

            <FlatList
                data={FLAT_LIST}
                renderItem={handleRenderItem}
                keyExtractor={item => item.id}
            />
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
        fontWeight: 'bold'
    },
    title: {
        fontSize: 20,
    }
})

export default FlatListScreen;