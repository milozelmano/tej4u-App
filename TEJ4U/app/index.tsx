import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter(String);

  const handlePress = (buttonName: string) => {
    if (buttonName === 'Button-1') {
      router.push('lessonMenu');
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/react-logo.png')}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Your journey to app building</Text>

      <Text style={styles.subtitle}>
        Learn React Native by building small lessons with images, buttons, and clean layouts.
      </Text>

      {/* Buttons */}
      <Pressable style={styles.button} onPress={() => handlePress('Button-1')}>
        <Text style={styles.buttonText}>Start learning</Text>
      </Pressable>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
    width: 180,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    maxWidth: 320,
    height: 220,
    borderRadius: 16,
    marginBottom: 24,
  },
});