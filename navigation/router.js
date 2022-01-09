import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Box, Heading, Image} from 'native-base';

// Import Screens
// import StartScreen from '../src/screens/StartScreen';
import HomeScreen from '../src/screens/HomeScreen';
import ServiceScreen from '../src/screens/ServiceScreen';
import ContentScreen from '../src/screens/ContentScreen';

import MenuButton from '../components/MenuButton';
import {COLORS} from '../constants';
import Modi from '../assets/images/modi.png';
import {Linking, Share} from 'react-native';

// Navigators
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const shareOptions = {
  title: 'अपने दोस्तो को शेयर करे',
  message:
    'PM आवास योजना और सभी योजना इस एक ही ऐप्प में हर योजना की पूरी जानकारी भी अभी डाउनलोड करें \n https://play.google.com/store/apps/details?id=com.pmkisan',
  url: 'https://play.google.com/store/apps/details?id=com.pmkisan',
  subject: '',
};

const CustomDrawerContent = props => {
  const onShare = () => Share.share(shareOptions);
  return (
    <DrawerContentScrollView {...props}>
      <Box bgColor="emerald.500" pt="5" mt="-2" h="189" alignItems="center">
        <Heading size="md" color={COLORS.white}>
          PM-Kisan Yojana
        </Heading>
        <Image source={Modi} alt="Modi image" size="xl" mt="4" />
      </Box>
      <Box h="md" mt="5">
        <MenuButton
          title="Share"
          icon="share-social"
          onPress={() => onShare()}
        />
        {/* <MenuButton
          title="Rate US"
          icon="star"
          onPress={() => {
            props.navigation.navigate('HomeScreen');
          }}
        /> */}
        <MenuButton
          title="Privacy Policy"
          icon="lock-closed"
          onPress={() => {
            Linking.openURL(
              'https://pm-kisan-yojana.flycricket.io/privacy.html',
            ).catch(err => console.log("Couldn't load page", err));
          }}
        />
        {/* <MenuButton
          title="Exit App"
          icon="exit"
          onPress={() => {
            props.navigation.navigate('HomeScreen');
          }}
        /> */}
      </Box>
    </DrawerContentScrollView>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      {/* <Stack.Screen name="StartScreen" component={StartScreen} /> */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
      <Stack.Screen name="ContentScreen" component={ContentScreen} />
    </Stack.Navigator>
  );
};
const Router = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default Router;
