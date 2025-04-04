import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import TLUSER from "../components/tl_user.form";
import { getFormValues, isDirty, reset } from "redux-form";
import {
  getformFields,
  getUserFromTLUser,
  dispatchFormInitialValues,
} from "../../../redux/actions/form.field.action";
import {
  submitRegistration,
  dispatchenableServiceMenu,
  dispatchServicesItemsClicked,
  dispatchCurrentPageType,
  fileUpLoad,
} from "../../../redux/actions/registration.action";

let TLUSERFORM = reduxForm({
  form: "tl_user",
  enableReinitialize: true,
})(TLUSER);

export default connect(
  (state) => ({
    initialValues:
      state.formField.init_values && state.formField.init_values.tl_user,
    values: getFormValues("tl_user")(state),
    dirty: isDirty("tl_user")(state),
    tl_user_services_hitted: state.formField.tl_user_services_hitted,
    formFieldComponent: state.formField.tl_user_form_field,
    formFieldErrors: state.form.tl_user && state.form.tl_user.syncErrors,
    serviceClicked: state.register.serviceClicked,
    tl_user: state.form.tl_user && state.form.tl_user.values,
    current_page_type: state.register.current_page_type,
  }),
  {
    getFormFields: (formName) => getformFields(formName),
    submitRegistration: (formName) => submitRegistration(formName),
    getUserFromTLUser: (id) => getUserFromTLUser(id),
    dispatchFormInitialValues: (values) => dispatchFormInitialValues(values),
    dispatchenableServiceMenu: (values) => dispatchenableServiceMenu(values),
    dispatchServicesItemsClicked: (id) => dispatchServicesItemsClicked(id),
    dispatchCurrentPageType: (curPageType) =>
      dispatchCurrentPageType(curPageType),
    fileUpLoad: (base64, id) => fileUpLoad(base64, id),
    reset: reset,
  }
)(TLUSERFORM);
