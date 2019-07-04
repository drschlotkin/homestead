import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid, AppBar, Divider, Toolbar, List, ListItem, ListItemIcon, Typography, withStyles } from '@material-ui/core';
import FooterLink from '@material-ui/core/Link';
import { Consumer } from './context';

class NavLinks extends Component {

  renderNavLink = (gardening, livestock, community) => {
    let url =  window.location.pathname.substring(1);
    url = url[0].toUpperCase() + url.substring(1);
    let navPage = {}, firstNav = '', secondNav = '';

    if (url === 'Gardening'){
      navPage = gardening;
      firstNav = 'livestock';
      secondNav = 'community';
    }else if (url === 'Livestock'){
      navPage = livestock;
      firstNav = 'gardening';
      secondNav = 'community';
    }else if (url === 'Community'){
      navPage = community;
      firstNav = 'gardening';
      secondNav = 'livestock';
    };
    return { url, navPage, firstNav, secondNav };
  };

  render() {
    const { header, listItems, listName, about, toolbar, grid } = this.props.classes;

    return <Consumer>
      {({onTopicSelect, gardening, livestock, community}) => {
        const {url, navPage, firstNav, secondNav} = this.renderNavLink(gardening, livestock, community)

        return <Fragment>
          <Grid container>
            <Grid item xs={12} onClick={() => onTopicSelect('')} style={{cursor: 'pointer'}}>        
              <Typography variant="h3" gutterBottom className={header}>
                {url}
              </Typography>
            </Grid>
          </Grid>
          <List>

            {navPage.map((topic, index) => <Fragment key={index}>
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

            <ListItem style={{marginTop: '6em'}}>
              <Typography variant="h5" className={listName} style={{color: '#bcbcba', marginTop: 10, marginLeft: 30}}>
                Other Sections:
              </Typography>
            </ListItem>

            <ListItem button onClick={() => onTopicSelect('')} component={Link} to={`/${firstNav}`} className={listItems} disableRipple>
              <ListItemIcon >
                <img src={require(`./Assets/${firstNav}.png`)} height="38" width="38" />
              </ListItemIcon>
              <Typography variant="h5" className={listName}>
                {firstNav}
              </Typography>
            </ListItem>

            <Divider /> 

            <ListItem button onClick={() => onTopicSelect('')} component={Link} to={`/${secondNav}`} className={listItems} disableRipple>
              <ListItemIcon>
                <img src={require(`./Assets/${secondNav}.png`)} height="38" width="38" />
              </ListItemIcon>
              <Typography variant="h5" className={listName}>
                {secondNav}
              </Typography>
            </ListItem>
          </List>
        
          <Grid className={grid}>
            <AppBar position="static" color="default">
              <Toolbar className={toolbar}>
                <FooterLink className={about} style={{paddingRight: 20}}>
                  Contact
                </FooterLink>
                <FooterLink className={about}>
                  Credits
                </FooterLink>  
              </Toolbar>
            </AppBar>
          </Grid>

        </Fragment>  
      }}    
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
  },
  about: {
    margin: theme.spacing(2),
    cursor: 'pointer',
    "fontFamily": "\"Cinzel\", serif",
    color: '#f3f2ec',
    letterSpacing: 2,
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'none',
      color: '#c7c6bf',  
    },
  },
  toolbar: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#363535',
    minHeight: 0
  },
  grid: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  }  
});

export default withStyles(styles)(NavLinks);