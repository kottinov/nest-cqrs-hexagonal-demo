import { AlarmItemEntity } from './alarm-item.entity';

export class AlarmEntity {
  id: string;
  name: string;
  severity: string;
  triggeredAt: Date;
  isAcknowldedged: boolean;
  items: Array<AlarmItemEntity>;
}
