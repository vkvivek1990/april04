import { serviceCallThunk } from "../service-call-thunk";
export const action_trip_product_mapping = "action/trip_product_mapping";


export const trip_product_mapping = (payLoad) => {
  console.log("payLoad-------->", payLoad);
  return {
    type: action_trip_product_mapping,
    payLoad,
  };
};



export const onLoad = (transaction_id) => {
  return async (dispatch, getState) => {
    try {
      const trip_product_mapping_config = {
        headers: {
          "Content-Type": "application/json",
        },
        url: `https://etab-db-001.herokuapp.com/v1/agency/tl_trip/transaction_id/${transaction_id}`,
        method: "GET"
      }
      return await dispatch(serviceCallThunk(trip_product_mapping_config, trip_product_mapping));
    } catch (err) {
      throw err;
    }
  }
}

