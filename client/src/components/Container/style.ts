// import React from 'react'
import styled from "styled-components";
import { color, spacing, size } from "../../theme";

const ContainerWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  margin: auto;
  border: ${size.small}px solid ${color.primary};
	border-radius: ${size.borderRadius}px;
  height: 100%;
  padding: ${spacing(3)}px;
  @media (max-width: 768px) {
    max-width: none;
    border: none;
  }
`;

export default ContainerWrapper;
