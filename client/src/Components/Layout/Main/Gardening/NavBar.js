import React, {Fragment} from 'react';
import { AppBar, Drawer, Hidden, IconButton, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import NavLinks from './NavLinks';

// DELETE HEADER IN TYPOGRAPHY

const drawerWidth = 300;

export default() => {
  
  const {appBar, toolBar, menuButton, drawer, drawerPaper} = useStyles(),
    // theme = useTheme(),
    [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => 
    setMobileOpen(!mobileOpen);
    
  return <Fragment>
    <AppBar position="fixed" className={appBar}>
      <Toolbar className={toolBar}>
        <IconButton
          color="inherit"
          // aria-label="Open drawer"
          // edge="start"
          onClick={handleDrawerToggle}
          className={menuButton}
        >
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" style={{color:'#222222'}} noWrap>
         {/* Header */}
        </Typography>
      </Toolbar>
    </AppBar>

    <nav className={drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          onClick={handleDrawerToggle}
          classes={{ paper: drawerPaper }}
          // ModalProps={{ keepMounted: true }}
        >
          <NavLinks onClose={handleDrawerToggle}/>
        </Drawer>
      </Hidden>

      <Hidden xsDown implementation="css">
        <Drawer classes={{ paper: drawerPaper }} variant="permanent" open>
          <NavLinks/>
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
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#424242',
      
    },
  },
  toolBar: {
    paddingLeft: 0,
    minHeight: 0
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#222222'
  },
}));
