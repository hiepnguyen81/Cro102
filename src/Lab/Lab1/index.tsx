import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {BaseScreen} from './base-screen';
import AppNavBar from './app-nav-bar';
import Banner from '../../components/Banner';
import {MyTheme, useTheme} from '../../components/ComponentsViDu/MyTheme';
import AppInput from './app-input';
import {AppButton} from './app-button';

const Lab1 = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <BaseScreen>
      <View
        style={[
          styles.khung,
          {backgroundColor: theme === 'light' ? '#fff' : '#ff6347'},
        ]}>
        <AppNavBar title="Đăng kí học" onPress={toggleTheme} />
        <Banner
          uri_img={
            'https://media.vov.vn/sites/default/files/styles/large/public/2023-08/2_4.png.jpg'
          }
        />
        <AppInput placeholder="Họ và tên" />
        <AppInput placeholder="Mã sinh viên" />
        <AppInput placeholder="Môn học" />
        <AppButton
          title="Gửi thông tin"
          onPress={() => Alert.alert('Gửi thông tin thành công')}
        />
      </View>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  khung: {
    height: 900,
    padding: 10,
    rowGap: 20,
  },
});

const Lab1Wrapper = () => (
  <MyTheme>
    <Lab1 />
  </MyTheme>
);

export default Lab1Wrapper;
