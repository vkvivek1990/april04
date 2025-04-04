import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
//import '' from '../';
//import {  } from "../";
import {
  serviceEndPointUrl,
  serviceEndPointUrl_V1,
  serviceEndPointUrl_V2,
} from "../../../util/util";
import JSONData from "./makeData.json";
import { cloneDeep } from "lodash";
import "./style.scss";
import { useDispatch } from "react-redux";
import { data } from "jquery";
import ToastComponent from "../../../applicationComponent/ToastComponent";

const Productsview = (props) => {
  console.log(props);
  const [datas, setDatas] = useState([]),
    [totDatas, setTotDatas] = useState([]),
    [datasLabel, setDatasLabel] = useState([]),
    [search, setSearch] = useState(""),
    [vals, setVals] = useState([]),
    [productCont, setProductCont] = useState([]),
    [priceList, setPriceList] = useState([
      {
        key: "All",
        value: <span>All</span>,
        isActive: true,
      },
      {
        key: "Under50",
        value: <span>Under &#x20B9;50</span>,
        isActive: false,
      },
      {
        key: "50to75",
        value: <span>&#x20B9;50 - &#x20B9;75</span>,
        isActive: false,
      },
      {
        key: "75to100",
        value: <span>&#x20B9;50 - &#x20B9;70</span>,
        isActive: false,
      },
      {
        key: "100to200",
        value: <span>&#x20B9;100 - &#x20B9;200</span>,
        isActive: false,
      },
      {
        key: "Over200",
        value: <span>Over &#x20B9;200</span>,
        isActive: false,
      },
    ]);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    //        console.log(JSONData);
    // if(JSONData && JSONData.code===200 && JSONData.message === "Success" && JSONData.data) {
    //     //alert(1);
    //     setDatas(JSONData.data);
    //     setDatasLabel(JSONData.data.labelFlagList);
    //     if(JSONData.data.labelFlagList && JSONData.data.labelFlagList.length) {
    //         JSONData.data.labelFlagList.sort(function (a, b) {
    //             return a.displayOrder - b.displayOrder;
    //         });
    //         setDatasLabel(JSONData.data.labelFlagList);
    //     }
    // }
  });

  const getAllProducts = () => {
    debugger;
    let data = {
        userId: localStorage.user_id,
        groupId: localStorage.Group_id,
        ctryCd: "IN",
        langCd: "EN",
      },
      pTitle = [];

    fetch(serviceEndPointUrl_V2 + "/wsm/inventory/viewAllProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response && response.status === 200 && response.data) {
          let respData = response.data;
          dispatch({ type: "action/UPDATE_PRODUCT_ACCRDN", payLoad: response });
          if (respData.ProductList && respData.ProductList.length) {
            setDatas(respData);
            setTotDatas(respData);
            if (respData.labelFlagList && respData.labelFlagList.length) {
              setDatasLabel(respData.labelFlagList);
            }
            respData.ProductList.map((dd, ii) => {
              pTitle.push(dd.product_title);
              return dd;
            });
            pTitle = [...new Set(pTitle)];
            setProductCont(pTitle);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTransId = () => {
    let transObj = {};
    debugger;
    dispatch({ type: "action/UPDATE_TRANSACTION_ID", payLoad: "" });
    fetch(
      serviceEndPointUrl_V1 + "/agency/tl_transaction_order?status=Add To Cart",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.access_token,
          active_role: "IND",
          group_id: 3,
          active_role_id: 1700014,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (
          response &&
          response.status === "success" &&
          response.data &&
          response.data.length
        ) {
          transObj.transId = response.data[0].transaction_id;
        }
        debugger;

        dispatch({ type: "action/UPDATE_TRANSACTION_ID", payLoad: transObj });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllProducts();
    getTransId();
  }, [dispatch]);

  function handleChangeInput(e) {
    //alert(1);
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  const loadPriceRange = (data) => {
    console.log(data);
  };

  // useEffect(() => {
  //     debugger
  //     // let aP = props.allProducts, pTitle = [];
  //     // if(aP && aP.length) {
  //     //     aP.map((data, indx)=>{
  //     //         pTitle.push(data.product_title);
  //     //         return data;
  //     //     })
  //     // }
  //     // pTitle = [...new Set(pTitle)];;
  //   //  setProductCont(pTitle);
  //     //setProductCont()
  // }, [props.allProducts])

  function handleChangeCheckBox(e) {
    let vVals = vals,
      allDatas = cloneDeep(totDatas);
    if (e.target.checked && vVals.indexOf(e.target.value) === -1) {
      vVals.push(e.target.value);
      setVals(vVals);
    } else {
      if (vVals.indexOf(e.target.value) > -1) {
        let eTv = vVals.indexOf(e.target.value);
        vVals.splice(eTv, 1);
        setVals(vVals);
      }
    }

    if (
      vVals &&
      vVals.length &&
      allDatas &&
      allDatas.ProductList &&
      allDatas.ProductList.length
    ) {
      allDatas.ProductList = allDatas.ProductList.filter(
        (data) => vVals.indexOf(data.product_title) > -1
      );
    } else {
      allDatas = cloneDeep(totDatas);
    }
    if (search) {
      allDatas.ProductList = datas.ProductList.filter(
        (data) => data.product_title(search) > -1
      );
    }
    setDatas(allDatas);
    // ((search && data.product_title.indexOf(search) >-1) && (vals.length > 1 && vals.indexOf(data.product_title)>-1)) &&
    console.log(vals);
    console.log(e.target.value);
  }

  const goToViewProduct = (datas) => {
    //debugger;
    dispatch({ type: "action/UPDATE_PRODUCT_ACCRDN", payLoad: datas });

    history.push(`/viewproduct/`);
    console.log(datas);
  };

  const redirectPage = (params) => (e) => {
    debugger;
    let ps = {
      page: params,
    };
    dispatch({ type: "action/PAGE_REFERENCE", payLoad: ps });
    history.push(`/productslistview/`);
    console.log(data);
  };

  return (
    <div className="SomeProductContent">
      <div className="productView">
        <ToastComponent
          header={false}
          message={"Request Submitted Successfully"}
          headText={"Status"}
          messageType={"success"}
          show={false}
        />

        <div className="searchCont col-md-7 col-md-offset-2">
          <div className="searchBar">
            <p className="searchInput">
              <input
                type="text"
                placeholder="Search"
                onChange={handleChangeInput}
              />
            </p>
          </div>
        </div>

        {localStorage.active_role === "CTR" ||
        localStorage.active_role === "WP" ||
        localStorage.active_role === "TPA" ? (
          <div className="searchCont col-md-3">
            <div className="searchBar">
              <p className="searchInputText">
                <a onClick={redirectPage()}>View Requested Orders</a>
              </p>
              {localStorage.active_role === "CTR" ? (
                <p className="searchInputText">
                  <a onClick={redirectPage("viewApproved")}>
                    View Approved Orders
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="row">
          <div className="col-md-2">
            <div className="myBlock">
              <div className="productBlock">
                <p className="text-bold">Products</p>
                <div className="listProducts">
                  <p>
                    <input type="checkbox" name={""} value={""} /> All{" "}
                  </p>
                  {productCont &&
                    productCont.length &&
                    productCont.map((data, indx) => {
                      return (
                        <p className="">
                          <input
                            type="checkbox"
                            name={data}
                            value={data}
                            onChange={handleChangeCheckBox}
                          />{" "}
                          {data}{" "}
                        </p>
                      );
                    })}
                </div>
              </div>
              <div className="priceBlock">
                <p className="text-bold">Price</p>
                <div className="allPrices">
                  {priceList &&
                    priceList.length &&
                    priceList.map((data, indx) => {
                      return (
                        <p
                          className={`priceList ${
                            data.isActive ? "isActive" : ""
                          }`}
                          key={indx}
                          onClick={() => loadPriceRange(data)}
                        >
                          {data.value}
                        </p>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="row">
              {
                // ((search && data.product_title.indexOf(search) >-1) && (vals.length > 1 && vals.indexOf(data.product_title)>-1)) &&
                datas.ProductList &&
                  datas.ProductList.length &&
                  datas.ProductList.map((data, indx) => {
                    return (
                      <div className="col-md-3" key={indx}>
                        <div className="myBlock">
                          <div className="logoFunc text-center">
                            <div className="imageLogo">
                              <img src={data.logo} title={data.product_title} />
                            </div>
                            <div className="titleBlk">
                              <p className="title text-bold text-1d488c marginTop-10 marginBottom-0">
                                {data.product_title}
                              </p>
                              <p className="text-1d488c text-bold">
                                {data.product_sub_title}
                              </p>
                            </div>
                          </div>
                          <div className="stockDesc">
                            {datasLabel &&
                              datasLabel.length &&
                              datasLabel.map((datasLbl, indx) => {
                                return (
                                  <div
                                    className="d-flex text-1d488c"
                                    key={indx}
                                  >
                                    <p className="text-385c91 flex-1 font-16">
                                      {datasLbl.label}{" "}
                                    </p>
                                    <p className="ss text-bold text-385c91 font-16">
                                      {" "}
                                      {data[datasLbl.key]}
                                    </p>
                                  </div>
                                );
                              })}
                          </div>

                          <div className="amountBlk">
                            <p className="rupee text-bold text-c93e48">
                              &#x20B9;{" "}
                              <span className="text-bold text-1d488c">
                                {data.rate}
                              </span>
                            </p>
                          </div>
                          <div className="ratingsBlk">
                            <div className="d-flex">
                              {/* <Icon className="font-25">star</Icon> */}
                              <div className="flex-1">
                                <div className="rate">
                                  {[1, 2, 3, 4, 5].map((dStar, dIndx) => {
                                    let dVar = Number(dIndx) + 1;
                                    return (
                                      <React.Fragment>
                                        <input
                                          type="radio"
                                          id={"star" + dIndx + "_" + indx}
                                          name="rate"
                                          value={dIndx}
                                          checked={
                                            dVar <= Number(data.selStar)
                                              ? true
                                              : false
                                          }
                                          disabled
                                        />
                                        <label
                                          htmlFor={"star" + dIndx + "_" + indx}
                                          title={dIndx + "_" + indx}
                                        >
                                          {dIndx} star
                                        </label>
                                      </React.Fragment>
                                    );
                                  })}
                                </div>
                              </div>
                              <div className="text-1d488c">
                                {data.ratings} ratings
                              </div>
                            </div>
                          </div>
                          <div className="butDetails marginTop-20">
                            <p className="butClass text-center">
                              <span
                                className="background-4aa2db viewBut"
                                onClick={() => goToViewProduct(data)}
                              >
                                View Product Details
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
              }
            </div>
          </div>
        </div>
        <div className="orderCont">
          <div className="orderBlk">
            <div className="d-flex orderMain">
              <div className="nameBlk">
                <p>
                  <input type="text" placeholder="Name" />
                </p>
              </div>
              <div className="numberBlk">
                <p>
                  <input type="text" placeholder="Number" />
                </p>
              </div>
              <div className="addressBlk">
                <p>
                  <input type="text" placeholder="Address" />
                </p>
              </div>
              <div className="bottolBlk d-flex">
                <p>
                  <input type="text" placeholder="Bottol" />
                </p>
                <div className="orderButBlk">
                  <p className="butAction">Order Now</p>
                </div>
              </div>
            </div>
          </div>
          <div className="homeChk orderBlk">
            <div className="homeChk">
              <div className="d-flex">
                <p className="marginRight-10">
                  <input type="checkbox" name="home" value="Home" /> Home
                </p>
                <p className="marginRight-10">
                  <input type="checkbox" name="office" value="Office" /> Office
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productsview;
