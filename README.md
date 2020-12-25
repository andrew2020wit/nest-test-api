# Test Api for SPA, based on NextJS

## CrudRestApiService

http://localhost:3001/api/main/crud-rest/delay/entityName/id

- delay: 0ms-3000ms
- entity - anything
- entity-id must be string
- default entity: user
- example: http://localhost:3001/api/main/crud-rest/1000/user/3

- post array of entity:
  http://localhost:3001/api/init-kind/crud-rest/entityName
  (entities must do not contain id)

## JWT Authentication

http://localhost:3001/api/jwt-auth/get-token-obj

login/pw : bob/12, anna/12, admin/12
