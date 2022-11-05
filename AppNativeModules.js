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
  NativeModules,
} from 'react-native';
import quotes from './Quotes';
const App = () => {
  const [inspringQuoteIndex, setInspirationQuoteIndex] = useState(0);
  const [uuid, setUUID] = useState(null);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Character characterInfo={quotes[inspringQuoteIndex]} />
        <Text style={styles.darkText}>{uuid}</Text>
        <Buttons
          setUUID={setUUID}
          setInspirationQuoteIndex={setInspirationQuoteIndex}
        />
      </SafeAreaView>
    </>
  );
};

const Buttons = ({setUUID, setInspirationQuoteIndex}) => {
  return (
    <View style={{margin: 40, borderRadius: 20}}>
      <Pressable
        android_ripple={{radius: 200}}
        style={styles.button}
        onPress={() => {
          const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
          setInspirationQuoteIndex(randomQuoteIndex);
        }}>
        <Text style={styles.lightText}>Inspire all of us @Pesto!</Text>
      </Pressable>
      <Pressable
        android_ripple={{radius: 200}}
        style={styles.button}
        onPress={() => {
          NativeModules.RNUUIDGenerator.getRandomUUID(function (randomUUID) {
            setUUID(randomUUID);
          });
        }}>
        <Text style={styles.lightText}>Generate UUID</Text>
      </Pressable>
    </View>
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
    margin: 12,
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
  image: {height: 100, width: 100, borderRadius: 40, margin: 12},
  characterView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {backgroundColor: 'brown', margin: 40},
});

export default App;
