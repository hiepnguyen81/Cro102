import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';

const UseEffect = () => {
  //Khai báo state
  const [ds, setDs] = useState(null);
  const [soLuong, setSoLuong] = useState(0);

  setTimeout(() => {});
  //Viết hàm lấy danh sách
  const getList = async () => {
    console.log('Bắt đầu gọi API');
    try {
      const res = await fetch(
        'https://667f845ff2cb59c38dc9158f.mockapi.io/baiviet',
      );
      console.log('Chuyển dữ liệu thành json');
      const arr = await res.json();
      console.log('set dữ liệu vào state');
      setDs(arr);
      console.log('Hoàn thành lấy dữ liệu');
    } catch (error) {
      console.log('lỗi quá trình lấy dữ liệu:' + error.message);
    }
    //Sử dụng useEffect
    useEffect(() => {
      console.log('trường hợp 1');
    }); //Trường hợp 1: Hoạt động khi có sự render lại màn hình

    useEffect(() => {
      getList();
    }, []); //Trường hợp 2: hoạt động khi khởi tạo màn hình và chạy 1 lần

    useEffect(() => {
      console.log('danh sách có sự thay đổi');
    }, [soLuong]); //Trường hợp 3: Hoạt động khi xxxx có sự thay đổi
  };
  return (
    <View style={{paddingTop: 100, flex: 1}}>
      {
        // (ds == null) ? xxxx ; yyyy
        ds == null ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 20, color: 'green'}}>Đang tải dữ liệu</Text>
            <ActivityIndicator size="large" color="red" />
          </View>
        ) : (
          <FlatList
            data={ds}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View>
                <Text>
                  {item.id}---{item.name}
                </Text>
                <Image source={{uri: item.avatar}} width={100} height={100} />
              </View>
            )}
          />
        )
      }
    </View>
  );
};

export default UseEffect;
