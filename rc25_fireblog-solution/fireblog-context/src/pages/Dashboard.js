import React from "react";

import BlogCard from "../components/BlogCard";
import { useBlog } from "../contexts/BlogContext";

import loadingGif from "../assets/loading.gif";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  title: {
    fontFamily: "Girassol",
    textAlign: "center",
    color: "#046582",
  },
  mainRoot: {
    marginTop: 70,
  },
}));

const Main = () => {
  const classes = useStyles();
  const { currentBlogs } = useBlog();

  return (
    <div className={classes.mainRoot}>
      <Typography className={classes.title} variant="h3" noWrap>
        ──── Dashboard ────
      </Typography>
      <>
        <Grid
          container
          className={classes.root}
          spacing={5}
          justifyContent="center"
        >
          {currentBlogs === undefined ? (
            <img src={loadingGif} alt="loading" />
          ) : currentBlogs ? (
            currentBlogs?.map((item, id) => (
              <Grid key={id} item>
                <BlogCard post={item} />
              </Grid>
            ))
          ) : (
            <h3>No data available.</h3>
          )}
        </Grid>
      </>
    </div>
  );
};

export default Main;
