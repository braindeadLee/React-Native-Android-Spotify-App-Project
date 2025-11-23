import React from 'react';
import { Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProfileDrawerContent(props: DrawerContentComponentProps) {

  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#121212', paddingTop: 40 }}>
      <Text style={{ color: '#fff', fontWeight: '700', fontSize: 18, marginLeft: 16, marginBottom: 8 }}>
        Profile
      </Text>

      <DrawerItem
        label="Saved Songs"
        onPress={() => {}}
        labelStyle={{ color: '#fff' }}
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="heart-outline" size={size} color={color || '#b3b3b3'} />
        )}
      />
      <DrawerItem
        label="Playlists"
        onPress={() => {navigation.navigate('PlaylistDetail')}}
        labelStyle={{ color: '#ffff' }}
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="playlist-music-outline" size={size} color={color || '#b3b3b3'} />
        )}
      />
      <DrawerItem
        label="Settings"
        onPress={() => {navigation.navigate('Settings')}}
        labelStyle={{ color: '#fff' }}
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="cog-outline" size={size} color={color || '#b3b3b3'} />
        )}
      />
    </DrawerContentScrollView>
  );
}
