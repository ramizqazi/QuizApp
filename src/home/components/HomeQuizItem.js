import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { StyleSheet, Text, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';

/* =============================================================================
<HomeQuizItem />
============================================================================= */
const HomeQuizItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.item}
      onPress={() => navigation.navigate('Quiz', { id: item.id })}>
      <Text style={styles.itemTxt}>{item.name}</Text>
      <Feather name="chevron-right" color="#000" size={22} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
});

/* Export
============================================================================= */
export default HomeQuizItem;
