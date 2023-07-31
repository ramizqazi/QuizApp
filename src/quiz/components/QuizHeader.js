import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

/* =============================================================================
<QuizHeader />
============================================================================= */
const QuizHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingsBtn}>
        <Feather name="settings" color="#fff" size={22} />
      </TouchableOpacity>
      <Text style={styles.titleTxt}>Saved Quizes:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

/* Export
============================================================================= */
export default QuizHeader;
