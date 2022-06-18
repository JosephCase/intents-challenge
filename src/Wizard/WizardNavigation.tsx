import { Button } from "../elements";
import { ButtonWrapper, Navigation, NavigationSpacer } from "./element";

type Props = {
  onBackClick: () => void;
  onNextClick: () => void;
};

function WizardNavigation({ onBackClick, onNextClick }: Props) {
  return (
    <>
      <Navigation>
        <ButtonWrapper>
          <Button onClick={onBackClick}>Back</Button>
          <Button onClick={onNextClick}>Next</Button>
        </ButtonWrapper>
      </Navigation>
      {/* 
        A little spacer to allow the consumer page to scroll right to the bottom,
        without the consumer needed to know the height of the navbar
        */}
      <NavigationSpacer />
    </>
  );
}

export default WizardNavigation;
