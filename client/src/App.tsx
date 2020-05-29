import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import RegisterScreen from './screens/Register.screen';
import LoginScreen from './screens/Login.screen';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import createMiddleware from 'redux-saga';
import watchers from './saga';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Root } from 'native-base';

const Stack = createStackNavigator();

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
        <NavigationContainer>
          <StatusBar translucent backgroundColor="transparent" />
          <Root>
            <Stack.Navigator>
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                  title: 'Sign Up',
                  headerStyle: $.header,
                  headerTitleStyle: $.headerTitle,
                }}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  title: 'Sign In',
                  headerStyle: $.header,
                  headerTitleStyle: $.headerTitle,
                  headerTintColor: 'white',
                }}
              />
            </Stack.Navigator>
          </Root>
        </NavigationContainer>
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
});

export default App;
