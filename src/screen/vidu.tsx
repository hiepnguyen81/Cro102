/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import CustomHeader from '../components/ComponentsViDu/CustomHeader';
import Banner from '../components/Banner';
import Section from '../components/ComponentsViDu/Section';
import Wrapper from '../components/ComponentsViDu/Wrapper';
import TextInputDemo from '../components/ComponentsViDu/TextInputDemo';
import {MyTheme, useTheme} from '../components/ComponentsViDu/MyTheme';

const Vidu = () => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const Separator = ({height}: {height: number}) => <View style={{height}} />;

  // eslint-disable-next-line react/no-unstable-nested-components
  const BodyApp = () => {
    // sử dụng hook để thao tác với theme
    const {theme, toggleTheme} = useTheme();
    return (
      <View
        style={[
          styles.khung,
          {backgroundColor: theme === 'light' ? '#fff' : '#000'},
        ]}>
        <Text style={{color: theme === 'light' ? '#000' : '#fff'}}>
          Demo theme
        </Text>

        <Button title="Đổi giao diện" onPress={toggleTheme} />
      </View>
    );
  };

  const [, sethoTen] = useState('');
  return (
    <MyTheme>
      <View style={styles.safeView}>
        <CustomHeader
          title="My Title"
          onBackPress={() => console.log('Back clicked!')}
        />
        <ScrollView>
          <Banner uri_img={'https://i.imgur.com/gowMz8A.jpeg'} />
          <View style={styles.container}>
            <Section title="Section 1" style={{backgroundColor: '#ffcccc'}}>
              <Text>Sản phẩm mới</Text>
              <TextInput
                placeholder="Nhập văn bản..."
                style={styles.textInput}
              />
              <Button title="Nút 1" onPress={() => {}} />
            </Section>
            <Section title="Section 2" style={{backgroundColor: '#ccffcc'}}>
              <Text>Sản phẩm bán chạy</Text>
              <TextInput
                placeholder="Nhập văn bản..."
                style={styles.textInput}
              />
              <Button title="Nút 2" onPress={() => {}} />
            </Section>
          </View>

          <View style={{flex: 1}}>
            <Wrapper style={{backgroundColor: '#ccffcc'}}>
              <Text>Đây là nội dung được bọc 2</Text>
              <TextInput
                placeholder="Nhập văn bản..."
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  marginBottom: 20,
                }}
              />
              <Button title="Nút 2" onPress={() => {}} />
            </Wrapper>
          </View>

          <Separator height={50} />

          <TextInputDemo
            onChangeText={sethoTen}
            placeholder="Nhập họ tên"
            placeholderTextColor="#000"
          />

          <Separator height={50} />

          <BodyApp />
        </ScrollView>
      </View>
    </MyTheme>
  );
};

export default Vidu;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  container: {
    padding: 15,
  },
  safeView: {
    marginTop: 50,
    paddingBottom: 200,
  },
  khung: {
    height: 100,
    borderWidth: 1,
    borderColor: 'red',
  },
});
