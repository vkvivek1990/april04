import React from "react";
import { Icons } from "./Icons/Icons.js";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

const SelectBox = (props) => {
  let {
    input,
    meta: { touched, error, warning },
    label,
    icon,
    options,
    keys,
    inLineErrorMessage,
    isEnabled,
    colGrid,
  } = props;
  const onChange = (value) => input.onChange(value);
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
      <select
        {...input}
        className="custom-select checkGroup"
        id={input.name}
        onChange={onChange}
        hidden={!isEnabled}
      >
        <option value="">{label}</option>
        {options &&
          options.map((opt, ind) => {
            return (
              <option key={ind} value={opt[keys[1]]}>
                {opt[keys[1]]}
              </option>
            );
          })}
      </select>
      {inLineErrorMessage &&
        touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};

SelectBox.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  isReadonly: PropTypes.bool,
  isEnabled: PropTypes.bool,
  inLineErrorMessage: PropTypes.bool,
  keys: PropTypes.array,
  options: PropTypes.array.isRequired,
  colGrid: PropTypes.string,
  fieldPosition: PropTypes.string,
  validation: PropTypes.object,
  languageCode: PropTypes.string,
  description: PropTypes.string,
  countryCode: PropTypes.string,
};

SelectBox.defaultProps = {
  isReadonly: false,
  inLineErrorMessage: false,
  isEnabled: false,
  keys: ["key", "value"],
};

export default SelectBox;
