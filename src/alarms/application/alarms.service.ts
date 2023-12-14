import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { AlarmRepository } from './ports/alarm.repository';
import { CreateAlarmCommand } from './commands/create-alarm.command';

@Injectable()
export class AlarmsService {
  constructor(
    private readonly alarmRepository: AlarmRepository,
    private readonly commandBus: CommandBus,
  ) {}

  create(createAlarmCommand: CreateAlarmCommand) {
    return this.commandBus.execute(createAlarmCommand);
  }

  findAll() {
    return this.alarmRepository.findAll();
  }
}
