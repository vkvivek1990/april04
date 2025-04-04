import { React, useEffect } from "react";
import "../../../components/Enquriy_comp/style.scss";
import Header from "../../../components/header";
import Searchcomp from "../../../components/Enquriy_comp/searchcomp";
import SearchGridComp from "../../../components/Enquriy_comp/searchgridheader";

const Addprdcomp = (props) => {
  const {
    srchaccrdn,
    rowdata,
    submitRegistration,
    searchformpayload,
    formName,
    formTitle,
    formfields,
    getFormFields,
    gridfields,
    updatesearchaccordian,
    deletecurrrow,
    getAllproductList,
  } = props;
  //console.log(rowdata,"rowdatarowdata");
  useEffect(() => {
    // const onLoadService = async () => {
    //     await getFormFields("tl_search_enquiry");
    // }
    getFormFields(formName).then((data) => {
      //debugger;
      if (
        data["payLoad"] &&
        data["payLoad"]["gridfields"] &&
        data["payLoad"]["gridfields"].length !== 0
      ) {
        getAllproductList(formName);
      }
    });
  }, []);

  return (
    <>
      <div className="Enquiry_container">
        <div className="Enquiry_search_container">
          <Searchcomp
            headtitle={formTitle}
            headertiltleicon={"departure_board"}
            data={formfields}
            updatesearchaccordian={updatesearchaccordian}
            formName={formName}
          />
        </div>
        <div
          className={
            srchaccrdn
              ? "Enquiry_grid_container add_prdct_container toggleclose"
              : "Enquiry_grid_container add_prdct_container toggeleopen"
          }
        >
          <SearchGridComp
            gridfields={gridfields}
            searchformpayload={searchformpayload}
            submitRegistration={submitRegistration}
            formName={formName}
            rowdata={rowdata}
            rowselectfeature={false}
            filterfeature={false}
            rowedit={true}
            formfields={formfields}
            deleteactn={deletecurrrow}
            getAllproductList={getAllproductList}
          />
        </div>
      </div>
    </>
  );
};
export default Addprdcomp;
