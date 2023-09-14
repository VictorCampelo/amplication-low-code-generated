import { StockFundamentalWhereInput } from "./StockFundamentalWhereInput";
import { StockFundamentalOrderByInput } from "./StockFundamentalOrderByInput";

export type StockFundamentalFindManyArgs = {
  where?: StockFundamentalWhereInput;
  orderBy?: Array<StockFundamentalOrderByInput>;
  skip?: number;
  take?: number;
};
