import React, { useState, useEffect, useMemo } from "react";

import placeholderPng from "../assets/placeholder.png";
import { useBlog } from "../contexts/BlogContext";
import { useAuth } from "../contexts/AuthContext";
import { toastSuccessNotify } from "../helpers/ToastNotify";
import { useNavigate, useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 90,
  },
  paper: {
    marginTop: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  blogImg: {
    width: 500,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 3,
  },
  submit: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#046582",
    color: "white",
    fontWeight: "bold",
  },
  title: {
    fontSize: 35,
    fontFamily: "Girassol",
    color: "#046582",
  },
}));

export default function UpdateBlog() {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [newBlog, setNewBlog] = useState({
    author: currentUser.email,
    title: "",
    content: "",
    image: "",
    updated_date: Date.now(),
  });
  const { id } = useParams();
  const { getOneBlog, updateBlog } = useBlog();

  const result = getOneBlog(id);
  const res = useMemo(() => {
    return result ? result[0] : { title: "", content: "", image: "" };
  }, [result]);

  useEffect(() => {
    setNewBlog(res);
  }, [res]);

  const updateBlogHandler = (e) => {
    e.preventDefault();
    updateBlog(res?.id, newBlog);
    navigate(`/detail/${res?.id}`);
    toastSuccessNotify("Updated successfully!");
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <img
          src={res?.image || placeholderPng}
          alt="blog"
          className={classes.blogImg}
        />
        <Typography component="h1" variant="h5" className={classes.title}>
          ── Update Blog ──
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                defaultValue={res?.title}
                // value={newBlog?.title || res?.title}
                autoFocus
                onChange={(e) =>
                  setNewBlog({ ...newBlog, title: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="image"
                label="Image URL"
                defaultValue={res?.image}
                type="text"
                id="image"
                // value={newBlog?.image || res?.image}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, image: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                required
                label="Content"
                multiline
                defaultValue={res?.content}
                // value={newBlog?.content || res?.content}
                fullWidth
                rows={15}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, content: e.target.value })
                }
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={updateBlogHandler}
          >
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}
