import { serviceCallThunk } from "../service-call-thunk";
import { serviceEndPointUrl } from "../../util/util";
export const actionAddProductField = "action/ADD_PRODUCT_FORM_FIELDS";
export const actionUpdateAccordian = "action/UPDATE_PRODUCT_ACCRDN";

export const actionUpdateGridResult = "action/UPDATE_GRID_RESULT";

export const getSCHenquiryFormField = (payLoad) => {
    return {
        type: actionAddProductField,
        payLoad,
    };
};

export const updatesearchaccordian = (payLoad) => {
  return (dispatch, getState) => {
    dispatch ({
      type: actionUpdateAccordian,
      payLoad,
    });
  };
};


export const getEnquiryGridResult = ({ProductList}) => {
  return {
    type: actionUpdateGridResult,
    ProductList,
  };
};

export const getDeletedGridResult = (alldata) => {
  return {
    type: actionUpdateGridResult,
    payLoad:alldata.data?alldata.data:[],
  };
};


export const deletecurrrow = (rowdata) => {
  return async (dispatch, getState) => {
    try {
      const formData = rowdata.values;
      formData["user_id"]=parseInt(localStorage.getItem("user_id"));
      formData["group_id"]=parseInt(localStorage.getItem("Group_id"));
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        //url: 'http://70442582ff2c.ngrok.io/screen/fields/getEnqField',
        url: 'https://wsm-app-service.herokuapp.com/wsm/inventory/removeProduct',
        method: "POST",
        data: formData,
      };
      return await dispatch(serviceCallThunk(config, getDeletedGridResult));
    } catch (err) {
      throw err;
    }
  };
};

export const getFormFields = (formName) => {
    return async (dispatch, getState) => {
      try {
        const formData = {
          ctryCd: "IN",
          langCd: "EN",
        };
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
          //url: 'http://70442582ff2c.ngrok.io/screen/fields/getEnqField',
          url: 'https://wsm-app-service.herokuapp.com/wsm/inventory/getInventoryFields',
          method: "POST",
          data: formData,
        };
        return await dispatch(serviceCallThunk(config, getSCHenquiryFormField));
      } catch (err) {
        throw err;
      }
    };
};

export const getAllproductList = (formName) => {
  return async (dispatch, getState) => {
    try {
      const formData = {
        "userId" : parseInt(localStorage.getItem("user_id")),
        "groupId": parseInt(localStorage.getItem("Group_id")),
        "ctryCd":"IN",
        "langCd":"EN"
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        //url: 'http://70442582ff2c.ngrok.io/screen/fields/getEnqField',
        url: 'https://wsm-app-service.herokuapp.com/wsm/inventory/viewAllProduct',
        method: "POST",
        data: formData,
      };
      return await dispatch(serviceCallThunk(config, getEnquiryGridResult));
    } catch (err) {
      throw err;
    }
  };
};