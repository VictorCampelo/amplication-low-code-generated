import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StockFundamentalsHistoryService } from "./stockFundamentalsHistory.service";
import { StockFundamentalsHistoryControllerBase } from "./base/stockFundamentalsHistory.controller.base";

@swagger.ApiTags("stockFundamentalsHistories")
@common.Controller("stockFundamentalsHistories")
export class StockFundamentalsHistoryController extends StockFundamentalsHistoryControllerBase {
  constructor(
    protected readonly service: StockFundamentalsHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
