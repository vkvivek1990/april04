import React, { useState } from "react";
import { connect } from "react-redux";
import {
  getAddedServicesItems,
  getRemovedServicesItems,
  dispatchServicesItemsClicked,
  dispatchCurrentPageType,
  getImagebase64,
  RegisterUserProfile
} from "../../../redux/actions/registration.action";
import FormPreviewComponent from "../components/formPreview.form";

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    initialValues: state.formField,
    current_page_type: state.register.current_page_type,
    serviceClicked: state.register.serviceClicked,
    completedForm: state.register.current_page_type.completed_forms,
  };
};

const FormPreviewController = connect(mapStateToProps, {
  getAddedServicesItems: (id) => getAddedServicesItems(id),
  getRemovedServicesItems: (id) => getRemovedServicesItems(id),
  dispatchServicesItemsClicked: (id) => dispatchServicesItemsClicked(id),
  dispatchCurrentPageType: (curPageType) =>
    dispatchCurrentPageType(curPageType),
  getImagebase64: (id) => getImagebase64(id),
  RegisterUserProfile: (id) => RegisterUserProfile(id)
})(FormPreviewComponent);

export default FormPreviewController;
