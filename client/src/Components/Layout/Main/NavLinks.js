import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Grid, List, ListItem, ListItemIcon, Divider, Typography, withStyles } from '@material-ui/core';
import { Consumer } from './context'

class NavLinks extends Component {

  render() {
    const { header, listItems, listName } = this.props.classes
    
    return <Consumer>
      {({onTopicSelect, gardening}) => 
        <Fragment>
          <Grid container>
            <Grid item xs={12} onClick={() => onTopicSelect('')} style={{cursor: 'pointer'}}>        
              <Typography variant="h3" gutterBottom className={header}>
                NL Farming
              </Typography>
            </Grid>
          </Grid>
          <List>

            {gardening.map((topic, index) => <Fragment key={index}>
              <ListItem button className={listItems} onClick={() => onTopicSelect(topic)} disableRipple>
                <ListItemIcon>
                  <img src={require(`./Assets/${topic}.png`)} height="38" width="38" />
                </ListItemIcon>
                <Typography variant="h5" className={listName}>
                  {topic}
                </Typography>
              </ListItem>
              <Divider />
              </Fragment>
            )}

            <ListItem style={{marginTop: '7em'}}>
              <Typography variant="h5" className={listName} style={{color: '#bcbcba'}}>
                Other Sections:
              </Typography>
            </ListItem>
            <Divider />

            <ListItem button component={Link} to="/livestock" className={listItems} disableRipple>
              <ListItemIcon >
                <img src={require(`./Assets/Chickens.png`)} height="38" width="38" />
              </ListItemIcon>
              <Typography variant="h5" className={listName}>
                Livestock
              </Typography>
            </ListItem>
            <Divider />

            <ListItem button className={listItems} disableRipple>
              <ListItemIcon>
                <img src={require(`./Assets/community.png`)} height="38" width="38" />
              </ListItemIcon>
              <Typography variant="h5" className={listName}>
                Community
              </Typography>
            </ListItem>
          </List>
        </Fragment>
      }    
    </Consumer> 
  }
};

const styles = theme => ({
  root: {
    display: 'flex',
  },
  header: {
    color: '#f3f3ee',
    textAlign:  'center',
    fontFamily: theme.fontFamily.primary,
    marginTop: 10,
    marginBottom: 30,
    '&:hover': {
      color: '#5d9aaf',
    },
  },
  listItems:{
    '&:hover': {
      color: '#cecccc',
      background: '#1a1a1a'
    },
  },
  listName:{
    textDecoration: 'none',
    "fontFamily": "\"Cinzel\", serif",
    marginLeft: 20,
    color: '#f3f3ee'
  }
});

export default withStyles(styles)(NavLinks);