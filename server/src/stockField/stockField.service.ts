import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StockFieldServiceBase } from "./base/stockField.service.base";

@Injectable()
export class StockFieldService extends StockFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
