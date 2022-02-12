import React from 'react';
import * as R from 'react-router-dom';
import { ChatRoom, Login } from 'pages';
import { SCProps } from 'types/props';
import { useAppSelector } from 'hooks';
import { Header } from 'components';
import { PAGE_URLS } from './consts';

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
              pathname: PAGE_URLS.LOGIN,
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
      <Header />
      <R.Switch>
        <PrivateRoute path={PAGE_URLS.CHAT_ROOM}>
          <ChatRoom />
        </PrivateRoute>
        <R.Route exact path={PAGE_URLS.LOGIN}>
          <Login />
        </R.Route>
        <R.Redirect
          to={{
            pathname: PAGE_URLS.CHAT_ROOM,
          }}
        />
      </R.Switch>
    </R.BrowserRouter>
  );
};

export default Router;
