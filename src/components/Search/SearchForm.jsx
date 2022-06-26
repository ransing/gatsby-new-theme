
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
// import { useNavigate } from "react-router-dom";

function Login() {
  const [userDetail, setUserDetail] = useState({ username: "", password: "" });
  const [validated, setValidated] = useState(false);
//   const navigate = useNavigate();
  const onSubmitData = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    console.log("called", userDetail);
    // navigate("/success");
    // setUserDetail(event.target.value);
  };
  const onValueChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  return (
    <Form validate="true" onSubmit={onSubmitData}>
      <Form.Label>Please enter a bronx zip code </Form.Label>
      <Form.Control
        value={userDetail.username}
        type="text"
        required
        onChange={onValueChange}
        name="username"
        maxLength="5"
      />
      <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
     
      <Button type="submit" className="btn-primary mt-2">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
