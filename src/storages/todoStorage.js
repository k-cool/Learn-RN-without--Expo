import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'todos';

const todoStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(KEY);
      if (!rawTodos) {
        throw new Error(`No saved ${KEY}`);
      }
      return JSON.parse(rawTodos);
    } catch (e) {
      throw new Error(`Failed to load ${KEY}`);
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      throw new Error(`Failed to save ${KEY}`);
    }
  },
};

export default todoStorage;
