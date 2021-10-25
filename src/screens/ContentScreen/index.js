import React, {useEffect, useState} from 'react';
import {Box, HStack, Pressable, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../constants';
import {WebView} from 'react-native-webview';

const ContentScreen = ({navigation, route}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    let data = route.params;
    setData(data);
  }, []);

  return (
    <Box flex="1">
      <HStack alignItems="center" bg="emerald.500">
        <Pressable p="4" onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-left" size={30} color={COLORS.white} />
        </Pressable>
        <Text fontWeight="medium" fontSize="lg" color={COLORS.white}>
          {data.hTitle}
        </Text>
      </HStack>
      <WebView source={{uri: 'https://reactnative.dev/'}} />
    </Box>
  );
};

export default ContentScreen;
