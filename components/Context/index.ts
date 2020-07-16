import { createContext, Context } from "react";
import { ProviderData } from "TS/interfaces";
export const Youtube: Context<ProviderData|null> = createContext(null);
