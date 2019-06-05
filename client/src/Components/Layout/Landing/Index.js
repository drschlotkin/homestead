import React from 'react';
import { Grid, withStyles, Typography } from '@material-ui/core/';
// import Divider from '@material-ui/core/Divider';
import Background from './Assets/background.jpg';
import Section from './Template';

const Banner = (props) => {
  const {main, banner, welcome, blue, red, paragraph } = props.classes,
  sections = ['Gardening', 'Livestock', 'Off Grid', 'Community'];

  return (
    <Grid container className={main} >
      <Grid item xs={12} className={banner}>
        <Typography variant="h3" gutterBottom className={welcome}>
          Welcome,<br />to the <span className={blue}>Newfoundland</span> <span className={red}> Farmers's </span>web page
        </Typography>
        {/* <Divider /> */}
        <Typography variant="caption" gutterBottom className={paragraph}>
          What are you interested in?
        </Typography>   
      </Grid>

      {sections.map((section, index) => {
        return (
          <Section image={require(`./Assets/icon${index}.png`)}
                   title={section}
                   link={section}
                   key={index}     
          />
        )
      })}

    </Grid>
  );
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
  blue:{
    color: '#001e73',
    fontWeight: 'bold'
  },
  red: {
    color: '#ce0012',
    fontWeight: 'bold'
  }
});


export default withStyles(styles)(Banner);
