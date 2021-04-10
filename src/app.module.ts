import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: 'ec2-107-22-245-82.compute-1.amazonaws.com',
      port: 5432,
      username: 'pqdvtjcngdyrwz',
      password: '3f936008a1bdad681f5c8280f670c0384e36d433db44c98302196b48c74ae8b8',
      database: 'dfueojoo8sl0da',
      entities: ['dist/entities/*.entity.js'],
      synchronize: true,
      ssl: { rejectUnauthorized: false },
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
