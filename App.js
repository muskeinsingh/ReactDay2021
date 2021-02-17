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
            style={{backgroundColor: 'brown', margin: 40}}
            onPress={() => {
              const randomQuoteIndex = Math.floor(
                Math.random() * quotes.length,
              );
              setInspirationQuoteIndex(randomQuoteIndex);
            }}>
            <Text
              style={{
                fontSize: 16,
                textAlign: 'center',
                margin: 12,
                color: 'white',
              }}>
              Inspire Me!
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

const Character = ({characterInfo}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
        height: 450,
      }}>
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{height: 100, width: 100, borderRadius: 40}}
      />
      <Text
        style={{
          margin: 40,
          fontWeight: '700',
          fontSize: 16,
          textAlign: 'center',
        }}>
        {characterInfo.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
