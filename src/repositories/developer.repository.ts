import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Developer, DeveloperRelations} from '../models';

export class DeveloperRepository extends DefaultCrudRepository<
  Developer,
  typeof Developer.prototype.id,
  DeveloperRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Developer, dataSource);
  }
}
