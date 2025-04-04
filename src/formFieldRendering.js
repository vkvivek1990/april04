import React from "react";
import Form from "./applicationComponent/Form";
import { Field, reduxForm, reset } from "redux-form";
import InputText from "./applicationComponent/InputText";
import RadioButton from "./applicationComponent/RadioButton";
import SelectBox from "./applicationComponent/SelectBox";
import CheckBox from "./applicationComponent/CheckBox";
import FieldFileInput from "./applicationComponent/FieldFileInput";
import Submit from "./applicationComponent/SubmitButton";
import DatePicker from "./applicationComponent/datepickercomp";
import HeaderTags from "./applicationComponent/HeaderTags";
import { Required, Email } from "./applicationComponent/ErrorMessage";
import ToastComponent from "./applicationComponent/ToastComponent/";
import {
  submitRegistration,
  getRegistration,
  getPreviewRegistration,
  resetRegistration,
  updateErrorStatus
} from "./redux/actions/registration.action";

import { connect } from "react-redux";
import { DataUsageTwoTone } from "@material-ui/icons";

export class FormFieldRender extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.validateField = this.validateField.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
    this.state = {
      showdialog:false,
      dialogmessage:"",
    }
  }

  returnUpdatedComponent = (componentType) => {
    if (componentType === "RadioButton") {
      return RadioButton;
    } else if (componentType === "SelectBox") {
      return SelectBox;
    } else if (componentType === "InputFile") {
      return FieldFileInput;
    } else if (componentType === "headerTags") {
      return HeaderTags;
    } else if (componentType === "CheckBox") {
      return CheckBox;
    } else if (componentType === "DatePicker") {
      return DatePicker;
    } else {
      return InputText;
    }
  };

  componentDidMount() {}

  validateField = (validateObj) => {
    let validFinal = [];
    if (validateObj.is_required === true) {
      validFinal.push(Required);
    }
    if (validateObj.is_mail === true) {
      validFinal.push(Email);
    }

    return validFinal;
  };

  onChange(event) {
    this.props.onChange({
      getFormItems: this.props.getFormItems,
    });
  }

  getPristine = (values) => {};

  resetdialog = () => {
    this.setState({showdialog:false,dialogmessage:""});
  }

  onSubmit(values) {
    const { touch } = this.props;
    let formUniquename = this.props.form;
    let error = this.props.getFormItems[formUniquename].syncErrors;
    if (error) {
      const toTouch = [];
      for (const key in error) {
        error.hasOwnProperty(key) && toTouch.push(key);
      }
      touch(...toTouch);
    } else {
      if(this.props.form === "Edit_form"){
        this.props.handleClose();
      }
      this.props.submitRegistration(formUniquename, this.props.selectedTemp)
      .then((res)=>{
        if(res.payLoad.error){
          this.setState({showdialog:true,dialogmessage:res.payLoad.error.message},()=>{
            setTimeout(()=>{
              this.resetdialog()
            },3000)
          })
        }
      })
      .catch((err)=>{
      })
    }
  }

  onReset() {
    let formUniquename = this.props.form;
    this.props.resetRegistration(formUniquename);
  }

  render() {
    let { formFields, error, onChange, form, title, submittitle, submiticon } =
      this.props;

    return (
      <>
      
        <ToastComponent 
        header = { false } 
        message={this.state.dialogmessage} 
        headText={"Status"} 
        messageType={'error'} 
        show={this.state.showdialog}
        />

        <Form id="test" name={form} autoComplete="off">
          {formFields.map((inputData, ind) => {
            return (
              <div key={ind} className={`${inputData.col_grid} fieldStyle`}>
                <Field
                  component={this.returnUpdatedComponent(
                    inputData.component_type
                  )}
                  name={inputData.field_nm}
                  label={`${inputData.field_label} ${
                    inputData.field_validations.is_required ? "*" : ""
                  }`}
                  defaultValue={inputData.field_default_value}
                  type={inputData.field_data_type}
                  icon={inputData.field_icon}
                  readOnly={inputData.is_readonly}
                  isEnabled={inputData.is_enabled}
                  options={inputData.field_options}
                  pristine={(value) => this.getPristine(value)}
                  onChange={this.onChange}
                  maxLength={
                    inputData.field_validations.max_length &&
                    inputData.field_validations.max_length
                  }
                  validate={this.validateField(inputData.field_validations)}
                  showDropdowns={inputData.showDropdowns}
                  timePicker={inputData.timePicker}
                  singleDatePicker={inputData.singleDatePicker}
                  dateviewformat={inputData.dateviewformat}
                />
              </div>
            );
          })}
        </Form>
        <div className="footer_submit_holder">
          <Submit
            serviceType={form}
            icon={submiticon}
            name={submittitle}
            form={form}
            //disabled={this.props.getFormItems[form].syncErrors && true}
            classbtn="submit_btn"
            onClick={this.onSubmit}
          />
          <Submit
            serviceType={form}
            icon={"restart_alt"}
            name={"Reset"}
            form={form}
            classbtn="reset_btn"
            //disabled={this.props.getFormItems[form].syncErrors && true}
            onClick={this.onReset}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let getFormItems = state.form;
  return {
    getFormItems: getFormItems,
  };
};

const mapDispatchToProps = {
  submitRegistration: (url, group) => submitRegistration(url, group),
  resetRegistration: (url) => resetRegistration(url),
  getRegistration: () => getRegistration(),
  getPreviewRegistration: () => getPreviewRegistration(),
  updateErrorStatus: (data) => updateErrorStatus(data)
};

export default reduxForm({ enableReinitialize: true })(
  connect(mapStateToProps, mapDispatchToProps)(FormFieldRender)
);
