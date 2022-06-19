import { useMemo, useState } from "react";
import Conversation from "components/Conversation";
import InfoBox from "components/InfoBox";
import { Checkbox, PageLayout } from "elements";
import { getIntents } from "modules/intent/selectors";
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
import { Intent as IntentType } from "modules/intent/types";

// abstract these functions here so that they could be unit tested
const toggleSelectIntent = (selectedIntent: string) => (intents: string[]) => {
  // if the intent is there, remove it, otherwise add it
  if (intents.find((intent) => intent === selectedIntent)) {
    return intents.filter((intent) => intent !== selectedIntent);
  } else {
    return [...intents, selectedIntent];
  }
};

const toggleSelectAllIntents =
  (intents: IntentType[]) => (selectedIntents: string[]) => {
    const areAllIntentsSelected = intents.every((intent) =>
      selectedIntents.find((intentId) => intent.id === intentId)
    );
    if (areAllIntentsSelected) {
      return [];
    } else {
      return intents.map((intent) => intent.id);
    }
  };

type Props = {
  onComplete: () => void;
};

function Intents({ onComplete }: Props) {
  // keep a list of the selected intent ids
  const [selectedIntents, setSelectedIntents] = useState<string[]>([]);

  // we know that these will never change
  // avoid calling it every render
  const intents = useMemo(getIntents, []);

  const handleIntentClick = (intentId: string) => {
    setSelectedIntents(toggleSelectIntent(intentId));
  };

  const handleSelectAll = () => {
    setSelectedIntents(toggleSelectAllIntents(intents));
  };

  return (
    <PageLayout>
      <Title>Intents</Title>
      <SubTitle>
        Select the user intents that you would like the digital assistant to
        understand.
      </SubTitle>
      {/* This info box maybe looks a bit too much like the other white boxes and could do with a better styling */}
      <InfoBox label={"What is an Intent?"}>
        {/* I thought the description of an intent in the task was very clear so I basically copied it */}
        <ExampleDesc>
          When a user writes a message in the chat, our AI analyzes that message
          to understand the users <em>Intent</em> and give the appropriate
          reply, for example:
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
      <WizardNavigation
        onBackClick={() => {}}
        onNextClick={() => {
          // send the selected intents to the server
        }}
      />
    </PageLayout>
  );
}

export default Intents;
