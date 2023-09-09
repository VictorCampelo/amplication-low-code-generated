import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StockFundamentalService } from "./stockFundamental.service";
import { StockFundamentalControllerBase } from "./base/stockFundamental.controller.base";

@swagger.ApiTags("stockFundamentals")
@common.Controller("stockFundamentals")
export class StockFundamentalController extends StockFundamentalControllerBase {
  constructor(
    protected readonly service: StockFundamentalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
