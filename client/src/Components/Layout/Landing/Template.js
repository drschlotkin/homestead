import React from 'react';
import {Grid, Typography, Card, CardActionArea, CardMedia, CardContent, withStyles } from '@material-ui/core/';
import { NavLink } from 'react-router-dom';

const Section = (props) => {
  const { grids, card, media, topic, actionArea, focusHighlight } = props.classes,
  section = props.link.toLowerCase().replace(/\s+/g, '');
 
  return (
    <Grid item xs={3} className={grids}>
      {/* <CardActionArea classes={{ root: actionArea, focusHighlight: focusHighlight }} > */}
        <Card className={card} >
          <CardMedia
            className={media}
            image={props.image}
            component={NavLink}
            to={section}
          />     
          <CardContent>
            <Typography gutterBottom variant="h5" className={topic} component="h2">
              {props.title}
            </Typography>
          </CardContent>
        </Card>
      {/* </CardActionArea> */}
    </Grid>
  );
};

const styles = theme => ({
  grids: {
    marginTop: 30,
    textAlign: 'center', 
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      flexBasis: '100%',
      marginBottom: 0,
      marginTop: 20
    }, 
  },
  card: {
    backgroundColor: "transparent", 
    maxWidth: 300,
    boxShadow: 'none',
    display: 'inline-block',    
  },
  media: {
    paddingTop: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    width: 150,
    height: 150
  },
  topic:{
    "fontFamily": "\"Muli\", sans-serif",
    fontWeight: 'bold',
    color: '#fff'
  },
  actionArea: {
    "&:hover $focusHighlight": {
      borderRadius: "60%",
      opacity: 0.07,
    }
  },
  focusHighlight: {borderRadius: "60%"}
});

export default withStyles(styles)(Section);