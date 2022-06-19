import styled from "styled-components";
import { BLACK, GREY } from "elements";

export const Wrapper = styled.div`
  border: 1px solid ${GREY};
  border-radius: 8px;
  background: white;
  &:hover {
    border-color: ${BLACK};
  }
`;
export const Header = styled.div`
  display: flex;
  cursor: pointer;
  font-style: italic;
  padding: 16px;
`;
export const Icon = styled.div`
  width: 16px;
  margin-right: 16px;
  font-style: normal;
`;

export const ContentWrapper = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  margin: 16px 32px 32px 48px;
`;
