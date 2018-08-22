import request from 'superagent';

const BASE_URL = 'https://tn-food.herokuapp.com/';
export const getData = async (childUrl) => {
  try {
    const result = await request.get(BASE_URL + childUrl);
    return result;
  } catch (err) {
    throw err;
  }
};

export const postData = async (childUrl, params) => {
  try {
    const result = await request.get(BASE_URL + childUrl).send(params);
    return result;
  } catch (err) {
    throw err;
  }
};
