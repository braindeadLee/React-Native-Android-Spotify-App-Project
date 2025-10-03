import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { GestureResponderEvent } from 'react-native';

type Props = {
  icon: string;
  onPress?: (e: GestureResponderEvent) => void;
};

export default function SocialCircle({ icon, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.socialBtn}>
      <Icon name={icon} size={22} color="#ffffff" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  socialBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1e1e1e',
    borderWidth: 1,
    borderColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
