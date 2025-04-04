import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.props.input.onChange(value);
  }

  render() {
    let { children, name } = this.props;
    return (
      <form name={name} className="form-group">
        {children}
      </form>
    );
  }
}
