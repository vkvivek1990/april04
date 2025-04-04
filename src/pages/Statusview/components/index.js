import {React,useEffect} from 'react';
import './style.scss';
import Productsview from './Statusview';

const Statusviewcomp = props => {
    const { selectedoptn: dropdownoptions,boxdata} = props;

    useEffect(()=>{

    },[]);

    return (
        <>
            <div className="Status_view_container">
                <Productsview dropdownoptions={dropdownoptions} boxdata={boxdata} />
            </div>
        </>
    )
}

export default Statusviewcomp;