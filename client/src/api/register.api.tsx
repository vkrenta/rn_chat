import { TCredentials } from 'src/types';
import sendRequest from './send-request';

const register = async (credentials: TCredentials) =>
  sendRequest(
    'http://localhost:8000/api/auth/register',
    'POST',
    { 'Content-type': 'application/json' },
    JSON.stringify(credentials),
  );

export default register;
