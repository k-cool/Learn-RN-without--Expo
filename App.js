/**
 * @format
 */
import React, {useState} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import DateHead from './src/components/DateHead';
import AddTodo from './src/components/AddTodo';
import TodoList from './src/components/TodoList';
import Empty from './src/components/Empty';

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, text: '리네기 3장 공부', done: true},
    {id: 2, text: '리네기 4장 공부', done: false},
    {id: 3, text: '리네기 4장 실습', done: false},
  ]);

  const addNewTodo = text => {
    const nextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos([...todos].concat(newTodo));
  };

  const today = new Date();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          <DateHead date={today} />
          {todos.length ? <TodoList todos={todos} /> : <Empty />}
          <AddTodo addNewTodo={addNewTodo} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },

  avoid: {
    flex: 1,
  },
});
export default App;
