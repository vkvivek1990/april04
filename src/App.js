import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import Register from "./Register";
import FormPreviewController from "./pages/registration/controller/form_preview.controller";
import ExcelReader from "./excelReader/Excel.js";
import Dashboardcomp from "./components/Dashboardcomp";
import TutorialComp from "./components/TutorialComp/index.js";
import RegistrationForm from "./pages/registration/registration";
import SearchController from "./pages/searchenquiry/controller/searchcontroller";
import Viewproduct from "./pages/Viewproduct/controller/Viewproduct.controller";
import Statusview from "./pages/Statusview/controller/Statusview.controller";
import Tripengageview from "./pages/TripEngageComp/controller/tripengage.controller";
import TripCreation from "./pages/TripEngageComp/controller/tripcreation.controller";
import TransportMapping from "./pages/TripEngageComp/controller/transport_mapping.controller";
import TripProductMapping from "./pages/TripEngageComp/controller/trip_product_mapping.controller";
import AddproductController from "./pages/Addproduct/controller";
import Productsview from "./pages/Productsview/controller/Productsview.controller";
import Productslistview from "./pages/Productslistview/controller/Productslistview.controller";

import Cartview from "./pages/Cartview/controller/Cartview.controller";

import Header from "./components/header";

//import Table from "./table/index.js";
import TLUSER from "./pages/registration/controller/tl_user.controller";
import TLWP from "./pages/registration/controller/tl_water_plant.controller";

import TLCONTRACTOR from "./pages/registration/controller/tl_contractor.controller";
import TLSUBCONTRACTOR from "./pages/registration/controller/tl_sub_contractor.controller";
import TLDELIVERYBOY from "./pages/registration/controller/tl_delivery_boy.controller";
import TLTRANSPORTAGENT from "./pages/registration/controller/tl_transport_agent.controller";
import TLDRIVER from "./pages/registration/controller/tl_driver.controller";
import TLVEHICLE from "./pages/registration/controller/tl_vehicle.controller";
import TLINDUSTRY from "./pages/registration/controller/tl_industry.controller";
import LoginformController from "./pages/Login/Controller/Login.controller";

import "./style.scss";
import TLTUTOR from "./pages/registration/controller/tl_tutor.controller.js";
import TLCORPORATE from "./pages/registration/controller/tl_corporate.controller.js";
import TLCOLLEGE from "./pages/registration/controller/tl_college.controller.js";
import Adminmodel from "./pages/adminmodel/adminmodel.js";

const getcomp = {
  dashboard: Dashboardcomp,
  login: LoginformController,
  enquiry: SearchController,
  addproduct: AddproductController,
  profile: RegistrationForm,
  productsview: Productsview,
  productslistview: Productslistview,
  viewproduct: Viewproduct,
  previewscreen: FormPreviewController,
  statusview: Statusview,
  cartview: Cartview,
  creategroup: Tripengageview,
  tripview: Tripengageview,
  createTrip: TripCreation,
  transportMapping: TransportMapping,
  tutorialPage: TutorialComp,
  adminModel: Adminmodel,
};
export class App extends React.Component {
  constructor(props) {
    super();
  }

  handlecomp = (path) => {
    const Newcomp = getcomp[path];
    return path !== "login" ? (
      <>
        <Header />
        <Newcomp />
      </>
    ) : (
      <>
        <Newcomp />
      </>
    );
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path="/preview" render={(e) => this.handlecomp("preview")} />
            <Route path="/excelReader" component={ExcelReader} />
            <Route path="/profile" render={(e) => this.handlecomp("profile")} />
            <Route path="/tlUser" component={TLUSER} />
            <Route path="/tlTutor" component={TLTUTOR} />
            <Route path="/tlCorporate" component={TLCORPORATE} />
            <Route path="/tlCollege" component={TLCOLLEGE} />
            <Route path="/tlWaterPlant" component={TLWP} />
            <Route path="/tlContractor" component={TLCONTRACTOR} />
            <Route path="/tlSubContractor" component={TLSUBCONTRACTOR} />
            <Route path="/tlDeliveryBoy" component={TLDELIVERYBOY} />
            <Route path="/tlTransportAgent" component={TLTRANSPORTAGENT} />
            <Route path="/tlDriver" component={TLDRIVER} />
            <Route path="/tlVehicle" component={TLVEHICLE} />
            <Route path="/tlIndustry" component={TLINDUSTRY} />
            <Route path="/carts" render={(e) => this.handlecomp("cartview")} />
            <Route
              path="/createTrip"
              render={(e) => this.handlecomp("createTrip")}
            />
            <Route path="/transportMapping" component={TransportMapping} />
            <Route path="/trip" component={TripProductMapping} />
            <Route
              path="/products"
              render={(e) => this.handlecomp("productsview")}
            />
            <Route
              path="/productslistview"
              render={(e) => this.handlecomp("productslistview")}
            />
            <Route
              path="/viewproduct"
              render={(e) => this.handlecomp("viewproduct")}
            />
            <Route
              path="/statusview"
              render={(e) => this.handlecomp("statusview")}
            />
            <Route
              path="/creategroup"
              render={(e) => this.handlecomp("creategroup")}
            />
            <Route path="/tlWp" component={TLWP} />
            <Route path="/tlContractor" component={TLCONTRACTOR} />
            <Route path="/login" render={(e) => this.handlecomp("login")} />
            <Route
              path="/dashboard"
              render={(e) => this.handlecomp("dashboard")}
            />
            <Route
              path="/tutorial"
              render={(e) => this.handlecomp("tutorialPage")}
            />
            <Route path="/enquiry" render={(e) => this.handlecomp("enquiry")} />
            <Route
              path="/addproduct"
              render={(e) => this.handlecomp("addproduct")}
            />
            <Route
              path="/admin_model"
              render={(e) => this.handlecomp("adminModel")}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    current_page:
      state.register.current_page_type &&
      state.register.current_page_type["current_page"],
  };
}

export default connect(mapStateToProps)(App);

// export default App;
