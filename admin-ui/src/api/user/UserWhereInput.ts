import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StrategyListRelationFilter } from "../strategy/StrategyListRelationFilter";

export type UserWhereInput = {
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  firstname?: StringNullableFilter;
  id?: IntFilter;
  lastname?: StringNullableFilter;
  role?: "ADMIN" | "USER";
  strategy?: StrategyListRelationFilter;
  updatedAt?: DateTimeFilter;
};
