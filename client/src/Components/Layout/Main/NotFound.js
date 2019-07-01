import React from 'react';
import { Grid, withStyles, Link, Typography } from '@material-ui/core/';
import Background from './Assets/error-background.jpg';


const NotFound = (props) => {
  const {main, banner, welcome, paragraph, link } = props.classes;

  return <Grid container className={main} >
    <Grid item xs={12} className={banner}>
      <Typography variant="h3" gutterBottom className={welcome}>
        Oops! Looks like you made a wrong turn
      </Typography>
      <Typography variant="caption" gutterBottom className={paragraph}>
        Go back to the main page <Link href="/" className={link}>here</Link>
      </Typography>   
    </Grid>
  </Grid>
};

const styles = theme => ({
  main:{
    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%), url(${Background})`,
    height: '100vh',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    [theme.breakpoints.down('sm')]: {
      height: '100%'
    },	 
  },
  banner:{
    textAlign: 'center',
    backgroundColor: "transparent",
  },
  welcome:{
    marginTop: '1em',
    marginBottom: '1em',
    "fontFamily": theme.fontFamily.primary, 
    color: '#fff'  
  },
  paragraph: {
    fontSize: 35,
    "fontFamily": theme.fontFamily.primary,
    color: '#fff' 
  },
  link: {
    color: '#353735',
    '&:hover': {
      color: '#21211f',
      textDecoration: 'none'
   }
  }
});


export default withStyles(styles)(NotFound);
