import * as ReactNative from 'react-native';
import RNUUIDGenerator from './web/RNUUIDGenerator';
Object.defineProperty(ReactNative.NativeModules, RNUUIDGenerator.getName(), {
  value: RNUUIDGenerator,
});
