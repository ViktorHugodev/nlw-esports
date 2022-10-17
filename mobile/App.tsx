import { useEffect, useRef } from 'react'
import { StatusBar } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { Background } from './src/components/Background';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { Subscription } from 'expo-modules-core'

import './src/service/notificationConfigs'
import { getPushNotificationToken } from './src/service/getPushNotificationToken'
import *  as Notifications from 'expo-notifications'

export default function App() {

  const getNotificationListener = useRef<Subscription>()
  const responseNotificationListener = useRef<Subscription>()

  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black
  })
  useEffect(() => {
    getPushNotificationToken()
  }, [])
  useEffect(() => {
    getNotificationListener.current = Notifications.addNotificationReceivedListener(notification => {

    })
    responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(notification => {

    })
    return () => {
      if (getNotificationListener.current && responseNotificationListener.current) {
        Notifications.removeNotificationSubscription(getNotificationListener.current)
        Notifications.removeNotificationSubscription(responseNotificationListener.current)
      }
    }
  }, [])
  return (
    <Background>
      <Text>Hello NLW-E Sports - Test</Text>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
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
