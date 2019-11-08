import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import './sidebar.style.css';

const useStyles = makeStyles({
  list: {
    width: 250
  }
});

const Sidebar = ({ user, history }) => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = status => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(status);
  };

  const sideList = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          // TODO: update url paths
          { text: 'Home', url: '/home' },
          // { text: 'Profile', url: `/profile/${user.id}` },
          { text: 'Profile', url: `/` },
          { text: 'Calendar', url: '/' },
          { text: 'Event History', url: '/history' },
          { text: 'Contacts', url: '/' }
        ].map(item => (
          <ListItem
            button
            key={item.text}
            onClick={() => history.push(item.url)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open Left</Button>
      <SwipeableDrawer
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {sideList}
      </SwipeableDrawer>
    </div>
  );
};

export default Sidebar;
