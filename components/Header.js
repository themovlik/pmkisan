import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {COLORS, FONTS} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Header = ({
  title,
  onLeftPress,
  onRightPress,
  leftIcon,
  rightIcon,
  navigation,
  style,
  color,
  backgroundColor,
  iconFamily,
  iconSize,
}) => {
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <TouchableOpacity style={{flex: 1}} onPress={onLeftPress}>
        <Ionicons
          name={leftIcon}
          size={25}
          style={styles.icons}
          color={color}
        />
      </TouchableOpacity>
      <Text style={[styles.headerText, {color: color}]}>{title}</Text>
      {iconFamily === 'Feather' ? (
        <TouchableOpacity
          style={{flex: 1, alignItems: 'flex-end'}}
          onPress={onRightPress}>
          <Feather
            name={rightIcon}
            size={25}
            style={styles.icons}
            color={color}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{flex: 1, alignItems: 'flex-end'}}
          onPress={onRightPress}>
          <Ionicons
            name={rightIcon}
            size={25}
            style={styles.icons}
            color={color}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  icons: {
    marginHorizontal: 20,
  },
  headerText: {
    textTransform: 'uppercase',
    ...FONTS.buttonText,
    alignSelf: 'center',
  },
});
