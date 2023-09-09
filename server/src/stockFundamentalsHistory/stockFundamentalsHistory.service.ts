import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StockFundamentalsHistoryServiceBase } from "./base/stockFundamentalsHistory.service.base";

@Injectable()
export class StockFundamentalsHistoryService extends StockFundamentalsHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
