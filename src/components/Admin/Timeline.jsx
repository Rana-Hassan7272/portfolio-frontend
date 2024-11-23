import React, { useEffect, useState } from "react";
import { Typography, TextField, Button, Box, Paper } from "@mui/material";
import { addTimeline, deleteTimeline, getUser } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Admin.css";
import { MdKeyboardBackspace } from "react-icons/md";
import { useAlert } from "react-alert";
import { FaTrash } from "react-icons/fa";

export default function Timeline() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const {  message, error } = useSelector((state) => state.update);
  const { user } = useSelector((state) => state.user); // Fetching user state

  // Delete Handler
  const deleteHandler = async (id) => {
    await dispatch(deleteTimeline(id));
    dispatch(getUser());
  };

  // Form Submit Handler
  const handleSubmit =async(e) => {
    e.preventDefault();
   await dispatch(addTimeline(title, description, date));
   dispatch(getUser())
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
        <form className="adminForm" onSubmit={handleSubmit}>
          <Typography variant="h4" align="center" gutterBottom>
            TIMELINE
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
            type="date"
            variant="outlined"
            margin="normal"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <Box mt={3} display="flex" justifyContent="space-between">
            <Link to="/account" className="adminLink">
              Back <MdKeyboardBackspace />
            </Link>
          </Box>

          <Box mt={4}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Add
            </Button>
          </Box>
        </form>

        {/* Timeline List */}
        <div className="adminPanelYoutubeVideos">
          {user?.timeline?.length > 0 ? (
            user.timeline.map((item) => (
              <div className="youtubeCard" key={item._id}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1" style={{ letterSpacing: "2px" }}>
                  {item.description}
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 600 }}>
                  {item.date?.toString()?.split("T")[0] || "No date provided"}
                </Typography>

                <Button
                  style={{
                    margin: "auto",
                    display: "block",
                    color: "rgba(40,40,40,0.7)",
                  }}
                  onClick={() => deleteHandler(item._id)}
                >
                  <FaTrash />
                </Button>
              </div>
            ))
          ) : (
            <Typography variant="h6" align="center">
              No Timeline Entries Found
            </Typography>
          )}
        </div>
      </Paper>
    </Box>
  );
}
