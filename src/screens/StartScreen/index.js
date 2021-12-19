import React, {useEffect, useState} from 'react';
import {Box, Button, Heading, Modal, StatusBar, Text} from 'native-base';
import {Linking} from 'react-native'
import {BannerView} from 'react-native-fbads';
import {appId} from '../../../constants';
import VersionCheck from 'react-native-version-check';

const StartScreen = ({navigation}) => {
  const [data, setData] = useState('');
  useEffect(() => {
    needUpdate();
  }, []);

  const needUpdate = () => {
    VersionCheck.needUpdate().then(res => {
      setData(res);
    });
  };

  const renderUpdateModal = () => {
    return (
      <Modal flex="1" backdropVisible={true} isOpen={data.isNeeded}>
        <Box w="80%" h="210" bg="white" borderRadius="xl">
          <Heading alignSelf="center" my="2" color="emerald.900">
            New Update Available
          </Heading>
          <Box height="0.5" bg="coolGray.300" />
          <Text mt="2" fontSize="md" mx="6">
            New update of PM Kisan Yojana is available. Would you like to update
            it now?
          </Text>
          <Button
            rounded="md"
            w="40"
            h="50"
            mt="3"
            alignSelf="center"
            _text={{color: 'white', fontWeight: 'bold'}}
            bgColor="emerald.500"
            onPress={() => {
              Linking.openURL(data.storeUrl);
            }}>
            UPDATE NOW
          </Button>
        </Box>
      </Modal>
    );
  };

  return (
    <>
      <StatusBar backgroundColor="#d1fae5" barStyle="dark-content" />
      <Box
        flex="1"
        bg="emerald.100"
        justifyContent="center"
        alignItems="center">
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
      <Box>
        <BannerView
          placementId={appId.bottom_banner}
          type="standard"
          onPress={() => console.log('click')}
          onLoad={() => console.log('loaded')}
          onError={err => console.log('error', err.nativeEvent)}
        />
      </Box>
      {renderUpdateModal()}
    </>
  );
};

export default StartScreen;
