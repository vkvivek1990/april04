import React from "react";
import "./style.scss";
import Icon from "@material-ui/core/Icon";
import isEqual from "lodash.isequal";
import Halfcutchart from "../Halfcutloaderchart";
import Piewithchainchart from "../piewithchaincomp";
import Arearoundchart from "../Area_roundchart";
import Horizontalcomp from "../horizontalbarcomp";
import Boxtypecomp from "../Boxstypecomp";
import Legendcomp from "../Legendcomp";
import Indicationcomp from "../Halfcutloaderchart/indicationcomp.js";
import AlertDialogSlide from "../dialogbox";
import { dispatchCurrentPageType } from "../../redux/actions/registration.action";
import Header from "../header";
import { connect } from "react-redux";
//import Select from 'react-select';

const getComponent = {
  Halfcutchart,
  Piewithchainchart,
  Arearoundchart,
  Horizontalcomp,
  Boxtypecomp,
};

class Dashboardcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        row1: [
          {
            grid: 6,
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
            grid: 4,
            comptype: "Piewithchainchart",
            name: "Quote Proposals",
            data: {
              quotes: [
                {
                  Name: "Quote Proposal4",
                  Done: 150,
                  Inprogress: 20,
                  Open: 30,
                  Pending: 40,
                  Rejected: 30,
                  Cancelled: 50,
                  Untracked: 40,
                  Delayed: 50,
                },
                {
                  Name: "Quote Proposal6",
                  Done: 150,
                  Inprogress: 20,
                  Open: 30,
                  Pending: 40,
                  Rejected: 30,
                  Cancelled: 50,
                  Untracked: 40,
                  Delayed: 50,
                },
                {
                  Name: "Quote Proposal7",
                  Done: 150,
                  Inprogress: 20,
                  Open: 30,
                  Pending: 0,
                  Rejected: 0,
                  Cancelled: 0,
                  Untracked: 0,
                  Delayed: 0,
                },
                {
                  Name: "Quote Proposal8",
                  Done: 150,
                  Inprogress: 20,
                  Open: 30,
                  Pending: 40,
                  Rejected: 30,
                  Cancelled: 50,
                  Untracked: 40,
                  Delayed: 50,
                },
                {
                  Name: "Quote Proposal9",
                  Done: 150,
                  Inprogress: 20,
                  Open: 30,
                  Pending: 40,
                  Rejected: 30,
                  Cancelled: 50,
                  Untracked: 40,
                  Delayed: 50,
                },
                {
                  Done: "#f648d8",
                  Inprogress: "#55b0f1",
                  Open: "#29ef2f",
                  Pending: "#f86c1b",
                  Rejected: "#ef4444",
                  Cancelled: "#f30808",
                  Untracked: "#f8f861",
                  Delayed: "#ae0505",
                },
              ],
              totalcount: 8000,
            },
            isexpand: true,
            legend: true,
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
        row2: [
          {
            grid: 6,
            comptype: "Halfcutchart",
            name: "Payable Vs Recivable",
            data: [
              {
                group: "Industry",
                iconName: "departure_board",
                paid: 2000,
                ytp: 0,
                recived: 0,
                ytr: 0,
              },
              {
                group: "Water Plant",
                iconName: "departure_board",
                paid: 10000,
                ytp: 0,
                recived: 15000,
                ytr: 4000,
              },
              {
                group: "Contractor",
                iconName: "departure_board",
                paid: 8000,
                ytp: 0,
                recived: 3500,
                ytr: 2543,
              },
              {
                group: "Sub Contractor",
                iconName: "departure_board",
                paid: 6867,
                ytp: 1,
                recived: 5757,
                ytr: 544,
              },
              {
                group: "Vehicle",
                iconName: "departure_board",
                paid: 12332,
                ytp: 0,
                recived: 3000,
                ytr: 0,
              },
              {
                group: "VehicleAgent",
                iconName: "departure_board",
                paid: 0,
                ytp: 0,
                recived: 10000,
                ytr: 0,
              },
              {
                paid: "#73ff2c",
                "yet to pay": "orange",
                recived: "yellow",
                "yet to recive": "#ff41c4",
              },
            ],
            isexpand: true,
            legend: true,
            displayorder: 1,
            countchanged: false,
            isrefresh: true,
            hidden: false,
          },
          {
            grid: 6,
            comptype: "Arearoundchart",
            name: "Expense Indicator",
            data: {
              OverAll: [
                { name: "Day1", income: 4000, expense: 2400 },
                { name: "Day2", income: 3000, expense: 1398 },
                { name: "Day3", income: 2000, expense: 9800 },
                { name: "Day4", income: 2780, expense: 3908 },
                { name: "Day5", income: 1890, expense: 4800 },
                { name: "Day6", income: 2390, expense: 3800 },
                {
                  ToatalExpense: 2390,
                  expenserate: 5,
                  iconName: "departure_board",
                },
              ],
              Industry: [
                { name: "Day1", income: 1000, expense: 3000 },
                { name: "Day2", income: 3000, expense: 1398 },
                { name: "Day3", income: 4000, expense: 7000 },
                { name: "Day4", income: 2100, expense: 450 },
                { name: "Day5", income: 2345, expense: 6575 },
                { name: "Day6", income: 7000, expense: 3800 },
                {
                  ToatalExpense: 5900,
                  expenserate: 8,
                  iconName: "departure_board",
                },
              ],
              "Water Plant": [
                { name: "Day1", income: 4546, expense: 223 },
                { name: "Day2", income: 5657, expense: 8744 },
                { name: "Day3", income: 2343, expense: 9800 },
                { name: "Day4", income: 1000, expense: 3466 },
                { name: "Day5", income: 7800, expense: 3990 },
                { name: "Day6", income: 4546, expense: 454 },
                {
                  ToatalExpense: 45366,
                  expenserate: 6,
                  iconName: "departure_board",
                },
              ],
              Contractor: [
                { name: "Day1", income: 355, expense: 223 },
                { name: "Day2", income: 1001, expense: 988 },
                { name: "Day3", income: 5665, expense: 4646 },
                { name: "Day4", income: 1000, expense: 6644 },
                { name: "Day5", income: 4546, expense: 988 },
                { name: "Day6", income: 455, expense: 677 },
                {
                  ToatalExpense: 43434,
                  expenserate: 2,
                  iconName: "departure_board",
                },
              ],
              "Sub Contractor": [
                { name: "Day1", income: 679, expense: 543 },
                { name: "Day2", income: 6788, expense: 7654 },
                { name: "Day3", income: 2313, expense: 23141 },
                { name: "Day4", income: 568, expense: 9877 },
                { name: "Day5", income: 2800, expense: 988 },
                { name: "Day6", income: 4555, expense: 8766 },
                {
                  ToatalExpense: 44321,
                  expenserate: 4,
                  iconName: "departure_board",
                },
              ],
              Vehicle: [
                { name: "Day1", income: 679, expense: 543 },
                { name: "Day2", income: 53422, expense: 987 },
                { name: "Day3", income: 2121, expense: 6564 },
                { name: "Day4", income: 434352, expense: 757575 },
                { name: "Day5", income: 343, expense: 5664 },
                { name: "Day6", income: 3334, expense: 3323 },
                {
                  ToatalExpense: 76580,
                  expenserate: 7,
                  iconName: "departure_board",
                },
              ],
              VehicleAgent: [
                { name: "Day1", income: 3423, expense: 334 },
                { name: "Day2", income: 7656, expense: 8766 },
                { name: "Day3", income: 2340, expense: 6564 },
                { name: "Day4", income: 5647, expense: 0 },
                { name: "Day5", income: 4344, expense: 222 },
                { name: "Day6", income: 332, expense: 6455 },
                {
                  ToatalExpense: 8666,
                  expenserate: 9,
                  iconName: "departure_board",
                },
              ],
              Paramclr: [{ income: "#29ef2f", expense: "#f86c1b" }],
            },
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
            {this.loadcharts()}
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
})(Dashboardcomp);
