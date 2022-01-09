import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './navigation/router';
import {NativeBaseProvider} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import OneSignal from 'react-native-onesignal';
import {AppOpenAdProvider, TestIds} from '@react-native-admob/admob';
import adsId from './constants/adsId';

const App = () => {
  useEffect(() => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('7075ef3a-3bd9-4642-9beb-9ec8d928eca6');
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        // console.log(
        //   'OneSignal: notification will show in foreground:',
        //   notificationReceivedEvent,
        // );
        let notification = notificationReceivedEvent.getNotification();
        // console.log('notification: ', notification);
        // const data = notification.additionalData;
        // console.log('additionalData: ', data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AppOpenAdProvider
          unitId={adsId.appOpen}
          options={{showOnColdStart: true}}>
          <Router />
        </AppOpenAdProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
