import React, {Fragment} from 'react';
import { AppBar, Drawer, Hidden, IconButton, Toolbar, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NavLink from './NavLinks';

const drawerWidth = 300;

export default() => {
  
  const {appBar, toolBar, menuButton, drawer, drawerPaper} = useStyles(),
        [mobileOpen, setMobileOpen] = React.useState(false);
        
  const handleDrawerToggle = () => 
    setMobileOpen(!mobileOpen);
  
  return <Fragment>
    <AppBar position="fixed" className={appBar}>
      <Toolbar className={toolBar}>
        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          className={menuButton}
        >
          <MenuIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>

    <nav className={drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"     
          open={mobileOpen}
          onClose={handleDrawerToggle}
          onClick={handleDrawerToggle}
          classes={{ paper: drawerPaper }}
        >
          <NavLink onClose={handleDrawerToggle} />
        </Drawer>
      </Hidden>

      <Hidden xsDown implementation="css">
        <Drawer classes={{ paper: drawerPaper }} variant="permanent" open>
        <NavLink onClose={handleDrawerToggle} />
        </Drawer>
      </Hidden>
    </nav>
  </Fragment>
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#424242'
    },
  },
  toolBar: {
    paddingLeft: 0,
    minHeight: 0
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#222222'
  },
}));
