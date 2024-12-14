import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Like, Repository } from 'typeorm';
import { CreateUserParams, UpdateUserParams } from '../../../utils/types';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findUsers() {
    return this.userRepository.find(); //async
  }

  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userDetails,
      createdAt: new Date(),
    });

    return this.userRepository.save(newUser); //async
  }

  updateUser(id: number, updateUserDetails: UpdateUserParams) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }

  async searchUsers(searchTerm: string): Promise<User[]> {
    const users = await this.userRepository.find({
      where: [
        { username: Like(`%${searchTerm}%`) },
        { state: Like(`%${searchTerm}%`) },
        { occupation: Like(`%${searchTerm}%`) },
      ],
    });

    return users;
  }
}
