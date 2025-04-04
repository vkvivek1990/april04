import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import TLWP from "../components/tl_water_plant.form";
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

let TLWPFORM = reduxForm({
  form: "tl_water_plant",
  enableReinitialize: true,
})(TLWP);

export default connect(
  (state) => ({
    initialValues: Object.assign(
      {},
      state.formField.init_values && state.formField.init_values.tl_water_plant,
      { user_id: parseInt(localStorage.getItem("user_id")) }
    ),

    values: getFormValues("tl_water_plant")(state),
    dirty: isDirty("tl_water_plant")(state),
    formFieldComponent: state.formField.tl_water_plant_form_field,
    tl_water_plant_service_hitted:
      state.formField.tl_water_plant_services_hitted,
    formFieldErrors:
      state.form.tl_water_plant && state.form.tl_water_plant.syncErrors,
    serviceClicked: state.register.serviceClicked,
    tl_water_plant:
      state.form.tl_water_plant && state.form.tl_water_plant.values,
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
)(TLWPFORM);
