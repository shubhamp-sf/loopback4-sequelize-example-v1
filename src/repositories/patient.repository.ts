import {inject} from '@loopback/core';
import {SequelizeCrudRepository} from 'loopback4-sequelize';
import {DbDataSource} from '../datasources';
import {Patient, PatientRelations} from '../models';

export class PatientRepository extends SequelizeCrudRepository<
  Patient,
  typeof Patient.prototype.id,
  PatientRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Patient, dataSource);
  }
}
