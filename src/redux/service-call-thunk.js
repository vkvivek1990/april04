import axios from "axios";
import { showLoader, hideLoader } from "./actions/registration.action";

export const serviceCallThunk = (config, success, fail) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {

      dispatch(showLoader());

      axios.interceptors.request.use((config)=>{
       config.headers.Authorization = "Bearer"+" "+localStorage.getItem("access_token");
       config.headers.UserGrpid = localStorage.getItem("Group_id");
       config.headers.active_role = localStorage.getItem("active_role");
       config.headers.active_role_id = localStorage.getItem("active_role_id");
       config.headers.Userid = localStorage.getItem("user_id");
        return config;
      },(error)=>{
        return Promise.reject(error);
      });

      axios(config)
        .then((response) => {
          dispatch(hideLoader());
          const responseData =
            response && response.data ? response.data : response;
          resolve(
            success
              ? dispatch(success(responseData["data"]))
              : responseData["data"]
          );
        })
        .catch((error) => {
          dispatch(hideLoader());
          const errorData = error && error.data ? error.data : error;
          reject(fail ? dispatch(fail(errorData)) : errorData);
        });
    });
};
