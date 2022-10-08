import { StatusBar } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { Background } from './src/components/Background';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black
  })
  return (
    <Background>
      <Text>Hello NLW-E Sports - Test</Text>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      {fontsLoaded ? <Routes /> : <Loading/> }
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
