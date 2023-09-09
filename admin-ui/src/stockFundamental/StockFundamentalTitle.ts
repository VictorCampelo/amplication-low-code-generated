import { StockFundamental as TStockFundamental } from "../api/stockFundamental/StockFundamental";

export const STOCKFUNDAMENTAL_TITLE_FIELD = "papel";

export const StockFundamentalTitle = (record: TStockFundamental): string => {
  return record.papel || String(record.id);
};
