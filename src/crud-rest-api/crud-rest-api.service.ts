import { Injectable } from '@nestjs/common';
import { crudRestApiData, EntityKind } from './crud-rest-api.data';

@Injectable()
export class CrudRestApiService {
  data: EntityKind[];

  constructor() {
    this.data = crudRestApiData;
  }

  // create(entity: any) {
  //   return 'This action adds a new entity';
  // }

  findAll(entityKind: string) {
    const c = this.getEntityKind(entityKind);
    // console.log('c', c);
    if (c) {
      return c.entities;
    } else {
      return [];
    }
  }

  findOne(entityKind: string, id: string) {
    const k = this.getEntityKind(entityKind);
    if (!k) {
      return null;
    }
    return k.entities.find((x) => {
      return x.id === id;
    });
  }

  // update(id: string, updateEntityDto: any) {
  //   return `This action updates a #${id} entity`;
  // }

  // remove(id: string) {
  //   return `This action removes a #${id} entity`;
  // }

  getEntityKind(kind) {
    // console.log('kind', kind);

    return this.data.find((entityKind) => {
      return entityKind.entityKind === kind;
    });
  }
}
