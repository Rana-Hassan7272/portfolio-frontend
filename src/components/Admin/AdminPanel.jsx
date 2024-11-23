import React, { useEffect, useState } from "react";
import { Typography, TextField, Button, Grid, Box, Paper, Input } from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import { MdTimeline } from "react-icons/md";
import { logoutUser, updateUser } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Admin.css";
import { useAlert } from "react-alert";

export default function AdminPanel() {
  const dispatch = useDispatch();
  const alert=useAlert()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState({});
  const{message:loginMessage}=useSelector((state)=>state.login)
  const {loading,message,error}=useSelector((state)=>state.update)

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(name,email,password,about,skills))
    
  };

  const handleImages = (e, val) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setSkills((prev) => ({ ...prev, [`image${val}`]: Reader.result }));
      }
    };
  };

  const handleAboutAvatar = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAbout({ ...about, avatar: reader.result });
      }
    };
  };

  useEffect(()=>{
    if(error){
      alert.error(error)
      dispatch({type:"CLEAR_ERROR"})
    }
    if(message){
      alert.success(message)
      dispatch({type:"CLEAR_MESSAGE"})
    }
    if(loginMessage){
        alert.success(message)
        dispatch({type:"CLEAR_MESSAGE"})
    }
    },[message,error,dispatch,alert])
  

  return (
    <Box className="admin">
      <Paper elevation={3} className="adminContainer">
        <form className="adminForm" onSubmit={handleSubmit}>
          <Typography variant="h4" align="center" gutterBottom>
            ADMIN PANEL
          </Typography>

          <TextField
            fullWidth
            label="Enter Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Enter Email"
            type="email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Enter Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Box my={3}>
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            <Grid container spacing={2}>
              {Array.from({ length: 6 }).map((_, i) => (
                <Grid item xs={6} sm={4} key={i}>
                  <Typography>Skill {i + 1}</Typography>
                  <Input
                    type="file"
                    onChange={(e) => handleImages(e, i + 1)}
                    accept="image/*"
                    fullWidth
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box mt={3}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              value={about.name || ""}
              onChange={(e) => setAbout({ ...about, name: e.target.value })}
            />
            <TextField
              fullWidth
              label="Title"
              variant="outlined"
              margin="normal"
              value={about.title || ""}
              onChange={(e) => setAbout({ ...about, title: e.target.value })}
            />
            <TextField
              fullWidth
              label="Subtitle"
              variant="outlined"
              margin="normal"
              value={about.subtitle || ""}
              onChange={(e) => setAbout({ ...about, subtitle: e.target.value })}
            />
            <TextField
              fullWidth
              label="Description"
              variant="outlined"
              margin="normal"
              value={about.description || ""}
              onChange={(e) => setAbout({ ...about, description: e.target.value })}
            />
            <TextField
              fullWidth
              label="Quote"
              variant="outlined"
              margin="normal"
              value={about.quote || ""}
              onChange={(e) => setAbout({ ...about, quote: e.target.value })}
            />
            <Input
              type="file"
              onChange={handleAboutAvatar}
              accept="image/*"
              fullWidth
              style={{ marginTop: "16px" }}
            />
          </Box>

          <Box mt={3} display="flex" justifyContent="space-between">
            <Link to="/admin/timeline" className="adminLink">
              TIMELINE <MdTimeline />
            </Link>
            <Link to="/admin/project" className="adminLink">
              PROJECTS <AiOutlineProject />
            </Link>
          </Box>
          <Box mt={4}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Update
            </Button>
          </Box>

        </form>

        <Button
          variant="contained"
          color="error"
          style={{ margin: "20px auto", display: "block" }}
          onClick={logoutHandler}
        >
          LOGOUT
        </Button>
      </Paper>
    </Box>
  );
}
