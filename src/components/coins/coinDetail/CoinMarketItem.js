import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Colors} from '../../../libs';

const CoinMarketItem = ({item}) => {
  const {name, price_usd} = item;

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.priceText}>{price_usd}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderColor: Colors.zircon,
    borderWidth: 1,
    padding: 16,
    margin: 8,
    alignItems: 'center',
  },
  nameText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  priceText: {
    color: '#fff',
  },
});

export default CoinMarketItem;
