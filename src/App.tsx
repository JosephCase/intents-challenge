import { useState } from "react";
import intents from "./intent/intents.json";

function App() {
  // keep a list of the selected intent ids
  const [selectedIntents, setSelectedIntents] = useState<string[]>([]);

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
    <div>
      <label>
        <span>Select all:</span>
        <input
          type="checkbox"
          name="selectAll"
          checked={intents.every((intent) =>
            selectedIntents.find((intentId) => intent.id === intentId)
          )}
          onChange={handleSelectAll}
        ></input>
      </label>

      {intents.map((intent) => (
        <div
          style={{
            border: `1px solid black`,
            background: selectedIntents.find(
              (intentId) => intentId === intent.id
            )
              ? "pink"
              : "none",
          }}
          onClick={() => handleIntentClick(intent.id)}
        >
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
      ))}
    </div>
  );
}

export default App;
