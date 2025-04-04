import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { serviceEndPointUrl, serviceEndPointUrl_V1, serviceEndPointUrl_V2 } from "../../../util/util";
//import ModalPopup from '../../../applicationComponent/Modalpopup';
// import Icon from '@material-ui/core/Icon';
// import { serviceEndPointUrl, serviceEndPointUrl_V1, serviceEndPointUrl_V2 } from "../../../util/util";
// import { cloneDeep } from "lodash";
// import './style.scss';
import { useDispatch } from "react-redux";
// import ToastComponent  from '../../../applicationComponent/ToastComponent';
import AlertDialogSlide from "../../../components/dialogbox";
import Icon from "@material-ui/core/Icon";


const Productslistview = (props) => {
    console.log(props);
    const [datas, setDatas] = useState([]), 
        [transDatas, setTransDatas] = useState([]), 
        [erralrt, seterralert] = useState(true),
        [currlist,setcurrlist] = useState('rolelist'),
        [currdialogtitle, setcurrdialogtitle] = useState("Transaction Details"),
        [opendialog, setopendialog] = useState(false);
        const dispatch = useDispatch();
        const history = useHistory();
        //alert(111);
    
        const onclose = () => {
            setopendialog(false);
        };

        

        const handlepopup = (boxtype) => {
            let getroles = [];
            // switch(boxtype){
            //   case "rolelist": {
            //     getroles = [...rolelist];
            //     break;
            //   }
            //   case "groupbox": {
            //     getroles = [...grplist];
            //     break;
            //   }
            //   case "catabox": {
            //     getroles = [...catalist];
            //     break;
            //   }
            // }
            return (
              <div className="login_role_selc_box">
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Product ID</th>
                            <th>Product Category</th>
                            <th>Weight</th>
                            <th>Qunatity</th>
                            <th>Vehicle Type</th>
                            <th>Vehicle Per KM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transDatas && transDatas.length && transDatas.map((data, index)=>{
                                return <tr>
                                        <td>{ index+1 }</td>
                                        <td>{ data.product.product_id } </td>
                                        <td>{ data.product.product_category }</td>
                                        <td>{ data.product.weight } </td>
                                        <td>{ data.quantity } </td>
                                        <td>{ data.vehicle_type }</td>
                                        <td>{ data.vehicle_price_per_km } </td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
               </div>
            );
          };

    useEffect(() => {
        //alert(11);
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
        getAllTransactions();
        
    }, [dispatch])

    const getAllTransactions= ()=>{
        //alert(1);
        fetch(serviceEndPointUrl_V1+'/agency/tl_transaction_order', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.access_token,
                'active_role': localStorage.active_role,
                'group_id': '3',
                'active_role_id': localStorage.Catagory_id
            },
        }).then(response => response.json())
        .then(response => {
            console.log(response);
            if(response && response.status === 'success' && response.data && response.data.length) {
                // transObj.transId = response.data[0].transaction_id;
                setDatas(response.data);
            }
            debugger
            
            //dispatch({type:'action/UPDATE_TRANSACTION_ID', payLoad: transObj});
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleClickTransaction = (data, status) =>{
        debugger
        console.log(data);
        console.log(status);
        let method = "";
        if(status === 'loadTrans' ) {
            method = 'GET';
        }
        //data.transaction_id
        fetch(serviceEndPointUrl_V1+'/agency/tl_transaction_order/transport_quotation/transaction_id/'+ data.transaction_id, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.access_token,
                'active_role': localStorage.active_role,
                'group_id': localStorage.Group_id,
                'active_role_id': localStorage.Catagory_id
            },
        }).then(response => response.json())
        .then(response => {
            console.log(response);
            if(response && response.status === 'success' && response.data && response.data.length) {
                console.log(response);
                setopendialog(true);
                setTransDatas(response.data);
                //console.log(121);
                //alert(123);
            }
            debugger
            //dispatch({type:'action/UPDATE_TRANSACTION_ID', payLoad: transObj});
        }).catch((error) => {
            console.log(error);
        });
    }


  
    const handleClick=(data, status)=>{
        debugger
        console.log(data);
        console.log(status);
        let datas = {}, method = 'PUT';
            datas.status = "contractor_submitted_product_approval";
            datas.products = [];
        
        if(localStorage.active_role === 'CTR') {
            datas.status = "contractor_submitted_product_approval";
        } else if(localStorage.active_role === 'WP') {
            datas.status = "product_approval_approved";
            datas.water_plant_own_transport = "N";
        } else if(localStorage.active_role === 'TPA') {
            datas.status = "transport_agent_approved";
        }

        if(status === 'loadTrans' ) {
            method = 'GET';
        }

        fetch(serviceEndPointUrl_V1+'/agency/tl_transaction_order/transaction_id/'+ data.transaction_id, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.access_token,
                'active_role': localStorage.active_role,
                'group_id': localStorage.Group_id,
                'active_role_id': localStorage.Catagory_id
            },
            body: method === 'GET' ? '' : JSON.stringify(datas) 
        }).then(response => response.json())
        .then(response => {
            console.log(response);
            if(response && response.status === 'success' && response.data && response.data.length) {
                // transObj.transId = response.data[0].transaction_id;
                if(method==='GET') {
                    setTransDatas(response.data);
                } else if(status==='approve' || status==='reject' ) {
                    alert(response.status);
                } //setDatas(response.data);
            }
            debugger
            
            //dispatch({type:'action/UPDATE_TRANSACTION_ID', payLoad: transObj});
        }).catch((error) => {
            console.log(error);
        });
    }

    

    return (
        <div className="ProductListContent">
            {/* <ModalPopup /> */}
            <div className="contentBoxRight">
                <div className="RightBox text-right">
                    <p className="Contents"><span><button className="approveBut">Approve</button></span> <span><button  className="rejectBut">Reject</button></span></p>
                </div>
            </div>
            <div className="productListView">
                <table className="productListTable">
                    <thead>
                        <tr>
                            <th><input type="checkbox" name="checkbox" /></th>
                            <th>S.No</th>
                            <th>Transaction ID</th>
                            <th>Created By</th>
                            <th>Created Date</th>
                            <th>Current Status</th>
                            <th>GST Amount</th>
                            <th>Water Plant Status</th>
                            <th>Total Amount</th>
                            { 
                                props.pageRef!=='viewApproved' && 
                                <th>Action</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        datas && datas.length && datas.map((data, indx)=>{
                            
                            let rData = <tr>
                                <td><input type="checkbox" name="checkbox" /></td>
                                <td>{indx+1}</td>
                                <td><span className="trans" onClick={()=>{handleClickTransaction(data, 'loadTrans')}}>{data.transaction_id}</span></td>
                                <td>{data.created_by}</td>
                                <td>{data.created_on}</td>
                                <td>{data.current_status}</td>
                                <td>{data.gst_amount}</td>
                                <td>{data.water_plant_status}</td>
                                <td>{data.total_amount}</td>
                                
                                {
                                    props.pageRef!=='viewApproved' ? 
                                <td><span className="buttonClass approveOpt" onClick={()=>handleClick( data, 'approve')}>Approve</span> <span className="buttonClass rejectOpt"  onClick={()=>handleClick(data, 'reject')}>Reject</span></td> : null
                                }
                            </tr>

                            if(data.current_status.trim() === 'industry submitted' && localStorage.active_role === 'CTR' && props.pageRef!=='viewApproved') {
                                return rData;
                            } else if(data.current_status.trim() === 'contractor_submitted_product_approval' && localStorage.active_role === 'WP' && props.getRefPage!=='viewApproved') {
                                return rData;
                            } else if(localStorage.active_role === 'CTR' && props.pageRef==='viewApproved' && data.current_status.trim()==="product_approval_approved" ) {
                                return rData;
                            } else if(localStorage.active_role === 'TPA' && data.current_status.trim()==="product_approval_approved" ) {
                                return rData;
                            } else {
                                return null;
                            }
                            //return (data.current_status.trim() === 'industry submitted')  ? rData : null;
                            //return rData;
                        })
                    }
                    </tbody>

                </table>
                
            </div>
            <AlertDialogSlide
        open={opendialog}
        dialogtitle={currdialogtitle}
        dialogbody={(e) => handlepopup(currlist)}
        handleClose={(e) => onclose()}
        class="loginclass"
        iconname="engineering"
        //handleApply={(e) => handleapply()}
        applydisable={erralrt}
        canceldisable={false}
        //applybtn={"Submit"}
        //cancelbtn={"Cancel"}
      />
        </div>
    )
}


export default Productslistview;
