
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import makeData from './makeData.json';
import { serviceEndPointUrl, serviceEndPointUrl_V1, serviceEndPointUrl_V2 } from "../../../util/util";
import JSONData from './makeData.json';
import { cloneDeep } from "lodash";
import './style.scss';
import { useDispatch } from "react-redux";


const Cartsview =  (props) => {
    console.log(props);
    debugger
    console.log(makeData);
    const [datas, setDatas] = useState([]), 
        [cartLists, setCartLists] = useState([]),
        [datasLabel, setDatasLabel] = useState([]), 
        [search, setSearch] = useState(''), 
        [vals, setVals] = useState([]), 
        [productCont, setProductCont] =  useState([]),
        [priceList, setPriceList] = useState([
            {
                "key": "All",
                "value": <span>All</span>,
                "isActive": true              
            }, {
                "key": "Under50",
                "value": <span>Under &#x20B9;50</span>,
                "isActive": false              
            }, {
                "key": "50to75",
                "value": <span>&#x20B9;50 - &#x20B9;75</span>,
                "isActive": false

            }, {
                "key": "75to100",
                "value": <span>&#x20B9;50 - &#x20B9;70</span>,
                "isActive": false
            }, {
                "key": "100to200",
                "value": <span>&#x20B9;100 - &#x20B9;200</span>,
                "isActive": false
            }, {
                "key": "Over200",
                "value": <span>Over &#x20B9;200</span>,
                "isActive": false
            }
        ]);
    
        const dispatch = useDispatch();
        const history = useHistory();

    useEffect(() => {
//        console.log(JSONData);
        // if(JSONData && JSONData.code===200 && JSONData.message === "Success" && JSONData.data) {
        //     //alert(1);
        //     setDatas(JSONData.data);
        //     setDatasLabel(JSONData.data.labelFlagList);
        //     if(JSONData.data.labelFlagList && JSONData.data.labelFlagList.length) {
        //         JSONData.data.labelFlagList.sort(function (a, b) {
        //             return a.displayOrder - b.displayOrder;
        //         });
        //         setDatasLabel(JSONData.data.labelFlagList);
        //     }
        // }   
    })


    useEffect(()=>{
        let data = {
            "userId" : "10080",
            "groupId": "GRP1",
            "ctryCd":"IN",
            "langCd":"EN"
        };

        console.log(props);
        
        fetch(serviceEndPointUrl_V1+'/agency/tl_transaction_order/transaction_id/'+props.transId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.access_token,
                'active_role': 'IND',
                'group_id': '3',
                'active_role_id': '1700014'
            }
        }).then(response => response.json())
        .then(response => {
            let mD = response;
            console.log(mD);
            if(mD && mD.data && mD.data.length) {
                setCartLists(mD.data);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }, [dispatch]);

    function handleChangeInput(e) {
        //alert(1);
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const loadPriceRange=(data)=> {
        console.log(data);
    }

    useEffect( () => {
        let aP = props.allProducts, pTitle = [];
        if(aP && aP.length) {
            aP.map((data, indx)=>{
                pTitle.push(data.product_title);
                return data;
            })
        }
        pTitle = [...new Set(pTitle)];;
        setProductCont(pTitle);
        //setProductCont()
    }, [props.allProducts])


    const clickedBuyNow=()=>{
        let nObj = {
            "products": [],
            "status": "industry submitted",
        };

        if(cartLists && cartLists.length) {
            cartLists.map((data, indx)=>{
                let newObj = { };
                    newObj.product_id = data.product.product_id;
                    newObj.purchase_type = data.purchase_type;
                    newObj.quantity = data.qty;
                    nObj.products.push(newObj);
                return data;
            });

            let sDt = props.selectedData, method = "POST", serviceURL = serviceEndPointUrl_V1+'/agency/tl_transaction_order';

            if(props && props.transId) {
                method = "PUT";
                serviceURL = serviceEndPointUrl_V1+'/agency/tl_transaction_order/transaction_id/'+props.transId;
            }

            fetch(serviceURL, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'active_role': localStorage.active_role,
                    'group_id': 3,
                    'active_role_id': localStorage.group_id,
                    'Authorization': localStorage.access_token,
                },
                body: JSON.stringify(nObj) 
            }).then(response => response.json())
            .then(response => {
                console.log(response);
                if(response && response.status === 'success' && response.data) {
                    let respData = response.data;
                    //alert(respData);
    
                    let toastOp = {
                        header: false,
                        message: respData,
                        messageType: 'success',
                        show: true
                    }
                    //setToastOpt(toastOp);
                }
            }).catch((error) => {
                console.log(error);
            });

        }

    }


    return (
        <div className="CartProductContent">
            <div className="cartView">
                <div className="row">
                    <div className="col-md-8">
                        <div className="cartContainer myCart">
                            <div className="headBlock">
                                <p className="cartHead"><strong>My Cart ({cartLists.length})</strong></p>
                            </div>
                            <hr />
                            <div className="bodyBlock">
                                {
                                    cartLists && cartLists.length && cartLists.map((data, indx)=>{
                                        return <div className="row rowCnt">
                                        <div className="col-md-2">
                                            <div className="leftCont">
                                                <div className="myImg">
                                                    <img className="" src={ data.product.main_img } alt={ data.product.product_title } />
                                                </div>
                                                <p className="marginTop-10 myaddRemove"><span className="minusCircle">&#x2212;</span> <span className="countBox">{ data.quantity }</span> <span className="plusCircle">+</span></p>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="productDesc marginTop-15">
                                                <p className="font-16">{ data.product.product_title } &#8211; ({ data.product.product_sub_title })</p>
                                                <p className="text-b5b2b2 font-14">Order Type: { data.product.product_type }</p>
                                                <p className="text-b5b2b2 font-14">Owner: { data.prd_det_brand_owner }</p>
                                                <p className="text-b5b2b2 font-14">Amount: { data.product.rate }</p>
                                                <p className="text-b5b2b2 font-14">Service Fee: { data.product.service_fee }</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="removeCont  marginTop-15">
                                                <p className="font-14">Deposit Amount : 100</p>
                                                <p className="font-13 marginTop-15 removesaveLater">remove</p>
                                                <p className="font-13 marginTop-15 removesaveLater">SAVE For Later</p>
                                            </div>
                                        </div>
                                    </div>
                                    }) 
                                }
                                </div>


                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="priceContainer myCart">
                            <div className="headBlock">
                                <p className="cartHead"><strong>Price Details</strong></p>
                                <hr />
                            </div>
                            <div className="bodyBlock">
                                <div className="row priceRowCont">
                                    <div className="col-md-8">
                                        <p className="font-16">Price ({cartLists.length} items) </p>
                                        <p className="font-16">Discount </p>
                                        <p className="font-16">Delivery Charges </p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="font-16 text-right">&#x20B9;1,180</p>
                                        <p className="font-16 text-right">&#x20B9;-0180</p>
                                        <p className="font-16 text-right">FREE</p>
                                    </div>
                                    <div className="col-md-12 padding-0 totBlk">
                                        <div className="col-md-8">
                                            <p className="font-18 "><strong>Total Amount</strong></p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="font-18 text-right"><strong>&#x20B9;1000</strong></p>
                                        </div>
                                    </div>
                                    <p className="text-center font-16"><strong>You will save 30% on this order</strong></p>
                                </div>

                            </div>
                            <div className="footerBlock">
                                <p className="buynow text-center">
                                    <span className="" onClick={clickedBuyNow}>Buy Now</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Cartsview;
