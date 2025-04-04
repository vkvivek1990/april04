import React, { useEffect } from "react";
import { Icons } from "../../../applicationComponent/Icons/Icons.js";

const FormSuccessComponent = (props) => {
  let {
    dispatchServicesItemsClicked,
    dispatchCurrentPageType,
    dispatchFormInitialValues,
    getRemovedServicesItems,
    reset_values,
    initialValues,
    removeCurrentPageTypeDatas,
    serviceClicked,
  } = props;

  useEffect(() => {
    dispatchCurrentPageType({
      is_form_success_touched: true,
      current_page_type: "form_completed",
    });
  }, []);

  const handleClick = async (event) => {
    // await dispatchFormInitialValues((reset_values["tl_user"] = {}));
    //alert("Welcome to Dashboard");

    serviceClicked.map((a) => {
      document.getElementById(a.id).checked = false;
    });
    await dispatchServicesItemsClicked("tl_container_msg");
    //await dispatchServicesItemsClicked([]);
    await getRemovedServicesItems("removeAll");
    await removeCurrentPageTypeDatas();
    initialValues["init_values"] = {};
    await dispatchCurrentPageType({
      is_tl_user_touched: true,
      current_page_type: "tl_user",
      current_page: "tl_user",
      completed_forms: [],
    });

    // document.getElementById(checkedServiceId).checked = true;
    // dispatchServicesItemsClicked(event.target.id);
  };

  return (
    <div className="row">
      <div className="col-12 previewWrapper">
        <div className="row">
          <div className="col-10">
            <h3 className="title">Profile Create Successfully !</h3>
          </div>
          <div className="col-2"></div>
        </div>
        <hr className="borderLine" />
        <div className="wrapper">
          <p>
            {`We will notify through your registered mobile number ${reset_values["tl_user"]["contact_number"]} and
            Email Id ${reset_values["tl_user"]["contat_email"]}`}
          </p>
        </div>
        <button
          onClick={handleClick}
          id="tl_user"
          type="button"
          className="btn nextBtn"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default FormSuccessComponent;
