
import { Text, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';
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

export function DuoCard({data}: Props) {
console.log('data', data)
  return (
    <View style={styles.container}>
      <DuoInfo label='Nome' value={data.name} />
      <DuoInfo label='Tempo de jogo' value={`${data.yearsPlaying} anos`} />
      <DuoInfo label='Disponibilidade' value={`${data.weekdays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}/>
      <DuoInfo label='Chamada de áudio' value={data.useVoiceChannel  ? 'Sim': 'Não'} colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT } />
      <TouchableOpacity 
      style={styles.}
      />
    </View>
  );
}