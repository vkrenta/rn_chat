import React, { Component, forwardRef, useState } from 'react';
import { TRoundedInput } from 'src/types';
import { StyleSheet, View, TextInputComponent } from 'react-native';
import { Input } from 'react-native-elements';

const RoundedInput = forwardRef<Input, TRoundedInput>((props, ref) => {
  const [value, onChangeText] = useState<string>('');
  return (
    <View>
      <Input
        ref={ref}
        inputStyle={$.input}
        inputContainerStyle={$.inputContainerStyle}
        placeholder={props.placeholder}
        containerStyle={$.containerStyle}
        placeholderTextColor='#fff'
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
});

const $ = StyleSheet.create({
  input: {
    fontFamily: 'Manrope-Regular',
    padding: 0,
  },
  containerStyle: {
    padding: 5,
    backgroundColor: 'rgba(3, 223, 252, 0.3)',
    borderRadius: 45,
    height: 50,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
});

export default RoundedInput;
