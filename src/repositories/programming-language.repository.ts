import {inject} from '@loopback/core';
import {SequelizeCrudRepository} from 'loopback4-sequelize';
import {DbDataSource} from '../datasources';
import {ProgrammingLanguage, ProgrammingLanguageRelations} from '../models';

export class ProgrammingLanguageRepository extends SequelizeCrudRepository<
  ProgrammingLanguage,
  typeof ProgrammingLanguage.prototype.id,
  ProgrammingLanguageRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(ProgrammingLanguage, dataSource);
  }
}
