import styled from "styled-components";
import { BLUE, LIGHT_BLUE } from "elements";

export const Examples = styled.div`
  position: relative;
  background: ${LIGHT_BLUE};
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
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