import React, { useEffect, useState } from 'react';
import "./Contact.css";
import { Typography, Button, TextField, Box, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { contactUser } from '../../actions/user';
import { useAlert } from 'react-alert';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const dispatch=useDispatch()
  const alert = useAlert();
  const {  message:alertMessage, error } = useSelector((state) => state.update);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contactUser(name,email,message))
   
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (alertMessage) {
      alert.success(alertMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [alertMessage, error, dispatch, alert]);

  return (
    <div className="contact">
      <div className="contactRightBar"></div>
      <Box className="contactContainer">
        <Paper 
          elevation={5} 
          className="contactContainerForm" 
          component="form" 
          onSubmit={submitHandler}
        >
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Message"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button 
            variant="contained" 
            type="submit" 
            fullWidth 
            color="primary"
            sx={{ marginTop: "1rem", padding: "0.8rem" }}
          >
            Send
          </Button>
        </Paper>
      </Box>
    </div>
  );
}
