import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import TLCORPORATE from "../components/tl_corporate.form";
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

let TLCORPORATEFORM = reduxForm({
  form: "tl_corporate",
  enableReinitialize: true,
})(TLCORPORATE);

export default connect(
  (state) => ({
    initialValues:
      state.formField.init_values && state.formField.init_values.tl_corporate,
    values: getFormValues("tl_corporate")(state),
    dirty: isDirty("tl_corporate")(state),
    tl_user_services_hitted: state.formField.tl_corporate_services_hitted,
    formFieldComponent: state.formField.tl_corporate_form_field,
    formFieldErrors:
      state.form.tl_corporate && state.form.tl_corporate.syncErrors,
    serviceClicked: state.register.serviceClicked,
    tl_corporate: state.form.tl_corporate && state.form.tl_corporate.values,
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
)(TLCORPORATEFORM);
