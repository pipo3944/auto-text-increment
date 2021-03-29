import styled from "@emotion/styled";

export default styled.div`
  font-size: 12px;
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 1em 1em 0.25em;
  overflow: scroll;

  /* border-radius: 0.5em; */

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;