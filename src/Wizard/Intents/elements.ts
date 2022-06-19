import styled from "styled-components";
import { BLUE } from "../../elements";

export const Title = styled.h2`
  font-size: 38px;
  margin: 64px 0 32px;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
`;
export const ExampleDesc = styled.p`
  margin-bottom: 16px;
  & > em {
    // this could probably be done in a more re-usable or global way
    font-style: italic;
    font-weight: bold;
    color: ${BLUE};
  }
`;

export const SelectAllLabel = styled.label`
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  & > span {
    margin-right: 4px;
  }
`;
export const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

export const SelectionSummary = styled.p`
  font-weight: bold;
`;
