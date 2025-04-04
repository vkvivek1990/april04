import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import TLSUBCONTRACTOR from "../components/tl_sub_contractor.form";
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

let TLSUBCONTRACTORFORM = reduxForm({
  form: "tl_sub_contractor",
  enableReinitialize: true,
})(TLSUBCONTRACTOR);

export default connect(
  (state) => ({
    initialValues: Object.assign(
      {},
      state.formField.init_values &&
        state.formField.init_values.tl_sub_contractor,
      {
        parent_id: "hi",
        user_id: parseInt(localStorage.getItem("user_id")),
        contractor_id: parseInt(localStorage.getItem("contractor_id")),
      }
    ),
    values: getFormValues("tl_sub_contractor")(state),
    dirty: isDirty("tl_sub_contractor")(state),
    formFieldComponent: state.formField.tl_sub_contractor_form_field,
    formFieldErrors:
      state.form.tl_sub_contractor && state.form.tl_sub_contractor.syncErrors,
    serviceClicked: state.register.serviceClicked,
    tl_sub_contractor:
      state.form.tl_sub_contractor && state.form.tl_sub_contractor.values,
    current_page_type: state.register.current_page_type,
    tl_sub_contractor_service_hitted:
      state.formField.tl_sub_contractor_services_hitted,
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
)(TLSUBCONTRACTORFORM);
