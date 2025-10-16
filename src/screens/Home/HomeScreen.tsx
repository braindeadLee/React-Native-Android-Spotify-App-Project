import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import createIconSet from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  return (<View style={styles.container}>
    {/*Main content lol */}
    <View style={styles.content}>
        <Text style={{color: '#fff'}}>Home Content Goes Here</Text>
    </View>

    {/*Footer */}
    <View style={styles.footer}>
        <Icon name='home' size={28} color = "#fff" />
        <Text style={styles.footerText}>Home</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121210',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },
});