import React from 'react';
import { useSelector } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import { StyleSheet, Text, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { getQuizeById } from '../redux/selectors';

/* =============================================================================
<HomeQuizItem />
============================================================================= */
const HomeQuizItem = ({ id }) => {
  const navigation = useNavigation();
  const quiz = useSelector(state => getQuizeById(state, id));
  console.log(id);
  return (
    <Pressable
      style={styles.item}
      onPress={() =>
        navigation.navigate('QuizeStack', {
          screen: 'QuizeStart',
          params: { id: quiz?.id },
        })
      }>
      <Text style={styles.itemTxt}>{quiz?.name}</Text>
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
