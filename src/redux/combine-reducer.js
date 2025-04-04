import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./reducers/authorization.reducer";
import register from "./reducers/registration.reducer";
import formField from "./reducers/form.field.reducer";
import searchEnquiry from "./reducers/search.enquiry.reducer";
import addProduct from "./reducers/add.product.reducer";
import statusViewProduct from "./reducers/status.view.reducer";
import productsView from './reducers/products.view.reducer';
import viewProduct from './reducers/view.product.reducer';
import TripEngage from './reducers/trip.engage.reducer';
import TripCreation from './reducers/trip.creation.reducer';
import TransportMapping from './reducers/transport.mapping.reducer';
import TripProductMapping from './reducers/trip.product.mapping.reducer';
import LoginData from './reducers/logindata.reducer';

export default combineReducers({
  form: formReducer,
  auth,
  register,
  formField,
  searchEnquiry,
  addProduct,
  productsView,
  viewProduct,
  statusViewProduct,
  TripEngage,
  TripCreation,
  TransportMapping,
  TripProductMapping,
  LoginData
});
