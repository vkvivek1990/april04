import React, { useState } from "react";
import { connect } from "react-redux";
import {
  getAddedServicesItems,
  getRemovedServicesItems,
  dispatchServicesItemsClicked,
  dispatchCurrentPageType,
  removeCurrentPageTypeDatas,
} from "../../../redux/actions/registration.action";
import { dispatchFormInitialValues } from "../../../redux/actions/form.field.action";
import FormSuccessComponent from "../components/formSuccess.form";

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    initialValues: state.formField && state.formField,
    reset_values: state.formField.init_values && state.formField.init_values,
    current_page_type: state.register.current_page_type,
    serviceClicked: state.register.serviceClicked,
  };
};

const FormSucessController = connect(mapStateToProps, {
  getAddedServicesItems: (id) => getAddedServicesItems(id),
  getRemovedServicesItems: (id) => getRemovedServicesItems(id),
  dispatchServicesItemsClicked: (id) => dispatchServicesItemsClicked(id),
  dispatchCurrentPageType: (curPageType) =>
    dispatchCurrentPageType(curPageType),
  dispatchFormInitialValues: (id) => dispatchFormInitialValues(id),
  removeCurrentPageTypeDatas: () => removeCurrentPageTypeDatas(),
})(FormSuccessComponent);

export default FormSucessController;
