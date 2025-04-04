import { connect } from "react-redux";
import Enquirycomp from "../../../components/Enquriy_comp";
import {
  getFormFields,
  updatecurrentquiryFormField,
  updateSelectedTemplate,
  updateslectedcheckboxcount,
  updatesearchaccordian,
  updateselectedRow,
  updateshowselectedRow,
} from "../../../redux/actions/search.enquiry.action";
import { submitRegistration } from "../../../redux/actions/registration.action";

const mapStateToProps = (state) => {
    return {
        formfields:state.searchEnquiry.data.formfields,
        gridfields:state.searchEnquiry.data.gridfields,
        templates:state.searchEnquiry.data.templates,
        groups:state.searchEnquiry.data.groups,
        currentfields:state.searchEnquiry.currentfields,
        selectedTemplate:state.searchEnquiry.selectedTemplate,
        rowselectedcount:state.searchEnquiry.rowselectedcount,
        rowdata:state.searchEnquiry.rowdata,
        selectedrowdata:state.searchEnquiry.selectedrowdata,
        formName:state.searchEnquiry.formName,
        formTitle:state.searchEnquiry.formTitle,
        srchaccrdn:state.searchEnquiry.srchaccrdn,
        showselectrow:state.searchEnquiry.showselectrow,
        searchformpayload:state.form
    };
};

const SearchController = connect(mapStateToProps,{ 
    getFormFields: (formName) => getFormFields(formName), 
    updatecurrentquiryFormField: (currentfields) => updatecurrentquiryFormField(currentfields),
    updateSelectedTemplate: (selectedtemplate) => updateSelectedTemplate(selectedtemplate),
    updateslectedcheckboxcount : (selectedrowcount) => updateslectedcheckboxcount(selectedrowcount),
    updatesearchaccordian : (currentpos) => updatesearchaccordian(currentpos),
    updateselectedRow : (selectedRowdata) => updateselectedRow(selectedRowdata),
    updateshowselectedRow : (showselectrow) => updateshowselectedRow(showselectrow),
    submitRegistration : (formName,group) => submitRegistration(formName,group)
  })(Enquirycomp)

export default SearchController;
