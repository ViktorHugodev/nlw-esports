import { THEME } from './../../theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    marginTop: 28,
  },
  logo: {

  },
  right: {
    width: 20,
    height: 20
  },
  cover: {
    width: 372,
    height: 192,
    borderRadius: 8,
    marginTop: 32,
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start',
  },
  containerList: {
    width: '100%',
  },
  emptyList: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  emptyListContent:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  } 
});