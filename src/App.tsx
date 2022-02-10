import React from 'react';
import styled from 'styled-components/macro';

const AppLayout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PhoneLayout = styled.main`
  max-width: 430px;
  max-height: 920px;
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.colors.chatBlack};
  border-radius: 10px;
`;

const App = () => (
  <AppLayout>
    <PhoneLayout></PhoneLayout>
  </AppLayout>
);
export default App;
