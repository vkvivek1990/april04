import React from "react";
import "./style.scss";
import Icon from "@material-ui/core/Icon";
import isEqual from "lodash.isequal";
import Halfcutchart from "../Halfcutloaderchart/index.js";
import Piewithchainchart from "../piewithchaincomp/index.js";
import Arearoundchart from "../Area_roundchart/index.js";
import Horizontalcomp from "../horizontalbarcomp/index.js";
import Boxtypecomp from "../Boxstypecomp/index.js";
import Legendcomp from "../Legendcomp/index.js";
import Indicationcomp from "../Halfcutloaderchart/indicationcomp.js";
import AlertDialogSlide from "../dialogbox/index.js";
import { dispatchCurrentPageType } from "../../redux/actions/registration.action.js";
import Header from "../header/index.js";
import { connect } from "react-redux";
import YoutubeEmbed from "./YoutubeEmbed";
//import Select from 'react-select';

const getComponent = {
  Halfcutchart,
  Piewithchainchart,
  Arearoundchart,
  Horizontalcomp,
  Boxtypecomp,
};

class Tutorialcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        row1: [
          {
            grid: 10,
            comptype: "Boxtypecomp",
            name: "Payable Vs Recivable",
            data: [
              {
                group: "Industry",
                iconName: "departure_board",
                needed: 2000,
                arranged: 0,
                ytd: 0,
              },
              {
                group: "Water Plant",
                iconName: "departure_board",
                needed: 2000,
                arranged: 0,
                ytd: 0,
              },
              {
                group: "Contractor",
                iconName: "departure_board",
                needed: 2000,
                arranged: 0,
                ytd: 0,
              },
              {
                group: "Sub Contractor",
                iconName: "departure_board",
                needed: 2000,
                arranged: 0,
                ytd: 0,
              },
              {
                group: "Vehicle",
                iconName: "departure_board",
                needed: 2000,
                arranged: 0,
                ytd: 0,
              },
              {
                group: "VehicleAgent",
                iconName: "departure_board",
                needed: 2000,
                arranged: 0,
                ytd: 0,
              },
              {
                group: "#73ff2c",
                Needed: "orange",
                Arranged: "yellow",
                "yet to do": "#ff41c4",
              },
            ],
            isexpand: true,
            legend: false,
            displayorder: 1,
            countchanged: false,
            isrefresh: false,
            hidden: false,
          },
          {
            grid: 2,
            comptype: "Horizontalcomp",
            name: "Expiry Report",
            data: [
              {
                group: "Industry",
                iconName: "departure_board",
                exp_ls_mnth: 2,
                exp_grt_mnth: 5,
                dmgd_cans: 0,
                lost_cans: 0,
              },
              {
                group: "Water Plant",
                iconName: "departure_board",
                exp_ls_mnth: 2,
                exp_grt_mnth: 5,
                dmgd_cans: 10,
                lost_cans: 0,
              },
              {
                group: "Contractor",
                iconName: "departure_board",
                exp_ls_mnth: 10,
                exp_grt_mnth: 0,
                dmgd_cans: 0,
                lost_cans: 10,
              },
              {
                group: "Sub Contractor",
                iconName: "departure_board",
                exp_ls_mnth: 20,
                exp_grt_mnth: 0,
                dmgd_cans: 0,
                lost_cans: 0,
              },
              {
                group: "Vehicle",
                iconName: "departure_board",
                exp_ls_mnth: 0,
                exp_grt_mnth: 15,
                dmgd_cans: 0,
                lost_cans: 10,
              },
              {
                group: "VehicleAgent",
                iconName: "departure_board",
                exp_ls_mnth: 0,
                exp_grt_mnth: 0,
                dmgd_cans: 10,
                lost_cans: 10,
              },
              {
                "expire in < 30 days": "#f648d8",
                "expire in > 30 days": "#f8f861",
                "damaged cans": "#f86c1b",
                "lost cans": "#f30808",
              },
            ],
            isexpand: true,
            legend: true,
            displayorder: 1,
            countchanged: false,
            isrefresh: false,
            hidden: false,
          },
        ],
      },
      timerangedrop: ["Weekly", "Monthly"],
      selectedOption: null,
      opendialog: false,
      dialogtitle: "",
      passovercomp: null,
      popupdata: null,
    };
  }

  componentDidMount() {
    //console.log(this.props.current_page, "current page");
    dispatchCurrentPageType({
      current_page_type: "dashboard",
      current_page: "dashboard",
    });
  }

  handlepopup = (lodngcomp, compdata, compname) => {
    this.setState({
      opendialog: true,
      dialogtitle: compname,
      passovercomp: lodngcomp,
      popupdata: compdata,
    });
  };

  handlesinglerefresh = (prevdata, comptype) => {
    let alldata = { ...this.state.data };
    let rowkeys = Object.keys(alldata);
    let respdata = [
      {
        group: "Industry",
        iconName: "departure_board",
        paid: 4000,
        ytp: 5000,
        recived: 1000,
        ytr: 3400,
      },
      {
        group: "Water Plant",
        iconName: "departure_board",
        paid: 1000,
        ytp: 0,
        recived: 4000,
        ytr: 4000,
      },
      {
        group: "Contractor",
        iconName: "departure_board",
        paid: 0,
        ytp: 0,
        recived: 0,
        ytr: 2543,
      },
      {
        group: "Sub Contractor",
        iconName: "departure_board",
        paid: 6867,
        ytp: 5,
        recived: 5757,
        ytr: 544,
      },
      {
        group: "Vehicle",
        iconName: "departure_board",
        paid: 4533,
        ytp: 0,
        recived: 6000,
        ytr: 0,
      },
      {
        group: "VehicleAgent",
        iconName: "departure_board",
        paid: 2300,
        ytp: 5644,
        recived: 6555,
        ytr: 5000,
      },
      {
        paid: "#73ff2c",
        "yet to pay": "orange",
        recived: "yellow",
        "yet to recive": "#ff41c4",
      },
    ];
    rowkeys.map((items) => {
      alldata[items].map((innerkey) => {
        if (innerkey.comptype === comptype) {
          if (!isEqual(innerkey.data, respdata)) {
            innerkey.data = respdata;
            innerkey.countchanged = true;
            return innerkey;
          } else {
            innerkey.countchanged = false;
            return innerkey;
          }
        }
      });
      return;
    });
    this.setState({ data: alldata });
  };

  onclose = () => {
    this.setState({
      opendialog: false,
      dialogtitle: "",
      passovercomp: null,
      popupdata: null,
    });
  };

  loadcharts = () => {
    let lddata = { ...this.state.data };
    let nofrows = Object.keys(lddata);
    return nofrows.map((data, inx) => {
      return (
        <div className="row">
          {lddata[data].map((cldata, clindx) => {
            let Loadcomp = getComponent[cldata.comptype];
            if (cldata.hidden === false) {
              return (
                <div className={`col-md-${cldata.grid} paddng_rgt_zero`}>
                  {cldata.comptype === "Halfcutchart" && (
                    <Indicationcomp data={cldata.data} />
                  )}
                  <div className="chart_holder">
                    {cldata.isexpand && (
                      <div
                        className="minimze_window"
                        onClick={(e) =>
                          this.handlepopup(Loadcomp, cldata.data, cldata.name)
                        }
                      >
                        <Icon>crop_free</Icon>
                      </div>
                    )}
                    {cldata.isrefresh && (
                      <div
                        className="single_refresh"
                        onClick={(e) =>
                          this.handlesinglerefresh(cldata.data, cldata.comptype)
                        }
                      >
                        <Icon>autorenew</Icon>
                      </div>
                    )}
                    <Loadcomp data={cldata.data} />
                    {cldata.legend && <Legendcomp data={cldata.data} />}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="conatiner-fluid">
          <div className="dashboard_container">
            {/* <div className="dash_drop_container">
                            <span className="drop_title">Details for</span>
                            <div className="dash_drop_holder">
                            <Select
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={options}
                            />
                            </div>
                        </div> */}
            {/* {this.loadcharts()} */}
            <div
              className={`col-md-10 paddng_rgt_zero`}
              style={{ width: "80%" }}
            >
              <YoutubeEmbed embedId="rokGy0huYEA" />
            </div>
            <div className={`col-md-2 paddng_rgt_zero`}>
              <ul>
                <li>Video 1</li>
                <li>Video 2</li>
              </ul>
            </div>
            <span className="Whole_refrsh_btn">
              <Icon className="screen_rfrsh_icn">refresh</Icon>
            </span>
          </div>
        </div>
        <AlertDialogSlide
          open={this.state.opendialog}
          dialogtitle={this.state.dialogtitle}
          dialogbody={this.state.passovercomp}
          data={this.state.popupdata}
          handleClose={this.onclose}
          class="dashboardclass"
        />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    current_page:
      state.register.current_page_type &&
      state.register.current_page_type["current_page"],
  };
}

export default connect(mapStateToProps, {
  dispatchCurrentPageType: (curPageType) =>
    dispatchCurrentPageType(curPageType),
})(Tutorialcomp);
