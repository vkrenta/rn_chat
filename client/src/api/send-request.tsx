import { ENV, SERVER_LINK_DEV, SERVER_LINK_PROD } from '../../config';

let SERVER_LINK: string = SERVER_LINK_DEV;
if (ENV === 'PROD') SERVER_LINK = SERVER_LINK_PROD;

console.log(SERVER_LINK);

const sendRequest = async (
  path: string,
  method: string,
  headers: any,
  body: string | null = null,
) => {
  const response = await fetch(`${SERVER_LINK}/${path}`, {
    method,
    headers,
    body,
  });

  const result = await response.json();

  if (response.ok) return result;
  if (response.status === 401 && result?.type === 'info') return result;
  throw Error(response.status.toString());
};

export default sendRequest;
