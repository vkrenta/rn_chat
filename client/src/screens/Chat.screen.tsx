import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';

const socket = io.connect('http://localhost:8000');

const ChatItem: React.FC = (props) => {
  return (
    <View
      style={{
        margin: 5,
        borderRadius: 20,
        backgroundColor: '#FFBE0B',
      }}>
      <Text style={{ fontFamily: 'Manrope-Regular', padding: 20 }}>
        {props.children}
      </Text>
    </View>
  );
};

export default function ChatScreen() {
  const [text, setText] = useState('');
  const [chatList, setChatList] = useState<{ key: number; message: any }[]>([]);

  useEffect(() => {
    (async () => {
      const storedMessages = await AsyncStorage.getItem('messages');
      if (storedMessages) setChatList(JSON.parse(storedMessages));
    })();
  }, []);
  socket.once('message', (message: any) => {
    setChatList([...chatList, { message, key: Math.random() + Date.now() }]);
    AsyncStorage.setItem(
      'messages',
      JSON.stringify([
        ...chatList,
        { message, key: Math.random() + Date.now() },
      ]),
    );
  });

  const itemList = chatList.map((x) => (
    <ChatItem key={x.key}>{x.message}</ChatItem>
  ));

  return (
    <View style={{ position: 'relative', width: '100%', height: '100%' }}>
      <ScrollView style={{ marginBottom: 80 }}>{itemList}</ScrollView>

      <View
        style={{
          ...$.senderContainer,
          marginBottom: -18,
          bottom: '0%',
        }}>
        <Input
          inputStyle={$.input}
          inputContainerStyle={$.inputContainerStyle}
          placeholder="Enter message"
          containerStyle={$.containerStyle}
          placeholderTextColor="gray"
          onChangeText={(t) => setText(t)}
          value={text}
          onEndEditing={() => {
            if (!!text) socket.emit('message', text);
            setText('');
          }}
        />
        <Button
          buttonStyle={$.buttonContainerStyle}
          titleStyle={$.titleStyle}
          title="Send"
          onPress={() => {
            if (!!text) socket.emit('message', text);
            setText('');
          }}
        />
      </View>
    </View>
  );
}

const $ = StyleSheet.create({
  senderContainer: {
    position: 'absolute',
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8338EC',
    paddingTop: 5,
  },
  input: {
    fontFamily: 'Manrope-Regular',
    padding: 0,
  },
  containerStyle: {
    padding: 5,
    flex: 1,
  },
  inputContainerStyle: {
    borderWidth: 3,
    borderBottomWidth: 3,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderColor: '#ff006e',
    borderRadius: 5,
    margin: 0,
    backgroundColor: 'white',
  },
  error: {
    fontFamily: 'Manrope-Regular',
    margin: 0,
    padding: 0,
    paddingLeft: 10,
  },
  buttonContainerStyle: {
    flex: 1,
    borderRadius: 15,
    width: 70,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 30,
    backgroundColor: '#3A86FF',
  },
  titleStyle: {
    fontFamily: 'Manrope-Bold',
  },
});
