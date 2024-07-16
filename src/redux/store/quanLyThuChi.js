import {configureStore} from '@reduxjs/toolkit';
import storeThuChi from '../reducers/storeThuChi';
export default configureStore({
  reducer: {
    listThuChi: storeThuChi,
  },
});
