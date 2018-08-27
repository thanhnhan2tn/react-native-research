import { fromJS } from 'immutable';
import { FETCH_FEEDBACKS_SUCCESS } from 'actions/actionTypes';

const inititalState = fromJS({
  feedbackList: [],
});

const feedBackReducer = (state = inititalState, action) => {
  switch (action.type) {
    case FETCH_FEEDBACKS_SUCCESS:
      const { feedbacks, internalFeedbacks } = action.payload;
      const result = feedbacks.data.filter(i => {
        return internalFeedbacks.some(k => {
          return i._id === k;
        });
      });
      return state.set('feedbackList', result);
    default:
      return state;
  }
}

export default feedBackReducer;
