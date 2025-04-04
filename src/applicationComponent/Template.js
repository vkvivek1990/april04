import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import { Loader } from "./Loader";

export default class Template extends React.Component {
  constructor(props) {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.props.input.onChange(value);
  }

  render() {
    let { children, header, footer } = this.props;
    return (
      <div className="form-group">
        {header && <Header headerName={"Header Part"} />}
        <div>{children}</div>
        {footer && <Footer footerName={"Footer Part"} />}
      </div>
    );
  }
}
