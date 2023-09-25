import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: process.env.DB_TYPE as any,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    entities: [],
    synchronize: true,
  })],
})
export class AppModule {}
