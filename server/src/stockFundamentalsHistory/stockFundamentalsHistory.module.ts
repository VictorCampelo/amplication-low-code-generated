import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StockFundamentalsHistoryModuleBase } from "./base/stockFundamentalsHistory.module.base";
import { StockFundamentalsHistoryService } from "./stockFundamentalsHistory.service";
import { StockFundamentalsHistoryController } from "./stockFundamentalsHistory.controller";
import { StockFundamentalsHistoryResolver } from "./stockFundamentalsHistory.resolver";

@Module({
  imports: [StockFundamentalsHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [StockFundamentalsHistoryController],
  providers: [
    StockFundamentalsHistoryService,
    StockFundamentalsHistoryResolver,
  ],
  exports: [StockFundamentalsHistoryService],
})
export class StockFundamentalsHistoryModule {}
