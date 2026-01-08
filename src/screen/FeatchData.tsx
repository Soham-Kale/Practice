import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'

interface Post {
    id: number;
    title: string;
}

const FeatchData = () => {

    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

    const FeatchDataFunction = async() => {
        try{
            setLoading(true);

            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data: Post[] = await response.json(); 

            if(data) {
                setData(data);
                setLoading(false);
            } else {
                setData([]);
                setLoading(false);
            }
        }catch(e) {
            console.error(e);
        }
    }

    console.log(data);

    useEffect(() => {
        FeatchDataFunction();
    }, [])

    const handleRenderItem = ({item}: {item: Post}) => (
        <View style={styles.items}>
            <Text  style={styles.itemsTitle}>{item.title}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Featching API Data</Text>

            {
                loading ? (
                    <ActivityIndicator size={'large'} color={'#000fff'}/>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={handleRenderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                )
            }
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
    items: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "#9fb929ff"
    },
    itemsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
})

export default FeatchData;