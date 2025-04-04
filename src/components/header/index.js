import React from "react";
import "./style.scss";
import BasicRoute from "../BasicRoute";
import { withRouter } from "react-router-dom";
import Selectcomp from "../Selectcomp";
import isEqual from "lodash.isequal";
import { logoutAction } from "../../redux/actions/authorization.action";
import { connect } from "react-redux";
import {
  getformFields,
  getContractorIdFromTLContractor,
  dispatchFormInitialValues,
} from "../../redux/actions/form.field.action";
import {
  submitRegistration,
  dispatchenableServiceMenu,
  dispatchServicesItemsClicked,
  dispatchCurrentPageType,
  getRemovedServicesItems,
  fileUpLoad,
} from "../../redux/actions/registration.action";

import {
  Updateheaderrolelist,
  Updateheadercatagorylist,
  Updateheaderselectedgroup,
  Updateheaderselectedrole,
  Updateheaderselectedcatagory,
} from "../../redux/actions/logindata.action";

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

class Headercomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grouplist: [],
      rolelist: [],
      catalist: [],
      selectedgroup: null,
      selectedrole: null,
      selectedcata: null,
    };
  }

  handleGrouplistChange = (selectedOption, name) => {
    this.setState({ selectedgroup: selectedOption }, () => {
      let login_data = JSON.parse(localStorage.getItem("login_data"));
      let wholerolelist = JSON.parse(localStorage.getItem("user_roles"));
      let rolelist = [];
      wholerolelist.map((items) => {
        if (login_data[items] && login_data[items].length !== 0) {
          return login_data[items].map((itm) => {
            if (itm.group_id.indexOf(selectedOption.value) !== -1) {
              let listobj = {};
              listobj.label = capitalize(items);
              listobj.value = items;
              rolelist.push(listobj);
              return listobj;
            }
          });
        }
      });
      this.props.Updateheaderselectedgroup(this.state.selectedgroup);
      this.props.Updateheaderrolelist(rolelist);
      let selectdrole = [];
      if (rolelist.length === 1) {
        selectdrole.push(rolelist[0]);
      }
      this.props.Updateheaderselectedrole(selectdrole);
      this.props.Updateheadercatagorylist([]);
      this.props.Updateheaderselectedcatagory([]);
      localStorage.setItem("Group_id", this.state.selectedgroup.value);
      localStorage.setItem("active_role_id", "");
      localStorage.setItem(
        "active_role",
        selectdrole.length !== 0 ? selectdrole[0].value : ""
      );
    });
  };

  handleRolelistChange = (selectedOption, name) => {
    this.setState({ selectedrole: selectedOption }, () => {
      let login_data = JSON.parse(localStorage.getItem("login_data"));
      let activerole = selectedOption.value;
      let getgrpid = this.state.selectedgroup[0]
        ? this.state.selectedgroup[0].group_id
        : this.state.selectedgroup.value;
      let catalist = [];
      login_data[activerole].map((itm) => {
        if (itm.group_id.indexOf(getgrpid) !== -1) {
          let newobj = {};
          newobj.label = capitalize(itm.name);
          newobj.value = itm.id;
          catalist.push(newobj);
          return itm;
        }
      });
      this.props.Updateheaderselectedrole(this.state.selectedrole);
      this.props.Updateheadercatagorylist(catalist);
      let selectdcata = [];
      if (catalist.length === 1) {
        selectdcata.push(catalist[0]);
      }
      this.props.Updateheaderselectedcatagory(selectdcata);
      localStorage.setItem(
        "active_role_id",
        selectdcata.length !== 0 ? selectdcata[0].value : ""
      );
      localStorage.setItem("active_role", this.state.selectedrole.value);
    });
  };

  handleCatagorylistChange = (selectedOption, name) => {
    this.setState({ selectedcata: selectedOption }, () => {
      this.props.Updateheaderselectedcatagory(this.state.selectedcata);
      localStorage.setItem("active_role_id", this.state.selectedcata.value);
    });
  };

  static getDerivedStateFromProps(props, state) {
    if (
      !isEqual(props.grouplist, state.grouplist) ||
      !isEqual(props.rolelist, state.rolelist) ||
      !isEqual(props.catalist, state.catalist)
    ) {
      return {
        grouplist: props.grouplist,
        rolelist: props.rolelist,
        catalist: props.catalist,
        selectedgroup: props.selectedgrp,
        selectedrole: props.selectedrole,
        selectedcata: props.selectedcata,
      };
    }
  }

  authlogout = () => {
    //logoutAction()
    localStorage.clear();
    this.props.history.push("/login");
    this.props.dispatchServicesItemsClicked([]);
    this.props.getRemovedServicesItems("removeAll");
    this.props.dispatchCurrentPageType([]);
    this.props.initialValues["init_values"] = {};
    //this.props.dispatchFormInitialValues((initialValues["init_values"] = {}));
  };

  render() {
    return (
      <React.Fragment>
        <div className="Header_container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5">
                <div className="img_plus_drp_holder">
                  <div className="img_holder">
                    {/* <img className="app_logo" src={require("../../assets/logo.jpeg")} alt={"Logo"}/> */}
                  </div>
                  {/* <div className="whole_drp_holders">
                    <div className="Group_list_holder">
                      <Selectcomp
                        options={this.state.grouplist}
                        onChange={this.handleGrouplistChange}
                        value={this.state.selectedgroup}
                        isSearchable={true}
                        maxlength={5}
                      />
                    </div>
                    <div className="Role_list_holder">
                      <Selectcomp
                        options={this.state.rolelist}
                        onChange={this.handleRolelistChange}
                        value={this.state.selectedrole}
                        isSearchable={true}
                        maxlength={5}
                      />
                    </div>
                    <div className="Catagory_list_holder">
                      <Selectcomp
                        options={this.state.catalist}
                        onChange={this.handleCatagorylistChange}
                        value={this.state.selectedcata}
                        isSearchable={true}
                        maxlength={5}
                      />
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="menu_holder">
                  <BasicRoute menulist={this.props.menulist} />
                </div>
              </div>
              <div className="col-md-3 user_dtls_box">
                <div className="user_details">
                  <span className="user_dtls_id">
                    User ID :{" "}
                    {localStorage.getItem("user_id")
                      ? localStorage.getItem("user_id")
                      : "1XXX20"}
                  </span>
                  <span className="user_dtls_name">
                    User Name :{" "}
                    {localStorage.getItem("user_name")
                      ? localStorage.getItem("user_name")
                      : "John"}
                  </span>
                </div>
                <div
                  className="Log_out_container"
                  onClick={(e) => this.authlogout()}
                >
                  <span class="conclr ">
                    <i class="glyphicon">
                      <span class="material-icons">logout</span>
                    </i>
                  </span>
                  <span className="Log_out_btn">Logout</span>
                  <span className="user_dtls_name">
                    {/* Active Role :{" "}
                    {localStorage.getItem("active_role")
                      ? localStorage.getItem("active_role")
                      : ""} */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  //debugger;
  //console.log(state, "----------------------------------------- state");
  return {
    menulist: state.auth.menulist,
    initialValues: state.formField && state.formField,
    grouplist: state.LoginData.grpdropdwnlist,
    rolelist: state.LoginData.roledropdwnlist,
    catalist: state.LoginData.catagorydropdwnlist,
    selectedgrp: state.LoginData.selectedgroup,
    selectedrole: state.LoginData.selectedrole,
    selectedcata: state.LoginData.selectedcatagory,
  };
}

export default withRouter(
  connect(mapStateToProps, {
    dispatchFormInitialValues: (values) => dispatchFormInitialValues(values),
    dispatchCurrentPageType: (curPageType) =>
      dispatchCurrentPageType(curPageType),
    getRemovedServicesItems: (id) => getRemovedServicesItems(id),
    dispatchServicesItemsClicked: (id) => dispatchServicesItemsClicked(id),
    Updateheaderrolelist: (payload) => Updateheaderrolelist(payload),
    Updateheaderselectedgroup: (payload) => Updateheaderselectedgroup(payload),
    Updateheadercatagorylist: (payload) => Updateheadercatagorylist(payload),
    Updateheaderselectedrole: (payload) => Updateheaderselectedrole(payload),
    Updateheaderselectedcatagory: (payload) =>
      Updateheaderselectedcatagory(payload),
  })(Headercomp)
);
