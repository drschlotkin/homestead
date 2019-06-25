import React, {Fragment} from 'react';
import {Typography, Grid, makeStyles, List, ListItem } from '@material-ui/core';
import Background from './Assets/1.jpg';
import Vegetables from './Vegetables'
import Soil from './Soil'
import Pests from './Pests'


export default({navListItem}) => {
  const {heading, subheading, main, backgroundStyle, toolbar, blue, red, banner, gridItem} = styles();
  
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

  const test = 'Dolore nostrud enim ea fugiat amet cupidatat enim. Fugiat qui tempor adipisicing velit et officia aliqua aliqua culpa ad veniam fugiat. Velit voluptate pariatur minim labore occaecat qui velit nostrud non deserunt non est voluptate. Quis est veniam sint nisi do.'

  console.log(test)
  
  /* Render header text based on nav bar selection */
  const renderHeader = () => {
    let header = '', subHeader = ''
    if (!navListItem) {
      return (
        <List style={{width: '70%', margin: 'auto'}}>
          <ListItem style={{justifyContent: 'center'}}>
            <Typography className={banner} variant="h2" >
              NL Gardeners & Homesteaders
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
          subHeader = 'Click for preventative measures:';
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
    [theme.breakpoints.down('md')]: {
      fontSize: 18
    }
  }
}));