import {SafeAreaView} from 'react-native';
import React from 'react';
import Vidu from './src/screen/vidu';
import ViduHam from './src/screen/useState';
import UseEffect from './src/screen/useEffect';
import UseReducer from './src/screen/useReducer';
import Lab1 from './src/Lab/Lab1';
import TodoApp from './src/Lab/Lab2';
import UseContext from './src/screen/useContext';
import UseMemo from './src/screen/useMemo';
import UseCallBack from './src/screen/useCallBack';
import {Provider} from 'react-redux';
import TodoScreen from './src/screen/TodoScreen';
import store from './src/redux/store';
import QuanLyChiTieu from './src/screen/QuanLyChiTieu';

const App = () => {
  return (
    <SafeAreaView>
      {/* <Vidu/> */}
      {/* <ViduHam/> */}
      {/* <UseEffect/> */}
      {/* <UseReducer /> */}
      {/* <Lab1 /> */}
      {/* <TodoApp /> */}
      {/* <UseContext /> */}
      {/* <UseMemo /> */}
      {/* <UseCallBack /> */}
      <Provider store={store}>
        <QuanLyChiTieu />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
