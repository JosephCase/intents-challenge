/* 
    Imagining this to be a re-usable component coming from a component kit
*/

import { useState } from "react";
import { ContentWrapper, Header, Icon, Wrapper } from "./elements";

type Props = {
  label: string;
  children: React.ReactNode;
};
function InfoBox({ label, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((state) => !state);
  };

  return (
    <Wrapper>
      <Header onClick={handleClick}>
        <Icon>{isOpen ? "v" : ">"}</Icon>
        <p>{label}</p>
      </Header>
      <ContentWrapper isOpen={isOpen}>{children}</ContentWrapper>
    </Wrapper>
  );
}

export default InfoBox;
