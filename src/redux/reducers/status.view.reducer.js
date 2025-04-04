import {actionStatusViewProduct} from '../actions/status.view.action';

const data = {
    selectedoptn : ["opt 1","opt 2","opt 3"],
    boxdata: [{
      "orderId": "123",
      "orderOn": "OCT 12,2020 - 11:35AM",
      "productName": "Andavar - 20 Ltr water can",
      "productIcon": "icon1",
      "productVloume" : "20 cans",
      "paymentMode" : "Cash",
      "status": "pending",
      "contactNumber" : "9659411309",
      "contactAddress" :  "abc",
  }, {
    "orderId": "1234",
    "orderOn": "OCT 14,2020 - 12:00PM",
    "productName": "GVR - 10 Ltr water can",
    "productIcon": "icon1",
    "productVloume" : "10 cans",
    "paymentMode" : "Card",
    "status": "pending",
    "contactNumber" : "9659411999",
    "contactAddress" :  "abctggtg",
}, {
  "orderId": "122",
  "orderOn": "OCT 17,2020 - 12:00PM",
  "productName": "GVR - 10 Ltr water can",
  "productIcon": "icon1",
  "productVloume" : "20 cans",
  "paymentMode" : "Card",
  "status": "pending",
  "contactNumber" : "9988776655",
  "contactAddress" :  "abctggtg",
}, {
  "orderId": "12345",
  "orderOn": "OCT 14,2025 - 12:00PM",
  "productName": "SKS - 10 Ltr water can",
  "productIcon": "icon1",
  "productVloume" : "20 cans",
  "paymentMode" : "Card",
  "status": "active",
  "contactNumber" : "9884298842",
  "contactAddress" :  "Chennai - 28",
}, {
  "orderId": "1614237",
  "orderOn": "OCT 14,2022 - 12:00PM",
  "productName": "MMMM - 30 Ltr water can",
  "productIcon": "icon1",
  "productVloume" : "30 cans",
  "paymentMode" : "Card",
  "status": "active",
  "contactNumber" : "9884498822",
  "contactAddress" :  "Chennai - 28",
}, {
  "orderId": "567",
  "orderOn": "JAN 21,2020 - 09:35AM",
  "productName": "Besleri - 10 Ltr water can",
  "productIcon": "icon1",
  "productVloume" : "5 cans",
  "paymentMode" : "Phonepay",
  "status": "pending",
  "contactNumber" : "9653245309",
  "contactAddress" :  "desdf",
},{
  "orderId": "2123",
  "orderOn": "DEC 07,2020 - 12:00AM",
  "productName": "Wtp - 20 Ltr water can",
  "productIcon": "icon1",
  "productVloume" : "15 cans",
  "paymentMode" : "Card",
  "status": "pending",
  "contactNumber" : "9659222309",
  "contactAddress" :  "aberwdc",
}],
}

export default (state = data, action) => {
switch (action.type) {
  case actionStatusViewProduct:
    return {
      ...state,
      ...action.payLoad,
    };
  default:
    return state;
}
};