import { getData } from './BaseApi';

export const getListRestaurant = async () => {
  try {
    const restaurants = await getData('restaurants?$limit=1000');
    return restaurants;
  } catch (error) {
    throw error;
  }
};

export const getOneRestaurant = async (id) => {
  try {
    const restaurant = await getData(`restaurants/${id}`);
    return restaurant;
  } catch (error) {
    throw error;
  }
};
