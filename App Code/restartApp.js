import { AppState, AppRegistry } from 'react-native';

const restartApp = () => {
  AppState.restart(); // Request app restart
};

const handleAppStateChange = (nextAppState) => {
  if (AppState.currentState.match(/inactive|background/) && nextAppState === 'active') {
    // Force restart the app
    AppRegistry.unmountApplicationComponentAtRootTag();
    AppRegistry.runApplication('MyApp', { initialProps: {}, rootTag: document.getElementById('root') });
  }
};

// Subscribe to AppState change events
AppState.addEventListener('change', handleAppStateChange);

export default restartApp;
