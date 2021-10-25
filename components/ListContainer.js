import React from 'react';
import {Pressable, Box, Text, Image} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants';

const ListContainer = ({
  hTitle,
  eTitle,
  icon,
  onPress,
  iconImage,
  iconSize,
  tintColor,
}) => {
  return (
    <Pressable
      h={200}
      w={160}
      mt="6"
      borderRadius={10}
      bg="emerald.100"
      shadow="5"
      style={{shadowColor: '#064e3b'}}
      justifyContent="center"
      alignItems="center"
      onPress={onPress}>
      <Box
        size={20}
        rounded="full"
        justifyContent="center"
        alignItems="center"
        bg="emerald.400">
        {icon ? (
          <Ionicons name={icon} size={40} color={COLORS.white} />
        ) : (
          <Image
            source={iconImage}
            size={iconSize ? iconSize : 10}
            resizeMode="contain"
            alt="Doc"
            tintColor={tintColor ? tintColor : false}
          />
        )}
      </Box>
      <Text
        numberOfLines={1}
        w="90%"
        fontSize="md"
        textAlign="center"
        mt="3"
        mb="1">
        {hTitle}
      </Text>
      <Text numberOfLines={1} fontSize="md" w="90%" textAlign="center">
        {eTitle}
      </Text>
    </Pressable>
  );
};

export default ListContainer;
