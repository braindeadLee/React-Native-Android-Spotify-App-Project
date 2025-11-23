import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Animated, Easing } from 'react-native';
import { RootStackParamList } from './types';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen from '../screens/Signup/SignUpScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import MainDrawer from './MainDrawer';
import PlaylistDetailScreen from '../screens/Playlists/PlaylistDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: '#121211' },
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen 
      name="SignUp" 
      component={SignUpScreen} 
      options={{
          animation: 'fade',
          animationDuration: 1000,
        }}/>
      <Stack.Screen name="Main" component={MainDrawer} />
      <Stack.Screen name="PlaylistDetail" component={PlaylistDetailScreen} />

      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          animation: 'slide_from_right',
          animationDuration: 300,
        }}
      />
    </Stack.Navigator>

    
  );
}
