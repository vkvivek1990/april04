import React from 'react';
import './style.scss';
import Icon from '@material-ui/core/Icon';

export default class Horizontalcomp extends React.Component{

    loaddata = () => {
        let lddatas = [...this.props.data];
        let spltclr = lddatas.splice(lddatas.length-1,1);
        return lddatas.map((items)=>{
            return (
            <li className="horizbar">
                <div className="horizbar_wrraper">
                    <span className="horizbar_inc_holder"><Icon className="horzi_icn">{items.iconName}</Icon></span>
                    {(items.exp_ls_mnth > 0) && <span className="horzibar_items" style={{"background":spltclr[0]["expire in > 30 days"]}}>{items.exp_ls_mnth}</span>}
                    {(items.exp_grt_mnth > 0) && <span className="horzibar_items" style={{"background":spltclr[0]["expire in < 30 days"]}}>{items.exp_grt_mnth}</span>}
                    {(items.dmgd_cans > 0) && <span className="horzibar_items" style={{"background":spltclr[0]["damaged cans"]}}>{items.dmgd_cans}</span>}
                    {(items.lost_cans > 0) && <span className="horzibar_items" style={{"background":spltclr[0]["lost cans"]}}>{items.lost_cans}</span>}
                </div>
            </li>
            )
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="horizontalbar_comp_container">
                    <ul className="horizontalbar_comp_holder">
                        {this.loaddata()}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}