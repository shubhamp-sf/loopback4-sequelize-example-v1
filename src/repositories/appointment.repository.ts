import {inject} from '@loopback/core';
import {SequelizeRepository} from '../../../loopback4-sequelize/dist';
import {DbDataSource} from '../datasources';
import {Appointment, AppointmentRelations} from '../models';

export class AppointmentRepository extends SequelizeRepository<
  Appointment,
  typeof Appointment.prototype.id,
  AppointmentRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Appointment, dataSource);
  }
}
