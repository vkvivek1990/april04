import React from "react";
import { reduxForm, Form } from "redux-form";
import { InterStialHandler } from "../../applicationComponent/InterstialHandler";
import TLUSER from "./controller/tl_user.controller";
import TLINDUSTRY from "./controller/tl_industry.controller";
import Updatedcomponent from "./updatedcomponent";
import ServiceController from "./controller/service.controller";
import { connect } from "react-redux";
import { Icons } from "../../applicationComponent/Icons/Icons";
import {
  dispatchenableServiceMenu,
  dispatchServicesItemsClicked,
  dispatchCurrentPageType,
} from "../../redux/actions/registration.action";

class Adminmodel extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   getClickedServicesForm: "tl_user",
    // };
  }
  componentDidMount = async () => {
    this.props.dispatchServicesItemsClicked("user_profiles");
    this.props.dispatchCurrentPageType({
      is_tl_user_touched: true,
      current_page_type: "user_profiles",
      completed_forms: [],
    });

    // await InterStialHandler(() => {
    //   return this.props.getRegistration();
    // });
  };

  onSubmit = async (values) => {
    // await InterStialHandler(() => {
    //   return this.props.submitRegistration();
    // });
  };
  renderUpdatedServiceComponent = (event) => {
    let id = event.target.id;
    // this.setState({
    //   getClickedServicesForm:
    //     event.target.id === "tl_services"
    //       ? this.props.serviceClicked.length &&
    //         this.props.serviceClicked[0]["id"]
    //       : event.target.id,
    // });

    id === "tl_user" && this.props.dispatchenableServiceMenu(true);
    // id === "tl_services" && this.props.dispatchenableServiceMenu(false);
    this.props.dispatchServicesItemsClicked(
      id === "tl_services"
        ? this.props.serviceClicked.length && this.props.serviceClicked[0]["id"]
        : id
    );
  };

  render() {
    const {
      serviceClicked,
      enable_service_menu,
      form,
      current_page_type,
      initValue_count,
    } = this.props;

    let inCompleted_form = serviceClicked.filter((a, b) => {
      return !current_page_type["completed_forms"].includes(a.id);
    });
    // console.log(
    //   current_page_type && current_page_type["pristine"],
    //   current_page_type && current_page_type["is_tl_services_touched"],
    //   current_page_type && !current_page_type["current_page"] === "tl_industry",
    //   "==========================12"
    // );
    //alert(current_page_type["current_page_type"]);

    return (
      <div className="container-fluid regBackground">
        <div className="row btnRow">
          <div className="col-12">
            <h3 className="title">
              {`Admin Model `}
              <a href="#" className="badge material-icons questionDesc">
                help
              </a>
            </h3>
            <hr />
          </div>
          <div className="col-2">
            <ServiceController {...this.state} />
          </div>
          <div className="col-10">
            <Updatedcomponent {...this.state} />
          </div>
        </div>
        <br />
        <br />

        {current_page_type &&
          current_page_type["current_page_type"] !== "form_preview" &&
          current_page_type["current_page_type"] !== "form_completed" && (
            <div className="col-12 nextServiceBtn">
              {/* {serviceClicked &&
                serviceClicked.map((service, pos) => {
                  return (
                    <button
                      type="button"
                      className={`btn nextBtn`}
                      key={pos}
                      id={service.id}
                      //icon={service.icon}
                      onClick={this.renderUpdatedServiceComponent}
                      // disabled={
                      //   current_page_type &&
                      //   current_page_type["is_tl_services_touched"] === true
                      //     ? false
                      //     : true
                      // }

                      disabled={
                        current_page_type["pristine"] &&
                        current_page_type &&
                        current_page_type["is_tl_services_touched"] &&
                        current_page_type["current_page"] !== service.id &&
                        initValue_count.length > 0
                          ? false
                          : true
                      }
                    >
                      {Icons(service.icon)}
                    </button>
                  );
                })} */}
              {current_page_type["current_page_type"] === "tl_services" && (
                <button
                  type="button"
                  className={`btn nextBtn`}
                  id="form_preview"
                  onClick={this.renderUpdatedServiceComponent}
                  disabled={inCompleted_form.length ? true : false}
                >
                  {"Preview"}
                </button>
              )}
            </div>
          )}
      </div>
    );
  }
}

// const RegistrationForm = reduxForm({
//   form: "RegistrationForm",
//   enableReinitialize: true,
// })(Registration);

const mapStateToProps = (state) => {
  console.log(
    state.formField["init_values"] &&
      Object.keys(state.formField["init_values"])
  );
  return {
    serviceClicked: state.register.serviceClicked,
    enable_service_menu: state.register.enable_service_menu,
    current_page_type: state.register.current_page_type,
    initValue_count:
      state.formField["init_values"] &&
      Object.keys(state.formField["init_values"]),
  };
};

export default connect(mapStateToProps, {
  dispatchenableServiceMenu: (values) => dispatchenableServiceMenu(values),
  dispatchServicesItemsClicked: (values) =>
    dispatchServicesItemsClicked(values),
  dispatchCurrentPageType: (curPageType) =>
    dispatchCurrentPageType(curPageType),
})(Adminmodel);
