import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

// useMemo có tác dụng khi giao diện bị render, thay đổi count để giao diện bị render lại

const tinhToan = num => {
  console.log('Gọi hàm tính toán...');
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    // Có thể Giảm số lần lặp lại để tránh quá tải cho máy ảo
    result += i;
  }
  return result + num;
};

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const value = tinhToan(number);

  return (
    <View style={{padding: 20}}>
      <Text>Computed Value: {value}</Text>
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
      <Button title="Increment Number" onPress={() => setNumber(number + 1)} />
      <Text>Count: {count}</Text>
      <Text>Number: {number}</Text>
    </View>
  );
};

export default UseMemo;
