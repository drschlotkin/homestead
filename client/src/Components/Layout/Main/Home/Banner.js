import React, {Fragment} from 'react';
import {Container, AppBar, Toolbar, Typography, Grid, makeStyles, List, ListItem } from '@material-ui/core';
import Link from '@material-ui/core/Link';
export default({navListItem}) => {

  const {heading, subheading, banner, grid, toolbar, about } = styles();

  let header = '', subHeader = ''
  if (!navListItem) {
    return <List style={{width: '70%', margin: 'auto'}}>
      <ListItem style={{justifyContent: 'center'}}>
        <Typography className={banner} variant="h2" >
          NL Gardeners & Homesteaders
        </Typography>
      </ListItem>
    </List>
  } else {
    switch (navListItem) {
      case 'Vegetables':
        header = 'Vegetables';
        subHeader = 'Click for more information:';
        break;
      case 'Soil':
        header = 'Soil';
        subHeader = 'Improve your soil with these methods:';
        break;
      case 'Pests':
        header = 'Pests';
        subHeader = 'Click for preventative measures:';
        break;
      case 'Chickens':
        header = 'Chickens';
        subHeader = 'How to raise and care for chickens:';
        break;
      case 'Goats':
        header = 'Goats';
        subHeader = 'How to raise and care for goats:';
        break;
      case 'Bees':
        header = 'Beekeeping'
        subHeader = 'How to start your own bee colony at home:';
        break;
      case 'Markets':
        header = 'Markets'
        subHeader = 'Farmers Markets in your area:';
        break;
      case 'Events':
        header = 'Events'
        subHeader = 'Agriculture Events in your area:';
        break;
      case 'Farms':
        header = 'Farms'
        subHeader = 'Fresh produce in your area:';
        break;
    }
  }
  return <Fragment>
    <Typography className={heading} variant="h4" >
      {header}
    </Typography>
      {header === 'Markets' ?
        <Fragment>
          <Typography className={`${heading} ${subheading}`} variant="h5" >
            {subHeader}
          </Typography>

          {/* <Grid container style={{justifyContent: 'center'}}>
            <Typography className={`${heading} ${subheading}`} variant="h5" >
              East
            </Typography>
            <Typography className={`${heading} ${subheading}`} variant="h5" >
              Central
            </Typography>
            <Typography className={`${heading} ${subheading}`} variant="h5" >
              West
            </Typography>
          </Grid> */}
       
        </Fragment>
      : <Typography className={`${heading} ${subheading}`} variant="h5" >
          {subHeader}
        </Typography>
    }
    </Fragment>
}

/* CSS */
const styles = makeStyles(theme => ({
  banner : {
    color: '#222222',
    textAlign: 'center',
    fontFamily: "\"IM Fell DW Pica SC\", serif",
    // fontFamily: theme.fontFamily.primary,
    [theme.breakpoints.down('md')]: {
      fontSize: 35,
    }
  },
  heading: {
    color: '#222222',
    textAlign: 'center',
    letterSpacing: 5,
    fontWeight: 'bold',
    "fontFamily": "\"Cinzel\", serif",
    [theme.breakpoints.down('md')]: {
      fontSize: 30,
    }
  },
  subheading: {
    paddingTop: 30,
    [theme.breakpoints.down('md')]: {
      fontSize: 18
    }
  },
  
}))