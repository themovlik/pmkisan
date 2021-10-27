import React from 'react';
import {Box, Button} from 'native-base';

const StartScreen = ({navigation}) => {
  return (
    <Box flex="1" bg="emerald.100" justifyContent="center" alignItems="center">
      <Button
        rounded="md"
        w="40"
        h="50"
        _text={{color: 'white', fontWeight: 'bold'}}
        bgColor="emerald.500"
        onPress={() => {
          navigation.replace('HomeScreen');
        }}>
        CONTINUE TO APP
      </Button>
    </Box>
  );
};

export default StartScreen;
