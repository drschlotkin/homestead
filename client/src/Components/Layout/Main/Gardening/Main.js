import React, {Fragment} from 'react';
import {Typography, Grid, makeStyles, List, ListItem, ListItemIcon } from '@material-ui/core';
import Background from './Assets/1.jpg';
import Arrow from '@material-ui/icons/ArrowLeft';
import Vegetables from './Vegetables'
import Soil from './Soil'
import Layout from './Layout'
import Pests from './Pests'


export default({navListItem}) => {
  const {heading, subheading, main, backgroundStyle, toolbar} = styles();
  
  /* Render body text based on nav bar selection */

  const renderContent = () => {
    switch(navListItem){
      case 'Vegetables':
        return <Vegetables/>
      case 'Soil':
        return <Soil />
      case 'Layout':
        return <Layout />
      case 'Pest':
        return <Pests />
    };
  };

  
  /* Render header text based on nav bar selection */
  
  const renderHeader = () => {
    let header = '', subHeader = ''
    if (!navListItem) {
      return (
        <List style={{width: '70%', margin: 'auto'}}>
          <ListItem style={{justifyContent: 'center'}}>
            <ListItemIcon>
              <Arrow style={{fontSize: 60, color: '#222222'}}/>
            </ListItemIcon>
            <Typography className={heading} variant="h3" >
              Choose a category
            </Typography>
          </ListItem>
        </List>
      )
    } else {
      switch (navListItem) {
        case 'Vegetables':
          header = 'Vegetables';
          subHeader = 'Choose a vegetable you want to grow:';
          break;
        case 'Soil':
          header = 'Soil';
          subHeader = 'Improve your soil with these methods:';
          break;
        case 'Layout':
          header = 'Layout';
          subHeader = 'Select a garden design:';
          break;
        case 'Pests':
          header = 'Pests';
          subHeader = 'Learn about your garden\'s enemies:';
      }
      return <Fragment>
        <Typography className={heading} variant="h4" >
          {header}
        </Typography>
        <Typography className={`${heading} ${subheading}`} style={{paddingTop: 30}} variant="h5" >
          {subHeader}
        </Typography>
      </Fragment>
    }; 
  }
  
  /* Display category and associated information to DOM */
  return <main className={backgroundStyle}>
    <div className={main}>
      <div className={toolbar} />
        <Grid container>
          <Grid item xs={12}>
          {/* <Typography className={heading} variant="h4" >
          Vegetables
        </Typography>
        <Typography className={`${heading} ${subheading}`} style={{paddingTop: 30}} variant="h5" >
        Choose a vegetable you want to grow:
        </Typography> */}
            {renderHeader()}
          </Grid>
        </Grid>
    </div>
    {/* <Vegetables /> */}
    {/* <Soil /> */}
    {renderContent()}
  </main>
};


const styles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  backgroundStyle: {
    flexGrow: 1,
    padding: theme.spacing(3),
    minHeight: '100vh',
    height: '100%',
    textAlign: 'center',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    [theme.breakpoints.down('md')]: {
      height: '100%'
    }
  },
  heading: {
    color: '#222222',
    letterSpacing: 5,
    fontWeight: 'bold',
    "fontFamily": "\"Cinzel\", serif",
    [theme.breakpoints.down('xs')]: {
      fontSize: 30
    }
  },
  subheading: {
    [theme.breakpoints.down('md')]: {
      fontSize: 18
    }
  },
  main: {
    background: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5))`,
    height: '30vh',
    margin: -24
  },
  test: {
    fontSize: 60
  }
}));