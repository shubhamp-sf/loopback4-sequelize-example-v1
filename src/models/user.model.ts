import {Entity, hasOne, model, property} from '@loopback/repository';
import {TodoList} from './todo-list.model';

@model()
export class User extends Entity {
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

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
    required: true,
  })
  age: number;

  @property({
    type: 'boolean',
    default: false,
    name: 'is_active',
  })
  active?: boolean;

  @hasOne(() => TodoList, {keyTo: 'user'})
  todoList: TodoList;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
