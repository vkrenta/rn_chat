const sendRequest = async (
  path: string,
  method: string,
  headers: any,
  body: string | null = null,
) => {
  const response = await fetch(path, {
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
