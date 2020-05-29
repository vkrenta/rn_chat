import React, { FC } from 'react';
import { TFormButton } from '../types';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const FormButton: FC<TFormButton> = (props) => {
  return (
    <View>
      <Button
        disabled={props.disabled}
        onPress={props.onPress}
        title={props.children?.toString()}
        buttonStyle={$.buttonStyle}
        titleStyle={$.titleStyle}
      />
    </View>
  );
};

const $ = StyleSheet.create({
  buttonStyle: {
    height: 50,
    borderRadius: 15,
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#3A86FF',
  },
  titleStyle: {
    fontFamily: 'Manrope-Bold',
  },
});

export default FormButton;
