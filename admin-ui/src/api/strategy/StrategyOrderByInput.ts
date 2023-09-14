import { SortOrder } from "../../util/SortOrder";

export type StrategyOrderByInput = {
  authorId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  filterBy?: SortOrder;
  id?: SortOrder;
  orderBy?: SortOrder;
  promoted?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
