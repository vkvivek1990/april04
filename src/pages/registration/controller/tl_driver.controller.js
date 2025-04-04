import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import TLDRIVER from "../components/tl_driver.form";
import { getFormValues, isDirty } from "redux-form";
import {
  getformFields,
  dispatchFormInitialValues,
} from "../../../redux/actions/form.field.action";
import {
  submitRegistration,
  dispatchenableServiceMenu,
  dispatchServicesItemsClicked,
  dispatchCurrentPageType,
  fileUpLoad,
} from "../../../redux/actions/registration.action";
import { object } from "prop-types";

let TLDRIVERFORM = reduxForm({
  form: "tl_driver",
  enableReinitialize: true,
})(TLDRIVER);

export default connect(
  (state) => ({
    initialValues: Object.assign(
      {},
      state.formField.init_values && state.formField.init_values.tl_driver,
      {
        parent_id: "hi",
        user_id: parseInt(localStorage.getItem("user_id")),
        transport_agent_id: parseInt(
          localStorage.getItem("transport_agent_id")
        ),
      }
    ),
    values: getFormValues("tl_driver")(state),
    dirty: isDirty("tl_driver")(state),
    formFieldComponent: state.formField.tl_driver_form_field,
    formFieldErrors: state.form.tl_driver && state.form.tl_driver.syncErrors,
    serviceClicked: state.register.serviceClicked,
    tl_driver: state.form.tl_driver && state.form.tl_driver.values,
    current_page_type: state.register.current_page_type,
    tl_driver_service_hitted: state.formField.tl_driver_services_hitted,
  }),
  {
    getFormFields: (formName) => getformFields(formName),
    submitRegistration: (formName) => submitRegistration(formName),
    dispatchFormInitialValues: (values) => dispatchFormInitialValues(values),
    dispatchenableServiceMenu: (values) => dispatchenableServiceMenu(values),
    dispatchServicesItemsClicked: (id) => dispatchServicesItemsClicked(id),
    dispatchCurrentPageType: (curPageType) =>
      dispatchCurrentPageType(curPageType),
    fileUpLoad: (base64, id) => fileUpLoad(base64, id),
  }
)(TLDRIVERFORM);
