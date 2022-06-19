import { Examples, ExamplesText, Question, Response } from "./elements";

/* 
  Abstracted into a re-usable "Conversation" component.
  We could imagine in a real-life setting that there could be an entire "Conversation" module.
*/

type Props = {
  conversation: { text: string; speaker: "USER" | "ASSISTANT" }[];
};

function Conversation({ conversation }: Props) {
  return (
    <Examples>
      <ExamplesText>EXAMPLE</ExamplesText>
      {conversation.map((message) =>
        message.speaker === "USER" ? (
          <Question>
            {message.text}
            <span>USER</span>
          </Question>
        ) : (
          <Response>
            {message.text}
            <span>ASSISTANT</span>
          </Response>
        )
      )}
    </Examples>
  );
}

export default Conversation;
