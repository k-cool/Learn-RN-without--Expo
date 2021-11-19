import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const TodoItem = ({id, text, done}) => {
  const checkStyle = [styles.circle, done && styles.filled];
  const textStyle = [styles.text, done && styles.lineThrough];

  return (
    <View style={styles.item}>
      <View style={checkStyle}>
        {done && (
          <Image
            source={require('../assets/icons/check_white/check_white.png')}
          />
        )}
      </View>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },

  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },

  circle: {
    width: 24,
    height: 24,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#b39ddb',
    borderRadius: 12,
  },

  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b39ddb',
  },

  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
});

export default TodoItem;
