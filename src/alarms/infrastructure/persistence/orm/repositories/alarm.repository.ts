import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlarmRepository } from 'src/alarms/application/ports/create-alarm.repository';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmMapper } from '../mappers/alarm.mapper';
import { AlarmEntity } from '../entities/alarm-entity';

@Injectable()
export class OrmAlarmRepository implements CreateAlarmRepository {
  constructor(
    @InjectRepository(AlarmEntity)
    private readonly alarmRepository: Repository<AlarmEntity>,
  ) {}

  async findAll(): Promise<Alarm[]> {
    return (await this.alarmRepository.find()).map((entity) =>
      AlarmMapper.toDomain(entity),
    );
  }

  async save(alarm: Alarm): Promise<Alarm> {
    return AlarmMapper.toDomain(
      await this.alarmRepository.save(AlarmMapper.toPersistence(alarm)),
    );
  }
}
