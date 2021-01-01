import * as React from 'react';
import { StyleSheet, SectionList } from 'react-native';

import { formatBossesForList } from './../globals/helpers';

import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';

const TabTwoScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <SectionList
        keyExtractor={(item, index) => `${item.name} + ${index}`}
        sections={formatBossesForList()}
        renderItem={({ item }) => (
          <ThemedText style={styles.item}>{item.name}</ThemedText>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <ThemedText style={styles.title}>{title}</ThemedText>
        )}
        style={styles.list}
      />
    </ThemedView>
  );
};
export default TabTwoScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    fontSize: 16,
  },
  list: {
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
  },
});
