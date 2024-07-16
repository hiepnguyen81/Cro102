/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, ReactNode} from 'react';
import {SafeAreaView, StatusBar, View, ViewStyle} from 'react-native';
import {color} from '../../../themes';

interface Props {
  children?: ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
  barStyle?: 'light-content' | 'dark-content' | 'default';
}

export function BaseScreen(props: Props) {
  const {children, style, backgroundColor, barStyle} = props;

  return (
    <>
      <StatusBar
        barStyle={barStyle ?? 'dark-content'}
        backgroundColor={backgroundColor ?? color.white}
      />
      <SafeAreaView
        style={{flex: 0, backgroundColor: backgroundColor ?? color.white}}
      />
      <SafeAreaView style={{flex: 1, backgroundColor: color.white}}>
        <View style={{flex: 1, backgroundColor: color.white, ...style}}>
          {children}
        </View>
      </SafeAreaView>
    </>
  );
}
