import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import TLINDUSTRY from "../components/tl_industry.form";
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

let TLVEHICLEFORM = reduxForm({
  form: "tl_industry",
  enableReinitialize: true,
})(TLINDUSTRY);

export default connect(
  (state) => ({
    initialValues: Object.assign(
      {},
      state.formField.init_values && state.formField.init_values.tl_industry,
      {
        parent_id: "hi",
        user_id: parseInt(localStorage.getItem("user_id")),
      }
    ),
    values: getFormValues("tl_industry")(state),
    dirty: isDirty("tl_industry")(state),
    formFieldComponent: state.formField.tl_industry_form_field,
    tl_industry_services_hitted: state.formField.tl_industry_services_hitted,
    formFieldErrors:
      state.form.tl_industry && state.form.tl_industry.syncErrors,
    serviceClicked: state.register.serviceClicked,
    tl_industry: state.form.tl_industry && state.form.tl_industry.values,
    current_page_type: state.register.current_page_type,
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
