import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavBar: FC = () => {
  return (
    <View style={styles.content}>
      <Icon name="rocket" size={30} color="#900" />
      <Link to="/register">
        <Text style={styles.text}>Register</Text>
      </Link>
      <Link to="/login">
        <Text style={styles.text}>Login</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#d7e',
  },
});

export default NavBar;
