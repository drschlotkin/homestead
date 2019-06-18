import React, {Fragment} from 'react';
import {Typography, Grid, makeStyles, List, ListItem } from '@material-ui/core';
import Background from './Assets/1.jpg';
import Vegetables from './Vegetables'
import Soil from './Soil'
import Pests from './Pests'


export default({navListItem}) => {
  const {welcome, heading, subheading, main, backgroundStyle, toolbar, blue, red, banner, gridItem} = styles();
  
  /* Render body text based on nav bar selection */

  const renderContent = () => {
    switch(navListItem){
      case 'Vegetables':
        return <Vegetables/>
      case 'Soil':
        return <Soil />
      case 'Pests':
        return <Pests />
    };
  };

  
  /* Render header text based on nav bar selection */
  
  const renderHeader = () => {
    let header = '', subHeader = ''
    if (!navListItem) {
      return (
        <List style={{width: '70%', margin: 'auto'}}>
          <ListItem className={welcome}>
            <Typography className={banner} variant="h2" >
              NL <span className={blue}>Gardeners</span> & <span className={red}>Homesteaders</span>
            </Typography>
          </ListItem>
        </List>
      )
    } else {
      switch (navListItem) {
        case 'Vegetables':
          header = 'Vegetables';
          subHeader = 'Click icon for more information:';
          break;
        case 'Soil':
          header = 'Soil';
          subHeader = 'Improve your soil with these methods:';
          break;
        case 'Pests':
          header = 'Pests';
          subHeader = 'Protect your vegetables from these pests:';
          break;
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
          <Grid item xs={12} className={gridItem}>
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
  main: {
    background: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5))`,
    height: '100%',
    paddingBottom: 20,
    margin: -24,
    // [theme.breakpoints.down('md')]: {
    //   // height: '30vh'
    //   height: '90%',
    //   paddingBottom: 20
    // },
  },
  toolbar: theme.mixins.toolbar,
  gridItem: {
    [theme.breakpoints.down('xs')]: {
      marginTop: 10
    },
  },
  welcome: {
    justifyContent: 'center', 
    // [theme.breakpoints.down('xs')]: {
    //   marginLeft: -15
    // }
  },
  banner : {
    color: '#222222',
    textAlign: 'center',
    fontFamily: theme.fontFamily.primary,
    [theme.breakpoints.down('md')]: {
      fontSize: 35,
    }
  },
  blue:{
    color: '#001e73',
    
  },
  red: {
    color: '#ce0012',
   
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
    [theme.breakpoints.down('md')]: {
      fontSize: 18
    }
  }
}));