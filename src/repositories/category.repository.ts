import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SequelizeRepository} from '../../../loopback4-sequelize/dist';
import {DbDataSource} from '../datasources';
import {Category, CategoryRelations} from '../models';

export class CategoryRepository extends SequelizeRepository<
  Category,
  typeof Category.prototype.id,
  CategoryRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Category, dataSource);
  }
}
