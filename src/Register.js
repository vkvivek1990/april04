import React from "react";
import "./App.css";
import InputText from "./applicationComponent/InputText";
import Submit from "./applicationComponent/SubmitButton";
import { Required } from "./applicationComponent/ErrorMessage";
// import { InterStialHandler } from "./applicationComponent/InterstialHandler";
import Header from "./components/header";
import { Icons } from "./applicationComponent/Icons/Icons.js";
import FormFieldRender from "./formFieldRendering";
import Formpreview from "./FormPreview";
import { connect } from "react-redux";
import { AlertBar } from "./applicationComponent/AlertBar";
import { Field, reduxForm } from "redux-form";
import TLUSERFORM from "./pages/registration/controller/tl_user.controller";

import {
  submitRegistration,
  getRegistration,
  getPreviewRegistration,
  getServices,
} from "./redux/actions/registration.action";

// const getTypeComponent = (comType) => {};

// const getcomponent = {
//   Dashboardcomp,
// }

const formTitle = {
  tl_user: ["Personal Details", "Login Details"],
  tl_wp: ["Water Plant Details", "Contractor Details"],
  tl_veh: ["Vehicle Details", "Contractor Details"],
  tl_ind: ["Industry Details", "Contractor Details"],
};

export class Register extends React.Component {
  constructor(props) {
    super();
    this.state = {
      serviceType: [],
      serviceIcon: [],
      isDetailsActive: true,
      isServiceActive: false,
      isPreviewActive: false,
      fieldValues: {},
      formFields: [],
      error: {},
      errorMsg: "",
      showError: false,
      isCompleted: false,
      formPreview: false,
      fieldsInput: [],
      serviceTypeFields: [],
      menudata: [],
      formname: "tl_user",
      disableservice: true,
      leftCol: [],
      rightCol: ["We"],
      serviceerr: false,
    };
    this.getCheckedvalue = this.getCheckedvalue.bind(this);
    this.getServiceTab = this.getServiceTab.bind(this);
    this.serviceChange = this.serviceChange.bind(this);
    this.getPreviewFunction = this.getPreviewFunction.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  fieldsFilter = (formname) => {
    return this.props.initialValues[formname].data;
  };

  getTypesofServices = () => {
    this.props
      .getServices()
      .then((res) => {
        this.setState({ serviceTypeFields: res.payLoad.serviceTypeFields });
      })
      .catch((err) => {
        this.setState({ showError: true, errorMsg: "Internal Server Error" });
      });
  };

  fieldRenderingFunc = () => {
    if (!this.props.initialValues[this.state.formname]) {
      this.props
        .getRegistration(this.state.formname)
        .then((res) => {
          if (res.payLoad[this.state.formname].status === "success") {
            let alldata = [...res.payLoad[this.state.formname].data];
            alldata.map((item) => {
              item.field_nm = this.state.formname + "#" + item.field_nm;
              return item;
            });
            this.setState({
              formFields: alldata,
              formname: res.payLoad[this.state.formname].name,
            });
          }
        })
        .catch((err) => {
          this.setState({ showError: true, errorMsg: "Internal Server Error" });
        });
    } else {
      this.setState({
        formFields: this.props.initialValues[this.state.formname].data,
      });
    }
  };

  componentDidMount() {
    this.fieldRenderingFunc();
    this.getTypesofServices();
  }

  getCheckedvalue = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.setState({
        isServiceClicked: true,
        serviceType: [...this.state.serviceType, event.target.id],
        [event.target.name]: "checked",
        serviceIcon: [
          ...this.state.serviceIcon,
          {
            serviceIcon: event.target.getAttribute("icon"),
            serviceType: event.target.id,
          },
        ],
      });
    } else {
      this.state.serviceType.splice(
        this.state.serviceType.indexOf(event.target.id),
        1
      );

      this.state.serviceIcon.splice(
        this.state.serviceIcon.indexOf(event.target.getAttribute("icon")),
        1
      );

      this.setState(
        {
          [event.target.name]: "",
        },
        () => {
          this.setState(
            {
              isServiceClicked: this.state.serviceType.length ? true : false,
            },
            () => {
              if (this.state.serviceType.length === 0) {
                this.setState({ disableservice: true });
              }
            }
          );
        }
      );
    }
  };
  serviceChange = (event) => {
    const type = event.target.id;

    if (type === "persoanlDetails") {
      this.setState({
        isDetailsActive: true,
        isServiceActive: false,
        isPreviewActive: false,
        formFields: this.fieldsFilter("tl_user"),
        formname: "tl_user",
      });
    }
    if (type === "service") {
      this.setState({
        isDetailsActive: false,
        isServiceActive: true,
        isPreviewActive: false,
        formFields: this.fieldsFilter(this.state.serviceType[0]),
        formname: this.state.serviceType[0],
      });
    }
    if (type === "preview") {
      this.setState({
        isDetailsActive: false,
        isServiceActive: false,
        isPreviewActive: true,
      });
    }

    if (type === "ok") {
      // window.location.reload(false);
      this.setState(
        {
          isDetailsActive: true,
          isServiceActive: false,
          isPreviewActive: false,
          isCompleted: false,
          isServiceClicked: false,
          formFields: this.fieldsFilter("persoanlDetails"),
          serviceIcon: [],
          serviceType: [],
          industry: "",
          waterPlant: "",
          contractor: "",
          subContractor: "",
          transportAgents: "",
          deliveryBoy: "",
          vehicle: "",
        },
        () => {
          this.props.reset("RegistrationForm");
        }
      );
    }
  };

  enableServices = (enableservice, event) => {
    //console.log(this.state.serviceType, "serviceType");
    if (event !== "onchange") {
      if (!enableservice) {
        this.setState(
          {
            isDetailsActive: false,
            isServiceActive: true,
            isPreviewActive: false,
            formname: this.state.serviceType[0],
          },
          () => this.fieldRenderingFunc()
        );
      }
    }
    this.setState({
      disableservice: enableservice,
    });
  };

  serviceselectederr = (showsrvceerr) => {
    this.setState({ serviceerr: showsrvceerr });
  };

  getServiceTab = (serviceType) => {
    this.setState({ formname: serviceType }, () => {
      this.fieldRenderingFunc();
    });
  };

  getcompletedTab = (data) => {
    //console.log(data, "-------Completed Tab");
  };
  onSubmit(values) {
    const { touch } = this.props;
    let formUniquename = this.state.formname;
    // this.setState({ isCompleted: true, formPreview: false });
    let error = this.props.getFormItems[formUniquename].syncErrors;
    //console.log(error);
    if (error) {
      const toTouch = [];
      for (const key in error) {
        error.hasOwnProperty(key) && toTouch.push(key);
      }
      touch(...toTouch);
      // let getError = toTouch[0];
      // this.setState({
      //   errorMsg: `${getError} ${error[getError]}`,
      //   showError: true,
      // });
    }
    return this.props.submitRegistration(this.state.formname);
  }
  formFieldOnChange = (values) => {
    //console.log(values.getFormItems, 329);
    //this.setState(values);
  };

  async getPreviewFunction(event) {
    this.props.getPreviewRegistration().then((values) => {
      this.setState({
        isDetailsActive: false,
        isPreviewActive: true,
        isServiceActive: false,
        fieldValues: values,
      });
    });
    //await InterStialHandler(() => {
    //return this.props.submitRegistration();
    //});
  }

  render() {
    let { handleSubmit, error } = this.props;

    return (
      <div className="App">
        <Header />
        <div className="container regBackground">
          <div className="col-12">
            <div className="row btnRow">
              <div className="col-4">
                <button
                  type="button"
                  onClick={this.serviceChange}
                  id="persoanlDetails"
                  className={`btn left ${
                    this.state.isDetailsActive ? "active" : ""
                  }`}
                >
                  Your Details
                </button>
              </div>
              <div className="col-4">
                <button
                  type="button"
                  onClick={this.serviceChange}
                  id="service"
                  disabled={this.state.disableservice}
                  className={`btn center ${
                    this.state.isServiceActive ? "active" : ""
                  }`}
                >
                  Service
                </button>
              </div>
              <div className="col-4">
                <button
                  type="button"
                  onClick={this.serviceChange}
                  id="preview"
                  disabled={!this.state.isPreviewActive ? true : false}
                  className={`btn right ${
                    this.state.isPreviewActive ? "active" : ""
                  }`}
                >
                  See Preview & Complete
                </button>
              </div>
            </div>
          </div>
          {/* Type of user displays below */}
          {!this.state.isPreviewActive && (
            <div className="col-12">
              <h3 className="title">
                1. Type of User
                <a
                  href="#"
                  className="badge material-icons questionDesc"
                  data-toggle="popover"
                  title="Popover Header"
                  data-content="Some content inside the popover"
                >
                  {"help"}
                </a>
              </h3>
              <hr className="borderLine" />
            </div>
          )}
          {!this.state.isPreviewActive && (
            <React.Fragment>
              {this.state.serviceerr && this.state.serviceType.length === 0 && (
                <div className="service_err_box">
                  <span className="service_err_txt">
                    Please Select Atleast One Of the Below Services
                  </span>
                </div>
              )}
              <div className="row userTypeBg">
                <div className="col-12">
                  <div className="row">
                    {this.state.serviceTypeFields.map((item, pos) => {
                      return (
                        <div className="serviceImgGrid" key={pos}>
                          <span className="typeGrid">
                            <input
                              type="checkbox"
                              className="btn-check typeCheck"
                              id={item.serviceTypeId}
                              autoComplete="off"
                              onChange={this.getCheckedvalue}
                              value={item.serviceType}
                              name={item.serviceTypeId}
                              icon={item.serviceIcon}
                              disabled={
                                this.state.isDetailsActive ? false : true
                              }
                            />
                            <label
                              className={`btn btn-primary ${
                                this.state[item.serviceTypeId]
                              }`}
                              htmlFor={item.serviceTypeId}
                              disabled={
                                this.state.isDetailsActive ? false : true
                              }
                            >
                              <i
                                style={{ fontSize: `${item.fontSize}px` }}
                                className="material-icons"
                              >
                                {Icons(item.serviceIcon)}
                              </i>
                            </label>
                            <p className="service_title">{item.serviceType}</p>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}

          {/* Registration component display below */}

          {!this.state.isPreviewActive && (
            <FormFieldRender
              form={this.state.formname}
              {...this.state}
              error={error}
              onChange={this.formFieldOnChange}
              title={formTitle[this.state.formname]}
              enableServices={this.enableServices}
              selectedservices={this.state.serviceType}
              serviceselectederr={this.serviceselectederr}
            />
          )}

          {!this.state.disableservice && (
            <div className="col-12 nextServiceBtn">
              {this.state.serviceIcon.map((serviceIcon, pos) => {
                return (
                  <Submit
                    key={pos}
                    serviceType={serviceIcon.serviceType}
                    icon={serviceIcon.serviceIcon}
                    onClick={this.getServiceTab}
                    error={error}
                  />
                );
              })}
              {this.state.isServiceActive && !error && (
                <Submit
                  serviceType={"next"}
                  icon={""}
                  name={"Next"}
                  onClick={this.getServiceTab}
                />
              )}
            </div>
          )}
          {/* {this.state.showError && <AlertBar erroMsg={this.state.errorMsg} />}; */}
          {this.state.isPreviewActive && (
            <Formpreview
              {...this.state}
              handleClick={this.serviceChange}
              serviceClick={this.getServiceTab}
            />
          )}
          <div className="col-12 nextServiceBtn">
            {this.state.isPreviewActive && !this.state.isCompleted && (
              <button
                onClick={handleSubmit(this.onSubmit)}
                id="next"
                type="button"
                className="btn nextBtn"
              >
                Create Profile
              </button>
            )}
          </div>
          {/* Button trigger below */}
          {/* <div className="col-12 nextServiceBtn">
            {!this.state.isPreviewActive &&
              this.state.serviceIcon.map((serviceIcon, pos) => {
                return (
                  <button
                    key={pos}
                    onClick={this.getServiceTab}
                    id={serviceIcon.serviceType}
                    type="button"
                    className="btn nextBtn"
                  >
                    <i style={{ fontSize: `12` }} className="material-icons">
                      {Icons(serviceIcon.serviceIcon)}
                    </i>
                  </button>
                );
              })}
            {this.state.isServiceActive && (
              <button
                onClick={this.getPreviewFunction}
                id="next"
                type="button"
                className="btn nextBtn"
                formName={"RegistrationForm"}
              >
                Next
              </button>
            )}
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let getFormItems = state.form;

  return {
    initialValues: state.register,
    getFormItems: getFormItems,
    contractDetails: state.rightCol,
  };
};
const mapDispatchToProps = {
  submitRegistration: (url) => submitRegistration(url),
  getRegistration: (url) => getRegistration(url),
  getPreviewRegistration: () => getPreviewRegistration(),
  getServices: () => getServices(),
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);

// export default connect(mapStateToProps, mapDispatchToProps)(Register);
