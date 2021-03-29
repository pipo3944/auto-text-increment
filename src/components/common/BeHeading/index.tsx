import React from 'react';
import { BeHeadingStyle } from './BeHeadingStyle';

const BeContainer: React.FC = (props) => (
  <BeHeadingStyle>
    {props.children}
  </BeHeadingStyle>
);

export default BeContainer;
