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
import { StockFundamentalWhereUniqueInput } from "./StockFundamentalWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { StockFundamentalUpdateInput } from "./StockFundamentalUpdateInput";

@ArgsType()
class UpdateStockFundamentalArgs {
  @ApiProperty({
    required: true,
    type: () => StockFundamentalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StockFundamentalWhereUniqueInput)
  @Field(() => StockFundamentalWhereUniqueInput, { nullable: false })
  where!: StockFundamentalWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => StockFundamentalUpdateInput,
  })
  @ValidateNested()
  @Type(() => StockFundamentalUpdateInput)
  @Field(() => StockFundamentalUpdateInput, { nullable: false })
  data!: StockFundamentalUpdateInput;
}

export { UpdateStockFundamentalArgs as UpdateStockFundamentalArgs };
