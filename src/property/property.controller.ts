import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';

@Controller('properties')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  @Post()
  create(@Body() body: CreatePropertyDto) {
    return this.propertyService.createProperty(body);
  }

  @Get()
  getAll() {
    return this.propertyService.getAllProperties();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.propertyService.getPropertyById(Number(id));
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.propertyService.deleteProperty(Number(id));
  }
}
