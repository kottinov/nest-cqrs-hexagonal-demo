import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationBootstrapOptions } from 'src/common/application-bootstrap-options.interface';

@Module({})
export class CoreModule {
  static forRoot(options: ApplicationBootstrapOptions) {
    const imports =
      options.driver === 'orm'
        ? [
            TypeOrmModule.forRootAsync({
              imports: [ConfigModule],
              inject: [ConfigService],
              useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DATABASE_HOST'),
                port: configService.get('DATABASE_PORT'),
                username: configService.get('DATABASE_USERNAME'),
                password: configService.get('DATABASE_PASSWORD'),
                database: configService.get('DATABASE_NAME'),
                autoLoadEntities: true,
                synchronize: true,
              }),
            }),
          ]
        : [];

    return {
      module: CoreModule,
      imports,
    };
  }
}
