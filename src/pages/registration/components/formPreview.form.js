import React, { useEffect, useState } from "react";
import { Icons } from "../../../applicationComponent/Icons/Icons.js";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./Previewscreen_style.scss";
import ReactTooltip from "react-tooltip";

const FormPreviewComponent = (props) => {
  const [profileImage, setprofileImage] = useState();
  const [ind_photo_attachment, setind_photo_attachment] = useState();
  const [attached_isi_reference, setattached_isi_reference] = useState();
  const [attached_wp_photo, setattached_wp_photo] = useState();
  const [attached_fssai_reference, setattached_fssai_reference] = useState();

  let {
    dispatchServicesItemsClicked,
    dispatchCurrentPageType,
    serviceClicked,
    completedForm,
    getImagebase64,
    RegisterUserProfile,
  } = props;
  // let serviceClicked = [{ id: "tl_industry" }, { id: "tl_water_plant" }];

  let fieldValues = {
    tl_user: props.initialValues.init_values.tl_user,
    tl_water_plant: props.initialValues.init_values.tl_water_plant,
    tl_industry: props.initialValues.init_values.tl_industry,
    tl_contractor: props.initialValues.init_values.tl_contractor,
    tl_sub_contractor: props.initialValues.init_values.tl_sub_contractor,
    tl_transport_agent: props.initialValues.init_values.tl_transport_agent,
    tl_vehicle: props.initialValues.init_values.tl_vehicle,
    tl_driver: props.initialValues.init_values.tl_driver,
    tl_delivery_boy: props.initialValues.init_values.tl_delivery_boy,
  };

  let formName = {
    tl_user: "Personal Details",
    tl_industry: "Industry Details",
    tl_contractor: "Contractor Details",
  };

  // let fieldValues = {
  //   tl_user: {
  //     first_name: "Vivek",
  //     last_name: "kumar",
  //     gender: "male",
  //     dob: "07/05/2021",
  //     id_proof_type: "AdharCard",
  //     contact_address: "Chennai",
  //     id_proof_no: "652389741",
  //     contat_email: "vivek@g.com",
  //     user_name: "vivek",
  //     attached_id_proof: 80,
  //     password: "vivek",
  //     confirm_password: "vivek",
  //     secondary_check_enabled: "Email",
  //     pin: "600019",
  //     contact_number: "9962937837",
  //     id: 93,
  //   },
  //   tl_industry: {
  //     parent_id: "hi",
  //     user_id: 93,
  //     industry_name: "Ind Name Jaga",
  //     established_on: "05/05/2021",
  //     industry_contact_email: "indjaga@gmail.com",
  //     industry_address: "Devipattina",
  //     industry_pin: "600019",
  //     country_code: "91",
  //     deliveryvolume_expected_mon_fri: 250,
  //     deliveryvolume_expected_sat: 250,
  //     deliveryvolume_expected_sun: 250,
  //     delivery_slot1_mon_fri: "Y",
  //     delivery_slot2_mon_fri: "Y",
  //     delivery_slot1_sat: "Y",
  //     delivery_slot2_sat: "Y",
  //     delivery_slot1_sun: "Y",
  //     km_coverage_agreed_per_day: 250,
  //     delivery_slot2_sun: "Y",
  //     payment_per_km_agreed: 15,
  //     ind_photo_attachment: "ind photo attachment",
  //     payment_payable_mode: "Cash",
  //     payable_pymt_frequency: "weekly",
  //     industry_contact_phone: "7896541235",
  //     id: 24,
  //   },
  //   tl_water_plant: {
  //     user_id: 93,
  //     plant_name: "Plant name Vijay",
  //     established_on: "04/05/2021",
  //     plant_type: "Lease",
  //     plant_contact_no: "789654123",
  //     plant_contact_email: "plantvijay@gmail.com",
  //     plant_contact_address: "Vellore",
  //     plant_fssai_number: "ISI798798Plant",
  //     plant_pincode: "898956",
  //     country_code: "91",
  //     plant_licence_no: "PL787JKJLJ",
  //     plant_isi_number: "PLISI1212",
  //     is_owned_by_user: "Y",
  //     owned_by: "N",
  //     delivery_capacity: 250,
  //     having_own_transport: "y",
  //     is_delivery_supported: "Y",
  //     having_own_deliveryteam: "Y",
  //     attached_isi_reference: "ISI reference",
  //     attached_wp_photo: "wp photo",
  //     attached_fssai_reference: "fssai Reference",
  //     available_on_mon_fri: "Y",
  //     available_on_sat: "Y",
  //     available_on_sun: "Y",
  //     receivable_payment_mode: "Cash",
  //     receivable_pymt_frequency: "Daily",
  //     service_available_to_pin: "91",
  //     plant_capacity: 1500,
  //     id: 10,
  //   },
  // };

  useEffect(() => {
    dispatchCurrentPageType({
      is_form_preview_touched: true,
      current_page_type: "form_preview",
    });
  }, []);

  const handleClick = (event) => {
    // alert("a");
    RegisterUserProfile(event.target.id)
      .then((res) => {
        if (res === "success") {
          dispatchServicesItemsClicked(event.target.id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProfileImage = async (id) => {
    if (id) {
      let res = await getImagebase64(id);
      setprofileImage(res.payLoad.base64);
    }
  };
  const getIndPhotoImage = async (id) => {
    if (id) {
      let res = await getImagebase64(id);
      setind_photo_attachment(res.payLoad.base64);
    }
  };
  const getWaterPlantISI = async (id) => {
    if (id) {
      let res = await getImagebase64(id);
      setattached_isi_reference(res.payLoad.base64);
    }
  };

  const getWaterPlantphoto = async (id) => {
    if (id) {
      let res = await getImagebase64(id);
      setattached_wp_photo(res.payLoad.base64);
    }
  };
  const getWaterPlantFSSAI = async (id) => {
    if (id) {
      let res = await getImagebase64(id);
      setattached_fssai_reference(res.payLoad.base64);
    }
  };

  useEffect(() => {
    getProfileImage(fieldValues.tl_user.attached_id_proof);
    // getIndPhotoImage(
    //   fieldValues.tl_industry.ind_photo_attachment &&
    //     fieldValues.tl_industry.ind_photo_attachment
    // );
    // getWaterPlantISI(
    //   fieldValues.tl_industry.attached_isi_reference &&
    //     fieldValues.tl_industry.attached_isi_reference
    // );
    // getWaterPlantphoto(
    //   fieldValues.tl_industry.attached_wp_photo &&
    //     fieldValues.tl_industry.attached_wp_photo
    // );
    // getWaterPlantFSSAI(
    //   fieldValues.tl_industry.attached_fssai_reference &&
    //     fieldValues.tl_industry.attached_fssai_reference
    // );
  }, []);

  const handleRenderforms = () => {
    //debugger;
    return completedForm.map((items, index) => {
      return (
        <Card className="preview_card">
          <Accordion.Toggle as={Card.Header} eventKey={index}>
            {formName[items]}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={index}>
            <Card.Body>
              <div className="btn_whole_holder">
                <button id={items} className="editButton" onClick={handleClick}>
                  <i className="pull-left glyphicon">{Icons("mode_edit")}</i>
                  Edit
                </button>
              </div>
              <div className="fields_holder">
                <div className="row">
                  {props.initialValues[items + "_form_field"][0].section.map(
                    (fieldobj, inx) => {
                      return fieldobj.fields.map((fieldlist, index) => {
                        return (
                          <div className="col-md-2">
                            <div className="filed_dtls_holder">
                              <i className="pull-left glyphicon">
                                {Icons(fieldlist.field_icon)}
                              </i>
                              <span className="field_title">
                                {fieldlist.field_label}
                              </span>
                              <span className="field_val">
                                {fieldValues[items][fieldlist.field_nm]}
                              </span>
                            </div>
                          </div>
                        );
                      });
                    }
                  )}
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    });
  };

  return (
    <>
      <div className="preview_holder">
        <Accordion defaultActiveKey="0">{handleRenderforms()}</Accordion>

        {/* {fieldValues.tl_user && (
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-10">
                <h3 className="title">Personal Details</h3>
              </div>
              <div className="col-2">
                <button
                  id="tl_user"
                  className="editButton"
                  onClick={handleClick}
                >
                  <i className="pull-left glyphicon">{Icons("mode_edit")}</i>
                  Edit
                </button>
              </div>
            </div>
            <hr className="borderLine" />

            <div className="cardWrapper">
              <div className="row">
                <div className="col-4">
                  <div className="personalDetails">
                    <p>
                      <i className="pull-left glyphicon">
                        {Icons(fieldValues.tl_user.gender)}
                      </i>

                      <span>{`${fieldValues.tl_user.first_name} ${fieldValues.tl_user.last_name}`}</span>
                    </p>

                    <p>
                      <i className="pull-left glyphicon">
                        {Icons("calendar_today")}
                      </i>
                      <span>{`${fieldValues.tl_user.dob}`}</span>
                    </p>
                    <p>
                      <i className="pull-left glyphicon">
                        {Icons("content_paste")}
                      </i>
                      <span>{`${fieldValues.tl_user.id_proof_no}`}</span>
                    </p>
                  </div>
                </div>
                <div className="col-8">
                  <div className="attachments">
                    <p>
                      <img className="img-responsive" src={profileImage} />
                    </p>
                  </div>
                </div>
              </div>
              <div className="contactDetails">
                <p>
                  <i className="pull-left glyphicon">{Icons("mail")}</i>
                  <span>{`${fieldValues.tl_user.contat_email}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("phone")}</i>
                  <span>{`${fieldValues.tl_user.contact_number}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("my_location")}</i>
                  <span>{`${fieldValues.tl_user.contact_address}`}</span>
                </p>
              </div>
              <div className="attachmentDetails">
                <img className="img-responsive" src={profileImage} />
              </div>
            </div>
          </div>
        )} */}

        {/* {completedForm.filter((a) => a === "tl_water_plant").length > 0 && (
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-10">
                <h3 className="title">Waterplant Details</h3>
              </div>
              <div className="col-2">
                <button
                  id="tl_water_plant"
                  className="editButton"
                  onClick={handleClick}
                >
                  <i className="pull-left glyphicon">{Icons("mode_edit")}</i>
                  Edit
                </button>
              </div>
            </div>
            <hr className="borderLine" />
            <div className="cardWrapper">
              <div className="row">
                <div className="col-4">
                  <div className="personalDetails">
                    <p>
                      <i className="pull-left glyphicon">
                        {Icons("account_circle")}
                      </i>
                      <span>{`${fieldValues.tl_water_plant.plant_name} `}</span>
                    </p>

                    <p>
                      <i className="pull-left glyphicon">
                        {Icons("calendar_today")}
                      </i>
                      <span>{`${fieldValues.tl_water_plant.established_on}`}</span>
                    </p>
                    <p>
                      <i className="pull-left glyphicon">
                        {Icons("content_paste")}
                      </i>
                      <span>{`${fieldValues.tl_water_plant.plant_type}`}</span>
                    </p>
                  </div>
                </div>
                <div className="col-8">
                  <div className="attachments">
                    <p>
                      <img className="img-responsive" src={attached_wp_photo} />
                    </p>
                    <p>
                      <img
                        className="img-responsive"
                        src={attached_isi_reference}
                      />
                    </p>
                    <p>
                      <img
                        className="img-responsive"
                        src={attached_fssai_reference}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="contactDetails">
                <p>
                  <i className="pull-left glyphicon">{Icons("phone")}</i>
                  <span>{`+${fieldValues.tl_water_plant.country_code} ${fieldValues.tl_water_plant.plant_contact_no}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("mail")}</i>
                  <span>{`${fieldValues.tl_water_plant.plant_contact_email}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("my_location")}</i>
                  <span>{`${fieldValues.tl_water_plant.plant_contact_address} ${fieldValues.tl_water_plant.plant_pincode}`}</span>
                </p>
              </div>
              <div className="contactDetails">
                {/* <img className="img-responsive" src={profile} /> 

                <p>
                  <i className="pull-left glyphicon">
                    {Icons("content_paste")}
                  </i>
                  <span>{`${fieldValues.tl_water_plant.plant_licence_no}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">
                    {Icons("content_paste")}
                  </i>
                  <span>{`${fieldValues.tl_water_plant.plant_isi_number}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">
                    {Icons("content_paste")}
                  </i>
                  <span>{`${fieldValues.tl_water_plant.is_owned_by_user}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">
                    {Icons("content_paste")}
                  </i>
                  <span>{`${fieldValues.tl_water_plant.owned_by}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">
                    {Icons("content_paste")}
                  </i>
                  <span>{`${fieldValues.tl_water_plant.delivery_capacity}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">
                    {Icons("content_paste")}
                  </i>
                  <span>{`${fieldValues.tl_water_plant.having_own_transport}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">
                    {Icons("content_paste")}
                  </i>
                  <span>{`${fieldValues.tl_water_plant.is_delivery_supported}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">
                    {Icons("content_paste")}
                  </i>
                  <span>{`${fieldValues.tl_water_plant.having_own_deliveryteam}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">
                    {Icons("content_paste")}
                  </i>
                  <span>{`${fieldValues.tl_water_plant.available_on_mon_fri}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">
                    {Icons("content_paste")}
                  </i>
                  <span>{`${fieldValues.tl_water_plant.available_on_sat}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">
                    {Icons("content_paste")}
                  </i>
                  <span>{`${fieldValues.tl_water_plant.available_on_sun}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">
                    {Icons("content_paste")}
                  </i>
                  <span>{`${fieldValues.tl_water_plant.receivable_payment_mode}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">
                    {Icons("content_paste")}
                  </i>
                  <span>{`${fieldValues.tl_water_plant.service_available_to_pin}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">
                    {Icons("content_paste")}
                  </i>
                  <span>{`${fieldValues.tl_water_plant.plant_capacity}`}</span>
                </p>
              </div>

              <div className="attachmentDetails">
                {/* <img className="img-responsive" src={adhar} /> 
              </div>
            </div>
          </div>
        )}

        {completedForm.filter((a) => a === "tl_industry").length > 0 && (
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-10">
                <h3 className="title">Industry Details</h3>
              </div>
              <div className="col-2">
                <button
                  id="tl_industry"
                  className="editButton"
                  onClick={handleClick}
                >
                  <i className="pull-left glyphicon">{Icons("mode_edit")}</i>
                  Edit
                </button>
              </div>
            </div>
            <hr className="borderLine" />
            <div className="cardWrapper">
              <div className="row">
                <div className="col-4">
                  <div className="personalDetails">
                    <p>
                      <i className="pull-left glyphicon">
                        {Icons("account_circle")}
                      </i>
                      <span>{`${fieldValues.tl_industry.industry_name} `}</span>
                    </p>
                    <p>
                      <i className="pull-left glyphicon">
                        {Icons("calendar_today")}
                      </i>
                      <span>{`${fieldValues.tl_industry.established_on}`}</span>
                    </p>
                  </div>
                </div>
                <div className="col-8">
                  <div className="attachments">
                    <p>
                      <img
                        className="img-responsive"
                        src={ind_photo_attachment}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="contactDetails">
                <p>
                  <i className="pull-left glyphicon">{Icons("mail")}</i>
                  <span>{`${fieldValues.tl_industry.country_code} ${fieldValues.tl_industry.industry_contact_phone}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("phone")}</i>
                  <span>{`${fieldValues.tl_industry.industry_contact_email}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("my_location")}</i>
                  <span>{`${fieldValues.tl_industry.industry_address} ${fieldValues.tl_industry.industry_pin}`}</span>
                </p>
              </div>
              <div className="contactDetails">
                <p>
                  <i className="pull-left glyphicon">{Icons("mail")}</i>
                  <span>{`${fieldValues.tl_industry.deliveryvolume_expected_mon_fri}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("phone")}</i>
                  <span>{`${fieldValues.tl_industry.deliveryvolume_expected_sat}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("my_location")}</i>
                  <span>{`${fieldValues.tl_industry.deliveryvolume_expected_sun}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("my_location")}</i>
                  <span>{`${fieldValues.tl_industry.delivery_slot1_mon_fri}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("my_location")}</i>
                  <span>{`${fieldValues.tl_industry.delivery_slot2_mon_fri}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("my_location")}</i>
                  <span>{`${fieldValues.tl_industry.delivery_slot1_sat}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("my_location")}</i>
                  <span>{`${fieldValues.tl_industry.delivery_slot2_sat}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("my_location")}</i>
                  <span>{`${fieldValues.tl_industry.delivery_slot1_sun}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("my_location")}</i>
                  <span>{`${fieldValues.tl_industry.km_coverage_agreed_per_day}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("my_location")}</i>
                  <span>{`${fieldValues.tl_industry.delivery_slot2_sun}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("my_location")}</i>
                  <span>{`${fieldValues.tl_industry.payment_per_km_agreed}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("my_location")}</i>
                  <span>{`${fieldValues.tl_industry.payment_payable_mode}`}</span>
                </p>
                <p>
                  <i className="pull-left glyphicon">{Icons("my_location")}</i>
                  <span>{`${fieldValues.tl_industry.payable_pymt_frequency}`}</span>
                </p>
              </div>
              <div className="attachmentDetails">
                {/* {/* <img className="img-responsive" src={adhar} />  
              </div>
            </div>
          </div>
        )} */}

        {/* {completedForm.filter((a) => a === "tl_contractor").length > 0 &&
          fieldValues.tl_contractor && (
            <div className="col-sm-12 col-md-6">
              <div className="row">
                <div className="col-10">
                  <h3 className="title">Contractor Details</h3>
                </div>
                <div className="col-2">
                  <button
                    id="tl_contractor"
                    className="editButton"
                    onClick={handleClick}
                  >
                    <i className="pull-left glyphicon">{Icons("mode_edit")}</i>
                    Edit
                  </button>
                </div>
              </div>
              <hr className="borderLine" />
              <div className="cardWrapper">
                <div className="row">
                  <div className="col-4">
                    <div className="personalDetails">
                      <p>
                        <i className="pull-left glyphicon">
                          <i className="pull-left glyphicon">
                            {Icons("account_circle")}
                          </i>
                        </i>
                        <span>{`${fieldValues.tl_contractor.agency_name} `}</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="attachments">
                      <p>
                        <img className="img-responsive" src={profileImage} />
                      </p>
                      <p>
                        <img className="img-responsive" src={profileImage} />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contactDetails">
                  <p>
                    <i className="pull-left glyphicon">{Icons("mail")}</i>
                    <span>{`${fieldValues.tl_contractor.agency_phone}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">{Icons("phone")}</i>
                    <span>{`${fieldValues.tl_contractor.agency_email}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons("my_location")}
                    </i>
                    <span>{`${fieldValues.tl_contractor.agency_address}`}</span>
                  </p>
                </div>
                <div className="attachmentDetails">
                  {/* <img className="img-responsive" src={adhar} /> 
                </div>
              </div>
            </div>
          )}

        {completedForm.filter((a) => a === "tl_sub_contractor").length > 0 &&
          fieldValues.tl_sub_contractor && (
            <div className="col-sm-12 col-md-6">
              <div className="row">
                <div className="col-10">
                  <h3 className="title">Contractor Details</h3>
                </div>
                <div className="col-2">
                  <button
                    id="tl_sub_contractor"
                    className="editButton"
                    onClick={handleClick}
                  >
                    <i className="pull-left glyphicon">{Icons("mode_edit")}</i>
                    Edit
                  </button>
                </div>
              </div>
              <hr className="borderLine" />
              <div className="cardWrapper">
                <div className="row">
                  <div className="col-4">
                    <div className="personalDetails">
                      <p>
                        <i className="pull-left glyphicon">
                          <i className="pull-left glyphicon">
                            {Icons("account_circle")}
                          </i>
                        </i>
                        <span>{`${fieldValues.tl_sub_contractor.agency_name} `}</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="attachments">
                      <p>
                        <img className="img-responsive" src={profileImage} />
                      </p>
                      <p>
                        <img className="img-responsive" src={profileImage} />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contactDetails">
                  <p>
                    <i className="pull-left glyphicon">{Icons("mail")}</i>
                    <span>{`${fieldValues.tl_sub_contractor.agency_phone}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">{Icons("phone")}</i>
                    <span>{`${fieldValues.tl_sub_contractor.agency_email}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons("my_location")}
                    </i>
                    <span>{`${fieldValues.tl_sub_contractor.agency_address}`}</span>
                  </p>
                </div>
                <div className="attachmentDetails">
                  {/* <img className="img-responsive" src={adhar} /> 
                </div>
              </div>
            </div>
          )}

        {completedForm.filter((a) => a === "tl_transport_agent").length > 0 &&
          fieldValues.tl_transport_agent && (
            <div className="col-sm-12 col-md-6">
              <div className="row">
                <div className="col-10">
                  <h3 className="title">Transport Agent Details</h3>
                </div>
                <div className="col-2">
                  <button
                    id="tl_transport_agent"
                    className="editButton"
                    onClick={handleClick}
                  >
                    <i className="pull-left glyphicon">{Icons("mode_edit")}</i>
                    Edit
                  </button>
                </div>
              </div>
              <hr className="borderLine" />
              <div className="cardWrapper">
                <div className="row">
                  <div className="col-4">
                    <div className="personalDetails">
                      <p>
                        <i className="pull-left glyphicon">
                          <i className="pull-left glyphicon">
                            {Icons("account_circle")}
                          </i>
                        </i>
                        <span>{`${fieldValues.tl_transport_agent.agency_name} `}</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="attachments">
                      <p>
                        <img className="img-responsive" src={profileImage} />
                      </p>
                      <p>
                        <img className="img-responsive" src={profileImage} />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contactDetails">
                  <p>
                    <i className="pull-left glyphicon">{Icons("mail")}</i>
                    <span>{`${fieldValues.tl_transport_agent.agency_phone}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">{Icons("phone")}</i>
                    <span>{`${fieldValues.tl_transport_agent.agency_email}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons("my_location")}
                    </i>
                    <span>{`${fieldValues.tl_transport_agent.agency_address}`}</span>
                  </p>
                </div>
                <div className="attachmentDetails">
                  {/* <img className="img-responsive" src={adhar} /> 
                </div>
              </div>
            </div>
          )}

        {completedForm.filter((a) => a === "tl_driver").length > 0 &&
          fieldValues.tl_driver && (
            <div className="col-sm-12 col-md-6">
              <div className="row">
                <div className="col-10">
                  <h3 className="title">Driver Details</h3>
                </div>
                <div className="col-2">
                  <button
                    id="tl_driver"
                    className="editButton"
                    onClick={handleClick}
                  >
                    <i className="pull-left glyphicon">{Icons("mode_edit")}</i>
                    Edit
                  </button>
                </div>
              </div>
              <hr className="borderLine" />
              <div className="cardWrapper">
                <div className="row">
                  <div className="col-4">
                    <div className="personalDetails">
                      <p>
                        <i className="pull-left glyphicon">
                          <i className="pull-left glyphicon">
                            {Icons("account_circle")}
                          </i>
                        </i>
                        <span>{`${fieldValues.tl_driver.driver_name} `}</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="attachments">
                      <p>
                        <img className="img-responsive" src={profileImage} />
                      </p>
                      <p>
                        <img className="img-responsive" src={profileImage} />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contactDetails">
                  <p>
                    <i className="pull-left glyphicon">{Icons("mail")}</i>
                    <span>{`${fieldValues.tl_driver.driver_phone}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">{Icons("phone")}</i>
                    <span>{`${fieldValues.tl_driver.driver_email}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons("my_location")}
                    </i>
                    <span>{`${fieldValues.tl_driver.driver_address}`}</span>
                  </p>
                </div>
                <div className="attachmentDetails">
                  {/* <img className="img-responsive" src={adhar} /> 
                </div>
              </div>
            </div>
          )} */}

        {/* {completedForm.filter((a) => a === "tl_delivery_boy").length > 0 &&
          fieldValues.tl_delivery_boy && (
            <div className="col-sm-12 col-md-6">
              <div className="row">
                <div className="col-10">
                  <h3 className="title">Driver Details</h3>
                </div>
                <div className="col-2">
                  <button
                    id="tl_delivery_boy"
                    className="editButton"
                    onClick={handleClick}
                  >
                    <i className="pull-left glyphicon">{Icons("mode_edit")}</i>
                    Edit
                  </button>
                </div>
              </div>
              <hr className="borderLine" />
              <div className="cardWrapper">
                <div className="row">
                  <div className="col-4">
                    <div className="personalDetails">
                      <p>
                        <i className="pull-left glyphicon">
                          <i className="pull-left glyphicon">
                            {Icons("account_circle")}
                          </i>
                        </i>
                        <span>{`${fieldValues.tl_delivery_boy.deliveryboy_name} `}</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="attachments">
                      <p>
                        <img className="img-responsive" src={profileImage} />
                      </p>
                      <p>
                        <img className="img-responsive" src={profileImage} />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contactDetails">
                  <p>
                    <i className="pull-left glyphicon">{Icons("mail")}</i>
                    <span>{`${fieldValues.tl_delivery_boy.deliveryboy_phone}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">{Icons("phone")}</i>
                    <span>{`${fieldValues.tl_delivery_boy.deliveryboy_email}`}</span>
                  </p>
                  <p>
                    <i className="pull-left glyphicon">
                      {Icons("my_location")}
                    </i>
                    <span>{`${fieldValues.tl_delivery_boy.deliveryboy_address}`}</span>
                  </p>
                </div>
                <div className="attachmentDetails">
                  // {/* <img className="img-responsive" src={adhar} /> 
                </div>
              </div>
            </div>
          )} */}
      </div>
      <div className="col-sm-12 col-md-12 pull-right">
        <button
          type="button"
          className={`btn nextBtn`}
          id="form_success"
          onClick={handleClick}
          // disabled={!enable_service_menu && true}
        >
          {"Create Profile"}
        </button>
      </div>
    </>
  );
};

export default FormPreviewComponent;
