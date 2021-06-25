import React, {useState} from 'react'
import {View, TextInput, StyleSheet, Platform} from 'react-native'

import {Colors} from '../../../libs'

const CoinSearch = (props) => {
    const {onChange} = props

    const [query, setQuery] = useState('')

    const handleText = (query) =>{
        setQuery(query)
        if(onChange){
            onChange(query)
        }
    }

    return (
        <View>
            <TextInput
                style={[
                    styles.textInput,
                    Platform.OS === 'ios' ?
                        styles.textInputIOS :
                        styles.textInputAndroid
                ]}
                onChangeText={handleText}
                value={query}
                placeholder='Search coin'
                placeholderTextColor='#fff'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 46,
        backgroundColor: Colors.charade,
        paddingLeft: 16,
        color: '#fff'
    },
    textInputAndroid: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.zircon
    },
    textInputIOS: {
        margin: 8,
        borderRadius: 8,
    }
})

export default CoinSearch