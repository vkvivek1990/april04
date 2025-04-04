import { serviceCallThunk } from "../service-call-thunk";
import { serviceEndPointUrl } from "../../util/util";
export const actionSearchEnquiryField = "action/SEARCH_ENQ_FORM_FIELDS";
export const actionUpdatecurrentEnquiryField = "action/UPDATE_CURR_FORM_FIELDS";
export const actionUpdateSelectedTemplate = "action/UPDATE_SELECT_TEMPLATE";
export const actionUpdateSelectedRowCount = "action/UPDATE_SELECT_ROW_COUNT";
export const actionUpdateSelectedRow = "action/UPDATE_SELECTED_ROW";
export const actionUpdateShowSelectRow = "action/UPDATE_SHOW_SELECT";
export const actionUpdateAccordian = "action/UPDATE_SEARCH_ACCRDN";

export const getSCHenquiryFormField = (payLoad) => {
  return {
    type: actionSearchEnquiryField,
    payLoad,
  };
};

export const updatecurrentquiryFormField = (payLoad) => {
  return (dispatch, getState) => {
    dispatch({
      type: actionUpdatecurrentEnquiryField,
      payLoad,
    });
  };
};

export const updateSelectedTemplate = (payLoad) => {
  return (dispatch, getState) => {
    dispatch({
      type: actionUpdateSelectedTemplate,
      payLoad,
    });
  };
};

export const updateslectedcheckboxcount = (payLoad) => {
  return (dispatch, getState) => {
    dispatch({
      type: actionUpdateSelectedRowCount,
      payLoad,
    });
  };
};

export const updateselectedRow = (payLoad) => {
  return (dispatch, getState) => {
    dispatch({
      type: actionUpdateSelectedRow,
      payLoad,
    });
  };
};

export const updateshowselectedRow = (payLoad) => {
  return (dispatch, getState) => {
    dispatch({
      type: actionUpdateShowSelectRow,
      payLoad,
    });
  };
};

export const updatesearchaccordian = (payLoad) => {
  return (dispatch, getState) => {
    dispatch({
      type: actionUpdateAccordian,
      payLoad,
    });
  };
};

