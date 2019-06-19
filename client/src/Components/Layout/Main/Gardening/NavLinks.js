import React, { Fragment } from 'react';
import { Grid, Link, List, ListItem, ListItemIcon, Divider, Typography, makeStyles } from '@material-ui/core';
import { Consumer } from './context'

export default() => {
  
  const classes = useStyles(),
  {header, listItems, listName} = classes

  return <Consumer>
    {({onTopicSelect, topics}) => 
      <Fragment>
        <Grid container>
          <Grid item xs={12}>
            <Link onClick={() => onTopicSelect('')} style={{cursor: 'pointer'}} underline='none'>
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
          <ListItem style={{marginTop: '5em'}}>
            <Typography variant="h5" className={listName} style={{color: '#bcbcba'}}>
              Other Sections:
            </Typography>
          </ListItem>
          <Divider />
          <ListItem button className={listItems}>
            <ListItemIcon>
              <img src={require(`./Assets/livestock.png`)} height="42" width="42" />
            </ListItemIcon>
            <Typography variant="h5" className={listName}>
              Livestock
            </Typography>
          </ListItem>
          <Divider />
          <ListItem button className={listItems}>
            <ListItemIcon>
              <img src={require(`./Assets/community.png`)} height="42" width="42" />
            </ListItemIcon>
            <Typography variant="h5" className={listName}>
              Community
            </Typography>
          </ListItem>
        </List>
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