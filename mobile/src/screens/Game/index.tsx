import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import { TouchableOpacity, View, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background';
import { styles } from './styles';

import { IGameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading'
import { DuoCard } from '../../components/DuoCard'

export function Game() {
  const route = useRoute()
  const navigation = useNavigation()
  const game = route.params as IGameParams

  function handleGoBack(){
    navigation.goBack()
  }
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
        source={{uri: game.bannerUrl}}
        style={styles.cover}
        resizeMode='cover'
        />
        <Heading
          subtitle='Conecte-se e comece a jogar!'
          title={game.title} />
          <DuoCard/>
      </SafeAreaView>
    </Background>
  );
}