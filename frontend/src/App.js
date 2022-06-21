import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import * as sessionActions from './store/session';
import * as userActions from './store/user';
import * as roleActions from './store/role';
import * as storyActions from './store/story';
import Navigation from './components/Navigation';
import NewStoryForm from './components/Story/NewStoryForm';
import ReadSingleStory from './components/Story/ReadSingleStory';
import EditStoryForm from './components/Story/EditStoryForm';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then((user) => {
        if (user) {
          dispatch(userActions.fetchUser(user.id));
          return;
        }
      })
      .then(() => dispatch(roleActions.fetchRoles()))
      .then(() => dispatch(storyActions.fetchStories()))
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Navigation isLoaded={isLoaded} />
          </Route>
          <Route path="/new-story">
            <NewStoryForm />
          </Route>
          <Route path="/stories/:id/edit">
            <EditStoryForm />
          </Route>
          <Route exact path="/stories/:id">
            <ReadSingleStory />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
