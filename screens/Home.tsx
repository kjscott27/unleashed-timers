import * as React from 'react';
import { StyleSheet } from 'react-native';

import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';

const Home = () => (
  <ThemedView style={styles.container}>
    <ThemedText style={styles.title}>Unleashed Timers</ThemedText>
    <ThemedView
      style={styles.separator}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)">
      <ThemedText style={styles.title}>News</ThemedText>
    </ThemedView>
  </ThemedView>
);
export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    width: '80%',
  },
});
