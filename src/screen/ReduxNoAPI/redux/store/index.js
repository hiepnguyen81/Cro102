import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../reducers/todoReducer';
import storeThuChi from '../reducers/storeThuChi';
export default configureStore({
  reducer: {
    listTodo: todoReducer,
    listThuChi: storeThuChi,
  },
});
