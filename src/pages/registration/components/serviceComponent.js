import React, { useState } from "react";
import AlertDialogSlide from "../../../components/dialogbox";

const Servicecomponent = (props) => {
  const [checked, setChecked] = useState([]);
  const [opendialog, setopendialog] = useState(false);
  const [dialogtitle, setdialogtitle] = useState();
  const [checkedServiceId, setcheckedServiceId] = useState();
  // const [passovercomp, setpassovercomp] = useState();
  // const [popupdata, setpopupdata] = useState();
  // const [isfirstTime, setFirstTime] = useState(true);
  // const [isCancel, setIsCancel] = useState();
  let {
    getAddedServicesItems,
    getRemovedServicesItems,
    getClickedServicesForm,
    dispatchServicesItemsClicked,
    current_page_type,
    dispatchCurrentPageType,
    initialValues,
    serviceClicked,
    removeInitialValues,
  } = props;
  const [serviceTypes, setServiceTypes] = useState([
    {
      serviceType: "Student",
      serviceTypeId: "tl_user",
      serviceIcon: "school",
      fontSize: 28,
    },
    {
      serviceType: "Tutor",
      serviceTypeId: "tl_tutor",
      serviceIcon: "military_tech",
      fontSize: "28",
    },
    {
      serviceType: "Corporate",
      serviceTypeId: "tl_corporate",
      serviceIcon: "history_edu",
      fontSize: "28",
    },
    {
      serviceType: "College",
      serviceTypeId: "tl_college",
      serviceIcon: "location_city",
      fontSize: "28",
    },
    // {
    //   serviceType: "Transport Agents",
    //   serviceTypeId: "tl_transport_agent",
    //   serviceIcon: "directions_bus",
    //   fontSize: "28",
    // },
    // {
    //   serviceType: "Driver",
    //   serviceTypeId: "tl_driver",
    //   serviceIcon: "delivery_dining",
    //   fontSize: "28",
    // },
    // {
    //   serviceType: "Delivery Boy",
    //   serviceTypeId: "tl_delivery_boy",
    //   serviceIcon: "delivery_dining",
    //   fontSize: "28",
    // },
    // {
    //   serviceType: "Vehicle",
    //   serviceTypeId: "tl_vehicle",
    //   serviceIcon: "garage",
    //   fontSize: "28",
    // },
  ]);

  const getCheckedvalue = (event) => {
    //debugger;
    const isChecked = event.target.checked;
    const serviceId = event.target.id;
    const icon = event.target.getAttribute("icon");
    setcheckedServiceId(serviceId);
    if (isChecked) {
      addServiceData(serviceId, icon);
    } else {
      // if (current_page_type["current_page"] === "tl_user") {
      //   return initialValues["init_values"][serviceId]
      //     ? setopendialog(true)
      //     : removeServiceData(serviceId);
      // }
      // if (current_page_type["current_page_type"] === "tl_services") {
      //   return initialValues["init_values"][serviceId]
      //     ? setopendialog(true)
      //     : removeServiceData(serviceId);
      // }

      // setopendialog(true);

      if (
        current_page_type["completed_forms"] &&
        current_page_type["completed_forms"].includes(serviceId)
      ) {
        setopendialog(true);
      } else {
        removeServiceData(serviceId);
      }
      // ? setopendialog(true)
      // : removeServiceData(serviceId);
    }
  };

  const addServiceData = (serviceId, icon) => {
    getAddedServicesItems({ id: serviceId, icon: icon });
    // setChecked(checked.concat(serviceId));
    // current_page_type &&
    //   current_page_type["current_page_type"] === "tl_user" &&
    dispatchServicesItemsClicked(serviceId);
  };

  const removeServiceData = (serviceId) => {
    let get_completed_Forms = current_page_type["completed_forms"];
    getRemovedServicesItems(serviceId);
    let findInd = checked.indexOf(serviceId);
    let arrayServices = checked;
    arrayServices.splice(findInd, 1);
    setChecked(Array.from(arrayServices));
    if (
      current_page_type["completed_forms"] &&
      current_page_type["completed_forms"].includes(serviceId)
    ) {
      let findServiceId = get_completed_Forms.indexOf(serviceId);
      get_completed_Forms.splice(findServiceId, 1);

      dispatchCurrentPageType({
        completed_forms: Array.from(get_completed_Forms),
      });

      delete initialValues["init_values"][serviceId];
      removeInitialValues(initialValues["init_values"]);
    }

    if (serviceClicked.length < 1) {
      dispatchServicesItemsClicked("tl_container_msg");
      if (
        current_page_type["completed_forms"] &&
        current_page_type["completed_forms"].includes("tl_user")
      ) {
        delete initialValues["init_values"]["tl_user"];
        removeInitialValues(initialValues["init_values"]);
      }
      dispatchCurrentPageType({
        is_tl_user_touched: true,
        current_page_type: "tl_user",
        current_page: "tl_user",
        completed_forms: [],
      });
    }
  };

  const onclose = () => {};

  const handleClose = () => {
    setopendialog(false);
    document.getElementById(checkedServiceId).checked = true;
  };
  const handleApply = () => {
    setopendialog(false);
    removeServiceData(checkedServiceId);
  };

  const messageBox = () => {
    return (
      <div>
        <p className="service_remove_alert">
          Do you want to close this page, data will loss if not saved any data
        </p>
      </div>
    );
  };

  return (
    <div
      className={current_page_type && current_page_type["current_page_type"]}
    >
      <AlertDialogSlide
        open={opendialog}
        dialogtitle={"Alert Notification"}
        dialogbody={messageBox}
        applybtn={"Ok"}
        cancelbtn={"cancel"}
        handleClose={() => handleClose()}
        handleApply={() => handleApply()}
        class="servicecompclass"
        iconname="warning"
      />

      <br />
      <div className="row userTypeBg">
        <div className="col-12">
          <div className="row">
            {serviceTypes.map((item, pos, array) => {
              return (
                <div
                  className={`serviceImgGrid ${
                    current_page_type &&
                    current_page_type["current_page"] === item.serviceTypeId &&
                    "current"
                  } ${
                    current_page_type &&
                    current_page_type["completed_forms"] &&
                    current_page_type["completed_forms"].includes(
                      item.serviceTypeId
                    ) &&
                    "completed"
                  }`}
                  key={pos}
                >
                  <span className="typeGrid">
                    <input
                      type="radio"
                      className="btn-check typeCheck"
                      id={item.serviceTypeId}
                      autoComplete="off"
                      onChange={(e) => getCheckedvalue(e)}
                      value={item.serviceType}
                      //name={item.serviceTypeId}
                      name="reg_type"
                      icon={item.serviceIcon}
                      // disabled={
                      //   current_page_type &&
                      //   current_page_type["current_page"] === item.serviceTypeId
                      //     ? true
                      //     : current_page_type &&
                      //       current_page_type["current_page_type"] ===
                      //         "form_preview"
                      //     ? true
                      //     : false
                      // }
                    />
                    <label
                      className={`btn btn-primary ${item.serviceTypeId} ${
                        serviceClicked.filter((a) => a.id == item.serviceTypeId)
                          .length > 0 && "active"
                      } ${
                        current_page_type &&
                        current_page_type["current_page"] ===
                          item.serviceTypeId &&
                        "current"
                      } `}
                      htmlFor={item.serviceTypeId}
                      // disabled={
                      //   current_page_type &&
                      //   current_page_type["current_page"] === item.serviceTypeId
                      //     ? true
                      //     : current_page_type &&
                      //       current_page_type["current_page_type"] ===
                      //         "form_preview"
                      //     ? true
                      //     : false
                      // }
                    >
                      <i
                        style={{ fontSize: `${item.fontSize}px` }}
                        className="material-icons"
                      >
                        {item.serviceIcon}
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
    </div>
  );
};

export default Servicecomponent;
