import React, { useState } from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const styles = {
  container: {
    display: 'inline-block',
    height: '100%',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  img: {
    borderRadius: '6px ',
    boxShadow:
      '0 5px 15px -8px rgba(0, 0, 0, 0.24) 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
    width: '100%',
  },
  footer: {
    marginTop: '5px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
};
const useStyles = makeStyles(styles);

function SpaceImage({ title, date, url }) {
  const classes = useStyles();
  const [liked, setLiked] = useState(false);
  console.log(url);

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        {url && (
          <div>
            <img className={classes.img} src={url} alt={title} />
          </div>
        )}

        <div className={classes.footer}>
          <div>
            <Typography component='p'>{title}</Typography>
            <Typography component='p' color='textSecondary'>
              {date}
            </Typography>
          </div>

          <IconButton
            onClick={() => setLiked(prevState => !prevState)}
            color='secondary'
          >
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default SpaceImage;
