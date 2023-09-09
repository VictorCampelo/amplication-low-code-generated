import { StockField as TStockField } from "../api/stockField/StockField";

export const STOCKFIELD_TITLE_FIELD = "sector";

export const StockFieldTitle = (record: TStockField): string => {
  return record.sector || String(record.id);
};
