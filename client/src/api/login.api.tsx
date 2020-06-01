import sendRequest from './send-request';

export default function login(credentials: {
  email?: string;
  userName?: string;
  password?: string;
}) {
  if (!credentials.password)
    return sendRequest(
      '/api/auth/fblogin',
      'POST',
      { 'Content-Type': 'application/json' },
      JSON.stringify(credentials),
    );

  return sendRequest(
    '/api/auth/login',
    'POST',
    { 'Content-Type': 'application/json' },
    JSON.stringify(credentials),
  );
}
