import {inject} from '@loopback/core';
import {SequelizeRepository} from '../../../loopback4-sequelize/dist';
import {DbDataSource} from '../datasources';
import {ProgrammingLanguage, ProgrammingLanguageRelations} from '../models';

export class ProgrammingLanguageRepository extends SequelizeRepository<
  ProgrammingLanguage,
  typeof ProgrammingLanguage.prototype.id,
  ProgrammingLanguageRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(ProgrammingLanguage, dataSource);
  }
}
