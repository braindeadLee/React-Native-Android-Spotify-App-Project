import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type PlaylistsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Main'
>;

const playlists = [
  { id: '1', name: 'My Favorite Tracks' },
  { id: '2', name: 'Workout Pump' },
  { id: '3', name: 'Chill Vibes' },
];

export default function PlaylistsScreen() {
  const navigation = useNavigation<PlaylistsScreenNavigationProp>();

  const handleSelectPlaylist = (playlist: any) => {
    navigation.navigate('PlaylistDetail', { playlist });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Playlists</Text>

      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.playlistItem}
            onPress={() => handleSelectPlaylist(item)}
          >
            <Text style={styles.playlistText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121211', padding: 20 },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  playlistItem: {
    paddingVertical: 15,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  playlistText: { color: '#fff', fontSize: 18 },
});
