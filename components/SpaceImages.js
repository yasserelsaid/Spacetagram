import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import SpaceImage from './SpaceImage';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '150px',
    marginBottom: '150px',
  },
}));
function SpaceImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const fetchImages = async () => {
    try {
      setLoading(true);
      const url =
        'https://api.nasa.gov/planetary/apod?api_key=' +
        process.env.NEXT_PUBLIC_NASA_API_KEY +
        '&count=4&thumbs=true';
      const { data } = await axios.get(url);
      setImages(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <>
      {loading ? (
        <div className={classes.progressContainer}>
          <CircularProgress size={120} color='secondary' />
        </div>
      ) : (
        <Grid container spacing={2}>
          {images.map(
            image =>
              image.media_type === 'image' && (
                <Grid item key={image.url} md={3}>
                  <SpaceImage
                    title={image.title}
                    url={image.url}
                    date={image.date}
                  />
                </Grid>
              )
          )}
        </Grid>
      )}
    </>
  );
}

export default SpaceImages;
