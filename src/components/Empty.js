import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Empty = () => {
  return (
    <View style={styles.block}>
      <Image
        source={require('../assets/images/young_and_happy.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.description}>할 일이 없습니다~😆</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 300,
    height: 200,
  },

  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});

export default Empty;
