import React, {useEffect, useState, useRef} from 'react';
import {BackHandler, ActivityIndicator} from 'react-native';
import {Box, HStack, Pressable, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../../constants';
import {WebView} from 'react-native-webview';

const ContentScreen = ({navigation, route}) => {
  const [isBack, setIsBack] = useState(false);
  const title = route.params.hTitle;
  const link = route.params.link;
  const ref = useRef();

  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     BackHandler.addEventListener('hardwareBackPress', handleBackPressed);

  //     return () => {
  //       BackHandler.removeEventListener('hardwareBackPress', handleBackPressed);
  //     };
  //   }
  // }, []);

  const handleBackPressed = () => {
    if (isBack) {
      ref.current.goBack();
      return true;
    }
    return false;
  };

  return (
    <Box flex="1">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="emerald.500">
        <Box flexDirection="row" alignItems="center">
          <Pressable p="4" onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-left" size={30} color={COLORS.white} />
          </Pressable>
          <Text
            numberOfLines={1}
            fontWeight="medium"
            fontSize="lg"
            color={COLORS.white}>
            {title}
          </Text>
        </Box>
        <Pressable
          android_ripple={{
            color: 'rgba(0,0,0,0.1)',
            borderless: true,
            radius: 25,
          }}
          p="4"
          onPress={() => ref.current.reload()}>
          <MaterialIcons name="refresh" size={30} color={COLORS.white} />
        </Pressable>
      </HStack>
      <WebView
        ref={ref}
        source={{uri: link}}
        domStorageEnabled={true}
        startInLoadingState={true}
        allowsBackForwardNavigationGestures={true}
        renderLoading={() => (
          <Box flex="1" alignItems="center">
            <ActivityIndicator size="large" color="#10b981" />
          </Box>
        )}
        onLoadProgress={event => setIsBack(event.nativeEvent.canGoBack)}
      />
      {isBack && (
        <Pressable
          android_ripple={{
            color: 'rgba(0,0,0,0.1)',
            borderless: false,
          }}
          p="2"
          position="absolute"
          bottom="6"
          right="5"
          rounded="full"
          bg="emerald.500"
          onPress={() => ref.current.goBack()}>
          <Box flexDirection="row" alignItems="center">
            <Entypo name="chevron-thin-left" size={25} color={COLORS.white} />
            <Text pr="2" color={COLORS.white}>
              Go Back
            </Text>
          </Box>
        </Pressable>
      )}
    </Box>
  );
};

export default ContentScreen;
