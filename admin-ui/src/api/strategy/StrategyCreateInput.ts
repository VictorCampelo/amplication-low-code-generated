import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type StrategyCreateInput = {
  author?: UserWhereUniqueInput | null;
  description: string;
  filterBy?: InputJsonValue;
  orderBy?: InputJsonValue;
  promoted: boolean;
  title: string;
};
