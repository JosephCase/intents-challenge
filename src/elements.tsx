import styled from "styled-components";

// COLORS
// a larger app could be in it's own file
export const BLUE = "rgb(0, 122, 255)";
export const LIGHT_BLUE = "#f5f8fe;";
export const BLACK = "#2b2b2b";
export const GREY = "#bababa";


export const PageLayout = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 60px;
  box-sizing: border-box;
  margin: auto;
`;

export const Button = styled.button`
  user-select: none;
  border: 1px solid rgb(255, 239, 239);
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  height: 36px;
  min-width: 100px;
  color: white;
  background: ${BLUE};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px;
  padding: 0px 16px;
  transition: box-shadow 0.3s ease-in-out 0s
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px 0px;
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
