import {React,useEffect} from 'react';
import './style.scss';
import Searchcomp from './searchcomp';
import SearchGridComp from './searchgridheader';

const Enquirycomp = props => {
    const { srchaccrdn,rowdata,submitRegistration,searchformpayload,formName,formTitle,formfields, templates, groups, currentfields, getFormFields,selectedTemplate, updatecurrentquiryFormField, gridfields,updateSelectedTemplate,updateslectedcheckboxcount,rowselectedcount,updatesearchaccordian, updateselectedRow, selectedrowdata,updateshowselectedRow,showselectrow } = props;
    useEffect(() => {
        // const onLoadService = async () => {
        //     await getFormFields("tl_search_enquiry");
        // }
        getFormFields("tl_search_enquiry");
    },[]);

    return(
        <>
            <div className="Enquiry_container">
            <div className="Enquiry_search_container">
                <Searchcomp 
                    headtitle = {formTitle}
                    headertiltleicon = {"departure_board"}
                    data = {formfields}
                    templates = {templates}
                    groups = {groups}
                    currentfields = {currentfields}
                    updatecurrentquiryFormField = {updatecurrentquiryFormField}
                    updateSelectedTemplate = {updateSelectedTemplate}
                    updatesearchaccordian = {updatesearchaccordian}
                    formName = {formName}
                />
            </div>
            <div className={srchaccrdn?"Enquiry_grid_container toggleclose":"Enquiry_grid_container toggeleopen"}>
                <SearchGridComp 
                    gridfields = {gridfields}
                    groups = {groups}
                    selectedTemplate = {selectedTemplate}
                    updateslectedcheckboxcount = {updateslectedcheckboxcount}
                    updateselectedRow = {updateselectedRow}
                    updateshowselectedRow = {updateshowselectedRow}
                    rowselectedcount = {rowselectedcount}
                    showselectrow = {showselectrow}
                    searchformpayload = {searchformpayload}
                    submitRegistration = {submitRegistration}
                    formName = {formName}
                    rowdata = {rowdata}
                    selectedrowdata = {selectedrowdata}
                    rowselectfeature = {true}
                    filterfeature = {true}
                    rowedit = {false}
                />
            </div>
            </div>
        </>
    )
}
export default Enquirycomp