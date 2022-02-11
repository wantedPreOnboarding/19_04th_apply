import React from 'react';
import * as R from 'react-router-dom';
import { ChatRoom, Login } from 'pages';
import { SCProps } from 'types/props';
import { useAppSelector } from 'hooks';

const PrivateRoute = ({ children }: SCProps) => {
  const auth = useAppSelector(state => state.auth);

  return (
    <R.Route
      render={() =>
        auth.userId ? (
          children
        ) : (
          <R.Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
};

const Router = () => {
  return (
    <R.BrowserRouter>
      <R.Switch>
        <PrivateRoute path="/ChatRoom/:roomId">
          <ChatRoom />
        </PrivateRoute>
        <R.Route exact path="/">
          <Login />
        </R.Route>
      </R.Switch>
    </R.BrowserRouter>
  );
};

export default Router;
