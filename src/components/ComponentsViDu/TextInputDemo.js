import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const TextInputDemo = props => {
  return (
    <TextInput
      {...props}
      style={[props.style, st.input]}
      placeholderTextColor={props.placeholderTextColor || '#000fff'}
    />
  );
};

export default TextInputDemo;

const st = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'blue',
  },
});
