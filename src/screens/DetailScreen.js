import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const DetailScreen = ({route, navigation}) => {
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const textStyle = {fontSize: 25};

    navigation.setOptions({
      title: `DETAIL - ${route.params.id}`,
      headerRight: () => (
        <TouchableOpacity onPress={() => setShowInfo(!showInfo)}>
          <Text style={textStyle}>⚙️</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, route.params.id, showInfo]);

  return (
    <View style={styles.block}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>id: {route.params.id}</Text>
      <Button
        title="다음"
        onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
      />
      <Button title="뒤로가기" onPress={() => navigation.pop()} />
      <Button title="처음으로" onPress={() => navigation.popToTop()} />
      {showInfo && (
        <View style={styles.infoBox}>
          <Text
            style={
              styles.infoText
            }>{`지금 ${route.params.id}번 DETAIL을 보고 있어요!`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  text: {
    fontSize: 48,
  },

  infoBox: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 10,
    padding: 20,
    backgroundColor: 'whitesmoke',
    borderWidth: 0.2,
    borderColor: 'lightgrey',
    borderRadius: 10,
  },

  infoText: {
    fontSize: 18,
  },
});

export default DetailScreen;
