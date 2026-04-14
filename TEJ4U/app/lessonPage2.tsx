import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function NewPage() {
  {/*ScrollView: is a special container that allows the page to scroll*/}
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.heading}>Lesson 2: React Native Layout</Text>
        <Text style={styles.tagline}>Organize information clearly, with cards, sections, and quick visual cues.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>What You Will Learn</Text>
        <Text style={styles.cardText}>
          This page is built to hold lesson content with structured sections, easy reading,
          and distinct cards for definitions, examples, and extra notes.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Concepts</Text>
        <View style={styles.bulletRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.sectionText}>Views are the core layout containers in React Native.</Text>
        </View>
        <View style={styles.bulletRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.sectionText}>Use nested views to group content and control spacing.</Text>
        </View>
        <View style={styles.bulletRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.sectionText}>ScrollView lets the page content remain accessible on smaller screens.</Text>
        </View>
      </View>

      <View style={styles.card}> 
        <Text style={styles.cardTitle}>How to Use This Page</Text>
        <Text style={styles.cardText}>
          Replace each section with your lesson text. Add new cards for definitions, examples,
          and callouts to make key ideas easy to find.
        </Text>
      </View>

      <View style={styles.section}> 
        <Text style={styles.sectionTitle}>Ready to Add Information</Text>
        <Text style={styles.sectionText}>
          • To update the lesson, edit text in the heading, cards, and bullet items.
        </Text>
        <Text style={styles.sectionText}>• Keep paragraphs short and use card containers for separate concepts.</Text>
        <Text style={styles.sectionText}>• Use strong headings and consistent spacing for a polished layout.</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f3f6fb',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 30,
    fontWeight: '800',
    color: '#1f3347',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#556680',
    lineHeight: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#20304d',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#475a7f',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#e3e9f5',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#253754',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 15,
    color: '#53627f',
    lineHeight: 22,
    marginBottom: 8,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 18,
    lineHeight: 22,
    color: '#4b6b96',
    marginRight: 10,
  },
  footer: {
    marginTop: 4,
    padding: 18,
    borderRadius: 18,
    backgroundColor: '#e8f1ff',
  },
  footerText: {
    fontSize: 14,
    color: '#3d5b8b',
    lineHeight: 20,
  },
});
