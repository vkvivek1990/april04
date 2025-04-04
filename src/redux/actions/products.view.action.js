import { serviceCallThunk } from "../service-call-thunk";
import { serviceEndPointUrl } from "../../util/util";
export const actionProductsViewField = "action/PRODUCTS_VIEW_FORM_FIELDS";
export const actionUpdateAccordian = "action/UPDATE_PRODUCT_ACCRDN";
export const actionUpdateAllProducts = "action/UPDATE_PRODUCT_ACCRDN";
export const actionUpdateTransactionId = "action/UPDATE_TRANSACTION_ID";
export const actionUpdatePageReference = "action/PAGE_REFERENCE";

export const getSCHenquiryFormField = (payLoad) => {
  return {
    type: actionProductsViewField,
    payLoad,
  };
};

export const updatepagereference = (payLoad) => {
  //debugger;
  return (dispatch, getState) => {
    dispatch({
      type: actionUpdatePageReference,
      payLoad,
    });
  };
};

export const updateAllproductDatas = (payLoad) => {
  return (dispatch, getState) => {
    dispatch({
      type: actionUpdateAllProducts,
      payLoad,
    });
  };
};

export const updateTransactionId = (payLoad) => {
  return (dispatch, getState) => {
    dispatch({
      type: actionUpdateTransactionId,
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

export const getProductFields = (formName) => {
  // return async (dispatch, getState) => {
  //     try {
  //         const config = {
  //             url: `${serviceEndPointUrl}//wsm/inventory/viewAllProduct`,
  //             method: "GET"
  //         };
  //         return await dispatch(serviceCallThunk(config, getTlUserFormField));
  //     } catch (err) {
  //         throw err;
  //     }
  // };
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
        },
        {
          ctry_cd: "IND",
          lang_cd: "eng",
          field_label: "Title",
          field_nm: "title",
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
          field_options: [
            { id: "1", value: "Mr" },
            { id: "2", value: "Mrs" },
          ],
          field_options_icon: null,
          field_validations: {
            is_required: "true",
            min_length: "1",
            max_length: "50",
          },
          field_icon: "account_circle",
          col_grid: "col-md-3",
          id: 8,
        },
        {
          ctry_cd: "IND",
          lang_cd: "eng",
          field_label: "Name",
          field_nm: "name",
          component_type: "TextBox",
          field_default_value: null,
          field_description: null,
          field_data_type: "text",
          field_length: "40",
          field_tooltip_text_id: "name",
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
        },
        {
          ctry_cd: "IND",
          lang_cd: "eng",
          field_label: "Email",
          field_nm: "email",
          component_type: "TextBox",
          field_default_value: null,
          field_description: null,
          field_data_type: "text",
          field_length: "40",
          field_tooltip_text_id: "email",
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
        },
        {
          ctry_cd: "IND",
          lang_cd: "eng",
          field_label: "Group Id",
          field_nm: "group_id",
          component_type: "TextBox",
          field_default_value: null,
          field_description: null,
          field_data_type: "text",
          field_length: "40",
          field_tooltip_text_id: "address",
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
        },
        {
          ctry_cd: "IND",
          lang_cd: "eng",
          field_label: "User Id",
          field_nm: "user_id",
          component_type: "TextBox",
          field_default_value: null,
          field_description: null,
          field_data_type: "text",
          field_length: "40",
          field_tooltip_text_id: "address",
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
        },
        {
          ctry_cd: "IND",
          lang_cd: "eng",
          field_label: "Country Code",
          field_nm: "country_code",
          component_type: "TextBox",
          field_default_value: null,
          field_description: null,
          field_data_type: "text",
          field_length: "40",
          field_tooltip_text_id: "address",
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
        },
        {
          ctry_cd: "IND",
          lang_cd: "eng",
          field_label: "Has Own Transport",
          field_nm: "has_own_transport",
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
          field_options: [
            { id: "1", value: "Yes" },
            { id: "2", value: "No" },
          ],
          field_options_icon: null,
          field_validations: {
            is_required: true,
            min_length: 1,
            max_length: 50,
          },
          field_icon: "account_circle",
          col_grid: "col-md-3",
          id: 8,
        },
      ],
      gridfields: [
        {
          FilterType: false,
          field_nm: "group_id",
          field_label: "Group Id",
        },
        {
          FilterType: false,
          field_nm: "user_id",
          field_label: "User Id",
        },
        {
          FilterType: false,
          field_nm: "country_code",
          field_label: "Country Code",
        },
        {
          FilterType: false,
          field_nm: "having_own_transport",
          field_label: "Having Own Transport",
        },
      ],
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
