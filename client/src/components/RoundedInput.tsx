import React, {FC} from 'react';
import {TRoundedInput} from 'src/types';
import {Item, Input} from 'native-base';
import {StyleSheet} from 'react-native';

const RoundedInput: FC<TRoundedInput> = (props: TRoundedInput) => {
  return (
    <Item rounded>
      <Input
        placeholder={props.placeholder}
        secureTextEntry={props.secure}
        style={styles.input}
      />
    </Item>
  );
};

const styles = StyleSheet.create({
  input: {fontFamily: 'Manrope-Regular'},
});

export default RoundedInput;
