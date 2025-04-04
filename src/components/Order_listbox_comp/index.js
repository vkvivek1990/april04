import React,{useEffect,useState} from 'react';
import Icon from '@material-ui/core/Icon';
import './style.scss';

const Orderlistbox = (props) => { 
    const {data} = props;

    const renderboxes = () => {
        return data.map((items,inx)=>{
            let Productid = items.orderId || items.transactionId;
            let orderdate = items.orderOn;
            let producticon = items.productIcon;
            let productname = items.productName;
            let productcount = items.productVloume;
            let paymentmode = items.paymentMode;
            let contactnumber = items.contactNumber;
            let contactaddress = items.contactAddress;
            let productprice = items.productprice;
            return (
                <div key={inx} className="order_list_box_holder">
                <div className="order_list_header">
                    <div className="list_header_left_side">
                        <span className="order_list_id">Order Id - <span className="order_id_num">{Productid}</span></span>
                        <span className="order_view_dtls">View Details</span>
                    </div>
                    <div className="list_header_right_side">
                        <span className="order_placed_date">Order Date - <span className="order_dt_data">{orderdate}</span></span>
                    </div>
                </div>
                <div className="order_product_icn_holder">
                    <span className="prdct_icn"><span className="order_icon_holder"><Icon>{producticon}</Icon></span><span className="product_name_data">{productname}</span><span className="prod_count">x{productcount}</span></span>
                    <span className="prdct_pymnt_type">Payment Type - <span className="prod_pay_type">{paymentmode}</span></span>
                </div>
                <div className="order_product_details">
                    <span className="order_product_more_dtls">Order Price - {productprice}</span>
                    <span className="order_product_more_dtls">Contact Number - {contactnumber}</span>
                    <span className="order_product_more_dtls">Contact Address - {contactaddress}</span>
                </div>
                <div className="order_list_box_footer">
                    <button className="order_reject_btn">Reject</button>
                    <button className="order_approve_btn">Approve</button>
                </div>
            </div>
            )
        })
    }

    return(
        <>
            {renderboxes()}
        </>
    )
}

export default Orderlistbox;