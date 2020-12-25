import { Injectable } from '@nestjs/common';

class AppUser {
  id: string;
  login: string;
  fullName: string;
  password: string;
  role: string;
}

const users: AppUser[] = [
  {
    id: 'id1',
    login: 'bob',
    fullName: 'bob b',
    password: '12',
    role: 'user',
  },
  {
    id: 'id2',
    login: 'anna',
    fullName: 'anna a',
    password: '12',
    role: 'user',
  },
  {
    id: 'id3',
    login: 'admin',
    fullName: 'admin a',
    password: '12',
    role: 'admin',
  },
];

@Injectable()
export class JwtUserService {
  findOne(login): AppUser {
    const user1 = users.find((user) => {
      return user.login === login;
    });
    const user2 = new AppUser();
    Object.assign(user2, user1);
    return user2;
  }
}
