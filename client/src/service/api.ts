export type ApiMethod = "GET" | "PATCH";

const { REACT_APP_API_URL } = process.env;

export const get = async <T>(): Promise<T> => {
  try {
    const response = await fetch(`${REACT_APP_API_URL}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (response.status === 200) {
      try {
        return await response.json();
      } catch (e) {
        throw e;
      }
    }

    throw new Error(`Api Error with status: ${response.status}`);
  } catch (err) {
    throw err;
  }
};

export const patch = async (temp: number): Promise<any> => {
	const data = { currentSetpoint: temp }
  try {
    const response = await fetch(`${REACT_APP_API_URL}`, {
      method: "PATCH",
			body: JSON.stringify(data),
      headers: {
				"Content-type": "application/json; charset=UTF-8"
      },
    });
    if (response.ok) {
      return response.ok;
    }
    throw new Error(`Api Error with status: ${response.status}`);
  } catch (err) {
    throw err;
  }
};
