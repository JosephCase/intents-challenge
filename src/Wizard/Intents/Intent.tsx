import { Checkbox } from "../../elements";
import { Intent as IntentType } from "../../entities/intent/types";
import {
  Description,
  Details,
  ExamplesText,
  Examples,
  Expressions,
  InfoWrapper,
  Name,
  Question,
  Response,
  Tile,
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
        <Examples>
          <ExamplesText>EXAMPLE</ExamplesText>
          <Question>
            {expressions[0].text}
            <span>USER</span>
          </Question>
          <Response>
            {intent.reply.text}
            <span>ASSISTANT</span>
          </Response>
        </Examples>
      </InfoWrapper>
    </Tile>
  );
}

export default Intent;
