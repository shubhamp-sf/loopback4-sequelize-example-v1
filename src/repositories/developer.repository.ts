import {Getter, inject} from '@loopback/core';
import {
  DefaultCrudRepository,
  ReferencesManyAccessor,
  repository,
} from '@loopback/repository';
import {SequelizeRepository} from '../../../loopback4-sequelize';
import {DbDataSource} from '../datasources';
import {Developer, DeveloperRelations, ProgrammingLanguage} from '../models';
import {ProgrammingLanguageRepository} from './programming-language.repository';

export class DeveloperRepository extends DefaultCrudRepository<
  Developer,
  typeof Developer.prototype.id,
  DeveloperRelations
> {
  public readonly programmingLanguages: ReferencesManyAccessor<
    ProgrammingLanguage,
    typeof Developer.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('ProgrammingLanguageRepository')
    protected programmingLanguageRepositoryGetter: Getter<ProgrammingLanguageRepository>,
  ) {
    super(Developer, dataSource);
    this.programmingLanguages = this.createReferencesManyAccessorFor(
      'programmingLanguages',
      programmingLanguageRepositoryGetter,
    );
    this.registerInclusionResolver(
      'programmingLanguages',
      this.programmingLanguages.inclusionResolver,
    );
  }
}
