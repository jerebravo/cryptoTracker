import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import { Http, Colors } from '../../libs';
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
                        color="white"
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
        backgroundColor: Colors.charade,
    },
    loader: {
        marginTop: 100
    }
})

export default CoinsScreen;