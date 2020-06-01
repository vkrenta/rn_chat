import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import RegisterScreen from './screens/Register.screen';
import LoginScreen from './screens/Login.screen';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { RootState } from './reducers';
import createMiddleware from 'redux-saga';
import watchers from './saga';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Root, Spinner } from 'native-base';
import Loader from './components/Loader';
import ChatScreen from './screens/Chat.screen';
import { SET_TOKEN } from './actions/action-types';

const Stack = createStackNavigator();

const MainApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) dispatch({ type: SET_TOKEN, payload: storedToken });
    })();
  }, []);
  const token = useSelector((state: RootState) => state.token);
  if (token) AsyncStorage.setItem('token', token);
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={$.loaderOverlay}>
        <Loader />

        <Root>
          {!!token ? (
            <Stack.Navigator>
              <Stack.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                  title: 'RNChat',
                  headerStyle: $.header,
                  headerTitleStyle: $.headerTitle,
                }}
              />
            </Stack.Navigator>
          ) : (
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
