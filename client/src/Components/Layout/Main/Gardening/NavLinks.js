import React, { Fragment } from 'react';
import { Grid, Card, CardMedia, Link, List, ListItem, ListItemIcon, Divider, Typography, makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { Consumer } from './context'


export default() => {
  const {header, listItems, listName} = useStyles()
  
  return <Consumer>
    {({onTopicSelect, topics}) => 
      <Fragment>
        <Grid container>
          <Grid item xs={12}>
            <Link component ={RouterLink} to="/" underline='none'>
              <Typography variant="h3" gutterBottom className={header}>
                NL Farming
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <List>
          {topics.map((topic, index) => {
            return (
              <Fragment key={index}>
                <ListItem button className={listItems} onClick={() => onTopicSelect(topic)}>
                  <ListItemIcon>
                    <img src={require(`./Assets/${topic}.png`)} height="42" width="42" />
                  </ListItemIcon>
                  <Typography variant="h5" className={listName}>
                    {topic}
                  </Typography>
                </ListItem>
                <Divider />
              </Fragment>
            )
          })}
        </List>
        
        <Grid container style={{position: 'relative', height: '100%'}}>
        
          <Grid item xs={3} style={{position: 'absolute', bottom: 0, left: 0}}>
            
            <Typography variant="h6" gutterBottom></Typography>
            
            <Card style={{marginBottom: 40, marginLeft: 20, backgroundColor: 'transparent', boxShadow: 'none',}}>          
              <CardMedia style={{height: 42, width: 42}} image={require(`../../Landing/Assets/icon0.png`)}/>
            </Card>
          </Grid>
          <Grid item xs={3} style={{position: 'absolute', bottom: 0, left: 80}}>
            <Card style={{marginBottom: 40, marginLeft: 20, backgroundColor: 'transparent', boxShadow: 'none',}}>          
              <CardMedia style={{height: 42, width: 42}} image={require(`../../Landing/Assets/icon1.png`)}/>
            </Card>
          </Grid>
        </Grid>
       
      </Fragment>
    }    
  </Consumer>  
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  header: {
    color: '#f3f3ee',
    textAlign:  'center',
    fontFamily: theme.fontFamily.primary,
    marginTop: 10,
    '&:hover': {
      color: '#5d9aaf',
    },
  },
  listItems:{
    marginTop: 20,
    '&:hover': {
      color: '#cecccc',
      background: '#1a1a1a'
    },
  },
  listName:{
    "fontFamily": "\"Cinzel\", serif",
    marginLeft: 20,
    color: '#f3f3ee'
  }
}));