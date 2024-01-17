import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Quotes = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Quotes for the day</Text>
      <FontAwesome5
        style={{
          marginBottom: '-5%',
        }}
        name="quote-left"
        size={20}
      />
      <Text style={styles.quotes}>
        We cannot solve problems with the kind of thinking we employed when we
        came up with them.
      </Text>
      <FontAwesome5
        style={{
          textAlign: 'right',
          marginTop: '-8%',
          marginBottom: '7%',
        }}
        name="quote-right"
        size={20}
      />
      <Text style={styles.authorText}>--Author name</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>New Quote</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Quotes;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    width: responsiveScreenWidth(90),
    padding: 20,
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: '10%',
  },
  quotes: {
    fontSize: 18,
    letterSpacing: 1.1,
    textAlign: 'center',
    color: '#000',
    lineHeight: 28,
    fontWeight: '400',
    marginBottom: '10%',
    marginHorizontal: '5%',
  },
  authorText: {
    fontSize: 17,
    textAlign: 'right',
    fontWeight: '500',
    fontStyle: 'italic',
    color: '#000',
  },
  button: {
    backgroundColor: '#5372F0',
    padding: 20,
    borderRadius: 30,
    marginVertical: '5%',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
