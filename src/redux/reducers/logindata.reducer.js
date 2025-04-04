import {actionaddgrouplist,actionaddrolelist,actionaddCatagorylist,actionselecgroup,actionselecrole,actionseleccatagory} from "../actions/logindata.action";

const data = {
    grpdropdwnlist:[],
    roledropdwnlist:[],
    catagorydropdwnlist:[],
    selectedgroup:null,
    selectedrole:null,
    selectedcatagory:null
}

export default (state=data,action) => {
    switch(action.type) {
        case actionaddgrouplist : 
            return {
                ...state,
                grpdropdwnlist:action.payLoad
            }
        case actionaddrolelist :
            return {
                ...state,
                roledropdwnlist:action.payLoad
            }
        case actionaddCatagorylist :
            return {
                ...state,
                catagorydropdwnlist:action.payLoad
            }
        case actionselecgroup :
            return {
                ...state,
                selectedgroup:action.payLoad
            }
        case actionselecrole :
            return {
                ...state,
                selectedrole:action.payLoad
            }
        case actionseleccatagory :
            return {
                ...state,
                selectedcatagory:action.payLoad
            }
        default : 
          return state; 
    }
}