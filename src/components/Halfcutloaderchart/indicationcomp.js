import React from 'react';
import './style.scss';
import Icon from '@material-ui/core/Icon';

export default class Indicationcomp extends React.PureComponent{

    loaddata = () => {
        let fulldata = [...this.props.data];
        let spltdt = fulldata.splice(fulldata.length-1,1);
        return fulldata.map((items)=>{
            return (<li className="Indicator_items">
                     <span className="Indicator_icons"><Icon className="Indic_icon">{items.iconName}</Icon></span>
                     <span className="Indicator_label">{items.group}</span>
                   </li>)
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="Indicatorcomp_container">
                    <ul className="Indicator_holder">
                        {this.loaddata()}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}