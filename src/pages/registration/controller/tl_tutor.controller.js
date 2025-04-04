import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import TLTUTOR from "../components/tl_tutor.form";
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

let TLTUTORFORM = reduxForm({
  form: "tl_tutor",
  enableReinitialize: true,
})(TLTUTOR);

export default connect(
  (state) => ({
    initialValues:
      state.formField.init_values && state.formField.init_values.tl_tutor,
    values: getFormValues("tl_tutor")(state),
    dirty: isDirty("tl_tutor")(state),
    tl_user_services_hitted: state.formField.tl_tutor_services_hitted,
    formFieldComponent: state.formField.tl_tutor_form_field,
    formFieldErrors: state.form.tl_tutor && state.form.tl_tutor.syncErrors,
    serviceClicked: state.register.serviceClicked,
    tl_tutor: state.form.tl_tutor && state.form.tl_tutor.values,
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
)(TLTUTORFORM);
