import { Header } from 'components';
import DelModal from 'components/DelModal/DelModal';
import Portal from 'components/Portal/Portal';
import React from 'react';
import Router from 'router/Router';

const App = () => {
  return (
    <>
      <Header />
      <Router />
      <Portal>
        <DelModal />
      </Portal>
    </>
  );
};
export default App;
