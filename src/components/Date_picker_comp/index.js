import React, { Component } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { Icons } from "../../applicationComponent/Icons/Icons.js";
import ReactTooltip from "react-tooltip";
import "./style.scss";
var moment = require("moment");
moment().format();

const Datepicker = props => {

    const {singleDatePicker,timePicker,name,label,getselecteddate,dateviewformat} = props;

    const handleCallback = (start, end, label, timePicker, singleDatePicker) => {
        let startdate = "";
        let enddate = "";
    
        if (timePicker && singleDatePicker) {
          startdate = moment(start).format("DD/MM/YYYY hh:mm:ss");
          getselecteddate(startdate); 
        } else if (timePicker && !singleDatePicker) {
          startdate = moment(start).format("DD/MM/YYYY hh:mm:ss");
          enddate = moment(end).format("DD/MM/YYYY hh:mm:ss");
          let newobj = {};
          newobj.from = startdate;  
          newobj.to = enddate;
          getselecteddate(newobj);
        } else if (!timePicker && singleDatePicker) {
          startdate = moment(start).format("DD/MM/YYYY");
          getselecteddate(startdate);
        } else if (!timePicker && !singleDatePicker) {
          startdate = moment(start).format("DD/MM/YYYY");
          enddate = moment(end).format("DD/MM/YYYY");
          let newobj = {};
          newobj.from = startdate;
          newobj.to = enddate;
          getselecteddate(newobj);
        }
    };

    return (
        <>
            <div className="input-group dateinput" data-tip data-for={name}>
                <span className="cal_icn_hldr">
                    <i className="glyphicon">{Icons("event")}</i>
                </span>
                <ReactTooltip
                    id={name}
                    place="top"
                    effect="solid"
                    event="mouseenter"
                    eventOff="mouseleave click"
                >
                    {label}
                </ReactTooltip>
                <DateRangePicker
                    initialSettings={{
                    singleDatePicker,
                    timePicker,
                    showDropdowns:false,
                    autoApply: true,
                    //autoUpdateInput: true,
                    locale: {
                        format: dateviewformat,
                        cancelLabel: "Clear",
                    },
                    }}
                    onCallback={(start, end, label) =>
                    handleCallback(start, end, label, timePicker, singleDatePicker)
                    }
                >
                    <input
                        className="form-control input"
                        defaultValue=""
                        value=""
                        placeholder={label}
                        id={name}
                        name={name}
                    />
                </DateRangePicker>
            </div>
        </>
    )

}

Datepicker.defaultProps = {
    dateviewformat:"DD/MM/YYYY"
}

export default Datepicker;

