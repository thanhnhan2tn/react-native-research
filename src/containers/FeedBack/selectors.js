import { createSelector } from 'reselect';

const getFeedback = state => state.FeedbackReducer;

export const selectFeedback = createSelector(
  getFeedback,
  substate => substate.get('feedbackList'),
);

export default getFeedback;
