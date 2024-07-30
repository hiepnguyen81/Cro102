import {SafeAreaView} from 'react-native';
import React from 'react';
import Vidu from './src/screen/vidu';
import ViduHam from './src/screen/HookReactNative/useState';
import UseEffect from './src/screen/HookReactNative/useEffect';
import UseReducer from './src/screen/HookReactNative/useReducer';
import Lab1 from './src/Lab/Lab1';
import TodoApp from './src/Lab/Lab2';
import UseContext from './src/screen/HookReactNative/useContext';
import UseMemo from './src/screen/HookReactNative/useMemo';
import UseCallBack from './src/screen/HookReactNative/useCallBack';
import {Provider} from 'react-redux';
import TodoScreen from './src/screen/ReduxNoAPI/TodoScreen';
import store from './src/screen/ReduxNoAPI/redux/store';
import QuanLyChiTieu from './src/screen/ReduxNoAPI/QuanLyChiTieu';
import Index from './src/screen/ImagePicker';
import Music from './src/screen/PlayMusic/Music';

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
      {/* <Provider store={store}>
        <QuanLyChiTieu />
      </Provider> */}
      {/* <Index /> */}
      <Music />
    </SafeAreaView>
  );
};

export default App;
