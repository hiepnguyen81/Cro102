import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  listThuChi: [],
};
const quanLyThuChiSlice = createSlice({
  name: 'quanLyThuChi',
  initialState,
  reducers: {
    addThuChi(state, action) {
      state.listThuChi.push(action.payload);
    },
    deleteThuChi(state, action) {
      state.listThuChi = state.listThuChi.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

export const {addThuChi, deleteThuChi} = quanLyThuChiSlice.actions;
export default quanLyThuChiSlice.reducer;
