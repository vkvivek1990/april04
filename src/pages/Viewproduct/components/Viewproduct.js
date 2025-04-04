import React, { useEffect, useState } from 'react';
import Icon from '@material-ui/core/Icon';
import { serviceEndPointUrl, serviceEndPointUrl_V2, serviceEndPointUrl_V1 } from "../../../util/util";
import JSONData from './makeData.json';
import './style.scss';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ToastComponent  from '../../../applicationComponent/ToastComponent';
//import { showLoader, hideLoader } from "../../../redux/actions/registration.action";

//import { showLoader, hideLoader } from "./actions/registration.action";


const Viewproduct =  (props) => {
    console.log(props);

    const history = useHistory();

    const [datas, setDatas] = useState([]),
        [qty, setQty] =  useState(1),
        [toastOpt, setToastOpt] =  useState({}),
        [orderTyp, setOrderTyp] = useState("wateronly"),
        [allDatas, setAllDatas] = useState([]),
        [datasLabel, setDatasLabel] = useState([]), 
        [datasLabelDesc, setDatasLabelDesc] = useState([]), 
        [search, setSearch] = useState(''), 
        [stars, setStars] = useState([1, 2, 3, 4, 5]), 
        [vals, setVals] = useState([]), 
        [priceList, setPriceList] = useState([
            {
                "key": "Under50",
                "value": <span>Under &#x20B9;50</span>,
                "isActive": true                
            },
            {
                "key": "50to75",
                "value": <span>&#x20B9;50 - &#x20B9;75</span>,
                "isActive": false

            },
            {
                "key": "75to100",
                "value": <span>&#x20B9;50 - &#x20B9;70</span>,
                "isActive": false
            },
            {
                "key": "100to200",
                "value": <span>&#x20B9;100 - &#x20B9;200</span>,
                "isActive": false
            },
            {
                "key": "Over200",
                "value": <span>Over &#x20B9;200</span>,
                "isActive": false
            }
        ]);
        const dispatch = useDispatch();

    useEffect(() => {
        // console.log(JSONData);
        // if(JSONData && JSONData.code===200 && JSONData.message === "Success" && JSONData.data) {
        //     //alert(1);
        //     setDatas(JSONData.data);
        //     setDatasLabel(JSONData.data.labelFlagProductList);
        //     setDatasLabelDesc(JSONData.data.labelFlagDescripList);
        //     if(JSONData.data.labelFlagProductList && JSONData.data.labelFlagProductList.length) {
        //         JSONData.data.labelFlagProductList.sort(function (a, b) {
        //             return a.displayOrder - b.displayOrder;
        //         });
        //         setDatasLabel(JSONData.data.labelFlagProductList);
        //     }
        // }   
    })

    const handleClickAddCart = (data, status)=> {
        //alert(1);

        console.log(data);
        let transObj = {};
        let nObj = {
            "products": [],
            "status": status
        };
        
        if(data && data.product_id) {
            let myObj = {};
                myObj.product_id = data.product_id;
                //myObj.purchase_type = orderTyp;
                myObj.purchase_type = "water only";
                myObj.quantity = data.quantity;
                nObj.products.push(myObj);
        }

        let sDt = props.selectedData, method = "POST", serviceURL = serviceEndPointUrl_V1+'/agency/tl_transaction_order';

        if(props && props.transactionID) {
            method = "PUT";
            serviceURL = serviceEndPointUrl_V1+'/agency/tl_transaction_order/transaction_id/'+props.transactionID;
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
                setToastOpt(toastOp);

                if(method === 'POST' && data.transaction_id) {
                    transObj.transId = data.transaction_id;
                    dispatch({type:'action/UPDATE_TRANSACTION_ID', payLoad:transObj});
                } else {
                    dispatch({type:'action/VIEW_PRODUCT_CONTENT', payLoad:respData});
                } history.push("/carts");

                //let viewProduct = respData;
                // dispatch({type:'action/VIEW_PRODUCT_CONTENT', payLoad:respData})
                // //dispatch(respData);
                // if(respData.ProductList && respData.ProductList.length) {
                //     setDatas(respData);
                //     setAllDatas(respData);
                //     if(respData.labelFlagDescripList && respData.labelFlagDescripList.length) {
                //         setDatasLabelDesc(respData.labelFlagDescripList);
                //     } if(respData.labelFlagProductList && respData.labelFlagProductList.length) {
                //         setDatasLabel(respData.labelFlagProductList);
                //     }
                // }
            }

        })
        .catch((error) => {
            console.log(error);
        });
    }

    function handleChangeInput(e) {
        //alert(1);
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const setOrderValue = (vv) =>{
        console.log(vv);
        setOrderTyp(vv);
    }

    function handleChangeCheckBox(e) {
        let vVals = vals;
        if(e.target.checked && vVals.indexOf(e.target.value)===-1) {
            vVals.push(e.target.value);
            setVals(vVals);
        } else {
            if(vals.indexOf(e.target.value) >-1) {
                let eTv = vals.indexOf(e.target.value);
                vals.splice(eTv, 1);
                setVals(vals);
            }
        }
        console.log(vals);
        console.log(e.target.value);
    }

    const updateQty=(opr)=>{
        console.log(qty);
        let newQty = qty;
        console.log(opr);
        if(opr === '+') {
            newQty++; 
        } else if(opr === '-' && qty!==1) {
            newQty--;
        } setQty(newQty);
    }

    useEffect(()=>{
        //dispatch(showLoader());
        console.log(props);
        let sDt = props.selectedData;
        let data = {
            "userId" : sDt.user_id,
            "groupId": sDt.group_id,
            "productId": sDt.product_id,
            "ctryCd": "IN",
            "langCd": "EN"
        };
        fetch(serviceEndPointUrl_V2+'/wsm/inventory/viewProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        }).then(response => response.json())
        .then(response => {
            //dispatch(hideLoader());
            console.log(response);
            if(response && response.status === 200 && response.data) {
                let respData = response.data;
                //let viewProduct = respData;
                dispatch({type:'action/VIEW_PRODUCT_CONTENT', payLoad:respData})
                //dispatch(respData);
                if(respData.ProductList && respData.ProductList.length) {
                    setDatas(respData);
                    setAllDatas(respData);
                    if(respData.labelFlagDescripList && respData.labelFlagDescripList.length) {
                        setDatasLabelDesc(respData.labelFlagDescripList);
                    } if(respData.labelFlagProductList && respData.labelFlagProductList.length) {
                        setDatasLabel(respData.labelFlagProductList);
                    }
                }
            }

        })
        .catch((error) => {
            //dispatch(hideLoader());
            console.log(error);
        });
    }, [dispatch]);


    const handleChangeQry=(evt)=>{
        setQty(evt.target.value);
    }

    return (
        <div className="SomeProductContent">
            {
                toastOpt && toastOpt.show && 
                <ToastComponent header = { false } message={'Request Submitted Successfully'} headText={"Status"} messageType={'success'} show={toastOpt.show}/>
            }
            
            <div className="viewProduct">
            {
                datas.ProductList && datas.ProductList.length && datas.ProductList.map((data, indx)=>{
                    return <div className="row">
                                <div className="col-md-2">
                                    <div className="myBlock">
                                        <div className="productBlock">
                                        <div className="logoFunc text-center">
                                                    <div className="imageLogo">
                                                        <img src={data.main_img} alt={data.product_title} />
                                                    </div>                                                
                                                </div>
                                                <div className="logoFunc text-center">
                                                    <div className="imageLogo">
                                                        <img src={data.other_img} alt={data.product_title} />
                                                    </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="contClass">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="myBlock">
                                                <div className="logoFunc text-center">
                                                    <div className="imageLogo">
                                                        <img src={ data.main_img } alt={data.product_title} />
                                                    </div>                                                
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-4">
                                            <div className="stockDesc">
                                                <p className="text-385c91 "><strong>{ data.product_title } { data.product_sub_title }</strong></p>
                                                <p className="text-385c91 font-15"><strong>{ data.sub_title }</strong></p>
                                                { 
                                                    datasLabel && datasLabel.length && datasLabel.map((datasLbl, indx)=>{
                                                        return <div className="d-flex">
                                                            <p className="text-385c91 flex-1 font-16">{ datasLbl.label } </p>
                                                            <p className="ss text-bold text-385c91 font-16"> { data[datasLbl.key] }</p>
                                                        </div>
                                                    })
                                                }
                                                <div className="amountBlk">
                                        <p className="rupee text-bold text-c93e48 font-17">&#x20B9; <span className="text-bold text-1d488c">{ data.rate }</span></p>
                                    </div>
                                    <div className="ratingsBlk">
                                        <div className="d-flex">
                                            {/* <Icon className="font-25">star</Icon> */}
                                            <div className="flex-1">
                                            <div className="rate">
                                                {
                                                    stars && stars.length && stars.map((dStar, dIndx)=>{
                                                        let dVar = Number(dIndx)+1;
                                                        return <React.Fragment>
                                                            <input type="radio" id={'star' + dIndx+"_"+indx} name="rate" value={dIndx} checked={ dVar <= Number(data.selStar) ? true : false } disabled />
                                                            <label htmlFor={"star"+dIndx+"_"+indx} title={dIndx}>{dIndx} star</label>
                                                        </React.Fragment>
                                                    })
                                                }
                                            </div>
                                        </div>
                                            <div className="text-1d488c"><p className="font-16">{data.ratings} ratings</p></div>
                                        </div>
                                    </div>
                                    
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="orderTyp">
                                                <p className="text-bold">Order Type</p>
                                                 
                                                <div className="btn-group d-flex" data-toggle="buttons">
                                                
                                                    <label className={'btn ' + (orderTyp === "wateronly" ? "btn-success active" : "") + ' font-14'} onClick={()=>setOrderValue('wateronly')}>
                                                        <input type="checkbox" checked={ orderTyp === 'wateronly' ? true : false } value="wateronly" /> Water Only
                                                    </label>
                                                    <label className={'btn ' + (orderTyp === "waterwithcan" ? "btn-success active" : "") + ' font-14'} onClick={()=>setOrderValue('waterwithcan')}>
                                                        <input type="checkbox" checked={ orderTyp === 'waterwithcan' ? true : false } value="waterwithcan" /> Water with Can
                                                    </label>
                                                </div>
                                                <div className="d-flex marginTop-30">
                                                    <p className="qty"><strong>Quantity</strong></p>
                                                    <p className="btnFunc"><span className="minusBut bb-bx"><span className="minusCircle" onClick={()=>updateQty('-')}><Icon color="secondary" style={{fontSize: 22, verticalAlign: 'middle'}}>remove_circle</Icon></span></span> <span className="countVal bb-bx"><input type='number' value={qty} onChange={handleChangeQry}/> </span> <span className="plusBut bb-bx" onClick={()=>updateQty('+')}><Icon style={{ color: 'green', fontSize: 22, verticalAlign: 'middle' }}>add_circle</Icon></span></p>
                                                </div>
                                                <div className="butDetails marginTop-20">
                                                    <p className="butClass text-center"><span className="background-4aa2db viewBut" onClick={()=>handleClickAddCart(data, "Add To Cart")} ><Icon style={{marginRight: '5px'}}>shopping_cart</Icon>Add to Cart</span></p>
                                                </div>
                                                <div className="butDetails marginTop-20">
                                                    <p className="butClass text-center"><span className="background-4aa2db viewBut" onClick={()=>handleClickAddCart(data, "industry submitted")}><Icon style={{marginRight: '5px'}}>play_arrow</Icon>Buy Now</span></p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                })
            }
            {
                datas.ProductList && datas.ProductList.length && datas.ProductList.map((data, indx)=>{
                    return <div className="product_desc">
                            <div className="product_blk">
                                <p className="text-bold font-22  head_2">Product Description</p>
                                <p className=" ">{ data.product_description }</p>
                            </div>
                            
                            <div className="product_det paddingTop-20">
                                <p className="text-bold font-22  borderBottom head_2">Product Details</p>
                                <div className="det_blk">
                                    {
                                        datasLabelDesc && data && datasLabelDesc.length && datasLabelDesc.map((datasLbl, indx)=> {
                                            return <div className="d-flex  borderBottom paddingTop-6 " key={indx} >
                                                        <p className=" font-16 marginLeft-15">{ datasLbl.label } </p>
                                                        <p className="ss  font-16"> { data[datasLbl.key] }</p>
                                                    </div>
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                })
            }
            

                
                <div className="orderCont">
                    <div className="orderBlk">
                        <div className="d-flex orderMain">
                            <div className="nameBlk">
                                <p><input type="text" placeholder="Name" /></p>
                            </div>
                            <div className="numberBlk">
                                <p><input type="text" placeholder="Number" /></p>
                            </div>
                            <div className="addressBlk">
                                <p><input type="text" placeholder="Address" /></p>
                            </div>
                            <div className="bottolBlk d-flex">
                                <p><input type="text" placeholder="Bottol" /></p>
                                <div className="orderButBlk">
                                    <p className="butAction">Order Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="homeChk orderBlk">
                        <div className="homeChk">
                            <div className="d-flex">
                               <p className="marginRight-10"><input type="checkbox" name="home" value="Home" /> Home</p>
                               <p className="marginRight-10"><input type="checkbox" name="office" value="Office" /> Office</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Viewproduct;
