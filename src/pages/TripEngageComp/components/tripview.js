import React,{useState,useEffect} from "react";
import './style.scss';
import Icon from "@material-ui/core/Icon";
import Dndcomp from '../../../components/DnDcomp';
import AlertDialogSlide from "../../../components/dialogbox";
import Selectcomp from "../../../components/Selectcomp";
import ToastComponent from "../../../applicationComponent/ToastComponent";
import { isEqual } from "lodash";

const catakeys = {"SCTR":"Sub-Contractor","IND":"Industry","TPA":"Transport Agent","WP":"Water Plant","VEH":"Vechile","DB":"Delivery Boy","DR":"Driver"}
const Tripengageview = (props) => {

    const [options, setdrpoptions] = useState(null),
          [selectedOption, setselcoption] = useState(null),
          [cataboxData, setcataboxData] = useState(null),
          [alldatalist, setalldatalist] = useState(null),
          [opendialog, setopendialog] = useState(false),
          [dialogtitle,setdialogtitle] = useState(""),
          [grpnameval,setgrpnameval] = useState(""),
          [dialogmessage,setdialogmessage] = useState(""),
          [showdialog,setshowdialog] = useState(false),
          [dialogtype,setdialogtype] = useState("");


    const handleChange = (selectedOption, name) => {      
            let custmdata = props.boxdata[selectedOption.orginalkey].map((item,inx)=>{
                let newobj = {};
                newobj.id = item+inx;
                newobj.content = item.name;
                newobj.category = selectedOption.orginalkey;
                newobj.orginalid = item.id;
                return newobj;
            });
            setselcoption(selectedOption);
            setcataboxData(custmdata);
    };

    const resetdialog = () => {
        setdialogmessage("");
        setdialogtype("");
        setshowdialog(false);
      }

    const handlegroupcraetion = (formdata) => {
        props.setTripEngage(formdata)
        .then((res)=>{
            if(res === "success"){
                setdialogmessage("Group Created Successfully");
                setdialogtype("success");
                setshowdialog(true);
                setTimeout(()=>{
                    resetdialog();
                },4000);
            }
            else{
                setdialogmessage(res);
                setdialogtype("error");
                setshowdialog(true);
                setTimeout(()=>{
                    resetdialog();
                },4000);
            }
        })
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
            if(!isEqual(alldatalist,props.boxdata)){  
                let newArr = [];
                let keydata = Object.keys(props.boxdata);
                keydata.map((data, indx)=>{
                    let newObj = {};
                        newObj.value = catakeys[data];
                        newObj.label = catakeys[data];
                        newObj.orginalkey = data;
                        if(!(newArr.filter((dx)=>dx.label===newObj.label).length)) {
                            newArr.push(newObj);
                        }

                    return data;
                });
                setdrpoptions(newArr);
                handleChange(newArr[0]);
                setalldatalist(props.boxdata);
            }
        },[props.dropdownoptions,props.boxdata]);

    return (
        <>
        <ToastComponent 
        header = { false } 
        message={dialogmessage} 
        headText={"Status"} 
        messageType={dialogtype} 
        show={showdialog}
        />
            <div className="trip_engage_container">
                <div className="trip_category_header">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="trip_header_screen">
                                <Icon className="search_header_icon">departure_board</Icon>
                                <span className="search_box_title">Group Creation</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="select_box_holder">
                                <span className="trip_select_txt">Please select the catagory</span>
                                    <div className="trip_select_box">
                                        <Selectcomp
                                            options={options}
                                            onChange={handleChange}
                                            value={selectedOption}
                                            isSearchable={true}
                                            maxlength={5}
                                        />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                {cataboxData ? <Dndcomp data={cataboxData} handlegroupcraetion={handlegroupcraetion}/> : <div className="No_rcrd">No Record Found!</div>}
            </div>
        </>
    )
}

export default Tripengageview;
 

