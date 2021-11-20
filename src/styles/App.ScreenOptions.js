import React from 'react';
import {Text, View} from 'react-native';

export const HomeScreenOptions = {
  title: 'HOME',
};

export const DetailScreenOptions = {
  headerTitleStyle: {
    color: 'white',
    fontSize: 20,
  },

  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#7898DB',
  },

  // 기능구현 되면 활성화 예정
  // headerLeft: props => {
  //   console.log(props.onPress);
  //   return (
  //     <TouchableOpacity>
  //       <Text>left</Text>
  //     </TouchableOpacity>
  //   );
  // },

  headerTitle: ({children}) => (
    <View>
      <Text style={DetailHeaderTitleStyle}>{'⚜️ ' + children + ' ⚜️'}</Text>
    </View>
  ),
};

const DetailHeaderTitleStyle = {fontSize: 18, color: 'white'};

export const TodoListScreenOptions = {
  title: 'TODO LIST',
  headerTitleStyle: {
    color: 'white',
    fontSize: 20,
  },

  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#b39ddb',
  },

  headerRight: () => (
    <View>
      <Text style={TodoListHeaderRightStyle}>✔️</Text>
    </View>
  ),
};

const TodoListHeaderRightStyle = {fontSize: 25};

export const HeaderlessScreenOptions = {
  headerShown: false,
};
