import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let { headerName } = this.props;
    return <header className="form-group col-sm-3">{headerName}</header>;
  }
}
