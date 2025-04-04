import {actionTripEngageview} from '../actions/trip.engage.action';

const data = {
    selectedoptn : ["opt 1","opt 2","opt 3"],
    boxdata: {
        "Industry" : ["Industry 1","Industry 2","Industry 3","Industry 4","Industry 5"],
        "Driver" : ["Driver 1","Driver 2","Driver 3","Driver 4","Driver 5"],
        "Vehicle" : ["Vehicle 1","Vehicle 2","Vehicle 3","Vehicle 4","Vehicle 5"]
    },
}

export default (state = {data}, action) => {
switch (action.type) {
  case actionTripEngageview:
    return {
      ...state,
      data:{boxdata : action.payLoad},
    };
  default:
    return state;
}
};