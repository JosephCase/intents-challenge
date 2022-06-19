import Intents from "./Intents";

type Step = "INTENTS"; // imagine the name of each step would be listed here

function Wizard() {
  const handleStepComplete = (step: Step) => {
    /* 
        here the wizard would navigate to the next step.
        I would delegate the responsiblity for what each step does to that step,
        e.g. sending whatever the user did to the server.
        Once this async action is complete, the step would tell the wizard that it is complete
        the wizard would then we responsable for understanding what to do next
        */
  };

  return (
    <div>
      {/* imagine there would be routing or similar here to move between the steps */}
      <Intents onComplete={() => handleStepComplete("INTENTS")} />
    </div>
  );
}

export default Wizard;
