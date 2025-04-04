import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import TLCONTRACTOR from "../components/tl_contractor.form";
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
  fileUpLoad,
} from "../../../redux/actions/registration.action";

let TLCONTRACTORFORM = reduxForm({
  form: "tl_contractor",
  enableReinitialize: true,
})(TLCONTRACTOR);

export default connect(
  (state) => ({
    initialValues: Object.assign(
      {},
      state.formField.init_values && state.formField.init_values.tl_contractor,
      { user_id: parseInt(localStorage.getItem("user_id")) }
    ),
    values: getFormValues("tl_contractor")(state),
    dirty: isDirty("tl_contractor")(state),
    formFieldComponent: state.formField.tl_contractor_form_field,
    formFieldErrors:
      state.form.tl_contractor && state.form.tl_contractor.syncErrors,
    serviceClicked: state.register.serviceClicked,
    tl_contractor: state.form.tl_contractor && state.form.tl_contractor.values,
    current_page_type: state.register.current_page_type,
    tl_contractor_service_hitted: state.formField.tl_contractor_services_hitted,
  }),
  {
    getFormFields: (formName) => getformFields(formName),
    getContractorIdFromTLContractor: (id) =>
      getContractorIdFromTLContractor(id),
    submitRegistration: (formName) => submitRegistration(formName),
    dispatchFormInitialValues: (values) => dispatchFormInitialValues(values),
    dispatchenableServiceMenu: (values) => dispatchenableServiceMenu(values),
    dispatchServicesItemsClicked: (id) => dispatchServicesItemsClicked(id),
    dispatchCurrentPageType: (curPageType) =>
      dispatchCurrentPageType(curPageType),
    fileUpLoad: (base64, id) => fileUpLoad(base64, id),
  }
)(TLCONTRACTORFORM);
