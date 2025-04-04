import { actionSearchEnquiryField,actionUpdatecurrentEnquiryField,actionUpdateSelectedTemplate,actionUpdateSelectedRowCount,actionUpdateAccordian,actionUpdateSelectedRow,actionUpdateShowSelectRow } from "../actions/search.enquiry.action";
import { actionUpdateGridResult } from "../actions/registration.action";

const data = {
        formfields : [],
        gridfields: [],
        templates : [],
        groups : []
}

export default (state = {data,currentfields:[],selectedTemplate:{},rowselectedcount:0,rowdata:[],selectedrowdata:[],formName:"Enquiry_form",formTitle:"Enquiry",srchaccrdn:false,showselectrow:false}, action) => {
    switch (action.type) {
      case actionSearchEnquiryField:
        return {
          ...state,
          data:action.payLoad,
        };
      case actionUpdatecurrentEnquiryField:
        return {
          ...state,
          currentfields: action.payLoad,
        };
        case actionUpdateSelectedTemplate:
          return {
            ...state,
            selectedTemplate: action.payLoad,
          };
          case actionUpdateSelectedRowCount:
            return {
              ...state,
              rowselectedcount: action.payLoad,
            };
            case actionUpdateSelectedRow:
              return {
                ...state,
                selectedrowdata : action.payLoad,
              };
              case actionUpdateShowSelectRow:
                return {
                  ...state,
                  showselectrow : action.payLoad,
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