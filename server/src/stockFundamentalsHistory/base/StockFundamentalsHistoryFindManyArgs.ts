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
import { StockFundamentalsHistoryWhereInput } from "./StockFundamentalsHistoryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { StockFundamentalsHistoryOrderByInput } from "./StockFundamentalsHistoryOrderByInput";

@ArgsType()
class StockFundamentalsHistoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => StockFundamentalsHistoryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => StockFundamentalsHistoryWhereInput, { nullable: true })
  @Type(() => StockFundamentalsHistoryWhereInput)
  where?: StockFundamentalsHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: [StockFundamentalsHistoryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [StockFundamentalsHistoryOrderByInput], { nullable: true })
  @Type(() => StockFundamentalsHistoryOrderByInput)
  orderBy?: Array<StockFundamentalsHistoryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { StockFundamentalsHistoryFindManyArgs as StockFundamentalsHistoryFindManyArgs };