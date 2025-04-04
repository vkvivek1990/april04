import React from 'react';
import './style.scss';
import Icon from '@material-ui/core/Icon';

export default class Piewithchainchart extends React.Component{

    getwidth = (setclr,arrcnt) => {
        let catastyle = {
            "background":setclr,
            "height":"25px"
        }
        let middlecicleheight = 185;
        catastyle["height"] = Math.floor(middlecicleheight/arrcnt)+"px";
        
        return catastyle;
    }

    loadcatagories = () => {
        let overalldata = [...this.props.data.quotes];
        let getcatadata = overalldata.splice(overalldata.length-1,1);
        let catalist = Object.keys(getcatadata[0]);
        return catalist.map((data,inx)=>{
            return (
                <li key={inx} className="piewithchain_middle_circle_catagories" style={this.getwidth(getcatadata[0][data],catalist.length)}>
                </li>
            )
        });
    }

    loadcataDatas = () => {
        let overalldata = [...this.props.data.quotes];
        let getcatadata = overalldata.splice(overalldata.length-1,1);
        return overalldata.map((data,inx)=>{
            return (
                <li key={inx} className="chain_list">
                    <div className="list_container">
                     <span className="list_cont_icn_holder">
                        <Icon className="list_container_icn">departure_board</Icon>
                       </span>
                        <span className="list_name" title={data.Name}>{data.Name}</span>
                        <ul className="list_holder">
                            {this.innerlistdata(data,getcatadata)}
                        </ul>
                    </div>
                    <svg width="200" height="100%">
                        {
                             this.loadsvgpath(inx)
                        }
                    </svg>
                </li>
            )
        })
    }

    loadsvgpath = (position) => {
        if(position === 0){
            return <path d='M45,20 L25 50' stroke='#e9860b' stroke-width='2'></path>
        }
        else if(position === 1){
            return <path d='M80,15 L60 25' stroke='#e9860b' stroke-width='2'></path>
        }
        else if(position === 2){
            return <path d='M105,15 L75,15' stroke='#e9860b' stroke-width='2'></path>
        }
        else if(position === 3){
            return <path d='M80,15 L65 10' stroke='#e9860b' stroke-width='2'></path>
        }
        else if(position === 4){
            return <path d='M45,15 L30,0' stroke='#e9860b' stroke-width='2'></path>
        }
    }

    innerlistdata = (datas,dataclr) => {
        let catalist = Object.keys(dataclr[0]);
        return catalist.map((dat,index)=>{
            let inerstyle = {
                "background":dataclr[0][dat]
            }
            return (
                <li key={index} className="inner_list_items" style={inerstyle}>{datas[dat]}</li>
            )
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="piewithchain_container">
                  <div className="piewithchain_circle_holder">
                    <div className="piewithchain_inner_cicle_holder">
                        <div className="inner_txt">
                            <span className="inner_total_cnt">{this.props.data.totalcount}</span>
                            <span className="inner_total_txt">Total Orders</span>
                        </div>
                        <div className="piewithchain_innercircle">
                            <ul className="piewithchain_middle_circle_holder">
                                {this.loadcatagories()}
                            </ul>
                        </div>
                        <div className="curve_holder"></div>
                    </div>
                    <div className="piewithchain_container_box">
                            <ul className="piewithchain_chainlist_holder">
                                {this.loadcataDatas()}
                            </ul>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}