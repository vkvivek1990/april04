import React from "react";
import { Icons } from "./Icons/Icons.js";

export default class CheckBox extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let {
      input,
      label,
      type,
      icon,
      meta: { touched, error, warning },
    } = this.props;
    return (
      <div className="input-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={input.name}
            {...input}
          />
          <label
            className={`custom-control-label ${
              touched && error ? "required" : ""
            }`}
            htmlFor={input.name}
          >
            {label}
          </label>
        </div>

        {/* <div>
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div> */}
      </div>
    );
  }
}
