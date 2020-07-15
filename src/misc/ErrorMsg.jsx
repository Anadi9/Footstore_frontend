import React from 'react';
import { Button } from 'react-bootstrap';

function ErrorMsg(props) {
    return (
        <div className="error_msg">
          <span>{props.message}</span>
          <Button onClick={props.clearError}>X</Button>
        </div>
    );
}

export default ErrorMsg;