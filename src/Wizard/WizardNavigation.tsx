type Props = {
  onBackClick: () => void;
  onNextClick: () => void;
};

function WizardNavigation({ onBackClick, onNextClick }: Props) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          height: "80px",
          background: "pink",
        }}
      >
        <button onClick={onBackClick}>Back</button>
        <button onClick={onNextClick}>Next</button>
      </div>
      {/* 
        A little spacer to allow the consumer page to scroll right to the bottom,
        without the consumer needed to know the height of the navbar
        */}
      <div style={{ height: "80px" }}></div>
    </>
  );
}

export default WizardNavigation;
