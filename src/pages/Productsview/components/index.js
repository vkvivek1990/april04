import {React,useEffect} from 'react';
import './style.scss';
import Productsview from './Productsview';

const Productsviewcomp = props => {

    const { allProducts, allLabels } = props;

    useEffect(()=>{

    },[]);

    return (
        <>
            <div className="Status_view_container">
                <Productsview allProducts={allProducts} allLabels={allLabels} />
            </div>
        </>
    )
}

export default Productsviewcomp;