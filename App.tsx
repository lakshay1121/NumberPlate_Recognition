/* eslint-disable prettier/prettier */
import React from 'react';
import Login from './frontend-app/src/screens/auth/Login';
import Register from './frontend-app/src/screens/auth/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Email from './frontend-app/src/screens/auth/Email';
import Password from './frontend-app/src/screens/auth/Password';
import Welcome from './frontend-app/src/screens/auth/Welcome';
import HomeScreen from './frontend-app/src/screens/HomeScreen';
import ScannerScreen from './frontend-app/src/screens/ScannerScreen';
import Edit from './frontend-app/src/screens/Edit';
import BottomTabs from './frontend-app/src/components/BottomTabs';

type Props = {};

const App = (props: any) => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Email" component={Email} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="ScannerScreen" component={ScannerScreen} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
      {/* bottom tabs navigation */}
    </NavigationContainer>
  );
};

export default App;
