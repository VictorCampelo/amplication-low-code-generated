/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StockFundamentalsHistoryWhereUniqueInput } from "./StockFundamentalsHistoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { StockFundamentalsHistoryUpdateInput } from "./StockFundamentalsHistoryUpdateInput";

@ArgsType()
class UpdateStockFundamentalsHistoryArgs {
  @ApiProperty({
    required: true,
    type: () => StockFundamentalsHistoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StockFundamentalsHistoryWhereUniqueInput)
  @Field(() => StockFundamentalsHistoryWhereUniqueInput, { nullable: false })
  where!: StockFundamentalsHistoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => StockFundamentalsHistoryUpdateInput,
  })
  @ValidateNested()
  @Type(() => StockFundamentalsHistoryUpdateInput)
  @Field(() => StockFundamentalsHistoryUpdateInput, { nullable: false })
  data!: StockFundamentalsHistoryUpdateInput;
}

export { UpdateStockFundamentalsHistoryArgs as UpdateStockFundamentalsHistoryArgs };