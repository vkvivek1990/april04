import { action_groups, action_transactions } from '../actions/trip.creation.action';


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case action_groups:
      return {
        ...state,
        groups: action.payLoad.map(data => ({ value: data.group_id, label: data.group_name }))
      }
    case action_transactions:
      return {
        ...state,
        transactions: action.payLoad
      }
    default:
      return state;
  }
};