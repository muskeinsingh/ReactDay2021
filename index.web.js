import './ReactPackage';
import {AppRegistry} from 'react-native';
// import App from './App';
import App from './AppNativeModules';
AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root'),
});
