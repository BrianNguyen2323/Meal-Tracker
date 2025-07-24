import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const MealLogFrame = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: 40 }]}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
          minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut enim ad minim veniam.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut enim ad minim veniam.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
        </Text>
        <Text style={styles.text}>Test</Text>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const MealLog = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Meal Log</Text>
      <MealLogFrame />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%', // shared dynamic width (could also use flex or Dimensions.get('window').width)
    alignSelf: 'center',
    alignItems: 'center',
  },
  header: {
    borderWidth: 2,
    borderColor: 'blue',
    borderBottomWidth: 0,
    fontSize: 24,
    backgroundColor: 'lavender',
    textAlign: 'center',
    paddingVertical: 8,
    width: '95%', // fill width of wrapper
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    height: 525,
    width: '95%', // fill width of wrapper
    paddingTop: StatusBar.currentHeight,
    borderColor: 'blue',
    borderWidth: 2,
    borderTopWidth: 0,
    // borderRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  scrollContent: {
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 32,
    padding: 12,
  },
});

export default MealLog;
