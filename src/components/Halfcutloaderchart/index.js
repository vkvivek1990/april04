import React from 'react';
import './style.scss';
import Icon from '@material-ui/core/Icon';

export default class Halfcutchart extends React.Component{

    getwidth = (paidt,ytpdata,clrarr,catagory) => {
        let Totalval = parseInt(paidt) + parseInt(ytpdata);
        let rtrnval = 0;
        let paidstyle = {
            "background": clrarr && clrarr.length && clrarr[0]["paid"],
            "width":"50%"
        };
        let ytpstyle = {
            "background": clrarr && clrarr.length && clrarr[0]["yet to pay"],
            "width":"50%"
        }
        let recivedstyle = {
            "background": clrarr && clrarr.length && clrarr[0]["recived"],
            "width":"50%"
        }
        let ytrstyle = {
            "background": clrarr && clrarr.length && clrarr[0]["yet to recive"],
            "width":"50%"
        }
        if(catagory === "paidcata"){
            rtrnval = Math.floor((paidt/Totalval)*100);
            if(paidt === 0 && ytpdata === 0){
                paidstyle["width"] = "50%";
                paidstyle["background"] = "#ccc";
            }
            else if(rtrnval === 0 && ytpdata !== 0){
                paidstyle["width"] = rtrnval+"%";
                paidstyle["display"] = "none";
            }
            else {
                paidstyle["width"] = rtrnval+"%";
            }
            return paidstyle;
        }
        else if(catagory === "ytpcata"){
            rtrnval = Math.floor((ytpdata/Totalval)*100);
            if(paidt === 0 && ytpdata === 0){
                ytpstyle["width"] = "50%";
                ytpstyle["background"] = "#ccc";
            }
            else if(rtrnval === 0 && paidt !== 0){
                ytpstyle["width"] = rtrnval+"%";
                ytpstyle["display"] = "none";
            }
            else {
                ytpstyle["width"] = rtrnval+"%";
            }
            return ytpstyle;
        }
        else if(catagory === "recivedcata"){
            rtrnval = Math.floor((paidt/Totalval)*100);
            if(paidt === 0 && ytpdata === 0){
                recivedstyle["width"] = "50%";
                recivedstyle["background"] = "#ccc";
            }
            else if(rtrnval === 0 && ytpdata !== 0){
                recivedstyle["width"] = rtrnval+"%";
                recivedstyle["display"] = "none";
            }
            else {
                recivedstyle["width"] = rtrnval+"%";
            }
            return recivedstyle;
        }
        else if(catagory === "ytrcata"){
            rtrnval = Math.floor((ytpdata/Totalval)*100);
            if(paidt === 0 && ytpdata === 0){
                ytrstyle["width"] = "50%";
                ytrstyle["background"] = "#ccc";
            }
            else if(rtrnval === 0 && paidt !== 0){
                ytrstyle["width"] = rtrnval+"%";
                ytrstyle["display"] = "none";
            }
            else {
                ytrstyle["width"] = rtrnval+"%";
            }
            return ytrstyle;
        }
    }

    loadleftdata = () => {
        let ldData = [...this.props.data];
        let getlastdata = ldData.splice(ldData.length-1,1);
        return ldData.map((data,inx)=>{
                return (
                <li key={inx} className="Halfcutchart_list_bar">
                    <span className="Halfcutchart_icn_holder">
                        <Icon className="Halfcutchart_list_icn">{data.iconName}</Icon>
                    </span>
                    <span className={data.paid !==0 && data.ytp === 0?"Halfcutchart_list_firsthalf brder_rad":"Halfcutchart_list_firsthalf"} title={data.paid !==0 ? data.paid : 0} style={this.getwidth(data.paid,data.ytp,getlastdata,"paidcata")}>
                        {data.paid !==0 ? data.paid : ""}
                    </span>
                    <span className={data.ytp !==0 && data.paid === 0?"Halfcutchart_list_secondhalf brder_rad":"Halfcutchart_list_secondhalf"}  title={data.ytp !==0 ? data.ytp : 0} style={this.getwidth(data.paid,data.ytp,getlastdata,"ytpcata")}>  
                        {data.ytp !==0 ? data.ytp : " "}
                    </span>
                </li>
                );
        });
    }

