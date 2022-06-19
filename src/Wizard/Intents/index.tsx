import { useMemo, useState } from "react";
import Conversation from "../../components/Conversation";
import InfoBox from "../../components/InfoBox";
import { Checkbox, PageLayout } from "../../elements";
import { getIntents } from "../../entities/intent/selectors";
import WizardNavigation from "../WizardNavigation";
import {
  ExampleDesc,
  SelectAllLabel,
  SelectionSummary,
  SubTitle,
  SummaryWrapper,
  Title,
} from "./elements";
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
      <Title>Intents</Title>
      <SubTitle>
        Select the user intents that you would like the digital assistant to
        understand.
      </SubTitle>
      <InfoBox label={"What is an Intent?"}>
        {/* I thought the description of an intent in the task was very clear so I basically copied it */}
        <ExampleDesc>
          When a user writes a message in the chat, our AI analyzes that message
          to understand the users <em>Intent</em> and give the apropriate reply,
          for example:
        </ExampleDesc>
        <Conversation
          conversation={[
            { text: "Hello", speaker: "USER" },
            {
              text: "*understands that this is a Greeting*",
              speaker: "ASSISTANT",
            },
            { text: "Hello :) How can I help you?", speaker: "ASSISTANT" },
          ]}
        />
      </InfoBox>
      <SummaryWrapper>
        <SelectAllLabel>
          <span>Select all</span>
          <Checkbox
            name="selectAll"
            checked={intents.every((intent) =>
              selectedIntents.find((intentId) => intent.id === intentId)
            )}
            onChange={handleSelectAll}
          />
        </SelectAllLabel>
        {/* Would maybe be better if this was fixed to the footer or something so that it's always visible... */}
        <SelectionSummary>{`${selectedIntents.length}/${intents.length} Intents selected`}</SelectionSummary>
      </SummaryWrapper>

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
