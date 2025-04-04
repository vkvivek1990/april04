import React from "react";
import Icon from "@material-ui/core/Icon";
import "./style.scss";
import Selectcomp from "../Selectcomp";
import isEqual from "lodash.isequal";
import AlertDialogSlide from "../dialogbox";
import { Allfieldpsloader } from "./Allfieldsholder";
import FormFieldRender from "../../formFieldRendering";

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default class Searchcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      options: [],
      fieldsdata: [],
      allData: [],
      templates: [],
      opendialog: false,
      dialogtitle: "",
      passovercomp: null,
      popupdata: null,
      accupdown: false,
    };
  }

  handleChange = (selectedOption, name) => {
    this.setState({ selectedOption }, () => {
      this.loadDatas(false, true);
      this.props.updateSelectedTemplate(selectedOption);
    });
  };

  loadDatas = (loadtemp, loadfields) => {
    let tempdatas = [...this.state.templates];
    let datafields = [...this.state.allData];
    if (loadtemp) {
      let temparr = [];
      tempdatas.map((item) => {
        let newobj = {};
        newobj.value = item;
        newobj.label = capitalize(item);
        return temparr.push(newobj);
      });
      this.setState({
        options: temparr,
        selectedOption: temparr[0],
        templates: tempdatas,
      });
    }

    if (loadfields) {
      let fitereddatas = datafields.filter((items) => {
        return items.template_name.includes(this.state.selectedOption.value);
      });
      this.setState({ fieldsdata: fitereddatas, allData: datafields });
    }
  };

  getallfieldsselection = () => {
    this.setState({
      opendialog: true,
      dialogtitle: "Search Field Settings",
      passovercomp: Allfieldpsloader,
    });
  };

  handlesearchaccordian = () => {
    this.setState({ accupdown: !this.state.accupdown }, () => {
      this.props.updatesearchaccordian(this.state.accupdown);
    });
  };

  onclose = () => {
    this.setState({
      opendialog: false,
      dialogtitle: "",
      passovercomp: null,
      popupdata: null,
    });
  };

  applyfields = (Appliedfields) => {
    this.setState({ fieldsdata: Appliedfields }, () => {
      this.onclose();
    });
  };

  static getDerivedStateFromProps(props, state) {
    if (!isEqual(props.data, state.allData)) {
      let datafields = [...props.data];
      if (props.templates) {
        let tempdatas = [...props.templates];
        let temparr = [];
        tempdatas.map((item) => {
          let newobj = {};
          newobj.value = item;
          newobj.label = capitalize(item);
          return temparr.push(newobj);
        });
        let fitereddatas = datafields.filter((items) => {
          return items.template_name.includes(temparr[0].value);
        });
        props.updateSelectedTemplate(temparr[0]);
        return {
          options: temparr,
          selectedOption: temparr[0],
          templates: tempdatas,
          fieldsdata: fitereddatas,
          allData: datafields,
        };
      } else {
        return {
          fieldsdata: datafields,
          allData: datafields,
        };
      }
    } else {
      return null;
    }
  }

  formFieldOnChange = (changedata) => {
    //console.log(changedata,"changedata");
  };

  render() {
    return (
      <React.Fragment>
        <div className="search_box_holder">
          <div className="search_box_header">
            <div className="row">
              <div className="col-md-6">
                <div className="search_box_head_wrapper">
                  <Icon className="search_header_icon">
                    {this.props.headertiltleicon
                      ? this.props.headertiltleicon
                      : "departure_board"}
                  </Icon>
                  <span className="search_box_title">
                    {this.props.headtitle}
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                {this.props.templates && (
                  <div className="search_template_holder">
                    <Selectcomp
                      options={this.state.options}
                      onChange={this.handleChange}
                      value={this.state.selectedOption}
                      isSearchable={true}
                      maxlength={5}
                    />
                  </div>
                )}
              </div>
              <div className="col-md-2">
                {this.props.templates && (
                  <div className="search_save_gear_holder">
                    <span
                      className="search_setting_holder"
                      onClick={(e) => this.getallfieldsselection()}
                    >
                      <Icon className="serach_setting_icon">
                        {" "}
                        construction{" "}
                      </Icon>
                    </span>
                  </div>
                )}
                {this.props.templates && (
                  <div className="search_accordian_holder">
                    <span
                      className="search_accordian_frame"
                      onClick={(e) => this.handlesearchaccordian()}
                    >
                      <Icon className="serach_accordian_icon">
                        {" "}
                        {this.state.accupdown
                          ? "expand_more"
                          : "expand_less"}{" "}
                      </Icon>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className={
              this.state.accupdown
                ? "search_fields_holder_box toggleclose"
                : "search_fields_holder_box toggeleopen"
            }
          >
            <FormFieldRender
              form={this.props.formName}
              formFields={this.state.fieldsdata}
              onChange={this.formFieldOnChange}
              submittitle={this.props.formName === "Addproduct_form"?"Add":"Search"}
              submiticon={"search"}
              selectedTemp={
                this.state.selectedOption
                  ? this.state.selectedOption.value
                  : null
              }
            />
          </div>
        </div>
        <AlertDialogSlide
          open={this.state.opendialog}
          dialogtitle={this.state.dialogtitle}
          dialogbody={this.state.passovercomp}
          groups={this.props.groups}
          formfields={this.props.data}
          selectedTemp={this.state.selectedOption}
          handleClose={this.onclose}
          class="searchclass"
          iconname="engineering"
          applyfields={this.applyfields}
        />
      </React.Fragment>
    );
  }
}
