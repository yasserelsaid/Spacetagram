import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import Image from 'next/image';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  imgContainer: {
    padding: '5px 12px',
  },
  appBar: {
    backgroundColor: theme.palette.primary.light,
  },
}));

export default function Header({ setIsDarkTheme }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position='static'>
        <Toolbar>
          <div className={classes.imgContainer}>
            <Image width={60} height={80} src='/images/logo.png' alt='Logo' />
          </div>
          <Typography className={classes.title} variant='h6' noWrap>
            Spacestagram
          </Typography>
          <IconButton
            onClick={() => setIsDarkTheme(prevState => !prevState)}
            aria-label='Toggle Theme'
          >
            <InvertColorsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
