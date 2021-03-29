import React from 'react';
import { BeContainerStyle } from './BeContainerStyle';

const BeContainer: React.FC = (props) => (
  <BeContainerStyle>
    {props.children}
  </BeContainerStyle>
);

export default BeContainer;
