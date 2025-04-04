import {React,useEffect} from 'react';
import './style.scss';
import Tripdataview from './tripview';

const Statusviewcomp = props => {
    const { selectedoptn: dropdownoptions,boxdata,getCatagoryFields,setTripEngage} = props;

    useEffect(()=>{
        getCatagoryFields("Trip_Engage");
    },[]);

    return (
        <>
            <div className="Status_view_container">
                <Tripdataview dropdownoptions={dropdownoptions} boxdata={boxdata} setTripEngage={setTripEngage}/>
            </div>
        </>
    )
}

export default Statusviewcomp;