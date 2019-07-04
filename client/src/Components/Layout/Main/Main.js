import React, {Fragment} from 'react';
import {Typography, Grid, makeStyles, List, ListItem } from '@material-ui/core';
import Background from './Assets/1.jpg';
import Vegetables from './Gardening/Vegetables'
import Soil from './Gardening/Soil'
import Pests from './Gardening/Pests'
import Chickens from './Livestock/Chicken'
import Goats from './Livestock/Goat'
import Bees from './Livestock/Bee'
import Markets from './Community/Markets'
import Events from './Community/Events'
import Farms from './Community/Farms'


export default({navListItem}) => {
  
  const {heading, subheading, main, backgroundStyle, toolbar, banner, gridItem} = styles();
  
  /* Render body text based on nav bar selection */
  const renderContent = () => {
    switch(navListItem){
      case 'Vegetables':
        return <Vegetables/>
      case 'Soil':
        return <Soil />
      case 'Pests':
        return <Pests />
      case 'Chickens':
        return <Chickens />
      case 'Goats':
        return <Goats />
      case 'Bees':
        return <Bees />
      case 'Markets':
        return <Markets />
      case 'Events':
        return <Events />
      case 'Farms':
        return <Farms />
    };
  };
  
  /* Render header text based on nav bar selection */
  const renderHeader = () => {
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
      return <Fragment>
        <Typography className={heading} variant="h4" >
          {header}
        </Typography>
        <Typography className={`${heading} ${subheading}`} variant="h5" >
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
            {renderHeader()}
          </Grid>
        </Grid>
    </div>
    <Markets />
    {/* {renderContent()} */}
  </main>
};


/* CSS */
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
    margin: -24
  },
  toolbar: theme.mixins.toolbar,
  gridItem: {
    [theme.breakpoints.down('xs')]: {
      marginTop: 10
    },
  },
  banner : {
    color: '#222222',
    textAlign: 'center',
    fontFamily: theme.fontFamily.primary,
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
  }
}));