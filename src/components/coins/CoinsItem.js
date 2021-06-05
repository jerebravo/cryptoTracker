import React from 'react'
import { Text, View, StyleSheet, Image, Platform } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import { ArrowDown, ArrowUp } from '../../assets'

const CoinsItem = ({name, symbol, percent_change_1h, price_usd}) => {

    const getImgArrow = () => {
        let percentCero = 0;
        return percent_change_1h > percentCero ? ArrowUp : ArrowDown;
    }

    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.symbolText}>{symbol}</Text>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.priceText}>{`USD${price_usd}`}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.percentText}>{percent_change_1h}</Text>
                <Image
                    source={getImgArrow()}
                    style={styles.imgIcon}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomColor: Colors.zircon,
        borderBottomWidth: 1,
        marginLeft: Platform.OS === 'ios' ? 16 : 0,
    },
    row: {
        flexDirection: 'row'
    },
    symbolText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 12
    },
    nameText:{
        color: '#fff',
        fontSize: 14,
        marginRight: 16
    },
    priceText:{
        color: '#fff',
        fontSize: 14
    },
    percentText:{
        color: '#fff',
        fontSize: 12,
        marginRight: 8,
    },
    imgIcon:{
        width: 22,
        height: 22
    }
})

export default CoinsItem;