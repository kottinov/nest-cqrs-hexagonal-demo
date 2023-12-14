import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAlarmsQuery } from './get-alarms.query';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmRepository } from '../ports/alarm.repository';
import { Logger } from '@nestjs/common';

@QueryHandler(GetAlarmsQuery)
export class GetAlarmsQueryHandler
  implements IQueryHandler<GetAlarmsQuery, Alarm[]>
{
  constructor(private readonly alarmRepository: AlarmRepository) {}

  private readonly logger = new Logger(GetAlarmsQueryHandler.name);

  async execute(query: GetAlarmsQuery): Promise<Alarm[]> {
    this.logger.debug(`Processing get alarms query: ${JSON.stringify(query)}`);
    return this.alarmRepository.findAll();
  }
}
