import { SortOrder } from "../../util/SortOrder";

export type StockFieldOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  sector?: SortOrder;
  segment?: SortOrder;
  subsector?: SortOrder;
  ticker?: SortOrder;
  updatedAt?: SortOrder;
};
