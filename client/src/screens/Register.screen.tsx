import React, {FC} from 'react';
import {
  TextInput,
  CheckBox,
  Button,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen: FC = () => {
  return (
    <>
      <ScrollView />
    </>
  );
};

const styles = StyleSheet.create({
  input: {borderRadius: 50, borderColor: 'black'},
});

export default RegisterScreen;
