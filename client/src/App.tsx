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
import { Provider, useSelector } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import createMiddleware from 'redux-saga';
import watchers from './saga';
import Toast from './components/Toast';

const App: React.FC = () => {
  const sagaMiddleware = createMiddleware();
  const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ));
  for (const w of watchers) sagaMiddleware.run(w);

  return (
    <>
      <Provider store={store}>
        <NativeRouter>
          <SafeAreaView>
            <ImageBackground
              source={require('./static/images/leaves.jpg')}
              style={$.image}>
              <StatusBar translucent backgroundColor="transparent" />
              <Toast />
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
          </SafeAreaView>
        </NativeRouter>
      </Provider>
    </>
  );
};

const $ = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default App;