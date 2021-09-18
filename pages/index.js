import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Header from '../layout-components/Header';
import Footer from '../layout-components/Footer';
import SpaceImages from '../components/SpaceImages';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  body: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
  },
}));

export default function Index({ setIsDarkTheme }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.body}>
        <Header setIsDarkTheme={setIsDarkTheme} />
        <Container maxWidth='lg'>
          <Box my={4}>
            <Typography variant='h4' component='h1' gutterBottom align='center'>
              Make Commerce Better for the Entire Universe
            </Typography>
            <Box my={8}>
              <ProTip />
              <SpaceImages />
            </Box>
          </Box>
        </Container>
        <Footer />
      </div>
    </>
  );
}
