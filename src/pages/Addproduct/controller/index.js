import { connect } from "react-redux";
import Addprdcomp from "../components/index";
import {
  getFormFields,
  updatesearchaccordian,
  deletecurrrow,
  getAllproductList,
} from "../../../redux/actions/add.product.action";
import { submitRegistration } from "../../../redux/actions/registration.action";

const mapStateToProps = (state) => {
  //debugger;
  return {
    formfields: state.addProduct.data.formfields,
    gridfields: state.addProduct.data.gridfields,
    rowdata: state.addProduct.rowdata,
    formName: state.addProduct.formName,
    formTitle: state.addProduct.formTitle,
    srchaccrdn: state.addProduct.srchaccrdn,
    searchformpayload: state.form,
  };
};

const AddproductController = connect(mapStateToProps, {
  getFormFields: (formName) => getFormFields(formName),
  updatesearchaccordian: (currentpos) => updatesearchaccordian(currentpos),
  submitRegistration: (formName, group) => submitRegistration(formName, group),
  deletecurrrow: (rowdata) => deletecurrrow(rowdata),
  getAllproductList: (formName) => getAllproductList(formName),
})(Addprdcomp);

export default AddproductController;
