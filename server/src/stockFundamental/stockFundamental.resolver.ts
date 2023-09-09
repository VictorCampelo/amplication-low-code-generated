import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StockFundamentalResolverBase } from "./base/stockFundamental.resolver.base";
import { StockFundamental } from "./base/StockFundamental";
import { StockFundamentalService } from "./stockFundamental.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StockFundamental)
export class StockFundamentalResolver extends StockFundamentalResolverBase {
  constructor(
    protected readonly service: StockFundamentalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
