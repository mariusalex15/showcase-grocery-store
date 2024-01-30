import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

export const database: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: () => {
    let config: TypeOrmModuleOptions;
    config = {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'my-secret-pw',
      database: 'mysql',
      entities: [__dirname + './../../models/**/*.entity{.ts,.js}'],
      // ''
      // synchronize: true,
      logging: true,
    };

    return config;
  },
};
