import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import { Dashboard } from './screens/dashboard';
import { Sidebar } from './widgets/sidebar';
import { Appbar } from './widgets/appbar';
import { CssBaseline, makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}));
const App: React.FC = () => {
  const classes = useStyles();
  const [isSidebarOpen, setSidebarOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setSidebarOpen(true);
  };
  const handleDrawerClose = () => {
    setSidebarOpen(false);
  };
  return (
    <div>
      <Fragment>
        <CssBaseline />
        <Appbar
          handleDrawerOpen={handleDrawerOpen}
          isSidebarOpen={isSidebarOpen}
        />
        <div className={classes.container}>
          <Sidebar
            handleDrawerClose={handleDrawerClose}
            isSidebarOpen={isSidebarOpen}
          />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Switch>
              {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
              <Route path="/dashboard">
                <Dashboard />
              </Route>

              {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
              <Route path="/courses">
                <div />
              </Route>
              <Route path="/users">
                <Dashboard />
              </Route>

              {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </main>
        </div>
      </Fragment>
    </div>
  );
};

export default App;
