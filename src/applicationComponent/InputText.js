import React from "react";
import { Icons } from "./Icons/Icons.js";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

const InputText = (props) => {
  let {
    input,
    label,
    icon,
    maxLength,
    isReadonly,
    isEnabled,
    colGrid,
    fieldDataType,
    meta: { touched, error, warning, pristine },
  } = props;

  const onChange = (value) => {
    props.input.onChange(value);
  };

  return (
    <div className={`${colGrid} input-group`} data-tip data-for={input.name}>
      <ReactTooltip
        id={input.name}
        place="top"
        effect="solid"
        event="mouseenter"
        eventOff="mouseleave click"
      >
        {touched && error ? <span>{`${label} - ${error}`}</span> : label}
      </ReactTooltip>
      {isEnabled && (
        <span
          className={`input-group-addon iconclr ${
            touched && error ? "required" : ""
          }`}
        >
          <i className="glyphicon">{Icons(icon)}</i>
        </span>
      )}

      <input
        {...input}
        id={input.name}
        type={fieldDataType}
        className="form-control input"
        name={input.name}
        placeholder={label}
        maxLength={maxLength}
        hidden={!isEnabled}
        // onChange={onChange}
      />
      {/* {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))} */}
    </div>
  );
};

// const InputText = ({
//   input,
//   label,
//   icon,
//   maxLength,
//   isReadonly,
//   inLineErrorMessage,
//   isEnabled,
//   colGrid,
//   fieldDataType,
//   meta: { touched, error, warning, pristine },
// }) => (
//   <div className={`${colGrid} input-group`}>
//     {isEnabled && (
//       <span
//         className={`input-group-addon iconclr ${
//           touched && error ? "required" : ""
//         }`}
//       >
//         <i className="glyphicon">{Icons(icon)}</i>
//       </span>
//     )}

//     <input
//       {...input}
//       id={input.name}
//       type={fieldDataType}
//       className="form-control input"
//       name={input.name}
//       placeholder={label}
//       pristine={pristine.toString()}
//       maxLength={maxLength}
//       hidden={!isEnabled}
//     />
//     {inLineErrorMessage &&
//       touched &&
//       ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//   </div>
// );

InputText.propTypes = {
  maxLength: PropTypes.number,
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  isReadonly: PropTypes.bool,
  isEnabled: PropTypes.bool,
  inLineErrorMessage: PropTypes.bool,
};

InputText.defaultProps = {
  isReadonly: false,
  inLineErrorMessage: false,
  isEnabled: false,
};

export default InputText;
