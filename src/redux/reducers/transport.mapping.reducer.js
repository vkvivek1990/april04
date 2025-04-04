import { action_group_roles, action_transport_mapping, action_transport_roles } from '../actions/transport_mapping.action';


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case action_group_roles:
      return {
        ...state,
        roles: action.payLoad
      }
    case action_transport_mapping:
      return {
        ...state,
        transport: action.payLoad
      }
    case action_transport_roles:
      return {
        ...state,
        transportRoles: action.payLoad
      }
    default:
      return state;
  }
};