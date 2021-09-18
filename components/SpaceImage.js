import React, { useState } from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

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
  imgAndTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  img: {
    borderRadius: '6px ',
    boxShadow:
      '0 5px 15px -8px rgba(0, 0, 0, 0.24) 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    margin: '20px',
  },
  btnContainer: {
    marginTop: '5px',
    width: '100%',
  },
};
const useStyles = makeStyles(styles);

function SpaceImage({ title, date, url }) {
  const classes = useStyles();
  const [liked, setLiked] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.imgAndTitle}>
          {url && (
            <Image
              className={classes.img}
              width={290}
              height={375}
              src={url}
              alt={title}
            />
          )}
          <p>
            {title} ({date})
          </p>
        </div>
        <div className={classes.btnContainer}>
          <Button
            onClick={() => setLiked(prevState => !prevState)}
            fullWidth
            size='small'
            variant='outlined'
            color='secondary'
          >
            {liked ? 'unlike' : 'like'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SpaceImage;
