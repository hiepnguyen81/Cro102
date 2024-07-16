import {Text, View} from 'react-native';
import React, {createContext, useContext} from 'react';
/***  use Context : Dùng để truyền dữ liệu từ trên xuống dưới */
// 1. Tại nơi muốn truyền dữ liệu, tạo 1 context

const MyContext = createContext({}); // context chứa 1 đối tượng thì dùng {}
//2. Truyền dữ liệu từ Component cha thì bao bọc phần return của comp cha bằng provider
const CompCha = () => {
  const data = {
    title: 'Dữ liệu từ component cha',
    price: 1234,
  };

  return (
    <MyContext.Provider value={data}>
      <CompCon />
    </MyContext.Provider>
  );
};
// 3. Sử dụng dữ liệu cha truyền xuống ở Comp con
function CompCon() {
  const data = useContext(MyContext);

  return (
    <View>
      <Text>Title: {data.title} </Text>
      <Text>Price: {data.price} </Text>
    </View>
  );
}

//4: Gọi CompCha ra sử dụng ở App.
// Ứng dụng này có 3 cấp: App > CompCha > CompCon
// App là component cao nhất.
const UseContext = () => {
  return (
    <View>
      <Text>App</Text>
      <CompCha />
    </View>
  );
};

export default UseContext;
