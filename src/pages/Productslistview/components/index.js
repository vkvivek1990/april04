import {React,useEffect} from 'react';
import './style.scss';
import Productslistview from './Productslistview';

const Productslistviewcomp = props => {

    const { allProducts, allLabels, getRefPage } = props;

    useEffect(()=>{

    },[]);

    return (
        <>
            <div className="Status_view_container">
                <Productslistview allProducts={allProducts} allLabels={allLabels} pageRef={getRefPage} />
            </div>
        </>
    )
}

export default Productslistviewcomp;