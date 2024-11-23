import React, { useEffect, useState } from "react";
import { Typography, TextField, Button, Box, Paper, Input } from "@mui/material";
import { addProjects, deleteProjects, getUser } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Admin.css";
import { MdKeyboardBackspace } from "react-icons/md";
import { useAlert } from "react-alert";
import { ProjectCard } from "../Projects/Projects";

export default function Project() {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const { loading, message, error } = useSelector((state) => state.update);
  const { user } = useSelector((state) => state.user); // Fetching user state

  // Delete Handler
  const deleteHandler = async (id) => {
    await dispatch(deleteProjects(id));
    dispatch(getUser());
  };

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addProjects(title, description, technologies, url, image));
    dispatch(getUser());
  };

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
  };

  // Error and Message Handling
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [message, error, dispatch, alert]);

  return (
    <Box className="admin">
      <Paper elevation={3} className="adminContainer">
        {/* Form Section */}
        <form className="adminForm" onSubmit={handleSubmit}>
          <Typography variant="h4" align="center" gutterBottom>
            PROJECTS
          </Typography>

          <TextField
            fullWidth
            label="Enter Title"
            variant="outlined"
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            fullWidth
            label="Enter Description"
            variant="outlined"
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            fullWidth
            type="text"
            label="Enter URL"
            variant="outlined"
            margin="normal"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <TextField
            fullWidth
            type="text"
            label="Enter Technologies"
            variant="outlined"
            margin="normal"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
          />
          <Input
            type="file"
            className="adminPanelFileUpload"
            onChange={handleImage}
            accept="image/*"
            style={{ marginTop: "16px" }}
          />

          <Box mt={3} display="flex" justifyContent="space-between">
            <Link to="/account" className="adminLink">
              Back <MdKeyboardBackspace />
            </Link>
          </Box>

          <Box mt={4}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={loading}
            >
              Add
            </Button>
          </Box>
        </form>

        {/* Projects Section */}
        <div className="adminPanelYoutubeVideos">
          {user?.projects?.length > 0 ? (
            user.projects.map((item) => (
              <div className="youtubeCard" key={item._id}>
                <ProjectCard
                  id={item._id}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  technologies={item.technologies}
                  image={item.image.url}
                  isAdmin={true}
                  deleteHandler={deleteHandler}
                />
              </div>
            ))
          ) : (
            <Typography variant="h6" align="center">
              No Project Found
            </Typography>
          )}
        </div>
      </Paper>
    </Box>
  );
}
