export const actionaddgrouplist = "action/ADD_GROUP_LIST";
export const actionaddrolelist = "action/ADD_ROLE_LIST";
export const actionaddCatagorylist = "action/ADD_CATAGORY_LIST";
export const actionselecgroup = "action/ADD_SELEC_GRP";
export const actionselecrole = "action/ADD_SELEC_ROLE";
export const actionseleccatagory = "action/ADD_SELEC_CATAGORY"


export const Updateheadergrouplist = (payLoad) => {
    return (dispatch, getState) => {
        dispatch({type:actionaddgrouplist,
        payLoad
        });
    };
};

export const Updateheaderrolelist = (payLoad) => {
    return (dispatch, getState) => {
        dispatch({type:actionaddrolelist,
        payLoad
        });
    };
}

export const Updateheadercatagorylist = (payLoad) => {
    return (dispatch, getState) => {
        dispatch({type:actionaddCatagorylist,
        payLoad
        });
    };
}

export const Updateheaderselectedgroup = (payLoad) => {
    return (dispatch, getState) => {
        dispatch({type:actionselecgroup,
        payLoad
        });
    };
}

export const Updateheaderselectedrole = (payLoad) => {
    return (dispatch, getState) => {
        dispatch({type:actionselecrole,
        payLoad
        });
    };
}

export const Updateheaderselectedcatagory = (payLoad) => {
    return (dispatch, getState) => {
        dispatch({type:actionseleccatagory,
        payLoad
        });
    };
}