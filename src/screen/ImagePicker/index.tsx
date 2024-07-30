import {Button, Image, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';

const Index = () => {
  const [hinhAnh, setHinhAnh] = useState(null);

  //viết hàm chụp ảnh
  const chupAnh = useCallback(() => {
    //định nghĩa option để bật camera
    let option = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false, //nếu muốn lấy chuỗi base64 thì để 64
      includeExtra: true,
    };
    //khởi động camera
    ImagePicker.launchCamera(option, setHinhAnh);
  }, []);
  useEffect(() => {
    console.log(hinhAnh);
  }, [hinhAnh]);

  //chọn ảnh
  const chonAnh = useCallback(() => {
    let option = {
      mediaType: 'photo',
      selectionLimit: 0,
    };
    //mở thư viện ảnh để chọn
    ImagePicker.launchImageLibrary(option, setHinhAnh);
  }, []);
  return (
    <View style={{margin: 10, width: 200, rowGap: 20}}>
      <Button title="Chụp ảnh" onPress={chupAnh} />
      <Button title="Chọn từ thư viện" onPress={chonAnh} />
      {typeof hinhAnh?.assets !== 'undefined' ? (
        hinhAnh?.assets.map((objImage, index) => {
          return (
            <View key={index} style={{margin: 10}}>
              <Image
                key={index}
                source={{uri: objImage.uri}}
                style={{width: 200, height: 200}}
              />
            </View>
          );
        })
      ) : (
        <Text>Mời chọn ảnh</Text>
      )}
    </View>
  );
};

export default Index;
