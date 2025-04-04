import { action_trip_product_mapping } from '../actions/trip.product.mapping.action';


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case action_trip_product_mapping:
      return {
        ...state,
        trip_product_mapping: action.payLoad
      }
    default:
      return state;
  }
};