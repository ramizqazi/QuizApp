import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  Text,
  View,
  Button,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';

import { getQuizeById } from '../../home/redux/selectors';

/* =============================================================================
<CreateQuizScreen />
============================================================================= */
const CreateQuizScreen = ({ route, navigation }) => {
  const id = route.params.id;
  const quiz = useSelector(state => getQuizeById(state, id));
  console.log(quiz);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text style={styles.titleTxt}>{quiz?.name}</Text>
          <Text
            style={
              styles.descTxt
            }>{`Total number of cards: ${quiz?.flashcard.length}`}</Text>
        </View>
        <View style={styles.btnsContainer}>
          <Button title="Start Quiz" color="#ae5eff" />
        </View>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => navigation.navigate('CreateQuiz', { id: id })}>
          <Feather name="edit" size={14} color="#fff" />
          <Text style={styles.editTxt}>Edit</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#043d72',
  },
  content: {
    flexGrow: 1,
    rowGap: 15,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 35,
  },
  titleTxt: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
  },
  descTxt: {
    fontSize: 14,
    color: '#000',
  },
  btnsContainer: {
    paddingHorizontal: 80,
    paddingVertical: 10,
  },
  editBtn: {
    columnGap: 10,
    borderRadius: 4,
    paddingVertical: 7,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
    backgroundColor: '#006D01',
  },
  editTxt: {
    fontSize: 14,
    color: '#fff',
  },
});

/* Export
============================================================================= */
export default CreateQuizScreen;
