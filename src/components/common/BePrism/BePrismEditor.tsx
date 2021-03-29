import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from "prism-react-renderer/themes/nightOwl";
import React, { useState } from 'react';
import { useCallback } from 'react';
import BePrismStyle from './BePrismStyle';
import Editor from 'react-simple-code-editor'

type BePrismEditorProps = {
  code: string,
  onChange: (code: string) => void,
}

const styles = {
  root: {
    boxSizing: 'border-box',
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    minHeight: '191px',
    ...theme.plain
  }
}

const BePrismEditor: React.FC<BePrismEditorProps> = ({
  code,
  onChange,
}) => {

  const highlight = useCallback((code: string) => (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
            </div>
          ))}
        </>
      )}
    </Highlight>
  ), []);

  return (
    <BePrismStyle>
      <Editor
          value={code}
          onValueChange={onChange}
          highlight={highlight}
          padding={10}
          style={styles.root as React.CSSProperties}
        />
    </BePrismStyle>
  )
};

export default BePrismEditor;
