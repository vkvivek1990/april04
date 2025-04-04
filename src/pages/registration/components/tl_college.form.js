import React, { useEffect, useState } from "react";
import { defaultGroupByFn } from "react-table";
import FieldInfo from "../../../applicationComponent/FieldInfo";
import { loaderOn, loaderOff } from "../../../applicationComponent/Loader";
import { AlertBar } from "../../../applicationComponent/AlertBar";
import { InterStialHandler } from "../../../applicationComponent/InterstialHandler";
import { Callbacks } from "jquery";
import AlertDialogSlide from "../../../components/dialogbox";

const TLCOLLEGE = (props) => {
  const [sect, setSect] = useState("");
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    getFormFields,
    submitRegistration,
    formFieldComponent,
    getUserFromTLUser,
    dispatchFormInitialValues,
    tl_college_services_hitted,
    dispatchenableServiceMenu,
    formFieldErrors,
    serviceClicked,
    dispatchServicesItemsClicked,
    tl_college,
    dispatchCurrentPageType,
    current_page_type,
    fileUpLoad,
  } = props;

  // const section = formFieldComponent && FieldInfo(formFieldComponent);
  // console.log(pristine, "----------------- pristine");
  const onclose = () => {
    this.setState({
      opendialog: false,
      dialogtitle: "",
      passovercomp: null,
      popupdata: null,
    });
  };

  // useEffect(() => {
  //   return () => {
  //     console.log(tl_college, "will unmount");
  //   };
  // }, [tl_college]);

  let arr_comple_Forms = current_page_type["completed_forms"];

  useEffect(() => {
    dispatchCurrentPageType({ error: formFieldErrors, pristine: pristine });
  }, [formFieldErrors, pristine]);

  useEffect(() => {
    dispatchCurrentPageType({
      is_tl_college_touched: true,
      current_page_type: "tl_college",
      current_page: "tl_college",
    });
    if (!tl_college_services_hitted) {
      const onLoadService = async () => {
        await getFormFields("tl_college");
        dispatchenableServiceMenu(false);
      };
      onLoadService();
    }
  }, []);

  const fileUploadCallBack = async (base64, id) => {
    return await fileUpLoad(base64, id);
  };

  useEffect(() => {
    if (formFieldComponent) {
      const section = FieldInfo(formFieldComponent, fileUploadCallBack);
      setSect(section);
    }
  }, [formFieldComponent]);

  const touchedAllFieldError = (error) => {
    const { touch } = props;
    const toTouch = [];

    for (const key in error) {
      error.hasOwnProperty(key) && toTouch.push(key);
    }
    touch(...toTouch);
    return toTouch;
  };

  const onSubmit = () => {
    let error = formFieldErrors;

    if (error) {
      touchedAllFieldError(error);
    } else {
      submitRegistration("tl_college")
        .then((res) => {
          if (arr_comple_Forms.indexOf("tl_college") < 0) {
            arr_comple_Forms.push("tl_college");
          }

          dispatchCurrentPageType({
            completed_forms: arr_comple_Forms,
          });
          let assignId = { ...tl_college, user_id: res.payLoad.user_id };

          dispatchFormInitialValues({ tl_college: assignId });
          //debugger;
          getUserFromTLUser(res.payLoad.user_id);

          localStorage.setItem("user_id", res.payLoad.user_id);
          dispatchenableServiceMenu(true);
          dispatchServicesItemsClicked(serviceClicked[0]["id"]);
        })
        .catch((error) => {
          let res = error.response.data;
          alert(JSON.stringify(res));
        });
    }
  };

  // const clikfu = () => {
  //   console.log(tl_college_init_value, "----------------- tl user initial value");
  //   alert("unmount");
  // };

  // useEffect(() => {
  //   return () => {
  //     dispatchTlUserInitialValues(tl_college_init_value);
  //   };
  // }, []);

  const handleReset = () => {
    reset("tl_college");
  };
  return (
    <form>
      <div className="row">{sect}</div>
      <div className="row">
        <button
          className="btn nextBtn"
          type="button"
          disabled={pristine || submitting}
          onClick={onSubmit}
        >
          Submit
        </button>
        <button
          className="btn nextBtn"
          type="button"
          disabled={pristine || submitting}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default TLCOLLEGE;
