import { StockFieldWhereInput } from "./StockFieldWhereInput";
import { StockFieldOrderByInput } from "./StockFieldOrderByInput";

export type StockFieldFindManyArgs = {
  where?: StockFieldWhereInput;
  orderBy?: Array<StockFieldOrderByInput>;
  skip?: number;
  take?: number;
};
