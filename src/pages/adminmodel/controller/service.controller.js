import React, { useState } from "react";
import { connect } from "react-redux";
import {
  getAddedServicesItems,
  getRemovedServicesItems,
  dispatchServicesItemsClicked,
  dispatchCurrentPageType,
} from "../../../redux/actions/registration.action";
import { removeInitialValues } from "../../../redux/actions/form.field.action";
import Servicecomponent from "../components/serviceComponent";

const mapStateToProps = (state) => {
  return {
    initialValues: state.formField && state.formField,
    current_page_type: state.register.current_page_type,
    serviceClicked: state.register.serviceClicked,
  };
};

const ServiceController = connect(mapStateToProps, {
  getAddedServicesItems: (id) => getAddedServicesItems(id),
  getRemovedServicesItems: (id) => getRemovedServicesItems(id),
  dispatchServicesItemsClicked: (id) => dispatchServicesItemsClicked(id),
  dispatchCurrentPageType: (curPageType) =>
    dispatchCurrentPageType(curPageType),
  removeInitialValues: (type) => removeInitialValues(type),
})(Servicecomponent);

export default ServiceController;
