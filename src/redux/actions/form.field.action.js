import { serviceCallThunk } from "../service-call-thunk";
import { serviceEndPointUrl, serviceEndPointUrl_V1 } from "../../util/util";
export const actionTlUserFormField = "action/TL_USER_FORM_FIELDS";
export const actionTlTutorFormField = "action/TL_TUTOR_FORM_FIELDS";
export const actionTlCorporateFormField = "action/TL_CORPORATE_FORM_FIELDS";
export const actionTlWpFormField = "action/TL_WP_FORM_FIELDS";
export const actionTlContractorFormField = "action/TL_CONTRACTOR_FORM_FIELDS";
export const actionTlCollegeFormField = "action/TL_COLLEGE_FORM_FIELDS";
export const actionTlSubContractorFormField = "action/TL_SUB_CONT_FORM_FIELDS";
export const actionTlDeliveryBoyFormField =
  "action/TL_DELIVERY_BOY_FORM_FIELDS";
export const actionTlTransportAgentFormField =
  "action/TL_TRANSPORT_AGENT_FORM_FIELDS";
export const actionTlDriverFormField = "action/TL_DRIVER_FORM_FIELDS";
export const actionTlVehicleFormField = "action/TL_VEHICLE_FORM_FIELDS";
export const actionTlIndustryFormField = "action/TL_INDUSTRY_FORM_FIELDS";
export const actionGetUserid = "action/USER_ID";
export const actionGetContractorid = "action/CONTRACTOR_ID";
export const actionGetTransportAgentid = "action/TRANSPORT_AGENT_ID";
export const actionFormsInitialValues = "action/FORM_INITIAL_VALUES";
export const actionRemoveInitialValues = "action/REMOVE_FORM_INITIAL_VALUES";
export const actionGetTlContractorInitialValues =
  "action/TL_CONTRACTOR_INITIAL_VALUES";
export const actionGetTlSubContractorInitialValues =
  "action/TL_SUB_CONTRACTOR_INITIAL_VALUES";
export const actionGetTlTransportAgentInitialValues =
  "action/TL_TRANSPORT_AGENT_INITIAL_VALUES";
export const actionGetTlWaterPlantInitialValues =
  "action/TL_WATER_PLANT_INITIAL_VALUES";
export const actionGetTlIndustryInitialValues =
  "action/TL_INDUSTRY_INITIAL_VALUES";
export const actionGetTlDriverInitialValues = "action/TL_DRIVER_INITIAL_VALUES";
export const actionGetTlVehicleInitialValues =
  "action/TL_VEHICLE_INITIAL_VALUES";
export const actionGetTlDeliveryBoyInitialValues =
  "action/TL_DELIVERY_BOY_INITIAL_VALUES";
export const actionGetTlLoginPageFormFields =
  "action/TL_LOGIN_PAGE_FORM_FIELDS";

export const getTlUserFormField = (payLoad) => {
  return {
    type: actionTlUserFormField,
    payLoad,
  };
};
export const getTlTutorFormField = (payLoad) => {
  return {
    type: actionTlTutorFormField,
    payLoad,
  };
};
export const getTlCorporateFormField = (payLoad) => {
  return {
    type: actionTlCorporateFormField,
    payLoad,
  };
};

export const getTlCollegeFormField = (payLoad) => {
  return {
    type: actionTlCollegeFormField,
    payLoad,
  };
};

export const getTlWPFormField = (payLoad) => {
  return {
    type: actionTlWpFormField,
    payLoad,
  };
};

export const getTlContractorFormField = (payLoad) => {
  return {
    type: actionTlContractorFormField,
    payLoad,
  };
};

export const getSubTlContractorFormField = (payLoad) => {
  return {
    type: actionTlSubContractorFormField,
    payLoad,
  };
};

export const getTlDeliveryBoyFormField = (payLoad) => {
  return {
    type: actionTlDeliveryBoyFormField,
    payLoad,
  };
};

export const getTlTransportAgentFormField = (payLoad) => {
  return {
    type: actionTlTransportAgentFormField,
    payLoad,
  };
};

export const getTlDriverFormField = (payLoad) => {
  return {
    type: actionTlDriverFormField,
    payLoad,
  };
};

export const getTlVehicleFormField = (payLoad) => {
  return {
    type: actionTlVehicleFormField,
    payLoad,
  };
};

export const getTlIndustryFormField = (payLoad) => {
  return {
    type: actionTlIndustryFormField,
    payLoad,
  };
};

export const getUserId = (payLoad) => {
  //debugger;
  return {
    type: actionGetUserid,
    payLoad,
  };
};

export const getContractorId = (payLoad) => {
  return {
    type: actionGetContractorid,
    payLoad,
  };
};

export const getTransportAgentId = (payLoad) => {
  return {
    type: actionGetTransportAgentid,
    payLoad,
  };
};

export const getLoginPageFormFields = (payLoad) => {
  return {
    type: actionGetTlLoginPageFormFields,
    payLoad,
  };
};

export const getFormInitialValues = (payLoad) => {
  return {
    type: actionFormsInitialValues,
    payLoad,
  };
};

export const getTlContractorInitialValues = (payLoad) => {
  return {
    type: actionGetTlContractorInitialValues,
    payLoad,
  };
};

export const getTlSubContractorInitialValues = (payLoad) => {
  return {
    type: actionGetTlSubContractorInitialValues,
    payLoad,
  };
};

export const getTlWaterPlantInitialValues = (payLoad) => {
  return {
    type: actionGetTlWaterPlantInitialValues,
    payLoad,
  };
};

