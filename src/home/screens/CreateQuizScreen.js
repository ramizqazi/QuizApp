import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import {
  View,
  Text,
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { useForm, useFieldArray } from 'react-hook-form';

import FormInput from '../components/FormInput';
import { addQuize } from '../redux/actions';
import { getQuizeById } from '../redux/selectors';

/* =============================================================================
<CreateQuizScreen />
============================================================================= */
const CreateQuizScreen = ({ route }) => {
  const id = route.params?.id;
  const quiz = useSelector(state => getQuizeById(state, id));

  const dispatch = useDispatch();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: quiz
      ? quiz
      : {
          name: '',
          flashcard: [{ question: { value: '' }, answer: { value: '' } }],
        },
  });

  // SET DEFAULT VALUE OF QUIZ IF ITS THERE
  useEffect(() => {
    if (quiz) {
      reset(quiz);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quiz]);

  const { fields, append } = useFieldArray({
    control,
    name: 'flashcard',
  });

  const onSubmit = values => {
    const newItemId = 'id' + Math.random().toString(16).slice(2);

    if (values.name) {
      dispatch(addQuize({ ...values, id: id ? id : newItemId }));
    } else {
      Alert.alert('Alert', 'Please fill the form');
    }
    reset();
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.settingsBtn}>
          <Feather name="settings" color="#fff" size={22} />
        </TouchableOpacity>
        <FormInput placeholder="Enter Set Name" name="name" control={control} />
        <View style={styles.dynamicFormContainer}>
          {fields.map((f, i) => (
            <View key={f.id} style={styles.formItem}>
              <Text style={{ color: 'white' }}>Flashcar {i + 1}:</Text>
              <FormInput
                placeholder="Question"
                name={`flashcard.${i}.question.value`}
                control={control}
              />
              <FormInput
                placeholder="Answer"
                name={`flashcard.${i}.answer.value`}
                control={control}
              />
            </View>
          ))}
        </View>
        <Button
          title="Add Flashcard"
          onPress={() =>
            append({ question: { value: '' }, answer: { value: '' } })
          }
        />
      </ScrollView>
      <View style={styles.btn}>
        <Button title="Save" color="#ae5eff" onPress={handleSubmit(onSubmit)} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#043d72',
    justifyContent: 'space-between',
  },
  settingsBtn: {
    alignSelf: 'flex-end',
    paddingLeft: 20,
    paddingVertical: 20,
  },
  titleTxt: {
    color: '#fff',
    fontSize: 24,
  },
  dynamicFormContainer: {
    rowGap: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  formItem: {
    rowGap: 10,
  },
  btn: {
    paddingHorizontal: 80,
    paddingVertical: 10,
  },
});

/* Export
============================================================================= */
export default CreateQuizScreen;
