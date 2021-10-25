import React from 'react';
import {Box, Text, Pressable, Divider, Image} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const ServiceButton = ({title, onPress, icon, iconSize, imageIcon}) => {
  return (
    <Pressable
      borderWidth="1"
      borderColor="emerald.500"
      rounded="md"
      alignItems="center"
      mx="5"
      mt="5"
      onPress={onPress}>
      <Box p="3" flexDirection="row" alignItems="center" width="full">
        <Box
          bg="emerald.100"
          rounded="md"
          w="12"
          h="12"
          alignItems="center"
          justifyContent="center">
          {icon ? (
            <FontAwesome name={icon} size={iconSize} color="#10b981" />
          ) : (
            <Image
              source={imageIcon}
              size={iconSize}
              tintColor="#10b981"
              alt="image"
              resizeMode="contain"
            />
          )}
        </Box>
        <Divider orientation="vertical" h="12" ml="3" bg="emerald.500" />
        <Text color="emerald.500" fontSize="lg" textAlign="center" ml="5">
          {title}
        </Text>
      </Box>
    </Pressable>
  );
};

export default ServiceButton;
