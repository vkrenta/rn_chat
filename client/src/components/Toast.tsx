import React, { FC, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { TGlobalState } from '../types';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-native-elements';
import { clearToast } from '../actions';

const toastHeight = 75;
let timeOut: number;
let dropPositionHook: () => Animated.Value;

const show = (
  dropPosition: Animated.Value,
  callback: (dropPos: Animated.Value, dispatch?: any) => void,
  dispatch?: any,
) =>
  Animated.timing(dropPosition, {
    toValue: Dimensions.get('window').height - toastHeight - 5,
    duration: 500,
    useNativeDriver: false,
  }).start(() => {
    timeOut = setTimeout(() => callback(dropPosition, dispatch), 2000);
  });

const hide = (dropPosition: Animated.Value, dispatch?: any) =>
  Animated.timing(dropPosition, {
    toValue: Dimensions.get('window').height,
    duration: 500,
    useNativeDriver: false,
  }).start(() => {
    dispatch(clearToast());
  });

const DropAnimation: FC = (props) => {
  const dropPosition = useRef(
    new Animated.Value(Dimensions.get('window').height),
  ).current;
  dropPositionHook = () => dropPosition;
  const dispatch = useDispatch();

  useEffect(() => {
    show(dropPosition, hide, dispatch);
  });

  return (
    <Animated.View style={{ ...$.view, top: dropPosition }}>
      {props.children}
    </Animated.View>
  );
};

const Toast: FC = () => {
  const message = useSelector((state: TGlobalState) => state.toast);
  const dispatch = useDispatch();

  if (!message) return <></>;

  return (
    <>
      <DropAnimation>
        <View style={$.textView}>
          <Text style={$.text}>{message}</Text>
        </View>

        <View style={$.buttonView}>
          <Button
            title="OK"
            onPress={() => {
              clearTimeout(timeOut);
              hide(dropPositionHook(), dispatch);
            }}
            titleStyle={$.buttonTitleStyle}
          />
        </View>
      </DropAnimation>
    </>
  );
};

const $ = StyleSheet.create({
  view: {
    top: 0,
    left: 0,
    width: '100%',
    height: toastHeight,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,25,1)',
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    fontFamily: 'Manrope-Regular',
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonTitleStyle: { fontFamily: 'Manrope-Bold' },
  textView: {
    flex: 4,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
});

export default Toast;
