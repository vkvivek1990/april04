import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import TLDELIVERYBOY from "../components/tl_delivery_boy.form";
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

let TLDELIVERYBOYFORM = reduxForm({
  form: "tl_delivery_boy",
  enableReinitialize: true,
})(TLDELIVERYBOY);

export default connect(
  (state) => ({
    initialValues: Object.assign(
      {},
      state.formField.init_values &&
        state.formField.init_values.tl_delivery_boy,
      {
        parent_id: "hi",
        user_id: parseInt(localStorage.getItem("user_id")),
        transport_agent_id: parseInt(
          localStorage.getItem("transport_agent_id")
        ),
      }
    ),
    values: getFormValues("tl_delivery_boy")(state),
    dirty: isDirty("tl_delivery_boy")(state),
    formFieldComponent: state.formField.tl_delivery_boy_form_field,
    formFieldErrors:
      state.form.tl_delivery_boy && state.form.tl_delivery_boy.syncErrors,
    serviceClicked: state.register.serviceClicked,
    tl_delivery_boy:
      state.form.tl_delivery_boy && state.form.tl_delivery_boy.values,
    current_page_type: state.register.current_page_type,
    tl_delivery_boy_service_hitted:
      state.formField.tl_delivery_boy_services_hitted,
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
)(TLDELIVERYBOYFORM);
