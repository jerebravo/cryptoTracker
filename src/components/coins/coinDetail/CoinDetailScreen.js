import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SectionList,
  FlatList,
} from 'react-native';

import CoinMarketItem from './CoinMarketItem';
import {Colors, Http} from '../../../libs';

const CoinDetailScreen = ({route, navigation}) => {
  const {coin} = route.params;
  const [markets, setMarkets] = useState([]);

  const getMarkets = async coinId => {
    const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;
    const data = await Http.instance.get(url);
    setMarkets(data);
  };

  useEffect(() => {
    navigation.setOptions({title: coin.symbol});
    getMarkets(coin.id);
  }, []);

  const getSymbolIcon = nameStr => {
    if (nameStr) {
      const name = nameStr.toLowerCase().replace(/ /g, /-/g);
      return `https://c1.coinlore.com/img/25x25/${name}.png`;
    }
  };

  const getSection = () => {
    const sections = [
      {
        title: 'Market cap',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [coin.volume24],
      },
      {
        title: 'Change 24h',
        data: [coin.percent_change_24h],
      },
    ];

    return sections;
  };

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image
          style={styles.iconImg}
          source={{uri: getSymbolIcon(coin.name)}}
        />
        <Text style={styles.titleText}>{coin.name}</Text>
      </View>
      <SectionList
        style={styles.section}
        keyExtractor={item => item}
        sections={getSection()}
        renderItem={({item}) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        )}
      />

      <Text style={styles.marketTitle}>Markets</Text>
      <FlatList
        style={styles.list}
        horizontal
        data={markets}
        renderItem={({item}) => <CoinMarketItem item={item} />}
      />
    </View>
  );
};

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
  },
  section: {
    maxHeight: 220,
  },
  list: {
    maxHeight: 100,
    paddingLeft: 16,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 14,
  },
  sectionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  marketTitle:{
    color: '#fff',
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 16,
    fontWeight: 'bold',
  },
});

export default CoinDetailScreen;
