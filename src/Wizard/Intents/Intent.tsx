import { Intent as IntentType } from "../../entities/intent/types";

type Props = {
  intent: IntentType;
  isSelected: boolean;
  onClick: () => void;
};

function Intent({ intent, isSelected, onClick }: Props) {
  return (
    <div
      style={{
        border: `1px solid black`,
        background: isSelected ? "pink" : "none",
      }}
      onClick={onClick}
    >
      <input
        type="checkbox"
        name={`select ${intent.name}`}
        checked={isSelected}
      ></input>
      <h3>{intent.name}</h3>
      <p>Description: {intent.description}</p>
      <div>
        <p>Example expressions:</p>
        {intent.trainingData.expressions.map((expression) => (
          <p>{expression.text}</p>
        ))}
      </div>
      <p>Reply: {intent.reply.text}</p>
    </div>
  );
}

export default Intent;
