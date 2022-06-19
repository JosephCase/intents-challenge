import Conversation from "components/Conversation";
import { Checkbox } from "elements";
import { Intent as IntentType } from "modules/intent/types";
import {
  Description,
  Details, Expressions,
  InfoWrapper,
  Name, Tile
} from "./elements";

type Props = {
  intent: IntentType;
  isSelected: boolean;
  onClick: () => void;
};

function Intent({ intent, isSelected, onClick }: Props) {
  const expressions = intent.trainingData.expressions;

  return (
    <Tile isSelected={isSelected} onClick={onClick}>
      <Checkbox name={`select ${intent.name}`} checked={isSelected} />
      <InfoWrapper>
        <Details>
          <Name>{intent.name}</Name>
          <Description>{intent.description}</Description>
          <Expressions>
            <span>e.g.</span>
            {expressions.map((expression, i) => (
              <>
                <span>"{expression.text}"</span>
                {i !== expressions.length - 1 && <span>,</span>}
              </>
            ))}
          </Expressions>
        </Details>
        {/* This is supposed to look like a conversation. */}
        <Conversation
          conversation={[
            { text: expressions[0].text, speaker: "USER" },
            { text: intent.reply.text, speaker: "ASSISTANT" },
          ]}
        />
      </InfoWrapper>
    </Tile>
  );
}

export default Intent;
