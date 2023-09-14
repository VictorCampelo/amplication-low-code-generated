import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StockFundamentalModuleBase } from "./base/stockFundamental.module.base";
import { StockFundamentalService } from "./stockFundamental.service";
import { StockFundamentalController } from "./stockFundamental.controller";
import { StockFundamentalResolver } from "./stockFundamental.resolver";

@Module({
  imports: [StockFundamentalModuleBase, forwardRef(() => AuthModule)],
  controllers: [StockFundamentalController],
  providers: [StockFundamentalService, StockFundamentalResolver],
  exports: [StockFundamentalService],
})
export class StockFundamentalModule {}
