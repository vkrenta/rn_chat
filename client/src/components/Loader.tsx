import React from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

export default function Loader() {
  const loader = useSelector((state: RootState) => state.loader);

  if (!loader) return null;

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'rgba(60, 60, 60, 0.5)',
      }}>
      <View
        style={{
          position: 'absolute',
          width: 100,
          height: 100,
          zIndex: 2,
          backgroundColor: '#FFBE0B',
          left: '50%',
          marginLeft: -50,
          top: '50%',
          marginTop: -50,
          borderRadius: 10,
        }}>
        <Spinner
          color="#8338ec"
          style={{
            position: 'absolute',
            left: '50%',
            width: 50,
            height: 50,
            marginLeft: -25,
            top: '50%',
            marginTop: -25,
            zIndex: 3,
          }}
        />
      </View>
    </View>
  );
}
