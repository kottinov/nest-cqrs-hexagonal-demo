import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateAlarmRepository } from 'src/alarms/application/ports/create-alarm.repository';
import { AlarmEntity } from './entities/alarm-entity';
import { OrmAlarmRepository } from './repositories/alarm.repository';
import { AlarmItemEntity } from './entities/alarm-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AlarmEntity, AlarmItemEntity])],
  providers: [
    {
      provide: CreateAlarmRepository,
      useClass: OrmAlarmRepository,
    },
  ],
  exports: [CreateAlarmRepository],
})
export class OrmAlarmPersistenceModule {}
