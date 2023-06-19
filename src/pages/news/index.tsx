import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getNews } from '../../store/thunks/news';
import { Box, Grid, Typography } from '@mui/material';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  const dispatch = useAppDispatch();
  const { news } = useAppSelector((state) => state.news);
  console.log(news);

  const classes = useStyles();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const renderNewsBlock = news.map((element: any) => (
    <Grid key={element.id} container className={classes.newsBlock}>
      <Grid item xs={12} md={3}>
        <img src={element.imageurl} alt={element.category} />
      </Grid>
      <Grid item xs={12} md={9}>
        <Box>
          <Typography variant='h3'>{element.title}</Typography>
        </Box>
        <Box>
          <Typography variant='body1'>{element.body}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={12} className={classes.readMore}>
        <Typography variant='h4'>
          <Link to={element.url}>Read more</Link>
        </Typography>
      </Grid>
    </Grid>
  ));

  return (
    <Grid className={classes.root}>
      <Grid className={classes.blockTitle}>
        <Typography variant='h2'>Новости</Typography>
      </Grid>
      <Grid>{renderNewsBlock}</Grid>
    </Grid>
  );
};

export default NewsPage;
