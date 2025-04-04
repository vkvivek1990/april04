import React, { useEffect, useState, useMemo } from "react";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import TableContainer from "./TableContainer";
// import "bootstrap/dist/css/bootstrap.min.css";
import { SelectColumnFilter} from "./filters";
import Icon from '@material-ui/core/Icon';
import './style.scss';
var moment = require('moment');
moment().format(); 

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const Tablescreen = (props) => {
  const {currcolumn,updateslectedcheckboxcount,updateselectedRow,rowdata,selectedrowdata,rowselectfeature,rowedit,handlerowedit,handlerowdelete,showselectrow} = props;
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);

  useEffect(() => {
    let newcolumn = [];
    let currnetcolumn = [...currcolumn];
    currnetcolumn.map((item) => {
      let newobj = {};
      newobj.Header = capitalize(item.field_label);
      newobj.width = "300"
      newobj.accessor = item.field_nm.toLowerCase();
      if(item.FilterType === "SelectColumnFilter"){
        newobj.Filter = SelectColumnFilter;
        newobj.filter = "equals"
      }
      else if(item.FilterType === false){
        newobj.Filter = false;
        newobj.filter = ""
      }
      newcolumn.push(newobj);
    });
    if(rowedit){
      let actionclmn = {
        Filter:false,
        id: 'button',
        Cell: ({row}) => (<div className="table_actn_btn_holder"><span className="edit_btn" onClick={()=>{handlerowedit(row)}}><Icon className="table_actn_icn">edit</Icon></span><span className="delete_btn" onClick={()=>{handlerowdelete(row)}}><Icon className="table_actn_icn">delete</Icon></span></div>)
    };
    newcolumn.push(actionclmn);
    }
    setColumn(newcolumn);
  },[currcolumn]);

  // const renderRowSubComponent = (row) => {
  //   const {
  //     name: { first, last },
  //     location: { city, street, postcode },
  //     picture,
  //     cell,
  //   } = row.original;
  //   return (
  //     <Card style={{ width: "18rem", margin: "0 auto" }}>
  //       <CardImg top src={picture.large} alt="Card image cap" />
  //       <CardBody>
  //         <CardTitle>
  //           <strong>{`${first} ${last}`} </strong>
  //         </CardTitle>
  //         <CardText>
  //           <strong>Phone</strong>: {cell} <br />
  //           <strong>Address:</strong>{" "}
  //           {`${street.name} ${street.number} - ${postcode} - ${city}`}
  //         </CardText>
  //       </CardBody>
  //     </Card>
  //   );
  // };

  return  (
    <React.Fragment>
    <div className="container-w">
      <TableContainer columns={column} data={showselectrow?selectedrowdata:rowdata} updateselectedRow={updateselectedRow} updateslectedcheckboxcount={updateslectedcheckboxcount} rowselectoption={rowselectfeature} showselectrow={showselectrow}/>
    </div>
    </React.Fragment>
  );
};

export default Tablescreen;
