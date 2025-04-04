import { actionProductsViewField, actionUpdateAccordian, actionUpdateAllProducts, actionUpdateTransactionId, actionUpdatePageReference } from "../actions/products.view.action";
import { actionUpdateViewProduct } from "../actions/view.product.action";

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
        case actionUpdateViewProduct:
        return {
          ...state,
          viewData: action.payLoad,
        };
        case actionUpdatePageReference: 
            return {
                ...state,
                ...action.payLoad,
            };
        case actionUpdateTransactionId: 
          return {
              ...state,
              ...action.payLoad,
        };

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