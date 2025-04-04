import React from "react";
import { connect } from "react-redux";
import TLUSER from "./controller/tl_user.controller";
import TLTUTOR from "./controller/tl_tutor.controller";
import TLCORPORATE from "./controller/tl_corporate.controller";
import TLCOLLEGE from "./controller/tl_college.controller";
import TLWP from "./controller/tl_water_plant.controller";
import TLCONTRACTOR from "./controller/tl_contractor.controller";
import TLSUBCONTRACTOR from "./controller/tl_sub_contractor.controller";
import TLDELIVERYBOY from "./controller/tl_delivery_boy.controller";
import TLTRANSPORTAGENT from "./controller/tl_transport_agent.controller";
import TLDRIVER from "./controller/tl_driver.controller";
import TLVEHICLE from "./controller/tl_vehicle.controller";
import TLINDUSTRY from "./controller/tl_industry.controller";
import FormPreviewController from "./controller/form_preview.controller";
import Cardcontainer from "../../applicationComponent/Cardcontainer";
import FormSucessController from "./controller/form_success.controller";
const Updatedcomponent = (props) => {
  let { getClickedServicesForm, service_id } = props;

  switch (service_id) {
    case "user_profiles":
      return <TLUSER />;
    case "tl_tutor":
      return <TLTUTOR />;
    case "tl_corporate":
      return <TLCORPORATE />;
    case "tl_college":
      return <TLCOLLEGE />;
    case "tl_water_plant":
      return <TLWP />;
    case "tl_industry":
      return <TLINDUSTRY />;
    case "tl_contractor":
      return <TLCONTRACTOR />;
    case "tl_sub_contractor":
      return <TLSUBCONTRACTOR />;
    case "tl_transport_agent":
      return <TLTRANSPORTAGENT />;
    case "tl_driver":
      return <TLDRIVER />;
    case "tl_delivery_boy":
      return <TLDELIVERYBOY />;
    case "tl_vehicle":
      return <TLVEHICLE />;
    case "form_preview":
      return <FormPreviewController />;
    case "tl_container_msg":
      return <Cardcontainer msg={"Content goes here...."} />;
    case "form_success":
      return <FormSucessController />;
    default:
      return "";
  }
};

const mapStateToProps = (state) => {
  return {
    service_id: state.register.service_id,
  };
};

export default connect(mapStateToProps, {})(Updatedcomponent);
