/* 
  This is a module which represent the Intent entity.
  It provides access to the Entity + types etc.
*/

import intents from "./intents.json";
import * as types from "./types";

export const getIntents = () => {
  return intents as types.Intent[];
};
