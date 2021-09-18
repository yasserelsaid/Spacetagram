import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import SpaceImage from './SpaceImage';
import { makeStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Cached';

const useStyles = makeStyles(theme => ({
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '200px 0',
  },
  refreshButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: '20px',
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
        '&count=6&thumbs=true';
      const { data } = await axios.get(url);
      setImages(data);
      console.log(data);
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
      <div className={classes.refreshButtonContainer}>
        <IconButton
          variant='contained'
          onClick={() => fetchImages()}
          color='secondary'
        >
          <RefreshIcon />
        </IconButton>
      </div>
      {loading ? (
        <div className={classes.progressContainer}>
          <CircularProgress size={120} color='secondary' />
        </div>
      ) : (
        <Grid container spacing={3}>
          {images.map(
            image =>
              image.media_type === 'image' && (
                <Grid item key={image.url} md={4}>
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
