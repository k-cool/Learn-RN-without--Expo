import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TodoItem = ({id, text, done, toggleDone, deleteTodo}) => {
  const checkStyle = [styles.circle, done && styles.filled];
  const textStyle = [styles.text, done && styles.lineThrough];

  const showDeleteAlert = () => {
    Alert.alert('삭제', '정말로 삭제하시겠어요?', [
      {text: '취소', onPress: () => {}, style: 'default'},
      {
        text: '삭제',
        onPress: () => {
          deleteTodo(id);
        },
        style: 'destructive',
      },
      {
        cancelable: true,
        onDismiss: () => {},
      },
    ]);
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => toggleDone(id)}>
        <View style={checkStyle}>
          {done && (
            <Image
              source={require('../assets/icons/check_white/check_white.png')}
            />
          )}
        </View>
      </TouchableOpacity>
      <Text style={textStyle}>{text}</Text>
      {done ? (
        <TouchableOpacity activeOpacity={0.5} onPress={showDeleteAlert}>
          <Icon name="delete" size={28} color="red" />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconPlaceholder} />
      )}
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

  iconPlaceholder: {
    width: 28,
    height: 28,
  },
});

export default TodoItem;
