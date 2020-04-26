import React from 'react';

import StyledPageHeader from './PageHeader.style';

const PageHeader = ({ exerciseRunning }) => (
  <StyledPageHeader exerciseRunning={exerciseRunning}>
    Mode Live
  </StyledPageHeader>
);

export default PageHeader;
