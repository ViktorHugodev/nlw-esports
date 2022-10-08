import { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background';
import { GameCard, IGameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';


export function Home() {
  const [games, setGames] = useState<IGameCard[]>([])
  const navigation = useNavigation()
  useEffect(() => {
    fetch('http://192.168.3.10:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])
  function handleOpenGame(){
    navigation.navigate('game')
  }
  return (
    <Background>


    <SafeAreaView style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading title='Find your duo!'
        subtitle='Select the game you want to play...' />
      <FlatList data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
        <GameCard 
        data={item} 
        onPress={handleOpenGame}
        />
        }
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />

    </SafeAreaView>
    </Background>
  );
}