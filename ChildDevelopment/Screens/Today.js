import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SkillCategories() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.column1}>
        <Text style={styles.title}>Crawling</Text>
      </View>
      <View style={styles.column2}>
        <Text style={styles.title}>Developing the Senses</Text>
      </View>
      <View style={styles.column3}>
        <Text style={styles.title}>Communicating through Gestures</Text>
      </View>
      <View style={styles.column1}>
        <Text style={styles.title}>Hiding Place</Text>
      </View>
      <View style={styles.column2}>
        <Text style={styles.title}>Early knowledge & Curiosity</Text>
      </View>
      <View style={styles.column3}>
        <Text style={styles.title}>Go to Catalog!</Text>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    paddingVertical: 20, // Optional padding to add some space above and below the boxes
  },
  column1: {
    height: 200, // Adjust the height as needed for the square box
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, // Optional margin between boxes
  },
  column2: {
    height: 200, // Adjust the height as needed for the square box
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, // Optional margin between boxes
  },
  column3: {
    height: 200, // Adjust the height as needed for the square box
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, // Optional margin between boxes
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
