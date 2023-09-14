import { StockFundamentalsHistoryWhereInput } from "./StockFundamentalsHistoryWhereInput";
import { StockFundamentalsHistoryOrderByInput } from "./StockFundamentalsHistoryOrderByInput";

export type StockFundamentalsHistoryFindManyArgs = {
  where?: StockFundamentalsHistoryWhereInput;
  orderBy?: Array<StockFundamentalsHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
