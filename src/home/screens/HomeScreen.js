import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import HomeHeader from '../components/HomeHeader';
import HomeQuizItem from '../components/HomeQuizItem';

import { getRecentlyusedQuiz } from '../redux/selectors';

/* =============================================================================
<HomeScreen />
============================================================================= */
const HomeScreen = () => {
  const recentlyUsed = useSelector(state => getRecentlyusedQuiz(state));

  return (
    <View style={styles.container}>
      <FlatList
        data={recentlyUsed}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={HomeHeader}
        ListEmptyComponent={HomeEmpty}
      />
    </View>
  );
};
const renderItem = ({ item }) => <HomeQuizItem key={item.id} id={item.id} />;

const HomeEmpty = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyTxt}>No Recently Quiz Found</Text>
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
