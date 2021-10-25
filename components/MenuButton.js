import React from 'react';
import {Pressable, Heading} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MenuButton = ({title, icon, onPress}) => {
  return (
    <Pressable
      android_ripple={{color: '#rgba(16, 185, 129, 0.1)'}}
      flexDirection="row"
      px="3"
      py="3"
      mx="3"
      alignItems="center"
      onPress={onPress}>
      <Ionicons name={icon} size={30} color="#10b981" />
      <Heading size="md" ml="4">
        {title}
      </Heading>
    </Pressable>
  );
};

export default MenuButton;
