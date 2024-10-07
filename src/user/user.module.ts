import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './resolvers/user.resolver';
import { UserCreateService } from './services/user-create/user-create.service';
import { UserRepository } from './repositories/user.repository';
import { DatabaseService } from 'src/database/database.service';
import { UserCreateResolver } from './resolvers/user-create.resolver';

@Module({
  providers: [
    UserResolver, 
    UserService, 
    UserCreateService, 
    UserRepository, 
    DatabaseService,
    UserCreateResolver
  ],
})
export class UserModule {}
