import React, { useEffect, useState } from "react";
import { defaultGroupByFn } from "react-table";
import FieldInfo from "../../../applicationComponent/FieldInfo";

const TLDRIVER = (props) => {
  const [sect, setSect] = useState("");
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    getFormFields,
    submitRegistration,
    formFieldComponent,
    dispatchFormInitialValues,
    dispatchenableServiceMenu,
    formFieldErrors,
    tl_driver,
    serviceClicked,
    dispatchServicesItemsClicked,
    dispatchCurrentPageType,
    current_page_type,
    fileUpLoad,
    tl_driver_service_hitted,
  } = props;

  // const section = formFieldComponent && FieldInfo(formFieldComponent);

  // useEffect(() => {
  //   return () => {
  //     dispatchTlDriverInitialValues(tl_driver_init_value);
  //   };
  // }, []);
  let arr_comple_Forms = current_page_type["completed_forms"];
  useEffect(() => {
    dispatchCurrentPageType({ error: formFieldErrors, pristine: pristine });
  }, [formFieldErrors, pristine]);

  useEffect(() => {
    dispatchCurrentPageType({
      is_tl_services_touched: true,
      current_page_type: "tl_services",
      current_page: "tl_driver",
    });
    if (!tl_driver_service_hitted) {
      const onLoadService = async () => {
        await getFormFields("tl_driver");
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

  const onSubmit = () => {
    const { touch } = props;
    let error = formFieldErrors;
    if (error) {
      const toTouch = [];
      for (const key in error) {
        error.hasOwnProperty(key) && toTouch.push(key);
      }
      touch(...toTouch);
    } else {
      submitRegistration("tl_driver")
        .then((res) => {
          if (arr_comple_Forms.indexOf("tl_driver") < 0) {
            arr_comple_Forms.push("tl_driver");
          }
          dispatchCurrentPageType({
            completed_forms: arr_comple_Forms,
          });
          dispatchenableServiceMenu(true);
          let assignId = { ...tl_driver, id: res.payLoad.id };
          dispatchFormInitialValues({ tl_driver: assignId });
          let inCompleted_form = serviceClicked.filter((a, b) => {
            return !current_page_type["completed_forms"].includes(a.id);
          });

          if (inCompleted_form.length) {
            dispatchServicesItemsClicked(inCompleted_form[0]["id"]);
          } else {
            dispatchServicesItemsClicked("form_preview");
          }
        })
        .catch((error) => {
          let res = error.response.data;
          alert(JSON.stringify(res));
        });
    }
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
          Next
        </button>
        <button
          className="btn nextBtn"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default TLDRIVER;
