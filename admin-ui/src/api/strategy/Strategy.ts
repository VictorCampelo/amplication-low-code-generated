import { User } from "../user/User";
import { JsonValue } from "type-fest";

export type Strategy = {
  author?: User | null;
  createdAt: Date;
  description: string;
  filterBy: JsonValue;
  id: number;
  orderBy: JsonValue;
  promoted: boolean;
  title: string;
  updatedAt: Date;
};
