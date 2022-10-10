import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import { TouchableOpacity, View, Image, FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background';
import { styles } from './styles';
import { useEffect, useState } from 'react'

import { IGameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading'
import { DuoCard } from '../../components/DuoCard'

interface IGame {
  hourEnd: string
  hourStart: string
  id: string
  useVoiceChannel: boolean
  name: string
  weekdays: string[]
  yearsPlaying: string
}
interface Props {
  data: IGame
}
export function Game({ data }: Props) {
  const route = useRoute()
  const navigation = useNavigation()
  const game = route.params as IGameParams
  const [gameSelected, setGameSelected] = useState<IGame[]>([])
  function handleGoBack() {
    navigation.goBack()
  }
  useEffect(() => {
    fetch(`http://192.168.3.10:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setGameSelected(data))
  }, [])
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image
            style={styles.logo}
            source={logoImg}
          />
          <View style={styles.right} />
        </View>
        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode='cover'
        />
        <Heading
          subtitle='Conecte-se e comece a jogar!'
          title={game.title} />
        <FlatList
          data={gameSelected}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (

            <DuoCard data={item} />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}