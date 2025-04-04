import React from "react";
import { Field } from "redux-form";
import SelectBox from "./SelectBox";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";
import DatePickercomp from "./datepickercomp";
import FieldFileInput from "./FieldFileInput";
import RadioButton from "./RadioButton";
import {
  Required,
  Email,
  MaxLength6,
  Numeric,
  AlphaNumeric,
  Alpha,
  MobileNumber,
  PasswordValidate,
} from "./ErrorMessage";

const FieldInfo = (sectionArray, fileUploadCallBack) => {
  const segments = [];
  const validateField = (validateObj) => {
    let validFinal = [];
    if (validateObj.is_required === "true") {
      validFinal.push(Required);
    }
    if (validateObj.is_alphaNumeric === "true") {
      validFinal.push(AlphaNumeric);
    }
    if (validateObj.is_alpha === "true") {
      validFinal.push(Alpha);
    }
    if (validateObj.is_numeric === "true") {
      validFinal.push(Numeric);
    }
    if (validateObj.is_mobileNumber === "true") {
      validFinal.push(MobileNumber);
    }
    if (validateObj.max_length === "6") {
      validFinal.push(MaxLength6);
    }
    if (validateObj.is_mail === "true") {
      validFinal.push(Email);
    }
    if (validateObj.is_passwordValidate === "true") {
      validFinal.push(PasswordValidate);
    }

    return validFinal;
  };
  const CustumField = (props) => {
    const fieldProps = {
      fieldDataType: props.field_data_type,
      componentType: props.component_type,
      countryCode: props.ctry_cd,
      languageCode: props.lang_cd,
      label: props.field_label,
      name: props.field_nm,
      defaultValue: props.field_default_value,
      description: props.field_description,
      readOnly: props.is_readonly,
      isEnabled: props.is_enabled,
      options: props.field_options,
      validation: props.field_validations,
      maxLength: props.field_validations.max_length,
      icon: props.field_icon,
      colGrid: props.col_grid,
      fieldPosition: props.field_position,
      singleDatePicker: Boolean(props.field_validations.singleDatePicker),
      showDropdowns: Boolean(props.field_validations.showDropdowns),
      timePicker: Boolean(false),
    };

    switch (props.component_type) {
      case "SelectBox":
        return (
          <Field
            component={SelectBox}
            {...fieldProps}
            validate={validateField(fieldProps.validation)}
          />
        );
      case "TextBox":
        return (
          <Field
            component={InputText}
            {...fieldProps}
            parse={(value) =>
              fieldProps.fieldDataType === "number"
                ? Number(value)
                : String(value)
            }
            validate={validateField(fieldProps.validation)}
          />
        );

      case "DatePicker":
        return (
          <Field
            component={DatePickercomp}
            {...fieldProps}
            validate={validateField(fieldProps.validation)}
          />
        );
      case "InputFile":
        return (
          <Field
            component={FieldFileInput}
            {...fieldProps}
            validate={validateField(fieldProps.validation)}
            fileUploadCallBack={fileUploadCallBack}
          />
        );
      case "RadioButton":
        return (
          <Field
            component={RadioButton}
            {...fieldProps}
            validate={validateField(fieldProps.validation)}
          />
        );
      default:
        return "";
    }
  };

  const Section = (section, fieldArray, col_grid, position) => {
    let fieldSortArray = fieldArray.sort(
      (a, b) => a.display_order - b.display_order
    );

    return (
      <div
        className={`${col_grid} ${
          position == "LH" ? "pull-left" : "pull-right"
        } fieldStyle`}
        name={section.key}
      >
        {/* <h3 className="title">
          {`${section.value} `}
          <a href="#" className="badge material-icons questionDesc">
            help
          </a>
        </h3>
        <hr /> */}
        <br />
        <div className="row reg">
          {fieldSortArray.map((field, ind) => {
            return <CustumField {...field} />;
          })}
        </div>
      </div>
    );
  };

  if (sectionArray && Array.isArray(sectionArray)) {
    for (const sect of sectionArray) {
      console.log(sect, "sect");
      // for (const subsect of sect.section) {
      segments.push(
        Section(
          sect.section,
          sect.fields,
          sect.section_column_grid,
          sect.section_position
        )
      );
      // }
    }
  }
  return segments;
};
export default FieldInfo;
