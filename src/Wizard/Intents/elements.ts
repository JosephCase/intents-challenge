import styled from "styled-components";
import { BLUE, Checkbox, LIGHT_BLUE } from "../../elements";

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
    // apply locally, not globally
    flex-shrink: 0;
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

export const Examples = styled.div`
  position: relative;
  background: ${LIGHT_BLUE};
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  width: 60%;
  border-radius: 0 0 16px 16px;
`;

export const ExamplesText = styled.p`
  opacity: 0.4;
  position: absolute;
  top: 12px;
`;

const SpeechBubble = styled.p`
  position: relative;
  padding: 24px 16px 16px;
  max-width: 75%;
  & + & {
    margin-top: 16px;
  }
  & > span {
    font-size: 8px;
    opacity: 0.75;
    position: absolute;
    top: 6px;
    font-style: normal;
  }
`;
export const Question = styled(SpeechBubble)`
  margin-left: auto;
  border-radius: 8px 0 8px 8px;
  box-shadow: rgb(192 209 255) 0px 4px 24px 4px;
  background: ${BLUE};
  color: #fff;
  & > span {
    left: 6px;
  }
`;
export const Response = styled(SpeechBubble)`
  margin-right: auto;
  font-style: italic;
  border-radius: 0 8px 8px 8px;
  box-shadow: rgb(192 209 255) 0px 4px 24px 4px;
  background: white;
  & > span {
    left: 6px;
  }
`;
