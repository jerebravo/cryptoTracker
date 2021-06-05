import React from 'react'
import { Text, View, StyleSheet, Image, Platform, Pressable } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import { ArrowDown, ArrowUp } from '../../assets'

const CoinsItem = ({item, onPress}) => {

    const getImgArrow = () => {
        let percentCero = 0;
        return item.percent_change_1h > percentCero ? ArrowUp : ArrowDown;
    }

    return(
        <Pressable
            onPress={onPress}
            style={styles.container}
        >
            <View style={styles.row}>
                <Text style={styles.symbolText}>{item.symbol}</Text>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.priceText}>{`USD${item.price_usd}`}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.percentText}>{item.percent_change_1h}</Text>
                <Image
                    source={getImgArrow()}
                    style={styles.imgIcon}
                />
            </View>
        </Pressable>
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