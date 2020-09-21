import styled from "styled-components";

import { color, size, spacing } from "../../theme";

const PanelWrapper = styled.div`
  border: ${size.small}px solid ${color.secodnary};
  padding: ${spacing(2)}px;
  text-align: center;
  font-size: ${spacing(3)}px;
  font-weight: bold;
  letter-spacing: ${size.small}px;
	background-color: ${color.primary};
`;

const Arrow = styled.span`
  width: 0;
  height: 0;
  border-left: ${spacing(2)}px solid transparent;
  border-right: ${spacing(2)}px solid transparent;
  margin-right: ${size.gutter}px;
	position: relative;
`;

const ArrowDown = styled(Arrow)`
  border-top: ${spacing(2)}px solid ${color.black};
	top: ${spacing(3)}px;
`;

const ArrowUp = styled(Arrow)`
  border-bottom: ${spacing(2)}px solid ${color.black};
	bottom: ${spacing(3)}px;
`;

export { PanelWrapper, ArrowDown, ArrowUp };
