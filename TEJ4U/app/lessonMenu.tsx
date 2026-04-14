import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter(String);

  const handlePress = (buttonName: string) => {
    if (buttonName === 'Lesson-1') {
      router.push('lessonPage1');
      return;
    }
    else if (buttonName === 'Lesson-2') {
      router.push('lessonPage2');
      return;
    }
    else if (buttonName === 'Lesson-3') {
      router.push('lessonPage3');
      return;
    }
    else if (buttonName === 'Lesson-4') {
      router.push('lessonPage4');
      return;
    }

    console.log(buttonName + ' pressed');
  };

  return (
    <View style={styles.container}>
      
      {/* Title */}
      <Text style={styles.title}>How to app Building:</Text>

      {/* Buttons */}
      <Pressable style={styles.button} onPress={() => handlePress('Lesson-1')}>
        <Text style={styles.buttonText}>Lesson 1: view</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => handlePress('Lesson-2')}>
        <Text style={styles.buttonText}>Lesson 2: view</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => handlePress('Lesson-3')}>
        <Text style={styles.buttonText}>Lesson 3: view</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => handlePress('Lesson-4')}>
        <Text style={styles.buttonText}>Lesson 4: view</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
    width: 160,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});