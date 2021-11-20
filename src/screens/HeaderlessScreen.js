import React from 'react';
import {View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HeaderLessScreen = ({navigation}) => {
  const blockStyle = {
    alignItems: 'center',
  };

  return (
    <SafeAreaView>
      <View style={blockStyle}>
        <Text>어라?... Header가 음넹?...</Text>
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
      </View>
    </SafeAreaView>
  );
};

export default HeaderLessScreen;
