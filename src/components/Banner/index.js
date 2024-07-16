import {View, Image} from 'react-native';
import React from 'react';
import st from '../Style';

const Banner = ({uri_img}) => {
  return (
    <View>
      <Image style={st.img} source={{uri: uri_img}} />
    </View>
  );
};

export default Banner;
