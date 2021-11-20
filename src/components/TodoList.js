import React from 'react';
import {StyleSheet, View, FlatList, ScrollView} from 'react-native';

import TodoItem from './TodoItem';

const TodoList = ({todos, toggleDone, deleteTodo}) => {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <TodoItem {...item} toggleDone={toggleDone} deleteTodo={deleteTodo} />
      )}
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
