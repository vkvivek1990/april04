import React, { useState } from "react";
import { Icons } from "./Icons/Icons.js";
import ReactTooltip from "react-tooltip";

const RadioButton = (props) => {
  const [label, setLabel] = useState(props.label);

  const onChange = (event) => {
    setLabel(event.target.id);
    props.input.onChange(event.target.id);
  };

  let {
    input,
    type,
    icon,
    options,
    optionIcon,
    meta: { touched, error, warning },
    colGrid,
  } = props;

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
      <span
        className={`input-group-addon iconclr ${
          touched && error ? "required" : ""
        }`}
      >
        <i className="glyphicon">{Icons(icon)}</i>
      </span>

      <div className="checkGroup radiobox">
        <span>{label}</span>
        <div
          className="btn-group btn-group-toggle pull-right"
          data-toggle="buttons"
        >
          {options.map((optionsValue, pos) => {
            return (
              <label
                key={pos}
                htmlFor={optionsValue.value.toString().toLowerCase()}
                className={`btn btn-secondary`}
              >
                <input
                  type="radio"
                  name={input.name}
                  id={optionsValue.value.toString().toLowerCase()}
                  autoComplete="off"
                  className="form-control input"
                  onChange={onChange}
                />
                <i className="glyphicon" data-tip data-for={input.name}>
                  {Icons(optionsValue.options)}
                </i>
              </label>
            );
          })}
        </div>
      </div>

      {/* <div>
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div> */}
    </div>
  );
};

export default RadioButton;
