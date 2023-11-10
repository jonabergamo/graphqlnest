import { Pet } from 'src/pets/pet.entity';
import { CreateOwnerInput } from './create-owner.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOwnerInput extends PartialType(CreateOwnerInput) {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => Pet)
  pets?: Pet;
}
