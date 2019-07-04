import React, {Fragment} from 'react';
import {Typography, Grid, makeStyles, List, ListItem } from '@material-ui/core';
import Background from '../Assets/1.jpg';
import Vegetables from '../Gardening/Vegetables'
import Soil from '../Gardening/Soil'
import Pests from '../Gardening/Pests'
import Chickens from '../Livestock/Chicken'
import Goats from '../Livestock/Goat'
import Bees from '../Livestock/Bee'
import Markets from '../Community/Markets'
import Events from '../Community/Events'
import Farms from '../Community/Farms'
import Banner from './Banner'


export default({navListItem}) => {
  
  const {main, backgroundStyle, toolbar, gridItem} = styles();
  
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

  /* Display section based on navigation selection */
  return <main className={backgroundStyle}>
    <div className={main}>
      <div className={toolbar} />
        <Grid container>
          <Grid item xs={12} className={gridItem}>
            <Banner navListItem={navListItem}/>
          </Grid>
        </Grid>
    </div>  
    {/* <Markets /> */}
    {renderContent()}
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
}));