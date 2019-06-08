import React, {Fragment} from 'react';
import {Typography, Grid, makeStyles, List, ListItem, ListItemIcon } from '@material-ui/core';
import Background from './Assets/1.jpg';
import Arrow from '@material-ui/icons/ArrowLeft';
import Vegetables from './Vegetables'
import Soil from './Soil'
// import Test from './Vegetables/test'

export default({navListItem, vegetables}) => {

  const classes = styles();
  let heading;
  
  const renderContent = () => {
    switch(navListItem){
      case 'Vegetables':
        return <Vegetables vegetables={vegetables}/>
      case 'Soil':
        return <Soil />
    };
  };
 

  /* Check for category selection on Side Navigation Bar and set 'heading' variable */

  if (navListItem){
    heading = 
      <Fragment>
        <Typography className={classes.heading} variant="h3" >
          {navListItem}
        </Typography>
      </Fragment>
  } else {
    heading = 
      <List style={{width: '70%', margin: 'auto'}}>
        <ListItem style={{justifyContent: 'center'}}>
          <ListItemIcon>
            <Arrow style={{fontSize: 60, color: '#222222'}}/>
          </ListItemIcon>
          <Typography className={classes.heading} variant="h3" >
            Choose a category
          </Typography>
        </ListItem>
      </List>
  };


  /* Display category and associated information to DOM */

  return <main className={classes.content}>
    <div className={classes.main}>
      <div className={classes.toolbar} />
        <Grid container>
          <Grid item xs={12}>
          {/* delete these two typography tags when done */}
            <Typography className={classes.heading} variant="h3" >
              Soil
            </Typography>

            {/* <Typography className={`${classes.heading} ${classes.subheading}`} style={{paddingTop: 30}} variant="h5" >
              Click card for more information
            </Typography>  */}
            {/* {heading}
            {navListItem === 'Vegetables' ?
              <Typography className={classes.heading} style={{paddingTop: 30}} variant="h5" >
                Click card for more information
              </Typography>    
            : null
            } */}
          </Grid>
        </Grid>
    </div>
    {/* <Vegetables vegetables={vegetables} /> */}
    <Soil />
    {/* {renderContent()} */}
  </main>
};

const styles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: '100vh',
    textAlign: 'center',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
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
    [theme.breakpoints.down('xs')]: {
      fontSize: 15
    }
  },
  main: {
    background: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5))` ,
    height: '30vh',
    margin: -24
  },
  test: {
    fontSize: 60
  }
}));