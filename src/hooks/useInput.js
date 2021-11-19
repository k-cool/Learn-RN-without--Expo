import {useState} from 'react';

const useInput = defaultValue => {
  const [text, setText] = useState(defaultValue);

  return {text, setText};
};

export default useInput;
