import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import SpaceImage from './SpaceImage';

function SpaceImages() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const url =
        'https://api.nasa.gov/planetary/apod?api_key=' +
        process.env.NEXT_PUBLIC_NASA_API_KEY +
        '&count=4&thumbs=true';
      const { data } = await axios.get(url);
      setImages(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <>
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
    </>
  );
}

export default SpaceImages;