    loadrightdata = () => {
        let ldData = [...this.props.data];
        let getlastdata = ldData.splice(ldData.length-1,1);
        return ldData.map((data,inx)=>{
                return (
                <li key={inx} className="Halfcutchart_list_bar">
                    <span className={data.recived !==0 && data.ytr === 0?"Halfcutchart_list_firsthalf brder_rad":"Halfcutchart_list_firsthalf"} title={data.recived !==0 ? data.recived : 0} style={this.getwidth(data.recived,data.ytr,getlastdata,"recivedcata")}>
                        {data.recived !==0 ? data.recived : ""}
                    </span>
                    <span className={data.ytr !== 0 && data.recived === 0?"Halfcutchart_list_secondhalf brder_rad":"Halfcutchart_list_secondhalf"} title={data.ytr !==0 ? data.ytr : 0} style={this.getwidth(data.recived,data.ytr,getlastdata,"ytrcata")}>
                        {data.ytr !==0 ? data.ytr : ""}
                    </span>
                    <span className="Halfcutchart_icn_holder">
                      <Icon className="Halfcutchart_list_icn">{data.iconName}</Icon>
                    </span>
                </li>
                );
        });
    }

    archeightrender = (side) => {
        let ldData = [...this.props.data];
        ldData.splice(ldData.length-1,1);
        let totalperc = 0;
        let leftpaidtotal = 0;
        let leftytptotal = 0;
        let addedval = 0;
        if(side === "left"){
            ldData.map((data,inx)=>{
                leftpaidtotal += parseInt(data.paid);
                leftytptotal  += parseInt(data.ytp);
                return data;
            });
        }
        else if(side === "right"){
            ldData.map((data,inx)=>{
                leftpaidtotal += parseInt(data.recived);
                leftytptotal  += parseInt(data.ytr);
                return data;
            });
        }
        addedval = leftpaidtotal + leftytptotal;
        totalperc = Math.floor((leftytptotal/addedval)*100);
        if(totalperc <= 15){
            return "data_btm_to_tp topblwquarter"
        }
        else if(totalperc <= 40 && totalperc > 15){
            return "data_btm_to_tp topblwhalf"
        }
        else if(totalperc <= 50 && totalperc > 40){
            return "data_btm_to_tp tophalf"
        }
        else if(totalperc <= 75 && totalperc > 50){
            return "data_btm_to_tp topabvhalf"
        }
        else if(totalperc <= 90 && totalperc > 75){
            return "data_btm_to_tp topquarter"
        }
        else if(totalperc <= 99 && totalperc > 90){
            return "data_btm_to_tp topabquart"
        }
        else if(totalperc >= 100){
            return "data_btm_to_tp topfull"
        }
        else{
            return "data_btm_to_tp"
        }
    }

    render(){
        let ldData = [...this.props.data];
        let getlastdata = ldData.splice(ldData.length-1,1);
        let paidstyle = {
            "background": getlastdata && getlastdata.length && getlastdata[0]["paid"],
        };
        let ytpstyle = {
            "background": getlastdata && getlastdata.length && getlastdata[0]["yet to pay"],
        }
        let recivedstyle = {
            "background": getlastdata && getlastdata.length && getlastdata[0]["recived"],
        }
        let ytrstyle = {
            "background": getlastdata && getlastdata.length && getlastdata[0]["yet to recive"],
        }
        return (
        <React.Fragment>
                <div className="Halfcutchart_container">
                    <div className="Halfcutchart_left_side">
                        <ul className="Halfcutchart_leftbar_holder">
                            {this.loadleftdata()}
                        </ul>
                        <div className="Halfcutchart_left_arc_holder">
                            <div className="arc_front_side"></div>
                            <div className="arc_back_side">
                                <span className="data_tp_to_btm" style={paidstyle}></span>
                                <span className={this.archeightrender("left")} style={ytpstyle}></span>
                            </div>
                        </div>
                    </div>
                    <div className="Halfcutchart_right_side">
                    <div className="Halfcutchart_right_arc_holder">
                            <div className="arc_front_side"></div>
                            <div className="arc_back_side">
                                <span className="data_tp_to_btm" style={recivedstyle}></span>
                                <span className={this.archeightrender("right")} style={ytrstyle}></span>
                            </div>
                        </div>
                        <ul className="Halfcutchart_rightbar_holder">
                            {this.loadrightdata()}
                        </ul>
                    </div>
                </div>
        </React.Fragment>
        );
    }
}