import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import TLCOLLEGE from "../components/tl_college.form";
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

let TLCOLLEGEFORM = reduxForm({
  form: "tl_college",
  enableReinitialize: true,
})(TLCOLLEGE);

export default connect(
  (state) => ({
    initialValues:
      state.formField.init_values && state.formField.init_values.tl_college,
    values: getFormValues("tl_college")(state),
    dirty: isDirty("tl_college")(state),
    tl_user_services_hitted: state.formField.tl_college_services_hitted,
    formFieldComponent: state.formField.tl_college_form_field,
    formFieldErrors: state.form.tl_college && state.form.tl_college.syncErrors,
    serviceClicked: state.register.serviceClicked,
    tl_college: state.form.tl_college && state.form.tl_college.values,
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
)(TLCOLLEGEFORM);
