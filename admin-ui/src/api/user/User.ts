import { Strategy } from "../strategy/Strategy";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string;
  firstname: string | null;
  id: number;
  lastname: string | null;
  role?: "ADMIN" | "USER";
  strategy?: Array<Strategy>;
  updatedAt: Date;
  username: string;
  roles: JsonValue;
};
