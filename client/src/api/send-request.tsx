const sendRequest = async (
  path: string,
  method: string,
  headers: any,
  body: string | null = null,
) => {
  const response = await fetch(`http://localhost:8000${path}`, {
    method,
    headers,
    body,
  });

  const result = await response.json();
  const error = new Error();
  if (response.status === 500) {
    error.message = JSON.stringify({
      code: 500,
      message: result.payload,
    });
    throw error;
  }
  if (response.status === 404) {
    error.message = JSON.stringify({
      code: 404,
      message: result.payload,
    });
    throw error;
  }
  if (!response.ok) {
    error.message = JSON.stringify({
      code: result.code || 400,
      message: result.payload,
    });
    throw error;
  }

  return result;
};

export default sendRequest;
