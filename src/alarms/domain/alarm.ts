import { AlarmItem } from './alarm-item';
import { AlarmSeverity } from './value-objects/alarm-severity';

export class Alarm {
  public name: string;
  public severity: AlarmSeverity;
  public triggeredAt: Date;
  public isAcknowldedged = false;
  public items = new Array<AlarmItem>();

  constructor(public id: string) {}

  acknowledge() {
    this.isAcknowldedged = true;
  }

  addAlarmItem(item: AlarmItem) {
    this.items.push(item);
  }
}
