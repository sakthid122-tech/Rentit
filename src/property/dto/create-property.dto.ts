import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty()
  propertyType: string;

  @IsString()
  @IsNotEmpty()
  propertyName: string;

  @IsString()
  @IsNotEmpty()
  bhkType: string;

  @IsNumber()
  @Min(0)
  floorNumber: number;

  @IsNumber()
  @Min(0)
  totalFloors: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  @IsNotEmpty()
  preferredTenant: string;

  @IsNumber()
  builtUpArea: number;

  @IsString()
  @IsNotEmpty()
  propertyAge: string;

  @IsString()
  @IsNotEmpty()
  facing: string;

  @IsNumber()
  noticePeriod: number;

  @IsString()
  @IsNotEmpty()
  occupancy: string;

  @IsDateString()
  availableFrom: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  locality: string;

  @IsOptional()
  @IsString()
  landmark?: string;

  @IsString()
  @IsNotEmpty()
  pincode: string;
}
