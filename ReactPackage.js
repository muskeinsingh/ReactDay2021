import * as ReactNative from 'react-native';
import RNUUIDGenerator from './web/RNUUIDGenerator';
console.log('registering native modules here');
Object.defineProperty(ReactNative.NativeModules, RNUUIDGenerator.getName(), {
  value: RNUUIDGenerator,
});
