import { actionProductsViewField, actionUpdateAccordian, actionViewProduct, actionViewTransactionId } from "../actions/view.product.action";
import { actionUpdateGridResult } from "../actions/registration.action";

const data = {
    viewProduct : [],
    gridfields: [],
}

export default (state = {data,rowdata:[],formName:"Viewproduct_form",formTitle:"View Product",srchaccrdn:false}, action) => {
    switch (action.type) {
      case actionProductsViewField:
        return {
          ...state,
          ...action.payLoad,
        };
        case actionViewProduct: 
            return {
                ...state,
                rowdata: action.payLoad,
        };
        case actionViewTransactionId: 
            return {
                ...state,
                rowdata: action.payLoad,
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