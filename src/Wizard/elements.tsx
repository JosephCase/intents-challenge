import styled from "styled-components";
import { PageLayout } from "elements";

const NAVIGATION_HEIGHT = 80;

export const Navigation = styled.div`
  height: ${NAVIGATION_HEIGHT}px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px;
`;

export const NavigationSpacer = styled.div`
  height: ${NAVIGATION_HEIGHT}px;
`;
export const ButtonWrapper = styled(PageLayout)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
