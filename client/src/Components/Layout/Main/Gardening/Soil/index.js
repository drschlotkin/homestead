import React from 'react'
import {Typography, makeStyles, Grid, Card, CardMedia, CardActionArea, CardContent } from '@material-ui/core'
import { soil } from './store'

export default () => {
  const { mainGrid, gridItem, cardStyle, cardTitle, media, caption } = styles();
  
  return <Grid container className={mainGrid}>
    
    {soil.map(({title, description}, index) => {
      let img = title.replace(/ /g,"_");
      return <Grid item xs className={gridItem} key={index}>
        <Card className={cardStyle}>
          <CardActionArea>
            <CardMedia image={require(`../Assets/${img}.jpg`)} className={media}/>
            <CardContent>
              <Typography gutterBottom className={cardTitle} variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" className={caption} component="p">
                {description}
            </Typography>
            </CardContent>
          </CardActionArea>  
        </Card>
      </Grid>
    })}
  </Grid>
};

const styles = makeStyles(theme => ({
  mainGrid:{
    marginTop: 50,
    marginLeft: 10,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  gridItem: {
    textAlign: 'center',
  },
  cardStyle: {
    maxWidth: 385,
    marginTop: 40,
    display: 'inline-block',
    [theme.breakpoints.down('sm')]: {
      marginTop: 20
    }
  },
  media: {
    paddingTop: '25%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 2,
    width: 380,
    height: 230,
    [theme.breakpoints.down('md')]: {
      height: 290,
      margin: 2
    }
  },
  cardTitle:{
    color: 'black',
    "fontFamily": "\"Cinzel\", serif",
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 15
    }
  },
  caption: {
    color: 'black', 
    textAlign: 'left',
  }
}))