
import { Text, View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';


export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo label='Nome' value='Victor Hugo' colorValue='red'/>
    </View>
  );
}