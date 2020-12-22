import { Injectable } from '@nestjs/common';

@Injectable()
export class CrudRestApiService {
  data = new Map<string, Map<string, any>>();

  constructor() {
    this.setEntity('entityA', '1', { id: '1', name: 'bob', age: 14 });
    this.setEntity('entityA', '2', { id: '2', name: 'jon', age: 24 });
  }

  // create(entity: any) {
  //   return 'This action adds a new entity';
  // }

  // update(id: string, updateEntityDto: any) {
  //   return `This action updates a #${id} entity`;
  // }

  // remove(id: string) {
  //   return `This action removes a #${id} entity`;
  // }

  setEntity(kind: string, id: string, value: any) {
    let map = this.data.get(kind);
    if (!map) {
      map = new Map<string, any>();
      this.data.set(kind, map);
    }
    map.set(id, value);
  }

  getEntity(kind: string, id: string) {
    const map = this.data.get(kind);
    if (!map) {
      return null;
    }
    return map.get(id);
  }

  getAllEntities(kind: string) {
    const map = this.data.get(kind);
    if (!map) {
      return [];
    }
    const result: any[] = [];
    map.forEach((value) => {
      result.push(value);
    });
    return result;
  }
}
