import {Getter, inject} from '@loopback/core';
import {
  HasManyThroughRepositoryFactory,
  repository,
} from '@loopback/repository';
import {SequelizeRepository} from '../../../loopback4-sequelize/dist';
import {DbDataSource} from '../datasources';
import {Appointment, Doctor, DoctorRelations, Patient} from '../models';
import {AppointmentRepository} from './appointment.repository';
import {PatientRepository} from './patient.repository';

export class DoctorRepository extends SequelizeRepository<
  Doctor,
  typeof Doctor.prototype.id,
  DoctorRelations
> {
  public readonly patients: HasManyThroughRepositoryFactory<
    Patient,
    typeof Patient.prototype.id,
    Appointment,
    typeof Doctor.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('AppointmentRepository')
    protected appointmentRepositoryGetter: Getter<AppointmentRepository>,
    @repository.getter('PatientRepository')
    protected patientRepositoryGetter: Getter<PatientRepository>,
  ) {
    super(Doctor, dataSource);
    this.patients = this.createHasManyThroughRepositoryFactoryFor(
      'patients',
      patientRepositoryGetter,
      appointmentRepositoryGetter,
    );
    this.registerInclusionResolver('patients', this.patients.inclusionResolver);
  }
}
