//import { actionSetAuthToken, actionClearAuthToken } from '../actions/authorization.action';
import { updatemenu } from '../actions/authorization.action';

export default (state = {}, action) => {
  switch (action.type) {
    case "actionSetAuthToken":
      return {
        ...state,
        ...action.payLoad.data.access_token,
      };
    case updatemenu:
      return {
        ...state,
       ...action.payLoad,
      }
    case "actionClearAuthToken":
      return {};

    default:
      return state;
  }
};
