import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";
import { getNews } from "../redux/thunk/newsThunk";
// import { setLoading, clearLoading } from "../redux/actions/appActions";
// import { setNewsList } from "../redux/actions/newsActions";
// import axios from "axios";

const News = () => {
  const dispatch = useDispatch();
  const { newsList } = useSelector((state) => state.news);
  const { loading } = useSelector((state) => state.app);

  // const url =
  //   "https://newsapi.org/v2/everything?" +
  //   "q=Apple&" +
  //   "from=2022-04-18&" +
  //   "sortBy=popularity&" +
  //   "apiKey=02d142c50d8b4247b974b25323435174";

  // const getNews = async () => {
  //   try {
  //     dispatch(setLoading());
  //     const { data } = await axios.get(url);
  //     dispatch(setNewsList(data.articles));
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     dispatch(clearLoading());
  //   }
  // };

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <>
      {loading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <img src={loadingGif} alt="gif" width="90%" height="800px" />
        </Box>
      )}
      {!loading && (
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {newsList?.map((item, index) => (
            <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
              <CardMedia
                component="img"
                height="250"
                image={item?.urlToImage}
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item?.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small" href={item?.url} target="_blank">
                  Detail
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;
