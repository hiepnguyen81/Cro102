import React, {useReducer} from 'react';
import {Button, Text, View} from 'react-native';

//Demo sử dụng reducer với trường hợp biến state đếm, có 2 tình huống tăng/giảm
//B1: Định nghĩa hàm reducer
const demoReducer = (state: {val: number}, action: {type: any}) => {
  switch (action.type) {
    case 'TANG':
      return {val: state.val + 1};
    case 'GIAM':
      return {val: state.val - 1};
    default:
      return state; //trả về nguyên bản nếu gọi reducer mà ko xác định type
  }
};

const UseReducer = () => {
  //sử dụng reducer, cú pháp sử dụng
  //useReducer (tên_hàm_xử_lý, giá_trị_khởi_tạo_state)
  const [dem, dispatch] = useReducer(demoReducer, {val: 0});
  return (
    <View
      style={{justifyContent: 'center', alignSelf: 'center', paddingTop: 100}}>
      <Text>Giá trị đếm: {dem.val}</Text>
      <Button
        title="Tăng"
        onPress={() => {
          dispatch({type: 'TANG'});
        }}
      />
      <Button
        title="Giảm"
        onPress={() => {
          dispatch({type: 'GIAM'});
        }}
      />
    </View>
  );
};

export default UseReducer;
