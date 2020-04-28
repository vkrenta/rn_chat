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
import NavBar from './components/NavBar';
import {Container, Content, Footer, Form, Item, Input} from 'native-base';
import Bottom from './components/Bottom';

const App: React.FC = () => {
  return (
    <>
      <NativeRouter>
        <Container>
          <StatusBar barStyle="dark-content" />

          <NavBar />

          <Content>
            <Switch>
              <Route exact path="/register" component={RegisterScreen} />
              <Route exact path="/login" component={LoginScreen} />
              <Route exact path="/">
                <Redirect to="register" />
              </Route>
            </Switch>
          </Content>

          <Bottom />
        </Container>
      </NativeRouter>
    </>
  );
};

export default App;
