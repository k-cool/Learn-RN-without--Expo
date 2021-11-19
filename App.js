/**
 * @format
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import DateHead from './src/components/DateHead';

const App = () => {
  const today = new Date();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <View style={styles.block}>
          <DateHead date={today} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    // flex: 1,
    backgroundColor: 'blue',
  },
});
export default App;
