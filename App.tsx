import 'react-native-gesture-handler';
import 'react-native-reanimated';
import 'react-native-worklets-core';

import React, { useState } from 'react';
import {
  View, Text, TextInput, Pressable, StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { GestureResponderEvent } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, type DrawerContentComponentProps} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type RootStackParamList = { Login: undefined; Main: undefined };
type MainDrawerParamList = { Home: undefined; Settings: undefined };

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<MainDrawerParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: '#121212' },
          headerStyle: { backgroundColor: '#121212' },
          headerTitleStyle: { color: '#fff' },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainDrawer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LoginScreen() {
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

function HomeScreen() {
  return <View style={{ flex: 1, backgroundColor: '#121212' }} />;
}


function LoginForm() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [showPw, setShowPw] = useState(false);

  type Nav = NativeStackNavigationProp<RootStackParamList, 'Login'>;
  const navigation = useNavigation<Nav>();

  return (
    <>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email or username"
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
        <Pressable
          onPress={() => setShowPw(v => !v)}
          hitSlop={10}
          style={styles.eye}
        >
          <Icon name={showPw ? 'eye-off-outline' : 'eye-outline'} size={22} color="#c9c9c9" />
        </Pressable>
      </View>

      <Pressable onPress={() => { /* forgot password flow */ }} style={styles.forgotWrap}>
        <Text style={styles.forgot}>Forgot password?</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Main')}>
        <LinearGradient
          colors={['#1B803E', '#1DB954']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.loginBtn}
        >
          <Text style={styles.loginText}>Log in</Text>
        </LinearGradient>
      </Pressable>

      <View style={styles.dividerRow}>
        <View style={styles.hr} />
        <Text style={styles.or}>Be Connected With</Text>
        <View style={styles.hr} />
      </View>

      <View style={styles.socialRow}>
        <SocialCircle icon="facebook" onPress={() => { /* Facebook auth */ }} />
        <View style={{ width: 16 }} />
        <SocialCircle icon="google" onPress={() => { /* Google auth */ }} />
      </View>

      <View style={styles.signupRow}>
        <Text style={styles.signupText}>Don't Have An Account?</Text>
        <Pressable onPress={() => { /* navigate to SignUp */ }} hitSlop={10}>
          <Text style={styles.signupLink}> Sign Up</Text>
        </Pressable>
      </View>

    </>
  );
}

type SocialCircleProps = {
  icon: string;
  onPress?: (e: GestureResponderEvent) => void;
};

function SocialCircle({ icon, onPress }: SocialCircleProps) {
  return (
    <Pressable onPress={onPress} style={styles.socialBtn}>
      <Icon name={icon} size={22} color="#ffffff" />
    </Pressable>
  );
}

function MainDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: '#121212' },
        headerStyle: { backgroundColor: '#121212' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' },
        drawerActiveTintColor: '#1DB954',
        drawerInactiveTintColor: '#b3b3b3',
      }}
      drawerContent={(props) => <ProfileDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          drawerItemStyle: { display: 'none' }, // hide "Home" from the drawer list
        }}
      />
    </Drawer.Navigator>
  );
}

function ProfileDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ backgroundColor: '#121212', paddingTop: 40 }}
    >
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
        onPress={() => {}}
        labelStyle={{ color: '#fff' }}
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="playlist-music-outline" size={size} color={color || '#b3b3b3'} />
        )}
      />
      <DrawerItem
        label="Settings"
        onPress={() => {}}
        labelStyle={{ color: '#fff' }}
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="cog-outline" size={size} color={color || '#b3b3b3'} />
        )}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject
  },
  bg: { flex: 1 , backgroundColor: '#121212'},
  safe: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
  card: {
    width: '100%',
    padding: 22,
  },
  brand: { alignItems: 'center', marginBottom: 100 },
  logoCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#1DB954',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  brandText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
  },
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
  eye: {
    position: 'absolute',
    right: 12,
    height: '100%',
    justifyContent: 'center',
  },
  forgotWrap: { alignSelf: 'flex-end', marginBottom: 16 },
  forgot: { color: '#b3b3b3', fontSize: 13 },
  loginBtn: {
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 18,
  },
  loginText: { color: '#FFFFFF', fontWeight: '800', fontSize: 16 },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  hr: { flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: '#2a2a2a' },
  or: { color: '#1DB954', fontSize: 12, marginHorizontal: 8, fontWeight: 'bold' },
  socialRow: { flexDirection: 'row', alignSelf: 'center', marginBottom: 6 },
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
  signupRow:{
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  signupText: {
    color: '#9AA0A6',
    opacity: 0.5,
    fontWeight: '600',
  },
  signupLink: {
    color: '#1DB954',
    fontSize: 14,
    fontWeight: '700',
  }
});
