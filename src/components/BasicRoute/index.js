import React from "react";
import Icon from "@material-ui/core/Icon";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

const BasicRoute = (props) => {
  const menufromlocal = localStorage.getItem("menulist");
  //const menulist = menufromlocal ? JSON.parse(menufromlocal) : props.menulist;
  const menulist = [
    {
      path: "tutorial",
      iconname: "groups",
      menuname: "Tutorial",
    },
    {
      path: "dashboard",
      iconname: "groups",
      menuname: "About Us",
    },
    {
      path: "about",
      iconname: "groups",
      menuname: "Team",
    },
    {
      path: "about",
      iconname: "money",
      menuname: "Pricing",
    },
    {
      path: "about",
      iconname: "handshake",
      menuname: "Partners",
    },
    {
      path: "login",
      iconname: "login",
      menuname: "Login",
    },
    {
      path: "profile",
      iconname: "how_to_reg",
      menuname: "Register",
    },
  ];
  const history = useHistory();

  const loadmenulist = () => {
    if (menulist) {
      let alldata = [...menulist];
      return alldata.map((items, pos) => {
        return (
          <Route
            path={items.path}
            children={() => (
              <li key={pos} className="Menu_list">
                <Link to={items.path}>
                  <span className="Menu_item_holder">
                    <Icon className="Menu_icon">{items.iconname}</Icon>
                  </span>
                  <span className="Menu_item_txt">{items.menuname}</span>
                </Link>
              </li>
            )}
          />
        );
      });
    } else {
      //return history.push('/login');
    }
  };

  return (
    <React.Fragment>
      <div className="Menu_container">
        <ul className="Menu_holder">{loadmenulist()}</ul>
      </div>
    </React.Fragment>
  );
};

export default BasicRoute;
