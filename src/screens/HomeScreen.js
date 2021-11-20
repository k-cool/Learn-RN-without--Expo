import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.block}>
      <Button title="TodoList" onPress={() => navigation.push('TodoList')} />
      <Button
        title="Detail1"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
      <Button
        title="Detail2"
        onPress={() => navigation.push('Detail', {id: 2})}
      />
      <Button
        title="Detail3"
        onPress={() => navigation.push('Detail', {id: 3})}
      />
      <Button
        title="Headerless"
        onPress={() => navigation.push('Headerless')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
