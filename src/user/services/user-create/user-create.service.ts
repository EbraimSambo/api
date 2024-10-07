import { Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserInput } from 'src/user/dto/create-user.input';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/repositories/user.repository';

@Injectable()
export class UserCreateService {
    constructor(private readonly dataBaseService: DatabaseService) {}
    async create(createUserInput: CreateUserInput): Promise<User> {
         return await this.dataBaseService.user.create({
             data: {
                 name: createUserInput.name,
                 email: createUserInput.email,
                 password: await hash(createUserInput.password, 30)
             }
         });
     }
}
