import styled from "styled-components";
import { Examples } from "../../../components/Conversation/elements";
import { BLUE, Checkbox } from "../../../elements";

export const Tile = styled.div<{ isSelected?: boolean }>`
  min-height: 160px;
  padding: 24px;
  border-radius: 16px;
  box-shadow: rgb(192 209 255) 0px 4px 24px 4px;
  border: 1px solid ${(props) => (props.isSelected ? BLUE : "transparent")};
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  display: flex;
  margin: 32px 0;
  &:hover {
    rgb(192 209 255) 0px 8px 24px 4px
  }
  ${Checkbox} {
    // apply locally, not globally - want to keep the global generic
    flex-shrink: 0;
  }
  ${Examples} {
    margin-top: 8px;
    width: 60%;
  }
`;

export const InfoWrapper = styled.div`
  margin: 0 26px 0 52px;
  display: flex;
  flex-grow: 1;
`;

export const Details = styled.div`
  width: 40%;
  padding-right: 32px;
`;

export const Name = styled.h3`
  color: ${BLUE};
  font-size: 24px;
  margin-bottom: 32px;
`;

export const Description = styled.p`
  margin-bottom: 16px;
  font-size: 18px;
  font-style: italic;
`;

export const Expressions = styled.p`
  font-style: italic;
  & > span {
    margin-right: 4px;
  }
  // sometimes I use opacity here as it's a little quicker for me
  // rather than trying to figure out the correct colour
  opacity: 0.75;
`;
