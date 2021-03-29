import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from "prism-react-renderer/themes/nightOwl";
import React from 'react';
import BePrismStyle, { Pre } from './BePrismStyle';

type BePrismProps = {
  code: string,
}

const BePrism: React.FC<BePrismProps> = ({
  code,
}) => (
  <BePrismStyle>
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  </BePrismStyle>
);

export default BePrism;