export const getTlIndustryInitialValues = (payLoad) => {
  return {
    type: actionGetTlIndustryInitialValues,
    payLoad,
  };
};

export const getTlTransportAgentInitialValues = (payLoad) => {
  return {
    type: actionGetTlTransportAgentInitialValues,
    payLoad,
  };
};

export const getTlVehicleInitialValues = (payLoad) => {
  return {
    type: actionGetTlVehicleInitialValues,
    payLoad,
  };
};

export const getTlDriverInitialValues = (payLoad) => {
  return {
    type: actionGetTlDriverInitialValues,
    payLoad,
  };
};

export const getTlDeliveryBoyInitialValues = (payLoad) => {
  return {
    type: actionGetTlDeliveryBoyInitialValues,
    payLoad,
  };
};

export const removeInitialValues = (payLoad) => {
  return {
    type: actionRemoveInitialValues,
    payLoad,
  };
};

export const getformFields = (formName) => {
  if (formName === "tl_user") {
    return getFormDetails(formName, getTlUserFormField);
  }
  if (formName === "tl_tutor") {
    return getFormDetails(formName, getTlTutorFormField);
  }
  if (formName === "tl_corporate") {
    return getFormDetails(formName, getTlCorporateFormField);
  }
  if (formName === "tl_college") {
    return getFormDetails(formName, getTlCollegeFormField);
  }
  if (formName === "tl_water_plant") {
    return getFormDetails(formName, getTlWPFormField);
  }
  if (formName === "tl_contractor") {
    return getFormDetails(formName, getTlContractorFormField);
  }
  if (formName === "tl_sub_contractor") {
    return getFormDetails(formName, getSubTlContractorFormField);
  }
  if (formName === "tl_delivery_boy") {
    return getFormDetails(formName, getTlDeliveryBoyFormField);
  }
  if (formName === "tl_transport_agent") {
    return getFormDetails(formName, getTlTransportAgentFormField);
  }
  if (formName === "tl_driver") {
    return getFormDetails(formName, getTlDriverFormField);
  }
  if (formName === "tl_vehicle") {
    return getFormDetails(formName, getTlVehicleFormField);
  }
  if (formName === "tl_industry") {
    return getFormDetails(formName, getTlIndustryFormField);
  }
  if (formName === "tl_login") {
    return getLoginFormDetails(formName, getLoginPageFormFields);
  }
  return;
};

export const getFormDetails = (formName, actionLoader) => {
  return async (dispatch, getState) => {
    try {
      const config = {
        url: `${serviceEndPointUrl_V1}/v1/agency/tl_field_info/form_name/${formName}`,
        method: "GET",
      };
      return await dispatch(serviceCallThunk(config, actionLoader));
    } catch (err) {
      throw err;
    }
  };
};

export const getLoginFormDetails = (formName, actionLoader) => {
  return async (dispatch, getState) => {
    try {
      const config = {
        url: `http://localhost:3080/v1/token`,
        method: "GET",
      };
      return await dispatch(serviceCallThunk(config, actionLoader));
    } catch (err) {
      throw err;
    }
  };
};

export const getUserFromTLUser = (id) => {
  //debugger;
  return async (dispatch, getState) => {
    try {
      return await dispatch(getUserId(id));
    } catch (err) {
      throw err;
    }
  };
};

export const getContractorIdFromTLContractor = (id) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(getContractorId(id));
    } catch (err) {
      throw err;
    }
  };
};

export const getTransportAgentIdFromTLTransportAgent = (id) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(getTransportAgentId(id));
    } catch (err) {
      throw err;
    }
  };
};

export const dispatchFormInitialValues = (initialValues) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(getFormInitialValues(initialValues));
    } catch (err) {
      throw err;
    }
  };
};

export const dispatchTlContractorInitialValues = (initialValues) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(getTlContractorInitialValues(initialValues));
    } catch (err) {
      throw err;
    }
  };
};

export const dispatchTlSubContractorInitialValues = (initialValues) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(getTlSubContractorInitialValues(initialValues));
    } catch (err) {
      throw err;
    }
  };
};

export const dispatchTlWaterPlantInitialValues = (initialValues) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(getTlWaterPlantInitialValues(initialValues));
    } catch (err) {
      throw err;
    }
  };
};

export const dispatchTlIndustryInitialValues = (initialValues) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(getTlIndustryInitialValues(initialValues));
    } catch (err) {
      throw err;
    }
  };
};

export const dispatchTlTransportAgentInitialValues = (initialValues) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(getTlTransportAgentInitialValues(initialValues));
    } catch (err) {
      throw err;
    }
  };
};

export const dispatchTlVehicleInitialValues = (initialValues) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(getTlVehicleInitialValues(initialValues));
    } catch (err) {
      throw err;
    }
  };
};

export const dispatchTlDriverInitialValues = (initialValues) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(getTlDriverInitialValues(initialValues));
    } catch (err) {
      throw err;
    }
  };
};

export const dispatchTlDeliveryBoyInitialValues = (initialValues) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(getTlDeliveryBoyInitialValues(initialValues));
    } catch (err) {
      throw err;
    }
  };
};

// export const submitForm = (formName) => {
//   return async (dispatch, getState) => {
//     try {
//       const config = {
//         url: `${serviceEndPointUrl}/v1/agency/tl_field_info/form_name/${formName}`,
//         method: "POST",
//       };
//       return await dispatch(serviceCallThunk(config, getTlUserFormField));
//     } catch (err) {
//       throw err;
//     }
//   };
// };
