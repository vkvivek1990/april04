import { serviceCallThunk } from "../service-call-thunk";
import { fieldsInput } from "../../Apidata";
import { reset } from "redux-form";
import { serviceEndPointUrl, serviceEndPointUrl_V1 } from "../../util/util";
export const actionGetRegistration = "action/Get_Registration";
export const actionGetImageBase64 = "action/Get_Image_base64";
export const actionTlUserFormField1 = "action/TL_USER_FORM_FIELDS";
export const actionUpdateGridResult = "action/UPDATE_GRID_RESULT";
export const actionServiceClicked = "action/SERVICE_ITEMS_CLICKED";
export const actionServiceUnClicked = "action/SERVICE_ITEMS_UN_CLICKED";
export const actionEnableServiceMenu = "action/ENABLE_SERVICE_MENU";
export const actionGetClickedServices = "action/CLICKED_SERVICES_MENU";
export const actionCurrentPageType = "action/CURRENT_PAGE_TYPE";
export const actionerrstatus = "action/UPDATE_ERR_STATUS";
export const removeTypeCurrentPageTypeDatas =
  "action/REMOVE_CURRENT_PAGE_TYPE_DATAS";
export const actionShowLoader = "action/SHOW_LOADER";
export const actionHideLoader = "action/HIDE_LOADER";

export const removeCurrentPageTypeDatas = () => {
  return {
    type: removeTypeCurrentPageTypeDatas,
  };
};

export const getRegistrationSuccess = (payLoad) => {
  return {
    type: actionGetRegistration,
    payLoad,
  };
};

// export const updateErrStatus = (payLoad) => {
//   return {
//     type: actionerrstatus,
//     payLoad,
//   };
// };

export const getImageBase64Success = (payLoad) => {
  return {
    type: actionGetImageBase64,
    payLoad,
  };
};

export const getTlUserFormField = (payLoad) => {
  return {
    type: actionTlUserFormField1,
    payLoad,
  };
};

export const updateErrorStatus = (payLoad) => {
  return {
    type: actionerrstatus,
    payLoad,
  };
};

export const getEnquiryGridResult = (payLoad) => {
  if (payLoad.error && payLoad.error.message) {
    return {
      type: actionerrstatus,
      payLoad,
    };
  } else {
    return {
      type: actionUpdateGridResult,
      payLoad,
    };
  }
};

export const getServicesItemsClicked = (payLoad) => {
  return {
    type: actionServiceClicked,
    payLoad,
  };
};

export const getServicesItemsUnClicked = (payLoad) => {
  return {
    type: actionServiceUnClicked,
    payLoad,
  };
};

export const getEnableServiceMenu = (payLoad) => {
  return {
    type: actionEnableServiceMenu,
    payLoad,
  };
};

export const getClickedServices = (payLoad, currid) => {
  return {
    type: actionGetClickedServices,
    payLoad,
  };
};

export const getCurrentPageType = (payLoad) => {
  return {
    type: actionCurrentPageType,
    payLoad,
  };
};

export const showLoader = () => {
  return {
    type: actionShowLoader,
  };
};
export const hideLoader = () => {
  return {
    type: actionHideLoader,
  };
};

// export const showLoader = () => {
//   return async (dispatch, getState) => {
//     try {
//       return await dispatch(getshowLoader());
//     } catch (err) {
//       throw err;
//     }
//   };
// };

// export const hideLoader = () => {
//   return async (dispatch, getState) => {
//     try {
//       return await dispatch(gethideLoader());
//     } catch (err) {
//       throw err;
//     }
//   };
// };

export const dispatchenableServiceMenu = (getStatus) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(getEnableServiceMenu(getStatus));
    } catch (err) {
      throw err;
    }
  };
};

export const dispatchServicesItemsClicked = (id) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(getClickedServices(id));
    } catch (err) {
      throw err;
    }
  };
};

export const dispatchCurrentPageType = (currentPageType) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(getCurrentPageType(currentPageType));
    } catch (err) {
      throw err;
    }
  };
};

export const getPreviewRegistration = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const fieldValues = fieldsInput;
      const formData = state.form.RegistrationForm.values;
      Object.keys(formData).map((getkeys) => {
        const fieldKeys = getkeys;
        fieldValues.map((data) => {
          data.sectionTabs.map((innerFieldValue) => {
            innerFieldValue.formFields.map((innerFormFieldValue) => {
              return fieldKeys === innerFormFieldValue.field_nm
                ? (innerFormFieldValue.default_value = formData[fieldKeys])
                : "";
            });
          });
        });
      });

      return formData;
    } catch (err) {
      throw err;
    }
  };
};

