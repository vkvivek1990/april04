import {React,useEffect} from 'react';
import './style.scss';
import Cartview from './Cartview';

const Cartviewcomp = props => {
    console.log(props);
    debugger
    const { allProducts, allLabels, selTransId } = props;

    useEffect(()=>{

    },[]);

    return (
        <>
            <div className="Status_view_container">
                <Cartview allProducts={allProducts} allLabels={allLabels} transId={selTransId} />
            </div>
        </>
    )
}

export default Cartviewcomp;
