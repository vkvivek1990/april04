import React from "react";
import { connect } from "react-redux";
import {
  submitRegistration,
  getRegistration,
  getPreviewRegistration,
} from "./redux/actions/registration.action";
import profile from "./assets/profile.jpg";
import adhar from "./assets/adhar.jpg";
import { Icons } from "./applicationComponent/Icons/Icons.js";
export class Formpreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceType: ["persoanlDetails", "industry"],
    };
  }
  handleClick = (event) => {
    this.props.handleClick(event);
  };
  serviceClick = (event) => {
    this.props.serviceClick(event);
  };
  render() {
    let { fieldValues, serviceType, isCompleted, isPreviewActive } = this.props;

    return (
      <div className="horizontal-scrollable">
        <div className="row">
          {isCompleted && (
            <div className="col-12 previewWrapper">
              <div className="row">
                <div className="col-10">
                  <h3 className="title">Profile Create Successfully !</h3>
                </div>
                <div className="col-2"></div>
              </div>
              <hr className="borderLine" />
              <div className="wrapper">
                <p>
                  We will notify through your registered mobile number
                  #XXXXXX8956 and Email Id #viXXX@gmail.com
                </p>
              </div>
              <button
                onClick={this.handleClick}
                id="ok"
                type="button"
                className="btn nextBtn"
              >
                OK
              </button>
            </div>
          )}
          {isPreviewActive && (
            <div className="col-6 previewWrapper">
              <div className="row">
                <div className="col-10">
                  <h3 className="title">Personal Details</h3>
                </div>
                <div className="col-2">
                  <button
                    id="persoanlDetails"
                    className="editButton"
                    onClick={this.handleClick}
                  >
                    <i className="pull-left glyphicon">{Icons("mode_edit")}</i>
                    Edit
                  </button>
                </div>
              </div>
              <hr className="borderLine" />
              <div className="cardWrapper">
                <div className="personalDetails">
                  <img className="img-responsive" src={profile} />
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons(fieldValues.gender)}
                    </i>
                    <span>{`${fieldValues.firstName} ${fieldValues.secondName}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons("calendar_today")}
                    </i>
                    <span>{`${fieldValues.dob}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons("content_paste")}
                    </i>
                    <span>{`${fieldValues.idProofNo}`}</span>
                  </p>
                </div>
                <div className="contactDetails">
                  <p>
                    <i className="pull-left glyphicon">{Icons("mail")}</i>
                    <span>{`${fieldValues.email}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">{Icons("phone")}</i>
                    <span>{`${fieldValues.contactNumber}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons("my_location")}
                    </i>
                    <span>{`${fieldValues.addrDoorNo} ${fieldValues.areaLandmark}, ${fieldValues.pincode}`}</span>
                  </p>
                </div>
                <div className="attachmentDetails">
                  <img className="img-responsive" src={adhar} />
                </div>
              </div>
            </div>
          )}

          {serviceType.includes("industry") && isPreviewActive && (
            <div className="col-6 previewWrapper">
              <div className="row">
                <div className="col-10">
                  <h3 className="title">Industry</h3>
                </div>
                <div className="col-2">
                  <button
                    id="industry"
                    className="editButton"
                    onClick={this.serviceClick}
                  >
                    <i className="pull-left glyphicon">{Icons("mode_edit")}</i>
                    Edit
                  </button>
                </div>
              </div>
              <hr className="borderLine" />
              <div className="cardWrapper">
                <div className="personalDetails">
                  <img className="img-responsive" src={profile} />
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons(fieldValues.gender)}
                    </i>
                    <span>{`${fieldValues.industry_name}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons("calendar_today")}
                    </i>
                    <span>{`${fieldValues.established_on}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons("content_paste")}
                    </i>
                    <span>{`${fieldValues.idProofNo}`}</span>
                  </p>
                </div>
                <div className="contactDetails">
                  <p>
                    <i className="pull-left glyphicon">{Icons("mail")}</i>
                    <span>{`${fieldValues.industry_contact_email}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">{Icons("phone")}</i>
                    <span>{`${fieldValues.industry_contact_phone}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons("my_location")}
                    </i>
                    <span>{`${fieldValues.industry_address} `}</span>
                  </p>
                </div>
                <div className="attachmentDetails">
                  <img className="img-responsive" src={adhar} />
                </div>
              </div>
            </div>
          )}
          {serviceType.includes("waterPlant") && isPreviewActive && (
            <div className="col-6 previewWrapper">
              <div className="row">
                <div className="col-10">
                  <h3 className="title">Water Plant</h3>
                </div>
                <div className="col-2">
                  <button
                    id="waterPlant"
                    className="editButton"
                    onClick={this.serviceClick}
                  >
                    <i className="pull-left glyphicon">{Icons("mode_edit")}</i>
                    Edit
                  </button>
                </div>
              </div>
              <hr className="borderLine" />
              <div className="cardWrapper">
                <div className="personalDetails">
                  <img className="img-responsive" src={profile} />
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons(fieldValues.gender)}
                    </i>
                    <span>{`${fieldValues.industry_name}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons("calendar_today")}
                    </i>
                    <span>{`${fieldValues.dob}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons("content_paste")}
                    </i>
                    <span>{`${fieldValues.idProofNo}`}</span>
                  </p>
                </div>
                <div className="contactDetails">
                  <p>
                    <i className="pull-left glyphicon">{Icons("mail")}</i>
                    <span>{`${fieldValues.email}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">{Icons("phone")}</i>
                    <span>{`${fieldValues.contactNumber}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons("my_location")}
                    </i>
                    <span>{`${fieldValues.addrDoorNo} ${fieldValues.areaLandmark}, ${fieldValues.pincode}`}</span>
                  </p>
                </div>
                <div className="attachmentDetails">
                  <img className="img-responsive" src={adhar} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Formpreview;
