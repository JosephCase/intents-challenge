import intents from "./intents.json";
import * as types from "./types";

export const getIntents = () => {
  return intents as types.Intent[];
};
