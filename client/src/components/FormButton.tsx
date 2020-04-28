import React from 'react';
import {Button, Text} from 'native-base';
import {TFormButton} from '../types';

const FormButton = (props: TFormButton) => {
  return (
    <Button>
      <Text>{props.children}</Text>
    </Button>
  );
};

export default FormButton;
