const auth = process.env.REACT_APP_AUTH_SERVER;
const db = process.env.REACT_APP_DB_SERVER;

export const login = async (data) => {
  try {
    const tokens = await fetch(`${auth}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    const user = await fetch(`${db}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokens.accessToken}`,
      },
    });
    return user.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const getLog = async (userId) => {
  const foodlog = await fetch(`${db}/foodlog/${userId}`)
    .then((response) => response.json())

  return foodlog;
};

export const register = async (data) => {
  const newUser = await fetch(`${db}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
  return newUser.json();
};

export const logFood = async (data) => {
  const logged = await fetch(`${db}/foodlog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });

  return logged.json();
};

export const updateUser = async (data) => {
  const update = await fetch(`${db}/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
  return update.json();
};

export const deleteFood = async (data) => {
  await fetch(`${db}/foodlog`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
};

export const adminGet = async (data) => {
  const users = await fetch(`${db}/user/admin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
  return users.json();
};

export const adminDELETE = async (data) => {
  const users = await fetch(`${db}/user/admin`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
  return users.json();
};
