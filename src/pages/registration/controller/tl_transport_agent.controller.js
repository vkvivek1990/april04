import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import TLTRANSPORTAGENT from "../components/tl_transport_agent.form";
import { getFormValues, isDirty } from "redux-form";
import {
  getformFields,
  getTransportAgentIdFromTLTransportAgent,
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

let TLTRANSPORTAGENTFORM = reduxForm({
  form: "tl_transport_agent",
  enableReinitialize: true,
})(TLTRANSPORTAGENT);

export default connect(
  (state) => ({
    initialValues: Object.assign(
      {},
      state.formField.init_values.tl_transport_agent,
      {
        user_id: parseInt(localStorage.getItem("user_id")),
      }
    ),
    values: getFormValues("tl_transport_agent")(state),
    dirty: isDirty("tl_transport_agent")(state),
    formFieldComponent: state.formField.tl_transport_agent_form_field,
    formFieldErrors:
      state.form.tl_transport_agent && state.form.tl_transport_agent.syncErrors,
    serviceClicked: state.register.serviceClicked,
    tl_transport_agent:
      state.form.tl_transport_agent && state.form.tl_transport_agent.values,
    current_page_type: state.register.current_page_type,
    tl_transport_agent_service_hitted:
      state.formField.tl_transport_agent_services_hitted,
  }),
  {
    getFormFields: (formName) => getformFields(formName),
    getTransportAgentIdFromTLTransportAgent: (id) =>
      getTransportAgentIdFromTLTransportAgent(id),
    submitRegistration: (formName) => submitRegistration(formName),
    dispatchFormInitialValues: (values) => dispatchFormInitialValues(values),
    dispatchenableServiceMenu: (values) => dispatchenableServiceMenu(values),
    dispatchServicesItemsClicked: (id) => dispatchServicesItemsClicked(id),
    dispatchCurrentPageType: (curPageType) =>
      dispatchCurrentPageType(curPageType),
    fileUpLoad: (base64, id) => fileUpLoad(base64, id),
  }
)(TLTRANSPORTAGENTFORM);
