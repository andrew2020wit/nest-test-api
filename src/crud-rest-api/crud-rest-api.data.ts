export const crudRestApiData: EntityKind[] = [
  {
    entityKind: 'entityA',
    entities: [
      { id: '1', name: 'Bob', age: '32' },
      { id: '2', name: 'Jon', age: '42' },
    ],
  },
];

export class EntityKind {
  entityKind: string;
  entities: any[];
}

// class SomeEntity {
//   id: string;
// }
