import { AppRegistry } from 'react-native';
import App from './App'; // Your root component, usually defined in App.js

// The first argument of 'registerComponent' is the app name (should match the 'name' field in package.json)
// The second argument is a function that returns the root component of your app
AppRegistry.registerComponent('Netclan_Explorer', () => App);