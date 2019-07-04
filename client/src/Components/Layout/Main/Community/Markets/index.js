import React, {Fragment} from 'react';
import {Divider, Typography, makeStyles, Grid, Card, CardMedia, CardContent } from '@material-ui/core'
import Background from '../../Assets/stjohns.jpg';


export default() => {
  const classes = styles(),
    // { mainGrid, gridItem, cardStyle, media, cardTitle, caption } = classes;
    {blog, meta, photo, description, paragraph, cardTitle, icons} = classes

  return (
   
    <Card className={blog}>  
      <div className={meta}>
        <div className={photo} style={{backgroundImage: `url(${Background})`}}></div>
      </div>
      <div className={description}>
        <Typography gutterBottom className={cardTitle} variant="h5">
          St. John's Farmer's Market
        </Typography>
        <Divider style={{marginBottom: 20}}/>
        <Typography gutterBottom style={{textAlign: 'left', marginBottom: 20}} variant="body1">
          <span style={{fontWeight: 'bold'}}>Location:</span> 245 Freshwater Road
        </Typography>

        <Typography gutterBottom style={{textAlign: 'left', marginBottom: 20}} variant="body1">
          <span style={{fontWeight: 'bold'}}>Hours of Operation:</span> Every Saturday – 9:00am to 4:00pm. Every Second Sunday of the month from 9:00am to 4:00pm. Every First Friday of the month from 5-9pm.
        </Typography>
      <div>
        <img src={require('../../Assets/facebook.png')} height="38" width="38" />
        <img src={require('../../Assets/twitter.png')} height="38" width="38" />
        <img src={require('../../Assets/webpage.png')} height="38" width="38" />
      </div>
        
      </div>
    </Card>
  )
}


const styles = makeStyles(theme => ({
  blog: {
    marginTop: 40,
    display: 'flex',
    margin: '1rem auto',
    maxWidth: '700px',
    flexDirection: 'row-reverse',
    overflow: 'hidden',
    zIndex: '0'
  },
  description: {
    padding: '1rem',
    background: 'white',
    position: 'relative',
    flexBasis: '60%'
  },
  photo: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  meta: {
    position: 'relative',
    flexBasis: '40%',
    height: 'auto'
  },
  paragraph: {
    position: 'relative',
    margin: '1rem 0 0'
  },
  cardTitle: {
    color: 'black',
    "fontFamily": "\"Cinzel\", serif",
    fontWeight: 'bold',
  },
  icons: {
    root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  }
}))