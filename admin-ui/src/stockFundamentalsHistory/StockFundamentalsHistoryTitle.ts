import { StockFundamentalsHistory as TStockFundamentalsHistory } from "../api/stockFundamentalsHistory/StockFundamentalsHistory";

export const STOCKFUNDAMENTALSHISTORY_TITLE_FIELD = "papel";

export const StockFundamentalsHistoryTitle = (
  record: TStockFundamentalsHistory
): string => {
  return record.papel || String(record.id);
};
