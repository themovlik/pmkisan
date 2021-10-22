import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTS} from '../constants';
const Button = ({title, icon, onPress, bgColor}) => {
  return (
    <TouchableOpacity
      style={{...styles.button, backgroundColor: bgColor}}
      onPress={onPress}>
      <FontAwesome
        name={icon}
        size={14}
        color={COLORS.white}
        style={styles.logo}
      />
      <Text style={{...FONTS.buttonText, color: COLORS.white}}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: 240,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginBottom: 15,
  },
  logo: {
    position: 'absolute',
    left: 20,
  },
});
