import { Strategy as TStrategy } from "../api/strategy/Strategy";

export const STRATEGY_TITLE_FIELD = "title";

export const StrategyTitle = (record: TStrategy): string => {
  return record.title || String(record.id);
};
