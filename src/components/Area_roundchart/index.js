import React from "react";
import "./style.scss";
import Icon from "@material-ui/core/Icon";
import Arearecharts from "./area_rechart";

export default class Arearoundchart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areadata: [],
      lidata: [
        { key: 1 },
        { key: 2 },
        { key: 3 },
        { key: 4 },
        { key: 5 },
        { key: 6 },
        { key: 7 },
        { key: 8 },
        { key: 9 },
      ],
    };
  }

  loadBG = (grpdata, keydata) => {
    if (grpdata.expenserate >= keydata.key) {
      return "#f648d8";
    } else {
      return "#ccc";
    }
  };

  componentDidMount() {
    let fulldata = { ...this.props.data };
    let groupnames = Object.keys(fulldata);
    let getclrkey = groupnames.splice(groupnames.length - 1, 1);
    let loaddata = [...fulldata[groupnames[0]]];
    let spltdata = loaddata.splice(loaddata.length - 1, 1);
    this.setState({ areadata: loaddata });
  }

  handlesepdata = (grpname) => {
    let fulldata = { ...this.props.data };
    let loaddata = [...fulldata[grpname]];
    let spltdata = loaddata.splice(loaddata.length - 1, 1);
    this.setState({ areadata: loaddata });
  };

  loadrounds = () => {
    let alldata = { ...this.props.data };
    let groupnames = Object.keys(alldata);
    let getclrkey = groupnames.splice(groupnames.length - 1, 1);
    let lidata = [...this.state.lidata];
    return groupnames.map((item) => {
      let expensegetdata = alldata[item].slice(alldata[item].length - 1);
      //console.log(expensegetdata,"expensegetdata");
      return (
        <div
          className="icon_inner_circle"
          onClick={(e) => this.handlesepdata(item)}
        >
          <div className="inner_icn_holder">
            <Icon className="cata_icn">{expensegetdata[0].iconName}</Icon>
          </div>
          <div className="inner_split_circle">
            <ul className="inner_split_bar_holder">
              {lidata.map((datas) => {
                return (
                  <li
                    className="split_boxes"
                    style={{
                      background: this.loadBG(expensegetdata[0], datas),
                    }}
                  ></li>
                );
              })}
            </ul>
            <ul className="inner_split_bar_holder_right">
              {lidata.map((datas) => {
                return (
                  <li
                    className="split_boxes"
                    style={{
                      background: this.loadBG(expensegetdata[0], datas),
                    }}
                  ></li>
                );
              })}
            </ul>
            <div className="cut_circle"></div>
          </div>
          <div className="grp_nme_holder">
            <span className="grp_value_cnt">
              {expensegetdata[0].ToatalExpense}
            </span>
            <span className="grp_txt_cnt">{item}</span>
          </div>
        </div>
      );
    });
  };

  render() {
    let alldata = { ...this.props.data };
    let groupnames = Object.keys(alldata);
    let getclrkey = groupnames.splice(groupnames.length - 1, 1);
    let catadataclr = alldata[getclrkey[0]][0];
    return (
      <React.Fragment>
        <div className="area_round_holder">
          <div className="area_round_selectable">{this.loadrounds()}</div>
          <div className="areachart_area_container">
            <Arearecharts
              topstackclr={catadataclr.income}
              downstackclr={catadataclr.expense}
              data={this.state.areadata}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
