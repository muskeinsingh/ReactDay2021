/* eslint-disable prettier/prettier */
import * as ReactNative from 'react-native';
import UUIDGenerator from './web/RNUUIDGenerator';
Object.defineProperty(ReactNative.NativeModules, 'RNUUIDGenerator', {
  value: UUIDGenerator,
});
