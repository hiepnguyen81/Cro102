/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useDispatch, useSelector} from 'react-redux';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import {useState} from 'react';
import {AppButton} from '../../Lab/Lab1/app-button';
import {
  addThuChi,
  deleteThuChi,
  updateThuChi,
} from './redux/reducers/storeThuChi';
import {AppTouchableOpacity} from '../../Lab/Lab1/app-touchable-opacity';
const QuanLyChiTieu = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tienThu, setTienThu] = useState('');
  const [ngayThu, setNgayThu] = useState('');
  const [loaiThu, setLoaiThu] = useState('');
  const [price, setPrice] = useState('');
  const [search, setSearch] = useState('');

  const listThuChi = useSelector(state => state.listThuChi.listThuChi);
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    let duLieuThem = {
      id: Math.random().toString(),
      title: title,
      content,
      tienThu,
      ngayThu,
      loaiThu,
      price,
    };
    dispatch(addThuChi(duLieuThem));
  };
  const filteredListTodo = listThuChi.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );
  const handleDeleteThuChi = id => {
    dispatch(deleteThuChi(id));
  };
  const handleUpdateThuChi = (id) => {
    let duLieuCapNhat = {
      id,
      title,
      content,
      tienThu,
      ngayThu,
      loaiThu,
      price,
    };
    dispatch(updateThuChi(duLieuCapNhat));
  };

  return (
    <ScrollView>
      <View style={{padding: 12, rowGap: 16}}>
        <TextInput placeholder="Tiêu đề" onChangeText={setTitle} />
        <TextInput placeholder="Mô tả" onChangeText={setContent} />
        <TextInput placeholder="Ngày thu chi" onChangeText={setNgayThu} />
        <TextInput placeholder="Loại thu chi" onChangeText={setLoaiThu} />
        <TextInput placeholder="Giá" onChangeText={setPrice} />
        <TextInput placeholder="Số tiền thu" onChangeText={setTienThu} />
        <AppButton title="Thêm" onPress={handleAddTodo} />
        <TextInput
          placeholder="Tìm kiếm theo tiêu đề"
          onChangeText={setSearch}
          style={{marginTop: 20, borderRadius: 10, borderWidth: 1, padding: 10}}
        />
        {filteredListTodo.map(column => (
          <View
            key={column.id}
            style={{
              padding: 10,
              margin: 10,
              backgroundColor: 'white',
              borderWidth: 1,
              borderRadius: 10,
              rowGap: 10,
              width: 250,
            }}>
            <Text>Tiêu đề: {column.title}</Text>
            <Text>Mô tả: {column.content}</Text>
            <Text>Ngày thu chi: {column.ngayThu}</Text>
            <Text>Loại thu chi:{column.loaiThu}</Text>
            <Text>Giá: {column.price}</Text>
            <View
              style={{backgroundColor: 'green', padding: 10, borderRadius: 10}}>
              <Text>Số tiền đã thu: {column.tienThu}</Text>
            </View>
          </View>
        ))}
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          {' '}
          Danh sách thu chi:
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {listThuChi.map(column => (
            <AppTouchableOpacity
              key={column.id}
              onPress={handleUpdateThuChi}
              style={{
                padding: 10,
                margin: 10,
                backgroundColor: 'white',
                borderWidth: 1,
                borderRadius: 10,
                rowGap: 10,
                width: 250,
              }}>
              <Text>Tiêu đề: {column.title}</Text>
              <Text>Mô tả: {column.content}</Text>
              <Text>Ngày thu chi: {column.ngayThu}</Text>
              <Text>Loại thu chi:{column.loaiThu}</Text>
              <Text>Giá: {column.price}</Text>
              <View
                style={{
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text>Số tiền đã thu: {column.tienThu}</Text>
              </View>
              <Button
                title="Xóa"
                onPress={() => handleDeleteThuChi(column.id)}
                color="red"
              />
            </AppTouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};
export default QuanLyChiTieu;
