import {inject} from '@loopback/core';
import {SequelizeCrudRepository} from 'loopback4-sequelize';
import {DbDataSource} from '../datasources';
import {Appointment, AppointmentRelations} from '../models';

export class AppointmentRepository extends SequelizeCrudRepository<
  Appointment,
  typeof Appointment.prototype.id,
  AppointmentRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Appointment, dataSource);
  }
}
