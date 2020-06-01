import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './screens/Register.screen';
import LoginScreen from './screens/Login.screen';
import { Provider, useSelector } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { RootState } from './reducers';
import createMiddleware from 'redux-saga';
import watchers from './saga';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Root, Spinner } from 'native-base';
import Loader from './components/Loader';

const MainStack = createStackNavigator();

const MainApp = () => {
  const token = useSelector((state: RootState) => state.token);
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={$.loaderOverlay}>
        <Loader />

        <Root>
          {!!token ? (
            <View>
              <Text>Hi</Text>
            </View>
          ) : (
            <MainStack.Navigator>
              <MainStack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                  title: 'Sign Up',
                  headerStyle: $.header,
                  headerTitleStyle: $.headerTitle,
                }}
              />
              <MainStack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  title: 'Sign In',
                  headerStyle: $.header,
                  headerTitleStyle: $.headerTitle,
                  headerTintColor: 'white',
                }}
              />
            </MainStack.Navigator>
          )}
        </Root>
      </View>
    </NavigationContainer>
  );
};

const App: React.FC = () => {
  const sagaMiddleware = createMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  for (const w of watchers) sagaMiddleware.run(w);

  return (
    <>
      <Provider store={store}>
        <MainApp />
      </Provider>
    </>
  );
};

const $ = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  headerTitle: {
    fontFamily: 'Manrope-Bold',
    color: 'white',
  },
  header: {
    backgroundColor: '#fb5607',
  },
  loaderOverlay: {
    width: '100%',
    height: '100%',
    position: 'relative',
    zIndex: 0,
  },
});

export default App;
