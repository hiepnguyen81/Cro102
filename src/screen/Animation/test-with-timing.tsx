import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';

enum ReduceMotion {
  System = 'system',
  Always = 'always',
  Never = 'never',
}

interface AppProps {
  width: number;
}

export default function TestWithTiming({width}: AppProps) {
  const sv = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: sv.value}],
    };
  });

  React.useEffect(() => {
    sv.value = withRepeat(
      withTiming(width, {
        duration: 5000,
        easing: Easing.inOut(Easing.quad),
        reduceMotion: ReduceMotion.System,
      }),
      -1, // -1 có nghĩa là sẽ lặp lại vô hạn
    );
  }, [sv, width]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]}>
        <Text>Xin chào Hiệp Nguyễn</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
  },
});
