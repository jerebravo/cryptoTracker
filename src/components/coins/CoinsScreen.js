import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Http from 'cryptoTracker/src/libs/http';
import CoinsItem from './CoinsItem';

const CoinsScreen = () => {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(async () => {
        setLoading(true)
        Http.instance.get("https://api.coinlore.net/api/tickers/").then((resp) => {
            setCoins(resp?.data || [])
            setLoading(false)
        })
    }, []);

    return(
        <View style={styles.container}>
            {
                loading ?
                    <ActivityIndicator
                        color="blue"
                        size="large"
                        style={styles.loader}
                    />
                        :
                    <FlatList
                        data={coins}
                        renderItem={({item}) => <CoinsItem {...item} />}
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    titleText: {
        color: "black",
        textAlign: "center"
    },
    btn: {
        padding: 8,
        backgroundColor: "blue",
        borderRadius: 8,
        margin: 16
    },
    btnText: {
        color: "#fff",
        textAlign: 'center'
    },
    loader: {
        marginTop: 100
    }
})

export default CoinsScreen;