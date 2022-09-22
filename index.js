/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { registerRootComponent } from "expo";

import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import { store } from './src/redux/store';

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

if (Platform.OS == "android") {
    registerRootComponent(RNRedux);
  } else {
    AppRegistry.registerComponent(appName, () => RNRedux);
  }
// AppRegistry.registerComponent(appName, () => RNRedux);