import React from 'react';
import {ImageBackground} from 'react-native';
import {Button} from 'native-base';
import BackgroundImage from '../../../assets/images/background.png';

const StartScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={BackgroundImage}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        rounded="md"
        w="40"
        h="50"
        _text={{color: 'white', bold: true}}
        bgColor="emerald.300"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        CONTINUE TO APP
      </Button>
    </ImageBackground>
  );
};

export default StartScreen;
