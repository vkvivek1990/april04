import {
  actionTlUserFormField,
  actionTlTutorFormField,
  actionTlCorporateFormField,
  actionTlCollegeFormField,
  actionTlContractorFormField,
  actionTlSubContractorFormField,
  actionTlTransportAgentFormField,
  actionTlWpFormField,
  actionTlDriverFormField,
  actionTlVehicleFormField,
  actionTlIndustryFormField,
  actionTlDeliveryBoyFormField,
  actionGetUserid,
  actionGetContractorid,
  actionGetTransportAgentid,
  actionFormsInitialValues,
  actionGetTlContractorInitialValues,
  actionGetTlSubContractorInitialValues,
  actionGetTlWaterPlantInitialValues,
  actionGetTlIndustryInitialValues,
  actionGetTlTransportAgentInitialValues,
  actionGetTlVehicleInitialValues,
  actionGetTlDriverInitialValues,
  actionGetTlDeliveryBoyInitialValues,
  actionGetTlLoginPageFormFields,
  actionRemoveInitialValues,
} from "../actions/form.field.action";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTlUserFormField:
      return {
        ...state,
        tl_user_form_field: action.payLoad,
        tl_user_services_hitted: true,
      };
    case actionTlTutorFormField:
      return {
        ...state,
        tl_tutor_form_field: action.payLoad,
        tl_tutor_services_hitted: true,
      };
    case actionTlCorporateFormField:
      return {
        ...state,
        tl_corporate_form_field: action.payLoad,
        tl_corporate_services_hitted: true,
      };
    case actionTlCollegeFormField:
      return {
        ...state,
        tl_college_form_field: action.payLoad,
        tl_college_services_hitted: true,
      };

    case actionTlWpFormField:
      return {
        ...state,
        tl_water_plant_form_field: action.payLoad,
        tl_water_plant_services_hitted: true,
      };

    case actionTlContractorFormField:
      return {
        ...state,
        tl_contractor_form_field: action.payLoad,
        tl_contractor_services_hitted: true,
      };

    case actionTlSubContractorFormField:
      return {
        ...state,
        tl_sub_contractor_form_field: action.payLoad,
        tl_sub_contractor_services_hitted: true,
      };

    case actionTlTransportAgentFormField:
      return {
        ...state,
        tl_transport_agent_form_field: action.payLoad,
        tl_transport_agent_services_hitted: true,
      };
    case actionTlDriverFormField:
      return {
        ...state,
        tl_driver_form_field: action.payLoad,
        tl_driver_services_hitted: true,
      };
    case actionTlVehicleFormField:
      return {
        ...state,
        tl_vehicle_form_field: action.payLoad,
        tl_vehicle_services_hitted: true,
      };
    case actionTlIndustryFormField:
      return {
        ...state,
        tl_industry_form_field: action.payLoad,
        tl_industry_services_hitted: true,
      };
    case actionTlDeliveryBoyFormField:
      return {
        ...state,
        tl_delivery_boy_form_field: action.payLoad,
        tl_delivery_boy_services_hitted: true,
      };
    case actionGetTlLoginPageFormFields:
      return {
        ...state,
        tl_login_page_field: action.payLoad,
      };
    case actionGetUserid:
      return {
        ...state,
        user_id: action.payLoad,
      };
    case actionGetContractorid:
      return {
        ...state,
        contractor_id: action.payLoad,
      };
    case actionGetTransportAgentid:
      return {
        ...state,
        transport_agent_id: action.payLoad,
      };
    case actionFormsInitialValues:
      return {
        ...state,
        init_values: Object.assign({}, state.init_values, action.payLoad),
      };
    case actionRemoveInitialValues:
      return {
        ...state,
        init_values: action.payLoad,
      };

    case actionGetTlContractorInitialValues:
      return {
        ...state,
        tl_contractor_initial_values: action.payLoad,
      };
    case actionGetTlSubContractorInitialValues:
      return {
        ...state,
        tl_sub_contractor_initial_values: action.payLoad,
      };
    case actionGetTlWaterPlantInitialValues:
      return {
        ...state,
        tl_water_plant_initial_values: action.payLoad,
      };
    case actionGetTlIndustryInitialValues:
      return {
        ...state,
        tl_industry_initial_values: action.payLoad,
      };
    case actionGetTlTransportAgentInitialValues:
      return {
        ...state,
        tl_transport_agent_initial_values: action.payLoad,
      };
    case actionGetTlDriverInitialValues:
      return {
        ...state,
        tl_driver_initial_values: action.payLoad,
      };
    case actionGetTlDeliveryBoyInitialValues:
      return {
        ...state,
        tl_delivery_boy_initial_values: action.payLoad,
      };
    default:
      return state;
  }
};

export default reducer;
