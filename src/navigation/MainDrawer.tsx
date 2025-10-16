import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainDrawerParamList } from './types';
import HomeScreen from '../screens/Home/HomeScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import PlaylistsScreen from '../screens/Playlists/PlaylistsScreen';
import ProfileDrawerContent from '../components/Drawer/ProfileDrawerContent';

const Drawer = createDrawerNavigator<MainDrawerParamList>();

export default function MainDrawer() {
  return (
    <Drawer.Navigator
        screenOptions={{
            //Colors
            drawerStyle: { backgroundColor: '#121212' },
            headerStyle: { backgroundColor: '#121212' },
            headerTintColor: '#fff',
            headerTitleStyle: { color: '#fff' },
            drawerActiveTintColor: '#1DB954',
            drawerInactiveTintColor: '#b3b3b3',

            headerShown:false,
            swipeEnabled: true,
            swipeEdgeWidth: 100,
            swipeMinDistance: 20,
            }}
        drawerContent={(props) => <ProfileDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
      <Drawer.Screen 
      name="Settings" 
      component={SettingsScreen} />

      <Drawer.Screen 
      name="PlaylistDetail" 
      component={PlaylistsScreen} />

    </Drawer.Navigator>
  );
}
