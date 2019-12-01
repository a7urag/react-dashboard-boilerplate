import React from 'react';
import { Divider, Drawer, IconButton, List } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { mainListItems, secondaryListItems } from './items';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
}));

const Sidebar = ({
  handleDrawerClose,
  isSidebarOpen,
}: {
  handleDrawerClose: Function;
  isSidebarOpen: boolean;
}) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !isSidebarOpen && classes.drawerPaperClose),
      }}
      open={isSidebarOpen}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={() => handleDrawerClose()}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      {/*<Divider />*/}
      {/*<List>{secondaryListItems}</List>*/}
    </Drawer>
  );
};

export { Sidebar };
