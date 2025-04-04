import React from "react";
import { Icons } from "./Icons/Icons.js";

export const type = (type) => {
  type === "h2" && <h2>OR</h2>;
};

export default class HeaderTags extends React.Component {
  constructor(props) {
    super();
  }
  type = (type) => {
    return type === "h4" && <h4>OR</h4>;
  };

  render() {
    let {
      input,
      label,
      type,
      icon,
      meta: { touched, error, warning },
    } = this.props;

    return <div className="input-group">{this.type(type)}</div>;
  }
}

// export const InputText = ({
//   input,
//   label,
//   type,
//   meta: { touched, error, warning },
// }) => (
//   <div>
//     {console.log(touched)}
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type} />
//       {touched &&
//         ((error && <span>{error}</span>) ||
//           (warning && <span>{warning}</span>))}
//     </div>
//   </div>
// );
