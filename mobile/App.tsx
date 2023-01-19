import './src/lib/dayjs';

import { StatusBar } from 'react-native';

import { useFonts} from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({})

    return (
      <>
        <Home />
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      </>
    );
  }