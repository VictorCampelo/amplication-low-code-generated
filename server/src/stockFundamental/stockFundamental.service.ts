import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StockFundamentalServiceBase } from "./base/stockFundamental.service.base";

@Injectable()
export class StockFundamentalService extends StockFundamentalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
