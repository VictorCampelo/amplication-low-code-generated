import { StrategyUpdateManyWithoutUsersInput } from "./StrategyUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string;
  firstname?: string | null;
  lastname?: string | null;
  role?: "ADMIN" | "USER";
  strategy?: StrategyUpdateManyWithoutUsersInput;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
};
