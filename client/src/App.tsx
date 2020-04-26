/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {NativeRouter, Switch, Route, Link} from 'react-router-native';
import RegisterScreen from './screens/Register.screen';
import LoginScreen from './screens/Login.screen';

const App: React.FC = () => {
  return (
    <>
      <NativeRouter>
        <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
          <StatusBar barStyle="dark-content" />
          <View style={{flexDirection: 'row'}}>
            <Link to="/register" style={{padding: 20, width: 100}}>
              <Text>Register</Text>
            </Link>
            <Link to="/login" style={{padding: 20, width: 100}}>
              <Text>Login</Text>
            </Link>
          </View>
          <Switch>
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/login" component={LoginScreen} />
          </Switch>
        </SafeAreaView>
      </NativeRouter>
    </>
  );
};

export default App;
