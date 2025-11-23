import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function PlaylistDetailScreen() {
  const route = useRoute();
  const { playlist }: any = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{playlist.name}</Text>
      <Text style={styles.subtitle}>Playlist Details Coming Soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center' },
  title: { color: '#ffff', fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { color: '#ccc', fontSize: 16 },
});
