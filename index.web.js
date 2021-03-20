import './ReactPackage'; // registering all react native modules for web here
import {AppRegistry} from 'react-native';
import App from './AppNativeModules';

// way to initialise web and register component
AppRegistry.registerComponent('App', () => App);
// very similar to reactdom.render
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root'),
});
