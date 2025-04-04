import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import Loginformcomponent from "../Component/Login.form";
import { getFormValues, isDirty } from "redux-form";
import {
  getformFields,
  getContractorIdFromTLContractor,
  dispatchFormInitialValues,
} from "../../../redux/actions/form.field.action";
import {
  submitRegistration,
  dispatchenableServiceMenu,
  dispatchServicesItemsClicked,
  dispatchCurrentPageType,
} from "../../../redux/actions/registration.action";

import {
  loginAction,
  getgrouplist,
  userMenuDetails,
  UpdateMenu,
} from "../../../redux/actions/authorization.action";

import { Updateheadergrouplist, Updateheaderrolelist, Updateheadercatagorylist, Updateheaderselectedgroup,Updateheaderselectedrole,Updateheaderselectedcatagory} from "../../../redux/actions/logindata.action";

let LoginformController = reduxForm({
  form: "tl_login",
  enableReinitialize: true,
})(Loginformcomponent);

export default connect(
  (state) =>
    // console.log(state),
    ({
      initialValues: state.formField && state.formField,
      values: getFormValues("tl_login")(state),
      dirty: isDirty("tl_login")(state),
      formFieldComponent: state.formField.tl_login_page_field,
      formFieldErrors: state.form.tl_login && state.form.tl_login.syncErrors,
      serviceClicked: state.register.serviceClicked,
      tl_login: state.form.tl_login && state.form.tl_login.values,
      current_page_type: state.register.current_page_type,
    }),
  {
    getFormFields: (formName) => getformFields(formName),
    getContractorIdFromTLContractor: (id) =>
      getContractorIdFromTLContractor(id),
    loginAction: (formName) => loginAction(formName),
    getgrouplist: (catagory) => getgrouplist(catagory), 
    userMenuDetails: (hdrdata) => userMenuDetails(hdrdata),
    UpdateMenu: (payload) => UpdateMenu(payload),
    Updateheadergrouplist: (payload) => Updateheadergrouplist(payload),
    Updateheaderrolelist: (payload) => Updateheaderrolelist(payload),
    Updateheadercatagorylist: (payload) => Updateheadercatagorylist(payload),
    Updateheaderselectedgroup: (payload) => Updateheaderselectedgroup(payload),
    Updateheaderselectedrole: (payload) => Updateheaderselectedrole(payload),
    Updateheaderselectedcatagory: (payload) => Updateheaderselectedcatagory(payload),
    dispatchFormInitialValues: (values) => dispatchFormInitialValues(values),
    dispatchenableServiceMenu: (values) => dispatchenableServiceMenu(values),
    dispatchServicesItemsClicked: (id) => dispatchServicesItemsClicked(id),
    dispatchCurrentPageType: (curPageType) =>
      dispatchCurrentPageType(curPageType),
  }
)(LoginformController);
