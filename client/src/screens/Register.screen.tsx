import React, {FC} from 'react';
import {TextInput, CheckBox, Button, ScrollView, Alert} from 'react-native';
import {Input} from 'react-native-elements';

const RegisterScreen: FC = () => {
  return (
    <>
      <ScrollView>
        <Input
          placeholder="INPUT WITH ICON"
          leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
        />
        <TextInput placeholder="First Name" />
        <TextInput placeholder="Last Name" />
        <TextInput placeholder="UserName" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <TextInput placeholder="Confirm password" />
        <CheckBox />
        <Button
          title="Submit"
          onPress={() => {
            Alert.alert('You are successfully registered');
          }}
        />
        <Button title="Sign up with Facebook" onPress={() => {}} />
      </ScrollView>
    </>
  );
};

export default RegisterScreen;
