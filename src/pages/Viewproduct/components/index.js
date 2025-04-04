import {React,useEffect} from 'react';
import './style.scss';
import Viewproduct from './Viewproduct';

const Viewproductcomp = props => {
    console.log(props);
    const { selectedData, transactn_ID } = props;
debugger
    useEffect(()=>{
    },[]);

    return (
        <>
            <div className="Status_view_container">
                <Viewproduct selectedData={selectedData} transactionID={transactn_ID} />
            </div>
        </>
    )
}

export default Viewproductcomp;