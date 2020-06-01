import React, { FC, useState } from 'react';
import FormButton from '../components/FormButton';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { signUp, setCredentials } from '../actions/index';
import FBButton from '../components/FBButton';
import { RootState } from '../reducers';
import validator from 'validator';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'native-base';

const checkName = (name: string) =>
  /^([А-ЯІA-ZÀ-ÿ][-,а-яіa-z.']+[ ]*)+/gm.test(name) &&
  !validator.contains(name, ' ');

const RegisterScreen: FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { firstName, lastName, email } = useSelector(
    (state: RootState) => state.rgCredentials!,
  );

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassError, setConfirmPassError] = useState(false);

  const firstNameValidate = !!firstName ? !checkName(firstName) : false;
  const lastNameValidate = !!firstName ? !checkName(lastName) : false;
  const userNameValidate = !!userName
    ? !validator.isAlpha(userName, 'en-US')
    : true;
  const emailValidate = !!email ? !validator.isEmail(email) : true;
  const passwordValidate = !!password ? password.length < 8 : true;
  const confirmPassValidate = !!confirmPass ? confirmPass !== password : true;

  return (
    <>
      <ScrollView>
        <Input
          inputStyle={$.input}
          inputContainerStyle={$.inputContainerStyle}
          placeholder="First Name"
          containerStyle={$.containerStyle}
          placeholderTextColor="gray"
          value={firstName}
          errorMessage={firstNameError ? 'Incorrect characters' : ' '}
          errorStyle={$.error}
          onChangeText={(text) =>
            dispatch(setCredentials({ firstName: text, lastName, email }))
          }
          onBlur={() => setFirstNameError(firstNameValidate)}
        />
        <Input
          inputStyle={$.input}
          inputContainerStyle={$.inputContainerStyle}
          placeholder="Last Name"
          containerStyle={$.containerStyle}
          placeholderTextColor="gray"
          value={lastName}
          errorMessage={lastNameError ? 'Incorrect characters' : ' '}
          errorStyle={$.error}
          onChangeText={(text) =>
            dispatch(setCredentials({ firstName, lastName: text, email }))
          }
          onBlur={() => setLastNameError(lastNameValidate)}
        />
        <Input
          inputStyle={$.input}
          inputContainerStyle={$.inputContainerStyle}
          placeholder="UserName*"
          containerStyle={$.containerStyle}
          placeholderTextColor="gray"
          value={userName}
          errorMessage={userNameError ? 'Invalid characters' : ' '}
          errorStyle={$.error}
          onChangeText={(text) => setUserName(text)}
          onBlur={() => setUserNameError(userNameValidate)}
        />
        <Input
          inputStyle={$.input}
          inputContainerStyle={$.inputContainerStyle}
          placeholder="Email*"
          containerStyle={$.containerStyle}
          placeholderTextColor="gray"
          value={email}
          errorMessage={emailError ? 'Incorrect email' : ' '}
          errorStyle={$.error}
          onChangeText={(text) =>
            dispatch(setCredentials({ firstName, lastName, email: text }))
          }
          onBlur={() => setEmailError(emailValidate)}
        />
        <Input
          inputStyle={$.input}
          inputContainerStyle={$.inputContainerStyle}
          placeholder="Password*"
          secureTextEntry
          containerStyle={$.containerStyle}
          placeholderTextColor="gray"
          value={password}
          errorMessage={
            passwordError ? 'Password lenght must be 8 or more' : ' '
          }
          errorStyle={$.error}
          onChangeText={(text) => setPassword(text)}
          onBlur={() => setPasswordError(passwordValidate)}
        />
        <Input
          inputStyle={$.input}
          inputContainerStyle={$.inputContainerStyle}
          placeholder="Confirm password*"
          secureTextEntry
          containerStyle={$.containerStyle}
          placeholderTextColor="gray"
          value={confirmPass}
          errorMessage={confirmPassError ? 'Confirm your password' : ' '}
          errorStyle={$.error}
          onChangeText={(text) => setConfirmPass(text)}
          onBlur={() => setConfirmPassError(confirmPassValidate)}
        />

        <FormButton
          disabled={
            firstNameValidate ||
            lastNameValidate ||
            userNameValidate ||
            emailValidate ||
            passwordValidate ||
            confirmPassValidate
          }
          onPress={() => {
            dispatch(
              signUp({
                firstName,
                lastName,
                email,
                password,
                userName,
              }),
            );
          }}>
          Sing up
        </FormButton>
        <FBButton />
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
          <View>
            <Text style={{ ...$.signIn, marginTop: 10 }}>
              Already have an account?
            </Text>
            <Text style={{ ...$.signIn, color: '#3A86FF', marginBottom: 40 }}>
              Sing in
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </>
  );
};

const $ = StyleSheet.create({
  input: {
    fontFamily: 'Manrope-Regular',
    padding: 0,
  },
  containerStyle: {
    padding: 5,
    paddingBottom: 0,
  },
  inputContainerStyle: {
    borderWidth: 3,
    borderBottomWidth: 3,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderColor: '#ff006e',
    borderRadius: 5,
    margin: 0,
  },
  error: {
    fontFamily: 'Manrope-Regular',
    margin: 0,
    padding: 0,
    paddingLeft: 10,
  },
  signIn: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
  },
});

export default RegisterScreen;
