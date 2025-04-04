import React, { useEffect, useState } from 'react';
import Icon from '@material-ui/core/Icon';
//import '' from '../';
//import {  } from "../";
import JSONData from './makeData.json';
import './style.scss';

const Ordercomp =  () => {
    return (
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

    )
}
