import React from 'react';
import './style.scss';
import Icon from '@material-ui/core/Icon';

export default class Boxtypecomp extends React.Component{
    constructor(props){
        super(props);
    }

    loaddata = () => {
        let alldata = [...this.props.data];
        let spltclr = alldata.splice(alldata.length-1,1);
        return alldata.map((items)=>{
            return (
                <li className="Boxcomp_items">
                    <div className="Boxcomp_inner_box" style={{"background":spltclr[0]["group"]}}>
                        <Icon className="Boxcomp_inner_icn">{items.iconName}</Icon>
                    </div>
                    <div className="Boxcomp_inner_box" style={{"background":spltclr[0]["Needed"]}}>
                        <span className="Boxcomp_inner_txt">{items.needed}</span>
                        <span className="Boxcomp_inner_txt_small">Needed</span>
                    </div>
                    <div className="Boxcomp_inner_box" style={{"background":spltclr[0]["Arranged"]}}>
                        <span className="Boxcomp_inner_txt">{items.arranged}</span>
                        <span className="Boxcomp_inner_txt_small">Arranged</span>
                    </div>
                    <div className="Boxcomp_inner_box" style={{"background":spltclr[0]["yet to do"]}}>
                        <span className="Boxcomp_inner_txt">{items.ytd}</span>
                        <span className="Boxcomp_inner_txt_small">Yet To Do</span>
                    </div>
                </li>
            )
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="Boxcomp_container">
                    <ul className="Boxcomp_holder">
                        {this.loaddata()}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

