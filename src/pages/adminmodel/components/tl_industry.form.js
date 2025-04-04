import React, { useEffect, useState } from "react";
import { defaultGroupByFn } from "react-table";
import FieldInfo from "../../../applicationComponent/FieldInfo";
import AlertDialogSlide from "../../../components/dialogbox";

const TLINDUSTRY = (props) => {
  const [sect, setSect] = useState("");
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    getFormFields,
    submitRegistration,
    formFieldComponent,
    tl_industry_services_hitted,
    dispatchFormInitialValues,
    dispatchenableServiceMenu,
    formFieldErrors,
    tl_industry,
    serviceClicked,
    dispatchServicesItemsClicked,
    dispatchCurrentPageType,
    current_page_type,
    fileUpLoad,
  } = props;

  // const section = formFieldComponent && FieldInfo(formFieldComponent);

  // useEffect(() => {
  //   return () => {
  //     <AlertDialogSlide />;
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
      current_page: "tl_industry",
      completed_forms: arr_comple_Forms,
    });
    if (!tl_industry_services_hitted) {
      const onLoadService = async () => {
        await getFormFields("tl_industry");
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
      submitRegistration("tl_industry")
        .then((res) => {
          if (arr_comple_Forms.indexOf("tl_industry") < 0) {
            arr_comple_Forms.push("tl_industry");
          }
          dispatchCurrentPageType({
            completed_forms: arr_comple_Forms,
          });
          let assignId = { ...tl_industry, id: res.payLoad.id };
          dispatchFormInitialValues({ tl_industry: assignId });
          dispatchenableServiceMenu(true);
          let inCompleted_form = serviceClicked.filter((a, b) => {
            return !arr_comple_Forms.includes(a.id);
          });

          if (inCompleted_form.length) {
            dispatchServicesItemsClicked(inCompleted_form[0]["id"]);
          } else {
            dispatchServicesItemsClicked("form_preview");
          }

          //   alert("Saved successfully");
        })
        .catch((error) => {
          // alert(error);

          let res = error.response.data;
          alert(JSON.stringify(res));
          // if (res.status === 403) {
          // const toTouch = [];
          // for (const key in res) {
          //   res.hasOwnProperty(key) && toTouch.push(key);
          // }
          // touch(...toTouch);
          // }
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

export default TLINDUSTRY;
