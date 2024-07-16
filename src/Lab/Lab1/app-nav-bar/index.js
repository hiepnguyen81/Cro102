import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TS, ms} from '../../../themes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faGear} from '@fortawesome/free-solid-svg-icons';
import {AppTouchableOpacity} from '../app-touchable-opacity';

const AppNavBar = ({title, onPress}) => {
  return (
    <View style={styles.headerContainer}>
      <AppTouchableOpacity style={styles.buttonWrapper}>
        <FontAwesomeIcon icon={faChevronLeft} size={ms(20)} />
      </AppTouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <AppTouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
        <FontAwesomeIcon icon={faGear} size={ms(20)} />
      </AppTouchableOpacity>
    </View>
  );
};
export default AppNavBar;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: ms(60),
    justifyContent: 'space-between',
  },
  headerTitle: {
    ...TS.textXlBold,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    padding: ms(15),
    justifyContent: 'center',
  },
});
