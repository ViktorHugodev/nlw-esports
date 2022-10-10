import React from 'react';
import { View, Text, ColorValue } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface IDuoInfo {
  label: string
  value: string
  colorValue?: ColorValue
}
export function DuoInfo({label, value, colorValue = THEME.COLORS.TEXT}:IDuoInfo) {
  return (
    <View style={styles.container}>

      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, {color: colorValue}]}>{value}</Text>
    </View>
  );
}