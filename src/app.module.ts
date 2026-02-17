// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { PrismaModule } from '../prisma/prisma.module';
// import { UserModule } from '../prisma/prisma.module';
// import { AppService } from './app.service';

// @Module({
//    imports: [PrismaModule, UserModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}



import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';

import { UserModule } from './user/user.module';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [PrismaModule, UserModule, PropertyModule],
})
export class AppModule {}