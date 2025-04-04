import React from 'react';
import './style.scss';
import Icon from '@material-ui/core/Icon';

export default class Legendcomp extends React.Component{

    loadlegends = () => {
        let alldt = [];
        let spltdata = null;
        let keynames = null;
        if(this.props.data.quotes){
             alldt = [...this.props.data.quotes];
        }
        else if(this.props.data.Paramclr){
             alldt = [...this.props.data.Paramclr];
        }
        else if(this.props.data){
            alldt = [...this.props.data];
        }
        
        if(alldt.length !== 1){
            spltdata = alldt.splice(alldt.length-1,1);
            keynames = Object.keys(spltdata[0]);
        }
        else{
            keynames = Object.keys(alldt[0]);
        }
        return keynames.map((items,index)=>{
            return (
                <li className="legend_items">
                    {this.props.data.Paramclr ? <span className="legend_box" style={{"background":alldt[0][items]}}></span>:<span className="legend_box" style={{"background":spltdata[0][items]}}></span>}
                    <span className="legend_name">{items}</span>
                </li>
            )
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="legend_container">
                    <ul className="legend_holder">
                        {this.loadlegends()}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}