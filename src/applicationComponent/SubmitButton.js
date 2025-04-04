import React from "react";
import { connect } from "react-redux";
import { Icons } from "./Icons/Icons.js";

class Submit extends React.Component {
  render() {
    let {
      name,
      onClick,
      formName,
      state,
      icon,
      serviceType,
      error,
      disabled,
      classbtn,
    } = this.props;

    //console.log("------>", getFormSyncErrors(formName)(state));

    return (
      <button
        disabled={disabled}
        id={serviceType}
        type="button"
        className={`${classbtn} btn nextBtn`}
        onClick={(e) => onClick(serviceType)}
      >
        {icon && Icons(icon)}
        {name}
      </button>
    );
  }
}
const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
