import React, { useState } from "react";
import { Card } from "react-bootstrap";

function Cardcontainer(props) {
  let msg = props.msg;
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ marginTop: "40px", marginBottom: "20px" }}>
        <Card.Body>
          <p className="card_text" style={{ textAlign:"center",fontSize:"20px",color:"#212529"}}>{msg}</p>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cardcontainer;
