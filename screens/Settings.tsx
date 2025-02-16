import * as React from 'react';
import { StyleSheet } from 'react-native';

import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';

const Settings: React.FC = () => (
  <ThemedView style={styles.container}>
    <ThemedText style={styles.title}>Tab One</ThemedText>
    <ThemedView
      style={styles.separator}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    />
  </ThemedView>
);
export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
