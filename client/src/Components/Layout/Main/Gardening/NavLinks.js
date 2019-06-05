import React, { Fragment } from 'react';
import { Grid, Link, List, ListItem, ListItemIcon, Divider, Typography, makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

export default({onSelect, topics}) => {
  const classes = useStyles()
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Link component ={RouterLink} to="/" underline='none'>
            <Typography variant="h3" style={{color: '#f3f3ee'}} gutterBottom className={classes.header}>
              NL Farming
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <List>
        {topics.map((topic, index) => {
          return (
            <Fragment key={index}>
              <ListItem button className={classes.listItems} onClick={() => onSelect(topic)}>
                <ListItemIcon>
                  <img src={require(`./Assets/${topic}.png`)} height="42" width="42" />
                </ListItemIcon>
                <Typography variant="h5" className={classes.listName}>
                  {topic}
                </Typography>
              </ListItem>
              <Divider />
            </Fragment>
          )
        })}
      </List>
    </Fragment>
  );  
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  header: {
    textAlign:  'center',
    fontFamily: theme.fontFamily.primary,
    marginTop: 10,
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