export const getFormFields = (formName) => {
  return async (dispatch, getState) => {
    try {
      // const state = getState();
      const formData = {
        ctryCd: "IN",
        langCd: "EN",
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        //url: 'http://70442582ff2c.ngrok.io/screen/fields/getEnqField',
        //url: 'https://wsm-enquiry-service.herokuapp.com/wsm/enquiry/getEnquiryFields',
        url: 'https://wsm-app-service.herokuapp.com/wsm/enquiry/getEnquiryFields',
        method: "POST",
        data: formData,
      };
      return await dispatch(serviceCallThunk(config, getSCHenquiryFormField));
    } catch (err) {
      throw err;
    }
  };
  const config = {
    data: {
      formfields: [
        {
          ctry_cd: "IND",
          lang_cd: "eng",
          field_label: "Date Of Birth",
          field_nm: "dateofbirth",
          component_type: "DatePicker",
          field_default_value: null,
          field_description: null,
          field_data_type: "date",
          field_length: "40",
          field_tooltip_text_id: "dateofbirth",
          is_readonly: "N",
          display_order: 1,
          is_enabled: true,
          created_by: "12345",
          created_on: "2021-04-02T03:26:29.691Z",
          modified_by: "12345",
          modified_on: "2021-04-11T13:05:51.239Z",
          field_options: null,
          field_options_icon: null,
          field_validations: {
            is_required: "true",
            min_length: "1",
            max_length: "50",
          },
          field_icon: "account_circle",
          col_grid: "col-md-3",
          id: 8,
          form_name: 57,
          field_position: "LH",
          template_name: ["template_1", "template_2"],
          field_group: ["Group_1", "Group_2"],
          timePicker: false,
          singleDatePicker: true,
          showDropdowns: true,
        },
        {
          ctry_cd: "IND",
          lang_cd: "eng",
          field_label: "Trip Engaged Date",
          field_nm: "tripengageddate",
          component_type: "DatePicker",
          field_default_value: null,
          field_description: null,
          field_data_type: "date",
          field_length: "40",
          field_tooltip_text_id: "tripengageddate",
          is_readonly: "N",
          display_order: 1,
          is_enabled: true,
          created_by: "12345",
          created_on: "2021-04-02T03:26:29.691Z",
          modified_by: "12345",
          modified_on: "2021-04-11T13:05:51.239Z",
          field_options: null,
          field_options_icon: null,
          field_validations: {
            is_required: "true",
            min_length: "1",
            max_length: "50",
          },
          field_icon: "account_circle",
          col_grid: "col-md-3",
          id: 8,
          form_name: 57,
          field_position: "LH",
          template_name: ["template_1", "template_2"],
          field_group: ["Group_1", "Group_2"],
          timePicker: true,
          singleDatePicker: false,
          showDropdowns: true,
          dateviewformat: "DD/MM/YYYY hh:mm A",
        },
        {
          ctry_cd: "IND",
          lang_cd: "eng",
          field_label: "Delivery Date",
          field_nm: "deliverydate",
          component_type: "DatePicker",
          field_default_value: null,
          field_description: null,
          field_data_type: "date",
          field_length: "40",
          field_tooltip_text_id: "deliverydate",
          is_readonly: "N",
          display_order: 1,
          is_enabled: true,
          created_by: "12345",
          created_on: "2021-04-02T03:26:29.691Z",
          modified_by: "12345",
          modified_on: "2021-04-11T13:05:51.239Z",
          field_options: null,
          field_options_icon: null,
          field_validations: {
            is_required: "true",
            min_length: "1",
            max_length: "50",
          },
          field_icon: "account_circle",
          col_grid: "col-md-3",
          id: 8,
          form_name: 57,
          field_position: "LH",
          template_name: ["template_1", "template_2"],
          field_group: ["Group_1", "Group_2"],
          timePicker: false,
          singleDatePicker: false,
          showDropdowns: true,
          //dateviewformat:'DD/MM/YYYY hh:mm A'
        },
        {
          ctry_cd: "IND",
          lang_cd: "eng",
          field_label: "Second Name",
          field_nm: "firstName",
          component_type: "TextBox",
          field_default_value: null,
          field_description: null,
          field_data_type: "text",
          field_length: "40",
          field_tooltip_text_id: "second name",
          is_readonly: "N",
          display_order: 1,
          is_enabled: true,
          created_by: "12345",
          created_on: "2021-04-02T03:26:29.691Z",
          modified_by: "12345",
          modified_on: "2021-04-11T13:05:51.239Z",
          field_options: null,
          field_options_icon: null,
          field_validations: {
            is_required: "true",
            min_length: "1",
            max_length: "50",
          },
          field_icon: "account_circle",
          col_grid: "col-md-3",
          id: 8,
          form_name: 57,
          field_position: "LH",
          template_name: ["template_1", "template_2"],
          field_group: ["Group_1", "Group_2"],
        },
        {
          ctry_cd: "IND",
          lang_cd: "eng",
          field_label: "Last Name",
          field_nm: "lastName",
          component_type: "TextBox",
          field_default_value: null,
          field_description: null,
          field_data_type: "date",
          field_length: "40",
          field_tooltip_text_id: "last name",
          is_readonly: "N",
          display_order: 1,
          is_enabled: true,
          created_by: "12345",
          created_on: "2021-04-02T03:26:29.691Z",
          modified_by: "12345",
          modified_on: "2021-04-11T13:05:51.239Z",
          field_options: null,
          field_options_icon: null,
          field_validations: {
            is_required: "true",
            min_length: "1",
            max_length: "50",
          },
          field_icon: "account_circle",
          col_grid: "col-md-3",
          id: 8,
          form_name: 57,
          field_position: "LH",
          template_name: ["template_3", "template_4"],
          field_group: ["Group_3", "Group_4"],
        },
        {
          ctry_cd: "IND",
          lang_cd: "eng",
          field_label: "Age",
          field_nm: "age",
          component_type: "SelectBox",
          field_default_value: null,
          field_description: null,
          field_data_type: "text",
          field_length: "40",
          field_tooltip_text_id: "second name",
          is_readonly: "N",
          display_order: 2,
          is_enabled: true,
          created_by: "12345",
          created_on: "2021-04-02T03:26:29.691Z",
          modified_by: "12345",
          modified_on: "2021-04-11T13:05:51.239Z",
          field_options: [{ id: "1", value: "test" }],
          field_options_icon: null,
          field_validations: {
            is_required: "true",
            min_length: "1",
            max_length: "50",
          },
          field_icon: "account_circle",
          col_grid: "col-md-3",
          id: 8,
          form_name: 57,
          field_position: "LH",
          template_name: ["template_3", "template_4"],
          field_group: ["Group_3", "Group_4"],
        },
      ],
      gridfields: [
        {
          disableSortBy: true,
          FilterType: "SelectColumnFilter",
          template_name: ["template_3", "template_4"],
          field_group: ["Group_3", "Group_4"],
          field_nm: "Title",
        },
        {
          template_name: ["template_1", "template_2"],
          field_group: ["Group_2", "Group_3"],
          field_nm: "Name",
        },
        {
          template_name: ["template_1", "template_4"],
          field_group: ["Group_1", "Group_2"],
          field_nm: "Email",
        },
        {
          template_name: ["template_3", "template_2"],
          field_group: ["Group_4", "Group_1"],
          field_nm: "Address",
        },
      ],
      templates: ["template_1", "template_2", "template_3", "template_4"],
      groups: { template_1: ["Group_1", "Group_2", "Group_3", "Group_4"] },
    },
  };

  return (dispatch, getState) => {
    try {
      return dispatch(getSCHenquiryFormField(config));
    } catch (err) {
      throw err;
    }
  };
};
