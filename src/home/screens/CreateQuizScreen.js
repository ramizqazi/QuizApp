import React from 'react';
import { useDispatch } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { useForm, useFieldArray } from 'react-hook-form';

import FormInput from '../components/FormInput';
import { addItem } from '../redux/actions';

/* =============================================================================
<CreateQuizScreen />
============================================================================= */
const CreateQuizScreen = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      flashcard: [{ question: { value: '' }, answer: { value: '' } }],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: 'flashcard',
  });

  const onSubmit = values => {
    dispatch(addItem(values));
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
              <Text>Flashcard {i + 1}:</Text>
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
