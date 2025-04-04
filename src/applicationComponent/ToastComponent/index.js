import React, { useEffect, useState } from 'react';
import { Toast, Row, Col } from 'react-bootstrap';

const ToastComponent = (props) => {
const [show, setShow] = useState(true);
    
  return (
      <div className="toastBlock">
    <Row className={`toast-div message_${props.messageType}`}>
      <Col xs={12}>
        <Toast onClose={() => setShow(false)} show={props.show} delay={3000}  autohide >
          {
              props && props.header && props.headText ? <Toast.Header>
            <strong className="me-auto">{ props.headText }</strong>
          </Toast.Header> : null
         }
         {
             props && props.message ? <Toast.Body>{ props.message }</Toast.Body> : null
         }
        </Toast>
      </Col>
    </Row>
    </div>
  );
}

export default ToastComponent;
