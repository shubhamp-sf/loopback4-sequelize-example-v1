import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {ProgrammingLanguage, ProgrammingLanguageRelations} from '../models';

export class ProgrammingLanguageRepository extends DefaultCrudRepository<
  ProgrammingLanguage,
  typeof ProgrammingLanguage.prototype.id,
  ProgrammingLanguageRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ProgrammingLanguage, dataSource);
  }
}
