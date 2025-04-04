import React, { useEffect, useState } from "react";
import { defaultGroupByFn } from "react-table";
import FieldInfo from "../../../applicationComponent/FieldInfo";

const TLTRANSPORTAGENT = (props) => {
  const [sect, setSect] = useState("");
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    getFormFields,
    submitRegistration,
    formFieldComponent,
    getTransportAgentIdFromTLTransportAgent,
    dispatchFormInitialValues,
    dispatchenableServiceMenu,
    formFieldErrors,
    tl_transport_agent,
    serviceClicked,
    dispatchServicesItemsClicked,
    dispatchCurrentPageType,
    current_page_type,
    fileUpLoad,
    tl_transport_agent_service_hitted,
  } = props;

  // const section = formFieldComponent && FieldInfo(formFieldComponent);

  // useEffect(() => {
  //   return () => {
  //     dispatchTlTransportAgentInitialValues(tl_transport_agent_init_value);
  //   };
  // }, []);

  let arr_comple_Forms = current_page_type["completed_forms"];

  useEffect(() => {
    dispatchCurrentPageType({ error: formFieldErrors, pristine: pristine });
  }, [formFieldErrors, pristine]);

  useEffect(() => {
    if (!tl_transport_agent_service_hitted) {
      const onLoadService = async () => {
        await getFormFields("tl_transport_agent");
        dispatchenableServiceMenu(false);
      };
      onLoadService();
    }
  }, []);

  const fileUploadCallBack = async (base64, id) => {
    return await fileUpLoad(base64, id);
  };

  useEffect(() => {
    dispatchCurrentPageType({
      is_tl_services_touched: true,
      current_page_type: "tl_services",
      current_page: "tl_transport_agent",
    });
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
      submitRegistration("tl_transport_agent")
        .then((res) => {
          getTransportAgentIdFromTLTransportAgent(res.payLoad.id);
          localStorage.setItem("transport_agent_id", res.payLoad.id);
          if (arr_comple_Forms.indexOf("tl_transport_agent") < 0) {
            arr_comple_Forms.push("tl_transport_agent");
          }
          dispatchCurrentPageType({
            completed_forms: arr_comple_Forms,
          });
          dispatchenableServiceMenu(true);
          let assignId = { ...tl_transport_agent, id: res.payLoad.id };
          dispatchFormInitialValues({ tl_transport_agent: assignId });
          let inCompleted_form = serviceClicked.filter((a, b) => {
            return !current_page_type["completed_forms"].includes(a.id);
          });

          if (inCompleted_form.length) {
            dispatchServicesItemsClicked(inCompleted_form[0]["id"]);
          } else {
            dispatchServicesItemsClicked("form_preview");
          }
          // alert("Saved successfully");
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

export default TLTRANSPORTAGENT;
