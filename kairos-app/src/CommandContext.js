import React from "react";

const CommandContext = React.createContext(true);

export const CommandProvider = CommandContext.Provider;
export const CommandConsumer = CommandContext.Consumer;

export default CommandContext;
