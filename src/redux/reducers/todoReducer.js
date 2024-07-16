import {createSlice} from '@reduxjs/toolkit';
//1. khai báo khởi tạo state
const initialState = {
  listTodo: [], // chứa danh sách công việc
};
//2. thiết lập cho reducer và định nghĩa các action
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.listTodo.push(action.payload);
    },
    // có thêm action nào khác thì viết vào đây
  },
});
// export các thành phần để bên screen có thể sử dụng
export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;
