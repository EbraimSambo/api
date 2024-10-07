import { CreateUserInput } from "../dto/create-user.input";
import { User } from "../entities/user.entity";



export  interface IUserRepo {
    create(createUserInput: CreateUserInput): Promise<User>
}