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
    updateThuChi(state, action) {
      const index = state.listThuChi.findIndex(
        item => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.listThuChi[index] = action.payload;
      }
    },
  },
});

export const {addThuChi, deleteThuChi, updateThuChi} =
  quanLyThuChiSlice.actions;
export default quanLyThuChiSlice.reducer;
