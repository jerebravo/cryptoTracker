import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const CoinsItem = ({name, symbol}) => {
    return(
        <View>
            <Text>{name}</Text>
            <Text>{symbol}</Text>
        </View>
    )
}

export default CoinsItem;