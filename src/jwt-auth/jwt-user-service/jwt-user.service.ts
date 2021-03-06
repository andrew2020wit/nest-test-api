import { Injectable } from '@nestjs/common';

class AppUser {
  id: string;
  login: string;
  fullName: string;
  password: string;
  role: string;
}

export class UserProfile {
  id: string;
  fullName: string;
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
  findOneByLogin(login): AppUser {
    const user1 = users.find((user) => {
      return user.login === login;
    });
    const user2 = new AppUser();
    Object.assign(user2, user1);
    return user2;
  }

  getUserProfile(id): UserProfile {
    const user1 = users.find((user) => {
      return user.id === id;
    });
    if (user1) {
      return { fullName: user1.fullName, role: user1.role, id: user1.id };
    } else {
      return null;
    }
  }
}
