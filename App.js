import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './navigation/router';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
