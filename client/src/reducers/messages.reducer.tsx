import { Message, ADD_MESSAGE } from '../actions/action-types';
import { TAction } from '../types';

export default function messagesReducer(
  state: Message[] = [],
  action: TAction<Message>,
) {
  action.type === ADD_MESSAGE ? [...state, action.payload] : state;
}
