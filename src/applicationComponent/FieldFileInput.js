import React, { Component } from "react";
import { Icons } from "./Icons/Icons.js";
import ReactTooltip from "react-tooltip";

const FieldFileInput = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.onFileChange = this.onFileChange.bind(this);
  //   this.base64 = this.base64.bind(this);
  // }

  const handleFileSelect = (file, base64) => {
    var res = new Promise((resolve, reject) => {
      var success = function (content) {
        if (base64) {
          resolve(content);
        } else {
          let jsonData;
          try {
            jsonData = JSON.parse(content);
          } catch (e) {
            if (e instanceof SyntaxError) {
              reject("Syntax Error is Occured please double check");
            } else {
              reject("Error is Occured please double check");
            }
          }
          resolve(jsonData);
        }
      };
      var fileReader = new FileReader();
      fileReader.onload = function (evt) {
        success(evt.target.result);
      };

      if (base64) {
        fileReader.readAsDataURL(file);
      } else {
        fileReader.readAsText(file);
      }
    });

    return res;
  };
  const base64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      //console.log("Error: ", error);
    };
  };

  const onFileChange = async (e) => {
    const {
      input: { onChange, value },
      fileUploadCallBack,
    } = props;
    handleFileSelect(e.target.files[0], base64)
      .then(async (data) => {
        if (typeof fileUploadCallBack === "function") {
          let id = await fileUploadCallBack(data, value);
          value ? onChange(value) : onChange(id);
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  const {
    input,
    label,
    required,
    isEnabled,
    icon,
    meta: { touched, error, warning },
    accept,
    colGrid,
  } = props; //whatever props you send to the component from redux-form Field

  return (
    <div className={`${colGrid} input-group`} data-tip data-for={input.name}>
      <ReactTooltip
        id={input.name}
        place="top"
        effect="solid"
        event="mouseenter"
        eventOff="mouseleave click"
      >
        {label}
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
      <label className="input-group-addon" htmlFor={input.name}>
        {label}
      </label>
      <input
        // {...input}
        type="file"
        accept={accept} //'.json, .JSON'
        onChange={onFileChange}
        className="form-control"
        id={input.name}
        name={input.name}
      />

      {/* <div className="warning-text text-danger">
        {touched &&
          ((error && <small>{error}</small>) ||
            (warning && <small>{warning}</small>))}
      </div> */}
    </div>
  );
};

export default FieldFileInput;
