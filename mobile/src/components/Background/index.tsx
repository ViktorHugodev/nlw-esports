
import { ReactNode } from 'react';
import { ImageBackground } from 'react-native';
import backgroundImg from '../../assets/background-galaxy.png'
import { styles } from './styles';

interface IBackground {
  children: ReactNode
}

export function Background({ children }: IBackground) {
  return (
    <ImageBackground
      source={backgroundImg}
      defaultSource={backgroundImg}
      style={styles.container}>
      {children}
    </ImageBackground>
  );
}