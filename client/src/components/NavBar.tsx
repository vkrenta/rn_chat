import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Left,
  Right,
} from 'native-base';

const NavBar: FC = () => {
  return (
    <Header>
      <Left />
      <Body>
        <Title style={{fontFamily: 'Manrope-SemiBold'}}>Header</Title>

        {/* <Link to="/register">
          <Text style={styles.text}>Register</Text>
        </Link>
        <Link to="/login">
          <Text style={styles.text}>Login</Text>
        </Link> */}
      </Body>
      <Right />
    </Header>
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
