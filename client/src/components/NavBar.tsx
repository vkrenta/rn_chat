import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NavBar: FC = () => {
  return (
    <View>
      <Text style={styles.title}>This will be header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontFamily: 'Manrope-SemiBold' },
});

export default NavBar;
