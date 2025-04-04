import { serviceCallThunk } from "../service-call-thunk";
export const action_group_roles = "action/group/roles";
export const action_transport_mapping = "action/transport_mapping";
export const action_transport_roles = "action/transport_roles";


let tpa = {};


export const transportMapping = (payLoad) => {
  return {
    type: action_transport_mapping,
    payLoad,
  };
};

const groupRoles = (payLoad) => {
  tpa = payLoad.filter(data => (data.user_type === 'TPA'))[0];

  return {
    type: action_group_roles,
    payLoad,
  };
}

export const onLoad = (group_id, transaction_id) => {

  return async (dispatch, getState) => {
    try {
      const group_config = {
        headers: {
          "Content-Type": "application/json",
        },
        url: `https://etab-db-001.herokuapp.com/v1/agency/tl_group/group_id/${group_id}`,
        method: "GET"
      }

      const transport_mapping_config = {
        headers: {
          "Content-Type": "application/json",
        },
        url: `https://etab-db-001.herokuapp.com/v1/agency/tl_transport_mapping/transaction_id/${transaction_id}`,
        method: "GET"
      }
      return await Promise.all([dispatch(serviceCallThunk(group_config, groupRoles)), dispatch(serviceCallThunk(transport_mapping_config, transportMapping))]);
    } catch (err) {
      throw err;
    }
  }
}

const transportRoles = (payLoad) => {
  return {
    type: action_transport_roles,
    payLoad,
  };
}

export const tpaService = (group) => {

  return async (dispatch, getState) => {
    try {
      const transaction_config = {
        headers: {
          "Content-Type": "application/json",
        },
        url: `https://etab-db-001.herokuapp.com/v1/agency/tl_transport_mapping/transport_agent_id/${tpa.type_of_user_id}`,
        method: "GET"
      }
      return await dispatch(serviceCallThunk(transaction_config, transportRoles));
    } catch (err) {
      throw err;
    }
  }
}