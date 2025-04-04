import React from 'react';
import Icon from '@material-ui/core/Icon';

export default class Treestructre extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {

        return (
            <React.Fragment>
                <div className="conatiner-fluid">
                    <div className="treeStructure_container">
                        <p>Hello 123</p>
                        <div className="treeparts">
                            <p></p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}