import React, { useEffect, useState } from "react";
import { defaultGroupByFn } from "react-table";
import FieldInfo from "../../../applicationComponent/FieldInfo";
import { loaderOn, loaderOff } from "../../../applicationComponent/Loader";
import { AlertBar } from "../../../applicationComponent/AlertBar";
import { InterStialHandler } from "../../../applicationComponent/InterstialHandler";
import { Callbacks } from "jquery";
import AlertDialogSlide from "../../../components/dialogbox";

const TLUSER = (props) => {
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
    tl_user_services_hitted,
    dispatchenableServiceMenu,
    formFieldErrors,
    serviceClicked,
    dispatchServicesItemsClicked,
    tl_user,
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
  //     console.log(tl_user, "will unmount");
  //   };
  // }, [tl_user]);

  let arr_comple_Forms = current_page_type["completed_forms"];

  useEffect(() => {
    dispatchCurrentPageType({ error: formFieldErrors, pristine: pristine });
  }, [formFieldErrors, pristine]);

  useEffect(() => {
    dispatchCurrentPageType({
      is_tl_user_touched: true,
      current_page_type: "tl_user",
      current_page: "tl_user",
    });
    if (!tl_user_services_hitted) {
      const onLoadService = async () => {
        await getFormFields("tl_user");
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
      submitRegistration("tl_user")
        .then((res) => {
          if (arr_comple_Forms.indexOf("tl_user") < 0) {
            arr_comple_Forms.push("tl_user");
          }

          dispatchCurrentPageType({
            completed_forms: arr_comple_Forms,
          });
          let assignId = { ...tl_user, user_id: res.payLoad.user_id };

          dispatchFormInitialValues({ tl_user: assignId });
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
  //   console.log(tl_user_init_value, "----------------- tl user initial value");
  //   alert("unmount");
  // };

  // useEffect(() => {
  //   return () => {
  //     dispatchTlUserInitialValues(tl_user_init_value);
  //   };
  // }, []);

  const handleReset = () => {
    reset("tl_user");
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

export default TLUSER;
