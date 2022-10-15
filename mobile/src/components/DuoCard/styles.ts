import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 224,
    backgroundColor: THEME.COLORS.SHAPE,
    padding: 20,
    marginRight: 16,
    alignItems: 'center',
    borderRadius: 6
  },
  button: {
    flexDirection: 'row',
    width: '100%',
    height: 38,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6
  },
  buttonTitle: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.LG,
    marginLeft: 8

  }
});