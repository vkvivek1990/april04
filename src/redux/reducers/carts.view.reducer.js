import { actionProductsViewField, actionUpdateAccordian, actionUpdateAllProducts } from "../actions/carts.view.action";
import { actionUpdateViewProduct } from "../actions/carts.product.action";

import { actionUpdateGridResult } from "../actions/registration.action";

const data = {
    allProducts : [],
    gridfields: [],
}

export default (state = {data,rowdata:[],formName:"Viewproduct_form",formTitle:"View Product",srchaccrdn:false}, action) => {
    switch (action.type) {
      case actionProductsViewField:
        return {
          ...state,
          ...action.payLoad,
        };
        case actionUpdateViewProduct:
        return {
          ...state,
          viewData: action.payLoad,
        };

        case actionUpdateAllProducts: 
            return {
                ...state,
                ...action.payLoad,
            }
        case actionUpdateGridResult:
              return {
                ...state,
                rowdata: action.payLoad,
              };
        case actionUpdateAccordian:
                return {
                  ...state,
                  srchaccrdn: action.payLoad,
                };
      default:
        return state;
    }
  };