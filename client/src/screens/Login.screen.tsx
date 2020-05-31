import React, { FC, useState } from 'react';
import {
  View,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import FormButton from '../components/FormButton';
import FBButton from '../components/FBButton';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { signIn } from '../actions';

const LoginScreen: FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateLogin = !!login
    ? !(validator.isEmail(login) || validator.isAlpha(login, 'en-US'))
    : true;

  const validatePassword = !!password ? password.length < 8 : true;

  return (
    <>
      <ScrollView>
        <View style={$.root}>
          <Input
            inputStyle={$.input}
            inputContainerStyle={$.inputContainerStyle}
            placeholder="Login*"
            containerStyle={$.containerStyle}
            placeholderTextColor="gray"
            errorStyle={$.error}
            value={login}
            onChangeText={(text) => setLogin(text)}
            onBlur={() => setLoginError(validateLogin)}
            errorMessage={loginError ? 'Must be username or email' : ' '}
          />
          <Input
            inputStyle={$.input}
            inputContainerStyle={$.inputContainerStyle}
            placeholder="Password*"
            containerStyle={$.containerStyle}
            placeholderTextColor="gray"
            errorStyle={$.error}
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            onBlur={() => setPasswordError(validatePassword)}
            errorMessage={
              passwordError ? 'Password must contain 8 characters or more' : ' '
            }
          />
          <FormButton
            disabled={validateLogin || validatePassword}
            onPress={() => dispatch(signIn({ login, password }))}>
            Sign In
          </FormButton>
          <FBButton login />
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Register')}>
            <View>
              <Text style={{ ...$.signIn, marginTop: 10 }}>
                Don't have an account?
              </Text>
              <Text style={{ ...$.signIn, color: '#3A86FF', marginBottom: 40 }}>
                Sign Up
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </>
  );
};

const $ = StyleSheet.create({
  root: {
    marginTop: 20,
  },
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

export default LoginScreen;
