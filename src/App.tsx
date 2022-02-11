import React from 'react';
import styled from 'styled-components/macro';
const AppLayout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhoneLayout = styled.div`
  max-width: 430px;
  max-height: 920px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 30%) 0px 12px 60px 5px;
`;

const App = () => {
  return (
    <AppLayout>
      <PhoneLayout></PhoneLayout>
    </AppLayout>
  );
};
export default App;
