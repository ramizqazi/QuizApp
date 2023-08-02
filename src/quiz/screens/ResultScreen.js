import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getRecentQuizeById } from '../../home/redux/selectors';

/* =============================================================================
<ResultScreen />
============================================================================= */
const ResultScreen = ({ route }) => {
  const id = route.params.id;
  const quize = useSelector(state => getRecentQuizeById(state, id));
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>
        Result :
      </Text>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.resultTxt}>Thanks for playing</Text>
        </View>
        <Text style={styles.result}>Result</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#043d72',
  },
  card: {
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    borderColor: '#9999',
    backgroundColor: '#fff',
  },
  cardHeader: {
    paddingBottom: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    marginBottom: 10,
    borderColor: '#999',
  },
  resultTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  result: {
    fontSize: 35,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 24,
  },
});

/* Export
============================================================================= */
export default ResultScreen;
