const sendRequest = async (
  path: string,
  method: string,
  headers: any,
  body: string | null = null,
) => {
  const response = await fetch(`http://localhost:8000/${path}`, {
    method,
    headers,
    body,
  });

  const result = await response.json();
  if (result.type !== 'data') throw new Error(JSON.stringify(result));
  return result;
};

export default sendRequest;
