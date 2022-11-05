/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
} from 'react-native';
import quotes from './Quotes';
const App = () => {
  const [inspringQuoteIndex, setInspirationQuoteIndex] = useState(0);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Character characterInfo={quotes[inspringQuoteIndex]} />
        <View style={{margin: 40, borderRadius: 20}}>
          <Pressable
            android_ripple={{radius: 200}}
            style={styles.button}
            onPress={() => {
              const randomQuoteIndex = Math.floor(
                Math.random() * quotes.length,
              );
              setInspirationQuoteIndex(randomQuoteIndex);
            }}>
            <Text style={styles.lightText}>Inspire all of us @Pesto!</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

const Character = ({characterInfo}) => {
  return (
    <View style={styles.characterView}>
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={styles.image}
      />
      <Text style={styles.darkText}>{characterInfo.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  darkText: {
    margin: 20,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  lightText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 12,
    color: 'white',
  },
  image: {height: 100, width: 100, borderRadius: 40},
  characterView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    height: 200,
  },
  button: {backgroundColor: 'brown', margin: 40},
});

export default App;
