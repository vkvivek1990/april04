import React, { useEffect, useState } from 'react';
import Icon from '@material-ui/core/Icon';
import Globalsearch from '../../../components/Globalsearch';
import Selectcomp from "../../../components/Selectcomp";
import Datepicker from "../../../components/Date_picker_comp";
import Orderlistbox from "../../../components/Order_listbox_comp";
import { isEqual, cloneDeep } from "lodash";
import moment from 'moment';
import './style.scss';

const Productsview = (props) => {
    const [currstatus, setvurrstatus] = useState("pending"),
          [options, setdrpoptions] = useState(null),
          [selectedOption, setselcoption] = useState(null),
          [boxlistdata, setboxlistdata] = useState(null),
          [filteredlist, setfilteredlist] = useState(null);

    const handlestatuscata = (currstatus) => {
        setvurrstatus(currstatus);
        handleStatusUpdate(currstatus);
    }

    const handleStatusUpdate = (status) => {
        // console.log(status);
        // console.log(props);
        let bxData = cloneDeep(props.boxdata), curact = [];
        curact = bxData && bxData.length && bxData.filter((data)=> data.status === status);
        setboxlistdata(curact);
    }

    const handlefilter = (changedval) => {
        setfilteredlist(changedval);
    }

    const handleChange = (selectedOption, name) => {
        setselcoption(selectedOption);        
        //console.log(selectedOption);
        let bcList = props.boxdata;
        let selData = bcList && bcList.length ? bcList.filter((data)=> data.productName === selectedOption.value) : [];
        selData = selectedOption.value === "All" ? bcList : selData;
        setboxlistdata(selData);
    };

    const handleDateChange = (dateval) => {
        console.log(dateval);
        let dVal = dateval;
        if(dVal && dVal.from && dVal.to) {
            var from = dVal.from.split("/");
            dVal.from = new Date(from[2], from[1] - 1, from[0]);
            var to = dVal.to.split("/");
            dVal.to = new Date(to[2], from[1] - 1, to[0])
        }
        console.log(dVal);
        let bxData = cloneDeep(props.boxdata), curact = [];
        curact = bxData && bxData.length && bxData.filter((data)=> data.orderOn && data.orderOn.split(' -')[0] && new Date(data.orderOn.split(' -')[0]) && new Date(data.orderOn.split(' -')[0]) >= new Date(dVal.from) && new Date(data.orderOn.split(' -')[0]) <= new Date(dVal.to));
        setboxlistdata(curact);
    }


    useEffect(()=>{
        if(!isEqual(options,props.dropdownoptions)){
            if(props.dropdownoptions){
                let dropvalues = props.dropdownoptions.map((items)=>{
                    let newobj = {};
                    newobj.label = items;
                    newobj.value = items;
                    return newobj;
                });
                setdrpoptions(dropvalues);
            }
        }
        if(!isEqual(boxlistdata,props.boxdata)){  
            setboxlistdata(props.boxdata);
            let newArr = [];
            newArr.push({label: "All", value: "All"});
            props.boxdata && props.boxdata.length && props.boxdata.map((data, indx)=>{
                let newObj = {};
                    newObj.value = data.productName;
                    newObj.label = data.productName;
                     
                    if(!(newArr.filter((dx)=>dx.label===newObj.label).length)) {
                        newArr.push(newObj);
                    }
                return data;
            });
            setdrpoptions(newArr);
        }
    },[props.dropdownoptions,props.boxdata]);


    return (
        <div className="statusViewContainer">
            <div className="statusView">
                <div className="statusBar" >
                    <div className="row">
                        <div className="col-md-12">
                            <div className="statusHeaderBar">
                                <div className={"statusHead"+" "+currstatus}>
                                    <p className={currstatus==="pending"?"statusBlk active":"statusBlk"} onClick={(e)=>handlestatuscata('pending')}>Pending</p>
                                    <p className={currstatus==="active"?"statusBlk active":"statusBlk"} onClick={(e)=>handlestatuscata('active')}>Active</p>
                                    <p className={currstatus==="history"?"statusBlk active":"statusBlk"} onClick={(e)=>handlestatuscata('history')}>History</p>
                                </div>
                            </div>
                            <div className="statusFieldHolder">
                                <div className="col-md-6">
                                    <Globalsearch handlefilter={handlefilter} data={boxlistdata}/>
                                </div>
                                <div className="statusview_right_holder">
                                    <div className="col-md-2">
                                        <div className="date_picker_wrapper">
                                            <Datepicker
                                                singleDatePicker={false}
                                                timePicker={false}
                                                name={"view_order_datepicker"}
                                                label={"Order Date"}
                                                getselecteddate={handleDateChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="status_drop_container">
                                            <Selectcomp
                                                options={options}
                                                onChange={handleChange}
                                                value={selectedOption}
                                                isSearchable={true}
                                                maxlength={5}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="view_bow_wrapper">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="statusBody">
                   {boxlistdata  && boxlistdata.length ? <Orderlistbox data={filteredlist?filteredlist:boxlistdata} compview={"gridview"}/>:<div className="no_order_found text-center text-FFF"><p className="font-16 margin-30">Orders Not Found</p></div>}
                </div>
            </div>
        </div>
    )
}


export default Productsview;
