import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { database } from './configs/files/database';
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './nest/modules/auth/auth.controller';
import { ProductModule } from './modules/product/product.module';
import { GlobalModule } from './modules/global/global.module';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(database),
    AuthModule,
    ProductModule,
    GlobalModule,
    OrderModule,
    // MulterModule.register({
    //   dest:'./uploads'
    // })
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
