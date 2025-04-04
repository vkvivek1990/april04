import React, {useEffect,useState} from 'react';
import './allfields.scss';

export const Allfieldpsloader = (props) => {
    const { formfields,selectedTemp,groups } = props;
    const [grplist, setGroups] = useState([]);
    const [allfields, setallfields] = useState([]);
    const [currfields, setcurrfields] = useState([]);
    const [maxselection,setmaxselection] = useState(false);
    const [applyable,setapplyable] = useState(false);

    const loadgroups = () => {
          return grplist.map((item,inx) => {
                return (
                    <li key={inx} className={item.active?"field_grp_list active":"field_grp_list"} onClick={(e)=>handlechangegrp(item.grpname)}>
                        <span className="field_grp_txt">{item.grpname}</span>
                    </li>
                )
            })
    }

    useEffect(()=>{
        let fieldsdata = formfields.filter((item)=>{ return item.template_name.includes(selectedTemp.value) });
        let grparr = groups[selectedTemp.value]; 
        let grpobj = [{grpname:'All',active:true}];
        grparr.map((item) => {
            let newobj = {};
            newobj.grpname = item;
            newobj.active = false;
           return grpobj.push(newobj);
        });
        fieldsdata.map((item) => {
            if(item.template_name.includes(selectedTemp.value)){
                item.checkselected = true;
            }
            else
            {
                item.checkselected = false;
            }
            return item;
        });
        setallfields(fieldsdata);
        setcurrfields(fieldsdata);
        setGroups(grpobj);
    },[]);

    const handlechangegrp = (grpname) => {
        let grparr = [...grplist];
        let alldata = [...allfields];
        let filterdata = null;
        grparr.map((item) => {
            if(item.grpname === grpname){
                item.active = true
            }
            else{
                item.active = false
            }
            return item;
        });
        if(grpname !== "All"){
            filterdata = alldata.filter((item) => {
                return item.field_group.includes(grpname);
            });
        }
        else{
            filterdata = alldata;
        }
        setGroups(grparr);
        setcurrfields(filterdata);
    }

    const handlechangecheckbox = (event,selcname) => {
        let currdata = [...currfields];
        currdata.map((items)=>{
            if(items.field_nm === selcname){
                items.checkselected = !items.checkselected;
            }
            return items;
        });
        setcurrfields(currdata);
    }

    const loadallfeilds = () => {
        let alldata = [...currfields];
        return alldata.map((item) => {
            return (
                <li className="all_fields_select_list">
                   <label class="checkbox_container">
                        <input type="checkbox" checked={item.checkselected} onChange={(e)=>handlechangecheckbox(e,item.field_label)} />
                        <span class="checkmark"></span>
                    </label>
                    <span className="check_box_label" onClick={(e)=>handlechangecheckbox(e,item.field_nm)} >{item.field_label}</span>
                </li>
            )
        })
    }

    const handleselectall = (selcetshow) => {
        let fullfields = [...allfields];
        let grparr = [...grplist];
        grparr.map((item) => {
            if(item.grpname === "All"){
                item.active = true
            }
            else{
                item.active = false
            }
            return item;
        });
        fullfields.map((item) => {
            if(selcetshow === "selectall"){
                item.checkselected = true;
            }
            else if(selcetshow === "clearall"){
                item.checkselected = false;
            }
            return item;
        });
        setGroups(grparr);
        setcurrfields(fullfields);
    }

    const handleApplyfields = () => {
        let fullfields = [...allfields];
        let selecteditems = fullfields.filter((item) => {
            return item.checkselected === true;
        });
        if(selecteditems.length === 0){
            setapplyable(true);
        }
        else if(selecteditems.length <= 10){
            setapplyable(false);
            setmaxselection(false);
            props.applyfields(selecteditems);
        }
        else{
            setmaxselection(true);
        }
        
    }

    const handleclosefields = () => {
        props.handleClose();
    }

    return (
        <>
            <div className="fields_overall_container">
                <div className="overall_search_area_holder">

                </div>
                <div className="fields_groups_holder">
                    <div className="row">
                        <div className="col-md-10">
                             {grplist.length ? <ul> {loadgroups()} </ul> : <div className="No_fnd_txt"> No Record Found </div>}
                        </div>
                    <div className="col-md-2">
                        <span className="allfield_select_all" onClick={(e)=>handleselectall('selectall')}> Select All </span>
                        <span className="allfield_select_all" onClick={(e)=>handleselectall('clearall')}> Clear All </span>
                    </div>
                    </div>
                </div>
                <div className="allfields_box_area_holder">
                    {currfields.length ? <ul> {loadallfeilds()} </ul> : <div className="No_fnd_txt"> No Record Found </div>}
                </div>
                <div className="allfields_box_footer">
                {maxselection && <span className="No_fnd_txt">Field Selection does not exceed 10. So please select Less than or only 10 Fields.</span>}
                {applyable && <span className="No_fnd_txt">Please Select Any one of the Fields.</span>}
                <button onClick={(e)=>handleApplyfields()} className="success_btn">
                    Apply
                  </button>
                  <button onClick={(e)=>handleclosefields()} className="cancel_btn">
                    Cancel
                  </button>
                </div>
            </div>
        </>
    )
}
