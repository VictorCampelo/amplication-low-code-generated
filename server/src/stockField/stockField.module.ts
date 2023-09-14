import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StockFieldModuleBase } from "./base/stockField.module.base";
import { StockFieldService } from "./stockField.service";
import { StockFieldController } from "./stockField.controller";
import { StockFieldResolver } from "./stockField.resolver";

@Module({
  imports: [StockFieldModuleBase, forwardRef(() => AuthModule)],
  controllers: [StockFieldController],
  providers: [StockFieldService, StockFieldResolver],
  exports: [StockFieldService],
})
export class StockFieldModule {}
