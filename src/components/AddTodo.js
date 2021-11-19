import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import useInput from '../hooks/useInput';

const AddTodo = () => {
  const {text, setText, emptyTextInput} = useInput('');

  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );
  console.log(text);
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder="할 일을 입력하세요."
        value={text}
        onChangeText={setText}
        onSubmitEditing={emptyTextInput}
        returnKeyType="done"
      />
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={emptyTextInput}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={emptyTextInput}>
              {button}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
  },

  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },

  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#b39ddb',
    borderRadius: 20,
  },

  circleWrapper: {
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default AddTodo;
