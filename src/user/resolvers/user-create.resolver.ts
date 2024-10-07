import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { User } from "../entities/user.entity";
import { UserCreateService } from "../services/user-create/user-create.service";
import { CreateUserInput } from "../dto/create-user.input";



@Resolver(() => User)
export class UserCreateResolver {
  
    constructor(
        private readonly userCreateService: UserCreateService
    ){}


   
  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userCreateService.create(createUserInput);
  }
}