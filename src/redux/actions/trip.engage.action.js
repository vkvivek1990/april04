import { serviceCallThunk } from "../service-call-thunk";

export const actionTripEngageview = "action/UPDATE_TRIP_ENGAGE_DATA";

export const getCatagoryFieldsList = (payLoad) => {
    return {
        type: actionTripEngageview,
        payLoad,
    };
};

export const getCatagoryFields = (formName) => {
    return async (dispatch, getState) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
          url: 'https://etab-db-001.herokuapp.com/v1/agency/tl_group/getAllRoles',
          method: "GET",
        };
        return await dispatch(serviceCallThunk(config, getCatagoryFieldsList));
      } catch (err) {
        throw err;
      }
    };
};

export const setTripEngage = (formData) => {
  return async (dispatch, getState) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        url: 'https://etab-db-001.herokuapp.com/v1/agency/tl_group',
        method: "POST",
        data:formData
      };
      return await dispatch(serviceCallThunk(config));
    } catch (err) {
      throw err;
    }
  };
};