const usda = process.env.REACT_APP_USDA_SERVER;

const fetchFormatter = (data) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({data}),
  };
};

export const searchByID = async (data) => {
  const url = `${usda}/singleid`;

  const response = await fetch(url, fetchFormatter(data));
  return response.json();
};

export const searchByIDs = async (data) => {
  const url = `${usda}/multiid`;

  const response = await fetch(url, fetchFormatter(data));
  return response.json();
};

export const searchByQuery = async (data) => {
  const url = `${usda}/singlesearch`;

  const response = await fetch(url, fetchFormatter(data));
  return response.json();
};
