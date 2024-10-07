import { DatabaseService } from "src/database/database.service";
import { CreateUserInput } from "../dto/create-user.input";
import { IUserRepo } from "../interface";
import { User } from "../entities/user.entity";
import { hash } from "bcryptjs";
import { Injectable } from "@nestjs/common";




@Injectable()
export class UserRepository implements IUserRepo {
  
    constructor(private readonly dataBaseService: DatabaseService) {}
    async create(createUserInput: CreateUserInput): Promise<User> {
         return await this.dataBaseService.user.create({
             data: {
                 name: createUserInput.name,
                 email: createUserInput.email,
                 password: createUserInput.password
             }
         });
     }
}