import React from 'react';
import { TRoundedInput } from 'src/types';
import { StyleSheet, View, TextInputComponent } from 'react-native';
import { Input } from 'react-native-elements';


const RoundedInput = React.forwardRef<TextInputComponent, TRoundedInput>((props, ref) => {
  return (
    <View>
      <Input
        ref={ref?.toString()}
        inputStyle={$.input}
        inputContainerStyle={$.inputContainerStyle}
        placeholder={props.placeholder}
        containerStyle={$.containerStyle}
        placeholderTextColor='#fff'
      />
    </View>
  );
})

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
