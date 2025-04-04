import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let { footerName } = this.props;

    return <footer className="col-sm-3">{footerName}</footer>;
  }
}
