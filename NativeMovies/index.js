import { AppRegistry } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import App from './App';
import Viewer from './components/viewer/viewer';

const Root = createStackNavigator({App, Viewer});
const Start = createAppContainer(Root);

AppRegistry.registerComponent("NativeMovies", () => Start);
