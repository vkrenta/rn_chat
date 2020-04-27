/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NativeRouter, Switch, Route, Redirect} from 'react-router-native';
import RegisterScreen from './screens/Register.screen';
import LoginScreen from './screens/Login.screen';
import {ThemeProvider} from 'react-native-elements';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <>
      <NativeRouter>
        <SafeAreaView>
          <ThemeProvider>
            <StatusBar barStyle="dark-content" />
            <NavBar />
            <Switch>
              <Route exact path="/register" component={RegisterScreen} />
              <Route exact path="/login" component={LoginScreen} />
              <Route exact path="/">
                <Redirect to="register" />
              </Route>
            </Switch>
          </ThemeProvider>
        </SafeAreaView>
      </NativeRouter>
    </>
  );
};

export default App;
