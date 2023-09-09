import { StrategyCreateNestedManyWithoutUsersInput } from "./StrategyCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email: string;
  firstname?: string | null;
  lastname?: string | null;
  role: "ADMIN" | "USER";
  strategy?: StrategyCreateNestedManyWithoutUsersInput;
  username: string;
  password: string;
  roles: InputJsonValue;
};
