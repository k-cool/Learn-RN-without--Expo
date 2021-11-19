import {useState} from 'react';
import {Keyboard} from 'react-native';

const useInput = defaultValue => {
  const [text, setText] = useState(defaultValue);

  const emptyTextInput = () => {
    setText('');
    Keyboard.dismiss();
  };

  return {text, setText, emptyTextInput};
};

export default useInput;
