import { TCredentials } from '../types';
import sendRequest from './send-request';

const register = async (credentials: TCredentials) =>
  sendRequest(
    'api/auth/register',
    'POST',
    { 'Content-type': 'application/json' },
    JSON.stringify(credentials),
  );

export default register;
