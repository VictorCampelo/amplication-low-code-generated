/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsDate, IsInt, IsString, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@ObjectType()
class StockFundamental {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  c5y!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  cotacao!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  divbpatr!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  dy!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  evebit!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  evebitda!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  liq2m!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  liqc!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  mrgebit!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  mrgliq!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  pa!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  pacl!: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  papel!: string | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  patrliq!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  pcg!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  pebit!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  pl!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  psr!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  pvp!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  roe!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  roic!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { StockFundamental as StockFundamental };
