import { useMemo, useState } from "react";
import { Checkbox, PageLayout } from "../../elements";
import { getIntents } from "../../entities/intent/selectors";
import WizardNavigation from "../WizardNavigation";
import Intent from "./Intent";

type Props = {
  onComplete: () => void;
};

function Intents({ onComplete }: Props) {
  // keep a list of the selected intent ids
  const [selectedIntents, setSelectedIntents] = useState<string[]>([]);

  // we know that these will never change
  const intents = useMemo(getIntents, []);

  // use callback?
  const handleIntentClick = (intentId: string) => {
    setSelectedIntents((state) => {
      // if the intent is there, remove it, otherwise add it
      if (state.find((intent) => intent === intentId)) {
        return state.filter((intent) => intent !== intentId);
      } else {
        return [...state, intentId];
      }
    });
  };

  const handleSelectAll = () => {
    setSelectedIntents((state) => {
      const areAllIntentsSelected = intents.every((intent) =>
        state.find((intentId) => intent.id === intentId)
      );
      if (areAllIntentsSelected) {
        return [];
      } else {
        return intents.map((intent) => intent.id);
      }
    });
  };

  return (
    <PageLayout>
      <h2>Intents</h2>
      <p>
        Select the user intents that you would like the digital assistent to
        understand.
      </p>
      <div>
        {/* I thought the description of an intent in the task was very clear so I basically copied it */}
        <p>
          <span>info icon</span>
          <span>
            When a user writes a message in the chat, our AI analyzes that
            message to understand the users <b>intent</b> and give the
            appropriate reply, for example:
          </span>
          <span>{`> User: "Hello"`}</span>
          <span>{`*AI understands that this is a Greeting*`}</span>
          <span>{`> AI: "Hello :) How can I help you?"`}</span>
        </p>
      </div>
      <label>
        <span>Select all:</span>
        <Checkbox
          name="selectAll"
          checked={intents.every((intent) =>
            selectedIntents.find((intentId) => intent.id === intentId)
          )}
          onChange={handleSelectAll}
        />
      </label>

      {intents.map((intent) => (
        <Intent
          intent={intent}
          isSelected={Boolean(
            selectedIntents.find((intentId) => intentId === intent.id)
          )}
          onClick={() => handleIntentClick(intent.id)}
        />
      ))}
      <WizardNavigation onBackClick={() => {}} onNextClick={() => {}} />
    </PageLayout>
  );
}

export default Intents;
