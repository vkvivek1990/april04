import React from "react";
import Icon from "@material-ui/core/Icon";
import "./style.scss";
import isEqual from "lodash.isequal";
import AlertDialogSlide from "../dialogbox";
import { Allfieldpsloader } from "./Allfieldsholder";
import Table from "../../pages/Tablescreen/components/Tablescreen";
import ToastComponent from "../../applicationComponent/ToastComponent";
import FormFieldRender from "../../formFieldRendering";
import * as alasql from "alasql";
import XLSX from "xlsx";

alasql.utils.isBrowserify = false;
alasql.utils.global.XLSX = XLSX;

export default class SearchGridComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opendialog: false,
      dialogtitle: "",
      passovercomp: null,
      popupdata: null,
      columns: [],
      allData: [],
      selectedTemp: {},
      editfields: [],
      initialValues: {},
      dialogmessage: "",
      showdialog: false,
    };
  }

  getallfieldsselection = () => {
    this.setState({
      opendialog: true,
      dialogtitle: "Search Field Settings",
      passovercomp: Allfieldpsloader,
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

  handleGridrefresh = () => {
    let formName = this.props.formName;
    this.props.submitRegistration(formName, this.state.selectedTemp.value);
  };

  applyfields = (Appliedfields) => {
    this.setState({ columns: Appliedfields }, () => {
      this.onclose();
    });
  };

  resetdialog = () => {
    this.setState({ showdialog: false, dialogmessage: "" });
  };

  handlerowedit = (editedrow) => {
    //debugger;
    let formfields = [...this.props.formfields];
    let editfields = [];
    let gridcolumns = Object.keys(editedrow.values);
    formfields.map((item) => {
      if (gridcolumns.includes(item.field_nm)) {
        editfields.push(item);
      }
      return item;
    });
    this.setState({
      opendialog: true,
      dialogtitle: "Edit Fields",
      passovercomp: FormFieldRender,
      editfields,
      initialValues: editedrow.values,
    });
  };

  handlerowdelete = (deletedrow) => {
    this.props.deleteactn(deletedrow).then((res) => {
      if (Array.isArray(res.payLoad)) {
        this.setState(
          { dialogmessage: "Product Deleted Successfully", showdialog: true },
          () => {
            setTimeout(() => {
              this.resetdialog();
            }, 3000);
          }
        );
      }
    });
  };

  downLoadOption = () => {
    alert(123);
    //console.log(data);

    // alasql('SELECT regn_number AS [Registration Number], vin AS [Vin Number], obu_id AS [OBU ID], nullCheck(alert_type_name) AS [Alert Type Name],' +
    // 'nullCheck(severity) AS [Severity], nullCheck(start_location) AS [Start Location], getExcelDatetime(start_timestamp_utc) AS [Start Timestamp],' +
    // 'nullCheck(end_location) AS [End Location], getExcelDatetime(end_timestamp) AS [End Timestamp], nullCheck(alert_info_1) AS [Alert Info 1],' +
    // 'nullCheck(alert_info_2) AS [Alert Info 2], nullCheck(alert_info_3) AS [Alert Info 3] ' +
    // 'INTO XLSX("Fleet_Alerts", {headers:true}) FROM ?', [downloadData]);

    //  alasql('SELECT fullName AS [Name], gender AS [Gender], email AS [Email ID], fullAddress AS [Address], ctry_cd.value AS [Country Code] '+
    //   'INTO XLSX("Fleet_Alerts", {headers:true}) FROM ?', [data]);

    alasql(
      "SELECT fullName AS [Name], gender AS [Gender], email AS [Email ID], fullAddress AS [Address], [{ctry_cd.value}] AS [Country Code] " +
        'INTO XLSX("Fleet_Alerts", {headers:true}) FROM ?',
      [this.props.rowdata]
    );

    // var data1 = [
    //   {
    //      a: 'test',
    //      b: [
    //          {c:'test1', d: 'test2'},
    //          {c:'test2', d: 'test1'}]
    //     },
    //    {
    //      a: 'testB',
    //      b: [
    //          {c:'test3', d: 'test4'},
    //          {c:'test5', d: 'test6'}]
    //     }
    //   ];

    //   var res = alasql('SEARCH / AS @p b / CLONEDEEP() SET(a=@p->a) \
    //      INTO XLSX("restest390a.xlsx",{headers:true}) FROM ?',[data1])
  };

  static getDerivedStateFromProps(props, state) {
    if (props.selectedTemplate) {
      if (
        !isEqual(props.gridfields, state.allData) ||
        !isEqual(props.selectedTemplate, state.selectedTemp)
      ) {
        let datafields = [...props.gridfields];
        let fitereddatas = datafields.filter((items) => {
          return items.template_name.includes(props.selectedTemplate.value);
        });

        //  props.updateSelectedTemplate(temparr[0]);
        return {
          columns: fitereddatas,
          allData: datafields,
          selectedTemp: props.selectedTemplate,
        };
      } else {
        return null;
      }
    } else {
      if (!isEqual(props.gridfields, state.allData)) {
        let datafields = [...props.gridfields];
        return {
          columns: datafields,
          allData: datafields,
        };
      } else {
        return null;
      }
    }
  }

  formFieldOnChange = (changedata) => {
    //console.log(changedata,"changedata");
  };

  render() {
    return (
      <>
        <ToastComponent
          header={false}
          message={this.state.dialogmessage}
          headText={"Status"}
          messageType={"success"}
          show={this.state.showdialog}
        />

        <div className="search_grid_holder">
          <div className="grid_box_holder">
            <div className="row">
              <div className="col-md-6">
                <div className="grid_header_oprions_leftside">
                  <ul className="grid_option_holder">
                    {this.props.rowselectfeature && (
                      <li className="option_items">
                        <span className="selected_items">
                          {this.props.rowselectedcount !== 0 && (
                            <span
                              className="selected_rows"
                              title={this.props.rowselectedcount}
                            >
                              {this.props.rowselectedcount}
                            </span>
                          )}
                          <Icon className="selected_rows_cnt_icn">
                            verified
                          </Icon>
                        </span>
                      </li>
                    )}
                    {this.props.rowselectfeature && (
                      <li className="option_items">
                        <span
                          className={
                            this.props.selectedrowdata.length !== 0
                              ? "clear_select_items"
                              : "clear_select_items disable"
                          }
                          onClick={(e) =>
                            this.props.updateshowselectedRow(
                              !this.props.showselectrow
                            )
                          }
                        >
                          <Icon className="clear_selected_items">
                            clear_all
                          </Icon>
                          <span className="clear_items">
                            {!this.props.showselectrow
                              ? "Show Selected Rows"
                              : "Show All Rows"}
                          </span>
                        </span>
                      </li>
                    )}
                    {this.props.filterfeature && (
                      <li className="option_items">
                        <span className="clear_filter_items_wrraper">
                          <Icon className="clear_filter_items">
                            layers_clear
                          </Icon>
                          <span className="clear_filter">Clear Filter</span>
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="grid_header_oprions_rightside">
                  <ul className="grid_option_holder">
                    <li className="option_items">
                      <span
                        className={
                          this.props.rowdata.length !== 0
                            ? "Refresh_box"
                            : "Refresh_box disable"
                        }
                        onClick={(e) => this.handleGridrefresh()}
                      >
                        <Icon className="clear_filter_items">refresh</Icon>
                        <span className="Refresh_grid">Refresh</span>
                      </span>
                    </li>
                    <li className="option_items">
                      <span
                        className={
                          this.props.rowdata.length !== 0
                            ? "download_grid_items"
                            : "download_grid_items disable"
                        }
                        onClick={(e) => this.downLoadOption()}
                      >
                        <Icon className="clear_filter_items">
                          file_download
                        </Icon>
                        <span className="download_grid">Download</span>
                      </span>
                    </li>
                    {this.props.groups && (
                      <li className="option_items">
                        <span
                          className="search_setting_holder"
                          onClick={(e) => this.getallfieldsselection()}
                        >
                          <Icon className="serach_setting_icon">
                            {" "}
                            construction{" "}
                          </Icon>
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid_table_holder">
            <Table
              {...this.props}
              currcolumn={this.state.columns}
              handlerowedit={this.handlerowedit}
              handlerowdelete={this.handlerowdelete}
            />
          </div>
        </div>
        {this.state.dialogtitle === "Search Field Settings" && (
          <AlertDialogSlide
            open={this.state.opendialog}
            dialogtitle={this.state.dialogtitle}
            dialogbody={this.state.passovercomp}
            groups={this.props.groups}
            formfields={this.props.gridfields}
            selectedTemp={this.props.selectedTemplate}
            handleClose={this.onclose}
            class="searchclass"
            iconname="engineering"
            applyfields={this.applyfields}
          />
        )}
        {this.state.dialogtitle === "Edit Fields" && (
          <AlertDialogSlide
            open={this.state.opendialog}
            dialogtitle={this.state.dialogtitle}
            dialogbody={this.state.passovercomp}
            formFields={this.state.editfields}
            form={"Edit_form"}
            handleClose={this.onclose}
            class="editformclass"
            iconname="engineering"
            applyfields={this.applyfields}
            initialValues={this.state.initialValues}
            submittitle={"Save"}
            submiticon={"save"}
            onChange={this.formFieldOnChange}
          />
        )}
      </>
    );
  }
}
