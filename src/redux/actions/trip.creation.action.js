import { serviceCallThunk } from "../service-call-thunk";
export const action_groups = "action/groups";
export const action_transactions = "action/transactions";


export const groups = (payLoad) => {
  return {
    type: action_groups,
    payLoad,
  };
};

export const transactions = (payLoad) => {
  return {
    type: action_transactions,
    payLoad,
  };
};

export const onLoad = () => {
  return async (dispatch, getState) => {
    try {
      const group_config = {
        headers: {
          "Content-Type": "application/json",
        },
        url: 'https://etab-db-001.herokuapp.com/v1/agency/tl_group/groups',
        method: "GET"
      }

      return await dispatch(serviceCallThunk(group_config, groups));
    } catch (err) {
      throw err;
    }
  }
}

export const transactionService = (group) => {

  return async (dispatch, getState) => {
    try {
      const transaction_config = {
        headers: {
          "Content-Type": "application/json",
        },
        url: `https://etab-db-001.herokuapp.com/v1/agency/tl_transaction_order?group_id=${group.value}`,
        method: "GET"
      }
      return await dispatch(serviceCallThunk(transaction_config, transactions));
    } catch (err) {
      throw err;
    }
  }
}