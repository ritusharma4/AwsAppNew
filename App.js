/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {FeedbackScreen} from './FeedbackScreen';
import { LoginScreen } from './LoginScreen';
import { SignUpScreen } from './SignupScreen';
import {HomeScreen} from './HomeScreen';
import {OutofHourScreen} from './OutofHourScreen';


const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
                <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
        <Stack.Screen name="OutofHourScreen" component={OutofHourScreen} />

        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
