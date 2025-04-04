import { actionAddProductField,actionUpdateAccordian,actionUpdateGridResult } from "../actions/add.product.action";

const data = {
        formfields : [],
        gridfields: [],
}

export default (state = {data,rowdata:[],formName:"Addproduct_form",formTitle:"Add Product",srchaccrdn:false}, action) => {
    switch (action.type) {
      case actionAddProductField:
        return {
          ...state,
          data:action.payLoad,
        };
        case actionUpdateGridResult:
              return {
                ...state,
                rowdata: action.payLoad ? action.payLoad : action.ProductList,
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