import React from 'react';
import * as R from 'react-router-dom';
import { ChatRoom } from 'pages';
import styled from 'styled-components/macro';
import { SCProps } from 'types/props';
import { useAppSelector } from 'hooks';

const TempLogin = styled.div`
  width: 100px;
  height: 100px;
  background-color: #000;
`;

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
          <TempLogin>
            <R.Link to="/ChatRoom/123">계산기 1</R.Link>
          </TempLogin>
        </R.Route>
      </R.Switch>
    </R.BrowserRouter>
  );
};

export default Router;
