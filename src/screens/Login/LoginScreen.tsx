import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginForm from './LoginForm';

export default function LoginScreen() {
  return (
    <View style={styles.bg}>
      <SafeAreaView style={styles.safe} edges={['top', 'bottom', 'left', 'right']}>
        <View style={styles.card}>
          <View style={styles.brand}>
            <Icon name="spotify" size={80} color="#1DB954" />
            <Text style={styles.brandText}>Spotify</Text>
          </View>
          <LoginForm />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, backgroundColor: '#121212' },
  safe: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
  card: { width: '100%', padding: 22 },
  brand: { alignItems: 'center', marginBottom: 100 },
  brandText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
  },
});
