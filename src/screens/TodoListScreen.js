import React, {useEffect, useState} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import DateHead from '../components/TodoList/DateHead';
import AddTodo from '../components/TodoList/AddTodo';
import TodoList from '../components/TodoList/TodoList';
import Empty from '../components/TodoList/Empty';

import todoStorage from '../storages/todoStorage';

const TodoListScreen = () => {
  const [todos, setTodos] = useState([]);

  // 불러오기
  useEffect(() => {
    todoStorage //
      .get()
      .then(setTodos)
      .catch(console.error);
  }, []);

  // 저장
  useEffect(() => {
    todoStorage //
      .set(todos)
      .catch(console.error);
  }, [todos]);

  const addNewTodo = text => {
    const nextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos([...todos].concat(newTodo));
  };

  const toggleDone = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const deleteTodo = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  const today = new Date();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          <DateHead date={today} />
          {todos.length ? (
            <TodoList
              todos={todos}
              toggleDone={toggleDone}
              deleteTodo={deleteTodo}
            />
          ) : (
            <Empty />
          )}
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
export default TodoListScreen;
