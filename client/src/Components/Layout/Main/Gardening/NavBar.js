import React, {Fragment} from 'react';
import { AppBar, Drawer, Hidden, IconButton, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import NavLinks from './NavLinks';

const drawerWidth = 300;

export default ({onSelect, topics}) => {
  
  const classes = useStyles(),
  {appBar, menuButton, drawer, drawerPaper} = classes,
  theme = useTheme(),
  [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return <Fragment>
    <AppBar position="fixed" className={appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{color:'#222222'}} noWrap>
         
        </Typography>
      </Toolbar>
    </AppBar>

    <nav className={drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <NavLinks topics={topics} onSelect={onSelect}/>
        </Drawer>
      </Hidden>

      <Hidden xsDown implementation="css">
        <Drawer classes={{ paper: drawerPaper }} variant="permanent" open>
          <NavLinks topics={topics} onSelect={onSelect}/>
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
