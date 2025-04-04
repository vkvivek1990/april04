import {
  actionGetRegistration,
  actionGetImageBase64,
  actionTlUserFormField1,
  actionServiceClicked,
  actionServiceUnClicked,
  actionEnableServiceMenu,
  actionGetClickedServices,
  actionCurrentPageType,
  actionShowLoader,
  actionHideLoader,
  removeTypeCurrentPageTypeDatas,
  actionerrstatus,
} from "../actions/registration.action";
export default (
  state = {
    firstName: "Renold",
    showLoader: false,
    serviceClicked: [],
    err_status_data: "",
  },
  action
) => {
  switch (action.type) {
    case actionShowLoader:
      return {
        ...state,
        showLoader: true,
      };

    case actionHideLoader:
      return {
        ...state,
        showLoader: false,
      };

    case actionGetRegistration:
      return {
        ...state,
        ...action.payLoad,
      };
    case actionGetImageBase64:
      return {
        ...state,
        ...action.payLoad,
      };
    case actionTlUserFormField1:
      return {
        ...state,
        tl_user_form_field: action.payLoad,
      };
    case actionServiceClicked:
      return {
        ...state,
        serviceClicked: state.serviceClicked.concat(action.payLoad),
      };
    case actionEnableServiceMenu:
      return {
        ...state,
        enable_service_menu: action.payLoad,
      };
    case actionGetClickedServices:
      return {
        ...state,
        service_id: action.payLoad,
      };
    case actionCurrentPageType:
      let currentData = action.payLoad;
      return {
        ...state,
        current_page_type: Object.assign(
          {},
          state.current_page_type,
          currentData
        ),
      };
    case removeTypeCurrentPageTypeDatas:
      return {
        ...state,
        current_page_type: [],
      };
    case actionServiceUnClicked:
      let id = action.payLoad;
      let findInd = state.serviceClicked.findIndex((a) => a.id === id);
      let arrayState = state.serviceClicked;
      arrayState.splice(findInd, 1);
      return {
        ...state,
        serviceClicked: Array.from(id === "removeAll" ? [] : arrayState),
      };
    case actionerrstatus:
      return {
        ...state,
        err_status_data: action.payLoad.error.message
          ? action.payLoad.error.message
          : action.payLoad,
      };
    default:
      return state;
  }
};
