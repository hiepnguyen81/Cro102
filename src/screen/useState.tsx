import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const UseState = () => {
  const [dem, setDem] = useState({title: 'Demo đếm', val: 0});
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Text>Title: {dem.title}</Text>
      <Text>Title: {dem.val}</Text>
      <Button
        title="Tăng giá trị"
        onPress={() => {
          setDem({title: 'Đã bấm nút', val: dem.val + 1});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
  },
});

export default UseState;
