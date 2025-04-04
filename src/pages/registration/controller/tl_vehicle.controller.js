import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import TLVEHICLE from "../components/tl_vehicle.form";
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

let TLVEHICLEFORM = reduxForm({
  form: "tl_vehicle",
  enableReinitialize: true,
})(TLVEHICLE);

export default connect(
  (state) => ({
    initialValues: Object.assign(
      {},
      state.formField.init_values.tl_vehicle,
      {
        user_id: parseInt(localStorage.getItem("user_id")),
      },
      {
        transport_agent_id: parseInt(
          localStorage.getItem("transport_agent_id")
        ),
      }
    ),
    values: getFormValues("tl_vehicle")(state),
    dirty: isDirty("tl_vehicle")(state),
    formFieldComponent: state.formField.tl_vehicle_form_field,
    formFieldErrors: state.form.tl_vehicle && state.form.tl_vehicle.syncErrors,
    serviceClicked: state.register.serviceClicked,
    tl_vehicle: state.form.tl_vehicle && state.form.tl_vehicle.values,
    current_page_type: state.register.current_page_type,
    tl_vehicle_service_hitted: state.formField.tl_vehicle_services_hitted,
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
)(TLVEHICLEFORM);
