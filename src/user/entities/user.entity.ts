import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class User {

  @Field(() => Int)
  id: number;

  @Field(() => ID)
  uuid: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  password: string;
  
  @Field(() => String)
  email: string;
}
