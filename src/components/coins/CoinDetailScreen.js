import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Colors } from '../../libs';

const CoinDetailScreen = ({route, navigation}) => {

    const { coin } = route.params;

    useEffect(() => {
        navigation.setOptions({title: coin.symbol})
    }, []);

    const getSymbolIcon = (nameStr) => {
        const name = nameStr.toLowerCase().replaceAll(' ','-');
        return `https://c1.coinlore.com/img/25x25/${name}.png`
    }

    return(
        <View style={styles.container}>
            <View style={styles.subHeader}>
                <Image
                    style={styles.iconImg}
                    source={{uri: getSymbolIcon(coin.name)}}
                />
                <Text style={styles.titleText}>{coin.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.charade,
        flex: 1,
    },
    subHeader: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: 16,
        flexDirection: 'row',
    },
    iconImg: {
        width: 25,
        height: 25,
    },
    titleText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 8,
    }
})

export default CoinDetailScreen;