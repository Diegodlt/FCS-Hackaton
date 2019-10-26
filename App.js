import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import First from './components/First'

const InitialNavigator = createSwitchNavigator({
  Home: {screen: HomeScreen},
  First: {screen: First}

});

export default createAppContainer(InitialNavigator);
