import React, { useEffect, useState } from 'react';
import { NavigationContainer, InitialState } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootNavigator from './navigation/RootNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ActivityIndicator, View } from 'react-native';

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

export default function App() {
  const [initialState, setInitialState] = useState<InitialState | undefined>();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedState = await AsyncStorage.getItem(PERSISTENCE_KEY);
        if (savedState) {
          const parsedState = JSON.parse(savedState);
          setInitialState(parsedState);
        }
      } catch (e) {
        console.warn('Failed to restore navigation state:', e);
      } finally {
        setIsReady(true);
      }
    };

    restoreState();
  }, []);

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' }}>
        <ActivityIndicator size="large" color="#1DB954" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer
        initialState={initialState}
        onStateChange={async (state) => {
          try {
            const jsonState = JSON.stringify(state);
            await AsyncStorage.setItem(PERSISTENCE_KEY, jsonState);
            console.log('✅ Navigation state saved:', state);
          } catch (e) {
            console.warn('Failed to save navigation state:', e);
          }
        }}
      >
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
