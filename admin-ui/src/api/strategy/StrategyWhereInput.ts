import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type StrategyWhereInput = {
  author?: UserWhereUniqueInput;
  createdAt?: DateTimeFilter;
  description?: StringFilter;
  filterBy?: JsonFilter;
  id?: IntFilter;
  orderBy?: JsonFilter;
  promoted?: BooleanFilter;
  title?: StringFilter;
  updatedAt?: DateTimeFilter;
};
