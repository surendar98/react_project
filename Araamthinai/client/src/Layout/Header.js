import React, { Fragment, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import theme from '../theme';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Avatar } from '@mui/material';
import { IconButton, Menu, MenuItem } from '@mui/material';

const styles = {
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabs: {
    marginLeft: 'auto',
    '& .MuiButtonBase-root.MuiTab-root': {
      fontSize: 15,
    },
  },
  tab: {
    minWidth: 10,
    marginLeft: '25px',
    color: 'white',
    '& .Mui-selected':{
      color:'#ff'
    }
  },

  hamburgerMenuIcon: {
    height: '50px',
    width: '50px',
  },
  menuIconContainer: {
    marginLeft: 'auto',
    color: 'white',
    '&:hover': {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
};

const DesktopNavigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {pathname}=useLocation();

   return (
    <Tabs
      value={value}
      onChange={handleChange}
      sx={styles.tabs}
    >
        <Tab sx={styles.tab} className={pathname==='/' && 'active'} label="Profile" component={Link} to="/" />
        <Tab sx={styles.tab} className={pathname==='/payment' && 'active'} label="Payment" component={Link} to="/payment" />
     </Tabs>
  );
};

const MobileNavigation = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <Box sx={styles.toolbarMargin} />
        <Paper>
          <List disablePadding>
            <ListItem
              divider
              component={Link}
              to="/"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText disableTypography>Profile</ListItemText>
            </ListItem>
            <ListItem
              divider
              component={Link}
              to="/payment"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText disableTypography>Payment</ListItemText>
            </ListItem>
    
          </List>
        </Paper>
      </SwipeableDrawer>
      <IconButton
        sx={styles.menuIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon sx={styles.hamburgerMenuIcon} />
      </IconButton>
    </React.Fragment>
  );
};

const Header = () => {
  const navigate=useNavigate();
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    sessionStorage.removeItem('user')
    navigate('/')
  };
  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={styles.appbar}
        color="primary"
      >
        <Toolbar disableGutters={true}>
                {isMobileMode ? <MobileNavigation /> : <DesktopNavigation />}
                <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <Avatar/>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
