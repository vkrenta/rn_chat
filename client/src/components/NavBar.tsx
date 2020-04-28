import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Header, Body, Title, Left, Right} from 'native-base';

const NavBar: FC = () => {
  return (
    <Header>
      <Left />
      <Body>
        <Title style={styles.title}>Header</Title>

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
  title: {fontFamily: 'Manrope-SemiBold'},
});

export default NavBar;
