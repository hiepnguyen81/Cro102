import {Button, StyleSheet, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

//demo với sharedValue

//ví dụ về hiệu ứng thay đổi kích thước của 1 view lúc ứng dụng đang chạy (runtime)
const StartAnimation = () => {
  const chieuRong = useSharedValue(100); // giá trị ban đầu là 100
  // tạo hiệu ứng
  const animateStyle = useAnimatedStyle(() => {
    return {
      width: chieuRong.value,
    };
  });
  const handleChangeStyle = () => {
    //sử dụng hiệu ứng thay đổi
    // chieuRong.value = 300;

    // tích hợp hiệu ứng
    // chieuRong.value = withSpring((chieuRong.value = 100 ? 300 : 100));

    //tích hợp hiệu ứng thời gian
    chieuRong.value = withTiming(350, {
      easing: Easing.bounce,
      duration: 10000, //thời gian để hoàn thành hiệu ứng: 10s
    });
  };
  return (
    <View style={styles.khung}>
      <Animated.View style={[styles.vidu, animateStyle]} />
      <Button title="Animation" onPress={handleChangeStyle} />
    </View>
  );
};

export default StartAnimation;

const styles = StyleSheet.create({
  khung: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vidu: {
    height: 100,
    backgroundColor: 'blue',
  },
});
