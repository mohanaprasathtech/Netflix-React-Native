import {StyleSheet, Text, TouchableOpacity, View,Linking} from 'react-native';
import React, {useEffect, useState} from 'react';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import list from './Data';
import Tts from 'react-native-tts';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';

Tts.setDefaultLanguage('en-GB');
Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
Tts.setDefaultRate(0.5);
Tts.setDefaultPitch(1.1);

const Quotes = () => {
  const [index, setIndex] = useState(0);
  const [isSpeaking, setisSpeaking] = useState(false);

  const handleChange = () => {
    const max = 10;
    const val = Math.floor(Math.random() * max) + 1;
    setIndex(val);
  };

  const speak = () => {
    Tts.stop();
    Tts.speak(list[index].quotes);
    Tts.addEventListener('tts-start', (event) => setisSpeaking(true));
    Tts.addEventListener('tts-finish', (event) => setisSpeaking(false));
  };

  const copyClipboard = () => {
    Clipboard.setString(list[index].quotes);
    Snackbar.show({
      text: 'Quote copied',
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  const tweet=()=>{
    const url = 'https://twitter.com/intent/tweet?text=' + list[index].quotes
    Linking.openURL(url)
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Quotes for the day</Text>
      <FontAwesome5 style={styles.toparrow} name="quote-left" size={20} />

      <Text style={styles.quotes}>{list[index].quotes}</Text>

      <FontAwesome5 style={styles.downarrow} name="quote-right" size={20} />
      <Text style={styles.authorText}>— {list[index].author}</Text>
      <TouchableOpacity onPress={handleChange} style={styles.button}>
        <Text style={styles.buttonText}>New Quote</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={speak}
          style={[
            styles.buttonArea,
            {backgroundColor: isSpeaking ? '#5372F0' : '#fff'},
          ]}>
          <FontAwesome
            name="volume-up"
            size={22}
            color={isSpeaking ? '#fff' : '#5372F0'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={copyClipboard} style={styles.buttonArea}>
          <FontAwesome5 name="copy" size={22} color={'#5372F0'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={tweet} style={styles.buttonArea}>
          <FontAwesome name="twitter" size={22} color={'#5372F0'} />
        </TouchableOpacity>
      </View>
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
    marginHorizontal: '7%',
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
  toparrow: {
    marginBottom: '-5%',
  },
  downarrow: {
    textAlign: 'right',
    marginTop: '-9%',
    marginBottom: '7%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonArea: {
    borderWidth: 2,
    padding: 20,
    borderRadius: 50,
    marginTop: '2%',
    borderColor: '#5372F0',
  },
});
