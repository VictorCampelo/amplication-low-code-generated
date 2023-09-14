import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StockFieldService } from "./stockField.service";
import { StockFieldControllerBase } from "./base/stockField.controller.base";

@swagger.ApiTags("stockFields")
@common.Controller("stockFields")
export class StockFieldController extends StockFieldControllerBase {
  constructor(
    protected readonly service: StockFieldService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
