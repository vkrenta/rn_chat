import React, { FC } from 'react';
import { TFormButton } from '../types';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const FormButton: FC<TFormButton> = (props) => {
  return (
    <View>
      <Button
        onPress={props.onPress}
        title={props.children?.toString()}
        buttonStyle={$.buttonStyle}
        titleStyle={$.titleStyle}
      />
    </View>
  );
};

const W_WIDTH = Dimensions.get('window').width;

const $ = StyleSheet.create({
  buttonStyle: {
    height: 50,
    borderRadius: 15,
    width: W_WIDTH * 0.6,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
    marginBottom: 5,
  },
  titleStyle: {
    fontFamily: 'Manrope-Bold',
  },
});

export default FormButton;
