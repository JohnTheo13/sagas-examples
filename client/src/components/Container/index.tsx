import React, { ReactChild, ReactElement } from "react";
import ContainerWrapper from "./style";

export default ({ children }: { children: ReactChild }): ReactElement => (
  <ContainerWrapper>{children}</ContainerWrapper>
);
