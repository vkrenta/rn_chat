/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { NativeRouter, Switch, Route, Redirect } from 'react-router-native';
import RegisterScreen from './screens/Register.screen';
import LoginScreen from './screens/Login.screen';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createMiddleware from 'redux-saga';
import watchers from './saga';

const App: React.FC = () => {
  const sagaMiddleware = createMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  for (const w of watchers) sagaMiddleware.run(w);
  return (
    <>
      <Provider store={store}>
        <NativeRouter>
          <View>
            <StatusBar barStyle="dark-content" />
            <ImageBackground
              source={require('./static/images/leaves.jpg')}
              style={$.image}>
              <NavBar />

              <View>
                <Switch>
                  <Route exact path="/register" component={RegisterScreen} />
                  <Route exact path="/login" component={LoginScreen} />
                  <Route exact path="/">
                    <Redirect to="register" />
                  </Route>
                </Switch>
              </View>
            </ImageBackground>
          </View>
        </NativeRouter>
      </Provider>
    </>
  );
};

const W_WIDTH = Dimensions.get('window').width;
const W_HEIGHT = Dimensions.get('window').height;

const $ = StyleSheet.create({
  image: {
    width: W_WIDTH,
    height: W_HEIGHT,
  },
});

export default App;
