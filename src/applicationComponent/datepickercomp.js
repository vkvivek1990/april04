import React, { Component } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import PropTypes from "prop-types";
import { Icons } from "./Icons/Icons.js";
import ReactTooltip from "react-tooltip";
var moment = require("moment");
moment().format();

const DatePickercomp = (props) => {
  let {
    input,
    meta: { touched, error, warning, pristine },
    label,
    icon,
    options,
    keys,
    inLineErrorMessage,
    isEnabled,
    colGrid,
    timePicker,
    singleDatePicker,
    showDropdowns,
    dateviewformat,
  } = props;

  const handleCallback = (start, end, label, timePicker, singleDatePicker) => {
    let startdate = "";
    let enddate = "";

    if (timePicker && singleDatePicker) {
      startdate = moment(start).format("DD/MM/YYYY hh:mm:ss");
      input.onChange(startdate);
    } else if (timePicker && !singleDatePicker) {
      startdate = moment(start).format("DD/MM/YYYY hh:mm:ss");
      enddate = moment(end).format("DD/MM/YYYY hh:mm:ss");
      let newobj = {};
      newobj.from = startdate;
      newobj.to = enddate;
      input.onChange(newobj);
    } else if (!timePicker && singleDatePicker) {
      startdate = moment(start).format("DD/MM/YYYY");
      input.onChange(startdate);
    } else if (!timePicker && !singleDatePicker) {
      startdate = moment(start).format("DD/MM/YYYY");
      enddate = moment(end).format("DD/MM/YYYY");
      let newobj = {};
      newobj.from = startdate;
      newobj.to = enddate;
      input.onChange(newobj);
    }
  };

  return (
    <div className={`${colGrid} input-group`} data-tip data-for={input.name}>
      {isEnabled && (
        <span
          className={`input-group-addon iconclr ${
            touched && error ? "required" : ""
          }`}
        >
          <i className="glyphicon">{Icons(icon)}</i>
        </span>
      )}
      <ReactTooltip
        id={input.name}
        place="top"
        effect="solid"
        event="mouseenter"
        eventOff="mouseleave click"
      >
        {touched && error ? <span>{`${label} - ${error}`}</span> : label}
      </ReactTooltip>
      <DateRangePicker
        initialSettings={{
          singleDatePicker,
          timePicker,
          showDropdowns,
          autoApply: true,
          //autoUpdateInput: true,
          locale: {
            format: dateviewformat,
            cancelLabel: "Clear",
          },
        }}
        onCallback={(start, end, label) =>
          handleCallback(start, end, label, timePicker, singleDatePicker)
        }
      >
        <input
          className="form-control input"
          defaultValue=""
          value=""
          placeholder={label}
          id={input.name}
          name={input.name}
        />
      </DateRangePicker>
      {inLineErrorMessage &&
        touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};

DatePickercomp.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  timePicker: PropTypes.bool.isRequired,
  singleDatePicker: PropTypes.bool.isRequired,
  showDropdowns: PropTypes.bool.isRequired,
  isReadonly: PropTypes.bool,
  isEnabled: PropTypes.bool,
  inLineErrorMessage: PropTypes.bool,
  keys: PropTypes.array,
  colGrid: PropTypes.string,
  fieldPosition: PropTypes.string,
  validation: PropTypes.object,
  languageCode: PropTypes.string,
  description: PropTypes.string,
  countryCode: PropTypes.string,
  dateviewformat: PropTypes.string,
};

DatePickercomp.defaultProps = {
  isReadonly: false,
  inLineErrorMessage: false,
  isEnabled: false,
  keys: ["key", "value"],
  dateviewformat: "DD/MM/YYYY",
};

export default DatePickercomp;
