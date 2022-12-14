import {Entity, model, property} from '@loopback/repository';

@model()
export class Developer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;


  constructor(data?: Partial<Developer>) {
    super(data);
  }
}

export interface DeveloperRelations {
  // describe navigational properties here
}

export type DeveloperWithRelations = Developer & DeveloperRelations;
