export const getCurrentRoute = ({ index, routes }) => {
  return routes[index].params || {};
};
