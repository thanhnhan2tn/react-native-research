export const getCurrentRoute = ({ index, routes }) => routes[index].params || {};

export const goingTo = ({ navigation, routeName, text }) => navigation.dispatch({ type: routeName, text });

export default {};
