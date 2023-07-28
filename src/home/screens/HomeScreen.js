import React from 'react';
import { useSelector } from 'react-redux';
import { getItems } from '../redux/selectors';
import Feather from 'react-native-vector-icons/Feather';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import HomeHeader from '../components/HomeHeader';

/* =============================================================================
<HomeScreen />
============================================================================= */
const HomeScreen = () => {
  const items = useSelector(state => getItems(state));

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, i) => i}
        ListHeaderComponent={HomeHeader}
        ListEmptyComponent={HomeEmpty}
      />
    </View>
  );
};
const renderItem = ({ item }) => (
  <View key={item.id} style={styles.item}>
    <Text style={styles.itemTxt}>{item.name}</Text>
    <Feather name="chevron-right" color="#000" size={22} />
  </View>
);

const HomeEmpty = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyTxt}>No Quiz Found</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#043d72',
  },
  item: {
    marginTop: 20,
    borderRadius: 5,
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  itemTxt: {
    fontSize: 18,
    color: '#000',
  },
  emptyContainer: {
    paddingVertical: 30,
    alignItems: 'center',
  },
  emptyTxt: {
    fontSize: 18,
    color: '#fff',
  },
});

/* Export
============================================================================= */
export default HomeScreen;
