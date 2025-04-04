import { serviceCallThunk } from "../service-call-thunk";
import { serviceEndPointUrl } from "../../util/util";
export const updatemenu = "action/UPDATE_MENU";

// export const loginAction = (id) => {
//   return async (dispatch, getState) => {
//     const state = getState();

//     const formData = state.form.tl_login.values;
//     let loginCredential = {
//       user_number: formData["user_number"],
//       password: formData["password"],
//     };
//     const config = {
//       url:'http://bb443d911615.ngrok.io/v1/token/user_id/100006/password/123',
//       method: "POST",
//       data: loginCredential,
//     };
//     return await dispatch(serviceCallThunk(config));
//   };
// };

export const loginAction = (id) => {
  return async (dispatch, getState) => {
    const state = getState();

    const formData = state.form.tl_login.values;
    let loginCredential = {
      user_number: formData["user_number"],
      password: formData["password"],
    };
    const config = {
      url: `http://localhost:3080/v1/token`,
      method: "POST",
      data: loginCredential,
    };
    return await dispatch(serviceCallThunk(config));
  };
};

export const getgrouplist = (catagory) => {
  return async (dispatch, getState) => {
    const state = getState();
    debugger;
    const config = {
      url: "https://etab-db-001.herokuapp.com/v1/getUserItemsByRole",
      method: "GET",
      headers: { active_role: catagory },
      data: {},
    };
    return await dispatch(serviceCallThunk(config));
  };
};

export const logoutAction = (id) => {
  return async (dispatch, getState) => {
    const state = getState();

    const formData = state.form.tl_login.values;
    const config = {
      url: "https://etab-db-001.herokuapp.com/v1/token",

      method: "POST",
      data: formData,
    };
    return await dispatch(serviceCallThunk(config));
  };
};

export const userMenuDetails = (role) => {
  return async (dispatch, getState) => {
    const state = getState();
    const config = {
      url: "https://etab-db-001.herokuapp.com/v1/getUserMenu",
      method: "POST",
      headers: { active_role: role },
      data: {},
    };
    return await dispatch(serviceCallThunk(config));
  };
};

export const UpdateMenu = (payLoad) => {
  return (dispatch, getState) => {
    dispatch({
      type: updatemenu,
      payLoad,
    });
  };
};
