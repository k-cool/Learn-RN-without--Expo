import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => <TodoItem {...item} />}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },

  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default TodoList;
