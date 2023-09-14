import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StockFieldWhereInput = {
  createdAt?: DateTimeFilter;
  id?: IntFilter;
  sector?: StringFilter;
  segment?: StringFilter;
  subsector?: StringFilter;
  ticker?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};
