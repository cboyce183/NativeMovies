import { AppRegistry } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import App from './App';

const Root = createStackNavigator({App});
const Start = createAppContainer(Root);

AppRegistry.registerComponent("NativeMovies", () => Start);
