import React, { useState } from 'react';
import {
  View, Text, TextInput, Pressable, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList } from '../../navigation/types';
import SocialCircle from '../../components/SocialCircle';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [showPw, setShowPw] = useState(false);

  type Nav = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
  const navigation = useNavigation<Nav>();

  return (
    <>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email address"
        placeholderTextColor="#8b8b8b"
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />

      <View style={styles.pwRow}>
        <TextInput
          value={pw}
          onChangeText={setPw}
          placeholder="Password"
          placeholderTextColor="#8b8b8b"
          secureTextEntry={!showPw}
          style={[styles.input, { flex: 1, marginBottom: 0 }]}
        />
        <Pressable onPress={() => setShowPw(v => !v)} hitSlop={10} style={styles.eye}>
          <Icon name={showPw ? 'eye-off-outline' : 'eye-outline'} size={22} color="#c9c9c9" />
        </Pressable>
      </View>

      <View style={styles.pwRow}>
        <TextInput
          value={pw}
          onChangeText={setPw}
          placeholder="Confirm Password"
          placeholderTextColor="#8b8b8b"
          secureTextEntry={!showPw}
          style={[styles.input, { flex: 1, marginBottom: 0 }]}
        />
        <Pressable onPress={() => setShowPw(v => !v)} hitSlop={10} style={styles.eye}>
          <Icon name={showPw ? 'eye-off-outline' : 'eye-outline'} size={22} color="#c9c9c9" />
        </Pressable>
      </View>

      <Pressable onPress={() => navigation.navigate('Main')}>
        <LinearGradient
          colors={['#1B803E', '#1DB954']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.signupBtn}
        >
          <Text style={styles.signupText}>Sign Up</Text>
        </LinearGradient>
      </Pressable>

      <View style={styles.dividerRow}>
        <View style={styles.hr} />
        <Text style={styles.or}>or</Text>
        <View style={styles.hr} />
      </View>

      <View style={styles.socialRow}>
        <SocialCircle icon="google" onPress={() => {}} />
        <View style={{ width: 16 }} />
        <SocialCircle icon="facebook" onPress={() => {}} />
        <View style={{ width: 16 }} />
        <SocialCircle icon="apple" onPress={() => {}} />
      </View>

      <View style={styles.loginRow}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <Pressable hitSlop={10} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}> Login Here</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  pwRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  eye: { position: 'absolute', right: 12, height: '100%', justifyContent: 'center' },
  signupBtn: { borderRadius: 24, paddingVertical: 12, alignItems: 'center', marginBottom: 18 },
  signupText: { color: '#FFFFFF', fontWeight: '800', fontSize: 16 },
  dividerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  hr: { flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: '#2a2a2a' },
  or: { color: '#1DB954', fontSize: 12, marginHorizontal: 8, fontWeight: 'bold' },
  socialRow: { flexDirection: 'row', alignSelf: 'center', marginBottom: 6 },
  loginRow: { flexDirection: 'row', alignSelf: 'center', alignItems: 'center', marginTop: 16 },
  loginText: { color: '#9AA0A6', opacity: 0.5, fontWeight: '600' },
  loginLink: { color: '#1DB954', fontSize: 14, fontWeight: '700' },
});
