import React from 'react';
import Icon from '@material-ui/core/Icon';
import './style.scss';

const Globalsearch = (props) => {

    const { handlefilter,data } = props;

    const handlechange = (evnt) => {
        let clndata = [...data];
        let newval = clndata.filter((items,inx)=>{
            for(const keys in items){
             let keyval = items[keys].toLowerCase();
                if(keyval.indexOf(evnt.target.value.toLowerCase())!==-1){
                    return items;
                }
            }
        });
        handlefilter(newval);
    }

    return (
        <>
            <div className="Global_srch_wrapper">
                <span className="srch_icn"><Icon className="matreial_srch_icn">search</Icon></span>
                <input className="srch_box" name="fltr_field" placeholder="Search" onChange={(e)=>handlechange(e)}/>
            </div>
        </>
    )
}

export default Globalsearch;