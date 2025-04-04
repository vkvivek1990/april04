import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AlertDialogSlide from "../../../components/dialogbox";
import FieldInfo from "../../../applicationComponent/FieldInfo";
import Icon from "@material-ui/core/Icon";
//import {isEmpty} from ''

const roleicons = {
  ADMIN: "manage_accounts",
  ASD: "account_circle",
  WP: "water_damage",
  CTR: "supervisor_account",
  TPA: "emoji_transportation",
  DR: "sports_motorsports",
  SCTR: "supervised_user_circle",
  IND: "apartment",
  VEH: "local_shipping",
  DB: "hail",
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const Loginformcomponent = (props) => {
  const [sect, setSect] = useState("");
  const [opendialog, setopendialog] = useState(false);
  const [rolelist, setrolelist] = useState([]);
  const [grplist, setgrplist] = useState([]);
  const [catalist, setcatalist] = useState([]);
  const [wholelist, setwholelist] = useState([]);
  const [active_grp_code, setactgrpcode] = useState("");
  const [currlist, setcurrlist] = useState("rolelist");
  const [currdialogtitle, setdigtitle] = useState(
    "Please Select The User Role"
  );
  const [erralrt, seterralert] = useState(true);
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    getFormFields,
    loginAction,
    getgrouplist,
    userMenuDetails,
    UpdateMenu,
    Updateheadergrouplist,
    Updateheaderrolelist,
    Updateheadercatagorylist,
    Updateheaderselectedgroup,
    Updateheaderselectedrole,
    Updateheaderselectedcatagory,
    formFieldComponent,
    getContractorIdFromTLContractor,
    dispatchFormInitialValues,
    dispatchenableServiceMenu,
    formFieldErrors,
    tl_login,
    serviceClicked,
    dispatchServicesItemsClicked,
    dispatchCurrentPageType,
    current_page_type,
    initialValues,
  } = props;
  const history = useHistory();
  // const section = formFieldComponent && FieldInfo(formFieldComponent);

  // useEffect(() => {
  //   return () => {
  //     dispatchTlContractorInitialValues(tl_contractor_init_value);
  //   };
  // }, []);

  useEffect(() => {
    dispatchCurrentPageType({ error: formFieldErrors, pristine: pristine });
  }, [formFieldErrors, pristine]);

  useEffect(() => {
    dispatchCurrentPageType({
      current_page_type: "tl_login",
      current_page: "tl_login",
    });
    const onLoadService = async () => {
      await getFormFields("tl_login");
      dispatchenableServiceMenu(false);
    };
    onLoadService();
    // const data = [
    //   {
    //     key: "LP",
    //     section: [
    //       {
    //         section: { key: "LP", value: "Login" },
    //         section_position: "LH",
    //         section_column_grid: "col-sm-12 col-md-12",
    //         fields: [
    //           {
    //             ctry_cd: "IND",
    //             lang_cd: "eng",
    //             field_label: "User Name",
    //             field_nm: "user_number",
    //             component_type: "TextBox",
    //             field_default_value: null,
    //             field_description: null,
    //             field_data_type: "text",
    //             field_length: "40",
    //             field_tooltip_text_id: "User Name",
    //             is_readonly: "N",
    //             display_order: 1,
    //             is_enabled: true,
    //             created_by: "12345",
    //             created_on: "2021-04-02T03:26:29.691Z",
    //             modified_by: "12345",
    //             modified_on: "2021-04-11T13:05:51.239Z",
    //             field_options: null,
    //             field_options_icon: null,
    //             field_validations: {
    //               is_required: "true",
    //             },
    //             field_icon: "account_circle",
    //             col_grid: "col-sm-12 col-md-12",
    //             id: 8,
    //             form_name: 57,
    //             field_position: "LH",
    //           },
    //           {
    //             ctry_cd: "IND",
    //             lang_cd: "eng",
    //             field_label: "Password",
    //             field_nm: "password",
    //             component_type: "TextBox",
    //             field_default_value: null,
    //             field_description: null,
    //             field_data_type: "password",
    //             field_length: "40",
    //             field_tooltip_text_id: "Password",
    //             is_readonly: "N",
    //             display_order: 1,
    //             is_enabled: true,
    //             created_by: "12345",
    //             created_on: "2021-04-02T03:26:29.691Z",
    //             modified_by: "12345",
    //             modified_on: "2021-04-11T13:05:51.239Z",
    //             field_options: null,
    //             field_options_icon: null,
    //             field_validations: {
    //               is_required: "true",
    //             },
    //             field_icon: "lock",
    //             col_grid: "col-sm-12 col-md-12",
    //             id: 8,
    //             form_name: 57,
    //             field_position: "LH",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ];

    // const section = FieldInfo(data);
    // setSect(section);
  }, []);

  useEffect(() => {
    if (formFieldComponent) {
      const section = FieldInfo(formFieldComponent);
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
      loginAction("tl_login")
        .then((res) => {
          history.push("/tutorial");
          // if(res && res.token && res.user){
          //     let finalarr = [];
          //     finalarr = res.user.roles.map((items) => {
          //       let listobj = {};
          //       listobj.role = items;
          //       listobj.active = false;
          //       listobj.iconName = roleicons[items];
          //       return listobj;
          //     });
          //     if (finalarr.length !== 0) {
          //       setopendialog(true);
          //       setrolelist(finalarr);
          //       setdigtitle("Please Select The User Role");
          //       setcurrlist("rolelist");
          //     } else {
          //       generateMenu(res.roles[0]);
          //     }
          //     localStorage.setItem("access_token", res.token);
          //     localStorage.setItem("user_id", res.user.user_id);
          //     localStorage.setItem("user_name", res.user.first_name+" "+res.user.last_name);
          //     //getContractorIdFromTLContractor(res.payLoad.id);
          // }
          if (res && res.token && res.user) {
            let grouplistarr = [];
            grouplistarr = res.user.groupList.map((items) => {
              let listobj = {};
              listobj.group_name = items.group_name;
              listobj.group_id = items.group_id;
              listobj.active = false;
              listobj.iconName = "groups";
              return listobj;
            });
            setopendialog(true);
            setgrplist(grouplistarr);
            setdigtitle("Please Select The User Group");
            setcurrlist("groupbox");
            setwholelist(res.user.roles);
            localStorage.setItem("access_token", res.token);
            localStorage.setItem("user_id", res.user.user_id);
            localStorage.setItem(
              "user_name",
              res.user.first_name + " " + res.user.last_name
            );
            localStorage.setItem("login_data", JSON.stringify(res.user));
            localStorage.setItem("user_roles", JSON.stringify(res.user.roles));
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  const onSignup = () => {
    history.push("/register");
  };

  const loadmenus = () => {};

  const handleactivelist = (roledata, boxtype) => {
    //debugger;
    seterralert(true);

    //   if(boxtype === "rolelist"){
    //       let getroles = [...rolelist];
    //       let activerole = "";

    //       getroles.map((itm) => {
    //         if(itm.role === roledata.role){
    //           activerole = itm.role;
    //           itm.active = true;
    //         }
    //         else{
    //           itm.active = false;
    //         }
    //         return itm;
    //       });

    //       if(activerole) {
    //         localStorage.active_role = activerole;
    //       }

    //       if(activerole !== "ADMIN"){
    //         localStorage.setItem("active_role", activerole);
    //         localStorage.setItem("Group_id", "");
    //         localStorage.setItem("Catagory_id", "");
    //       getgrouplist(activerole)
    //       .then((resp)=>{
    //         if(resp && resp.groups && resp[activerole]){
    //           let finalarrgrp = [];
    //                 finalarrgrp = resp.groups.map((items) => {
    //                   let listobj = {};
    //                   listobj.group_id = items.group_id;
    //                   listobj.group_name = items.group_name;
    //                   listobj.iconName = "groups";
    //                   listobj.active = false;
    //                   return listobj;
    //                 });
    //           setgrplist(finalarrgrp);
    //           setwholelist(resp[activerole]);
    //           setrolelist(getroles);
    //           setdigtitle("Please Select The User Group");
    //           setcurrlist("groupbox");
    //         }
    //       })
    //       .catch((err)=>{
    //         alert(err);
    //       });
    //     }
    //     else{

    //       seterralert(false);
    //       setrolelist(getroles);
    //     }
    //  }
    if (boxtype === "rolelist") {
      let getroles = [...rolelist];
      let getgrpid = active_grp_code;
      let activerole = "";
      let catalist = [];
      getroles.map((itm) => {
        if (itm.role === roledata.role) {
          activerole = itm.role;
          itm.active = true;
        } else {
          itm.active = false;
        }
        return itm;
      });
      let login_data = JSON.parse(localStorage.getItem("login_data"));
      login_data[activerole].map((itm) => {
        if (itm.group_id.indexOf(getgrpid) !== -1) {
          catalist.push(itm);
          return itm;
        }
      });
      seterralert(false);
      setcatalist(catalist);
    }

    if (boxtype === "groupbox") {
      let getroles = [...grplist];
      let selectedcode = "";
      getroles.map((itm) => {
        if (itm.group_id === roledata.group_id) {
          itm.active = true;
          selectedcode = itm.group_id;
        } else {
          itm.active = false;
        }
        return itm;
      });
      let login_data = JSON.parse(localStorage.getItem("login_data"));
      let selectedgrp = roledata;
      let wholerolelist = wholelist;
      let rolelist = [];
      wholerolelist.map((items) => {
        if (login_data[items] && login_data[items].length !== 0) {
          return login_data[items].map((itm) => {
            if (itm.group_id.indexOf(selectedgrp.group_id) !== -1) {
              let listobj = {};
              listobj.role = items;
              listobj.active = false;
              listobj.iconName = roleicons[items];
              rolelist.push(listobj);
              return listobj;
            }
          });
        }
      });
      setactgrpcode(selectedcode);
      setgrplist(getroles);
      setrolelist(rolelist);
      setdigtitle("Please Select The User Role");
      setcurrlist("rolelist");
    }
  };

  const handlepopup = (boxtype) => {
    //debugger;
    let getroles = [];
    switch (boxtype) {
      case "rolelist": {
        getroles = [...rolelist];
        break;
      }
      case "groupbox": {
        getroles = [...grplist];
        break;
      }
    }
    return (
      <div className="login_role_selc_box">
        <ul className="log_role_holder">
          {getroles.map((items) => {
            return (
              <li className="role_list">
                <div
                  className={
                    items.active ? "role_box_holder active" : "role_box_holder"
                  }
                  onClick={(e) => handleactivelist(items, boxtype)}
                >
                  <span className="icn_holder">
                    <Icon className="role_list_icn">{items.iconName}</Icon>
                  </span>
                  {boxtype === "rolelist" && (
                    <span className="role_txt">{items.role}</span>
                  )}
                  {boxtype === "groupbox" && (
                    <span className="role_txt">{items.group_name}</span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const onclose = () => {
    setopendialog(false);
  };

  const generateMenu = (role) => {
    userMenuDetails(role)
      .then((res) => {
        let rM = res.menulist;
        let getroles = rolelist.map((itm) => {
          let newobj = {};
          newobj.value = itm.role;
          newobj.label = capitalize(itm.role);
          return newobj;
        });
        let getgrplst = grplist.map((itm) => {
          let newobj = {};
          newobj.value = itm.group_id;
          newobj.label = capitalize(itm.group_name);
          return newobj;
        });
        let getcatalist = catalist.map((itm) => {
          let newobj = {};
          newobj.value = itm.id;
          newobj.label = capitalize(itm.name);
          return newobj;
        });
        let clnroles = [...rolelist];
        let clngrps = [...grplist];
        let clncatas = [...catalist];
        let roleactive = clnroles.filter((items) => {
          if (items.active) {
            let nwobj = {};
            nwobj.value = items.role;
            items.label = capitalize(items.role);
            return nwobj;
          }
        });
        let activegrp = clngrps.filter((items) => {
          if (items.active) {
            let nwobj = {};
            nwobj.value = items.group_id;
            items.label = capitalize(items.group_name);
            return nwobj;
          }
        });
        let cataactive = [{ label: clncatas[0].name, value: clncatas[0].id }];
        if (rM && rM.length) {
          let newObj = JSON.parse(JSON.stringify(rM[rM.length - 1]));
          newObj.menuid = "Viewproduct";
          newObj.menuname = "View Product";
          newObj.path = "/products";
          rM.push(newObj);
        }

        localStorage.setItem("menulist", JSON.stringify(rM));
        UpdateMenu(res);
        Updateheadergrouplist(getgrplst);
        Updateheaderrolelist(getroles);
        Updateheadercatagorylist(getcatalist);
        Updateheaderselectedgroup(activegrp);
        Updateheaderselectedrole(roleactive);
        Updateheaderselectedcatagory(cataactive);
        history.push("/dashboard");
      })
      .catch((err) => {
        alert(err);
        onclose();
      });
  };

  const handlePrevious = () => {};

  const handleapply = () => {
    let getroles = [...rolelist];
    let getgrplst = [...grplist];
    let getcatalist = [...catalist];
    let anyactive = getroles.filter((items) => items.active);
    // if(anyactive[0].role !== "ADMIN"){
    let activegrp = getgrplst.filter((items) => items.active);

    localStorage.setItem("Group_id", activegrp[0].group_id);
    localStorage.setItem("active_role_id", getcatalist[0].id);
    localStorage.setItem("active_role", anyactive[0].role);
    // }
    // else {

    //     localStorage.setItem("Group_id","ADMIN");
    //     localStorage.setItem("Catagory_id","ADMIN");
    //     localStorage.setItem("active_role", anyactive[0].role);
    // }
    generateMenu(anyactive[0].role);
  };

  return (
    <>
      <form>
        <div className="container loginWrapper">
          <div className="row">{sect}</div>
          <div className="row">
            <button
              className="btn nextBtn"
              type="button"
              disabled={pristine || submitting}
              onClick={onSubmit}
            >
              Login
            </button>
            <button
              className="btn nextBtn"
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Reset
            </button>

            {/* <button
            className="btn nextBtn"
            type="button"
            disabled={!pristine || submitting}
            onClick={onSignup}
          >
            Signup
          </button> */}
          </div>
        </div>
      </form>
      <AlertDialogSlide
        open={opendialog}
        dialogtitle={currdialogtitle}
        dialogbody={(e) => handlepopup(currlist)}
        handleClose={(e) => onclose()}
        handlePrevious={(e) => handlePrevious()}
        class="loginclass"
        iconname="engineering"
        handleApply={(e) => handleapply()}
        applydisable={erralrt}
        prevdisable={false}
        applybtn={"Submit"}
        prevbtn={"Back"}
      />
    </>
  );
};

export default Loginformcomponent;
