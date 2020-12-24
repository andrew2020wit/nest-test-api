import { Injectable } from '@nestjs/common';
import { ResponseDto } from 'src/dto/response.dto';

@Injectable()
export class CrudRestApiService {
  data = new Map<string, Map<string, any>>();
  dataIndexCount = 1;
  idPrefix = 'id-';

  constructor() {
    this.setEntity('user', '1', { id: '1', name: 'Bob', age: 14 });
    this.setEntity('user', '2', { id: '2', name: 'Jon', age: 24 });
    this.setEntity('user', '3', { id: '3', name: 'Ivan', age: 34 });
    this.setEntity('user', '4', { id: '4', name: 'Ron', age: 44 });
    this.setEntity('user', '5', { id: '5', name: 'Anna', age: 54 });
  }

  setEntity(kind: string, id: string, value: any) {
    let map = this.data.get(kind);
    if (!map) {
      map = new Map<string, any>();
      this.data.set(kind, map);
    }
    map.set(id, value);
  }

  getEntity(kind: string, id: string) {
    const result = new ResponseDto('CrudRestApiService: getEntity');
    const map = this.data.get(kind);
    if (!map) {
      result.message = `${kind} not exist`;
      return result;
    }
    result.payload = map.get(id);
    if (result.payload) {
      result.ok = true;
    } else {
      result.message = `id ${id} of kind ${kind} not exist`;
    }

    return result;
  }

  getAllEntities(kind: string) {
    const result = new ResponseDto('CrudRestApiService: ');
    const map = this.data.get(kind);
    if (!map) {
      result.message = `kind ${kind} not exist`;
      return result;
    }
    result.payload = [];
    map.forEach((value) => {
      result.payload.push(value);
    });
    if (result.payload) {
      result.ok = true;
    } else {
      result.message = `kind ${kind} is empty`;
    }
    return result;
  }

  deleteEntity(kind: string, id: string) {
    const result = new ResponseDto('CrudRestApiService: deleteEntity');
    const map = this.data.get(kind);
    if (!map) {
      result.message = `${kind} not exist`;
      return result;
    }
    if (!map.get(id)) {
      result.message = `id ${id} of kind ${kind} not exist`;
      return result;
    }
    map.delete(id);
    result.ok = true;
    return result;
  }

  getNewId() {
    this.dataIndexCount += 1;
    return this.idPrefix + this.dataIndexCount;
  }

  createEntity(kind: string, value: any) {
    const result = new ResponseDto('CrudRestApiService: createEntity');

    if (value.id) {
      result.message = 'If id exist, you can`t create it. You must update it.';
      return result;
    }

    const id = this.getNewId();
    value.id = id;
    result.resultId = id;

    let map = this.data.get(kind);
    if (!map) {
      map = new Map<string, any>();
      this.data.set(kind, map);
    }
    map.set(id, value);
    result.ok = true;
    return result;
  }

  updateEntity(kind: string, id: string, value: any) {
    const result = new ResponseDto('CrudRestApiService: updateEntity');
    if (!id) {
      result.message = 'id is undefined';
      return result;
    }
    const map = this.data.get(kind);
    if (!map) {
      result.message = `${kind} not exist`;
      return result;
    }
    if (!map.get(id)) {
      result.message = `${id} of ${kind} not exist`;
      return result;
    }

    map.set(id, value);

    result.ok = true;
    return result;
  }

  initKind(kind: string, values: any[]) {
    const result = new ResponseDto(`initKind: ${kind}`);
    result.ok = true;
    values.forEach((value) => {
      const res = this.createEntity(kind, value);
      if (!res.ok) {
        result.ok = false;
        result.message = res.message;
      }
    });
    return result;
  }
}
