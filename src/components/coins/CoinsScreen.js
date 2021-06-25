import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';

import {Http, Colors} from '../../libs';
import CoinsItem from './CoinsItem';
import CoinSearch from './coinDetail/CoinSearch';

const CoinsScreen = props => {
  const [coins, setCoins] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCoins()
  }, []);

  const onPress = coin => {
    props.navigation.navigate('CoinDetail', {coin});
  };

  const handleSearch = (query) => {
    const coinsFilter = allCoins.filter((coin) => {
        return coin.name.toLowerCase().includes(query.toLowerCase()) ||
               coin.symbol.toLowerCase().includes(query.toLowerCase())
    })

    setCoins(coinsFilter)
  }

  const getCoins = async () => {
    setLoading(true);
    const resp = await Http.instance.get('https://api.coinlore.net/api/tickers/')
    setCoins(resp?.data || []);
    setAllCoins(resp?.data || []);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <CoinSearch
          onChange={handleSearch}
      />
      {loading ? (
        <ActivityIndicator color="white" size="large" style={styles.loader} />
      ) : (
        <FlatList
          data={coins}
          renderItem={({item}) => (
            <CoinsItem item={item} onPress={() => onPress(item)} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  loader: {
    marginTop: 100,
  },
});

export default CoinsScreen;
