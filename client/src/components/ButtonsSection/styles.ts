import styled from "styled-components";

import { spacing, color } from "../../theme";

export const Wrapper = styled.div`
  padding: ${spacing(2)}px ${spacing(4)}px;
  font-size: ${spacing(1)}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > button {
    /* width: 35%; */
    padding: ${spacing(2)}px ${spacing(4)}px;
    font-size: ${spacing(5)}px;
    background-color: ${color.secodnary};
    border-width: ${spacing(1)}px;
    border-color: ${color.secodnary};
    &:focus {
      outline: none;
    }
  }
`;