export const fileUpLoad = (base64, id) => {
  return async (dispatch, getState) => {
    const config = {
      url: id
        ? `${serviceEndPointUrl_V1}/v1/agency/uploadFile/base64/${id}`
        : `${serviceEndPointUrl_V1}/v1/agency/uploadFile/`,
      method: id ? "PUT" : "POST",
      data: {
        base64,
      },
    };
    return await dispatch(serviceCallThunk(config));
  };
};

export const RegisterUserProfile = (currid) => {
  return async (dispatch, getState) => {
    const state = getState();
    const id = state.formField.user_id;
    try {
      let url = `${serviceEndPointUrl_V1}/v1/agency/tl_user/user_id/${id}`;
      let methodType = "PUT";
      const config = {
        url: `${url}`,
        method: `${methodType}`,
      };
      return await dispatch(serviceCallThunk(config));
    } catch (err) {
      throw err;
    }
  };
};

export const submitRegistration = (formName, group) => {
  let url;
  let methodType;

  if (
    formName !== "Enquiry_form" &&
    formName !== "Addproduct_form" &&
    formName !== "Edit_form"
  ) {
    return async (dispatch, getState) => {
      try {
        const state = getState();
        const formData = state.form[formName].values;

        if (formData.hasOwnProperty("id")) {
          let id = formData.user_id;
          methodType = "PUT";
          url = `${serviceEndPointUrl_V1}/v1/agency/${formName}/id/${id}`;
        } else {
          methodType = "POST";
          url = `${serviceEndPointUrl_V1}/v1/agency/${formName}`;
        }
        const config = {
          url: `${url}`,
          method: `${methodType}`,
          data: formData,
        };

        // const config = {
        //   url: `${serviceEndPointUrl}/v1/agency/${formName}`,
        //   method: "POST",
        //   data: formData,
        // };
        return dispatch(serviceCallThunk(config, getEnquiryGridResult));
      } catch (err) {
        throw err;
      }
    };
  } else if (formName === "Enquiry_form") {
    return async (dispatch, getState) => {
      try {
        const state = getState();
        const formData = {
          srchCategory: group,
          searchParam: formName === state.form[formName].values,
        };
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
          // url: 'http://70442582ff2c.ngrok.io/screen/fields/getEnquirySearchData',
          url: "https://wsm-app-service.herokuapp.com/wsm/enquiry/getEnquirySearchData",
          method: "POST",
          data: formData,
        };
        return await dispatch(serviceCallThunk(config, getEnquiryGridResult));
      } catch (err) {
        throw err;
      }
    };
  } else if (formName === "Addproduct_form" || formName === "Edit_form") {
    return async (dispatch, getState) => {
      try {
        const state = getState();
        const formData = state.form[formName].values;
        formData["user_id"] = parseInt(localStorage.getItem("user_id"));
        formData["group_id"] = parseInt(localStorage.getItem("Group_id"));
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
          // url: 'http://70442582ff2c.ngrok.io/screen/fields/getEnquirySearchData',
          url: "https://wsm-app-service.herokuapp.com/wsm/inventory/saveProduct",
          method: "POST",
          data: formData,
        };
        return await dispatch(serviceCallThunk(config, getEnquiryGridResult));
      } catch (err) {
        throw err;
      }
    };
  }
};

export const resetRegistration = (formName) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(reset(formName));
    } catch (err) {
      throw err;
    }
  };
};

export const getRegistration = (url) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const config = {
        url: `${serviceEndPointUrl_V1}/v1/agency/tl_field_info/form_name/${url}`,
        //https://273ae457cea0.ngrok.io/v1/agency/tl_field_info/form_name/tl_user
        method: "GET",
      };
      return await dispatch(serviceCallThunk(config, getRegistrationSuccess));
    } catch (err) {
      throw err;
    }
  };
};

export const getImagebase64 = (id) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const config = {
        url: `${serviceEndPointUrl_V1}/v1/agency/uploadFile/base64/${id}`,
        //https://273ae457cea0.ngrok.io/v1/agency/tl_field_info/form_name/tl_user
        method: "GET",
      };
      return await dispatch(serviceCallThunk(config, getImageBase64Success));
    } catch (err) {
      throw err;
    }
  };
};

export const getServices = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const config = {
        url: `${serviceEndPointUrl_V1}/v1/getServices`,
        method: "GET",
      };
      return await dispatch(serviceCallThunk(config, getRegistrationSuccess));
    } catch (err) {
      throw err;
    }
  };
};

export const getAddedServicesItems = (id) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(getServicesItemsClicked(id));
    } catch (err) {
      throw err;
    }
  };
};

export const getRemovedServicesItems = (id) => {
  return async (dispatch, getState) => {
    try {
      return await dispatch(getServicesItemsUnClicked(id));
    } catch (err) {
      throw err;
    }
  };
};
