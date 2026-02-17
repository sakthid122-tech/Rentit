import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePropertyDto } from './dto/create-property.dto';




@Injectable()
export class PropertyService {
  constructor(private prisma: PrismaService) {}

  createProperty(data: CreatePropertyDto) {
    return this.prisma.property.create({
      data: {
        propertyType: data.propertyType,
        propertyName: data.propertyName,
        bhkType: data.bhkType,
        floorNumber: Number(data.floorNumber),
        totalFloors: Number(data.totalFloors),
        description: data.description,
        preferredTenant: data.preferredTenant,
        builtUpArea: Number(data.builtUpArea),
        propertyAge: data.propertyAge,
        facing: data.facing,
        noticePeriod: Number(data.noticePeriod),
        occupancy: data.occupancy,
        availableFrom: new Date(data.availableFrom),
        location: data.location,
        street: data.street,
        locality: data.locality,
        landmark: data.landmark,
        pincode: data.pincode,
      },
    });
  }

  getAllProperties() {
    return this.prisma.property.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  getPropertyById(id: number) {
    return this.prisma.property.findUnique({
      where: { id },
    });
  }

  deleteProperty(id: number) {
    return this.prisma.property.delete({
      where: { id },
    });
  }
}
