import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import RootNavigator from './src/screen/RootNavigator';

function App() {

  return (
    <SafeAreaProvider>
      <RootNavigator/>
    </SafeAreaProvider>
  );
}

export default App;
