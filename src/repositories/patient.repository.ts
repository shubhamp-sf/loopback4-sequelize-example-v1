import {inject} from '@loopback/core';
import {SequelizeRepository} from '../../../loopback4-sequelize/dist';
import {DbDataSource} from '../datasources';
import {Patient, PatientRelations} from '../models';

export class PatientRepository extends SequelizeRepository<
  Patient,
  typeof Patient.prototype.id,
  PatientRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Patient, dataSource);
  }
}
