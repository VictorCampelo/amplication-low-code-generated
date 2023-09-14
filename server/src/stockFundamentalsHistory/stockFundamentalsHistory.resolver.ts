import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StockFundamentalsHistoryResolverBase } from "./base/stockFundamentalsHistory.resolver.base";
import { StockFundamentalsHistory } from "./base/StockFundamentalsHistory";
import { StockFundamentalsHistoryService } from "./stockFundamentalsHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StockFundamentalsHistory)
export class StockFundamentalsHistoryResolver extends StockFundamentalsHistoryResolverBase {
  constructor(
    protected readonly service: StockFundamentalsHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
